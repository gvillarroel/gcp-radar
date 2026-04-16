---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.663Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Virtual Machine Threat Detection: Unexpected kernel code modification detector"
feature_slug: "virtual-machine-threat-detection-unexpected-kernel-code-modification-detector"
latest_feature_date: "2025-06-30"
deprecation_date: "2025-06-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "virtual"
  - "machine"
  - "threat"
  - "detection"
  - "unexpected"
  - "kernel"
  - "code"
  - "modification"
---

# Virtual Machine Threat Detection: Unexpected kernel code modification detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

This detector has been shut down; deprecated on 2025-06-30.

## Extended Definition

This detector has been shut down; deprecated on 2025-06-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Container Threat Detection detection instrumentation collects low-level behavior in the guest kernel and performs natural language processing on code to detect the following events: Added Binary Executed Added Library Loaded Command and Control: Steganography Tool Detected ( Preview ) Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Credential Access: Search Private Keys or Passwords Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Defense Evasion: Launch Code Compiler Tool In Container ( Preview ) Execution: Added Malicious Binary Executed Execution: Added Malicious Library Loaded Execution: Built in Malicious Binary Executed Execution: Container Escape Execution: Fileless Execution in /memfd: Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Kubernetes Attack Tool Execution Execution: Local Reconnaissance Tool Execution Execution: Malicious Python executed Execution: Modified Malicious Binary Executed Execution: Modified Malicious Library Loaded Execution: Netcat Remote Code Execution In Container Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) Execution: Possible Remote Command Execution Detected ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Socat Reverse Shell Detected Execution: Suspicious OpenSSL Shared Object Loaded Exfiltration: Launch Remote File Copy Tools in Container Impact: Detect Malicious Cmdlines ( Preview ) Impact: Remove Bulk Data From Disk Impact: Suspicious crypto mining activity using the Stratum Protocol Malicious Script Executed Malicious URL Observed Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Fileless Execution in /dev/shm Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Reverse Shell Unexpected Child Shell Learn more about Container Threat Detection .
- The KERNEL MEMORY TAMPERING module detects threats by doing a hash comparison on the kernel code and kernel read-only data memory of a virtual machine.
- Cloud Armor exports two findings to Security Command Center: Allowed Traffic Spike Increasing Deny Ratio Virtual Machine Threat Detection Premium and Enterprise service tiers Virtual Machine Threat Detection is a built-in service of Security Command Center.
- The attempt to deploy the Container Threat Detection DaemonSet resulted in the following error: Failed to pull image "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": rpc error: code = NotFound desc = failed to pull and unpack image "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": failed to resolve reference "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00: not found Pricing tier: Premium Supported assets container.googleapis.com/Cluster Batch scans : Every 30 minutes Fix this finding build Critical Container Threat Detection Blocked By Admission Controller KTD BLOCKED BY ADMISSION CONTROLLER Finding description: Container Threat Detection can't be enabled on a Kubernetes cluster.

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Container Threat Detection includes several detection capabilities, including suspicious binaries and libraries, and uses natural language processing (NLP) to detect malicious Bash and Python code.
- File monitoring detectors Container Threat Detection includes a number of detectors that monitor file operations looking for access or modification to critical system files.
- How Container Threat Detection works Container Threat Detection detection instrumentation collects low-level behavior in the guest kernel and executed scripts.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.
- Defense Evasion: Unexpected kernel code modification Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler These modules analyze runtime Linux kernel integrity to detect common evasion techniques used by malware.
- September 25, 2024 Breaking YARA rule names that appear in Virtual Machine Threat Detection findings will be renamed On or after October 28, 2024, YARA rule names that appear in Malware: Malicious file on disk (YARA) findings from Virtual Machine Threat Detection will be renamed.
- May 31, 2024 Feature VM Threat Detection's malware detector released to General Availability Virtual Machine Threat Detection , a built-in service of Security Command Center, launched the Malware: Malicious file on disk (YARA) detector to GA .

