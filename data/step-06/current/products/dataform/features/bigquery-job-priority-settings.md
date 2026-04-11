---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.378Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "BigQuery job priority settings"
feature_slug: "bigquery-job-priority-settings"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/schedule-runs"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/dataform/docs/release-notes"
keywords:
  - "job"
  - "priority"
  - "settings"
  - "let"
  - "dataform"
  - "run"
  - "queries"
  - "as"
---

# BigQuery job priority settings

Product: Dataform
Coverage: LOW

## Step 02 Summary

BigQuery job priority settings let Dataform run queries as interactive jobs or lower-priority batch jobs.

## Extended Definition

BigQuery job priority settings let Dataform run queries as interactive jobs or lower-priority batch jobs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)

## Supporting Pages

### Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- Source ID: `site-docs-root-2`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Clearing this option runs the queries as batch query jobs , which have lower priority.
- For example, to only execute actions with the hourly tag with all the transitive dependencies included, replace the createWorkflowInvocation body with the following code snippet: - createWorkflowInvocation: call: http.post args: url: ${"https://dataform.googleapis.com/v1beta1/" + repository + "/workflowInvocations"} auth: type: OAuth2 body: compilationResult: ${compilationResult.body.name} invocationConfig: includedTags: - hourly transitiveDependenciesIncluded: true You can also pass additional settings as runtime arguments in a Workflows run request and access those arguments using variables.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on repositories Composer Worker ( roles/composer.worker ) on the Cloud Composer environment's service account Automate runs with Cloud Build: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the custom service account Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, to add a dev schemaSuffix setting to all actions during compilation, replace the createCompilationResult step body with the following code snippet: - createCompilationResult: call: http.post args: url: ${"https://dataform.googleapis.com/v1beta1/" + repository + "/compilationResults"} auth: type: OAuth2 body: gitCommitish: GIT COMMITISH codeCompilationConfig: schemaSuffix: dev You can also pass additional settings as runtime arguments in a Workflows run request and access those arguments using variables.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete workflow invocation(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete team folder tree(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete workflow config(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete release config(): Create a client client = dataform v1 .

### Dataform release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/release-notes](https://docs.cloud.google.com/dataform/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Feature You can set the priority of BigQuery jobs in Dataform to run queries as interactive jobs that start running as quickly as possible or as batch jobs with lower priority.
- This feature enhances security by requiring users to have the iam.serviceAccounts.actAs permission on the service account used to run workflows, ensuring a more secure and predictable permissions model for your Dataform projects.
- September 02, 2025 Feature Dataform now automatically selects a processing location based on the datasets referenced in your SQL queries.
- This feature lets you organize code assets like notebooks and saved queries into a hierarchical structure with IAM policy inheritance.

