---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.266Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "CustomResourceDefinition synchronization"
feature_slug: "customresourcedefinition-synchronization"
latest_feature_date: "2019-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "custom resource definition sync"
  - "ACM CRD sync"
  - "synchronize CRDs"
  - "CRD synchronization"
  - "CustomResourceDefinition"
  - "nomos sync CRD"
  - "CRD sync"
  - "CRD"
---

# CustomResourceDefinition synchronization

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Config Management can synchronize Kubernetes CustomResourceDefinitions.

## Extended Definition

Anthos Config Management can synchronize Kubernetes CustomResourceDefinitions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### "Configure clusters and cluster-scoped objects \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 52
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly explains how Config Sync synchronizes CRDs, including update-order behavior, removal constraints, and when CRs can be synced without their CRD.

Evidence snippets:
- Configure CustomResourceDefinitions Config Sync lets you sync CustomResourceDefinitions (CRDs) the same way you would sync any other resource.
- This might cause the nomos status to report a transient error for a brief period of time, until both the CustomResource and the CRD are present in the cluster.
- If you modify CRDs and the corresponding CustomResources in the same commit, there is no expectation that CRD updates occur before Custom Resource updates.
- There are a few things to keep in mind when syncing CRDs: Updates to CRDs and their corresponding CustomResources do not occur in any predictable order.

### "Configure syncing from more than one source of truth \_|\_ Config Sync \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/multiple-repositories)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- HELM INCLUDE CRDS : set to true if you want the Helm template to also generate a CustomResourceDefinition.
- HELM INCLUDE CRDS : set to true if you want the Helm template to also generate a CustomResourceDefinition.
- HELM INCLUDE CRDS : set to true if you want the Helm template to also generate a CustomResourceDefinition.
- HELM INCLUDE CRDS : set to true if you want the Helm template to also generate a CustomResourceDefinition.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1.1.0 Change Managed CRDs (CustomResourceDefinitions) are now Namespace-scoped by default, instead of cluster-scoped.
- June 14, 2019 1.0.0 Feature You can now sync CustomResourceDefinitions (CRDs).
- 1.17.0 Feature Added a new field spec.mode in the NamespaceSelector CRD as a preview feature to support selecting namespace-scoped resources matching both statically-declared Namespaces in the source of truth and those dynamically present on the cluster.
- 1.20.0 Change To optimize resource use, Config Sync installations managed through Fleet no longer include the ConfigManagement Operator or the ConfigManagement CRD.

