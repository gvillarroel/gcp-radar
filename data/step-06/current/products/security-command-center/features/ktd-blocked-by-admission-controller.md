---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.969Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "KTD blocked by admission controller"
feature_slug: "ktd-blocked-by-admission-controller"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "ktd"
  - "blocked"
  - "admission"
  - "controller"
  - "container"
  - "threat"
  - "detection"
  - "error"
---

# KTD blocked by admission controller

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Container Threat Detection error detector that reports admission controller blocks that prevent the service from functioning properly.

## Extended Definition

Container Threat Detection error detector that reports admission controller blocks that prevent the service from functioning properly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors](https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### Overview of Security Command Center errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors](https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The attempt to deploy the Container Threat Detection DaemonSet resulted in the following error: Failed to pull image "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": rpc error: code = NotFound desc = failed to pull and unpack image "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": failed to resolve reference "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00: not found Pricing tier: Premium Supported assets container.googleapis.com/Cluster Batch scans : Every 30 minutes Fix this finding build Critical Container Threat Detection Blocked By Admission Controller KTD BLOCKED BY ADMISSION CONTROLLER Finding description: Container Threat Detection can't be enabled on a Kubernetes cluster.
- A third-party admission controller is preventing the deployment of a Kubernetes DaemonSet object that Container Threat Detection requires.
- When viewed in the Google Cloud console, the finding details include the error message that was returned by Google Kubernetes Engine when Container Threat Detection attempted to deploy a Container Threat Detection DaemonSet Object.
- Pricing tier: Premium Supported assets cloudresourcemanager.googleapis.com/Project Batch scans : Every 30 minutes Fix this finding build Critical GKE service account missing permissions GKE SERVICE ACCOUNT MISSING PERMISSIONS Finding description: Container Threat Detection can't generate findings for a Google Kubernetes Engine cluster, because the GKE default service account on the cluster is missing permissions.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- The attempt to deploy the Container Threat Detection DaemonSet resulted in the following error: Failed to pull image "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": rpc error: code = NotFound desc = failed to pull and unpack image "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": failed to resolve reference "badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00": badurl.gcr.io/watcher-daemonset:ktd release.watcher 20220831 RC00: not found Pricing tier: Premium Supported assets container.googleapis.com/Cluster Batch scans : Every 30 minutes Fix this finding build Critical Container Threat Detection Blocked By Admission Controller KTD BLOCKED BY ADMISSION CONTROLLER Finding description: Container Threat Detection can't be enabled on a Kubernetes cluster.
- A third-party admission controller is preventing the deployment of a Kubernetes DaemonSet object that Container Threat Detection requires.
- When viewed in the Google Cloud console, the finding details include the error message that was returned by Google Kubernetes Engine when Container Threat Detection attempted to deploy a Container Threat Detection DaemonSet Object.
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- November 07, 2022 Feature Security Command Center released two new error detectors: KTD blocked by admission controller KTD image pull failure These detectors report configuration errors that prevent the Container Threat Detection service from functioning properly.
- Feature The following Event Threat Detection rules for Google Kubernetes Engine have been released to General Availability : GKE NODEPORT SERVICE CREATED GKE SENSITIVE NAMESPACE WORKLOAD TRIGGERED GKE STATIC POD CREATED GKE TOR PROXY IP REQUEST GKE WEBHOOK CONFIG CREATED YL2 GKE ANONYMOUS USERS GRANTED ACCESS YL2 GKE APPROVE CSR FORBIDDEN YL2 GKE CRB CLUSTERROLE AGGREGATION CONTROLLER YL2 GKE MANUALLY DELETED CSR YL2 GKE POD MASQUERADING YL2 GKE REVERSE SHELL POD YL2 GKE SERVICE ACCOUNT CREATION SENSITIVE NAMESPACE YL2 GKE SUSPICIOUS CRYPTOMINING POD March 13, 2025 Feature Security Command Center has released the Artifact Registry vulnerability assessment detection service, which includes the CONTAINER IMAGE VULNERABILITY detector.
- August 07, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47177) Execution: Socat Reverse Shell Detected Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Feature Risk reports generated and downloaded from Security Command Center include a system attack exposure page that shows the organization's exposure risk over time and lists the projects and resources that have the highest risk.
- June 03, 2025 Feature The following Container Threat Detection detectors for Google Kubernetes Engine have been released to General Availability : Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Execution: Fileless Execution in /memfd: Execution: Suspicious OpenSSL Shared Object Loaded Privilege Escalation: Fileless Execution in /dev/shm May 29, 2025 Change Domain tagging for toxic combinations and chokepoints has been improved to be more precise.

