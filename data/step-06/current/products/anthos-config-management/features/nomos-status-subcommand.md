---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.268Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status subcommand"
feature_slug: "nomos-status-subcommand"
latest_feature_date: "2019-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "state and error view"
  - "top-level status view"
  - "enrolled clusters status"
  - "nomos status subcommand"
  - "nomos status command"
  - "status command"
  - "nomos status"
  - "sync status"
---

# nomos status subcommand

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

The nomos status command now provides a top-level view of Anthos Config Management state, errors, and sync status across enrolled clusters.

## Extended Definition

The nomos status command now provides a top-level view of Anthos Config Management state, errors, and sync status across enrolled clusters.

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
- Final score: 86
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: nomos vet --path= PATH TO SOURCE --source-format unstructured Check Config Sync status You can monitor the status of Config Sync on all enrolled clusters by using the nomos status command.
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- For example: kubectl get clusterroles CLUSTER ROLE NAME -o yaml Replace CLUSTER ROLE NAME with the name of the cluster role you want to query. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : annotations : configmanagement.gke.io/token : ed95b50dd918cf65d8908f7561cb8d8d1f179c2f nomos status flags To customize the nomos status command, add the following flags: Flag Description --contexts Accepts a comma-separated list of contexts to use in multi-cluster commands.
- Required permissions If you are a project owner, you have the cluster-admin RBAC role and you can use the nomos status command for any clusters in your project without adding any further permissions.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1.9.0 Breaking In nomos versions earlier than 1.9.0, the nomos status command reports an incorrect status for clusters using an Anthos Config Management version of 1.9.0 or later.
- 1.0.0 Feature The nomos status subcommand provides a top-level view of the state of Anthos Config Management on all enrolled clusters, including errors and sync status.
- 1.15.0 Change Changed error message ResourceFightWarning to ResourceFightError so that resource fighting conflict can be exposed as errors in nomos status and RootSync / RepoSync status.
- 1.6.1 Fixed The nomos status output has been fixed for multi-repo clusters to show git.syncBranch when git.syncRev is not specified ( git.syncRev defaults to HEAD) to provide a consistent experience with mono-repo clusters.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- In this situation, you can use the nomos status command to check for errors in the object.

