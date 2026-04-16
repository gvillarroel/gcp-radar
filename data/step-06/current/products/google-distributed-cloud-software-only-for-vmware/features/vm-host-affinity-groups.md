---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.039Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "VM-Host affinity groups"
feature_slug: "vm-host-affinity-groups"
latest_feature_date: "2025-09-02"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity"
keywords:
  - "vm"
  - "host"
  - "affinity"
  - "groups"
  - "constrain"
  - "cluster"
  - "nodes"
  - "run"
---

# VM-Host affinity groups

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

VM-Host affinity groups constrain cluster nodes to run on predefined groups of vSphere hosts.

## Extended Definition

VM-Host affinity groups in Google Distributed Cloud (software only) for VMware are configured on worker node pools by specifying vSphere host group names in the cluster configuration under `nodePools[].vsphere.hostgroups`. A controller creates VM-Host affinity rules from this configuration so that nodes in a given worker pool are constrained to run on hosts that belong to the referenced host group(s).

## Evidence Summary

The referenced official guide provides both the configuration syntax using `hostgroups` in a user cluster definition and the explicit behavior that controllers create VM-Host affinity rules to bind worker-pool nodes to those host groups.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity)

## Supporting Pages

### "Configure VM-Host Group affinity \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-vm-host-affinity)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: STRONG
- Re-rank rationale: The page defines VM-Host Group affinity as creating ESXi host groups and associating VMs/node pools with them, and explains their role as failure domains.

Evidence snippets:
- Example configuration file Here is an example of an IP block file and a portion of a user cluster configuration file. user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 - ip: 172.16.21.3 - ip: 172.16.21.4 - ip: 172.16.21.5 - ip: 172.16.21.6 - ip: 172.16.21.7 - ip: 172.16.21.8 user-cluster-yaml apiVersion: v1 kind: UserCluster ... network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.9" hostname: "cp-vm-1" - ip: "172.16.21.10" hostname: "cp-vm-2" - ip: "172.16.21.11" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" ... enableControlplaneV2: true masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-pool-1" enableLoadBalancer: true replicas: 3 vsphere: hostgroups: - "hostgroup-1" labels: failuredomain: "failuredomain-1" - name: "worker-pool-2" replicas: 3 vsphere: hostgroups: - "hostgroup-2" labels: failuredomain: "failuredomain-2" ...
- A controller will also create a VM-Host affinity rule that ensures nodes in worker-pool-1 will run on hosts that are in hostgroup-1 .
- A controller will also create a VM-Host affinity rule that ensures nodes in worker-pool-2 will run on hosts that are in hostgroup-2 .
- Create a user cluster This section gives an example of how to create a user cluster that uses VM-Host Group affinity.

### "Create a user cluster \_|\_ Google Distributed Cloud (software only) for\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableControlplaneV2: true enableDataplaneV2: true network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.6" hostname: "cp-vm-1" - ip: "172.16.21.7" hostname: "cp-vm-2" - ip: "172.16.21.8" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true antiAffinityGroups: enabled: true gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Enable anti-affinity groups : VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- For example: --dns-search-domains example.com,examplepetstore.com For a complete list of the flags and their descriptions, see the gcloud CLI reference . vSphere flags Specify the following optional flags if needed: --disable-aag-config : If you don't include this flag the VMware Distributed Resource Scheduler (DRS) anti-affinity rules are automatically created for your user cluster's nodes, causing them to be spread across at least 3 physical hosts in your data center.
- This field specifies whether Google Distributed Cloud creates Distributed Resource Scheduler (DRS) anti-affinity rules for your worker nodes, causing them to be spread across at least three physical hosts in your data center. stackdriver If you want to enable Cloud Logging and Cloud Monitoring for your cluster, fill in the stackdriver section.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- Example: antiAffinityGroups: enabled: true adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.controlPlaneLoadBalancer 1.32 and higher Optionally, include this section to specify the kind of load balancer to use for control-plane traffic in the admin cluster.
- If this field is true , Google Distributed Cloud creates VMware Distributed Resource Scheduler (DRS) anti-affinity rules for your admin cluster nodes, causing them to be spread across at least three physical ESXi hosts in your datacenter.
- Either delete the field or leave it commented out. network Required Immutable This section holds information about your admin cluster network. network.hostConfig This section holds information about NTP servers, DNS servers, and DNS search domains used by the VMs that are your cluster nodes.

