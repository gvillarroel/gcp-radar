---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.274Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync management metadata cleanup on deletion"
feature_slug: "rootsync-and-reposync-management-metadata-cleanup-on-deletion"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture"
keywords:
  - "rootsync"
  - "reposync"
  - "management"
  - "metadata"
  - "cleanup"
  - "deletion"
  - "deleting"
  - "now"
---

# RootSync and RepoSync management metadata cleanup on deletion

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Deleting a RootSync or RepoSync now removes its management metadata from managed objects so they can be adopted by new managers.

## Extended Definition

Deleting a RootSync or RepoSync now removes its management metadata from managed objects so they can be adopted by new managers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- To resolve this issue, first, you can verify whether the caCertSecretRef field has been configured correctly in your RootSync or RepoSync object, and also check if the Secret object exists.
- If the RepoSync applies first, the RootSync overwrites the RepoSync's object and the RepoSync reports a KNV1060 status error when it sees the update.
- A RootSync object can manage other RootSync and RepoSync objects; A RepoSync object can manage other RepoSync objects, but they cannot self-manage .
- For example, when the same object is managed by a RootSync and a RepoSync, the RootSync wins.

### Config Sync architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Deployment name CPU request (m) per replica Memory request (Mi) per replica config-management-operator 100 200 resource-group-controller-manager 110 300 admission-webhook 1 10 100 otel-collector 200 400 reconciler-manager 20 150 reconciler (one per RootSync and RepoSync) See reconciler resource requests for details.
- You can also use the initial root-sync object to manage additional RootSync or RepoSync objects with GitOps, by adding their YAML manifests to the source of truth that the root-sync is configured to sync from.
- RootSync and RepoSync objects RootSync objects configure Config Sync to create a root reconciler that watches the specified source of truth and apply objects from that source to the cluster.
- ResourceGroup Controller and ResourceGroup objects The root and namespace reconcilers create a ResourceGroup inventory object for each RootSync and RepoSync object you set up.

