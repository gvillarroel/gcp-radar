---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.662Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Virtual Machine Threat Detection: Defense Evasion - Unexpected system call handler"
feature_slug: "virtual-machine-threat-detection-defense-evasion-unexpected-system-call-handler"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "virtual"
  - "machine"
  - "threat"
  - "detection"
  - "defense"
  - "evasion"
  - "unexpected"
  - "system"
---

# Virtual Machine Threat Detection: Defense Evasion - Unexpected system call handler

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects unexpected system call handlers on virtual machines.

## Extended Definition

Detects unexpected system call handlers on virtual machines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- The presence of such activity suggests a potential effort to perform malicious code development or modification within the container, possibly as a defense evasion tactic to tamper with system components or client software.
- File monitoring detectors Container Threat Detection includes a number of detectors that monitor file operations looking for access or modification to critical system files.
- Defense Evasion: Disable or Modify Linux Audit System ( Preview ) DISABLE OR MODIFY LINUX AUDIT SYSTEM One of the audit system configuration or logging files was modified.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- Log type Threats detected Configuration required Agent Engine Logs Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview ) Discovery: Evidence of Port Scanning from AI Agent ( Preview ) None Backup and DR Admin Activity audit logs Impact: Google Cloud Backup and DR expire all images Impact: Deleted Google Cloud Backup and DR Backup Impact: Deleted Google Cloud Backup and DR host Impact: Deleted Google Cloud Backup and DR plan association Impact: Deleted Google Cloud Backup and DR Vault Impact: Google Cloud Backup and DR delete policy Impact: Google Cloud Backup and DR delete profile Impact: Google Cloud Backup and DR delete template Impact: Google Cloud Backup and DR expire image Impact: Google Cloud Backup and DR reduce backup expiration Impact: Google Cloud Backup and DR reduce backup frequency Impact: Google Cloud Backup and DR remove appliance Impact: Google Cloud Backup and DR remove plan Inhibit system recovery: Google Cloud Backup and DR delete storage pool None BigQueryAuditMetadata Data Access logs Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview ) Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview ) Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview ) Exfiltration: BigQuery Data Exfiltration Exfiltration: BigQuery Data Extraction Exfiltration: BigQuery Data to Google Drive Exfiltration: Move to Public BigQuery resource ( Preview ) None Generic Admin Activity audit logs Defense Evasion: GCS Bucket IP Filtering Modified Defense Evasion: Project HTTP Policy Block Disabled Discovery: AI Agent Unauthorized Service Account API Call ( Preview ) Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview ) Initial Access: Dormant Service Account Action Initial Access: Dormant Service Account Activity in AI Service Initial Access: Dormant Service Account Key Created Initial Access: Excessive Permission Denied Actions Initial Access: Leaked Service Account Key Used Lateral Movement: Modified Boot Disk Attached to Instance ( Preview ) Persistence: GCE Admin Added SSH Key Persistence: GCE Admin Added Startup Script Persistence: New AI API Method Persistence: New API Method Persistence: New Geography Persistence: New Geography for AI Service Persistence: New User Agent Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity None Google Kubernetes Engine (GKE) Admin Activity audit logs Credential Access: Failed Attempt to Approve Kubernetes Certificate Signing Request (CSR) Credential Access: Manually Approved Kubernetes Certificate Signing Request (CSR) ( Preview ) Defense Evasion: Anonymous Sessions Granted Cluster Admin Access Defense Evasion: Manually Deleted Certificate Signing Request (CSR) Defense Evasion: Potential Kubernetes Pod Masquerading Defense Evasion: Static Pod Created Execution: GKE launch excessively capable container ( Preview ) Execution: Kubernetes Pod Created with Potential Reverse Shell Arguments Execution: Suspicious Exec or Attach to a System Pod ( Preview ) Execution: Workload triggered in sensitive namespace Impact: GKE kube-dns modification detected ( Preview ) Impact: Suspicious Kubernetes Container Names - Cryptocurrency Mining Initial Access: Anonymous GKE Resource Created from the Internet ( Preview ) Initial Access: GKE NodePort service created Initial Access: GKE Resource Modified Anonymously from the Internet ( Preview ) Initial Access: Successful API call made from a TOR proxy IP Persistence: GKE Webhook Configuration Detected Persistence: Service Account Created in sensitive namespace Privilege Escalation: Changes to sensitive Kubernetes RBAC objects Privilege Escalation: ClusterRole with Privileged Verbs ( Preview ) Privilege Escalation: ClusterRoleBinding to Privileged Role Privilege Escalation: Create Kubernetes CSR for master cert Privilege Escalation: Creation of sensitive Kubernetes bindings Privilege Escalation: Effectively Anonymous Users Granted GKE Cluster Access Privilege Escalation: Launch of privileged Kubernetes container Privilege Escalation: Suspicious Kubernetes Container Names - Exploitation and Escape ( Preview ) Privilege Escalation: Workload Created with a Sensitive Host Path Mount ( Preview ) Privilege Escalation: Workload with shareProcessNamespace enabled ( Preview ) None IAM Admin Activity audit logs Persistence: IAM Anomalous Grant ( Preview ) Persistence: Unmanaged Account Granted Sensitive Role Privilege Escalation: Default Compute Engine Service Account SetIAMPolicy Privilege Escalation: Dormant Service Account Granted Sensitive Role Privilege Escalation: Impersonation Role Granted For Dormant Service Account Privilege Escalation: Sensitive Role Granted To Hybrid Group None IAM System Event audit logs Execution: Cryptomining Docker Image Impact: Cryptomining Commands None MySQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None PostgreSQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None SQL Server Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None VPC Service Controls Audit logs Defense Evasion: Modify VPC Service Control ( Preview ) None What's next Learn about using Event Threat Detection .
- Event Threat Detection includes the following default rules: Active Scan Brute force Command and Control Credential Access Data Destruction Defense Evasion Denial of Service Discovery Exfiltration Impact Impair Defenses Inhibit System Recovery Initial Access Lateral Movement Malware Persistence Privilege Escalation Resource Development Clear all Display name API name Log source types Description Active Scan: Log4j Vulnerable to RCE Unavailable Cloud DNS logs Log4j vulnerability scanners initiated and identified DNS queries for unobfuscated domains.
- Log type Threats detected Configuration required AlloyDB for PostgreSQL Data Access audit logs Credential Access: CloudDB Failed login from Anonymizing Proxy IP Initial Access: CloudDB Successful login from Anonymizing Proxy IP Privilege Escalation: AlloyDB Database Superuser Writes to User Tables Privilege Escalation: AlloyDB Over-Privileged Grant Activate Logging Data Access audit logs for AlloyDB for PostgreSQL To detect the Privilege Escalation: AlloyDB Database Superuser Writes to User Tables and Privilege Escalation: AlloyDB Over-Privileged Grant threats, you must also enable the pgAudit extension authlogs/authlog on virtual machines Brute force SSH Install the Ops Agent or the legacy Logging agent on your VM hosts Cloud DNS logging Log4j Malware: Bad Domain Malware: bad domain Malware: Cryptomining Bad Domain Turn on Cloud DNS logging See also Logs for network detection of malware .
- Event Threat Detection applies detection logic and proprietary threat intelligence, including tripwire indicator matching, windowed profiling, advanced profiling, machine learning, and anomaly detection, to identify threats in near-real time.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- Container Threat Detection detection instrumentation collects low-level behavior in the guest kernel and performs natural language processing on code to detect the following events: Added Binary Executed Added Library Loaded Command and Control: Steganography Tool Detected ( Preview ) Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Credential Access: Search Private Keys or Passwords Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Defense Evasion: Launch Code Compiler Tool In Container ( Preview ) Execution: Added Malicious Binary Executed Execution: Added Malicious Library Loaded Execution: Built in Malicious Binary Executed Execution: Container Escape Execution: Fileless Execution in /memfd: Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Kubernetes Attack Tool Execution Execution: Local Reconnaissance Tool Execution Execution: Malicious Python executed Execution: Modified Malicious Binary Executed Execution: Modified Malicious Library Loaded Execution: Netcat Remote Code Execution In Container Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) Execution: Possible Remote Command Execution Detected ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Socat Reverse Shell Detected Execution: Suspicious OpenSSL Shared Object Loaded Exfiltration: Launch Remote File Copy Tools in Container Impact: Detect Malicious Cmdlines ( Preview ) Impact: Remove Bulk Data From Disk Impact: Suspicious crypto mining activity using the Stratum Protocol Malicious Script Executed Malicious URL Observed Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Fileless Execution in /dev/shm Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Reverse Shell Unexpected Child Shell Learn more about Container Threat Detection .
- Cloud Armor exports two findings to Security Command Center: Allowed Traffic Spike Increasing Deny Ratio Virtual Machine Threat Detection Premium and Enterprise service tiers Virtual Machine Threat Detection is a built-in service of Security Command Center.
- VM Threat Detection kernel-mode rootkit threat findings Category Module Description Rootkit Defense Evasion: Rootkit KERNEL MEMORY TAMPERING KERNEL INTEGRITY TAMPERING A combination of signals matching a known kernel-mode rootkit is present.
- Defense Evasion Event Threat Detection detects Defense Evasion by examining Cloud Audit Logs for the following scenarios: Changes to existing VPC Service Controls perimeters that would lead to a reduction in the protection offered.

