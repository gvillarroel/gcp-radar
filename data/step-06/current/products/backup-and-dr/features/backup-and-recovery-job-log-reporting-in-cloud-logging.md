---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.934Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and recovery job log reporting in Cloud Logging"
feature_slug: "backup-and-recovery-job-log-reporting-in-cloud-logging"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide"
keywords:
  - "reporting"
  - "logging"
  - "recovery"
  - "added"
---

# Backup and recovery job log reporting in Cloud Logging

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service added comprehensive job reporting access via backup and recovery job logs in Cloud Logging.

## Extended Definition

Backup and DR Service added comprehensive job reporting access via backup and recovery job logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide)

## Supporting Pages

### "Backup/recovery appliance event logs \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve the Backup and DR event log entries for your backup/recovery appliances: In the Google Cloud console, go to the Logging > Logs Explorer .
- This page explains how to view the event logs created on a backup/recovery appliance in Cloud Logging .
- The following sample is an example log entry logged on a backup/recovery appliance ba-1-52973 for a failed snapshot job. { "insertId" : "aop2oko38hsami1c" , "jsonPayload" : { "appName" : "instance-2" , "srcid" : "111428" , "jobName" : "Job 0110906c" , "appType" : "GCPInstance" , "eventId" : 43901 , "component" : "udp" , "eventTime" : "2023-02-06T20:24:52.450Z" , "errorMessage" : "Failed snapshot Job 0110906c for application instance-2 on host instance-2, Error: 1249: Failed to get VM details , sltname: pd snaps, slpname: ba-1-52973 Profile. " }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , "labels" : { "backup recovery appliance id" : "test-backup-recovery-appliances" , "resource container" : "projects/1234567" , "management server id" : "abcd-efgh-1234-5678-6789" , "location" : "" } }, "timestamp" : "2023-02-06T20:24:55.275029393Z" , "severity" : "ERROR" , "logName" : "projects/project1/logs/backupdr.googleapis.com %2F backup recovery appliance events" , "receiveTimestamp" : "2023-02-06T20:24:56.388937247Z" } Note: Event logs are not generated for successfully completed backup jobs.
- Event log format Backup and DR event log entries include the following fields: appName : This field displays the name of the application associated with the event. srcid : This field displays a unique ID of the event occurring in the backup/recovery appliance. jobName : This field displays the name of the job associated with the event. appType : This field displays the type of the application associated with the event. eventId : This field displays a unique ID associated with the error. component : This field displays the source of the event. eventTime : This field displays the time when the event was reported. errorMessage : This field describes the detailed error associated with the event.

### "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- If your alert policy includes or excludes specific event IDs then you need to modify the event ID as well: "entries" : [ { "jsonPayload" : { "eventId" : 10046 , "errorMessage" : "this is a manually generated error message created for testing" }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , }, "severity" : "ERROR" , "logName" : "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" , } ] Copy the log entry you configured previously.
- Policyname = 'Backup/DR event has occurred' Notification rate limit = 6 hr logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND NOT jsonPayload . eventId = ( 10085 OR 10229 OR 42356 OR 43901 ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Policyname = 'Snapshot job has failed' Notification rate limit = 30 min logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . eventId = 43901 Events that are less urgent and hence require less frequent notifications.
- The following is the sample query to get notified on an event with a specific event ID. logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" jsonPayload . eventId = 10046 In the header of the Query results pane, click Create alert .

### "Deploy a backup/recovery appliance \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide](https://docs.cloud.google.com/backup-disaster-recovery/docs/deployment/deployment-guide)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It is in this format: projects/test-project/locations/us-central1/operations/operationID The output is displayed as: Terraform You can use the following Terraform resource links to deploy an appliance management console and a backup/recovery appliance: Deploy a appliance management console using Terraform resource Deploy a backup/recovery appliance using Terraform resource Caution: When deploying multiple backup/recovery appliances using Terraform, each appliance must be associated with a unique Service Account.
- Resizing the appliance or changing its machine configuration—changing the series, CPU, memory—can make the backup/recovery appliance unusable. gcloud You can use gcloud CLI to create an appliance management console.
- Home Documentation Storage Backup and DR Guides Send feedback Deploy a backup/recovery appliance Stay organized with collections Save and categorize content based on your preferences.
- Warning: After the backup/recovery appliance has been deployed, the Compute Engine VM instances listing page shows a recommendation to save money by resizing the instance.

