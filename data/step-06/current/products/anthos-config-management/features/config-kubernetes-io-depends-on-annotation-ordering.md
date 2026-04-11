---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.242Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "config.kubernetes.io/depends-on annotation ordering"
feature_slug: "config-kubernetes-io-depends-on-annotation-ordering"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "depends-on key"
  - "delete ordering"
  - "config.kubernetes.io/depends-on"
  - "Config Sync dependency annotation"
  - "managed resource dependency"
  - "depends-on annotation"
  - "dependency annotation"
  - "apply ordering"
---

# config.kubernetes.io/depends-on annotation ordering

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Introduces the config.kubernetes.io/depends-on annotation to control the apply and delete ordering of managed resources.

## Extended Definition

Introduces the config.kubernetes.io/depends-on annotation to control the apply and delete ordering of managed resources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### "Declare dependencies between resource objects \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Add the depends-on annotation to an object To specify a dependency, add the config.kubernetes.io/depends-on annotation on the dependent object with a value that references the dependency objects.
- For the Wordpress example, the annotation in Wordpress Deployment resembles the following: deployment.yaml apiVersion : apps/v1 kind : Deployment metadata : name : wordpress namespace : default labels : app : wordpress annotations : config.kubernetes.io/depends-on : apps/namespaces/default/StatefulSet/wordpress-mysql When Config Sync applies the objects, it first applies the dependency, the object wordpress-mysql StatefulSet.
- More details can be found in sigs.k8s.io/cli-utils With the depends-on annotation, Config Sync not only applies objects in the order that you want, it also verifies that the dependency object is reconciled before applying the dependent object.
- You can also set explicit dependencies by using the depends-on annotation.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- 1.11.0 Feature You can now specify apply and delete ordering using the new config.kubernetes.io/depends-on annotation.

