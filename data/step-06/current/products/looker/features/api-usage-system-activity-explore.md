---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.435Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "API Usage System Activity Explore"
feature_slug: "api-usage-system-activity-explore"
latest_feature_date: "2025-12-23"
deprecation_date: "2025-12-23"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-server-usage"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
keywords:
  - "usage"
  - "system"
  - "activity"
  - "explore"
  - "historical"
  - "no"
  - "longer"
  - "available"
---

# API Usage System Activity Explore

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Historical data is no longer available in this Explore for Looker 25.16 and later instances; deprecated on 2025-12-23.

## Extended Definition

Historical data is no longer available in this Explore for Looker 25.16 and later instances; deprecated on 2025-12-23.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-server-usage](https://docs.cloud.google.com/looker/docs/admin-panel-server-usage)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

### Admin settings - Usage \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-server-usage](https://docs.cloud.google.com/looker/docs/admin-panel-server-usage)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Usage information can be viewed using the System Activity dashboards and Explores .
- Note: Check the System Activity dashboards for additional usage information about your Looker instance.
- This prevents the comments from affecting the caching of Looker queries, but it also means that you cannot see the added comments in most places in Looker (such as the Queries page or System Activity ).
- Query by Source tile The Query by Source tile, which is located at the top of the Usage page, includes information about the number of queries run from different sources within Looker.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-reference-required-6`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Job completedJob = job . waitFor (); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to extract due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table extract compressed successful" ); } catch ( BigQueryException InterruptedException e ) { System . out . println ( "Table extraction job was interrupted. \n" + e . toString ()); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- Job completedJob = job . waitFor ( RetryOption . initialRetryDelay ( Duration . ofSeconds ( 1 )), RetryOption . totalTimeout ( Duration . ofMinutes ( 3 ))); if ( completedJob == null ) { System . out . println ( "Job not executed since it no longer exists." ); return ; } else if ( completedJob . getStatus (). getError () != null ) { System . out . println ( "BigQuery was unable to extract due to an error: \n" + job . getStatus (). getError ()); return ; } System . out . println ( "Table export successful.
- The job entry in the JOBS BY system tables for the extract job contains a total bytes processed value that can be used to monitor the aggregate usage to ensure that it stays under 50 TiB per-day.
- Usage for extract jobs are available in the INFORMATION SCHEMA .

