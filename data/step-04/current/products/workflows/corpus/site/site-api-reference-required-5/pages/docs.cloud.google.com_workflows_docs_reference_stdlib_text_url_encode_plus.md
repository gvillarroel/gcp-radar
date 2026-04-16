---
title: "Function: text.url_encode_plus \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_encode_plus
knowledge_key: corpus
source_id: site-api-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_encode_plus
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_encode_plus
  title: "Function: text.url_encode_plus \_|\_ Workflows \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Function: text.url_encode_plus
Stay organized with collections
Save and categorize content based on your preferences.
Returns a string with percent-encoded reserved characters, and spaces replaced by pluses ( + ).
The reserved characters in the original string are replaced with their
percent-escaped representation ( %xx ). Letters, digits, and the characters
.-_ are not escaped.
Arguments
Arguments
source
string
The string that will be converted.
Returns
A percent-encoded copy of the source string with spaces converted to
pluses.
Raised exceptions
Exceptions
TypeError
If source is not a string.
Examples
# Return string with percent-encoded reserved characters and pluses
# Returns "a%2Fb%2Fc%3Fitem%3Dd%2Be+f"
- returnStep :
return : ${text.url_encode_plus("a/b/c?item=d+e f")}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
