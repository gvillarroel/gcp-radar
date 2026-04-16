---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.361Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "NamespaceSelector support"
feature_slug: "namespaceselector-support"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
keywords:
  - "namespaceselector"
  - "allows"
  - "configuration"
  - "target"
  - "namespaces"
  - "based"
  - "selector"
  - "criteria"
---

# NamespaceSelector support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

NamespaceSelector support allows configuration to target namespaces based on selector criteria.

## Extended Definition

NamespaceSelector support allows configuration to target namespaces based on selector criteria.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)

## Supporting Pages

### "Sync objects to multiple namespaces \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a namespace selector called exclude-exempt-namespaces : kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : excludes-exempt-namespaces spec : selector : matchExpressions : - key : quota-exempt operator : NotIn values : - exempt If another object's configuration references this namespace selector, that configuration is applied to all namespaces except those with the quota-exempt: exempt key-value pair.
- Create a namespace selector called gamestore-selector . kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : gamestore-selector spec : selector : matchLabels : app : gamestore If another object's configuration references this namespace selector, that configuration can only be applied to objects in namespaces that have the app: gamestore label.
- For each object that you want to sync to one or more namespaces, modify the object's configuration to remove the metadata.namespace field and add the configmanagement.gke.io/namespace-selector annotation with a value that matches the metadata.name of your NamespaceSelector .
- Limitations When you use a namespace selector configuration with a hierarchical repository, be aware of the following limitations and requirements: You must store all configuration files for namespaces and namespace-scoped objects within the namespaces/ directory of the hierarchical repository and its descendant directories.

### "Manage team resources across your fleet \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The dynamic mode allows the selection of namespaces both statically declared in the source of truth and any namespaces dynamically present on the cluster. apiVersion : configmanagement.gke.io/v1 kind : NamespaceSelector metadata : name : NAMESPACE SELECTOR NAME spec : mode : dynamic selector : matchLabels : fleet.gke.io/fleet-scope : SCOPE NAME Replace the following: NAMESPACE SELECTOR NAME : the name for the NamespaceSelector object, for example backend-scope .
- For each team, create a NamespaceSelector object in your configuration directory: Important: the NamespaceSelector must have the mode set to dynamic .
- When a fleet namespace is created in the cluster, the namespace is automatically labelled with fleet.gke.io/fleet-scope: SCOPE NAME , allowing Config Sync to select namespaces based on the NamespaceSelector labels present when syncing Kubernetes resources.
- After you complete these steps, Config Sync creates and applies the NetworkPolicy based on the NamespaceSelector to the Backend team's namespaces.

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 155
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- We recommend the following actions: Use ClusterSelector and NamespaceSelector objects if you need to apply a configuration change to only a subset of clusters or namespaces indefinitely or for a long time.
- ClusterSelector and NamespaceSelector objects also let you implement advanced testing and release methodologies, such as the following: Canary releases of policies, where you deploy a new policy to a small subset of clusters and namespaces for a long time to study the policy's impact.
- Use ClusterSelector and NamespaceSelector objects Git branches are a good way of doing a staged rollout of changes across multiple clusters that will eventually all have the same policies.
- However, if you want to rollout a change only to a subset of clusters or of namespaces, then use the ClusterSelector and NamespaceSelector objects.

