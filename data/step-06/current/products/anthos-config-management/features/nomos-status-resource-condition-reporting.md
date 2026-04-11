---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.245Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status resource condition reporting"
feature_slug: "nomos-status-resource-condition-reporting"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo"
keywords:
  - "managed resources not ready"
  - "condition messages"
  - "status condition reporting"
  - "condition reporting"
  - "resource health status"
  - "nomos status conditions"
  - "resource conditions"
  - "nomos status"
---

# nomos status resource condition reporting

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Enhances nomos status to surface messages from resource conditions when managed resources are not ready or healthy.

## Extended Definition

Enhances nomos status to surface messages from resource conditions when managed resources are not ready or healthy.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo)

## Supporting Pages

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- 1.10.0 Feature nomos status surfaces messages from resource conditions when the managed resources are not ready or healthy.
- 1.6.1 Fixed The nomos status output has been fixed for multi-repo clusters to show git.syncBranch when git.syncRev is not specified ( git.syncRev defaults to HEAD) to provide a consistent experience with mono-repo clusters.
- 1.15.0 Change Changed error message ResourceFightWarning to ResourceFightError so that resource fighting conflict can be exposed as errors in nomos status and RootSync / RepoSync status.
- 1.7.1 Fixed A bug in Anthos Config Management 1.7.0 which caused nomos status to return errors when both unstructured repos and Hierarchy Controller were being used has been fixed.

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.
- For example: kubectl get clusterroles CLUSTER ROLE NAME -o yaml Replace CLUSTER ROLE NAME with the name of the cluster role you want to query. apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : annotations : configmanagement.gke.io/token : ed95b50dd918cf65d8908f7561cb8d8d1f179c2f nomos status flags To customize the nomos status command, add the following flags: Flag Description --contexts Accepts a comma-separated list of contexts to use in multi-cluster commands.
- You can also use nomos status to check if the resources managed by Config Sync are ready. nomos status reports the status for each individual resource in the STATUS column of the Managed resources section of the output.

### "Break up a repository into multiple repositories \_|\_ Config Sync \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/breaking-up-repo)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you use the Kustomize format or helm charts, you can choose about half of the bases and add the common annotation to the kustomization.yaml file, such as in this example: kustomization.yaml commonAnnotations : configmanagement.gke.io/managed : disabled Commit and push the change: sh git commit -am 'disable Config Sync management on subset of the configuration' Wait for the existing root-sync RootSync object to be synced by using the following command: nomos status Set up your second repository by following these steps: Create a new repository or a new directory in your existing Git repository.
- Commit and push the change: git commit -am 'remove configuration managed by the new root repository' Wait for the existing root-sync RootSync object to be synced using the following command: nomos status Break up a hierarchical root repository The steps to break up a hierarchical repository are similar to the steps of breaking up an unstructured repository.
- You can check the status by using the following command: nomos status Any versions This method works for any Config Sync version, including version 1.21.0, but we recommend that you use the method available in version 1.21.0 and later because it requires fewer steps.
- You can check the status by using the following command: nomos status Remove the resources with the configmanagement.gke.io/managed: disabled annotation from the original repository.

