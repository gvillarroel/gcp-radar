---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.325Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "RootSync and RepoSync git sync depth override"
feature_slug: "rootsync-and-reposync-git-sync-depth-override"
latest_feature_date: "2021-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl"
keywords:
  - "rootsync"
  - "reposync"
  - "git"
  - "sync"
  - "depth"
  - "override"
  - "spec"
  - "gitsyncdepth"
---

# RootSync and RepoSync git sync depth override

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The spec.override.gitSyncDepth field lets users override how many Git commits are fetched.

## Extended Definition

The spec.override.gitSyncDepth field lets users override how many Git commits are fetched.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)

## Supporting Pages

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To change log verbosity, use the .spec.override.logLevels field as shown in the following example: apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : override : logLevels : - containerName : "reconciler" logLevel : 0 - containerName : "git-sync" logLevel : 10 The value in the containerName field must be one of the following: reconciler , git-sync , hydration-controller , oci-sync , or helm-sync .
- To get the ResourceGroup object for a RootSync object: kubectl get resourcegroup ROOT SYNC NAME -n config-management-system -o yaml To get the ResourceGroup object for a RepoSync object: kubectl get resourcegroup REPO SYNC NAME -n REPO SYNC NAMESPACE -o yaml Replace the following: ROOT SYNC NAME : the name of the ResourceGroup object that you want to look up.
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To view the logs for the RootSync or RepoSync reconciler, run the following command: kubectl logs -n config-management-system deployment/ RECONCILER NAME CONTAINER NAME Replace the following: RECONCILER NAME : the reconciler name of the RootSync or RepoSync object.

### Customize your Config Sync installation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-config-sync)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you need to override the resources for a root or namespace reconciler, you can use the spec.override.resources field in the RootSync or RepoSync object.
- You can then later use kubectl commands to create additional RootSync objects or RepoSyncs that you can fully manage using kubectl commands later. apply-spec.yaml applySpecVersion : 1 spec : configSync : enabled : true If you don't have a source of truth yet, omit the following fields.
- You can configure your RootSync or RepoSync object to sync from a Helm repository using the Kubernetes API , or declare it in another source of truth .
- In the Package details section, enter a Package name , which identifies the RootSync or RepoSync object.

### Configure Config Sync with kubectl commands \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/configure-config-sync-kubectl)
- Source ID: `site-docs-root`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Description spec.helm All fields for Helm repository configuration. spec.override All fields for overriding default configurations. spec.git.noSSLVerify Specifies whether to enable or disable SSL certificate verification for Git.
- If you manually created a RootSync object named root-sync using an alternate installation method, you can edit all of the fields listed in RootSync and RepoSync fields .
- If you want to create and then update RootSync or RepoSync objects directly using kubectl commands, see RootSync and RepoSync fields .
- Deleting a RootSync or RepoSync object does not clean up Config Sync annotations and labels.

