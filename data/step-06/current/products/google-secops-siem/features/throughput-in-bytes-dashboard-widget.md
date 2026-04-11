---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.385Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Throughput in bytes dashboard widget"
feature_slug: "throughput-in-bytes-dashboard-widget"
latest_feature_date: "2025-06-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "throughput"
  - "in"
  - "bytes"
  - "dashboard"
  - "widget"
  - "shows"
  - "ingestion"
  - "volume"
---

# Throughput in bytes dashboard widget

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

A dashboard widget shows ingestion volume over time in bytes.

## Extended Definition

A dashboard widget shows ingestion volume over time in bytes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Throughput in bytes : shows ingestion volume over time.
- Feature RBAC for ingestion metrics Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
- The total entry number and total size bytes fields are defined in the new explore and used to query the log count and log volume for the Google SecOps Ingestion API.
- June 18, 2025 Feature New data ingestion and health dashboard widgets are now available.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Throughput in bytes : shows ingestion volume over time.
- Feature RBAC for ingestion metrics Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
- The total entry number and total size bytes fields are defined in the new explore and used to query the log count and log volume for the Google SecOps Ingestion API.
- June 18, 2025 Feature New data ingestion and health dashboard widgets are now available.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- The ingestion volume and tenant's usage history determine the threshold.
- To grant the Chronicle Service Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/chroniclesm.viewer To grant the Security Center Admin Editor IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/securitycenter.adminEditor ` To grant the Organization Role Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/iam.organizationRoleViewer Enable direct ingestion from Google Cloud The steps to enable direct ingestion from Google Cloud are different depending on the ownership of the project that your Google SecOps instance is bound to.
- The following export filter captures Data Access logs and excludes high-volume events such as Read and List operations of Cloud Storage and Cloud SQL: ( log id("cloudaudit.googleapis.com/data access") AND NOT protoPayload.methodName = "^storage\.(buckets objects)\.(get list)$" AND NOT protoPayload.request.cmd = "select" AND NOT protoPayload.methodName = "^google\.spanner\.v1\.Spanner\.(ExecuteStreamingSql BeginTransaction Commit)$" ) For more information about tuning Data Access logs generated by Cloud Audit Logs, see Manage the volume of Data Access audit logs .
- Available log types include: Cloud Audit Logs Cloud NAT Cloud DNS Cloud Next Generation Firewall Cloud Intrusion Detection System Cloud Load Balancing Cloud SQL Windows Event logs Linux syslog Linux Sysmon Zeek Google Kubernetes Engine Audit Daemon ( auditd ) Apigee reCAPTCHA Enterprise Cloud Run logs ( GCP RUN ) Google Cloud Abuse Events Google Cloud DNS Advanced Threat Detection ( GCP DNS ATD ) Model Armor logs For details about the specific log filters and more ingestion details, see Export Google Cloud logs to Google SecOps.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- Dynamic List The Dynamic list is an optional feature that lets you build an advanced filter for ingestion.
- The most common use case is to define an allowlist or a blocklist for ingestion.
- If a predefined widget is updated: {action name} - Updated Predefined Widget.

