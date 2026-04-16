---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.781Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Top Brands report for Google Merchant Center Best Sellers exports"
feature_slug: "top-brands-report-for-google-merchant-center-best-sellers-exports"
latest_feature_date: "2020-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/css-center-products-schema"
keywords:
  - "top"
  - "brands"
  - "report"
  - "merchant"
  - "center"
  - "best"
  - "sellers"
  - "exports"
---

# Top Brands report for Google Merchant Center Best Sellers exports

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service supports the Top Brands report for Google Merchant Center Best Sellers exports.

## Extended Definition

BigQuery Data Transfer Service supports the Top Brands report for Google Merchant Center Best Sellers exports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer](https://docs.cloud.google.com/bigquery/docs/css-center-transfer)
- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/css-center-products-schema](https://docs.cloud.google.com/bigquery/docs/css-center-products-schema)

## Supporting Pages

### Load CSS Center data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer](https://docs.cloud.google.com/bigquery/docs/css-center-transfer)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported reports The BigQuery Data Transfer Service for the CSS Center supports the following data from the product and product issues reports of associated Merchant Center accounts.
- Products and product issues This report contains data that merchants associated with your CSS Center have uploaded to their Merchant Center accounts.
- CSS Center data access and authorization A user of a CSS Center can only access information from Merchant Center accounts based on the level of access provided to that user by the Merchant Center account.
- Data exported for a CSS Center account will only contain information about the merchants who have agreed to share their information with their associated CSS.

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The data transfer is created in your default project. bq mk \ --transfer config \ --target dataset = mydataset \ --display name = 'My Transfer' \ --params = '{"css id":"1234","export products":"true","export regional inventories":"true","export local inventories":"true","export price benchmarks":"true","export best sellers":"true"}' \ --data source = css center The first time you run the command, you receive a message like the following: [URL omitted] Please copy and paste the above URL into your web browser and follow the instructions to retrieve an authentication code.
- Set up a CSS Center transfer To create a data transfer for CSS Center reporting: Console Go to the Data transfers page in the Google Cloud console.
- This document shows you how to schedule and manage recurring load jobs for CSS Center reporting data using the BigQuery Data Transfer Service .
- If you want to create a dataset in a specific region, the CSS Center data transfer is only supported in the following regions: us-east4 (Northern Virginia) , asia-northeast1 (Tokyo) , asia-southeast1 (Singapore) , australia-southeast1 (Sydney) , europe-north1 (Finland) , europe-west2 (London) , europe-west6 (Zurich) .

### "Comparison Shopping Services Center table schema \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-products-schema](https://docs.cloud.google.com/bigquery/docs/css-center-products-schema)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Field name Type Description CSS ID INTEGER CSS ID Merchant ID INTEGER Merchant account ID who owns the offer Product ID STRING A unique identifier of the item Feed label STRING The feed label for the item, or "-" if not provided Language code STRING The two-letter ISO 639-1 language code for the item Channel STRING The item's channel, either online or local Title STRING Title of the item Brand STRING Brand of the item Category l{1-5} INTEGER Google Product Category of the item Product type l{1-5} STRING Product type of the item Price RECORD Full price of the item, prior to any discounts Value INTEGER Price value of the item Currency STRING The currency of the price Sale Price RECORD Sale price of the item, if applicable Value INTEGER Sale price value of the item Currency STRING The currency of the sale price Condition STRING Condition or state of the item Availability STRING Availability status of the item Shipping label STRING The shipping label specified in the feed Gtin STRING Global Trade Item Number (GTIN) of the item Item group ID STRING Shared identifier for all variants of the same product Creation time INTEGER The time this item was created by the provider as timestamp microseconds Expiration date DATE Date on which the item should expire, as specified upon insertion Aggregated reporting context status STRING The status of the product aggregated for all reporting contexts.
- Comparison Shopping Services Center table schema When your Comparison Shopping Service (CSS) Center reporting data is transferred to BigQuery, the format of product and product issues data corresponds primarily to the format of the relevant fields of the Content API's ProductView and Productstatuses resources.
- The supported values are ELIGIBLE , ELIGIBLE LIMITED , PENDING , NOT ELIGIBLE OR DISAPPROVED , AGGREGATED STATUS UNSPECIFIED Reporting context statuses RECORD , REPEATED The status of the product in each reporting context and region Reporting context STRING Reporting context Region and status RECORD , REPEATED Status per region Region STRING Region code represented in ISO 3166 format Status STRING Status of the product in the region, can be ELIGIBLE , PENDING , or DISAPPROVED Item issues RECORD , REPEATED The list of item level issues associated with the product Type RECORD Issue type Code STRING The error code of the issue, equivalent to the code of Product issues Canonical attribute STRING Canonical attribute name for attribute-specific issues Severity RECORD How this issue affects serving of the offer Severity per reporting context RECORD , REPEATED Issue severity per reporting context Reporting context STRING Reporting context the issue applies to Disapproved regions STRING , REPEATED List of disapproved regions in the reporting context, represented in ISO 3166 format Demoted regions STRING , REPEATED List of demoted regions in the reporting context, represented in ISO 3166 format Aggregated severity STRING Aggregated severity of the issue for all reporting contexts it affects.
- Its values can be AGGREGATED ISSUE SEVERITY UNSPECIFIED , DISAPPROVED , DEMOTED , or PENDING Resolution STRING Whether the issue can be resolved by the merchant Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

