---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.054Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "cgroup v2 Linux images"
feature_slug: "cgroup-v2-linux-images"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "cgroup"
  - "v2"
  - "linux"
  - "images"
  - "cluster"
  - "nodes"
  - "can"
  - "use"
---

# cgroup v2 Linux images

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Cluster nodes can use Linux images with cgroup v2; Cluster nodes can use Linux images with cgroup v2.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the admin cluster configuration includes an `osImageType` setting that can be set to `ubuntu cgroupv2` (or `ubuntu containerd`). This indicates support for selecting a Linux image variant that uses the cgroup v2 model during admin cluster setup, including topology-domain based admin cluster creation.

## Evidence Summary

The cited pages document that `osImageType` is a configurable parameter for admin clusters and list `ubuntu cgroupv2` as an allowed Linux image type value.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- For more information about load balancing options, see Overview of load balancing . advancedNetworking If you plan to create an egress NAT gateway , set advancedNetworking to true . multipleNetworkInterfaces Decide whether you want to configure multiple network interfaces for Pods, and set multipleNetworkInterfaces accordingly. storage If you want to disable the deployment of vSphere CSI components, set storage.vSphereCSIDisabled to true . masterNode In the masterNode section, you can specify how many control-plane nodes you want for your user cluster: specify 3 for a highly-available (HA) cluster or 1 for a non-HA cluster.
- Create a user cluster with the tool of your choice This section provides steps for creating a user cluster using gkectl , the console, the gcloud CLI, and Terraform. gkectl Procedure overview These are the primary steps involved in using gkectl to create a user cluster: Fill in your configuration files Specify the details for your new cluster by completing a user cluster configuration file, a credentials configuration file, and possibly an IP block file. (Optional) Import OS images to vSphere, and push container images to the private registry if applicable.

### "Create an admin cluster for use in topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify a name here, you must set a name in vSphereInfraConfig.defaultTopologyDomain in the vSphere infrastructure configuration file. proxy If the network that will have your admin cluster nodes is behind a proxy server, fill in the proxy section. privateRegistry Decide where you want to keep container images for the Google Distributed Cloud components.
- Backing up the admin cluster , to a vSphere datastore isn't supported. autoRepair If you want to enable automatic node repair for your admin cluster, set autoRepair.enabled to true . secretsEncryption Because enableAdvancedCluster is set to true , remove this section. osImageType Set the osImageType . to either ubuntu cgroupv2 and ubuntu containerd . preparedSecrets Remove the preparedSecrets field.
- Distributed Resource Scheduler (DRS) anti-affinity rules aren't supported with topology domains. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.
- Verify that your admin cluster is running Verify that your admin cluster is running: kubectl get nodes --kubeconfig ADMIN CLUSTER KUBECONFIG Replace ADMIN CLUSTER KUBECONFIG with the path of your admin cluster kubeconfig file.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Defaults to false. enabled: false (Optional) Specify the proxy configuration proxy: The URL of the proxy url: "" The domains and IP addresses excluded from proxying noProxy: "" # (Optional) Use a private registry to host GKE images privateRegistry: # Do not include the scheme with your registry address address: "" credentials: # reference to external credentials file fileRef: # read credentials from this file path: "" # entry in the credential file entry: "" # The absolute or relative path to the CA certificate for this registry caCertPath: "" (Required): The absolute or relative path to the GCP service account key for pulling GKE images componentAccessServiceAccountKeyPath: "" (Required) Specify which GCP project to register your GKE OnPrem cluster to gkeConnect: projectID: "" # (Optional) The location of the GKE Hub and Connect service where the cluster is # registered to.
- It is supported in GKE on-prem version # 1.7+. (default: false) disableVRRPMAC: true Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true (Optional) Specify the admin master node configuration which can be added or edited only during cluster creation (default: 4 CPUs; 16384 MB memory; 3 replicas) adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Only used in 1.16 and older versions) Specify the addon node configuration which # can be added or edited only during cluster creation addonNode: # Enable auto resize for addon node autoResize: # Whether to enable auto resize for master.
- If you do not have DRS enabled, or if you do not have at least four hosts where vSphere VMs can be scheduled, set antiAffinityGroups.enabled to false . adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.cpus Preview Optional Immutable Integer Prepopulated: 4 Default: 4 The number of vCPUs for each control-plane node in the admin cluster.
- Either delete the field or leave it commented out. network Required Immutable This section holds information about your admin cluster network. network.hostConfig Required Immutable This section holds information about NTP servers, DNS servers, and DNS search domains used by the VMs that are your cluster nodes. network.hostConfig.dnsServers Required if network.hostConfig section is filled in.

