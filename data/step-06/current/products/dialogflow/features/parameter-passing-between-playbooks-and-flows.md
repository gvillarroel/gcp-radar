---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.296Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Parameter passing between playbooks and flows"
feature_slug: "parameter-passing-between-playbooks-and-flows"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
  - "https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow"
keywords:
  - "parameter"
  - "passing"
  - "between"
  - "playbooks"
  - "flows"
  - "parameters"
  - "can"
  - "now"
---

# Parameter passing between playbooks and flows

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Parameters can now be passed between routine playbooks, task playbooks, and flows.

## Extended Definition

Parameters can now be passed between routine playbooks, task playbooks, and flows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)

## Supporting Pages

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample: matches = flows . flow1 . match intent ( history . last user utterance ) . matches if matches and matches [ 0 ] . intent == "some intent" : to country = matches [ 0 ] . parameters . get ( "to country" ) if to country : respond ( f "To confirm, you're going to { to country } , right?" ) FlowInvocation A flow invocation, found in the conversation history.
- Args: action: The action, for example playbooks.<playbook name> . inputs: The input action parameters.
- Sample: Playbook with provided inputs. add override ( playbooks . troubleshooting , { PRECEDING CONVERSATION SUMMARY : "phone is broken" , "device" : "phone" }) Playbook with provided empty inputs. add override ( playbooks . troubleshooting , {}) Flow with generated inputs. add override ( flows . billing ) Tool use. add override ( tools . weather api . get weather , { "location" : "San Francisco" }) Just like add override, this stacks on top of previously added overrides. respond ( "Hello" ) cancel Override the next action to have this playbook return a cancelled state.
- You can use the following decorator parameters: event : Required event as a string condition : Optional condition as a string Sample: @EventTrigger ( event = 'my event' ) def my trigger () - > None : respond ( "..." ) Sample with condition: @EventTrigger ( event = 'my event' , condition = '$session.params.is foo = true' ) def my trigger () - > None : respond ( "..." ) Type variables InlineAction A reference to a function decorated with @Action .

### Actions and parameters \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters](https://docs.cloud.google.com/dialogflow/docs/intents-actions-parameters)
- Source ID: `site-docs-root-2`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameter reference location Configured content Resolved content Parameter Value field $size S Intent response You chose size: $size You chose size: S Parameter reference location Configured content Resolved content Parameter Value field $size.original small Intent response You chose size: $size You chose size: small Parameter reference location Configured content Resolved content Parameter Value field $size S Intent response You chose size: $size.original You chose size: small Slot filling with required parameters When building an agent, you can mark parameters as required.
- For example, a produce-ordering agent may expect the following end-user expressions: "I want apples" "I want apples and oranges" "I want apples, oranges, and bananas" When annotating training phrases with list parameters, your phrases can contain one or more parameter examples, and you annotate each one separately: Once you annotate at least two words or phrases with the same parameter in a single training phrase, the Is List option is automatically enabled.
- For example, consider that your clothing store agent has an intent with required parameters for: clothing type quantity size color Completing an intent may look like the following: User : I'd like to buy a t-shirt.
- When an intent is matched at runtime, the Dialogflow agent continues collecting information from the end-user until the end-user has provided data for each of the required parameters.

### Flows \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow](https://docs.cloud.google.com/dialogflow/cx/docs/concept/flow)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- During import, all of the exported flows will be imported and the transitions between these flows will be preserved.
- Input parameters : Parameters from the task playbook that are made available to the flow.
- A start page does not have parameters or responses messages like normal pages.
- Return parameters : Parameters that the flow returns to a task playbook.

