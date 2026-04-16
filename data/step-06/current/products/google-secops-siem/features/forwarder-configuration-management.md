---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.632Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Forwarder configuration management"
feature_slug: "forwarder-configuration-management"
latest_feature_date: "2023-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
keywords:
  - "forwarder"
  - "configuration"
  - "management"
  - "configurations"
  - "can"
  - "now"
  - "created"
  - "managed"
---

# Forwarder configuration management

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Forwarder configurations can now be created and managed through the Chronicle UI and the Forwarder Management API.

## Extended Definition

Forwarder configurations can now be created and managed through the Chronicle UI and the Forwarder Management API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Based on the Cloud Storage configuration that you created, specify values for the following fields: Storage bucket URI Note: Use a wildcard to match an entire directory name.
- Source-specific setup and permissions Different source types require specific authentication and networking configurations to communicate with Google SecOps.
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- The following table describes the error messages that you might encounter when working with data feeds: Error Code Cause Troubleshooting ACCESS DENIED The authentication account provided in the feed configuration lacks required permissions.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Office 365 - Identity : Detects malicious, suspicious, and high-risk activities in Office 365 related to identity and access management, including potential token theft, risky authentication configurations, MFA attacks, password attacks, and known hacking tools.
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- CDIR SCC Enhanced rule sets All rule sets that begin with the name CDIR SCC Enhanced use Security Command Center Premium findings contextualized with several other Google Cloud log sources, including the following: Cloud Audit Logs Cloud DNS logs Identity and Access Management (IAM) analysis Sensitive Data Protection context BigQuery context Compute Engine context To use the CDIR SCC Enhanced rule sets, we recommend that you collect the following Google Cloud data: Log data listed in the All rule sets section.

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- After the shutdown date, configurations using Legacy Alerts will stop returning data.
- If any of your existing feeds for the MICROSOFT GRAPH ALERT log type are pointing towards the legacy alerts endpoint, you must update the API Full Path in your feed configuration to switch to the alerts v2 endpoint instead, as described in How to set up Microsoft Graph API alerts .
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- BigQuery data lake December 31, 2024 March 31, 2025 On December 31, 2024, the managed BigQuery data lake for export won't be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier.

