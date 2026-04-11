---
title: "Backup and DR Service for SAP HANA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backupdr-for-sap-hana
  title: "Backup and DR Service for SAP HANA \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Reference
Send feedback
Backup and DR Service for SAP HANA
Stay organized with collections
Save and categorize content based on your preferences.
Protect the SAP production environment against data loss, errors, and corruption
SAP HANA is one of the most popular enterprise databases in the world. It's
unique because it runs in-memory, so it can return query results very quickly.
Many enterprises use SAP HANA for their mission critical applications. As can
happen with any database, SAP HANA is susceptible to corruption, accidental
deletion, or even security threats such as ransomware attacks. Backup and DR Service
lets you efficiently and securely back up and recover your production systems.
Protecting SAP HANA databases
The recommended protection method for SAP HANA databases and logs in
Backup and DR is the SAP HANA savepoint API (Persistent Disk snapshots).
To get started protecting your HANA databases, go through the SAP HANA procedures in
Protect and recover an SAP HANA database running in Compute Engine
Backup and DR uses Persistent Disk snapshots to incrementally back up data
and log volume from your persistent disks with application consistency.
Backup and DR stores multiple copies of each snapshot across multiple
locations with automatic checksums to ensure the integrity of your data.
Backup and DR supports SAP HANA 2.0 Scale-up and SAP HANA 2.0 HA (1+1)
replication system. HANA Scale-Out is not supported for persistent disk snapshots.
Protecting SAP HANA Scale Out instances
Protection of HANA Scale-Out instances with persistent disk snapshots is not
yet supported. You can protect HANA Scale-Out instances using either of the two
following alternative protection methods:
SAP HANA savepoint API (LVM backup)
SAP backint API (Full+Incremental backup)
These methods are preferable only if you have HANA Scale-Out instances.
If you must use one of these alternative methods, see
Backup and DR for SAP HANA Scale-Out .
What's next
Go through the SAP HANA quick start exercise in
Protect and recover an SAP HANA database running in Compute Engine
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
