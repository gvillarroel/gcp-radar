---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:06:37.245Z"
product_name: "Anthos Config Management"
product_slug: "anthos-config-management"
feature_name: "nomos migrate command for RootSync/RepoSync API enablement"
feature_slug: "nomos-migrate-command-for-rootsync-reposync-api-enablement"
latest_feature_date: "2021-12-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command"
keywords:
  - "API enablement workflow"
  - "migrate single repository"
  - "migrate multiple repositories"
  - "RepoSync API enablement"
  - "RootSync API enablement"
  - "enable RepoSync API"
  - "enable RootSync API"
  - "migrate command"
---

# nomos migrate command for RootSync/RepoSync API enablement

Product: Anthos Config Management
Coverage: LOW

## Step 02 Summary

Enables enabling the RootSync and RepoSync APIs through nomos migrate, allowing synchronization from single or multiple repositories.

## Extended Definition

Enables enabling the RootSync and RepoSync APIs through nomos migrate, allowing synchronization from single or multiple repositories.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)

## Supporting Pages

### Use the nomos command-line tool \_|\_ Config Sync \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command](https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/how-to/nomos-command)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- The following table includes the most common causes of large log files and how you can resolve them: Cause Recommended action Increased log verbosity Reduce log verbosity with log level overrides Very large objects Unmanage the large object or reduce their size Many objects Split your repository into multiple repositories Controller fights Resolve the fighting Migrate from a ConfigManagement object to a RootSync object You can run the nomos migrate command to migrate from your ConfigManagement object to a RootSync object to enable the RootSync and RepoSync APIs. nomos migrate supports dry-run for previewing the migration process. nomos migrate modifies your ConfigManagement object on the cluster directly.
- To roll back to the previous configuration, copy the file path for cm-original.yaml and apply the file to your cluster: kubectl apply -f CM ORIGINAL PATH nomos migrate flags To customize the nomos migrate command, add the following flags: Flag Description --connect-timeout Accepts a duration.
- If true , only prints the migration output. -h or --help Help for the nomos migrate command. --remove-configmanagement Accepts a boolean.

