---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.548Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Apache HBase Log and Metric Collection in Ops Agent"
feature_slug: "apache-hbase-log-and-metric-collection-in-ops-agent"
latest_feature_date: "2022-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation"
keywords:
  - "apache"
  - "hbase"
  - "log"
  - "and"
  - "metric"
  - "collection"
  - "in"
  - "ops"
---

# Apache HBase Log and Metric Collection in Ops Agent

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Ops Agent can collect Apache HBase logs and metrics for Cloud Logging and Monitoring.

## Extended Definition

Ops Agent can collect Apache HBase logs and metrics for Cloud Logging and Monitoring.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)

## Supporting Pages

### Apache HBase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase](https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase)
- Source ID: `site-docs-root-2`
- Final score: 254
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Open a PowerShell terminal with administrator privileges by right-clicking the PowerShell icon and selecting Run as Administrator To restart the agent, run the following PowerShell command: Restart-Service google-cloud-ops-agent -Force To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: Get-Service google-cloud-ops-agent Configure logs collection To ingest logs from HBase, you must create a receiver for the logs that HBase produces and then create a pipeline for the new receiver.
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : hbase : type : hbase endpoint : service : jmx : rmi : ///jndi/rmi://127.0.0.1:10101/jmxrmi service : pipelines : hbase : receivers : - hbase logging : receivers : hbase system : type : hbase system service : pipelines : hbase system : receivers : - hbase system EOF For these changes to take effect, you must restart the Ops Agent: Linux To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " Windows Connect to your instance using RDP or a similar tool and login to Windows.
- Home Documentation Observability Cloud Logging Guides Send feedback Apache HBase Stay organized with collections Save and categorize content based on your preferences.
- Metric type Kind, Type Monitored resources Labels workload.googleapis.com/hbase.master.region server.count GAUGE , INT64 gce instance state workload.googleapis.com/hbase.master.regions in transition.count GAUGE , INT64 gce instance workload.googleapis.com/hbase.master.regions in transition.oldest age GAUGE , INT64 gce instance workload.googleapis.com/hbase.master.regions in transition.over threshold GAUGE , INT64 gce instance workload.googleapis.com/hbase.region server.active handler.count GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.authentication.count GAUGE , INT64 gce instance region server state workload.googleapis.com/hbase.region server.block cache.operation.count GAUGE , INT64 gce instance region server state workload.googleapis.com/hbase.region server.blocked update.time GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.disk.store file.count GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.disk.store file.size GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.files.local GAUGE , DOUBLE gce instance region server workload.googleapis.com/hbase.region server.gc.old gen.time CUMULATIVE , INT64 gce instance region server workload.googleapis.com/hbase.region server.gc.time CUMULATIVE , INT64 gce instance region server workload.googleapis.com/hbase.region server.gc.young gen.time CUMULATIVE , INT64 gce instance region server workload.googleapis.com/hbase.region server.open connection.count GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.append.latency.max GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.append.latency.mean GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.append.latency.median GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.append.latency.min GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.append.latency.p99 GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.delete.latency.max GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.delete.latency.mean GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.delete.latency.median GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.delete.latency.min GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.delete.latency.p99 GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.get.latency.max GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.get.latency.mean GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.get.latency.median GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.get.latency.min GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.get.latency.p99 GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.increment.latency.max GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.increment.latency.mean GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.increment.latency.median GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.increment.latency.min GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.increment.latency.p99 GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.put.latency.max GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.put.latency.mean GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.put.latency.median GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.put.latency.min GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.put.latency.p99 GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.replay.latency.max GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.replay.latency.mean GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.replay.latency.median GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.replay.latency.min GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operation.replay.latency.p99 GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.operations.slow GAUGE , INT64 gce instance operation region server workload.googleapis.com/hbase.region server.queue.length GAUGE , INT64 gce instance region server state workload.googleapis.com/hbase.region server.queue.request.count GAUGE , INT64 gce instance region server state workload.googleapis.com/hbase.region server.region.count GAUGE , INT64 gce instance region server workload.googleapis.com/hbase.region server.request.count GAUGE , INT64 gce instance region server state workload.googleapis.com/hbase.region server.write ahead log.count GAUGE , INT64 gce instance region server Verify the configuration This section describes how to verify that you correctly configured the HBase receiver.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 244
- Re-rank relevance: N/A

Evidence snippets:
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.
- Restart the Ops Agent: To restart the agent, run the following command on your instance: sudo systemctl restart google-cloud-ops-agent To confirm that the agent restarted, run the following command and verify that the components "Metrics Agent" and "Logging Agent" started: sudo systemctl status "google-cloud-ops-agent " View Apache web server logs To view your logs in the Google Cloud console, use the Logs Explorer: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Collect Apache web server logs and metrics In these steps, you configure the Ops Agent to collect logs and metrics from your Apache web server: Go to the SSH terminal for your VM instance.
- Enable the APIs Required roles To get the permissions that you need to create a Compute Engine instance, install Apache, and to view metric data, ask your administrator to grant you the following IAM roles on your project: Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Logs Viewer ( roles/logging.viewer ) Monitoring Editor ( roles/monitoring.editor ) OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### "Installing the Ops Agent on individual VMs \_|\_ Cloud Logging \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation](https://docs.cloud.google.com/logging/docs/agent/ops-agent/installation)
- Source ID: `site-docs-root-2`
- Final score: 242
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Observability Cloud Logging Guides Send feedback Installing the Ops Agent on individual VMs Stay organized with collections Save and categorize content based on your preferences.
- To verify that the agent is working as expected, run: sudo systemctl status google-cloud-ops-agent" " Verify that the components "Logging Agent" and "Metrics Agent" are running.
- The Ops Agent collects logs and metrics on Compute Engine instances, sending your logs to Cloud Logging and your metrics to Cloud Monitoring.
- LINUX Run the following command on your instance: sudo systemctl restart google-cloud-ops-agent Windows Connect to your instance using RDP or a similar tool and login to Windows.

