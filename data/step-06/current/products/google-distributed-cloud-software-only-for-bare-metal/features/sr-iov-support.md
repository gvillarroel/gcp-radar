---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.359Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "SR-IOV support"
feature_slug: "sr-iov-support"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg"
keywords:
  - "sr"
  - "iov"
  - "lets"
  - "clusters"
  - "configure"
  - "virtual"
  - "functions"
  - "node"
---

# SR-IOV support

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

SR-IOV support lets clusters configure virtual functions on supported node devices and choose the kernel module bound to each VF.

## Extended Definition

SR-IOV support lets clusters configure virtual functions on supported node devices and choose the kernel module bound to each VF.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)

## Supporting Pages

### "Deploy clusters on the edge \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On your workstation, initialize the environment variables in a new shell instance: export PROJECT ID = " PROJECT ID " export REGION = "us-central1" export ZONE = "us-central1-a" port on the admin Compute Engine instance you use to set up an nginx proxy this allows to reach the workloads inside the cluster via the VM IP export PROXY PORT = "8082" should be a multiple of 3 since N/3 clusters are created with each having 3 nodes export GCE COUNT = "3" url to the fork of: https://github.com/GoogleCloudPlatform/anthos-samples export ROOT REPO URL = "https://github.com/ GITHUB USERNAME /anthos-samples" this is the username used to authenticate to your fork of this repository export SCM TOKEN USER = " GITHUB USERNAME " access token created in the earlier step export SCM TOKEN TOKEN = " ACCESS TOKEN " Replace the following values: PROJECT ID : your Google Cloud project ID.
- In this tutorial you use Compute Engine virtual machines (VMs) to emulate nodes deployed on the edge, and a sample point-of-sale application as the edge workload.
- The three Compute Engine virtual machines (VMs) in the preceding diagram represent the physical hardware (or nodes) in a typical edge location.
- Notice that the lines that were updated are highlighted: GSA Key used for provisioning (result of running ./scripts/create-primary-gsa.sh) LOCAL GSA FILE =$ ( pwd ) / build - artifacts / consumer - edge - gsa . json export LOCAL GSA FILE GCP Project ID export PROJECT ID = "abm-edge-project" Bucket to store cluster snapshot information export SNAPSHOT GCS = "abm-edge-project-cluster-snapshots" GCP Project Region (Adjust as desired) export REGION = "us-central1" GCP Project Zone (Adjust as desired) export ZONE = "us-central1-a" Gitlab Personal Access Token credentials (generated in Quick Start step 2) export SCM TOKEN USER = "LarryPage" export SCM TOKEN TOKEN = "oo901Sp-FHuzmz dgl0393atkf69c8L" Default Root Repo setup for multiple locations export ROOT REPO URL = "https://github.com/LarryPage/anthos-samples" export ROOT REPO BRANCH = "main" export ROOT REPO DIR = "/anthos-bm-edge-deployment/acm-config-sink" OIDC Configuration (off by default) export OIDC CLIENT ID = "" # Optional, requires GCP API setup work export OIDC CLIENT SECRET = "" # Optional export OIDC USER = "" # Optional export OIDC ENABLED = "false" # Flip to true IF implementing OIDC on cluster Create Compute Engine instances: ./scripts/cloud/create-cloud-gce-baseline.sh -c " $GCE COUNT " \ tee ./build-artifacts/gce-info Install a bare metal cluster with Ansible The script used in this guide creates clusters in groups of three Compute Engine instances.

### "Configure nodes to authenticate to a private registry \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feature is for user clusters and self-managing (hybrid and standalone) clusters with worker node pools, as shown in the following table: Deployment model Supported cluster types Admin and user cluster deployment Admin cluster User cluster 1 User cluster 2 Hybrid cluster deployment Hybrid cluster User cluster 1 User cluster 2 Standalone cluster deployment Standalone cluster Configure a self-managing cluster for private registries To configure a standalone or hybrid cluster to use node-level private registries: Edit the cluster configuration file to add the privateRegistries block in the credentials section: --- gcrKeyPath : baremetal/gcr.json sshPrivateKeyPath : .ssh/id rsa ... privateRegistries : - host : REGISTRY HOST caCertPath : CA CERT PATH pullCredentialConfigPath : CREDENTIALS FILE PATH ... --- apiVersion : v1 kind : Namespace metadata : name : cluster-hybrid-basic --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-basic namespace : cluster-hybrid-basic annotations : preview.baremetal.cluster.gke.io/private-registry : "enable" # Version 1.29 clusters only ... spec : type : hybrid ...
- This feature is for user clusters and self-managing (hybrid and standalone) clusters with worker node pools, as shown in the following table: Deployment model Supported cluster types Admin and user cluster deployment Admin cluster User cluster 1 User cluster 2 Hybrid cluster deployment Hybrid cluster User cluster 1 User cluster 2 Standalone cluster deployment Standalone cluster 1.29 Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- QnpPTkxTRFZJVk5LMm9YV1JvNEpJY0ZoNFZ4MWRMRHpqMldEaHhrUEljWEhLdGR3dk5iS2tocU LUVORCBDRVJUSUZJQ0FURS0tLS0tCg== ``` Edit the user cluster configuration file to enable and configure the private registry: For version 1.29 clusters only, add the Preview feature annotation preview.baremetal.cluster.gke.io/private-registry: "enable" to enable the feature.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Configure nodes to authenticate to a private registry Stay organized with collections Save and categorize content based on your preferences.

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- All the nodes are labeled with cp-node-pool-key=cp-node-pool-value and have the taint dedicated=experimental:PreferNoSchedule . --control-plane-node-configs='node-ip=192.0.2.1' \ --control-plane-node-configs='node-ip=192.0.2.2,labels=key2.1=value2.1' \ --control-planer-node-configs='node-ip=192.0.2.3,labels=key3.1=value3.1;key3.2=value3.2' \ --control-plane-node-labels=cp-node-pool-key=cp-node-pool-value \ --control-plane-node-taints=dedicated=experimental:PreferNoSchedule \ Virtual IPs CONTROL PLANE VIP : The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster.
- All the nodes are labeled with cp-node-pool-key=cp-node-pool-value and have the taint dedicated=experimental:PreferNoSchedule . --control-plane-node-configs='node-ip=192.0.2.1' \ --control-plane-node-configs='node-ip=192.0.2.2,labels=key2.1=value2.1' \ --control-planer-node-configs='node-ip=192.0.2.3,labels=key3.1=value3.1;key3.2=value3.2' \ --control-plane-node-labels=cp-node-pool-key=cp-node-pool-value \ --control-plane-node-taints=dedicated=experimental:PreferNoSchedule \ Virtual IPs CONTROL PLANE VIP : The IP address that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster.
- You can change these addresses whenever you update or upgrade a cluster. worker node ips : A list of one or more IPv4 addresses for the worker node machines. control plane vip : The virtual IP address (VIP) that you have chosen to configure on the load balancer for the Kubernetes API server of the user cluster. ingress vip : The IP address that you have chosen to configure on the load balancer for the ingress proxy. lb address pools : A list of maps that define the address pools to be used by the MetalLB load balancer.
- All nodes in the load balancer node pool must be in the same Layer 2 subnet as the load balancer virtual IPs (VIPs) that you configure in the Load balancer address pools section.

