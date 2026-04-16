---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.221Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere 6.5 support"
feature_slug: "vsphere-6-5-support"
latest_feature_date: "2021-03-25"
deprecation_date: "2021-03-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements"
keywords:
  - "vsphere"
  - "will"
  - "phased"
  - "out"
  - "following"
  - "vmware"
  - "end"
  - "timelines"
---

# vSphere 6.5 support

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Support for vSphere 6.5 will be phased out following VMware end-of-general-support timelines; deprecated on 2021-03-25.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the "vSphere 6.5 support" feature is the documented compatibility for running Anthos clusters on vSphere 6.5 (along with 6.7) environments. A March 25, 2021 release note states that vSphere 6.5 support will be phased out according to VMware end-of-general-support timelines, and the current vSphere requirements page now lists supported ESXi/vCenter versions as 7.0 Update 2+ and 8.0+, indicating the platform has moved to newer required baseline versions.

## Evidence Summary

The release notes document the phase-out announcement (dated March 25, 2021) for vSphere 6.5, while the vSphere requirements page defines the current supported ESXi/vCenter version baseline that no longer includes 6.5.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)

## Supporting Pages

### "vSphere requirements \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/vsphere-requirements)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- This permission propagates to all child objects of the cluster object: govc permissions.set -principal ACCOUNT \ -role ClusterEditor -propagate=true CLUSTER PATH ` Replace the following: ACCOUNT : the vCenter Server user account that is being granted the role CLUSTER PATH : the path of the cluster in the vSphere object hierarchy For example, the following command creates a permission that associates the pair (bob@vsphere.local, ClusterEditor with my-dc/host/my-cluster.
- Create one global permission: govc permissions.set -principal ACCOUNT \ -role Anthos -propagate=true Replace the following: Replace ACCOUNT with the vCenter Server user account that is being granted the role For example, the following command creates a global permission that grants the Anthos role to bob@vsphere.local.
- If you want to create CSI volume snapshots, then you must have one of the following versions: 7.0 Update 3 or a later update of version 7.0 8.0 or a later update of version 8.0 License requirements You need one of the following licenses: vSphere Enterprise Plus license.
- Enable Network File Copy (NFC) traffic among ESXi hosts to allow OS template sharing, if you plan to deploy Anthos clusters on VMware on different vSphere clusters or resource pools within the same vSphere datacenter.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- You specify the CIDR for a single IP address by appending /32 to the IP address. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --enable-dhcp Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --ingress-http-node-port= INGRESS HTTP NODE PORT \ --ingress-https-node-port= INGRESS HTTPS NODE PORT \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Create the admin cluster Apply the Terraform plan to create the admin cluster: terraform apply "tfplan" It takes about 15 minutes or more to create the admin cluster.
- If you exit out of the gkectl register bootstrap command before the admin cluster is created, the admin cluster creation fails, and you will need to delete the bootstrap cluster using the following command: gkectl delete bootstrap \ --target-cluster-name= ADMIN CLUSTER NAME \ --project-id= PROJECT ID \ --location= REGION \ --register-service-account-key-path= CONNECT REGISTER SA PATH Finish configuring the admin cluster Return to the console and do the following steps: On the Install bootstrap environment page, click Check Connection .
- Modify the command as needed for the following flags: If you specified a folder in main.tf , add the following flag: --vcenter-folder= FOLDER If you specified a VM storage policy in main.tf , remove --vcenter-datastore and add the following flag: --vcenter-storage-policy-name= STORAGE POLICY NAME If your admin workstation will be on a network that's behind a proxy server, add the following flags: --proxy-url= PROXY URL --no-proxy= NO PROXY Replace the following: PROXY URL : the URL of the proxy server.

