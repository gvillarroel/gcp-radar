---
title: "Function: map.merge_nested \_|\_ Workflows \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested
knowledge_key: corpus
source_id: site-api-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/stdlib/map/merge_nested
  title: "Function: map.merge_nested \_|\_ Workflows \_|\_ Google Cloud Documentation"
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
Function: map.merge_nested
Stay organized with collections
Save and categorize content based on your preferences.
Takes two maps, creates a copy of the first map, and recursively adds items from the second map to the copy.
For maps with the same key, the value from the first map is replaced by the
value from the second map.
For example, if you have map1 = {key1: value1} and map2 = {key1: value2} ,
map.merge_nested(map1, map2) returns {key1: value2} .
For nested maps, values are merged recursively.
For example, if you have map1 = {key1: {keyx: valuex}} and
map2 = {key1: {keyy: valuey}} , map.merge_nested(map1, map2) returns
{key1: {keyx: valuex, keyy: valuey}} .
Arguments
Arguments
first
The map to be merged into.
second
The map to merge.
Returns
A copy of the first map with items added from the second map.
Raised exceptions
Exceptions
TypeError
If first or second is not a map (dictionary).
Examples
# Recursively add items from second map to copy of first map
# Returns `{"key1": {"key2": "value2","key3": "value3"}}`
- init :
assign :
- my_map1 : { "key1" : { key2 : value2 }}
- my_map2 : { "key1" : { key3 : value3 }}
- returnStep :
return : ${map.merge_nested(my_map1, my_map2)}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
