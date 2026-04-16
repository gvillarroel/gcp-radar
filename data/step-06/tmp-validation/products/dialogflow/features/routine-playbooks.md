---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.633Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Routine playbooks"
feature_slug: "routine-playbooks"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler"
keywords:
  - "routine"
  - "type"
  - "playbook"
  - "generally"
  - "playbooks"
  - "available"
---

# Routine playbooks

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Routine playbooks are generally available; Routine playbooks are a Dialogflow CX playbook type for recurring conversational workflows.

## Extended Definition

Routine playbooks are generally available; Routine playbooks are a Dialogflow CX playbook type for recurring conversational workflows.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)

## Supporting Pages

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Overrides are queued in order (first added is first to be executed), and can be added at any point inside handlers and actions, but only take effect once the current action/handler has returned, like so: @BeforeActionTrigger : Queued overrides are executed in order, before the triggering next action (the one that triggered the handler) is executed. @PlaybookStart / BeforeModelTrigger : Queued overrides are executed in order, before operation shifts back to the LLM selecting the next action. @Action : The action itself reports its output, then after that the queued overrides are executed in order.
- Sample: Playbook with provided inputs. add override ( playbooks . troubleshooting , { PRECEDING CONVERSATION SUMMARY : "phone is broken" , "device" : "phone" }) Playbook with provided empty inputs. add override ( playbooks . troubleshooting , {}) Flow with generated inputs. add override ( flows . billing ) Tool use. add override ( tools . weather api . get weather , { "location" : "San Francisco" }) Just like add override, this stacks on top of previously added overrides. respond ( "Hello" ) cancel Override the next action to have this playbook return a cancelled state.
- Args: rationale: Your rationale for why the step should be updated step index: The new step formatted as a string, e.g. "1.2.1" Returns: A status message message indicating if the update was successful or not. """ indices = step index . split ( "." ) if not indices : return f "Bad index: { step index } !" step = playbooks .
- Sample: @PlaybookStartHandler def start (): add override ( update step , { "rationale" : "The session just started, so I'm on Step 1" , "step index" : "1" }) @Action def update step ( rationale : str , step index : str ) - > str : """Set the current step.

### "Conversational Agents console overview \_|\_ Dialogflow CX \_|\_ Google\

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents](https://docs.cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Using the Conversational Agents console, you can create interactive agents that use generative playbooks , generative data stores , and deterministic flows .
- Agents that utilize generative features such as playbooks, data stores, generators, or generative fallback for a request are charged as generative requests.
- The Dialogflow CX console will continue to be supported until the Conversational Agents console is generally available (GA).
- To create an agent with playbooks and/or flows : Open the Conversational Agents console .

### Data store tools \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/handler)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- See the reference documentation for details. { "toolUse" : { "tool" : "projects/PROJECT ID/locations/LOCATION ID/agents/AGENT ID/tools/TOOL ID" , "action" : "TOOL DISPLAY NAME" , "inputParameters" : [ { "name" : "TOOL DISPLAY NAME input" , "value" : { "query" : "QUERY" } } ], "outputParameters" : [ { "name" : "TOOL DISPLAY NAME output" , "value" : { "answer" : "ANSWER" , "snippets" : [ { "title" : "TITLE" , "text" : "TEXT FROM DATASTORE" , "uri" : "URI OF DATASTORE" } ] } } ] } } (Playbooks-based agents only) Data store tool examples Note: Examples work with playbooks-based agents only.
- Best practices for filtering: Specify the fields available for filtering and the valid values for each of these fields, so that the playbook understands the constraints on building valid filters.
- For more information see the dataStoreConnections reference . "dataStoreConnections" : [ { "dataStoreType" : "PUBLIC WEB" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "UNSTRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" }, { "dataStoreType" : "STRUCTURED" , "dataStore" : "projects/PROJECT NUMBER/locations/LOCATION ID/collections/default collection/dataStores/DATASTORE ID" } ] Data store tool responses might also contain snippets about the content source that was used to generate the response.
- Special intents In addition to handling questions about the content you provide, the agent can handle the following types of questions: Agent identification : Handles questions like "Who are you?" or "Are you human?".

