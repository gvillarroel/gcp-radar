---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.494Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2026-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "vpc"
  - "controls"
  - "protect"
  - "resources"
  - "perimeters"
  - "reduce"
  - "exfiltration"
  - "risk"
---

# VPC Service Controls

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

VPC Service Controls protect Google Cloud resources and data with service perimeters to reduce exfiltration risk.

## Extended Definition

VPC Service Controls protect Google Cloud resources and data with service perimeters to reduce exfiltration risk.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- CDIR SCC Enhanced Exfiltration : Contains context-aware rules that correlate Security Command Center Exfiltration findings with other log sources, including Cloud Audit Logs logs, Sensitive Data Protection context, BigQuery context and Security Command Center Misconfiguration logs.
- Google Workspace-related rule sets The following rule sets detect patterns in Google Workspace data: Potential Insider Data Exfiltration from Chrome Potential Insider Data Exfiltration from Drive Potential Insider Data Exfiltration from Gmail Potential Workspace Account Compromise Suspicious Workspace Administrative Actions These rule sets require the following log types, listed by product name and Google SecOps ingestion label: Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Users ( WORKSPACE USERS ) Google Chrome Browser Cloud Management ( CHROME MANAGEMENT ) Gmail logs ( GMAIL LOGS ) To ingest the required data, do the following: Collect the data listed in the All rule sets section of this document.
- The following log data, listed by product name and Google SecOps ingestion label: BigQuery ( GCP BIGQUERY CONTEXT ) Compute Engine ( GCP COMPUTE CONTEXT ) IAM ( GCP IAM CONTEXT ) Sensitive Data Protection ( GCP DLP CONTEXT ) Cloud Audit Logs ( GCP CLOUDAUDIT ) Google Workspace Activity ( WORKSPACE ACTIVITY ) Cloud DNS queries ( GCP DNS ) The following Security Command Center finding classes , listed by findingClass identifier and Google SecOps ingestion label: Threat ( GCP SECURITYCENTER THREAT ) Misconfiguration ( GCP SECURITYCENTER MISCONFIGURATION ) Vulnerability ( GCP SECURITYCENTER VULNERABILITY ) SCC Error ( GCP SECURITYCENTER ERROR ) The CDIR SCC Enhanced rule sets also depend on data from Google Cloud services.
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Comprehensive Google Cloud protection and AI security : Reduce cloud risk and secure your cloud and AI workloads, anywhere.
- Further Resources to get started: Model Armor Documentation AI Protection Overview Blog Post Security Command Center Documentation Sensitive Data Protection Documentation Continuous Security Validation: Stop Reacting, Start Preventing with Google SecOps Security teams in SOCs are constantly overwhelmed trying to keep up with the ever-changing threat landscape.
- Enable Secure AI Adoption from Creation to Consumption Google Cloud's AI Protection is a comprehensive set of capabilities integrated directly into Security Command Center Enterprise (SCC-E), designed to help you proactively manage the unique risks associated across the AI lifecycle.
- By providing a centralized view of your AI assets, risks, and threats alongside your broader cloud security landscape, AI Protection empowers security teams and developers to confidently build and deploy AI solutions.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Note: If your organization implements VPC Service Controls , no additional ingress or egress rule is required for Google SecOps to access resources and services outside its service perimeter.
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- Troubleshooting If the relationships between resources and identities are missing from your Google SecOps instance, disable and then re-enable direct ingestion of log data to Google SecOps.
- To ingest Sensitive Data Protection asset metadata ( DLP CONTEXT ), perform the following: Enable Google Cloud data ingestion by completing the previous section in this document.

