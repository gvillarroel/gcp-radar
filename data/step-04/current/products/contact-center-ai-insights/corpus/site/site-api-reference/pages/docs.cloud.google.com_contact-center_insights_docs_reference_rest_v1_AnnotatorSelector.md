---
title: "AnnotatorSelector \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnnotatorSelector
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnnotatorSelector
  title: "AnnotatorSelector \_|\_ Customer Experience Insights \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Customer Experience Insights
Reference
Send feedback
AnnotatorSelector
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
SummarizationConfig
JSON representation
SummarizationModel
QaConfig
JSON representation
ScorecardList
JSON representation
Selector of all available annotators and phrase matchers to run.
JSON representation
{
"runInterruptionAnnotator" : boolean ,
"runSilenceAnnotator" : boolean ,
"runPhraseMatcherAnnotator" : boolean ,
"phraseMatchers" : [
string
] ,
"runSentimentAnnotator" : boolean ,
"runEntityAnnotator" : boolean ,
"runIntentAnnotator" : boolean ,
"runIssueModelAnnotator" : boolean ,
"issueModels" : [
string
] ,
"runSummarizationAnnotator" : boolean ,
"summarizationConfig" : {
object ( SummarizationConfig )
} ,
"runQaAnnotator" : boolean ,
"qaConfig" : {
object ( QaConfig )
}
}
Fields
runInterruptionAnnotator
boolean
Whether to run the interruption annotator.
runSilenceAnnotator
boolean
Whether to run the silence annotator.
runPhraseMatcherAnnotator
boolean
Whether to run the active phrase matcher annotator(s).
phraseMatchers[]
string
The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if runPhraseMatcherAnnotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phraseMatcher}
runSentimentAnnotator
boolean
Whether to run the sentiment annotator.
runEntityAnnotator
boolean
Whether to run the entity annotator.
runIntentAnnotator
boolean
Whether to run the intent annotator.
runIssueModelAnnotator
boolean
Whether to run the issue model annotator. A model should have already been deployed for this to take effect.
issueModels[]
string
The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if runIssueModelAnnotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.
runSummarizationAnnotator
boolean
Whether to run the summarization annotator.
summarizationConfig
object ( SummarizationConfig )
Configuration for the summarization annotator.
runQaAnnotator
boolean
Whether to run the QA annotator.
qaConfig
object ( QaConfig )
Configuration for the QA annotator.
SummarizationConfig
Configuration for summarization.
JSON representation
{
// Union field model_source can be only one of the following:
"conversationProfile" : string ,
"summarizationModel" : enum ( SummarizationModel ) ,
"generator" : string
// End of list of possible types for union field model_source .
}
Fields
Union field model_source . Summarization must use either a preexisting conversation profile or one of the supported default models. model_source can be only one of the following:
conversationProfile
string
Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversationProfile}
summarizationModel
enum ( SummarizationModel )
Default summarization model to be used.
generator
string
The resource name of the existing created generator. Format: projects/ /locations/ /generators/
SummarizationModel
Summarization model to use, if conversationProfile is not used.
Enums
SUMMARIZATION_MODEL_UNSPECIFIED
Unspecified summarization model.
BASELINE_MODEL
The CCAI baseline model. This model is deprecated and will be removed in the future. We recommend using generator instead.
This item is deprecated!
BASELINE_MODEL_V2_0
The CCAI baseline model, V2.0. This model is deprecated and will be removed in the future. We recommend using generator instead.
This item is deprecated!
QaConfig
Configuration for the QA feature.
JSON representation
{
// Union field scorecard_source can be only one of the following:
"scorecardList" : {
object ( ScorecardList )
}
// End of list of possible types for union field scorecard_source .
}
Fields
Union field scorecard_source . Which scorecards should be scored. scorecard_source can be only one of the following:
scorecardList
object ( ScorecardList )
A manual list of scorecards to score.
ScorecardList
Container for a list of scorecards.
JSON representation
{
"qaScorecardRevisions" : [
string
]
}
Fields
qaScorecardRevisions[]
string
List of QaScorecardRevisions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
