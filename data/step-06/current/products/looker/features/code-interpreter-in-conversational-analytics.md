---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.459Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Code Interpreter in Conversational Analytics"
feature_slug: "code-interpreter-in-conversational-analytics"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "code"
  - "interpreter"
  - "conversational"
  - "analytics"
  - "experimental"
  - "feature"
  - "translates"
  - "natural"
---

# Code Interpreter in Conversational Analytics

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This experimental feature translates natural language questions into Python code and executes it to provide advanced analysis and visualizations; Code Interpreter translates natural language questions into Python code to support advanced analysis and visualizations in Conversational Analytics.

## Extended Definition

This experimental feature translates natural language questions into Python code and executes it to provide advanced analysis and visualizations; Code Interpreter translates natural language questions into Python code to support advanced analysis and visualizations in Conversational Analytics.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To use the Code Interpreter in Conversational Analytics to translate your natural language questions into Python code and execute that code to provide advanced analysis and visualizations, you must be a assigned a role that has the same permissions that are required to use Conversational Analytics.
- Turn on the following toggles to enable each of their corresponding features: Code Interpreter — enables the Code Interpreter for Conversational Analytics.
- The Conversational Analytics setting must also be enabled to use the Code Interpreter.
- Turn on the following toggles to enable each of their corresponding features: Conversational Analytics — enables Conversational Analytics Looker Assistants — enables the Visualization Assistant Optionally, select Enable Trusted Tester Features to grant users access to the Trusted Tester capabilities of Gemini in Looker features.

### "Best practices for using the ConversationalAnalytics API endpoints in Looker's\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- Source ID: `site-docs-reference`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- These APIs mirror the endpoints that power Looker's Conversational Analytics feature and provide the same functions within the Looker API.
- Recommendations Follow these recommendations for best results: Persist all messages : After each call to /conversational analytics/chat , make sure to call POST /conversations/:conversation id/messages to save both the user's message from that turn and all system messages that are returned by the chat API.
- Limitations and considerations When using the ConversationalAnalytics API endpoints, consider the following limitations: Message Persistence : It is your responsibility to persist messages using the POST /conversations/:conversation id/messages endpoint.
- Home Documentation Data analytics Looker Best Practices Send feedback Best practices for using the ConversationalAnalytics API endpoints in Looker's API Stay organized with collections Save and categorize content based on your preferences.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- See Create and manage data agents for more information about data agent permissions. chat with explore chat with agent Model Specific Added 25.18 Conversational Analytics users can chat with a Looker Explore when they have the access data permission on the model that underlies the Explore. save agents chat with explore Model Specific Added 25.18 Conversational Analytics users can create, edit, delete, and share data agents .
- Default roles For new instances, Looker creates the following default roles, each of which includes a default permission set of the same name: Admin Admin via IAM Developer Gemini Looker CI Users Conversational Analytics Agent Manager Conversational Analytics User Support Advanced Editor Support Basic Editor Customer Engineer Advanced Editor User Viewer The default roles in the following sections have conditions for use.

