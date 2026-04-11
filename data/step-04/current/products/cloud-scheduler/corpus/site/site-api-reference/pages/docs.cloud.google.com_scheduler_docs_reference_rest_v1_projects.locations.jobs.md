---
title: "REST Resource: projects.locations.jobs \_|\_ Cloud Scheduler \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/reference/rest/v1/projects.locations.jobs
  title: "REST Resource: projects.locations.jobs \_|\_ Cloud Scheduler \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Reference
Send feedback
REST Resource: projects.locations.jobs
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Job
JSON representation
PubsubTarget
JSON representation
AppEngineHttpTarget
JSON representation
HttpMethod
AppEngineRouting
JSON representation
HttpTarget
JSON representation
OAuthToken
JSON representation
OidcToken
JSON representation
State
RetryConfig
JSON representation
Methods
Resource: Job
Configuration for a job. The maximum allowed size for a job is 1MB.
JSON representation
{
"name" : string ,
"description" : string ,
"schedule" : string ,
"timeZone" : string ,
"userUpdateTime" : string ,
"state" : enum ( State ) ,
"status" : {
object ( Status )
} ,
"scheduleTime" : string ,
"lastAttemptTime" : string ,
"retryConfig" : {
object ( RetryConfig )
} ,
"attemptDeadline" : string ,
"satisfiesPzs" : boolean ,
// Union field target can be only one of the following:
"pubsubTarget" : {
object ( PubsubTarget )
} ,
"appEngineHttpTarget" : {
object ( AppEngineHttpTarget )
} ,
"httpTarget" : {
object ( HttpTarget )
}
// End of list of possible types for union field target .
}
Fields
name
string
Optionally caller-specified in jobs.create , after which it becomes output only.
The job name. For example: projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID .
PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see Identifying projects
LOCATION_ID is the canonical ID for the job's location. The list of available locations can be obtained by calling locations.list . For more information, see Cloud Scheduler locations .
JOB_ID can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
description
string
Optionally caller-specified in jobs.create or jobs.patch .
A human-readable description for the job. This string must not contain more than 500 characters.
schedule
string
Required, except when used with jobs.patch .
Describes the schedule on which the job will be executed.
The schedule can be either of the following types:
Crontab
English-like schedule
As a general rule, execution n + 1 of a job will not begin until execution n has finished. Cloud Scheduler will never allow two simultaneously outstanding executions. For example, this implies that if the n+1 th execution is scheduled to run at 16:00 but the n th execution takes until 16:15, the n+1 th execution will not start until 16:15 . A scheduled start time will be delayed if the previous execution has not ended when its scheduled time occurs.
If retryCount > 0 and a job attempt fails, the job will be tried a total of retryCount times, with exponential backoff, until the next scheduled start time. If retryCount is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retryCount to 0 does not prevent failed jobs from running according to schedule after the failure.
timeZone
string
Specifies the time zone to be used in interpreting schedule . The value of this field must be a time zone name from the tz database .
Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string "utc". If a time zone is not specified, the default will be in UTC (also known as GMT).
userUpdateTime
string ( Timestamp format)
Output only. The creation time of the job.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Output only. State of the job.
status
object ( Status )
Output only. The response from the target for the last attempted execution.
scheduleTime
string ( Timestamp format)
Output only. The next time the job is scheduled. Note that this may be a retry of a previously failed attempt or the next execution time according to the schedule.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
lastAttemptTime
string ( Timestamp format)
Output only. The time the last job attempt started.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
retryConfig
object ( RetryConfig )
Settings that determine the retry behavior.
attemptDeadline
string ( Duration format)
The deadline for job attempts. If the request handler does not respond by this deadline then the request is cancelled and the attempt is marked as a DEADLINE_EXCEEDED failure. The failed attempt can be viewed in execution logs. Cloud Scheduler will retry the job according to the RetryConfig .
The default and the allowed values depend on the type of target:
For HTTP targets , the default is 3 minutes. The deadline must be in the interval [15 seconds, 30 minutes].
For App Engine HTTP targets , 0 indicates that the request has the default deadline. The default deadline depends on the scaling type of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds].
For Pub/Sub targets , this field is ignored.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
satisfiesPzs
boolean
Output only. Whether or not this Job satisfies the requirements of physical zone separation
Union field target . Required.
Delivery settings containing destination and parameters. target can be only one of the following:
pubsubTarget
object ( PubsubTarget )
Pub/Sub target.
appEngineHttpTarget
object ( AppEngineHttpTarget )
App Engine HTTP target.
httpTarget
object ( HttpTarget )
HTTP target.
PubsubTarget
Pub/Sub target. The job will be delivered by publishing a message to the given Pub/Sub topic.
JSON representation
{
"topicName" : string ,
"data" : string ,
"attributes" : {
string : string ,
...
}
}
Fields
topicName
string
Required. The name of the Cloud Pub/Sub topic to which messages will be published when a job is delivered. The topic name must be in the same format as required by Pub/Sub's PublishRequest.name , for example projects/PROJECT_ID/topics/TOPIC_ID .
The topic must be in the same project as the Cloud Scheduler job.
data
string ( bytes format)
The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
A base64-encoded string.
attributes
map (key: string, value: string)
Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
AppEngineHttpTarget
App Engine target. The job will be pushed to a job handler by means of an HTTP request via an httpMethod such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
JSON representation
{
"httpMethod" : enum ( HttpMethod ) ,
"appEngineRouting" : {
object ( AppEngineRouting )
} ,
"relativeUri" : string ,
"headers" : {
string : string ,
...
} ,
"body" : string
}
Fields
httpMethod
enum ( HttpMethod )
The HTTP method to use for the request. PATCH and OPTIONS are not permitted.
appEngineRouting
object ( AppEngineRouting )
App Engine Routing setting for the job.
relativeUri
string
The relative URI.
The relative URL must begin with "/" and must be a valid HTTP relative URL. It can contain a path, query string arguments, and # fragments. If the relative URL is empty, then the root path "/" will be used. No spaces are allowed, and the maximum length allowed is 2083 characters.
headers
map (key: string, value: string)
HTTP request headers.
This map contains the header field names and values. Headers can be set when the job is created.
Cloud Scheduler sets some headers to default values:
User-Agent : By default, this header is "AppEngine-Google; (+http://code.google.com/appengine)" . This header can be modified, but Cloud Scheduler will append "AppEngine-Google; (+http://code.google.com/appengine)" to the modified User-Agent .
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values:
Content-Type : This will be set to "application/octet-stream" . You can override this default by explicitly setting Content-Type to a particular media type when creating the job. For example, you can set Content-Type to "application/json" .
The headers below are output only. They cannot be set or overridden:
Content-Length : This is computed by Cloud Scheduler.
X-Google-* : For Google internal use only.
X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain job-specific information, are also be sent to the job handler.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
body
string ( bytes format)
Body.
HTTP request body. A request body is allowed only if the HTTP method is POST or PUT. It will result in invalid argument error to set a body on a job with an incompatible HttpMethod .
A base64-encoded string.
HttpMethod
The HTTP method used to execute the job.
Enums
HTTP_METHOD_UNSPECIFIED
HTTP method unspecified. Defaults to POST.
POST
HTTP POST
GET
HTTP GET
HEAD
HTTP HEAD
PUT
HTTP PUT
DELETE
HTTP DELETE
PATCH
HTTP PATCH
OPTIONS
HTTP OPTIONS
AppEngineRouting
App Engine Routing.
For more information about services, versions, and instances see An Overview of App Engine , Microservices Architecture on Google App Engine , App Engine Standard request routing , and App Engine Flex request routing .
JSON representation
{
"service" : string ,
"version" : string ,
"instance" : string ,
"host" : string
}
Fields
service
string
App service.
By default, the job is sent to the service which is the default service when the job is attempted.
version
string
App version.
By default, the job is sent to the version which is the default version when the job is attempted.
instance
string
App instance.
By default, the job is sent to an instance which is available when the job is attempted.
Requests can only be sent to a specific instance if manual scaling is used in App Engine Standard . App Engine Flex does not support instances. For more information, see App Engine Standard request routing and App Engine Flex request routing .
host
string
Output only. The host that the job is sent to.
For more information about how App Engine requests are routed, see here .
The host is constructed as:
host = [application_domain_name]
| [service] + '.' + [application_domain_name]
| [version] + '.' + [application_domain_name]
| [version_dot_service]+ '.' + [application_domain_name]
| [instance] + '.' + [application_domain_name]
| [instance_dot_service] + '.' + [application_domain_name]
| [instance_dot_version] + '.' + [application_domain_name]
| [instance_dot_version_dot_service] + '.' + [application_domain_name]
application_domain_name = The domain name of the app, for example .appspot.com, which is associated with the job's project ID.
service = service
version = version
version_dot_service = version + '.' + service
instance = instance
instance_dot_service = instance + '.' + service
instance_dot_version = instance + '.' + version
instance_dot_version_dot_service = instance + '.' + version + '.' + service
If service is empty, then the job will be sent to the service which is the default service when the job is attempted.
If version is empty, then the job will be sent to the version which is the default version when the job is attempted.
If instance is empty, then the job will be sent to an instance which is available when the job is attempted.
If service , version , or instance is invalid, then the job will be sent to the default version of the default service when the job is attempted.
HttpTarget
Http target. The job will be pushed to the job handler by means of an HTTP request via an httpMethod such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. A failure to receive a response constitutes a failed execution. For a redirected request, the response returned by the redirected request is considered.
JSON representation
{
"uri" : string ,
"httpMethod" : enum ( HttpMethod ) ,
"headers" : {
string : string ,
...
} ,
"body" : string ,
// Union field authorization_header can be only one of the following:
"oauthToken" : {
object ( OAuthToken )
} ,
"oidcToken" : {
object ( OidcToken )
}
// End of list of possible types for union field authorization_header .
}
Fields
uri
string
Required. The full URI path that the request will be sent to. This string must begin with either "http://" or "https://". Some examples of valid values for uri are: http://acme.com and https://acme.com/sales:8080 . Cloud Scheduler will encode some characters for safety and compatibility. The maximum allowed URL length is 2083 characters after encoding.
httpMethod
enum ( HttpMethod )
Which HTTP method to use for the request.
headers
map (key: string, value: string)
HTTP request headers.
This map contains the header field names and values.
The user can specify HTTP request headers to send with the job's HTTP request. Repeated headers are not supported, but a header value can contain commas.
The following headers represent a subset of the headers that accompany the job's HTTP request. Some HTTP request headers are ignored or replaced. A partial list of headers that are ignored or replaced is below:
Host: This will be computed by Cloud Scheduler and derived from uri .
Content-Length : This will be computed by Cloud Scheduler.
User-Agent : This will be set to "Google-Cloud-Scheduler" .
X-Google-* : Google internal use only.
X-AppEngine-* : Google internal use only.
X-CloudScheduler : This header will be set to true.
X-CloudScheduler-JobName : This header will contain the job name.
X-CloudScheduler-ScheduleTime : For Cloud Scheduler jobs specified in the unix-cron format, this header will contain the job schedule as an offset of UTC parsed according to RFC3339.
If the job has a body and the following headers are not set by the user, Cloud Scheduler sets default values:
Content-Type : This will be set to "application/octet-stream" . You can override this default by explicitly setting Content-Type to a particular media type when creating the job. For example, you can set Content-Type to "application/json" .
The total size of headers must be less than 80KB.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
body
string ( bytes format)
HTTP request body. A request body is allowed only if the HTTP method is POST, PUT, or PATCH. It is an error to set body on a job with an incompatible HttpMethod .
A base64-encoded string.
Union field authorization_header . The mode for generating an Authorization header for HTTP requests.
If specified, all Authorization headers in the HttpTarget.headers field will be overridden. authorization_header can be only one of the following:
oauthToken
object ( OAuthToken )
If specified, an OAuth token will be generated and attached as an Authorization header in the HTTP request.
This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
oidcToken
object ( OidcToken )
If specified, an OIDC token will be generated and attached as an Authorization header in the HTTP request.
This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
OAuthToken
Contains information needed for generating an OAuth token . This type of authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
JSON representation
{
"serviceAccountEmail" : string ,
"scope" : string
}
Fields
serviceAccountEmail
string
Service account email to be used for generating OAuth token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.
scope
string
OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.
OidcToken
Contains information needed for generating an OpenID Connect token . This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself.
JSON representation
{
"serviceAccountEmail" : string ,
"audience" : string
}
Fields
serviceAccountEmail
string
Service account email to be used for generating OIDC token. The service account must be within the same project as the job. The caller must have iam.serviceAccounts.actAs permission for the service account.
audience
string
Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.
State
State of the job.
Enums
STATE_UNSPECIFIED
Unspecified state.
ENABLED
The job is executing normally.
PAUSED
The job is paused by the user. It will not execute. A user can intentionally pause the job using PauseJobRequest .
DISABLED
The job is disabled by the system due to error. The user cannot directly set a job to be disabled.
UPDATE_FAILED
The job state resulting from a failed CloudScheduler.UpdateJob operation. To recover a job from this state, retry CloudScheduler.UpdateJob until a successful response is received.
RetryConfig
Settings that determine the retry behavior. For more information, see Retry jobs .
By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig .
JSON representation
{
"retryCount" : integer ,
"maxRetryDuration" : string ,
"minBackoffDuration" : string ,
"maxBackoffDuration" : string ,
"maxDoublings" : integer
}
Fields
retryCount
integer
The number of attempts that the system will make to run a job using the exponential backoff procedure described by maxDoublings .
The default value of retryCount is zero.
If retryCount is 0 (and if maxRetryDuration is also 0), a job attempt won't be retried if it fails. Instead, Cloud Scheduler system will wait for the next scheduled execution time. Setting retryCount to 0 doesn't prevent failed jobs from running according to schedule after the failure.
If retryCount is set to a non-zero number, Cloud Scheduler will retry the failed job, using exponential backoff, for retryCount times until the job succeeds or the number of retries is exhausted. Note that the next scheduled execution time might be skipped if the retries continue through that time.
Values greater than 5 and negative values are not allowed.
maxRetryDuration
string ( Duration format)
The time limit for retrying a failed job, measured from the time when an execution was first attempted. If specified with retryCount , the job will be retried until both limits are reached.
The default value for maxRetryDuration is zero, which means retry duration is unlimited. However, if retryCount is also 0, a job attempt won't be retried if it fails.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
minBackoffDuration
string ( Duration format)
The minimum amount of time to wait before retrying a job after it fails.
The default value of this field is 5 seconds.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxBackoffDuration
string ( Duration format)
The maximum amount of time to wait before retrying a job after it fails.
The default value of this field is 1 hour.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxDoublings
integer
The time between retries will double maxDoublings times.
A job's retry interval starts at minBackoffDuration , then doubles maxDoublings times, then increases linearly, and finally retries at intervals of maxBackoffDuration up to retryCount times.
For examples, see Retry jobs .
The default value of this field is 5.
Methods
create
Creates a job.
delete
Deletes a job.
get
Gets a job.
list
Lists jobs.
patch
Updates a job.
pause
Pauses a job.
resume
Resume a job.
run
Forces a job to run now.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-16 UTC."],[],[]]
