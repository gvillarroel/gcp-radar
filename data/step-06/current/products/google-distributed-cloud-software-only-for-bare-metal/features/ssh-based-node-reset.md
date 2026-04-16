---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.360Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "SSH-based node reset"
feature_slug: "ssh-based-node-reset"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites"
keywords:
  - "ssh"
  - "based"
  - "node"
  - "reset"
  - "individual"
  - "nodes"
  - "can"
  - "key"
---

# SSH-based node reset

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Individual nodes can be reset using the SSH key.

## Extended Definition

Individual nodes can be reset using the SSH key.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites)

## Supporting Pages

### "Configure nodes to authenticate to a private registry \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/configure-node-private-reg)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Configure nodes to authenticate to a private registry Stay organized with collections Save and categorize content based on your preferences.
- Once your cluster is configured, all Pods on qualified nodes can use the registries without having to specify imagePullSecrets in the Pod spec.
- You can configure your Google Distributed Cloud cluster so that its worker nodes can use private registries, including Artifact Registry.
- This feature is for user clusters and self-managing (hybrid and standalone) clusters with worker node pools, as shown in the following table: Deployment model Supported cluster types Admin and user cluster deployment Admin cluster User cluster 1 User cluster 2 Hybrid cluster deployment Hybrid cluster User cluster 1 User cluster 2 Standalone cluster deployment Standalone cluster Configure a self-managing cluster for private registries To configure a standalone or hybrid cluster to use node-level private registries: Edit the cluster configuration file to add the privateRegistries block in the credentials section: --- gcrKeyPath : baremetal/gcr.json sshPrivateKeyPath : .ssh/id rsa ... privateRegistries : - host : REGISTRY HOST caCertPath : CA CERT PATH pullCredentialConfigPath : CREDENTIALS FILE PATH ... --- apiVersion : v1 kind : Namespace metadata : name : cluster-hybrid-basic --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : hybrid-basic namespace : cluster-hybrid-basic annotations : preview.baremetal.cluster.gke.io/private-registry : "enable" # Version 1.29 clusters only ... spec : type : hybrid ...

### "Cluster node machine prerequisites \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/node-machine-prerequisites)
- Source ID: `site-iam-reference`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These checks confirm that the file systems for these directories have enough capacity: Directory Space requirement / (root directory) 4 GiB (4,294,967,296 bytes) /var/log/fluent-bit-buffers 12 GiB (12,884,901,888 bytes) /var/opt/buffered-metrics 10016 MiB (10,502,537,216 bytes) /var/lib/containerd 30 GiB (32,212,254,720 bytes) for control plane nodes 10 GiB (10,485,760 bytes) for worker nodes /var/lib/kubelet 500 MiB (524,288,000 bytes) /var/lib/etcd 20 GiB (21,474,836,480 bytes, applicable to control plane nodes only) /var/lib/etcd-events 5 GiB (5,368,709,120 bytes, applicable to control plane nodes only) To give you more control on the space you allocate for application workloads, preflight checks for cluster creation only check for the required free space for the Google Distributed Cloud system components.
- 1.29.0 and earlier Whenever you install Google Distributed Cloud, preflight checks run to ensure that the file systems backing the following directories have the required capacity: Directory Space requirement / (root directory) 17 GiB (18,253,611,008 bytes) /var/lib/containerd 30 GiB (32,212,254,720 bytes) for control plane nodes 10 GiB (10,485,760 bytes) for worker nodes /var/lib/kubelet 500 MiB (524,288,000 bytes) /var/lib/etcd 20 GiB (21,474,836,480 bytes, applicable to control plane nodes only) /var/lib/etcd-events 5 GiB (5,368,709,120 bytes, applicable to control plane nodes only) To give you more control on the space you allocate for application workloads, preflight checks for cluster creation only check for the required free space for the Google Distributed Cloud system components.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Cluster node machine prerequisites Stay organized with collections Save and categorize content based on your preferences.
- Regardless of your Google Distributed Cloud configuration, your nodes and clusters must have enough CPU, RAM, and storage resources to meet the needs of clusters and the workloads that you're running.

