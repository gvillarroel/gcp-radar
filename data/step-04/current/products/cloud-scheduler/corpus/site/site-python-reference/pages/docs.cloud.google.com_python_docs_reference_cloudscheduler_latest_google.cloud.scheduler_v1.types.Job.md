---
title: "Class Job (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.Job
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.Job
  title: "Class Job (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Job (2.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.19.0 (latest)
2.18.0
2.17.0
2.16.0
2.15.1
2.14.1
2.13.5
2.12.0
2.11.3
2.10.0
2.9.1
2.8.0
2.7.3
2.6.4
2.5.1
2.4.0
2.3.4
2.2.0
2.1.1
2.0.0
1.3.2
1.2.1
Job ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for a job.
The maximum allowed size for a job is 1MB.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
name
str
Optionally caller-specified in
CreateJob ,
after which it becomes output only.
The job name. For example:
projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
- PROJECT_ID can contain letters ([A-Za-z]), numbers
([0-9]), hyphens (-), colons (:), or periods (.). For more
information, see `Identifying
projects
description
str
Optionally caller-specified in
CreateJob
or
UpdateJob .
A human-readable description for the job. This string must
not contain more than 500 characters.
pubsub_target
google.cloud.scheduler_v1.types.PubsubTarget
Pub/Sub target.
This field is a member of oneof _ target .
app_engine_http_target
google.cloud.scheduler_v1.types.AppEngineHttpTarget
App Engine HTTP target.
This field is a member of oneof _ target .
http_target
google.cloud.scheduler_v1.types.HttpTarget
HTTP target.
This field is a member of oneof _ target .
schedule
str
Required, except when used with
UpdateJob .
Describes the schedule on which the job will be executed.
The schedule can be either of the following types:
- Crontab __
- English-like
schedule __
As a general rule, execution n + 1 of a job will not
begin until execution n has finished. Cloud Scheduler
will never allow two simultaneously outstanding executions.
For example, this implies that if the n+1 \ th execution
is scheduled to run at 16:00 but the n \ th execution
takes until 16:15, the n+1 \ th execution will not start
until 16:15 . A scheduled start time will be delayed if
the previous execution has not ended when its scheduled time
occurs.
If
retry_count
> 0 and a job attempt fails, the job will be tried a total
of
retry_count
times, with exponential backoff, until the next scheduled
start time. If retry_count is 0, a job attempt will not be
retried if it fails. Instead the Cloud Scheduler system will
wait for the next scheduled execution time. Setting
retry_count to 0 does not prevent failed jobs from running
according to schedule after the failure.
time_zone
str
Specifies the time zone to be used in interpreting
schedule . The
value of this field must be a time zone name from the `tz
database
user_update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The creation time of the job.
state
google.cloud.scheduler_v1.types.Job.State
Output only. State of the job.
status
google.rpc.status_pb2.Status
Output only. The response from the target for
the last attempted execution.
schedule_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The next time the job is
scheduled. Note that this may be a retry of a
previously failed attempt or the next execution
time according to the schedule.
last_attempt_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The time the last job attempt
started.
retry_config
google.cloud.scheduler_v1.types.RetryConfig
Settings that determine the retry behavior.
attempt_deadline
google.protobuf.duration_pb2.Duration
The deadline for job attempts. If the request handler does
not respond by this deadline then the request is cancelled
and the attempt is marked as a DEADLINE_EXCEEDED
failure. The failed attempt can be viewed in execution logs.
Cloud Scheduler will retry the job according to the
RetryConfig .
The default and the allowed values depend on the type of
target:
- For [HTTP
targets][google.cloud.scheduler.v1.Job.http_target], the
default is 3 minutes. The deadline must be in the interval
[15 seconds, 30 minutes].
- For [App Engine HTTP
targets][google.cloud.scheduler.v1.Job.app_engine_http_target],
0 indicates that the request has the default deadline. The
default deadline depends on the scaling type of the
service: 10 minutes for standard apps with automatic
scaling, 24 hours for standard apps with manual and basic
scaling, and 60 minutes for flex apps. If the request
deadline is set, it must be in the interval [15 seconds,
24 hours 15 seconds].
- For [Pub/Sub
targets][google.cloud.scheduler.v1.Job.pubsub_target],
this field is ignored.
Classes
State
State ( value )
State of the job.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
