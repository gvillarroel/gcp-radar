---
title: "BigQueryReservationAssignment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryreservation/bigqueryreservationassignment
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/bigqueryreservation/bigqueryreservationassignment
  title: "BigQueryReservationAssignment \_|\_ Config Connector \_|\_ Google Cloud\
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
BigQueryReservationAssignment
Property
Value
Google Cloud Service Name
BigQuery Reservation
Google Cloud Service Documentation
/bigquery/docs/reservations-intro
Google Cloud REST Resource Name
v1.projects.locations.reservations.assignments
Google Cloud REST Resource Documentation
/bigquery/docs/reference/reservations/rest/v1/projects.locations.reservations.assignments
Config Connector Resource Short Names
gcpbigqueryreservationassignment gcpbigqueryreservationassignments bigqueryreservationassignment
Config Connector Service Name
bigqueryreservation.googleapis.com
Config Connector Resource Fully Qualified Name
bigqueryreservationassignments.bigqueryreservation.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
assignee :
folderRef :
external : string
name : string
namespace : string
organizationRef :
external : string
projectRef :
external : string
kind : string
name : string
namespace : string
jobType : string
reservationRef :
external : string
name : string
namespace : string
resourceID : string
Fields
assignee
Required
object
Immutable. Required. The resource which will use the reservation. For example, projects/myproject , folders/123 , or organizations/456 .
assignee.folderRef
Optional
object
Exactly one of ProjectRef or FolderRef or OrganizationRef must be specified.
assignee.folderRef.external
Optional
string
The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set.
assignee.folderRef.name
Optional
string
The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set.
assignee.folderRef.namespace
Optional
string
The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referenced resource.
assignee.organizationRef
Optional
object
Exactly one of ProjectRef or FolderRef or OrganizationRef must be specified.
assignee.organizationRef.external
Required
string
Required when 'organizationRef' is specified. The 'name' field of an organization, when not managed by Config Connector.
assignee.projectRef
Optional
object
Exactly one of ProjectRef or FolderRef or OrganizationRef must be specified.
assignee.projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
assignee.projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
assignee.projectRef.name
Optional
string
The `name` field of a `Project` resource.
assignee.projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
jobType
Required
string
Immutable. Which type of jobs will use the reservation.
reservationRef
Required
object
The name of reservation to create a new assignment in, or to move the assignment to.
reservationRef.external
Optional
string
A reference to an externally managed BigqueryReservation resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/reservations/{{reservationID}}".
reservationRef.name
Optional
string
The name of a BigqueryReservation resource.
reservationRef.namespace
Optional
string
The namespace of a BigqueryReservation resource.
resourceID
Optional
string
Immutable. Optional. The BigQueryReservationAssignment ID. This field is service-generated and can only be set for resource acquisition. To acquire an existing resource, you must provide this field to identify the Reservation resource to acquire.
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
state : string
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
A unique specifier for the BigqueryReservationAssignment resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.state
string
State of the assignment.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
