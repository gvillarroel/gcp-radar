---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.049Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "cluster migration to recommended features"
feature_slug: "cluster-migration-to-recommended-features"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "cluster"
  - "migration"
  - "recommended"
  - "features"
  - "clusters"
  - "can"
  - "migrated"
  - "use"
---

# cluster migration to recommended features

Product: Google Distributed Cloud (software only) for VMware
Coverage: HIGH

## Step 02 Summary

Clusters can be migrated to use the recommended feature set.

## Extended Definition

Cluster migration to recommended features in Google Distributed Cloud for VMware is a documented process for moving clusters from outdated feature sets to recommended alternatives in both admin and user clusters. The documentation provides a versioned support matrix indicating whether each outdated feature can be added to new clusters, allowed during upgrade, and migrated, and notes that starting in version 1.30 all migration solutions are available. It also states migration targets, including user clusters to Controlplane V2 and admin clusters to HA, and requires clusters to migrate to recommended features before upgrading to version 1.32.

## Evidence Summary

These Google Cloud documentation pages define the feature’s migration scope, version prerequisites, and supported cluster-feature migration capabilities for admin and user clusters.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-2`
- Final score: 302
- Re-rank relevance: STRONG
- Re-rank rationale: The page is explicitly about migrating clusters from outdated options to recommended feature sets and lists recommended versus original options.

Evidence snippets:
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- Before migration After migration LB nodes Extra Seesaw VMs (outside of cluster) In-cluster LB nodes with customer choices Client IP Preservation Can be achieved via externalTrafficPolicy: Local Can be achieved via DataplaneV2 DSR mode Service creation Manually specified Service IP Auto-assigned Service IP from address pool Migrate user clusters to Controlplane V2 and admin clusters to HA The recommended control plane for user clusters is Controlplane V2.
- For detailed steps, see the following guides: Migrate user clusters to recommended features Migrate admin cluster to recommended features Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Plan cluster migration to recommended features Stay organized with collections Save and categorize content based on your preferences.

### "Plan cluster migration to recommended features \_|\_ Google Distributed\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/migrate-recommended-features)
- Source ID: `site-docs-reference-3`
- Final score: 302
- Re-rank relevance: STRONG
- Re-rank rationale: The page is dedicated to planning cluster migration from outdated to recommended feature sets and provides explicit migration guidance and support matrices.

Evidence snippets:
- The following tables show the support matrix for these features in admin and user clusters: Cluster type Outdated feature Add for new cluster Allow for cluster upgrade Migration to new feature Version 1.32 and higher Admin Non-HA No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A User Kubeception No No N/A Seesaw No No N/A Integrated F5 Big IP No No N/A Dataplane V1 No No N/A Version 1.30 and 1.31 Admin Non-HA No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes User Kubeception No Yes Yes Seesaw No Yes Yes Integrated F5 Big IP No Yes Yes Dataplane V1 No Yes Yes Version 1.29 Admin Non-HA No Yes Yes ( Preview ) Seesaw No Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) User Kubeception Yes Yes Yes ( Preview ) Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes Yes ( Preview ) Dataplane V1 Yes Yes No Version 1.28 Admin Non-HA No Yes No Seesaw No Yes Yes Integrated F5 Big IP Yes Yes No User Kubeception Yes Yes No Seesaw Yes Yes Yes Integrated F5 Big IP Yes Yes No Dataplane V1 Yes Yes No Key points : Starting with version 1.30, all migration solutions are available to migrate clusters to their recommended alternatives.
- Before migration After migration LB nodes Extra Seesaw VMs (outside of cluster) In-cluster LB nodes with customer choices Client IP Preservation Can be achieved via externalTrafficPolicy: Local Can be achieved via DataplaneV2 DSR mode Service creation Manually specified Service IP Auto-assigned Service IP from address pool Migrate user clusters to Controlplane V2 and admin clusters to HA The recommended control plane for user clusters is Controlplane V2.
- For detailed steps, see the following guides: Migrate user clusters to recommended features Migrate admin cluster to recommended features Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Technology areas Google Distributed Cloud Documentation GDC for VMware Guides Send feedback Plan cluster migration to recommended features Stay organized with collections Save and categorize content based on your preferences.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- If you have an existing cluster that uses these load balancers, see Plan cluster migration to recommended features .
- You must migrate your clusters to recommended features before upgrading to version 1.32.
- This feature isn't supported with advanced clusters. secretsEncryption.mode Required for Secrets encryption Immutable String Possible value: "GeneratedKey" Prepopulated: "GeneratedKey" The Secret encryption mode. secretsEncryption: mode: "GeneratedKey" secretsEncryption.generatedKey.keyVersion Required for Secrets encryption Mutable Integer Prepopulated: 1 An integer of your choice to use for the key version number.
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.

