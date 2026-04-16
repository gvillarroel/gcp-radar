---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.554Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Expanded dashboard theming"
feature_slug: "expanded-dashboard-theming"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "expanded"
  - "dashboard"
  - "theming"
  - "admin"
  - "users"
  - "can"
  - "show"
  - "hide"
---

# Expanded dashboard theming

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Admin users can show or hide dashboard header elements on embedded dashboards.

## Extended Definition

Admin users can show or hide dashboard header elements on embedded dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- Viewing and searching users The Users page shows the following information: Tabs group your users by type: The Standard Users tab shows users who sign in to Looker directly, through either the regular authentication process or through the Looker API.

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a new query tile within the dashboard In this section, you'll create the Sales Goal Tracking (2024) tile, which will show your cumulative sales over time compared to a yearly sales goal and uses table calculations to define the running total and the target sales.
- Create the new dashboard from an Explore This section guides you through querying data and creating a visualization for the Top Weekly Spenders tile, which will show the top 15 customers by sales in the last 4 weeks.
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- Yearly Sales Goal Tracking (2024) : Visualize your year-to-date sales and compare them to a set goal by using table calculations to visualize a running total and by adding a reference line. (Optional) Weekly Shipping Trends (Last 8 Weeks) : If you've completed the Build a Look with sample data quickstart, you can also add your shipping delay analysis Look to this dashboard.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- This setting lets Looker admins define the email domains to which your users can deliver Looker content — Looks, dashboards, queries with visualizations — or alert notifications through email.
- This prevents non-admin users from automatically refreshing data on dashboards and dashboard tiles.
- Looker won't show in-app guides to embedded users or non-admin users on private label instances.
- The locations in Looker where users might see other users include the following: The Users page in the Admin section of Looker Users' folders in the Folders section of the Looker main menu, if they have been granted at least View access to another user's personal folder The Manage Access pop-up , which is a part of folder management When the Closed System setting is enabled, a non-admin user without the see users permission can see only the other users with whom they share a group and only those groups of which they are a member.

