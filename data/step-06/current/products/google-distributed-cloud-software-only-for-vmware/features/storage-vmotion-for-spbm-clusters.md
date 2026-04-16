---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.077Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "storage vMotion for SPBM clusters"
feature_slug: "storage-vmotion-for-spbm-clusters"
latest_feature_date: "2023-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
keywords:
  - "storage"
  - "vmotion"
  - "spbm"
  - "clusters"
---

# storage vMotion for SPBM clusters

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

SPBM clusters support storage vMotion.

## Extended Definition

The feature refers to "Storage migration with SPBM" in Google Distributed Cloud (software only) for VMware. The advanced-clusters documentation lists this capability as supported at GA with advanced clusters and marks it as having "No differences" in behavior across the referenced advanced-cluster versions.

## Evidence Summary

The cited pages confirm that storage migration with SPBM is a GA-listed advanced-cluster capability and provide supporting context that storage is vSphere-backed with CSI-based default provisioning, but they do not provide detailed migration workflow steps.

## Source Links

- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)

## Supporting Pages

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Storage migration with SPBM GA GA GA GA No differences.
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access to new features You enable advanced clusters to access the latest features and capability, such as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.

### "Advanced clusters \_|\_ Google Distributed Cloud (software only) for VMware\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/advanced-clusters)
- Source ID: `site-docs-reference-3`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Storage migration with SPBM GA GA GA GA No differences.
- The following table lists the features supported for Google Distributed Cloud for VMware, their availability status when advanced clusters is enabled , and any differences in behavior or use: Make a selection No differences Changes apply Not supported Not recommended Deprecated Feature/capability 1.31 Adv. clusters (Preview) 1.32 Not enabled 1.32 Advanced clusters (GA) 1.33 Advanced clusters (GA) Differences Advanced clusters Preview GA GA GA Not supported Topology domains Preview Preview Preview Changes apply.
- What's next Create clusters with advanced cluster enabled: Create an admin cluster Create a user cluster Update or upgrade a cluster to an advanced cluster Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access to new features You enable advanced clusters to access the latest features and capability, such as topology domains , which gives you better control over how your workloads are distributed across your cluster nodes.

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- CSI Migration for the vSphere storage driver In the past, the in-tree vSphere volume plugin was the provisioner for the default StorageClass in user clusters.
- But now the in-tree vSphere volume plugin is deprecated, and the vSphere CSI driver is the provisioner for the default StorageClass in user clusters.
- The vSphere datastores used by the admin and user clusters can be backed by NFS, vSAN, or VMFS on a block device, such as an external storage array.
- Admin cluster StorageClass In admin clusters, there is a StorageClass named standard , and it is designated as the default StorageClass.

