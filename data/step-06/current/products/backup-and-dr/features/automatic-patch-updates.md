---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.931Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Automatic patch updates"
feature_slug: "automatic-patch-updates"
latest_feature_date: "2024-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance"
  - "https://docs.cloud.google.com/compute/docs/committed-use-discounts/extend-commitment-term"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server"
keywords:
  - "automatic"
  - "patch"
  - "updates"
  - "added"
---

# Automatic patch updates

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added support for automatic patch updates.

## Extended Definition

Added support for automatic patch updates.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance)
- [https://docs.cloud.google.com/compute/docs/committed-use-discounts/extend-commitment-term](https://docs.cloud.google.com/compute/docs/committed-use-discounts/extend-commitment-term)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)

## Supporting Pages

### "Update backup/recovery appliances \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/update-appliance)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- For more instructions on setting a default window, see Set a Default Window for Auto-patch Updates If the auto patch update fails to install automatically, it becomes visible on the Available updates page, where you can update the appliance manually.
- Update type : This field displays the type of update, such as Manual for manual patch updates and Auto for hotfixes and automatic patch updates.
- The Available Updates page displays the following fields: Update name : This field displays update name as PATCH NUMBER , AUTO PATCH NUMBER for a patch, or HF NUMBER for a hotfix.
- The auto-patch updates will happen 2 weeks after discovery of the update in one of the day of the week selected and within the given time slot .

### Extend commitment terms \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/committed-use-discounts/extend-commitment-term](https://docs.cloud.google.com/compute/docs/committed-use-discounts/extend-commitment-term)
- Source ID: `site-docs-reference-2`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- This commitment was purchased on January 1, 2024, and expires on June 30, To extend its term further until the end of June 30, 2026, make the following request: PATCH https://compute.googleapis.com/compute/v1/projects/my-project/regions/us-central1/commitments/example-commitment { "name": "example-commitment", "customEndTimestamp": "2026-07-01T07:00:00Z", } What's next Learn how to renew resource-based commitments automatically .
- This commitment was purchased on January 1, 2024, and expires on June 30, To extend its term further until the end of June 30, 2026, run the following command: gcloud compute commitments update example-commitment \ --region=us-central1 \ --project=my-project \ --custom-end-time=2026-07-01 REST To extend the term of an existing active commitment, make a PATCH request to the regionCommitments.update method .
- PATCH https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /commitments/ COMMITMENT NAME { "name": " COMMITMENT NAME ", "customEndTimestamp": " CUSTOM END DATE T END TIME Z", } Replace the following: COMMITMENT NAME : the name of the commitment REGION : the region of the commitment and where you want to commit to purchasing Compute Engine resources.
- If the commitments have any other pending update requests—such as merge, split, upgrade, or auto-renewal setting update—then, to request term extensions, you must wait until after 12 AM US and Canadian Pacific Time (UTC-8 or UTC-7) on the following day for the pending operations to complete and the updates to take effect.

### Backup and DR Service for Microsoft SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sql-server)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Updates the LiveClone or mountable Microsoft SQL Server data on a scheduled or on-demand basis Optionally automatically applies scripts to the LiveClone's Microsoft SQL Server data after each update.
- When you protect the entire instance, as databases are added to the instance, they are automatically included in the next Backup and DR capture job.
- Resize database log's staging disk The physical space required to accommodate backups of a database's logs is automatically managed by Backup and DR.
- To automatically protect new members of a group of databases, create and protect those databases in a SQL Server instance instead.

