/**
 * ============================================================================
 * Amazon EKS Workshop 100% Offline Client Application
 * Zero-server file:// & Web Modular Lazy-Loading Architecture.
 * Supports:
 *   - Modular On-Demand Chunk Loading (js/chunks/chunk-<module>.js)
 *   - Lazy Search Index Loading (js/search_index.js on demand)
 *   - Native Image Lazy Loading (loading="lazy" + decoding="async")
 *   - Zero-server file:// CORS bypass via dynamic script injection
 *   - Full backward compatibility with monolithic docs_bundle.js
 * ============================================================================
 */

(function () {
  'use strict';

  // State
  let currentDocId = null;
  let currentModule = 'introduction';
  let searchResults = [];
  let selectedSearchIndex = -1;

  // DOM Elements
  let sidebarEl = null;
  let contentEl = null;
  let breadcrumbsEl = null;
  let paginationEl = null;
  let searchModalEl = null;
  let searchInputEl = null;
  let searchResultsEl = null;

  // Lazy Script Loading Cache
  const loadedScripts = new Set();
  const pendingScripts = new Map();

  function loadScript(src) {
    if (loadedScripts.has(src)) {
      return Promise.resolve();
    }
    if (pendingScripts.has(src)) {
      return pendingScripts.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => {
        loadedScripts.add(src);
        pendingScripts.delete(src);
        resolve();
      };
      s.onerror = (err) => {
        pendingScripts.delete(src);
        console.warn('Script failed to load:', src, err);
        reject(err);
      };
      document.head.appendChild(s);
    });

    pendingScripts.set(src, promise);
    return promise;
  }

  function getChunkNameForDoc(docId) {
    if (window.__EKS_CHUNKS_MAP && window.__EKS_CHUNKS_MAP[docId]) {
      return window.__EKS_CHUNKS_MAP[docId];
    }
    const parts = docId.split('/');
    if (parts.length > 1) {
      return parts[0];
    }
    return 'introduction';
  }

  function ensureDocLoaded(docId) {
    window.__EKS_DOCS = window.__EKS_DOCS || {};
    if (window.__EKS_DOCS[docId]) {
      return Promise.resolve(window.__EKS_DOCS[docId]);
    }

    const chunkName = getChunkNameForDoc(docId);
    const chunkSrc = 'js/chunks/chunk-' + chunkName + '.js';

    // Show loading skeleton while downloading chunk
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="doc-loading-container">
          <div class="doc-loading-spinner"></div>
          <div class="doc-loading-text">正在按需加载【${escapeHtml(chunkName)}】模块内容...</div>
        </div>
      `;
    }

    return loadScript(chunkSrc)
      .then(() => {
        if (window.__EKS_DOCS[docId]) {
          return window.__EKS_DOCS[docId];
        }
        // Fallback: try root docs_bundle.js if chunk didn't contain it
        return loadScript('js/docs_bundle.js').then(() => window.__EKS_DOCS[docId]);
      })
      .catch(() => {
        // Fallback to docs_bundle.js
        return loadScript('js/docs_bundle.js').then(() => window.__EKS_DOCS[docId]);
      });
  }

  let searchIndexLoading = false;
  let searchIndexPromise = null;

  function ensureSearchIndexLoaded() {
    if (window.__SEARCH_INDEX && window.__SEARCH_INDEX.length) {
      return Promise.resolve();
    }
    if (searchIndexLoading && searchIndexPromise) {
      return searchIndexPromise;
    }

    searchIndexLoading = true;
    searchIndexPromise = loadScript('js/search_index.js')
      .then(() => {
        searchIndexLoading = false;
      })
      .catch((err) => {
        searchIndexLoading = false;
        console.warn('Failed to lazy load search_index.js', err);
      });

    return searchIndexPromise;
  }

  /**
   * Initialize Application
   */
  function initApp() {
    sidebarEl = document.getElementById('sidebarMenuList');
    contentEl = document.getElementById('pageContent');
    breadcrumbsEl = document.getElementById('breadcrumbsNav');
    paginationEl = document.getElementById('paginationNav');
    searchModalEl = document.getElementById('searchModal');
    searchInputEl = document.getElementById('searchModalInput');
    searchResultsEl = document.getElementById('searchResultsList');

    initTheme();
    initKeyboardShortcuts();
    initRouter();
  }

  /**
   * Theme Management (Light / Dark)
   */
  function initTheme() {
    const saved = localStorage.getItem('eks_theme') || 'light';
    setTheme(saved);
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('eks_theme', theme);
    updateThemeIcon(theme);
  }

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  function updateThemeIcon(theme) {
    const sunIcon = document.getElementById('themeIconSun');
    const moonIcon = document.getElementById('themeIconMoon');
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
      }
    }
  }

  /**
   * Router: Hash-based zero-server navigation
   */
  function normalizeHash(hash) {
    if (!hash) return '';
    let cleaned = hash.replace(/^#\/?/, '').replace(/^docs\/?/, '');
    cleaned = cleaned.replace(/\/+$/, '');
    return cleaned;
  }

  function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  function handleRoute() {
    const rawHash = window.location.hash;
    let docId = normalizeHash(rawHash);

    const homepageView = document.getElementById('homepageView');
    const docsView = document.getElementById('docsView');
    const secNav = document.getElementById('secondaryNavRow');

    if (!docId || docId === 'home' || docId === 'index') {
      document.body.classList.add('on-homepage');
      if (homepageView) homepageView.style.display = 'block';
      if (docsView) docsView.style.display = 'none';
      if (secNav) secNav.style.display = 'none';
      document.title = 'Amazon EKS Workshop';
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    document.body.classList.remove('on-homepage');
    if (homepageView) homepageView.style.display = 'none';
    if (docsView) docsView.style.display = 'flex';
    if (secNav) secNav.style.display = 'flex';

    navigateToDoc(docId, false);
  }

  window.navigateTo = function (docId) {
    window.location.hash = '#/' + docId;
  };

  function navigateToDoc(docId, updateHash = true) {
    currentDocId = docId;
    currentModule = detectModule(docId);

    if (updateHash) {
      window.location.hash = '#/' + docId;
    }

    // Update Top Module Tabs & Mode Selector immediately for responsive UI
    updateTopNav(currentModule);

    // Render Sidebar immediately
    renderSidebar(currentModule, docId);

    // On-Demand Lazy Loading of Document Payload
    ensureDocLoaded(docId)
      .then((doc) => {
        if (!doc) {
          // Try with /index appended if user linked to folder
          if (!docId.endsWith('/index') && !docId.endsWith('.md')) {
            const indexDocId = docId + '/index';
            return ensureDocLoaded(indexDocId).then((idxDoc) => {
              if (idxDoc) {
                renderDocView(indexDocId, idxDoc);
              } else {
                showDocNotFound(docId);
              }
            });
          }
          showDocNotFound(docId);
          return;
        }

        renderDocView(docId, doc);
      })
      .catch((err) => {
        console.error('Error loading doc:', docId, err);
        showDocNotFound(docId);
      });
  }

  function renderDocView(docId, doc) {
    currentDocId = docId;
    currentModule = doc.module || detectModule(docId);

    // Update document title
    document.title = (doc.title || 'Doc') + ' | Amazon EKS Workshop';

    // Render content with img lazy loading enforced
    if (contentEl) {
      contentEl.innerHTML = doc.html || doc.content || '<p>文档内容加载完成。</p>';
      
      // Ensure all images have native lazy loading attribute
      const imgs = contentEl.querySelectorAll('img');
      imgs.forEach((img) => {
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }

    // Render Breadcrumbs
    renderBreadcrumbs(doc);

    // Render Sidebar & ensure active item is visible
    renderSidebar(currentModule, docId);

    // Update Top Module Tabs & Mode Selector
    updateTopNav(currentModule);

    // Render Bottom Pagination
    renderPagination(doc);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function showDocNotFound(docId) {
    if (contentEl) {
      contentEl.innerHTML = `
        <header><h1>文档未找到</h1></header>
        <p>未能在文档库中找到指定的文档路径：<code>${escapeHtml(docId)}</code>。</p>
        <p><a href="javascript:void(0)" onclick="window.navigateTo('introduction/index')">返回首页 &rarr;</a></p>
      `;
    }
  }

  function detectModule(docId) {
    const parts = docId.split('/');
    return parts[0] || 'introduction';
  }

  /**
   * Top Navbar & Mode Selector
   */
  function updateTopNav(activeMod) {
    // 1. Update module tabs
    const tabs = document.querySelectorAll('.module-nav-tab');
    tabs.forEach(tab => {
      const mod = tab.getAttribute('data-module');
      if (mod === activeMod) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // 2. Update Mode Selector buttons
    const isAutoMode = activeMod === 'fastpaths';
    const stdBtn = document.getElementById('modeBtnStandard');
    const autoBtn = document.getElementById('modeBtnAuto');
    const switchLink = document.getElementById('modeSwitchLink');

    if (stdBtn && autoBtn) {
      if (isAutoMode) {
        stdBtn.classList.remove('active');
        autoBtn.classList.add('active');
        if (switchLink) {
          switchLink.innerText = '切换到 EKS 模块化实验 →';
          switchLink.onclick = () => window.navigateTo('introduction/index');
        }
      } else {
        stdBtn.classList.add('active');
        autoBtn.classList.remove('active');
        if (switchLink) {
          switchLink.innerText = '切换到 EKS Essentials 精简快轨 →';
          switchLink.onclick = () => window.navigateTo('fastpaths/index');
        }
      }
    }
  }

  window.switchModuleTab = function (modKey) {
    if (!window.__NAV_TREE || !window.__NAV_TREE[modKey]) {
      window.navigateTo(modKey + '/index');
      return;
    }
    const firstDoc = findFirstDocInTree(window.__NAV_TREE[modKey]);
    if (firstDoc) {
      window.navigateTo(firstDoc);
    } else {
      window.navigateTo(modKey + '/index');
    }
  };

  function findFirstDocInTree(items) {
    if (!items || !items.length) return null;
    for (const item of items) {
      if (item.id) return item.id;
      if (item.items && item.items.length) {
        const found = findFirstDocInTree(item.items);
        if (found) return found;
      }
    }
    return null;
  }

  /**
   * Left Collapsible Sidebar Tree
   */
  function renderSidebar(moduleKey, activeDocId) {
    if (!sidebarEl || !window.__NAV_TREE) return;

    const tree = window.__NAV_TREE[moduleKey];
    if (!tree) {
      sidebarEl.innerHTML = '';
      return;
    }

    sidebarEl.innerHTML = '';
    const fragment = document.createDocumentFragment();

    tree.forEach(item => {
      const node = createSidebarNode(item, activeDocId);
      fragment.appendChild(node);
    });

    sidebarEl.appendChild(fragment);

    // Scroll active link into view smoothly if offscreen
    const activeEl = sidebarEl.querySelector('.active');
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }

  function createSidebarNode(item, activeDocId) {
    const li = document.createElement('li');
    li.className = 'sidebar-item';

    if (item.type === 'category' || (item.items && item.items.length > 0)) {
      // Category Node
      const isCurrentActive = isItemOrDescendantActive(item, activeDocId);
      const isInitiallyCollapsed = !isCurrentActive;

      const headerDiv = document.createElement('div');
      headerDiv.className = 'category-header' + (isCurrentActive ? ' open' : '');

      // Title link
      const titleLink = document.createElement('a');
      titleLink.className = 'category-title-link' + (item.id === activeDocId ? ' active' : '');
      titleLink.href = 'javascript:void(0)';
      titleLink.onclick = (e) => {
        e.stopPropagation();
        if (item.id) {
          window.navigateTo(item.id);
        } else {
          toggleCategory(subUl, caretBtn);
        }
      };

      let labelHtml = '<span>' + escapeHtml(item.label || item.title || 'Category') + '</span>';
      if (item.badge) {
        const badgeClass = getBadgeClass(item.badge);
        labelHtml += '<span class="badge ' + badgeClass + '">' + escapeHtml(item.badge) + '</span>';
      }
      titleLink.innerHTML = labelHtml;
      headerDiv.appendChild(titleLink);

      // Caret button
      const caretBtn = document.createElement('button');
      caretBtn.type = 'button';
      caretBtn.className = 'category-caret-btn' + (isInitiallyCollapsed ? ' collapsed' : '');
      caretBtn.title = '展开/折叠';
      caretBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>';
      caretBtn.onclick = (e) => {
        e.stopPropagation();
        toggleCategory(subUl, caretBtn);
      };
      headerDiv.appendChild(caretBtn);

      li.appendChild(headerDiv);

      // Sub-list
      const subUl = document.createElement('ul');
      subUl.className = 'category-sublist' + (isInitiallyCollapsed ? ' collapsed' : '');
      item.items.forEach(child => {
        subUl.appendChild(createSidebarNode(child, activeDocId));
      });
      li.appendChild(subUl);

    } else {
      // Normal Document Link
      const link = document.createElement('a');
      link.className = 'sidebar-link' + (item.id === activeDocId ? ' active' : '');
      link.href = 'javascript:void(0)';
      link.onclick = () => window.navigateTo(item.id);

      let inner = '<span>' + escapeHtml(item.label || item.title || 'Doc') + '</span>';
      if (item.badge) {
        const badgeClass = getBadgeClass(item.badge);
        inner += '<span class="badge ' + badgeClass + '">' + escapeHtml(item.badge) + '</span>';
      }
      link.innerHTML = inner;
      li.appendChild(link);
    }

    return li;
  }

  function toggleCategory(subUl, caretBtn) {
    const isCollapsed = subUl.classList.toggle('collapsed');
    if (isCollapsed) {
      caretBtn.classList.add('collapsed');
    } else {
      caretBtn.classList.remove('collapsed');
    }
  }

  function isItemOrDescendantActive(item, activeDocId) {
    if (!activeDocId) return false;
    if (item.id === activeDocId) return true;
    if (item.items && item.items.length) {
      return item.items.some(child => isItemOrDescendantActive(child, activeDocId));
    }
    return false;
  }

  function getBadgeClass(badge) {
    if (badge === '实验室') return 'badge-lab';
    if (badge === '新') return 'badge-new';
    return 'badge-default';
  }

  /**
   * Breadcrumbs Navigation
   */
  function renderBreadcrumbs(doc) {
    if (!breadcrumbsEl) return;
    breadcrumbsEl.innerHTML = '';

    const ul = document.createElement('ul');
    ul.className = 'breadcrumbs';

    // Home link item
    const homeLi = document.createElement('li');
    homeLi.className = 'breadcrumbs__item';
    homeLi.innerHTML = `
      <a class="breadcrumbs__link" href="javascript:void(0)" onclick="window.navigateTo('introduction/index')" title="首页">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:text-bottom;">
          <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>
        </svg>
      </a>
    `;
    ul.appendChild(homeLi);

    // Trail items
    const trail = doc.crumbs || [doc.module, doc.title];
    trail.forEach((crumb, index) => {
      const isLast = index === trail.length - 1;
      const li = document.createElement('li');
      li.className = 'breadcrumbs__item' + (isLast ? ' breadcrumbs__item--active' : '');

      if (isLast) {
        li.innerHTML = '<span class="breadcrumbs__link">' + escapeHtml(crumb) + '</span>';
      } else {
        li.innerHTML = '<span class="breadcrumbs__link">' + escapeHtml(crumb) + '</span>';
      }
      ul.appendChild(li);
    });

    breadcrumbsEl.appendChild(ul);
  }

  /**
   * Bottom Pagination (Previous / Next)
   */
  function renderPagination(doc) {
    if (!paginationEl) return;

    let prevBtn = paginationEl.querySelector('.pagination-nav__link--prev');
    let nextBtn = paginationEl.querySelector('.pagination-nav__link--next');

    // Previous link
    if (doc.prev) {
      prevBtn.style.display = 'flex';
      prevBtn.querySelector('.pagination-nav__label').innerText = doc.prevTitle || '上一页';
      prevBtn.onclick = () => window.navigateTo(doc.prev);
    } else {
      prevBtn.style.display = 'none';
    }

    // Next link
    if (doc.next) {
      nextBtn.style.display = 'flex';
      nextBtn.querySelector('.pagination-nav__label').innerText = doc.nextTitle || '下一页';
      nextBtn.onclick = () => window.navigateTo(doc.next);
    } else {
      nextBtn.style.display = 'none';
    }
  }

  /**
   * Code Copy Action
   */
  window.copyCode = function (btn) {
    const codeBlock = btn.closest('.theme-code-block');
    if (!codeBlock) return;

    const codeEl = codeBlock.querySelector('pre code');
    if (!codeEl) return;

    const textToCopy = codeEl.innerText || codeEl.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showCopyFeedback(btn);
      }).catch(() => {
        fallbackCopy(textToCopy, btn);
      });
    } else {
      fallbackCopy(textToCopy, btn);
    }
  };

  function fallbackCopy(text, btn) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopyFeedback(btn);
    } catch (err) {
      console.error('Copy fallback failed:', err);
    }
    document.body.removeChild(textArea);
  }

  function showCopyFeedback(btn) {
    const originalHtml = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      <span>已复制!</span>
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalHtml;
    }, 2000);
  }

  /**
   * Offline Ctrl+K Modal Fuzzy Search (with On-Demand Lazy Index)
   */
  window.openSearchModal = function () {
    if (!searchModalEl) return;
    searchModalEl.classList.add('open');
    if (searchInputEl) {
      searchInputEl.value = '';
      searchInputEl.focus();
    }
    renderSearchResults('');

    // Lazy load search index on modal open
    ensureSearchIndexLoaded().then(() => {
      if (searchInputEl && searchInputEl.value) {
        renderSearchResults(searchInputEl.value);
      }
    });
  };

  window.closeSearchModal = function () {
    if (!searchModalEl) return;
    searchModalEl.classList.remove('open');
  };

  function initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        window.openSearchModal();
      }
      if (e.key === 'Escape') {
        window.closeSearchModal();
      }
      if (searchModalEl && searchModalEl.classList.contains('open')) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          moveSearchSelection(1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          moveSearchSelection(-1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          selectCurrentSearchItem();
        }
      }
    });

    if (searchModalEl) {
      searchModalEl.addEventListener('click', (e) => {
        if (e.target === searchModalEl) {
          window.closeSearchModal();
        }
      });
    }

    if (searchInputEl) {
      searchInputEl.addEventListener('input', (e) => {
        renderSearchResults(e.target.value);
      });
    }
  }

  function renderSearchResults(query) {
    query = (query || '').trim().toLowerCase();
    searchResults = [];
    selectedSearchIndex = -1;

    if (!searchResultsEl) return;

    if (!query) {
      searchResultsEl.innerHTML = '<li style="padding:16px; text-align:center; color:#94a3b8; font-size:13px;">输入关键字（支持标题、Kubectl 命令、参数）开始即时检索...</li>';
      return;
    }

    if (!window.__SEARCH_INDEX || !window.__SEARCH_INDEX.length) {
      searchResultsEl.innerHTML = `
        <li class="search-loading-hint">
          <div class="doc-loading-spinner"></div>
          <span>正在按需载入全局搜索索引...</span>
        </li>
      `;
      ensureSearchIndexLoaded().then(() => {
        if (searchInputEl && searchInputEl.value === query) {
          renderSearchResults(query);
        }
      });
      return;
    }

    const tokens = query.split(/\s+/).filter(Boolean);

    // Score and filter search index items
    const scored = [];
    for (const item of window.__SEARCH_INDEX) {
      const titleLower = (item.title || '').toLowerCase();
      const textLower = (item.text || '').toLowerCase();
      const modLower = (item.module || '').toLowerCase();
      const catLower = (item.category || '').toLowerCase();
      const headingsLower = (item.headings || []).join(' ').toLowerCase();

      let score = 0;
      let matchedAll = true;

      for (const t of tokens) {
        let tokenScore = 0;
        if (titleLower.includes(t)) tokenScore += 50;
        if (headingsLower.includes(t)) tokenScore += 30;
        if (catLower.includes(t)) tokenScore += 20;
        if (modLower.includes(t)) tokenScore += 15;
        if (textLower.includes(t)) tokenScore += 5;

        if (tokenScore === 0) {
          matchedAll = false;
          break;
        }
        score += tokenScore;
      }

      if (matchedAll && score > 0) {
        scored.push({ item, score });
      }
    }

    // Sort by score descending
    scored.sort((a, b) => b.score - a.score);
    searchResults = scored.slice(0, 15).map(s => s.item);

    if (searchResults.length === 0) {
      searchResultsEl.innerHTML = `<li style="padding:20px; text-align:center; color:#94a3b8; font-size:13.5px;">未找到与 "<strong>${escapeHtml(query)}</strong>" 相关的文档</li>`;
      return;
    }

    // Render result items
    searchResultsEl.innerHTML = '';
    searchResults.forEach((item, idx) => {
      const li = document.createElement('li');
      li.className = 'search-result-item' + (idx === 0 ? ' selected' : '');
      li.onclick = () => {
        window.closeSearchModal();
        window.navigateTo(item.id);
      };

      const titleHighlighted = highlightMatches(item.title, tokens);
      const snippet = extractSnippet(item.text, tokens);
      const snippetHighlighted = highlightMatches(snippet, tokens);

      li.innerHTML = `
        <div class="search-result-header">
          <span class="search-result-title">${titleHighlighted}</span>
          <span class="search-result-module">${escapeHtml(item.module || 'Doc')}</span>
        </div>
        <div class="search-result-snippet">${snippetHighlighted}</div>
      `;
      searchResultsEl.appendChild(li);
    });

    selectedSearchIndex = 0;
  }

  function moveSearchSelection(delta) {
    if (!searchResults.length || !searchResultsEl) return;
    const items = searchResultsEl.querySelectorAll('.search-result-item');
    if (!items.length) return;

    items[selectedSearchIndex]?.classList.remove('selected');
    selectedSearchIndex = (selectedSearchIndex + delta + items.length) % items.length;
    items[selectedSearchIndex]?.classList.add('selected');
    items[selectedSearchIndex]?.scrollIntoView({ block: 'nearest' });
  }

  function selectCurrentSearchItem() {
    if (selectedSearchIndex >= 0 && selectedSearchIndex < searchResults.length) {
      const item = searchResults[selectedSearchIndex];
      window.closeSearchModal();
      window.navigateTo(item.id);
    }
  }

  function extractSnippet(text, tokens) {
    if (!text) return '';
    const cleanText = text.replace(/\s+/g, ' ');
    const lower = cleanText.toLowerCase();

    let matchPos = -1;
    for (const t of tokens) {
      const idx = lower.indexOf(t);
      if (idx !== -1 && (matchPos === -1 || idx < matchPos)) {
        matchPos = idx;
      }
    }

    if (matchPos === -1) {
      return cleanText.slice(0, 120) + '...';
    }

    const start = Math.max(0, matchPos - 40);
    const end = Math.min(cleanText.length, matchPos + 90);
    let snippet = cleanText.slice(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < cleanText.length) snippet = snippet + '...';
    return snippet;
  }

  function highlightMatches(text, tokens) {
    if (!text) return '';
    let escaped = escapeHtml(text);
    tokens.forEach(t => {
      if (!t) return;
      const safeToken = escapeRegex(t);
      const re = new RegExp('(' + safeToken + ')', 'gi');
      escaped = escaped.replace(re, '<mark>$1</mark>');
    });
    return escaped;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Bootstrapping
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
