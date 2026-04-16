---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.508Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Looker IDE panel resizing"
feature_slug: "looker-ide-panel-resizing"
latest_feature_date: "2024-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-labs"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
keywords:
  - "looker"
  - "ide"
  - "panel"
  - "resizing"
  - "users"
  - "can"
  - "resize"
  - "feature"
---

# Looker IDE panel resizing

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Users can resize Looker IDE feature and side panels, and side panel sizes persist across logins and refreshes.

## Extended Definition

Users can resize Looker IDE feature and side panels, and side panel sizes persist across logins and refreshes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)

## Supporting Pages

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features](https://docs.cloud.google.com/looker/docs/admin-panel-general-preview-features)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When enabled, the New Looker Explore and Merge Query Experience feature lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces.
- If the preview feature is disabled, any dashboard tiles that were resized during its enablement will revert to Looker's original sizing constraints.
- This feature allows admins to set limits on tiles per dashboard and per tab to optimize performance, which is configured on the Content Guardrails page in the Performance Center section of the Admin panel.

### Admin settings - Preview Features \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-labs](https://docs.cloud.google.com/looker/docs/admin-panel-general-labs)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The Enhanced Content Cleanup preview feature provides the following capabilities: Lets admins and users access a new Unused content folder to quickly identify and manage the unused content on a Looker instance.
- When enabled, the New Looker Explore and Merge Query Experience feature lets individual users have the option to try the redesigned Looker Explore and Merge Query interfaces.
- If the preview feature is disabled, any dashboard tiles that were resized during its enablement will revert to Looker's original sizing constraints.
- This feature allows admins to set limits on tiles per dashboard and per tab to optimize performance, which is configured on the Content Guardrails page in the Performance Center section of the Admin panel.

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
- The Users page in the Users section of the Admin panel lists all user accounts on your Looker instance.
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- From the Edit User page you can do the following: Enable or disable the service account Edit the service account name Manage the service account API keys Assign different groups and Roles Edit the user attributes that are associated with the service account Migrating user accounts to service accounts Important: Starting with the Looker 26.8 release, the following changes will occur: Looker (original) admins will no longer be able to access or manage the API credentials of their standard users.

