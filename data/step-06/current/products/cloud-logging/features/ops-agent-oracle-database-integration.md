---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.368Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Ops Agent Oracle Database integration"
feature_slug: "ops-agent-oracle-database-integration"
latest_feature_date: "2022-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/api/platform-logs"
keywords:
  - "ops"
  - "agent"
  - "oracle"
  - "database"
  - "integration"
  - "can"
  - "collect"
  - "logs"
---

# Ops Agent Oracle Database integration

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Ops Agent can collect Oracle Database logs and metrics.

## Extended Definition

Ops Agent can collect Oracle Database logs and metrics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)

## Supporting Pages

### Apache CouchDB \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/couchdb)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from CouchDB, you must create a receiver for the logs that CouchDB produces and then create a pipeline for the new receiver.
- Any dashboards are automatically installed after you configure the integration and the Ops Agent has begun collecting metric data.
- The integration collects general CouchDB and access logs and parses them into a JSON payload.
- Add the following lines to the file: [log] writer = file file = /var/log/couchdb/couchdb.log level = info Restart Apache CouchDB: sudo systemctl restart couchdb Configure the Ops Agent for CouchDB Following the guide to Configure the Ops Agent , add the required elements to collect telemetry from CouchDB instances, and restart the agent .

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Collect logs from Apache with the Ops Agent Learn how to collect and view syslog logs collected from an Apache web server installed on a Compute Engine virtual machine (VM) instance by using the Ops Agent.
- Collect Apache web server logs and metrics In these steps, you configure the Ops Agent to collect logs and metrics from your Apache web server: Go to the SSH terminal for your VM instance.
- You've configured the Ops Agent to collect logs and metrics from your Apache web server, and you've viewed those logs.

