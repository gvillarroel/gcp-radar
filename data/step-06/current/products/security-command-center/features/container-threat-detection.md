---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.152Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection"
feature_slug: "container-threat-detection"
latest_feature_date: "2020-05-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview"
keywords:
  - "container"
  - "threat"
  - "detection"
  - "supports"
  - "specific"
  - "kubernetes"
  - "engine"
  - "versions"
---

# Container Threat Detection

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Container Threat Detection supports specific Google Kubernetes Engine versions on the Regular and Rapid channels.

## Extended Definition

Container Threat Detection supports specific Google Kubernetes Engine versions on the Regular and Rapid channels.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 307
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Container Threat Detection detectors Container Threat Detection includes the following detectors: Detector Module Description Inputs to detection Added Binary Executed ADDED BINARY EXECUTED A binary that was not part of the original container image was executed.
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.
- Report environment variables ( REPORT ENVIRONMENT VARIABLES ) Report CLI arguments ( REPORT CLI ARGUMENTS ) For instructions, see the following: Exclude environment variables from Container Threat Detection findings .

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Feature Container Threat Detection currently supports the following Kubernetes Engine versions on the Regular and Rapid channels : = 1.15.9-gke.12 = 1.16.5-gke.2 = 1.17 In a future update, Container Threat Detection will support version 1.14 and the Stable channel.
- Change Container Threat Detection now supports Google Kubernetes Engine (GKE) versions on the Stable channel.
- Feature The following Event Threat Detection rules for Google Kubernetes Engine have been released to General Availability : GKE NODEPORT SERVICE CREATED GKE SENSITIVE NAMESPACE WORKLOAD TRIGGERED GKE STATIC POD CREATED GKE TOR PROXY IP REQUEST GKE WEBHOOK CONFIG CREATED YL2 GKE ANONYMOUS USERS GRANTED ACCESS YL2 GKE APPROVE CSR FORBIDDEN YL2 GKE CRB CLUSTERROLE AGGREGATION CONTROLLER YL2 GKE MANUALLY DELETED CSR YL2 GKE POD MASQUERADING YL2 GKE REVERSE SHELL POD YL2 GKE SERVICE ACCOUNT CREATION SENSITIVE NAMESPACE YL2 GKE SUSPICIOUS CRYPTOMINING POD March 13, 2025 Feature Security Command Center has released the Artifact Registry vulnerability assessment detection service, which includes the CONTAINER IMAGE VULNERABILITY detector.
- June 03, 2025 Feature The following Container Threat Detection detectors for Google Kubernetes Engine have been released to General Availability : Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Execution: Fileless Execution in /memfd: Execution: Suspicious OpenSSL Shared Object Loaded Privilege Escalation: Fileless Execution in /dev/shm May 29, 2025 Change Domain tagging for toxic combinations and chokepoints has been improved to be more precise.

### "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execution: Kubernetes Attack Tool Execution ( Preview ) AGENT ENGINE KUBERNETES ATTACK TOOL EXECUTION A process executed a Kubernetes-specific attack tool, which threat intelligence identifies as a potential threat.
- Control-plane detectors This section describes the control-plane detectors from Event Threat Detection that are specifically designed for AI agents deployed to Vertex AI Agent Engine Runtime.
- Runtime detectors Agent Engine Threat Detection includes the following runtime detectors: Display name Module name Description Execution: Added Malicious Binary Executed ( Preview ) AGENT ENGINE ADDED MALICIOUS BINARY EXECUTED A process executed a binary that threat intelligence identifies as malicious.
- Execution: Container Escape ( Preview ) AGENT ENGINE CONTAINER ESCAPE A process running inside the container attempted to bypass container isolation by using known exploit techniques or binaries, which threat intelligence identifies as potential threats.

