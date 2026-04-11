---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.253Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Config Sync MultiRepo resource-level status reporting"
feature_slug: "config-sync-multirepo-resource-level-status-reporting"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "MultiRepo resource-level status"
  - "per-resource sync status"
  - "MultiRepo status"
  - "nomos status reporting"
  - "resource-level status"
  - "Config Sync resource status"
  - "nomos status command"
  - "nomos status"
---

# Config Sync MultiRepo resource-level status reporting

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The nomos status command now shows resource-level status when MultiRepo is enabled.

## Extended Definition

The nomos status command now shows resource-level status when MultiRepo is enabled.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- For example: kubectl get clusterroles CLUSTER ROLE NAME -o yaml Replace CLUSTER ROLE NAME with the name of the cluster role you want to query. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : annotations : configmanagement.gke.io/token : ed95b50dd918cf65d8908f7561cb8d8d1f179c2f nomos status flags To customize the nomos status command, add the following flags: Flag Description --contexts Accepts a comma-separated list of contexts to use in multi-cluster commands.
- For example: nomos vet --path= PATH TO SOURCE --source-format unstructured Check Config Sync status You can monitor the status of Config Sync on all enrolled clusters by using the nomos status command.
- Required permissions If you are a project owner, you have the cluster-admin RBAC role and you can use the nomos status command for any clusters in your project without adding any further permissions.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- 1.9.0 Breaking In nomos versions earlier than 1.9.0, the nomos status command reports an incorrect status for clusters using an Anthos Config Management version of 1.9.0 or later.
- 1.6.1 Fixed The nomos status output has been fixed for multi-repo clusters to show git.syncBranch when git.syncRev is not specified ( git.syncRev defaults to HEAD) to provide a consistent experience with mono-repo clusters.
- 1.15.0 Change Changed error message ResourceFightWarning to ResourceFightError so that resource fighting conflict can be exposed as errors in nomos status and RootSync / RepoSync status.
- 1.7.1 Fixed A bug in Anthos Config Management 1.7.0 which caused nomos status to return errors when both unstructured repos and Hierarchy Controller were being used has been fixed.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- In this situation, you can use the nomos status command to check for errors in the object.

