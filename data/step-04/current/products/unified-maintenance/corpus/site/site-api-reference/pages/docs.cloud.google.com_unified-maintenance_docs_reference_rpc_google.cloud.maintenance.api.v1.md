---
title: "Package google.cloud.maintenance.api.v1 \_|\_ Unified Maintenance \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
  title: "Package google.cloud.maintenance.api.v1 \_|\_ Unified Maintenance \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Reference
Send feedback
Package google.cloud.maintenance.api.v1
Stay organized with collections
Save and categorize content based on your preferences.
Index
Maintenance (interface)
GetResourceMaintenanceRequest (message)
ListResourceMaintenancesRequest (message)
ListResourceMaintenancesResponse (message)
MaintenanceCategory (enum)
MaintenanceControl (message)
MaintenanceControl.Control (enum)
MaintenanceSummary (message)
MaintenanceSummary.Aggregate (message)
MaintenanceSummary.Stats (message)
ResourceMaintenance (message)
ResourceMaintenance.Maintenance (message)
ResourceMaintenance.Resource (message)
ResourceMaintenance.State (enum)
SummarizeMaintenancesRequest (message)
SummarizeMaintenancesResponse (message)
Maintenance
Unified Maintenance service
GetResourceMaintenance
rpc GetResourceMaintenance( GetResourceMaintenanceRequest ) returns ( ResourceMaintenance )
Retrieve a single resource maintenance.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
maintenance.resourceMaintenances.get
For more information, see the IAM documentation .
ListResourceMaintenances
rpc ListResourceMaintenances( ListResourceMaintenancesRequest ) returns ( ListResourceMaintenancesResponse )
Retrieve a collection of resource maintenances.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
maintenance.resourceMaintenances.list
For more information, see the IAM documentation .
SummarizeMaintenances
rpc SummarizeMaintenances( SummarizeMaintenancesRequest ) returns ( SummarizeMaintenancesResponse )
Retrieves the statistics of a specific maintenance.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
maintenance.resourceMaintenances.list
For more information, see the IAM documentation .
GetResourceMaintenanceRequest
The request structure for the GetResourceMaintenance method.
Fields
name
string
Required. The resource name of the resource within a service.
ListResourceMaintenancesRequest
The request structure for the ListResourceMaintenances method.
Fields
parent
string
Required. The parent of the resource maintenance.
page_size
int32
The maximum number of resource maintenances to send per page.
page_token
string
The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
filter
string
Filter the list as specified in https://google.aip.dev/160 .
order_by
string
Order results as specified in https://google.aip.dev/132 .
ListResourceMaintenancesResponse
The response structure for the ListResourceMaintenances method.
Fields
resource_maintenances[]
ResourceMaintenance
The resulting resource maintenances.
next_page_token
string
If present, the next page token can be provided to a subsequent ListResourceMaintenances call to list the next page. If empty, there are no more pages.
unreachable[]
string
Locations that could not be reached.
MaintenanceCategory
The Category of the maintenance.
Enums
MAINTENANCE_CATEGORY_UNSPECIFIED
Unspecified category.
INFRASTRUCTURE
Infrastructure maintenance events are times that Google Cloud performs regular maintenance on network equipment e.g. Google Cloud Interconnect These events are usually scheduled in advance and we provide notification, when possible, so that users can plan for the infrastructure maintenance event and prevent downtime. Infrastructure maintenance events don't have a set interval between occurrences, but generally occur several times a year.
SERVICE_UPDATE
Updates that can include bug fixes, changes, or new features that are backward compatible with existing versions (including patches). Some SPs allow users to control the scheduling of these maintenance events using maintenance windows and/or deny maintenance features.
MaintenanceControl
The control of the maintenance.
Fields
control
Control
The control of the resource maintenance.
is_custom
bool
Indicates whether the control is available only in Service Producer API (not through Unified Maintenance).
documentation
string
Link to Service Producer documentation about maintenance control. Provided only when isCustom is true .
Control
Sets the type of control supported. comment (as in logs).
Enums
CONTROL_UNSPECIFIED
Unspecified control.
APPLY
Apply control.
MANAGE_POLICY
Manage policy control.
RESCHEDULE
Reschedule control.
MaintenanceSummary
MaintenanceSummary contains maintenance statistics calculated based on ResourceMaintenances within the scope: project and location.
Fields
maintenance_name
string
Output only. The name of the maintenance.
title
string
Output only. The title of the maintenance.
description
string
Output only. The description of the maintenance.
category
MaintenanceCategory
Output only. The category of the maintenance event.
maintenance_scheduled_start_time
Timestamp
Output only. Scheduled start time of the maintenance. The maintenance will start at maintenanceScheduledStartTime or later, with best effort to finish before maintenanceScheduledEndTime .
maintenance_scheduled_end_time
Timestamp
Output only. An estimated (best effort, not guaranteed) end time of the scheduled maintenance.
maintenance_start_time
Timestamp
Output only. Actual date when the maintenance started. Field present only after the state changed to RUNNING .
maintenance_end_time
Timestamp
Output only. Actual date when the maintenance successfully completed. Field present only after the state changed to SUCCEEDED .
user_controllable
bool
Output only. Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field).
controls[]
MaintenanceControl
Output only. Control available for that Maintenance (might not be available for every resource that maintenance is applied to).
stats[]
Stats
Output only. Stats is a field of ResourceMaintenance used to aggregate the stats.
Aggregate
Aggregate is a <group, count> pair.
Fields
group
string
Specifies what specific value of the group_by the count represents. For example if group_by is "state" its corresponding group could be "SCHEDULED" .
count
int64
The count of the group.
Stats
Stats indicates the type of aggregate and the corresponding aggregates.
Fields
group_by
string
groupBy specifies the type of aggregate. For example a group_by might be "state"
aggregates[]
Aggregate
Aggregates is a list <group, count> pairs. For example, if the group_by is "state" a possible tuple in the aggregates list could be "SCHEDULED" : 11 ,
ResourceMaintenance
ResourceMaintenance is a resource that represents a maintenance operation on a resource.
Fields
name
string
Identifier. The name of the resource_maintenance resource. Format: "projects/{project}/locations/{location}/resourceMaintenance/{resource-maintenance-id}"
resource
Resource
Output only. The resource spec of the resource maintenance.
maintenance
Maintenance
Output only. The details of the maintenance.
state
State
Output only. The state of the resource maintenance.
create_time
Timestamp
Output only. The create time of the resource maintenance.
update_time
Timestamp
Output only. The update time of the resource maintenance.
maintenance_start_time
Timestamp
Output only. The time when the resource maintenance has started.
maintenance_end_time
Timestamp
Output only. The time when the resource maintenance has completed.
maintenance_cancel_time
Timestamp
Output only. The time when the resource maintenance was cancelled.
maintenance_scheduled_start_time
Timestamp
Output only. The time when the maintenance on the resource was scheduled to start.
maintenance_scheduled_end_time
Timestamp
Output only. The time when the maintenance on the resource was scheduled to end.
user_controllable
bool
Output only. Indicates whether the user has some control over that maintenance, either proactively before maintenance was scheduled with maintenance policy or with reactive controls after it was scheduled (see controls field)
controls[]
MaintenanceControl
Output only. The controls of the maintenance.
labels
map<string, string>
Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
annotations
map<string, string>
Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
More info: https://kubernetes.io/docs/user-guide/annotations
uid
string
Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
etag
string
Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
Maintenance
Maintenance is the maintenance details of a resource's maintenance.
Fields
maintenance_name
string
Maintenance is the name of the corresponding maintenance resource following the standard naming scheme: "{maintenance-id}"
title
string
Output only. The title of the maintenance.
description
string
Output only. The description of the maintenance.
category
MaintenanceCategory
Output only. The category of the maintenance.
Resource
Resource contains information about the resource affected by maintenance.
Fields
resource_name
string
Output only. Name is the reference to the consumer resource affected by the maintenance. Available values can be found here: https://cloud.google.com/asset-inventory/docs/asset-names
location
string
Output only. The location of the resource. Format: us-central1
type
string
Output only. The type of the resource. Available values can be found here: https://cloud.google.com/asset-inventory/docs/asset-types#supported_resource_types Please note that not all the resource types will have their maintenances reported.
State
State is the state of a resource maintenance.
Enums
STATE_UNSPECIFIED
Unspecified state.
SCHEDULED
Scheduled for a particular window. For disruptive maintenance it should respect maintenance policy, i.e. its available windows, exclusions and notification period.
RUNNING
Maintenance is ongoing.
CANCELLED
No longer planned, typically when other maintenance (e.g. upgrade to newer version) already happened, or the user skipped the maintenance.
SUCCEEDED
Successfully completed.
SummarizeMaintenancesRequest
Request message for SummarizeMaintenances custom method.
Fields
parent
string
Required. The parent of the resource maintenance. eg. projects/123/locations/*
page_size
int32
The maximum number of resource maintenances to send per page. The default page size is 20 and the maximum is 1000.
page_token
string
The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
filter
string
Filter the list as specified in https://google.aip.dev/160 . Supported fields include: - state - resource.location - resource.resourceName - resource.type - maintenance.maintenanceName - maintenanceStartTime - maintenanceCompleteTime Examples: - state="SCHEDULED" - resource.location="us-central1-c" - resource.resourceName=~"*/instance-20241212-211259" - maintenanceStartTime>"2000-10-11T20:44:51Z" - state="SCHEDULED" OR resource.type="compute.googleapis.com/Instance" - maintenance.maitenanceName="eb3b709c-9ca1-5472-9fb6-800a3849eda1" AND
maintenanceCompleteTime>"2000-10-11T20:44:51Z"
order_by
string
Order results as specified in https://google.aip.dev/132 .
SummarizeMaintenancesResponse
Request message for SummarizeMaintenances custom method.
Fields
maintenances[]
MaintenanceSummary
The resulting summaries.
next_page_token
string
If present, the next page token can be provided to a subsequent SummarizeMaintenances call to list the next page. If empty, there are no more pages.
unreachable[]
string
Unordered list. Locations that could not be reached.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
