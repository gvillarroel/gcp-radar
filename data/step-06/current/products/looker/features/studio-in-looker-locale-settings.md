---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.490Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker locale settings"
feature_slug: "studio-in-looker-locale-settings"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-settings"
keywords:
  - "studio"
  - "looker"
  - "locale"
  - "settings"
  - "administrators"
  - "can"
  - "set"
  - "instance"
---

# Studio in Looker locale settings

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Administrators can set an instance locale or a group locale for Studio in Looker.

## Extended Definition

Administrators can set an instance locale or a group locale for Studio in Looker.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)

## Supporting Pages

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .
- If you want the user to view both model localization and Looker's built-in UI translations, the model's strings file should have the same name as the appropriate locale code in the following table; and that code should be entered in the Locale field.
- If the number of complimentary Pro licenses that are allocated to your account becomes less than the number of licenses that are in use, the difference will be converted within 24 hours to paid licenses, subject to Looker Studio Pro pricing .

### Admin settings - Looker Studio Pro \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp](https://docs.cloud.google.com/looker/docs/admin-panel-platform-lsp)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to perform the following tasks for a Looker instance: Accept the complimentary Looker Studio Pro licenses that have been allocated to your Looker instance Specify the Google Cloud project that hosts your Looker Studio Pro content Add Looker users to your Looker Studio Pro subscription Before you begin Important: A Looker account is associated with a Looker Studio Pro subscription through the Google Cloud project that hosts Looker Studio Pro content.
- Console To finish setting up your new Looker Studio Pro subscription in the Google Cloud console, follow these steps starting on the Looker Studio Pro page or tab for your Looker instance: Click Add users , which opens the Looker Studio Pro homepage within the Google Cloud console.
- Note: If the number of users that you have added exceeds the number of complimentary Looker Studio Pro licenses that are allocated to your Looker instance, the Total monthly cost line item displays the cost of the additional licenses that you are purchasing.
- Transfer complimentary Looker Studio Pro licenses to a different subscription After you have saved the project that you selected for your Looker Studio Pro licenses in your Looker instance, we strongly recommend that you don't modify the project selection.

### Admin settings - General settings \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-settings](https://docs.cloud.google.com/looker/docs/admin-panel-general-settings)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The Settings page in the General section of the Admin panel lets Looker admins configure the instance-wide settings for Looker.
- Some settings are available only for Looker (original) instances or only for Looker (Google Cloud core) instances.
- Feature Configuration The following feature configuration settings are available for Looker instances.
- The Settings page within a Looker (Google Cloud core) instance doesn't contain this setting.

