---
title: "BackupDRBackupPlan \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/backupdr/backupdrbackupplan
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/backupdr/backupdrbackupplan
  title: "BackupDRBackupPlan \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
BackupDRBackupPlan
Property
Value
Google Cloud Service Name
Backup and DR
Google Cloud Service Documentation
/backup-disaster-recovery/docs/
Google Cloud REST Resource Name
projects.locations.backupPlans
Google Cloud REST Resource Documentation
/backup-dr/docs/reference/rest/v1/projects.locations.backupPlans
Config Connector Resource Short Names
gcpbackupdrbackupplan gcpbackupdrbackupplans backupdrbackupplan
Config Connector Service Name
backupdr.googleapis.com
Config Connector Resource Fully Qualified Name
backupdrbackupplans.backupdr.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
backupRules :
- backupRetentionDays : integer
ruleID : string
standardSchedule :
backupWindow :
endHourOfDay : integer
startHourOfDay : integer
daysOfMonth :
- integer
daysOfWeek :
- string
hourlyFrequency : integer
months :
- string
recurrenceType : string
timeZone : string
weekDayOfMonth :
dayOfWeek : string
weekOfMonth : string
backupVaultRef :
external : string
name : string
namespace : string
description : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
resourceType : string
Fields
backupRules
Optional
list (object)
Required. The backup rules for this `BackupPlan`. There must be at least one `BackupRule` message.
backupRules[]
Optional
object
backupRules[].backupRetentionDays
Optional
integer
Required. Configures the duration for which backup data will be kept. It is
defined in “days”. The value should be greater than or equal to minimum
enforced retention of the backup vault.
Minimum value is 1 and maximum value is 36159 for custom retention
on-demand backup.
Minimum and maximum values are workload specific for all other rules.
backupRules[].ruleID
Optional
string
Required. Immutable. The unique id of this `BackupRule`. The `rule_id` is unique per `BackupPlan`. The `rule_id` must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens. Pattern, /[a-z][a-z0-9-]{,62}/.
backupRules[].standardSchedule
Optional
object
Optional. Defines a schedule that runs within the confines of a defined window of time.
backupRules[].standardSchedule.backupWindow
Optional
object
Required. A BackupWindow defines the window of day during which backup jobs
will run. Jobs are queued at the beginning of the window and will be marked
as `NOT_RUN` if they do not start by the end of the window.
Note: running jobs will not be cancelled at the end of the window.
backupRules[].standardSchedule.backupWindow.endHourOfDay
Optional
integer
Required. The hour of day (1-24) when the window end for example, if value of
end hour of day is 10 that mean backup window end time is 10:00.
End hour of day should be greater than start hour of day.
0
backupRules[].standardSchedule.backupWindow.startHourOfDay
Optional
integer
Required. The hour of day (0-23) when the window starts. For example, if the value is set to 6, the backup window starts at 6:00 a.m.
backupRules[].standardSchedule.daysOfMonth
Optional
list (integer)
Optional. Specifies days of months like 1, 5, or 14 on which jobs will run.
Values for `days_of_month` are only applicable for `recurrence_type`,
`MONTHLY` and `YEARLY`. A validation error will occur if other values are
supplied.
backupRules[].standardSchedule.daysOfMonth[]
Optional
integer
backupRules[].standardSchedule.daysOfWeek
Optional
list (string)
Optional. Specifies days of week like, MONDAY or TUESDAY, on which jobs
will run.
This is required for `recurrence_type`, `WEEKLY` and is not applicable
otherwise. A validation error will occur if a value is supplied and
`recurrence_type` is not `WEEKLY`.
backupRules[].standardSchedule.daysOfWeek[]
Optional
string
backupRules[].standardSchedule.hourlyFrequency
Optional
integer
Optional. Specifies frequency for hourly backups. A hourly frequency of 4
means jobs will run every 4 hours from start time till end time defined.
This is required for `recurrence_type`, `HOURLY` and is not applicable
otherwise. A validation error will occur if a value is supplied and
`recurrence_type` is not `HOURLY`.
Value of hourly frequency should be between 4 and 23.
backupRules[].standardSchedule.months
Optional
list (string)
{% verbatim %}Optional. Specifies the months of year, like `FEBRUARY` and/or `MAY`, on
which jobs will run.
This field is only applicable when `recurrence_type` is `YEARLY`. A
validation error will occur if other values are supplied.
backupRules[].standardSchedule.months[]
Optional
string
backupRules[].standardSchedule.recurrenceType
Optional
string
Required. Specifies the `RecurrenceType` for the schedule.
backupRules[].standardSchedule.timeZone
Optional
string
Required. The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the IANA tz database. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for the list of valid timezone names. For example, Europe/Paris.
backupRules[].standardSchedule.weekDayOfMonth
Optional
object
Optional. Specifies a week day of the month like, FIRST SUNDAY or LAST
MONDAY, on which jobs will run. This will be specified by two fields in
`WeekDayOfMonth`, one for the day, for example `MONDAY`, and one for the week,
for example `LAST`.
This field is only applicable for `recurrence_type`, `MONTHLY` and
`YEARLY`. A validation error will occur if other values are supplied.
backupRules[].standardSchedule.weekDayOfMonth.dayOfWeek
Optional
string
Required. Specifies the day of the week.
backupRules[].standardSchedule.weekDayOfMonth.weekOfMonth
Optional
string
Required. Specifies the week of the month.
backupVaultRef
Required
object
Required. Resource name of backup vault which will be used as storage location for backups.
backupVaultRef.external
Optional
string
A reference to an externally managed BackupDRBackupVault resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/backupVaults/{{backupvaultID}}".
backupVaultRef.name
Optional
string
The name of a BackupDRBackupVault resource.
backupVaultRef.namespace
Optional
string
The namespace of a BackupDRBackupVault resource.
description
Optional
string
Optional. The description of the `BackupPlan` resource.
The description allows for additional details about `BackupPlan` and its
use cases to be provided. An example description is the following: "This
is a backup plan that performs a daily backup at 6pm and retains data for 3
months". The description must be at most 2048 characters.
location
Required
string
Immutable.
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
The BackupDRBackupPlan name. If not given, the metadata.name will be used.
resourceType
Optional
string
Required. The resource type to which the `BackupPlan` will be applied. Examples include "compute.googleapis.com/Instance", "sqladmin.googleapis.com/Instance", or "alloydb.googleapis.com/Cluster".
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
backupVaultServiceAccount : string
createTime : string
state : string
updateTime : string
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
A unique specifier for the BackupDRBackupPlan resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.backupVaultServiceAccount
string
Output only. The Google Cloud Service Account to be used by the BackupVault for taking backups. Specify the email address of the Backup Vault Service Account.
observedState.createTime
string
Output only. When the `BackupPlan` was created.
observedState.state
string
Output only. The `State` for the `BackupPlan`.
observedState.updateTime
string
Output only. When the `BackupPlan` was last updated.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
