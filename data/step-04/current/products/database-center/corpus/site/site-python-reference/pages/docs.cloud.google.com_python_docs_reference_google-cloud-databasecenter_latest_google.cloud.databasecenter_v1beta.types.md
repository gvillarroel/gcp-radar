---
title: "Package types (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types
  title: "Package types (0.7.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Package types (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.7.0 (latest)
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
API documentation for databasecenter_v1beta.types package.
Classes
AdditionalDetail
Details related to signal.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AggregateFleetRequest
The request message to aggregate fleet which are grouped by a
field.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AggregateFleetResponse
The response message to aggregate a fleet by some group by
fields.
AggregateFleetRow
Individual row grouped by a particular dimension.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AggregateIssueStatsRequest
AggregateIssueStatsRequest represents the input to the
AggregateIssueStats method.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AggregateIssueStatsResponse
The response message containing one of more group of relevant
health issues for database resources.
AutomatedBackupPolicyInfo
Automated backup policy signal info
BackupDRConfig
BackupDRConfig to capture the backup and disaster recovery
details of database resource.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
BackupRunInfo
Metadata about latest backup run state for a database
resource.
DatabaseResource
DatabaseResource represents every individually configured
database unit representing compute and/or storage.
DatabaseResourceGroup
DatabaseResourceGroup represents all resources that serve a
common data set. It is considered notionally as a single entity,
powered by any number of units of compute and storage.
DatabaseResourceIssue
DatabaseResource and Issue associated with it.
DeletionProtectionInfo
Deletion protection signal info for a database resource.
DeltaDetails
Captures the details of items that have increased or
decreased in some bucket when compared to some point in history.
It is currently used to capture the delta of resources that have
been added or removed in the fleet as well as to capture the
resources that have a change in Issue/Signal status.
Dimension
Dimension used to aggregate the fleet.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Edition
Represents the edition of a database resource.
Engine
Engine refers to underlying database binary running in an
instance.
InefficientQueryInfo
Metadata about inefficient query signal info for a database
resource.
IssueCount
Count of issues for a group of signals.
IssueGroupStats
IssueGroupStats refers to stats for a particulare combination
of relevant health issues of database resources.
IssueSeverity
IssueSeverity represents the severity of an issue.
IssueStats
IssueStats holds stats for a particular signal category.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Label
Label is a key value pair applied to a resource.
MachineConfig
MachineConfig describes the configuration of a machine
specific to a Database Resource.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
MaintenanceInfo
MaintenanceInfo to capture the maintenance details of
database resource.
MaintenanceRecommendationInfo
Info associated with maintenance recommendation.
ManagementType
The management type of the resource.
MetricData
MetricData represents the metric data for a database
resource.
Metrics
Metrics represents the metrics for a database resource.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
OperationErrorType
OperationErrorType is used to expose specific error type
which can happen in database resource while performing an
operation. For example, an error can happen while database
resource being backed up.
OutdatedMinorVersionInfo
Info associated with outdated minor version.
Phase
Phase/Week of the maintenance window. This is to capture
order of maintenance. For example, for Cloud SQL resources -
https://cloud.google.com/sql/docs/mysql/maintenance . This enum
can be extended to support DB Center specific phases for
recommendation plan generation.
Product
Product specification for databasecenter resources.
ProductType
ProductType is used to identify a database service offering
either in a cloud provider or on-premise. This enum needs to be
updated whenever we introduce a new ProductType.
QueryDatabaseResourceGroupsRequest
QueryDatabaseResourceGroupsRequest is the request to get a
list of database groups.
QueryDatabaseResourceGroupsResponse
QueryDatabaseResourceGroupsResponse represents the response
message containing a list of resource groups.
QueryIssuesRequest
QueryIssuesRequest is the request to get a list of issues.
QueryIssuesResponse
QueryIssuesResponse is the response containing a list of
issues.
QueryProductsRequest
QueryProductsRequest is the request to get a list of
products.
QueryProductsResponse
QueryProductsResponse represents the response containing a
list of products.
RecommendationInfo
Info associated with recommendation.
RegulatoryStandard
Compliances associated with signals.
ResourceCategory
The enum value corresponds to 'type' suffix in the resource_type
field.
ResourceDetails
Capture the resource details for resources that are included
in the delta counts.
ResourceMaintenanceDenySchedule
Deny maintenance period for the database resource. It
specifies the time range during which the maintenance cannot
start. This is configured by the customer.
ResourceMaintenanceSchedule
Maintenance window for the database resource. It specifies
preferred time and day of the week and phase in some cases, when
the maintenance can start.
ResourceSuspensionInfo
Resource suspension info for a database resource.
RetentionSettingsInfo
Metadata about backup retention settings for a database
resource.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SCCInfo
Info associated with SCC signals.
Signal
Represents a signal.
SignalFilter
A filter for Signals.
If signal_type is left unset, all signals should be returned. For
example, the following filter returns all issues. signal_filter: {
signal_status: SIGNAL_STATUS_ISSUE; }
Another example, the following filter returns issues of the given
type: signal_filter: { type: SIGNAL_TYPE_NO_PROMOTABLE_REPLICA
signal_status: ISSUE }
If signal_status is left unset or set to SIGNAL_STATE_UNSPECIFIED,
an error should be returned.
SignalGroup
A group of signals and their counts.
SignalProductsFilters
SignalProductsFilters represents a signal and list of
supported products.
SignalSource
Represents the source system from where a signal comes from.
More enum values are expected to be added as needed.
SignalStatus
Represents the state of a signal. More enum values are
expected to be added as needed.
SignalType
Represents the type of a signal. More values are expected to
be added as needed.
SignalTypeGroup
A group of signal types that specifies what the user is interested
in.
Used by QueryDatabaseResourceGroups API.
Example:
signal_type_group { name = "AVAILABILITY" types =
[SIGNAL_TYPE_NO_PROMOTABLE_REPLICA] }
SubResource
Sub resource details
For Spanner/Bigtable instance certain data protection settings
are at sub resource level like database/table.
This message is used to capture such sub resource details.
SubResourceType
SubResourceType refers to the sub-type of database resource.
SuspensionReason
The reason for suspension of the database resource.
Tag
Tag is a key value pair attached to a resource.
TypedValue
TypedValue represents the value of the metric based on data
type.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
