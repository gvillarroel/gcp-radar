---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.281Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync namespaceStrategy override"
feature_slug: "rootsync-namespacestrategy-override"
latest_feature_date: "2023-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "rootsync"
  - "namespacestrategy"
  - "override"
  - "adds"
  - "spec"
  - "field"
  - "control"
  - "implicit"
---

# RootSync namespaceStrategy override

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The RootSync API adds the spec.override.namespaceStrategy field to control implicit Namespace creation when Namespace configs are missing.

## Extended Definition

The RootSync API adds the spec.override.namespaceStrategy field to control implicit Namespace creation when Namespace configs are missing.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- View errors RootSync and RepoSync objects use the status field to track errors encountered when syncing the configs from the source of truth to a cluster.
- View synced commits You can check which commit is synced to the cluster by checking the .status.sync field in the RootSync or RepoSync object.
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.

### Config Sync architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If needed, you can change these permissions by configuring the spec.override.roleRefs fields.
- Deployment name CPU request (m) per replica Memory request (Mi) per replica config-management-operator 100 200 resource-group-controller-manager 110 300 admission-webhook 1 10 100 otel-collector 200 400 reconciler-manager 20 150 reconciler (one per RootSync and RepoSync) See reconciler resource requests for details.
- RootSync and RepoSync objects RootSync objects configure Config Sync to create a root reconciler that watches the specified source of truth and apply objects from that source to the cluster.
- ResourceGroup Controller and ResourceGroup objects The root and namespace reconcilers create a ResourceGroup inventory object for each RootSync and RepoSync object you set up.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- If a kustomize build error happens when pulling remote bases from public repositories, you need to set spec.override.enableShellInRendering to true .
- To resolve this issue, first, you can verify whether the caCertSecretRef field has been configured correctly in your RootSync or RepoSync object, and also check if the Secret object exists.
- If the RepoSync applies first, the RootSync overwrites the RepoSync's object and the RepoSync reports a KNV1060 status error when it sees the update.
- A RootSync object can manage other RootSync and RepoSync objects; A RepoSync object can manage other RepoSync objects, but they cannot self-manage .

