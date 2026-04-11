---
title: "INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/information-schema-insights
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/graph-intro
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/information-schema-insights
  title: "INFORMATION_SCHEMA.INSIGHTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
INFORMATION_SCHEMA.INSIGHTS view
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To request feedback or support for this feature, send email to
bq-recommendations+feedback@google.com .
The INFORMATION_SCHEMA.INSIGHTS view contains insights about all BigQuery
recommendations in the current project. BigQuery retrieves
insights for all BigQuery insight types from the Active Assist
and present it in this view. BigQuery insights are always
associated with a recommendation.
The INFORMATION_SCHEMA.INSIGHTS view supports the following
recommendations:
Partition and cluster recommendations
Materialized view recommendations
Role recommendations for BigQuery datasets
Required permission
To view insights with the INFORMATION_SCHEMA.INSIGHTS view, you
must have the required permissions for the corresponding recommender. The
INFORMATION_SCHEMA.INSIGHTS view only returns insights from recommendations
that you have permission to view.
Ask your administrator to grant access to view insights. To see the
required permissions for each recommender, see the following:
Partition & cluster recommender permissions
Materialized view recommendations permissions
Role recommendations for datasets permissions
Schema
The INFORMATION_SCHEMA.INSIGHTS view has the following
schema:
Column name
Data type
Value
insight_id
STRING
Base64 encoded ID that contains the insight type and insight ID
insight_type
STRING
The type of the Insight. For example, google.bigquery.materializedview.Insight .
subtype
STRING
The subtype of the insight.
project_id
STRING
The ID of the project.
project_number
STRING
The number of the project.
description
STRING
The description about the recommendation.
last_updated_time
TIMESTAMP
This field represents the time when the insight was last refreshed.
category
STRING
The optimization category of the impact.
target_resources
STRING
Fully qualified resource names this insight is targeting.
state
STRING
The state of the insight. For a list of possible values, see Value .
severity
STRING
The severity of the Insight. For a list of possible values, see Severity .
associated_recommendation_ids
STRING
Full recommendation names this insight is associated with. Recommendation name is the Base64 encoded representation of recommender type and the recommendations ID.
additional_details
RECORD
Additional details about the insight.
content : Insight content in JSON format.
state_metadata : Metadata about the state of the Insight. Contains key-value pairs.
observation_period_seconds : Observation Period for generating the insight.
For stability, we recommend that you explicitly list columns in your information schema queries instead of
using a wildcard ( SELECT * ). Explicitly listing columns prevents queries from
breaking if the underlying schema changes.
Scope and syntax
Queries against this view must include a
region qualifier . A project ID
is optional. If no project ID is specified, the project that the query runs
in is used.
View name
Resource scope
Region scope
[ PROJECT_ID .]`region- REGION `.INFORMATION_SCHEMA.INSIGHTS[_BY_PROJECT]
Project level
REGION
Replace the following:
Optional: PROJECT_ID : the ID of your
Google Cloud project. If not specified, the default project is used.
REGION : any dataset region name .
For example, `region-us` .
Note: You must use a region qualifier
to query INFORMATION_SCHEMA views. The location of the query
execution must match the region of the INFORMATION_SCHEMA view.
Example
To run the query against a project other than your default project, add the
project ID in the following format:
` PROJECT_ID `.`region- REGION_NAME `.INFORMATION_SCHEMA.INSIGHTS
Replace the following:
PROJECT_ID : the ID of the project.
REGION_NAME : the region for your project.
For example, `myproject`.`region-us`.INFORMATION_SCHEMA.INSIGHTS .
View active insights with cost savings
The following example joins insights view with the recommendations view to
return 3 recommendations for the insights that are ACTIVE in COST category:
WITH
insights as ( SELECT * FROM `region-us` . INFORMATION_SCHEMA . INSIGHTS ),
recs as ( SELECT recommender , recommendation_id , additional_details FROM `region-us` . INFORMATION_SCHEMA . RECOMMENDATIONS )
SELECT
recommender ,
target_resources ,
LAX_INT64 ( recs . additional_details . overview . bytesSavedMonthly ) / POW ( 1024 , 3 ) as est_gb_saved_monthly ,
LAX_INT64 ( recs . additional_details . overview . slotMsSavedMonthly ) / ( 1000 * 3600 ) as slot_hours_saved_monthly ,
insights . additional_details . observation_period_seconds / 86400 as observation_period_days ,
last_updated_time
FROM
insights
JOIN recs
ON
recommendation_id in UNNEST ( associated_recommendation_ids )
WHERE
state = 'ACTIVE'
AND
category = 'COST'
LIMIT 3 ;
Note: INFORMATION_SCHEMA view names are case sensitive.
The result is similar to the following:
+---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+
| recommender | target_resource | gb_saved_monthly | slot_hours_saved_monthly | observation_period_days | last_updated_time |
+---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+
| google.bigquery.table.PartitionClusterRecommender | ["table_resource1"] | 3934.07264107652 | 10.499466666666667 | 30.0 | 2024-07-01 16:41:25 |
| google.bigquery.table.PartitionClusterRecommender | ["table_resource2"] | 4393.7416711859405 | 56.61476777777777 | 30.0 | 2024-07-01 16:41:25 |
| google.bigquery.materializedview.Recommender | ["project_resource"]| 140805.38289248943 | 9613.139166666666 | 2.0 | 2024-07-01 13:00:31 |
+---------------------------------------------------+---------------------+--------------------+--------------------------+-------------------------+---------------------+
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
