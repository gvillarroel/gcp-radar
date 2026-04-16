---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.454Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "BigQuery partitioned table exports"
feature_slug: "bigquery-partitioned-table-exports"
latest_feature_date: "2019-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
  - "https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting"
keywords:
  - "bigquery"
  - "partitioned"
  - "table"
  - "exports"
  - "logging"
  - "can"
  - "use"
  - "tables"
---

# BigQuery partitioned table exports

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging exports to BigQuery can use partitioned tables; Cloud Logging exports to BigQuery can use partitioned tables.

## Extended Definition

Cloud Logging exports to BigQuery can use partitioned tables; Cloud Logging exports to BigQuery can use partitioned tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting)

## Supporting Pages

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- In this scenario, you must create a sink, BigQuery stores and manages the data, and you have the option to use partitioned tables.
- After Logging displays the linked dataset name on the Logs Storage page, it might take several minutes before BigQuery recognizes the dataset. gcloud To create a linked dataset for a log bucket that is upgraded to use Observability Analytics, run the gcloud logging links create command: gcloud logging links create LINK ID --bucket= BUCKET ID --location= LOCATION The LINK ID that you provide is used as the name of the BigQuery dataset, and the value of this field must be unique for your Google Cloud project.
- The bucket, including all the logs in it, is deleted after 7 days. gcloud To delete a log bucket, run the gcloud logging buckets delete command: gcloud logging buckets delete BUCKET ID --location= LOCATION You can't delete a log bucket when that bucket has a linked BigQuery dataset: To list the links associated with a log bucket, run the gcloud logging links list command.
- If a bucket is pending deletion by Cloud Logging, then its table entry is annotated with a warning warning symbol. gcloud Run the gcloud logging buckets list command: gcloud logging buckets list You see the following attributes for the log buckets: LOCATION : The region in which the bucket's data is stored.

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- N/A N/A Google Analytics Data API Logging API service name: analyticsdata.googleapis.com Log ID Monitored resource Payload Labels Severities analyticsdata.googleapis.com%2Ffresh bigquery export status analyticsdata.googleapis.com/FreshBigQueryExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING analyticsdata.googleapis.com%2Fbigquery daily export status analyticsdata.googleapis.com/BigQueryDailyExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING Google Binary Authorization API Logging API service name: binaryauthorization.googleapis.com Log ID Monitored resource Payload Labels Severities binaryauthorization.googleapis.com%2Fcontinuous validation k8s cluster v1beta1: type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent N/A WARNING Google Maps Platform - Mobility Billing Logging API service name: mobilitybilling.googleapis.com Log ID Monitored resource Payload Labels Severities mobilitybilling.googleapis.com%2Fexternal cloud logs mobilitybilling.googleapis.com/Project type.googleapis.com/google.maps.mobilitybilling.logs.v1.ReportBillableEventLog environment DEFAULT ERROR Google Workspace Add-ons Logging API service name: gsuiteaddons.googleapis.com Log ID Monitored resource Payload Labels Severities gsuiteaddons.googleapis.com%2Ferrors g suite add ons type.googleapis.com/google.cloud.gsuiteaddons.logging.v1.GSuiteAddOnsLogEntry N/A ERROR Identity Toolkit Logging API service name: identitytoolkit.googleapis.com Log ID Monitored resource Payload Labels Severities identitytoolkit.googleapis.com%2Frequests identitytoolkit project type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR identitytoolkit.googleapis.com%2Frequests identitytoolkit tenant type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR Immersive Stream for XR Logging API service name: stream.googleapis.com Log ID Monitored resource Payload Labels Severities stream.googleapis.com%2Fsession event stream.googleapis.com/StreamInstance type.googleapis.com/google.cloud.stream.logging.v1.SessionEventLog N/A INFO ERROR Issuer Switch Service Logging API service name: issuerswitch.googleapis.com Log ID Monitored resource Payload Labels Severities issuerswitch.googleapis.com%2Fpgis activity issuerswitch.googleapis.com/UPIInstance type.googleapis.com/google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction N/A DEBUG ERROR INFO Key Management Service Logging API service name: cloudkms.googleapis.com Log ID Monitored resource Payload Labels Severities cloudkms.googleapis.com%2Fcryptokey events cloudkms cryptokey type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyEvent N/A INFO ERROR cloudkms.googleapis.com%2Fcryptokeyversion events cloudkms cryptokeyversion type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyVersionEvent N/A INFO ERROR Live Stream API Logging API service name: livestream.googleapis.com Log ID Monitored resource Payload Labels Severities livestream.googleapis.com%2Fchannel activities livestream.googleapis.com/Channel type.googleapis.com/google.cloud.video.livestream.logging.v1.ChannelActivity N/A INFO DEBUG ERROR Local Rides and Deliveries API Logging API service name: fleetengine.googleapis.com Log ID Monitored resource Payload Labels Severities fleetengine.googleapis.com%2Fupdate vehicle attributes fleetengine.googleapis.com/Fleet type.googleapis.com/maps.fleetengine.v1.UpdateVehicleAttributesLog environment vehicle id DEFAULT ERROR Logging API Logging API service name: logging.googleapis.com Log ID Monitored resource Payload Labels Severities logging.googleapis.com%2Fsink error logging sink A report of an error encountered while trying to export data to a configured log sink. activity type name destination error code error detail log entity id log filter sink id ERROR logging.googleapis.com%2Fmetric throttled metric Informs customer that a metric associated with Logs-based metrics is being throttled. activity type name dropped labels label cardinalities limit type metric name user cardinality WARNING Memorystore Logging API service name: memorystore.googleapis.com Log ID Monitored resource Payload Labels Severities memorystore.googleapis.com%2Flog stream memorystore.googleapis.com/Instance type.googleapis.com/google.logging.v2.LogEntry CONSUMER PROJECT INSTANCE ID INFO WARNING ERROR Network Analyzer Logging API service name: networkanalyzer.googleapis.com Log ID Monitored resource Payload Labels Severities networkanalyzer.googleapis.com%2Fanalyzer reports networking.googleapis.com/Location type.googleapis.com/google.cloud.networkanalyzer.logging.v1.Report N/A DEFAULT Network Services API Logging API service name: networkservices.googleapis.com Log ID Monitored resource Payload Labels Severities networkservices.googleapis.com%2Fmesh events mesh A simple JSON payload containing a single 'description' field with event details.
- Index of Google Cloud platform logs Following are tables of some of the Google Cloud platform logs supported by Cloud Logging.
- OPERATION NAME FILE NAME LOG TYPE DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Application Integration Logging API service name: integrations.googleapis.com Log ID Monitored resource Payload Labels Severities integrations.googleapis.com%2Fexecution info integrations.googleapis.com/IntegrationVersion type.googleapis.com/google.cloud.integrations.v1alpha.ExecutionInfo N/A INFO WARNING ERROR Assured Workloads Logging API service name: assuredworkloads.googleapis.com Log ID Monitored resource Payload Labels Severities assuredworkloads.googleapis.com%2Fregulatory intercept ack folder type.googleapis.com/google.cloud.assuredworkloads.regulatoryintercept.logging.v1.RegulatoryInterceptAckLogEntry N/A INFO assuredworkloads.googleapis.com%2Fregulatory intercept ack project type.googleapis.com/google.cloud.assuredworkloads.regulatoryintercept.logging.v1.RegulatoryInterceptAckLogEntry N/A INFO Backup for GKE Logging API service name: gkebackup.googleapis.com Log ID Monitored resource Payload Labels Severities gkebackup.googleapis.com%2Fbackup change gkebackup.googleapis.com/BackupPlan type.googleapis.com/google.cloud.gkebackup.logging.v1.BackupChange backup id INFO ERROR gkebackup.googleapis.com%2Fbackup plan change gkebackup.googleapis.com/BackupPlan type.googleapis.com/google.cloud.gkebackup.logging.v1.BackupPlanChange backup plan id INFO ERROR gkebackup.googleapis.com%2Frestore change gkebackup.googleapis.com/RestorePlan type.googleapis.com/google.cloud.gkebackup.logging.v1.RestoreChange restore id INFO ERROR gkebackup.googleapis.com%2Frestore plan change gkebackup.googleapis.com/RestorePlan type.googleapis.com/google.cloud.gkebackup.logging.v1.RestorePlanChange restore plan id INFO ERROR gkebackup.googleapis.com%2Fbackup channel change gkebackup.googleapis.com/BackupChannel type.googleapis.com/google.cloud.gkebackup.logging.v1.BackupChannelChange backup channel id INFO ERROR gkebackup.googleapis.com%2Frestore channel change gkebackup.googleapis.com/RestoreChannel type.googleapis.com/google.cloud.gkebackup.logging.v1.RestoreChannelChange restore channel id INFO ERROR gkebackup.googleapis.com%2Fbfg backup plan jobs gkebackup.googleapis.com/BackupPlan type.googleapis.com/google.cloud.backupdr.logging.v1.BDRBackupPlanJobLog N/A INFO ERROR gkebackup.googleapis.com%2Fbfg backup restore jobs gkebackup.googleapis.com/Project type.googleapis.com/google.cloud.backupdr.logging.v1.BDRBackupRestoreJobLog N/A INFO ERROR BigQuery Data Transfer API Logging API service name: bigquerydatatransfer.googleapis.com Log ID Monitored resource Payload Labels Severities bigquerydatatransfer.googleapis.com%2Ftransfer config bigquery dts config Debug logs for BigQuery Data Transfer runs.
- The Log Router checks each log entry against existing rules to determine which log entries to discard, which log entries to store in Cloud Logging, and which log entries to include in exports to other destinations.

### Troubleshoot the Logging agent \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting](https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the scopes relevant to the Logging and Monitoring agents: Access scope Agent permissions https://www.googleapis.com/auth/logging.write Adequate for the Logging agent https://www.googleapis.com/auth/monitoring.write Adequate for the Monitoring agent Verify default service account permission Even if your Compute Engine VM instance's access scopes are adequate, your instance's default service account might not provide the right IAM permissions for the agent.
- Other common issues The following table lists some common problems that you may encounter with the Cloud Logging agent and tells you how to fix them.
- If there are any BigQuery or Google Cloud Storage exports pipelines that are set up for these logs, they need to be adjusted accordingly.
- Requires Administrator privileges : If any agent version is running, then send a test log message by running the following PowerShell commands: New-EventLog -LogName Application -Source "Test Source" Write-EventLog -LogName Application -Source "Test Source" -EntryType Information -EventID 1 -Message "Testing 123 Testing." Find your test message After sending a test message, look for it in the Logs Explorer : In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

