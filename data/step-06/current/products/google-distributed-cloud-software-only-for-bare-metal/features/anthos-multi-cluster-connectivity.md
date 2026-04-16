---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.354Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Anthos multi-cluster connectivity"
feature_slug: "anthos-multi-cluster-connectivity"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/admin-cluster-creation"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation"
keywords:
  - "anthos"
  - "multi"
  - "cluster"
  - "connectivity"
  - "connected"
  - "clusters"
  - "same"
  - "center"
---

# Anthos multi-cluster connectivity

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Connected Anthos clusters in the same data center can communicate with each other over pod IP addresses without NAT.

## Extended Definition

Connected Anthos clusters in the same data center can communicate with each other over pod IP addresses without NAT.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/admin-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/admin-cluster-creation)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation)

## Supporting Pages

### "Create admin clusters \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/admin-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/admin-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Afterwards, when creating user clusters by directly applying the cluster and node pool resources to the existing cluster, you must remove this section. gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /path/to/your/ssh private key gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Register your clusters to a fleet.
- Admin clusters managing multi-cluster workloads can provide highly available (HA) reliability.
- Workstation running bmctl has network connectivity to all nodes in the target user clusters.
- 4) standalone: to create a cluster that manages itself, runs user workloads, but does not manage other clusters. type : admin If the GKE On-Prem API is enabled in your Google Cloud project, all clusters in the project are enrolled in the GKE On-Prem API automatically in the region configured in clusterOperations.location .

### "Deploy clusters on the edge \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notice that the lines that were updated are highlighted: GSA Key used for provisioning (result of running ./scripts/create-primary-gsa.sh) LOCAL GSA FILE =$ ( pwd ) / build - artifacts / consumer - edge - gsa . json export LOCAL GSA FILE GCP Project ID export PROJECT ID = "abm-edge-project" Bucket to store cluster snapshot information export SNAPSHOT GCS = "abm-edge-project-cluster-snapshots" GCP Project Region (Adjust as desired) export REGION = "us-central1" GCP Project Zone (Adjust as desired) export ZONE = "us-central1-a" Gitlab Personal Access Token credentials (generated in Quick Start step 2) export SCM TOKEN USER = "LarryPage" export SCM TOKEN TOKEN = "oo901Sp-FHuzmz dgl0393atkf69c8L" Default Root Repo setup for multiple locations export ROOT REPO URL = "https://github.com/LarryPage/anthos-samples" export ROOT REPO BRANCH = "main" export ROOT REPO DIR = "/anthos-bm-edge-deployment/acm-config-sink" OIDC Configuration (off by default) export OIDC CLIENT ID = "" # Optional, requires GCP API setup work export OIDC CLIENT SECRET = "" # Optional export OIDC USER = "" # Optional export OIDC ENABLED = "false" # Flip to true IF implementing OIDC on cluster Create Compute Engine instances: ./scripts/cloud/create-cloud-gce-baseline.sh -c " $GCE COUNT " \ tee ./build-artifacts/gce-info Install a bare metal cluster with Ansible The script used in this guide creates clusters in groups of three Compute Engine instances.
- On your workstation, initialize the environment variables in a new shell instance: export PROJECT ID = " PROJECT ID " export REGION = "us-central1" export ZONE = "us-central1-a" port on the admin Compute Engine instance you use to set up an nginx proxy this allows to reach the workloads inside the cluster via the VM IP export PROXY PORT = "8082" should be a multiple of 3 since N/3 clusters are created with each having 3 nodes export GCE COUNT = "3" url to the fork of: https://github.com/GoogleCloudPlatform/anthos-samples export ROOT REPO URL = "https://github.com/ GITHUB USERNAME /anthos-samples" this is the username used to authenticate to your fork of this repository export SCM TOKEN USER = " GITHUB USERNAME " access token created in the earlier step export SCM TOKEN TOKEN = " ACCESS TOKEN " Replace the following values: PROJECT ID : your Google Cloud project ID.
- You may also run the following ansible playbook to fetch the token again: ansible-playbook all-get-login-tokens.yaml -i inventory In the Google Cloud console, go to the Kubernetes clusters page and use the copied token to sign in to the cnuc-1 cluster.
- Setting the GCE COUNT environment variable to 6 and re-running the same steps from the preceding sections creates three new Compute Engine instances ( cnuc-4 , cnuc-5 , cnuc-6 ) and a new standalone cluster called cnuc-4 .

### "Create hybrid clusters \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/hybrid-cluster-creation)
- Source ID: `site-docs-reference-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Afterwards, when creating user clusters by directly applying the cluster and node pool resources to the existing cluster, you must remove this section. gcrKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-gcr.json sshPrivateKeyPath : /path/to/your/ssh private key gkeConnectAgentServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-connect.json gkeConnectRegisterServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-register.json cloudOperationsServiceAccountKeyPath : bmctl-workspace/.sa-keys/my-gcp-project-anthos-baremetal-cloud-ops.json Register your clusters to a fleet .
- 4) standalone: to create a cluster that manages itself, runs user workloads, but does not manage other clusters. type : hybrid Change the config to specify a multi-node, high availability control plane.
- Since hybrid clusters manage themselves, running workloads on the same cluster increases the risk of security exposure to sensitive administrative data, like SSH keys.
- They run workloads, and at the same time, manage other clusters, and themselves.

