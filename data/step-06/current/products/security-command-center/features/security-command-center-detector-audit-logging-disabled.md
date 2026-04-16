---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.910Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center detector: Audit logging disabled"
feature_slug: "security-command-center-detector-audit-logging-disabled"
latest_feature_date: "2023-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "security"
  - "command"
  - "center"
  - "detector"
  - "audit"
  - "logging"
  - "disabled"
  - "detects"
---

# Security Command Center detector: Audit logging disabled

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects when audit logging is disabled.

## Extended Definition

Detects when audit logging is disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Note : If Security Command Center is activated at the organization level at any tier, then this detector uses an organization's existing IAM policies as context.
- Cloud IDS detects layer 7 attacks by analyzing mirrored packets and, when a threat event is detected, sends a threat-class finding to Security Command Center.
- If you activate Security Command Center Premium tier at the organization level, Security Command Center can write findings to a Cloud Logging project.
- If Security Command Center activation is only at the project level, then the detector uses only the project's IAM policies as context.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- Standard, Premium, and Enterprise service tiers The Vulnerability Assessment for Google Cloud service detects software vulnerabilities in the following resources on the Google Cloud platform: Running Compute Engine VM instances Nodes in GKE Standard clusters Containers running in GKE Standard and GKE Autopilot clusters For each detected vulnerability, Vulnerability Assessment for Google Cloud generates a Vulnerability class finding in the Software vulnerability or OS vulnerability finding category in Security Command Center.
- To see these findings, enable any of the following GKE security posture dashboard features: GKE security posture dashboard pane Security Command Center finding class Workload configuration auditing 1 MISCONFIGURATION Top threats 2 THREAT Container OS vulnerability scanning 1 Language package vulnerability scanning 1 Actionable security bulletins 1 ( Preview ) Top software vulnerabilities 2 ( Preview ) VULNERABILITY Available only if you enable this feature in GKE.
- In the Enterprise or Premium tier of Security Command Center, the Risk Engine detects groups of security issues that, when they occur together in a particular pattern, create a path to one or more of your high-value resources that a determined attacker could potentially use to reach and compromise those resources.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- Between March 31, 2023 and May 4, 2023, the following detectors might have been counted and grouped under the incorrect CIS level on the Compliance tab of Security Command Center: API KEY EXISTS API KEY APIS UNRESTRICTED API KEY NOT ROTATED FIREWALL NOT MONITORED ROUTE NOT MONITORED NETWORK NOT MONITORED BUCKET IAM NOT MONITORED SQL INSTANCE NOT MONITORED VPC FLOW LOGS SETTINGS NOT RECOMMENDED SQL LOG STATEMENT ACCESS TRANSPARENCY DISABLED April 26, 2023 Feature Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to Preview .
- July 17, 2025 Feature The following Container Threat Detection detectors for file monitoring are in Preview : Collection: Pam.d Modification Credential Access: Access Sensitive Files on Nodes Defense Evasion: Disable or modify Linux audit system Defense Evasion: Root Certificate Installed Execution: Suspicious Cron Modification Persistence: Modify ld.so.preload Change The following Security Command Center Enterprise pages in the Google Cloud console now fully replace equivalent pages that you accessed previously in the Google Security Operations console.

