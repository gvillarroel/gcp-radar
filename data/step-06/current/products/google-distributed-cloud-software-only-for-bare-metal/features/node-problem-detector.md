---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.357Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Node Problem Detector"
feature_slug: "node-problem-detector"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile"
keywords:
  - "node"
  - "problem"
  - "detector"
  - "runs"
  - "default"
  - "all"
  - "nodes"
---

# Node Problem Detector

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Node Problem Detector runs by default on all nodes.

## Extended Definition

Node Problem Detector runs by default on all nodes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)

## Supporting Pages

### "Cluster node machine prerequisites \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These checks confirm that the file systems for these directories have enough capacity: Directory Space requirement / (root directory) 4 GiB (4,294,967,296 bytes) /var/log/fluent-bit-buffers 12 GiB (12,884,901,888 bytes) /var/opt/buffered-metrics 10016 MiB (10,502,537,216 bytes) /var/lib/containerd 30 GiB (32,212,254,720 bytes) for control plane nodes 10 GiB (10,485,760 bytes) for worker nodes /var/lib/kubelet 500 MiB (524,288,000 bytes) /var/lib/etcd 20 GiB (21,474,836,480 bytes, applicable to control plane nodes only) /var/lib/etcd-events 5 GiB (5,368,709,120 bytes, applicable to control plane nodes only) To give you more control on the space you allocate for application workloads, preflight checks for cluster creation only check for the required free space for the Google Distributed Cloud system components.
- 1.29.0 and earlier Whenever you install Google Distributed Cloud, preflight checks run to ensure that the file systems backing the following directories have the required capacity: Directory Space requirement / (root directory) 17 GiB (18,253,611,008 bytes) /var/lib/containerd 30 GiB (32,212,254,720 bytes) for control plane nodes 10 GiB (10,485,760 bytes) for worker nodes /var/lib/kubelet 500 MiB (524,288,000 bytes) /var/lib/etcd 20 GiB (21,474,836,480 bytes, applicable to control plane nodes only) /var/lib/etcd-events 5 GiB (5,368,709,120 bytes, applicable to control plane nodes only) To give you more control on the space you allocate for application workloads, preflight checks for cluster creation only check for the required free space for the Google Distributed Cloud system components.
- Regardless of your Google Distributed Cloud configuration, your nodes and clusters must have enough CPU, RAM, and storage resources to meet the needs of clusters and the workloads that you're running.
- Load balancer machines prerequisites When your deployment doesn't have a specialized load balancer node pool, you can have worker nodes or control plane nodes build a load balancer node pool.

### "Configure nodes to authenticate to a private registry \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Configure nodes to authenticate to a private registry Stay organized with collections Save and categorize content based on your preferences.
- Once your cluster is configured, all Pods on qualified nodes can use the registries without having to specify imagePullSecrets in the Pod spec.
- You can configure your Google Distributed Cloud cluster so that its worker nodes can use private registries, including Artifact Registry.
- This feature is for user clusters and self-managing (hybrid and standalone) clusters with worker node pools, as shown in the following table: Deployment model Supported cluster types Admin and user cluster deployment Admin cluster User cluster 1 User cluster 2 Hybrid cluster deployment Hybrid cluster User cluster 1 User cluster 2 Standalone cluster deployment Standalone cluster Configure a self-managing cluster for private registries To configure a standalone or hybrid cluster to use node-level private registries: Edit the cluster configuration file to add the privateRegistries block in the credentials section: --- gcrKeyPath : baremetal/gcr.json sshPrivateKeyPath : .ssh/id rsa ... privateRegistries : - host : REGISTRY HOST caCertPath : CA CERT PATH pullCredentialConfigPath : CREDENTIALS FILE PATH ... --- apiVersion : v1 kind : Namespace metadata : name : cluster-hybrid-basic --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-basic namespace : cluster-hybrid-basic annotations : preview.baremetal.cluster.gke.io/private-registry : "enable" # Version 1.29 clusters only ... spec : type : hybrid ...

### "Deploy clusters on the edge \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-edge-profile)
- Source ID: `site-iam-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On your workstation, initialize the environment variables in a new shell instance: export PROJECT ID = " PROJECT ID " export REGION = "us-central1" export ZONE = "us-central1-a" port on the admin Compute Engine instance you use to set up an nginx proxy this allows to reach the workloads inside the cluster via the VM IP export PROXY PORT = "8082" should be a multiple of 3 since N/3 clusters are created with each having 3 nodes export GCE COUNT = "3" url to the fork of: https://github.com/GoogleCloudPlatform/anthos-samples export ROOT REPO URL = "https://github.com/ GITHUB USERNAME /anthos-samples" this is the username used to authenticate to your fork of this repository export SCM TOKEN USER = " GITHUB USERNAME " access token created in the earlier step export SCM TOKEN TOKEN = " ACCESS TOKEN " Replace the following values: PROJECT ID : your Google Cloud project ID.
- In this tutorial you use Compute Engine virtual machines (VMs) to emulate nodes deployed on the edge, and a sample point-of-sale application as the edge workload.
- The three Compute Engine virtual machines (VMs) in the preceding diagram represent the physical hardware (or nodes) in a typical edge location.
- This is only a workaround for the purposes of this tutorial where the edge nodes are emulated using Google Cloud Compute Engine VMs.

