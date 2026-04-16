---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.735Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "BigQuery job priority settings"
feature_slug: "bigquery-job-priority-settings"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/schedule-runs"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/dataform/docs/preview-queries"
  - "https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow"
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
Coverage: MEDIUM

## Step 02 Summary

BigQuery job priority settings let Dataform run queries as interactive jobs or lower-priority batch jobs.

## Extended Definition

BigQuery job priority settings let Dataform run queries as interactive jobs or lower-priority batch jobs.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/dataform/docs/preview-queries](https://docs.cloud.google.com/dataform/docs/preview-queries)
- [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)

## Supporting Pages

### Schedule runs \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/schedule-runs](https://docs.cloud.google.com/dataform/docs/schedule-runs)
- Source ID: `site-docs-root-2`
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clearing this option runs the queries as batch query jobs , which have lower priority.
- For example, to only execute actions with the hourly tag with all the transitive dependencies included, replace the createWorkflowInvocation body with the following code snippet: - createWorkflowInvocation: call: http.post args: url: ${"https://dataform.googleapis.com/v1beta1/" + repository + "/workflowInvocations"} auth: type: OAuth2 body: compilationResult: ${compilationResult.body.name} invocationConfig: includedTags: - hourly transitiveDependenciesIncluded: true You can also pass additional settings as runtime arguments in a Workflows run request and access those arguments using variables.
- Required roles To get the permissions that you need to complete the tasks in this document, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on repositories Composer Worker ( roles/composer.worker ) on the Cloud Composer environment's service account Automate runs with Cloud Build: Service Account Admin ( roles/iam.serviceAccountAdmin ) on the custom service account Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- For example, to add a dev schemaSuffix setting to all actions during compilation, replace the createCompilationResult step body with the following code snippet: - createCompilationResult: call: http.post args: url: ${"https://dataform.googleapis.com/v1beta1/" + repository + "/compilationResults"} auth: type: OAuth2 body: gitCommitish: GIT COMMITISH codeCompilationConfig: schemaSuffix: dev You can also pass additional settings as runtime arguments in a Workflows run request and access those arguments using variables.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete workflow invocation(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete team folder tree(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete workflow config(): Create a client client = dataform v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample delete release config(): Create a client client = dataform v1 .

### Preview SQL queries \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/preview-queries](https://docs.cloud.google.com/dataform/docs/preview-queries)
- Source ID: `site-docs-root-2`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Query results panel, you can view the following information about each query previewed during the current browser session: Job information BigQuery job ID User running the preview Location where the job runs, taken from your workflow settings file Creation, start, and end times of the BigQuery job Duration of the BigQuery job Bytes processed Bytes billed in BigQuery Job priority Use of legacy SQL in the query Temporary destination table of the query Results of the query JSON representation of the query output Moreover, in the Query results panel, you can navigate to the source file of each previewed query, and navigate to BigQuery Studio to view the preview job.
- Required roles To get the permissions that you need to preview queries, ask your administrator to grant you the following IAM roles: Dataform Editor ( roles/dataform.editor ) on workspaces BigQuery Job User ( roles/bigquery.jobUser ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Home Documentation Data analytics Dataform Guides Send feedback Preview SQL queries Stay organized with collections Save and categorize content based on your preferences.
- When you preview a query, Dataform runs a job in BigQuery to run your compiled query in a temporary destination table and display query results in your workspace.

### "Quickstart: Create and run a workflow \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow](https://docs.cloud.google.com/dataform/docs/quickstart-create-workflow)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces Query parameter : workspaceId= WORKSPACE ID curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d "{}" \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces?workspaceId= WORKSPACE ID " To initialize your workspace with the necessary configuration, create a local file named workflow settings.yaml and paste the following configuration: defaultProject : PROJECT ID defaultDataset : dataform dataformCoreVersion : CORE VERSION In your terminal, run the following command to encode the file content into a single continuous string: base64 -w 0 workflow settings.yaml Copy the resulting output string to use in the SETTINGS DEFINITION field in your JSON request body.
- Run the API request with the following information: Endpoint : POST https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile curl command: curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{ "path": "workflow settings.yaml", "contents": " SETTINGS DEFINITION " }' \ "https://dataform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /repositories/ REPOSITORY ID /workspaces/ WORKSPACE ID :writeFile" Replace the following: CORE VERSION : the latest stable (non-beta) version of Dataform core, for example, 3.0.43 .
- Enable the APIs Required roles To get the permissions that you need to perform all the tasks in this quickstart, ask your administrator to grant you the following IAM roles: Dataform Admin ( roles/dataform.admin ) on the project or repository BigQuery Data Editor ( roles/bigquery.dataEditor ) on the project or specific datasets BigQuery Job User ( roles/bigquery.jobUser ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the custom service account For more information about granting roles, see Manage access to projects, folders, and organizations .
- In this quickstart, you'll learn how to create and run a Dataform workflow using Dataform core, a SQL-based framework to transform raw data into curated, tested, and documented data assets.

