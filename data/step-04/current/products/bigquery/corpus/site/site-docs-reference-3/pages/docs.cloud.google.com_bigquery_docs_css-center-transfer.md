---
title: "Load CSS Center data into BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/css-center-transfer
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/api-uploads
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/css-center-transfer
  title: "Load CSS Center data into BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Load CSS Center data into BigQuery
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center
transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
You can load data from CSS Center to BigQuery using the
BigQuery Data Transfer Service for CSS Center connector. With the
BigQuery Data Transfer Service, you can schedule recurring transfer jobs that
add your latest data from your CSS Center to
BigQuery.
Supported reports
The BigQuery Data Transfer Service for the CSS Center supports the following data from the product and product issues reports
of associated Merchant Center accounts.
Products and product issues
This report contains data that merchants associated with your CSS Center have uploaded to their Merchant Center accounts.
This report also includes item level issues detected by
Google for your merchants' products. For information on how this data is loaded into
BigQuery, see the CSS Center product table schema .
Data ingestion from CSS Center transfers
When you transfer data from CSS Center into BigQuery, the
data is loaded into BigQuery tables that are partitioned by date.
The table partition that the data is loaded into corresponds to the date from
the data source. If you schedule multiple transfers for the same date,
BigQuery Data Transfer Service overwrites the partition for that specific date with
the latest data. Multiple transfers in the same day or running backfills don't
result in duplicate data, and partitions for other dates are not affected.
Limitations
Some reports might have their own constraints, such as different windows of
support for historical backfills. The products and product issues report does
not support backfills.
Products and product issues data in BigQuery doesn't represent the
real-time view of Merchant Center accounts associated with your CSS Center
account. The products and product issues data in BigQuery
can have a latency of up to one hour.
Data exported for a CSS Center account will only contain information about
the merchants who have agreed to share their information with their
associated CSS. For more information, see
How a CSS can access your Merchant Center account .
CSS Center data access and authorization
A user of a CSS Center can only access information from Merchant Center accounts
based on the level of access provided to that user by the Merchant Center
account. As a result, a CSS Center transfer only includes merchant data that a
user of the CSS Center has access to. For more information, see How a CSS can access your Merchant Center account .
You can configure the access rights of a CSS user by configuring the user's access in the CSS Center as a CSS admin .
Query your data
When your data is transferred to BigQuery, the data is
written to ingestion-time partitioned tables .
When you query your CSS Center table, you
must use the _PARTITIONTIME or _PARTITIONDATE pseudocolumn in your query.
For more information, see Querying partitioned tables .
The Products_ table contains nested and repeated fields. For information on
handling nested and repeated data, see
Differences in repeated field handling .
CSS Center sample queries
You can use the following CSS Center sample queries to analyze your
transferred data. You can also use the queries in a visualization tool such as
Data Studio .
In each of the following queries, replace dataset with your dataset
name. Replace css_id with your CSS domain ID.
Products and product issues sample queries
The following queries analyze data from the products and product issues
report.
Products and product issues statistics
The following SQL sample query provides the number of products, products with
issues, and issues by day.
SELECT
_PARTITIONDATE AS date ,
COUNT ( * ) AS num_products ,
COUNTIF ( ARRAY_LENGTH ( item_issues ) > 0 ) AS num_products_with_issues ,
SUM ( ARRAY_LENGTH ( item_issues )) AS num_issues
FROM
dataset . Products_ css_id
WHERE
_PARTITIONDATE >= ' YYYY-MM-DD '
GROUP BY
date
ORDER BY
date DESC ;
Disapproved products
The following SQL sample query provides the number of products that are not
approved for display, separated by region and reporting context. Disapproval
can result from the reporting context being
excluded
or because of an issue with the product.
SELECT
_PARTITIONDATE AS date ,
statuses . region as disapproved_region ,
reporting_context_status . reporting_context as reporting_context ,
COUNT ( * ) AS num_products
FROM
dataset . Products_ css_id ,
UNNEST ( reporting_context_statuses ) AS reporting_context_status ,
UNNEST ( reporting_context_status . region_and_status ) AS statuses
WHERE
_PARTITIONDATE >= ' YYYY-MM-DD ' AND statuses . status = 'DISAPPROVED'
GROUP BY
date , disapproved_region , reporting_context
ORDER BY
date DESC ;
Products with disapproved issues
The following SQL sample query retrieves the number of products with disapproved
issues, separated by region.
SELECT
_PARTITIONDATE AS date ,
disapproved_region ,
COUNT ( DISTINCT CONCAT ( CAST ( css_id AS STRING ), ':' , product_id ))
AS num_distinct_products
FROM
dataset . Products_ css_id ,
UNNEST ( item_issues ) AS issue ,
UNNEST ( issue . severity . severity_per_reporting_context ) as severity_per_rc ,
UNNEST ( severity_per_rc . disapproved_regions ) as disapproved_region
WHERE
_PARTITIONDATE >= ' YYYY-MM-DD '
GROUP BY
date , disapproved_region
ORDER BY
date DESC ;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
