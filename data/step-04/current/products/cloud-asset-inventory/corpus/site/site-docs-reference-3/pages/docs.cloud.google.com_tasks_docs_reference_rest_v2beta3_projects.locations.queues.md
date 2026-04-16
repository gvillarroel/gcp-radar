---
title: "REST Resource: projects.locations.queues \_|\_ Cloud Tasks \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2beta3/projects.locations.queues
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2beta3/projects.locations.queues
  title: "REST Resource: projects.locations.queues \_|\_ Cloud Tasks \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Reference
Send feedback
REST Resource: projects.locations.queues
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Queue
JSON representation
AppEngineHttpQueue
JSON representation
HttpTarget
JSON representation
UriOverride
JSON representation
Scheme
PathOverride
JSON representation
QueryOverride
JSON representation
UriOverrideEnforceMode
HeaderOverride
JSON representation
Header
JSON representation
RateLimits
JSON representation
RetryConfig
JSON representation
State
StackdriverLoggingConfig
JSON representation
Type
QueueStats
JSON representation
Methods
Resource: Queue
A queue is a container of related tasks. Queues are configured to manage how those tasks are dispatched. Configurable properties include rate limits, retry options, queue types, and others.
JSON representation
{
"name" : string ,
"httpTarget" : {
object ( HttpTarget )
} ,
"rateLimits" : {
object ( RateLimits )
} ,
"retryConfig" : {
object ( RetryConfig )
} ,
"state" : enum ( State ) ,
"purgeTime" : string ,
"taskTtl" : string ,
"tombstoneTtl" : string ,
"stackdriverLoggingConfig" : {
object ( StackdriverLoggingConfig )
} ,
"type" : enum ( Type ) ,
"stats" : {
object ( QueueStats )
} ,
// Union field queue_type can be only one of the following:
"appEngineHttpQueue" : {
object ( AppEngineHttpQueue )
}
// End of list of possible types for union field queue_type .
}
Fields
name
string
Caller-specified and required in queues.create , after which it becomes output only.
The queue name.
The queue name must have the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID
PROJECT_ID can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see Identifying projects
LOCATION_ID is the canonical ID for the queue's location. The list of available locations can be obtained by calling locations.list . For more information, see https://cloud.google.com/about/locations/ .
QUEUE_ID can contain letters ([A-Za-z]), numbers ([0-9]), or hyphens (-). The maximum length is 100 characters.
httpTarget
object ( HttpTarget )
Modifies HTTP target for HTTP tasks.
rateLimits
object ( RateLimits )
Rate limits for task dispatches.
rateLimits and retryConfig are related because they both control task attempts. However they control task attempts in different ways:
rateLimits controls the total rate of dispatches from a queue (i.e. all traffic dispatched from the queue, regardless of whether the dispatch is from a first attempt or a retry).
retryConfig controls what happens to particular a task after its first attempt fails. That is, retryConfig controls task retries (the second attempt, third attempt, etc).
The queue's actual dispatch rate is the result of:
Number of tasks in the queue
User-specified throttling: rateLimits , retryConfig , and the queue's state .
System throttling due to 429 (Too Many Requests) or 503 (Service Unavailable) responses from the worker, high error rates, or to smooth sudden large traffic spikes.
retryConfig
object ( RetryConfig )
Settings that determine the retry behavior.
For tasks created using Cloud Tasks: the queue-level retry settings apply to all tasks in the queue that were created using Cloud Tasks. Retry settings cannot be set on individual tasks.
For tasks created using the App Engine SDK: the queue-level retry settings apply to all tasks in the queue which do not have retry settings explicitly set on the task and were created by the App Engine SDK. See App Engine documentation .
state
enum ( State )
Output only. The state of the queue.
state can only be changed by called queues.pause , queues.resume , or uploading queue.yaml/xml . queues.patch cannot be used to change state .
purgeTime
string ( Timestamp format)
Output only. The last time this queue was purged.
All tasks that were created before this time were purged.
A queue can be purged using queues.purge , the App Engine Task Queue SDK, or the Cloud Console .
Purge time will be truncated to the nearest microsecond. Purge time will be unset if the queue has never been purged.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
taskTtl
string ( Duration format)
The maximum amount of time that a task will be retained in this queue. After a task has lived for taskTtl , the task will be deleted regardless of whether it was dispatched or not.
The minimum value is 10 days. The maximum value is 10 years. The value must be given as a string that indicates the length of time (in seconds) followed by s (for "seconds"). For more information on the format, see the documentation for Duration .
Queues created by Cloud Tasks have a default taskTtl of 31 days. .
Queues created by queue.yaml/xml have a fixed taskTtl of the maximum duration, because there is a storage quota for these queues.
tombstoneTtl
string ( Duration format)
The task tombstone time to live (TTL).
After a task is deleted or executed, the task's tombstone is retained for the length of time specified by tombstoneTtl . The tombstone is used by task de-duplication; another task with the same name can't be created until the tombstone has expired. For more information about task de-duplication, see the documentation for CreateTaskRequest .
The minimum value is 1 hour. The maximum value is 9 days. The value must be given as a string that indicates the length of time (in seconds) followed by s (for "seconds"). For more information on the format, see the documentation for Duration .
Queues created by Cloud Tasks have a default tombstoneTtl of 1 hour.
stackdriverLoggingConfig
object ( StackdriverLoggingConfig )
Configuration options for writing logs to Stackdriver Logging . If this field is unset, then no logs are written.
type
enum ( Type )
Immutable. The type of a queue (push or pull).
Queue.type is an immutable property of the queue that is set at the queue creation time. When left unspecified, the default value of PUSH is selected.
stats
object ( QueueStats )
Output only. The realtime, informational statistics for a queue. In order to receive the statistics the caller should include this field in the FieldMask.
Union field queue_type .
queue_type can be only one of the following:
appEngineHttpQueue
object ( AppEngineHttpQueue )
AppEngineHttpQueue settings apply only to App Engine tasks in this queue. Http tasks are not affected by this proto.
AppEngineHttpQueue
App Engine HTTP queue.
The task will be delivered to the App Engine application hostname specified by its AppEngineHttpQueue and AppEngineHttpRequest . The documentation for AppEngineHttpRequest explains how the task's host URL is constructed.
Using AppEngineHttpQueue requires appengine.applications.get Google IAM permission for the project and the following scope:
https://www.googleapis.com/auth/cloud-platform
JSON representation
{
"appEngineRoutingOverride" : {
object ( AppEngineRouting )
}
}
Fields
appEngineRoutingOverride
object ( AppEngineRouting )
Overrides for the task-level appEngineRouting .
If set, appEngineRoutingOverride is used for all tasks in the queue, no matter what the setting is for the task-level appEngineRouting .
HttpTarget
HTTP target.
When specified as a Queue , all the tasks with [HttpRequest] will be overridden according to the target.
JSON representation
{
"uriOverride" : {
object ( UriOverride )
} ,
"httpMethod" : enum ( HttpMethod ) ,
"headerOverrides" : [
{
object ( HeaderOverride )
}
] ,
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
uriOverride
object ( UriOverride )
URI override.
When specified, overrides the execution URI for all the tasks in the queue.
httpMethod
enum ( HttpMethod )
The HTTP method to use for the request.
When specified, it overrides HttpRequest.http_method for the task. Note that if the value is set to HttpMethod.GET the HttpRequest.body of the task will be ignored at execution time.
headerOverrides[]
object ( HeaderOverride )
HTTP target headers.
This map contains the header field names and values. Headers will be set when running the CreateTask and/or BufferTask .
These headers represent a subset of the headers that will be configured for the task's HTTP request. Some HTTP request headers will be ignored or replaced.
A partial list of headers that will be ignored or replaced is: * Several predefined headers, prefixed with "X-CloudTasks-", can be used to define properties of the task. * Host: This will be computed by Cloud Tasks and derived from [HttpRequest.url][google.cloud.tasks.v2beta3.Target.HttpRequest.url]. * Content-Length: This will be computed by Cloud Tasks.
Content-Type won't be set by Cloud Tasks. You can explicitly set Content-Type to a media type when the task is created . For example, Content-Type can be set to "application/octet-stream" or "application/json" . The default value is set to "application/json" .
User-Agent: This will be set to "Google-Cloud-Tasks" .
Headers which can have multiple values (according to RFC2616) can be specified using comma-separated values.
The size of the headers must be less than 80KB. Queue-level headers to override headers of all the tasks in the queue.
Do not put business sensitive or personally identifying data in the HTTP Header Override Configuration or other similar fields in accordance with Section 12 (Resource Fields) of the Service Specific Terms .
Union field authorization_header . The mode for generating an Authorization header for HTTP requests.
If specified, all Authorization headers in the HttpRequest.headers field are overridden. authorization_header can be only one of the following:
oauthToken
object ( OAuthToken )
If specified, an OAuth token is generated and attached as the Authorization header in the HTTP request.
This type of authorization should generally be used only when calling Google APIs hosted on *.googleapis.com. Note that both the service account email and the scope MUST be specified when using the queue-level authorization override.
oidcToken
object ( OidcToken )
If specified, an OIDC token is generated and attached as an Authorization header in the HTTP request.
This type of authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you intend to validate the token yourself. Note that both the service account email and the audience MUST be specified when using the queue-level authorization override.
UriOverride
URI Override.
When specified, all the HTTP tasks inside the queue will be partially or fully overridden depending on the configured values.
JSON representation
{
"pathOverride" : {
object ( PathOverride )
} ,
"queryOverride" : {
object ( QueryOverride )
} ,
"uriOverrideEnforceMode" : enum ( UriOverrideEnforceMode ) ,
"scheme" : enum ( Scheme ) ,
"host" : string ,
"port" : string
}
Fields
pathOverride
object ( PathOverride )
URI path.
When specified, replaces the existing path of the task URL. Setting the path value to an empty string clears the URI path segment.
queryOverride
object ( QueryOverride )
URI Query.
When specified, replaces the query part of the task URI. Setting the query value to an empty string clears the URI query segment.
uriOverrideEnforceMode
enum ( UriOverrideEnforceMode )
URI Override Enforce Mode
When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS.
scheme
enum ( Scheme )
Scheme override.
When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS).
host
string
Host override.
When specified, replaces the host part of the task URL. For example, if the task URL is "https://www.google.com," and host value is set to "example.net", the overridden URI will be changed to "https://example.net." Host value cannot be an empty string (INVALID_ARGUMENT).
port
string ( int64 format)
Port override.
When specified, replaces the port part of the task URI. For instance, for a URI "https://www.example.com/example" and port=123, the overridden URI becomes "https://www.example.com:123/example". Note that the port value must be a positive integer. Setting the port to 0 (Zero) clears the URI port.
Scheme
The Scheme for an HTTP request. By default, it is HTTPS.
Enums
SCHEME_UNSPECIFIED
Scheme unspecified. Defaults to HTTPS.
HTTP
Convert the scheme to HTTP, e.g., "https://www.example.com" will change to "http://www.example.com".
HTTPS
Convert the scheme to HTTPS, e.g., "http://www.example.com" will change to "https://www.example.com".
PathOverride
PathOverride.
Path message defines path override for HTTP targets.
JSON representation
{
"path" : string
}
Fields
path
string
The URI path (e.g., /users/1234). Default is an empty string.
QueryOverride
QueryOverride.
Query message defines query override for HTTP targets.
JSON representation
{
"queryParams" : string
}
Fields
queryParams
string
The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.
UriOverrideEnforceMode
UriOverrideEnforceMode mode is to define enforcing mode for the override modes.
Enums
URI_OVERRIDE_ENFORCE_MODE_UNSPECIFIED
OverrideMode Unspecified. Defaults to ALWAYS.
IF_NOT_EXISTS
In the IF_NOT_EXISTS mode, queue-level configuration is only applied where task-level configuration does not exist.
ALWAYS
In the ALWAYS mode, queue-level configuration overrides all task-level configuration
HeaderOverride
Wraps the Header object.
JSON representation
{
"header" : {
object ( Header )
}
}
Fields
header
object ( Header )
Header embodying a key and a value.
Do not put business sensitive or personally identifying data in the HTTP Header Override Configuration or other similar fields in accordance with Section 12 (Resource Fields) of the Service Specific Terms .
Header
Defines a header message. A header can have a key and a value.
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
The Key of the header.
value
string
The Value of the header.
RateLimits
Rate limits.
This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry.
Note: The debugging command, RunTask , will run a task even if the queue has reached its RateLimits .
JSON representation
{
"maxDispatchesPerSecond" : number ,
"maxBurstSize" : integer ,
"maxConcurrentDispatches" : integer
}
Fields
maxDispatchesPerSecond
number
The maximum rate at which tasks are dispatched from this queue.
If unspecified when the queue is created, Cloud Tasks will pick the default.
For App Engine queues , the maximum allowed value is 500.
This field has the same meaning as rate in queue.yaml/xml .
maxBurstSize
integer
The max burst size.
Max burst size limits how fast tasks in queue are processed when many tasks are in the queue and the rate is high. This field allows the queue to have a high rate so processing starts shortly after a task is enqueued, but still limits resource usage when many tasks are enqueued in a short period of time.
The token bucket algorithm is used to control the rate of task dispatches. Each queue has a token bucket that holds tokens, up to the maximum specified by maxBurstSize . Each time a task is dispatched, a token is removed from the bucket. Tasks will be dispatched until the queue's bucket runs out of tokens. The bucket will be continuously refilled with new tokens based on maxDispatchesPerSecond .
The default value of maxBurstSize is picked by Cloud Tasks based on the value of maxDispatchesPerSecond .
The maximum value of maxBurstSize is 500.
For App Engine queues that were created or updated using queue.yaml/xml , maxBurstSize is equal to bucket_size . If queues.patch is called on a queue without explicitly setting a value for maxBurstSize , maxBurstSize value will get updated if queues.patch is updating maxDispatchesPerSecond .
maxConcurrentDispatches
integer
The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. After this threshold has been reached, Cloud Tasks stops dispatching tasks until the number of concurrent requests decreases.
If unspecified when the queue is created, Cloud Tasks will pick the default.
The maximum allowed value is 5,000.
This field has the same meaning as max_concurrent_requests in queue.yaml/xml .
RetryConfig
Retry config.
These settings determine when a failed task attempt is retried.
JSON representation
{
"maxAttempts" : integer ,
"maxRetryDuration" : string ,
"minBackoff" : string ,
"maxBackoff" : string ,
"maxDoublings" : integer
}
Fields
maxAttempts
integer
Number of attempts per task.
Cloud Tasks will attempt the task maxAttempts times (that is, if the first attempt fails, then there will be maxAttempts - 1 retries). Must be >= -1.
If unspecified when the queue is created, Cloud Tasks will pick the default.
-1 indicates unlimited attempts.
This field has the same meaning as task_retry_limit in queue.yaml/xml .
Note: Cloud Tasks stops retrying only when maxAttempts and maxRetryDuration are both satisfied. When the task has been attempted maxAttempts times and when the maxRetryDuration time has passed, no further attempts are made, and the task is deleted. If you want your task to retry infinitely, you must set maxAttempts to -1 and maxRetryDuration to 0.
maxRetryDuration
string ( Duration format)
If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. Once maxRetryDuration time has passed and the task has been attempted maxAttempts times, no further attempts will be made and the task will be deleted.
If zero, then the task age is unlimited.
If unspecified when the queue is created, Cloud Tasks will pick the default.
The value must be given as a string that indicates the length of time (in seconds) followed by s (for "seconds"). For the maximum possible value or the format, see the documentation for Duration . maxRetryDuration will be truncated to the nearest second.
This field has the same meaning as taskAgeLimit in queue.yaml/xml .
minBackoff
string ( Duration format)
A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.
If unspecified when the queue is created, Cloud Tasks will pick the default.
The value must be given as a string that indicates the length of time (in seconds) followed by s (for "seconds"). For more information on the format, see the documentation for Duration . minBackoff will be truncated to the nearest second.
This field has the same meaning as min_backoff_seconds in queue.yaml/xml .
maxBackoff
string ( Duration format)
A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.
If unspecified when the queue is created, Cloud Tasks will pick the default.
The value must be given as a string that indicates the length of time (in seconds) followed by s (for "seconds"). For more information on the format, see the documentation for Duration . maxBackoff will be truncated to the nearest second.
This field has the same meaning as max_backoff_seconds in queue.yaml/xml .
maxDoublings
integer
The time between retries will double maxDoublings times.
A task's retry interval starts at minBackoff , then doubles maxDoublings times, then increases linearly, and finally retries at intervals of maxBackoff up to maxAttempts times.
For example, if minBackoff is 10s, maxBackoff is 300s, and maxDoublings is 3, then the a task will first be retried in 10s. The retry interval will double three times, and then increase linearly by 2^3 * 10s. Finally, the task will retry at intervals of maxBackoff until the task has been attempted maxAttempts times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, ....
If unspecified when the queue is created, Cloud Tasks will pick the default.
This field has the same meaning as maxDoublings in queue.yaml/xml .
State
State of the queue.
Enums
STATE_UNSPECIFIED
Unspecified state.
RUNNING
The queue is running. Tasks can be dispatched.
If the queue was created using Cloud Tasks and the queue has had no activity (method calls or task dispatches) for 30 days, the queue may take a few minutes to re-activate. Some method calls may return google.rpc.Code.NOT_FOUND and tasks may not be dispatched for a few minutes until the queue has been re-activated.
PAUSED
Tasks are paused by the user. If the queue is paused then Cloud Tasks will stop delivering tasks from it, but more tasks can still be added to it by the user.
DISABLED
The queue is disabled.
A queue becomes DISABLED when queue.yaml or queue.xml is uploaded which does not contain the queue. You cannot directly disable a queue.
When a queue is disabled, tasks can still be added to a queue but the tasks are not dispatched.
To permanently delete this queue and all of its tasks, call queues.delete .
StackdriverLoggingConfig
Configuration options for writing logs to Stackdriver Logging .
JSON representation
{
"samplingRatio" : number
}
Fields
samplingRatio
number
Specifies the fraction of operations to write to Stackdriver Logging . This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the default and means that no operations are logged.
Type
The type of the queue.
Enums
TYPE_UNSPECIFIED
Default value.
PULL
A pull queue.
PUSH
A push queue.
QueueStats
Statistics for a queue.
JSON representation
{
"tasksCount" : string ,
"oldestEstimatedArrivalTime" : string ,
"executedLastMinuteCount" : string ,
"concurrentDispatchesCount" : string ,
"effectiveExecutionRate" : number
}
Fields
tasksCount
string ( int64 format)
Output only. An estimation of the number of tasks in the queue, that is, the tasks in the queue that haven't been executed, the tasks in the queue which the queue has dispatched but has not yet received a reply for, and the failed tasks that the queue is retrying.
oldestEstimatedArrivalTime
string ( Timestamp format)
Output only. An estimation of the nearest time in the future where a task in the queue is scheduled to be executed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
executedLastMinuteCount
string ( int64 format)
Output only. The number of tasks that the queue has dispatched and received a reply for during the last minute. This variable counts both successful and non-successful executions.
concurrentDispatchesCount
string ( int64 format)
Output only. The number of requests that the queue has dispatched but has not received a reply for yet.
effectiveExecutionRate
number
Output only. The current maximum number of tasks per second executed by the queue. The maximum value of this variable is controlled by the RateLimits of the Queue. However, this value could be less to avoid overloading the endpoints tasks in the queue are targeting.
Methods
create
Creates a queue.
delete
Deletes a queue.
get
Gets a queue.
getIamPolicy
Gets the access control policy for a Queue .
list
Lists queues.
patch
Updates a queue.
pause
Pauses the queue.
purge
Purges a queue by deleting all of its tasks.
resume
Resume a queue.
setIamPolicy
Sets the access control policy for a Queue .
testIamPermissions
Returns permissions that a caller has on a Queue .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-14 UTC."],[],[]]
