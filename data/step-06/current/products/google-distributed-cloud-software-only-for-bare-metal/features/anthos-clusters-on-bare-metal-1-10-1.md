---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.353Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Anthos clusters on bare metal 1.10.1"
feature_slug: "anthos-clusters-on-bare-metal-1-10-1"
latest_feature_date: "2022-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
keywords:
  - "anthos"
  - "clusters"
  - "bare"
  - "metal"
  - "10"
  - "version"
  - "available"
  - "download"
---

# Anthos clusters on bare metal 1.10.1

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Version 1.10.1 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21.

## Extended Definition

Version 1.10.1 of Anthos clusters on bare metal is available for download and runs on Kubernetes 1.21.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)

## Supporting Pages

### "Upgrade clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/upgrade)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- While this feature is in Preview, you must add the following annotation to the Cluster resource to enable the feature: preview.baremetal.cluster.gke.io/worker-node-pool-upgrade-rollback : enable 1.28 The node pool rollback capability isn't available for clusters at minor version 1.28 or earlier.
- The following cluster configuration file excerpt shows how you can modify the cluster configuration to support this partial upgrade: ... --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user001 namespace : cluster-user001 spec : type : user profile : default anthosBareMetalVersion : 1.34.200-gke.68 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : wpool01 namespace : cluster-user001 spec : clusterName : user001 anthosBareMetalVersion : 1.34.200-gke.68 nodes : - address : 10.200.0.1 - address : 10.200.0.2 - address : 10.200.0.3 ... - address : 10.200.0.8 apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : wpool02 namespace : cluster-user001 spec : clusterName : user001 anthosBareMetalVersion : 1.33.0 nodes : - address : 10.200.1.1 - address : 10.200.1.2 - address : 10.200.1.3 ... - address : 10.200.1.12 Upgrade node pools to the current cluster version If you've excluded node pools from a cluster upgrade, you can run a cluster upgrade that brings them up to the target cluster version.
- The following cluster configuration file excerpt shows how you can modify the cluster configuration to support this partial upgrade: ... --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : user001 namespace : cluster-user001 spec : type : user profile : default anthosBareMetalVersion : 1.34.200-gke.68 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : wpool01 namespace : cluster-user001 spec : clusterName : user001 anthosBareMetalVersion : 1.34.200-gke.68 nodes : - address : 10.200.0.1 - address : 10.200.0.2 - address : 10.200.0.3 ... - address : 10.200.0.8 apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : wpool02 namespace : cluster-user001 spec : clusterName : user001 anthosBareMetalVersion : "" nodes : - address : 10.200.1.1 - address : 10.200.1.2 - address : 10.200.1.3 ... - address : 10.200.1.12 Roll back a node pool upgrade There are many dependencies, such as compatibility with kubelet or plugins, that can affect the performance of your workloads.
- NAMESPACE NAME CLUSTER READY INSTANCEID MACHINE ABM VERSION DESIRED ABM VERSION cluster-nuc-admin001 192.0.2.52 nuc-admin001 true baremetal://192.0.2.52 192.0.2.52 1.28.0 1.28.0 cluster-nuc-user001 192.0.2.53 nuc-user001 true baremetal://192.0.2.53 192.0.2.53 1.16.2 1.16.2 cluster-nuc-user001 192.0.2.54 nuc-user001 true baremetal://192.0.2.54 192.0.2.54 1.16.2 1.16.2 To check the status.anthosBareMetalVersion (current version of the resource), retrieve details for individual resources: kubectl describe RESOURCE RESOURCE NAME \ --kubeconfig ADMIN KUBECONFIG \ --namespace CLUSTER NAMESPACE The following sample shows the BareMetalMachine details for the cluster node with IP address 192.0.2.53 : Name : 192.0.2.53 Namespace : cluster-nuc-user001 ...

