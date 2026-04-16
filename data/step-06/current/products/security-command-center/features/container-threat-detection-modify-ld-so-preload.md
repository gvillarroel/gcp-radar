---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.648Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection: Modify ld.so.preload"
feature_slug: "container-threat-detection-modify-ld-so-preload"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "container"
  - "threat"
  - "detection"
  - "modify"
  - "ld"
  - "so"
  - "preload"
  - "detector"
---

# Container Threat Detection: Modify ld.so.preload

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This detector identifies modifications to ld.so.preload.

## Extended Definition

This detector identifies modifications to ld.so.preload.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 327
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- This detector monitors attempts to modify the ld.so.preload file.
- Persistence: Modify ld.so.preload ( Preview ) MODIFY LD SO PRELOAD An attempt was made to modify the ld.so.preload file.
- Changes to ld.so.preload can be used by attackers to preload malicious shared libraries into a system's library set.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- July 17, 2025 Feature The following Container Threat Detection detectors for file monitoring are in Preview : Collection: Pam.d Modification Credential Access: Access Sensitive Files on Nodes Defense Evasion: Disable or modify Linux audit system Defense Evasion: Root Certificate Installed Execution: Suspicious Cron Modification Persistence: Modify ld.so.preload Change The following Security Command Center Enterprise pages in the Google Cloud console now fully replace equivalent pages that you accessed previously in the Google Security Operations console.
- Feature The following Event Threat Detection rules for Google Kubernetes Engine have been released to General Availability : GKE NODEPORT SERVICE CREATED GKE SENSITIVE NAMESPACE WORKLOAD TRIGGERED GKE STATIC POD CREATED GKE TOR PROXY IP REQUEST GKE WEBHOOK CONFIG CREATED YL2 GKE ANONYMOUS USERS GRANTED ACCESS YL2 GKE APPROVE CSR FORBIDDEN YL2 GKE CRB CLUSTERROLE AGGREGATION CONTROLLER YL2 GKE MANUALLY DELETED CSR YL2 GKE POD MASQUERADING YL2 GKE REVERSE SHELL POD YL2 GKE SERVICE ACCOUNT CREATION SENSITIVE NAMESPACE YL2 GKE SUSPICIOUS CRYPTOMINING POD March 13, 2025 Feature Security Command Center has released the Artifact Registry vulnerability assessment detection service, which includes the CONTAINER IMAGE VULNERABILITY detector.
- August 07, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47177) Execution: Socat Reverse Shell Detected Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Feature Risk reports generated and downloaded from Security Command Center include a system attack exposure page that shows the organization's exposure risk over time and lists the projects and resources that have the highest risk.
- June 03, 2025 Feature The following Container Threat Detection detectors for Google Kubernetes Engine have been released to General Availability : Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Execution: Fileless Execution in /memfd: Execution: Suspicious OpenSSL Shared Object Loaded Privilege Escalation: Fileless Execution in /dev/shm May 29, 2025 Change Domain tagging for toxic combinations and chokepoints has been improved to be more precise.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Runtime detectors Cloud Run Threat Detection includes the following runtime detectors: Display name API name Description Command and Control: Steganography Tool Detected CLOUD RUN STEGANOGRAPHY TOOL DETECTED A program identified as a steganography tool was executed, signaling a potential attempt to conceal communication or data transfer.
- Supported resources Cloud Run Threat Detection monitors the following resources: Cloud Run services Cloud Run jobs Supported execution environments The supported execution environments differ for runtime detectors and control plane detectors.
- The following is the execution path when events are detected: Cloud Run Threat Detection uses a watcher process to collect container and event information for the complete duration of a Cloud Run workload.
- Cloud Run Threat Detection runtime detectors monitor Cloud Run resources for suspicious binaries and libraries and use natural language processing (NLP) to detect malicious Bash and Python code.

