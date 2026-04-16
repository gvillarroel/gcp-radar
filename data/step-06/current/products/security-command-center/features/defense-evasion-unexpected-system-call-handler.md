---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.931Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Defense Evasion: Unexpected system call handler"
feature_slug: "defense-evasion-unexpected-system-call-handler"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
keywords:
  - "defense"
  - "evasion"
  - "unexpected"
  - "system"
  - "call"
  - "handler"
  - "virtual"
  - "machine"
---

# Defense Evasion: Unexpected system call handler

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

A Virtual Machine Threat Detection detector that identifies an unexpected system call handler as a Linux kernel integrity evasion technique.

## Extended Definition

A Virtual Machine Threat Detection detector that identifies an unexpected system call handler as a Linux kernel integrity evasion technique.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defense Evasion: Unexpected system call handler KERNEL INTEGRITY TAMPERING System call handlers that aren't in the expected kernel or module code regions are present.
- Kernel integrity tampering Defense Evasion: Unexpected ftrace handler KERNEL INTEGRITY TAMPERING ftrace points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
- Defense Evasion: Unexpected kprobe handler KERNEL INTEGRITY TAMPERING kprobe points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
- Defense Evasion: Unexpected interrupt handler KERNEL INTEGRITY TAMPERING Interrupt handlers that aren't in the expected kernel or module code regions are present.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 260
- Re-rank relevance: N/A

Evidence snippets:
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.
- Defense Evasion: Unexpected kernel code modification Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler These modules analyze runtime Linux kernel integrity to detect common evasion techniques used by malware.
- February 28, 2024 Feature Virtual Machine Threat Detection , a built-in service of Security Command Center Premium, has launched a new detector, Defense Evasion: Rootkit , in Preview .
- Feature The Defense Evasion: Rootkit detector of Virtual Machine Threat Detection is in General Availability .

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- The presence of such activity suggests a potential effort to perform malicious code development or modification within the container, possibly as a defense evasion tactic to tamper with system components or client software.
- Defense Evasion: Disable or Modify Linux Audit System ( Preview ) DISABLE OR MODIFY LINUX AUDIT SYSTEM One of the audit system configuration or logging files was modified.
- Defense Evasion: Launch Code Compiler Tool In Container LAUNCH CODE COMPILER TOOL IN CONTAINER A process was initiated to launch a code compiler tool within the container environment, indicating a potential attempt to build or modify executable code in an isolated context.

