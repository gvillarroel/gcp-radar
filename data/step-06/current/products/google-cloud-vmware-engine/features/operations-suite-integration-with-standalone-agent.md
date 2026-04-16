---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.722Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "Operations Suite integration with standalone agent"
feature_slug: "operations-suite-integration-with-standalone-agent"
latest_feature_date: "2021-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone"
  - "https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
keywords:
  - "operations"
  - "suite"
  - "integration"
  - "standalone"
  - "agent"
  - "metrics"
  - "logs"
  - "sends"
---

# Operations Suite integration with standalone agent

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

A standalone metrics and logs agent sends vCenter and vSAN metrics and syslog messages to Google Cloud's operations suite.

## Extended Definition

A standalone metrics and logs agent sends vCenter and vSAN metrics and syslog messages to Google Cloud's operations suite.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)

## Supporting Pages

### "Set up Cloud Monitoring with a standalone agent \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On your agent host VM, set up access by copying and configuring the vmware vcenter.yaml file: Copy vmware vcenter.yaml to the config/metrics/sources directory: cp /opt/bpagent/config/metrics/examples/vmware vcenter.yaml /opt/bpagent/config/metrics/sources Edit the vmware vcenter.yaml to match the information in your VMware Engine environment: collection interval : 1m0s connection info : connection timeout : "30" enable performance counters : "true" host : VCSA FQDN password : SOLUTION USER PASSWORD performance counter end time : "" performance counter query timeout : "15" performance counter start time : "" port : "443" sdk path : "" ssl config : "No Verify" username : SOLUTION USER ACCOUNT Replace the following: VCSA FQDN : the fully qualified domain name (FQDN) of the vCenter Server Appliance in your private cloud SOLUTION USER PASSWORD : the password that corresponds to the solution user account being used SOLUTION USER ACCOUNT : the solution user account that the agent uses to report information Configure the agent to access the service account for reporting The standalone agent needs access to Google Cloud Observability to send metrics and logs.
- Collect metrics and logs To collect metrics or logs, the standalone agent must be running on your agent host VM.
- Regardless of where you create your agent host VM, it must meet the following requirements: Requirements Your agent host VM must meet the following system requirements: Supported Linux operating systems: Red Hat Enterprise Linux 9 SLES 15 Ubuntu 20.04 LTS, 22.04 LTS, or 24.04 LTS At least 4 GB of RAM 300 MB installation space available Installation directory set to /opt/bpagent curl CLI utility installed Your agent host VM also needs access to the following addresses to collect and push metrics and logs: Port 443 (TCP) for the HTTPS connection to your vCenter Server (default) monitoring.googleapis.com:443 (external access) logging.googleapis.com:443 (external access) Enabling metrics forwarding To obtain agent binaries and installation steps, contact Cloud Customer Care.
- The process of setting up your agent host VM and enabling metrics forwarding consists of the following steps: Specify a service account Configure the agent to access your private cloud for metrics Configure the agent to access the service account for reporting Collect metrics and logs Configure a private cloud for syslog forwarding Specify a service account Forwarding data from the agent to Cloud Monitoring requires a service account from your Google Cloud project.

### "Overview of VMware Engine monitoring \_|\_ Google Cloud VMware Engine \_\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring](https://docs.cloud.google.com/vmware-engine/docs/concepts-monitoring)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use Monitoring alerts Monitoring alerts let you use metrics from your standalone agent integration to trigger a notification based on custom thresholds or incidents.
- The following table lists the classes of available logs for VMware Engine and the severity of the reported events: The following table lists the available logs for VMware Engine and the severity of the reported events: VMware component Issue notification Resolution notification Action owner VMware Engine node ALERT NOTICE VMware Engine Service Operations VMware vCenter CRITICAL NOTICE VMware Engine Service Operations VMware NSX Manager CRITICAL NOTICE VMware Engine Service Operations VMware HCX CRITICAL NOTICE VMware Engine Service Operations vSAN utilization ALERT Not applicable Customer Cluster auto-scale Issue dependent Issue dependent Issue dependent Private cloud operations (create, delete, add and remove nodes) Issue dependent Issue dependent Issue dependent Stretched private cloud issues ALERT NOTICE VMware Engine Service Operations You can access logs for VMware Engine in the following ways: In Logs Explorer , by using the following log name: projects/ PROJECT ID /logs/vmwareengine.googleapis.com%2Falerts In the Google Cloud console, by going to the Dashboard page .
- Use of Cloud Logging by other VMware Engine features Other VMware Engine features also generate service-related logs, such as Update Center , which supports day-2 operations.
- Use Monitoring dashboards Monitoring dashboards help you monitor the performance of your infrastructure by aggregating information from multiple standalone agent sources.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Ingest VMware Engine logs and metrics Many organizations want to collect and analyze logs in a centralized "Single Pane of Glass." In Google Cloud, the Cloud Logging and Cloud Monitoring products provide services which can be used for centralized management of logs and metrics.
- The use of the Logging agent on VMware Engine matches the approach that is used for VMs on Compute Engine such that workloads on both platforms send their logs to Cloud Logging.
- To analyze Syslog messages, a Syslog aggregator such as Fluentd or the Standalone agent needs to be configured to relay the messages to Cloud Logging.

