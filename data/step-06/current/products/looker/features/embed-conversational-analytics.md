---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.401Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Embed Conversational Analytics"
feature_slug: "embed-conversational-analytics"
latest_feature_date: "2026-03-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices"
keywords:
  - "embed"
  - "conversational"
  - "analytics"
  - "generally"
  - "available"
  - "including"
  - "looker"
  - "core"
---

# Embed Conversational Analytics

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Embed Conversational Analytics is generally available, including support on Looker (Google Cloud core), the Looker embed SDK, and partial embedded theme support; Conversational Analytics conversations and agents can be embedded in an iframe like other Looker content types.

## Extended Definition

Embed Conversational Analytics is generally available, including support on Looker (Google Cloud core), the Looker embed SDK, and partial embedded theme support; Conversational Analytics conversations and agents can be embedded in an iframe like other Looker content types.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- See Create and manage data agents for more information about data agent permissions. chat with explore chat with agent Model Specific Added 25.18 Conversational Analytics users can chat with a Looker Explore when they have the access data permission on the model that underlies the Explore. save agents chat with explore Model Specific Added 25.18 Conversational Analytics users can create, edit, delete, and share data agents .
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- You can assign the gemini in looker permission in any of the following ways: Grant users the Gemini default role Grant users a custom role that contains the gemini in looker permission Grant users Conversational Analytics permissions, permission sets, or roles Add them to the Gemini Default Users group Granting the Gemini default role The gemini in looker permission is the only permission that is included in the Gemini default role , which by default applies to all models on the instance.
- Turn on the following toggles to enable each of their corresponding features: Conversational Analytics — enables Conversational Analytics Looker Assistants — enables the Visualization Assistant Optionally, select Enable Trusted Tester Features to grant users access to the Trusted Tester capabilities of Gemini in Looker features.
- These permissions are summarized in the following list: To query Looker data, or to create a data agent with Conversational Analytics or with the Conversational Analytics API , you must be assigned a Looker role that contains the access data permission for the model that you're querying.
- Granting Conversational Analytics roles or permissions The Conversational Analytics Agent Manager role consists of the Conversational Analytics Agent Manager permission set for all models on the Looker instance.

### "Best practices for using the ConversationalAnalytics API endpoints in Looker's\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Looker's ConversationalAnalytics API endpoints let you build custom Conversational Analytics experiences within your embedded applications.
- Home Documentation Data analytics Looker Best Practices Send feedback Best practices for using the ConversationalAnalytics API endpoints in Looker's API Stay organized with collections Save and categorize content based on your preferences.
- These APIs mirror the endpoints that power Looker's Conversational Analytics feature and provide the same functions within the Looker API.
- Recommendations Follow these recommendations for best results: Persist all messages : After each call to /conversational analytics/chat , make sure to call POST /conversations/:conversation id/messages to save both the user's message from that turn and all system messages that are returned by the chat API.

