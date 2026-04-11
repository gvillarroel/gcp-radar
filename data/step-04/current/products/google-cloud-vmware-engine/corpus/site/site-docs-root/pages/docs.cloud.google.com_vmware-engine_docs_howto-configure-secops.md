---
title: "Configure Google Security Operations with VMware Engine \_|\_ Google Cloud\
  \ VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops
  title: "Configure Google Security Operations with VMware Engine \_|\_ Google Cloud\
    \ VMware Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure Google Security Operations with VMware Engine
This document describes how to configure Google Security Operations (Google SecOps) to improve the detection, investigation, and response to cybersecurity threats for virtual machines (VM) running on VMware Engine. Additionally, Google SecOps can analyze telemetry from your VMware infrastructure and other supported Google Cloud services.
Overview
Google SecOps is a cloud service, built as a specialized layer on
top of Google infrastructure, designed for enterprises to privately retain,
analyze, and search the large amounts of security and network telemetry they
generate. Google SecOps normalizes, indexes, correlates, and
analyzes the data to provide instant analysis and context on risky or suspicious activity.
Data ingestion mechanisms for Google SecOps
Google SecOps offers multiple pathways for data ingestion, as
detailed in the Google SecOps ingestion documentation . The configuration example in this guide focuses on the following key integration points within a representative architecture:
VMs and workload system logs : To capture logs originating from VMs and
workloads, several architectural patterns exist. The configuration example in this guide uses an
OpenTelemetry BindPlane agent deployed directly within these virtual
machines. This method provides a flexible and standardized way to collect
and forward system logs.
Google Cloud Logs : Beyond virtualized environments, most customer
projects use a range of Google Cloud services (excluding
VMware Engine in this specific context). To gain comprehensive
visibility for threat detection, logs from these supported services can be
channeled into Google SecOps. The configuration example that
follows employs the direct ingestion mechanism, configuring Cloud Logging
filters to selectively route relevant log data.
Configure Google Security Operations with VMware Engine
To configure Google Security Operations with VMware Engine, complete the
following steps:
Forward Workload System Logs
Create custom rules
Forward Google Cloud cloud logs
Forward workload system Logs
To forward workload system logs for VMs running within VMware Engine to Google SecOps, you can use an OpenTelemetry collection agent running within the workloads. The steps are as follows:
Follow the Bindplane agent before you begin instructions to install the agent and download the Google SecOps ingestion authentication file. You can download the Google SecOps authentication file from the Google SecOps portal .
Verify the firewall configuration to ensure relevant firewall ports are open.
Install the Bindplane agent by following the instructions for your OS, either Linux or Windows .
Complete the steps to configure the agent . Note the following details while completing these steps:
The Receiver section specifies which logs the agent should collect and sent to Google SecOps.
The Exporter section specifies the destination where the agents should send the logs.
This task uses the Google SecOps exporter, which sends the logs directly to theGoogle SecOps ingestion API.
See additional log collection configuration samples
for sample configuration files you can use. The following is a specific example for collecting Windows Event Logs (Application, Security, and System) and sending them to Google SecOps. It uses the OpenTelemetry Collector configuration format:
receivers:
windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _application:
attributes:
log_type: windows_event.application
channel: application
max_reads: 100
poll_interval: 1s
raw: true
start_at: end
windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _security:
attributes:
log_type: windows_event.security
channel: security
max_reads: 100
poll_interval: 1s
raw: true
start_at: end
windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _system:
attributes:
log_type: windows_event.system
channel: system
max_reads: 100
poll_interval: 1s
raw: true
start_at: end
processors:
resourcedetection/source0_01HZ7NFAB5HZY6TPMGEYRN4XGZ:
detectors:
- system
system:
hostname_sources:
- os
transform/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ processor0 _logs:
error_mode: ignore
log_statements:
- context: log
statements:
- set(attributes["chronicle_log_type"], "WINEVTLOG") where true
exporters:
chronicle/NA-SDL:
compression: none
creds: '{ "type": "service_account",
"project_id": "malachite-previewamericassdl",
"private_key_id": "a9c8d8f0b081c09bcf92621804ba19fc6529ecce",
"private_key": "----BEGIN PRIVATE KEY-----abcdefg-----END PRIVATE KEY-----\n",
"client_email": "previewamericassdl-1710772997@malachite-previewamericassdl.iam.gserviceaccount.com",
"client_id": "114604545528934473681",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/previewamericassdl-1710772997%40malachite-previewamericassdl.iam.gserviceaccount.com",
"universe_domain": "googleapis.com" }'
customer_id: a556547c-1cff-43ef-a2e4-cf5b12a865df
endpoint: malachiteingestion-pa.googleapis.com
ingestion_labels:
env: takeshi
log_type: CATCH_ALL
namespace: null
raw_log_field: body
retry_on_failure:
enabled: true
initial_interval: 5s
max_elapsed_time: 300s
max_interval: 30s
sending_queue:
enabled: true
num_consumers: 10
queue_size: 5000
storage: file_storage/NA-SDL
extensions:
file_storage/NA-SDL:
compaction:
directory: $OIQ_OTEL_COLLECTOR_HOME/storage
on_rebound: true
directory: $OIQ_OTEL_COLLECTOR_HOME/storage
service:
extensions:
- file_storage/NA-SDL
pipelines:
logs/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _NA-SDL-0:
receivers:
- windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _application
- windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _security
- windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ _system
processors:
- resourcedetection/source0_01HZ7NFAB5HZY6TPMGEYRN4XGZ
- transform/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ processor0 _logs
exporters:
- chronicle/NA-SDL
Restart the collector once the configuration is complete, and verify that
logs are populated in the
Google SecOps dashboard .
Create custom rules for threat detection
Google SecOps provides default, curated rules and detection
designed to identify cybersecurity threats effectively Beyond the default
features, you can create custom rules to generate alerts tailored to a specific
environment and its security concerns. For more sophisticated threat detection,
Google SecOps enables the use of
multiple event rules . This allows tracking and
correlating related security events over time, which which facilitates the
identification of complex attack patterns that may not be apparent from isolated
incidents.
Forward Google Cloud cloud logs
To configure the ingestion of Google Cloud data into
Google SecOps using direct ingestion, do the following:
Follow the steps in Ingest Google Cloud data to Google SecOps to set up logs.
Enable ingest and analyze data from Cloud Logging under the Global Ingestion Settings tab.
Review the list of supported Google Cloud services for log ingestion to identify the Google Cloud services that are most important for your security monitoring needs. See Export gcp_name logs .
Modify the default export filter as needed under the Export Filter Settings tab to include the specific logs you require. The following example is a copy of the export filter used for this document:
log_id("dns.googleapis.com/dns_queries") OR log_id("cloudaudit.googleapis.com/activity") OR log_id("cloudaudit.googleapis.com/system_event") OR
( log_id("cloudaudit.googleapis.com/data_access")
AND NOT protoPayload.methodName =~ "^storage.(buckets|objects).(get|list)$"
AND NOT protoPayload.request.cmd = "select" ) OR
log_id("cloudaudit.googleapis.com/policy") OR
log_id("cloudaudit.googleapis.com/access_transparency") OR
log_id("compute.googleapis.com/nat_flows") OR
log_id("compute.googleapis.com/firewall") OR
log_id("requests") OR
logName =~ "^projects/[\w-]+/logs/syslog$" OR
logName =~ "^projects/[\w-]+/logs/authlog$" OR
log_id("securelog") OR
log_id("sysmon.raw") OR
logName =~ "^projects/[\w-]+/logs/windows_event_log$" OR
log_id("windows_event_log") OR
log_id("events") OR
log_id("stdout") OR
log_id("stderr") OR
log_id("audit_log") OR
log_id("recaptchaenterprise.googleapis.com/assessment") OR
log_id("recaptchaenterprise.googleapis.com/annotation") OR
log_id("cloudaudit.googleapis.com/activity")
What's next
Learn how to ingest Google Cloud data to Google SecOps .
Review private cloud VMware components .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
