---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.639Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Gemini 2.5 Flash model"
feature_slug: "gemini-2-5-flash-model"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
keywords:
  - "generators"
  - "playbooks"
  - "available"
  - "regions"
  - "gemini"
  - "flash"
  - "model"
---

# Gemini 2.5 Flash model

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

This Gemini model is available in all regions for Generators, Playbooks, and Data stores tools.

## Extended Definition

This Gemini model is available in all regions for Generators, Playbooks, and Data stores tools.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .
- All listed models are available in all supported languages and supported regions .
- It is specifically optimized for voice interactions with optimized latency. gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite gemini-2.0-flash-lite-001-voice-mode GA Gemini 2.0 flash lite optimized for voice.
- The following table contains the available options: Model Name Launch Stage Model Spec Default GA This is the recommended configuration and is subject to change over time.

### Code block system library \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- Source ID: `site-docs-reference`
- Final score: 85
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Overrides are queued in order (first added is first to be executed), and can be added at any point inside handlers and actions, but only take effect once the current action/handler has returned, like so: @BeforeActionTrigger : Queued overrides are executed in order, before the triggering next action (the one that triggered the handler) is executed. @PlaybookStart / BeforeModelTrigger : Queued overrides are executed in order, before operation shifts back to the LLM selecting the next action. @Action : The action itself reports its output, then after that the queued overrides are executed in order.
- Sample: Playbook with provided inputs. add override ( playbooks . troubleshooting , { PRECEDING CONVERSATION SUMMARY : "phone is broken" , "device" : "phone" }) Playbook with provided empty inputs. add override ( playbooks . troubleshooting , {}) Flow with generated inputs. add override ( flows . billing ) Tool use. add override ( tools . weather api . get weather , { "location" : "San Francisco" }) Just like add override, this stacks on top of previously added overrides. respond ( "Hello" ) cancel Override the next action to have this playbook return a cancelled state.
- Sample: @BeforeModelTrigger def my trigger () - > None : respond ( "..." ) Sample with condition: @BeforeModelTrigger ( '$session.params.is foo = true' ) def my trigger () - > None : respond ( "..." ) Sample with condition and special variable $last-action that contains the previous action: @BeforeModelTrigger ( '$last-action.name = "query order" AND $last-action.output.orders = null' ) def my trigger () - > None : respond ( "..." ) @BeforePlaybookTrigger @BeforePlaybookTrigger decorator triggers the function the first time a playbook has started.
- Sample: @Action def is prime ( n : int ): bool """Returns true if n is prime.""" import math return ( all ([ False for i in range ( 2 , math . sqrt ( n ) if n % i == 0 ]) and not n < 2 ) For this function, the following will be sent to the LLM: Actions is prime: description: Returns true if n is prime. input: is prime input output: bool Schemas is prime input: type: object properties: - n: type: integer @BeforeActionTrigger @BeforeActionTrigger decorator triggers the function every time before the large language model executes an action.

### Service use best practices \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices](https://docs.cloud.google.com/dialogflow/cx/docs/concept/best-practices)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Generators Performance depends on the language model in use, the complexity of the prompt input and output length, and the number of generators in the turn.
- Multiple generators in a single turn result in multiple calls to a language model.
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close For more information on this, see the Best Practices with Client Libraries guide .
- Data stores: generative AI enabled Performance depends on the size of the data store, the language model in use, and the length of the prompt output and input, in that order.

