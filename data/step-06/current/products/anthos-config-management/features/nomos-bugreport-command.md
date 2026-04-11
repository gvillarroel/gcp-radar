---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.262Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos bugreport command"
feature_slug: "nomos-bugreport-command"
latest_feature_date: "2020-02-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes"
keywords:
  - "zip log bundle"
  - "support ticket logs"
  - "nomos bug report"
  - "collect logs"
  - "nomos bugreport command"
  - "bugreport command"
  - "nomos bugreport"
---

# nomos bugreport command

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Anthos Config Management introduced the nomos bugreport CLI command to collect logs into a zip file for support tickets.

## Extended Definition

Anthos Config Management introduced the nomos bugreport CLI command to collect logs into a zip file for support tickets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)

## Supporting Pages

### nomos bugreport contents \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: The page is specifically a reference for `nomos bugreport`, describing its purpose, output structure, and use for diagnostics and support.

Evidence snippets:
- The nomos bugreport output file structure looks like this: - raw/ - cluster/ - configmanagement/ - namespaces/ - config-management-monitoring/ - config-management-system/ - gatekeeper-system/ - resource-group-system/ - kube-system/ - processed/ - status.txt - version.txt The information you can get from nomos bugreport : Nomos version shows the Config Sync version, the output of nomos version .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Config Sync Reference Send feedback nomos bugreport contents Stay organized with collections Save and categorize content based on your preferences.
- You can get similar information from your cluster by running kubectl get or kubectl logs , but the advantage of nomos bugreport is that it creates an archive of key information about the Config Sync system.
- You can also use the output of nomos bugreport for your own debugging or internal support.

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a bug report If you have a problem with Config Sync that requires help from Google Cloud support , you can provide them with valuable debugging information by using the nomos bugreport command.
- Limitations The nomos bugreport command fails and produces an incomplete zip file if any individual file exceeds 1GiB.
- The nomos tool provides you with the following commands: Command Usage nomos status Check Config Sync status nomos vet Check for errors in the source of truth nomos hydrate View all configs in the source of truth nomos bugreport Create a bug report nomos migrate Migrate from ConfigManagement object to RootSync nomos init Initialize a hierarchical source of truth Prerequisites Before you can use the nomos tool to interact with a cluster, Config Sync must already be installed on the target cluster.
- You can use this command for a single source of truth and multiple repositories. nomos bugreport This command generates a timestamped zip file with information on the Kubernetes cluster set in your kubectl context.

### Config Sync release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/release-notes)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- 1.11.1 Feature Added a new --timeout flag to the nomos bugreport command.
- 1.2.1 Feature A new CLI subcommand is available. nomos bugreport bundles up Anthos Config Management log information into a Zip file, which can be attached to a Google support ticket.
- 1.11.1 Fixed Fixed the issue where nomos bugreport blocks on IO when the number of managed resources exceeds the buffer limit.
- 1.10.1 Fixed Fixed the issue where nomos bugreport could leak Git proxy credentials if present in the git-sync ConfigMap.

