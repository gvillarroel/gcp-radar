---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.654Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Language management in the Conversational Agents console"
feature_slug: "language-management-in-the-conversational-agents-console"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient"
keywords:
  - "management"
  - "conversational"
  - "language"
  - "console"
  - "used"
  - "agents"
---

# Language management in the Conversational Agents console

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

The Conversational Agents console can now be used to manage languages.

## Extended Definition

The Conversational Agents console can now be used to manage languages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)

## Supporting Pages

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 221
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Conversational Agents console overview Stay organized with collections Save and categorize content based on your preferences.
- Console compatibility Agents previously built with the Dialogflow CX console or the Vertex AI Agent Builder console can be seamlessly accessed by the Conversational Agents console.
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- Pricing Pricing for agents created with the Conversational Agents console is the same as it has been for agents created with the Dialogflow CX console.

### Dialogflow CX Console overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Previous arrow back Conversational Agents console overview Next Agents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The Dialogflow CX console is used to manage Dialogflow CX agents, while the Google Cloud Console is used to manage Google Cloud-specific Dialogflow CX settings (for example, billing) and other Google Cloud resources.
- How the console is used The console is used to create, build, manage, fine-tune, and test your projects and agents.
- The agent selector interface is used to: Select existing agents Create new agents Create prebuilt agents Export and restore agents Delete agents Configure location settings Filter agents by location Agent builder Once a project and agent has been selected, the agent builder loads.

### "Class AgentsAsyncClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.agents.AgentsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample set agent(): Create a client client = dialogflow v2.AgentsAsyncClient() Initialize request argument(s) agent = dialogflow v2.Agent() agent.parent = "parent value" agent.display name = "display name value" agent.default language code = "default language code value" agent.time zone = "time zone value" request = dialogflow v2.
- Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to.
- Returns Type Description AgentsTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- If a Callable is given, it will be called with the same set of initialization arguments as used in the AgentsTransport constructor.

