---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.888Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery storage free tier pricing"
feature_slug: "bigquery-storage-free-tier-pricing"
latest_feature_date: "2017-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "bigquery"
  - "storage"
  - "free"
  - "tier"
  - "pricing"
  - "offers"
---

# BigQuery storage free tier pricing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery offers a free tier for storage pricing.

## Extended Definition

BigQuery offers a free tier for storage pricing.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- After that, study the pricing for the corresponding SKUs in the SKU documentation page or the Pricing page in the Cloud Billing UI to understand which feature it is, for example, BigQuery Storage Read API, long-term storage, on-demand pricing, Standard edition.
- This causes the corresponding cost to rise, because active physical bytes are charged approximately 2 times more than long-term physical bytes according to the BigQuery storage pricing page .
- Your project exceeded quota for free query bytes scanned BigQuery returns this error when you run a query in the free usage tier and the account reaches the monthly query limit.
- As a best practice, consider long-term storage pricing and the physical storage billing model before exporting data out of BigQuery .

### Migrating Teradata to BigQuery tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial](https://docs.cloud.google.com/bigquery/docs/migration/teradata-tutorial)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As part of the Google Cloud Free Tier, BigQuery offers some resources free of charge up to a specific limit.
- If you go over these usage limits and are no longer in the free trial period, you are charged according to the pricing on the BigQuery pricing page.
- Set the PROJECT variable export PROJECT = $( gcloud config get-value project ) Create a service account gcloud iam service-accounts create tpch-transfer Grant permissions to the service account that let it administer BigQuery datasets and the staging area in Cloud Storage: Set TPCH SVC ACCOUNT = service account email export TPCH SVC ACCOUNT = tpch-transfer@ ${ PROJECT } .iam.gserviceaccount.com Bind the service account to the BigQuery Admin role gcloud projects add-iam-policy-binding ${ PROJECT } \ --member serviceAccount: ${ TPCH SVC ACCOUNT } \ --role roles/bigquery.admin Bind the service account to the Storage Admin role gcloud projects add-iam-policy-binding ${ PROJECT } \ --member serviceAccount: ${ TPCH SVC ACCOUNT } \ --role roles/storage.admin Create the staging Cloud Storage bucket One additional task in the Google Cloud configuration is to create a Cloud Storage bucket.
- Use gcloud storage to create the bucket gcloud storage buckets create gs:// ${ PROJECT } -tpch --location = us-central1 Specify the table name patterns During the configuration of a new transfer in the BigQuery Data Transfer Service, you're asked to specify an expression that indicates which tables to include in the transfer.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Your project exceeded quota for free query bytes scanned BigQuery returns this error when you run a query in the free usage tier and the account reaches the monthly query limit.
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .
- To learn about limits and quotas, see Storage Write API and to see costs of using this API, see BigQuery data ingestion pricing .

