---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.946Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery template tables for Streaming API"
feature_slug: "bigquery-template-tables-for-streaming-api"
latest_feature_date: "2015-12-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "template table management"
  - "template tables feature"
  - "template tables"
  - "template table"
  - "streaming table templates"
  - "streaming templates"
  - "streaming inserts"
  - "Streaming API"
---

# BigQuery template tables for Streaming API

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added template tables to manage related tables used for streaming workflows.

## Extended Definition

BigQuery added template tables to manage related tables used for streaming workflows.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Class Client (3.40.1) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client](https://docs.cloud.google.com/python/docs/reference/bigquery/latest/google.cloud.bigquery.client.Client)
- Source ID: `site-python-reference`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: It contains broad BigQuery Python client configuration details, but no streaming-template-table API or concept definitions.

Evidence snippets:
- See https://cloud.google.com/bigquery/quotas#streaming inserts Parameters Name Description kwargs Dict Keyword arguments to insert rows json . table Union[ google.cloud.bigquery.table.Table , google.cloud.bigquery.table.TableReference , str, ] The destination table for the row data, or a reference to it. dataframe pandas.DataFrame A pandas.DataFrame containing the data to load.
- See https://cloud.google.com/bigquery/quotas#streaming inserts Parameters Name Description kwargs dict Keyword arguments to insert rows json . table Union[ google.cloud.bigquery.table.Table , google.cloud.bigquery.table.TableReference , str, ] The destination table for the row data, or a reference to it. rows Union[Sequence[Tuple], Sequence[Dict]] Row data to be inserted.
- See https://cloud.google.com/bigquery/quotas#streaming inserts Parameters Name Description table Union[ google.cloud.bigquery.table.Table google.cloud.bigquery.table.TableReference , google.cloud.bigquery.table.TableListItem , str ] The destination table for the row data, or a reference to it. json rows Sequence[Dict] Row data to be inserted.
- Any NaN values present in the dataframe are omitted from the streaming API request(s). selected fields Sequence[ google.cloud.bigquery.schema.SchemaField ] The fields to return.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- You might also want to consider replacing streaming inserts with the newer Storage Write API , which has higher throughput, lower price, and many useful features.
- These views contain metadata about your BigQuery resources, including jobs, reservations, and streaming inserts.
- In certain regions, streaming inserts have a higher quota if you don't populate the insertId field for each row.
- If you are using a Dataflow job to insert data, consider using load jobs instead of streaming inserts.

