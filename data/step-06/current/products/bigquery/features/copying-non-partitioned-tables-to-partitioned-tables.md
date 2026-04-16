---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.896Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Copying non-partitioned tables to partitioned tables"
feature_slug: "copying-non-partitioned-tables-to-partitioned-tables"
latest_feature_date: "2017-02-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists"
keywords:
  - "copying"
  - "non"
  - "partitioned"
  - "tables"
  - "bigquery"
  - "supports"
  - "into"
---

# Copying non-partitioned tables to partitioned tables

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports copying data from non-partitioned tables into partitioned tables.

## Extended Definition

BigQuery supports copying data from non-partitioned tables into partitioned tables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)

## Supporting Pages

### "Create a BigQuery DataFrame from a finished query job \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-load-data-from-bigquery-job)
- Source ID: `site-docs-reference-required-15`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( project = project , location = location ) Job ID inserted based on the query results selcted to explore job id = JOB ID job = client . get job ( job id ) destination = str ( job . destination ) Load data from a BigQuery table using BigFrames DataFrames: bq df = bpd . read gbq table ( destination ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery import bigframes.pandas as bpd Project ID inserted based on the query results selected to explore project = your project id Location inserted based on the query results selected to explore location = "us" client = bigquery .
- Home Documentation Data analytics BigQuery Samples Create a BigQuery DataFrame from a finished query job Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames API to explore the results of a query job that may have been started elsewhere, such as from the BigQuery Console or bq CLI.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Note: To get support or provide feedback for this feature, contact bigquery-permission-migration-support@google.com .

### Check dataset existence \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataset-exists)
- Source ID: `site-docs-reference-required-15`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService (); Dataset dataset = bigquery . getDataset ( DatasetId . of ( datasetName )); if ( dataset != null ) { System . out . println ( "Dataset already exists." ); } else { System . out . println ( "Dataset not found." ); } } catch ( BigQueryException e ) { System . out . println ( "Something went wrong. \n" + e . toString ()); } } } Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Explore further For detailed documentation that includes this code sample, see the following: Listing datasets Code sample Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery from google.cloud.exceptions import NotFound client = bigquery .
- Home Documentation Data analytics BigQuery Samples Check dataset existence Stay organized with collections Save and categorize content based on your preferences.

