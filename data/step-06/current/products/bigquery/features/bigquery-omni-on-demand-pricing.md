---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.655Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni on-demand pricing"
feature_slug: "bigquery-omni-on-demand-pricing"
latest_feature_date: "2022-09-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/locations"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "omni"
  - "demand"
  - "pricing"
  - "supports"
  - "model"
---

# BigQuery Omni on-demand pricing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Omni supports an on-demand pricing model.

## Extended Definition

BigQuery Omni supports an on-demand pricing model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Introduction to BigQuery sharing \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction](https://docs.cloud.google.com/bigquery/docs/analytics-hub-introduction)
- Source ID: `site-docs-reference-5`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- For BigQuery datasets, publishers pay for data storage, whereas subscribers pay for queries that run against the shared data based on either on-demand or capacity-based pricing models.
- As a publisher, you create or use an existing BigQuery dataset in your project with the following supported objects that you want to deliver to your subscribers: Authorized views Authorized datasets BigQuery ML models External tables Materialized views Routines User-defined functions (UDFs) Table functions SQL stored procedures Tables Table snapshots Views Shared datasets support column-level security and row-level security .
- BigQuery sharing supports the following Google Cloud resources: BigQuery datasets Pub/Sub topics Publisher workflow The following diagram describes how a publisher shares assets: The following sections describe the features in this workflow.
- Architecture BigQuery sharing is built on a publish and subscribe model of Google Cloud data resources, allowing for zero-copy sharing in place.

### BigQuery locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/locations](https://docs.cloud.google.com/bigquery/docs/locations)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- BigQuery Omni regions support Enterprise edition reservations and on-demand compute (analysis) pricing.
- The following table lists the regions where BigQuery Studio is available: Region description Region name Details Africa Johannesburg africa-south1 Americas Columbus us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Montréal northamerica-northeast1 Low CO 2 North Virginia us-east4 Oklahoma us-central2 Low CO 2 Oregon us-west1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 São Paulo southamerica-east1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Middle East Dammam me-central2 Doha me-central1 Tel Aviv me-west1 BigQuery Omni locations BigQuery Omni processes queries in the same location as the dataset that contains the tables you're querying.
- Virginia) aws-us-east-1 us-east4 AWS - US West (Oregon) aws-us-west-2 us-west1 AWS - Asia Pacific (Seoul) aws-ap-northeast-2 asia-northeast3 AWS - Asia Pacific (Sydney) aws-ap-southeast-2 australia-southeast1 AWS - Europe (Ireland) aws-eu-west-1 europe-west1 AWS - Europe (Frankfurt) aws-eu-central-1 europe-west3 Azure Azure - East US 2 azure-eastus2 us-east4 BigQuery ML locations The following sections describe supported locations for BigQuery ML models.
- If you specify the model name instead of the endpoint URL, BigQuery ML defaults to using the europe-west4 endpoint for datasets in the eu multi-region, and to using the us-central1 endpoint for datasets in the us multi-region.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Partner references How to Mix BigQuery On-Demand and Slot Pricing in Practice Anomalo Solution Anomalo Data Quality Category Data Quality, Observability, & FinOps Description Anomalo is a complete data quality platform that automatically detects and explains issues in enterprise data.
- Partner references Create a BigQuery connection in Airflow BigQuery AirFlow modules Example BigQuery AirFlow Dags Partner Advantage page Direct link Broadcom Solution Automic Category ETL & Data Integration Description Automic Automation is a market-leading enterprise automation solution benefitting from over 25 years of evolution with the scale, agility, speed, and reliability required by the most demanding Fortune 100 organizations.
- Partner references SnapLogic with BigQuery SnapLogic and Google BigQuery - Bulk loading for high-speed Google analytics Automate Data-driven Insights with SnapLogic and Google BigQuery Partner Advantage page Direct link SqlDBM Solution SqlDBM Category ETL & Data Integration Description SqlDBM is a cloud-native database design and modeling tool that enables teams to develop, document, and manage database schemas collaboratively.
- Partner references BigQuery and Tableau best practices Making Sense of Google BigQuery Data with Tableau Analyze BigQuery data by using BI Engine and Tableau Partner Advantage page Direct link Tecton Solution Feature Platform Category BI, ML, & Advanced Analytics Description Tecton's feature platform for ML enables data scientists to turn raw data into production-ready features, the predictive signals that feed ML models.

