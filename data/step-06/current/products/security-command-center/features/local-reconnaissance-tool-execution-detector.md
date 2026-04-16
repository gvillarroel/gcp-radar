---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.779Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Local Reconnaissance Tool Execution detector"
feature_slug: "local-reconnaissance-tool-execution-detector"
latest_feature_date: "2024-12-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview"
keywords:
  - "local"
  - "reconnaissance"
  - "tool"
  - "execution"
  - "detector"
  - "container"
  - "threat"
  - "detection"
---

# Local Reconnaissance Tool Execution detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This Container Threat Detection detector identifies when a local reconnaissance tool is executed inside a container.

## Extended Definition

This Container Threat Detection detector identifies when a local reconnaissance tool is executed inside a container.

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
- Execution: Local Reconnaissance Tool Execution LOCAL RECONNAISSANCE TOOL EXECUTION A local reconnaissance tool not typically associated with the container or environment was executed, suggesting an attempt to gather internal system information.
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.
- Container Threat Detection detectors Container Threat Detection includes the following detectors: Detector Module Description Inputs to detection Added Binary Executed ADDED BINARY EXECUTED A binary that was not part of the original container image was executed.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execution: Local Reconnaissance Tool Execution CLOUD RUN LOCAL RECONNAISSANCE TOOL EXECUTION A local reconnaissance tool not typically associated with the container or environment was executed, suggesting an attempt to gather internal system information.
- Runtime detectors Cloud Run Threat Detection includes the following runtime detectors: Display name API name Description Command and Control: Steganography Tool Detected CLOUD RUN STEGANOGRAPHY TOOL DETECTED A program identified as a steganography tool was executed, signaling a potential attempt to conceal communication or data transfer.
- Supported resources Cloud Run Threat Detection monitors the following resources: Cloud Run services Cloud Run jobs Supported execution environments The supported execution environments differ for runtime detectors and control plane detectors.
- The following is the execution path when events are detected: Cloud Run Threat Detection uses a watcher process to collect container and event information for the complete duration of a Cloud Run workload.

### "Agent Engine Threat Detection overview \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/agent-engine-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 257
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Runtime detectors Agent Engine Threat Detection includes the following runtime detectors: Display name Module name Description Execution: Added Malicious Binary Executed ( Preview ) AGENT ENGINE ADDED MALICIOUS BINARY EXECUTED A process executed a binary that threat intelligence identifies as malicious.
- Execution: Local Reconnaissance Tool Execution ( Preview ) AGENT ENGINE LOCAL RECONNAISSANCE TOOL EXECUTION A process executed a local reconnaissance tool that is not typically part of the agentic workload.
- Runtime threats include the execution of malicious binaries or scripts, container escapes, reverse shells, and the use of attack tools within the agent's environment.
- Execution: Container Escape ( Preview ) AGENT ENGINE CONTAINER ESCAPE A process running inside the container attempted to bypass container isolation by using known exploit techniques or binaries, which threat intelligence identifies as potential threats.

