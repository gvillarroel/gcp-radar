---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.571Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Disable all logs ingestion"
feature_slug: "disable-all-logs-ingestion"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs"
keywords:
  - "disable"
  - "all"
  - "logs"
  - "ingestion"
  - "logging"
  - "can"
  - "immediately"
  - "log"
---

# Disable all logs ingestion

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging can immediately disable all log ingestion for a project.

## Extended Definition

Cloud Logging can immediately disable all log ingestion for a project.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)

## Supporting Pages

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The instance's operating system, BIOS, and other system-level entities often write output to the serial ports, which makes them useful for troubleshooting crashes, failed boots, startup issues, or shutdown issues. compute.googleapis.com/resource name is text escaped INFO DEBUG Storage Transfer Logging API service name: storagetransfer.googleapis.com Log ID Monitored resource Payload Labels Severities storagetransfer.googleapis.com%2Ftransfer activity storage transfer job type.googleapis.com/google.storagetransfer.logging.TransferActivityLog N/A INFO WARNING ERROR Traffic Director Logging API service name: trafficdirector.googleapis.com Log ID Monitored resource Payload Labels Severities trafficdirector.googleapis.com%2Fevents gce network type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO WARNING trafficdirector.googleapis.com%2Fevents gateway scope type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO trafficdirector.googleapis.com%2Fevents mesh type.googleapis.com/google.networking.trafficdirector.type.TrafficDirectorLogEntry N/A ERROR INFO Vertex AI API Logging API service name: aiplatform.googleapis.com Log ID Monitored resource Payload Labels Severities aiplatform.googleapis.com%2Fpipeline job events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobLogEntry network pipeline name pipeline type service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO aiplatform.googleapis.com%2Fpipeline job task events aiplatform.googleapis.com/PipelineJob type.googleapis.com/google.cloud.aiplatform.logging.PipelineJobTaskLogEntry custom job id network pipeline name schedule name service account template metadata version template uri vertex-ai-pipelines-run-billing-id vertex pipeline system label propagate labels ERROR INFO Web Security Scanner API Logging API service name: websecurityscanner.googleapis.com Log ID Monitored resource Payload Labels Severities websecurityscanner.googleapis.com%2Fscan activity security scanner scan config type.googleapis.com/google.cloud.websecurityscanner.v1.ScanRunLog N/A ERROR WARNING INFO Workflows Logging API service name: workflows.googleapis.com Log ID Monitored resource Payload Labels Severities workflows.googleapis.com%2Fengine call workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.EngineCallLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id DEBUG workflows.googleapis.com%2Fexecutions system workflows.googleapis.com/Workflow type.googleapis.com/google.cloud.workflows.type.ExecutionsSystemLog workflows.googleapis.com/execution id workflows.googleapis.com/revision id INFO ERROR reCAPTCHA Enterprise Logging API service name: recaptchaenterprise.googleapis.com Log ID Monitored resource Payload Labels Severities recaptchaenterprise.googleapis.com%2Fassessment recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.Assessment N/A DEFAULT ERROR recaptchaenterprise.googleapis.com%2Fannotation recaptchaenterprise.googleapis.com/Key type.googleapis.com/google.cloud.recaptchaenterprise.v1.AnnotateAssessmentRequest N/A DEFAULT ERROR Understand and manage platform logs The following sections provide basic information about using and managing platform logs in Cloud Logging.
- Log entry structure Cloud Logging represents logs using a single data type, LogEntry , which defines certain common data for all log entries as well as the payloads that Google Cloud services can include.
- N/A DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Cloud Setup Logging API service name: cloudsetup.googleapis.com Log ID Monitored resource Payload Labels Severities cloudsetup.googleapis.com%2Fcomplete deployment api type.googleapis.com/google.cloud.cloudsetup.logging.v1.CompleteDeploymentEvent activity type name DEFAULT Cloud Storage Logging API service name: storage.googleapis.com Log ID Monitored resource Payload Labels Severities storage.googleapis.com%2Frelocate bucket errors gcs bucket type.googleapis.com/google.storage.platformlogs.v1.RelocateBucketError N/A ERROR Cloud VPN Logging API service name: vpn.googleapis.com Log ID Monitored resource Payload Labels Severities vpn.googleapis.com%2Fipsec events vpn gateway VPN Tunnel logs from the VPN Gateway instance tunnel id DEBUG NOTICE Cloud Workstations Logging API service name: workstations.googleapis.com Log ID Monitored resource Payload Labels Severities workstations.googleapis.com%2Fdisk assignments workstations.googleapis.com/Workstation Disk assignment logs disk NOTICE workstations.googleapis.com%2Fvm assignments workstations.googleapis.com/Workstation VM assignment logs external ip instance id internal ip instance name NOTICE workstations.googleapis.com%2Fworkstation shutdowns workstations.googleapis.com/Workstation Workstation shutdown logs external ip instance id internal ip instance name shutdown reason NOTICE Compute Engine Logging API service name: compute.googleapis.com Log ID Monitored resource Payload Labels Severities compute.googleapis.com%2Fgce disaster recovery gce instance type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce disk type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce snapshot type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce instance template type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce instance group manager type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce resevered address type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgdnsusage gce instance type.googleapis.com/google.compute.logging.gdnsusage.v1.GdnsVmUsagePlatformLog resource name DEBUG compute.googleapis.com%2Fvm extension policies gce instance type.googleapis.com/google.compute.logging.agentcontrolplane.v1.VmExtensionEvent N/A INFO DEBUG ERROR WARNING Container Security API Logging API service name: containersecurity.googleapis.com Log ID Monitored resource Payload Labels Severities containersecurity.googleapis.com%2Ffinding k8s cluster type.googleapis.com/cloud.kubernetes.security.containersecurity logging.Finding N/A INFO Dataform Logging API service name: dataform.googleapis.com Log ID Monitored resource Payload Labels Severities dataform.googleapis.com%2Fworkflow invocation completion dataform.googleapis.com/Repository type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry N/A INFO WARNING ERROR dataform.googleapis.com%2Factas dry run result dataform.googleapis.com/Repository type.googleapis.com/google.cloud.dataform.logging.v1.ActAsDryRunResultLogEntry N/A INFO WARNING Datapipelines API Logging API service name: datapipelines.googleapis.com Log ID Monitored resource Payload Labels Severities datapipelines.googleapis.com%2Frequests datapipelines.googleapis.com/Location type.googleapis.com/google.cloud.datapipelines.logging.v1.RequestLogEntry N/A DEFAULT datapipelines.googleapis.com%2Frequests datapipelines.googleapis.com/Pipeline type.googleapis.com/google.cloud.datapipelines.logging.v1.RequestLogEntry N/A DEFAULT Dataproc Logging API service name: dataproc.googleapis.com Log ID Monitored resource Payload Labels Severities dataproc.googleapis.com%2Fautoscaler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Fautoscaler cloud dataproc batch type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Fautoscaler cloud dataproc session type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Freconciler cloud dataproc session type.googleapis.com/google.cloud.dataproc.logging.ReconciliationLog N/A INFO dataproc.googleapis.com%2Freconciler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterHealLog N/A INFO dataproc.googleapis.com%2Fcluster reconciler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterHealLog N/A INFO dataproc.googleapis.com%2Fcluster reconciler ttl cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterTtlLog N/A INFO Dataproc Metastore Logging API service name: metastore.googleapis.com Log ID Monitored resource Payload Labels Severities metastore.googleapis.com%2Fbackground metastore.googleapis.com/Service Dataproc Metastore background logs. logger DEFAULT ERROR INFO WARNING metastore.googleapis.com%2Fsystem metastore.googleapis.com/Service Service system logs. method service region DEFAULT ERROR INFO WARNING metastore.googleapis.com%2Frequests metastore.googleapis.com/Service Service request logs. method service region DEFAULT INFO metastore.googleapis.com%2Fscheduled backup metastore.googleapis.com/Service type.googleapis.com/google.cloud.metastore.logging.v1.ScheduledBackupLogEntry N/A DEFAULT INFO WARNING ERROR Developer Connect Logging API service name: developerconnect.googleapis.com Log ID Monitored resource Payload Labels Severities developerconnect.googleapis.com%2Fsdlc deployment k8s cluster type.googleapis.com/cloud.hosted.developerconnect.sdlc.logging.DeploymentEvent developerconnect.googleapis.com/insights config id developerconnect.googleapis.com/insights config deployment id INFO Event Threat Detection Logging API service name: threatdetection.googleapis.com Log ID Monitored resource Payload Labels Severities threatdetection.googleapis.com%2Fdetection threat detector Event Threat Detection finding.
- N/A ERROR INFO Partner Data Ingestion Logging API service name: partnerdataingestion.googleapis.com Log ID Monitored resource Payload Labels Severities partnerdataingestion.googleapis.com%2Fingest details consumed api type.googleapis.com/google.search.partnerdataingestion.logging.v1.IngestDetailsLog N/A INFO Pub/Sub Logging API service name: pubsub.googleapis.com Log ID Monitored resource Payload Labels Severities pubsub.googleapis.com%2Fingestion failures pubsub topic type.googleapis.com/google.pubsub.v1.IngestionFailureEvent N/A WARNING Recommender API Logging API service name: recommender.googleapis.com Log ID Monitored resource Payload Labels Severities recommender.googleapis.com%2Factions recommender v1: type.googleapis.com/google.cloud.recommender.logging.v1.ActionLog v1beta1: type.googleapis.com/google.cloud.recommender.logging.v1beta1.ActionLog N/A INFO recommender.googleapis.com%2Factions recommender insight type v1: type.googleapis.com/google.cloud.recommender.logging.v1.InsightActionLog v1beta1: type.googleapis.com/google.cloud.recommender.logging.v1beta1.InsightActionLog N/A INFO SaaS Lifecycle Management Logging API service name: saasmanagement.googleapis.com Log ID Monitored resource Payload Labels Severities saasmanagement.googleapis.com%2Fterraform internal saasmanagement.googleapis.com/Instance type.googleapis.com/google.cloud.saasaccelerator.management.logs.v1.InstanceEvent resource project number DEBUG ERROR INFO SaaS Runtime Logging API service name: saasservicemgmt.googleapis.com Log ID Monitored resource Payload Labels Severities saasservicemgmt.googleapis.com%2Fdeployment events saasservicemgmt.googleapis.com/Unit type.googleapis.com/google.cloud.saasplatform.saasservicemgmt.logging.v1.UnitOperationLog unit kind id saas id rollout id tenant id release id saassvcmgmt correlation id INFO DEBUG ERROR saasservicemgmt.googleapis.com%2Frollout events saasservicemgmt.googleapis.com/Rollout type.googleapis.com/google.cloud.saasplatform.saasservicemgmt.logging.v1.RolloutLog unit kind id saas id release id INFO DEBUG ERROR Secret Manager API Logging API service name: secretmanager.googleapis.com Log ID Monitored resource Payload Labels Severities secretmanager.googleapis.com%2Fsecret event secretmanager.googleapis.com/Secret type.googleapis.com/google.cloud.secretmanager.logging.v1.SecretEvent N/A DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Sensitive Actions Service Logging API service name: sensitiveaction.googleapis.com Log ID Monitored resource Payload Labels Severities sensitiveaction.googleapis.com%2Faction sensitiveaction.googleapis.com/Location type.googleapis.com/google.cloud.sensitiveaction.logging.v1.SensitiveAction N/A NOTICE Serial Console Logging API service name: serialconsole.googleapis.com Log ID Monitored resource Payload Labels Severities serialconsole.googleapis.com%2Fserial port 1 output gce instance A virtual machine instance has four virtual serial ports.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- To view all log entries in the Required and Default buckets: Private Logs Viewer ( roles/logging.privateLogViewer ) on your project, folder, or organization.
- The all resources and all log name menus are disabled You open the Logs Explorer page, and the All resources and All log names menus are disabled.
- Stream logs You can stream logs as Logging stores them in log buckets, or you can add a query to stream only those logs that match the query.
- You can also grant a role that contains the logging.logEntries.list permission, which lets a principal view and download logs.

