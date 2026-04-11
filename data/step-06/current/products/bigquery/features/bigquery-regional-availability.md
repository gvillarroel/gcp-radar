---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.851Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery regional availability"
feature_slug: "bigquery-regional-availability"
latest_feature_date: "2019-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/locations"
keywords:
  - "Osaka (asia-northeast2)"
  - "Japan region launch"
  - "asia-northeast2"
  - "Osaka region"
  - "new BigQuery location"
  - "location availability"
  - "BigQuery region availability"
---

# BigQuery regional availability

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery became available in the Osaka (asia-northeast2) region.

## Extended Definition

BigQuery became available in the Osaka (asia-northeast2) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)

## Supporting Pages

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: The page documents regional availability and includes asia-northeast2 (Osaka) in its supported locations listings.

Evidence snippets:
- The BigQuery SQL translators are available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 BigQuery continuous query locations The following table lists the regions where continuous queries are supported: Region description Region name Details Americas US multi-region us Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 Northern Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe EU multi-region eu Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zurich europe-west6 Low CO 2 Middle East Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Africa Johannesburg africa-south1 BigQuery partition and cluster recommender locations The BigQuery partitioning and clustering recommender generates partition or cluster recommendations to optimize your BigQuery tables.
- Regional locations The following table contains information about supported locations for all model types other than remote models: Region description Region name Imported models Built-in model training DNN/Autoencoder/ Boosted Tree/ Wide-and-Deep models training AutoML model training Hyperparameter tuning Vertex AI Model Registry integration Americas Columbus, Ohio us-east5 ● ● Dallas us-south1 ● ● Iowa us-central1 ● ● ● ● ● ● Las Vegas us-west4 ● ● ● ● Los Angeles us-west2 ● ● ● ● Mexico northamerica-south1 ● ● Montréal northamerica-northeast1 ● ● ● ● ● ● Northern Virginia us-east4 ● ● ● ● ● ● Oregon us-west1 ● ● ● ● ● Salt Lake City us-west3 ● ● ● São Paulo southamerica-east1 ● ● ● ● Santiago southamerica-west1 ● ● South Carolina us-east1 ● ● ● ● ● Toronto northamerica-northeast2 ● ● ● Europe Belgium europe-west1 ● ● ● ● ● ● Berlin europe-west10 ● ● Finland europe-north1 ● ● ● Frankfurt europe-west3 ● ● ● ● ● ● London europe-west2 ● ● ● ● ● ● Madrid europe-southwest1 ● ● Milan europe-west8 ● ● Netherlands europe-west4 ● ● ● ● ● ● Paris europe-west9 ● ● Stockholm europe-north2 ● ● Turin europe-west12 ● Warsaw europe-central2 ● ● Zürich europe-west6 ● ● ● ● ● ● Asia Pacific Bangkok asia-southeast3 ● ● Delhi asia-south2 ● ● Hong Kong asia-east2 ● ● ● ● ● ● Jakarta asia-southeast2 ● ● ● Melbourne australia-southeast2 ● ● Mumbai asia-south1 ● ● ● ● ● Osaka asia-northeast2 ● ● ● Seoul asia-northeast3 ● ● ● ● ● ● Singapore asia-southeast1 ● ● ● ● ● ● Sydney australia-southeast1 ● ● ● ● ● ● Taiwan asia-east1 ● ● ● ● ● ● Tokyo asia-northeast1 ● ● ● ● ● ● Middle East Dammam me-central2 ● Doha me-central1 ● Tel Aviv me-west1 ● ● Africa Johannesburg africa-south1 ● ● Multi-regional locations All supported models other than remote models are supported in the US and EU multi-regions.
- The following table lists the regions where BigQuery Studio is available: Region description Region name Details Africa Johannesburg africa-south1 Americas Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 North Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 BigQuery Omni locations BigQuery Omni processes queries in the same location as the dataset that contains the tables you're querying.
- Region description Region name Vertex AI deployed models Cloud Natural Language API Cloud Translation API Cloud Vision API Document AI API Speech-to-Text API Americas Columbus, Ohio us-east5 Dallas us-south1 ● Iowa us-central1 ● ● Las Vegas us-west4 ● Los Angeles us-west2 ● Mexico northamerica-south1 Montréal northamerica-northeast1 ● Northern Virginia us-east4 ● Oregon us-west1 ● ● Salt Lake City us-west3 ● São Paulo southamerica-east1 ● Santiago southamerica-west1 South Carolina us-east1 ● ● Toronto northamerica-northeast2 ● Europe Belgium europe-west1 ● ● Finland europe-north1 Frankfurt europe-west3 ● ● London europe-west2 ● ● Madrid europe-southwest1 Milan europe-west8 ● Netherlands europe-west4 ● ● Paris europe-west9 ● Stockholm europe-north2 Turin europe-west12 Warsaw europe-central2 ● Zürich europe-west6 ● Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 ● Jakarta asia-southeast2 ● Melbourne australia-southeast2 Mumbai asia-south1 ● ● Osaka asia-northeast2 Seoul asia-northeast3 ● Singapore asia-southeast1 ● ● Sydney australia-southeast1 ● ● Taiwan asia-east1 ● Tokyo asia-northeast1 ● ● Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 ● If the dataset in which you are creating the remote model is in a single region, the Vertex AI model endpoint must be in the same region.

