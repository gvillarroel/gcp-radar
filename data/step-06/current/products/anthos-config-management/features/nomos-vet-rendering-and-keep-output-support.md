---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.247Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos vet rendering and keep-output support"
feature_slug: "nomos-vet-rendering-and-keep-output-support"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "nomos vet --keep-output"
  - "keep output flag"
  - "--keep-output"
  - "keep-output"
  - "Kustomize in nomos vet"
  - "Helm in nomos vet"
  - "vet rendering"
  - "nomos vet"
---

# nomos vet rendering and keep-output support

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Adds rendering support for Kustomize and Helm in nomos vet, including a --keep-output flag to retain rendered output.

## Extended Definition

Adds rendering support for Kustomize and Helm in nomos vet, including a --keep-output flag to retain rendered output.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default value is yaml . -h or --help Help for the nomos vet command. --keep-output Accepts a Boolean.
- If --keep-output is set to false , this flag is ignored. --path Accepts a string.
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.

### Use Config Sync with Kustomize and Helm \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions Config Sync automated rendering for Kustomize/Helm but does not discuss nomos vet or a keep-output option.

Evidence snippets:
- Check the syntax and validity of your configs by running nomos vet with the following flags: nomos vet \ --source-format = unstructured \ --keep-output = true \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos vet work on an unstructured repository. --keep-output=true saves the rendered configs. --output= OUTPUT DIRECTORY is the path to the rendered configs.
- Preview and validate rendered configs Before Config Sync renders the configs and syncs them to the cluster, ensure that the configs are accurate by running nomos hydrate to preview the rendered configuration and running nomos vet to validate that the format is correct.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- It provides a --keep-output flag to preserve the rendered output.
- 1.8.1 Change Cluster selectors and namespace selectors annotations are removed from the result of nomos hydrate so that it can pass nomos vet and can be synced directly to the cluster by Config Sync.
- 1.21.0 Feature The nomos vet command now supports a --threshold flag to proactively validate the number of objects in your Config Sync repository.
- This has no effect on Config Sync running on the cluster, but breaks validation when running nomos vet manually against hierarchical repositories.

