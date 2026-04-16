---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.508Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker IDE state persistence"
feature_slug: "looker-ide-state-persistence"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
  - "https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user"
keywords:
  - "looker"
  - "ide"
  - "state"
  - "persistence"
  - "now"
  - "persists"
  - "user"
  - "layout"
---

# Looker IDE state persistence

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker IDE now persists user layout and navigation state across sessions, with an option to reset the layout; The Looker IDE now persists a user's layout and navigation state, with an option to reset the saved layout in IDE Settings.

## Extended Definition

The Looker IDE now persists user layout and navigation state across sessions, with an option to reset the layout; The Looker IDE now persists a user's layout and navigation state, with an option to reset the saved layout in IDE Settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.
- Viewing and searching users The Users page shows the following information: Tabs group your users by type: The Standard Users tab shows users who sign in to Looker directly, through either the regular authentication process or through the Looker API.

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Looker admins and users with the see pdts permission can access the Persistent Derived Tables page.
- These are the persisted tables that have been deployed to production on your instance; these persisted tables provide the data for your users' Explore queries. (If you are in Production Mode or if you don't have develop permissions, the Persistent Derived Tables page will not display any tabs, and the page will show information for production persisted tables only.) The Development tab shows the development persisted tables .
- To open the Persistent Derived Tables page, follow these steps: Click the Looker Main menu icon menu and select Admin , if the Admin menu isn't already displayed. (If you are in the Explore or Develop section of the Looker Main menu , you may have to click the back arrow to see the Admin menu.) From the Admin menu, select Persistent Derived Tables .
- Increment Build Added/Removed Rows : The number of rows that were added to or removed from the table when the table was last incremented (displays – if no rows were added or removed when the table's persistence strategy last triggered an increment).

### Deactivate OAuth App User \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user](https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Auth/deactivate_app_user)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before the user can use the app with their Looker account, the user will have to read and accept an account use disclosure statement for the app.
- Home Documentation Data analytics Looker API Reference Send feedback Deactivate OAuth App User Stay organized with collections Save and categorize content based on your preferences.
- Request DELETE /oauth client apps/{client guid}/users/{user id} Datatype Description Request HTTP Request path HTTP Path Expand HTTP Path definition... client guid string The unique id of this application user id string The id of the user to enable use of this app query HTTP Query Expand HTTP Query definition... fields string Requested fields.
- As with most REST DELETE operations, this endpoint does not return an error if the indicated resource (app or user) does not exist or has already been deactivated.

