---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.326Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Dynamic Resource Allocation"
feature_slug: "dynamic-resource-allocation"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
keywords:
  - "dynamic"
  - "resource"
  - "allocation"
  - "lets"
  - "kubernetes"
  - "request"
  - "share"
  - "generic"
---

# Dynamic Resource Allocation

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

Dynamic Resource Allocation lets Kubernetes request and share generic resources such as GPUs among pods and containers.

## Extended Definition

Dynamic Resource Allocation lets Kubernetes request and share generic resources such as GPUs among pods and containers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)

## Supporting Pages

### "Update clusters \_|\_ Google Distributed Cloud (software only) for bare\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/how-to/update-clusters)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dynamic resource allocation is a Kubernetes API that lets you request and share generic resources, such as GPUs, among Pods and containers.
- To learn more about dynamic resource allocation, see Dynamic Resource Allocation in the Kubernetes documentation.
- Configure your cluster to enable dynamic resource allocation: Edit your cluster configuration file to include the preview.baremetal.cluster.gke.io/dynamic-resource-allocation: "enable" preview annotation and add DynamicResourceAllocation: true under featureGates in the kubeletConfig section: apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : dra namespace : cluster-dra annotations : preview.baremetal.cluster.gke.io/dynamic-resource-allocation : "enable" spec : controlPlane : nodePoolSpec : kubeletConfig : featureGates : DynamicResourceAllocation : true ... other cluster configuration Update the cluster by running the bmctl update command: bmctl update cluster -c CLUSTER NAME \ --kubeconfig = ADMIN KUBECONFIG Replace the following: CLUSTER NAME : the ame of the user cluster you are updating.
- To enable the DynamicResourceAllocation feature gate in node pools that have nodes with GPUs, set DynamicResourceAllocation to true in the featureGates section of the kubeletConfig section of the NodePool spec: For instructions to add and update a node pool, see Manage node pools in a cluster . apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : np namespace : cluster-dra spec : clusterName : dra kubeletConfig : featureGates : DynamicResourceAllocation : true nodes : ... other node pool configuration After you have added or updated the node pool, wait for all bare metal machines in the node pool to reach a Ready status.

