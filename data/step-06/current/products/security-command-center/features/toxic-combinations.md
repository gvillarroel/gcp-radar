---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.688Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Toxic combinations"
feature_slug: "toxic-combinations"
latest_feature_date: "2025-06-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "toxic"
  - "combinations"
  - "surfaces"
  - "security"
  - "command"
  - "center"
  - "premium"
  - "organization"
---

# Toxic combinations

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Surfaces toxic combinations in Security Command Center Premium at the organization level.

## Extended Definition

Surfaces toxic combinations in Security Command Center Premium at the organization level.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- June 04, 2025 Feature Security Command Center Premium customers can now access toxic combinations, which are in General Availability , and chokepoints, which are in Preview .
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- See the following for detailed information about activating a specific tier: Activate Security Command Center Standard tier for an organization Activate Security Command Center Premium tier for an organization November 17, 2025 Feature Agent Engine Threat Detection , a built-in service of Security Command Center, is available in Preview to the Security Command Center Enterprise and Premium tiers.
- October 21, 2025 Change The release note for Security Command Center and attack path simulations , published on October 16, 2025, was updated to clarify that attack path simulations use Compute Engine and Google Kubernetes Engine OS and software vulnerability findings to detect toxic combinations and chokepoints.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Issues in Security Command Center Premium or Enterprise, which contain toxic combinations and chokepoints .
- For more information, see the following sections on this page: Attack exposure scores Attack paths Attack path simulations Attack exposure scores Premium and Enterprise service tiers (requires organization-level activation ) An attack exposure score appears for the following: A Security Command Center finding or resource A Security Command Center Premium or Enterprise issue An attack exposure score is a measure of how exposed resources are to potential attack if a malicious actor were to gain access to your Google Cloud environment.
- Resource values Premium and Enterprise service tiers (requires organization-level activation ) Although all of your resources on Google Cloud have value, Security Command Center identifies attack paths and calculates attack exposure scores for only the resources that you designate as high-value resources (sometimes referred to as valued resources ).
- Premium and Enterprise service tiers (requires organization-level activation ) This page explains key concepts, principles, and restrictions to help you learn about, refine, and use the attack exposure scores and attack paths that are generated by the Risk Engine of Security Command Center.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- For more information, see the following: Security Health Analytics overview How to use Security Health Analytics Remediating Security Health Analytics findings Reference of Security Health Analytics findings Security posture service Premium and Enterprise service tiers (requires organization-level activation ) The security posture service is a built-in service for the Security Command Center Premium tier that lets you define, assess, and monitor the overall status of your security in Google Cloud.
- Pricing tier: Premium or Standard Supported assets cloudresourcemanager.googleapis.com/Organization cloudresourcemanager.googleapis.com/Project Batch scans : Every 30 minutes Fix this finding build Critical For more information, see Security Command Center errors .
- To use VM Manager with project-level activations of Security Command Center Premium, activate the Security Command Center Standard-legacy tier in the parent organization.

