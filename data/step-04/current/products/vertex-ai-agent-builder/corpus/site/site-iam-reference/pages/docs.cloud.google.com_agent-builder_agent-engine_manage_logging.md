---
title: "Logging an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/agent-builder/agent-engine/manage/logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/agent-builder/agent-engine/agent-identity
source_metadata:
  url: https://docs.cloud.google.com/agent-builder/agent-engine/manage/logging
  title: "Logging an agent \_|\_ Vertex AI Agent Builder \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Agent Builder
Guides
Send feedback
Logging an agent
Stay organized with collections
Save and categorize content based on your preferences.
To work with
Cloud Logging in agents when they are deployed to
Vertex AI Agent Engine Runtime, use one of the following methods:
stdout / stderr : by default (without any additional set up), logs written to stdout and stderr will be routed to the log IDs reasoning_engine_stdout and reasoning_engine_stderr respectively. The limitation is that they have to be text.
Python logging : the built-in Python logger can be integrated with Cloud Logging. Compared to writing to stdout or stderr, this supports structured logs and requires minimal set up.
Cloud Logging client : users can write structured log, and has full control over the logger (e.g., setting the logName and resource type).
Note: Cloud Logging is not supported for subresources of Vertex AI Agent Engine, such as Sessions , Memory Bank , Code Execution , and Example Store .
Write logs for an agent
When writing logs for an agent, determine the following:
severity : E.g. info, warn, error
payload : the contents of the log (e.g. text or JSON)
additional fields : for correlating across logs (e.g. trace/span, tags, labels)
For example, to log the input of each query when developing an agent :
stdout or stderr
from typing import Dict
class MyAgent :
def set_up ( self ):
# No set up required. The logs from stdout and stderr are routed to
# `reasoning_engine_stdout` and `reasoning_engine_stderr` respectively.
pass
def query ( self , input : Dict ):
import sys
print (
f "input: { input } " ,
file = sys . stdout , # or sys.stderr
)
Python Logging
from typing import Dict
class MyAgent :
def set_up ( self ):
import os
import google.cloud.logging
self . logging_client = google . cloud . logging . Client ( project = " PROJECT_ID " )
self . logging_client . setup_logging (
name = " LOG_ID " , # the ID of the logName in Cloud Logging.
resource = google . cloud . logging . Resource (
type = "aiplatform.googleapis.com/ReasoningEngine" ,
labels = {
"location" : " LOCATION " ,
"resource_container" : " PROJECT_ID " ,
"reasoning_engine_id" : os . environ . get ( "GOOGLE_CLOUD_AGENT_ENGINE_ID" , "" ),
},
),
)
def query ( self , input : Dict ):
import logging
import json
logging_extras = {
"labels" : { "foo" : "bar" },
"trace" : " TRACE_ID " ,
}
logging . info ( # or .warning(), .error()
json . dumps ( input ),
extra = logging_extras ,
)
Cloud Logging client
from typing import Dict
class MyAgent :
def set_up ( self ):
import os
import google.cloud.logging
self . logging_client = google . cloud . logging . Client ( project = " PROJECT_ID " )
self . logger = self . logging_client . logger (
name = " LOG_ID " , # the ID of the logName in Cloud Logging.
resource = google . cloud . logging . Resource (
type = "aiplatform.googleapis.com/ReasoningEngine" ,
labels = {
"location" : " LOCATION " ,
"resource_container" : " PROJECT_ID " ,
"reasoning_engine_id" : os . environ . get ( "GOOGLE_CLOUD_AGENT_ENGINE_ID" , "" ),
},
),
)
def query ( self , input : Dict ):
logging_extras = {
"labels" : { "foo" : "bar" },
"trace" : " TRACE_ID " ,
}
self . logger . log_struct (
input ,
severity = "INFO" , # or "DEBUG", "WARNING", "ERROR", "CRITICAL"
** logging_extras ,
)
When the agent is deployed and queried , it will generate log
entries. For example, the code
remote_agent = agent_engines . create (
MyAgent (),
requirements = [ "cloudpickle==3" , "google-cloud-logging" ],
)
remote_agent . query ( input = { "hello" : "world" })
generates a log entry similar to the following:
stdout or stderr
{
"insertId": "67a3bb3b000cc2df444361ab",
"textPayload": "input: {'hello': 'world'}",
"resource": {
"type": "aiplatform.googleapis.com/ReasoningEngine",
"labels": {
"location": " LOCATION ",
"resource_container": " PROJECT_ID ",
"reasoning_engine_id": " RESOURCE_ID "
}
},
"timestamp": "2025-02-05T19:25:47.836319Z",
"logName": "projects/ PROJECT_ID /logs/aiplatform.googleapis.com%2Freasoning_engine_stdout", # or `*_stderr`
"receiveTimestamp": "2025-02-05T19:25:47.842550772Z"
}
Python Logging
{
"insertId": "1ek9a2jfqh777z",
"jsonPayload": {"hello": "world"},
"resource": {
"type": "aiplatform.googleapis.com/ReasoningEngine",
"labels": {
"location": " LOCATION ",
"resource_container": " PROJECT_ID ",
"reasoning_engine_id": " RESOURCE_ID ",
}
},
"timestamp": "2025-02-05T20:30:19.348067Z",
"severity": "INFO",
"labels": {
"foo": "bar",
"python_logger": "root",
},
"logName": "projects/ PROJECT_ID /logs/ LOG_ID ",
"trace": " TRACE_ID ",
"receiveTimestamp": "2025-01-30T21:38:50.776813191Z"
}
Cloud Logging client
{
"insertId": "1ek9a2jfqh777z",
"jsonPayload": {"hello": "world"},
"resource": {
"type": "aiplatform.googleapis.com/ReasoningEngine",
"labels": {
"location": " LOCATION ",
"resource_container": " PROJECT_ID ",
"reasoning_engine_id": " RESOURCE_ID ",
}
},
"timestamp": "2025-01-30T21:38:50.776813191Z",
"severity": "INFO",
"labels": {"foo": "bar"},
"logName": "projects/ PROJECT_ID /logs/ LOG_ID ",
"trace": " TRACE_ID ",
"receiveTimestamp": "2025-01-30T21:38:50.776813191Z"
}
View logs for an agent
You can view your log entries using the Logs Explorer :
To get permission to view logs in Logs Explorer , ask your administrator to grant you the Logs Viewer role ( roles/logging.viewer ) on your project.
Go to Logs Explorer in the Google Cloud console:
Go to Logs Explorer
Select your Google Cloud project (corresponding to PROJECT_ID ) at the top of the page.
In Resource Type , select Vertex AI Agent Builder Reasoning Engine .
For Agent Development Kit-based agents, you can also view logs for your agent in
the Google Cloud console using the Vertex AI Agent Engine
dashboard .
Runtime queries
You can filter logs in Cloud Logging by each supported operation of a deployed agent .
To do so, filter the logs based on the underlying REST endpoint for each operation query:
POST /api/reasoning_engine : For queries being made to synchronous and asynchronous methods.
POST /api/stream_reasoning_engine : For queries being made to streaming and async streaming methods.
POST /api/bidi_reasoning_engine : For queries being made to bidi streaming methods.
Runtime queries are
routed to the REST endpoints depending on the api_mode field in the list of
supported operations of a deployed agent.
Building queries
You can use the Logs Explorer to build queries incrementally. Queries are commonly built based on the following considerations:
timeline : to search for relevant log entries based on time
scope : to search for relevant log entries based on canonical attributes
resource : separate it from other types of resources in your project.
type : shows up as "Vertex AI Agent Builder Reasoning Engine" in Logs Explorer and "aiplatform.googleapis.com/ReasoningEngine" in the log entry.
labels : for the location ( LOCATION ), project PROJECT_ID and resource RESOURCE_ID .
logName : The log to which the log entry belongs:
The log entries at build-time have log ID reasoning_engine_build .
The log entries for stdout and stderr have log ID
reasoning_engine_stdout and reasoning_engine_stderr respectively.
The log entries from python logging or Cloud Logging client will have
custom log IDs based on your code in Write logs for an agent .
trace and span : for the logs when tracing queries .
severity : for the severity of the log entry.
insertId : the unique identifier for a log entry.
labels : A map of key, value pairs that provides additional information about the log entry. The labels can be user-defined or system-defined, and are useful for categorizing logs and make it easier to search for them in Logs Explorer.
payload : the contents of the log entry.
The following is an example of a query
for all INFO logs from a deployed agent with RESOURCE_ID :
resource.labels.reasoning_engine_id= RESOURCE_ID AND
severity=INFO
You can view it in Logs Explorer at
https://https://console.cloud.google.com/logs/query;query=severity%3DINFO%0Aresource.labels.reasoning_engine_id%3D%22 RESOURCE_ID %22;duration= DURATION ?project= PROJECT_ID
where the query has been appropriately url-encoded and the other parameters are
as follows:
DURATION : for example PT30M for the past 30 minutes (or PT10M
for the past 10 minutes), and
PROJECT_ID : the Google Cloud project.
For details, visit Build and save queries by using the Logging query language .
Note: The Logs Explorer doesn't support aggregate operations, like counting
the number of log entries that contain a specific pattern. For more advanced
queries that covers aggregate operations and more, visit
Query logs for an agent .
Query logs for an agent
For a programmatic approach to query logs, there are two common options:
Structured Query Language (SQL) . Log Analytics lets you query log views or analytics views .
Log views have a fixed schema which corresponds to log entries .
Analytics views have a schema that is based on the results of a SQL query.
Python . Call the Cloud Logging API through the client library
for your programming language (Python in this case).
Python
from google.cloud import logging
logging_client = logging . Client ( project = " PROJECT_ID " )
logger = logging_client . logger ( " LOG_ID " ) # E.g. "logging_client"
print ( "Listing entries for logger {} :" . format ( logger . name ))
for entry in logger . list_entries (
filter_ = "resource.labels.reasoning_engine_id= RESOURCE_ID " # Optional
):
timestamp = entry . timestamp . isoformat ()
print ( "* {} : {} " . format ( timestamp , entry . payload ))
Each entry will correspond to a LogEntry .
For details on the input arguments to logger.list_entries , visit the
API reference .
SQL
Log view :
SELECT *
FROM ` PROJECT_ID . LOCATION . BUCKET_ID . LOG_VIEW_ID `
Analytics view :
SELECT *
FROM ` analytics_view . PROJECT_ID . LOCATION . ANALYTICS_VIEW_ID `
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
