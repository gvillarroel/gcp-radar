---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.329Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Ubuntu 24.04 LTS support"
feature_slug: "ubuntu-24-04-lts-support"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/user-cluster-creation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation"
keywords:
  - "ubuntu"
  - "24"
  - "04"
  - "lts"
  - "bare"
  - "metal"
  - "clusters"
  - "linux"
---

# Ubuntu 24.04 LTS support

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Bare metal clusters support Ubuntu 24.04 LTS with Linux kernel versions such as 6.8 and 6.11.

## Extended Definition

Bare metal clusters support Ubuntu 24.04 LTS with Linux kernel versions such as 6.8 and 6.11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/user-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/user-cluster-creation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation)

## Supporting Pages

### "Create hybrid clusters \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Afterwards, when creating user clusters by directly applying the cluster and node pool resources to the existing cluster, you must remove this section. gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /path/to/your/ssh private key gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Register your clusters to a fleet .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create hybrid clusters Stay organized with collections Save and categorize content based on your preferences.
- Prerequisites Latest bmctl is downloaded ( gs://anthos-baremetal-release/bmctl/1.34.200-gke.68/linux-amd64/bmctl ) from Cloud Storage.
- The following shows an example of the command to create a cluster named hybrid1 : bmctl create cluster -c hybrid1 Sample hybrid cluster configurations For example hybrid cluster configurations, see Hybrid clusters in the Cluster configuration samples.

### "Create user clusters \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/user-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/user-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create user clusters Stay organized with collections Save and categorize content based on your preferences.
- Prerequisites Latest bmctl is downloaded ( gs://anthos-baremetal-release/bmctl/1.34.200-gke.68/linux-amd64/bmctl ) from Cloud Storage.
- For example, for a user cluster named user1 , and an admin cluster kubeconfig file with the path kubeconfig bmctl-workspace/admin/admin-kubeconfig , the command would be: bmctl create cluster -c user1 --kubeconfig bmctl-workspace/admin/admin-kubeconfig Sample user cluster configurations For example user cluster configurations, see User clusters in the Cluster configuration samples.
- If the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in clusterOperations.location .

### "Create standalone clusters \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/standalone-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- Afterwards, when creating user clusters by directly applying the cluster and node pool resources to the existing cluster, you must remove this section. gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /path/to/your/ssh private key gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Register your clusters to a fleet .
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Create standalone clusters Stay organized with collections Save and categorize content based on your preferences.
- Prerequisites Before you create a standalone cluster, ensure the following: Latest bmctl is downloaded ( gs://anthos-baremetal-release/bmctl/1.34.200-gke.68/linux-amd64/bmctl ) from Cloud Storage.
- The following shows an example of the command to create a cluster called standalone1 : bmctl create cluster -c standalone1 Sample standalone cluster configurations For example standalone cluster configurations, see Standalone clusters in the Cluster configuration samples.

