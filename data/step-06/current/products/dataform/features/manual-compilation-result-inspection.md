---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.384Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Manual compilation result inspection"
feature_slug: "manual-compilation-result-inspection"
latest_feature_date: "2024-06-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/configure-compilation"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsPager"
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
Coverage: LOW

## Step 02 Summary

Manual compilation result inspection lets users inspect past manual compilation results for a selected release configuration.

## Extended Definition

Manual compilation result inspection lets users inspect past manual compilation results for a selected release configuration.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsPager)

## Supporting Pages

### Configure compilations \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/configure-compilation](https://docs.cloud.google.com/dataform/docs/configure-compilation)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, the following release configuration creates a production compilation result from the main branch every hour, without any compilation overrides: Release ID : production Git commitish : main Frequency : hourly No compilation overrides View details of a release configuration You can view the following details of a release configuration: Release settings Git commitish Latest compilation result timestamp Cron schedule Compilation overrides Compilation variables Live compilation result Creation timestamp Git commitish Commit SHA Past compilation results To view details of a release configuration, follow these steps: In your repository, go to Releases & Scheduling .
- You can manually run the following elements of the workflow in your workspace: All actions Selected actions Actions with selected tags If your repository contains workspace compilation overrides, you can view what compilation overrides Dataform will apply to the workspace compilation result.
- The Manual/API compilation results table displays compilation results created manually or through calls to the Dataform API out of the latest 1,000 compilation results in the repository.
- When you manually trigger an execution in a workspace in a repository with workspace compilation overrides, Dataform applies these overrides to the compilation result of the workspace.

### "Class ListCompilationResultsAsyncPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.ListCompilationResultsRequest The initial request object. response google.cloud.dataform v1.types.ListCompilationResultsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListCompilationResultsAsyncPager (0.10.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListCompilationResults requests and continue to iterate through the compilation results field on the corresponding responses.
- This class thinly wraps an initial ListCompilationResultsResponse object, and provides an aiter method to iterate through its compilation results field.

### "Class ListCompilationResultsPager (0.10.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsPager](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.pagers.ListCompilationResultsPager)
- Source ID: `site-python-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataform v1.types.ListCompilationResultsRequest The initial request object. response google.cloud.dataform v1.types.ListCompilationResultsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Home Documentation Developer tools Python Client libraries Send feedback Class ListCompilationResultsPager (0.10.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListCompilationResults requests and continue to iterate through the compilation results field on the corresponding responses.
- This class thinly wraps an initial ListCompilationResultsResponse object, and provides an iter method to iterate through its compilation results field.

