---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.276Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Seesaw load balancer"
feature_slug: "seesaw-load-balancer"
latest_feature_date: "2020-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb"
keywords:
  - "seesaw"
  - "load"
  - "balancer"
  - "bundled"
  - "balancing"
  - "mode"
  - "provides"
  - "manages"
---

# Seesaw load balancer

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Bundled load balancing mode provides and manages the Seesaw load balancer.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, **Seesaw** is a selectable bundled load-balancing mode for clusters, identified as `loadBalancer.kind: "Seesaw"` in cluster configuration settings. It is documented as one of the existing/original load balancer feature options, while Google Cloud recommends migration from the bundled Seesaw load balancer to MetalLB for newer clusters. Evidence is mainly administrative configuration and migration guidance rather than detailed runtime behavior, so functional specifics are limited in scope.

## Evidence Summary

The cited pages show Seesaw is a `loadBalancer.kind` option in GDC VMware cluster configuration and place it in the deprecated legacy bundled load-balancer set, with official migration guidance toward MetalLB.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)

## Supporting Pages

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Multiple network interfaces for Pods aren't supported when topology domains is enabled. storage.vSphereCSIDisabled : set this field to true to disable the deployment of vSphere CSI components The following fields are required: enableAdvancedCluster : set to true in the user cluster configuration file. network.ipMode.ipBlockFilePath : set to the full or relative path of the user cluster IP block file. loadBalancer.kind : set to "ManualLB" . "ManualLB" is the only available multi-subnet (layer 3) load balancing option that Google Distributed Cloud offers.
- Invalid for HA admin cluster as the path is generated automatically under # the root directory "anthos" in the specified datastore. dataDisk: "" (Required) Network configuration network: (Required when using "static" ipMode.type; or "Seesaw" loadBalancer.kind; or using amdin cluster HA mode) This section overrides ipMode.ipBlockFilePath values when ipMode.type=static.
- The following fields are required: enableAdvancedCluster : set to true . network.ipMode.ipBlockFilePath : set to the full or relative path of the admin cluster IP block file. loadBalancer.kind : set to "ManualLB" . "ManualLB" is the only available multi-subnet (layer 3) load balancing option that Google Distributed Cloud offers.
- For more information, see Enabling manual load balancing mode . loadBalancer.f5BigIP.address 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Immutable String The address of your F5 BIG-IP load balancer.

### "Bundled load balancing with MetalLB \_|\_ Google Distributed Cloud (software\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/bundled-load-balance-metallb)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: WEAK
- Re-rank rationale: The page focuses on MetalLB setup and only indirectly references the broader bundled load-balancing context where Seesaw is the other option.

Evidence snippets:
- We recommend that you use manual load balancing , or disable Dataplane IP Learning when using Seesaw or MetalLB as your load balancer.
- This document shows how to configure Google Distributed Cloud to use bundled load balancing with the MetalLB load balancer .
- MetalLB will be deployed on the nodes in this node pool. enableControlplaneV2: true ... network: hostConfig: ... ipMode: type: "static" ipBlockFilePath: "config-folder/user-cluster-ipblock.yaml" ... controlPlaneIPBlock: netmask: "255.255.255.0" gateway: "172.16.40.1" ips: - ip: "172.16.40.21" hostname: "user-cp" loadBalancer: kind: MetalLB metalLB: addressPools: - name: "address-pool-1" addresses: - "172.16.40.101-172.16.40.112 avoidBuggyIPs: true ... vips: controlPlaneVIP: "172.16.20.100" ingressVIP: "172.16.40.101" ... nodePools: - name: "node-pool-1" cpus: 4 memoryMB: 8192 replicas: 3 enableLoadBalancer: true The configuration in the preceding example specifies a set of addresses available for Services.
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Bundled load balancing with MetalLB Stay organized with collections Save and categorize content based on your preferences.

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 205
- Re-rank relevance: STRONG
- Re-rank rationale: Seesaw is explicitly identified as a legacy load balancer option with migration/upgrade status in the feature support matrix.

Evidence snippets:
- Migrate from Seesaw to MetalLB MetalLB provides the following advantages compared with Seesaw: Simplified management and reduced resources : Unlike Seesaw, MetalLB runs directly on cluster nodes, allowing for dynamic use of cluster resources for load balancing.
- For existing clusters that use the integrated F5 Big IP or the bundled Seesaw load balancer, we provide migration guides to migrate the "F5BigIP" configuration settings to "ManualLB" , and to migrate the bundled load balancer from Seesaw to MetalLB.
- Use "MetalLB" for our bundled load balancing solution using the MetalLB load balancer .
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.

