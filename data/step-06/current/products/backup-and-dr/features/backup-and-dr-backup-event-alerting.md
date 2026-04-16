---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.946Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Backup and DR backup event alerting"
feature_slug: "backup-and-dr-backup-event-alerting"
latest_feature_date: "2023-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events"
  - "https://docs.cloud.google.com/compute/docs/compute-optimized-machines"
  - "https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines"
keywords:
  - "alerting"
  - "through"
  - "events"
  - "supports"
  - "event"
---

# Backup and DR backup event alerting

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR now supports alerting for backup events through Cloud Monitoring with channels such as email, SMS, Slack, and PagerDuty.

## Extended Definition

Backup and DR now supports alerting for backup events through Cloud Monitoring with channels such as email, SMS, Slack, and PagerDuty.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)
- [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)

## Supporting Pages

### "Backup/recovery appliance event logs \_|\_ Backup and DR \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events](https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/appliance-events)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The following sample is an example log entry logged on a backup/recovery appliance ba-1-52973 for a failed snapshot job. { "insertId" : "aop2oko38hsami1c" , "jsonPayload" : { "appName" : "instance-2" , "srcid" : "111428" , "jobName" : "Job 0110906c" , "appType" : "GCPInstance" , "eventId" : 43901 , "component" : "udp" , "eventTime" : "2023-02-06T20:24:52.450Z" , "errorMessage" : "Failed snapshot Job 0110906c for application instance-2 on host instance-2, Error: 1249: Failed to get VM details , sltname: pd snaps, slpname: ba-1-52973 Profile. " }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , "labels" : { "backup recovery appliance id" : "test-backup-recovery-appliances" , "resource container" : "projects/1234567" , "management server id" : "abcd-efgh-1234-5678-6789" , "location" : "" } }, "timestamp" : "2023-02-06T20:24:55.275029393Z" , "severity" : "ERROR" , "logName" : "projects/project1/logs/backupdr.googleapis.com %2F backup recovery appliance events" , "receiveTimestamp" : "2023-02-06T20:24:56.388937247Z" } Note: Event logs are not generated for successfully completed backup jobs.
- Use the following query to view all the event logs associated with backup/recovery appliances for a given PROJECT ID : logName="projects/ PROJECT ID /logs/backupdr.googleapis.com%2Fbackup recovery appliance events" If you are looking for event logs for a specific backup/recovery appliance, add the following backup/recovery appliance name: logName="projects/ PROJECT ID /logs/backupdr.googleapis.com%2Fbackup recovery appliance events" resource.labels.backup recovery appliance id= " backup/recovery appliance name " If you are looking for event logs for a specific event ID, then use the following log query.
- Note: You can refer to the Event IDs , for the list of important Backup and DR event IDs. logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . eventId = event ID If you are looking for event logs for multiple specific event IDs, then use the following log query.
- Make sure you use uppercase AND . logName = "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" AND jsonPayload . app name = appname What's next To configure log-based alerts for Backup and DR Service, create a log query, using the filter event logs , and then Configure log-based alerts .

### Compute-optimized machine family for Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/compute-optimized-machines](https://docs.cloud.google.com/compute/docs/compute-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Maintenance experience for H4D instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Maintenance experience for C2D instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Maintenance experience for H3 instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Maintenance experience for C2 instances During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .

### "Accelerator-optimized machine family \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines](https://docs.cloud.google.com/compute/docs/accelerator-optimized-machines)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Machine type (GPU model) On-demand Spot Flex-start On-demand reservations Future reservations Future reservations in calendar mode Future reservations in AI Hypercomputer A4X Max (GB300) and A4X (GB200) A4 (B200) A3 Ultra (H200) A3 Mega (H100) A3 High with 8 GPUs (H100) A3 High with less than 8 GPUs (H100) A3 Edge (H100) A2 (A100) G4 (RTX PRO 6000) G2 (L4) N1 with GPUs (T4/P4/P100/V100) Maintenance experience for accelerator-optimized machine types During the lifecycle of a Compute Engine instance , the host machine that your instance runs on undergoes multiple host events .
- Supported disk types for A4X Max and A4X instances A4X Max A4X Max instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Throughput ( hyperdisk-throughput ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Local SSD: which is automatically added to instances that are created by using any of the A4X Max machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-maxgpu-4g-metal 32 32 32 32 8 4 A4X A4X instances can use the following block storage types: Hyperdisk Balanced ( hyperdisk-balanced ): this is the only disk type that is supported for the boot disk Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk ML ( hyperdisk-ml ) Local SSD: which is automatically added to instances that are created by using any of the A4X machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD a4x-highgpu-4g 128 128 0 0 128 8 4 1 Hyperdisk usage is charged separately from machine type pricing .
- The following table describes the host maintenance features for accelerator-optimized machine types: Machine type Number of GPUs Typical scheduled maintenance event frequency Maintenance behavior Advanced notification for scheduled maintenance On-demand maintenance Simulate maintenance A4X Max 2 and A4X 2 4 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A4 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Ultra 2 8 Minimum of 90 days Terminates with Local SSD data persistence 90 days Yes No A3 Mega 2 and A3 High 2 8 Minimum of 30 days 1 Terminate and restart 7 days Yes Yes A3 High 1, 2, 4 Minimum of 30 days 1 Terminate and restart 7 days 1 No Yes A3 Edge 8 Minimum of 30 days Terminate and restart 7 days Yes Yes A2 Ultra 1, 2, 4, 8 Minimum of 30 days Terminate and restart 7 days Yes (8 GPUs only) Yes A2 Standard 1, 2, 4, 8, or 16 Minimum of 30 days Terminate and restart 7 days Yes (8 and 16 GPUs only) Yes G4 1, 2, or 4 Minimum of 30 days Terminate and restart.
- A3 High A3 High instances can use the following block storage types: Balanced Persistent Disk ( pd-balanced ) SSD (performance) Persistent Disk ( pd-ssd ) Hyperdisk Balanced ( hyperdisk-balanced ) Hyperdisk Balanced High Availability ( hyperdisk-balanced-high-availability ) Hyperdisk ML ( hyperdisk-ml ) Hyperdisk Extreme ( hyperdisk-extreme ) Hyperdisk Throughput ( hyperdisk-throughput ) Local SSD: which is automatically added to instances that are created by using any of the A3 machine types Maximum number of disks per instance 1 Machine types All Hyperdisk Hyperdisk Balanced Hyperdisk Balanced High Availability Hyperdisk Throughput Hyperdisk ML Hyperdisk Extreme Attached Local SSD disks a3-highgpu-1g 128 32 32 64 64 N/A 2 a3-highgpu-2g 128 32 32 64 64 N/A 4 a3-highgpu-4g 128 32 32 64 64 8 8 a3-highgpu-8g 128 32 32 64 64 8 16 1 Hyperdisk and Persistent Disk usage are charged separately from machine type pricing .

