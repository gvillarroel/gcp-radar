---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.063Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "vSphere datastore to SPBM migration"
feature_slug: "vsphere-datastore-to-spbm-migration"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support"
keywords:
  - "vsphere"
  - "datastore"
  - "spbm"
  - "migration"
  - "can"
  - "migrated"
  - "storage"
  - "policy"
---

# vSphere datastore to SPBM migration

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A vSphere datastore can be migrated to storage policy based management (SPBM).

## Extended Definition

In Google Distributed Cloud (software only) for VMware, vSphere datastore-to-SPBM migration is the process of switching cluster node storage configuration from a specific vSphere datastore to a vSphere storage policy in cluster configuration. The admin/user cluster configuration model treats `vCenter.datastore` and `storagePolicyName` as mutually exclusive in this context, and the docs state that `vCenter.datastore` can be set to an empty string to migrate a datastore to Storage Policy Based Management (SPBM).

## Evidence Summary

These pages provide configuration examples and explicit field semantics for datastore vs storage policy, the documented migration mechanism for SPBM, and release-level support status for the datastore-to-SPBM migration feature.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)

## Supporting Pages

### "Configure a storage policy \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/configure-storage-policy)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions SPBM as an alternative to datastore selection, but does not describe a datastore-to-SPBM migration workflow.

Evidence snippets:
- Example cluster configuration file Here is an example of an IP block file and a portion of a user cluster configuration file. user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 - ip: 172.16.21.3 - ip: 172.16.21.4 - ip: 172.16.21.5 - ip: 172.16.21.6 - ip: 172.16.21.7 - ip: 172.16.21.8 user-cluster-yaml apiVersion: v1 kind: UserCluster ... vCenter: address: "my-vcenter-server-2.my-domain.example" datacenter: "my-uc-data-center" cluster: "my-uc-vsphere-cluster" resourcePool: "my-uc-resource-pool" storagePolicyName: "my-storage-policy" network: vCenter: networkName: "my-uc-network" hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.9" hostname: "cp-vm-1" - ip: "172.16.21.10" hostname: "cp-vm-2" - ip: "172.16.21.11" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" ... enableControlplaneV2: true masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-pool-1" enableLoadBalancer: true - name: "worker-pool-2" vSphere: datastore: "my-np2-datastore" ...
- Example cluster configuration file Here is an example of an IP block file and a portion of a user cluster configuration file. user-ipblock.yaml blocks: - netmask: 255.255.255.0 gateway: 172.16.21.1 ips: - ip: 172.16.21.2 - ip: 172.16.21.3 - ip: 172.16.21.4 - ip: 172.16.21.5 - ip: 172.16.21.6 - ip: 172.16.21.7 - ip: 172.16.21.8 user-cluster-yaml apiVersion: v1 kind: UserCluster ... vCenter: storagePolicyName: "my-storage-policy" network: hostConfig: dnsServers: - "203.0.113.2" - "198.51.100.2" ntpServers: - "216.239.35.4" ipMode: type: "static" ipBlockFilePath: "user-ipblock.yaml" controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.21.1" ips: - ip: "172.16.21.9" hostname: "cp-vm-1" - ip: "172.16.21.10" hostname: "cp-vm-2" - ip: "172.16.21.11" hostname: "cp-vm-3" loadBalancer: vips: controlPlaneVIP: "172.16.21.40" ingressVIP: "172.16.21.30" kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.21.30-172.16.21.39" ... enableControlplaneV2: true masterNode: cpus: 4 memoryMB: 8192 replicas: 3 nodePools: - name: "worker-pool-1" enableLoadBalancer: true - name: "worker-pool-2" vSphere: datastore: "my-np2-datastore" ...
- Under node-pool-2 , the value of vsphere.datastore is my-np2-datastore , so the nodes in node-pool-2 use that one datastore, and don't use a storage policy.
- Under node-pool-2 , the value of vsphere.datastore is my-np2-datastore , so the nodes in node-pool-2 use that one datastore, and don't use a storage policy.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- You configure this information in the vSphere infrastructure configuration file per topology domain. vCenter : remove the entire vCenter section. network.hostConfig : remove the entire network.hostConfig section. network.vCenter.networkName : remove this field. masterNode.vsphere : remove the entire section. nodePools[i].vsphere.datastore and nodePools[i].vsphere.storagePolicyName : remove these fields.
- Do not specify # it together with storagePolicyName datastore: "" Provide the path to vCenter CA certificate pub key for SSL verification caCertPath: "" The credentials to connect to vCenter credentials: reference to external credentials file fileRef: read credentials from this file path: "" entry in the credential file entry: "" (Optional) vSphere folder where cluster VMs will be located.
- The vCenter.datastore field is immutable except when you set the field to an empty string when you migrate a datastore to Storage Policy Based Management (SPBM) . vCenter.storagePolicyName Required if vCenter.datastore isn't specified Immutable String The name of a VM storage policy for the cluster nodes.
- Example: vCenter: resourcePool: "resource-pool-1/resource-pool-2" vCenter.datastore Required if vCenter.storagePolicyName isn't specified Immutable String The name of a vSphere datastore for your admin cluster.

