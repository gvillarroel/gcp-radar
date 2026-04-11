---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.214Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "NamespaceSelector CRD spec.mode field"
feature_slug: "namespaceselector-crd-spec-mode-field"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects"
keywords:
  - "NamespaceSelector CRD"
  - "namespace selector mode"
  - "dynamic cluster namespaces"
  - "namespace-scoped resources"
  - "NamespaceSelector"
  - "declared namespaces"
  - "spec.mode preview"
  - "mode field"
---

# NamespaceSelector CRD spec.mode field

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Added the NamespaceSelector CRD field spec.mode as a preview feature to select namespace-scoped resources from both declared and dynamic cluster namespaces.

## Extended Definition

Added the NamespaceSelector CRD field spec.mode as a preview feature to select namespace-scoped resources from both declared and dynamic cluster namespaces.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1.17.0 Feature Added a new field spec.mode in the NamespaceSelector CRD as a preview feature to support selecting namespace-scoped resources matching both statically-declared Namespaces in the source of truth and those dynamically present on the cluster.
- 1.18.0 Announcement Dynamic namespace selection using the spec.mode field in the NamespaceSelector CRD is now generally available (GA).
- This feature supports deploying namespace-scoped resources in matching Namespaces statically-declared in the source of truth and dynamically present on the cluster.
- For more information, refer to NamespaceSelector mode .

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: The page only discusses NamespaceSelector-related validation errors and does not document the CRD spec.mode field itself.

Evidence snippets:
- KNV1053: Missing Namespace On Namespaced Resource Error Namespace-scoped resources must either declare either metadata.namespace or metadata.annotations.configmanagement.gke.io/namespace-selector .
- Ensure that you specify the config using the appropriate data schema: ClusterSelector NamespaceSelector KNV1016: Policy Management Not Installed Error Deprecated in Config Sync 1.3.2.
- In addition to making sure that namespace-scoped resources are declared correctly, make sure that namespaces are declared in the root repository.
- KNV1058: Bad Scope Error A namespace repository can only declare namespace-scoped resources in the namespace the repository it applies to.

### "Sync objects to multiple namespaces \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a namespace selector called exclude-exempt-namespaces : kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : excludes-exempt-namespaces spec : selector : matchExpressions : - key : quota-exempt operator : NotIn values : - exempt If another object's configuration references this namespace selector, that configuration is applied to all namespaces except those with the quota-exempt: exempt key-value pair.
- Create a namespace selector called gamestore-selector . kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : gamestore-selector spec : selector : matchLabels : app : gamestore If another object's configuration references this namespace selector, that configuration can only be applied to objects in namespaces that have the app: gamestore label.
- For each object that you want to sync to one or more namespaces, modify the object's configuration to remove the metadata.namespace field and add the configmanagement.gke.io/namespace-selector annotation with a value that matches the metadata.name of your NamespaceSelector .
- The examples in the subsequent section provide more details on how to define NamespaceSelector objects and annotate other objects to use the NamespaceSelector .

