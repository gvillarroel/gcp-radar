---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.057Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "F5 BIG-IP manual load balancing migration"
feature_slug: "f5-big-ip-manual-load-balancing-migration"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
keywords:
  - "f5"
  - "big"
  - "ip"
  - "manual"
  - "load"
  - "balancing"
  - "migration"
  - "integrated"
---

# F5 BIG-IP manual load balancing migration

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Integrated F5 BIG-IP configurations can be migrated to manual load balancing mode.

## Extended Definition

In Google Distributed Cloud (software only) for VMware, the F5 BIG-IP manual load balancing migration is the documented process for existing clusters to move load balancer configuration from integrated F5 BIG-IP (`loadBalancer.kind: "F5BigIP"` and related `loadBalancer.f5BigIP` settings) to `ManualLB`. The migration keeps core F5 controller components (`F5 Controller`, `OSS CIS Controller`) unchanged but requires cluster/F5 component upgrades, and targets ManualLB as a recommended/manual load-balancing option compatible with F5 BIG-IP agents. Manual load balancing is a user-configured model where any third-party load balancer (including F5 BIG-IP) can be used, with static node IPs required.

## Evidence Summary

The cited pages define the migration target (`F5BigIP` to `ManualLB`) for existing clusters and describe ManualLB/third-party manual load balancing behavior and requirements.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)

## Supporting Pages

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions ManualLB and integrated F5 BIG-IP as load balancer options, yet does not explicitly define a migration path from integrated F5 to manual mode.

Evidence snippets:
- For existing clusters that use the integrated F5 Big IP or the bundled Seesaw load balancer, we provide migration guides to migrate the "F5BigIP" configuration settings to "ManualLB" , and to migrate the bundled load balancer from Seesaw to MetalLB.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- When creating new clusters, here are the versions where original features aren't allowed: Admin clusters: Non-HA control plane: 1.28 and higher Seesaw load balancing: 1.28 and higher Integrated F5 Big IP: 1.30 and higher User clusters: Kubeception: 1.30 and higher Seesaw: 1.30 and higher Integrated F5 Big IP: 1.30 and higher Dataplane V1: 1.30 and higher You can still upgrade existing clusters with the original features.
- The changes after migrating from the integrated F5 BIG-IP to ManualLB include: Before migration After migration F5 agents components F5 Controller OSS CIS Controller F5 Controller (no change) OSS CIS Controller (no change) F5 component version upgrade You must upgrade clusters to upgrade F5 components.

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-3`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions ManualLB and integrated F5 BIG-IP options and migration support rows, but does not clearly specify migration from integrated F5 BIG-IP to manual load balancing as a distinct feature workflow.

Evidence snippets:
- For existing clusters that use the integrated F5 Big IP or the bundled Seesaw load balancer, we provide migration guides to migrate the "F5BigIP" configuration settings to "ManualLB" , and to migrate the bundled load balancer from Seesaw to MetalLB.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- When creating new clusters, here are the versions where original features aren't allowed: Admin clusters: Non-HA control plane: 1.28 and higher Seesaw load balancing: 1.28 and higher Integrated F5 Big IP: 1.30 and higher User clusters: Kubeception: 1.30 and higher Seesaw: 1.30 and higher Integrated F5 Big IP: 1.30 and higher Dataplane V1: 1.30 and higher You can still upgrade existing clusters with the original features.
- The changes after migrating from the integrated F5 BIG-IP to ManualLB include: Before migration After migration F5 agents components F5 Controller OSS CIS Controller F5 Controller (no change) OSS CIS Controller (no change) F5 component version upgrade You must upgrade clusters to upgrade F5 components.

### "Overview of load balancing for Google Distributed Cloud \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/setup-load-balance)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions F5 BIG-IP only as an example of manual load balancer integration and provides no migration-related guidance or support statements.

Evidence snippets:
- Node IP addresses If you choose MetalLB as your load balancer, then you can either use static IP addresses for your cluster nodes, or you can have your cluster nodes get their IP addresses from a DHCP server If you choose a manual load-balancing option, then you must use static IP addresses for your cluster nodes.
- These are the available options: MetalLB bundled Manual load balancing for any third-party load balancer, such as F5 BIG-IP Citrix When you create user clusters using the Google Cloud console, the gcloud CLI, or Terraform, the kind of load balancer for the admin cluster and its user clusters must be the same.
- Manually configured load balancer If you have chosen a manual load balancing option, developers can follow these steps to expose a Service to external clients: Create a Service of type NodePort.
- Manual load balancing in general You can use any load balancer of your choice as long as you set it up manually.

