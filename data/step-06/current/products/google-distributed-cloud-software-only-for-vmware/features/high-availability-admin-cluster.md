---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.067Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "high-availability admin cluster"
feature_slug: "high-availability-admin-cluster"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
keywords:
  - "high"
  - "availability"
  - "admin"
  - "cluster"
  - "uses"
  - "three"
  - "control"
  - "plane"
---

# high-availability admin cluster

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

The high-availability admin cluster uses three control plane nodes and no add-on nodes, and it becomes the default.

## Extended Definition

A high-availability (HA) admin cluster in Google Distributed Cloud (software only) for VMware is an admin cluster deployment that uses three control-plane nodes; the documentation includes an HA admin cluster creation example with three control-plane nodes and explicitly states that admin clusters must have three control-plane nodes. The admin cluster can optionally enable antiAffinityGroups to have Google Distributed Cloud automatically create vSphere DRS anti-affinity rules to spread control-plane nodes across physical hosts, helping resilience. The docs also note that an admin cluster control-plane outage does not affect existing user-cluster functionality or workloads.

## Evidence Summary

These pages establish HA admin cluster requirements (three control-plane nodes), optional anti-affinity placement behavior for those nodes, and resilience behavior of admin-plane outages relative to user-cluster workloads.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)

## Supporting Pages

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-2`
- Final score: 289
- Re-rank relevance: WEAK
- Re-rank rationale: The page describes admin and user cluster architecture, but it does not state a default three-node admin control plane or explicitly define high-availability admin clusters.

Evidence snippets:
- If you set antiAffinityGroups.enabled to true in the admin cluster configuration file, Google Distributed Cloud automatically creates vSphere DRS anti-affinity rules for the three nodes that run the user cluster control plane.
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- Legacy HA user clusters that don't have Controlplane V2 enabled run the three control plane nodes in the admin cluster.
- For each user cluster, the admin cluster has one non-HA node or three HA nodes that run the control plane.

### "High availability and disaster recovery \_|\_ Google Distributed Cloud (software\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/high-availability-disaster-recovery)
- Source ID: `site-docs-reference-3`
- Final score: 289
- Re-rank relevance: WEAK
- Re-rank rationale: The page discusses availability architecture in GDC for VMware clusters but does not define a distinct HA default configuration specifically for the admin cluster.

Evidence snippets:
- If you set antiAffinityGroups.enabled to true in the admin cluster configuration file, Google Distributed Cloud automatically creates vSphere DRS anti-affinity rules for the three nodes that run the user cluster control plane.
- Note that unavailability of the admin cluster control plane doesn't affect existing user cluster functionality or any workloads running in user clusters.
- Legacy HA user clusters that don't have Controlplane V2 enabled run the three control plane nodes in the admin cluster.
- For each user cluster, the admin cluster has one non-HA node or three HA nodes that run the control plane.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: The page requires planning for three control-plane nodes and a control-plane VIP, which is relevant context for a high-availability-style admin cluster topology.

Evidence snippets:
- Fill in your configuration file The following example shows creating a high-availability (HA) admin cluster with three control-plane nodes with MetalLB.
- Use this field to specify whether you want Google Distributed Cloud to create VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your admin cluster nodes, causing them to be spread across at least three physical hosts in your data center. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.
- Admin clusters must have three control plane nodes.
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.

