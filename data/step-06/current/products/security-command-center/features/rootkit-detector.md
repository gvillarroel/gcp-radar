---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.785Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Rootkit detector"
feature_slug: "rootkit-detector"
latest_feature_date: "2024-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "rootkit"
  - "detector"
  - "virtual"
  - "machine"
  - "threat"
  - "detection"
  - "now"
  - "generally"
---

# Rootkit detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Virtual Machine Threat Detection's Rootkit detector is now generally available.

## Extended Definition

Virtual Machine Threat Detection's Rootkit detector is now generally available.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- February 28, 2024 Feature Virtual Machine Threat Detection , a built-in service of Security Command Center Premium, has launched a new detector, Defense Evasion: Rootkit , in Preview .
- Feature The Defense Evasion: Rootkit detector of Virtual Machine Threat Detection is in General Availability .
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.
- May 31, 2024 Feature VM Threat Detection's malware detector released to General Availability Virtual Machine Threat Detection , a built-in service of Security Command Center, launched the Malware: Malicious file on disk (YARA) detector to GA .

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Log type Threats detected Configuration required AlloyDB for PostgreSQL Data Access audit logs Credential Access: CloudDB Failed login from Anonymizing Proxy IP Initial Access: CloudDB Successful login from Anonymizing Proxy IP Privilege Escalation: AlloyDB Database Superuser Writes to User Tables Privilege Escalation: AlloyDB Over-Privileged Grant Activate Logging Data Access audit logs for AlloyDB for PostgreSQL To detect the Privilege Escalation: AlloyDB Database Superuser Writes to User Tables and Privilege Escalation: AlloyDB Over-Privileged Grant threats, you must also enable the pgAudit extension authlogs/authlog on virtual machines Brute force SSH Install the Ops Agent or the legacy Logging agent on your VM hosts Cloud DNS logging Log4j Malware: Bad Domain Malware: bad domain Malware: Cryptomining Bad Domain Turn on Cloud DNS logging See also Logs for network detection of malware .
- Finding categories that use these sensitive roles include: Persistence: IAM Anomalous Grant Subrule: external service account added to policy Subrule: external member added to policy Privilege Escalation: Sensitive Role Granted To Hybrid Group Privilege Escalation: Dormant Service Account Granted Sensitive Role Finding categories that use a subset of the sensitive roles include: Persistence: IAM Anomalous Grant Subrule: service account granted sensitive role to member The service account granted sensitive role to member subrule targets both external and internal members generally and therefore uses only a subset of sensitive roles, as explained in Event Threat Detection rules .
- Event Threat Detection applies detection logic and proprietary threat intelligence, including tripwire indicator matching, windowed profiling, advanced profiling, machine learning, and anomaly detection, to identify threats in near-real time.
- Event Threat Detection rules Rules define the type of threats that Event Threat Detection detects and the types of logs that must be enabled for detectors to work.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Armor exports two findings to Security Command Center: Allowed Traffic Spike Increasing Deny Ratio Virtual Machine Threat Detection Premium and Enterprise service tiers Virtual Machine Threat Detection is a built-in service of Security Command Center.
- VM Threat Detection kernel-mode rootkit threat findings Category Module Description Rootkit Defense Evasion: Rootkit KERNEL MEMORY TAMPERING KERNEL INTEGRITY TAMPERING A combination of signals matching a known kernel-mode rootkit is present.
- This service scans virtual machines to detect potentially malicious applications, such as cryptocurrency mining software, kernel-mode rootkits, and malware running in compromised cloud environments.
- The KERNEL MEMORY TAMPERING module detects threats by doing a hash comparison on the kernel code and kernel read-only data memory of a virtual machine.