### "Create an admin cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you already have the applicable version of bmctl downloaded to your admin workstation, you don't need to download it again. gcloud CLI Make sure to update components: gcloud components update Run the following command to sign in with your Google Account: gcloud auth login List the available bare metal cluster versions that you can install: The bmctl version that you download to create the bootstrap environment must match the version that you will install on the admin cluster. gcloud container bare-metal admin-clusters query-version-config \ --location= REGION Replace REGION with the Google Cloud region that you will use when you create the cluster.
- If needed, download the bmctl command-line tool to the current working directory. gcloud storage cp gs://anthos-baremetal-release/bmctl/ VERSION /linux-amd64/bmctl . chmod a+x ./bmctl Replace VERSION with the bare metal cluster version you want to install.
- None anthos-baremetal-connect Connect Agent uses this service account to maintain a connection between your cluster and Google Cloud. roles/gkehub.connect anthos-baremetal-register Connect Agent uses this service account to register your clusters to the Google Cloud fleet. roles/gkehub.admin anthos-baremetal-cloud-ops Stackdriver Agent uses this service account to export logs and metrics from clusters to Cloud Logging and Cloud Monitoring. roles/logging.logWriter roles/monitoring.metricWriter roles/stackdriver.resourceMetadata.writer roles/opsconfigmonitoring.resourceMetadata.writer roles/monitoring.dashboardEditor roles/monitoring.viewer roles/serviceusage.serviceUsageViewer roles/kubernetesmetadata.publisher Specify SA key files If you prefer, you can pass bmctl the service account key files that you created.
- To create an admin cluster with the bundled load balancer: gcloud container bare-metal admin-clusters create ADMIN CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --location= REGION \ --version= VERSION \ --max-pods-per-node= MAX PODS PER NODE \ --control-plane-vip= CONTROL PLANE VIP \ --control-plane-load-balancer-port= CONTROL PLANE LOAD BALANCER PORT \ --control-plane-node-configs ' CONTROL PLANE NODE CONFIG ' \ --island-mode-service-address-cidr-blocks= SERVICE ADDR CIDR \ --island-mode-pod-address-cidr-blocks= POD ADDR CIDR \ --lvp-share-path=/mnt/localpv-share \ --lvp-share-storage-class=local-shared \ --lvp-node-mounts-config-path=/mnt/localpv-disk \ --lvp-node-mounts-config-storage-class=local-disks If you want to use manual load balancing, add --enable-manual-lb to the command.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / #[START anthos onprem terraform bare metal admin cluster basic main] module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 14.0" project id = var.project id activate apis = [ "anthos.googleapis.com" , "anthosaudit.googleapis.com" , "anthosgke.googleapis.com" , "cloudresourcemanager.googleapis.com" , "compute.googleapis.com" , "connectgateway.googleapis.com" , "container.googleapis.com" , "file.googleapis.com" , "gkehub.googleapis.com" , "iam.googleapis.com" , "kubernetesmetadata.googleapis.com" , "logging.googleapis.com" , "monitoring.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } Create a baremetal admin cluster and enroll it with the gkeonprem API resource " google gkeonprem bare metal admin cluster " "admin-cluster-basic" { name = var.admin cluster name description = "Bare metal admin cluster" provider = google depends on = [ google project service.default ] location = var.region bare metal version = var.bare metal version network config { island mode cidr { service address cidr blocks = [ "0.96.0.0/20" ] pod address cidr blocks = [ "192.168.0.0/16" ] } } node config { max pods per node = 250 } control plane { control plane node pool config { node pool config { operating system = "LINUX" dynamic "node configs" { for each = var.admin cp ips content { node ip = node configs.value } } } } } load balancer { port config { control plane load balancer port = 443 } vip config { control plane vip = var.admin cp vip } } storage { lvp share config { lvp config { path = "/mnt/localpv-share" storage class = "local-shared" } shared path pv count = 5 } lvp node mounts config { path = "/mnt/localpv-disk" storage class = "local-disks" } } dynamic "security config" { for each = length ( var.admin user emails ) == 0 ? [] : [ 1 ] content { authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } } lifecycle { ignore changes = [ annotations [ "onprem.cluster.gke.io/user-cluster-resource-link" ], annotations [ "alpha.baremetal.cluster.gke.io/cluster-metrics-webhook" ], annotations [ "baremetal.cluster.gke.io/operation" ], annotations [ "baremetal.cluster.gke.io/operation-id" ], annotations [ "baremetal.cluster.gke.io/start-time" ], annotations [ "baremetal.cluster.gke.io/upgrade-from-version" ] ] } } #[END anthos onprem terraform bare metal admin cluster basic main] For more information about the Terraform resource for admin clusters, see google gkeonprem bare metal admin cluster in the Terraform registry.
- Among other things, this field lets you sign in to your cluster in the Google Cloud console to see more cluster details. --- apiVersion : v1 kind : Namespace metadata : name : cluster-abm-user-cluster-metallb --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : abm-user-cluster-metallb namespace : cluster-abm-user-cluster-metallb spec : type : user profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.50 ingressVIP : 10.200.0.51 addressPools : - name : pool1 addresses : - 10.200.0.51-10.200.0.70 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION clusterSecurity : authorization : clusterAdmin : gcpAccounts : - YOUR EMAIL ADDRESS storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 250 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : node-pool-1 namespace : cluster-abm-user-cluster-metallb spec : clusterName : abm-user-cluster-metallb nodes : - address : 10.200.0.5 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.
- The script creates a single service account with all required permissions and downloads the bm-gcr.json key referenced in the configuration file. gcrKeyPath : /root/bm-gcr.json sshPrivateKeyPath : /root/.ssh/id rsa gkeConnectAgentServiceAccountKeyPath : /root/bm-gcr.json gkeConnectRegisterServiceAccountKeyPath : /root/bm-gcr.json cloudOperationsServiceAccountKeyPath : /root/bm-gcr.json --- apiVersion : v1 kind : Namespace metadata : name : cluster- ADMIN CLUSTER NAME --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : ADMIN CLUSTER NAME namespace : cluster- ADMIN CLUSTER NAME spec : type : admin profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.3 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.48 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 110 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.
- Repeat the same steps to sign in to the admin cluster. gcloud CLI To create the user cluster: Run the following command to create the user cluster: gcloud container bare-metal clusters create abm-user-cluster-metallb \ --project = PROJECT ID \ --admin-cluster-membership = projects/ PROJECT ID /locations/ ON PREM API REGION /memberships/ ADMIN CLUSTER NAME \ --location = ON PREM API REGION \ --version = BMCTL VERSION \ --admin-users = YOUR EMAIL ADDRESS \ --metal-lb-address-pools = 'pool=lb-pool-1,manual-assign=True,addresses=10.200.0.51-10.200.0.70' \ --control-plane-node-configs = 'node-ip=10.200.0.4' \ --control-plane-vip = 10 .200.0.50 \ --control-plane-load-balancer-port = 443 \ --ingress-vip = 10 .200.0.51 \ --island-mode-service-address-cidr-blocks = 10 .96.0.0/20 \ --island-mode-pod-address-cidr-blocks = 192 .168.0.0/16 \ --lvp-share-path = /mnt/localpv-share \ --lvp-share-storage-class = local-shared \ --lvp-node-mounts-config-path = /mnt/localpv-disk \ --lvp-node-mounts-config-storage-class = local-disks After running the command, you see output like the following: Waiting for operation [projects/ PROJECT ID /locations/ ON PREM API REGION /operations/operation-1678304606537-5f668bde5c57e-341effde-b612ff8a] to complete...

