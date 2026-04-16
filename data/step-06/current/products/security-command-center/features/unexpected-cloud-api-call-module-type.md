---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.849Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Unexpected Cloud API Call module type"
feature_slug: "unexpected-cloud-api-call-module-type"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "unexpected"
  - "call"
  - "module"
  - "type"
  - "detects"
  - "when"
  - "specified"
  - "principal"
---

# Unexpected Cloud API Call module type

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Unexpected Cloud API Call module type detects when a specified principal calls a specified method against a specified resource.

## Extended Definition

The Unexpected Cloud API Call module type detects when a specified principal calls a specified method against a specified resource.

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
- Final score: 251
- Re-rank relevance: N/A

Evidence snippets:
- This module type lets you create a custom module that detects when a specified principal calls a specified method against a specified resource.
- In addition, the Unexpected Cloud API Call module type is now available.
- Defense Evasion: Unexpected kernel code modification Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler These modules analyze runtime Linux kernel integrity to detect common evasion techniques used by malware.
- Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler Deprecated The Defense Evasion: Unexpected kernel code modification detector of Virtual Machine Threat Detection is shut down.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Kernel integrity tampering Defense Evasion: Unexpected ftrace handler KERNEL INTEGRITY TAMPERING ftrace points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
- Defense Evasion: Unexpected kprobe handler KERNEL INTEGRITY TAMPERING kprobe points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
- Defense Evasion: Unexpected system call handler KERNEL INTEGRITY TAMPERING System call handlers that aren't in the expected kernel or module code regions are present.
- Event Threat Detection finding types Data destruction Event Threat Detection detects data destruction by examining audit logs from the Backup and DR Service Management Server for the following scenarios: Deletion of a backup image Deletion of all backup images associated with an application Deletion of a backup/recovery appliance Data exfiltration Event Threat Detection detects data exfiltration from BigQuery and Cloud SQL by examining audit logs for the following scenarios: An identity associated with an AI agent deployed to Vertex AI Agent Engine initiated a BigQuery data exfiltration by saving resources outside of your organization.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Log type Threats detected Configuration required Agent Engine Logs Credential Access: AI Agent Anomalous Access to Metadata Service ( Preview ) Discovery: Evidence of Port Scanning from AI Agent ( Preview ) None Backup and DR Admin Activity audit logs Impact: Google Cloud Backup and DR expire all images Impact: Deleted Google Cloud Backup and DR Backup Impact: Deleted Google Cloud Backup and DR host Impact: Deleted Google Cloud Backup and DR plan association Impact: Deleted Google Cloud Backup and DR Vault Impact: Google Cloud Backup and DR delete policy Impact: Google Cloud Backup and DR delete profile Impact: Google Cloud Backup and DR delete template Impact: Google Cloud Backup and DR expire image Impact: Google Cloud Backup and DR reduce backup expiration Impact: Google Cloud Backup and DR reduce backup frequency Impact: Google Cloud Backup and DR remove appliance Impact: Google Cloud Backup and DR remove plan Inhibit system recovery: Google Cloud Backup and DR delete storage pool None BigQueryAuditMetadata Data Access logs Exfiltration: AI Agent Initiated BigQuery Data Extraction ( Preview ) Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview ) Exfiltration: AI Agent Initiated BigQuery VPC Perimeter Violation ( Preview ) Exfiltration: BigQuery Data Exfiltration Exfiltration: BigQuery Data Extraction Exfiltration: BigQuery Data to Google Drive Exfiltration: Move to Public BigQuery resource ( Preview ) None Generic Admin Activity audit logs Defense Evasion: GCS Bucket IP Filtering Modified Defense Evasion: Project HTTP Policy Block Disabled Discovery: AI Agent Unauthorized Service Account API Call ( Preview ) Initial Access: AI Agent Identity Excessive Permission Denied Actions ( Preview ) Initial Access: Dormant Service Account Action Initial Access: Dormant Service Account Activity in AI Service Initial Access: Dormant Service Account Key Created Initial Access: Excessive Permission Denied Actions Initial Access: Leaked Service Account Key Used Lateral Movement: Modified Boot Disk Attached to Instance ( Preview ) Persistence: GCE Admin Added SSH Key Persistence: GCE Admin Added Startup Script Persistence: New AI API Method Persistence: New API Method Persistence: New Geography Persistence: New Geography for AI Service Persistence: New User Agent Privilege Escalation: Anomalous Impersonation of Service Account for Admin Activity Privilege Escalation: Anomalous Impersonation of Service Account for AI Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for Admin Activity Privilege Escalation: Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for Admin Activity Privilege Escalation: Anomalous Service Account Impersonator for AI Admin Activity None Google Kubernetes Engine (GKE) Admin Activity audit logs Credential Access: Failed Attempt to Approve Kubernetes Certificate Signing Request (CSR) Credential Access: Manually Approved Kubernetes Certificate Signing Request (CSR) ( Preview ) Defense Evasion: Anonymous Sessions Granted Cluster Admin Access Defense Evasion: Manually Deleted Certificate Signing Request (CSR) Defense Evasion: Potential Kubernetes Pod Masquerading Defense Evasion: Static Pod Created Execution: GKE launch excessively capable container ( Preview ) Execution: Kubernetes Pod Created with Potential Reverse Shell Arguments Execution: Suspicious Exec or Attach to a System Pod ( Preview ) Execution: Workload triggered in sensitive namespace Impact: GKE kube-dns modification detected ( Preview ) Impact: Suspicious Kubernetes Container Names - Cryptocurrency Mining Initial Access: Anonymous GKE Resource Created from the Internet ( Preview ) Initial Access: GKE NodePort service created Initial Access: GKE Resource Modified Anonymously from the Internet ( Preview ) Initial Access: Successful API call made from a TOR proxy IP Persistence: GKE Webhook Configuration Detected Persistence: Service Account Created in sensitive namespace Privilege Escalation: Changes to sensitive Kubernetes RBAC objects Privilege Escalation: ClusterRole with Privileged Verbs ( Preview ) Privilege Escalation: ClusterRoleBinding to Privileged Role Privilege Escalation: Create Kubernetes CSR for master cert Privilege Escalation: Creation of sensitive Kubernetes bindings Privilege Escalation: Effectively Anonymous Users Granted GKE Cluster Access Privilege Escalation: Launch of privileged Kubernetes container Privilege Escalation: Suspicious Kubernetes Container Names - Exploitation and Escape ( Preview ) Privilege Escalation: Workload Created with a Sensitive Host Path Mount ( Preview ) Privilege Escalation: Workload with shareProcessNamespace enabled ( Preview ) None IAM Admin Activity audit logs Persistence: IAM Anomalous Grant ( Preview ) Persistence: Unmanaged Account Granted Sensitive Role Privilege Escalation: Default Compute Engine Service Account SetIAMPolicy Privilege Escalation: Dormant Service Account Granted Sensitive Role Privilege Escalation: Impersonation Role Granted For Dormant Service Account Privilege Escalation: Sensitive Role Granted To Hybrid Group None IAM System Event audit logs Execution: Cryptomining Docker Image Impact: Cryptomining Commands None MySQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None PostgreSQL Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None SQL Server Admin Activity logs Exfiltration: Cloud SQL Restore Backup to External Organization None VPC Service Controls Audit logs Defense Evasion: Modify VPC Service Control ( Preview ) None What's next Learn about using Event Threat Detection .
- Exfiltration: AI Agent Initiated CloudSQL Exfiltration to Public Bucket ( Preview ) AGENT ENGINE CLOUDSQL EXFIL EXPORT TO PUBLIC GCS Cloud Audit Logs : MySQL data access logs PostgreSQL data access logs SQL Server data access logs Detects when live instance data was exported by an AI agent to a Cloud Storage bucket that is owned by the organization and is publicly accessible.
- Exfiltration: AI Agent Initiated BigQuery Data Exfiltration to External Table ( Preview ) AGENT ENGINE BIG QUERY EXFIL TO EXTERNAL TABLE Cloud Audit Logs : BigQueryAuditMetadata data access logs Permissions : DATA READ Detects when resources owned by the protected organization were saved outside of the organization by an AI agent, including copy or transfer operations.
- Exfiltration: AI Agent Initiated CloudSQL Exfiltration to External Bucket ( Preview ) AGENT ENGINE CLOUDSQL EXFIL EXPORT TO EXTERNAL GCS Cloud Audit Logs : MySQL data access logs PostgreSQL data access logs SQL Server data access logs Detects when live instance data was exported by an AI agent to a Cloud Storage bucket outside of the organization.

