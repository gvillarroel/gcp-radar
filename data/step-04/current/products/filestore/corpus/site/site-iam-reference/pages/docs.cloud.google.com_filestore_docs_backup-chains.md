---
title: "Backup chains \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/backup-chains
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/backup-chains
  title: "Backup chains \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Backup chains
Stay organized with collections
Save and categorize content based on your preferences.
A backup chain is a group of backups for the same instance, region, and CMEK . Backups are stored in Cloud Storage and are incremental, capturing only changes since the last backup in the chain to save space and reduce costs. Occasionally, a backup might capture a full copy to ensure history reliability.
Every time a backup is created in the same backup chain, to avoid creating a full copy, the previous backup is scanned for both
differential and incremental changes:
Differential changes: includes changes made to files on the share such as
file edits, additions, or deletions.
Incremental changes: includes changes to storage in the bucket where backup
data is located. This might include deduplication of data previously
referenced in the chain.
Storing instance data to multiple backup chains implies that you are saving and storing backups to alternating locations.
Expect higher latency on backup create operations when alternating between backup chains.
Unchanged data contained in previous backups are referenced in, but not copied
to, newer backups. If an older backup is deleted, its unique data is copied to
the next most recent backup and all internal data references are automatically
updated.
Internally, a backup chain's history is tracked using snapshots, which consume
capacity on the source instance.
Backup creation is instantaneous, but it takes a period that's proportional to
the amount of data being copied before the backup is available for use. During
this period, the backup transitions through three states:
State
Description
Creating
Capturing the file share state; takes a few seconds.
Finalizing
Uploading data; duration depends on data size.
Ready
Ready for use.
After creation, basic tier backups are compressed to reduce costs. Performance might be slightly reduced during creation for zonal, regional, and enterprise service tiers. For more information, see Compare snapshots and backups .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
