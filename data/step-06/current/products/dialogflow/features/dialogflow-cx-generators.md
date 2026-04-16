---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.321Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX generators"
feature_slug: "dialogflow-cx-generators"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsPager"
keywords:
  - "dialogflow"
  - "cx"
  - "generators"
  - "now"
  - "gemini"
  - "flash"
  - "001"
  - "model"
---

# Dialogflow CX generators

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Generators now support the gemini-2.0-flash-001 model in multiple regions as a generally available feature; Dialogflow CX generators provide generative content capabilities within agents.

## Extended Definition

Generators now support the gemini-2.0-flash-001 model in multiple regions as a generally available feature; Dialogflow CX generators provide generative content capabilities within agents.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsPager)

## Supporting Pages

### Data store tool settings \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings](https://docs.cloud.google.com/dialogflow/cx/docs/concept/data-store/settings)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- It is optimized for both voice and text with optimized latency gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite All listed models are available in all supported languages and supported regions .
- It is specifically optimized for voice interactions with optimized latency. gemini-2.5-flash GA Gemini 2.5 flash gemini-2.5-flash-lite GA Gemini 2.5 flash lite gemini-2.0-flash-001 GA Gemini 2.0 flash gemini-2.0-flash-lite-001 GA Gemini 2.0 flash lite gemini-2.0-flash-lite-001-voice-mode GA Gemini 2.0 flash lite optimized for voice.
- The placeholders are as follows: $original-query : The user's query text. $rewritten-query : Dialogflow uses a rewriter module to rewrite the original user query into a more accurate format. $sources : Dialogflow uses Enterprise Search to search for sources based on the user's query.
- Sources: $sources $end-user-metadata $conversation Human: $original-query AI: Select rewriter model Note: Providing a custom prompt might influence the quality of answers either positively or negatively.

### "Class ListConversationModelEvaluationsAsyncPager (2.47.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dialogflow v2.types.ListConversationModelEvaluationsRequest The initial request object. response google.cloud.dialogflow v2.types.ListConversationModelEvaluationsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListConversationModelEvaluationsResponse ], ], request : google . cloud . dialogflow v2 . types . conversation model .
- ListConversationModelEvaluationsResponse ], ], request : google . cloud . dialogflow v2 . types . conversation model .
- ListConversationModelEvaluationsRequest , response : google . cloud . dialogflow v2 . types . conversation model .

### "Class ListConversationModelEvaluationsPager (2.47.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsPager](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.conversation_models.pagers.ListConversationModelEvaluationsPager)
- Source ID: `site-python-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dialogflow v2.types.ListConversationModelEvaluationsRequest The initial request object. response google.cloud.dialogflow v2.types.ListConversationModelEvaluationsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListConversationModelEvaluationsResponse , ], request : google . cloud . dialogflow v2 . types . conversation model .
- ListConversationModelEvaluationsResponse , ], request : google . cloud . dialogflow v2 . types . conversation model .
- ListConversationModelEvaluationsRequest , response : google . cloud . dialogflow v2 . types . conversation model .

