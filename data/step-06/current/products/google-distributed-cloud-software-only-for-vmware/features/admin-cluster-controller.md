---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.140Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Admin cluster controller"
feature_slug: "admin-cluster-controller"
latest_feature_date: "2022-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "admin"
  - "cluster"
  - "controller"
  - "adds"
  - "managing"
  - "lifecycle"
---

# Admin cluster controller

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Adds a controller for managing the admin cluster lifecycle.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the admin cluster controller capability refers to the controller functionality used during admin cluster creation and lifecycle operations: a temporary Kubernetes-in-Docker (kind) bootstrap cluster hosts controllers that provision nodes, run preflight checks, and register the admin cluster to Fleet. The admin cluster configuration also exposes GKE On-Prem API integration for lifecycle management of user clusters (including gcloud UI/Terraform and console workflows), with associated cluster metadata and logs/metrics managed in the configured region.

## Evidence Summary

The cited Google Cloud docs describe admin-cluster creation flow, bootstrap-based controller usage, and GKE On-Prem API configuration required to manage cluster lifecycle.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The Google Cloud API Location field corresponds to the --location flag in the gkectl register bootstrap command.
- For information to help you choose a tool and limitations with some tools, see Choose a tool to manage cluster lifecycle . gkectl Procedure overview These are the primary steps involved in creating an admin cluster: Fill in your configuration files.
- When Google Distributed Cloud creates an admin cluster, it deploys a Kubernetes in Docker (kind) cluster to temporarily host the Kubernetes controllers needed to create the admin cluster.
- When you create the admin cluster, the controllers on the bootstrap cluster will provision nodes, run preflight checks, and register the admin cluster to the fleet.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- A newly created user cluster must have at least one node pool to transition to a healthy state. module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 18.0" project id = var.project id activate apis = [ "cloudresourcemanager.googleapis.com" , "anthos.googleapis.com" , "anthosgke.googleapis.com" , "container.googleapis.com" , "gkeconnect.googleapis.com" , "gkehub.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" , "monitoring.googleapis.com" , "logging.googleapis.com" , "iam.googleapis.com" , "compute.googleapis.com" , "anthosaudit.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "file.googleapis.com" , "connectgateway.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } This module is used to update the platform controller on your admin cluster.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The user cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The cluster name, project, and location together uniquely identify the cluster in Google Cloud.
- This setting specifies the region where the following are stored: The user cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The cluster name, project, and location together uniquely identify the cluster in Google Cloud.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters in using GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .
- This section is required in the admin cluster if you want to manage the lifecycle of user clusters in the Google Cloud console .
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Default to "global" when unspecified. location: us-central1 The absolute or relative path to the key file for a GCP service account used to register the cluster registerServiceAccountKeyPath: "" # (Optional) Specify if you wish to explicitly enable/disable the cloud hosted gkeonprem # API to enable/disable cluster lifecycle management from gcloud UI and Terraform. gkeOnPremAPI: enabled: false (Required) Specify which GCP project to connect your logs and metrics to stackdriver: The project ID for logs and metrics.

