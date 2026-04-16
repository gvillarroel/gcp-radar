---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.237Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Binary Authorization for GKE on-prem"
feature_slug: "binary-authorization-for-gke-on-prem"
latest_feature_date: "2020-11-16"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/binary-authorization-policy"
keywords:
  - "binary"
  - "authorization"
  - "gke"
  - "prem"
  - "adds"
  - "enforcement"
  - "includes"
  - "proxy"
---

# Binary Authorization for GKE on-prem

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Adds Binary Authorization enforcement for GKE on-prem and includes a proxy side cache for AdmissionReview responses.

## Extended Definition

Binary Authorization for Google Distributed Cloud (software only) for VMware is a feature that extends Google Cloud’s hosted deploy-time Binary Authorization enforcement to on-premises GKE user clusters. It is enabled during cluster creation by setting `binaryAuthorization.evaluationMode` (for example, `project singleton policy enforce`), and requires the fleet-host Kubernetes service account to have the `roles/binaryauthorization.policyEvaluator` IAM role. When deployed behind a proxy, the cluster setup requires outbound access to the Binary Authorization API endpoint (`binaryauthorization.googleapis.com`).

## Evidence Summary

The cited page provides direct feature definition, enablement settings, required IAM role, and proxy/API connectivity requirements for Binary Authorization enforcement in GKE on-prem.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/binary-authorization-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/binary-authorization-policy)

## Supporting Pages

### "Set up Binary Authorization policy enforcement \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/binary-authorization-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/binary-authorization-policy)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a setup guide specifically for enabling and configuring Binary Authorization policy enforcement on Google Distributed Cloud for VMware user clusters, including prerequisites, roles, API enablement, and GA/version guidance.

Evidence snippets:
- Binary Authorization for Google Distributed Cloud is a Google Cloud feature that extends the hosted, deploy-time enforcement of Binary Authorization to your on-premises user clusters.
- Add the Binary Authorization Policy Evaluator role to your fleet host project: To grant the Binary Authorization Policy Evaluator ( roles/binaryauthorization.policyEvaluator ) role to the Kubernetes service account on your fleet host project, run the following command: gcloud projects add-iam-policy-binding PROJECT ID \ --member = "serviceAccount: PROJECT ID .svc.id.goog[binauthz-system/binauthz-agent]" \ --role = "roles/binaryauthorization.policyEvaluator" If your cluster is running behind a proxy server, make sure the proxy server allows connections to the Binary Authorization API ( binaryauthorization.googleapis.com ).
- Enable the Binary Authorization policy during cluster creation You can enable the Binary Authorization policy enforcement with either gkectl or gcloud CLI. gkectl To enable Binary Authorization when you create a cluster with gkectl : Before you create your cluster, add binaryAuthorization.evaluationMode to the user cluster configuration file as shown in the following example: ... binaryAuthorization : evaluationMode : "project singleton policy enforce" ...
- Prerequisites Before you can enable Binary Authorization policy enforcement for a user cluster, ensure you've met the following prerequisite criteria: Register the cluster with a fleet: For a cluster created with gkectl , the cluster is registered to the Google Cloud project that you specify in the gkeConnect.projectID field in the cluster configuration file.

### "Create an admin workstation \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-workstation)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz ./ Service accounts and keys Make sure you have created the following required service accounts and JSON key files: component access connect-register logging-monitoring Also Make sure you have created any optional service service accounts and JSON key files that you need: audit logging Binary Authorization Place all of your JSON key files in the home directory of your admin workstation.
- Otherwise you must manually copy the keys to the home directory of your admin workstation: Connect-register service account Logging-monitoring service account If you created any of the following service accounts, you must manually copy the keys for those service accounts to the home directory of your admin workstation: Audit logging service account Binary Authorization service account Restoring the admin workstation from a backup file When you upgrade an admin workstation, the gkeadm upgrade command saves a backup file.
- For information on how to fill in the fields, Admin workstation configuration file . gcp: componentAccessServiceAccountKeyPath: " Fill in " vCenter: credentials: address: " Fill in " datacenter: " Fill in " datastore: " Fill in " cluster: " Fill in " network: " Fill in " resourcePool: " Fill in " caCertPath: " Fill in " If you want to create your admin workstation inside a vSphere VM folder, fill in the vCenter.folder field: vCenter: folder: " Fill in " If your admin workstation will be behind a proxy server, fill in the proxyURL field: adminWorkstation: proxyURL: " Fill in " If you want your admin workstation to get its IP address from a DHCP server, set ipAllocationMode to "dhcp" , and remove the hostconfig section: adminWorkstation: network: ipAllocationMode: "dhcp" If you want to specify a static IP address for your admin workstation, set ipAllocationMode to "static" , and fill in the hostconfig section: adminWorkstation: network: ipAllocationMode: "static" hostconfig: ip: " Fill in " gateway: " Fill in " netmask: " Fill in " dns: - " Fill in " Note: Check the vCenter network to make sure the static IP address that you enter is not already in use.
- See the fields that are already filled in. vCenter: credentials: fileRef: path: credential.yaml entry: vCenter adminWorkstation: name: gke-admin-ws-... cpus: 4 memoryMB: 8192 diskGB: 100 dataDiskName: gke-on-prem-admin-workstation-data-disk,,,.vmdk dataDiskMB: 512 network: ntpServer: ntp.ubuntu.com Warning: If you will be using static IPs for your admin and user clusters, make sure that admin workstation name specified in admin-ws-config.yaml isn't included as a hostname in the IP block files admin-ip-block.yaml and user-ip-block.yaml .

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- A newly created user cluster must have at least one node pool to transition to a healthy state. module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 18.0" project id = var.project id activate apis = [ "cloudresourcemanager.googleapis.com" , "anthos.googleapis.com" , "anthosgke.googleapis.com" , "container.googleapis.com" , "gkeconnect.googleapis.com" , "gkehub.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" , "monitoring.googleapis.com" , "logging.googleapis.com" , "iam.googleapis.com" , "compute.googleapis.com" , "anthosaudit.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "file.googleapis.com" , "connectgateway.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } This module is used to update the platform controller on your admin cluster.
- Clone the anthos-samples repository and change to the directory where the Terraform sample is located: git clone https://github.com/GoogleCloudPlatform/anthos-samples cd anthos-samples/anthos-onprem-terraform/avmw user cluster metallb Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars . project id = " FLEET HOST PROJECT ID " region = " REGION " admin cluster name = " ADMIN CLUSTER NAME " on prem version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "avmw-user-cluster-metallb" control plane node cpus = 4 control plane node memory = 8192 control plane node replicas = 3 control plane vip = " CONTROL PLANE VIP " ingress vip = " INGRESS VIP " lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.

