---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.529Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Model creation prompt when no projects exist"
feature_slug: "model-creation-prompt-when-no-projects-exist"
latest_feature_date: "2024-03-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/default-configuration"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "model"
  - "creation"
  - "prompt"
  - "when"
  - "no"
  - "projects"
  - "exist"
  - "looker"
---

# Model creation prompt when no projects exist

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker more prominently prompts users to create a model when an instance has no projects.

## Extended Definition

Looker more prominently prompts users to create a model when an instance has no projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/default-configuration](https://docs.cloud.google.com/bigquery/docs/default-configuration)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Manage configuration settings \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/default-configuration](https://docs.cloud.google.com/bigquery/docs/default-configuration)
- Source ID: `site-docs-reference-required-6`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Storage billing models . default cloud resource connection id : The default connection to use when creating tables and models.
- Note that changing the default storage billing model does not affect existing datasets.
- Set the use legacy sql flag to false : ALTER ORGANIZATION SET OPTIONS ( region- REGION .default time zone = NULL , region- REGION .default kms key name = NULL , region- REGION .default query job timeout ms = NULL , region- REGION .default interactive query queue timeout ms = NULL , region- REGION .default batch query queue timeout ms = NULL , region- REGION .default storage billing model = NULL , region- REGION .default max time travel hours = NULL , region- REGION .default cloud resource connection id = NULL , region- REGION .default sql dialect option = NULL , region- REGION .enable reservation based fairness = NULL , region- REGION .enable global queries execution = NULL , region- REGION .enable global queries data access = NULL ); API Call the jobs.query method and supply the DDL statement in the request body's query property.
- Data management settings Use the following settings to define rules for data creation, security, and lifecycle. default column name character map : The default scope and handling of characters in column names.

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JOBS BY PROJECT WHERE DATE ( creation time ) >= CURRENT DATE - 30 -- scan 30 days of query history AND job type = 'QUERY' AND state = 'DONE' AND error result IS NULL AND statement type != 'SCRIPT' AND EXISTS ( -- Only include queries which had performance insights SELECT 1 FROM UNNEST ( query info . performance insights . stage performance standalone insights ) WHERE slot contention OR insufficient shuffle quota OR bi engine reasons IS NOT NULL OR high cardinality joins IS NOT NULL OR partition skew IS NOT NULL UNION ALL SELECT 1 FROM UNNEST ( query info . performance insights . stage performance change insights ) WHERE input data change . records read diff percentage IS NOT NULL ); View metadata refresh jobs The following example lists the metadata refresh jobs in last six hours: SELECT FROM region- REGION NAME .
- EXTRACT ( date FROM end time AT TIME ZONE 'PST8PDT' ) billing date , total bytes billed / 1024 / 1024 / 1024 / 1024 total tib billed , CASE statement type WHEN 'SCRIPT' THEN 0 WHEN 'CREATE MODEL' THEN 50 PRICE PER TIB ELSE PRICE PER TIB END AS multiplier , FROM region- REGION NAME .
- JOBS WHERE TIMESTAMP TRUNC ( creation time , DAY ) = '2024-06-12' AND job id = '2Lm09bHxDEsoVK8zwzWJomLHU Ud%1910479b151' -- queryId Note : The job id field contains the queryId of the query when a job was not created for this query.
- This field represents the time when the job enters the DONE state. error result RECORD Details of any errors as ErrorProto objects. job creation reason.code STRING Specifies the high level reason why a job was created.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- See Create and manage data agents for more information about data agent permissions. chat with explore chat with agent Model Specific Added 25.18 Conversational Analytics users can chat with a Looker Explore when they have the access data permission on the model that underlies the Explore. save agents chat with explore Model Specific Added 25.18 Conversational Analytics users can create, edit, delete, and share data agents .
- This privilege does not give a user the ability to reassign, edit, or delete other users' schedules on the Schedules and Schedule History pages. see pdts None Connection Specific Users can see the Persistent Derived Tables page in the Admin section of Looker and view information about PDTs from projects that use any connection associated with models for which they have data access .

