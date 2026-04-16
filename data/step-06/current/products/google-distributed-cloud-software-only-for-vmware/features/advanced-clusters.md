---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.042Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "advanced clusters"
feature_slug: "advanced-clusters"
latest_feature_date: "2025-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
keywords:
  - "advanced"
  - "clusters"
  - "default"
  - "cluster"
  - "architecture"
  - "introduce"
  - "more"
  - "extensible"
---

# advanced clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Advanced clusters are the default cluster architecture for new clusters; Advanced clusters introduce a new cluster architecture with a more extensible controller-based design.

## Extended Definition

Advanced clusters in Google Distributed Cloud (software only) for VMware are a cluster architecture that aligns Google Distributed Cloud for VMware with other Google Distributed Cloud products and is built on the Google Distributed Cloud for Bare Metal framework. The `enableAdvancedClusters` setting (true) enables a controller-based design described as more extensible, and non-advanced clusters are automatically converted to advanced clusters when upgraded to version 1.33 by default. In version 1.31, enabling advanced clusters for new clusters was a preview-only option with the flag defaulting to false unless explicitly set true.

## Evidence Summary

These pages confirm the architectural shift to a consolidated, controller-based advanced-cluster model, its Bare Metal foundation, and the documented enablement/version behavior on upgrade and creation.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 288
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about Advanced clusters and details its availability, enablement, defaults, upgrade behavior, and operational requirements across versions.

Evidence snippets:
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.
- Note: Advanced clusters use a consolidated Google Distributed Cloud architecture by using Google Distributed Cloud for Bare Metal as the underlying framework for Google Distributed Cloud for VMware.
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- If you upgrade existing non-advanced clusters to version 1.33, by default, the system automatically converts them to advanced clusters.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 288
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically about advanced clusters, including availability, enablement flags, default behavior, and upgrade conversion rules.

Evidence snippets:
- Consistent experience and implementation The advanced clusters feature implements a cluster architecture that better aligns Google Distributed Cloud for VMware with the rest of the Google Distributed Cloud products.
- Note: Advanced clusters use a consolidated Google Distributed Cloud architecture by using Google Distributed Cloud for Bare Metal as the underlying framework for Google Distributed Cloud for VMware.
- For more information, see Back up and restore advanced clusters with gkectl User cluster nodepool autoscaling GA GA GA GA No differences.
- If you upgrade existing non-advanced clusters to version 1.33, by default, the system automatically converts them to advanced clusters.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- When this flag is set to true (advanced cluster enabled), Google Distributed Cloud software deploys controllers that allow for a more extensible architecture.
- For more information see the following: Non-advanced clusters: Back up and restore an admin cluster with gkectl Advanced clusters: Back up and restore advanced clusters with gkectl autoRepair.enabled Optional Mutable Boolean Prepopulated: true Set this to true to enable node auto repair .
- 1.31 Available only for new clusters Preview Optional Immutable Boolean Prepopulated: false Default: false Set enableAdvancedClusters to true to enable advanced cluster when creating a new cluster.
- This feature isn't supported with advanced clusters. secretsEncryption.mode Required for Secrets encryption Immutable String Possible value: "GeneratedKey" Prepopulated: "GeneratedKey" The Secret encryption mode. secretsEncryption: mode: "GeneratedKey" secretsEncryption.generatedKey.keyVersion Required for Secrets encryption Mutable Integer Prepopulated: 1 An integer of your choice to use for the key version number.