### "Cluster configuration field reference \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/reference/cluster-config-ref)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- When using Prometheus as a persistent history provider for vertical Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.prometheus.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : the name of the Kubernetes Service (the Prometheus application service itself). prometheus : the name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : the default domain suffix for the Kubernetes cluster internal network.
- In this case, when using Prometheus as a custom metrics provider for horizontal Pod autoscaling, use the following fully qualified domain name (FQDN): http://prometheus.k8s.svc.cluster.local:9090 The FQDN follows standard Kubernetes naming conventions for internal DNS names : prometheus : The name of the Kubernetes Service (the Prometheus application service itself). k8s : The name of the Kubernetes Namespace where the service is running. svc : Indicates that this is a Service resource type within the cluster. cluster.local : The default domain suffix for the Kubernetes cluster internal network.
- Specify the mode for applying the Pod resource recommendations: In recommendation mode ( enableUpdater: false ), vertical Pod autoscaling analyzes resource usage and publishes recommended values for CPU and memory requests and limits in the status section of the VerticalPodAutoscaler custom resources you create.
- In automated update mode ( enableUpdater: true ), vertical Pod autoscaling analyzes resource usage and publishes recommended values for CPU and memory requests and limits in the status section of the VerticalPodAutoscaler custom resources you create.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / #[START anthos onprem terraform bare metal admin cluster basic main] module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 14.0" project id = var.project id activate apis = [ "anthos.googleapis.com" , "anthosaudit.googleapis.com" , "anthosgke.googleapis.com" , "cloudresourcemanager.googleapis.com" , "compute.googleapis.com" , "connectgateway.googleapis.com" , "container.googleapis.com" , "file.googleapis.com" , "gkehub.googleapis.com" , "iam.googleapis.com" , "kubernetesmetadata.googleapis.com" , "logging.googleapis.com" , "monitoring.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } Create a baremetal admin cluster and enroll it with the gkeonprem API resource " google gkeonprem bare metal admin cluster " "admin-cluster-basic" { name = var.admin cluster name description = "Bare metal admin cluster" provider = google depends on = [ google project service.default ] location = var.region bare metal version = var.bare metal version network config { island mode cidr { service address cidr blocks = [ "0.96.0.0/20" ] pod address cidr blocks = [ "192.168.0.0/16" ] } } node config { max pods per node = 250 } control plane { control plane node pool config { node pool config { operating system = "LINUX" dynamic "node configs" { for each = var.admin cp ips content { node ip = node configs.value } } } } } load balancer { port config { control plane load balancer port = 443 } vip config { control plane vip = var.admin cp vip } } storage { lvp share config { lvp config { path = "/mnt/localpv-share" storage class = "local-shared" } shared path pv count = 5 } lvp node mounts config { path = "/mnt/localpv-disk" storage class = "local-disks" } } dynamic "security config" { for each = length ( var.admin user emails ) == 0 ? [] : [ 1 ] content { authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } } lifecycle { ignore changes = [ annotations [ "onprem.cluster.gke.io/user-cluster-resource-link" ], annotations [ "alpha.baremetal.cluster.gke.io/cluster-metrics-webhook" ], annotations [ "baremetal.cluster.gke.io/operation" ], annotations [ "baremetal.cluster.gke.io/operation-id" ], annotations [ "baremetal.cluster.gke.io/start-time" ], annotations [ "baremetal.cluster.gke.io/upgrade-from-version" ] ] } } #[END anthos onprem terraform bare metal admin cluster basic main] For more information about the Terraform resource for admin clusters, see google gkeonprem bare metal admin cluster in the Terraform registry.
- Among other things, this field lets you sign in to your cluster in the Google Cloud console to see more cluster details. --- apiVersion : v1 kind : Namespace metadata : name : cluster-abm-user-cluster-metallb --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : abm-user-cluster-metallb namespace : cluster-abm-user-cluster-metallb spec : type : user profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.50 ingressVIP : 10.200.0.51 addressPools : - name : pool1 addresses : - 10.200.0.51-10.200.0.70 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION clusterSecurity : authorization : clusterAdmin : gcpAccounts : - YOUR EMAIL ADDRESS storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 250 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : node-pool-1 namespace : cluster-abm-user-cluster-metallb spec : clusterName : abm-user-cluster-metallb nodes : - address : 10.200.0.5 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.
- The script does the following: Enables the following Google Cloud APIs: anthos.googleapis.com anthosaudit.googleapis.com anthosgke.googleapis.com cloudresourcemanager.googleapis.com connectgateway.googleapis.com container.googleapis.com compute.googleapis.com gkeconnect.googleapis.com gkehub.googleapis.com gkeonprem.googleapis.com serviceusage.googleapis.com stackdriver.googleapis.com monitoring.googleapis.com logging.googleapis.com kubernetesmetadata.googleapis.com iam.googleapis.com opsconfigmonitoring.googleapis.com Instead of creating multiple service accounts for different APIs and services, the script creates a single service account called baremetal-gcr and grants it the following IAM roles: roles/gkehub.admin roles/gkehub.connect roles/logging.logWriter roles/monitoring.dashboardEditor roles/monitoring.metricWriter roles/monitoring.viewer roles/opsconfigmonitoring.resourceMetadata.writer roles/serviceusage.serviceUsageViewer roles/stackdriver.resourceMetadata.writer Creates the following VMs: One VM for the admin workstation One VM for the control plane node of the admin cluster Two VMs for the worker nodes of the user cluster One VM for the control plane node of the user cluster Verifies that SSH is enabled on all VMs and that the admin workstation has SSH access to all the other VMs that were created for cluster nodes.
- The script creates a single service account with all required permissions and downloads the bm-gcr.json key referenced in the configuration file. gcrKeyPath : /root/bm-gcr.json sshPrivateKeyPath : /root/.ssh/id rsa gkeConnectAgentServiceAccountKeyPath : /root/bm-gcr.json gkeConnectRegisterServiceAccountKeyPath : /root/bm-gcr.json cloudOperationsServiceAccountKeyPath : /root/bm-gcr.json --- apiVersion : v1 kind : Namespace metadata : name : cluster- ADMIN CLUSTER NAME --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : ADMIN CLUSTER NAME namespace : cluster- ADMIN CLUSTER NAME spec : type : admin profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.3 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.48 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 110 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.

