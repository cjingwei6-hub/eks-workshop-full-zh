window.__NAV_TREE = {
  "introduction": [
    {
      "type": "link",
      "id": "introduction/index",
      "label": "简介",
      "badge": null,
      "position": 10.0
    },
    {
      "type": "category",
      "label": "设置",
      "id": "introduction/setup/index",
      "badge": null,
      "collapsed": true,
      "position": 20.0,
      "items": [
        {
          "type": "link",
          "id": "introduction/setup/aws-event",
          "label": "在 AWS 活动中",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "category",
          "label": "在您的 AWS 账户中",
          "id": "introduction/setup/your-account/index",
          "badge": null,
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "introduction/setup/your-account/using-eksctl",
              "label": "使用 eksctl",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "introduction/setup/your-account/using-terraform",
              "label": "使用 Terraform",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "introduction/setup/your-account/cleanup",
              "label": "清理",
              "badge": null,
              "position": 90.0
            }
          ]
        }
      ]
    },
    {
      "type": "link",
      "id": "introduction/navigating-labs",
      "label": "实验室导航",
      "badge": null,
      "position": 30.0
    },
    {
      "type": "category",
      "label": "入门指南",
      "id": "introduction/getting-started/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "link",
          "id": "introduction/getting-started/about",
          "label": "示例应用程序",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "introduction/getting-started/packaging-application",
          "label": "封装组件",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "introduction/getting-started/microservices",
          "label": "Kubernetes 上的微服务",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "introduction/getting-started/first",
          "label": "部署我们的第一个组件",
          "badge": null,
          "position": 40.0
        },
        {
          "type": "link",
          "id": "introduction/getting-started/finish",
          "label": "其他组件",
          "badge": null,
          "position": 50.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Kubernetes 基础知识",
      "id": "introduction/basics/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 60.0,
      "items": [
        {
          "type": "category",
          "label": "Namespaces",
          "id": "introduction/basics/namespaces/index",
          "badge": null,
          "collapsed": true,
          "position": 10.0,
          "items": []
        },
        {
          "type": "category",
          "label": "Pods",
          "id": "introduction/basics/pods/index",
          "badge": null,
          "collapsed": true,
          "position": 20.0,
          "items": []
        },
        {
          "type": "category",
          "label": "工作负载管理",
          "id": "introduction/basics/workload-management/index",
          "badge": null,
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "introduction/basics/workload-management/deployments",
              "label": "Deployments",
              "badge": null,
              "position": 31.0
            },
            {
              "type": "link",
              "id": "introduction/basics/workload-management/statefulsets",
              "label": "StatefulSets",
              "badge": null,
              "position": 32.0
            },
            {
              "type": "link",
              "id": "introduction/basics/workload-management/daemonsets",
              "label": "DaemonSets",
              "badge": null,
              "position": 33.0
            },
            {
              "type": "link",
              "id": "introduction/basics/workload-management/jobs",
              "label": "作业和 CronJobs",
              "badge": null,
              "position": 34.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Services",
          "id": "introduction/basics/services/index",
          "badge": null,
          "collapsed": true,
          "position": 40.0,
          "items": []
        },
        {
          "type": "category",
          "label": "配置",
          "id": "introduction/basics/configuration/index",
          "badge": null,
          "collapsed": true,
          "position": 50.0,
          "items": [
            {
              "type": "category",
              "label": "ConfigMaps",
              "id": "introduction/basics/configuration/configmaps/index",
              "badge": null,
              "collapsed": true,
              "position": 10.0,
              "items": []
            },
            {
              "type": "category",
              "label": "Secrets",
              "id": "introduction/basics/configuration/secrets/index",
              "badge": null,
              "collapsed": true,
              "position": 20.0,
              "items": []
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Kustomize",
      "id": "introduction/kustomize/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 70.0,
      "items": []
    },
    {
      "type": "category",
      "label": "Helm",
      "id": "introduction/helm/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 80.0,
      "items": []
    }
  ],
  "fundamentals": [
    {
      "type": "link",
      "id": "fundamentals/index",
      "label": "基础底座",
      "badge": null,
      "position": 8.0
    },
    {
      "type": "category",
      "label": "公开应用程序",
      "id": "fundamentals/exposing/index",
      "badge": null,
      "collapsed": true,
      "position": 10.0,
      "items": [
        {
          "type": "link",
          "id": "fundamentals/exposing/aws-lb-controller",
          "label": "AWS Load Balancer Controller",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "category",
          "label": "负载均衡器",
          "id": "fundamentals/exposing/loadbalancer/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/exposing/loadbalancer/introduction",
              "label": "简介",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/loadbalancer/adding-lb",
              "label": "创建负载均衡器",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/loadbalancer/ip-mode",
              "label": "IP模式",
              "badge": null,
              "position": 40.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Ingress",
          "id": "fundamentals/exposing/ingress/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 40.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/exposing/ingress/introduction",
              "label": "简介",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/ingress/adding-ingress",
              "label": "创建Ingress",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/ingress/external-dns",
              "label": "外部 DNS",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/ingress/multiple-ingress",
              "label": "多个Ingress图案",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Gateway API",
          "id": "fundamentals/exposing/gateway-api/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 50.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/exposing/gateway-api/introduction",
              "label": "部署控制器",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/gateway-api/exposing-ui",
              "label": "暴露 UI",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/gateway-api/path-based-routing",
              "label": "基于路径的路由",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/exposing/gateway-api/canary",
              "label": "金丝雀Deployment",
              "badge": null,
              "position": 30.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "存储",
      "id": "fundamentals/storage/index",
      "badge": null,
      "collapsed": true,
      "position": 20.0,
      "items": [
        {
          "type": "category",
          "label": "Amazon EBS",
          "id": "fundamentals/storage/ebs/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/ebs/statefulset",
              "label": "StatefulSets",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/ebs/ebs-csi-driver",
              "label": "EBSCSI Driver",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/ebs/statefulset-with-ebs",
              "label": "StatefulSet 与 EBS 卷",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Amazon EFS",
          "id": "fundamentals/storage/efs/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/efs/existing-architecture",
              "label": "现有架构",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/efs/efs-csi-driver",
              "label": "EFSCSI Driver",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/efs/deployment-with-efs",
              "label": "使用 EFS 进行动态配置",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Amazon S3 的安装点",
          "id": "fundamentals/storage/mountpoint-s3/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/mountpoint-s3/existing-architecture",
              "label": "现有架构",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/mountpoint-s3/mountpoint-s3-csi-driver",
              "label": "Amazon S3 的安装点",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/mountpoint-s3/deployment-with-mountpoint-for-amazon-s3",
              "label": "使用 S3 进行持久对象存储",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Amazon S3 文件",
          "id": "fundamentals/storage/s3-files/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 35.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/s3-files/existing-architecture",
              "label": "现有架构",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/s3-files/s3-files-csi-driver",
              "label": "S3文件CSI Driver",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/s3-files/static-vs-dynamic-provisioning",
              "label": "静态与动态配置",
              "badge": null,
              "position": 25.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/s3-files/deployment-with-s3-files",
              "label": "使用 S3 文件进行静态配置",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Amazon FSx 用于 OpenZFS",
          "id": "fundamentals/storage/fsx-for-openzfs/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 40.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-openzfs/existing-architecture",
              "label": "现有架构",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-openzfs/fsxz-csi-driver",
              "label": "OpenZFS 的 FSx CSI Driver",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-openzfs/deployment-with-fsxz",
              "label": "使用 FSx for OpenZFS 进行动态配置",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Amazon FSx 光泽",
          "id": "fundamentals/storage/fsx-for-lustre/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 50.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-lustre/existing-architecture",
              "label": "现有架构",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-lustre/fsxl-csi-driver",
              "label": "FSx光泽CSI Driver",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-lustre/deployment-with-fsxl",
              "label": "使用 FSx for Lustre 进行动态配置",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Amazon FSx 适用于 NetApp ONTAP",
          "id": "fundamentals/storage/fsx-for-netapp-ontap/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 50.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-netapp-ontap/existing-architecture",
              "label": "现有架构",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-netapp-ontap/fsxn-csi-driver",
              "label": "适用于 NetApp ONTAP CSI Driver 的 FSx",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/storage/fsx-for-netapp-ontap/deployment-with-fsxn",
              "label": "使用 FSx 进行 NetApp ONTAP 动态配置",
              "badge": null,
              "position": 30.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "计算",
      "id": "fundamentals/compute/index",
      "badge": null,
      "collapsed": true,
      "position": 40.0,
      "items": [
        {
          "type": "category",
          "label": "Managed Node Groups",
          "id": "fundamentals/compute/managed-node-groups/index",
          "badge": null,
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "category",
              "label": "MNG基础知识",
              "id": "fundamentals/compute/managed-node-groups/basics/index",
              "badge": "实验室",
              "collapsed": true,
              "position": 10.0,
              "items": [
                {
                  "type": "category",
                  "label": "添加节点",
                  "id": "fundamentals/compute/managed-node-groups/basics/adding-nodes/index",
                  "badge": null,
                  "collapsed": true,
                  "position": 10.0,
                  "items": []
                },
                {
                  "type": "category",
                  "label": "Pod 亲和力与反亲和力",
                  "id": "fundamentals/compute/managed-node-groups/basics/affinity/index",
                  "badge": null,
                  "collapsed": true,
                  "position": 30.0,
                  "items": []
                },
                {
                  "type": "category",
                  "label": "升级 AMI",
                  "id": "fundamentals/compute/managed-node-groups/basics/upgrades/index",
                  "badge": null,
                  "collapsed": true,
                  "position": 60.0,
                  "items": []
                }
              ]
            },
            {
              "type": "category",
              "label": "集群自动缩放器 (CA)",
              "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/index",
              "badge": "实验室",
              "collapsed": true,
              "position": 10.0,
              "items": [
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/install",
                  "label": "安装",
                  "badge": null,
                  "position": 30.0
                },
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/test-ca",
                  "label": "使用 CA 进行缩放",
                  "badge": null,
                  "position": 40.0
                },
                {
                  "type": "category",
                  "label": "集群预留空间",
                  "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/overprovisioning/index",
                  "badge": null,
                  "collapsed": true,
                  "position": 50.0,
                  "items": [
                    {
                      "type": "link",
                      "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/overprovisioning/how-it-works",
                      "label": "工作原理",
                      "badge": null,
                      "position": 30.0
                    },
                    {
                      "type": "link",
                      "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/overprovisioning/setting-up",
                      "label": "设置预留空间",
                      "badge": null,
                      "position": 35.0
                    },
                    {
                      "type": "link",
                      "id": "fundamentals/compute/managed-node-groups/cluster-autoscaler/overprovisioning/scaling",
                      "label": "进一步扩展",
                      "badge": null,
                      "position": 50.0
                    }
                  ]
                }
              ]
            },
            {
              "type": "category",
              "label": "Graviton (ARM) 实例",
              "id": "fundamentals/compute/managed-node-groups/graviton/index",
              "badge": "实验室",
              "collapsed": true,
              "position": 20.0,
              "items": [
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/graviton/configuring-graviton",
                  "label": "创建引力子Nodes",
                  "badge": null,
                  "position": 10.0
                },
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/graviton/scheduling-graviton",
                  "label": "在 Graviton 上运行 pod",
                  "badge": null,
                  "position": 20.0
                }
              ]
            },
            {
              "type": "category",
              "label": "现货实例",
              "id": "fundamentals/compute/managed-node-groups/spot/index",
              "badge": "实验室",
              "collapsed": true,
              "position": 30.0,
              "items": [
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/spot/instance-diversification",
                  "label": "实例类型多样化",
                  "badge": null,
                  "position": 10.0
                },
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/spot/create-spot-capacity",
                  "label": "创造现货产能",
                  "badge": null,
                  "position": 20.0
                },
                {
                  "type": "link",
                  "id": "fundamentals/compute/managed-node-groups/spot/spot-workload",
                  "label": "在 Spot 上运行工作负载",
                  "badge": null,
                  "position": 30.0
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Karpenter",
          "id": "fundamentals/compute/karpenter/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 20.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/compute/karpenter/configure",
              "label": "安装Karpenter",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/karpenter/setup-provisioner",
              "label": "设置Node池",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/karpenter/node-provisioning",
              "label": "自动Node配置",
              "badge": null,
              "position": 40.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/karpenter/consolidation",
              "label": "颠覆（整合）",
              "badge": null,
              "position": 50.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/karpenter/further",
              "label": "进一步学习",
              "badge": null,
              "position": 90.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Fargate",
          "id": "fundamentals/compute/fargate/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/compute/fargate/enabling",
              "label": "启用Fargate",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/fargate/scheduling",
              "label": "Fargate 上的调度",
              "badge": null,
              "position": 12.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/fargate/sizing",
              "label": "资源分配",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fundamentals/compute/fargate/scaling",
              "label": "扩展工作负载",
              "badge": null,
              "position": 30.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "工作负载自动缩放",
      "id": "fundamentals/workloads/index",
      "badge": null,
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "category",
          "label": "水平Pod自动缩放器",
          "id": "fundamentals/workloads/horizontal-pod-autoscaler/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/workloads/horizontal-pod-autoscaler/metric-server",
              "label": "指标服务器",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "fundamentals/workloads/horizontal-pod-autoscaler/configure-hpa",
              "label": "配置HPA",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/workloads/horizontal-pod-autoscaler/test-hpa",
              "label": "产生负载",
              "badge": null,
              "position": 20.0
            }
          ]
        },
        {
          "type": "category",
          "label": "集群比例自动缩放器",
          "id": "fundamentals/workloads/cluster-proportional-autoscaler/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 15.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/workloads/cluster-proportional-autoscaler/install",
              "label": "自动缩放CoreDNS",
              "badge": null,
              "position": 2.0
            },
            {
              "type": "link",
              "id": "fundamentals/workloads/cluster-proportional-autoscaler/autoscaling-coredns-usecase",
              "label": "触发自动缩放",
              "badge": null,
              "position": 3.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Kubernetes 事件驱动自动缩放器 (KEDA)",
          "id": "fundamentals/workloads/keda/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 40.0,
          "items": [
            {
              "type": "link",
              "id": "fundamentals/workloads/keda/install-keda",
              "label": "安装KEDA",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "fundamentals/workloads/keda/configure-keda",
              "label": "配置KEDA",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fundamentals/workloads/keda/validate-ingress",
              "label": "验证Ingress",
              "badge": null,
              "position": 15.0
            },
            {
              "type": "link",
              "id": "fundamentals/workloads/keda/test-keda",
              "label": "产生负载",
              "badge": null,
              "position": 20.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "EKS集群升级",
      "id": "fundamentals/cluster-upgrades/index",
      "badge": "EXPLORE",
      "collapsed": true,
      "position": 90.0,
      "items": []
    }
  ],
  "autoscaling": [
    {
      "type": "link",
      "id": "autoscaling/index",
      "label": "弹性伸缩",
      "badge": null,
      "position": 5.0
    },
    {
      "type": "category",
      "label": "计算",
      "id": "autoscaling/compute/index",
      "badge": null,
      "collapsed": true,
      "position": 10.0,
      "items": []
    }
  ],
  "networking": [
    {
      "type": "category",
      "label": "Amazon VPC CNI",
      "id": "networking/vpc-cni/index",
      "badge": null,
      "collapsed": true,
      "position": 3.0,
      "items": [
        {
          "type": "category",
          "label": "网络政策",
          "id": "networking/vpc-cni/network-policies/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "link",
              "id": "networking/vpc-cni/network-policies/setup",
              "label": "实验室设置",
              "badge": null,
              "position": 60.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/network-policies/egress",
              "label": "实施出口控制",
              "badge": null,
              "position": 70.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/network-policies/ingress",
              "label": "实施Ingress控制",
              "badge": null,
              "position": 80.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/network-policies/debug",
              "label": "调试",
              "badge": null,
              "position": 90.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Security Groups for Pods",
          "id": "networking/vpc-cni/security-groups-for-pods/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 20.0,
          "items": [
            {
              "type": "link",
              "id": "networking/vpc-cni/security-groups-for-pods/introduction",
              "label": "简介",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/security-groups-for-pods/using-rds",
              "label": "使用 Amazon RDS",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/security-groups-for-pods/add-sg",
              "label": "应用安全组",
              "badge": null,
              "position": 40.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/security-groups-for-pods/inspecting-pod",
              "label": "检查Pod",
              "badge": null,
              "position": 50.0
            }
          ]
        },
        {
          "type": "category",
          "label": "自定义网络",
          "id": "networking/vpc-cni/custom-networking/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "networking/vpc-cni/custom-networking/vpc",
              "label": "VPC架构",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/custom-networking/configure-vpc-cni",
              "label": "配置Amazon VPC CNI",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/custom-networking/provision-new-node-group",
              "label": "提供一个新的Node组",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/custom-networking/deploy-sample-application",
              "label": "重新部署工作负载",
              "badge": null,
              "position": 25.0
            }
          ]
        },
        {
          "type": "category",
          "label": "Prefix Delegation",
          "id": "networking/vpc-cni/prefix/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 40.0,
          "items": [
            {
              "type": "link",
              "id": "networking/vpc-cni/prefix/configure",
              "label": "配置Amazon VPC CNI",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "networking/vpc-cni/prefix/consume",
              "label": "使用额外的前缀",
              "badge": null,
              "position": 40.0
            }
          ]
        }
      ]
    },
    {
      "type": "link",
      "id": "networking/index",
      "label": "网络",
      "badge": null,
      "position": 3.0
    },
    {
      "type": "category",
      "label": "Amazon VPC Lattice",
      "id": "networking/vpc-lattice/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 40.0,
      "items": [
        {
          "type": "link",
          "id": "networking/vpc-lattice/gateway-api-controller",
          "label": "AWS Gateway API 控制器",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "networking/vpc-lattice/setup",
          "label": "部署控制器",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "networking/vpc-lattice/service-network",
          "label": "Service网络",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "networking/vpc-lattice/configuring-routes",
          "label": "配置路由",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "networking/vpc-lattice/testing-routing",
          "label": "测试流量路由",
          "badge": null,
          "position": 40.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Amazon EKS混合Nodes",
      "id": "networking/eks-hybrid-nodes/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "link",
          "id": "networking/eks-hybrid-nodes/routing-traffic",
          "label": "将流量路由到混合Nodes",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "networking/eks-hybrid-nodes/connect-hybrid-node",
          "label": "连接混合动力Node",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "networking/eks-hybrid-nodes/cloud-bursting",
          "label": "云爆",
          "badge": null,
          "position": 20.0
        }
      ]
    }
  ],
  "security": [
    {
      "type": "link",
      "id": "security/index",
      "label": "安全性",
      "badge": null,
      "position": 5.0
    },
    {
      "type": "category",
      "label": "集群访问管理API",
      "id": "security/cluster-access-management/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 10.0,
      "items": [
        {
          "type": "link",
          "id": "security/cluster-access-management/understanding",
          "label": "了解集群访问管理 API",
          "badge": null,
          "position": 11.0
        },
        {
          "type": "link",
          "id": "security/cluster-access-management/managing",
          "label": "管理集群访问",
          "badge": null,
          "position": 12.0
        },
        {
          "type": "link",
          "id": "security/cluster-access-management/associating-policies",
          "label": "关联访问策略",
          "badge": null,
          "position": 13.0
        },
        {
          "type": "link",
          "id": "security/cluster-access-management/kubernetes-rbac",
          "label": "与 Kubernetes RBAC 集成",
          "badge": null,
          "position": 14.0
        },
        {
          "type": "link",
          "id": "security/cluster-access-management/migrating",
          "label": "从aws-auth身份映射迁移",
          "badge": null,
          "position": 20.0
        }
      ]
    },
    {
      "type": "category",
      "label": "IAM Roles for Service Accounts",
      "id": "security/iam-roles-for-service-accounts/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 20.0,
      "items": [
        {
          "type": "link",
          "id": "security/iam-roles-for-service-accounts/introduction",
          "label": "简介",
          "badge": null,
          "position": 21.0
        },
        {
          "type": "link",
          "id": "security/iam-roles-for-service-accounts/using-dynamo",
          "label": "使用 DynamoDB",
          "badge": null,
          "position": 22.0
        },
        {
          "type": "link",
          "id": "security/iam-roles-for-service-accounts/understanding",
          "label": "了解Pod IAM",
          "badge": null,
          "position": 23.0
        },
        {
          "type": "link",
          "id": "security/iam-roles-for-service-accounts/add_irsa",
          "label": "申请IRSA",
          "badge": null,
          "position": 24.0
        },
        {
          "type": "link",
          "id": "security/iam-roles-for-service-accounts/verifying-dynamo",
          "label": "验证 DynamoDB 访问",
          "badge": null,
          "position": 25.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Amazon EKS Pod Identity",
      "id": "security/amazon-eks-pod-identity/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 30.0,
      "items": [
        {
          "type": "link",
          "id": "security/amazon-eks-pod-identity/introduction",
          "label": "简介",
          "badge": null,
          "position": 31.0
        },
        {
          "type": "link",
          "id": "security/amazon-eks-pod-identity/using-dynamo",
          "label": "使用 Amazon DynamoDB",
          "badge": null,
          "position": 32.0
        },
        {
          "type": "link",
          "id": "security/amazon-eks-pod-identity/understanding",
          "label": "了解Pod IAM",
          "badge": null,
          "position": 33.0
        },
        {
          "type": "link",
          "id": "security/amazon-eks-pod-identity/use-pod-identity",
          "label": "使用EKS Pod Identity",
          "badge": null,
          "position": 34.0
        },
        {
          "type": "link",
          "id": "security/amazon-eks-pod-identity/verifying-dynamo",
          "label": "验证 DynamoDB 访问",
          "badge": null,
          "position": 35.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Secrets管理",
      "id": "security/secrets-management/index",
      "badge": null,
      "collapsed": true,
      "position": 40.0,
      "items": [
        {
          "type": "link",
          "id": "security/secrets-management/exploring-secrets",
          "label": "探索Secrets",
          "badge": null,
          "position": 41.0
        },
        {
          "type": "category",
          "label": "使用AWS Secrets Manager管理机密",
          "id": "security/secrets-management/secrets-manager/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 420.0,
          "items": [
            {
              "type": "link",
              "id": "security/secrets-management/secrets-manager/create-secret",
              "label": "将秘密存储在AWS Secrets Manager中",
              "badge": null,
              "position": 421.0
            },
            {
              "type": "link",
              "id": "security/secrets-management/secrets-manager/ascp",
              "label": "AWS Secrets 和配置提供程序 (ASCP)",
              "badge": null,
              "position": 422.0
            },
            {
              "type": "link",
              "id": "security/secrets-management/secrets-manager/mounting-secrets",
              "label": "在Kubernetes Pod上安装AWS Secrets Manager秘密",
              "badge": null,
              "position": 423.0
            },
            {
              "type": "link",
              "id": "security/secrets-management/secrets-manager/external-secrets",
              "label": "外部Secrets操作员",
              "badge": null,
              "position": 424.0
            }
          ]
        },
        {
          "type": "category",
          "label": "使用 Sealed Secrets 保护秘密",
          "id": "security/secrets-management/sealed-secrets/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 430.0,
          "items": [
            {
              "type": "link",
              "id": "security/secrets-management/sealed-secrets/working",
              "label": "为Kubernetes封印Secrets",
              "badge": null,
              "position": 431.0
            },
            {
              "type": "link",
              "id": "security/secrets-management/sealed-secrets/installing-sealed-secrets",
              "label": "安装密封Secrets",
              "badge": null,
              "position": 432.0
            },
            {
              "type": "link",
              "id": "security/secrets-management/sealed-secrets/sealing-secrets",
              "label": "封印你的Secrets",
              "badge": null,
              "position": 433.0
            },
            {
              "type": "link",
              "id": "security/secrets-management/sealed-secrets/managing-sealing-keys",
              "label": "管理密封密钥",
              "badge": null,
              "position": 434.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "适用于 EKS 的 Amazon GuardDuty",
      "id": "security/guardduty/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "link",
          "id": "security/guardduty/enabling",
          "label": "在 EKS 上启用 GuardDuty 保护",
          "badge": null,
          "position": 51.0
        },
        {
          "type": "category",
          "label": "EKS日志监控",
          "id": "security/guardduty/log-monitoring/index",
          "badge": null,
          "collapsed": true,
          "position": 520.0,
          "items": [
            {
              "type": "link",
              "id": "security/guardduty/log-monitoring/unsafe-kube-system",
              "label": "kube-system Namespace 中不安全执行",
              "badge": null,
              "position": 521.0
            },
            {
              "type": "link",
              "id": "security/guardduty/log-monitoring/admin-default-sa",
              "label": "管理员访问默认Service帐户",
              "badge": null,
              "position": 522.0
            },
            {
              "type": "link",
              "id": "security/guardduty/log-monitoring/exposed_dashboard",
              "label": "暴露的Kubernetes仪表板",
              "badge": null,
              "position": 523.0
            },
            {
              "type": "link",
              "id": "security/guardduty/log-monitoring/privileged_container_mount",
              "label": "具有敏感安装的特权容器",
              "badge": null,
              "position": 524.0
            }
          ]
        },
        {
          "type": "category",
          "label": "EKS 运行时监控",
          "id": "security/guardduty/runtime-monitoring/index",
          "badge": null,
          "collapsed": true,
          "position": 530.0,
          "items": [
            {
              "type": "link",
              "id": "security/guardduty/runtime-monitoring/crypto-runtime",
              "label": "加密货币运行时",
              "badge": null,
              "position": 531.0
            }
          ]
        },
        {
          "type": "link",
          "id": "security/guardduty/cleanup",
          "label": "清理资源",
          "badge": null,
          "position": 600.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Pod 安全标准",
      "id": "security/pod-security-standards/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 60.0,
      "items": [
        {
          "type": "link",
          "id": "security/pod-security-standards/workload",
          "label": "测试工作量",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "security/pod-security-standards/privileged",
          "label": "特权 PSS 配置文件",
          "badge": null,
          "position": 61.0
        },
        {
          "type": "link",
          "id": "security/pod-security-standards/baseline",
          "label": "基线 PSS 配置文件",
          "badge": null,
          "position": 62.0
        },
        {
          "type": "link",
          "id": "security/pod-security-standards/restricted",
          "label": "受限 PSS 配置文件",
          "badge": null,
          "position": 63.0
        }
      ]
    },
    {
      "type": "category",
      "label": "使用Kyverno进行策略管理",
      "id": "security/kyverno/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 70.0,
      "items": [
        {
          "type": "link",
          "id": "security/kyverno/creating-policy",
          "label": "创建一个简单的策略",
          "badge": null,
          "position": 71.0
        },
        {
          "type": "link",
          "id": "security/kyverno/baseline-pss",
          "label": "执行Pod安全标准",
          "badge": null,
          "position": 72.0
        },
        {
          "type": "link",
          "id": "security/kyverno/restricting-images",
          "label": "限制图像注册表",
          "badge": null,
          "position": 73.0
        },
        {
          "type": "link",
          "id": "security/kyverno/reports",
          "label": "报告与审计",
          "badge": null,
          "position": 74.0
        }
      ]
    }
  ],
  "observability": [
    {
      "type": "link",
      "id": "observability/index",
      "label": "可观测性",
      "badge": null,
      "position": 10.0
    },
    {
      "type": "category",
      "label": "查看 EKS 控制台",
      "id": "observability/resource-view/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 20.0,
      "items": [
        {
          "type": "category",
          "label": "资源",
          "id": "observability/resource-view/workloads-view/index",
          "badge": null,
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/cluster_view",
              "label": "集群",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/service_view",
              "label": "Services 和端点",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/secret_config_view",
              "label": "ConfigMaps和Secrets",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/storage_view",
              "label": "存储",
              "badge": null,
              "position": 40.0
            },
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/auth_authz_view",
              "label": "认证与授权",
              "badge": null,
              "position": 50.0
            },
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/policy_view",
              "label": "政策",
              "badge": null,
              "position": 60.0
            },
            {
              "type": "link",
              "id": "observability/resource-view/workloads-view/extensions_view",
              "label": "自定义资源定义",
              "badge": null,
              "position": 70.0
            }
          ]
        },
        {
          "type": "link",
          "id": "observability/resource-view/addon_view",
          "label": "附加组件",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "observability/resource-view/observability_view",
          "label": "可观测性",
          "badge": null,
          "position": 30.0
        }
      ]
    },
    {
      "type": "category",
      "label": "登录 EKS",
      "id": "observability/logging/index",
      "badge": null,
      "collapsed": true,
      "position": 30.0,
      "items": [
        {
          "type": "category",
          "label": "Pod记录",
          "id": "observability/logging/pod-logging/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "link",
              "id": "observability/logging/pod-logging/fluentbit-setup",
              "label": "使用Fluent Bit",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "observability/logging/pod-logging/fluent-bit-cloudwatch",
              "label": "验证 CloudWatch 中的日志",
              "badge": null,
              "position": 40.0
            }
          ]
        },
        {
          "type": "category",
          "label": "控制平面日志",
          "id": "observability/logging/cluster-logging/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "link",
              "id": "observability/logging/cluster-logging/verify-logs",
              "label": "在 CloudWatch 中查看",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "observability/logging/cluster-logging/enable-eks-logging",
              "label": "配置控制平面日志",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "observability/logging/cluster-logging/log-analytics",
              "label": "CloudWatch 日志分析",
              "badge": null,
              "position": 40.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "OpenSearch 的可观察性",
      "id": "observability/opensearch/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 35.0,
      "items": [
        {
          "type": "link",
          "id": "observability/opensearch/access-opensearch",
          "label": "访问OpenSearch",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "observability/opensearch/events",
          "label": "Kubernetes事件",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "observability/opensearch/pod-logs",
          "label": "Pod记录",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "observability/opensearch/control-plane-logs",
          "label": "控制平面日志",
          "badge": null,
          "position": 30.0
        }
      ]
    },
    {
      "type": "category",
      "label": "EKS 开源可观测性",
      "id": "observability/open-source-metrics/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 40.0,
      "items": [
        {
          "type": "link",
          "id": "observability/open-source-metrics/adot",
          "label": "使用 CloudWatch 代理收集指标",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "observability/open-source-metrics/amp-ws",
          "label": "使用 AMP 存储指标",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "observability/open-source-metrics/accessing-grafana",
          "label": "访问Grafana",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "observability/open-source-metrics/kubernetes-dashboards",
          "label": "集群仪表板",
          "badge": null,
          "position": 40.0
        },
        {
          "type": "link",
          "id": "observability/open-source-metrics/application-metrics",
          "label": "应用指标",
          "badge": null,
          "position": 50.0
        }
      ]
    },
    {
      "type": "category",
      "label": "EKS 上的容器见解",
      "id": "observability/container-insights/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "link",
          "id": "observability/container-insights/collect-metrics-adot-ci",
          "label": "集群指标",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "observability/container-insights/logs-insights",
          "label": "使用 CloudWatch Log Analytics",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "observability/container-insights/visualize-application-metrics-cloudwatch",
          "label": "应用指标",
          "badge": null,
          "position": 50.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Kubecost 的成本可见性",
      "id": "observability/kubecost/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 60.0,
      "items": [
        {
          "type": "link",
          "id": "observability/kubecost/introduction",
          "label": "简介",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "observability/kubecost/costallocation",
          "label": "成本分配",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "observability/kubecost/amp",
          "label": "Kubecost和Amazon Managed Service for Prometheus",
          "badge": null,
          "position": 30.0
        }
      ]
    },
    {
      "type": "category",
      "label": "EKS 的混沌工程",
      "id": "observability/high-availability/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 70.0,
      "items": [
        {
          "type": "link",
          "id": "observability/high-availability/01-scale",
          "label": "实验室设置：混沌网格、缩放和Pod亲和力",
          "badge": null,
          "position": 90.0
        },
        {
          "type": "link",
          "id": "observability/high-availability/02-pod-failure",
          "label": "模拟Pod失败",
          "badge": null,
          "position": 110.0
        },
        {
          "type": "link",
          "id": "observability/high-availability/03-node-failure-no-fis",
          "label": "模拟Node无FIS故障",
          "badge": null,
          "position": 130.0
        },
        {
          "type": "link",
          "id": "observability/high-availability/04-node-failure-partial-fis",
          "label": "用FIS模拟部分Node故障",
          "badge": null,
          "position": 150.0
        },
        {
          "type": "link",
          "id": "observability/high-availability/05-node-failure-complete-fis",
          "label": "使用 FIS 模拟完全Node失败",
          "badge": null,
          "position": 170.0
        },
        {
          "type": "link",
          "id": "observability/high-availability/06-az-setup",
          "label": "AZ 故障实验设置",
          "badge": null,
          "position": 190.0
        },
        {
          "type": "link",
          "id": "observability/high-availability/07-az-failure",
          "label": "模拟 AZ 故障",
          "badge": null,
          "position": 210.0
        }
      ]
    }
  ],
  "automation": [
    {
      "type": "link",
      "id": "automation/index",
      "label": "自动化",
      "badge": null,
      "position": 1.0
    },
    {
      "type": "category",
      "label": "GitOps",
      "id": "automation/gitops/index",
      "badge": null,
      "collapsed": true,
      "position": 2.0,
      "items": [
        {
          "type": "category",
          "label": "Flux",
          "id": "automation/gitops/flux/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 2.0,
          "items": [
            {
              "type": "link",
              "id": "automation/gitops/flux/codecommit",
              "label": "Git 存储库",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "automation/gitops/flux/deploy_application",
              "label": "部署应用程序",
              "badge": null,
              "position": 15.0
            },
            {
              "type": "link",
              "id": "automation/gitops/flux/cluster_bootstrap",
              "label": "集群引导",
              "badge": null,
              "position": 15.0
            }
          ]
        },
        {
          "type": "category",
          "label": "阿尔戈 CD",
          "id": "automation/gitops/argocd/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 3.0,
          "items": [
            {
              "type": "link",
              "id": "automation/gitops/argocd/codecommit",
              "label": "Git 存储库",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "automation/gitops/argocd/access_argocd",
              "label": "访问 Argo CD",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "automation/gitops/argocd/deploy_application",
              "label": "部署应用程序",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "automation/gitops/argocd/update_application",
              "label": "更新应用程序",
              "badge": null,
              "position": 40.0
            },
            {
              "type": "category",
              "label": "应用程序的应用程序",
              "id": "automation/gitops/argocd/app-of-apps/index",
              "badge": null,
              "collapsed": true,
              "position": 100.0,
              "items": [
                {
                  "type": "link",
                  "id": "automation/gitops/argocd/app-of-apps/setup",
                  "label": "设置",
                  "badge": null,
                  "position": 50.0
                },
                {
                  "type": "link",
                  "id": "automation/gitops/argocd/app-of-apps/deploy_applications",
                  "label": "添加更多工作负载",
                  "badge": null,
                  "position": 60.0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "控制平面",
      "id": "automation/controlplanes/index",
      "badge": null,
      "collapsed": true,
      "position": 3.0,
      "items": [
        {
          "type": "category",
          "label": "Crossplane",
          "id": "automation/controlplanes/crossplane/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 1.0,
          "items": [
            {
              "type": "link",
              "id": "automation/controlplanes/crossplane/how-it-works",
              "label": "工作原理",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/crossplane/resources",
              "label": "托管资源",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/crossplane/configure-application",
              "label": "更新应用程序",
              "badge": null,
              "position": 25.0
            },
            {
              "type": "category",
              "label": "成分",
              "id": "automation/controlplanes/crossplane/compositions/index",
              "badge": null,
              "collapsed": true,
              "position": 30.0,
              "items": [
                {
                  "type": "link",
                  "id": "automation/controlplanes/crossplane/compositions/creating-a-composition",
                  "label": "创建构图",
                  "badge": null,
                  "position": 10.0
                },
                {
                  "type": "link",
                  "id": "automation/controlplanes/crossplane/compositions/claims",
                  "label": "索赔",
                  "badge": null,
                  "position": 20.0
                },
                {
                  "type": "link",
                  "id": "automation/controlplanes/crossplane/compositions/testing",
                  "label": "测试应用程序",
                  "badge": null,
                  "position": 40.0
                }
              ]
            }
          ]
        },
        {
          "type": "category",
          "label": "Kubernetes (ACK) 的 AWS 控制器",
          "id": "automation/controlplanes/ack/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 1.0,
          "items": [
            {
              "type": "link",
              "id": "automation/controlplanes/ack/introduction",
              "label": "简介",
              "badge": null,
              "position": 3.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/ack/how-it-works",
              "label": "ACK如何工作？",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/ack/provision-resources",
              "label": "配置ACK资源",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/ack/configure-application",
              "label": "更新应用程序",
              "badge": null,
              "position": 10.0
            }
          ]
        },
        {
          "type": "category",
          "label": "kro - Kube 资源编排器",
          "id": "automation/controlplanes/kro/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 1.0,
          "items": [
            {
              "type": "link",
              "id": "automation/controlplanes/kro/introduction",
              "label": "简介",
              "badge": null,
              "position": 3.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/kro/provision-resources",
              "label": "使用kro创建资源",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "automation/controlplanes/kro/cloud-dynamodb",
              "label": "配置云资源",
              "badge": null,
              "position": 6.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "持续交付",
      "id": "automation/continuousdelivery/index",
      "badge": null,
      "collapsed": true,
      "position": 4.0,
      "items": [
        {
          "type": "category",
          "label": "AWS CodePipeline",
          "id": "automation/continuousdelivery/codepipeline/index",
          "badge": "实验室",
          "collapsed": true,
          "position": 5.0,
          "items": [
            {
              "type": "link",
              "id": "automation/continuousdelivery/codepipeline/git",
              "label": "Git 存储库",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "automation/continuousdelivery/codepipeline/pipeline_setup",
              "label": "管道设置",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "automation/continuousdelivery/codepipeline/deploy_application",
              "label": "部署应用程序",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "automation/continuousdelivery/codepipeline/other_features",
              "label": "CodePipeline 的特点",
              "badge": null,
              "position": 40.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "EKS 平台工程",
      "id": "automation/platform-engineering-on-eks/index",
      "badge": "EXPLORE",
      "collapsed": true,
      "position": 90.0,
      "items": []
    }
  ],
  "aiml": [
    {
      "type": "link",
      "id": "aiml/index",
      "label": "EKS 上的人工智能/机器学习",
      "badge": null,
      "position": 1.0
    },
    {
      "type": "category",
      "label": "使用 AWS Inferentia 进行推理",
      "id": "aiml/inferentia/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 10.0,
      "items": [
        {
          "type": "link",
          "id": "aiml/inferentia/karpenter",
          "label": "配置计算",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "aiml/inferentia/compile",
          "label": "编译预训练模型",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "aiml/inferentia/inference",
          "label": "在 AWS Inferentia 上运行推理",
          "badge": null,
          "position": 40.0
        },
        {
          "type": "link",
          "id": "aiml/inferentia/wrapup",
          "label": "现实世界的实现",
          "badge": null,
          "position": 50.0
        }
      ]
    },
    {
      "type": "category",
      "label": "使用 Kiro CLI 操作 EKS",
      "id": "aiml/kiro-cli/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 10.0,
      "items": [
        {
          "type": "link",
          "id": "aiml/kiro-cli/kiro-cli-setup",
          "label": "设置",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "aiml/kiro-cli/retrieve-cluster-details",
          "label": "检索集群详细信息",
          "badge": null,
          "position": 21.0
        },
        {
          "type": "link",
          "id": "aiml/kiro-cli/basic-troubleshooting",
          "label": "基本故障排除",
          "badge": null,
          "position": 22.0
        },
        {
          "type": "link",
          "id": "aiml/kiro-cli/advance-troubleshooting",
          "label": "高级故障排除",
          "badge": null,
          "position": 23.0
        }
      ]
    },
    {
      "type": "category",
      "label": "使用 vLLM 的大型语言模型",
      "id": "aiml/chatbot/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 10.0,
      "items": [
        {
          "type": "link",
          "id": "aiml/chatbot/setup",
          "label": "安装Neuron插件",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "link",
          "id": "aiml/chatbot/nodepool",
          "label": "配置计算",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "aiml/chatbot/mistral",
          "label": "为模特服务",
          "badge": null,
          "position": 40.0
        },
        {
          "type": "link",
          "id": "aiml/chatbot/using",
          "label": "配置聊天机器人",
          "badge": null,
          "position": 60.0
        },
        {
          "type": "link",
          "id": "aiml/chatbot/testing",
          "label": "测试模型",
          "badge": null,
          "position": 70.0
        }
      ]
    },
    {
      "type": "category",
      "label": "EKS 上的人工智能",
      "id": "aiml/ai-on-eks/index",
      "badge": "EXPLORE",
      "collapsed": true,
      "position": 90.0,
      "items": []
    }
  ],
  "troubleshooting": [
    {
      "type": "link",
      "id": "troubleshooting/index",
      "label": "故障排除场景",
      "badge": null,
      "position": 1.0
    },
    {
      "type": "category",
      "label": "ALB控制器",
      "id": "troubleshooting/alb/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 40.0,
      "items": [
        {
          "type": "link",
          "id": "troubleshooting/alb/alb_fix_1",
          "label": "ALB 未创建",
          "badge": null,
          "position": 30.0
        },
        {
          "type": "link",
          "id": "troubleshooting/alb/alb_fix_5",
          "label": "IAM 政策问题",
          "badge": null,
          "position": 31.0
        },
        {
          "type": "link",
          "id": "troubleshooting/alb/alb_fix_7",
          "label": "Service 未注册端点",
          "badge": null,
          "position": 32.0
        },
        {
          "type": "link",
          "id": "troubleshooting/alb/alb_fix_wrapping_up",
          "label": "总结一下",
          "badge": null,
          "position": 33.0
        }
      ]
    },
    {
      "type": "category",
      "label": "工人Nodes",
      "id": "troubleshooting/workernodes/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "link",
          "id": "troubleshooting/workernodes/one",
          "label": "失踪工人Nodes",
          "badge": null,
          "position": 71.0
        },
        {
          "type": "link",
          "id": "troubleshooting/workernodes/two",
          "label": "Node 加入失败",
          "badge": null,
          "position": 72.0
        },
        {
          "type": "link",
          "id": "troubleshooting/workernodes/three",
          "label": "Node 处于未就绪状态",
          "badge": null,
          "position": 73.0
        }
      ]
    },
    {
      "type": "category",
      "label": "DNS 解析",
      "id": "troubleshooting/dns/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 60.0,
      "items": [
        {
          "type": "link",
          "id": "troubleshooting/dns/1-config",
          "label": "设置场景",
          "badge": null,
          "position": 51.0
        },
        {
          "type": "link",
          "id": "troubleshooting/dns/2-check-coredns",
          "label": "检查CoreDNS Pod",
          "badge": null,
          "position": 52.0
        },
        {
          "type": "link",
          "id": "troubleshooting/dns/3-check-kube-dns",
          "label": "检查 kube-dns 服务",
          "badge": null,
          "position": 53.0
        },
        {
          "type": "link",
          "id": "troubleshooting/dns/4-check-vpc",
          "label": "检查VPC配置",
          "badge": null,
          "position": 54.0
        }
      ]
    },
    {
      "type": "category",
      "label": "Pod问题",
      "id": "troubleshooting/pod/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 70.0,
      "items": [
        {
          "type": "link",
          "id": "troubleshooting/pod/private_image",
          "label": "ImagePullBackOff - ECR 私有镜像",
          "badge": null,
          "position": 71.0
        },
        {
          "type": "link",
          "id": "troubleshooting/pod/public_image",
          "label": "ImagePullBackOff - 公共图像",
          "badge": null,
          "position": 72.0
        },
        {
          "type": "link",
          "id": "troubleshooting/pod/container_creating",
          "label": "PodStuck - ContainerCreating",
          "badge": null,
          "position": 73.0
        }
      ]
    }
  ],
  "fastpaths": [
    {
      "type": "link",
      "id": "fastpaths/index",
      "label": "简介",
      "badge": null,
      "position": 10.0
    },
    {
      "type": "category",
      "label": "设置",
      "id": "fastpaths/setup/index",
      "badge": null,
      "collapsed": true,
      "position": 20.0,
      "items": [
        {
          "type": "link",
          "id": "fastpaths/setup/aws-event",
          "label": "在 AWS 活动中",
          "badge": null,
          "position": 20.0
        },
        {
          "type": "category",
          "label": "在您的 AWS 账户中",
          "id": "fastpaths/setup/your-account/index",
          "badge": null,
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/setup/your-account/using-eksctl",
              "label": "使用 eksctl",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fastpaths/setup/your-account/using-terraform",
              "label": "使用 Terraform",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "fastpaths/setup/your-account/cleanup",
              "label": "清理",
              "badge": null,
              "position": 90.0
            }
          ]
        }
      ]
    },
    {
      "type": "link",
      "id": "fastpaths/navigating-labs",
      "label": "实验室导航",
      "badge": null,
      "position": 30.0
    },
    {
      "type": "category",
      "label": "开始使用",
      "id": "fastpaths/getting-started/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 40.0,
      "items": [
        {
          "type": "link",
          "id": "fastpaths/getting-started/about",
          "label": "应用架构",
          "badge": null,
          "position": 10.0
        },
        {
          "type": "link",
          "id": "fastpaths/getting-started/first",
          "label": "部署我们的第一个组件",
          "badge": null,
          "position": 40.0
        },
        {
          "type": "link",
          "id": "fastpaths/getting-started/finish",
          "label": "其他组件",
          "badge": null,
          "position": 50.0
        }
      ]
    },
    {
      "type": "category",
      "label": "开发者必备",
      "id": "fastpaths/developer/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 50.0,
      "items": [
        {
          "type": "category",
          "label": "使用 Ingress 公开工作负载",
          "id": "fastpaths/developer/ingress/index",
          "badge": null,
          "collapsed": true,
          "position": 20.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/developer/ingress/adding-ingress",
              "label": "创建Ingress",
              "badge": null,
              "position": 20.0
            }
          ]
        },
        {
          "type": "category",
          "label": "使用 EBS 添加工作负载存储",
          "id": "fastpaths/developer/ebs/index",
          "badge": null,
          "collapsed": true,
          "position": 40.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/developer/ebs/existing-architecture",
              "label": "当前存储配置",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/ebs/deployment-with-ebs",
              "label": "使用持久性 EBS 卷",
              "badge": null,
              "position": 20.0
            }
          ]
        },
        {
          "type": "category",
          "label": "从工作负载安全地访问 AWS API",
          "id": "fastpaths/developer/amazon-eks-pod-identity/index",
          "badge": null,
          "collapsed": true,
          "position": 50.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/developer/amazon-eks-pod-identity/introduction",
              "label": "简介",
              "badge": null,
              "position": 31.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/amazon-eks-pod-identity/using-dynamo",
              "label": "使用 Amazon DynamoDB",
              "badge": null,
              "position": 32.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/amazon-eks-pod-identity/understanding",
              "label": "了解Pod IAM",
              "badge": null,
              "position": 33.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/amazon-eks-pod-identity/use-pod-identity",
              "label": "使用EKS Pod Identity",
              "badge": null,
              "position": 34.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/amazon-eks-pod-identity/verifying-dynamo",
              "label": "验证 DynamoDB 访问",
              "badge": null,
              "position": 35.0
            }
          ]
        },
        {
          "type": "category",
          "label": "自动缩放应用程序",
          "id": "fastpaths/developer/keda/index",
          "badge": null,
          "collapsed": true,
          "position": 80.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/developer/keda/install-keda",
              "label": "安装KEDA",
              "badge": null,
              "position": 5.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/keda/configure-keda",
              "label": "配置KEDA",
              "badge": null,
              "position": 10.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/keda/test-keda",
              "label": "产生负载",
              "badge": null,
              "position": 20.0
            }
          ]
        },
        {
          "type": "category",
          "label": "访问工作负载日志",
          "id": "fastpaths/developer/pod-logging/index",
          "badge": null,
          "collapsed": true,
          "position": 90.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/developer/pod-logging/fluentbit-setup",
              "label": "使用Fluent Bit",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "fastpaths/developer/pod-logging/fluent-bit-cloudwatch",
              "label": "验证 CloudWatch 中的日志",
              "badge": null,
              "position": 40.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "操作员要点",
      "id": "fastpaths/operator/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 60.0,
      "items": [
        {
          "type": "category",
          "label": "使用 EKS 自动模式进行自动缩放",
          "id": "fastpaths/operator/karpenter/index",
          "badge": null,
          "collapsed": true,
          "position": 20.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/operator/karpenter/setup-provisioner",
              "label": "检查Karpenter配置",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/karpenter/node-provisioning",
              "label": "自动Node配置",
              "badge": null,
              "position": 40.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/karpenter/consolidation",
              "label": "颠覆（整合）",
              "badge": null,
              "position": 50.0
            }
          ]
        },
        {
          "type": "category",
          "label": "启用安全Pod至Pod通信",
          "id": "fastpaths/operator/network-policies/index",
          "badge": null,
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/operator/network-policies/setup",
              "label": "实验室设置",
              "badge": null,
              "position": 60.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/network-policies/egress",
              "label": "实施出口控制",
              "badge": null,
              "position": 70.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/network-policies/ingress",
              "label": "实施Ingress控制",
              "badge": null,
              "position": 80.0
            }
          ]
        },
        {
          "type": "category",
          "label": "使用AWS Secrets Manager管理机密",
          "id": "fastpaths/operator/secrets-manager/index",
          "badge": null,
          "collapsed": true,
          "position": 40.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/operator/secrets-manager/create-secret",
              "label": "将秘密存储在AWS Secrets Manager中",
              "badge": null,
              "position": 421.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/secrets-manager/ascp",
              "label": "AWS Secrets 和配置提供程序 (ASCP)",
              "badge": null,
              "position": 422.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/secrets-manager/mounting-secrets",
              "label": "在Kubernetes Pod上安装AWS Secrets Manager秘密",
              "badge": null,
              "position": 423.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/secrets-manager/external-secrets",
              "label": "外部Secrets操作员",
              "badge": null,
              "position": 424.0
            }
          ]
        },
        {
          "type": "category",
          "label": "从工作负载安全地访问 AWS API",
          "id": "fastpaths/operator/amazon-eks-pod-identity/index",
          "badge": null,
          "collapsed": true,
          "position": 60.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/operator/amazon-eks-pod-identity/introduction",
              "label": "简介",
              "badge": null,
              "position": 31.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/amazon-eks-pod-identity/using-dynamo",
              "label": "使用 Amazon DynamoDB",
              "badge": null,
              "position": 32.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/amazon-eks-pod-identity/understanding",
              "label": "了解Pod IAM",
              "badge": null,
              "position": 33.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/amazon-eks-pod-identity/use-pod-identity",
              "label": "使用EKS Pod Identity",
              "badge": null,
              "position": 34.0
            },
            {
              "type": "link",
              "id": "fastpaths/operator/amazon-eks-pod-identity/verifying-dynamo",
              "label": "验证 DynamoDB 访问",
              "badge": null,
              "position": 35.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "能力要点",
      "id": "fastpaths/eks-capabilities/index",
      "badge": "实验室",
      "collapsed": true,
      "position": 70.0,
      "items": [
        {
          "type": "category",
          "label": "使用ACK配置AWS资源",
          "id": "fastpaths/eks-capabilities/ack/index",
          "badge": null,
          "collapsed": true,
          "position": 10.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/ack/provision-table",
              "label": "配置 DynamoDB 表",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/ack/migrate-carts",
              "label": "迁移购物车服务",
              "badge": null,
              "position": 30.0
            }
          ]
        },
        {
          "type": "category",
          "label": "使用 Argo CD 持续交付",
          "id": "fastpaths/eks-capabilities/argocd/index",
          "badge": null,
          "collapsed": true,
          "position": 20.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/argocd/signin-argocd",
              "label": "通过 Identity Center 登录 Argo CD",
              "badge": null,
              "position": 15.0
            },
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/argocd/register-and-deploy",
              "label": "使用 GitOps 交付目录",
              "badge": null,
              "position": 30.0
            },
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/argocd/gitops-update",
              "label": "触发 GitOps 更新",
              "badge": null,
              "position": 40.0
            }
          ]
        },
        {
          "type": "category",
          "label": "使用 kro 构建堆栈",
          "id": "fastpaths/eks-capabilities/kro/index",
          "badge": null,
          "collapsed": true,
          "position": 30.0,
          "items": [
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/kro/define-rgd",
              "label": "定义 CartsStack RGD",
              "badge": null,
              "position": 20.0
            },
            {
              "type": "link",
              "id": "fastpaths/eks-capabilities/kro/apply-instance",
              "label": "应用 CartsStack 实例",
              "badge": null,
              "position": 30.0
            }
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "探索",
      "id": "fastpaths/explore/index",
      "badge": null,
      "collapsed": true,
      "position": 80.0,
      "items": []
    }
  ],
  "cleanup": [
    {
      "type": "link",
      "id": "cleanup/index",
      "label": "清理资源",
      "badge": null,
      "position": 99.0
    }
  ],
  "misc": [
    {
      "type": "link",
      "id": "misc/cloud9-access",
      "label": "Cloud9 访问",
      "badge": null,
      "position": 999.0
    },
    {
      "type": "link",
      "id": "misc/migrating",
      "label": "迁移旧实验室环境",
      "badge": null,
      "position": 999.0
    },
    {
      "type": "link",
      "id": "misc/major-upgrade",
      "label": "重大升级",
      "badge": null,
      "position": 999.0
    }
  ]
};
