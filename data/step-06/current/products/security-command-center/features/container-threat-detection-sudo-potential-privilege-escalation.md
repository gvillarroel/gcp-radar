---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.636Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection: Sudo Potential Privilege Escalation"
feature_slug: "container-threat-detection-sudo-potential-privilege-escalation"
latest_feature_date: "2025-08-07"
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
  - "sudo"
  - "potential"
  - "privilege"
  - "escalation"
  - "detector"
---

# Container Threat Detection: Sudo Potential Privilege Escalation

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This detector identifies potential sudo privilege escalation.

## Extended Definition

This detector identifies potential sudo privilege escalation.

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
- Final score: 301
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Container Threat Detection detectors Container Threat Detection includes the following detectors: Detector Module Description Inputs to detection Added Binary Executed ADDED BINARY EXECUTED A binary that was not part of the original container image was executed.
- This detection notifies an attempt of the exploitation of CVE-2019-14287, which allows privilege escalation through abusing the sudo command. sudo versions prior to v1.8.28 had an exploit that allowed a non-root user to gain root privileges.
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime detectors Cloud Run Threat Detection includes the following runtime detectors: Display name API name Description Command and Control: Steganography Tool Detected CLOUD RUN STEGANOGRAPHY TOOL DETECTED A program identified as a steganography tool was executed, signaling a potential attempt to conceal communication or data transfer.
- Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) CLOUD RUN SUDO POTENTIAL PRIVILEGE ESCALATION A non-root user has executed sudo or sudoedit with a pattern of arguments that attempt to escalate privileges.
- Supported resources Cloud Run Threat Detection monitors the following resources: Cloud Run services Cloud Run jobs Supported execution environments The supported execution environments differ for runtime detectors and control plane detectors.
- This rule detects an attempt to exploit CVE-2019-14287, a vulnerability that allows for privilege escalation by abusing the sudo command. sudo versions prior to v1.8.28 had an exploit that allowed a non-root user to gain root privileges.

### "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime detectors Agent Engine Threat Detection includes the following runtime detectors: Display name Module name Description Execution: Added Malicious Binary Executed ( Preview ) AGENT ENGINE ADDED MALICIOUS BINARY EXECUTED A process executed a binary that threat intelligence identifies as malicious.
- Execution: Container Escape ( Preview ) AGENT ENGINE CONTAINER ESCAPE A process running inside the container attempted to bypass container isolation by using known exploit techniques or binaries, which threat intelligence identifies as potential threats.
- In addition, control-plane detectors from Event Threat Detection analyze various audit logs (including Identity and Access Management, BigQuery, and Cloud SQL logs) and Vertex AI Agent Engine logs ( stdout and stderr ) to detect suspicious activity.
- When Agent Engine Threat Detection detects a potential threat, it does the following: Agent Engine Threat Detection uses a watcher process to collect event information while the agentic workload is running.

