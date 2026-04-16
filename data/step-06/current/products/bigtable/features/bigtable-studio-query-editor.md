---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:18:27.984Z"
product_name: "Bigtable"
product_slug: "bigtable"
feature_name: "Bigtable Studio query editor"
feature_slug: "bigtable-studio-query-editor"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views"
  - "https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform"
keywords:
  - "editor"
  - "studio"
  - "query"
  - "preview"
  - "generally"
  - "available"
---

# Bigtable Studio query editor

Product: Bigtable
Coverage: MEDIUM

## Step 02 Summary

The Bigtable Studio query editor is now generally available; The Bigtable Studio query editor is now available in preview for managing and querying Bigtable data.

## Extended Definition

The Bigtable Studio query editor is now generally available; The Bigtable Studio query editor is now available in preview for managing and querying Bigtable data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views](https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views)
- [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)

## Supporting Pages

### Create and manage logical views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views](https://docs.cloud.google.com/bigtable/docs/create-manage-logical-views)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information about using the query editor, see Manage your data using Bigtable Studio . gcloud To create a logical view, use the gcloud bigtable logical-views create command. gcloud bigtable logical-views create VIEW \ --instance = INSTANCE --query = QUERY Replace the following: VIEW : an ID up to 128 characters long for the new logical view.
- To query a logical view, you can use the Bigtable Studio query editor or any of the Bigtable client libraries that support SQL .
- You can create a logical view using the Google Cloud CLI or the Bigtable Studio query editor in the Google Cloud console.
- For example, if your view is named MyLogicalView : SELECT FROM MyLogicalView LIMIT 100 ; For more information about executing SQL queries in Bigtable, see Query your data with SQL in the query editor .

### Continuous materialized views \_|\_ Bigtable \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views](https://docs.cloud.google.com/bigtable/docs/continuous-materialized-views)
- Source ID: `site-docs-reference-2`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can read from a continuous materialized view by using the following: Bigtable Studio query editor The Bigtable client libraries that support SQL queries ReadRows API call using the Bigtable client libraries for Java and Go For more information, see Reading from a continuous materialized view .
- You can create a continuous materialized view using the Google Cloud CLI, the Bigtable Studio query editor in the Google Cloud console, or the Bigtable client libraries for Java and Go.
- This helps to ensure that enough compute capacity is available during the execution of the continuously running SQL query.
- During this time, the view is unavailable for querying.

### "Vertex AI roles and permissions \_|\_ Identity and Access Management (IAM)\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform](https://docs.cloud.google.com/iam/docs/roles-permissions/aiplatform)
- Source ID: `site-iam-reference`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform.operations.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Notebooks Admin ( roles/ notebooks.admin ) Colab Enterprise Admin ( roles/ aiplatform.colabEnterpriseAdmin ) Colab Enterprise User ( roles/ aiplatform.colabEnterpriseUser ) Vertex AI Platform Express Admin ( roles/ aiplatform.expressAdmin ) Vertex AI Platform Express User ( roles/ aiplatform.expressUser ) Vertex AI Feature Store Admin ( roles/ aiplatform.featurestoreAdmin ) Vertex AI Feature Store Resource Viewer ( roles/ aiplatform.featurestoreResourceViewer ) Vertex AI Feature Store User ( roles/ aiplatform.featurestoreUser ) Notebook Executor User ( roles/ aiplatform.notebookExecutorUser ) Notebook Runtime Admin ( roles/ aiplatform.notebookRuntimeAdmin ) Notebook Runtime User ( roles/ aiplatform.notebookRuntimeUser ) Vertex AI User ( roles/ aiplatform.user ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) BigQuery Studio User ( roles/ bigquery.studioUser ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Notebooks Runner ( roles/ notebooks.runner ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) AI Platform Notebooks Service Agent ( roles/ notebooks.serviceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform. notebookRuntimes. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Colab Enterprise Admin ( roles/ aiplatform.colabEnterpriseAdmin ) Colab Enterprise User ( roles/ aiplatform.colabEnterpriseUser ) Notebook Runtime Admin ( roles/ aiplatform.notebookRuntimeAdmin ) Notebook Runtime User ( roles/ aiplatform.notebookRuntimeUser ) Vertex AI User ( roles/ aiplatform.user ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) BigQuery Studio User ( roles/ bigquery.studioUser ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform.locations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Vertex AI Viewer ( roles/ aiplatform.viewer ) Colab Enterprise Admin ( roles/ aiplatform.colabEnterpriseAdmin ) Colab Enterprise User ( roles/ aiplatform.colabEnterpriseUser ) Notebook Runtime Admin ( roles/ aiplatform.notebookRuntimeAdmin ) Notebook Runtime User ( roles/ aiplatform.notebookRuntimeUser ) Vertex AI User ( roles/ aiplatform.user ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) BigQuery Studio User ( roles/ bigquery.studioUser ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent ) Visual Inspection AI Service Agent ( roles/ visualinspection.serviceAgent ) aiplatform. notebookRuntimeTemplates. getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Vertex AI Administrator ( roles/ aiplatform.admin ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Colab Enterprise Admin ( roles/ aiplatform.colabEnterpriseAdmin ) Colab Enterprise User ( roles/ aiplatform.colabEnterpriseUser ) Notebook Runtime Admin ( roles/ aiplatform.notebookRuntimeAdmin ) Notebook Runtime User ( roles/ aiplatform.notebookRuntimeUser ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) BigQuery Studio User ( roles/ bigquery.studioUser ) Data Scientist ( roles/ iam.dataScientist ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

