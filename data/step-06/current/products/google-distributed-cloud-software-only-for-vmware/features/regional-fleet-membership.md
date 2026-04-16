---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.071Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "regional fleet membership"
feature_slug: "regional-fleet-membership"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
keywords:
  - "regional"
  - "fleet"
  - "membership"
  - "clusters"
  - "can"
  - "use"
---

# regional fleet membership

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Clusters can use regional fleet membership.

## Extended Definition

Regional fleet membership is a Google Distributed Cloud for VMware feature that allows cluster configuration to reference an admin cluster membership by region in the fleet membership resource path, for example `projects/<project>/locations/<region>/memberships/<name>`, when creating clusters. The documentation marks this feature as GA and notes no listed behavior differences in the feature table for advanced clusters.

## Evidence Summary

The advanced-clusters page explicitly lists regional fleet membership as GA, and the create-user-cluster page provides commands showing regional (`locations/us-west1`, etc.) admin-cluster membership references used when creating user clusters.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Regional fleet membership GA GA GA GA No differences.
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access to new features You enable advanced clusters to access the latest features and capability, such as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Regional fleet membership GA GA GA GA No differences.
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access to new features You enable advanced clusters to access the latest features and capability, such as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Example gcloud commands MetalLB & DHCP gcloud container vmware clusters create user-cluster-1 \ --project=example-project-12345 \ --location=us-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/us-west1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --enable-dhcp \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;pool=lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --enable-control-plane-v2 \ --control-plane-vip=203.0.113.1 \ --ingress-vip=198.51.100.1 MetalLB & static IPs gcloud container vmware clusters create user-cluster-3 \ --project=example-project-12345 \ --location=europe-west1 \ --admin-cluster-membership=projects/example-project-12345/locations/global/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2' \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm' \ --dns-servers=203.0.113.1,203.0.113.2 \ --dns-search-domains=example.com,altostrat.com \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --metal-lb-config-address-pools='pool=lb-pool-1,manual-assign=False,avoid-buggy-ips=True,addresses=192.0.2.0/26;lb-ingress-vip-pool,manual-assign=True,addresses=198.51.100.1/32' \ --control-plane-vip=172.16.20.61 \ --ingress-vip=172.16.20.62 Manual LB & static IPs gcloud container vmware clusters create user-cluster-4 \ --project=example-project-12345 \ --location=asia-east1 \ --admin-cluster-membership=projects/example-project-12345/locations/asia-east1/memberships/admin-cluster-1 \ --version=1.34.200-gke.68 \ --admin-users=sara@example.com \ --admin-users=amal@example.com \ --static-ip-config-ip-blocks='gateway=192.0.2.254,netmask=255.255.255.0,ips=192.0.2.10 user-vm-1;192.0.2.11 user-vm-2';ips=192.0.2.12 user-vm-3;192.0.2.13 extra-vm'\ --dns-servers=203.0.113.1,203.0.113.2 \ --ntp-servers=203.0.113.3,203.0.113.4 \ --service-address-cidr-blocks=10.96.0.0/20 \ --pod-address-cidr-blocks=192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway=192.0.2.254,netmask=255.255.255.0,ips=198.51.100.1 cp-vm-1;198.51.100.2 cp-vm-2;198.51.100.3 cp-vm-3' \ --replicas=3 \ --control-plane-vip=192.0.2.60 \ --ingress-vip=192.0.2.50 \ --ingress-http-node-port=30243 \ --ingress-https-node-port=30879 Terraform Before you begin Get the name and the fleet membership location of your admin cluster: gcloud container fleet memberships list \ --project= FLEET HOST PROJECT ID Replace FLEET HOST PROJECT ID with ID of the project that the admin cluster is registered to.
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- You specify the CIDR for a single IP address by appending /32 to the IP address. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --metal-lb-config-address-pools='pool= NAME ,avoid-buggy-ips= AVOID BUGGY IPS ,manual-assign= MANUAL ASSIGN ,addresses= IP ADDRESS RANGE 1 ' \ --metal-lb-config-address-pools='pool= ingress-vip-pool ,avoid-buggy-ips=False,manual-assign=True,addresses= INGRESS VIP /32' \ --enable-control-plane-v2 \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --enable-dhcp Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.
- The hostname is optional. gcloud container vmware clusters create USER CLUSTER NAME \ --project= FLEET HOST PROJECT ID \ --admin-cluster-membership= ADMIN CLUSTER NAME \ --admin-cluster-membership-project= FLEET HOST PROJECT ID \ --admin-cluster-membership-location= ADMIN CLUSTER REGION \ --location= REGION \ --version= VERSION \ --admin-users= YOUR EMAIL ADDRESS \ --admin-users= ANOTHER EMAIL ADDRESS \ --service-address-cidr-blocks= 10.96.0.0/20 \ --pod-address-cidr-blocks= 192.168.0.0/16 \ --enable-control-plane-v2 \ --control-plane-ip-block 'gateway= CP GATEWAY ,netmask= CP NETMASK ,ips= CP IP ADDRESS 1 CP HOST 1 ' \ --control-plane-vip= CONTROL PLANE VIP \ --ingress-vip= INGRESS VIP \ --ingress-http-node-port= INGRESS HTTP NODE PORT \ --ingress-https-node-port= INGRESS HTTPS NODE PORT \ --static-ip-config-ip-blocks='gateway= GATEWAY ,netmask= NETMASK ,ips= IP ADDRESS 1 HOST 1 ; IP ADDRESS 2 HOST 2 ; IP ADDRESS 3 HOST 3 ; IP ADDRESS 4 HOST 4 ' \ --dns-servers= DNS SERVER 1 \ --ntp-servers= NTP SERVER 1 Replace the following: USER CLUSTER NAME : A name of your choice for your user cluster.

