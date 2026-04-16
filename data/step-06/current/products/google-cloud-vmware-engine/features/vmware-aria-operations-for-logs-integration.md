---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.701Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "VMware Aria Operations for Logs integration"
feature_slug: "vmware-aria-operations-for-logs-integration"
latest_feature_date: "2023-05-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring"
  - "https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
keywords:
  - "vmware"
  - "aria"
  - "operations"
  - "logs"
  - "integration"
  - "lets"
  - "you"
  - "collect"
---

# VMware Aria Operations for Logs integration

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

VMware Aria Operations for Logs integration lets you collect and manage logs from VMware Engine and on-premises environments in a centralized solution.

## Extended Definition

VMware Aria Operations for Logs integration lets you collect and manage logs from VMware Engine and on-premises environments in a centralized solution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- [https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops](https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)

## Supporting Pages

### "Overview of VMware Engine monitoring \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table lists the classes of available logs for VMware Engine and the severity of the reported events: The following table lists the available logs for VMware Engine and the severity of the reported events: VMware component Issue notification Resolution notification Action owner VMware Engine node ALERT NOTICE VMware Engine Service Operations VMware vCenter CRITICAL NOTICE VMware Engine Service Operations VMware NSX Manager CRITICAL NOTICE VMware Engine Service Operations VMware HCX CRITICAL NOTICE VMware Engine Service Operations vSAN utilization ALERT Not applicable Customer Cluster auto-scale Issue dependent Issue dependent Issue dependent Private cloud operations (create, delete, add and remove nodes) Issue dependent Issue dependent Issue dependent Stretched private cloud issues ALERT NOTICE VMware Engine Service Operations You can access logs for VMware Engine in the following ways: In Logs Explorer , by using the following log name: projects/ PROJECT ID /logs/vmwareengine.googleapis.com%2Falerts In the Google Cloud console, by going to the Dashboard page .
- VMware Aria Operations uses advanced analytics to help you identify issues, forecast usage, and recommend corrective actions to ensure optimal performance, availability, and efficiency in your virtual infrastructure.
- Use of Cloud Logging by other VMware Engine features Other VMware Engine features also generate service-related logs, such as Update Center , which supports day-2 operations.
- Identify and fix issues with VMware Aria Operations VMware Aria Operations is a VMware product that provides detailed insights into your VMware vCenter environments.

### "Configure Google Security Operations with VMware Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops](https://docs.cloud.google.com/vmware-engine/docs/howto-configure-secops)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure Google Security Operations with VMware Engine To configure Google Security Operations with VMware Engine, complete the following steps: Forward Workload System Logs Create custom rules Forward Google Cloud cloud logs Forward workload system Logs To forward workload system logs for VMs running within VMware Engine to Google SecOps, you can use an OpenTelemetry collection agent running within the workloads.
- It uses the OpenTelemetry Collector configuration format: receivers: windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ application: attributes: log type: windows event.application channel: application max reads: 100 poll interval: 1s raw: true start at: end windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ security: attributes: log type: windows event.security channel: security max reads: 100 poll interval: 1s raw: true start at: end windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ system: attributes: log type: windows event.system channel: system max reads: 100 poll interval: 1s raw: true start at: end processors: resourcedetection/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ: detectors: - system system: hostname sources: - os transform/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ processor0 logs: error mode: ignore log statements: - context: log statements: - set(attributes["chronicle log type"], "WINEVTLOG") where true exporters: chronicle/NA-SDL: compression: none creds: '{ "type": "service account", "project id": "malachite-previewamericassdl", "private key id": "a9c8d8f0b081c09bcf92621804ba19fc6529ecce", "private key": "----BEGIN PRIVATE KEY-----abcdefg-----END PRIVATE KEY-----\n", "client email": "previewamericassdl-1710772997@malachite-previewamericassdl.iam.gserviceaccount.com", "client id": "114604545528934473681", "auth uri": "https://accounts.google.com/o/oauth2/auth", "token uri": "https://oauth2.googleapis.com/token", "auth provider x509 cert url": "https://www.googleapis.com/oauth2/v1/certs", "client x509 cert url": "https://www.googleapis.com/robot/v1/metadata/x509/previewamericassdl-1710772997%40malachite-previewamericassdl.iam.gserviceaccount.com", "universe domain": "googleapis.com" }' customer id: a556547c-1cff-43ef-a2e4-cf5b12a865df endpoint: malachiteingestion-pa.googleapis.com ingestion labels: env: takeshi log type: CATCH ALL namespace: null raw log field: body retry on failure: enabled: true initial interval: 5s max elapsed time: 300s max interval: 30s sending queue: enabled: true num consumers: 10 queue size: 5000 storage: file storage/NA-SDL extensions: file storage/NA-SDL: compaction: directory: $OIQ OTEL COLLECTOR HOME/storage on rebound: true directory: $OIQ OTEL COLLECTOR HOME/storage service: extensions: - file storage/NA-SDL pipelines: logs/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ NA-SDL-0: receivers: - windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ application - windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ security - windowseventlog/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ system processors: - resourcedetection/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ - transform/source0 01HZ7NFAB5HZY6TPMGEYRN4XGZ processor0 logs exporters: - chronicle/NA-SDL Restart the collector once the configuration is complete, and verify that logs are populated in the Google SecOps dashboard .
- Configure Google Security Operations with VMware Engine This document describes how to configure Google Security Operations (Google SecOps) to improve the detection, investigation, and response to cybersecurity threats for virtual machines (VM) running on VMware Engine.
- The configuration example in this guide focuses on the following key integration points within a representative architecture: VMs and workload system logs : To capture logs originating from VMs and workloads, several architectural patterns exist.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Ingest VMware Engine logs and metrics Many organizations want to collect and analyze logs in a centralized "Single Pane of Glass." In Google Cloud, the Cloud Logging and Cloud Monitoring products provide services which can be used for centralized management of logs and metrics.
- As a best practice, align the approach for collecting and analyzing logs for workload VMs on VMware Engine with the approach for Compute Engine instances and your on-premises estate (if applicable).
- To collect platform logs, VMware Engine private clouds can forward Syslog logs to a centralized log aggregator.
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.

