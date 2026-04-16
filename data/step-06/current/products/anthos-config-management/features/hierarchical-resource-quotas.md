---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.335Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Hierarchical Resource Quotas"
feature_slug: "hierarchical-resource-quotas"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "hierarchical"
  - "resource"
  - "quotas"
  - "hierarchy"
  - "controller"
  - "includes"
  - "preview"
  - "apply"
---

# Hierarchical Resource Quotas

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Hierarchy Controller includes preview support for hierarchical resource quotas that apply to a namespace and its descendants.

## Extended Definition

Hierarchy Controller includes preview support for hierarchical resource quotas that apply to a namespace and its descendants.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### Disable Hierarchy Controller \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/migrate-hierarchy-controller)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You need to manually remove those CRDs using kubectl : HierarchyConfiguration HNCConfiguration SubnamespaceAnchor HierarchicalResourceQuota To remove the Hierarchy Controller fields, review the instructions for the method that you used to install Hierarchy Controller: gcloud Remove the hierarchyController block from your Google Cloud CLI apply spec file .
- To determine how to disable Hierarchy Controller, inspect the kubectl ConfigManagement object or gcloud apply spec file and take an action that corresponds to the value in the following fields: hierarchyController.enablePodTreeLabels : if true , and you previously enabled hierarchical observability, don't proceed with the steps on this page.
- Config Connector Set Hierarchy Controller fields to false in the GKEHubFeatureMembership resource.
- Important: Don't remove the Hierarchy Controller fields from the GKEHubFeatureMembership resource.

### Use a hierarchical repository \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/hierarchical-repo)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The system/ directory contains configs for the ConfigManagement Operator. ├── cluster │ ├── clusterrolebinding-namespace-reader.yaml │ ├── clusterrole-namespace-reader.yaml │ ├── clusterrole-secret-admin.yaml │ └── clusterrole-secret-reader.yaml ├── namespaces │ ├── limit-range.yaml │ ├── team-1 │ │ ├── namespace.yaml │ │ ├── network-policy-default-deny-egress.yaml │ │ ├── resource-quota-pvc.yaml │ │ ├── rolebinding-secret-reader.yaml │ │ └── sa.yaml │ └── team-2 │ ├── namespace.yaml │ ├── network-policy-default-deny-all.yaml │ ├── resource-quota-pvc.yaml │ ├── rolebinding-secret-admin.yaml │ └── sa.yaml ├── README.md └── system └── repo.yaml Use namespace inheritance and abstract namespaces With a hierarchical source of truth, you can use the concept of namespace inheritance to automatically apply configs to groups of namespaces in all the clusters where those namespaces exist (or should exist).
- We recommend that you use an unstructured source of truth instead of hierarchical because it provides the same core capabilities, but gives you more flexibility in organizing your resources.
- Each team has its own Kubernetes namespace, Kubernetes service account, resource quotas, network policies, rolebindings.
- Structure of the directory For hierarchical sources, Config Sync takes advantage of filesystem-like structures, and uses the directory to determine which clusters or namespaces a config is relevant to. namespaces/ The namespaces/ directory contains configs for namespaces and namespace-scoped objects.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- If you were previously syncing to a hierarchical repository and had to declare the controller namespace alongside any resources, consider switching to an unstructured repository for more flexibility in your source structure.
- KNV1033: Illegal System Resource Placement Error If you're using a hierarchical repository, you can only declare HierarchyConfig and Repo Kinds in the system/ directory.
- If you declared the resource-group-system or config-management-monitoring namespaces, unmanage the controller namespace: Update Config Sync to stop managing the namespace and any resource declared underneath.
- KNV1046: Cluster Scoped Resource In HierarchyConfig Error This HierarchyConfig references a resource which has cluster scope.

