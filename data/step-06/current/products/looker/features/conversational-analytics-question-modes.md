---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.389Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Conversational Analytics question modes"
feature_slug: "conversational-analytics-question-modes"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
  - "https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "conversational"
  - "analytics"
  - "question"
  - "modes"
  - "provide"
  - "fast"
  - "mode"
  - "quicker"
---

# Conversational Analytics question modes

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Conversational Analytics question modes provide Fast mode for quicker answers and Thinking mode for more complex questions.

## Extended Definition

Conversational Analytics question modes provide Fast mode for quicker answers and Thinking mode for more complex questions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### "Best practices for using the ConversationalAnalytics API endpoints in Looker's\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Failing to persist messages after each call to /conversational analytics/chat will prevent the conversation history from being maintained, and the agent won't have context for follow-up questions in a multi-turn conversation.
- These APIs mirror the endpoints that power Looker's Conversational Analytics feature and provide the same functions within the Looker API.
- Recommendations Follow these recommendations for best results: Persist all messages : After each call to /conversational analytics/chat , make sure to call POST /conversations/:conversation id/messages to save both the user's message from that turn and all system messages that are returned by the chat API.
- Limitations and considerations When using the ConversationalAnalytics API endpoints, consider the following limitations: Message Persistence : It is your responsibility to persist messages using the POST /conversations/:conversation id/messages endpoint.

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- To use the Code Interpreter in Conversational Analytics to translate your natural language questions into Python code and execute that code to provide advanced analysis and visualizations, you must be a assigned a role that has the same permissions that are required to use Conversational Analytics.
- You can assign the gemini in looker permission in any of the following ways: Grant users the Gemini default role Grant users a custom role that contains the gemini in looker permission Grant users Conversational Analytics permissions, permission sets, or roles Add them to the Gemini Default Users group Granting the Gemini default role The gemini in looker permission is the only permission that is included in the Gemini default role , which by default applies to all models on the instance.
- These permissions are summarized in the following list: To query Looker data, or to create a data agent with Conversational Analytics or with the Conversational Analytics API , you must be assigned a Looker role that contains the access data permission for the model that you're querying.
- Granting Conversational Analytics roles or permissions The Conversational Analytics Agent Manager role consists of the Conversational Analytics Agent Manager permission set for all models on the Looker instance.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Gemini gemini in looker Conversational Analytics Agent Manager access data , gemini in looker , chat with agent , chat with explore , save agents Conversational Analytics User access data , gemini in looker , chat with agent Customer Engineer Advanced Editor access data , can create forecast , can override vis config , chat with agent , chat with explore , clear cache refresh , create custom fields , create table calculations , deploy , develop , explore , follow alerts , gemini in looker , manage embed settings , manage models , manage privatelabel , manage project connections , manage project connections restricted , manage project models , manage themes , save agents , save content , save dashboards , save looks , see admin , see alerts , see datagroups , see drill overlay , see logs , see lookml , see lookml dashboards , see looks , see pdts , see queries , see schedules , see sql , see system activity , see user dashboards , see users , update datagroups , use global connections NOTE : The Customer Engineer Advanced Editor permission set is available only when the Tiered Support Access Labs feature is enabled.
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- See Create and manage data agents for more information about data agent permissions. chat with explore chat with agent Model Specific Added 25.18 Conversational Analytics users can chat with a Looker Explore when they have the access data permission on the model that underlies the Explore. save agents chat with explore Model Specific Added 25.18 Conversational Analytics users can create, edit, delete, and share data agents .
- See Create and manage data agents for more information about data agent permissions. publish agent externally save agents Model Specific Added 26.6 Available in Preview , Conversational Analytics users can publish data agents to Gemini Enterprise.

