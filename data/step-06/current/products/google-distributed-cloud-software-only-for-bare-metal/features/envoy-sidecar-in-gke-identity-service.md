---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.327Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "Envoy sidecar in GKE Identity Service"
feature_slug: "envoy-sidecar-in-gke-identity-service"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
keywords:
  - "envoy"
  - "sidecar"
  - "gke"
  - "identity"
  - "includes"
  - "improve"
  - "security"
  - "reliability"
---

# Envoy sidecar in GKE Identity Service

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

GKE Identity Service includes an Envoy sidecar to improve security, reliability, and performance.

## Extended Definition

GKE Identity Service includes an Envoy sidecar to improve security, reliability, and performance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- Source ID: `site-iam-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access clusters After GKE Identity Service has been set up, users can sign in to configured clusters using either the command line or the Google Cloud console. (Recommended) Learn how to sign in to registered clusters with your OIDC or LDAP ID in Accessing clusters using GKE Identity Service .
- Troubleshoot the login flow To troubleshoot login flows that authenticate directly on the GKE Identity Service server with a fully qualified domain name (FQDN) , you can use the GKE Identity Service diagnostic utility.
- Google Distributed Cloud supports OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP) as authentication mechanisms for interacting with a cluster's Kubernetes API server, using GKE Identity Service.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Manage identity with GKE Identity Service Stay organized with collections Save and categorize content based on your preferences.

### "Google Distributed Cloud (software only) for bare metal overview \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/concepts/about-bare-metal)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Improved etcd reliability To monitor the size and defragment etcd databases, Google Distributed Cloud control planes include an etcddefrag Pod.
- Once you select the deployment model that meets your particular organizational and use case needs, you can choose from a range of supported load balancing modes, IP addressing options, security features, connectivity options, and more.
- Improved performance and lowered cost Google Distributed Cloud manages application deployment and health across your existing corporate data centers for more efficient operation.
- Most importantly, there is no additional VM complexity when deploying security systems, and you maintain complete OS control when interacting with existing security systems.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / #[START anthos onprem terraform bare metal admin cluster basic main] module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 14.0" project id = var.project id activate apis = [ "anthos.googleapis.com" , "anthosaudit.googleapis.com" , "anthosgke.googleapis.com" , "cloudresourcemanager.googleapis.com" , "compute.googleapis.com" , "connectgateway.googleapis.com" , "container.googleapis.com" , "file.googleapis.com" , "gkehub.googleapis.com" , "iam.googleapis.com" , "kubernetesmetadata.googleapis.com" , "logging.googleapis.com" , "monitoring.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } Create a baremetal admin cluster and enroll it with the gkeonprem API resource " google gkeonprem bare metal admin cluster " "admin-cluster-basic" { name = var.admin cluster name description = "Bare metal admin cluster" provider = google depends on = [ google project service.default ] location = var.region bare metal version = var.bare metal version network config { island mode cidr { service address cidr blocks = [ "0.96.0.0/20" ] pod address cidr blocks = [ "192.168.0.0/16" ] } } node config { max pods per node = 250 } control plane { control plane node pool config { node pool config { operating system = "LINUX" dynamic "node configs" { for each = var.admin cp ips content { node ip = node configs.value } } } } } load balancer { port config { control plane load balancer port = 443 } vip config { control plane vip = var.admin cp vip } } storage { lvp share config { lvp config { path = "/mnt/localpv-share" storage class = "local-shared" } shared path pv count = 5 } lvp node mounts config { path = "/mnt/localpv-disk" storage class = "local-disks" } } dynamic "security config" { for each = length ( var.admin user emails ) == 0 ? [] : [ 1 ] content { authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } } lifecycle { ignore changes = [ annotations [ "onprem.cluster.gke.io/user-cluster-resource-link" ], annotations [ "alpha.baremetal.cluster.gke.io/cluster-metrics-webhook" ], annotations [ "baremetal.cluster.gke.io/operation" ], annotations [ "baremetal.cluster.gke.io/operation-id" ], annotations [ "baremetal.cluster.gke.io/start-time" ], annotations [ "baremetal.cluster.gke.io/upgrade-from-version" ] ] } } #[END anthos onprem terraform bare metal admin cluster basic main] For more information about the Terraform resource for admin clusters, see google gkeonprem bare metal admin cluster in the Terraform registry.
- Among other things, this field lets you sign in to your cluster in the Google Cloud console to see more cluster details. --- apiVersion : v1 kind : Namespace metadata : name : cluster-abm-user-cluster-metallb --- apiVersion : baremetal.cluster.gke.io/v1 kind : Cluster metadata : name : abm-user-cluster-metallb namespace : cluster-abm-user-cluster-metallb spec : type : user profile : default anthosBareMetalVersion : BMCTL VERSION gkeConnect : projectID : PROJECT ID controlPlane : nodePoolSpec : nodes : - address : 10.200.0.4 clusterNetwork : pods : cidrBlocks : - 192.168.0.0/16 services : cidrBlocks : - 10.96.0.0/20 loadBalancer : mode : bundled ports : controlPlaneLBPort : 443 vips : controlPlaneVIP : 10.200.0.50 ingressVIP : 10.200.0.51 addressPools : - name : pool1 addresses : - 10.200.0.51-10.200.0.70 clusterOperations : projectID : PROJECT ID location : ON PREM API REGION clusterSecurity : authorization : clusterAdmin : gcpAccounts : - YOUR EMAIL ADDRESS storage : lvpNodeMounts : path : /mnt/localpv-disk storageClassName : local-disks lvpShare : path : /mnt/localpv-share storageClassName : local-shared numPVUnderSharedPath : 5 nodeConfig : podDensity : maxPodsPerNode : 250 --- apiVersion : baremetal.cluster.gke.io/v1 kind : NodePool metadata : name : node-pool-1 namespace : cluster-abm-user-cluster-metallb spec : clusterName : abm-user-cluster-metallb nodes : - address : 10.200.0.5 Replace the contents of the generated configuration file on your admin workstation with the contents from the preceding sample.
- For simplicity, use abm-user-cluster-metallb for the user cluster name, to match the hard-coded name in the Terraform scripts. bmctl Use SSH to access the admin workstation VM, abm-ws , as root: gcloud compute ssh root@abm-ws --zone ZONE Generate a cluster configuration file: bmctl create config -c abm-user-cluster-metallb \ --project-id = PROJECT ID In the following user cluster configuration file, set your email address in the clusterSecurity section and verify the rest of the settings: The following cluster configuration file is filled in with the values that you entered in the planning table earlier.
- In addition to the values you entered, note the following differences from the generated configuration file: Comments have been removed from this sample to improve readability.

