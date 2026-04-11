---
title: "Class AggregateFleetRequest (0.7.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AggregateFleetRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AggregateFleetRequest
  title: "Class AggregateFleetRequest (0.7.0) \_|\_ Python client libraries \_|\_\
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
Class AggregateFleetRequest (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.7.0 (latest)
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
AggregateFleetRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The request message to aggregate fleet which are grouped by a
field.
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
data_protection_info, 'resource_name', etc.
The expression is a list of zero or more restrictions
combined via logical operators AND and OR . When
AND and OR are both used in the expression,
parentheses must be appropriately used to group the
combinations.
Example: location="us-east1" Example:
container="projects/123" OR container="projects/456"
Example:
(container="projects/123" OR container="projects/456") AND location="us-east1"
group_by
str
Optional. A field that statistics are grouped by. Valid
values are any combination of the following:
- container
- product.type
- product.engine
- product.version
- location
- sub_resource_type
- management_type
- tag.key
- tag.value
- tag.source
- tag.inherited
- label.key
- label.value
- label.source
- has_maintenance_schedule
- has_deny_maintenance_schedules Comma separated list.
order_by
str
Optional. Valid values to order by are:
- resource_groups_count
- resources_count
- and all fields supported by group_by The default order
is ascending. Add "DESC" after the field name to indicate
descending order. Add "ASC" after the field name to
indicate ascending order. It supports ordering using
multiple fields. For example:
order_by = "resource_groups_count" sorts response in
ascending order
order_by = "resource_groups_count DESC" sorts response
in descending order
order_by = "product.type, product.version DESC, location"
orders by type in ascending order, version in descending
order and location in ascending order
page_size
int
Optional. If unspecified, at most 50 items
will be returned. The maximum value is 1000;
values above 1000 will be coerced to 1000.
page_token
str
Optional. A page token, received from a previous
AggregateFleet call. Provide this to retrieve the
subsequent page. All other parameters should match the
parameters in the call that provided the page token except
for page_size which can be different.
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
