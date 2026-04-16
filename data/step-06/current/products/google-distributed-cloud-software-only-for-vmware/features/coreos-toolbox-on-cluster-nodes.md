---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.292Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "CoreOS toolbox on cluster nodes"
feature_slug: "coreos-toolbox-on-cluster-nodes"
latest_feature_date: "2019-10-25"
deprecation_date: ""
coverage_status: "NONE"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading"
keywords:
  - "coreos"
  - "toolbox"
  - "cluster"
  - "nodes"
  - "include"
  - "open"
  - "source"
  - "troubleshooting"
---

# CoreOS toolbox on cluster nodes

Product: Google Distributed Cloud (software only) for VMware
Coverage: NONE

## Step 02 Summary

Cluster nodes include the open source CoreOS toolbox for troubleshooting node issues.

## Extended Definition

The provided excerpts do not contain evidence that Google Distributed Cloud (software only) for VMware cluster nodes include an open source CoreOS toolbox for troubleshooting. The cited pages describe cluster creation, configuration options (such as CPU/memory, networking, anti-affinity, logging), and upgrade workflows, but they do not reference CoreOS or Toolbox. Based on these excerpts alone, this feature cannot be confirmed as documented here.

## Evidence Summary

The cited pages cover admin/user cluster lifecycle and settings, but provide no explicit mention of CoreOS toolbox availability or node-level troubleshooting tooling.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)

## Supporting Pages

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.
- If the preflight checks pass, you see something like the following: [2023-03-22 23:12:47+0000] Waiting for cluster kubeconfig to become ready OK [2023-03-22 23:15:47+0000] Writing kubeconfig file [2023-03-22 23:15:47+0000] kubeconfig of cluster being created is present at gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig [2023-03-22 23:15:47+0000] Please restrict access to this file as it contains authentication credentials of your cluster. [2023-03-22 23:15:47+0000] Waiting for cluster to become ready OK [2023-03-22 23:20:17+0000] Please run [2023-03-22 23:20:17+0000] kubectl --kubeconfig gkectl-workspace/abm-cluster-1/abm-cluster-1-kubeconfig get nodes [2023-03-22 23:20:17+0000] to get cluster nodes status. [2023-03-22 23:20:17+0000] Waiting for node pools to become ready OK [2023-03-22 23:20:37+0000] Waiting for metrics to become ready in GCP OK [2023-03-22 23:25:38+0000] Waiting for cluster API provider to install in the created admin cluster OK [2023-03-22 23:25:48+0000] Moving admin cluster resources to the created admin cluster [2023-03-22 23:25:51+0000] Waiting for node update jobs to finish OK [2023-03-22 23:27:41+0000] Flushing logs...
- Use this field to specify whether you want Google Distributed Cloud to create VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your admin cluster nodes, causing them to be spread across at least three physical hosts in your data center. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- For example: vCenter: address: "vc-edge.example" datacenter: "vc-edge" cluster: "vc-edge-workloads" resourcePool: "vc-edge-pool datastore: "vc-edge-datastore caCertPath: "/usr/local/google/home/me/certs/edge-cacert.pem" credentials: fileRef: path: "credential.yaml" entry: "vCenter-edge" folder: "edge-vm-folder" Also fill in the network.vCenter.networkName field. network Decide how you want your worker nodes to get their IP addresses.
- This field specifies whether Google Distributed Cloud creates Distributed Resource Scheduler (DRS) anti-affinity rules for your worker nodes, causing them to be spread across at least three physical hosts in your data center. stackdriver If you want to enable Cloud Logging and Cloud Monitoring for your cluster, fill in the stackdriver section.
- For example, you may select 1 control-plane node for a development environment and 3 control-planes nodes for high availability (HA), production environments. --enable-auto-resize : If you want to enable automatic resizing of the control-plane nodes for the user cluster, include --enable-auto-resize .

### "Upgrade a cluster \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/upgrading)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- To see all PodDisruptionBudget objects that do not allow any disruptions: kubectl get poddisruptionbudget --all-namespaces -o jsonpath='{range .items[?(@.status.disruptionsAllowed==0)]}{.metadata.name}/{.metadata.namespace}{"\n"}{end}' Appendix About VMware DRS rules enabled in version 1.1.0-gke.6 As of version 1.1.0-gke.6, Google Distributed Cloud automatically creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your user cluster's nodes, causing them to be spread across at least three physical hosts in your datacenter.
- To get more details about the upgrade progress and cluster events: gkectl describe clusters --kubeconfig ADMIN CLUSTER KUBECONFIG \ --cluster USER CLUSTER NAME -v 5 The output shows the OnPremUserCluster custom resource for the specified user cluster, which includes cluster status, conditions, and events.
- To get more details about the upgrade progress and cluster events: gkectl describe admin --kubeconfig ADMIN CLUSTER KUBECONFIG The output shows the OnPremAdminCluster custom resource for the specified admin cluster, which includes cluster status, conditions, and events.
- List available cluster versions, and make sure the target version is included in the available user cluster versions. gkectl version --kubeconfig ADMIN CLUSTER KUBECONFIG --details You can now create a user cluster at the target version, or upgrade a user cluster to the target version.

