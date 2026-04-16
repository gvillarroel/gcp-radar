---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.384Z"
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
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
keywords:
  - "dialogflow"
  - "cx"
  - "call"
  - "companion"
  - "provides"
  - "mobile"
  - "user"
  - "interface"
---

# Dialogflow CX call companion

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX call companion provides a mobile user interface that supplements a phone call with an agent.

## Extended Definition

Dialogflow CX call companion provides a mobile user interface that supplements a phone call with an agent.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)

## Supporting Pages

### Call companion \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion](https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Call companion provides an interactive visual interface that end-users can access on their mobile phone during a voice call with your agent.
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- To initiate the mobile interface, Dialogflow sends an SMS message to the user's phone.
- Agent design recommendations The following recommendations apply to call companion: For turns requiring interactive end-user input (text input, chip tapping, and so on), adjust the no speech timeout on the page, flow, or agent level to allow the user enough time to input the required content.

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

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calling Dialogflow securely from an end-user device You should never store your private keys used to access the Dialogflow API on an end-user device.
- For example, you should not create a mobile application that calls Dialogflow directly.
- Performance per operation The following table provides information about the typical performance of Dialogflow operations: Action Notes Flow actions: state handlers Fastest operation Flows: intent detection (text) Fastest operation Flows: parameter detection (text) Fast operation Speech recognition (streaming) Data is processed and responses are returned as soon as possible.
- Previous arrow back Call companion Next General agent design best practices arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

