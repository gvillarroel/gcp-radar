---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.703Z"
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
  - "collects"
  - "answers"
  - "answer"
  - "feedback"
  - "includes"
  - "user"
---

# Dialogflow CX answer feedback

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Dialogflow CX answer feedback collects user feedback on answers and includes related configuration options; Dialogflow CX answer feedback collects user feedback on answers.

## Extended Definition

Dialogflow CX answer feedback collects user feedback on answers and includes related configuration options; Dialogflow CX answer feedback collects user feedback on answers.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient)

## Supporting Pages

### Answer feedback \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback](https://docs.cloud.google.com/dialogflow/cx/docs/concept/answer-feedback)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To help track agent performance, Dialogflow provides tools for collecting and analyzing end-user feedback on agent answers during a conversation.
- Collect feedback with custom user interfaces If you have developed a custom user interface, you can add feedback collection to your interface and call the Sessions.submitAnswerFeedback method.
- Go to the Session API reference Select a protocol and version for the Session reference: Protocol V3 V3beta1 REST Session resource Session resource RPC Session interface Session interface C++ SessionsClient Not available C# SessionsClient Not available Go SessionsClient Not available Java SessionsClient SessionsClient Node.js SessionsClient SessionsClient PHP Not available Not available Python SessionsClient SessionsClient Ruby Not available Not available Close Custom feedback data structure You can have feedback data stored in your custom data structure filling the answerFeedback.customRating field in the Sessions.submitAnswerFeedback method.
- If you have already created your BigQuery table, you can alter your existing table with the following SQL command if it doesn't have the required bot answer feedback column: ALTER TABLE < your dataset name > . < your table name > ADD COLUMN bot answer feedback JSON ; Read feedback with the API The conversation history resource contains answerFeedback fields that contain feedback data.

### "Class AnswerRecordsAsyncClient (2.47.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - DetectIntent intent matching - DetectIntent knowledge Answer records are not related to the conversation history in the Dialogflow Console.
- Home Documentation Developer tools Python Client libraries Send feedback Class AnswerRecordsAsyncClient (2.47.0) Stay organized with collections Save and categorize content based on your preferences.
- The customer uses the AnswerRecord .name to call the AnswerRecords.UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.
- Returns Type Description google.cloud.dialogflow v2.types.AnswerRecord Answer records are records to manage answer history and feedbacks for Dialogflow.

### "Class AnswerRecordsClient (2.47.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient](https://docs.cloud.google.com/python/docs/reference/dialogflow/latest/google.cloud.dialogflow_v2.services.answer_records.AnswerRecordsClient)
- Source ID: `site-python-reference`
- Final score: 120
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Currently, answer record includes: - human agent assistant article suggestion - human agent assistant faq article It doesn't include: - DetectIntent intent matching - DetectIntent knowledge Answer records are not related to the conversation history in the Dialogflow Console.
- Home Documentation Developer tools Python Client libraries Send feedback Class AnswerRecordsClient (2.47.0) Stay organized with collections Save and categorize content based on your preferences.
- The customer uses the AnswerRecord.name to call the AnswerRecords.UpdateAnswerRecord method to send feedback about a specific answer that they believe is wrong.
- Returns Type Description google.cloud.dialogflow v2.types.AnswerRecord Answer records are records to manage answer history and feedbacks for Dialogflow.

