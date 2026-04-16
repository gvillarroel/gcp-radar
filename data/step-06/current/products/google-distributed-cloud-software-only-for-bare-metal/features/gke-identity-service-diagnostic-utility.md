---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:05:49.331Z"
product_name: "Google Distributed Cloud (software only) for bare metal"
product_slug: "google-distributed-cloud-software-only-for-bare-metal"
feature_name: "GKE Identity Service diagnostic utility"
feature_slug: "gke-identity-service-diagnostic-utility"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms"
keywords:
  - "gke"
  - "identity"
  - "diagnostic"
  - "utility"
  - "provides"
  - "diagnostics"
  - "information"
  - "login"
---

# GKE Identity Service diagnostic utility

Product: Google Distributed Cloud (software only) for bare metal
Coverage: MEDIUM

## Step 02 Summary

The GKE Identity Service diagnostic utility provides diagnostics information for login flow and OIDC configuration issues.

## Extended Definition

The GKE Identity Service diagnostic utility provides diagnostics information for login flow and OIDC configuration issues.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)

## Supporting Pages

### "Manage identity with GKE Identity Service \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/identity-manage)
- Source ID: `site-iam-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Troubleshoot the login flow To troubleshoot login flows that authenticate directly on the GKE Identity Service server with a fully qualified domain name (FQDN) , you can use the GKE Identity Service diagnostic utility.
- For more information, see GKE Identity Service diagnostic utility .
- The diagnostic utility simulates login flows with your OIDC provider to quickly identify configuration problems.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Create a user cluster using GKE On-Prem API clients \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-user-cluster-api)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- For more information about the required IAM and RBAC policies, see Set up Google identity authentication .
- All both nodes are labeled with node-pool-key=node-pool-value and have the taint dedicated=experimental:PreferNoSchedule , gcloud container bare-metal node-pools create default-pool \ --cluster=user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --node-configs='node-ip=10.200.0.10' \ --node-configs='node-ip=10.200.0.11,labels=key2.1=value2.1' \ --node-labels=node-pool-key=node-pool-value \ --node-taints=dedicated=experimental:PreferNoSchedule For more information, see the gcloud CLI reference .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- For example, to add two administrators: --admin-users=sara@example.com \ --admin-users=amal@example.com When the cluster is created, the GKE On-Prem API applies the Kubernetes role-based access control (RBAC) policies to the cluster to grant you and other admin users the Kubernetes clusterrole/cluster-admin role, which provides full access to every resource in the cluster in all namespaces.

### "Create demo Google Distributed Cloud admin and user clusters on Compute\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/try/admin-user-gce-vms)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. / #[START anthos onprem terraform bare metal admin cluster basic main] module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 14.0" project id = var.project id activate apis = [ "anthos.googleapis.com" , "anthosaudit.googleapis.com" , "anthosgke.googleapis.com" , "cloudresourcemanager.googleapis.com" , "compute.googleapis.com" , "connectgateway.googleapis.com" , "container.googleapis.com" , "file.googleapis.com" , "gkehub.googleapis.com" , "iam.googleapis.com" , "kubernetesmetadata.googleapis.com" , "logging.googleapis.com" , "monitoring.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } Create a baremetal admin cluster and enroll it with the gkeonprem API resource " google gkeonprem bare metal admin cluster " "admin-cluster-basic" { name = var.admin cluster name description = "Bare metal admin cluster" provider = google depends on = [ google project service.default ] location = var.region bare metal version = var.bare metal version network config { island mode cidr { service address cidr blocks = [ "0.96.0.0/20" ] pod address cidr blocks = [ "192.168.0.0/16" ] } } node config { max pods per node = 250 } control plane { control plane node pool config { node pool config { operating system = "LINUX" dynamic "node configs" { for each = var.admin cp ips content { node ip = node configs.value } } } } } load balancer { port config { control plane load balancer port = 443 } vip config { control plane vip = var.admin cp vip } } storage { lvp share config { lvp config { path = "/mnt/localpv-share" storage class = "local-shared" } shared path pv count = 5 } lvp node mounts config { path = "/mnt/localpv-disk" storage class = "local-disks" } } dynamic "security config" { for each = length ( var.admin user emails ) == 0 ? [] : [ 1 ] content { authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } } lifecycle { ignore changes = [ annotations [ "onprem.cluster.gke.io/user-cluster-resource-link" ], annotations [ "alpha.baremetal.cluster.gke.io/cluster-metrics-webhook" ], annotations [ "baremetal.cluster.gke.io/operation" ], annotations [ "baremetal.cluster.gke.io/operation-id" ], annotations [ "baremetal.cluster.gke.io/start-time" ], annotations [ "baremetal.cluster.gke.io/upgrade-from-version" ] ] } } #[END anthos onprem terraform bare metal admin cluster basic main] For more information about the Terraform resource for admin clusters, see google gkeonprem bare metal admin cluster in the Terraform registry.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Create the admin cluster bmctl To create an admin cluster with bmctl , you access the admin workstation VM in a terminal window and run commands from there: Use SSH to access the admin workstation VM, abm-ws , as root: gcloud compute ssh root@abm-ws --zone ZONE Set your user credentials as Application Default Credentials (ADC): gcloud auth application-default login Follow the prompts to select your Google Account for ADC.
- In the directory where you cloned anthos-samples , change to the directory where the Terraform sample is located: cd anthos-samples/anthos-onprem-terraform/abm user cluster metallb The sample provides an example variables file to pass in to main.tf .

