---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.494Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "JDBC driver version selection"
feature_slug: "jdbc-driver-version-selection"
latest_feature_date: "2025-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed"
  - "https://docs.cloud.google.com/looker/docs/visualization-guide"
keywords:
  - "jdbc"
  - "driver"
  - "version"
  - "selection"
  - "looker"
  - "lets"
  - "users"
  - "select"
---

# JDBC driver version selection

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Looker lets users select an earlier supported JDBC driver version for a database dialect.

## Extended Definition

Looker lets users select an earlier supported JDBC driver version for a database dialect.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Impersonating (sudoing) users Sudoing lets you navigate Looker as if you were a different user, with all of their privileges and abilities.
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.

### "Selecting an effective data visualization \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/visualization-guide](https://docs.cloud.google.com/looker/docs/visualization-guide)
- Source ID: `site-docs-reference-required-4`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- To learn more about this collection and other color selection options in Looker, see the Color collections documentation page.
- Select the best visualization for your data The following sections provide an overview of available visualization types in Looker and discuss how to select the best type for your data: Cartesian charts Pie and donut charts Progression charts Texts and tables Maps Other charts Cartesian charts A Cartesian chart refers to any chart that is rooted in the Cartesian plane.
- Home Documentation Data analytics Looker Guides Send feedback Selecting an effective data visualization Stay organized with collections Save and categorize content based on your preferences.
- The following sections describe how data can be effectively visualized in a way that centers on both your analytic objectives and your audience's perspectives: Consider the characteristics of your data Define your audience Select the best visualization for your data Consider the characteristics of your data Before you decide on a visualization type, consider the characteristics of your data: Categorical : When your data contains groups of similar patterns and sets, using a visualization type that best supports categorical data, such as a pie chart , is effective.

### Admin settings - Embed \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed](https://docs.cloud.google.com/looker/docs/admin-panel-platform-embed)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The Alerts and scheduling custom url option lets you configure a custom URL in alerts and scheduled email deliveries that will link embed users to the embedding application, rather than a Looker instance.
- In these cases, you need to have the Same-Origin Protections for Looker Login Pages option set to Disabled : If you use private embedding of Looker content in an iframe of a web page hosted by a non-Looker domain, you need to disable Same-Origin Protections for Looker Login Pages so that Looker can display the login page in the iframe and allow users to log into Looker.
- Embed domain URL with Looker IDs — The URL in the custom link will include the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content ID.
- Embed domain URL with Looker slugs — The URL in the custom link includes the domain that is selected in the Domain field in the scheduling or alerts dialog and the Looker path to the embedded dashboard, using the content slug.

