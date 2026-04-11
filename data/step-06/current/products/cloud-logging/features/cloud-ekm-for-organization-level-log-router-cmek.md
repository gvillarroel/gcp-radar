---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.556Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Cloud EKM for Organization-Level Log Router CMEK"
feature_slug: "cloud-ekm-for-organization-level-log-router-cmek"
latest_feature_date: "2021-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
  - "https://docs.cloud.google.com/logging/docs/central-log-storage"
  - "https://docs.cloud.google.com/logging/docs/release-notes"
keywords:
  - "ekm"
  - "for"
  - "organization"
  - "level"
  - "log"
  - "router"
  - "cmek"
  - "can"
---

# Cloud EKM for Organization-Level Log Router CMEK

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Organization-level Log Router CMEK can use Cloud External Key Manager keys.

## Extended Definition

Organization-level Log Router CMEK can use Cloud External Key Manager keys.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)

## Supporting Pages

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes them useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues. compute.googleapis.com/resource name is text escaped INFO DEBUG Storage Transfer Logging API service name: storagetransfer.googleapis.com Log ID Monitored resource Payload Labels Severities storagetransfer.googleapis.com%2Ftransfer activity storage transfer job type.googleapis.com/google.storagetransfer.logging.TransferActivityLog N/A INFO WARNING ERROR Traffic Director Logging API service name: trafficdirector.googleapis.com Log ID Monitored resource Payload Labels Severities trafficdirector.googleapis.com%2Fevents gce network type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO WARNING trafficdirector.googleapis.com%2Fevents gateway scope type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO trafficdirector.googleapis.com%2Fevents mesh type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO Vertex AI API Logging API service name: aiplatform.googleapis.com Log ID Monitored resource Payload Labels Severities aiplatform.googleapis.com%2Fpipeline job events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobLogEntry network pipeline name pipeline type service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO aiplatform.googleapis.com%2Fpipeline job task events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobTaskLogEntry custom job id network pipeline name schedule name service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO Web Security Scanner API Logging API service name: websecurityscanner.googleapis.com Log ID Monitored resource Payload Labels Severities websecurityscanner.googleapis.com%2Fscan activity security scanner scan config type.googleapis.com/google.cloud.websecurityscanner.v1.ScanRunLog N/A ERROR WARNING INFO Workflows Logging API service name: workflows.googleapis.com Log ID Monitored resource Payload Labels Severities workflows.googleapis.com%2Fengine call workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.EngineCallLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id DEBUG workflows.googleapis.com%2Fexecutions system workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.ExecutionsSystemLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id INFO ERROR reCAPTCHA Enterprise Logging API service name: recaptchaenterprise.googleapis.com Log ID Monitored resource Payload Labels Severities recaptchaenterprise.googleapis.com%2Fassessment recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.Assessment N/A DEFAULT ERROR recaptchaenterprise.googleapis.com%2Fannotation recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest N/A DEFAULT ERROR Understand and manage platform logs The following sections provide basic information about using and managing platform logs in Cloud Logging.
- Log entry structure Cloud Logging represents logs using a single data type, LogEntry , which defines certain common data for all log entries as well as the payloads that Google Cloud services can include.
- For example, if the broader log name is organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity , then the log ID is cloudresourcemanager.googleapis.com%2Factivity .
- Google Cloud platform logs are service-specific logs that can help you debug and troubleshoot issues, as well as better understand the Google Cloud services you're using.

### "Aggregate and store your organization's logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/central-log-storage](https://docs.cloud.google.com/logging/docs/central-log-storage)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Collate and route organization-level logs to supported destinations .
- Before you begin Ensure the following: To get the permissions that you need to configure an aggregated sink, ask your administrator to grant you the following IAM roles on your organization: To create log buckets and sinks in a project: Logs Configuration Writer ( roles/logging.configWriter ) - your project To create an aggregated sink: Logs Configuration Writer ( roles/logging.configWriter ) - your organization To grant roles to principals: Owner ( roles/owner ) - your project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Execute the gcloud logging sinks create command: gcloud logging sinks create PROJECT LEVEL SINK NAME SINK DESTINATION --project= PROJECT ID --log-filter='logName:cloudaudit.googleapis.com' \ --description=" Audit logs from my organization " \ Create the aggregated sink Aggregated sinks combine and route log entries from the resources contained by an organization or folder to a destination.
- Set up the sink at the organization level To create an aggregated sink that is non-intercepting and that routes log entries to a project, complete the following steps: Run the gcloud logging sinks create command.

### Logging release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/release-notes](https://docs.cloud.google.com/logging/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- July 23, 2021 Feature You can now use Cloud External Key Manager keys for organization-level Log Router CMEK.
- March 25, 2022 Feature Cloud Logging now supports organization policies that can enforce CMEK protection.
- March 03, 2025 Libraries Java 3.21.4 (2025-02-26) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 67fa9fb ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1768 ) ( a69e699 ) Update googleapis/sdk-platform-java action to v2.54.0 ( #1762 ) ( d50a8d2 ) Java 3.21.4 (2025-02-26) Bug Fixes deps: Update the Java code generator (gapic-generator-java) to 2.54.0 ( 67fa9fb ) Dependencies Update dependency com.google.cloud:sdk-platform-java-config to v3.44.0 ( #1768 ) ( a69e699 ) Update googleapis/sdk-platform-java action to v2.54.0 ( #1762 ) ( d50a8d2 ) February 18, 2025 Feature You can now use custom constraints with Organization Policy to provide more granular control over your Cloud Logging resources.
- In the coming weeks, this naming format will be applied to organization-level sinks and folder-level sinks, and to sinks listed on the Logs Exports page in the Logs Viewer.

