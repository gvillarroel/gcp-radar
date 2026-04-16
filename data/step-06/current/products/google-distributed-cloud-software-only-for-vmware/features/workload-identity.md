---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.270Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Workload Identity"
feature_slug: "workload-identity"
latest_feature_date: "2020-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console"
keywords:
  - "workload"
  - "identity"
  - "available"
  - "alpha"
  - "gke"
  - "prem"
---

# Workload Identity

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Workload Identity is available in Alpha for GKE on-prem.

## Extended Definition

The provided official excerpts do not explicitly describe a distinct "Workload Identity" feature for Google Distributed Cloud (software only) for VMware. They do state that access to and management of GKE on-prem clusters in the console, CLI, or Terraform is tied to Google identity authentication and specific IAM roles (including roles/container.viewer, roles/gkehub.viewer, and roles/gkeonprem.admin).

## Evidence Summary

The cited pages provide evidence for cluster lifecycle operations and IAM/Google identity prerequisites, but they do not directly document Workload Identity behavior or configuration details.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- A newly created user cluster must have at least one node pool to transition to a healthy state. module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 18.0" project id = var.project id activate apis = [ "cloudresourcemanager.googleapis.com" , "anthos.googleapis.com" , "anthosgke.googleapis.com" , "container.googleapis.com" , "gkeconnect.googleapis.com" , "gkehub.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" , "monitoring.googleapis.com" , "logging.googleapis.com" , "iam.googleapis.com" , "compute.googleapis.com" , "anthosaudit.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "file.googleapis.com" , "connectgateway.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } This module is used to update the platform controller on your admin cluster.
- Clone the anthos-samples repository and change to the directory where the Terraform sample is located: git clone https://github.com/GoogleCloudPlatform/anthos-samples cd anthos-samples/anthos-onprem-terraform/avmw user cluster metallb Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars . project id = " FLEET HOST PROJECT ID " region = " REGION " admin cluster name = " ADMIN CLUSTER NAME " on prem version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "avmw-user-cluster-metallb" control plane node cpus = 4 control plane node memory = 8192 control plane node replicas = 3 control plane vip = " CONTROL PLANE VIP " ingress vip = " INGRESS VIP " lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- If you want to use the Google Cloud console, the Google Cloud CLI, or Terraform to upgrade a user cluster, and you aren't a project owner, you must be granted the Identity and Access Management role roles/gkeonprem.admin on the Google Cloud project that the cluster was created in.
- If you plan to use the console, the gcloud CLI or Terraform for the upgrade, it takes about 7 to 14 days after a release for the version to be available in the GKE On-Prem API in all Google Cloud regions.
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .

### "Manage clusters from the Google Cloud console \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/connect-to-cluster-console)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The following commands shows how to grant the minimal roles needed to manage cluster lifecycle in the console: gcloud projects add-iam-policy-binding FLEET HOST PROJECT ID \ --member= MEMBER \ --role=roles/container.viewer gcloud projects add-iam-policy-binding FLEET HOST PROJECT ID \ --member= MEMBER \ --role=roles/gkehub.viewer gcloud projects add-iam-policy-binding FLEET HOST PROJECT ID \ --member= MEMBER \ --role=roles/gkeonprem.admin where: FLEET HOST PROJECT ID is the fleet host project.
- MEMBER is the user's email address in the format user:emailID , for example: user:alice@example.com Enable cluster lifecycle management in the console User clusters created by using standard tools (the console, the gcloud CLI, or Terraform) are automatically enrolled in the GKE On-Prem API, and let you perform cluster lifecycle management tasks in the console.
- Set up Google identity authentication To let users log in to the cluster using their Google identity, you need to configure the following: Users need specific Identity and Access Management (IAM) roles to be able to see and interact with clusters in the console on the GKE Clusters list .
- Login with Google identity is the simplest approach to authentication in the console, particularly if you are trying out Google Distributed Cloud with a minimal installation, and so we have described how to set this up in more detail below in Set up Google identity authentication .

