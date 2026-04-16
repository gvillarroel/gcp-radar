---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.298Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Default Cloud resource connections"
feature_slug: "default-cloud-resource-connections"
latest_feature_date: "2025-09-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma"
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
keywords:
  - "default"
  - "resource"
  - "connections"
  - "bigquery"
  - "supports"
  - "reusable"
  - "project"
  - "level"
---

# Default Cloud resource connections

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports reusable default Cloud resource connections at the project level; BigQuery projects can define reusable default Cloud resource connections.

## Extended Definition

BigQuery supports reusable default Cloud resource connections at the project level; BigQuery projects can define reusable default Cloud resource connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)

## Supporting Pages

### BigQuery APIs and libraries overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview](https://docs.cloud.google.com/bigquery/docs/reference/libraries-overview)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For links to the reference documentation and source code, select a language: C++ API Reference Documentation Source Code C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code Node.js API Reference Documentation Source Code PHP API Reference Documentation Source Code Python API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Reservation API This API provides the mechanisms by which enterprise users can provision and manage dedicated resources such as slots and BigQuery BI Engine memory allocations.
- For links to the reference documentation and source code, select a language: C++ API Reference Documentation Source Code C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code Node.js API Reference Documentation Source Code PHP API Reference Documentation Source Code Python API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Migration API This API supports mechanisms to help users migrate existing data warehouses to BigQuery.
- For links to the reference documentation and source code, select a language: C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code Node.js API Reference Documentation Source Code PHP API Reference Documentation Source Code Python API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Data Policy API This API helps users manage BigQuery data policies for column-level security and data masking.
- For links to the reference documentation and source code, select a language: C++ API Reference Documentation Source Code C# API Reference Documentation Source Code Go API Reference Documentation Source Code Java API Reference Documentation Source Code PHP API Reference Documentation Source Code Ruby API Reference Documentation Source Code BigQuery Connection API This API provides the control plane for establishing remote connections to allow BigQuery to interact with remote data sources such as Cloud SQL.

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Note: The cloud resource nested object has only one output field - serviceAccountId. resource "google bigquery connection" "default" { connection id = "my cloud resource connection" project = data.google project.default.project id location = "US" cloud resource {} } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- ConnectionServiceClient () def create connection ( project id : str , location : str , connection id : str , ): """Creates a BigQuery connection to a Cloud Resource.
- CONNECTION ID OPTIONS ( ENDPOINT = 'gemini-2.5-flash' ); Replace the following: LOCATION : the connection location CONNECTION ID : the ID of your BigQuery connection When you view the connection details in the Google Cloud console, this is the value in the last section of the fully qualified connection ID that is shown in Connection ID , for example projects/myproject/locations/connection location/connections/ myconnection The query takes several seconds to complete, after which the model gemini model appears in the bqml tutorial dataset.
- Go to BigQuery In the query editor, enter the following statement: CREATE CONNECTION [ IF NOT EXISTS ] CONNECTION NAME OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = " FRIENDLY NAME " , description = " DESCRIPTION " ); Replace the following: CONNECTION NAME : the name of the connection in either the PROJECT ID .

### "Generate text by using a Gemma open model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemma)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Set service account permissions: resourcemanager.projects.getIamPolicy and resourcemanager.projects.setIamPolicy Deploy and undeploy a Vertex AI model: aiplatform.endpoints.deploy aiplatform.endpoints.undeploy Create a model and run inference: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata You might also be able to get these permissions with custom roles or other predefined roles .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } Create the remote model Create a remote model that represents a hosted Vertex AI model: In the Google Cloud console, go to the BigQuery page.
- Go to BigQuery In the query editor, run the following statement: CREATE OR REPLACE MODEL bqml tutorial . gemma model REMOTE WITH CONNECTION DEFAULT OPTIONS ( MODEL GARDEN MODEL NAME = 'publishers/google/models/gemma3@gemma-3-270m-it' , MACHINE TYPE = 'g2-standard-12' ); The query takes up to 20 minutes to complete, after which the gemma model model appears in the bqml tutorial dataset in the Explorer pane.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions Create a dataset: bigquery.datasets.create Create, delegate, and use a connection: bigquery.connections.

