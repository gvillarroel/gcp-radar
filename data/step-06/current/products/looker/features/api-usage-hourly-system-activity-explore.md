---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.451Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "API Usage Hourly System Activity Explore"
feature_slug: "api-usage-hourly-system-activity-explore"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-server-usage"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "usage"
  - "hourly"
  - "system"
  - "activity"
  - "explore"
  - "provides"
  - "summary"
  - "call"
---

# API Usage Hourly System Activity Explore

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This Explore provides an hourly summary of API call volume and performance for the Looker instance.

## Extended Definition

This Explore provides an hourly summary of API call volume and performance for the Looker instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-server-usage](https://docs.cloud.google.com/looker/docs/admin-panel-server-usage)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Admin settings - Usage \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-server-usage](https://docs.cloud.google.com/looker/docs/admin-panel-server-usage)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage information can be viewed using the System Activity dashboards and Explores .
- Note: Check the System Activity dashboards for additional usage information about your Looker instance.
- This prevents the comments from affecting the caching of Looker queries, but it also means that you cannot see the added comments in most places in Looker (such as the Queries page or System Activity ).
- Note: If you have a permission that provides access to only select pages in the Admin panel, such as manage schedules , manage themes , or see admin , but you don't have the Admin role , the page or pages that are described here may not be visible to you in the Admin panel.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Permissions and Looker licenses Looker licenses classify users into three types: Developer (Admin) Standard (Creator) Viewer The permissions granted to a user determine how that user is classified under the Looker license: A user is classified as a Developer (Admin) user if they have the Admin default role , or at least one of the following permissions: develop manage models see datagroups see logs see pdts sudo A user is classified as a Standard (Creator) user if they have none of the Developer (Admin) permissions but do have at least one of the following permissions: create prefetches explore manage homepage manage spaces save content see queries see schedules see system activity see users use sql runner save agents admin agents A user is classified as a Viewer if they have the access data permission, but none of the Developer (Admin) permissions and none of the Standard (Creator) permissions.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The job entry in the JOBS BY system tables for the extract job contains a total bytes processed value that can be used to monitor the aggregate usage to ensure that it stays under 50 TiB per-day.
- String projectName = "MY PROJECT NAME" ; String datasetName = "MY DATASET NAME" ; String tableName = "MY TABLE NAME" ; String bucketName = "MY-BUCKET-NAME" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types String compressed = "gzip" ; // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableCompressed ( projectName , datasetName , tableName , destinationUri , dataFormat , compressed ); } public static void extractTableCompressed ( String projectName , String datasetName , String tableName , String destinationUri , String dataFormat , String compressed ) { try { // Initialize client that will be used to send requests.
- String projectId = "bigquery-public-data" ; String datasetName = "samples" ; String tableName = "shakespeare" ; String bucketName = "my-bucket" ; String destinationUri = "gs://" + bucketName + "/path/to/file" ; // For more information on export formats available see: // https://cloud.google.com/bigquery/docs/exporting-data#export formats and compression types // For more information on Job see: // https://googleapis.dev/java/google-cloud-clients/latest/index.html?com/google/cloud/bigquery/package-summary.html String dataFormat = "CSV" ; extractTableToCsv ( projectId , datasetName , tableName , destinationUri , dataFormat ); } // Exports datasetName:tableName to destinationUri as raw CSV public static void extractTableToCsv ( String projectId , String datasetName , String tableName , String destinationUri , String dataFormat ) { try { // Initialize client that will be used to send requests.
- The following example shows how to create a new processed table from an existing table called source table which requires n partitions to achieve the chosen file size: CREATE TABLE my dataset . processed table PARTITION BY RANGE BUCKET ( export id , GENERATE ARRAY ( 0 , n , 1 )) CLUSTER BY export id AS ( SELECT , CAST ( FLOOR ( n RAND ()) AS INT64 ) AS export id FROM my dataset . source table ); For each integer i between 0 and n-1 , run an EXPORT DATA statement on the following query: SELECT EXCEPT ( export id ) FROM my dataset . processed table WHERE export id = i ; Extract compressed table Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

