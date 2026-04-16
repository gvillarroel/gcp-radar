---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.345Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Cluster upgrade pause and resume"
feature_slug: "cluster-upgrade-pause-and-resume"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
keywords:
  - "cluster"
  - "upgrade"
  - "pause"
  - "resume"
  - "lets"
  - "you"
  - "later"
  - "upgrades"
---

# Cluster upgrade pause and resume

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Lets you pause and later resume cluster upgrades.

## Extended Definition

Lets you pause and later resume cluster upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)

## Supporting Pages

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Update the nodePoolUpgradeStrategy.pause value to true to pause an active cluster upgrade: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : preview.baremetal.cluster.gke.io/upgrade-pause-and-resume spec : ... nodePoolUpgradeStrategy : pause : true ...
- The following list shows the launch stage per version for configuring a node-level private registry: 1.30 and later: GA 1.29: Preview Cluster resource Optional Mutable nodePoolUpgradeStrategy Optional.
- 1.28 The upgrade pause and resume feature is available in Preview for clusters with all control plane nodes at minor version 1.28 or higher.
- 1.29 and higher The upgrade pause and resume feature is GA for clusters with all control plane nodes at minor version 1.29 or higher.

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pause and resume upgrades The upgrade pause and resume feature lets you pause a cluster upgrade before it finishes.
- To resume a cluster upgrade that's been paused, use the following steps: Set nodePoolUpgradeStrategy.pause to the cluster configuration file and set it to false : apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : baremetal-demo namespace : cluster-baremetal-demo ... spec : ... nodePoolUpgradeStrategy : pause : false ...
- Resume a paused upgrade You resume a paused cluster upgrade by either setting nodePoolUpgradeStrategy.pause to false in the Cluster spec or removing nodePoolUpgradeStrategy.pause from the spec.
- When a cluster upgrade is paused, no new worker node upgrades are triggered until the upgrade is resumed.

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- You can change these addresses whenever you update or upgrade a cluster. worker node ips : A list of one or more IPv4 addresses for the worker node machines. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- If you want to access the Google Kubernetes Engine pages in the console, you must also have the following roles: roles/container.viewer . roles/gkehub.viewer After the cluster is created, if your aren't a project owner and you want to use the connect gateway to connect to the user cluster by the command line, the following roles are required: roles/gkehub.gatewayAdmin : This role lets you access the Connect Gateway API.
- For Google Distributed Cloud (software only) on bare metal, the membership name is the same as the cluster name. gcloud container fleet memberships get-credentials MEMBERSHIP NAME This command returns a special connect gateway-specific kubeconfig that lets you connect to the cluster through the gateway.
- The GKE On-Prem API is a Google Cloud-hosted API that lets you manage the lifecycle of your on-premises clusters using Terraform and standard Google Cloud applications.

