---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.927Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Defense Evasion: Unexpected kernel read-only data modification"
feature_slug: "defense-evasion-unexpected-kernel-read-only-data-modification"
latest_feature_date: "2023-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "defense"
  - "evasion"
  - "unexpected"
  - "kernel"
  - "read"
  - "only"
  - "modification"
  - "virtual"
---

# Defense Evasion: Unexpected kernel read-only data modification

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

A Virtual Machine Threat Detection detector that identifies unexpected modification of kernel read-only data as a Linux kernel integrity evasion technique.

## Extended Definition

A Virtual Machine Threat Detection detector that identifies unexpected modification of kernel read-only data as a Linux kernel integrity evasion technique.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 280
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.
- Defense Evasion: Unexpected kernel code modification Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler These modules analyze runtime Linux kernel integrity to detect common evasion techniques used by malware.
- Whether unexpected modifications were made to the kernel's code, read-only data memory, or certain important kernel data structures.
- July 17, 2025 Feature The following Container Threat Detection detectors for file monitoring are in Preview : Collection: Pam.d Modification Credential Access: Access Sensitive Files on Nodes Defense Evasion: Disable or modify Linux audit system Defense Evasion: Root Certificate Installed Execution: Suspicious Cron Modification Persistence: Modify ld.so.preload Change The following Security Command Center Enterprise pages in the Google Cloud console now fully replace equivalent pages that you accessed previously in the Google Security Operations console.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Kernel memory tampering Defense Evasion: Unexpected kernel read-only data modification KERNEL MEMORY TAMPERING Unexpected modifications of kernel read-only data memory are present.
- Container Threat Detection detection instrumentation collects low-level behavior in the guest kernel and performs natural language processing on code to detect the following events: Added Binary Executed Added Library Loaded Command and Control: Steganography Tool Detected ( Preview ) Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Credential Access: Search Private Keys or Passwords Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Defense Evasion: Launch Code Compiler Tool In Container ( Preview ) Execution: Added Malicious Binary Executed Execution: Added Malicious Library Loaded Execution: Built in Malicious Binary Executed Execution: Container Escape Execution: Fileless Execution in /memfd: Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Kubernetes Attack Tool Execution Execution: Local Reconnaissance Tool Execution Execution: Malicious Python executed Execution: Modified Malicious Binary Executed Execution: Modified Malicious Library Loaded Execution: Netcat Remote Code Execution In Container Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) Execution: Possible Remote Command Execution Detected ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Socat Reverse Shell Detected Execution: Suspicious OpenSSL Shared Object Loaded Exfiltration: Launch Remote File Copy Tools in Container Impact: Detect Malicious Cmdlines ( Preview ) Impact: Remove Bulk Data From Disk Impact: Suspicious crypto mining activity using the Stratum Protocol Malicious Script Executed Malicious URL Observed Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Fileless Execution in /dev/shm Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Reverse Shell Unexpected Child Shell Learn more about Container Threat Detection .
- Kernel integrity tampering Defense Evasion: Unexpected ftrace handler KERNEL INTEGRITY TAMPERING ftrace points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
- Defense Evasion: Unexpected kprobe handler KERNEL INTEGRITY TAMPERING kprobe points are present with callbacks pointing to regions that are not in the expected kernel or module code range.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: N/A

