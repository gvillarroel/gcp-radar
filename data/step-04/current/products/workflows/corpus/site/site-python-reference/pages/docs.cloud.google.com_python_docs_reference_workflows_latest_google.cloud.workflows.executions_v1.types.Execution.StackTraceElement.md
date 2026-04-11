---
title: "Class StackTraceElement (1.21.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.types.Execution.StackTraceElement
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/workflows/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/workflows/latest/google.cloud.workflows.executions_v1.types.Execution.StackTraceElement
  title: "Class StackTraceElement (1.21.0) \_|\_ Python client libraries \_|\_ Google\
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
Class StackTraceElement (1.21.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.21.0 (latest)
1.20.0
1.19.0
1.18.1
1.17.0
1.16.0
1.15.1
1.14.5
1.13.0
1.12.0
1.11.0
1.10.2
1.9.1
1.8.0
1.7.4
1.6.3
1.5.0
1.4.1
1.3.0
1.2.3
1.1.0
1.0.0
0.3.2
0.2.0
0.1.0
StackTraceElement ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A single stack element (frame) where an error occurred.
Attributes
Name
Description
step
str
The step the error occurred at.
routine
str
The routine where the error occurred.
position
google.cloud.workflows.executions_v1.types.Execution.StackTraceElement.Position
The source position information of the stack
trace element.
Classes
Position
Position ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Position contains source position information about the stack
trace element such as line number, column number and length of
the code block in bytes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
