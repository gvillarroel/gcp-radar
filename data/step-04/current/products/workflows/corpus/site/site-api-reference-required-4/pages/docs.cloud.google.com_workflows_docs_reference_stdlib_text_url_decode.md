---
title: "Function: text.url_decode \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_decode
knowledge_key: corpus
source_id: site-api-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_decode
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/text/url_decode
  title: "Function: text.url_decode \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Function: text.url_decode
Stay organized with collections
Save and categorize content based on your preferences.
Returns a string with pluses and percent-escaped characters converted to UTF-8.
Percent-escaped characters ( %xx ) are replaced with their reserved character
equivalents. Plus signs ( + ) are replaced with spaces. Percent-encoded
sequences are converted into UTF-8.
Arguments
Arguments
source
string
The string that will be converted.
Returns
An unescaped copy of the source string with pluses converted to spaces.
Raised exceptions
Exceptions
TypeError
If source is not a string.
ValueError
If source contains any % not followed by two hexadecimal characters.
Examples
# Return string converted to UTF-8
# Returns "a/b/c?item=d+e"
- returnStep :
return : ${text.url_decode("a%2Fb%2Fc%3Fitem%3Dd%2Be")}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
