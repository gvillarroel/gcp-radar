---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.238Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "GKE Data Plane V2"
feature_slug: "gke-data-plane-v2"
latest_feature_date: "2020-11-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "gke"
  - "plane"
  - "v2"
  - "provides"
  - "programmable"
  - "path"
  - "prem"
  - "clusters"
---

# GKE Data Plane V2

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Provides a programmable data path for GKE on-prem clusters that enables new network security capabilities.

## Extended Definition

GKE Data Plane V2 for Google Distributed Cloud (software only) for VMware is a configurable user-cluster option that can be turned on when creating a cluster. In the cluster creation examples, it is represented by `enableDataplaneV2: true` in the user-cluster configuration, alongside related plane-related flags (for example `--enable-control-plane-v2`). The provided excerpts only confirm how it is enabled and do not detail the internal behavior of the data plane itself.

## Evidence Summary

The cited page provides concrete cluster-creation examples showing the `enableDataplaneV2` setting and related V2 control plane flags, but not a full feature specification.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- If the admin cluster is already on the correct version, then this module does not change anything module "gcloud update admin cluster platform controller" { source = "terraform-google-modules/gcloud/google" version = " > 3.0" platform = "linux" create cmd entrypoint = "gcloud" create cmd body = << EOT beta container vmware admin-clusters \ update $ { var.admin cluster name } \ --required-platform-version = $ { var.on prem version } \ --project $ { var.project id } \ --location $ { var.region } EOT } Create an anthos vmware user cluster and enroll it with the gkeonprem API resource "google gkeonprem vmware cluster" "default" { name = var.cluster name description = "Anthos VMware user cluster with MetalLB" provider = google-beta depends on = [ google project service.default , module.gcloud update admin cluster platform controller ] location = var.region on prem version = var.on prem version admin cluster membership = "projects/${var.project id}/locations/global/memberships/${var.admin cluster name}" network config { service address cidr blocks = [ "10.96.0.0/12" ] pod address cidr blocks = [ "192.168.0.0/16" ] dhcp ip config { enabled = true } } control plane node { cpus = var.control plane node cpus memory = var.control plane node memory replicas = var.control plane node replicas } load balancer { vip config { control plane vip = var.control plane vip ingress vip = var.ingress vip } metal lb config { dynamic "address pools" { for each = var.lb address pools content { pool = address pools.value.name addresses = address pools.value.addresses } } } } authorization { dynamic "admin users" { for each = var.admin user emails content { username = admin users.value } } } } Create a node pool for the anthos vmware user cluster resource "google gkeonprem vmware node pool" "default" { name = "${var.cluster name}-nodepool" display name = "Nodepool for ${var.cluster name}" provider = google-beta vmware cluster = google gkeonprem vmware cluster.default.name location = var.region config { replicas = 3 image type = "ubuntu containerd" enable load balancer = true } depends on = [ google gkeonprem vmware cluster.default ] } For more information and other examples, see the google gkeonprem vmware cluster reference documentation .
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- We record events for the start and end of each critical upgrade phase, including: ControlPlaneUpgrade MasterNodeUpgrade AddonsUpgrade NodePoolsUpgrade Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal NodePoolsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating node pools: pool-2: Creating or updating node pool Normal AddonsUpgradeStarted 22m onprem-user-cluster-controller Creating or updating addon workloads Normal ControlPlaneUpgradeStarted 25m onprem-user-cluster-controller Creating or updating cluster control plane workloads: deploying user-kube-apiserver-base, ...: 14/15 pods are ready Normal ControlPlaneUpgradeFinished 23m onprem-user-cluster-controller Control plane is running When the upgrade is complete, gkectl list clusters shows a STATUS of RUNNING : NAMESPACE NAME READY STATE AGE VERSION my-uc-gkeonprem-mgmt my-uc True RUNNING 9h 1.34.0-gke.1 Also, when the upgrade is complete, gkectl describe clusters shows a Last GKE On Prem Version field under Status .
- Example output: Events: Type Reason Age From Message ---- ------ ---- ---- ------- Normal ControlPlaneUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating admin cluster API Controller Normal ControlPlaneMachineUpgradeStarted 40m onprem-admin-cluster-controller Creating or updating control plane machine Normal StatusChanged 40m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: UPGRADING - New Ready condition: False, CreateOrUpdateControlPlaneMachine, Creating or updating control plane machine Normal StatusChanged 2m onprem-admin-cluster-controller OnPremAdminCluster status changed: - New ClusterState condition: RUNNING - New Ready condition: True, ClusterRunning, Cluster is running When the upgrade is complete, gkectl list admin shows a STATUS of RUNNING : NAME STATE AGE VERSION gke-admin-test RUNNING 9h 1.34.200-gke.68 Also, when the upgrade is complete, gkectl describe admin shows a Last GKE On Prem Version field under Status .
- Check whether the bundle tarball already exists on the admin workstation. stat /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz If the bundle is not on the admin workstation, download it. gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET VERSION /gke-onprem-vsphere- TARGET VERSION .tgz /var/lib/gke/bundles/ Install the bundle. gkectl prepare --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz --kubeconfig ADMIN CLUSTER KUBECONFIG Replace ADMIN CLUSTER KUBECONFIG with the path of your kubeconfig file.
- Make sure the version matches the one you used to download gkectl : gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ TARGET VERSION /gke-onprem-vsphere- TARGET VERSION .tgz ./ Upgrade the admin cluster The steps for upgrading the admin cluster vary slightly depending on the minor version you're upgrading to (the target version): 1.31 and higher If the target version is 1.31 or higher, before you upgrade your user clusters to the next minor version, you need to upgrade your admin cluster.

### "Skip a version when upgrading node pools \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/skip-version-upgrade)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Set the bundlePath field in the admin cluster configuration file to the intermediate 1.30 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- INTERMEDIATE VERSION .tgz" Upgrade the admin cluster to the intermediate 1.30 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Set the bundlePath field in the admin cluster configuration file to the target 1.31 version of the bundle: bundlePath="/var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz" Upgrade the admin cluster to the target 1.31 version: gkectl upgrade admin \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config ADMIN CLUSTER CONFIG FILE Upgrade the control plane and the node pools to the target version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the target version, TARGET VERSION .
- Upgrade the control plane and the node pools: gkectl upgrade cluster \ --kubeconfig ADMIN CLUSTER KUBECONFIG \ --config USER CLUSTER CONFIG FILE If you don't have any other user clusters to upgrade, remove the bundles from your admin workstation to save space: rm /var/lib/gke/bundles/gke-onprem-vsphere- .tgz What's next Creating and managing node pools Configure node pool update policy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade only the user cluster control plane to the intermediate version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the intermediate version, INTERMEDIATE VERSION .
- Install the corresponding bundle: gkectl prepare \ --bundle-path /var/lib/gke/bundles/gke-onprem-vsphere- TARGET VERSION .tgz \ --kubeconfig ADMIN CLUSTER KUBECONFIG Upgrade only the control plane to the intermediate version as follows: Make the following changes in the user cluster configuration file: Set the gkeOnPremVersion field to the intermediate version, INTERMEDIATE VERSION .

