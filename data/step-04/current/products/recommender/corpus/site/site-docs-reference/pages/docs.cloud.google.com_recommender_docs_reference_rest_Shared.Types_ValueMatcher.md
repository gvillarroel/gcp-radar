---
title: "ValueMatcher \_|\_ Recommender \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/reference/rest/Shared.Types/ValueMatcher
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/reference/rest/Shared.Types/ValueMatcher
  title: "ValueMatcher \_|\_ Recommender \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Reference
Send feedback
ValueMatcher
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Contains various matching options for values for a GCP resource field.
JSON representation
{
// Union field match_variant can be only one of the following:
"matchesPattern" : string
// End of list of possible types for union field match_variant .
}
Fields
Union field match_variant .
match_variant can be only one of the following:
matchesPattern
string
To be used for full regex matching. The regular expression is using the Google RE2 syntax ( https://github.com/google/re2/wiki/Syntax) , so to be used with RE2::FullMatch
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
