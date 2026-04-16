---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:17:30.372Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Dialogflow CX answer feedback"
feature_slug: "dialogflow-cx-answer-feedback"
latest_feature_date: "2023-11-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient"
keywords:
  - "dialogflow"
  - "cx"
  - "answer"
  - "feedback"
  - "collects"
  - "user"
  - "answers"
  - "includes"
---

# Dialogflow CX answer feedback

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX answer feedback collects user feedback on answers and includes related configuration options; Dialogflow CX answer feedback collects user feedback on answers.

## Extended Definition

Dialogflow CX answer feedback collects user feedback on answers and includes related configuration options; Dialogflow CX answer feedback collects user feedback on answers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient)

## Supporting Pages

### Answer feedback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To help track agent performance, Dialogflow provides tools for collecting and analyzing end-user feedback on agent answers during a conversation.
- Enable feedback Before collecting answer feedback, you must enable the following settings in the general agent settings : Enable interaction logging Enable Answer Feedback Collect feedback with Dialogflow CX Messenger If you use Dialogflow CX Messenger , you can enable answer feedback collection for the chat dialog by setting the following HTML attribute : allow-feedback="all" .
- Collect feedback with custom user interfaces If you have developed a custom user interface, you can add feedback collection to your interface and call the Sessions.submitAnswerFeedback method.
- Home Documentation AI and ML Dialogflow Dialogflow CX Send feedback Answer feedback Stay organized with collections Save and categorize content based on your preferences.

### "Class AnswerRecordsAsyncClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - DetectIntent intent matching - DetectIntent knowledge Answer records are not related to the conversation history in the Dialogflow Console.
- Returns Type Description google.cloud.dialogflow v2.types.AnswerRecord Answer records are records to manage answer history and feedbacks for Dialogflow.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample update answer record(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 async def sample list answer records(): Create a client client = dialogflow v2.

### "Class AnswerRecordsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient)
- Source ID: `site-python-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - DetectIntent intent matching - DetectIntent knowledge Answer records are not related to the conversation history in the Dialogflow Console.
- Returns Type Description google.cloud.dialogflow v2.types.AnswerRecord Answer records are records to manage answer history and feedbacks for Dialogflow.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample update answer record(): Create a client client = dialogflow v2.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import dialogflow v2 def sample list answer records(): Create a client client = dialogflow v2.

