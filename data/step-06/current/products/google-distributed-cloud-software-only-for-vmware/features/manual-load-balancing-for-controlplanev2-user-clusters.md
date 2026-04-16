---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.112Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Manual load balancing for ControlplaneV2 user clusters"
feature_slug: "manual-load-balancing-for-controlplanev2-user-clusters"
latest_feature_date: "2023-05-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb"
keywords:
  - "manual"
  - "load"
  - "balancing"
  - "controlplanev2"
  - "user"
  - "clusters"
  - "anthos"
  - "vmware"
---

# Manual load balancing for ControlplaneV2 user clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on VMware adds GA support for manual load balancing in user clusters that use ControlplaneV2.

## Extended Definition

Manual load balancing for ControlplaneV2 user clusters in Google Distributed Cloud (software only) for VMware is a user-cluster creation mode where operators explicitly configure cluster load-balancing addressing (for example control-plane and ingress VIPs, address pools, and static IPs) while enabling ControlplaneV2. The documentation shows this in `gcloud`/Terraform creation workflows (for example `--enable-control-plane-v2` with `--metal-lb-config...manual-assign` and static IP configuration), and distinguishes it as a selectable option separate from MetalLB-bundled load balancing. When manual load balancing is chosen, cluster node IPs must use static addressing, and external services are exposed via NodePort-based service configuration.

## Evidence Summary

The cited pages describe available load-balancing options for GDC for VMware, show manual-assign/static IP creation examples with ControlplaneV2-enabled user-cluster workflows, and list the configuration requirements and implications of choosing manual load balancing.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- You specify the CIDR for a single IP address by appending /32 to the IP address. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --enable-dhcp Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

### "Overview of load balancing for Google Distributed Cloud \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- Source ID: `site-docs-root`
- Final score: 185
- Re-rank relevance: WEAK
- Re-rank rationale: The page confirms manual load balancing is available for user clusters with third‑party controllers, but it does not call out ControlplaneV2 or define this behavior specifically.

Evidence snippets:
- These are the available options: MetalLB bundled Manual load balancing for any third-party load balancer, such as F5 BIG-IP Citrix When you create user clusters using the Google Cloud console, the gcloud CLI, or Terraform, the kind of load balancer for the admin cluster and its user clusters must be the same.
- Node IP addresses If you choose MetalLB as your load balancer, then you can either use static IP addresses for your cluster nodes, or you can have your cluster nodes get their IP addresses from a DHCP server If you choose a manual load-balancing option, then you must use static IP addresses for your cluster nodes.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Overview of load balancing for Google Distributed Cloud Stay organized with collections Save and categorize content based on your preferences.
- Manually configured load balancer If you have chosen a manual load balancing option, developers can follow these steps to expose a Service to external clients: Create a Service of type NodePort.

### "Bundled load balancing with MetalLB \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- Source ID: `site-docs-reference`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: It shows MetalLB configuration and ControlPlaneV2-related cluster settings but does not describe manual load-balancing behavior or mode.

Evidence snippets:
- MetalLB will be deployed on the nodes in this node pool. enableControlplaneV2: true ... network: hostConfig: ... ipMode: type: "static" ipBlockFilePath: "config-folder/user-cluster-ipblock.yaml" ... controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.40.1" ips: - ip: "172.16.40.21" hostname: "user-cp" loadBalancer: kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.40.101-172.16.40.112 avoidBuggyIPs: true ... vips: controlPlaneVIP: "172.16.20.100" ingressVIP: "172.16.40.101" ... nodePools: - name: "node-pool-1" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true The configuration in the preceding example specifies a set of addresses available for Services.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Bundled load balancing with MetalLB Stay organized with collections Save and categorize content based on your preferences.
- We recommend that you use manual load balancing , or disable Dataplane IP Learning when using Seesaw or MetalLB as your load balancer.
- In this example, the admin cluster and user cluster are on two separate VLANs, and each cluster is in a separate subnet: Cluster Subnet Admin cluster 172.16.20.0/24 User cluster 172.16.40.0/24 admin-cluster.yaml The following portion of an admin cluster configuration file shows the configuration seen in the preceding diagram of: High availability control plane MetalLB load balancer VIP on MetalLB for Kubernetes API server of the admin cluster network: ... controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.20.1" ips: - ip: "172.16.20.50" hostname: "admin-cp-1" - ip: "172.16.20.51" hostname: "admin-cp-2" - ip: "172.16.20.52" hostname: "admin-cp-3" loadBalancer: kind: "MetalLB" ... vips: controlPlaneVIP: "172.16.20.100" ... adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 user-cluster.yaml The following portion of a user cluster configuration file shows the configuration of: Address pool for the MetalLB controller to choose from and assign to Services of type LoadBalancer .

