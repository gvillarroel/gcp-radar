---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.554Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery AWS Glue federated datasets"
feature_slug: "bigquery-aws-glue-federated-datasets"
latest_feature_date: "2024-05-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "AWS Glue integration"
  - "Glue federated dataset"
  - "BigQuery AWS Glue"
  - "create federated dataset"
  - "AWS Glue"
  - "federated dataset GA"
  - "federated data source"
  - "Google Cloud Console"
---

# BigQuery AWS Glue federated datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery added the ability to create AWS Glue federated datasets via the Google Cloud Console, and the capability is generally available.

## Extended Definition

BigQuery supports creating AWS Glue federated datasets via SQL by using `CREATE EXTERNAL SCHEMA` with `EXTERNAL SOURCE` set to an AWS Glue URI in `aws-glue://...` ARN format. The referenced DDL behavior requires the statement to use an AWS location appropriate for AWS Glue federated datasets, meaning the location must match the type of federated dataset being created. This evidence is based on SQL syntax and examples and does not by itself confirm console-based workflow or release-state wording.

## Evidence Summary

The cited BigQuery DDL reference page demonstrates how to define an AWS Glue federated dataset with `CREATE EXTERNAL SCHEMA` and documents the required `aws-glue://` ARN external source format and location constraints.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example creates an AWS Glue federated dataset: CREATE EXTERNAL SCHEMA mydataset WITH CONNECTION myproject . aws-us-east-1 . myconnection OPTIONS ( external source = 'aws-glue://arn:aws:glue:us-east-1:123456789:database/test database' , location = 'aws-us-east-1' ); CREATE EXTERNAL TABLE statement Creates a new external table.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations. external source STRING The source of the external dataset.
- The location must support the kind of federated dataset that you are creating, for example, you can only create AWS Glue federated datasets in AWS locations.
- For AWS Glue federated datasets this must be an Amazon Resource Name (ARN) , with a prefix identifying the source, such as aws-glue:// .

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Generic Cinematography and boring, there's really nothing... ... ... ... +--------------+------------------+----------------------------------------+ Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Enable the APIs Make sure that you have the following role or roles on the project: BigQuery Admin , Project IAM Admin Check for the roles In the Google Cloud console, go to the IAM page.

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-root-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Perform keyword extraction Perform keyword extraction on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Perform sentiment analysis Perform sentiment analysis on IMDB movie reviews by using the remote model and the AI.GENERATE TEXT function: In the Google Cloud console, go to the BigQuery page.
- Before you begin In the Google Cloud console, on the project selector page, select or create a Google Cloud project.

