---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.201Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Anthos metadata agent"
feature_slug: "anthos-metadata-agent"
latest_feature_date: "2021-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "anthos"
  - "metadata"
  - "agent"
  - "collects"
  - "sends"
  - "cluster"
---

# Anthos metadata agent

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The Anthos metadata agent collects and sends cluster metadata to Google Cloud.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the Anthos metadata agent is a logging/monitoring component (listed as a Stackdriver metadata agent deployment/daemonset in cluster agents) that runs in clusters and sends Kubernetes resource metadata to the Stackdriver Resource Metadata API. The agent is installed as part of the in-cluster logging and monitoring agents when a new admin or user cluster is created. Its metadata (for resources such as pods, deployments, and nodes) is used to enrich metric queries with Kubernetes resource context.

## Evidence Summary

The logging and monitoring concept page explicitly identifies the metadata agent and its role in sending Kubernetes metadata to Stackdriver APIs, and states these agents are installed/activated with new clusters.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "User guide for Windows Server OS node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/user-guide-for-windows-server-os-node-pools)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- To complete these tasks, run the following commands: Pull the Windows container images docker pull gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 docker pull gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker pull gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 Tag the images to use private registry docker tag gcr.io/gke-on-prem-release/pause-win:gke windows pause 20210302 RC00 2019 $PRIVATE REGISTRY URL/pause-win:gke windows pause 20210302 RC00 2019 docker tag gcr.io/gke-on-prem-release/fluent-bit-win:v1.8.3-gke.1 ltsc2019 $PRIVATE REGISTRY URL/fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker tag gcr.io/gke-on-prem-release/gke-metrics-agent-windows:0.3.10-gke.0 2019 $PRIVATE REGISTRY URL/gke-metrics-agent-windows:0.3.10-gke.0 2019 Push to private registry docker push PRIVATE REGISTRY URL /pause-win:gke windows pause 20210302 RC00 2019 docker push PRIVATE REGISTRY URL /fluent-bit-win:v1.8.3-gke.1 ltsc2019 docker push PRIVATE REGISTRY URL /gke-metrics-agent-windows:0.3.10-gke.0 2019 Step 3: (Required if using proxy) Allowlisting URLs for creating Windows node pools If your cluster is behind a proxy server, add these URLs to your proxy server allowlist in addition to the other addresses that Google Distributed Cloud requires.
- Create an IIS file named iis.yaml with the following content: apiVersion: apps/v1 kind: Deployment metadata: name: iis labels: app: iis spec: replicas: 1 selector: matchLabels: app: iis template: metadata: labels: app: iis spec: nodeSelector: kubernetes.io/os: windows containers: - name: iis-server image: mcr.microsoft.com/windows/servercore/iis ports: - containerPort: 80 --- apiVersion: v1 kind: Service metadata: labels: app: iis name: iis spec: ports: - port: 80 protocol: TCP targetPort: 80 selector: app: iis sessionAffinity: None type: LoadBalancer loadBalancerIP: [Fill in with an available IP address] Step 2: Create the deployment and expose it via a service Create the deployment kubectl --kubeconfig USER CLUSTER KUBECONFIG create -f iis.yaml Step 3: Validate the Pod Check the status of the Pod using kubectl . kubectl --kubeconfig USER CLUSTER KUBECONFIG get pods Wait until the returned output shows that the Pod has a status of "Running".
- Verify that the kubelet, kube-proxy, and CNI service are running on the Windows VM Connect to your VM following the steps here and run the following commands, depending on your setup: For all configurations, run these commands: Check that kubelet and kube-proxy services have status 'Running' Get-Service kubelet Get-Service kube-proxy If your cluster is configured with windowsDataplaneV2 set to true , check that the antrea-agent, ovsdb-server and ovs-vswitchd services are 'Running'.
- You can verify whether the Windows VMs in the current network can contact the AD domain DNS server by running this command: PS C:\> nslookup DOMAIN NAME DOMAIN SERVER IP Server: example-1-2-3-4.anthos Address: 1.2.3.4 Name: example.org Address: 1.2.3.4 Step 1: Create Windows VM template with a customized script Execute a customized script before the Windows node joins the user cluster for Active Directory domain join.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- A newly created user cluster must have at least one node pool to transition to a healthy state. module "enable google apis primary" { source = "terraform-google-modules/project-factory/google//modules/project services" version = " > 18.0" project id = var.project id activate apis = [ "cloudresourcemanager.googleapis.com" , "anthos.googleapis.com" , "anthosgke.googleapis.com" , "container.googleapis.com" , "gkeconnect.googleapis.com" , "gkehub.googleapis.com" , "serviceusage.googleapis.com" , "stackdriver.googleapis.com" , "monitoring.googleapis.com" , "logging.googleapis.com" , "iam.googleapis.com" , "compute.googleapis.com" , "anthosaudit.googleapis.com" , "opsconfigmonitoring.googleapis.com" , "file.googleapis.com" , "connectgateway.googleapis.com" ] disable services on destroy = false } Enable GKE OnPrem API resource "google project service" "default" { project = var.project id service = "gkeonprem.googleapis.com" disable on destroy = false } This module is used to update the platform controller on your admin cluster.
- Clone the anthos-samples repository and change to the directory where the Terraform sample is located: git clone https://github.com/GoogleCloudPlatform/anthos-samples cd anthos-samples/anthos-onprem-terraform/avmw user cluster metallb Make a copy of the terraform.tfvars.sample file: cp terraform.tfvars.sample terraform.tfvars Modify the parameters values in terraform.tfvars . project id = " FLEET HOST PROJECT ID " region = " REGION " admin cluster name = " ADMIN CLUSTER NAME " on prem version = " VERSION " admin user emails = [ " YOUR EMAIL ADDRESS " , " ADMIN 2 EMAIL ADDRESS " ] cluster name = "avmw-user-cluster-metallb" control plane node cpus = 4 control plane node memory = 8192 control plane node replicas = 3 control plane vip = " CONTROL PLANE VIP " ingress vip = " INGRESS VIP " lb address pools = [ { name = "lbpool 1" , addresses = [ "10.200.0.51-10.200.0.70" ] } ] The following list describes the variables: project id : The ID of the project that you want to create the cluster in.
- This setting specifies the region where the following APIs and services run: GKE On-Prem API ( gkeonprem.googleapis.com ) Fleet service ( gkehub.googleapis.com ) Connect service ( gkeconnect.googleapis.com ) This setting also controls the region in which the following are stored: The user cluster metadata that the GKE On-Prem API needs to manage the cluster lifecycle The Cloud Logging and Cloud Monitoring data of system components The Admin Audit log created by Cloud Audit Logs The cluster name, project, and location together uniquely identify the cluster in Google Cloud.

