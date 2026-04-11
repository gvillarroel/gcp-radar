---
title: "Class AppEngineHttpTarget (2.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineHttpTarget
  title: "Class AppEngineHttpTarget (2.19.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
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
Class AppEngineHttpTarget (2.19.0)
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
AppEngineHttpTarget ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
App Engine target. The job will be pushed to a job handler by means
of an HTTP request via an
http_method
such as HTTP POST, HTTP GET, etc. The job is acknowledged by means
of an HTTP response code in the range [200 - 299]. Error 503 is
considered an App Engine system error instead of an application
error. Requests returning error 503 will be retried regardless of
retry configuration and not counted against retry counts. Any other
response code, or a failure to receive a response before the
deadline, constitutes a failed attempt.
Attributes
Name
Description
http_method
google.cloud.scheduler_v1.types.HttpMethod
The HTTP method to use for the request. PATCH
and OPTIONS are not permitted.
app_engine_routing
google.cloud.scheduler_v1.types.AppEngineRouting
App Engine Routing setting for the job.
relative_uri
str
The relative URI.
The relative URL must begin with "/" and must be a valid
HTTP relative URL. It can contain a path, query string
arguments, and # fragments. If the relative URL is
empty, then the root path "/" will be used. No spaces are
allowed, and the maximum length allowed is 2083 characters.
headers
MutableMapping[str, str]
HTTP request headers.
This map contains the header field names and values. Headers
can be set when the job is created.
Cloud Scheduler sets some headers to default values:
- User-Agent : By default, this header is
"AppEngine-Google; (+http://code.google.com/appengine)" .
This header can be modified, but Cloud Scheduler will
append
"AppEngine-Google; (+http://code.google.com/appengine)"
to the modified User-Agent .
- X-CloudScheduler : This header will be set to true.
- X-CloudScheduler-JobName : This header will contain the
job name.
- X-CloudScheduler-ScheduleTime : For Cloud Scheduler
jobs specified in the unix-cron format, this header will
contain the job schedule as an offset of UTC parsed
according to RFC3339.
If the job has a
body
and the following headers are not set by the user, Cloud
Scheduler sets default values:
- Content-Type : This will be set to
"application/octet-stream" . You can override this
default by explicitly setting Content-Type to a
particular media type when creating the job. For example,
you can set Content-Type to "application/json" .
The headers below are output only. They cannot be set or
overridden:
- Content-Length : This is computed by Cloud Scheduler.
- X-Google-* : For Google internal use only.
- X-AppEngine-* : For Google internal use only.
In addition, some App Engine headers, which contain
job-specific information, are also be sent to the job
handler.
body
bytes
Body.
HTTP request body. A request body is allowed only if the
HTTP method is POST or PUT. It will result in invalid
argument error to set a body on a job with an incompatible
HttpMethod .
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
