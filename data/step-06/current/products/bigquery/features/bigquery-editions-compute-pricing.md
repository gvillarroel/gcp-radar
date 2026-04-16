---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.613Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery editions compute pricing"
feature_slug: "bigquery-editions-compute-pricing"
latest_feature_date: "2023-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/controlling-costs"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bigquery"
  - "editions"
  - "compute"
  - "pricing"
  - "provide"
  - "standard"
  - "enterprise"
  - "plus"
---

# BigQuery editions compute pricing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery editions provide Standard, Enterprise, and Enterprise Plus compute options with autoscaling slot support.

## Extended Definition

BigQuery editions provide Standard, Enterprise, and Enterprise Plus compute options with autoscaling slot support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### Estimate and control costs \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/controlling-costs](https://docs.cloud.google.com/bigquery/docs/controlling-costs)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Enterprise and Enterprise Plus editions also provide optional one- or three-year slot commitments that can save money over the pay-as-you-go rate.
- After that, study the pricing for the corresponding SKUs in the SKU documentation page or the Pricing page in the Cloud Billing UI to understand which feature it is, for example, BigQuery Storage Read API, long-term storage, on-demand pricing, Standard edition.
- Editions To estimate costs in the Google Cloud pricing calculator when using the capacity-based pricing model with BigQuery editions , follow these steps: Open the Google Cloud pricing calculator .
- Understand compute pricing for BigQuery There are subtle differences in compute pricing for BigQuery that affect capacity planning and cost control.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Must be one of the following: STANDARD ENTERPRISE ENTERPRISE PLUS --autoscale max slots= NUMBER OF AUTOSCALING SLOTS The number of autoscaling slots assigned to the reservation.
- Must be one of the following: ENTERPRISE ENTERPRISE PLUS For more information, see Purchase commitments . bq mk --connection Creates a connection.
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following table function takes an INT64 parameter that is used to filter the results of a query: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example specifies the return TABLE type in the RETURNS clause: CREATE OR REPLACE TABLE FUNCTION mydataset . names by year ( y INT64 ) RETURNS TABLE<name STRING , year INT64 , total INT64 > AS SELECT year , name , SUM ( number ) AS total FROM bigquery-public-data.usa names.usa 1910 current WHERE year = y GROUP BY year , name The following example computes total sales for items with the name item name from the orders table: CREATE TABLE FUNCTION mydataset . compute sales ( orders TABLE<item STRING , sales INT64 > , item name STRING ) AS ( SELECT SUM ( sales ) AS total sales , item FROM orders WHERE item = item name GROUP BY item ); CREATE PROCEDURE statement Creates a new procedure , which is a block of statements that can be called from other queries.
- For more information about editions, see Introduction to BigQuery editions . autoscale max slots INTEGER The maximum number of slots that could be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. max slots INTEGER The maximum number of slots the reservation can consume.
- Example: export function finalize ( finalState , initialSum ) Serialization functions for a JavaScript UDAF If you want to work with non-serializable aggregation states, the JavaScript UDAF must provide the serialize and deserialize functions: serialize function: Converts an aggregation state into a BigQuery-serializable object.
- Note: To provide feedback or request support for this feature, send an email to bigquery-security@google.com .

