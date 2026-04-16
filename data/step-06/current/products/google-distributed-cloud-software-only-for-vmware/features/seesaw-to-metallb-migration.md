---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.073Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Seesaw to MetalLB migration"
feature_slug: "seesaw-to-metallb-migration"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
keywords:
  - "seesaw"
  - "metallb"
  - "migration"
  - "cluster"
  - "load"
  - "balancer"
  - "can"
  - "migrated"
---

# Seesaw to MetalLB migration

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A cluster load balancer can be migrated from Seesaw to MetalLB; A cluster load balancer can be migrated from Seesaw to MetalLB.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, Seesaw to MetalLB migration is a documented cluster configuration change for existing clusters to replace the bundled Seesaw load balancer with MetalLB. The migration is part of the recommended feature migration guidance, where load balancer target behavior is controlled by the `loadBalancer.kind` setting in cluster configuration.

## Evidence Summary

The cited official docs confirm that migration from bundled Seesaw to MetalLB is a supported path for existing clusters and identify this migration as a GA migration option.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)

## Supporting Pages

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Both Seesaw and MetalLB are listed as load balancer options, and the page provides upgrade/new-cluster support context, but it does not clearly describe a dedicated Seesaw-to-MetalLB migration flow.

Evidence snippets:
- For existing clusters that use the integrated F5 Big IP or the bundled Seesaw load balancer, we provide migration guides to migrate the "F5BigIP" configuration settings to "ManualLB" , and to migrate the bundled load balancer from Seesaw to MetalLB.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.
- Before migration After migration Control-plane node replicas 1 3 Add-on nodes 2 0 Data disk size 100GB 1 25GB 3 Data disks path Set by vCenter.dataDisk in the admin cluster configuration file Auto generated under the directory: /anthos/[ADMIN CLUSTER NAME]/default/[MACHINE NAME]-data.vmdk Control Plane VIP Set by loadBalancer.kind in the admin cluster configuration file keepalived + haproxy Allocation of IP addresses for admin cluster control-plane nodes DHCP or static, depending on network.ipMode.type 3 static IP addresses Group load balancer and control plane migrations Typically, when updating clusters, we recommend that you update only one feature or setting at a time .

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-3`
- Final score: 201
- Re-rank relevance: WEAK
- Re-rank rationale: It identifies Seesaw as an outdated load balancer option and shows migration availability by version, but does not explicitly document a Seesaw-to-MetalLB migration path.

Evidence snippets:
- For existing clusters that use the integrated F5 Big IP or the bundled Seesaw load balancer, we provide migration guides to migrate the "F5BigIP" configuration settings to "ManualLB" , and to migrate the bundled load balancer from Seesaw to MetalLB.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.
- Before migration After migration Control-plane node replicas 1 3 Add-on nodes 2 0 Data disk size 100GB 1 25GB 3 Data disks path Set by vCenter.dataDisk in the admin cluster configuration file Auto generated under the directory: /anthos/[ADMIN CLUSTER NAME]/default/[MACHINE NAME]-data.vmdk Control Plane VIP Set by loadBalancer.kind in the admin cluster configuration file keepalived + haproxy Allocation of IP addresses for admin cluster control-plane nodes DHCP or static, depending on network.ipMode.type 3 static IP addresses Group load balancer and control plane migrations Typically, when updating clusters, we recommend that you update only one feature or setting at a time .

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- For more information, refer to the relevant load balancer and cluster configuration reference documentation.
- Seesaw to MetalLB migration GA GA GA GA No differences.
- MetalLB load balancer option GA GA GA GA Changes apply.
- Access to new features You enable advanced clusters to access the latest features and capability, such as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.

