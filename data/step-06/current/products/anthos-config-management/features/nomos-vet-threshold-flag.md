---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:07:01.273Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos vet threshold flag"
feature_slug: "nomos-vet-threshold-flag"
latest_feature_date: "2025-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync"
keywords:
  - "nomos"
  - "vet"
  - "threshold"
  - "flag"
  - "command"
  - "supports"
  - "validate"
  - "repository"
---

# nomos vet threshold flag

Product: Anthos Config Management
Coverage: MEDIUM

## Step 02 Summary

The nomos vet command supports a --threshold flag to validate repository object counts before sync.

## Extended Definition

The nomos vet command supports a --threshold flag to validate repository object counts before sync.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table includes the most common causes of large log files and how you can resolve them: Cause Recommended action Increased log verbosity Reduce log verbosity with log level overrides Very large objects Unmanage the large object or reduce their size Many objects Split your repository into multiple repositories Controller fights Resolve the fighting Migrate from a ConfigManagement object to a RootSync object You can run the nomos migrate command to migrate from your ConfigManagement object to a RootSync object to enable the RootSync and RepoSync APIs. nomos migrate supports dry-run for previewing the migration process. nomos migrate modifies your ConfigManagement object on the cluster directly.
- Applying an object larger than this limit causes one of the following errors, depending on object size: etcdserver: request is too large rpc error: code = ResourceExhausted desc = trying to send message larger than max Request entity too large: limit is 3145728 To protect against ResourceGroup objects exceeding the Kubernetes size limit, you can use the nomos vet --threshold to validate the number of objects in your source repository.
- Passing the --threshold flag will cause the vet command to error if the number of objects in your source repository exceeds the threshold.
- To enforce the threshold, use the nomos vet --threshold command in a source repository presubmit check or git pre-commit hook .

### Use Config Sync with Kustomize and Helm \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Check the syntax and validity of your configs by running nomos vet with the following flags: nomos vet \ --source-format = unstructured \ --keep-output = true \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos vet work on an unstructured repository. --keep-output=true saves the rendered configs. --output= OUTPUT DIRECTORY is the path to the rendered configs.
- Run the following nomos hydrate with the following flags: nomos hydrate \ --source-format = unstructured \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos hydrate work on an unstructured repository.
- Preview and validate rendered configs Before Config Sync renders the configs and syncs them to the cluster, ensure that the configs are accurate by running nomos hydrate to preview the rendered configuration and running nomos vet to validate that the format is correct.
- Since you are using Kustomize configurations and Helm charts, you need to use an unstructured repository and add this flag. --output= OUTPUT DIRECTORY lets you define a path to the rendered configs.

### Safe rollouts with Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/safe-rollouts-with-config-sync)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Running a nomos vet command on all suggested changes confirms that the repository is a valid Config Sync configuration.
- This command validates that your Config Sync repository's syntax is valid.
- The simplest way to automate error detection is to run the nomos status command , which tells you if there's an error in a cluster.
- To tighten the feedback loop even more, you can ask that users run the nomos vet command as a Git pre-commit hook .