### "Deploy a cluster on OpenStack \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/openstack-abm-install)
- Source ID: `site-iam-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Adding the permissions means you don't need to create multiple service accounts for individual services. gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/gkehub.connect" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/gkehub.admin" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/logging.logWriter" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.dashboardEditor" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/stackdriver.resourceMetadata.writer" gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount:bm-gcr@ PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/opsconfigmonitoring.resourceMetadata.writer" Create a cluster configuration file Download the bmctl command line utility. mkdir baremetal && cd baremetal gcloud storage cp gs://anthos-baremetal-release/bmctl/1.34.200-gke.68/linux-amd64/bmctl . chmod a+x bmctl sudo mv bmctl /usr/local/sbin/ Create a cluster configuration file for your cluster: bmctl create config -c CLUSTER NAME Update the configuration file for use with OpenStack: cat > bmctl-workspace/ CLUSTER NAME / CLUSTER NAME .yaml << EOB --- gcrKeyPath: /home/abm/bm-gcr.json sshPrivateKeyPath: /home/abm/.ssh/id rsa gkeConnectAgentServiceAccountKeyPath: /home/abm/bm-gcr.json gkeConnectRegisterServiceAccountKeyPath: /home/abm/bm-gcr.json cloudOperationsServiceAccountKeyPath: /home/abm/bm-gcr.json --- apiVersion: v1 kind: Namespace metadata: name: openstack-cluster-ns --- apiVersion: baremetal.cluster.gke.io/v1 kind: Cluster metadata: name: CLUSTER NAME namespace: openstack-cluster-ns annotations: baremetal.cluster.gke.io/external-cloud-provider: "true" spec: type: hybrid anthosBareMetalVersion: 1 .34.200-gke.68 gkeConnect: projectID: PROJECT ID controlPlane: nodePoolSpec: clusterName: CLUSTER NAME nodes: - address: 10 .200.0.11 clusterNetwork: pods: cidrBlocks: - 192 .168.0.0/16 services: cidrBlocks: - 10 .96.0.0/20 loadBalancer: mode: manual ports: controlPlaneLBPort: 443 vips: controlPlaneVIP: 10 .200.0.101 ingressVIP: 10 .200.0.102 clusterOperations: location: us-central1 projectID: PROJECT ID storage: lvpNodeMounts: path: /mnt/localpv-disk storageClassName: node-disk lvpShare: numPVUnderSharedPath: 5 path: /mnt/localpv-share storageClassName: standard nodeAccess: loginUser: abm --- apiVersion: baremetal.cluster.gke.io/v1 kind: NodePool metadata: name: node-pool-1 namespace: openstack-cluster-ns spec: clusterName: CLUSTER NAME nodes: - address: 10 .200.0.12 EOB Create the cluster Create the cluster: bmctl create cluster -c CLUSTER NAME Running the bmctl command starts setting up a new hybrid cluster.
- OK [ 2021 -09-26 02 :15:23+0000 ] Applying resources for new cluster [ 2021 -09-26 02 :15:24+0000 ] Waiting for cluster to become ready OK [ 2021 -09-26 02 :25:04+0000 ] Writing kubeconfig file [ 2021 -09-26 02 :25:04+0000 ] kubeconfig of created cluster is at bmctl-workspace/ CLUSTER NAME / CLUSTER NAME -kubeconfig, please run [ 2021 -09-26 02 :25:04+0000 ] kubectl --kubeconfig bmctl-workspace/ CLUSTER NAME / CLUSTER NAME -kubeconfig get nodes [ 2021 -09-26 02 :25:04+0000 ] to get cluster node status. [ 2021 -09-26 02 :25:04+0000 ] Please restrict access to this file as it contains authentication credentials of your cluster. [ 2021 -09-26 02 :25:04+0000 ] Waiting for node pools to become ready OK [ 2021 -09-26 02 :25:24+0000 ] Moving admin cluster resources to the created admin cluster [ 2021 -09-26 02 :25:53+0000 ] Flushing logs...
- Verify that you can use SSH to connect to the other nodes: ssh abm@10.200.0.11 'echo SSH to $HOSTNAME succeeded' ssh abm@10.200.0.12 'echo SSH to $HOSTNAME succeeded' The expected responses for the preceding commands are: SSH to abm-cp1 succeeded SSH to abm-w1 succeeded Download the kubectl command line utility on the abm-ws VM. curl -LO "https://storage.googleapis.com/kubernetes-release/release/ $( curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt ) /bin/linux/amd64/kubectl" chmod +x kubectl sudo mv kubectl /usr/local/sbin/ Install Docker on the abm-ws VM: curl -fsSL https://get.docker.com -o get-docker.sh sh get-docker.sh sudo usermod -aG docker abm newgrp docker Configure the Google Cloud project and service account Obtain Google Cloud CLI access credentials for your user account.
- To verify your deployment, complete the following steps: Set the KUBECONFIG environment variable with the path to the cluster configuration file to run kubectl commands on the cluster: export KUBECONFIG = $HOME /bmctl-workspace/ CLUSTER NAME / CLUSTER NAME -kubeconfig kubectl get nodes You should see the nodes of the cluster printed, similar to the following output: NAME STATUS ROLES AGE VERSION abm-cp1 Ready control-plane,master 5m24s v1.20.5-gke.1301 abm-w1 Ready <none> 2m17s v1.20.5-gke.1301 Sign in to your cluster from Google Cloud console To observe your workloads in the Google Cloud console, you must sign in to the cluster.

