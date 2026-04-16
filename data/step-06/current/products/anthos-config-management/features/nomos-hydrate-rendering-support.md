---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.322Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos hydrate rendering support"
feature_slug: "nomos-hydrate-rendering-support"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors"
keywords:
  - "nomos"
  - "hydrate"
  - "rendering"
  - "command"
  - "can"
  - "render"
  - "unstructured"
  - "source"
---

# nomos hydrate rendering support

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos hydrate command can render unstructured source format, Kustomize configurations, and Helm charts.

## Extended Definition

The nomos hydrate command can render unstructured source format, Kustomize configurations, and Helm charts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This command can also convert a hierarchical source of truth to one or more unstructured sources of truth , using the content in the compiled/ directory. nomos hydrate flags To customize the nomos hydrate command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- Using RootSync and RepoSync objects nomos-status-reader.yaml apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configsync.gke.io" ] resources : [ "reposyncs" , "rootsyncs" ] verbs : [ "get" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Not using RootSync and RepoSync objects apiVersion : rbac.authorization.k8s.io/v1 kind : ClusterRole metadata : name : nomos-status-reader rules : - apiGroups : [ "configmanagement.gke.io" ] resources : [ "configmanagements" , "repos" ] verbs : [ "get" , "list" ] - nonResourceURLs : [ "/" ] verbs : [ "get" ] Apply the nomos-status-reader.yaml file: kubectl apply -f nomos-status-reader.yaml Check for errors in the source of truth Before you commit a config to the source of truth, use the nomos vet command to check the syntax and validity of the configs in your source of truth: nomos vet --source-format unstructured If syntax errors are found, the nomos vet command exits with a non-zero status and logs error messages to STDERR . nomos vet flags To customize the nomos vet command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.
- Set the --source-format argument to the source format of the repository. nomos vet --path= /path/to/repo --source-format unstructured Ensure that the pre-commit file is executable: chmod +x .git/hooks/pre-commit Now, when you run a git commit command in the clone of your source of truth, nomos vet runs automatically.

### Use Config Sync with Kustomize and Helm \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Check the syntax and validity of your configs by running nomos vet with the following flags: nomos vet \ --source-format = unstructured \ --keep-output = true \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos vet work on an unstructured repository. --keep-output=true saves the rendered configs. --output= OUTPUT DIRECTORY is the path to the rendered configs.
- Run the following nomos hydrate with the following flags: nomos hydrate \ --source-format = unstructured \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos hydrate work on an unstructured repository.
- To configure your RootSync object, create a root-sync.yaml file: root-sync.yaml apiVersion : configsync.gke.io/v1beta1 kind : RootSync metadata : name : root-sync namespace : config-management-system spec : sourceFormat : unstructured git : repo : YOUR GIT REPOSITORY branch : main auth : none override : enableShellInRendering : true Replace YOUR GIT REPOSITORY with the URL of your Git repository.
- Preview and validate rendered configs Before Config Sync renders the configs and syncs them to the cluster, ensure that the configs are accurate by running nomos hydrate to preview the rendered configuration and running nomos vet to validate that the format is correct.

### Error reference \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For example, if the rendering state doesn't match the source config, you might see this error.
- If the Git repository contains Kustomize configurations, but no kustomization.yaml file exists in the Git sync directory, either add kustomization.yaml in the sync directory to trigger the rendering process, or remove kustomization.yaml from all sub directories to skip rendering.
- If you were previously syncing to a hierarchical repository and had to declare the controller namespace alongside any resources, consider switching to an unstructured repository for more flexibility in your source structure.
- If a kustomize build error happens when pulling remote bases from public repositories, you need to set spec.override.enableShellInRendering to true .

