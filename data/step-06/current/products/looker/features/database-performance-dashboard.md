---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.454Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Database Performance dashboard"
feature_slug: "database-performance-dashboard"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails"
keywords:
  - "database"
  - "performance"
  - "dashboard"
  - "visualizations"
  - "have"
  - "been"
  - "added"
  - "system"
---

# Database Performance dashboard

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

New visualizations have been added to the Database Performance dashboard in System Activity.

## Extended Definition

New visualizations have been added to the Database Performance dashboard in System Activity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)

## Supporting Pages

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The locations in Looker where users might see other users include the following: The Users page in the Admin section of Looker Users' folders in the Folders section of the Looker main menu, if they have been granted at least View access to another user's personal folder The Manage Access pop-up , which is a part of folder management When the Closed System setting is enabled, a non-admin user without the see users permission can see only the other users with whom they share a group and only those groups of which they are a member.
- The status of the setting as of June 9, 2025, has the following effects: If the setting was enabled prior to June 9, 2025, all existing users have been added to the group and all new users will be added to the group.
- Automatically refreshing dashboard data can place a significant strain on some database systems.
- Certification Process URL When a user who does not have the certify content permission wants to request certification of their content, and they select a dashboard's or LookML dashboard's three-dot dashboard menu , a Look's Explore actions gear menu , or an Explore or self-service Explore's Explore actions gear menu , they will see an option that says Want to get this dashboard/look/Explore certified? that includes a Learn how link.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- This permission is applied to individual models or model sets, rather than across the entire Looker instance or to connections. see system activity None Instance Wide CM Users can access the System Activity Explores and dashboards to view usage, history, and other metadata about a Looker instance. see admin None Instance Wide CM Users can have read-only access to admin resources, including pages in the Admin panel , with the exception of the following pages: Support Access Preview Features Legacy Features Export Content Access Actions (if the page displays only the enabled or disabled states of actions) This permission doesn't provide access to System Activity pages. mobile app access None Instance Wide NN Users can sign in to your instance on a mobile device using the Looker mobile app .
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- This permission is applied to individual models or model sets, rather than across the entire Looker instance. send to integration see looks Model Specific Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to the third-party services integrated with Looker using the Looker Action Hub.

### Content Guardrails \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails](https://docs.cloud.google.com/looker/docs/admin-panel-performance-center-content-guardrails)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Although dashboards are powerful tools for conveying business insights, their performance can be impacted by several factors, including the following: Unchecked quantities of dashboard tiles, tabs, or visualizations Frequent query runs Complex query runs As an admin, content guardrails allow you to account for the trade-off between dashboard customizability and performance.
- As an example, if you have a dashboard that is configured to auto-refresh more frequently than your database ETL process occurs, then any time the dashboard refreshes before the next ETL occurs, the dashboard won't retrieve any new data.
- The Content guardrails page has the following options: Limit merged results query tiles Reduce loading time for custom visualizations Limit dashboard refreshing Limit dashboard tabs Limit query tiles on tabs and on dashboards Limit rows in a custom visualization For more information and recommendations about building performant dashboards, see Considerations when building performant Looker dashboards .
- Reduce loading time for custom visualizations Enable the Prerender Iframes (before data loads) for custom visualizations option to reduce the custom visualization loading time by starting to render the iframe even before query data has been loaded.

