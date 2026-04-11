---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.523Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Reserved BigQuery slots for Log Analytics"
feature_slug: "reserved-bigquery-slots-for-log-analytics"
latest_feature_date: "2024-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "reserved"
  - "slots"
  - "for"
  - "log"
  - "analytics"
  - "can"
  - "query"
  - "by"
---

# Reserved BigQuery slots for Log Analytics

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Log Analytics can query log data by using reserved BigQuery slots.

## Extended Definition

Log Analytics can query log data by using reserved BigQuery slots.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- N/A N/A Google Analytics Data API Logging API service name: analyticsdata.googleapis.com Log ID Monitored resource Payload Labels Severities analyticsdata.googleapis.com%2Ffresh bigquery export status analyticsdata.googleapis.com/FreshBigQueryExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING analyticsdata.googleapis.com%2Fbigquery daily export status analyticsdata.googleapis.com/BigQueryDailyExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING Google Binary Authorization API Logging API service name: binaryauthorization.googleapis.com Log ID Monitored resource Payload Labels Severities binaryauthorization.googleapis.com%2Fcontinuous validation k8s cluster v1beta1: type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent N/A WARNING Google Maps Platform - Mobility Billing Logging API service name: mobilitybilling.googleapis.com Log ID Monitored resource Payload Labels Severities mobilitybilling.googleapis.com%2Fexternal cloud logs mobilitybilling.googleapis.com/Project type.googleapis.com/google.maps.mobilitybilling.logs.v1.ReportBillableEventLog environment DEFAULT ERROR Google Workspace Add-ons Logging API service name: gsuiteaddons.googleapis.com Log ID Monitored resource Payload Labels Severities gsuiteaddons.googleapis.com%2Ferrors g suite add ons type.googleapis.com/google.cloud.gsuiteaddons.logging.v1.GSuiteAddOnsLogEntry N/A ERROR Identity Toolkit Logging API service name: identitytoolkit.googleapis.com Log ID Monitored resource Payload Labels Severities identitytoolkit.googleapis.com%2Frequests identitytoolkit project type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR identitytoolkit.googleapis.com%2Frequests identitytoolkit tenant type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR Immersive Stream for XR Logging API service name: stream.googleapis.com Log ID Monitored resource Payload Labels Severities stream.googleapis.com%2Fsession event stream.googleapis.com/StreamInstance type.googleapis.com/google.cloud.stream.logging.v1.SessionEventLog N/A INFO ERROR Issuer Switch Service Logging API service name: issuerswitch.googleapis.com Log ID Monitored resource Payload Labels Severities issuerswitch.googleapis.com%2Fpgis activity issuerswitch.googleapis.com/UPIInstance type.googleapis.com/google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction N/A DEBUG ERROR INFO Key Management Service Logging API service name: cloudkms.googleapis.com Log ID Monitored resource Payload Labels Severities cloudkms.googleapis.com%2Fcryptokey events cloudkms cryptokey type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyEvent N/A INFO ERROR cloudkms.googleapis.com%2Fcryptokeyversion events cloudkms cryptokeyversion type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyVersionEvent N/A INFO ERROR Live Stream API Logging API service name: livestream.googleapis.com Log ID Monitored resource Payload Labels Severities livestream.googleapis.com%2Fchannel activities livestream.googleapis.com/Channel type.googleapis.com/google.cloud.video.livestream.logging.v1.ChannelActivity N/A INFO DEBUG ERROR Local Rides and Deliveries API Logging API service name: fleetengine.googleapis.com Log ID Monitored resource Payload Labels Severities fleetengine.googleapis.com%2Fupdate vehicle attributes fleetengine.googleapis.com/Fleet type.googleapis.com/maps.fleetengine.v1.UpdateVehicleAttributesLog environment vehicle id DEFAULT ERROR Logging API Logging API service name: logging.googleapis.com Log ID Monitored resource Payload Labels Severities logging.googleapis.com%2Fsink error logging sink A report of an error encountered while trying to export data to a configured log sink. activity type name destination error code error detail log entity id log filter sink id ERROR logging.googleapis.com%2Fmetric throttled metric Informs customer that a metric associated with Logs-based metrics is being throttled. activity type name dropped labels label cardinalities limit type metric name user cardinality WARNING Memorystore Logging API service name: memorystore.googleapis.com Log ID Monitored resource Payload Labels Severities memorystore.googleapis.com%2Flog stream memorystore.googleapis.com/Instance type.googleapis.com/google.logging.v2.LogEntry CONSUMER PROJECT INSTANCE ID INFO WARNING ERROR Network Analyzer Logging API service name: networkanalyzer.googleapis.com Log ID Monitored resource Payload Labels Severities networkanalyzer.googleapis.com%2Fanalyzer reports networking.googleapis.com/Location type.googleapis.com/google.cloud.networkanalyzer.logging.v1.Report N/A DEFAULT Network Services API Logging API service name: networkservices.googleapis.com Log ID Monitored resource Payload Labels Severities networkservices.googleapis.com%2Fmesh events mesh A simple JSON payload containing a single 'description' field with event details.
- The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes them useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues. compute.googleapis.com/resource name is text escaped INFO DEBUG Storage Transfer Logging API service name: storagetransfer.googleapis.com Log ID Monitored resource Payload Labels Severities storagetransfer.googleapis.com%2Ftransfer activity storage transfer job type.googleapis.com/google.storagetransfer.logging.TransferActivityLog N/A INFO WARNING ERROR Traffic Director Logging API service name: trafficdirector.googleapis.com Log ID Monitored resource Payload Labels Severities trafficdirector.googleapis.com%2Fevents gce network type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO WARNING trafficdirector.googleapis.com%2Fevents gateway scope type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO trafficdirector.googleapis.com%2Fevents mesh type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO Vertex AI API Logging API service name: aiplatform.googleapis.com Log ID Monitored resource Payload Labels Severities aiplatform.googleapis.com%2Fpipeline job events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobLogEntry network pipeline name pipeline type service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO aiplatform.googleapis.com%2Fpipeline job task events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobTaskLogEntry custom job id network pipeline name schedule name service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO Web Security Scanner API Logging API service name: websecurityscanner.googleapis.com Log ID Monitored resource Payload Labels Severities websecurityscanner.googleapis.com%2Fscan activity security scanner scan config type.googleapis.com/google.cloud.websecurityscanner.v1.ScanRunLog N/A ERROR WARNING INFO Workflows Logging API service name: workflows.googleapis.com Log ID Monitored resource Payload Labels Severities workflows.googleapis.com%2Fengine call workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.EngineCallLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id DEBUG workflows.googleapis.com%2Fexecutions system workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.ExecutionsSystemLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id INFO ERROR reCAPTCHA Enterprise Logging API service name: recaptchaenterprise.googleapis.com Log ID Monitored resource Payload Labels Severities recaptchaenterprise.googleapis.com%2Fassessment recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.Assessment N/A DEFAULT ERROR recaptchaenterprise.googleapis.com%2Fannotation recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest N/A DEFAULT ERROR Understand and manage platform logs The following sections provide basic information about using and managing platform logs in Cloud Logging.
- OPERATION NAME FILE NAME LOG TYPE DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Application Integration Logging API service name: integrations.googleapis.com Log ID Monitored resource Payload Labels Severities integrations.googleapis.com%2Fexecution info integrations.googleapis.com/IntegrationVersion type.googleapis.com/google.cloud.integrations.v1alpha.ExecutionInfo N/A INFO WARNING ERROR Assured Workloads Logging API service name: assuredworkloads.googleapis.com Log ID Monitored resource Payload Labels Severities assuredworkloads.googleapis.com%2Fregulatory intercept ack folder type.googleapis.com/google.cloud.assuredworkloads.regulatoryintercept.logging.v1.RegulatoryInterceptAckLogEntry N/A INFO assuredworkloads.googleapis.com%2Fregulatory intercept ack project type.googleapis.com/google.cloud.assuredworkloads.regulatoryintercept.logging.v1.RegulatoryInterceptAckLogEntry N/A INFO Backup for GKE Logging API service name: gkebackup.googleapis.com Log ID Monitored resource Payload Labels Severities gkebackup.googleapis.com%2Fbackup change gkebackup.googleapis.com/BackupPlan type.googleapis.com/google.cloud.gkebackup.logging.v1.BackupChange backup id INFO ERROR gkebackup.googleapis.com%2Fbackup plan change gkebackup.googleapis.com/BackupPlan type.googleapis.com/google.cloud.gkebackup.logging.v1.BackupPlanChange backup plan id INFO ERROR gkebackup.googleapis.com%2Frestore change gkebackup.googleapis.com/RestorePlan type.googleapis.com/google.cloud.gkebackup.logging.v1.RestoreChange restore id INFO ERROR gkebackup.googleapis.com%2Frestore plan change gkebackup.googleapis.com/RestorePlan type.googleapis.com/google.cloud.gkebackup.logging.v1.RestorePlanChange restore plan id INFO ERROR gkebackup.googleapis.com%2Fbackup channel change gkebackup.googleapis.com/BackupChannel type.googleapis.com/google.cloud.gkebackup.logging.v1.BackupChannelChange backup channel id INFO ERROR gkebackup.googleapis.com%2Frestore channel change gkebackup.googleapis.com/RestoreChannel type.googleapis.com/google.cloud.gkebackup.logging.v1.RestoreChannelChange restore channel id INFO ERROR gkebackup.googleapis.com%2Fbfg backup plan jobs gkebackup.googleapis.com/BackupPlan type.googleapis.com/google.cloud.backupdr.logging.v1.BDRBackupPlanJobLog N/A INFO ERROR gkebackup.googleapis.com%2Fbfg backup restore jobs gkebackup.googleapis.com/Project type.googleapis.com/google.cloud.backupdr.logging.v1.BDRBackupRestoreJobLog N/A INFO ERROR BigQuery Data Transfer API Logging API service name: bigquerydatatransfer.googleapis.com Log ID Monitored resource Payload Labels Severities bigquerydatatransfer.googleapis.com%2Ftransfer config bigquery dts config Debug logs for BigQuery Data Transfer runs.
- Each entry contains a line (or multiple lines, if they match a known multi-line exception format like a stack trace) written to /var/log/ from the user container. instanceId managed-by commit-sha gcb-trigger-id gcb-build-id container name DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Cloud SQL Logging API service name: cloudsql.googleapis.com Log ID Monitored resource Payload Labels Severities cloudsql.googleapis.com%2Fmysql.err cloudsql database The error log contains a record and diagnostic messages such as errors, warnings, and notes that occur during server startup, shutdown, and while the server is running.

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- A Log Analytics SQL query in text format.
- This configuration represents the components of a SQL query (FROM, SELECT, WHERE, ORDER BY, LIMIT) and is typically converted into an executable query (e.g., BigQuery SQL) by the backend service to retrieve data for analysis or visualization.
- This equates to the WHERE clause in SQL. fieldSources[] object ( FieldSource ) Defines the items to include in the query result, analogous to a SQL SELECT clause. limit string ( int64 format) The limit to use for the query.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- In the query pane, you can build and refine queries by using the following features: Select which resources are searched for log entries .
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- To select which parts of the timestamp to display, click the settings Preferences menu, select Format , and then select one of the following options: Date, time, and timezone Date and time (default) Time only Find patterns in your logs by using summary fields Suppose you're looking through the log entries in your query results and want to quickly skim the results by a certain LogEntry field.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.

