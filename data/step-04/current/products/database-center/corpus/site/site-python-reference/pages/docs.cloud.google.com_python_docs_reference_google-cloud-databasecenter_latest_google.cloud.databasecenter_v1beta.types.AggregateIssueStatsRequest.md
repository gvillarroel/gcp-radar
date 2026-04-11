---
title: "Class AggregateIssueStatsRequest (0.7.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AggregateIssueStatsRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AggregateIssueStatsRequest
  title: "Class AggregateIssueStatsRequest (0.7.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
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
Class AggregateIssueStatsRequest (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.7.0 (latest)
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
AggregateIssueStatsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
AggregateIssueStatsRequest represents the input to the
AggregateIssueStats method.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
parent
str
Required. Parent can be a project, a folder, or an
organization. The search is limited to the resources within
the scope .
The allowed values are:
- projects/{PROJECT_ID} (e.g., "projects/foo-bar")
- projects/{PROJECT_NUMBER} (e.g., "projects/12345678")
- folders/{FOLDER_NUMBER} (e.g., "folders/1234567")
- organizations/{ORGANIZATION_NUMBER} (e.g.,
"organizations/123456")
filter
str
Optional. The expression to filter resources.
Supported fields are: full_resource_name ,
resource_type , container , product.type ,
product.engine , product.version , location ,
labels , issues , fields of availability_info,
data_protection_info,'resource_name', etc.
The expression is a list of zero or more restrictions
combined via logical operators AND and OR . When
AND and OR are both used in the expression,
parentheses must be appropriately used to group the
combinations.
Example: location="us-east1" Example:
container="projects/123" OR container="projects/456"
Example:
(container="projects/123" OR container="projects/456") AND location="us-east1"
signal_type_groups
MutableSequence[ google.cloud.databasecenter_v1beta.types.SignalTypeGroup ]
Optional. Lists of signal types that are
issues.
baseline_date
google.type.date_pb2.Date
Optional. The baseline date w.r.t. which the
delta counts are calculated. If not set, delta
counts are not included in the response and the
response indicates the current state of the
fleet.
This field is a member of oneof _ _baseline_date .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