### Google Cloud platform logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CONTAINER ID CONTAINER ID FULL CONTAINER NAME CONTAINER TAG CONTAINER PARTIAL ID CONTAINER PARTIAL LAST CONTAINER PARTIAL MESSAGE CONTAINER PARTIAL ORDINAL IMAGE NAME INSTANCE ID INSTANCE UID LOG BUCKET NUM SYSLOG IDENTIFIER BOOT ID CAP EFFECTIVE CMDLINE COMM EXE GID HOSTNAME MACHINE ID PID PROJECT NUMBER SOURCE REALTIME TIMESTAMP SYSTEMD CGROUP SYSTEMD INVOCATION ID SYSTEMD SLICE SYSTEMD UNIT TRANSPORT UID MONOTONIC TIMESTAMP REALTIME TIMESTAMP SYSLOG TIMESTAMP SOURCE ID RUNTIME SCOPE CONTAINER LOG ORDINAL CONTAINER LOG EPOCH SEQNUM ID SEQNUM DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY cloudsql.googleapis.com%2Fsqlagent.out cloudsql database These logs are from sqlagent.out on the Cloud SQL instance.
- CONSUMER PROJECT CONSUMER PROJECT NUMBER NODE ID SOURCE DATABASE VERSION INFO WARNING ERROR ALERT NOTICE alloydb.googleapis.com%2Fjournald alloydb.googleapis.com/Instance Container logs for dataplane agents.
- CONSUMER PROJECT CONSUMER PROJECT NUMBER LOG TYPE NODE ID DATABASE VERSION DEFAULT INFO WARNING ERROR alloydb.googleapis.com%2Finstance agent saas instance Logs for instance agent running on AlloyDB VM.
- N/A DEFAULT DEBUG INFO NOTICE WARNING ERROR CRITICAL ALERT EMERGENCY Cloud Setup Logging API service name: cloudsetup.googleapis.com Log ID Monitored resource Payload Labels Severities cloudsetup.googleapis.com%2Fcomplete deployment api type.googleapis.com/google.cloud.cloudsetup.logging.v1.CompleteDeploymentEvent activity type name DEFAULT Cloud Storage Logging API service name: storage.googleapis.com Log ID Monitored resource Payload Labels Severities storage.googleapis.com%2Frelocate bucket errors gcs bucket type.googleapis.com/google.storage.platformlogs.v1.RelocateBucketError N/A ERROR Cloud VPN Logging API service name: vpn.googleapis.com Log ID Monitored resource Payload Labels Severities vpn.googleapis.com%2Fipsec events vpn gateway VPN Tunnel logs from the VPN Gateway instance tunnel id DEBUG NOTICE Cloud Workstations Logging API service name: workstations.googleapis.com Log ID Monitored resource Payload Labels Severities workstations.googleapis.com%2Fdisk assignments workstations.googleapis.com/Workstation Disk assignment logs disk NOTICE workstations.googleapis.com%2Fvm assignments workstations.googleapis.com/Workstation VM assignment logs external ip instance id internal ip instance name NOTICE workstations.googleapis.com%2Fworkstation shutdowns workstations.googleapis.com/Workstation Workstation shutdown logs external ip instance id internal ip instance name shutdown reason NOTICE Compute Engine Logging API service name: compute.googleapis.com Log ID Monitored resource Payload Labels Severities compute.googleapis.com%2Fgce disaster recovery gce instance type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce disk type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce snapshot type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce instance template type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce instance group manager type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgce disaster recovery gce resevered address type.googleapis.com/google.compute.logging.dr.v1.DisasterRecoveryEvent N/A N/A compute.googleapis.com%2Fgdnsusage gce instance type.googleapis.com/google.compute.logging.gdnsusage.v1.GdnsVmUsagePlatformLog resource name DEBUG compute.googleapis.com%2Fvm extension policies gce instance type.googleapis.com/google.compute.logging.agentcontrolplane.v1.VmExtensionEvent N/A INFO DEBUG ERROR WARNING Container Security API Logging API service name: containersecurity.googleapis.com Log ID Monitored resource Payload Labels Severities containersecurity.googleapis.com%2Ffinding k8s cluster type.googleapis.com/cloud.kubernetes.security.containersecurity logging.Finding N/A INFO Dataform Logging API service name: dataform.googleapis.com Log ID Monitored resource Payload Labels Severities dataform.googleapis.com%2Fworkflow invocation completion dataform.googleapis.com/Repository type.googleapis.com/google.cloud.dataform.logging.v1.WorkflowInvocationCompletionLogEntry N/A INFO WARNING ERROR dataform.googleapis.com%2Factas dry run result dataform.googleapis.com/Repository type.googleapis.com/google.cloud.dataform.logging.v1.ActAsDryRunResultLogEntry N/A INFO WARNING Datapipelines API Logging API service name: datapipelines.googleapis.com Log ID Monitored resource Payload Labels Severities datapipelines.googleapis.com%2Frequests datapipelines.googleapis.com/Location type.googleapis.com/google.cloud.datapipelines.logging.v1.RequestLogEntry N/A DEFAULT datapipelines.googleapis.com%2Frequests datapipelines.googleapis.com/Pipeline type.googleapis.com/google.cloud.datapipelines.logging.v1.RequestLogEntry N/A DEFAULT Dataproc Logging API service name: dataproc.googleapis.com Log ID Monitored resource Payload Labels Severities dataproc.googleapis.com%2Fautoscaler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Fautoscaler cloud dataproc batch type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Fautoscaler cloud dataproc session type.googleapis.com/google.cloud.dataproc.logging.AutoscalerLog N/A INFO WARNING ERROR CRITICAL dataproc.googleapis.com%2Freconciler cloud dataproc session type.googleapis.com/google.cloud.dataproc.logging.ReconciliationLog N/A INFO dataproc.googleapis.com%2Freconciler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterHealLog N/A INFO dataproc.googleapis.com%2Fcluster reconciler cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterHealLog N/A INFO dataproc.googleapis.com%2Fcluster reconciler ttl cloud dataproc cluster type.googleapis.com/google.cloud.dataproc.logging.ReconciliationClusterTtlLog N/A INFO Dataproc Metastore Logging API service name: metastore.googleapis.com Log ID Monitored resource Payload Labels Severities metastore.googleapis.com%2Fbackground metastore.googleapis.com/Service Dataproc Metastore background logs. logger DEFAULT ERROR INFO WARNING metastore.googleapis.com%2Fsystem metastore.googleapis.com/Service Service system logs. method service region DEFAULT ERROR INFO WARNING metastore.googleapis.com%2Frequests metastore.googleapis.com/Service Service request logs. method service region DEFAULT INFO metastore.googleapis.com%2Fscheduled backup metastore.googleapis.com/Service type.googleapis.com/google.cloud.metastore.logging.v1.ScheduledBackupLogEntry N/A DEFAULT INFO WARNING ERROR Developer Connect Logging API service name: developerconnect.googleapis.com Log ID Monitored resource Payload Labels Severities developerconnect.googleapis.com%2Fsdlc deployment k8s cluster type.googleapis.com/cloud.hosted.developerconnect.sdlc.logging.DeploymentEvent developerconnect.googleapis.com/insights config id developerconnect.googleapis.com/insights config deployment id INFO Event Threat Detection Logging API service name: threatdetection.googleapis.com Log ID Monitored resource Payload Labels Severities threatdetection.googleapis.com%2Fdetection threat detector Event Threat Detection finding.

