---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.326Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "DTMF support"
feature_slug: "dtmf-support"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/docs/contexts-input-output"
keywords:
  - "dtmf"
  - "dialogflow"
  - "cx"
  - "playbooks"
  - "now"
  - "input"
---

# DTMF support

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX playbooks now support DTMF input.

## Extended Definition

Dialogflow CX playbooks now support DTMF input.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/docs/contexts-input-output](https://docs.cloud.google.com/dialogflow/docs/contexts-input-output)

## Supporting Pages

### DTMF for telephony integrations \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf](https://docs.cloud.google.com/dialogflow/cx/docs/concept/dtmf)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- If Dialogflow aborts DTMF processing, it provides the unconverted sequence captured up to that point to the agent as end-user input.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback DTMF for telephony integrations Stay organized with collections Save and categorize content based on your preferences.
- If the end-user pauses entry for than the time set in endpointing timeout duration , Dialogflow aborts DTMF processing and converts the currently-matched sequence as it normally would.
- Match to a system entity type You can associate DTMF patterns with individual intents and entities to trigger a match to end-user input sequences.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- DTMF : Send dual-tone multi-frequency signaling (Touch-Tone) input for telephony interactions.
- Previous arrow back Important terms Next Dialogflow CX console overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.
- Simulator settings When you first open the simulator, you can configure the following settings: Agent environment Start resource, which can be a playbook or flow which receives the first input.

### Input and output contexts \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/contexts-input-output](https://docs.cloud.google.com/dialogflow/docs/contexts-input-output)
- Source ID: `site-docs-root-2`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow ES Send feedback Input and output contexts Stay organized with collections Save and categorize content based on your preferences.
- Input contexts While contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts.
- While contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that are a subset of currently active contexts.
- For example, consider the following intents: Intent name Training phrases Parameters Input contexts Output contexts Response pet-init "What do they look like?" - - - "What kind of pet do you like?" pet-select-dogs "I like dogs" - - dogs "What do you want to know about dogs?" pet-select-cats "I like cats" - - cats "What do you want to know about cats?" dog-show "What do they look like?" - dogs - "Here is a picture of a dog." cat-show "What do they look like?" - cats - "Here is a picture of a cat." When the end-user says I like dogs : The pet-select-dogs intent is matched.

