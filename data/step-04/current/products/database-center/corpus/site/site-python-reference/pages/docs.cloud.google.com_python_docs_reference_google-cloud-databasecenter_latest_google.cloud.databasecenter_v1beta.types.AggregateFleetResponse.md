---
title: "Class AggregateFleetResponse (0.7.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AggregateFleetResponse
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AggregateFleetResponse
  title: "Class AggregateFleetResponse (0.7.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AggregateFleetResponse (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.7.0 (latest)
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
AggregateFleetResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The response message to aggregate a fleet by some group by
fields.
Attributes
Name
Description
rows
MutableSequence[ google.cloud.databasecenter_v1beta.types.AggregateFleetRow ]
Represents a row grouped by the fields in the
input.
resource_groups_total_count
int
Count of all resource groups in the fleet.
This includes counts from all pages.
resource_total_count
int
Count of all resources in the fleet. This
includes counts from all pages.
next_page_token
str
A token that can be sent as page_token to retrieve the
next page. If this field is omitted, there are no subsequent
pages.
unreachable
MutableSequence[str]
Unordered list. List of unreachable regions
from where data could not be retrieved.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
