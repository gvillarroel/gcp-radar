---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.083Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "high-availability admin cluster control plane"
feature_slug: "high-availability-admin-cluster-control-plane"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery"
keywords:
  - "high"
  - "availability"
  - "admin"
  - "cluster"
  - "control"
  - "plane"
  - "clusters"
---

# high-availability admin cluster control plane

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Admin clusters support a high-availability control plane.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, a high-availability admin cluster control plane is implemented by deploying an admin cluster with three control-plane nodes, using HA control plane configuration for the admin cluster API/control plane layer. The configuration documentation explicitly supports HA admin cluster creation by defining three control-plane node instances and control-plane VIP/load-balancer settings. This design means an admin cluster control plane outage is documented as non-impacting to existing user clusters and their workloads.

## Evidence Summary

The concept page states that HA admin clusters are supported and that admin control-plane unavailability does not affect user-cluster workloads, while the create-admin-cluster guide provides concrete HA control-plane setup details, including a required three-node control-plane pattern.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)

## Supporting Pages

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: It explains HA-related control plane concepts within the admin-managed setup, but focuses more on user-cluster control-plane placement than a dedicated admin-cluster control plane feature.

Evidence snippets:
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- In the admin cluster, the admin master manages the admin worker nodes, which include user masters (nodes running the control plane of the managed user clusters) and addon nodes (nodes running the addon components supporting the admin cluster's functionality).
- Legacy HA user clusters that don't have Controlplane V2 enabled run the three control plane nodes in the admin cluster.
- Admin cluster Google Distributed Cloud supports creating high-availability (HA) admin clusters.

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-3`
- Final score: 237
- Re-rank relevance: WEAK
- Re-rank rationale: It names admin control-plane components, yet only explicitly describes HA choices for user-cluster control planes, not a clear HA implementation for the admin cluster control plane.

Evidence snippets:
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- In the admin cluster, the admin master manages the admin worker nodes, which include user masters (nodes running the control plane of the managed user clusters) and addon nodes (nodes running the addon components supporting the admin cluster's functionality).
- Legacy HA user clusters that don't have Controlplane V2 enabled run the three control plane nodes in the admin cluster.
- Admin cluster Google Distributed Cloud supports creating high-availability (HA) admin clusters.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: The explicit requirement for three control-plane nodes and a control-plane VIP provides supporting evidence for an HA-capable admin control-plane design.

Evidence snippets:
- Fill in your configuration file The following example shows creating a high-availability (HA) admin cluster with three control-plane nodes with MetalLB.
- Admin clusters must have three control plane nodes.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- If you used gkeadm to create your admin workstation, open your admin workstation configuration file so you can copy values from the vCenter section to the corresponding placeholder variables. resource "google gkeonprem vmware admin cluster" "admin-cluster-metallb" { provider = google-beta name = " ADMIN CLUSTER NAME " project = " PROJECT ID " location = " REGION " description = " DESCRIPTION " bootstrap cluster membership = "projects/ PROJECT ID /locations/ REGION /memberships/bootstrap- ADMIN CLUSTER NAME " on prem version = " VERSION " image type = " IMAGE TYPE " vcenter { address = " VCENTER ADDRESS " datacenter = " DATA CENTER " cluster = " VCENTER CLUSTER " resource pool = " RESOURCE POOL " datastore = " DATASTORE " ca cert data = " CA CERT DATA " } network config { service address cidr blocks = [" 10.96.232.0/24 "] pod address cidr blocks = [" 192.168.0.0/16 "] vcenter network = " NETWORK " dhcp ip config { enabled = true } host config { dns servers = [" DNS SERVERS "] ntp servers = [" NTP SERVERS "] } ha control plane config { control plane ip block { gateway = " GATEWAY " netmask = " NETMASK " ips { hostname = " CONTROL PLANE HOST 1 " ip = " CONTROL PLANE NODE IP 1 " } ips { hostname = " CONTROL PLANE HOST 2 " ip = " CONTROL PLANE NODE IP 2 " } ips { hostname = " CONTROL PLANE HOST 3 " ip = " CONTROL PLANE NODE IP 3 " } } } } control plane node { cpus = NUM CPUS memory = MEMORY replicas = 3 } load balancer { vip config { control plane vip = " CONTROL PLANE VIP " } metal lb config { enabled = true } } } Replace the following: ADMIN CLUSTER NAME : the name for the admin cluster.

