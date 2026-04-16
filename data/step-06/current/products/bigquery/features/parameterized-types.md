---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.709Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Parameterized types"
feature_slug: "parameterized-types"
latest_feature_date: "2021-11-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model"
keywords:
  - "parameterized"
  - "types"
  - "bigquery"
  - "supports"
  - "such"
  - "bounded"
  - "string"
  - "bytes"
---

# Parameterized types

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports parameterized data types such as bounded STRING and BYTES and precision-constrained NUMERIC and BIGNUMERIC types; Parameterized types let BigQuery define STRING, BYTES, NUMERIC, and BIGNUMERIC values with explicit length, precision, or scale constraints.

## Extended Definition

BigQuery supports parameterized data types such as bounded STRING and BYTES and precision-constrained NUMERIC and BIGNUMERIC types; Parameterized types let BigQuery define STRING, BYTES, NUMERIC, and BIGNUMERIC values with explicit length, precision, or scale constraints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)

## Supporting Pages

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

### "Create a dataset with a customer-managed encryption key \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days default encryption configuration { kms key name = google kms crypto key.crypto key.id } labels = { billing group = "accounting" , pii = "sensitive" } depends on = [ google project iam member.service account access ] } resource "google kms crypto key" "crypto key" { name = "example-key" key ring = google kms key ring.key ring.id } resource "random id" "default" { byte length = 8 } resource "google kms key ring" "key ring" { name = "${random id.default.hex}-example-keyring" location = "us" } Enable the BigQuery service account to encrypt/decrypt Cloud KMS keys data "google project" "project" { } resource "google project iam member" "service account access" { project = data.google project.project.project id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" member = "serviceAccount:bq-${data.google project.project.number}@bigquery-encryption.iam.gserviceaccount.com" } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset with a customer-managed encryption key Stay organized with collections Save and categorize content based on your preferences.

### Create a clustering model with BigQuery DataFrames \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-clustering-model)
- Source ID: `site-docs-reference-required-15`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . from bigframes.ml.cluster import KMeans import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Create the KMeans model cluster model = KMeans ( n clusters = 10 ) cluster model . fit ( bq df [ "culmen length mm" ], bq df [ "sex" ]) Predict using the model result = cluster model . predict ( bq df ) Score the model score = cluster model . score ( bq df ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Create a clustering model with BigQuery DataFrames Stay organized with collections Save and categorize content based on your preferences.
- Create a k-means clustering model on the lengths and sex of penguins using the BigQuery DataFrames API.

