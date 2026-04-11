---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.271Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "NamespaceSelectors support"
feature_slug: "namespaceselectors-support"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "selector-based namespace targeting"
  - "ns selector"
  - "namespace label selector"
  - "namespace selection"
  - "namespace selector"
  - "NamespaceSelectors"
  - "NamespaceSelector"
  - "namespace selectors"
---

# NamespaceSelectors support

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Config Management now supports NamespaceSelectors.

## Extended Definition

Anthos Config Management now supports NamespaceSelectors.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### "Sync objects to multiple namespaces \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/namespace-scoped-objects)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example repository architecture shows valid and invalid locations for namespace selectors: namespace-inheritance ... ├── namespaces │ ├── eng │ │ ├── gamestore │ │ │ ├── namespace.yaml │ │ │ └── ns selector.yaml # invalid │ │ └── ns selector.yaml # valid │ ├── ns selector.yaml # valid │ ├── rnd │ │ ├── incubator-1 │ │ │ ├── namespace.yaml │ │ │ └── ns selector.yaml # invalid │ │ └── ns selector.yaml # valid Because the namespaces , eng , and rnd directories represent abstract namespaces, you can put a selector in them.
- Create a namespace selector called exclude-exempt-namespaces : kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : excludes-exempt-namespaces spec : selector : matchExpressions : - key : quota-exempt operator : NotIn values : - exempt If another object's configuration references this namespace selector, that configuration is applied to all namespaces except those with the quota-exempt: exempt key-value pair.
- Create a namespace selector called gamestore-selector . kind : NamespaceSelector apiVersion : configmanagement.gke.io/v1 metadata : name : gamestore-selector spec : selector : matchLabels : app : gamestore If another object's configuration references this namespace selector, that configuration can only be applied to objects in namespaces that have the app: gamestore label.
- Namespace-scoped objects with hierarchical mode Although unstructured repositories are recommended for most use cases, you can use namespace selectors to scope your objects with a hierarchical repository.

### "Manage team resources across your fleet \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/fleet-tenancy)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: STRONG
- Re-rank rationale: The page directly documents using NamespaceSelector objects in Config Sync to control which namespaces a configuration affects across fleet team scopes.

Evidence snippets:
- The dynamic mode allows the selection of namespaces both statically declared in the source of truth and any namespaces dynamically present on the cluster. apiVersion : configmanagement.gke.io/v1 kind : NamespaceSelector metadata : name : NAMESPACE SELECTOR NAME spec : mode : dynamic selector : matchLabels : fleet.gke.io/fleet-scope : SCOPE NAME Replace the following: NAMESPACE SELECTOR NAME : the name for the NamespaceSelector object, for example backend-scope .
- To sync an object only to a particular team, set the following annotation in that object's metadata: annotations : configmanagement.gke.io/namespace-selector : NAMESPACE SELECTOR NAME For example, a NetworkPolicy for the Backend team might resemble the following: apiVersion : networking.k8s.io/v1 kind : NetworkPolicy metadata : name : be-deny-all annotations : configmanagement.gke.io/namespace-selector : backend-scope # Actuate this resource in the namespaces with labels matched by the namespace selector spec : ingress : - from : - podSelector : {} podSelector : matchLabels : null Create fleet-level defaults for Config Sync In this section, you create fleet-level defaults for Config Sync, which applies the same Config Sync configuration to all clusters created in your fleet.
- When a fleet namespace is created in the cluster, the namespace is automatically labelled with fleet.gke.io/fleet-scope: SCOPE NAME , allowing Config Sync to select namespaces based on the NamespaceSelector labels present when syncing Kubernetes resources.
- The source of truth contains the NamespaceSelector objects that you use to to select fleet-level namespaces in your team scopes, and any resources (like a NetworkPolicy ) that you want to sync across these namespaces.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- 1.8.1 Change Cluster selectors and namespace selectors annotations are removed from the result of nomos hydrate so that it can pass nomos vet and can be synced directly to the cluster by Config Sync.
- 1.18.0 Announcement Dynamic namespace selection using the spec.mode field in the NamespaceSelector CRD is now generally available (GA).
- 0.11.6 Feature Added support for NamespaceSelectors.
- 1.17.0 Feature Added a new field spec.mode in the NamespaceSelector CRD as a preview feature to support selecting namespace-scoped resources matching both statically-declared Namespaces in the source of truth and those dynamically present on the cluster.

