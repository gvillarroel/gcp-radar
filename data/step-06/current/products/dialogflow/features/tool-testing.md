---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.309Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Tool testing"
feature_slug: "tool-testing"
latest_feature_date: "2025-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
keywords:
  - "tool"
  - "testing"
  - "console"
  - "now"
  - "lets"
  - "you"
  - "test"
  - "tools"
---

# Tool testing

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The console now lets you test tools.

## Extended Definition

The console now lets you test tools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)

## Supporting Pages

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Is there anything else I can do for you?" Data store tool configuration If you find during testing that some responses don't meet your expectations, you can try adjusting the following parameters to fine-tune performance.
- Data store tools: Console This section walks you through the process of adding a data store tool to an agent and configuring it in a fulfillment.
- They are available both by calling the API directly or by clicking on the data store name on Tools page in the console.
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Simulator The simulator used for testing the agent.
- Tools List, create, and edit playbook tools .
- Simulator controls Once the conversation has started, there are several controls available at the top of the simulator panel: Debug trace Original response Show latency Create test case Undo Replay conversation Reset conversation Options : Enable or disable webhook calls at any time with the webhook toggle button.
- Previous arrow back Important terms Next Dialogflow CX console overview arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Dialogflow CX Console overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Editing and simulator panels (8) When editing agent content or testing the agent with the simulator , content-specific panels open on the right side of the console.
- How the console is used The console is used to create, build, manage, fine-tune, and test your projects and agents.
- The Manage tab contains resources and tools available to the agent: intents, entity types, webhooks, etc.
- You use this console to create, build, and test agents.

