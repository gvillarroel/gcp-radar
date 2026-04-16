---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.385Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Conversational Analytics Fast mode"
feature_slug: "conversational-analytics-fast-mode"
latest_feature_date: "2026-03-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil"
keywords:
  - "conversational"
  - "analytics"
  - "fast"
  - "mode"
  - "returns"
  - "answers"
  - "more"
  - "quickly"
---

# Conversational Analytics Fast mode

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This mode returns answers more quickly for Conversational Analytics questions.

## Extended Definition

This mode returns answers more quickly for Conversational Analytics questions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)

## Supporting Pages

### "Best practices for using the ConversationalAnalytics API endpoints in Looker's\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices](https://docs.cloud.google.com/looker/docs/best-practices/ca-apis-in-looker-api-best-practices)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Recommendations Follow these recommendations for best results: Persist all messages : After each call to /conversational analytics/chat , make sure to call POST /conversations/:conversation id/messages to save both the user's message from that turn and all system messages that are returned by the chat API.
- Limitations and considerations When using the ConversationalAnalytics API endpoints, consider the following limitations: Message Persistence : It is your responsibility to persist messages using the POST /conversations/:conversation id/messages endpoint.
- Home Documentation Data analytics Looker Best Practices Send feedback Best practices for using the ConversationalAnalytics API endpoints in Looker's API Stay organized with collections Save and categorize content based on your preferences.
- Failing to persist messages after each call to /conversational analytics/chat will prevent the conversation history from being maintained, and the agent won't have context for follow-up questions in a multi-turn conversation.

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- This permission grants users the ability to perform the following tasks: Write LookML using Gemini assistance when they also have a Looker role that contains the develop permission for at least one model in a LookML project Create custom Looker visualizations using Gemini assistance when they also have a Looker role that contains the can override vis config permission Use Conversational Analytics with Looker Explore data in Looker Studio, even if they don't have a role that contains the explore permission, when they also have a Looker role that contains the access data permission on the model that they are querying chat with agent gemini in looker Model Specific Added 25.18 Conversational Analytics users can chat with data agents that use one or more Looker Explores.
- See Create and manage data agents for more information about data agent permissions. chat with explore chat with agent Model Specific Added 25.18 Conversational Analytics users can chat with a Looker Explore when they have the access data permission on the model that underlies the Explore. save agents chat with explore Model Specific Added 25.18 Conversational Analytics users can create, edit, delete, and share data agents .
- See Create and manage data agents for more information about data agent permissions. publish agent externally save agents Model Specific Added 26.6 Available in Preview , Conversational Analytics users can publish data agents to Gemini Enterprise.
- See Create and manage data agents for more information about data agent permissions. admin agents gemini in looker Model Specific Added 25.18 Conversational Analytics users can create, edit, share, and delete data agents .

### Admin settings \u2013 Gemini in Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil](https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- You can assign the gemini in looker permission in any of the following ways: Grant users the Gemini default role Grant users a custom role that contains the gemini in looker permission Grant users Conversational Analytics permissions, permission sets, or roles Add them to the Gemini Default Users group Granting the Gemini default role The gemini in looker permission is the only permission that is included in the Gemini default role , which by default applies to all models on the instance.
- These permissions are summarized in the following list: To query Looker data, or to create a data agent with Conversational Analytics or with the Conversational Analytics API , you must be assigned a Looker role that contains the access data permission for the model that you're querying.
- Granting Conversational Analytics roles or permissions The Conversational Analytics Agent Manager role consists of the Conversational Analytics Agent Manager permission set for all models on the Looker instance.
- The Conversational Analytics User role consists of the Conversational Analytics User permission set for all models on the Looker instance.

