---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.443Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Reduce Filter Queries"
feature_slug: "reduce-filter-queries"
latest_feature_date: "2025-10-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-jobs"
keywords:
  - "reduce"
  - "filter"
  - "queries"
  - "reduces"
  - "number"
  - "looker"
  - "runs"
  - "admin"
---

# Reduce Filter Queries

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Reduces the number of filter queries Looker runs from the Admin > Settings page; Reduces the number of filter queries Looker runs from the Admin > Settings page.

## Extended Definition

Reduces the number of filter queries Looker runs from the Admin > Settings page; Reduces the number of filter queries Looker runs from the Admin > Settings page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 201
- Re-rank relevance: N/A

Evidence snippets:
- Reduce Filter Queries This feature reduces the number of queries that are sent by filters.
- When Reduce Filter Queries is enabled, Looker moves any filter that requests suggestions into a dialog where the filter won't fetch suggestions until a user clicks on it in the dialog.
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- The locations in Looker where users might see other users include the following: The Users page in the Admin section of Looker Users' folders in the Folders section of the Looker main menu, if they have been granted at least View access to another user's personal folder The Manage Access pop-up , which is a part of folder management When the Closed System setting is enabled, a non-admin user without the see users permission can see only the other users with whom they share a group and only those groups of which they are a member.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Deleting users from a Looker account that is associated with a Looker Studio Pro subscription reduces the number of complimentary Looker Studio Pro licenses that are allocated to the account.
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.

### JOBS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-jobs](https://docs.cloud.google.com/bigquery/docs/information-schema-jobs)
- Source ID: `site-docs-reference-required-6`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JOBS WHERE job type = 'QUERY' AND end time IS NOT NULL -- Filter for queries containing the specified pattern (case-insensitive) AND REGEXP CONTAINS ( LOWER ( query ), r "export table metadata from" ) ORDER BY start time DESC LIMIT 3 ; Match slot usage behavior from administrative resource charts To explore slot usage behavior similar to the information in administrative resource charts, query the INFORMATION SCHEMA.JOBS TIMELINE view .
- JOBS WHERE query dialect = 'DEFAULT LEGACY SQL' OR query dialect = 'LEGACY SQL' GROUP BY project id ORDER BY default legacysql query jobs DESC , legacysql query jobs DESC ; Number of partitions modified by query and load jobs per table The following example shows the number of partitions modified by queries with DML statements and load jobs, per table.
- Comparing this value with the total reservation size and the average number of concurrent jobs executed within the project or reservation can help you to understand whether multiple queries were competing for slots at the same time during the execution.
- Count recent active queries by query priority The following example displays the number of queries, grouped by priority (interactive or batch) that were started within the last 7 hours: SELECT priority , COUNT ( ) active jobs FROM region- REGION NAME .

