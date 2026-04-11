---
title: "Class AppEngineRouting (2.22.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.AppEngineRouting
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudtasks/latest/google.cloud.tasks_v2.types.AppEngineRouting
  title: "Class AppEngineRouting (2.22.0) \_|\_ Python client libraries \_|\_ Google\
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
Class AppEngineRouting (2.22.0)
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
AppEngineRouting ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
App Engine Routing.
Defines routing characteristics specific to App Engine - service,
version, and instance.
For more information about services, versions, and instances see An
Overview of App
Engine <https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine> ,
Microservices Architecture on Google App
Engine <https://cloud.google.com/appengine/docs/python/microservices-on-app-engine> ,
App Engine Standard request
routing <https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed> ,
and App Engine Flex request
routing <https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed> .
Using AppEngineRouting
requires
`appengine.applications.get https://cloud.google.com/appengine/docs/admin-api/access-control `__
Google IAM permission for the project and the following scope:
https://www.googleapis.com/auth/cloud-platform
Attributes
Name
Description
service
str
App service.
By default, the task is sent to the service which is the
default service when the task is attempted.
For some queues or tasks which were created using the App
Engine Task Queue API,
host is not
parsable into
service ,
version ,
and
instance .
For example, some tasks which were created using the App
Engine SDK use a custom domain name; custom domains are not
parsed by Cloud Tasks. If
host is not
parsable, then
service ,
version ,
and
instance
are the empty string.
version
str
App version.
By default, the task is sent to the version which is the
default version when the task is attempted.
For some queues or tasks which were created using the App
Engine Task Queue API,
host is not
parsable into
service ,
version ,
and
instance .
For example, some tasks which were created using the App
Engine SDK use a custom domain name; custom domains are not
parsed by Cloud Tasks. If
host is not
parsable, then
service ,
version ,
and
instance
are the empty string.
instance
str
App instance.
By default, the task is sent to an instance which is
available when the task is attempted.
Requests can only be sent to a specific instance if `manual
scaling is used in App Engine
Standard
host
str
Output only. The host that the task is sent to.
The host is constructed from the domain name of the app
associated with the queue's project ID (for example
.appspot.com), and the
service ,
version ,
and
instance .
Tasks which were created using the App Engine SDK might have
a custom domain name.
For more information, see `How Requests are
Routed
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
