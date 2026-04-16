---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.755Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Exfiltration: Launch Remote File Copy Tools in Container"
feature_slug: "exfiltration-launch-remote-file-copy-tools-in-container"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
keywords:
  - "exfiltration"
  - "launch"
  - "remote"
  - "file"
  - "copy"
  - "tools"
  - "container"
  - "detects"
---

# Exfiltration: Launch Remote File Copy Tools in Container

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects remote file copy tools launched inside a container as a possible exfiltration attempt.

## Extended Definition

Detects remote file copy tools launched inside a container as a possible exfiltration attempt.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 299
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Exfiltration: Launch Remote File Copy Tools in Container LAUNCH REMOTE FILE COPY TOOLS IN CONTAINER A remote file copy tool execution was detected within the container, indicating potential data exfiltration, lateral movement, or the deployment of malicious payloads.
- Detecting the use of remote file copy tools is crucial for preventing data breaches, unauthorized access, and further compromise of the container and potentially the host system.
- This detector monitors for the execution of known remote file copy tools within the container environment.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container Threat Detection detection instrumentation collects low-level behavior in the guest kernel and performs natural language processing on code to detect the following events: Added Binary Executed Added Library Loaded Command and Control: Steganography Tool Detected ( Preview ) Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Credential Access: Search Private Keys or Passwords Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Defense Evasion: Launch Code Compiler Tool In Container ( Preview ) Execution: Added Malicious Binary Executed Execution: Added Malicious Library Loaded Execution: Built in Malicious Binary Executed Execution: Container Escape Execution: Fileless Execution in /memfd: Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Kubernetes Attack Tool Execution Execution: Local Reconnaissance Tool Execution Execution: Malicious Python executed Execution: Modified Malicious Binary Executed Execution: Modified Malicious Library Loaded Execution: Netcat Remote Code Execution In Container Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) Execution: Possible Remote Command Execution Detected ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Socat Reverse Shell Detected Execution: Suspicious OpenSSL Shared Object Loaded Exfiltration: Launch Remote File Copy Tools in Container Impact: Detect Malicious Cmdlines ( Preview ) Impact: Remove Bulk Data From Disk Impact: Suspicious crypto mining activity using the Stratum Protocol Malicious Script Executed Malicious URL Observed Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Fileless Execution in /dev/shm Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Reverse Shell Unexpected Child Shell Learn more about Container Threat Detection .
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- Event Threat Detection finding types Data destruction Event Threat Detection detects data destruction by examining audit logs from the Backup and DR Service Management Server for the following scenarios: Deletion of a backup image Deletion of all backup images associated with an application Deletion of a backup/recovery appliance Data exfiltration Event Threat Detection detects data exfiltration from BigQuery and Cloud SQL by examining audit logs for the following scenarios: An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a BigQuery data exfiltration by saving resources outside of your organization.
- Standard, Premium, and Enterprise service tiers The Vulnerability Assessment for Google Cloud service detects software vulnerabilities in the following resources on the Google Cloud platform: Running Compute Engine VM instances Nodes in GKE Standard clusters Containers running in GKE Standard and GKE Autopilot clusters For each detected vulnerability, Vulnerability Assessment for Google Cloud generates a Vulnerability class finding in the Software vulnerability or OS vulnerability finding category in Security Command Center.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- Exfiltration: Launch Remote File Copy Tools in Container CLOUD RUN LAUNCH REMOTE FILE COPY TOOLS IN CONTAINER A remote file copy tool execution was detected within the container, indicating potential data exfiltration, lateral movement, or the deployment of malicious payloads.
- Detecting the use of remote file copy tools is crucial for preventing data breaches, unauthorized access, and further compromise of the container and potentially the host system.
- Execution: Netcat Remote Code Execution in Container CLOUD RUN NETCAT REMOTE CODE EXECUTION IN CONTAINER Netcat, a versatile networking utility, was executed within the container environment, potentially indicating an attempt to establish unauthorized remote access or exfiltrate data.
- Defense Evasion: Launch Code Compiler Tool In Container CLOUD RUN LAUNCH CODE COMPILER TOOL IN CONTAINER A process was initiated to launch a code compiler tool within the container environment, indicating a potential attempt to build or modify executable code in an isolated context.

