---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.719Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Standalone agent integration with Cloud Operations"
feature_slug: "standalone-agent-integration-with-cloud-operations"
latest_feature_date: "2021-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring"
keywords:
  - "standalone"
  - "agent"
  - "integration"
  - "operations"
  - "metrics"
  - "logs"
  - "integrates"
  - "vmware"
---

# Standalone agent integration with Cloud Operations

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

A standalone metrics and logs agent integrates VMware Engine with Cloud Operations to ingest vCenter and vSAN metrics and syslog messages.

## Extended Definition

A standalone metrics and logs agent integrates VMware Engine with Cloud Operations to ingest vCenter and vSAN metrics and syslog messages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)

## Supporting Pages

### "Set up Cloud Monitoring with a standalone agent \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On your agent host VM, set up access by copying and configuring the vmware vcenter.yaml file: Copy vmware vcenter.yaml to the config/metrics/sources directory: cp /opt/bpagent/config/metrics/examples/vmware vcenter.yaml /opt/bpagent/config/metrics/sources Edit the vmware vcenter.yaml to match the information in your VMware Engine environment: collection interval : 1m0s connection info : connection timeout : "30" enable performance counters : "true" host : VCSA FQDN password : SOLUTION USER PASSWORD performance counter end time : "" performance counter query timeout : "15" performance counter start time : "" port : "443" sdk path : "" ssl config : "No Verify" username : SOLUTION USER ACCOUNT Replace the following: VCSA FQDN : the fully qualified domain name (FQDN) of the vCenter Server Appliance in your private cloud SOLUTION USER PASSWORD : the password that corresponds to the solution user account being used SOLUTION USER ACCOUNT : the solution user account that the agent uses to report information Configure the agent to access the service account for reporting The standalone agent needs access to Google Cloud Observability to send metrics and logs.
- Connect to your agent host VM and use the following commands to start or stop the agent: To start the agent on your host VM, run the following: systemctl start bpagent To stop the agent on your host VM, run the following: systemctl stop bpagent Configure a private cloud for syslog forwarding VMware Engine integrates with Cloud Logging by forwarding syslog messages from vCenter and NSX to the standalone agent.
- Note: Use of the standalone agent itself comes at no additional cost to VMware Engine customers, but metrics collected through the agent are charged at standard custom metric rates .
- Collect metrics and logs To collect metrics or logs, the standalone agent must be running on your agent host VM.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Ingest VMware Engine logs and metrics Many organizations want to collect and analyze logs in a centralized "Single Pane of Glass." In Google Cloud, the Cloud Logging and Cloud Monitoring products provide services which can be used for centralized management of logs and metrics.
- The use of the Logging agent on VMware Engine matches the approach that is used for VMs on Compute Engine such that workloads on both platforms send their logs to Cloud Logging.
- Use the Cloud Logging agent for workload VM logging VMware Engine workload VMs can send logs directly to Cloud Logging API, using the Logging agent.

### "Overview of VMware Engine monitoring \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Monitoring alerts Monitoring alerts let you use metrics from your standalone agent integration to trigger a notification based on custom thresholds or incidents.
- The following table lists the classes of available logs for VMware Engine and the severity of the reported events: The following table lists the available logs for VMware Engine and the severity of the reported events: VMware component Issue notification Resolution notification Action owner VMware Engine node ALERT NOTICE VMware Engine Service Operations VMware vCenter CRITICAL NOTICE VMware Engine Service Operations VMware NSX Manager CRITICAL NOTICE VMware Engine Service Operations VMware HCX CRITICAL NOTICE VMware Engine Service Operations vSAN utilization ALERT Not applicable Customer Cluster auto-scale Issue dependent Issue dependent Issue dependent Private cloud operations (create, delete, add and remove nodes) Issue dependent Issue dependent Issue dependent Stretched private cloud issues ALERT NOTICE VMware Engine Service Operations You can access logs for VMware Engine in the following ways: In Logs Explorer , by using the following log name: projects/ PROJECT ID /logs/vmwareengine.googleapis.com%2Falerts In the Google Cloud console, by going to the Dashboard page .
- Use of Cloud Logging by other VMware Engine features Other VMware Engine features also generate service-related logs, such as Update Center , which supports day-2 operations.
- VMware component Essential Contacts notification category Action owner VMware Engine node Technical VMware Engine Service Operations VMware vCenter Technical VMware Engine Service Operations VMware NSX Manager Technical VMware Engine Service Operations VMware HCX Technical VMware Engine Service Operations vSAN utilization Technical Customer Cluster auto-scale Technical Issue dependent Private cloud operations (create, delete, add and remove nodes) Technical Issue dependent Stretched private cloud issues Technical VMware Engine Service Operations Use of Essential Contacts by other VMware Engine features Other VMware Engine features also use service-related automatic email notifications, such as Update Center , which supports day-2 operations.

