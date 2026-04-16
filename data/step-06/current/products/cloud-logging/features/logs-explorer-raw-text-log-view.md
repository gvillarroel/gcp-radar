---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.385Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Explorer raw-text log view"
feature_slug: "logs-explorer-raw-text-log-view"
latest_feature_date: "2022-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logs"
  - "explorer"
  - "raw"
  - "text"
  - "log"
  - "view"
  - "improved"
  - "can"
---

# Logs Explorer raw-text log view

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The improved Logs Explorer can toggle default summary fields off to show logs in a raw-text view.

## Extended Definition

The improved Logs Explorer can toggle default summary fields off to show logs in a raw-text view.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- View Compute Engine logs For certain Compute Engine resource types, such as gce instance and gce network , you see the resource name with the resource ID as subtext in several places in the Logs Explorer.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- View logs There are several ways to view your platform log entries: To read log entries using the Google Cloud console, see Using the Logs Explorer .
- The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes them useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues. compute.googleapis.com/resource name is text escaped INFO DEBUG Storage Transfer Logging API service name: storagetransfer.googleapis.com Log ID Monitored resource Payload Labels Severities storagetransfer.googleapis.com%2Ftransfer activity storage transfer job type.googleapis.com/google.storagetransfer.logging.TransferActivityLog N/A INFO WARNING ERROR Traffic Director Logging API service name: trafficdirector.googleapis.com Log ID Monitored resource Payload Labels Severities trafficdirector.googleapis.com%2Fevents gce network type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO WARNING trafficdirector.googleapis.com%2Fevents gateway scope type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO trafficdirector.googleapis.com%2Fevents mesh type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO Vertex AI API Logging API service name: aiplatform.googleapis.com Log ID Monitored resource Payload Labels Severities aiplatform.googleapis.com%2Fpipeline job events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobLogEntry network pipeline name pipeline type service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO aiplatform.googleapis.com%2Fpipeline job task events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobTaskLogEntry custom job id network pipeline name schedule name service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO Web Security Scanner API Logging API service name: websecurityscanner.googleapis.com Log ID Monitored resource Payload Labels Severities websecurityscanner.googleapis.com%2Fscan activity security scanner scan config type.googleapis.com/google.cloud.websecurityscanner.v1.ScanRunLog N/A ERROR WARNING INFO Workflows Logging API service name: workflows.googleapis.com Log ID Monitored resource Payload Labels Severities workflows.googleapis.com%2Fengine call workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.EngineCallLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id DEBUG workflows.googleapis.com%2Fexecutions system workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.ExecutionsSystemLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id INFO ERROR reCAPTCHA Enterprise Logging API service name: recaptchaenterprise.googleapis.com Log ID Monitored resource Payload Labels Severities recaptchaenterprise.googleapis.com%2Fassessment recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.Assessment N/A DEFAULT ERROR recaptchaenterprise.googleapis.com%2Fannotation recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest N/A DEFAULT ERROR Understand and manage platform logs The following sections provide basic information about using and managing platform logs in Cloud Logging.
- This document provides basic information about the Google Cloud platform logs that are available in Cloud Logging, as well as next steps for viewing and managing platform logs.
- N/A DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Cloud Setup Logging API service name: cloudsetup.googleapis.com Log ID Monitored resource Payload Labels Severities cloudsetup.googleapis.com%2Fcomplete deployment api type.googleapis.com/google.cloud.cloudsetup.logging.v1.CompleteDeploymentEvent activity type name DEFAULT Cloud Storage Logging API service name: storage.googleapis.com Log ID Monitored resource Payload Labels Severities storage.googleapis.com%2Frelocate bucket errors gcs bucket type.googleapis.com/google.storage.platformlogs.v1.RelocateBucketError N/A ERROR Cloud VPN Logging API service name: vpn.googleapis.com Log ID Monitored resource Payload Labels Severities vpn.googleapis.com%2Fipsec events vpn gateway VPN Tunnel logs from the VPN Gateway instance tunnel id DEBUG NOTICE Cloud Workstations Logging API service name: workstations.googleapis.com Log ID Monitored resource Payload Labels Severities workstations.googleapis.com%2Fdisk assignments workstations.googleapis.com/Workstation Disk assignment logs disk NOTICE workstations.googleapis.com%2Fvm assignments workstations.googleapis.com/Workstation VM assignment logs external ip instance id internal ip instance name NOTICE workstations.googleapis.com%2Fworkstation shutdowns workstations.googleapis.com/Workstation Workstation shutdown logs external ip instance id internal ip instance name shutdown reason NOTICE Compute Engine Logging API service name: compute.googleapis.com Log ID Monitored resource Payload Labels Severities compute.googleapis.com%2Fgce disaster recovery gce instance type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce disk type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce snapshot type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce instance template type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce instance group manager type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce resevered address type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgdnsusage gce instance type.googleapis.com/google.compute.logging.gdnsusage.v1.GdnsVmUsagePlatformLog resource name DEBUG compute.googleapis.com%2Fvm extension policies gce instance type.googleapis.com/google.compute.logging.agentcontrolplane.v1.VmExtensionEvent N/A INFO DEBUG ERROR WARNING Container Security API Logging API service name: containersecurity.googleapis.com Log ID Monitored resource Payload Labels Severities containersecurity.googleapis.com%2Ffinding k8s cluster type.googleapis.com/cloud.kubernetes.security.containersecurity logging.Finding N/A INFO Dataform Logging API service name: dataform.googleapis.com Log ID Monitored resource Payload Labels Severities dataform.googleapis.com%2Fworkflow invocation completion dataform.googleapis.com/Repository type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry N/A INFO WARNING ERROR dataform.googleapis.com%2Factas dry run result dataform.googleapis.com/Repository type.googleapis.com/google.cloud.dataform.logging.v1.ActAsDryRunResultLogEntry N/A INFO WARNING Datapipelines API Logging API service name: datapipelines.googleapis.com Log ID Monitored resource Payload Labels Severities datapipelines.googleapis.com%2Frequests datapipelines.googleapis.com/Location type.googleapis.com/google.cloud.datapipelines.logging.v1.RequestLogEntry N/A DEFAULT datapipelines.googleapis.com%2Frequests datapipelines.googleapis.com/Pipeline type.googleapis.com/google.cloud.datapipelines.logging.v1.RequestLogEntry N/A DEFAULT Dataproc Logging API service name: dataproc.googleapis.com Log ID Monitored resource Payload Labels Severities dataproc.googleapis.com%2Fautoscaler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Fautoscaler cloud dataproc batch type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Fautoscaler cloud dataproc session type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Freconciler cloud dataproc session type.googleapis.com/google.cloud.dataproc.logging.ReconciliationLog N/A INFO dataproc.googleapis.com%2Freconciler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterHealLog N/A INFO dataproc.googleapis.com%2Fcluster reconciler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterHealLog N/A INFO dataproc.googleapis.com%2Fcluster reconciler ttl cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterTtlLog N/A INFO Dataproc Metastore Logging API service name: metastore.googleapis.com Log ID Monitored resource Payload Labels Severities metastore.googleapis.com%2Fbackground metastore.googleapis.com/Service Dataproc Metastore background logs. logger DEFAULT ERROR INFO WARNING metastore.googleapis.com%2Fsystem metastore.googleapis.com/Service Service system logs. method service region DEFAULT ERROR INFO WARNING metastore.googleapis.com%2Frequests metastore.googleapis.com/Service Service request logs. method service region DEFAULT INFO metastore.googleapis.com%2Fscheduled backup metastore.googleapis.com/Service type.googleapis.com/google.cloud.metastore.logging.v1.ScheduledBackupLogEntry N/A DEFAULT INFO WARNING ERROR Developer Connect Logging API service name: developerconnect.googleapis.com Log ID Monitored resource Payload Labels Severities developerconnect.googleapis.com%2Fsdlc deployment k8s cluster type.googleapis.com/cloud.hosted.developerconnect.sdlc.logging.DeploymentEvent developerconnect.googleapis.com/insights config id developerconnect.googleapis.com/insights config deployment id INFO Event Threat Detection Logging API service name: threatdetection.googleapis.com Log ID Monitored resource Payload Labels Severities threatdetection.googleapis.com%2Fdetection threat detector Event Threat Detection finding.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- To view and run the library's queries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Build queries To build queries by using the Google Cloud console, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

