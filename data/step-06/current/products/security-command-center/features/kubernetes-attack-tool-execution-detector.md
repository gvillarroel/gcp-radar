---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.778Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Kubernetes Attack Tool Execution detector"
feature_slug: "kubernetes-attack-tool-execution-detector"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview"
keywords:
  - "kubernetes"
  - "attack"
  - "tool"
  - "execution"
  - "detector"
  - "container"
  - "threat"
  - "detection"
---

# Kubernetes Attack Tool Execution detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This Container Threat Detection detector identifies when a Kubernetes attack tool is run inside a container.

## Extended Definition

This Container Threat Detection detector identifies when a Kubernetes attack tool is run inside a container.

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
- Final score: 291
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.
- The detector looks for Kubernetes attack tools that are being executed and are identified as potential threats based on intelligence data.
- Execution: Modified Malicious Binary Executed MODIFIED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious binary is executed, it's a strong sign that an attacker has control of the workload and they are executing malicious software.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execution: Modified Malicious Binary Executed CLOUD RUN MODIFIED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious binary is executed, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Modified Malicious Library Loaded CLOUD RUN MODIFIED MALICIOUS LIBRARY LOADED A library that meets the following conditions was loaded: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious library is loaded, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Added Malicious Binary Executed CLOUD RUN ADDED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Not part of the original container image If an added malicious binary is executed, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Added Malicious Library Loaded CLOUD RUN ADDED MALICIOUS LIBRARY LOADED A library that meets the following conditions was loaded: Identified as malicious based on threat intelligence Not part of the original container image If an added malicious library is loaded, it's a strong sign that an attacker has control of the workload and they're executing malicious software.

### "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 269
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execution: Kubernetes Attack Tool Execution ( Preview ) AGENT ENGINE KUBERNETES ATTACK TOOL EXECUTION A process executed a Kubernetes-specific attack tool, which threat intelligence identifies as a potential threat.
- Runtime threats include the execution of malicious binaries or scripts, container escapes, reverse shells, and the use of attack tools within the agent's environment.
- Runtime detectors Agent Engine Threat Detection includes the following runtime detectors: Display name Module name Description Execution: Added Malicious Binary Executed ( Preview ) AGENT ENGINE ADDED MALICIOUS BINARY EXECUTED A process executed a binary that threat intelligence identifies as malicious.
- Execution: Container Escape ( Preview ) AGENT ENGINE CONTAINER ESCAPE A process running inside the container attempted to bypass container isolation by using known exploit techniques or binaries, which threat intelligence identifies as potential threats.

