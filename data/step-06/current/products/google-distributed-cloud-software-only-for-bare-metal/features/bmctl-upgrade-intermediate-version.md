---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.321Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "bmctl upgrade intermediate-version"
feature_slug: "bmctl-upgrade-intermediate-version"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
keywords:
  - "bmctl"
  - "upgrade"
  - "intermediate"
  - "version"
  - "command"
  - "prints"
  - "needed"
  - "skip"
---

# bmctl upgrade intermediate-version

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The bmctl upgrade intermediate-version command prints the intermediate version needed for a skip minor version upgrade.

## Extended Definition

The bmctl upgrade intermediate-version command prints the intermediate version needed for a skip minor version upgrade.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)

## Supporting Pages

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To prepare your registry mirror for a skip upgrade, follow these steps: Using the version of bmctl that corresponds to the target version of the skip upgrade, find out what's the intermediate version for the skip upgrade: bmctl upgrade intermediate-version The command response consists of the specific Google Distributed Cloud patch version that the system uses as the intermediate version during the skip upgrade.
- The following cluster configuration file snippet shows the anthosBareMetalVersion field updated to the latest version: --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : type : admin Anthos cluster version. anthosBareMetalVersion : 1.34.200-gke.68 Use the bmctl upgrade cluster command to complete the upgrade: bmctl upgrade cluster -c CLUSTER NAME --kubeconfig ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster to upgrade.
- To roll back a node pool upgrade, use the following steps: bmctl When you use bmctl to roll back a node pool upgrade, you edit the cluster configuration file and apply your changes with the bmctl update command: Edit the NodePool specs in the cluster configuration file for the worker node pools that you want to roll back to the previous version.
- Additional requirement for registry mirrors If you pull container images from a registry mirror to upgrade your cluster, your registry mirror must have the images for both the target version and the intermediate version of the skip upgrade.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Node upgrade strategy . apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np1 namespace : cluster-cluster1 spec : clusterName : cluster1 nodes : - address : 10.200.0.1 ... upgradeStrategy : parallelUpgrade : concurrentNodes : 2 minimumAvailableNodes : 5 NodePool resource Optional Mutable upgradeStrategy.parallelUpgrade.concurrentNodes Optional.
- Update the nodePoolUpgradeStrategy.pause value to true to pause an active cluster upgrade: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume spec : ... nodePoolUpgradeStrategy : pause : true ...
- When you set concurrentNodePools to 0 , every worker node pool in the cluster upgrades in parallel. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 spec : ... nodePoolUpgradeStrategy : concurrentNodePools : 0 ...
- To create a new cluster configuration file, use the following command in the /baremetal folder: bmctl create config -c CLUSTER NAME Replace CLUSTER NAME with the name for the cluster you want to create.

### "Get support \_|\_ Google Distributed Cloud (software only) for bare metal\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you upgrade node pools, in some cases, you can skip a minor version.
- The following table provides a more complete list of what is and isn't supported: Google Cloud supported Not supported Kubernetes and the container runtime Customer choice of load balancer (manual load balancing) Connect and the Connect Agent Customer code (see Developer Support ) Google Cloud operations, Monitoring, Logging, and agents Customer choice of operating system Bundled load balancer Physical or virtual server, storage, and network Ingress controller External DNS, DHCP, and identity systems GKE Identity Service Cloud Service Mesh Policy Controller Config Sync Config Controller Version Support Policy The objective of this Version Support Policy is to give you the flexibility to schedule upgrades when it meets your business needs, while balancing the rapid evolution of both Kubernetes and Google Distributed Cloud.
- Support tools To troubleshoot a Google Distributed Cloud incident, Cloud Customer Care relies on three pieces of information: Your environment configuration Logs from your clusters Metrics from your clusters Your environment configuration When you open a support case, provide key information about your cluster setup by running the following commands: For all your cluster types, capture information about Kubernetes and your nodes by running the bmctl check cluster --snapshot command.
- The following is sample content for a cluster named user1 in the cluster-user1 namespace: apiVersion : baremetal.cluster.gke.io/v1 kind : HealthCheck metadata : generateName : healthcheck- namespace : cluster-user1 spec : clusterName : user1 After you create the YAML file, apply the custom resource in the admin cluster that's managing the user cluster by using the kubectl command.

