---
title: "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/transferJobs
  title: "REST Resource: transferJobs \_|\_ Storage Transfer Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
REST Resource: transferJobs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: TransferJob
This resource represents the configuration of a transfer job that runs periodically.
JSON representation
{
"name" : string ,
"description" : string ,
"projectId" : string ,
"serviceAccount" : string ,
"transferSpec" : {
object ( TransferSpec )
} ,
"replicationSpec" : {
object ( ReplicationSpec )
} ,
"notificationConfig" : {
object ( NotificationConfig )
} ,
"loggingConfig" : {
object ( LoggingConfig )
} ,
"schedule" : {
object ( Schedule )
} ,
"eventStream" : {
object ( EventStream )
} ,
"status" : enum ( Status ) ,
"creationTime" : string ,
"lastModificationTime" : string ,
"deletionTime" : string ,
"latestOperationName" : string
}
Fields
name
string
A unique name (within the transfer project) assigned when the job is created. If this field is empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise, the specified name is used as the unique name for this job.
If the specified name is in use by a job, the creation request fails with an ALREADY_EXISTS error.
This name must start with "transferJobs/" prefix and end with a letter or a number, and should be no more than 128 characters. For transfers involving PosixFilesystem, this name must start with transferJobs/OPI specifically. For all other transfer types, this name must not start with transferJobs/OPI .
Non-PosixFilesystem example: "transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"
PosixFilesystem example: "transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"
Applications must not rely on the enforcement of naming requirements involving OPI.
Invalid job names fail with an INVALID_ARGUMENT error.
description
string
A description provided by the user for the job. Its max length is 1024 bytes when Unicode-encoded.
projectId
string
The ID of the Google Cloud project that owns the job.
serviceAccount
string
Optional. The user-managed service account to which to delegate service agent permissions. You can grant Cloud Storage bucket permissions to this service account instead of to the Transfer Service service agent.
Either the service account email ( SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com ) or the unique ID ( 123456789012345678901 ) are accepted.
See https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for required permissions.
transferSpec
object ( TransferSpec )
Transfer specification.
replicationSpec
object ( ReplicationSpec )
Replication specification.
notificationConfig
object ( NotificationConfig )
Notification configuration.
loggingConfig
object ( LoggingConfig )
Logging configuration.
schedule
object ( Schedule )
Specifies schedule for the transfer job. This is an optional field. When the field is not set, the job never executes a transfer, unless you invoke transferJobs.run or update the job to have a non-empty schedule.
eventStream
object ( EventStream )
Specifies the event stream for the transfer job for event-driven transfers. When EventStream is specified, the Schedule fields are ignored.
status
enum ( Status )
Status of the job. This value MUST be specified for CreateTransferJobRequests .
Note: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED , and an operation spawned by the transfer is running, the status change would not affect the current operation.
creationTime
string ( Timestamp format)
Output only. The time that the transfer job was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastModificationTime
string ( Timestamp format)
Output only. The time that the transfer job was last modified.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deletionTime
string ( Timestamp format)
Output only. The time that the transfer job was deleted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
latestOperationName
string
The name of the most recently started TransferOperation of this JobConfig. Present if a TransferOperation has been created for this JobConfig.
ReplicationSpec
Specifies the configuration for a cross-bucket replication job. Cross-bucket replication copies new or updated objects from a source Cloud Storage bucket to a destination Cloud Storage bucket. Existing objects in the source bucket are not copied by a new cross-bucket replication job.
JSON representation
{
"objectConditions" : {
object ( ObjectConditions )
} ,
"transferOptions" : {
object ( TransferOptions )
} ,
// Union field data_source can be only one of the following:
"gcsDataSource" : {
object ( GcsData )
}
// End of list of possible types for union field data_source .
// Union field data_sink can be only one of the following:
"gcsDataSink" : {
object ( GcsData )
}
// End of list of possible types for union field data_sink .
}
Fields
objectConditions
object ( ObjectConditions )
Object conditions that determine which objects are transferred. For replication jobs, only includePrefixes and excludePrefixes are supported.
transferOptions
object ( TransferOptions )
Specifies the metadata options to be applied during replication. Delete options are not supported. If a delete option is specified, the request fails with an INVALID_ARGUMENT error.
Union field data_source . The data source to be replicated. data_source can be only one of the following:
gcsDataSource
object ( GcsData )
The Cloud Storage bucket from which to replicate objects.
Union field data_sink . The destination for replicated objects. data_sink can be only one of the following:
gcsDataSink
object ( GcsData )
The Cloud Storage bucket to which to replicate objects.
Schedule
Transfers can be scheduled to recur or to run just once.
JSON representation
{
"scheduleStartDate" : {
object ( Date )
} ,
"scheduleEndDate" : {
object ( Date )
} ,
"startTimeOfDay" : {
object ( TimeOfDay )
} ,
"endTimeOfDay" : {
object ( TimeOfDay )
} ,
"repeatInterval" : string
}
Fields
scheduleStartDate
object ( Date )
Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If scheduleStartDate and startTimeOfDay are in the past relative to the job's creation time, the transfer starts the day after you schedule the transfer request.
Note: When starting jobs at or near midnight UTC it is possible that a job starts later than expected. For example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it creates a TransferJob with scheduleStartDate set to June 2 and a startTimeOfDay set to midnight UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.
scheduleEndDate
object ( Date )
The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours within the following guidelines:
If scheduleEndDate and scheduleStartDate are the same and in the future relative to UTC, the transfer is executed only one time.
If scheduleEndDate is later than scheduleStartDate and scheduleEndDate is in the future relative to UTC, the job runs each day at startTimeOfDay through scheduleEndDate .
startTimeOfDay
object ( TimeOfDay )
The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time.
If startTimeOfDay is not specified:
One-time transfers run immediately.
Recurring transfers run immediately, and each day at midnight UTC, through scheduleEndDate .
If startTimeOfDay is specified:
One-time transfers run at the specified time.
Recurring transfers run at the specified time each day, through scheduleEndDate .
endTimeOfDay
object ( TimeOfDay )
The time in UTC that no further transfer operations are scheduled. Combined with scheduleEndDate , endTimeOfDay specifies the end date and time for starting new transfer operations. This field must be greater than or equal to the timestamp corresponding to the combination of scheduleStartDate and startTimeOfDay , and is subject to the following:
If endTimeOfDay is not set and scheduleEndDate is set, then a default value of 23:59:59 is used for endTimeOfDay .
If endTimeOfDay is set and scheduleEndDate is not set, then INVALID_ARGUMENT is returned.
repeatInterval
string ( Duration format)
Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Date
Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
A full date, with non-zero year, month, and day values.
A month and day, with a zero year (for example, an anniversary).
A year on its own, with a zero month and a zero day.
A year and month, with a zero day (for example, a credit card expiration date).
Related types:
google.type.TimeOfDay
google.type.DateTime
google.protobuf.Timestamp
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer
}
Fields
year
integer
Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
integer
Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
integer
Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
TimeOfDay
Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and google.protobuf.Timestamp .
JSON representation
{
"hours" : integer ,
"minutes" : integer ,
"seconds" : integer ,
"nanos" : integer
}
Fields
hours
integer
Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
minutes
integer
Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
seconds
integer
Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
nanos
integer
Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
EventStream
Specifies the Event-driven transfer options. Event-driven transfers listen to an event stream to transfer updated files.
JSON representation
{
"name" : string ,
"eventStreamStartTime" : string ,
"eventStreamExpirationTime" : string
}
Fields
name
string
Required. Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'.
eventStreamStartTime
string ( Timestamp format)
Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
eventStreamExpirationTime
string ( Timestamp format)
Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Status
The status of the transfer job.
Enums
STATUS_UNSPECIFIED
Zero is an illegal value.
ENABLED
New transfers are performed based on the schedule.
DISABLED
New transfers are not scheduled.
DELETED
This is a soft delete state. After a transfer job is set to this state, the job and all the transfer executions are subject to garbage collection. Transfer jobs become eligible for garbage collection 30 days after their status is set to DELETED .
Methods
create
Creates a transfer job that runs periodically.
delete
Deletes a transfer job.
get
Gets a transfer job.
list
Lists transfer jobs.
patch
Updates a transfer job.
run
Starts a new operation for the specified transfer job.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-14 UTC."],[],[]]
