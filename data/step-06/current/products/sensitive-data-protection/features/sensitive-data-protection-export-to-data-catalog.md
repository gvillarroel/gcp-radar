---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.283Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Sensitive Data Protection export to Data Catalog"
feature_slug: "sensitive-data-protection-export-to-data-catalog"
latest_feature_date: "2025-05-01"
deprecation_date: "2025-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql"
keywords:
  - "catalog"
  - "export"
  - "send"
  - "inspection"
  - "discovery"
---

# Sensitive Data Protection export to Data Catalog

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection can send inspection and discovery results to Data Catalog, and this export path is deprecated; deprecated on 2025-09-30.

## Extended Definition

Sensitive Data Protection can send inspection and discovery results to Data Catalog, and this export path is deprecated; deprecated on 2025-09-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)

## Supporting Pages

### "Enable inspection or risk analysis actions \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-actions)
- Source ID: `site-api-reference-required-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Publish to Knowledge Catalog Send the results of a BigQuery inspection job to Knowledge Catalog.
- For more information, see Send inspection results to Knowledge Catalog as aspects .
- Action BigQuery inspection Cloud Storage inspection Datastore inspection Hybrid inspection Risk analysis Save findings to BigQuery ✓ ✓ ✓ ✓ ✓ Save findings to Cloud Storage ✓ ✓ ✓ ✓ Publish to Pub/Sub ✓ ✓ ✓ ✓ ✓ Publish to Security Command Center ✓ ✓ ✓ Publish to Knowledge Catalog ✓ Publish to Data Catalog ( Deprecated ) ✓ Notify by email ✓ ✓ ✓ ✓ ✓ Publish to Cloud Monitoring ✓ ✓ ✓ ✓ De-identify findings ✓ Specify actions You can specify one or more actions when you configure a job: When you create a new inspection or risk analysis job using Sensitive Data Protection in the Google Cloud console, specify actions in the Add actions section of the job creation workflow.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Enable inspection or risk analysis actions Stay organized with collections Save and categorize content based on your preferences.

### "Send inspection results to Knowledge Catalog as aspects \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job](https://docs.cloud.google.com/sensitive-data-protection/docs/add-aspects-inspection-job)
- Source ID: `site-api-reference-required-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Send inspection results to Knowledge Catalog as aspects Stay organized with collections Save and categorize content based on your preferences.
- This document describes how to inspect a BigQuery table for sensitive data and send the inspection results to Knowledge Catalog.
- The Sensitive Data Protection feature that lets you send inspection results to Data Catalog is also deprecated.
- Save the request body in a file named inspect-request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile inspect-request.json ` -Uri "https://dlp.googleapis.com/v2/projects/ PROJECT ID /locations/ LOCATION /dlpJobs" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT ID /locations/ LOCATION /dlpJobs/ JOB ID ", "type": "INSPECT JOB", "state": "PENDING", "inspectDetails": { "requestedOptions": { "snapshotInspectTemplate": {}, "jobConfig": { "storageConfig": { "bigQueryOptions": { "tableReference": { "projectId": " PROJECT ID ", "datasetId": " BIGQUERY DATASET NAME ", "tableId": " BIGQUERY TABLE NAME " } } }, "inspectConfig": { "infoTypes": [ { "name": "EMAIL ADDRESS" }, { "name": "PERSON NAME" }, { "name": "US SOCIAL SECURITY NUMBER" }, { "name": "PHONE NUMBER" } ], "minLikelihood": "UNLIKELY", "limits": { "maxFindingsPerRequest": 100 }, "includeQuote": true }, "actions": [ { "publishFindingsToDataplexCatalog": {} } ] } }, "result": {} }, "createTime": "2025-09-09T00:29:55.951374Z", "lastModified": "2025-09-09T00:29:58.022967Z" } For information about how to get the inspection job results using the DLP API, see Get a job .

### "Profile Cloud SQL data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-sql)
- Source ID: `site-docs-reference-3`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Send to Knowledge Catalog as aspects This action lets you add Knowledge Catalog aspects to profiled tables based on insights from data profiles.
- To send the data profiles to Knowledge Catalog, make sure that the Send to Dataplex Catalog as aspects option is turned on.
- If you select Send a Pub/Sub notification each time a profile is updated , Sensitive Data Protection sends a notification when there's a change in the sensitivity level, data risk level, detected infoTypes, public access, and other important metrics in the profile.
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.

