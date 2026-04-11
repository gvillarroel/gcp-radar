---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.545Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer raw-text log view"
feature_slug: "logs-explorer-raw-text-log-view"
latest_feature_date: "2022-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
keywords:
  - "logs"
  - "explorer"
  - "raw"
  - "text"
  - "log"
  - "view"
  - "the"
  - "improved"
---

# Logs Explorer raw-text log view

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

The improved Logs Explorer can toggle default summary fields off to show logs in a raw-text view.

## Extended Definition

The improved Logs Explorer can toggle default summary fields off to show logs in a raw-text view.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: N/A

Evidence snippets:
- View Compute Engine logs For certain Compute Engine resource types, such as gce instance and gce network , you see the resource name with the resource ID as subtext in several places in the Logs Explorer.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- The email notification you receive looks similar to the following: To view the new log entries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Monitor third-party applications For information about viewing logs in the Logs Explorer, see View logs by using the Logs Explorer .
- View your logs in the Logs Explorer.

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- View logs There are several ways to view your platform log entries: To read log entries using the Google Cloud console, see Using the Logs Explorer .
- The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes them useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues. compute.googleapis.com/resource name is text escaped INFO DEBUG Storage Transfer Logging API service name: storagetransfer.googleapis.com Log ID Monitored resource Payload Labels Severities storagetransfer.googleapis.com%2Ftransfer activity storage transfer job type.googleapis.com/google.storagetransfer.logging.TransferActivityLog N/A INFO WARNING ERROR Traffic Director Logging API service name: trafficdirector.googleapis.com Log ID Monitored resource Payload Labels Severities trafficdirector.googleapis.com%2Fevents gce network type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO WARNING trafficdirector.googleapis.com%2Fevents gateway scope type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO trafficdirector.googleapis.com%2Fevents mesh type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO Vertex AI API Logging API service name: aiplatform.googleapis.com Log ID Monitored resource Payload Labels Severities aiplatform.googleapis.com%2Fpipeline job events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobLogEntry network pipeline name pipeline type service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO aiplatform.googleapis.com%2Fpipeline job task events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobTaskLogEntry custom job id network pipeline name schedule name service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO Web Security Scanner API Logging API service name: websecurityscanner.googleapis.com Log ID Monitored resource Payload Labels Severities websecurityscanner.googleapis.com%2Fscan activity security scanner scan config type.googleapis.com/google.cloud.websecurityscanner.v1.ScanRunLog N/A ERROR WARNING INFO Workflows Logging API service name: workflows.googleapis.com Log ID Monitored resource Payload Labels Severities workflows.googleapis.com%2Fengine call workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.EngineCallLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id DEBUG workflows.googleapis.com%2Fexecutions system workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.ExecutionsSystemLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id INFO ERROR reCAPTCHA Enterprise Logging API service name: recaptchaenterprise.googleapis.com Log ID Monitored resource Payload Labels Severities recaptchaenterprise.googleapis.com%2Fassessment recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.Assessment N/A DEFAULT ERROR recaptchaenterprise.googleapis.com%2Fannotation recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest N/A DEFAULT ERROR Understand and manage platform logs The following sections provide basic information about using and managing platform logs in Cloud Logging.
- CONSUMER PROJECT CONSUMER PROJECT NUMBER CONTAINER ID CONTAINER ID FULL CONTAINER LOG ORDINAL CONTAINER NAME CONTAINER TAG IMAGE NAME NODE ID DATABASE VERSION SYSLOG FACILITY SYSLOG IDENTIFIER SYSLOG TIMESTAMP BOOT ID CAP EFFECTIVE CMDLINE COMM EXE GID HOSTNAME MACHINE ID PID RUNTIME SCOPE SOURCE REALTIME TIMESTAMP STREAM ID SYSTEMD CGROUP SYSTEMD INVOCATION ID SYSTEMD SLICE SYSTEMD UNIT TRANSPORT UID MONOTONIC TIMESTAMP REALTIME TIMESTAMP CONTAINER LOG EPOCH SEQNUM SEQNUM ID CODE LINE CODE FILE JOB ID TID CODE FUNCTION SYSLOG RAW INVOCATION ID UNIT ERROR INFO WARNING NOTICE ALERT alloydb.googleapis.com%2Fpostgresinternal alloydb.googleapis.com/Instance The internal dogfish logs.
- This document provides basic information about the Google Cloud platform logs that are available in Cloud Logging, as well as next steps for viewing and managing platform logs.

