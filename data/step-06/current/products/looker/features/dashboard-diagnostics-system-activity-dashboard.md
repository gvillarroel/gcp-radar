---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.531Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Dashboard Diagnostics System Activity dashboard"
feature_slug: "dashboard-diagnostics-system-activity-dashboard"
latest_feature_date: "2024-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/access-levels"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
keywords:
  - "dashboard"
  - "diagnostics"
  - "system"
  - "activity"
  - "helps"
  - "troubleshoot"
  - "performance"
  - "individual"
---

# Dashboard Diagnostics System Activity dashboard

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Dashboard Diagnostics System Activity dashboard helps troubleshoot the performance of individual dashboards.

## Extended Definition

The Dashboard Diagnostics System Activity dashboard helps troubleshoot the performance of individual dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/access-levels](https://docs.cloud.google.com/looker/docs/access-levels)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Advanced Editor access data , clear cache refresh , create custom fields , create table calculations , develop , explore , follow alerts , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Support Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- Support Basic Editor access data , clear cache refresh , create custom fields , create table calculations , explore , follow alerts , manage privatelabel , manage themes , see admin , see alerts , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see schedules , see sql , see datagroups , see system activity , see user dashboards , see users NOTE : The Support Basic Editor permission set is available only when the Tiered Support Access Labs feature is enabled.

### "Designing and configuring a system of access levels \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/access-levels](https://docs.cloud.google.com/looker/docs/access-levels)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Manage Access, Edit : This access level lets a user do everything that the View access level does, plus make changes to the folder, such as the following: Editing Looks and editing dashboards in the folder Specifying which users and groups of users can view or manage the folder Creating subfolders Renaming, moving, and deleting a folder Moving Looks and dashboards Deleting Looks and dashboards For additional discussion of content access and permissions, see Controlling user content access and How content access and permissions interact .
- How access to a folder affects its subfolders Before you decide how open or closed you want your system to be, it's important to understand how the access levels you set in parent folders will affect their subfolders, as well as what you can and can't change at lower levels in the hierarchy.
- Types of access to folders One of two access levels can be assigned to each Looker user or group for any given folder: View : With this access level, a user can see that the folder exists, can view the Looks and dashboards inside it, and can copy the Looks and dashboards in the folder.
- Enable the Closed System option in the Admin panel It's best to enable the Closed System option before setting up any access controls on folders, since enabling the Closed System option makes changes to your system (see the introduction to Configuring a closed system on this page).

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- The PDT Activity dashboard includes tiles that show the following information: A summary of the persisted table that includes the name of the LookML model and view that define the persisted table, the name of the database connection that the persisted table uses, the total number of the persisted table's successful and failed build attempts, and the percentage of total build attempts that were failures.
- PDT Event Log Explore Looker includes a prebuilt model named system activity that allows exploration of the PDT event log, which is a table in a database connection's temp schema that tracks the trigger and build activity of persisted tables.
- PDT Activity Dashboard : Opens the PDT Activity dashboard , which is filtered to show activity for the selected persisted table over the last four weeks.
- PDT Activity dashboard The PDT Activity dashboard shows information about the persisted table, its rebuilds, and its queries.

