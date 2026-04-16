---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.693Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection: Defense Evasion - Base64 Encoded Python Script Executed"
feature_slug: "container-threat-detection-defense-evasion-base64-encoded-python-script-executed"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "container"
  - "threat"
  - "detection"
  - "defense"
  - "evasion"
  - "base64"
  - "encoded"
  - "python"
---

# Container Threat Detection: Defense Evasion - Base64 Encoded Python Script Executed

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects execution of base64-encoded Python scripts on Google Kubernetes Engine.

## Extended Definition

Detects execution of base64-encoded Python scripts on Google Kubernetes Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Defense Evasion: Base64 Encoded Python Script Executed BASE64 ENCODED PYTHON SCRIPT EXECUTED A process was executed that contains an argument that is a base64 encoded python script.
- Container Threat Detection includes several detection capabilities, including suspicious binaries and libraries, and uses natural language processing (NLP) to detect malicious Bash and Python code.
- Defense Evasion: Base64 Encoded Shell Script Executed BASE64 ENCODED SHELL SCRIPT EXECUTED A process was executed that contains an argument that is a base64 encoded shell script.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defense Evasion: Base64 Encoded Python Script Executed CLOUD RUN BASE64 ENCODED PYTHON SCRIPT EXECUTED A process was executed that contains an argument that is a base64- encoded python script.
- Defense Evasion: Base64 Encoded Shell Script Executed CLOUD RUN BASE64 ENCODED SHELL SCRIPT EXECUTED A process was executed that contains an argument that is a base64- encoded shell script.
- Defense Evasion: Launch Code Compiler Tool In Container CLOUD RUN LAUNCH CODE COMPILER TOOL IN CONTAINER A process was initiated to launch a code compiler tool within the container environment, indicating a potential attempt to build or modify executable code in an isolated context.
- The following is the execution path when events are detected: Cloud Run Threat Detection uses a watcher process to collect container and event information for the complete duration of a Cloud Run workload.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- June 03, 2025 Feature The following Container Threat Detection detectors for Google Kubernetes Engine have been released to General Availability : Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Execution: Fileless Execution in /memfd: Execution: Suspicious OpenSSL Shared Object Loaded Privilege Escalation: Fileless Execution in /dev/shm May 29, 2025 Change Domain tagging for toxic combinations and chokepoints has been improved to be more precise.
- July 17, 2025 Feature The following Container Threat Detection detectors for file monitoring are in Preview : Collection: Pam.d Modification Credential Access: Access Sensitive Files on Nodes Defense Evasion: Disable or modify Linux audit system Defense Evasion: Root Certificate Installed Execution: Suspicious Cron Modification Persistence: Modify ld.so.preload Change The following Security Command Center Enterprise pages in the Google Cloud console now fully replace equivalent pages that you accessed previously in the Google Security Operations console.
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.
- December 16, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Command and Control: Piped Encoded Code Execution Detected Command and Control: Piped Encoded Download December 15, 2025 Feature You can configure Model Armor floor settings for Google-managed Model Context Protocol (MCP) servers to define baseline safety and security filters.

