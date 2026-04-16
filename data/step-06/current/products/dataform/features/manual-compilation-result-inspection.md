---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.740Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Manual compilation result inspection"
feature_slug: "manual-compilation-result-inspection"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.QueryCompilationResultActionsAsyncPager"
  - "https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle"
keywords:
  - "manual"
  - "compilation"
  - "result"
  - "inspection"
  - "lets"
  - "users"
  - "inspect"
  - "past"
---

# Manual compilation result inspection

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Manual compilation result inspection lets users inspect past manual compilation results for a selected release configuration.

## Extended Definition

Manual compilation result inspection lets users inspect past manual compilation results for a selected release configuration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.QueryCompilationResultActionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.QueryCompilationResultActionsAsyncPager)
- [https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle](https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle)

## Supporting Pages

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following release configuration creates a production compilation result from the main branch every hour, without any compilation overrides: Release ID : production Git commitish : main Frequency : hourly No compilation overrides View details of a release configuration You can view the following details of a release configuration: Release settings Git commitish Latest compilation result timestamp Cron schedule Compilation overrides Compilation variables Live compilation result Creation timestamp Git commitish Commit SHA Past compilation results To view details of a release configuration, follow these steps: In your repository, go to Releases & Scheduling .
- You can manually run the following elements of the workflow in your workspace: All actions Selected actions Actions with selected tags If your repository contains workspace compilation overrides, you can view what compilation overrides Dataform will apply to the workspace compilation result.
- The Manual/API compilation results table displays compilation results created manually or through calls to the Dataform API out of the latest 1,000 compilation results in the repository.
- When you manually trigger an execution in a workspace in a repository with workspace compilation overrides, Dataform applies these overrides to the compilation result of the workspace.

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- You can schedule Dataform runs in BigQuery in the following ways: Create workflow configurations to schedule runs of compilation results created in release configurations Schedule runs with Cloud Composer Schedule runs with Workflows and Cloud Scheduler You can also automate runs with Cloud Build triggers .
- In a release configuration, you can override the Google Cloud project in which Dataform runs the compilation results, add a prefix to names of all compiled tables, add a suffix the default schema, and add compilation variables.
- Workflow compilation Dataform uses default compilation settings, configured in the workflow settings file , to compile the workflow code in your workspace to SQL in real-time, creating a compilation result of the workspace.
- You can set dynamic workspace overrides to create compilation results custom for each workspace, turning workspaces into isolated development environments.

### "Class QueryCompilationResultActionsAsyncPager (0.10.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.QueryCompilationResultActionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.QueryCompilationResultActionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.QueryCompilationResultActionsRequest The initial request object. response google.cloud.dataform v1.types.QueryCompilationResultActionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class QueryCompilationResultActionsAsyncPager (0.10.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional QueryCompilationResultActions requests and continue to iterate through the compilation result actions field on the corresponding responses.
- This class thinly wraps an initial QueryCompilationResultActionsResponse object, and provides an aiter method to iterate through its compilation result actions field.

### "Best practices for the workflow lifecycle \_|\_ Dataform \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle](https://docs.cloud.google.com/dataform/docs/managing-code-lifecycle)
- Source ID: `site-docs-root-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- In workflow settings.yaml , configure the following settings: defaultProject : enterprise-dev defaultDataset : analytics In dataform.json , configure the following settings: { de fault Schema : "analytics" , de fault Da ta base : "enterprise-dev" } Workspace overrides Schema suffix: "${workspaceName}" staging release configuration Git commitish: "main" Google Cloud project ID: "enterprise-staging" prod release configuration Git commitish: "prod" Google Cloud project ID: "enterprise-prod" To schedule runs of staging and production compilation results, create two separate workflow configurations with custom schedules that best fit your needs.
- In workflow settings.yaml , configure the following settings: defaultProject : enterprise-dev defaultDataset : analytics In dataform.json , configure the following settings: { de fault Schema : "analytics" , de fault Da ta base : "enterprise-dev" } Workspace overrides Schema suffix: "${workspaceName}" Release configuration Git commitish: "main" Google Cloud project ID: "enterprise-prod" To schedule runs of production compilation results, create a workflow configuration with a custom schedule that best fits your needs.
- In workflow settings.yaml configure the following settings: defaultProject : enterprise-analytics defaultDataset : analytics In dataform.json , configure the following settings: { de fault Schema : "analytics" , de fault Da ta base : "enterprise-analytics" } Workspace overrides Schema suffix: "dev" Release configuration Git commitish: "main" To schedule runs of production compilation results, create a workflow configuration .
- Dataform automatically compiles production tables from the main branch of the remote repository into a compilation result according to the production release configuration settings.

