---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.001Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Virtual Machine Threat Detection"
feature_slug: "virtual-machine-threat-detection"
latest_feature_date: "2022-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
keywords:
  - "virtual"
  - "machine"
  - "threat"
  - "detection"
  - "detects"
  - "cryptocurrency"
  - "mining"
  - "software"
---

# Virtual Machine Threat Detection

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The service detects cryptocurrency mining software commonly found in compromised cloud environments; Built-in Security Command Center Premium service that detects cryptocurrency mining software in compromised cloud environments.

## Extended Definition

The service detects cryptocurrency mining software commonly found in compromised cloud environments; Built-in Security Command Center Premium service that detects cryptocurrency mining software in compromised cloud environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 272
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- VM Threat Detection cryptocurrency mining threat findings Category Module Description Execution: Cryptocurrency Mining Hash Match CRYPTOMINING HASH Matches memory hashes of running programs against known memory hashes of cryptocurrency mining software.
- This service scans virtual machines to detect potentially malicious applications, such as cryptocurrency mining software, kernel-mode rootkits, and malware running in compromised cloud environments.
- Cryptocurrency mining threat findings VM Threat Detection detects the following finding categories through hash matching or YARA rules.
- Event Threat Detection finding types Data destruction Event Threat Detection detects data destruction by examining audit logs from the Backup and DR Service Management Server for the following scenarios: Deletion of a backup image Deletion of all backup images associated with an application Deletion of a backup/recovery appliance Data exfiltration Event Threat Detection detects data exfiltration from BigQuery and Cloud SQL by examining audit logs for the following scenarios: An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a BigQuery data exfiltration by saving resources outside of your organization.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: N/A

Evidence snippets:
- During the Preview, VM Threat Detection detects cryptocurrency mining software, which is among the most common types of software installed in compromised cloud environments.
- VM Threat Detection detects cryptocurrency mining software, which is among the most common types of software installed in compromised cloud environments.
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.
- September 25, 2024 Breaking YARA rule names that appear in Virtual Machine Threat Detection findings will be renamed On or after October 28, 2024, YARA rule names that appear in Malware: Malicious file on disk (YARA) findings from Virtual Machine Threat Detection will be renamed.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Impact: Suspicious cryptocurrency mining activity using the Stratum Protocol CLOUD RUN SUSPICIOUS CRYPTO MINING ACTIVITY USING STRATUM PROTOCOL A process was detected communicating over the Stratum protocol, which is commonly used by cryptocurrency mining software.
- If Cloud Run Threat Detection detects an attack, it generates a finding in Security Command Center in near real-time.
- Execution: Modified Malicious Binary Executed CLOUD RUN MODIFIED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious binary is executed, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Modified Malicious Library Loaded CLOUD RUN MODIFIED MALICIOUS LIBRARY LOADED A library that meets the following conditions was loaded: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious library is loaded, it's a strong sign that an attacker has control of the workload and they're executing malicious software.

