---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.046Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "topology domains"
feature_slug: "topology-domains"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "topology"
  - "domains"
  - "group"
  - "nodes"
  - "share"
  - "logical"
  - "physical"
  - "failure"
---

# topology domains

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Topology domains group nodes that share a logical or physical failure domain and support topology labels for spread constraints.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, topology domains are named domain assignments you configure in cluster specs (for example, `adminMaster.topologyDomains`, `masterNode.topologyDomains`, and related cluster fields) to control where control-plane and related nodes are placed. The documentation states the number of topology domain entries determines how admin control-plane nodes are distributed, and nodes in those domains receive topology labels. It is also noted that topology domains have placement-related constraints and that some features (for example, vSphere DRS anti-affinity rules and multi-NIC pod networking) are not supported when they are enabled.

## Evidence Summary

These pages define topology domain configuration fields in admin and user cluster manifests, describe control-plane placement behavior by domain count, mention topology labels on domain nodes, and document related feature limitations.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Create a user cluster for use with topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-user-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: STRONG
- Re-rank rationale: This document is explicitly about creating user clusters for topology domains and includes the feature’s minimum version and setup requirements.

Evidence snippets:
- Example of filled-in configuration files Here is an example of an IP block file and a user cluster configuration file; user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 hostname: worker-vm-1 - ip: 172.16.21.3 hostname: worker-vm-2 - ip: 172.16.21.4 hostname: worker-vm-3 - ip: 172.16.21.5 hostname: worker-vm-4 - netmask: 255.255.255.0 gateway: 100.115.223.254 ips: - ip: 100.115.222.205 hostname: cp-1 isControlPlane: true - ip: 100.115.222.206 hostname: cp-2 isControlPlane: true - ip: 100.115.222.207 hostname: cp-3 isControlPlane: true user-cluster.yaml cat user-cluster.yaml apiVersion: v1 kind: UserCluster name: "my-user-cluster" gkeOnPremVersion: 1.34.200-gke.68 enableAdvancedCluster: true enableControlplaneV2: true enableDataplaneV2: true network: ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" serviceCIDR: 10.96.0.0/20 podCIDR: 192.168.0.0/16 loadBalancer: vips: controlPlaneVIP: "100.115.222.200" ingressVIP: "172.16.21.30" kind: "ManualLB" manualLB: ingressHTTPNodePort: 32527 ingressHTTPSNodePort: 30139 controlPlaneNodePort: 30968 masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-node-pool1" cpus: 4 memoryMB: 8192 replicas: 3 topologyDomains: - "domain1" antiAffinityGroups: enabled: false gkeConnect: projectID: "my-project-123" location: "us-central1" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" autoRepair: enabled: true These are the important points to understand in the preceding example: The nodePools.replicas field is set to 3 , which means there are three worker nodes in "worker-node-pool" .
- Fill in the masterNode.topologyDomains field with the name of the topology domain that you want the control plane nodes to be in. nodePools A node pool is a group of worker nodes in a cluster that all have the same configuration.
- Multiple network interfaces for Pods aren't supported with topology domains. storage Set storage.vSphereCSIDisabled to true to disable the deployment of vSphere CSI components. masterNode If you want to specify CPU and memory for the control-plane nodes of the user cluster, fill in the cpus and memoryMB fields in the masterNode section.
- For example: cp-vm-1 Ready control-plane,master 18m cp-vm-2 Ready control-plane,master 18m cp-vm-3 Ready control-plane,master 18m worker-vm-1 Ready 6m7s worker-vm-2 Ready 6m6s worker-vm-3 Ready 6m14s Configure your PodTemplate The topology label is populated to labels of nodes in the topology domain.

### "Create an admin cluster for use in topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 240
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly centered on creating an admin cluster for topology domains and documents topology-domain setup requirements and limitations.

