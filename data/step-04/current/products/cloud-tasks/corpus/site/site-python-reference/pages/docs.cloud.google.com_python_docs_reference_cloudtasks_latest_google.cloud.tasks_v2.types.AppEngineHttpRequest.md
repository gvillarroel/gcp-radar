---
title: "Class AppEngineHttpRequest (2.22.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.AppEngineHttpRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.AppEngineHttpRequest
  title: "Class AppEngineHttpRequest (2.22.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AppEngineHttpRequest (2.22.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.22.0 (latest)
2.21.0
2.20.0
2.19.3
2.18.0
2.17.1
2.16.5
2.15.1
2.14.2
2.13.2
2.12.1
2.11.0
2.10.4
2.9.1
2.8.1
2.7.2
2.6.0
2.5.3
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.5.2
1.4.0
1.3.0
1.2.1
AppEngineHttpRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
App Engine HTTP request.
The message defines the HTTP request that is sent to an App Engine
app when the task is dispatched.
Using
AppEngineHttpRequest
requires
`appengine.applications.get https://cloud.google.com/appengine/docs/admin-api/access-control `__
Google IAM permission for the project and the following scope:
https://www.googleapis.com/auth/cloud-platform
The task will be delivered to the App Engine app which belongs to
the same project as the queue. For more information, see How
Requests are
Routed <https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed>
and how routing is affected by dispatch
files <https://cloud.google.com/appengine/docs/python/config/dispatchref> .
Traffic is encrypted during transport and never leaves Google
datacenters. Because this traffic is carried over a communication
mechanism internal to Google, you cannot explicitly set the protocol
(for example, HTTP or HTTPS). The request to the handler, however,
will appear to have used the HTTP protocol.
The AppEngineRouting used
to construct the URL that the task is delivered to can be set at the
queue-level or task-level:
If [app_engine_routing_override is set on the
queue][google.cloud.tasks.v2.Queue.app_engine_routing_override],
this value is used for all tasks in the queue, no matter what the
setting is for the [task-level
app_engine_routing][google.cloud.tasks.v2.AppEngineHttpRequest.app_engine_routing].
The url that the task will be sent to is:
url = host
+
relative_uri
Tasks can be dispatched to secure app handlers, unsecure app
handlers, and URIs restricted with
login: admin`` <https://cloud.google.com/appengine/docs/standard/python/config/appref>`__.
Because tasks are not run as any user, they cannot be dispatched to
URIs restricted with login: required ` <https://cloud.google.com/appengine/docs/standard/python/config/appref> __
Task dispatches also do not follow redirects.
The task attempt has succeeded if the app's request handler returns
an HTTP response code in the range [ 200 - 299 ]. The task
attempt has failed if the app's handler returns a non-2xx response
code or Cloud Tasks does not receive response before the
deadline . Failed
tasks will be retried according to the [retry
configuration][google.cloud.tasks.v2.Queue.retry_config]. 503
(Service Unavailable) is considered an App Engine system error
instead of an application error and will cause Cloud Tasks' traffic
congestion control to temporarily throttle the queue's dispatches.
Unlike other types of task targets, a 429 (Too Many Requests)
response from an app handler does not cause traffic congestion
control to throttle the queue.
Attributes
Name
Description
http_method
google.cloud.tasks_v2.types.HttpMethod
The HTTP method to use for the request. The default is POST.
The app's request handler for the task's target URL must be
able to handle HTTP requests with this http_method,
otherwise the task attempt fails with error code 405 (Method
Not Allowed). See `Writing a push task request
handler
app_engine_routing
google.cloud.tasks_v2.types.AppEngineRouting
Task-level setting for App Engine routing.
- If [app_engine_routing_override is set on the
queue][google.cloud.tasks.v2.Queue.app_engine_routing_override],
this value is used for all tasks in the queue, no matter
what the setting is for the [task-level
app_engine_routing][google.cloud.tasks.v2.AppEngineHttpRequest.app_engine_routing].
relative_uri
str
The relative URI.
The relative URI must begin with "/" and must be
a valid HTTP relative URI. It can contain a path
and query string arguments. If the relative URI
is empty, then the root path "/" will be used.
No spaces are allowed, and the maximum length
allowed is 2083 characters.
headers
MutableMapping[str, str]
HTTP request headers.
This map contains the header field names and values. Headers
can be set when the [task is
created][google.cloud.tasks.v2.CloudTasks.CreateTask].
Repeated headers are not supported but a header value can
contain commas.
Cloud Tasks sets some headers to default values:
- User-Agent : By default, this header is
"AppEngine-Google; (+http://code.google.com/appengine)" .
This header can be modified, but Cloud Tasks will append
"AppEngine-Google; (+http://code.google.com/appengine)"
to the modified User-Agent .
If the task has a
body ,
Cloud Tasks sets the following headers:
- Content-Type : By default, the Content-Type header
is set to "application/octet-stream" . The default can
be overridden by explicitly setting Content-Type to a
particular media type when the [task is
created][google.cloud.tasks.v2.CloudTasks.CreateTask]. For
example, Content-Type can be set to
"application/json" .
- Content-Length : This is computed by Cloud Tasks. This
value is output only. It cannot be changed.
The headers below cannot be set or overridden:
- Host
- X-Google-*
- X-AppEngine-*
In addition, Cloud Tasks sets some headers when the task is
dispatched, such as headers containing information about the
task; see `request
headers
body
bytes
HTTP request body.
A request body is allowed only if the HTTP method is POST or
PUT. It is an error to set a body on a task with an
incompatible HttpMethod .
Classes
HeadersEntry
HeadersEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
