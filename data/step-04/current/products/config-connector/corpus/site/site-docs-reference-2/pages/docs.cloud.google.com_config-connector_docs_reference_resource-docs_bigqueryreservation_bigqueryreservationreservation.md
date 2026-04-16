---
title: "BigQueryReservationReservation \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryreservation/bigqueryreservationreservation
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryreservation/bigqueryreservationreservation
  title: "BigQueryReservationReservation \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BigQueryReservationReservation
Property
Value
Google Cloud Service Name
BigQuery Reservation
Google Cloud Service Documentation
/bigquery/docs/reservations-intro
Google Cloud REST Resource Name
v1.projects.locations.reservations
Google Cloud REST Resource Documentation
/bigquery/docs/reference/reservations/rest/v1/projects.locations.reservations
Config Connector Resource Short Names
gcpbigqueryreservationreservation gcpbigqueryreservationreservations bigqueryreservationreservation
Config Connector Service Name
bigqueryreservation.googleapis.com
Config Connector Resource Fully Qualified Name
bigqueryreservationreservations.bigqueryreservation.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
autoscale :
maxSlots : integer
concurrency : integer
edition : string
failover :
secondaryLocation : string
ignoreIdleSlots : boolean
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
slotCapacity : integer
Fields
autoscale
Optional
object
Optional. The configuration parameters for the auto scaling feature.
autoscale.maxSlots
Optional
integer
Number of slots to be scaled when needed.
concurrency
Optional
integer
Job concurrency target which sets a soft upper bound on the number of jobs that can run concurrently in this reservation. This is a soft target due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency target will be automatically computed by the system. NOTE: this field is exposed as target job concurrency in the Information Schema, DDL and BigQuery CLI.
edition
Optional
string
Immutable. Optional. Edition of the reservation. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
failover
Optional
object
Optional. This field is only set for reservations using the managed disaster recovery feature. Users can set this to create a failover reservation.
failover.secondaryLocation
Required
string
Required when failover is set. Users can update this field to convert a non-failover reservation to a
failover reservation (by setting a specific region value) or convert a
failover reservation to a non-failover reservation (by removing spec.failover).
However, changes from one region to another region will be ignored by the
controller. Additionally, if the value of this field changes during manual failover
by the API, the controller will not attempt to revert these changes.
Note: This field is only available for ENTERPRISE_PLUS edition reservations.
Immutable.
ignoreIdleSlots
Optional
boolean
If false, any query or pipeline job using this reservation will use idle slots from other reservations within the same admin project. If true, a query or pipeline job using this reservation will execute with the slot capacity specified in the slot_capacity field at most.
location
Required
string
Immutable. You can configure spec.secondaryLocation to enable the reservation fail-over to a secondary location, in which case the primary location could be different from the spec.location.
projectRef
Required
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
Immutable. Optional. The BigQuery Reservation ID used for resource creation or acquisition. It must only contain lower case alphanumeric characters or dashes. It must start with a letter and must not end with a dash. Its maximum length is 64 characters. For creation: If specified, this value is used as the Reservation ID. If not provided, a UUID will be generated and assigned as the Reservation ID. For acquisition: This field must be provided to identify the Reservation resource to acquire.
slotCapacity
Optional
integer
Optional. Baseline slots available to this reservation. A slot is a unit of
computational power in BigQuery, and serves as the unit of parallelism.
Queries using this reservation might use more slots during runtime if
ignore_idle_slots is set to false, or autoscaling is enabled.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
autoscale :
currentSlots : integer
failover :
originalPrimaryLocation : string
primaryLocation : string
secondaryLocation : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the BigQueryReservationReservation resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.autoscale
object
observedState.autoscale.currentSlots
integer
The slot capacity added to this reservation when autoscale happens. Will be between [0, max_slots]. Note: after users reduce max_slots, it may take a while before it can be propagated, so current_slots may stay in the original value and could be larger than max_slots for that brief period (less than one minute)
observedState.failover
object
observedState.failover.originalPrimaryLocation
string
The location where the reservation was originally created. This is set only during the failover reservation's creation. All billing charges for the failover reservation will be applied to this location.
observedState.failover.primaryLocation
string
The current location of the reservation's primary replica. This field is only set for reservations using the managed disaster recovery feature.
observedState.failover.secondaryLocation
string
The current location of the reservation's secondary replica. This field is only set for reservations using the managed disaster recovery feature. Users can set this in create reservation calls to create a failover reservation or in update reservation calls to convert a non-failover reservation to a failover reservation (or vice versa).
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
