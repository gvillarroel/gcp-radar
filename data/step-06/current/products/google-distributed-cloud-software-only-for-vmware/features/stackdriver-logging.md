---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.319Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Stackdriver Logging"
feature_slug: "stackdriver-logging"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
keywords:
  - "stackdriver"
  - "logging"
  - "runs"
  - "each"
  - "node"
  - "replicates"
  - "selected"
  - "system"
---

# Stackdriver Logging

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Stackdriver Logging runs on each node and replicates selected system and service logs to your project by default.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Stackdriver Logging is provided by Google Distributed Cloud logging agents (including Stackdriver DaemonSet agents such as `stackdriver-log-forwarder`) that are installed and activated when a new admin or user cluster is created. By default, Cloud Logging is enabled and scoped to system-level components only, while you can configure logging scope (system components only versus system plus applications) after deployment, and logs can be queried from the Cloud Logging console. The feature requires Stackdriver/Logging APIs and specific IAM roles on the logging-monitoring project.

## Evidence Summary

The cited pages confirm default Cloud Logging agent activation on cluster creation, system-level default log scope, configurable logging scope, and required APIs/roles for Stackdriver Logging in Google Distributed Cloud for VMware.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- A newly created user cluster must have at least one node pool to transition to a healthy state. module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 18.0" project id = var.project id activate apis = [ "cloudresourcemanager.googleapis.com" , "anthos.googleapis.com" , "anthosgke.googleapis.com" , "container.googleapis.com" , "gkeconnect.googleapis.com" , "gkehub.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" , "monitoring.googleapis.com" , "logging.googleapis.com" , "iam.googleapis.com" , "compute.googleapis.com" , "anthosaudit.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "file.googleapis.com" , "connectgateway.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } This module is used to update the platform controller on your admin cluster.
- This field specifies whether Google Distributed Cloud creates Distributed Resource Scheduler (DRS) anti-affinity rules for your worker nodes, causing them to be spread across at least three physical hosts in your data center. stackdriver If you want to enable Cloud Logging and Cloud Monitoring for your cluster, fill in the stackdriver section.
- Think about how many node pools you need and which operating system you want to run in each of your pools.
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: The page states that Cloud Logging agents are enabled by default and replicate system-level logs to the cluster project, which is closely related to the logging behavior described.

Evidence snippets:
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- System-level logs are from Kubernetes pods running in one of the following namespaces: kube-system gke-system gke-connect istio-system config-management-system knative-serving Logs can be queried from the Cloud Logging console .
- Logs When you create a new cluster, Cloud Logging agents are enabled by default and scoped only to system-level components.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: The page states that Cloud Logging (Google Cloud Observability, formerly Stackdriver) is the built-in managed logging option for Google Distributed Cloud on VMware.

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- Enable the following APIs in your logging-monitoring project: Stackdriver API Cloud Monitoring API Cloud Logging API Config Monitoring for Ops API Grant the following IAM roles to your logging-monitoring service account on your logging-monitoring project. logging.logWriter monitoring.metricWriter stackdriver.resourceMetadata.writer monitoring.dashboardEditor opsconfigmonitoring.resourceMetadata.writer Log tags Many Google Distributed Cloud logs have a tag of F : logtag: "F" This tag means that the log entry is complete or full .
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.