### "Use log rotation for Ops Agent self logs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs](https://docs.cloud.google.com/logging/docs/agent/ops-agent/rotate-logs)
- Source ID: `site-docs-root-2`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- The result, specifying all options and default values, looks like the following: logging: ... metrics: ... global: default self log file rotation: enabled: true max file size megabytes: 400 backup count: 1 Example configurations To disable log rotation by the Ops Agent, specify the enabled option with the value false : logging: ... metrics: ... global: default self log file rotation: enabled: false To rotate the log when the log file reaches 20 MB and keep 5 backups (6 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 20 backup count: 5 To rotate the log when the log file reaches 2,000 MB (2 GB) and keep 1 backup (2 files total): logging: ... metrics: ... global: default self log file rotation: max file size megabytes: 2000 To rotate the log when the log file reaches 400 MB and keep 2 backups (3 files total): logging: ... metrics: ... global: default self log file rotation: backup count: 2 If you make frequent changes as you refine your log-rotation configuration, remember to restart the agent to apply your changes.
- Set up self-log file rotation on Linux VMs To limit the size of the logging sub-agent log at /var/log/google-cloud-ops-agent/subagents/logging-module.log , install and configure the logrotate utility.
- Home Documentation Observability Cloud Logging Guides Send feedback Use log rotation for Ops Agent self logs Stay organized with collections Save and categorize content based on your preferences.
- Configure log rotation in the Ops Agent This section describes how to modify the default log-rotation configuration used by Ops Agent to rotate its logs automatically.

