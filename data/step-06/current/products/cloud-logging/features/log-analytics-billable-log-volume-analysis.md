---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.318Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics billable log volume analysis"
feature_slug: "log-analytics-billable-log-volume-analysis"
latest_feature_date: "2024-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/buckets"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
keywords:
  - "log"
  - "analytics"
  - "billable"
  - "volume"
  - "analysis"
  - "can"
  - "analyze"
---

# Log Analytics billable log volume analysis

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics can analyze billable log volume.

## Extended Definition

Log Analytics can analyze billable log volume.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)

## Supporting Pages

### Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Upgrade a bucket to use Observability Analytics After you upgrade a bucket to use Observability Analytics, any new log entries that arrive are available to analyze in the Observability Analytics interface.
- Create a linked BigQuery dataset When you want to use the capabilities of BigQuery to analyze your log data, upgrade a log bucket to use Observability Analytics, and then create a linked dataset .
- To use BigQuery to analyze your log data, you have two choices: Upgrade a log bucket to use Observability Analytics and then create a linked BigQuery dataset .
- For example, if you want to create a bucket with the BUCKET ID my-bucket in the global region, your command would look like the following: gcloud logging buckets create my-bucket --location global --description "My first bucket" For example, to create a bucket with the BUCKET ID my-upgraded-bucket in the global location, and then upgrade the log bucket to use Observability Analytics, your command would look like the following: gcloud logging buckets create my-upgraded-bucket --location global \ --description "My first upgraded bucket" \ --enable-analytics --retention-days=45 Note: After you create your log bucket, you can't change your bucket's region.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.
- The following occurs when you click manage search Analyze results : The time range in the Logs Explorer might be automatically adjusted so that there is meaningful log data in the Observability Analytics page.
- The manage search Analyze results button is visible only when the log bucket that contains the log view you are querying has been upgraded to use Observability Analytics.

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- N/A N/A Google Analytics Data API Logging API service name: analyticsdata.googleapis.com Log ID Monitored resource Payload Labels Severities analyticsdata.googleapis.com%2Ffresh bigquery export status analyticsdata.googleapis.com/FreshBigQueryExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING analyticsdata.googleapis.com%2Fbigquery daily export status analyticsdata.googleapis.com/BigQueryDailyExport type.googleapis.com/google.analytics.cloud.ExportStatusLog N/A DEFAULT INFO WARNING Google Binary Authorization API Logging API service name: binaryauthorization.googleapis.com Log ID Monitored resource Payload Labels Severities binaryauthorization.googleapis.com%2Fcontinuous validation k8s cluster v1beta1: type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent N/A WARNING Google Maps Platform - Mobility Billing Logging API service name: mobilitybilling.googleapis.com Log ID Monitored resource Payload Labels Severities mobilitybilling.googleapis.com%2Fexternal cloud logs mobilitybilling.googleapis.com/Project type.googleapis.com/google.maps.mobilitybilling.logs.v1.ReportBillableEventLog environment DEFAULT ERROR Google Workspace Add-ons Logging API service name: gsuiteaddons.googleapis.com Log ID Monitored resource Payload Labels Severities gsuiteaddons.googleapis.com%2Ferrors g suite add ons type.googleapis.com/google.cloud.gsuiteaddons.logging.v1.GSuiteAddOnsLogEntry N/A ERROR Identity Toolkit Logging API service name: identitytoolkit.googleapis.com Log ID Monitored resource Payload Labels Severities identitytoolkit.googleapis.com%2Frequests identitytoolkit project type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR identitytoolkit.googleapis.com%2Frequests identitytoolkit tenant type.googleapis.com/google.cloud.identitytoolkit.logging.RequestLog N/A INFO ERROR Immersive Stream for XR Logging API service name: stream.googleapis.com Log ID Monitored resource Payload Labels Severities stream.googleapis.com%2Fsession event stream.googleapis.com/StreamInstance type.googleapis.com/google.cloud.stream.logging.v1.SessionEventLog N/A INFO ERROR Issuer Switch Service Logging API service name: issuerswitch.googleapis.com Log ID Monitored resource Payload Labels Severities issuerswitch.googleapis.com%2Fpgis activity issuerswitch.googleapis.com/UPIInstance type.googleapis.com/google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction N/A DEBUG ERROR INFO Key Management Service Logging API service name: cloudkms.googleapis.com Log ID Monitored resource Payload Labels Severities cloudkms.googleapis.com%2Fcryptokey events cloudkms cryptokey type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyEvent N/A INFO ERROR cloudkms.googleapis.com%2Fcryptokeyversion events cloudkms cryptokeyversion type.googleapis.com/google.cloud.kms.logging.v1.CryptoKeyVersionEvent N/A INFO ERROR Live Stream API Logging API service name: livestream.googleapis.com Log ID Monitored resource Payload Labels Severities livestream.googleapis.com%2Fchannel activities livestream.googleapis.com/Channel type.googleapis.com/google.cloud.video.livestream.logging.v1.ChannelActivity N/A INFO DEBUG ERROR Local Rides and Deliveries API Logging API service name: fleetengine.googleapis.com Log ID Monitored resource Payload Labels Severities fleetengine.googleapis.com%2Fupdate vehicle attributes fleetengine.googleapis.com/Fleet type.googleapis.com/maps.fleetengine.v1.UpdateVehicleAttributesLog environment vehicle id DEFAULT ERROR Logging API Logging API service name: logging.googleapis.com Log ID Monitored resource Payload Labels Severities logging.googleapis.com%2Fsink error logging sink A report of an error encountered while trying to export data to a configured log sink. activity type name destination error code error detail log entity id log filter sink id ERROR logging.googleapis.com%2Fmetric throttled metric Informs customer that a metric associated with Logs-based metrics is being throttled. activity type name dropped labels label cardinalities limit type metric name user cardinality WARNING Memorystore Logging API service name: memorystore.googleapis.com Log ID Monitored resource Payload Labels Severities memorystore.googleapis.com%2Flog stream memorystore.googleapis.com/Instance type.googleapis.com/google.logging.v2.LogEntry CONSUMER PROJECT INSTANCE ID INFO WARNING ERROR Network Analyzer Logging API service name: networkanalyzer.googleapis.com Log ID Monitored resource Payload Labels Severities networkanalyzer.googleapis.com%2Fanalyzer reports networking.googleapis.com/Location type.googleapis.com/google.cloud.networkanalyzer.logging.v1.Report N/A DEFAULT Network Services API Logging API service name: networkservices.googleapis.com Log ID Monitored resource Payload Labels Severities networkservices.googleapis.com%2Fmesh events mesh A simple JSON payload containing a single 'description' field with event details.

