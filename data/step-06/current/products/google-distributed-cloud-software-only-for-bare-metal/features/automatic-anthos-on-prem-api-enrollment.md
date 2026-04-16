---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.348Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Automatic Anthos On-Prem API enrollment"
feature_slug: "automatic-anthos-on-prem-api-enrollment"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
keywords:
  - "automatic"
  - "anthos"
  - "prem"
  - "enrollment"
  - "automatically"
  - "enrolls"
  - "admin"
  - "user"
---

# Automatic Anthos On-Prem API enrollment

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Automatically enrolls admin and user clusters in the Anthos On-Prem API for lifecycle management.

## Extended Definition

Automatically enrolls admin and user clusters in the Anthos On-Prem API for lifecycle management.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)

## Supporting Pages

### "Create an admin cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-admin-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FLEET HOST PROJECT ID : The project that the admin cluster will be automatically registered to after the cluster is created.
- FLEET HOST PROJECT ID : The project that the admin cluster will be automatically registered to after the cluster is created.
- FLEET HOST PROJECT ID : The project that the admin cluster will be automatically registered to after the cluster is created.
- None anthos-baremetal-connect Connect Agent uses this service account to maintain a connection between your cluster and Google Cloud. roles/gkehub.connect anthos-baremetal-register Connect Agent uses this service account to register your clusters to the Google Cloud fleet. roles/gkehub.admin anthos-baremetal-cloud-ops Stackdriver Agent uses this service account to export logs and metrics from clusters to Cloud Logging and Cloud Monitoring. roles/logging.logWriter roles/monitoring.metricWriter roles/stackdriver.resourceMetadata.writer roles/opsconfigmonitoring.resourceMetadata.writer roles/monitoring.dashboardEditor roles/monitoring.viewer roles/serviceusage.serviceUsageViewer roles/kubernetesmetadata.publisher Specify SA key files If you prefer, you can pass bmctl the service account key files that you created.

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you are using the console to create the cluster, it enables the GKE On-Prem API automatically. gcloud services enable --project FLEET HOST PROJECT ID \ gkeonprem.googleapis.com Admin cluster prerequisites You need a working admin cluster before you can create a user cluster.
- Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars and save the file. project id = " PROJECT ID " region = " ON PREM API REGION " admin cluster name = " ADMIN CLUSTER NAME " bare metal version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "abm-user-cluster-metallb" control plane ips = [ "10.200.0.4" ] worker node ips = [ "10.200.0.5" , "10.200.0.6" ] control plane vip = "10.200.0.50" ingress vip = "10.200.0.51" lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The user cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The cluster name, project, and location together uniquely identify the cluster in Google Cloud.
- For example, to add two administrators: --admin-users=sara@example.com \ --admin-users=amal@example.com When the cluster is created, the GKE On-Prem API applies the Kubernetes role-based access control (RBAC) policies to the cluster to grant you and other admin users the Kubernetes clusterrole/cluster-admin role, which provides full access to every resource in the cluster in all namespaces.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / #[START anthos onprem terraform bare metal admin cluster basic main] module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 14.0" project id = var.project id activate apis = [ "anthos.googleapis.com" , "anthosaudit.googleapis.com" , "anthosgke.googleapis.com" , "cloudresourcemanager.googleapis.com" , "compute.googleapis.com" , "connectgateway.googleapis.com" , "container.googleapis.com" , "file.googleapis.com" , "gkehub.googleapis.com" , "iam.googleapis.com" , "kubernetesmetadata.googleapis.com" , "logging.googleapis.com" , "monitoring.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } Create a baremetal admin cluster and enroll it with the gkeonprem API resource " google gkeonprem bare metal admin cluster " "admin-cluster-basic" { name = var.admin cluster name description = "Bare metal admin cluster" provider = google depends on = [ google project service.default ] location = var.region bare metal version = var.bare metal version network config { island mode cidr { service address cidr blocks = [ "0.96.0.0/20" ] pod address cidr blocks = [ "192.168.0.0/16" ] } } node config { max pods per node = 250 } control plane { control plane node pool config { node pool config { operating system = "LINUX" dynamic "node configs" { for each = var.admin cp ips content { node ip = node configs.value } } } } } load balancer { port config { control plane load balancer port = 443 } vip config { control plane vip = var.admin cp vip } } storage { lvp share config { lvp config { path = "/mnt/localpv-share" storage class = "local-shared" } shared path pv count = 5 } lvp node mounts config { path = "/mnt/localpv-disk" storage class = "local-disks" } } dynamic "security config" { for each = length ( var.admin user emails ) == 0 ? [] : [ 1 ] content { authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } } lifecycle { ignore changes = [ annotations [ "onprem.cluster.gke.io/user-cluster-resource-link" ], annotations [ "alpha.baremetal.cluster.gke.io/cluster-metrics-webhook" ], annotations [ "baremetal.cluster.gke.io/operation" ], annotations [ "baremetal.cluster.gke.io/operation-id" ], annotations [ "baremetal.cluster.gke.io/start-time" ], annotations [ "baremetal.cluster.gke.io/upgrade-from-version" ] ] } } #[END anthos onprem terraform bare metal admin cluster basic main] For more information about the Terraform resource for admin clusters, see google gkeonprem bare metal admin cluster in the Terraform registry.
- Among other things, this field lets you sign in to your cluster in the Google Cloud console to see more cluster details. --- apiVersion : v1 kind : Namespace metadata : name : cluster-abm-user-cluster-metallb --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : abm-user-cluster-metallb namespace : cluster-abm-user-cluster-metallb spec : type : user profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.50 ingressVIP : 10.200.0.51 addressPools : - name : pool1 addresses : - 10.200.0.51-10.200.0.70 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION clusterSecurity : authorization : clusterAdmin : gcpAccounts : - YOUR EMAIL ADDRESS storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 250 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : node-pool-1 namespace : cluster-abm-user-cluster-metallb spec : clusterName : abm-user-cluster-metallb nodes : - address : 10.200.0.5 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.
- The script does the following: Enables the following Google Cloud APIs: anthos.googleapis.com anthosaudit.googleapis.com anthosgke.googleapis.com cloudresourcemanager.googleapis.com connectgateway.googleapis.com container.googleapis.com compute.googleapis.com gkeconnect.googleapis.com gkehub.googleapis.com gkeonprem.googleapis.com serviceusage.googleapis.com stackdriver.googleapis.com monitoring.googleapis.com logging.googleapis.com kubernetesmetadata.googleapis.com iam.googleapis.com opsconfigmonitoring.googleapis.com Instead of creating multiple service accounts for different APIs and services, the script creates a single service account called baremetal-gcr and grants it the following IAM roles: roles/gkehub.admin roles/gkehub.connect roles/logging.logWriter roles/monitoring.dashboardEditor roles/monitoring.metricWriter roles/monitoring.viewer roles/opsconfigmonitoring.resourceMetadata.writer roles/serviceusage.serviceUsageViewer roles/stackdriver.resourceMetadata.writer Creates the following VMs: One VM for the admin workstation One VM for the control plane node of the admin cluster Two VMs for the worker nodes of the user cluster One VM for the control plane node of the user cluster Verifies that SSH is enabled on all VMs and that the admin workstation has SSH access to all the other VMs that were created for cluster nodes.
- In the directory where you cloned anthos-samples , run the following command to copy the sample files for the MetalLB user cluster sample into a new folder for your admin cluster: cp -r anthos-samples/anthos-onprem-terraform/abm user cluster metallb \ anthos-samples/anthos-onprem-terraform/abm admin cluster basic Change to the abm admin cluster basic directory: cd anthos-samples/anthos-onprem-terraform/abm admin cluster basic Edit the Terraform files: variables.tf : Define a variable for the control plane node IP addresses (though we use just one for this demo).

