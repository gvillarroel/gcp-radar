---
title: "Interface AgentAssistantRecordOrBuilder (4.94.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantRecordOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.AgentAssistantRecordOrBuilder
  title: "Interface AgentAssistantRecordOrBuilder (4.94.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface AgentAssistantRecordOrBuilder (4.94.0)
Stay organized with collections
Save and categorize content based on your preferences.
4.94.0 (latest)
4.93.0
4.91.0
4.89.0
4.88.0
4.87.0
4.86.0
4.84.0
4.82.0
4.81.0
4.80.0
4.79.0
4.78.0
4.76.0
4.74.0
4.73.0
4.70.0
4.69.0
4.68.0
4.66.0
4.65.0
4.64.0
4.63.0
4.62.0
4.61.0
4.60.0
4.59.0
4.58.0
4.57.0
4.55.0
4.54.0
4.53.0
4.52.0
4.51.0
4.50.0
4.49.0
4.48.0
4.47.0
4.46.0
4.45.0
4.43.0
4.42.0
4.41.0
4.40.0
4.39.0
4.38.0
4.37.0
4.36.0
4.35.0
4.34.0
4.33.0
4.30.0
4.29.0
4.28.0
4.27.0
4.26.0
4.25.0
4.24.0
4.23.0
4.22.0
4.21.0
4.20.0
4.19.0
4.18.0
4.17.0
4.15.0
4.14.0
4.13.0
4.12.0
4.11.0
4.10.0
4.9.1
4.8.6
4.7.5
4.6.0
4.5.11
4.4.0
4.3.1
public interface AgentAssistantRecordOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getAnswerCase()
public abstract AgentAssistantRecord . AnswerCase getAnswerCase ()
Returns
Type
Description
AgentAssistantRecord.AnswerCase
getArticleSuggestionAnswer()
public abstract ArticleAnswer getArticleSuggestionAnswer ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ArticleAnswer
The articleSuggestionAnswer.
getArticleSuggestionAnswerOrBuilder()
public abstract ArticleAnswerOrBuilder getArticleSuggestionAnswerOrBuilder ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
ArticleAnswerOrBuilder
getDialogflowAssistAnswer()
public abstract DialogflowAssistAnswer getDialogflowAssistAnswer ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
DialogflowAssistAnswer
The dialogflowAssistAnswer.
getDialogflowAssistAnswerOrBuilder()
public abstract DialogflowAssistAnswerOrBuilder getDialogflowAssistAnswerOrBuilder ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
DialogflowAssistAnswerOrBuilder
getFaqAnswer()
public abstract FaqAnswer getFaqAnswer ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
FaqAnswer
The faqAnswer.
getFaqAnswerOrBuilder()
public abstract FaqAnswerOrBuilder getFaqAnswerOrBuilder ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
FaqAnswerOrBuilder
getGeneratorSuggestion()
public abstract GeneratorSuggestion getGeneratorSuggestion ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
GeneratorSuggestion
The generatorSuggestion.
getGeneratorSuggestionOrBuilder()
public abstract GeneratorSuggestionOrBuilder getGeneratorSuggestionOrBuilder ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
GeneratorSuggestionOrBuilder
hasArticleSuggestionAnswer()
public abstract boolean hasArticleSuggestionAnswer ()
Output only. The article suggestion answer.
.google.cloud.dialogflow.v2.ArticleAnswer article_suggestion_answer = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the articleSuggestionAnswer field is set.
hasDialogflowAssistAnswer()
public abstract boolean hasDialogflowAssistAnswer ()
Output only. Dialogflow assist answer.
.google.cloud.dialogflow.v2.DialogflowAssistAnswer dialogflow_assist_answer = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the dialogflowAssistAnswer field is set.
hasFaqAnswer()
public abstract boolean hasFaqAnswer ()
Output only. The FAQ answer.
.google.cloud.dialogflow.v2.FaqAnswer faq_answer = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the faqAnswer field is set.
hasGeneratorSuggestion()
public abstract boolean hasGeneratorSuggestion ()
Output only. The generator suggestion.
.google.cloud.dialogflow.v2.GeneratorSuggestion generator_suggestion = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];
Returns
Type
Description
boolean
Whether the generatorSuggestion field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
