---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.807Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Mute state display in alerts"
feature_slug: "mute-state-display-in-alerts"
latest_feature_date: "2024-05-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cases-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "mute"
  - "state"
  - "display"
  - "alerts"
  - "muted"
  - "finding"
  - "status"
  - "shown"
---

# Mute state display in alerts

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Muted finding status is shown in related alerts, cases, and tickets in Security Operations.

## Extended Definition

Muted finding status is shown in related alerts, cases, and tickets in Security Operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- May 30, 2024 Feature Mute state of findings display in alerts, cases, and tickets The mute state of a finding is now reflected in its corresponding alert, case, and tickets in the Security Operations console of Security Command Center Enterprise.
- Previously, muted findings displayed only their Active status.
- June 05, 2025 Change Muted findings are no longer considered in the Security Command Center Risk Engine.
- The Findings > Quick filters panel shows separate State and Mute filter sections.

### Cases overview \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The finding status is displayed in the Finding state widget of the Case overview tab and the Finding Summary widget of an alert.
- In the following example, the priority for Case 1 is Critical because the severity of Finding 3 (though muted) is set to Critical: Case 1: Priority: CRITICAL Finding 1, active.
- Muting findings has no impact on the case priority—if a muted finding possesses the highest severity, it defines the priority of the case.
- If all findings in a case are muted, the case is closed.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- Use the following query to view the findings for DSPM: state="ACTIVE" AND NOT mute="MUTED" AND resource.name="//aiplatform.googleapis.com/projects/478190632149/locations/us-central1/models/1244151282898305024" AND category="DATA SECURITY POSTURE ACCESS VIOLATION" OR category="DATA SECURITY POSTURE FLOW VIOLATION" OR category="DATA SECURITY POSTURE DELETION VIOLATION" OR category="DATA SECURITY POSTURE PROTECTION KEY GOVERNANCE" OR category="BIGQUERY TABLE CMEK DISABLED" OR category="VERTEX AI MODEL CMEK DISABLED" OR category="VERTEX AI METADATA STORE CMEK DISABLED" OR category="VERTEX AI DATASET CMEK DISABLED" OR category="VERTEX AI FEATURE STORE TABLE CMEK DISABLED" OR category="DATA SECURITY POSTURE CMEK POLICY MISCONFIGURED" OR category="DATA SECURITY POSTURE CMEK POLICY DELETED" OR category="DATA SECURITY POSTURE CMEK VIOLATION" OR category="SENSITIVE DATA PUBLIC SQL INSTANCE" OR category="SENSITIVE DATA PUBLIC DATASET" OR category="SENSITIVE DATA BIGQUERY TABLE CMEK DISABLED" OR category="SENSITIVE DATA DATASET CMEK DISABLED" OR category="SENSITIVE DATA SQL CMEK DISABLED" OR category="PUBLIC DATASET" OR category="PUBLIC SQL INSTANCE" OR category="SQL PUBLIC IP" OR category="ACCESS TRANSPARENCY DISABLED" OR category="ORG POLICY LOCATION RESTRICTION" OR category="BUCKET POLICY ONLY DISABLED" OR category="DATA EXFILTRATION BIG QUERY" OR category="DATA EXFILTRATION BIG QUERY EXTRACTION" OR category="DATA EXFILTRATION BIG QUERY TO GOOGLE DRIVE" To view the details of a specific finding, click the finding name in the Category column.
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.
- Security Command Center will display findings for scanned vulnerable container images that are actively deployed to the applicable runtime assets .

