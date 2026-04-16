---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:47:34.418Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "Bare Metal Solution delete cooling-off bypass"
feature_slug: "bare-metal-solution-delete-cooling-off-bypass"
latest_feature_date: "2023-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.nfsShares/delete"
  - "https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr"
keywords:
  - "cooling"
  - "bypass"
  - "period"
  - "delete"
---

# Bare Metal Solution delete cooling-off bypass

Product: Bare Metal Solution
Coverage: MEDIUM

## Step 02 Summary

The cooling-off period can now be skipped when deleting a LUN or storage volume in Bare Metal Solution.

## Extended Definition

The cooling-off period can now be skipped when deleting a LUN or storage volume in Bare Metal Solution.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.nfsShares/delete](https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.nfsShares/delete)
- [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)

## Supporting Pages

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Delete an NFS volume Deleting an NFS volume automatically triggers a cooling-off period of seven days during which time Google Cloud removes the volume from use.
- If you want to skip the cooling-off period and delete the storage volume permanently, continue with the following steps: Caution: This action can't be reversed.
- If you want to skip the cooling-off period and delete the LUN permanently, continue with the following steps: Caution: This action can't be reversed.
- Once the storage volume is deleted, the quota is returned to you after the seven day cooling-off period.

### "Method: projects.locations.nfsShares.delete \_|\_ Bare Metal Solution \_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.nfsShares/delete](https://docs.cloud.google.com/bare-metal/docs/reference/rest/v2/projects.locations.nfsShares/delete)
- Source ID: `site-api-reference`
- Final score: 58
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Distributed, hybrid, and multicloud Bare Metal Reference Send feedback Method: projects.locations.nfsShares.delete Stay organized with collections Save and categorize content based on your preferences.
- HTTP request DELETE https://baremetalsolution.googleapis.com/v2/{name=projects/ /locations/ /nfsShares/ } The URL uses gRPC Transcoding syntax.
- The underlying volume is automatically deleted.
- The name of the NFS share to delete.

### "Solution Guide: Google Cloud Backup and DR for Oracle on Bare Metal Solution\

- URL: [https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr](https://docs.cloud.google.com/bare-metal/docs/solutions/oracle/bms-oracle-backup-and-dr)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Go to the Monitor > Jobs menu to monitor the progress of the job being unmounted and confirm that the job completes. https://bmc- PROJECT NUMBER - GENERATED ID -dot- REGION .backupdr.googleusercontent.com/#jobs If you accidentally delete the Oracle database manually, or shutdown the database before you run the Unmount and Delete job, perform the Unmount and Delete job again and select the Force Unmount option on the confirmation screen.
- 00:00:00 ora pmon SCHTEST root 178934 169484 0 10:07 pts/0 00:00:00 grep --color=auto pmon Unmount an Oracle database After you finish using the database, you should unmount and delete the database.
- Note: At this point, you cannot move, expand, or delete the Persistent Disk until you remove any backup images stored in this pool.
- This action forcibly removes the redo staging disk from the target host and deletes the disk from the snapshot pool.

