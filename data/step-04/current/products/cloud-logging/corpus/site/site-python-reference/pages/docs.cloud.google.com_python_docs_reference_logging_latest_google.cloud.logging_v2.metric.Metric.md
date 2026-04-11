---
title: "Class Metric (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.metric.Metric
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/logging/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/logging/latest/google.cloud.logging_v2.metric.Metric
  title: "Class Metric (3.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Metric (3.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.15.0 (latest)
3.13.0
3.12.1
3.11.3
3.10.0
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.1
3.2.5
3.1.2
3.0.0
2.7.2
2.6.0
2.5.0
2.4.0
2.3.1
2.2.0
2.1.1
2.0.2
1.15.3
1.14.0
1.13.0
1.12.1
Metric ( name , * , filter_ = None , client = None , description = "" )
Metrics represent named filters for log entries.
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics
Properties
client
Clent bound to the logger.
full_name
Fully-qualified name used in metric APIs
path
URL path for the metric's APIs
project
Project bound to the logger.
Methods
Metric
Metric ( name , * , filter_ = None , client = None , description = "" )
Parameters
Name
Description
name
str
The name of the metric.
filter_
str
the advanced logs filter expression defining the entries tracked by the metric. If not passed, the instance should already exist, to be refreshed via reload .
client
Optional[ logging_v2.client.Client ]
A client which holds credentials and project configuration for the sink (which requires a project).
description
Optional[str]
An optional description of the metric.
create
create ( * , client = None )
Create the metric via a PUT request
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics/create
Parameter
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
delete
delete ( * , client = None )
API call: delete a metric via a DELETE request
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics/delete
Parameter
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
exists
exists ( * , client = None )
Test for the existence of the metric via a GET request
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics/get
Parameter
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
Returns
Type
Description
bool
Boolean indicating existence of the metric.
from_api_repr
from_api_repr ( resource , client )
Construct a metric given its API representation
Parameters
Name
Description
resource
dict
metric resource representation returned from the API
client
logging_v2.client.Client
Client which holds credentials and project configuration for the sink.
reload
reload ( * , client = None )
API call: sync local metric configuration via a GET request
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics/get
Parameter
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
update
update ( * , client = None )
API call: update metric configuration via a PUT request
See
https://cloud.google.com/logging/docs/reference/v2/rest/v2/projects.metrics/update
Parameter
Name
Description
client
Optional[ logging_v2.client.Client ]
The client to use. If not passed, falls back to the client stored on the current sink.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
