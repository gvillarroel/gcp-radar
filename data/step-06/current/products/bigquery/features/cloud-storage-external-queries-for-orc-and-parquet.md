---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.793Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud Storage external queries for ORC and Parquet"
feature_slug: "cloud-storage-external-queries-for-orc-and-parquet"
latest_feature_date: "2020-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam"
  - "https://docs.cloud.google.com/bigquery/docs/api-performance"
keywords:
  - "storage"
  - "external"
  - "queries"
  - "orc"
  - "parquet"
  - "bigquery"
  - "supports"
  - "querying"
---

# Cloud Storage external queries for ORC and Parquet

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports querying Cloud Storage data stored in ORC and Parquet formats; BigQuery can query Cloud Storage data stored in ORC and Parquet formats.

## Extended Definition

BigQuery supports querying Cloud Storage data stored in ORC and Parquet formats; BigQuery can query Cloud Storage data stored in ORC and Parquet formats.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)

## Supporting Pages

### "Create a dataset and grant access to it \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-create-dataset-iam)
- Source ID: `site-docs-reference-required-15`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see the Terraform provider reference documentation . resource "google bigquery dataset" "default" { dataset id = "mydataset" default partition expiration ms = 2592000000 # 30 days default table expiration ms = 31536000000 # 365 days description = "dataset description" location = "US" max time travel hours = 96 # 4 days labels = { billing group = "accounting" , pii = "sensitive" } } Update the user, group, or service account provided by the members argument with the appropriate principals for your organization. data "google iam policy" "default" { binding { role = "roles/bigquery.dataOwner" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.admin" members = [ "user:raha@altostrat.com" , ] } binding { role = "roles/bigquery.user" members = [ "group:analysts@altostrat.com" , ] } binding { role = "roles/bigquery.dataViewer" members = [ "serviceAccount:bqcx-1234567891011-abcd@gcp-sa-bigquery-condel.iam.gserviceaccount.com" , ] } } resource "google bigquery dataset iam policy" "default" { dataset id = google bigquery dataset.default.dataset id policy data = data.google iam policy.default.policy data } What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Home Documentation Data analytics BigQuery Samples Create a dataset and grant access to it Stay organized with collections Save and categorize content based on your preferences.
- The following example creates a dataset named mydataset, then uses the google bigquery dataset iam policy resource to grant access to it.

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.

### API performance tips \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/api-performance](https://docs.cloud.google.com/bigquery/docs/api-performance)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- However, the same concepts are applicable to the BigQuery API.

