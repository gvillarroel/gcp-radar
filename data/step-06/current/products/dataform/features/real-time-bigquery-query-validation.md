---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:40.401Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Real-time BigQuery query validation"
feature_slug: "real-time-bigquery-query-validation"
latest_feature_date: "2022-11-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient"
keywords:
  - "real"
  - "time"
  - "query"
  - "validation"
  - "dataform"
  - "can"
  - "validate"
  - "compiled"
---

# Real-time BigQuery query validation

Product: Dataform
Coverage: LOW

## Step 02 Summary

Dataform can validate compiled queries against BigQuery in real time.

## Extended Definition

Dataform can validate compiled queries against BigQuery in real time.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)

## Supporting Pages

### Dataform overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/overview](https://docs.cloud.google.com/dataform/docs/overview)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In a Dataform workspace, you can develop the following workflow actions: Source data declarations Tables and views Incremental tables Table partitions and clusters Dependencies between actions Documentation of tables Custom SQL operations BigQuery labels BigQuery policy tags Dataform tags Data quality tests, called assertions You can use JavaScript to reuse your Dataform workflow code in the following ways: Across a file with code encapsulation Across a repository with includes Across repositories with packages Dataform compiles the workflow code in your workspace in real-time.
- Dataform compiles your Dataform core code in real time to create a SQL compilation result that you can run in BigQuery.
- To test the output of a compiled SQL query before you run it to BigQuery, you can run preview of the query in your Dataform workspace.
- To debug in real-time, you can inspect the compiled workflow of your project in an interactive graph in your development workspace.

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Note: This method can return repositories not shown in the Dataform UI <https://console.cloud.google.com/bigquery/dataform> .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 async def sample query repository directory contents(): Create a client client = dataform v1 .

### "Class DataformClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformClient)
- Source ID: `site-python-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Note: This method can return repositories not shown in the Dataform UI <https://console.cloud.google.com/bigquery/dataform> .
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Can be in the format of: "" to move into the root User folder, projects/ /locations/ /folders/ , projects//locations/ /teamFolders/ This corresponds to the destination containing folder field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dataform v1 def sample query repository directory contents(): Create a client client = dataform v1 .