### "Logging and monitoring \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/logging-and-monitoring)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The output of this command is similar to the following: gke-metrics-agent-global 1/1 Running 0 4h31m stackdriver-metadata-agent-cluster-level 1/1 Running 0 4h31m You can see all the DaemonSet agents by running the following command: kubectl --kubeconfig CLUSTER KUBECONFIG get daemonsets -l "managed-by=stackdriver" --all-namespaces The output of this command is similar to the following: gke-metrics-agent 1/1 Running 0 4h31m stackdriver-log-forwarder 1/1 Running 0 4h31m Configuring logging and monitoring agents for Google Distributed Cloud The agents installed with Google Distributed Cloud collect data about system components, subject to your settings and configuration, for the purposes of maintaining and troubleshooting issues with your clusters.
- For more information about using third-party solutions with Google Distributed Cloud, see the following: Collect logs on Google Distributed Cloud with Splunk Connect Stretching Elastic's capabilities with historical analysis, backups, and cross-cloud monitoring on Google Cloud Platform How logging and monitoring for Google Distributed Cloud works Logging and monitoring agents are installed and activated in each cluster when you create a new admin or user cluster.
- You can configure the in-cluster agents for the scope of monitoring and logging, as well as the level of metrics collected: Scope of logging and monitoring can be set to system components only (the default) or for system components and applications Level of metrics collected can be configured for an optimized set of metrics or for full metrics See Configuring logging and monitoring agents for Google Distributed Cloud on this document for more information.
- A Deployment that sends metadata for Kubernetes resources such as pods, deployments, or nodes to the Stackdriver Resource Metadata API; this data is used to enrich metric queries by enabling you to query by deployment name, node name, or even Kubernetes service name. kube-state-metrics A Deployment that listens to API server and generate metrics about the states of objects. node-exporter A DaemonSet that generates hardware and OS metrics.