### "Getting support \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/getting-support)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Feature/capability 1.30 1.31 1.32 1.33 1.34 (latest) Advanced clusters Preview GA GA GA Topology domains Preview Preview Preview Preview Regional fleet membership GA GA GA GA GA Version skew n+2 admin cluster - user cluster GA GA GA GA GA Version skew n+2 node pool - user cluster GA GA GA GA GA Max surge setting for node pool updates Preview Preview Preview Preview Preview cgroup v2 for nodes GA GA GA GA GA DSR mode for Dataplane V2 GA GA GA GA GA BinAuthz for Controlplane V2 user clusters GA GA GA GA GA User-managed admin workstation GA GA GA GA GA StatefulSet CSI migration tool GA GA GA GA GA Seesaw to MetalLB migration GA GA GA GA GA Disable bundled ingress GA GA GA GA GA Admin cluster prepared credentials GA GA GA GA GA Storage policy for a user cluster GA GA GA GA GA Storage policy for an admin cluster GA GA GA GA GA Node auto repair GA GA GA GA GA High availability admin cluster GA GA GA GA GA VM-Host affinity GA GA GA GA GA Generate configuration files from an existing cluster GA GA GA GA GA Managed Service for Prometheus system metrics collection GA GA GA GA GA Upgrade and rollback of nodepools GA GA GA GA GA Update private registry credentials GA GA GA GA GA Admin cluster backup and restore with gkectl Preview Preview Preview Preview Preview User cluster nodepool autoscaling GA GA GA GA GA Cluster automatic node resizing GA GA GA GA GA Multiple vSphere cluster support GA GA GA GA GA Multiple vSphere data centers support GA GA GA GA GA OpenID Connect (OIDC) support for authentication to clusters GA GA GA GA GA CA certificate rotation GA GA GA GA GA Workload Identity support GA GA GA GA GA AIS with LDAP authentication support GA GA GA GA GA Always-on secrets encryption without hardware security module (HSM) GA GA GA GA GA Update vCenter CA certificates with gkectl GA GA GA GA GA Egress NAT gateway GA GA GA GA GA Admin cluster fleet registration GA GA GA GA GA Windows node pool support GA GA GA 1 1 containerd runtime for Windows node pool GA GA GA 1 1 Container-optimized OS node pool support GA GA GA GA GA CoreDNS as the cluster DNS provider GA GA GA GA GA User cluster lifecycle in the Google Cloud console GA GA GA GA GA Admin cluster node creation with Container-optimized OS GA GA GA GA GA Multi-NIC capability for Pods GA GA GA GA GA MetalLB load balancer option GA GA GA GA GA gkectl update admin support for enabling and disabling Cloud Logging and Cloud Monitoring GA GA GA GA GA Windows Dataplane V2 support GA GA GA 1 1 Summary API metrics GA GA GA GA GA gkectl update credentials support for updating component access service account key GA GA GA GA GA Prepared credentials for user cluster GA GA GA GA GA Dry run upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of user cluster GA GA GA GA GA Asynchronous upgrade of admin cluster GA GA GA GA GA Sequential update of node pools GA GA GA GA GA Create volume snapshot with vSphere CSI driver Preview Preview Preview Preview Preview Create user cluster with Controlplane V2 enabled GA GA GA GA GA Storage migration with SPBM GA GA GA GA GA Migrate a datastore to a SPBM GA GA GA GA GA Migrate a user cluster to Controlplane V2 GA GA GA GA GA Migrate to an HA admin cluster GA GA GA GA GA Migrate configuration settings for F5 BIG-IP GA GA GA GA GA 1 Windows Server OS node pools are deprecated in version 1.32 and will be unavailable in version 1.33 and higher.
- The following table provides further details: Cloud Customer Care Collaborative Support Not Supported Kubernetes and the container runtime VMware vSphere (vCenter Server and ESXi) VMware products beyond vSphere Canonical Ubuntu for guest/node OS F5 BIG-IP load balancers Customer code (For more information, see the Developer Support section) vCenter controller Hardware and hyper-converged infrastructure solutions as listed in the Collaborative Support Partners page Customer choice of host OS F5 controller Physical server, storage, and network Calico and related network policies External DNS, DHCP, and identity systems Ingress controller Calico Enterprise Edition Prometheus and Grafana Stackdriver Monitoring, Stackdriver Logging, and Stackdriver agents Identity federation with OIDC compliant providers Hub, Connect, and the Connect Agent Knative serving / Knative Bundled LoadBalancer (Seesaw) Supported features This document lists the features for Google Distributed Cloud for supported releases.
- Version Support Policy The objective of this Version Support Policy is to give you the flexibility to schedule upgrades when it meets your business needs, while balancing the rapid evolution of both Kubernetes and Google Distributed Cloud.
- In the Select your product field, enter the following: Google Distributed Cloud Virtual - vSphere (Anthos on VMWare) Click the item in the Matching products list, and then click Select .