Evidence snippets:
- Log type Threats detected Configuration required Agent Engine Logs Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview ) Discovery: Evidence of Port Scanning from AI Agent ( Preview ) None Backup and DR Admin Activity audit logs Impact: Google Cloud Backup and DR expire all images Impact: Deleted Google Cloud Backup and DR Backup Impact: Deleted Google Cloud Backup and DR host Impact: Deleted Google Cloud Backup and DR plan association Impact: Deleted Google Cloud Backup and DR Vault Impact: Google Cloud Backup and DR delete policy Impact: Google Cloud Backup and DR delete profile Impact: Google Cloud Backup and DR delete template Impact: Google Cloud Backup and DR expire image Impact: Google Cloud Backup and DR reduce backup expiration Impact: Google Cloud Backup and DR reduce backup frequency Impact: Google Cloud Backup and DR remove appliance Impact: Google Cloud Backup and DR remove plan Inhibit system recovery: Google Cloud Backup and DR delete storage pool None BigQueryAuditMetadata Data Access logs Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview ) Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview ) Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview ) Exfiltration: BigQuery Data Exfiltration Exfiltration: BigQuery Data Extraction Exfiltration: BigQuery Data to Google Drive Exfiltration: Move to Public BigQuery resource ( Preview ) None Generic Admin Activity audit logs Defense Evasion: GCS Bucket IP Filtering Modified Defense Evasion: Project HTTP Policy Block Disabled Discovery: AI Agent Unauthorized Service Account API Call ( Preview ) Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview ) Initial Access: Dormant Service Account Action Initial Access: Dormant Service Account Activity in AI Service Initial Access: Dormant Service Account Key Created Initial Access: Excessive Permission Denied Actions Initial Access: Leaked Service Account Key Used Lateral Movement: Modified Boot Disk Attached to Instance ( Preview ) Persistence: GCE Admin Added SSH Key Persistence: GCE Admin Added Startup Script Persistence: New AI API Method Persistence: New API Method Persistence: New Geography Persistence: New Geography for AI Service Persistence: New User Agent Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity None Google Kubernetes Engine (GKE) Admin Activity audit logs Credential Access: Failed Attempt to Approve Kubernetes Certificate Signing Request (CSR) Credential Access: Manually Approved Kubernetes Certificate Signing Request (CSR) ( Preview ) Defense Evasion: Anonymous Sessions Granted Cluster Admin Access Defense Evasion: Manually Deleted Certificate Signing Request (CSR) Defense Evasion: Potential Kubernetes Pod Masquerading Defense Evasion: Static Pod Created Execution: GKE launch excessively capable container ( Preview ) Execution: Kubernetes Pod Created with Potential Reverse Shell Arguments Execution: Suspicious Exec or Attach to a System Pod ( Preview ) Execution: Workload triggered in sensitive namespace Impact: GKE kube-dns modification detected ( Preview ) Impact: Suspicious Kubernetes Container Names - Cryptocurrency Mining Initial Access: Anonymous GKE Resource Created from the Internet ( Preview ) Initial Access: GKE NodePort service created Initial Access: GKE Resource Modified Anonymously from the Internet ( Preview ) Initial Access: Successful API call made from a TOR proxy IP Persistence: GKE Webhook Configuration Detected Persistence: Service Account Created in sensitive namespace Privilege Escalation: Changes to sensitive Kubernetes RBAC objects Privilege Escalation: ClusterRole with Privileged Verbs ( Preview ) Privilege Escalation: ClusterRoleBinding to Privileged Role Privilege Escalation: Create Kubernetes CSR for master cert Privilege Escalation: Creation of sensitive Kubernetes bindings Privilege Escalation: Effectively Anonymous Users Granted GKE Cluster Access Privilege Escalation: Launch of privileged Kubernetes container Privilege Escalation: Suspicious Kubernetes Container Names - Exploitation and Escape ( Preview ) Privilege Escalation: Workload Created with a Sensitive Host Path Mount ( Preview ) Privilege Escalation: Workload with shareProcessNamespace enabled ( Preview ) None IAM Admin Activity audit logs Persistence: IAM Anomalous Grant ( Preview ) Persistence: Unmanaged Account Granted Sensitive Role Privilege Escalation: Default Compute Engine Service Account SetIAMPolicy Privilege Escalation: Dormant Service Account Granted Sensitive Role Privilege Escalation: Impersonation Role Granted For Dormant Service Account Privilege Escalation: Sensitive Role Granted To Hybrid Group None IAM System Event audit logs Execution: Cryptomining Docker Image Impact: Cryptomining Commands None MySQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None PostgreSQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None SQL Server Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None VPC Service Controls Audit logs Defense Evasion: Modify VPC Service Control ( Preview ) None What's next Learn about using Event Threat Detection .
- Event Threat Detection includes the following default rules: Active Scan Brute force Command and Control Credential Access Data Destruction Defense Evasion Denial of Service Discovery Exfiltration Impact Impair Defenses Inhibit System Recovery Initial Access Lateral Movement Malware Persistence Privilege Escalation Resource Development Clear all Display name API name Log source types Description Active Scan: Log4j Vulnerable to RCE Unavailable Cloud DNS logs Log4j vulnerability scanners initiated and identified DNS queries for unobfuscated domains.
- Defense Evasion: Anonymous Sessions Granted Cluster Admin Access ANONYMOUS SESSIONS GRANTED CLUSTER ADMIN Cloud Audit Logs : GKE Admin Activity logs A role-based access control (RBAC) ClusterRoleBinding object was created, adding the root-cluster-admin-binding behavior to anonymous users.
- Defense Evasion: Modify VPC Service Control DEFENSE EVASION MODIFY VPC SERVICE CONTROL Cloud Audit Logs VPC Service Controls audit logs An existing VPC Service Controls perimeter was changed that would lead to a reduction in the protection offered by that perimeter.

