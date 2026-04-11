---
title: "AnnotationBoundary \_|\_ Customer Experience Insights \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnnotationBoundary
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/contact-center/insights/docs/reference/rest/v1/AnnotationBoundary
  title: "AnnotationBoundary \_|\_ Customer Experience Insights \_|\_ Google Cloud\
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
AnnotationBoundary
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
A point in a conversation that marks the start or the end of an annotation.
JSON representation
{
"transcriptIndex" : integer ,
// Union field detailed_boundary can be only one of the following:
"wordIndex" : integer
// End of list of possible types for union field detailed_boundary .
}
Fields
transcriptIndex
integer
The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.
Union field detailed_boundary . A detailed boundary, which describes a more specific point. detailed_boundary can be only one of the following:
wordIndex
integer
The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-30 UTC."],[],[]]
