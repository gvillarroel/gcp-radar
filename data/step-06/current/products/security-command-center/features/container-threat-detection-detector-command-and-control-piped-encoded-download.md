---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.590Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection detector: Command and Control: Piped Encoded Download"
feature_slug: "container-threat-detection-detector-command-and-control-piped-encoded-download"
latest_feature_date: "2025-12-16"
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
  - "detector"
  - "command"
  - "control"
  - "piped"
  - "encoded"
---

# Container Threat Detection detector: Command and Control: Piped Encoded Download

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This Container Threat Detection detector identifies command-and-control activity using piped encoded downloads.

## Extended Definition

This Container Threat Detection detector identifies command-and-control activity using piped encoded downloads.

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
- Final score: 278
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Container Threat Detection detectors Container Threat Detection includes the following detectors: Detector Module Description Inputs to detection Added Binary Executed ADDED BINARY EXECUTED A binary that was not part of the original container image was executed.
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.
- The detector monitors for Netcat execution within the container, because its use in production environments is uncommon and may signal an attempt to bypass security controls or execute remote commands.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 223
- Re-rank relevance: N/A

Evidence snippets:
- Runtime detectors Cloud Run Threat Detection includes the following runtime detectors: Display name API name Description Command and Control: Steganography Tool Detected CLOUD RUN STEGANOGRAPHY TOOL DETECTED A program identified as a steganography tool was executed, signaling a potential attempt to conceal communication or data transfer.
- Supported resources Cloud Run Threat Detection monitors the following resources: Cloud Run services Cloud Run jobs Supported execution environments The supported execution environments differ for runtime detectors and control plane detectors.
- Control plane detectors The following control plane detectors are available through Event Threat Detection.
- In addition, control plane detectors are available through Event Threat Detection .

### "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: N/A

Evidence snippets:
- In addition, control-plane detectors from Event Threat Detection analyze various audit logs (including Identity and Access Management, BigQuery, and Cloud SQL logs) and Vertex AI Agent Engine logs ( stdout and stderr ) to detect suspicious activity.
- Control-plane detectors This section describes the control-plane detectors from Event Threat Detection that are specifically designed for AI agents deployed to Vertex AI Agent Engine Runtime.
- Runtime detectors Agent Engine Threat Detection includes the following runtime detectors: Display name Module name Description Execution: Added Malicious Binary Executed ( Preview ) AGENT ENGINE ADDED MALICIOUS BINARY EXECUTED A process executed a binary that threat intelligence identifies as malicious.
- Agent Engine Threat Detection is a built-in service of Security Command Center that helps you detect and investigate potential attacks on AI agents that are deployed to Vertex AI Agent Engine Runtime.

