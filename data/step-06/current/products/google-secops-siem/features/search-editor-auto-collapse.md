---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.523Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Search editor auto-collapse"
feature_slug: "search-editor-auto-collapse"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "search"
  - "editor"
  - "auto"
  - "collapse"
  - "automatically"
  - "collapses"
  - "after"
  - "query"
---

# Search editor auto-collapse

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The search editor automatically collapses after a query runs to provide more space for results.

## Extended Definition

The search editor automatically collapses after a query runs to provide more space for results.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- When you run a query, the search editor panel automatically collapses to provide more space for the results.
- To control the auto-suggestions shown in the query editor, adjust the following settings: Enable suggestions while typing : Enables auto-suggestion.
- Use auto-suggestions to build queries When you write a query, the editor provides auto-suggestions to help you build queries efficiently.
- If your simple query concurrency limit is exhausted, they automatically consume available complex query quota.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- After this time-limited IOC expires, Google SecOps automatically reverts to using the previous IOC version if it's still active (for example, the indefinite active version).
- Retroactive matching : when new IOCs are added to any integrated threat intelligence feed (either Google-provided or customer-provided), Google SecOps automatically scans your historical data (up to your full data retention period, typically one year) for any past occurrences of these new indicators.
- Google Security Operations continuously ingests data from your infrastructure and other security data sources, and automatically correlates suspicious security indicators with your security data.
- How Google SecOps automatically matches IOCs Google SecOps automatically correlates your ingested security data against known threat indicators from various threat intelligence feeds.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- To grant the Chronicle Service Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/chroniclesm.viewer To grant the Security Center Admin Editor IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/securitycenter.adminEditor ` To grant the Organization Role Viewer IAM role using gcloud , run the following command: gcloud organizations add-iam-policy-binding ORGANIZATION ID \ --member "user: USER EMAIL " \ --role roles/iam.organizationRoleViewer Enable direct ingestion from Google Cloud The steps to enable direct ingestion from Google Cloud are different depending on the ownership of the project that your Google SecOps instance is bound to.
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- If your Google SecOps instance is bound to a project that Google Cloud owns and manages, perform the following steps: Note: After completing these steps, you will need to obtain a new one-time access code from your Google SecOps representative and complete the procedure to enable direct ingestion from Google Cloud to restart Google Cloud log ingestion.
- For more information about exporting specific context logs and ingesting them into Google SecOps, see Default parser configuration and ingestion and search for 'context' or 'analysis'.

