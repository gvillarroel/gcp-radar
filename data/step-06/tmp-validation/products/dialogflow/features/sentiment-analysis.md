---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:32:45.797Z"
product_name: "Dialogflow"
product_slug: "dialogflow"
feature_name: "Sentiment Analysis"
feature_slug: "sentiment-analysis"
latest_feature_date: "2019-05-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2"
  - "https://docs.cloud.google.com/dialogflow/es/docs/agents-settings"
  - "https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition"
keywords:
  - "evaluates"
  - "interactions"
  - "sentiment"
  - "analysis"
  - "user"
---

# Sentiment Analysis

Product: Dialogflow
Coverage: MEDIUM

## Step 02 Summary

Sentiment Analysis evaluates end-user sentiment in Dialogflow interactions.

## Extended Definition

Sentiment Analysis evaluates end-user sentiment in Dialogflow interactions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)

## Supporting Pages

### "Package com.google.cloud.dialogflow.v2 (4.94.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
- Source ID: `site-java-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. com. google. cloud. dialogflow. v2.
- See: https://cloud.google.com/natural-language/docs/basics#interpreting sentiment analysis values com. google. cloud. dialogflow. v2.
- See: https://cloud.google.com/natural-language/docs/basics#interpreting sentiment analysis values com. google. cloud. dialogflow. v2.

### Agent settings \_|\_ Dialogflow ES \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/es/docs/agents-settings](https://docs.cloud.google.com/dialogflow/es/docs/agents-settings)
- Source ID: `site-iam-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Sentiment Analysis Previous arrow back Small talk Next Intents arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Automatic Spell Correction : If this is enabled and user input has a spelling or grammar mistake, an intent will be matched as though it was written correctly.
- Log Settings : Log interactions to Dialogflow : Note: To view or change this setting with the console, you must have the IAM Project Owner role .
- Dialogflow agents use machine learning algorithms to understand end-user expressions, match them to intents, and extract structured data.

### Conditions reference \_|\_ Dialogflow CX \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition](https://docs.cloud.google.com/dialogflow/cx/docs/reference/condition)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can build more complex conditions which evaluate to true for cases like: A parameter equals a specific value A parameter is less than or greater than a specific value A parameter is in a range of values One parameter is greater than another parameter A form has been completed End-user sentiment is positive or negative A probability from a random function To set conditions in the console, see the handler documentation .
- This allows your agent to tailor responses based on sentiment analysis results .
- To check whether the current page's form is filled, use the following condition: $page.params.status = "FINAL" To check whether a particular form parameter was filled for the end-user's previous conversational turn, use the following condition: $page.params.parameter-id.status = "UPDATED" To check that a numerical session parameter is between the values 1 and 10, use the following condition: $session.params.parameter-id >= 1 AND $session.params.parameter-id <= 10 To check that the second value of a list session parameter is equal to "hello", use the following condition: $session.params.parameter-id[1] = "hello" Request-scoped parameter references When defining a condition, you can also use the request-scoped parameters to form your condition.
- Example conditions that use sentiment: $request.sentiment.score < 0 $request.sentiment.score > 0 $request.sentiment.magnitude > 3.6 $request.sentiment.succeeded = true $request.sentiment.succeeded = false Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

