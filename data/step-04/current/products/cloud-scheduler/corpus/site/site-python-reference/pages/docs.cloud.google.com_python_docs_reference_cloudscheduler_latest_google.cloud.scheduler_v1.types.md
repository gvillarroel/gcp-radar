---
title: "Package types (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types
  title: "Package types (2.19.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (2.19.0)
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
API documentation for scheduler_v1.types package.
Classes
AppEngineHttpTarget
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
AppEngineRouting
App Engine Routing.
For more information about services, versions, and instances see An
Overview of App
Engine <https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine> ,
Microservices Architecture on Google App
Engine <https://cloud.google.com/appengine/docs/python/microservices-on-app-engine> ,
App Engine Standard request
routing <https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed> ,
and App Engine Flex request
routing <https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed> .
CreateJobRequest
Request message for
CreateJob .
DeleteJobRequest
Request message for deleting a job using
DeleteJob .
GetJobRequest
Request message for
GetJob .
HttpMethod
The HTTP method used to execute the job.
HttpTarget
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
Job
Configuration for a job.
The maximum allowed size for a job is 1MB.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ListJobsRequest
Request message for listing jobs using
ListJobs .
ListJobsResponse
Response message for listing jobs using
ListJobs .
OAuthToken
Contains information needed for generating an OAuth
token <https://developers.google.com/identity/protocols/OAuth2> __.
This type of authorization should generally only be used when
calling Google APIs hosted on *.googleapis.com.
OidcToken
Contains information needed for generating an OpenID Connect
token <https://developers.google.com/identity/protocols/OpenIDConnect> __.
This type of authorization can be used for many scenarios, including
calling Cloud Run, or endpoints where you intend to validate the
token yourself.
PauseJobRequest
Request message for
PauseJob .
PubsubTarget
Pub/Sub target. The job will be delivered by publishing a
message to the given Pub/Sub topic.
ResumeJobRequest
Request message for
ResumeJob .
RetryConfig
Settings that determine the retry behavior.
By default, if a job does not complete successfully (meaning that an
acknowledgement is not received from the handler, then it will be
retried with exponential backoff according to the settings in
RetryConfig .
RunJobRequest
Request message for forcing a job to run now using
RunJob .
UpdateJobRequest
Request message for
UpdateJob .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
