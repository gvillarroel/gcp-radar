---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.416Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "DataRobot action"
feature_slug: "datarobot-action"
latest_feature_date: "2026-02-06"
deprecation_date: "2026-02-06"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/action-hub"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-users"
  - "https://docs.cloud.google.com/looker/docs/actions-overview"
keywords:
  - "datarobot"
  - "action"
  - "enabled"
  - "looker"
  - "users"
  - "send"
  - "content"
  - "through"
---

# DataRobot action

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The DataRobot action enabled Looker users to send content through the Looker Action Hub; Lets Looker users send data to DataRobot through the Looker Action Hub; deprecated on 2026-02-06.

## Extended Definition

The DataRobot action enabled Looker users to send content through the Looker Action Hub; Lets Looker users send data to DataRobot through the Looker Action Hub; deprecated on 2026-02-06.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- [https://docs.cloud.google.com/looker/docs/actions-overview](https://docs.cloud.google.com/looker/docs/actions-overview)

## Supporting Pages

### Sharing data through an action hub \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/action-hub](https://docs.cloud.google.com/looker/docs/action-hub)
- Source ID: `site-docs-reference-required-4`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Define a valid value for the user attribute for the users or user groups that need to deliver content to your action destination. (These users must also have send to integration permissions.) The params parameter represents the form fields that a Looker admin must configure on the action's enablement page from the Actions list in the Admin panel.
- Home Documentation Data analytics Looker Guides Send feedback Sharing data through an action hub Stay organized with collections Save and categorize content based on your preferences.
- The Looker Action Hub must be able to send and receive API requests in the following ways: From the Looker instance to the Looker Action Hub network From the Looker user's browser to the Looker Action Hub network From the Looker Action Hub network to the Looker instance If your Looker deployment cannot accommodate these requests or if the IP Allowlist feature is enabled on your Looker instance, consider setting up a local action hub server to serve private Looker integrations or custom actions .
- If the customer-hosted instance URL is resolvable by the Looker instance but the Looker Action Hub cannot send requests to the Looker instance, users may be unable to configure or use actions that support streamed results or that use OAuth .

### Admin settings - Users \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-users](https://docs.cloud.google.com/looker/docs/admin-panel-users-users)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Differences between disabling and deleting an account are described in the following table: Description Disabled Deleted The user can sign in to the Looker instance No No The user's personal folder Still exists Deleted Looks and dashboards in the user's personal folder Still exist Moved to the Trash folder Looks and dashboards the user saved to a Shared folder Still exist in the Shared folder Still exist in the Shared folder Schedules created by the user Schedules are disabled Schedules are deleted Schedules based on the user's content, but created by another user Schedules continue to run User's content is deleted; schedules based on that content are deleted Schedules that list the user as a recipient and are created by another user with the ability to deliver content to external email accounts Schedules will continue to run and deliver normally (user will be treated as an external user) Schedules continue to run and deliver normally (user will be treated as an external user) Schedules that have Run schedule as recipient enabled and list the user as a recipient Schedules will continue to run but will fail to deliver to the disabled user upon next run Schedules continue to run but will fail to deliver to all users with error run as recipient was specified on ScheduledPlan but recipient is not a Looker user Boards created by the user Still exist Still exist Alerts created by the user Remain active, but are not visible or editable from the dashboard on which the alert is set unless self-assigned by an admin.
- Home Documentation Data analytics Looker Guides Send feedback Admin settings - Users Stay organized with collections Save and categorize content based on your preferences.
- Viewing and searching users The Users page shows the following information: Tabs group your users by type: The Standard Users tab shows users who sign in to Looker directly, through either the regular authentication process or through the Looker API.
- Language Locale Code and Strings Filename English en Czech cs CZ German de DE Spanish (Spain) es ES Finnish fi FI French (Canada) fr CA French (France) fr FR Hindi hi IN Italian it IT Japanese ja JP Korean ko KR Lithuanian lt LT Norwegian (Bokmål) nb NO Dutch nl NL Polish pl PL Brazilian Portuguese pt BR Portuguese pt PT Russian ru RU Swedish sv SE Thai th TH Turkish tr TR Ukrainian uk UA Simplified Chinese zh CN Traditional Chinese zh TW For users with no Locale set, Looker uses the locale chosen on the Localization page of the Admin panel as the default locale; and, if no locale is set there, Looker defaults to en .

### Looker actions overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/actions-overview](https://docs.cloud.google.com/looker/docs/actions-overview)
- Source ID: `site-docs-reference-required-4`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Looker Guides Send feedback Looker actions overview Stay organized with collections Save and categorize content based on your preferences.
- Once an action is developed, deployed as a web service, and then added to a Looker instance, Looker users will be able to send data using that action from within Looker.
- While these use cases are diverse, the common thread between them is that Looker users are able to instruct Looker to reach out and send data to an Action.
- Integrated service Description Link to README file How to use this integration Required LookML tags Action type Content available for scheduled deliveries Uses Google OAuth authentication (Yes/No) Uses data streaming (Yes/No) Minimum supported Looker version Airtable Add records to a table in Airtable.

