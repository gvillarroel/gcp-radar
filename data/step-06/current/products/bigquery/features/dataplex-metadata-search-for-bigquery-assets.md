---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.392Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataplex metadata search for BigQuery assets"
feature_slug: "dataplex-metadata-search-for-bigquery-assets"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial"
keywords:
  - "dataplex"
  - "metadata"
  - "search"
  - "bigquery"
  - "assets"
  - "console"
  - "can"
  - "display"
---

# Dataplex metadata search for BigQuery assets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The Dataplex console can search and display metadata for data canvases, data preparations, notebooks, saved queries, and workflows.

## Extended Definition

The Dataplex console can search and display metadata for data canvases, data preparations, notebooks, saved queries, and workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- The Explorer pane lists different code assets and data resources, and it lets you search for BigQuery resources.
- Go to Overview You can also open the BigQuery Overview page by entering the following URL in your browser: https://console.cloud.google.com/bigquery/overview Review the following sections of the Overview page: The Introduction section: gives you a quick video overview of BigQuery's capabilities.
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Go to Studio Alternatively, enter the following URL in your browser: https://console.cloud.google.com/bigquery The Studio page opens in your most recently accessed project.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 2 columns: corpus: Name of a Shakespeare corpus top words: An ARRAY of STRUCT s containing 2 fields: word (a STRING ) and word count (an INT64 with the word count) Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.
- If the table name exists in the dataset, the following error is returned: Already Exists: project id:dataset.table The table schema contains 3 columns: x: A REQUIRED integer y: A REQUIRED STRUCT containing a (an array of strings), b (a REQUIRED boolean), and c (a NULLABLE float) z: A NULLABLE string Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD, and an ARRAY is displayed as REPEATED.
- The table schema contains two columns: x: An integer, with description "An optional INTEGER field" y: A STRUCT containing two columns: a: An array of strings, with description "A repeated STRING field" b: A boolean Note: When you examine the table schema in the Google Cloud console, a STRUCT is displayed as a RECORD column, and an ARRAY is displayed as a REPEATED column.

### "Perform semantic search and retrieval-augmented generation \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial](https://docs.cloud.google.com/bigquery/docs/vector-index-text-search-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Generate text augmented by vector search results Feed the search results as prompts to generate text with the AI.GENERATE TEXT function In the Google Cloud console, go to the BigQuery page.
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model for text embedding generation Create a remote model that represents a hosted Vertex AI text embedding generation model: In the Google Cloud console, go to the BigQuery page.
- Methods for improving security in data... +-----------------------------+--------------------+-------------------------------------------------+-------------------------------------------------+ Create the remote model for text generation Create a remote model that represents a hosted Vertex AI text generation model: In the Google Cloud console, go to the BigQuery page.
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .

