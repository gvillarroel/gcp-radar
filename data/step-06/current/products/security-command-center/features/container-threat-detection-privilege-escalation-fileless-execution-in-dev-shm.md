---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.697Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Container Threat Detection: Privilege Escalation - Fileless Execution in /dev/shm"
feature_slug: "container-threat-detection-privilege-escalation-fileless-execution-in-dev-shm"
latest_feature_date: "2025-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "container"
  - "threat"
  - "detection"
  - "privilege"
  - "escalation"
  - "fileless"
  - "execution"
  - "dev"
---

# Container Threat Detection: Privilege Escalation - Fileless Execution in /dev/shm

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects fileless execution from /dev/shm on Google Kubernetes Engine.

## Extended Definition

Detects fileless execution from /dev/shm on Google Kubernetes Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- Privilege Escalation: Fileless Execution in /dev/shm FILELESS EXECUTION DETECTION SHM A process has been executed from a path within /dev/shm .
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.
- Execution: Modified Malicious Binary Executed MODIFIED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious binary is executed, it's a strong sign that an attacker has control of the workload and they are executing malicious software.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- The following is the execution path when events are detected: Cloud Run Threat Detection uses a watcher process to collect container and event information for the complete duration of a Cloud Run workload.
- Execution: Modified Malicious Binary Executed CLOUD RUN MODIFIED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious binary is executed, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Modified Malicious Library Loaded CLOUD RUN MODIFIED MALICIOUS LIBRARY LOADED A library that meets the following conditions was loaded: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious library is loaded, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Added Malicious Binary Executed CLOUD RUN ADDED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Not part of the original container image If an added malicious binary is executed, it's a strong sign that an attacker has control of the workload and they're executing malicious software.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 217
- Re-rank relevance: N/A

