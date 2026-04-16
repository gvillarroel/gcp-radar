---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.312Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos bugreport timeout flag"
feature_slug: "nomos-bugreport-timeout-flag"
latest_feature_date: "2022-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
keywords:
  - "nomos"
  - "bugreport"
  - "timeout"
  - "flag"
  - "command"
  - "supports"
  - "configuring"
  - "cluster"
---

# nomos bugreport timeout flag

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos bugreport command supports a --timeout flag for configuring cluster connection timeout.

## Extended Definition

The nomos bugreport command supports a --timeout flag for configuring cluster connection timeout.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- To roll back to the previous configuration, copy the file path for cm-original.yaml and apply the file to your cluster: kubectl apply -f CM ORIGINAL PATH nomos migrate flags To customize the nomos migrate command, add the following flags: Flag Description --connect-timeout Accepts a duration.
- The following table includes the most common causes of large log files and how you can resolve them: Cause Recommended action Increased log verbosity Reduce log verbosity with log level overrides Very large objects Unmanage the large object or reduce their size Many objects Split your repository into multiple repositories Controller fights Resolve the fighting Migrate from a ConfigManagement object to a RootSync object You can run the nomos migrate command to migrate from your ConfigManagement object to a RootSync object to enable the RootSync and RepoSync APIs. nomos migrate supports dry-run for previewing the migration process. nomos migrate modifies your ConfigManagement object on the cluster directly.
- If you are using a hierarchical source of truth , you need to run the nomos init command to initialize a hierarchical directory: nomos init This creates the basic directory structure of a hierarchical source of truth, including the system/ , cluster/ , and namespaces/ directories. nomos init flags To customize nomos init , add the following flags: Flag Description --force Write to directory even if nonempty, overwriting conflicting files -h or --help Help for the nomos init command. --path Accepts a string.

### nomos bugreport contents \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The nomos bugreport output file structure looks like this: - raw/ - cluster/ - configmanagement/ - namespaces/ - config-management-monitoring/ - config-management-system/ - gatekeeper-system/ - resource-group-system/ - kube-system/ - processed/ - status.txt - version.txt The information you can get from nomos bugreport : Nomos version shows the Config Sync version, the output of nomos version .
- You can get similar information from your cluster by running kubectl get or kubectl logs , but the advantage of nomos bugreport is that it creates an archive of key information about the Config Sync system.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback nomos bugreport contents Stay organized with collections Save and categorize content based on your preferences.
- The nomos command-line tool helps with common administrative tasks for Config Sync, for example producing a diagnostic archive.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- Run the following command to update the cluster in your current kubectl context: nomos migrate --remove-configmanagement shell script Copy the following shell script to a file and then run it to update the cluster in your current kubectl context. #!/bin/bash set -euox pipefail hnc enabled = " $( kubectl get configmanagements.configmanagement.gke.io config-management -o = jsonpath = "{.spec.hierarchyController.enabled}" --ignore-not-found ) " if [[ " ${ hnc enabled } " == "true" ]] ; then echo "Hierarchy Controller is enabled on the ConfigManagement object.
- This change ensures that the nomos command can always get the status of all enrolled clusters and can validate configs for them.

