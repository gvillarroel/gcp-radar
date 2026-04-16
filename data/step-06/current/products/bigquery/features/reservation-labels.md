---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.280Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reservation labels"
feature_slug: "reservation-labels"
latest_feature_date: "2025-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "reservation"
  - "labels"
  - "reservations"
  - "can"
  - "now"
  - "labeled"
  - "organization"
  - "billing"
---

# Reservation labels

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Reservations can now be labeled for organization and billing analysis; BigQuery reservations can be labeled for organization and billing analysis.

## Extended Definition

Reservations can now be labeled for organization and billing analysis; BigQuery reservations can be labeled for organization and billing analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-reference-2`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Add labels to resources This document describes how to add labels to BigQuery resources, including the following resources: datasets tables and views jobs job sessions reservations For more information about labels in BigQuery, see Introduction to labels .
- To add multiple labels, repeat the set label flag. bq update --set label KEY:VALUE --location LOCATION --reservation RESERVATION NAME Replace the following: KEY:VALUE : The key-value pair for a label you want to add to the reservation.
- Go to BigQuery In the query editor, enter the following statement: ALTER RESERVATION myreservation SET OPTIONS ( labels = [ ( 'sensitivity' , 'high' ) ] ); Click play circle Run .
- This predefined role contains the bigquery.reservations.update permission, which is required to add a label to a reservation.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- With BigQuery editions billing, you allocate slots for your organization through autoscaling reservations and optional, but cheaper, capacity commitments.
- Refer to the following documents for more information about managing compute capacity for processing your queries: For slots, and the trade-offs between on-demand billing and capacity-based billing, see Introduction to reservations .
- Troubleshoot In addition to the features described in this document for monitoring and managing your organization's BigQuery system, the following resources are available for troubleshooting problems that might arise: BigQuery error messages BigQuery billing questions Troubleshoot quota errors If you need additional assistance, see Get support .
- Monitor reservations You can monitor your slot usage on the Capacity management page of the Google Cloud console.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- To remove a project from any reservations and use on-demand billing instead, set reservation id to none . assignment option list The option list specifies options for the dataset.
- For more information, see Set up authentication for client libraries . from google.cloud import bigquery project = 'my-project' dataset id = 'my dataset' table id = 'new view' client = bigquery.Client(project=project) sql = """ CREATE VIEW {} . {} . {} OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM bigquery-public-data.usa names.usa 1910 current WHERE state LIKE 'W%' """ . format ( project , dataset id , table id ) job = client . query ( sql ) # API request. job . result () # Waits for the query to finish. print ( 'Created new view " {} . {} . {} ".' . format ( job . destination . project , job . destination . dataset id , job . destination . table id , ) ) On-demand query size calculation If you use on-demand billing, BigQuery charges for data definition language (DDL) queries based on the number of bytes processed by the query.
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- If this reservation was created with an edition , this is equivalent to the amount of baseline slots . target job concurrency INTEGER A soft upper bound on the number of jobs that can run concurrently in this reservation. autoscale max slots INTEGER The maximum number of slots that can be added to the reservation by autoscaling. secondary location STRING The secondary location to use in the case of disaster recovery. is primary BOOLEAN If the value is true , the reservation is set to be the primary reservation. labels <ARRAY<STRUCT<STRING, STRING>>> An array of labels for the reservation, expressed as key-value pairs.

