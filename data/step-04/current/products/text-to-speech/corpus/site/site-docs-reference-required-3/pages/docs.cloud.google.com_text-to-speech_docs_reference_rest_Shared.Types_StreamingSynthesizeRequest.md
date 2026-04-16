---
title: "StreamingSynthesizeRequest \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesizeRequest
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/text-to-speech/docs/libraries
source_metadata:
  url: https://docs.cloud.google.com/text-to-speech/docs/reference/rest/Shared.Types/StreamingSynthesizeRequest
  title: "StreamingSynthesizeRequest \_|\_ Cloud Text-to-Speech \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Text-to-Speech
Reference
Send feedback
StreamingSynthesizeRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request message for the StreamingSynthesize method. Multiple StreamingSynthesizeRequest messages are sent in one call. The first message must contain a streamingConfig that fully specifies the request configuration and must not contain input . All subsequent messages must only have input set.
JSON representation
{
// Union field streaming_request can be only one of the following:
"streamingConfig" : {
object ( StreamingSynthesizeConfig )
} ,
"input" : {
object ( StreamingSynthesisInput )
}
// End of list of possible types for union field streaming_request .
}
Fields
Union field streaming_request . The request to be sent, either a StreamingSynthesizeConfig or StreamingSynthesisInput. streaming_request can be only one of the following:
streamingConfig
object ( StreamingSynthesizeConfig )
StreamingSynthesizeConfig to be used in this streaming attempt. Only specified in the first message sent in a StreamingSynthesize call.
input
object ( StreamingSynthesisInput )
Input to synthesize. Specified in all messages but the first in a StreamingSynthesize call.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
