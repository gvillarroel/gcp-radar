---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.262Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Unstructured repository mode"
feature_slug: "unstructured-repository-mode"
latest_feature_date: "2020-02-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects"
keywords:
  - "hierarchical namespaces disabled"
  - "disable hierarchical namespaces"
  - "flat repository mode"
  - "unstructured repository mode"
  - "Anthos Config Management unstructured"
  - "unstructured mode"
  - "unstructured repositories"
---

# Unstructured repository mode

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Anthos Config Management can optionally operate with unstructured repositories, with hierarchical-namespace features disabled in that mode.

## Extended Definition

In Anthos Config Sync, **unstructured repository mode** is a repository organization mode in which cluster configuration files and cluster-scoped objects can be placed arbitrarily in the repository, specifically under the config directory or its descendant directories. In the same mode, ClusterSelectors can also be stored arbitrarily in the sync directory or its descendants, indicating a non-hierarchical repository layout for these resource files. The provided evidence does not explicitly confirm the behavior of hierarchical namespaces in this mode.

## Evidence Summary

The cited Config Sync documentation page defines how unstructured repositories handle placement of cluster configs, cluster-scoped objects, and ClusterSelectors by allowing them to be stored arbitrarily in the config/sync directory trees.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects)

## Supporting Pages

### "Configure clusters and cluster-scoped objects \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/cluster-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly references unstructured repositories and how cluster-scoped configs are organized there, though it does not cover all behavioral details of that mode.

Evidence snippets:
- Configure clusters and cluster-scoped objects In unstructured repositories, you can organize configs for clusters and cluster-scoped objects in the way that's most convenient for you.
- In unstructured repositories, Cluster configs can be stored arbitrarily in the config directory or its descendant directories.
- In unstructured repositories, ClusterSelectors can be stored arbitrarily in the sync directory or its descendant directories.

