---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.517Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CMEK support for Analytics Hub listings"
feature_slug: "cmek-support-for-analytics-hub-listings"
latest_feature_date: "2024-01-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings"
keywords:
  - "cmek"
  - "analytics"
  - "hub"
  - "listings"
  - "can"
  - "include"
  - "encrypted"
  - "customer"
---

# CMEK support for Analytics Hub listings

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Analytics Hub listings can include data encrypted with customer-managed encryption keys.

## Extended Definition

Analytics Hub listings can include data encrypted with customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)

## Supporting Pages

### Load Google Analytics 4 data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer](https://docs.cloud.google.com/bigquery/docs/google-analytics-4-transfer)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify encryption key with transfers You can specify customer-managed encryption keys (CMEKs) to encrypt data for a transfer run.
- For example, you cannot change a destination table that was originally default encrypted to now be encrypted with CMEK.
- Conversely, you also cannot change a CMEK-encrypted destination table to have a different type of encryption.
- Optional: If you use CMEKs , in the Advanced options section, select Customer-managed key .

### Manage listings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings](https://docs.cloud.google.com/bigquery/docs/analytics-hub-manage-listings)
- Source ID: `site-docs-reference-5`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- To enable the Analytics Hub API, you need the following Identity and Access Management (IAM) permissions: serviceUsage.services.get serviceUsage.services.list serviceUsage.services.enable The following predefined IAM role includes the permissions that you need to enable the Analytics Hub API: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) To enable the Analytics Hub API, select one of the following options: Console Go to the Analytics Hub API page and enable the Analytics Hub API for your Google Cloud project.
- Use the following format to add members: user:test-user@gmail.com group:admins@example.com serviceAccount:test123@example.domain.com domain:example.domain.com For example, to grant the roles/analyticshub.subscriber role to group:subscribers@example.com , add the following binding to the policy: { "members": [ "group:subscribers@example.com" ], "role":"roles/analyticshub.subscriber" } Write the updated policy by using the projects.locations.dataExchanges.listings.setIamPolicy method .
- Enable the Analytics Hub API gcloud Run the gcloud services enable command: gcloud services enable analyticshub.googleapis.com Required roles To manage listings and subscriptions, you must have one of the following BigQuery sharing Identity and Access Management (IAM) roles: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets you create, update, delete, and set IAM policies on your listings.
- Note: After you grant licenses to users to access non-Cloud Marketplace-integrated commercial listings, you can either create a private listing for those users, or grant those users the Analytics Hub Subscriber ( roles/analyticshub.subscriber ) role for your commercial listing.

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Samples Copy a table with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .
- Copy a table with customer-managed encryption keys (CMEK).

