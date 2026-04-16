---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.302Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Managed disaster recovery soft failover"
feature_slug: "managed-disaster-recovery-soft-failover"
latest_feature_date: "2025-09-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "managed"
  - "disaster"
  - "recovery"
  - "soft"
  - "failover"
  - "bigquery"
  - "supports"
---

# Managed disaster recovery soft failover

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports soft failover with managed disaster recovery.

## Extended Definition

BigQuery supports soft failover with managed disaster recovery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- BigQuery only supports unenforced primary keys. foreign key : An expression that defines a foreign key table constraint .

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- For cross-region redundancy BigQuery offers managed disaster recovery .
- Analysis tools Colocate your BigQuery dataset with your analysis tools : Managed Service for Apache Spark : When you query BigQuery datasets using a BigQuery connector , your BigQuery dataset should be colocated with your Managed Service for Apache Spark cluster.
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- The following table lists the regions where BigQuery Studio is available: Region description Region name Details Africa Johannesburg africa-south1 Americas Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 North Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 BigQuery Omni locations BigQuery Omni processes queries in the same location as the dataset that contains the tables you're querying.

### Continuous data integration in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- The audience for this document is software and data architects and data engineers who use BigQuery as a DWH.
- You might choose this method if you want a backup for disaster recovery or hybrid solutions.
- Home Documentation Data analytics BigQuery Resources Send feedback Continuous data integration in BigQuery Stay organized with collections Save and categorize content based on your preferences.
- When you integrate data into BigQuery, downstream consumers of the data (for example, applications, BI dashboards, and individual users) might experience issues due to schema mismatches.

