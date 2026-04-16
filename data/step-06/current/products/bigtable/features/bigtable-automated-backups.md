---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.985Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable automated backups"
feature_slug: "bigtable-automated-backups"
latest_feature_date: "2025-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/managing-backups"
  - "https://docs.cloud.google.com/bigtable/docs/backups"
  - "https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table"
keywords:
  - "automated"
  - "backups"
  - "backup"
  - "generally"
  - "available"
---

# Bigtable automated backups

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

Automated backup for Bigtable is now generally available.

## Extended Definition

Automated backup for Bigtable is now generally available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)

## Supporting Pages

### Manage backups \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/managing-backups](https://docs.cloud.google.com/bigtable/docs/managing-backups)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Consider the following factors if you plan to enable automated backup: If a cluster is added to an instance that contains a table with automated backup enabled, daily backups aren't created on the added cluster.
- Under Configure automated backup , in the Retention period field, enter an integer from 3 to 90 to specify the number of days that Bigtable should retain backups after the change is saved.
- It can take up to an hour for Bigtable to start creating backups. gcloud To enable automated backup for a table, run the gcloud bigtable tables update command.
- To create daily backups on all clusters, including the newly added cluster, disable automated backup for the table, and then re-enable automated backup.

### Bigtable backups overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/backups](https://docs.cloud.google.com/bigtable/docs/backups)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Enable replication and automated backup to create daily backups in multiple regions, so that if a table becomes corrupted on one cluster, you have one or more backups that don't share storage on the corrupted cluster.
- Backups of replicated tables that are created as part of automated backup are not exact copies of each other, because backup times can vary from cluster to cluster.
- You can create backups in the following ways: Enable automated backup to let Bigtable create daily backups for you.
- You can't create hot backups using automated backup, and you can't create a hot backup on an HDD cluster.

### "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table](https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_table)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Union field automated backup config . automated backup config can be only one of the following: automatedBackupPolicy object ( AutomatedBackupPolicy ) If specified, automated backups are enabled for this table.
- Example: "3.5s" . frequency string ( Duration format) How frequently automated backups should occur.
- How long the automated backups should be retained.
- Otherwise, automated backups are disabled.

