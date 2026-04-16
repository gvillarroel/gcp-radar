---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.920Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup/recovery appliance alert event: jobs running over 6 hours"
feature_slug: "backup-recovery-appliance-alert-event-jobs-running-over-6-hours"
latest_feature_date: "2025-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts"
keywords:
  - "over"
  - "running"
  - "jobs"
  - "alert"
  - "appliance"
  - "recovery"
  - "event"
---

# Backup/recovery appliance alert event: jobs running over 6 hours

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

A new monitoring alert event (10237) is added to report backup/recovery appliance jobs that run for more than six hours.

## Extended Definition

A new monitoring alert event (10237) is added to report backup/recovery appliance jobs that run for more than six hours.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)

## Supporting Pages

### "Backup/recovery appliance event logs \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following sample is an example log entry logged on a backup/recovery appliance ba-1-52973 for a failed snapshot job. { "insertId" : "aop2oko38hsami1c" , "jsonPayload" : { "appName" : "instance-2" , "srcid" : "111428" , "jobName" : "Job 0110906c" , "appType" : "GCPInstance" , "eventId" : 43901 , "component" : "udp" , "eventTime" : "2023-02-06T20:24:52.450Z" , "errorMessage" : "Failed snapshot Job 0110906c for application instance-2 on host instance-2, Error: 1249: Failed to get VM details , sltname: pd snaps, slpname: ba-1-52973 Profile. " }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , "labels" : { "backup recovery appliance id" : "test-backup-recovery-appliances" , "resource container" : "projects/1234567" , "management server id" : "abcd-efgh-1234-5678-6789" , "location" : "" } }, "timestamp" : "2023-02-06T20:24:55.275029393Z" , "severity" : "ERROR" , "logName" : "projects/project1/logs/backupdr.googleapis.com %2F backup recovery appliance events" , "receiveTimestamp" : "2023-02-06T20:24:56.388937247Z" } Note: Event logs are not generated for successfully completed backup jobs.
- Make sure you use uppercase AND . logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . app name = appname What's next To configure log-based alerts for Backup and DR Service, create a log query, using the filter event logs , and then Configure log-based alerts .
- Event log format Backup and DR event log entries include the following fields: appName : This field displays the name of the application associated with the event. srcid : This field displays a unique ID of the event occurring in the backup/recovery appliance. jobName : This field displays the name of the job associated with the event. appType : This field displays the type of the application associated with the event. eventId : This field displays a unique ID associated with the error. component : This field displays the source of the event. eventTime : This field displays the time when the event was reported. errorMessage : This field describes the detailed error associated with the event.
- Use the following query to view all the event logs associated with backup/recovery appliances for a given PROJECT ID : logName="projects/ PROJECT ID /logs/backupdr.googleapis.com%2Fbackup recovery appliance events" If you are looking for event logs for a specific backup/recovery appliance, add the following backup/recovery appliance name: logName="projects/ PROJECT ID /logs/backupdr.googleapis.com%2Fbackup recovery appliance events" resource.labels.backup recovery appliance id= " backup/recovery appliance name " If you are looking for event logs for a specific event ID, then use the following log query.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When a reserved slot is not available because all the slots of that category are running jobs, the backup/recovery appliance checks whether an unreserved slot is available.
- To perform on-demand log replication of just the database log to a remote backup/recovery appliance, select the Replicate Logs menu command described in Running On-Demand Database Log Replication .
- From the Monitor tab, you can view and manage jobs (cancel active jobs or change the job priority of a queued job) from backup/recovery appliances managed by the appliance management console.
- Each backup/recovery appliance reserves a pool of slots for all various categories of jobs: data access, expiration, log replication, log OnVault, on-demand, OnVault, snapshot, streamsnap.

### "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your alert policy includes or excludes specific event IDs then you need to modify the event ID as well: "entries" : [ { "jsonPayload" : { "eventId" : 10046 , "errorMessage" : "this is a manually generated error message created for testing" }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , }, "severity" : "ERROR" , "logName" : "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" , } ] Copy the log entry you configured previously.
- The following is the sample query to get notified on an event with a specific event ID. logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" jsonPayload . eventId = 10046 In the header of the Query results pane, click Create alert .
- The log entry matches the filter specified for the alert in the following ways: The logName value specifies the backup/recovery appliance event sign in for your Cloud project.
- Policyname = 'Backup/DR event has occurred' Notification rate limit = 6 hr logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND NOT jsonPayload . eventId = ( 10085 OR 10229 OR 42356 OR 43901 ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

