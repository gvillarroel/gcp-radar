---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.313Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync dependency enforcement"
feature_slug: "config-sync-dependency-enforcement"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
keywords:
  - "config"
  - "sync"
  - "dependency"
  - "enforcement"
  - "can"
  - "skip"
  - "applying"
  - "objects"
---

# Config Sync dependency enforcement

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Config Sync can skip applying objects whose dependencies are not successfully applied and fully reconciled.

## Extended Definition

Config Sync can skip applying objects whose dependencies are not successfully applied and fully reconciled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Monitor RootSync and RepoSync objects Stay organized with collections Save and categorize content based on your preferences.
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.

### "Declare dependencies between resource objects \_|\_ Config Sync \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/declare-resource-dependency)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- More details can be found in sigs.k8s.io/cli-utils With the depends-on annotation, Config Sync not only applies objects in the order that you want, it also verifies that the dependency object is reconciled before applying the dependent object.
- For the Wordpress example, the annotation in Wordpress Deployment resembles the following: deployment.yaml apiVersion : apps/v1 kind : Deployment metadata : name : wordpress namespace : default labels : app : wordpress annotations : config.kubernetes.io/depends-on : apps/namespaces/default/StatefulSet/wordpress-mysql When Config Sync applies the objects, it first applies the dependency, the object wordpress-mysql StatefulSet.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Guides Send feedback Declare dependencies between resource objects Stay organized with collections Save and categorize content based on your preferences.
- Add the depends-on annotation to an object To specify a dependency, add the config.kubernetes.io/depends-on annotation on the dependent object with a value that references the dependency objects.

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Implementing staged rollouts with Config Sync In a multi-cluster environment, we don't recommend applying a configuration change across all the clusters at the same time.
- Syncing errors occur only if Config Sync tries to apply an invalid repository or if the Kubernetes API server rejects some of the objects.
- The K8sRequiredLabels resource is applied to clusters of type prod , with an enforcementAction parameter set to dryrun : apiVersion : constraints . gatekeeper . sh / v1beta1 kind : K8sRequiredLabels metadata : name : ns - must - have - team annotations : configmanagement . gke . io / cluster - selector : prod Spec : enforcementAction : dryrun match : kinds : - apiGroups : [ "" ] kinds : [ "Namespace" ] parameters : labels : - key : "team" The K8sRequiredLabels resource is applied to clusters of type canary-prod , without the enforcementAction parameter, meaning that the policy is actually enforced: apiVersion : constraints . gatekeeper . sh / v1beta1 kind : K8sRequiredLabels metadata : name : ns - must - have - team annotations : configmanagement . gke . io / cluster - selector : canary - prod spec : match : kinds : - apiGroups : [ "" ] kinds : [ "Namespace" ] parameters : labels : - key : "team" The configmanagement.gke.io/cluster-selector annotation allows the team to enforce the policy only in clusters of type canary-prod , preventing any unintended side-effects from spreading to the whole production fleet.
- For example, the following RootSync definition configures Config Sync to use the main branch: apiVersion : configsync.gke.io/v1 kind : RootSync metadata : name : root-sync namespace : config-sync-system spec : git : repo : git@example.com:gke/config-sync.git branch : main auth : ssh The following diagram illustrates the rollout process for this method: You can adapt this pattern to specific needs, using more than two branches, or using branches that are mapped to something other than environments.

