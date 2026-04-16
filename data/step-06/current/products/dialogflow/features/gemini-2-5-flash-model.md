---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.306Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Gemini 2.5 Flash model"
feature_slug: "gemini-2-5-flash-model"
latest_feature_date: "2025-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager"
keywords:
  - "gemini"
  - "flash"
  - "model"
  - "available"
  - "all"
  - "regions"
  - "generators"
  - "playbooks"
---

# Gemini 2.5 Flash model

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

This Gemini model is available in all regions for Generators, Playbooks, and Data stores tools.

## Extended Definition

This Gemini model is available in all regions for Generators, Playbooks, and Data stores tools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library](https://docs.cloud.google.com/dialogflow/cx/docs/reference/code-block-system-library)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager)

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
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overrides are queued in order (first added is first to be executed), and can be added at any point inside handlers and actions, but only take effect once the current action/handler has returned, like so: @BeforeActionTrigger : Queued overrides are executed in order, before the triggering next action (the one that triggered the handler) is executed. @PlaybookStart / BeforeModelTrigger : Queued overrides are executed in order, before operation shifts back to the LLM selecting the next action. @Action : The action itself reports its output, then after that the queued overrides are executed in order.
- Sample: Playbook with provided inputs. add override ( playbooks . troubleshooting , { PRECEDING CONVERSATION SUMMARY : "phone is broken" , "device" : "phone" }) Playbook with provided empty inputs. add override ( playbooks . troubleshooting , {}) Flow with generated inputs. add override ( flows . billing ) Tool use. add override ( tools . weather api . get weather , { "location" : "San Francisco" }) Just like add override, this stacks on top of previously added overrides. respond ( "Hello" ) cancel Override the next action to have this playbook return a cancelled state.
- Sample: @BeforeModelTrigger def my trigger () - > None : respond ( "..." ) Sample with condition: @BeforeModelTrigger ( '$session.params.is foo = true' ) def my trigger () - > None : respond ( "..." ) Sample with condition and special variable $last-action that contains the previous action: @BeforeModelTrigger ( '$last-action.name = "query order" AND $last-action.output.orders = null' ) def my trigger () - > None : respond ( "..." ) @BeforePlaybookTrigger @BeforePlaybookTrigger decorator triggers the function the first time a playbook has started.
- Sample: @Action def is prime ( n : int ): bool """Returns true if n is prime.""" import math return ( all ([ False for i in range ( 2 , math . sqrt ( n ) if n % i == 0 ]) and not n < 2 ) For this function, the following will be sent to the LLM: Actions is prime: description: Returns true if n is prime. input: is prime input output: bool Schemas is prime input: type: object properties: - n: type: integer @BeforeActionTrigger @BeforeActionTrigger decorator triggers the function every time before the large language model executes an action.

### "Class ListConversationModelEvaluationsAsyncPager (2.47.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All the usual ListConversationModelEvaluationsResponse attributes are available on the pager.
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dialogflow v2.types.ListConversationModelEvaluationsRequest The initial request object. response google.cloud.dialogflow v2.types.ListConversationModelEvaluationsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 2.47.0 (latest) 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.2 2.40.0 2.39.1 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.30.2 2.29.0 2.28.3 2.27.0 2.26.0 2.25.0 2.24.1 2.23.3 2.22.0 2.21.0 2.20.0 2.19.1 2.18.0 2.17.0 2.16.1 2.15.2 2.14.1 2.13.0 2.12.0 2.11.0 2.10.0 2.9.1 2.8.1 2.7.1 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.2 2.0.0 1.1.3 1.0.0 0.8.0 0.7.2 ListConversationModelEvaluationsAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListConversationModelEvaluationsAsyncPager (2.47.0) Stay organized with collections Save and categorize content based on your preferences.

