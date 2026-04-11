---
title: "Class ObjectACL (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.acl.ObjectACL
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/storage/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.acl.ObjectACL
  title: "Class ObjectACL (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class ObjectACL (3.10.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.10.0 (latest)
3.9.0
3.8.0
3.7.0
3.6.0
3.5.0
3.4.1
3.3.1
3.2.0
3.1.1
3.0.0
2.19.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.10.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.0
2.2.1
2.1.0
2.0.0
1.44.0
1.43.0
1.42.3
1.41.1
1.40.0
1.39.0
1.38.0
1.37.1
1.36.2
1.35.1
1.34.0
1.33.0
1.32.0
1.31.2
1.30.0
1.29.0
1.28.1
1.27.0
1.26.0
1.25.0
1.24.1
1.23.0
1.22.0
1.21.0
1.20.0
1.19.0
1.18.0
1.17.0
ObjectACL ( blob )
An ACL specifically for a Cloud Storage object / blob.
Parameter
Name
Description
blob
Blob
The blob that this ACL corresponds to.
Properties
client
The client bound to this ACL's blob.
reload_path
Compute the path for GET API requests for this ACL.
save_path
Compute the path for PATCH API requests for this ACL.
user_project
Compute the user project charged for API requests for this ACL.
Methods
clear
clear (
client = None ,
if_generation_match = None ,
if_generation_not_match = None ,
if_metageneration_match = None ,
if_metageneration_not_match = None ,
timeout = 60 ,
retry = google . api_core . retry . retry_unary . Retry ,
)
Remove all ACL entries.
If user_project is set, bills the API request to that project.
Note that this won't actually remove ALL the rules, but it
will remove all the non-default rules. In short, you'll still
have access to a bucket that you created even after you clear
ACL rules with this method.
Parameters
Name
Description
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
if_generation_match
long
(Optional) See :ref: using-if-generation-match
if_generation_not_match
long
(Optional) See :ref: using-if-generation-not-match
if_metageneration_match
long
(Optional) See :ref: using-if-metageneration-match
if_metageneration_not_match
long
(Optional) See :ref: using-if-metageneration-not-match
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy
(Optional) How to retry the RPC. See: configuring_retries
save
save (
acl = None ,
client = None ,
if_generation_match = None ,
if_generation_not_match = None ,
if_metageneration_match = None ,
if_metageneration_not_match = None ,
timeout = 60 ,
retry = google . api_core . retry . retry_unary . Retry ,
)
Save this ACL for the current object.
If user_project is set, bills the API request to that project.
Parameters
Name
Description
acl
ACL , or a compatible list.
The ACL object to save. If left blank, this will save current entries.
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
if_generation_match
long
(Optional) See :ref: using-if-generation-match
if_generation_not_match
long
(Optional) See :ref: using-if-generation-not-match
if_metageneration_match
long
(Optional) See :ref: using-if-metageneration-match
if_metageneration_not_match
long
(Optional) See :ref: using-if-metageneration-not-match
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy
(Optional) How to retry the RPC. See: configuring_retries
save_predefined
save_predefined (
predefined ,
client = None ,
if_generation_match = None ,
if_generation_not_match = None ,
if_metageneration_match = None ,
if_metageneration_not_match = None ,
timeout = 60 ,
retry = google . api_core . retry . retry_unary . Retry ,
)
Save this ACL for the current object using a predefined ACL.
If user_project is set, bills the API request to that project.
Parameters
Name
Description
predefined
str
An identifier for a predefined ACL. Must be one of the keys in PREDEFINED_JSON_ACLS or PREDEFINED_XML_ACLS (which will be aliased to the corresponding JSON name). If passed, acl must be None.
client
Client or NoneType
(Optional) The client to use. If not passed, falls back to the client stored on the ACL's parent.
if_generation_match
long
(Optional) See :ref: using-if-generation-match
if_generation_not_match
long
(Optional) See :ref: using-if-generation-not-match
if_metageneration_match
long
(Optional) See :ref: using-if-metageneration-match
if_metageneration_not_match
long
(Optional) See :ref: using-if-metageneration-not-match
timeout
float or tuple
(Optional) The amount of time, in seconds, to wait for the server response. See: configuring_timeouts
retry
google.api_core.retry.Retry or google.cloud.storage.retry.ConditionalRetryPolicy
(Optional) How to retry the RPC. See: configuring_retries
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-19 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-19 UTC."],[],[]]
