---
title: "QueryReservationsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/QueryReservationsResponse
  title: "QueryReservationsResponse \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
QueryReservationsResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ReservationData
JSON representation
FutureReservation
JSON representation
SpecificSKUProperties
JSON representation
AllocatedInstanceProperties
JSON representation
AcceleratorConfig
JSON representation
AllocatedDisk
JSON representation
DiskInterface
TimeWindow
JSON representation
ShareSettings
JSON representation
ShareType
Status
JSON representation
ProcurementStatus
Allocation
JSON representation
SpecificSKUAllocation
JSON representation
Status
The QueryReservations response.
JSON representation
{
"reservations" : [
{
object ( ReservationData )
}
]
}
Fields
reservations[]
object ( ReservationData )
The reservations data that match the request.
ReservationData
Response entity for reservations data.
JSON representation
{
"name" : string ,
"timeSeries" : {
object ( TimeSeries )
} ,
"usedReservationValues" : {
object ( TimeSeries )
} ,
"futureReservations" : [
{
object ( FutureReservation )
}
] ,
"allocations" : [
{
object ( Allocation )
}
]
}
Fields
name
string
Identifier. The resource name of the connection in the form of: projects/{projectId}/locations/{locationId}/reservations/{reservation_id} or organizations/{organization_id}/locations/{locationId}/reservations/{reservation_id} or folders/{folder_id}/locations/{locationId}/reservations/{reservation_id}
timeSeries
object ( TimeSeries )
The collection of data points that represent the aggregated reserved value for reservations filtered by the criteria.
usedReservationValues
object ( TimeSeries )
The collection of data points that represent the aggregated used value for reservations filtered by the criteria.
futureReservations[]
object ( FutureReservation )
Future reservations filtered by the criteria.
allocations[]
object ( Allocation )
Allocations filtered by the criteria.
FutureReservation
Repesents Future Reservation request which is part of aggregated reservations data response of "QueryReservations".
JSON representation
{
"id" : string ,
"createTime" : string ,
"zone" : string ,
"description" : string ,
"futureReservation" : string ,
"ownerProjectId" : string ,
"timeWindow" : {
object ( TimeWindow )
} ,
"shareSettings" : {
object ( ShareSettings )
} ,
"namePrefix" : string ,
"status" : {
object ( Status )
} ,
"autoCreatedReservationsDeleteTime" : string ,
"autoDeleteAutoCreatedReservations" : boolean ,
// Union field type can be only one of the following:
"specificSkuProperties" : {
object ( SpecificSKUProperties )
}
// End of list of possible types for union field type .
}
Fields
id
string ( int64 format)
A unique identifier for this future reservation. The server defines this identifier.
createTime
string ( Timestamp format)
The creation timestamp for this future reservation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
zone
string
URL of the Zone where this future reservation resides.
description
string
Description of the future reservation provided by user.
futureReservation
string
The future reservation resource name.
ownerProjectId
string
timeWindow
object ( TimeWindow )
Time window for this Future Reservation.
shareSettings
object ( ShareSettings )
List of Projects/Folders to share with.
namePrefix
string
Name prefix for the reservations to be created at the time of delivery. The name prefix must comply with RFC1035. Maximum allowed length for name prefix is 20. Automatically created reservations name format will be -date-####.
status
object ( Status )
Status of the Future Reservation
autoCreatedReservationsDeleteTime
string ( Timestamp format)
Future timestamp when the FR auto-created reservations will be deleted by Compute Engine. Format of this field must be a valid RFC3339 value.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
autoDeleteAutoCreatedReservations
boolean
Setting for enabling or disabling automatic deletion for auto-created reservation. If set to true, auto-created reservations will be deleted at Future Reservation's end time (default) or at user's defined timestamp if any of the [autoCreatedReservationsDeleteTime, auto_created_reservations_duration] values is specified. For keeping auto-created reservation indefinitely, this value should be set to false.
Union field type . The type of the future reservation which can only be for a specific SKU for now. type can be only one of the following:
specificSkuProperties
object ( SpecificSKUProperties )
Future Reservation configuration to indicate instance properties and total count.
SpecificSKUProperties
Represents specific SKU properties for the Future Reservation.
JSON representation
{
"instanceProperties" : {
object ( AllocatedInstanceProperties )
} ,
"totalCount" : string
}
Fields
instanceProperties
object ( AllocatedInstanceProperties )
Properties of the SKU instances being reserved.
totalCount
string ( int64 format)
Total number of instances for which capacity assurance is requested at a future time period.
AllocatedInstanceProperties
Properties of the SKU instances being reserved.
JSON representation
{
"machineType" : string ,
"guestAccelerator" : [
{
object ( AcceleratorConfig )
}
] ,
"minCpuPlatform" : string ,
"localSsd" : [
{
object ( AllocatedDisk )
}
]
}
Fields
machineType
string
Specifies type of machine (name only) which has fixed number of vCPUs and fixed amount of memory. This also includes specifying custom machine type following custom-NUMBER_OF_CPUS-AMOUNT_OF_MEMORY pattern.
guestAccelerator[]
object ( AcceleratorConfig )
Specifies accelerator type and count.
minCpuPlatform
string
Minimum cpu platform the reservation.
localSsd[]
object ( AllocatedDisk )
Specifies amount of local ssd to reserve with each instance. The type of disk is local-ssd.
AcceleratorConfig
A specification of the type and number of accelerator cards attached to the instance.
JSON representation
{
"type" : string ,
"count" : integer
}
Fields
type
string
Accelerator name. See https://cloud.google.com/compute/docs/gpus/#introduction for a full list of accelerator types.
count
integer
The number of the guest accelerator cards exposed to this instance.
AllocatedDisk
A specification of the interface and size of disk attached to the instance.
JSON representation
{
"diskSizeGb" : string ,
"diskInterface" : enum ( DiskInterface )
}
Fields
diskSizeGb
string ( int64 format)
Specifies the size of the disk in base-2 GB.
diskInterface
enum ( DiskInterface )
Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI.
DiskInterface
guest device interface options to use for the disk.
Enums
DISK_INTERFACE_UNSPECIFIED
Default value. This value is unused.
SCSI
SCSI disk interface.
NVME
NVME disk interface.
NVDIMM
NVDIMM disk interface.
ISCSI
ISCSI disk interface.
TimeWindow
Represents time window for the Future Reservation.
JSON representation
{
"startTime" : string ,
"endTime" : string
}
Fields
startTime
string ( Timestamp format)
Start time of the Future Reservation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
endTime
string ( Timestamp format)
End time of the Future Reservation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ShareSettings
The share setting for reservation.
JSON representation
{
"shareType" : enum ( ShareType ) ,
"projects" : [
string
]
}
Fields
shareType
enum ( ShareType )
Type of sharing for this shared-reservation
projects[]
string
A List of Project names to specify consumer projects for this shared-reservation. This is only valid when shareType's value is SPECIFIC_PROJECTS.
ShareType
Possible scope in which the reservation can be shared. More granularity can be added in future.
Enums
SHARE_TYPE_UNSPECIFIED
Default value. This value is unused.
ORGANIZATION
Shared-reservation is open to entire Organization
SPECIFIC_PROJECTS
Shared-reservation is open to specific projects
LOCAL
Default value.
DIRECT_PROJECTS_UNDER_SPECIFIC_FOLDERS
Shared-reservation is open to direct child projects of specific folders.
Status
Represents status related to the future reservation.
JSON representation
{
"procurementStatus" : enum ( ProcurementStatus ) ,
"lockTime" : string ,
"autoCreatedReservations" : [
string
] ,
"fulfilledCount" : string
}
Fields
procurementStatus
enum ( ProcurementStatus )
Current state of this Future Reservation
lockTime
string ( Timestamp format)
Time when Future Reservation would become LOCKED, after which no modifications to Future Reservation will be allowed. Applicable only after the Future Reservation is in the APPROVED state. The lockTime is an RFC3339 string. The procurementStatus will transition to PROCURING state at this time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
autoCreatedReservations[]
string
Fully qualified urls of the automatically created reservations at startTime.
fulfilledCount
string ( int64 format)
This count indicates the fulfilled capacity so far. This is set during "PROVISIONING" state. This count also includes capacity delivered as part of existing matching reservations.
ProcurementStatus
Represents procurement status of the Future Reservation.
Enums
PROCUREMENT_STATUS_UNSPECIFIED
This is unused status value.
PENDING_APPROVAL
Future reservation is pending approval by Google Cloud Platform.
APPROVED
Future reservation is approved by Google Cloud Platform.
COMMITTED
Future reservation is committed by the customer.
DECLINED
Future reservation is rejected by Google Cloud Platform.
CANCELLED
Future reservation is cancelled by the customer.
PROCURING
Future reservation is being procured by Google Cloud Platform. Beyond this point, Future reservation is locked and no further modifications are allowed.
PROVISIONING
Future reservation capacity is being provisioned. This state will be entered after startTime, while reservations are being created to provide totalCount reserved instance slots. This state will not persist past startTime + 24h.
FULFILLED
Future reservation is fulfilled completely.
FAILED
Future reservation failed. No additional reservations were provided.
FAILED_PARTIALLY_FULFILLED
Future reservation is partially fulfilled. Additional reservations were provided but did not reach totalCount reserved instance slots.
DRAFTING
Related status for PlanningStatus.Draft. Transitions to PENDING_APPROVAL upon user submitting FR.
PENDING_AMENDMENT_APPROVAL
An Amendment to the Future Reservation has been requested. If the Amendment is declined, the Future Reservation will be restored to the last known good state.
Allocation
Repesents Allocation which is part of aggregated reservations data response of "QueryReservations".
JSON representation
{
"id" : string ,
"createTime" : string ,
"zone" : string ,
"description" : string ,
"allocation" : string ,
"ownerProjectId" : string ,
"status" : enum ( Status ) ,
"shareSettings" : {
object ( ShareSettings )
} ,
"autoDeleteTime" : string ,
// Union field type can be only one of the following:
"specificAllocation" : {
object ( SpecificSKUAllocation )
}
// End of list of possible types for union field type .
}
Fields
id
string ( int64 format)
The unique identifier for the resource. This identifier is defined by the server.
createTime
string ( Timestamp format)
The creation timestamp for this allocation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
zone
string
Zone in which the reservation resides.
description
string
A description while creating reservation.
allocation
string
The reservation resource name.
ownerProjectId
string
status
enum ( Status )
The status of the reservation.
shareSettings
object ( ShareSettings )
Specify share-settings to create a shared reservation.
autoDeleteTime
string ( Timestamp format)
Absolute time in future when the reservation will be auto-deleted by Compute Engine.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Union field type . The type of the reservation which can only be for a specific SKU for now. type can be only one of the following:
specificAllocation
object ( SpecificSKUAllocation )
Reservation for instances with specific machine shapes.
SpecificSKUAllocation
This reservation type allows to pre allocate specific instance configuration.
JSON representation
{
"instanceProperties" : {
object ( AllocatedInstanceProperties )
} ,
"count" : string ,
"usedCount" : string ,
"assuredCount" : string
}
Fields
instanceProperties
object ( AllocatedInstanceProperties )
The instance properties for the reservation.
count
string ( int64 format)
Specifies the number of resources that are allocated.
usedCount
string ( int64 format)
Indicates how many instances are in use.
assuredCount
string ( int64 format)
Indicates how many instances are actually usable currently.
Status
The status of the reservation.
Enums
STATUS_UNSPECIFIED
Default value. This value is unused.
INVALID
Invalid Reservation
CREATING
Resources are being allocated for the reservation.
READY
Reservation has allocated all its resources.
DELETING
Reservation is currently being deleted.
UPDATING
Reservation is currently being resized.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-06 UTC."],[],[]]
