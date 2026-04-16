---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.354Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "bmctl cluster snapshot contents"
feature_slug: "bmctl-cluster-snapshot-contents"
latest_feature_date: "2021-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support"
keywords:
  - "bmctl"
  - "cluster"
  - "snapshot"
  - "contents"
  - "check"
  - "now"
  - "includes"
  - "yaml"
---

# bmctl cluster snapshot contents

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The bmctl check cluster snapshot now includes the cluster YAML file and bmctl-workspace logs.

## Extended Definition

The bmctl check cluster snapshot now includes the cluster YAML file and bmctl-workspace logs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- The cluster create and update operations check that node machines can be accessed with the specified user and SSH key. bmctl apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : nodeAccess : loginUser : abm gcloud CLI You specify the user that you want to use to access node machines in the --login-user flag, for example: gcloud container bare-metal clusters update abm-user-cluster1a \ --project = example-project-12345 \ --location = us-central1 \ --login-user = abm To enable passwordless sudo access for a user, follow these steps on each cluster node machine: Use sudo visudo to open the sudoers file for editing: sudo visudo -f /etc/sudoers The visudo command locks the sudoers file to prevent simultaneous edits and validates the syntax of the file upon saving.
- If you set this field to true in the cluster configuration file, the internal preflight checks are ignored when you apply resources to existing clusters. apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : cluster1 namespace : cluster-cluster1 annotations : baremetal.cluster.gke.io/private-mode : "true" spec : bypassPreflightCheck : true Add or remove cluster administrators bmctl You can add or remove a user or service account as a cluster administrator for a user cluster by specifying email addresses in the clusterSecurity.authorization.clusterAdmin.gcpAccounts section of the cluster configuration file.
- How to update clusters Generally, you do the following sequence of actions to update a cluster: bmctl Change the values of the applicable fields in the cluster's configuration file, which by default is located here: bmctl-workspace/CLUSTER-NAME/CLUSTER-NAME.yaml Update the cluster by running the bmctl update command: bmctl update cluster -c CLUSTER NAME --kubeconfig = KUBECONFIG Replace the following: CLUSTER NAME : the name of the cluster you want to update.
- To check the status of your cluster bare metal machines, use the following command: kubectl get baremetalmachines --kubeconfig ADMIN KUBECONFIG -A When the bare metal machines are ready, the response should look similar to the following sample response: NAMESPACE NAME CLUSTER READY INSTANCEID MACHINE ABM VERSION DESIRED ABM VERSION cluster-admin 10.200.0.2 dra true baremetal://10.200.0.2 10.200.0.2 1.33.0-gke.793 1.33.0-gke.793 cluster-user-dra 10.200.0.6 user-dra true baremetal://10.200.0.6 10.200.0.6 1.33.0-gke.793 1.33.0-gke.793 cluster-user-dra 10.200.0.7 user-dra true baremetal://10.200.0.7 10.200.0.7 1.33.0-gke.793 1.33.0-gke.793 cluster-user-dra 10.200.0.8 user-dra true baremetal://10.200.0.8 10.200.0.8 1.33.0-gke.793 1.33.0-gke.793 Limitations The bundled NVIDIA GPU Operator has the following limitations: The bundled NVIDIA GPU Operator supports the following NVIDIA software components only: NVIDIA Container Toolkit NVIDIA DCGM Exporter NVIDIA Kubernetes Device Plugin NVIDIA MIG Manager for Kubernetes.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open the generated file, bmctl-workspace/abm-user-cluster-metallb/abm-user-cluster-metallb.yaml , and replace its contents with the contents of the sample you verified in the preceding step.
- Open the generated file, bmctl-workspace/ ADMIN CLUSTER NAME / ADMIN CLUSTER NAME .yaml and replace its contents with the contents of the sample you verified in the preceding step.
- Among other things, this field lets you sign in to your cluster in the Google Cloud console to see more cluster details. --- apiVersion : v1 kind : Namespace metadata : name : cluster-abm-user-cluster-metallb --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : abm-user-cluster-metallb namespace : cluster-abm-user-cluster-metallb spec : type : user profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.50 ingressVIP : 10.200.0.51 addressPools : - name : pool1 addresses : - 10.200.0.51-10.200.0.70 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION clusterSecurity : authorization : clusterAdmin : gcpAccounts : - YOUR EMAIL ADDRESS storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 250 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : node-pool-1 namespace : cluster-abm-user-cluster-metallb spec : clusterName : abm-user-cluster-metallb nodes : - address : 10.200.0.5 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.
- The script creates a single service account with all required permissions and downloads the bm-gcr.json key referenced in the configuration file. gcrKeyPath : /root/bm-gcr.json sshPrivateKeyPath : /root/.ssh/id rsa gkeConnectAgentServiceAccountKeyPath : /root/bm-gcr.json gkeConnectRegisterServiceAccountKeyPath : /root/bm-gcr.json cloudOperationsServiceAccountKeyPath : /root/bm-gcr.json --- apiVersion : v1 kind : Namespace metadata : name : cluster- ADMIN CLUSTER NAME --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : ADMIN CLUSTER NAME namespace : cluster- ADMIN CLUSTER NAME spec : type : admin profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.3 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.48 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 110 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.

### "Get support \_|\_ Google Distributed Cloud (software only) for bare metal\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/getting-support)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Support tools To troubleshoot a Google Distributed Cloud incident, Cloud Customer Care relies on three pieces of information: Your environment configuration Logs from your clusters Metrics from your clusters Your environment configuration When you open a support case, provide key information about your cluster setup by running the following commands: For all your cluster types, capture information about Kubernetes and your nodes by running the bmctl check cluster --snapshot command.
- The following is sample content for a cluster named user1 in the cluster-user1 namespace: apiVersion : baremetal.cluster.gke.io/v1 kind : HealthCheck metadata : generateName : healthcheck- namespace : cluster-user1 spec : clusterName : user1 After you create the YAML file, apply the custom resource in the admin cluster that's managing the user cluster by using the kubectl command.
- In the sample, the ADMIN KUBECONFIG variable specifies the path to the admin cluster's kubeconfig file: kubectl --kubeconfig ADMIN KUBECONFIG create -f healthcheck-user1.yaml The command returns the following response: healthcheck.baremetal.cluster.gke.io/healthcheck-7c4qf created Wait until the health check job is completed.
- For user clusters, first create a health check YAML file with the cluster name and namespace, and then apply the file in the appropriate admin cluster: Create a YAML file with the following healthcheck properties.

