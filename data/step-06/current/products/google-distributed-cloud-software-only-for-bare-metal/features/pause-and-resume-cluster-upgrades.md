---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.344Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Pause and resume cluster upgrades"
feature_slug: "pause-and-resume-cluster-upgrades"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation"
keywords:
  - "pause"
  - "resume"
  - "cluster"
  - "upgrades"
  - "you"
  - "can"
---

# Pause and resume cluster upgrades

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

You can pause and resume cluster upgrades.

## Extended Definition

You can pause and resume cluster upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Update the nodePoolUpgradeStrategy.pause value to true to pause an active cluster upgrade: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume spec : ... nodePoolUpgradeStrategy : pause : true ...
- 1.28 The upgrade pause and resume feature is available in Preview for clusters with all control plane nodes at minor version 1.28 or higher.
- 1.29 and higher The upgrade pause and resume feature is GA for clusters with all control plane nodes at minor version 1.29 or higher.
- For version 1.28 clusters, use the preview.baremetal.cluster.gke.io/upgrade-pause-and-resume annotation to enable the feature.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To resume a cluster upgrade that's been paused, use the following steps: Set nodePoolUpgradeStrategy.pause to the cluster configuration file and set it to false : apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : baremetal-demo namespace : cluster-baremetal-demo ... spec : ... nodePoolUpgradeStrategy : pause : false ...
- Resume a paused upgrade You resume a paused cluster upgrade by either setting nodePoolUpgradeStrategy.pause to false in the Cluster spec or removing nodePoolUpgradeStrategy.pause from the spec.
- Pause and resume upgrades The upgrade pause and resume feature lets you pause a cluster upgrade before it finishes.
- When a cluster upgrade is paused, no new worker node upgrades are triggered until the upgrade is resumed.

### "Create standalone clusters \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Starting with Google Distributed Cloud release 1.9.0 or later, you can enable or disable SELinux before or after cluster creation or cluster upgrades.
- Afterwards, when creating user clusters by directly applying the cluster and node pool resources to the existing cluster, you must remove this section. gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /path/to/your/ssh private key gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Register your clusters to a fleet .
- The recommended starting value, which is pre-filled in the generated cluster configuration file, is 10.96.0.0/20 . loadBalancer.vips.controlPlaneVIP : the virtual IP (VIP) address for the Kubernetes API server of the cluster. loadBalancer.vips.ingressVIP : the VIP address to use as the external address for the ingress proxy . loadBalancer.addressPools.addresses: : range of ten IP addresses for use as external IP addresses for Services of type LoadBalancer.
- This way, you can skip the automatic service account creation in the previous step in the bmctl command: bmctl create config -c standalone1 Edit the cluster config file Now that you have a cluster config file, make the following changes to it: Add the SSH private key to access the standalone cluster nodes: bmctl configuration variables.

