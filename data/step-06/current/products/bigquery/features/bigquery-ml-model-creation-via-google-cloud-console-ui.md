---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.408Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML model creation via Google Cloud console UI"
feature_slug: "bigquery-ml-model-creation-via-google-cloud-console-ui"
latest_feature_date: "2025-07-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create"
  - "https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model"
  - "https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial"
keywords:
  - "BQML UI"
  - "Google Cloud console UI"
  - "console model creation"
  - "create model in console"
  - "model training"
  - "create model"
  - "BigQuery ML"
  - "ML models"
---

# BigQuery ML model creation via Google Cloud console UI

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Users can now create BigQuery ML models directly from the Google Cloud console user interface.

## Extended Definition

The provided Google Cloud BigQuery documentation indicates that BigQuery ML model creation is performed using the `CREATE MODEL` SQL statement in BigQuery ML, including training model types such as logistic regression and other model options. The docs also describe related setup, required permissions (`bigquery.jobs.create`, `bigquery.models.create`, `bigquery.models.getData`, `bigquery.models.updateData`, `bigquery.models.updateMetadata`), and where model training results can be viewed, but they do not explicitly describe model creation specifically via the Google Cloud Console UI flow.

## Evidence Summary

These pages establish SQL-based BigQuery ML model creation with `CREATE MODEL` and required IAM permissions, with limited UI references to viewing training statistics but no explicit confirmation of a console-based model-creation UI feature.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)

## Supporting Pages

### The CREATE MODEL statement \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states models can also be created through the Google Cloud console UI, matching the feature statement.

Evidence snippets:
- To try using the TRANSFORM clause, try the Use the BigQuery ML TRANSFORM clause for feature engineering tutorial or the Create Model With Inline Transpose notebook. select list You can pass columns from query statement through to model training without transformation by either using , EXCEPT() , or by listing the column names directly.
- CREATE MODEL statement for AutoML models Classification 'LOGISTIC REG' Logistic regression for binary-class or multi-class classification; for example, determining whether a customer will make a purchase.
- CREATE MODEL statement for AutoML models Clustering 'KMEANS' K-means clustering for data segmentation; for example, identifying customer segments.
- The CREATE MODEL statement To create a model in BigQuery, use the BigQuery ML CREATE MODEL statement.

### Create an ML model in BigQuery ML by using SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model](https://docs.cloud.google.com/bigquery/docs/create-machine-learning-model)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: WEAK
- Re-rank rationale: It mentions a separate UI-based how-to ('work with models by using a UI') but does not describe or detail console-based model creation steps.

Evidence snippets:
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Creating an alias named label is an alternative to setting the input label cols= option in the CREATE MODEL statement. device.operatingSystem : the operating system of the visitor's device. device.isMobile — Indicates whether the visitor's device is a mobile device. geoNetwork.country : the country from which the sessions originated, based on the IP address. totals.pageviews : the total number of page views within the session.
- Costs This tutorial uses billable components of Google Cloud, including the following: BigQuery BigQuery ML For more information on BigQuery costs, see the BigQuery pricing page.
- Create a machine learning model in BigQuery ML by using SQL This tutorial shows you how to create a logistic regression model by using BigQuery ML SQL queries.

### Use BigQuery ML to predict penguin weight \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial](https://docs.cloud.google.com/bigquery/docs/linear-regression-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: WEAK
- Re-rank rationale: The guidance focuses on SQL-based model creation and pricing/permissions, with only incidental mention of Cloud environment rather than a UI model-creation experience.

Evidence snippets:
- See the model training statistics that were generated when you ran the CREATE MODEL query: In the left pane, click explore Explorer : In the Explorer pane, expand your project and click Datasets .
- Create a dataset named bqml tutorial with the data location set to US . bq mk --dataset \ --location=US \ --description "BigQuery ML tutorial dataset." \ bqml tutorial Confirm that the dataset was created: bq ls API Call the datasets.insert method with a defined dataset resource . { "datasetReference" : { "datasetId" : "bqml tutorial" } } BigQuery DataFrames Before trying this sample, follow the BigQuery DataFrames setup instructions in the BigQuery quickstart using BigQuery DataFrames .
- Enable the API Required permissions To create the model using BigQuery ML, you need the following IAM permissions: bigquery.jobs.create bigquery.models.create bigquery.models.getData bigquery.models.updateData bigquery.models.updateMetadata To run inference, you need the following permissions: bigquery.models.getData on the model bigquery.jobs.create Create a dataset Create a BigQuery dataset to store your ML model.
- Home Documentation Data analytics BigQuery Guides Send feedback Use BigQuery ML to predict penguin weight Stay organized with collections Save and categorize content based on your preferences.

