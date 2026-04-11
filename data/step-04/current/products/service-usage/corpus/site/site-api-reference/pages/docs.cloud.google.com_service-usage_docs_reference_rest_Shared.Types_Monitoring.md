---
title: "Monitoring \_|\_ Service Usage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Monitoring
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-usage/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/service-usage/docs/reference/rest/Shared.Types/Monitoring
  title: "Monitoring \_|\_ Service Usage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Service Usage
Reference
Send feedback
Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
MonitoringDestination
JSON representation
Monitoring configuration of the service.
The example below shows how to configure monitored resources and metrics for monitoring. In the example, a monitored resource and two metrics are defined. The library.googleapis.com/book/returned_count metric is sent to both producer and consumer projects, whereas the library.googleapis.com/book/num_overdue metric is only sent to the consumer project.
monitoredResources:
- type: library.googleapis.com/Branch
displayName: "Library Branch"
description: "A branch of a library."
launchStage: GA
labels:
- key: resourceContainer
description: "The Cloud container (ie. project id) for the Branch."
- key: location
description: "The location of the library branch."
- key: branch_id
description: "The id of the branch."
metrics:
- name: library.googleapis.com/book/returned_count
displayName: "Books Returned"
description: "The count of books that have been returned."
launchStage: GA
metricKind: DELTA
valueType: INT64
unit: "1"
labels:
- key: customer_id
description: "The id of the customer."
- name: library.googleapis.com/book/num_overdue
displayName: "Books Overdue"
description: "The current number of overdue books."
launchStage: GA
metricKind: GAUGE
valueType: INT64
unit: "1"
labels:
- key: customer_id
description: "The id of the customer."
monitoring:
producerDestinations:
- monitoredResource: library.googleapis.com/Branch
metrics:
- library.googleapis.com/book/returned_count
consumerDestinations:
- monitoredResource: library.googleapis.com/Branch
metrics:
- library.googleapis.com/book/returned_count
- library.googleapis.com/book/num_overdue
JSON representation
{
"producerDestinations" : [
{
object ( MonitoringDestination )
}
] ,
"consumerDestinations" : [
{
object ( MonitoringDestination )
}
]
}
Fields
producerDestinations[]
object ( MonitoringDestination )
Monitoring configurations for sending metrics to the producer project. There can be multiple producer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
consumerDestinations[]
object ( MonitoringDestination )
Monitoring configurations for sending metrics to the consumer project. There can be multiple consumer destinations. A monitored resource type may appear in multiple monitoring destinations if different aggregations are needed for different sets of metrics associated with that monitored resource type. A monitored resource and metric pair may only be used once in the Monitoring configuration.
MonitoringDestination
Configuration of a specific monitoring destination (the producer project or the consumer project).
JSON representation
{
"monitoredResource" : string ,
"metrics" : [
string
]
}
Fields
monitoredResource
string
The monitored resource type. The type must be defined in Service.monitored_resources section.
metrics[]
string
Types of the metrics to report to this monitoring destination. Each type must be defined in Service.metrics section.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-11 UTC."],[],[]]
