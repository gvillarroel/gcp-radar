---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.433Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "select/deselect all filter values control"
feature_slug: "select-deselect-all-filter-values-control"
latest_feature_date: "2026-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
  - "https://docs.cloud.google.com/looker/docs/visualization-guide"
keywords:
  - "select"
  - "deselect"
  - "all"
  - "filter"
  - "values"
  - "control"
  - "adds"
  - "clear"
---

# select/deselect all filter values control

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Adds a control to select or clear all values in tag list and advanced filter types.

## Extended Definition

Adds a control to select or clear all values in tag list and advanced filter types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)

## Supporting Pages

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Control the actions a user can perform Create a permission set with the appropriate permissions, then assign a group or user to a role with that permission set Control what fields a user can access Create a model with the appropriate fields, then assign a group or user to a role with that model Control what data a user can access Create a model with the appropriate data limitations, then assign a group or user to a role with that model - or - Use access filters to limit a user to the appropriate data - or - Use user attributes to provide differing database credentials to a group or user - or - Use user attributes with access grants to restrict access to specific Explores, joins, views, or fields Control what database connections a Looker developer can access Create a project with the appropriate connections, associate the project with a set of models, then assign a group or user to a role with those models Feature access can also affect content access .
- Control developer access to database connections Unlike regular users, Looker developers are not fully constrained by models and access filters, because they can make additions or changes to LookML models.
- Another way user attributes control access is as part of access filters.
- Control user access to data There are several ways to control a user's access to data, depending on the use case: To prohibit users from seeing certain columns of data, control the fields that they can access, as described in the Control user access to Looker fields section .

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- JOBS WHERE statement type <> 'SCRIPT' ) SELECT billing date , sum ( total tib billed multiplier ) estimated charge , sum ( total tib billed ) estimated usage in tib , countif ( isMaybeUsingRowLevelSecurity ( job type , total tib billed , error result )) AS jobs using row level security , FROM usage with multiplier , query params WHERE 1 = 1 -- Filter by creation time for partition pruning.
- The default selection of query dialect can be controlled by the configuration settings .
- JOBS j , UNNEST ( query info . performance insights . stage performance standalone insights ) i WHERE ( j . statement type != "SCRIPT" OR j . statement type IS NULL ) AND i IS NOT NULL AND i . slot contention The output shows different performance insights about jobs, including slot contention: +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ job id creation time performance insights.avg previous execution ms performance insightsstage performance standalone insights.slot contention +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ bquxjob 1 2025-08-08 00:00:00 UTC null true bquxjob 2 2025-08-08 00:00:00 UTC 42689 true bquxjob 3 2025-08-08 00:00:00 UTC 42896 true +------------+-------------------------+-------------------------------------------------+----------------------------------------------------------------------------+ Get jobs with the same query hash The following query returns the job IDs with the same query hash as a specific job: SELECT j . job id , j . creation time , j . query FROM region- REGION NAME .
- The result looks similar to the following: +---------------------+---------------+--------------------+-----------------+ user email total queries total bytes billed total slot ms +---------------------+---------------+--------------------+-----------------+ alice@example.com 152 12000000000 3500000 bob@example.com 45 8500000000 2100000 charles@example.com 210 1100000000 1800000 +---------------------+---------------+--------------------+-----------------+ Find job logs of Connected Sheets queries at the project-level If you don't have organization-level permissions or only need to monitor a specific project, run the following query to see a detailed log of all Connected Sheets queries for the current project: SELECT job id , creation time , user email , total bytes billed , total slot ms , query FROM -- This view queries the project you are currently running the query in. region- REGION NAME .INFORMATION SCHEMA.JOBS BY PROJECT WHERE creation time > = TIMESTAMP SUB ( CURRENT TIMESTAMP (), INTERVAL 30 DAY ) AND job id LIKE 'sheets dataconnector%' AND state = 'DONE' AND ( statement type IS NULL OR statement type <> 'SCRIPT' ) ORDER BY creation time DESC ; Replace REGION NAME with the region for your project.

### "Selecting an effective data visualization \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)
- Source ID: `site-docs-reference-required-4`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Selecting the appropriate visualization type helps you present your data clearly and effectively, allowing your audience to make informed decisions and determine next steps.
- As waterfall charts work specifically with positive and negative values, clear definition between these two categories is essential.
- Through color use and text labels, make sure that the visualization clearly differentiates the values in your data.
- The following sections describe how data can be effectively visualized in a way that centers on both your analytic objectives and your audience's perspectives: Consider the characteristics of your data Define your audience Select the best visualization for your data Consider the characteristics of your data Before you decide on a visualization type, consider the characteristics of your data: Categorical : When your data contains groups of similar patterns and sets, using a visualization type that best supports categorical data, such as a pie chart , is effective.

