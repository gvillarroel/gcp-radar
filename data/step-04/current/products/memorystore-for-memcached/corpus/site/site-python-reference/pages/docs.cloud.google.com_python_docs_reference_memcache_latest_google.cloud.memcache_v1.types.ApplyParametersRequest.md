---
title: "Class ApplyParametersRequest (1.15.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/memcache/latest/google.cloud.memcache_v1.types.ApplyParametersRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/memcache/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/memcache/latest/google.cloud.memcache_v1.types.ApplyParametersRequest
  title: "Class ApplyParametersRequest (1.15.0) \_|\_ Python client libraries \_|\_\
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
Class ApplyParametersRequest (1.15.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.15.0 (latest)
1.14.0
1.13.0
1.12.2
1.11.0
1.10.1
1.9.5
1.8.0
1.7.2
1.6.1
1.5.0
1.4.4
1.3.2
1.2.1
1.1.3
1.0.0
0.3.2
0.2.0
0.1.0
ApplyParametersRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for
ApplyParameters .
Attributes
Name
Description
name
str
Required. Resource name of the Memcached
instance for which parameter group updates
should be applied.
node_ids
MutableSequence[str]
Nodes to which the instance-level parameter
group is applied.
apply_all
bool
Whether to apply instance-level parameter group to all
nodes. If set to true, users are restricted from specifying
individual nodes, and ApplyParameters updates all nodes
within the instance.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
