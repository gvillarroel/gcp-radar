---
title: "Class HttpTarget (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.HttpTarget
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.HttpTarget
  title: "Class HttpTarget (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class HttpTarget (2.19.0)
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
HttpTarget ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Http target. The job will be pushed to the job handler by means of
an HTTP request via an
http_method such
as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an
HTTP response code in the range [200 - 299]. A failure to receive a
response constitutes a failed execution. For a redirected request,
the response returned by the redirected request is considered.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
uri
str
Required. The full URI path that the request will be sent
to. This string must begin with either "http://" or
"https://". Some examples of valid values for
uri are:
http://acme.com and https://acme.com/sales:8080 .
Cloud Scheduler will encode some characters for safety and
compatibility. The maximum allowed URL length is 2083
characters after encoding.
http_method
google.cloud.scheduler_v1.types.HttpMethod
Which HTTP method to use for the request.
headers
MutableMapping[str, str]
HTTP request headers.
This map contains the header field names and values.
The user can specify HTTP request headers to send with the
job's HTTP request. Repeated headers are not supported, but
a header value can contain commas.
The following headers represent a subset of the headers that
accompany the job's HTTP request. Some HTTP request headers
are ignored or replaced. A partial list of headers that are
ignored or replaced is below:
- Host: This will be computed by Cloud Scheduler and derived
from uri .
- Content-Length : This will be computed by Cloud
Scheduler.
- User-Agent : This will be set to
"Google-Cloud-Scheduler" .
- X-Google-* : Google internal use only.
- X-AppEngine-* : Google internal use only.
- X-CloudScheduler : This header will be set to true.
- X-CloudScheduler-JobName : This header will contain the
job name.
- X-CloudScheduler-ScheduleTime : For Cloud Scheduler
jobs specified in the unix-cron format, this header will
contain the job schedule as an offset of UTC parsed
according to RFC3339.
If the job has a
body and the
following headers are not set by the user, Cloud Scheduler
sets default values:
- Content-Type : This will be set to
"application/octet-stream" . You can override this
default by explicitly setting Content-Type to a
particular media type when creating the job. For example,
you can set Content-Type to "application/json" .
The total size of headers must be less than 80KB.
body
bytes
HTTP request body. A request body is allowed only if the
HTTP method is POST, PUT, or PATCH. It is an error to set
body on a job with an incompatible
HttpMethod .
oauth_token
google.cloud.scheduler_v1.types.OAuthToken
If specified, an `OAuth
token
oidc_token
google.cloud.scheduler_v1.types.OidcToken
If specified, an
OIDC __
token will be generated and attached as an Authorization
header in the HTTP request.
This type of authorization can be used for many scenarios,
including calling Cloud Run, or endpoints where you intend
to validate the token yourself.
This field is a member of oneof _ authorization_header .
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
