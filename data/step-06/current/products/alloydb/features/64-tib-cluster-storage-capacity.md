---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.507Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "64 TiB cluster storage capacity"
feature_slug: "64-tib-cluster-storage-capacity"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners"
  - "https://docs.cloud.google.com/alloydb/docs/about-private-services-access"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
keywords:
  - "64"
  - "tib"
  - "cluster"
  - "storage"
  - "capacity"
  - "alloydb"
  - "supports"
  - "up"
---

# 64 TiB cluster storage capacity

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports up to 64 TiB of storage per cluster; AlloyDB supports up to 64 TiB of storage per cluster in selected regions.

## Extended Definition

AlloyDB supports up to 64 TiB of storage per cluster; AlloyDB supports up to 64 TiB of storage per cluster in selected regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)

## Supporting Pages

### "Google Cloud Ready - AlloyDB Partners \_|\_ AlloyDB for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners](https://docs.cloud.google.com/alloydb/docs/cloud-ready/partners)
- Source ID: `site-docs-reference-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Configuring AlloyDB Omni Cloud SQL for PostgreSQL and AlloyDB for PostgreSQL Integration Partner Advantage page Direct link Hitachi Solution Hitachi Virtual Storage Platform One Block 20 Category Application ISV Description Hitachi Virtual Storage Platform One Block 20 offers three models with the same capacity, featuring 72 NVMe flash drives and support for Fibre Channel, iSCSI, and NVMe TCP connectivity.
- Partner references Configuring AlloyDB Accounts in SnapLogic AlloyDB Inserts using SnapLogic AlloyDB Select using SnapLogic Partner Advantage page Direct link Striim Solution Striim cloud Category Data integration and migration Description Striim Cloud enables zero downtime data migration and real time replication to Google BigQuery, Spanner, Cloud SQL, AlloyDB, Pub/Sub, and Google Cloud Storage.
- Partner references erwin® Data Modeler by Quest® supports Google AlloyDB Defining AlloyDB Databases in erwin Partner Advantage page Direct link SqlDBM Solution SqlDBM Data Modeller Category Data modeling Description SqlDBM is a cloud-native SaaS data modeling solution built to keep up with the rapidly evolving cloud databases and data warehouse landscape.
- Partner references AlloyDB Omni using HammerDB on DS220 G2 and VSP One Block Partner Advantage page Direct link PLiOPS Solution PLiOPS Data Acceleration Category Storage Accelerator Description The Pliops Extreme Data Processor (XDP) is a hardware-based storage accelerator that offloads and accelerates data-intensive workloads.

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- To construct the model request url for the SQL model creation call, replace the project and endpoint identifiers with the endpoint details from the preceding step as follows: CALL google ml . create model ( model id => 'timesfm v2' , model qualified name => 'timesfm v2' , model type => 'ts forecasting' , model provider => 'google' , model request url => 'https:// REGION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict' ); You need this model request url in the google ml.create model call when you register the TimesFM model in AlloyDB, as described in the following section.
- Note: If your AlloyDB instance is in a different Google Cloud project than the Vertex AI model endpoint, make sure that the AlloyDB Service Account is granted the Vertex AI User role, which is roles/aiplatform.user , in the project where the Vertex AI model is hosted.
- 80 ); Register the TimesFM model in AlloyDB To register the TimesFM model in AlloyDB, follow these steps: Verify that the google ml integration extension is installed in the AlloyDB database that contains the data that you want to run predictions on.
- You use this information in Register the TimesFM model in AlloyDB —for example, https://us-central1-aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /endpoints/ ENDPOINT ID :predict .

### "Private services access overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/about-private-services-access](https://docs.cloud.google.com/alloydb/docs/about-private-services-access)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- A Shared VPC network To configure AlloyDB connectivity using a VPC network that resides in a Google Cloud project that is different from the one containing your AlloyDB cluster, complete the following steps: Configure the project where the VPC network resides for Shared VPC , with it as the host project and the project where AlloyDB resides as a service project .
- A VPC network in the same project as your cluster How you configure AlloyDB connectivity using a VPC network that resides in the same Google Cloud project as your AlloyDB cluster depends on whether a private services access configuration already exists in the VPC network.
- Through this connection, the AlloyDB clusters and instances in your project can connect to their internal resources using private IP addresses, just as if they were located within your own project's VPC.
- When you provision new instances in clusters configured with Private Services Access, AlloyDB deploys the resources in newly created or existing regional subnets that were previously created by AlloyDB.

