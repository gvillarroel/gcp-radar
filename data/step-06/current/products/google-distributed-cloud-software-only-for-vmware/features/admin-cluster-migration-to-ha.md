---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.053Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "admin cluster migration to HA"
feature_slug: "admin-cluster-migration-to-ha"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
keywords:
  - "admin"
  - "cluster"
  - "migration"
  - "ha"
  - "non"
  - "can"
  - "migrated"
  - "high"
---

# admin cluster migration to HA

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

A non-HA admin cluster can be migrated to a high-availability configuration.

## Extended Definition

This feature allows an existing Google Distributed Cloud (software only) for VMware admin cluster that is currently Non-HA to be migrated to a recommended HA admin cluster configuration. Google Cloud documentation defines the HA control-plane option as `adminMaster.replicas: 3` versus Non-HA as `adminMaster.replicas: 1`, and states this migration path is supported as part of recommended-feature migration when version prerequisites are met (including 1.30+ for all migration solutions). The migration is described as a documented method to remove the single-point-of-failure risk associated with a single-node admin control plane.

## Evidence Summary

The cited migration guide specifies HA vs Non-HA admin cluster control-plane options and the version-based availability of migration to recommended features, including migration of admin clusters.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)

## Supporting Pages

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 175
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly covers admin cluster control plane migration from Non-HA to HA with versioned support for add/upgrade availability.

Evidence snippets:
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- The following diagram illustrates the migration steps: If your admin cluster and all of your user clusters are at version 1.30 or higher, you can use the group migration process.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-3`
- Final score: 175
- Re-rank relevance: STRONG
- Re-rank rationale: It explicitly contrasts HA admin cluster with non-HA, with versioned support for adding, upgrading, and migrating non-HA admin clusters.

Evidence snippets:
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- The following diagram illustrates the migration steps: If your admin cluster and all of your user clusters are at version 1.30 or higher, you can use the group migration process.
- You have the following options for each feature area: Feature area Recommended options Original options Container Network Interface (CNI) Dataplane V2 ( enableDataplaneV2: true ) Dataplane V1 (Calico) ( enableDataplaneV2: false ) Load balancer ManualLB (works with F5 Big IP agents) ( loadBalancer.kind: "ManualLB" ) MetalLB ( loadBalancer.kind: "MetalLB" ) integrated F5 Big IP 1 ( loadBalancer.kind: "F5BigIP" ) Seesaw ( loadBalancer.kind: "Seesaw" ) Admin cluster control plane High availability (HA) admin cluster ( adminMaster.replicas: 3 ) Non-HA admin cluster ( adminMaster.replicas: 1 ) User cluster control plane Controlplane V2 ( enableControlplaneV2: true ) Kubeception user cluster ( enableControlplaneV2: false ) 1 Integrated F5 BIG-IP refers to loadBalancer.kind: "F5BigIP" and related settings in the loadBalancer.f5BigIP section in your cluster configuration file.
- Before migration After migration Control Plane Kubernetes Node Objects Admin cluster Node User cluster Node Kubernetes Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster static pods (kube-system namespace) Other Control Plane Pods Admin cluster Statefulsets/Deployments (user cluster namespace) User cluster Statefulsets/Deployments (kube-system namespace) Control Plane VIP Admin cluster Load Balancer Service keepalived + haproxy (user cluster static pods) Etcd Data Admin cluster Persistent Volume Data disk Control Plane Machine IP Management IPAM or DHCP IPAM Control Plane Network Admin cluster VLAN User cluster VLAN Migrate to an HA admin cluster Historically, the admin cluster could only run a single control-plane node, creating an inherent risk of a single point of failure.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.
- Additionally, you must set loadBalancer.kind in your configuration file even though the field is a no-op in 1.32 and higher. adminMaster.controlPlaneLoadBalancer.mode Optional Immutable String Default: Depends on whether the cluster uses topology domains The kind of load balancer that you can use depends on whether you will set up the cluster to use topology domains .
- Example: antiAffinityGroups: enabled: true adminMaster Immutable Configuration settings for the control-plane nodes in the admin cluster. adminMaster.controlPlaneLoadBalancer 1.32 and higher Optionally, include this section to specify the kind of load balancer to use for control-plane traffic in the admin cluster.
- Example: loadBalancer : f5BigIP : credentials : fileRef : entry : "f5-creds" loadBalancer.f5BigIP.partition 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Immutable String The name of a BIG-IP partition that you created for your admin cluster.

