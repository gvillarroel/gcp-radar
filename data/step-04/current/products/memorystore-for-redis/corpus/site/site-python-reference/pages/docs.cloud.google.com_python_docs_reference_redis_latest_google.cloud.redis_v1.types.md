---
title: "Package types (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/redis/latest/google.cloud.redis_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/redis/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/redis/latest/google.cloud.redis_v1.types
  title: "Package types (2.21.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (2.21.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.21.0 (latest)
2.20.0
2.19.0
2.18.0
2.17.0
2.16.1
2.15.5
2.14.0
2.13.1
2.12.1
2.11.1
2.10.0
2.9.3
2.8.1
2.7.1
2.6.0
2.5.1
2.4.1
2.3.0
2.2.4
2.1.1
2.0.0
1.0.2
0.4.0
0.3.0
API documentation for redis_v1.types package.
Classes
CreateInstanceRequest
Request for
CreateInstance .
DeleteInstanceRequest
Request for
DeleteInstance .
ExportInstanceRequest
Request for
Export .
FailoverInstanceRequest
Request for
Failover .
GcsDestination
The Cloud Storage location for the output content
GcsSource
The Cloud Storage location for the input content
GetInstanceAuthStringRequest
Request for
GetInstanceAuthString .
GetInstanceRequest
Request for
GetInstance .
ImportInstanceRequest
Request for
Import .
InputConfig
The input content
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Instance
A Memorystore for Redis instance.
InstanceAuthString
Instance AUTH string details.
ListInstancesRequest
Request for
ListInstances .
ListInstancesResponse
Response for
ListInstances .
LocationMetadata
This location metadata represents additional configuration options
for a given location where a Redis instance may be created. All
fields are output only. It is returned as content of the
google.cloud.location.Location.metadata field.
MaintenancePolicy
Maintenance policy for an instance.
MaintenanceSchedule
Upcoming maintenance schedule. If no maintenance is
scheduled, fields are not populated.
NodeInfo
Node specific properties.
OperationMetadata
Represents the v1 metadata of the long-running operation.
OutputConfig
The output content
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
PersistenceConfig
Configuration of the persistence functionality.
RescheduleMaintenanceRequest
Request for
RescheduleMaintenance .
TlsCertificate
TlsCertificate Resource
UpdateInstanceRequest
Request for
UpdateInstance .
UpgradeInstanceRequest
Request for
UpgradeInstance .
WeeklyMaintenanceWindow
Time window in which disruptive maintenance updates occur.
Non-disruptive updates can occur inside or outside this window.
ZoneMetadata
Defines specific information for a particular zone. Currently
empty and reserved for future use only.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
