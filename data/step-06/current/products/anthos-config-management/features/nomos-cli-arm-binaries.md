---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.314Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "Nomos CLI ARM binaries"
feature_slug: "nomos-cli-arm-binaries"
latest_feature_date: "2022-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport"
keywords:
  - "nomos"
  - "cli"
  - "arm"
  - "binaries"
  - "provides"
  - "linux"
  - "macos"
---

# Nomos CLI ARM binaries

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

Nomos CLI provides ARM binaries for Linux and macOS.

## Extended Definition

Nomos CLI provides ARM binaries for Linux and macOS.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- The default value is "." Troubleshooting On Linux, you might see the following error when executing a nomos command: failed to create client configs: while getting config path: failed to get current user: user: Current not implemented on linux/amd64 To fix this problem, create a USER environment variable: export USER = $( whoami ) What's next Get started with Config Sync Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.
- Use nomos vet in a server-side hook Git provides a mechanism for running checks at the server, rather than the client, during a git push operation.
- If the migration process is terminated, it can be recovered manually by running the following commands: kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/cm-multi.yaml && \ kubectl wait --for condition=established crd rootsyncs.configsync.gke.io && \ kubectl apply -f /tmp/nomos-migrate/my managed cluster-1/root-sync.yaml. - Updating the ConfigManagement object .... - Waiting for the RootSync CRD to be established .... - The RootSync CRD has been established. - Creating the RootSync object .... - Waiting for the reconciler-manager Pod to be ready .... - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - Haven't detected running Pods with the label selector "app=reconciler-manager". - The reconciler-manager Pod is running. - Waiting for the root-reconciler Pod to be ready .... - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - Haven't detected running Pods with the label selector "configsync.gke.io/reconciler=root-reconciler". - The root-reconciler Pod is running. - The migration process is done.

### nomos bugreport contents \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The nomos bugreport output file structure looks like this: - raw/ - cluster/ - configmanagement/ - namespaces/ - config-management-monitoring/ - config-management-system/ - gatekeeper-system/ - resource-group-system/ - kube-system/ - processed/ - status.txt - version.txt The information you can get from nomos bugreport : Nomos version shows the Config Sync version, the output of nomos version .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback nomos bugreport contents Stay organized with collections Save and categorize content based on your preferences.
- You can get similar information from your cluster by running kubectl get or kubectl logs , but the advantage of nomos bugreport is that it creates an archive of key information about the Config Sync system.
- The nomos command-line tool helps with common administrative tasks for Config Sync, for example producing a diagnostic archive.

### Install Config Sync manually using kubectl \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/installing-kubectl)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Install and initialize the Google Cloud CLI , which provides the gcloud , kubectl , and nomos commands used in these instructions.
- It must be disabled before migrating." echo "This can be done by unsetting the spec.hierarchyController field on ConfigManagement." exit 1 fi kubectl delete deployment -n config-management-system config-management-operator --ignore-not-found --cascade = foreground if kubectl get configmanagement config-management &> /dev/null ; then kubectl patch configmanagement config-management --type = "merge" -p '{"metadata":{"finalizers":[]}}' kubectl delete configmanagement config-management --cascade = orphan --ignore-not-found fi kubectl delete clusterrolebinding config-management-operator --ignore-not-found kubectl delete clusterrole config-management-operator --ignore-not-found kubectl delete serviceaccount -n config-management-system config-management-operator --ignore-not-found kubectl delete customresourcedefinition configmanagements.configmanagement.gke.io --ignore-not-found Install the new Config Sync version To upgrade Config Sync, complete the following steps for each enrolled cluster: Download the Config Sync manifest and nomos commands for the new version.
- To propagate the cluster name to both RootSync and RepoSync reconcilers, restart the reconciler-manager deployment: kubectl rollout restart deployment/reconciler-manager -n config-management-system Verify the sync status of the root repository You can use the nomos status command to inspect the sync status of the root repository: nomos status You should see output similar to the following example: my managed cluster-1 -------------------- <root> git@github.com:foo-corp/acme/admin@main SYNCED f52a11e4 Verify the RootSync installation When you create a RootSync object, Config Sync creates a reconciler with the root-reconciler prefix.
- Run the following command to update the cluster in your current kubectl context: nomos migrate --remove-configmanagement shell script Copy the following shell script to a file and then run it to update the cluster in your current kubectl context. #!/bin/bash set -euox pipefail hnc enabled = " $( kubectl get configmanagements.configmanagement.gke.io config-management -o = jsonpath = "{.spec.hierarchyController.enabled}" --ignore-not-found ) " if [[ " ${ hnc enabled } " == "true" ]] ; then echo "Hierarchy Controller is enabled on the ConfigManagement object.

