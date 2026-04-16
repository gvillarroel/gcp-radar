---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.418Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery DataFrames partial ordering mode"
feature_slug: "bigquery-dataframes-partial-ordering-mode"
latest_feature_date: "2024-09-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model"
keywords:
  - "bigquery"
  - "dataframes"
  - "partial"
  - "ordering"
  - "mode"
  - "supports"
  - "generates"
  - "more"
---

# BigQuery DataFrames partial ordering mode

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery DataFrames supports a partial ordering mode that generates more efficient queries.

## Extended Definition

BigQuery DataFrames supports a partial ordering mode that generates more efficient queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)

## Supporting Pages

### Try BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart](https://docs.cloud.google.com/bigquery/docs/dataframes-quickstart)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On BigQuery Studio, the project ID is automatically detected. bpd . options . bigquery . project = your gcp project id Use "partial" ordering mode to generate more efficient queries, but the order of the rows in DataFrames may not be deterministic if you have not explictly sorted it.
- Set the ordering mode to "strict" (default) for more pandas compatibility. bpd . options . bigquery . ordering mode = "partial" Create a DataFrame from a BigQuery table query or table = "bigquery-public-data.ml datasets.penguins" df = bpd . read gbq ( query or table ) Efficiently preview the results using the .peek() method. df . peek () Modify the bpd.options.bigquery.project = your gcp project id line to specify your Google Cloud project ID.
- Try BigQuery DataFrames Use this quickstart to perform the following analysis and machine learning (ML) tasks by using the BigQuery DataFrames API in a BigQuery notebook : Create a DataFrame over the bigquery-public-data.ml datasets.penguins public dataset.
- Add the following code to the code cell: import bigframes.pandas as bpd Set BigQuery DataFrames options Note: The project option is not required in all environments.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.
- See more details about Protecting data with Cloud KMS keys . friendly name STRING Example: friendly name="my table" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a table that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. default rounding mode STRING Example: default rounding mode = "ROUND HALF EVEN" This specifies the default rounding mode that's used for values written to any new NUMERIC or BIGNUMERIC type columns or STRUCT fields in the table.

### Create a clustering model with BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)
- Source ID: `site-docs-reference-required-15`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . from bigframes.ml.cluster import KMeans import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Create the KMeans model cluster model = KMeans ( n clusters = 10 ) cluster model . fit ( bq df [ "culmen length mm" ], bq df [ "sex" ]) Predict using the model result = cluster model . predict ( bq df ) Score the model score = cluster model . score ( bq df ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a clustering model with BigQuery DataFrames Stay organized with collections Save and categorize content based on your preferences.
- Create a k-means clustering model on the lengths and sex of penguins using the BigQuery DataFrames API.
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .

