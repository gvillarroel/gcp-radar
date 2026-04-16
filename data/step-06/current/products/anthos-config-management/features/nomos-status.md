---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.355Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos status"
feature_slug: "nomos-status"
latest_feature_date: "2019-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync"
keywords:
  - "nomos"
  - "status"
  - "command"
  - "shows"
  - "top"
  - "level"
  - "sync"
  - "state"
---

# nomos status

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos status command shows top-level sync state and errors for enrolled clusters accessible through kubectl.

## Extended Definition

The nomos status command shows top-level sync state and errors for enrolled clusters accessible through kubectl.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example shows you some of the different conditions that the nomos status command might report: nomos status Example output: MANAGED CLUSTER 1 -------------------- <root> git@github.com:foo-corp/acme@main SYNCED f52a11e4 Managed resources: NAMESPACE NAME STATUS k8snoexternalservices.constraints.gatekeeper.sh/no-internet-services Current namespace/hello Current MANAGED CLUSTER 2 -------------------- <root> git@github.com:foo-corp/acme@main PENDING 9edf8444 MANAGED CLUSTER 3 -------------------- <root> git@github.com:foo-corp/acme@main ERROR f52a11e4 Error: KNV1021: No CustomResourceDefinition is defined for the resource in the cluster.
- If true , nomos status shows the resource level status for your root or namespace source of truth when syncing from more than one source of truth.
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- The following table includes the most common causes of large log files and how you can resolve them: Cause Recommended action Increased log verbosity Reduce log verbosity with log level overrides Very large objects Unmanage the large object or reduce their size Many objects Split your repository into multiple repositories Controller fights Resolve the fighting Migrate from a ConfigManagement object to a RootSync object You can run the nomos migrate command to migrate from your ConfigManagement object to a RootSync object to enable the RootSync and RepoSync APIs. nomos migrate supports dry-run for previewing the migration process. nomos migrate modifies your ConfigManagement object on the cluster directly.

### "Monitor RootSync and RepoSync objects \_|\_ Config Sync \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/monitor-rootsync-reposync)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following output shows that a Deployment named nginx-deployment is ready: resourceStatuses: - group: apps kind: Deployment name: nginx-deployment namespace: default status: Current View logs For each RootSync and RepoSync object you create, Config Sync creates a reconciler Deployment to perform syncing.
- To view the reconciliation status for the RootSync object, run the following command: kubectl get resourcegroup.kpt.dev ROOT SYNC NAME -n config-management-system -o yaml Replace the ROOT SYNC NAME with the name of the RootSync object.
- To view the reconciliation status for the RepoSync object, run the following command: kubectl get resourcegroup.kpt.dev REPO SYNC NAME -n NAMESPACE -o yaml Replace the following: REPO SYNC NAME : the name of the RepoSync object.
- To view the status of a RootSync object, run the following command: kubectl get rootsync ROOT SYNC NAME -n config-management-system -o yaml Replace the ROOT SYNC NAME with the name of the RootSync object.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- This change ensures that the nomos command can always get the status of all enrolled clusters and can validate configs for them.
- This change ensures that the nomos command can always get the status of all enrolled clusters and can validate configs for them.

