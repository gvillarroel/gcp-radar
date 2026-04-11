---
title: "Class ListCloudLocationsRequest (0.4.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.types.ListCloudLocationsRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.types.ListCloudLocationsRequest
  title: "Class ListCloudLocationsRequest (0.4.0) \_|\_ Python client libraries \_\
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
Class ListCloudLocationsRequest (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.0
ListCloudLocationsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Message for requesting list of cloud locations..
Attributes
Name
Description
parent
str
Required. The parent, which owns this
collection of cloud locations. Format:
projects/{project}/locations/{location}
page_size
int
Optional. The maximum number of cloud
locations to return per page. The service might
return fewer cloud locations than this value. If
unspecified, server will pick an appropriate
default.
page_token
str
Optional. A token identifying a page of
results the server should return. Provide page
token returned by a previous
'ListCloudLocations' call to retrieve the next
page of results. When paginating, all other
parameters provided to 'ListCloudLocations' must
match the call that provided the page token.
filter
str
Optional. A filter expression that filters resources listed
in the response. The expression is in the form of
field=value. For example,
'cloud_location_type=CLOUD_LOCATION_TYPE_REGION'. Multiple
filter queries are space-separated. For example,
'cloud_location_type=CLOUD_LOCATION_TYPE_REGION
territory_code="US"' By default, each expression is an AND
expression. However, you can include AND and OR expressions
explicitly.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
