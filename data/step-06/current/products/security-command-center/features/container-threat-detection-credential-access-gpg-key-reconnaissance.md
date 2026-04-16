---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.690Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection: Credential Access - GPG Key Reconnaissance"
feature_slug: "container-threat-detection-credential-access-gpg-key-reconnaissance"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview"
keywords:
  - "container"
  - "threat"
  - "detection"
  - "credential"
  - "access"
  - "gpg"
  - "key"
  - "reconnaissance"
---

# Container Threat Detection: Credential Access - GPG Key Reconnaissance

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects GPG key reconnaissance activity on Google Kubernetes Engine.

## Extended Definition

Detects GPG key reconnaissance activity on Google Kubernetes Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- File monitoring detectors Container Threat Detection includes a number of detectors that monitor file operations looking for access or modification to critical system files.
- Credential Access: Search Private Keys or Passwords SEARCH PRIVATE KEYS OR PASSWORDS A command was executed to search for private keys, passwords, or other sensitive credentials within the container environment, indicating a potential attempt to harvest authentication data.
- Container Threat Detection detectors Container Threat Detection includes the following detectors: Detector Module Description Inputs to detection Added Binary Executed ADDED BINARY EXECUTED A binary that was not part of the original container image was executed.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Credential Access: Search Private Keys or Passwords CLOUD RUN SEARCH PRIVATE KEYS OR PASSWORDS A command was executed to search for private keys, passwords, or other sensitive credentials within the container environment, indicating a potential attempt to harvest authentication data.
- Credential Access: Find Google Cloud Credentials CLOUD RUN FIND GCP CREDENTIALS A command was executed to search for Google Cloud private keys, passwords, or other sensitive credentials within the container environment.
- The following is the execution path when events are detected: Cloud Run Threat Detection uses a watcher process to collect container and event information for the complete duration of a Cloud Run workload.
- Credential Access: GPG Key Reconnaissance CLOUD RUN GPG KEY RECONNAISSANCE A command was executed to search for GPG security keys.

### "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- In addition, control-plane detectors from Event Threat Detection analyze various audit logs (including Identity and Access Management, BigQuery, and Cloud SQL logs) and Vertex AI Agent Engine logs ( stdout and stderr ) to detect suspicious activity.
- Runtime detectors Agent Engine Threat Detection includes the following runtime detectors: Display name Module name Description Execution: Added Malicious Binary Executed ( Preview ) AGENT ENGINE ADDED MALICIOUS BINARY EXECUTED A process executed a binary that threat intelligence identifies as malicious.
- Execution: Container Escape ( Preview ) AGENT ENGINE CONTAINER ESCAPE A process running inside the container attempted to bypass container isolation by using known exploit techniques or binaries, which threat intelligence identifies as potential threats.
- Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview ) AGENT ENGINE ANOMALOUS ACCESS TO METADATA SERVICE Agent Engine Logs : Agent Engine Logs An AI agent fetched a service account token from a metadata server.

