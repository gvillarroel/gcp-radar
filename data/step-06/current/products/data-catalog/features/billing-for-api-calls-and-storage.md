---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:06.171Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Billing for API calls and storage"
feature_slug: "billing-for-api-calls-and-storage"
latest_feature_date: "2020-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/federated-identity-supported-services"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient"
keywords:
  - "billing"
  - "for"
  - "api"
  - "calls"
  - "and"
  - "storage"
  - "catalog"
  - "supports"
---

# Billing for API calls and storage

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Data Catalog supports billing for API calls and metadata storage across supported resources.

## Extended Definition

Data Catalog supports billing for API calls and metadata storage across supported resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)

## Supporting Pages

### "Identity federation: products and limitations \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/federated-identity-supported-services](https://docs.cloud.google.com/iam/docs/federated-identity-supported-services)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google Cloud API: The following methods don't support identity federtation: UpdateCatalog ImportCompletionData TuneModel ImportProducts PurgeProducts ImportUserEvents ImportUserEvents PurgeUserEvents RejoinUserEvents Other: No known limitations Secret Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Secure Source Manager GA Console (federated): No known limitations Google Cloud API: Identity federation users must sign in through the Secure Source Manager instance web interface before running any of the following commands: Git CLI commands API calls to data plane endpoints Identity federation users must sign in through the Secure Source Manager instance web interface after every session expiry to continue using Git SSH CLI commands with user SSH keys.
- Other: No known limitations Cloud Build GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud CDN GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Code Unsupported Alternatives: No alternatives available Cloud Composer GA Console (federated): No known limitations Google Cloud API: No known limitations Other: Cloud Composer supports Workforce Identity Federation only for environments created in Composer version 2.1.11 or later and Airflow version 2.4.3 or later.
- Google Cloud API: Image import from and export to a Cloud Storage bucket requires uniform bucket-level access to be enabled for the bucket.
- Google Cloud API: No known limitations Other: The following features don't support Workforce Identity Federation with BigQuery: Connected Sheets Google Drive Recommendations Slot estimator The following operations don't support Workforce Identity Federation: Loading data from Amazon S3 , Apache Spark , or Azure Blob Storage through the Connection API Loading data from Google Drive Bigtable GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Binary Authorization GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Analytics GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Blockchain Node Engine GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Carbon Footprint GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Authority Service GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Certificate Manager GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Channel Services GA Console (federated): No known limitations Google Cloud API: No known limitations Other: No known limitations Cloud Asset Inventory GA Console (federated): In the IAM policy tab, the Analyze Full Access button is unavailable for Workforce Identity Federation users.

### "Class DataCatalogAsyncClient (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Catalog automatically creates entry groups with names that start with the @ symbol for the following resources: BigQuery entries ( @bigquery ) Pub/Sub topics ( @pubsub ) Dataproc Metastore services ( @dataproc metastore {SERVICE NAME HASH} ) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample test iam permissions(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample get iam policy(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore async def sample set iam policy(): Create a client client = datacatalog v1 .

### "Class DataCatalogClient (3.29.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogClient)
- Source ID: `site-python-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data Catalog automatically creates entry groups with names that start with the @ symbol for the following resources: BigQuery entries ( @bigquery ) Pub/Sub topics ( @pubsub ) Dataproc Metastore services ( @dataproc metastore {SERVICE NAME HASH} ) You can create your own entry groups for Cloud Storage fileset entries and custom entries together with the corresponding IAM policies.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample test iam permissions(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample get iam policy(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 from google.iam.v1 import iam policy pb2 # type: ignore def sample set iam policy(): Create a client client = datacatalog v1 .

