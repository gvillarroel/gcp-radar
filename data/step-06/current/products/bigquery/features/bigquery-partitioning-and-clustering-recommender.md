---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.656Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery partitioning and clustering recommender"
feature_slug: "bigquery-partitioning-and-clustering-recommender"
latest_feature_date: "2023-05-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/locations"
keywords:
  - "cost savings recommendation"
  - "partitioning and clustering recommender"
  - "table optimization recommendations"
  - "partitioning recommender"
  - "partitioning recommendations"
  - "clustering recommender"
  - "clustering recommendations"
  - "BigQuery Recommender"
---

# BigQuery partitioning and clustering recommender

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery’s partitioning and clustering recommender analyzes tables and recommends partitioning or clustering changes for potential cost savings.

## Extended Definition

The BigQuery partitioning and clustering recommender is a feature that generates partition or cluster recommendations to optimize BigQuery tables. It is delivered as a regionalized BigQuery capability and is available only in the processing locations listed in the BigQuery locations documentation.

## Evidence Summary

The BigQuery locations page states what the partitioning and clustering recommender does (generates partition/cluster recommendations to optimize tables) and enumerates the processing regions where it is available.

## Source Links

- [https://cloud.google.com/bigquery/docs/locations](https://cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- The partitioning and clustering recommender is available in the following processing locations: Region description Region name Details Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Frankfurt europe-west3 London europe-west2 Low CO 2 Netherlands europe-west4 Low CO 2 Zürich europe-west6 Low CO 2 Americas Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Salt Lake City us-west3 São Paulo southamerica-east1 Low CO 2 Toronto northamerica-northeast2 Low CO 2 US multi-region us BigQuery sharing locations BigQuery sharing (formerly Analytics Hub) is available in the following regions and multi-regions.

