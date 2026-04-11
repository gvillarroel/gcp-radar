---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.522Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Dashboard editing for saved Log Analytics charts"
feature_slug: "dashboard-editing-for-saved-log-analytics-charts"
latest_feature_date: "2024-12-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/release-notes"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
keywords:
  - "dashboard"
  - "editing"
  - "for"
  - "saved"
  - "log"
  - "analytics"
  - "charts"
  - "can"
---

# Dashboard editing for saved Log Analytics charts

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Saved Log Analytics charts can be edited directly from the Dashboards page; Saved Log Analytics charts can be edited directly from the Dashboards page.

## Extended Definition

Saved Log Analytics charts can be edited directly from the Dashboards page; Saved Log Analytics charts can be edited directly from the Dashboards page.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)

## Supporting Pages

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- December 06, 2024 Feature Editing Log Analytics charts that are saved to a dashboard directly in the Dashboards page is now generally available (GA).
- January 16, 2024 Feature You can now edit Log Analytics charts that are saved to a dashboard directly in the Dashboards page.
- September 18, 2023 Feature You can now save charts generated from a Log Analytics SQL query to a custom dashboard.
- November 02, 2023 Feature You can now set a custom time interval for charts in the Log Analytics page.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.
- A separate dialog opens with the following information: The pattern that was found The percentage of log entries that contain the pattern Example log entries that contain the pattern In this dialog, you can hide or show log entries: Hide similar log entries You can hide similar log entries, which lets you remove logs from your query results.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- N/A N/A Google Analytics Data API Logging API service name: analyticsdata.googleapis.com Log ID Monitored resource Payload Labels Severities analyticsdata.googleapis.com%2Ffresh bigquery export status analyticsdata.googleapis.com/FreshBigQueryExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING analyticsdata.googleapis.com%2Fbigquery daily export status analyticsdata.googleapis.com/BigQueryDailyExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING Google Binary Authorization API Logging API service name: binaryauthorization.googleapis.com Log ID Monitored resource Payload Labels Severities binaryauthorization.googleapis.com%2Fcontinuous validation k8s cluster v1beta1: type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent N/A WARNING Google Maps Platform - Mobility Billing Logging API service name: mobilitybilling.googleapis.com Log ID Monitored resource Payload Labels Severities mobilitybilling.googleapis.com%2Fexternal cloud logs mobilitybilling.googleapis.com/Project type.googleapis.com/google.maps.mobilitybilling.logs.v1.ReportBillableEventLog environment DEFAULT ERROR Google Workspace Add-ons Logging API service name: gsuiteaddons.googleapis.com Log ID Monitored resource Payload Labels Severities gsuiteaddons.googleapis.com%2Ferrors g suite add ons type.googleapis.com/google.cloud.gsuiteaddons.logging.v1.GSuiteAddOnsLogEntry N/A ERROR Identity Toolkit Logging API service name: identitytoolkit.googleapis.com Log ID Monitored resource Payload Labels Severities identitytoolkit.googleapis.com%2Frequests identitytoolkit project type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR identitytoolkit.googleapis.com%2Frequests identitytoolkit tenant type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR Immersive Stream for XR Logging API service name: stream.googleapis.com Log ID Monitored resource Payload Labels Severities stream.googleapis.com%2Fsession event stream.googleapis.com/StreamInstance type.googleapis.com/google.cloud.stream.logging.v1.SessionEventLog N/A INFO ERROR Issuer Switch Service Logging API service name: issuerswitch.googleapis.com Log ID Monitored resource Payload Labels Severities issuerswitch.googleapis.com%2Fpgis activity issuerswitch.googleapis.com/UPIInstance type.googleapis.com/google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction N/A DEBUG ERROR INFO Key Management Service Logging API service name: cloudkms.googleapis.com Log ID Monitored resource Payload Labels Severities cloudkms.googleapis.com%2Fcryptokey events cloudkms cryptokey type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyEvent N/A INFO ERROR cloudkms.googleapis.com%2Fcryptokeyversion events cloudkms cryptokeyversion type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyVersionEvent N/A INFO ERROR Live Stream API Logging API service name: livestream.googleapis.com Log ID Monitored resource Payload Labels Severities livestream.googleapis.com%2Fchannel activities livestream.googleapis.com/Channel type.googleapis.com/google.cloud.video.livestream.logging.v1.ChannelActivity N/A INFO DEBUG ERROR Local Rides and Deliveries API Logging API service name: fleetengine.googleapis.com Log ID Monitored resource Payload Labels Severities fleetengine.googleapis.com%2Fupdate vehicle attributes fleetengine.googleapis.com/Fleet type.googleapis.com/maps.fleetengine.v1.UpdateVehicleAttributesLog environment vehicle id DEFAULT ERROR Logging API Logging API service name: logging.googleapis.com Log ID Monitored resource Payload Labels Severities logging.googleapis.com%2Fsink error logging sink A report of an error encountered while trying to export data to a configured log sink. activity type name destination error code error detail log entity id log filter sink id ERROR logging.googleapis.com%2Fmetric throttled metric Informs customer that a metric associated with Logs-based metrics is being throttled. activity type name dropped labels label cardinalities limit type metric name user cardinality WARNING Memorystore Logging API service name: memorystore.googleapis.com Log ID Monitored resource Payload Labels Severities memorystore.googleapis.com%2Flog stream memorystore.googleapis.com/Instance type.googleapis.com/google.logging.v2.LogEntry CONSUMER PROJECT INSTANCE ID INFO WARNING ERROR Network Analyzer Logging API service name: networkanalyzer.googleapis.com Log ID Monitored resource Payload Labels Severities networkanalyzer.googleapis.com%2Fanalyzer reports networking.googleapis.com/Location type.googleapis.com/google.cloud.networkanalyzer.logging.v1.Report N/A DEFAULT Network Services API Logging API service name: networkservices.googleapis.com Log ID Monitored resource Payload Labels Severities networkservices.googleapis.com%2Fmesh events mesh A simple JSON payload containing a single 'description' field with event details.
- The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes them useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues. compute.googleapis.com/resource name is text escaped INFO DEBUG Storage Transfer Logging API service name: storagetransfer.googleapis.com Log ID Monitored resource Payload Labels Severities storagetransfer.googleapis.com%2Ftransfer activity storage transfer job type.googleapis.com/google.storagetransfer.logging.TransferActivityLog N/A INFO WARNING ERROR Traffic Director Logging API service name: trafficdirector.googleapis.com Log ID Monitored resource Payload Labels Severities trafficdirector.googleapis.com%2Fevents gce network type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO WARNING trafficdirector.googleapis.com%2Fevents gateway scope type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO trafficdirector.googleapis.com%2Fevents mesh type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO Vertex AI API Logging API service name: aiplatform.googleapis.com Log ID Monitored resource Payload Labels Severities aiplatform.googleapis.com%2Fpipeline job events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobLogEntry network pipeline name pipeline type service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO aiplatform.googleapis.com%2Fpipeline job task events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobTaskLogEntry custom job id network pipeline name schedule name service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO Web Security Scanner API Logging API service name: websecurityscanner.googleapis.com Log ID Monitored resource Payload Labels Severities websecurityscanner.googleapis.com%2Fscan activity security scanner scan config type.googleapis.com/google.cloud.websecurityscanner.v1.ScanRunLog N/A ERROR WARNING INFO Workflows Logging API service name: workflows.googleapis.com Log ID Monitored resource Payload Labels Severities workflows.googleapis.com%2Fengine call workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.EngineCallLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id DEBUG workflows.googleapis.com%2Fexecutions system workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.ExecutionsSystemLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id INFO ERROR reCAPTCHA Enterprise Logging API service name: recaptchaenterprise.googleapis.com Log ID Monitored resource Payload Labels Severities recaptchaenterprise.googleapis.com%2Fassessment recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.Assessment N/A DEFAULT ERROR recaptchaenterprise.googleapis.com%2Fannotation recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest N/A DEFAULT ERROR Understand and manage platform logs The following sections provide basic information about using and managing platform logs in Cloud Logging.
- Log entry structure Cloud Logging represents logs using a single data type, LogEntry , which defines certain common data for all log entries as well as the payloads that Google Cloud services can include.
- Google Cloud platform logs are service-specific logs that can help you debug and troubleshoot issues, as well as better understand the Google Cloud services you're using.