Evidence snippets:
- Log type Threats detected Configuration required Agent Engine Logs Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview ) Discovery: Evidence of Port Scanning from AI Agent ( Preview ) None Backup and DR Admin Activity audit logs Impact: Google Cloud Backup and DR expire all images Impact: Deleted Google Cloud Backup and DR Backup Impact: Deleted Google Cloud Backup and DR host Impact: Deleted Google Cloud Backup and DR plan association Impact: Deleted Google Cloud Backup and DR Vault Impact: Google Cloud Backup and DR delete policy Impact: Google Cloud Backup and DR delete profile Impact: Google Cloud Backup and DR delete template Impact: Google Cloud Backup and DR expire image Impact: Google Cloud Backup and DR reduce backup expiration Impact: Google Cloud Backup and DR reduce backup frequency Impact: Google Cloud Backup and DR remove appliance Impact: Google Cloud Backup and DR remove plan Inhibit system recovery: Google Cloud Backup and DR delete storage pool None BigQueryAuditMetadata Data Access logs Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview ) Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview ) Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview ) Exfiltration: BigQuery Data Exfiltration Exfiltration: BigQuery Data Extraction Exfiltration: BigQuery Data to Google Drive Exfiltration: Move to Public BigQuery resource ( Preview ) None Generic Admin Activity audit logs Defense Evasion: GCS Bucket IP Filtering Modified Defense Evasion: Project HTTP Policy Block Disabled Discovery: AI Agent Unauthorized Service Account API Call ( Preview ) Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview ) Initial Access: Dormant Service Account Action Initial Access: Dormant Service Account Activity in AI Service Initial Access: Dormant Service Account Key Created Initial Access: Excessive Permission Denied Actions Initial Access: Leaked Service Account Key Used Lateral Movement: Modified Boot Disk Attached to Instance ( Preview ) Persistence: GCE Admin Added SSH Key Persistence: GCE Admin Added Startup Script Persistence: New AI API Method Persistence: New API Method Persistence: New Geography Persistence: New Geography for AI Service Persistence: New User Agent Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity None Google Kubernetes Engine (GKE) Admin Activity audit logs Credential Access: Failed Attempt to Approve Kubernetes Certificate Signing Request (CSR) Credential Access: Manually Approved Kubernetes Certificate Signing Request (CSR) ( Preview ) Defense Evasion: Anonymous Sessions Granted Cluster Admin Access Defense Evasion: Manually Deleted Certificate Signing Request (CSR) Defense Evasion: Potential Kubernetes Pod Masquerading Defense Evasion: Static Pod Created Execution: GKE launch excessively capable container ( Preview ) Execution: Kubernetes Pod Created with Potential Reverse Shell Arguments Execution: Suspicious Exec or Attach to a System Pod ( Preview ) Execution: Workload triggered in sensitive namespace Impact: GKE kube-dns modification detected ( Preview ) Impact: Suspicious Kubernetes Container Names - Cryptocurrency Mining Initial Access: Anonymous GKE Resource Created from the Internet ( Preview ) Initial Access: GKE NodePort service created Initial Access: GKE Resource Modified Anonymously from the Internet ( Preview ) Initial Access: Successful API call made from a TOR proxy IP Persistence: GKE Webhook Configuration Detected Persistence: Service Account Created in sensitive namespace Privilege Escalation: Changes to sensitive Kubernetes RBAC objects Privilege Escalation: ClusterRole with Privileged Verbs ( Preview ) Privilege Escalation: ClusterRoleBinding to Privileged Role Privilege Escalation: Create Kubernetes CSR for master cert Privilege Escalation: Creation of sensitive Kubernetes bindings Privilege Escalation: Effectively Anonymous Users Granted GKE Cluster Access Privilege Escalation: Launch of privileged Kubernetes container Privilege Escalation: Suspicious Kubernetes Container Names - Exploitation and Escape ( Preview ) Privilege Escalation: Workload Created with a Sensitive Host Path Mount ( Preview ) Privilege Escalation: Workload with shareProcessNamespace enabled ( Preview ) None IAM Admin Activity audit logs Persistence: IAM Anomalous Grant ( Preview ) Persistence: Unmanaged Account Granted Sensitive Role Privilege Escalation: Default Compute Engine Service Account SetIAMPolicy Privilege Escalation: Dormant Service Account Granted Sensitive Role Privilege Escalation: Impersonation Role Granted For Dormant Service Account Privilege Escalation: Sensitive Role Granted To Hybrid Group None IAM System Event audit logs Execution: Cryptomining Docker Image Impact: Cryptomining Commands None MySQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None PostgreSQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None SQL Server Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None VPC Service Controls Audit logs Defense Evasion: Modify VPC Service Control ( Preview ) None What's next Learn about using Event Threat Detection .
- Log type Threats detected Configuration required AlloyDB for PostgreSQL Data Access audit logs Credential Access: CloudDB Failed login from Anonymizing Proxy IP Initial Access: CloudDB Successful login from Anonymizing Proxy IP Privilege Escalation: AlloyDB Database Superuser Writes to User Tables Privilege Escalation: AlloyDB Over-Privileged Grant Activate Logging Data Access audit logs for AlloyDB for PostgreSQL To detect the Privilege Escalation: AlloyDB Database Superuser Writes to User Tables and Privilege Escalation: AlloyDB Over-Privileged Grant threats, you must also enable the pgAudit extension authlogs/authlog on virtual machines Brute force SSH Install the Ops Agent or the legacy Logging agent on your VM hosts Cloud DNS logging Log4j Malware: Bad Domain Malware: bad domain Malware: Cryptomining Bad Domain Turn on Cloud DNS logging See also Logs for network detection of malware .
- Finding categories that use these sensitive roles include: Persistence: IAM Anomalous Grant Subrule: external service account added to policy Subrule: external member added to policy Privilege Escalation: Sensitive Role Granted To Hybrid Group Privilege Escalation: Dormant Service Account Granted Sensitive Role Finding categories that use a subset of the sensitive roles include: Persistence: IAM Anomalous Grant Subrule: service account granted sensitive role to member The service account granted sensitive role to member subrule targets both external and internal members generally and therefore uses only a subset of sensitive roles, as explained in Event Threat Detection rules .
- Event Threat Detection includes the following default rules: Active Scan Brute force Command and Control Credential Access Data Destruction Defense Evasion Denial of Service Discovery Exfiltration Impact Impair Defenses Inhibit System Recovery Initial Access Lateral Movement Malware Persistence Privilege Escalation Resource Development Clear all Display name API name Log source types Description Active Scan: Log4j Vulnerable to RCE Unavailable Cloud DNS logs Log4j vulnerability scanners initiated and identified DNS queries for unobfuscated domains.

