---
title: "Class State (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.Environment.State
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudshell/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudshell/latest/google.cloud.shell_v1.types.Environment.State
  title: "Class State (1.15.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class State (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.0
1.11.0
1.10.1
1.9.5
1.8.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.3
1.2.2
1.1.0
1.0.1
0.2.2
0.1.0
State ( value )
Possible execution states for an environment.
Enums
Name
Description
STATE_UNSPECIFIED
The environment's states is unknown.
SUSPENDED
The environment is not running and can't be connected to. Starting the environment will transition it to the PENDING state.
PENDING
The environment is being started but is not yet ready to accept connections.
RUNNING
The environment is running and ready to accept connections. It will automatically transition back to DISABLED after a period of inactivity or if another environment is started.
DELETING
The environment is being deleted and can't be connected to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
