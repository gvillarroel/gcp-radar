---
title: "Class SessionEvents (1.144.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.session_events.SessionEvents
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/vertexai/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/vertexai/latest/vertexai._genai.session_events.SessionEvents
  title: "Class SessionEvents (1.144.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class SessionEvents (1.144.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.144.0 (latest)
1.143.0
1.142.0
1.141.0
1.140.0
1.139.0
1.138.0
1.137.0
1.136.0
1.135.0
1.134.0
1.133.0
1.132.0
1.131.0
1.130.0
1.129.0
1.122.0
1.121.0
1.120.0
1.119.0
1.118.0
1.117.0
1.95.1
1.94.0
1.93.1
1.92.0
1.91.0
1.90.0
1.89.0
1.88.0
1.87.0
1.86.0
1.85.0
1.84.0
1.83.0
1.82.0
1.81.0
1.80.0
1.79.0
1.78.0
1.77.0
1.76.0
1.75.0
1.74.0
1.73.0
1.72.0
1.71.1
1.70.0
1.69.0
1.68.0
1.67.1
1.66.0
1.65.0
1.63.0
1.62.0
1.60.0
1.59.0
SessionEvents ( api_client_ : google . genai . _api_client . BaseApiClient )
API documentation for SessionEvents class.
Methods
append
append (
* ,
name : str ,
author : str ,
invocation_id : str ,
timestamp : datetime . datetime ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfig ,
vertexai . _genai . types . common . AppendAgentEngineSessionEventConfigDict ,
]
] = None
) - > vertexai . _genai . types . common . AppendAgentEngineSessionEventResponse
Appends Agent Engine session event.
Parameters
Name
Description
name
str
Required. The name of the Agent Engine session to append the event to. Format: projects/{project}/locations/{location}/reasoningEngines/{resource_id}/sessions/{session_id} .
author
str
Required. The author of the Agent Engine session event.
invocation_id
str
Required. The invocation ID of the Agent Engine session event.
timestamp
datetime.datetime
Required. The timestamp of the Agent Engine session event.
config
AppendAgentEngineSessionEventConfig
Optional. Additional configurations for appending the Agent Engine session event.
Returns
Type
Description
AppendAgentEngineSessionEventResponse
The requested Agent Engine session event.
list
list (
* ,
name : str ,
config : typing . Optional [
typing . Union [
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfig ,
vertexai . _genai . types . common . ListAgentEngineSessionEventsConfigDict ,
]
] = None
) - > typing . Iterator [ vertexai . _genai . types . common . SessionEvent ]
Lists Agent Engine session events.
Parameters
Name
Description
name
str
Required. The name of the agent engine to list session events for.
config
ListAgentEngineSessionEventsConfig
Optional. The configuration for the session events to list. Currently, the filter field in config only supports filtering by timestamp . The timestamp value must be enclosed in double quotes and include the time zone information. For example: config={'filter': 'timestamp>="2025-08-07T19:44:38.4Z"'} .
Returns
Type
Description
Iterator[SessionEvent]
An iterable of session events.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
