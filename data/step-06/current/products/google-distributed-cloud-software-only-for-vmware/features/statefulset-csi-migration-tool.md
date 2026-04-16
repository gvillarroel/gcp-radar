---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.052Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "StatefulSet CSI Migration Tool"
feature_slug: "statefulset-csi-migration-tool"
latest_feature_date: "2024-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks"
  - "https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage"
keywords:
  - "statefulset"
  - "csi"
  - "migration"
  - "tool"
  - "helps"
  - "convert"
  - "persistentvolumes"
  - "tree"
---

# StatefulSet CSI Migration Tool

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

The StatefulSet CSI Migration Tool helps convert PersistentVolumes from the in-tree vSphere volume plugin spec to the vSphere CSI Driver spec; The StatefulSet CSI Migration Tool helps convert PersistentVolumes from the in-tree vSphere volume plugin spec to the vSphere CSI Driver spec.

## Extended Definition

The evidence indicates this feature is a migration-readiness check mechanism in Google Distributed Cloud (software only) for VMware that validates storage-related upgrade prerequisites (including StatefulSets and vSphere volumes) before continuing an upgrade. It specifically checks that statically created in-tree vSphere PersistentVolumes/PersistentVolumeClaims are annotated as required for CSI Migration and that the vSphere CSI driver is enabled when in-tree or CSI vSphere volumes are present. The cited docs also describe that CSI migration redirects legacy in-tree vSphere volume operations to the CSI driver, with in-tree vSphere plugins marked as deprecated.

## Evidence Summary

These pages provide preflight and storage guidance for CSI migration readiness (annotations, CSI-driver validation, deprecated in-tree vSphere plugin behavior) that partially supports the feature but does not fully confirm an explicit "StatefulSet CSI Migration Tool" implementation that performs automatic PV spec conversion.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)

## Supporting Pages

### "Running preflight checks \_|\_ Google Distributed Cloud (software only)\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/preflight-checks)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Annotations in statically created vSphere in-tree PersistentVolume and PersistentVolumeClaims Before upgrade, checks annotations in vSphere in-tree PersistentVolumes and vSphere PersistentVolumeClaims: The statically created vSphere in-tree PersistentVolumes have the annotation pv.kubernetes.io/provisioned-by: kubernetes.io/vsphere-volume The statically created vSphere PersistentVolumesClaims have the annotation volume.beta.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume and volume.kubernetes.io/storage-provisioner: kubernetes.io/vsphere-volume If your cluster has vSphere in-tree PersistentVolumes or vSphere PersistentVolumeClaims without these annotations, you must annotate the PersistentVolumes and PersistentVolumeClaims before continuing, see Considerations for Migration of In-Tree vSphere Volumes .
- For more information, see Considerations for Migration of In-Tree vSphere Volumes and the known issues section about upgrades in 1.15 .
- Storage vSphere CSI driver Validates that the vSphere CSI driver is enabled if there are intree or CSI vSphere PersistentVolumes.
- User cluster : Check includes Kubernetes service, cluster API endpoints, StatefulSets, deployments, machine deployments, machines, and pods.

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Verify annotations on statically created in-tree PersistentVolumes and PersistentVolumeClaims required for CSI Migration.
- Complete migration to CSI With the Kubernetes CSI migration feature enabled by default in 1.15, the PersistentVolume backed by the in-tree vSphere volume plugin continue functioning in a CSI-only environment, it just redirects in-tree plugin operation calls to the CSI plugin.
- However, most of these in-tree volume plugins are deprecated (including the vSphere in-tree volume plugin), for more information, see the CSI migration project.
- CSI Migration for the vSphere storage driver In the past, the in-tree vSphere volume plugin was the provisioner for the default StorageClass in user clusters.

### "Storage \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\

- URL: [https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage](https://cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/storage)
- Source ID: `site-docs-reference-3`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Verify annotations on statically created in-tree PersistentVolumes and PersistentVolumeClaims required for CSI Migration.
- Complete migration to CSI With the Kubernetes CSI migration feature enabled by default in 1.15, the PersistentVolume backed by the in-tree vSphere volume plugin continue functioning in a CSI-only environment, it just redirects in-tree plugin operation calls to the CSI plugin.
- However, most of these in-tree volume plugins are deprecated (including the vSphere in-tree volume plugin), for more information, see the CSI migration project.
- CSI Migration for the vSphere storage driver In the past, the in-tree vSphere volume plugin was the provisioner for the default StorageClass in user clusters.

