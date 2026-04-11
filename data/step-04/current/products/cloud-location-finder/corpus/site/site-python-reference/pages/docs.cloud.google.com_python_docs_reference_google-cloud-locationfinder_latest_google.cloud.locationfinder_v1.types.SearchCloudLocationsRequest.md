---
title: "Class SearchCloudLocationsRequest (0.4.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.types.SearchCloudLocationsRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-locationfinder/latest/google.cloud.locationfinder_v1.types.SearchCloudLocationsRequest
  title: "Class SearchCloudLocationsRequest (0.4.0) \_|\_ Python client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class SearchCloudLocationsRequest (0.4.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.4.0 (latest)
0.3.0
0.2.0
0.1.0
SearchCloudLocationsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Message for searching cloud locations from a given source
location.
Attributes
Name
Description
parent
str
Required. The parent, which owns this
collection of cloud locations. Format:
projects/{project}/locations/{location}
source_cloud_location
str
Required. The source cloud location to search
from. Example search can be searching nearby
cloud locations from the source cloud location
by latency.
page_size
int
Optional. The maximum number of cloud
locations to return. The service might return
fewer cloud locations than this value. If
unspecified, server will pick an appropriate
default.
page_token
str
Optional. A token identifying a page of
results the server should return. Provide Page
token returned by a previous
'ListCloudLocations' call to retrieve the next
page of results. When paginating, all other
parameters provided to 'ListCloudLocations' must
match the call that provided the page token.
query
str
Optional. The query string in search query
syntax. While filter is used to filter the
search results by attributes, query is used to
specify the search requirements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
