---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:51:38.697Z"
product_name: "Google Cloud VMware Engine"
product_slug: "google-cloud-vmware-engine"
feature_name: "ESXi syslog forwarding"
feature_slug: "esxi-syslog-forwarding"
latest_feature_date: "2023-06-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog"
  - "https://docs.cloud.google.com/vmware-engine/docs/best-practices-security"
  - "https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone"
keywords:
  - "esxi"
  - "syslog"
  - "forwarding"
  - "sends"
  - "distributed"
  - "firewall"
  - "logs"
  - "improve"
---

# ESXi syslog forwarding

Product: Google Cloud VMware Engine
Coverage: MEDIUM

## Step 02 Summary

ESXi syslog forwarding sends ESXi and distributed firewall logs to improve visibility into VMware Engine security events.

## Extended Definition

ESXi syslog forwarding sends ESXi and distributed firewall logs to improve visibility into VMware Engine security events.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
- [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)

## Supporting Pages

### "Forwarding syslog messages to a remote server \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-forward-syslog)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For vCenter and ESXi logs, including NSX Distributed Firewall (DFW) Log, use VMware Engine .
- The subtask for logging server creation displays. gcloud To configure ESXi or vCenter to forward logs to the syslog server by using the Google Cloud CLI, use the gcloud vmware private-clouds logging-servers create command . gcloud vmware private-clouds logging-servers create LOGGING SERVER ID \ --project= PROJECT ID \ --hostname=" HOST NAME " \ --port=" PORT " \ --source-type=" SOURCE TYPE " \ --protocol=" PROTOCOL " \ --private-cloud= PRIVATE CLOUD ID \ --location= ZONE Replace the following: LOGGING SERVER ID : the logging server ID for this request.
- API To configure ESXi or vCenter to forward logs to the syslog server by using the VMware Engine API, make a POST request: GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT ID /locations/ ZONE /privateClouds/ PRIVATE CLOUD ID /loggingServers?logging server id= LOGGING SERVER ID " -d '{ "hostname": " HOST NAME ", "port": " PORT ", "sourceType": " SOURCE TYPE ", "protocol": " PROTOCOL " }' Replace the following: PROJECT ID : the project for this request.
- Forward logs by using VMware Engine To configure ESXi or vCenter to forward logs to the syslog server by using the Google Cloud console, Google Cloud CLI or VMware Engine API, do the following.

### "Best practices for VMware Engine security \_|\_ Google Cloud VMware Engine\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/best-practices-security](https://docs.cloud.google.com/vmware-engine/docs/best-practices-security)
- Source ID: `site-docs-reference-required-4`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ESXi logs - these can be collected using remote syslog configuration, however, you need to file a support request with Google Cloud to configure ESXi syslog forwarding.
- Task Topic VMware Engine Networking Identify and understand all traffic flows of your environment Use VMware Engine's Public IP Service for internet data transfer in Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Apply Zero Trust Security principles and micro-segmentation in NSX Deploy a third-party firewall appliance from the Cloud Marketplace portal for IPS/IDS capabilities Use Google Cloud Armor to help protect web services on VMware Engine from DDoS attacks Connect to Google Cloud Services privately without internet access Encrypt the communication between your on-premises environment and Google Cloud Help protect your data from exfiltration using VPC Service Controls VMware Engine IAM and Permissions Use predefined roles or custom roles to grant access to VMware Engine Restrict and actively audit administrator access to VMware Engine Configure an LDAP or Active Directory identity source Rotate the passwords of built-in VMware Engine service accounts VMware Engine Logging and Monitoring Ingest VMware Engine logs and metrics Use the Cloud Logging agent for workload VM logging Apply equivalent capabilities of Access Transparency and Access Approval policies VMware Engine Encryption Use a Google-managed Key provider enabled for vSAN encryption at rest Automate the rotation of encryption keys according to your organization's standards VMware Engine Backup and Disaster Recovery Backup your workloads using Backup and DR Implement disaster recovery with Backup and DR What's next Try out Google Cloud VMware Engine for yourself.
- Separate north-south and east-west firewall rules on gateway and distributed firewall in VMware Engine NSX Configure the distributed firewall (DFW) in NSX on the tier-1 logical router to segment internal traffic between your virtual layer 2 domains.
- For access transparency equivalency you need to consider several sources of logs, including: vCenter logs - exportable using remote syslog server configuration.

### "Set up Cloud Monitoring with a standalone agent \_|\_ Google Cloud VMware\

- URL: [https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone](https://docs.cloud.google.com/vmware-engine/docs/environment/howto-cloud-monitoring-standalone)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The process of setting up your agent host VM and enabling metrics forwarding consists of the following steps: Specify a service account Configure the agent to access your private cloud for metrics Configure the agent to access the service account for reporting Collect metrics and logs Configure a private cloud for syslog forwarding Specify a service account Forwarding data from the agent to Cloud Monitoring requires a service account from your Google Cloud project.
- Regardless of where you create your agent host VM, it must meet the following requirements: Requirements Your agent host VM must meet the following system requirements: Supported Linux operating systems: Red Hat Enterprise Linux 9 SLES 15 Ubuntu 20.04 LTS, 22.04 LTS, or 24.04 LTS At least 4 GB of RAM 300 MB installation space available Installation directory set to /opt/bpagent curl CLI utility installed Your agent host VM also needs access to the following addresses to collect and push metrics and logs: Port 443 (TCP) for the HTTPS connection to your vCenter Server (default) monitoring.googleapis.com:443 (external access) logging.googleapis.com:443 (external access) Enabling metrics forwarding To obtain agent binaries and installation steps, contact Cloud Customer Care.
- Connect to your agent host VM and use the following commands to start or stop the agent: To start the agent on your host VM, run the following: systemctl start bpagent To stop the agent on your host VM, run the following: systemctl stop bpagent Configure a private cloud for syslog forwarding VMware Engine integrates with Cloud Logging by forwarding syslog messages from vCenter and NSX to the standalone agent.
- Update the port number to 514 as follows: - id: vmware-vcenter-logs A syslog address of the form : listen address: 0.0.0.0:514 Enable TLS for the TCP listener enable tls: false Caution: Be aware of your service account key refresh intervals.

