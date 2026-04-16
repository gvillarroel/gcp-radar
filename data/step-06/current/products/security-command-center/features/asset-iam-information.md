---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.165Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Asset IAM information"
feature_slug: "asset-iam-information"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications"
  - "https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview"
keywords:
  - "asset"
  - "iam"
  - "information"
  - "security"
  - "command"
  - "center"
  - "assets"
  - "now"
---

# Asset IAM information

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center assets now include IAM information that can be searched, filtered, and joined with other asset data and security marks.

## Extended Definition

Security Command Center assets now include IAM information that can be searched, filtered, and joined with other asset data and security marks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications](https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications)
- [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)

## Supporting Pages

### "Data and infrastructure security overview \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-data-security-overview)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data processing When you enroll in Security Command Center, Google Cloud processes information related to the Google Cloud services you use, including the following: The configuration and metadata associated with your Google Cloud resources The configuration and metadata for your Identity and Access Management (IAM) policies and users Google Cloud-level API access patterns and usage Cloud Logging contents for your Google Cloud organization Security Command Center metadata, including service settings and security findings Security Command Center processes data related to your cloud logs and assets that you configure to be scanned or monitored, including telemetry and other data therein, to provide findings and improve the service.
- Data retention for findings Data that Security Command Center processes is captured and stored in findings that identify threats, vulnerabilities, and misconfigurations in the resources and assets within your organization, folders, and projects.
- In order to protect your assets against new and evolving threats, Security Command Center analyzes data related to misconfigured assets, indicators of compromise in logs, and attack vectors.
- Behavior when an asset is deleted If an asset associated with a finding is deleted, Security Command Center might reassign the finding to the organization; that is, the parent of the finding becomes the organization.

### "Enabling real-time email and chat notifications \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications](https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Webex To send notifications to your Webex Teams account, you do the following: Create a new service account that has permissions to retrieve assets from Security Command Center.
- Create a service account Cloud Run functions, by default, cannot retrieve assets from Security Command Center.
- For instructions, see Using secrets in Cloud Run functions documentation. #!/usr/bin/env python3 import base64 import json import requests from google.cloud import securitycenter v1 WEBEX TOKEN = " WEBEX TOKEN " ROOM ID = " ROOM ID " TEMPLATE = """ Severity: {severity} \n Asset: {asset} \n SCC Category: {category} \n Project: {project} \n First observed: {create time} \n Last observed: {event time} \n Link to finding: {finding link} """ PREFIX = "https://console.cloud.google.com/security/command-center/findings" def get finding detail page link ( finding name ): """Constructs a direct link to the finding detail page.""" org id = finding name . split ( "/" )[ 1 ] return f " { PREFIX } ?organizationId= { org id } & resourceId= { finding name } " def get asset ( parent , resource name ): """Retrieves the asset corresponding to resource name from SCC.""" client = securitycenter v1 .
- Name your service account and specify it as an environment variable. export SERVICE ACCOUNT = ACCOUNT NAME Create the service account for your project. gcloud iam service-accounts create $SERVICE ACCOUNT \ --display-name "Service Account for SCC Finding Notifier WebEx Cloud Function" \ --project $PROJECT ID Grant the service account the securitycenter.assetsViewer role at the organization level. gcloud organizations add-iam-policy-binding $ORG ID \ --member = "serviceAccount: $SERVICE ACCOUNT @ $PROJECT ID .iam.gserviceaccount.com" \ --role = 'roles/securitycenter.assetsViewer' Create a Webex Bot In this section, you create a Webex Bot that posts messages to your workspace.

### "AI Protection overview \_|\_ Security Command Center \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview](https://docs.cloud.google.com/security-command-center/docs/ai-protection-overview)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Event Threat Detection rules for Vertex AI assets The following Event Threat Detection rules run detections on Vertex AI assets: Persistence : New AI API Method Persistence : New Geography for AI Service Privilege Escalation : Anomalous Impersonation of Service Account for AI Admin Activity Privilege Escalation : Anomalous Service Account Impersonator for AI Data Access Privilege Escalation : Anomalous Multistep Service Account Delegation for AI Admin Activity Privilege Escalation : Anomalous Multistep Service Account Delegation for AI Data Access Privilege Escalation : Anomalous Service Account Impersonator for AI Admin Activity Initial Access : Dormant Service Account Activity in AI Service For more information about Event Threat Detection, see Event Threat Detection overview .
- For the Premium and Enterprise service tiers, when Security Command Center is activated at the organization level, AI Protection helps provide a comprehensive view of AI security across your entire Google Cloud environment.
- Home Documentation Security Security Command Center Guides Send feedback AI Protection overview Stay organized with collections Save and categorize content based on your preferences.
- AI Protection is available with organization-level activations of Security Command Center.

