---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.179Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Container-Optimized OS on admin and control-plane nodes"
feature_slug: "container-optimized-os-on-admin-and-control-plane-nodes"
latest_feature_date: "2021-12-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains"
keywords:
  - "container"
  - "optimized"
  - "os"
  - "admin"
  - "control"
  - "plane"
  - "nodes"
  - "cluster"
---

# Container-Optimized OS on admin and control-plane nodes

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Admin cluster nodes and user cluster control-plane nodes can use Container-Optimized OS.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, admin cluster control-plane nodes are configured in the admin cluster configuration file via the `adminMaster` section, which defines their CPU, memory, and replica count. The admin-cluster schema also includes an `osImageType` field in cluster configuration examples, indicating that an OS image is selected as part of control-plane node setup. The provided excerpts do not explicitly confirm that the image type is Container-Optimized OS, so that detail is not fully evidenced here.

## Evidence Summary

The cited pages show admin cluster YAML configuration including control-plane node settings (`adminMaster`) and an `osImageType` option, along with the requirement that admin clusters use three control-plane nodes.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Example: antiAffinityGroups: enabled: true adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.controlPlaneLoadBalancer 1.32 and higher Optionally, include this section to specify the kind of load balancer to use for control-plane traffic in the admin cluster.
- The number of topology domains in the array determines how the admin cluster control-plane nodes are deployed, as follows: One element: all three admin cluster control-plane nodes will be deployed in the specified topology domain.
- DHCP is used only to provide IP addresses in the following cases: If enableControlplaneV2 isn't enabled in user clusters, then you can use DHCP for the user cluster's control-plane nodes, which are in the admin cluster.

### "Create an admin cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster)
- Source ID: `site-docs-reference`
- Final score: 220
- Re-rank relevance: N/A

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.28.0-gke.1-full.tgz" vCenter: address: "vc01.example" datacenter: "vc-01" cluster: "vc01-workloads-1" resourcePool: "vc-01-pool-1" datastore: "vc01-datastore-1" caCertPath: "/usr/local/google/home/me/certs/vc01-cert.pem"" credentials: fileRef: path: "credential.yaml" entry: "vCenter" network: hostConfig: dnsServers: - "203.0.113.1" - "198.51.100.1" ntpServers: - "216.239.35.4" serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" vCenter: networkName: "vc01-net-1" controlPlaneIPBlock: netmask: "255.255.248.0" gateway: "21.0.143.254" ips: - ip: "21.0.140.226" hostname: "admin-cp-vm-1" - ip: "21.0.141.48" hostname: "admin-cp-vm-2" - ip: "21.0.141.65" hostname: "admin-cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "MetalLB" antiAffinityGroups: enabled: true adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false clusterBackup: datastore: "vc-01-datastore-bu" autoRepair: enabled: true osImageType: "ubuntu containerd" Validate your configuration file After you've filled in your admin cluster configuration file, run gkectl check-config to verify that the file is valid: gkectl check-config --config ADMIN CLUSTER CONFIG Replace ADMIN CLUSTER CONFIG with the path of your admin cluster configuration file.
- Use this field to specify whether you want Google Distributed Cloud to create VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your admin cluster nodes, causing them to be spread across at least three physical hosts in your data center. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.
- Fill in your configuration file The following example shows creating a high-availability (HA) admin cluster with three control-plane nodes with MetalLB.
- Admin clusters must have three control plane nodes.

### "Create an admin cluster for use in topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions downloading OS images during admin cluster setup, but does not specify Container-Optimized OS or tie it to admin/control-plane nodes.

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.31.0-gke.1-full.tgz" enableAdvancedCluster: true infraConfigFilePath: "/my-config-folder/vsphere-infrastructure-config.yaml" network: serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" ipMode: type: "static" ipBlockFilePath: "/my-config-folder/admin-cluster-ipblock.yaml" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "ManualLB" antiAffinityGroups: enabled: false adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 topologyDomains: "admin-cluster-domain" componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false autoRepair: enabled: true osImageType: "ubuntu containerd" Fill in your vSphere infrastructure configuration file Copy the template for the vSphere infrastructure configuration file to the file in the directory that you specified in the infraConfigFilePath field in the admin cluster configuration file.
- Distributed Resource Scheduler (DRS) anti-affinity rules aren't supported with topology domains. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.
- Admin clusters must have three control-plane nodes.
- If you don't specify a name here, you must set a name in vSphereInfraConfig.defaultTopologyDomain in the vSphere infrastructure configuration file. proxy If the network that will have your admin cluster nodes is behind a proxy server, fill in the proxy section. privateRegistry Decide where you want to keep container images for the Google Distributed Cloud components.

