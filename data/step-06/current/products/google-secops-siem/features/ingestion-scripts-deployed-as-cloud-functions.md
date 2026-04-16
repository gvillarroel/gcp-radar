---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.668Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Ingestion scripts deployed as Cloud Functions"
feature_slug: "ingestion-scripts-deployed-as-cloud-functions"
latest_feature_date: "2023-01-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
keywords:
  - "ingestion"
  - "scripts"
  - "deployed"
  - "functions"
  - "these"
  - "python"
  - "ingest"
  - "log"
---

# Ingestion scripts deployed as Cloud Functions

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

These Python scripts ingest data from supported log sources when deployed as Cloud Functions.

## Extended Definition

These Python scripts ingest data from supported log sources when deployed as Cloud Functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)

## Supporting Pages

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If your Google SecOps instance is bound to a project that Google Cloud owns and manages, perform the following steps: Note: After completing these steps, you will need to obtain a new one-time access code from your Google SecOps representative and complete the procedure to enable direct ingestion from Google Cloud to restart Google Cloud log ingestion.
- To grant the Chronicle Service Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/chroniclesm.viewer To grant the Security Center Admin Editor IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/securitycenter.adminEditor ` To grant the Organization Role Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/iam.organizationRoleViewer Enable direct ingestion from Google Cloud The steps to enable direct ingestion from Google Cloud are different depending on the ownership of the project that your Google SecOps instance is bound to.
- Available log types include: Cloud Audit Logs Cloud NAT Cloud DNS Cloud Next Generation Firewall Cloud Intrusion Detection System Cloud Load Balancing Cloud SQL Windows Event logs Linux syslog Linux Sysmon Zeek Google Kubernetes Engine Audit Daemon ( auditd ) Apigee reCAPTCHA Enterprise Cloud Run logs ( GCP RUN ) Google Cloud Abuse Events Google Cloud DNS Advanced Threat Detection ( GCP DNS ATD ) Model Armor logs For details about the specific log filters and more ingestion details, see Export Google Cloud logs to Google SecOps.
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.
- Supported devices and required log types for Okta These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Tune alerts returned by rule sets You can reduce the number of detections a rule or rule set generates using rule exclusions .
- Supported devices and required log types for Azure These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label .

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-reference-required-1`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- These are default labels that are applied to data during ingestion.
- During ingestion, metadata is assigned to data in the form of labels such as namespace (optional), ingestion metadata (optional), and log type (required).
- Caution: The platform limits scopes, custom labels, and ingestion labels to 200 unique values each.
- If an ingestion label exceeds this cardinality, the platform bans it.

