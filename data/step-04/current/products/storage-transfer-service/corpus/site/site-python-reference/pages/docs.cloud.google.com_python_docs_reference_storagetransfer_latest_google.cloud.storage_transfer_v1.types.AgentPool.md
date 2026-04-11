---
title: "Class AgentPool (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AgentPool
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storagetransfer/latest/google.cloud.storage_transfer_v1.types.AgentPool
  title: "Class AgentPool (1.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class AgentPool (1.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.20.0 (latest)
1.19.0
1.18.0
1.17.0
1.16.0
1.15.0
1.14.0
1.13.1
1.12.0
1.11.5
1.10.0
1.9.2
1.8.1
1.7.1
1.6.0
1.5.2
1.4.1
1.3.1
1.2.1
1.1.1
1.0.2
0.1.0
AgentPool ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represents an agent pool.
Attributes
Name
Description
name
str
Required. Specifies a unique string that identifies the
agent pool.
Format: projects/{project_id}/agentPools/{agent_pool_id}
display_name
str
Specifies the client-specified AgentPool
description.
state
google.cloud.storage_transfer_v1.types.AgentPool.State
Output only. Specifies the state of the
AgentPool.
bandwidth_limit
google.cloud.storage_transfer_v1.types.AgentPool.BandwidthLimit
Specifies the bandwidth limit details. If
this field is unspecified, the default value is
set as 'No Limit'.
Classes
BandwidthLimit
BandwidthLimit ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Specifies a bandwidth limit for an agent pool.
State
State ( value )
The state of an AgentPool.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
