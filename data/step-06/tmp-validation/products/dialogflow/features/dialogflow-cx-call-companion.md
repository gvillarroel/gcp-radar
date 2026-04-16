---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.717Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX call companion"
feature_slug: "dialogflow-cx-call-companion"
latest_feature_date: "2023-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design"
keywords:
  - "companion"
  - "interface"
  - "mobile"
  - "call"
  - "provides"
  - "user"
---

# Dialogflow CX call companion

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX call companion provides a mobile user interface that supplements a phone call with an agent.

## Extended Definition

Dialogflow CX call companion provides a mobile user interface that supplements a phone call with an agent.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)

## Supporting Pages

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Call companion provides an interactive visual interface that end-users can access on their mobile phone during a voice call with your agent.
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- Agent design recommendations The following recommendations apply to call companion: For turns requiring interactive end-user input (text input, chip tapping, and so on), adjust the no speech timeout on the page, flow, or agent level to allow the user enough time to input the required content.
- To add an introductory message to let the user know about call companion and the SMS sent, add a response fulfillment for the same fulfillment or page where you have enabled the call companion SMS.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- UI Settings You can use these settings to customize the Messenger and Call Companion user interfaces.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.
- Language auto detection When you configure language auto detection , your chat agent will automatically detect the end-user's language and switch to that language.

### "General agent design best practices \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-design)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- For example, consider end-user input like: "How can I make an international call with Plan A?" "Using international data roaming with Plan B." Do not create entity types for both the actions and the plans, like the following: Actions entity type Plans entity type "How can I make an international call" "Plan A" "Using international data roaming" "Plan B" Instead, you should use training phrases and intent matching to capture the actions and entities to capture the plans.
- However, "Can I make an international call with Plan A?" and "Can I use international data roaming with Plan A?" could belong to different intents, because the end-user wants a different thing in each case.
- Reprompt handlers for forms : This fulfillment is called when the agent is performing form filling, and it does not understand the end-user selection for the current parameter.
- Handling end-user input This section provides guidelines for intents and training phrases, so your agent can optimally handle and process end-user input.

