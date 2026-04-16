---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.670Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Self-service evaluation for data store agents"
feature_slug: "self-service-evaluation-for-data-store-agents"
latest_feature_date: "2024-06-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
keywords:
  - "evaluation"
  - "assess"
  - "self"
  - "quality"
  - "agents"
  - "store"
---

# Self-service evaluation for data store agents

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Data store agents can run self-service evaluation to assess quality and receive recommended changes.

## Extended Definition

Data store agents can run self-service evaluation to assess quality and receive recommended changes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)

## Supporting Pages

### "Data store performance improvements \_|\_ Dialogflow CX \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/performance)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run self-service evaluation You can run self-service evaluation which will assess the quality of your data store agent and recommend changes.
- Data store search configuration For more information about fine-tuning your data store search results, see the data store search configuration pa Previous arrow back Data store tool settings Next Data store hybrid agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Handle undesired intent matches If your agent is matching intents when it should be using a data store handler, you can try the following to correct this: Delete or modify training phrases that are vague, so that all of your training phrases precisely handle the desired intention and do not conflict with your data store content.
- To accomplish this, you can create a data store handler with data stores that answer the question, apply that handler to the flow start page of the flow that handles credit card information collection, and set a transition target for this handler to return to the "current page".

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Previous arrow back Data store tools Next Data store performance improvements arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Conversation History: $conversation Human: $original -query Search Query: Payload settings Payload settings provide a way to add the data store snippets as rich content in the response payload, which is rendered in the messenger .
- Sources: $sources $end-user-metadata $conversation Human: $original-query AI: Select rewriter model Note: Providing a custom prompt might influence the quality of answers either positively or negatively.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Data store tool settings Stay organized with collections Save and categorize content based on your preferences.

### Agent settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/agent-settings)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Enable conversation history Indicates whether you would like Google to collect and store redacted end-user queries for quality improvement.
- Enable interaction logging Indicates whether you would like Google to collect and store redacted end-user queries for quality improvement.
- If you want to use Chirp3-HD voices, you must remove all SSML tags and test the results to assess if the quality meet your needs.
- Indicates whether you would like Google to collect and store redacted end-user queries for quality improvement.

