---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.087Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "user cluster storage policy based management (SPBM)"
feature_slug: "user-cluster-storage-policy-based-management-spbm"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28"
keywords:
  - "user"
  - "cluster"
  - "storage"
  - "policy"
  - "based"
  - "management"
  - "spbm"
  - "clusters"
---

# user cluster storage policy based management (SPBM)

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

User clusters support storage policy based management (SPBM).

## Extended Definition

User cluster Storage Policy Based Management (SPBM) in Google Distributed Cloud (software only) for VMware is configured in the user cluster vCenter section by supplying `vCenter.storagePolicyName`, which defines the VM storage policy used for cluster node storage. For user cluster creation/configuration, Google documents that when specifying `vCenter.datacenter`, you must provide either `vCenter.datastore` or `vCenter.storagePolicyName` (not both), and example user-cluster manifests show `storagePolicyName` used while `datastore` is omitted. SPBM is the vSphere mechanism used to align VM storage configuration with application demands.

## Evidence Summary

The cited pages define SPBM usage via `vCenter.storagePolicyName`, explain user-cluster config requirements (including datastore vs. storagePolicyName), and describe `storagePolicyName` as the VM storage policy field in Google Distributed Cloud for VMware.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)

## Supporting Pages

### "Configure a storage policy \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about configuring SPBM in Google Distributed Cloud and explains how storage policies are defined, inherited, and overridden for user clusters.

Evidence snippets:
- Overview In vSphere, Storage Policy Based Management (SPBM) helps to align storage with the application demands of virtual machines.
- Example cluster configuration file Here is an example of an IP block file and a portion of a user cluster configuration file. user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 - ip: 172.16.21.3 - ip: 172.16.21.4 - ip: 172.16.21.5 - ip: 172.16.21.6 - ip: 172.16.21.7 - ip: 172.16.21.8 user-cluster-yaml apiVersion: v1 kind: UserCluster ... vCenter: address: "my-vcenter-server-2.my-domain.example" datacenter: "my-uc-data-center" cluster: "my-uc-vsphere-cluster" resourcePool: "my-uc-resource-pool" storagePolicyName: "my-storage-policy" network: vCenter: networkName: "my-uc-network" hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.9" hostname: "cp-vm-1" - ip: "172.16.21.10" hostname: "cp-vm-2" - ip: "172.16.21.11" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" ... enableControlplaneV2: true masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-pool-1" enableLoadBalancer: true - name: "worker-pool-2" vSphere: datastore: "my-np2-datastore" ...
- Example cluster configuration file Here is an example of an IP block file and a portion of a user cluster configuration file. user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 - ip: 172.16.21.3 - ip: 172.16.21.4 - ip: 172.16.21.5 - ip: 172.16.21.6 - ip: 172.16.21.7 - ip: 172.16.21.8 user-cluster-yaml apiVersion: v1 kind: UserCluster ... vCenter: storagePolicyName: "my-storage-policy" network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.9" hostname: "cp-vm-1" - ip: "172.16.21.10" hostname: "cp-vm-2" - ip: "172.16.21.11" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" ... enableControlplaneV2: true masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-pool-1" enableLoadBalancer: true - name: "worker-pool-2" vSphere: datastore: "my-np2-datastore" ...
- These are the important points to understand in the preceding example: The user cluster configuration file includes a value for vCenter.storagePolicy , but it doesn't include a value for vCenter.datastore .

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- If you specify vCenter.datacenter in the user cluster configuration file, then you must also specify: vCenter.networkName Either vCenter.datastore or vCenter.storagePolicyName Either vCenter.cluster or vCenter.resourcePool Using separate vCenter accounts A user cluster can use a different vCenter account, with different vCenter.credentials , from the admin cluster.
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

### "Admin cluster configuration file 1.28 \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-1.28)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- The vCenter.datastore field is immutable except when you set the field to an empty string when you migrate a datastore to Storage Policy Based Management (SPBM) . vCenter.storagePolicyName Required if vCenter.datastore isn't specified Immutable String The name of a VM storage policy for the cluster nodes.
- Specify [VSPHERE CLUSTER NAME]/Resources to use the default resource pool resourcePool: "" datastore: "" (Optional) Storage policy to use for cluster VM storage and default StorageClass storagePolicyName: "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath: "" The credentials to connect to vCenter credentials: reference to external credentials file fileRef: read credentials from this file path: "" entry in the credential file entry: "" (Optional) vSphere folder where cluster VMs will be located.
- Example: vCenter: resourcePool: "my-vsphere-cluster/Resources/parent-resource-pool/child-resource-pool" vCenter.datastore Required if vCenter.storagePolicyName isn't specified Immutable String The name of a vSphere datastore for your admin cluster.
- Mutable This section is required in the admin cluster if you want to manage the lifecycle of user clusters with GKE On-Prem API clients . cloudAuditLogging.projectID Required for Cloud Audit Logs Immutable String The ID of your fleet host project .

