---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.247Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos hydrate rendering support for Kustomize and Helm"
feature_slug: "nomos-hydrate-rendering-support-for-kustomize-and-helm"
latest_feature_date: "2021-09-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm"
keywords:
  - "nomos hydrate output"
  - "nomos hydrate rendering"
  - "hydrate rendering"
  - "hydrate command"
  - "nomos hydrate"
  - "unstructured source"
  - "Kustomize rendering"
  - "Helm rendering"
---

# nomos hydrate rendering support for Kustomize and Helm

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Enables nomos hydrate to render unstructured source and support rendering for Kustomize configurations and Helm charts.

## Extended Definition

Enables nomos hydrate to render unstructured source and support rendering for Kustomize configurations and Helm charts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This command can also convert a hierarchical source of truth to one or more unstructured sources of truth , using the content in the compiled/ directory. nomos hydrate flags To customize the nomos hydrate command, add the following flags: Flag Description --api-server-timeout Accepts a duration string.
- View all configs in the source of truth You can use the nomos hydrate command to view the combined contents of your source of truth on each enrolled cluster.
- The default value is yaml . -h or --help Help for the nomos hydrate command. --no-api-server-check Accepts a Boolean.
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- 1.9.0 Feature The nomos hydrate command supports rendering unstructured source format and it supports rendering Kustomize configurations or Helm charts.
- 1.1.0 Change The nomos hydrate command is a replacement for the nomos view command, and reports your Anthos Config Management configuration in a human-readable way.
- 1.7.2 Issue The output of the nomos hydrate command does not pass nomos vet and cannot be synced using Config Sync without modifying the output.
- 1.8.0 Fixed The issue where nomos hydrate command attempts to connect to the API Server even if --no-api-server-check is passed has been fixed.

### Use Config Sync with Kustomize and Helm \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/tutorials/config-sync-helm)
- Source ID: `site-docs-root`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: The page explicitly describes Config Sync rendering Kustomize and Helm sources from a single repository, which is useful context for rendering behavior, though it does not reference the nomos hydrate command directly.

Evidence snippets:
- Preview and validate rendered configs Before Config Sync renders the configs and syncs them to the cluster, ensure that the configs are accurate by running nomos hydrate to preview the rendered configuration and running nomos vet to validate that the format is correct.
- Run the following nomos hydrate with the following flags: nomos hydrate \ --source-format = unstructured \ --output = OUTPUT DIRECTORY In this command: --source-format=unstructured lets nomos hydrate work on an unstructured repository.
- Config Sync can automatically render Kustomize configurations that are stored in an unstructured source of truth.