Evidence snippets:
- The configuration enables some, but not all, of the available features. vc-01-admin-cluster.yaml apiVersion: v1 kind: AdminCluster name: "gke-admin-01" bundlePath: "/var/lib/gke/bundles/gke-onprem-vsphere-1.31.0-gke.1-full.tgz" enableAdvancedCluster: true infraConfigFilePath: "/my-config-folder/vsphere-infrastructure-config.yaml" network: serviceCIDR: "10.96.232.0/24" podCIDR: "192.168.0.0/16" ipMode: type: "static" ipBlockFilePath: "/my-config-folder/admin-cluster-ipblock.yaml" loadBalancer: vips: controlPlaneVIP: "172.16.20.59" kind: "ManualLB" antiAffinityGroups: enabled: false adminMaster: cpus: 4 memoryMB: 16384 replicas: 3 topologyDomains: "admin-cluster-domain" componentAccessServiceAccountKeyPath: "sa-key.json" gkeConnect: projectID: "my-project-123" registerServiceAccountKeyPath: "connect-register-sa-2203040617.json" stackdriver: projectID: "my-project-123" clusterLocation: "us-central1" enableVPC: false serviceAccountKeyPath: "log-mon-sa-2203040617.json" disableVsphereResourceMetrics: false autoRepair: enabled: true osImageType: "ubuntu containerd" Fill in your vSphere infrastructure configuration file Copy the template for the vSphere infrastructure configuration file to the file in the directory that you specified in the infraConfigFilePath field in the admin cluster configuration file.
- Distributed Resource Scheduler (DRS) anti-affinity rules aren't supported with topology domains. adminMaster If you want to specify CPU and memory for the control-plane nodes of the admin cluster, fill in the cpus and memoryMB fields in the adminMaster section.
- If you want to specify a specific topology domain for the control plane nodes to use, add the topology domain name to the adminMaster.topologyDomains field.
- If you don't specify a name here, you must set a name in vSphereInfraConfig.defaultTopologyDomain in the vSphere infrastructure configuration file. proxy If the network that will have your admin cluster nodes is behind a proxy server, fill in the proxy section. privateRegistry Decide where you want to keep container images for the Google Distributed Cloud components.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Must not overlap with the service CIDR range podCIDR: 192.168.0.0/16 vCenter: vSphere network name networkName: "" (Required for HA admin cluster) Specify the IPs to use for control plane machines for HA admin cluster. controlPlaneIPBlock: netmask: "" gateway: "" ips: - ip: "" hostname: "" - ip: "" hostname: "" - ip: "" hostname: "" (Required) Load balancer configuration loadBalancer: (Required) The VIPs to use for load balancing vips: Used to connect to the Kubernetes API controlPlaneVIP: "" (Required) Which load balancer to use "ManualLB" or "MetalLB". kind: MetalLB # (Required when using "ManualLB" kind) Specify pre-defined nodeports manualLB: # NodePort for ingress service's http (only needed for user cluster) ingressHTTPNodePort: 0 # NodePort for ingress service's https (only needed for user cluster) ingressHTTPSNodePort: 0 # NodePort for konnectivity server service (only needed for controlplane v1 user # cluster) konnectivityServerNodePort: 0 # NodePort for control plane service (not needed for HA admin cluster or controlplane # V2 user cluster) controlPlaneNodePort: 30968 Spread admin addon nodes and user masters across different physical hosts (requires at least three hosts) antiAffinityGroups: Set to false to disable DRS rule creation enabled: true Specify the admin master node configuration (default: 4 CPUs; 16384 MB memory; 3 replicas).
- The replicas field has to be 3 for new admin cluster creation adminMaster: cpus: 4 memoryMB: 16384 How many machines of this type to deploy replicas: 3 # (Optional/Preview) Topology domains that admin cluster master nodes will be deployed # to.
- The number of topology domains in the array determines how the admin cluster control-plane nodes are deployed, as follows: One element: all three admin cluster control-plane nodes will be deployed in the specified topology domain.
- Prepared credentials aren't supported when topology domains is enabled. nodePools[i].vsphere.hostgroups : remove this field.

