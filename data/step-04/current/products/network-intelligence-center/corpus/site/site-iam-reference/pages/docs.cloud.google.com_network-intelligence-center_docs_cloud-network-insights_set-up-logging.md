---
title: "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/set-up-logging
  title: "Set up logging \_|\_ Network Intelligence Center - Cloud Network Insights\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Set up logging
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page provides information about how Cloud Network Insights integrates with AppNeta
for alarm generation and how these alarms are sent to Google Cloud for analysis,
viewing, and alert policy creation.
Logging and alerting tasks are split between Google Cloud and AppNeta. Cloud Network Insights
logging tracks when the metrics collected by Monitoring Points
violate thresholds you configure with alarm rules in AppNeta.
Create alarms and alarm rules in AppNeta to generate alarm logs. Alarm logs and
event logs are then exported into Cloud Logging .
You can then use alert policies to send alerts and
notifications when a network incident occurs.
Before you begin
You must deploy a Monitoring Point
before you can create alarm rules.
Alarms in AppNeta
Alarms and alarm rules are created in AppNeta. Alarms let you know when there's
an issue in your network. If a metric you track, such as latency, exceeds a set
threshold within a specific interval, that is a violation of the alarm rule. You
can choose to trigger an alarm after a single violation or after multiple
violations over a set interval.
For example, if latency exceeds 160ms twice within 3 minutes, you can set the
alarm to trigger a warning. This alarm is sent to Google Cloud as a log. Once
the log arrives in Cloud Logging, you can send an alert on it and notify your
team.
For more information about alarms, see
Alarms Overview
or Alarms – Best Practices
in the AppNeta documentation.
Create alarm rules in AppNeta
Create alarm rules that define performance thresholds.
Open the Google Cloud console and navigate to Network Intelligence >
Cloud Network Insights >
Alert Policies .
Go to Alert Policies
Click Create Alarm Rules to open the
Alarm Rule Edit page in AppNeta.
Define rules specifying metrics, thresholds, violation strategies, and
severity. You can use or customize default rules.
Once an alarm is triggered, the alarm log is sent to Cloud Logging. After
the log is sent to Google Cloud, you can navigate to Cloud Network Insights and
set your alert policies .
For more information about creating alarm rules, see
Alarm Rules
in the AppNeta documentation.
View logs in Google Cloud
Cloud Network Insights exports detailed logs in Cloud Logging to help you
analyze and troubleshoot network performance and significant events. You can
access these logs using the Logs Explorer.
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
Create queries to alert on relevant information.
Cloud Network Insights logs use one of the following for logName :
Alarm logs - networkmanagement.googleapis.com/insights_alarm
Event logs - networkmanagement.googleapis.com/insights_event
For more information, see
Build and save queries by using the Logging query language .
Pricing
All Cloud Network Insights logs are written to Cloud Logging. There is no
separate charge from Cloud Network Insights for this service. However, these
logs can result in additional storage costs depending on the size of the logs
that are written and stored.
For information about Cloud Logging pricing, see
Pricing for Google Cloud Observability: Cloud Logging .
Log details
While the specific details for each log type are contained within the
jsonPayload field, several other standard LogEntry fields are crucial for
querying and understanding the logs.
Alarm Logs
Log Name : networkmanagement.googleapis.com/insights_alarm
Triggered : Generated when the conditions of an alarm rule are met.
Resource Labels : Describes the monitored resource associated with
the log. This includes the following:
type - The type of resource, can be one of the following:
networkmanagement.googleapis.com/NetworkMonitoringProvider
networkmanagement.googleapis.com/MonitoringPoint
networkmanagement.googleapis.com/NetworkPath
labels - Key-value pairs identifying the specific resource
instance, such as resource_container (project ID), location ,
network_monitoring_provider_id , and path_id or monitoring_point_id .
Key JSON Fields : Alarm logs provide information about triggered alarms.
Severity Mapping : Severity is recorded differently between AppNeta
and Google Cloud.
AppNeta Severity
Google Cloud Log Severity
Critical
CRITICAL
Major
ERROR
Minor
WARNING
Warning
NOTICE
Alarm Log fields
The jsonPayload of an alarm log contains the following fields.
Field
Type
Description
alarm_id
string
The unique identifier for the alarm in AppNeta.
alarm_type
enum
The type of the alarm. The QUALITY_OF_SERVICE type is supported.
state
enum
The state of the alarm. Can be RAISED ,
UPDATED (the alarm details have been updated in AppNeta
but not yet cleared), or CLEARED .
alarm_severity
enum
The severity of the alarm. Can be CRITICAL ,
MAJOR , MINOR , or WARNING .
rule
string
The name of the alarm rule that triggered the alarm.
description
string
A human-readable description of the alarm.
first_violation_time
timestamp
The time the alarm condition was first violated.
raised_time
timestamp
The time the alarm was raised.
cleared_time
timestamp
The time the alarm was cleared. This will be empty if the alarm
log has the state RAISED or UPDATED .
provider_link
string
A hyperlink to the alarm in the AppNeta UI.
item
object
The entity associated with the alarm. See Common Item Structures for details.
timestamp
string
The time the alarm was created in AppNeta.
receiveTimestamp
string
The time the alarm was created in Google Cloud.
Event Logs
Log Name : networkmanagement.googleapis.com/insights_event
Trigger : Generated when a structural change occurs (for example,
Route Change , MTU Change , or Monitoring Point Offline ).
Severity : Always INFO .
Key JSON Fields: Event logs provide information about triggered events.
Event log fields
The jsonPayload of an event log contains the following fields.
Field
Type
Description
event_id
string
The unique identifier for this event.
event_type
enum
The type of event. Can be MONITORING_POINT_OFFLINE ,
MONITORING_POINT_ONLINE , ROUTE_CHANGE ,
MTU_CHANGE , or QOS_CHANGE .
item
object
The entity associated with the event. See Common Item Structures for details.
event_detail
object
Details specific to the event type. This can be
route_change_event , mtu_change_event , or
qos_change_event . An empty object will be returned for
events that have no further details.
timestamp
string
The time the event was created in AppNeta.
receiveTimestamp
string
The time the event was created in Google Cloud.
Common Item Structures
The item field within the jsonPayload of both Alarm and Event logs contains
details about the associated entity. The structure depends on the item type.
NetworkPathItem
Field
Type
Description
display_name
string
The user-defined display name of the Network Path.
destination
string
The destination IP address or hostname.
network_protocol
string
The network protocol used, such as TCP ,
UDP , or ICMP .
monitoring_policy_id
string
The ID of the monitoring policy.
monitoring_policy_display_name
string
The display name of the monitoring policy.
provider_tags
array of objects
Tags defined in AppNeta for the path.
source_monitoring_point
MonitoringPointItem
Details of the source MonitoringPointItem.
destination_monitoring_point
MonitoringPointItem
Details of the destination MonitoringPointItem (for
MonitoringPoint-to-MonitoringPoint paths only).
WebPathItem
Field
Type
Description
display_name
string
The user-defined display name of the Web Path.
destination
string
The destination URL.
monitoring_policy_id
string
The ID of the monitoring policy.
monitoring_policy_display_name
string
The display name of the monitoring policy.
provider_tags
array
Tags defined in the provider for the path.
source_monitoring_point
object
Details of the source MonitoringPoint.
MonitoringPointItem
Field
Type
Description
id
string
The unique identifier of the Monitoring Point.
display_name
string
The user-defined display name of the Monitoring Point.
host
object
Details of the Monitoring Point's host.
provider_tags
array
Tags defined in the provider for the Monitoring Point.
MonitoringPointHost
Field
Type
Description
cloud_provider
string
Cloud Provider such as GCP , AWS , or
AZURE .
cloud_instance_id
string
The instance ID from the cloud provider.
cloud_zone
string
The cloud zone of the endpoint, for example,
us-central1-a .
cloud_region
string
The cloud region of the endpoint, for example,
us-central1 .
cloud_project_id
string
The Google Cloud project ID.
os
string
The Operating System of the Monitoring Point's host.
cloud_virtual_network_ids
array of strings
User-visible cloud virtual network IDs.
labels
map
User-defined labels configured on the VM instance.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
