---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.918Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup Vault retention lock by backup rule"
feature_slug: "backup-vault-retention-lock-by-backup-rule"
latest_feature_date: "2025-10-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings"
keywords:
  - "setting"
  - "lock"
  - "rule"
  - "retention"
  - "vault"
  - "added"
---

# Backup Vault retention lock by backup rule

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

A backup vault setting was added to prevent deletion during the retention duration defined in the backup rule, blocking manual deletion.

## Extended Definition

A backup vault setting was added to prevent deletion during the retention duration defined in the backup rule, blocking manual deletion.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)

## Supporting Pages

### "Backup vault for immutable and indelible backups \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Prevent deletion for duration specified in backup rule This setting allows a backup vault to adopt the retention period defined in an associated backup plan.
- When this setting is active, the Enforced retention column for the backup vault will indicate Inherited from rule .
- Example: Retention precedence If you have the following configuration: Backup vault Minimum enforced retention : 3 days Backup vault Prevent deletion for duration specified in backup rule : Enabled Backup plan Delete backups after : 7 days Result: The backup cannot be deleted for the 7-day period specified in the backup plan's rule and will be automatically deleted only after 7 days have passed.
- When you create a backup vault with a Minimum enforced retention of three days, then any backup rule that stores backups in this vault must have a Delete backups after value equal to or greater than three days.

### "Protect and recover SAP HANA databases in Compute Engine instances \_|\_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Note: If production log retention is set then purge will run based on the Retention of production db logs in hour setting under Application Details & Settings .
- If production log retention is set, then purge runs based on the Retention of production db logs in hours setting under Application Details & Settings .
- Size the HANA archive log backup disk to store archives based on the production log retention setting.
- Set application details & settings After setting the staging disk format and backup method , you must enter the details and settings you want to apply to your backup plans: In the appliance management console, go to App manager and click Applications .

### "Configure advanced policy settings \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: The Enforced Retention advanced policy setting is not compatible with application protection that points to a backup vault.
- You can modify a policy that is already used to protect an application by setting a longer enforced retention period.
- When a backup vault is the storage target, the backup vault determines the enforced retention period.
- The retention of logs replicated to OnVault is similar to snapshot log retention.

