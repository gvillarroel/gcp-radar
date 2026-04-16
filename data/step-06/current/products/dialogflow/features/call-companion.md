---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.358Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Call companion"
feature_slug: "call-companion"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/call-companion"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
keywords:
  - "call"
  - "companion"
  - "dialogflow"
  - "cx"
  - "generally"
  - "available"
  - "includes"
  - "user"
---

# Call companion

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX Call Companion is generally available and includes new user interface settings.

## Extended Definition

Dialogflow CX Call Companion is generally available and includes new user interface settings.

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
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Settings You can customize the following fields for the Dialogflow CX Messenger UI or call companion UI: Company name or title Font Logo (must be stored in a Google Cloud bucket, format: gs://<bucket name>/<object name> ) Text color (select the color or enter hex code) Background color (select the color or enter hex code) User input background color (select the color or enter hex code) Agent response background color (select the color or enter hex code) Customize the UI Select an agent with call companion enabled and click Agent Settings , then the Multimodal tab.
- Agent design recommendations The following recommendations apply to call companion: For turns requiring interactive end-user input (text input, chip tapping, and so on), adjust the no speech timeout on the page, flow, or agent level to allow the user enough time to input the required content.
- To add an introductory message to let the user know about call companion and the SMS sent, add a response fulfillment for the same fulfillment or page where you have enabled the call companion SMS.
- Enable call companion: For a new telephony integration: Follow the steps to enable Dialogflow CX Phone Gateway , and check the Enable call companion option for a new conversation profile.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- UI Settings You can use these settings to customize the Messenger and Call Companion user interfaces.
- The following agent-wide ML settings are available: Allow ML to correct spelling If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.
- The following intent training settings are available: Spell correction link If this is enabled and end-user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.
- Conversation history made up of user and agent utterances, flow and playbook transition context, tool calls and outputs in the same session from all previous turns sequentially handled by the current playbook.

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Calling Dialogflow securely from an end-user device You should never store your private keys used to access the Dialogflow API on an end-user device.
- Previous arrow back Call companion Next General agent design best practices arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When your client application needs to call the Dialogflow API, it should send requests to a developer-owned proxy service on a secure platform.
- For example, you should not create a mobile application that calls Dialogflow directly.

