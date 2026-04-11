---
title: "Class AppEngineRouting (2.19.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineRouting
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudscheduler/latest/google.cloud.scheduler_v1.types.AppEngineRouting
  title: "Class AppEngineRouting (2.19.0) \_|\_ Python client libraries \_|\_ Google\
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
Class AppEngineRouting (2.19.0)
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
AppEngineRouting ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
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
Attributes
Name
Description
service
str
App service.
By default, the job is sent to the service which
is the default service when the job is
attempted.
version
str
App version.
By default, the job is sent to the version which
is the default version when the job is
attempted.
instance
str
App instance.
By default, the job is sent to an instance which is
available when the job is attempted.
Requests can only be sent to a specific instance if `manual
scaling is used in App Engine
Standard
host
str
Output only. The host that the job is sent to.
For more information about how App Engine requests are
routed, see
here __.
The host is constructed as:
- host = [application_domain_name] \
| [service] + '.' + [application_domain_name] \
| [version] + '.' + [application_domain_name] \
| [version_dot_service]+ '.' + [application_domain_name] \
| [instance] + '.' + [application_domain_name] \
| [instance_dot_service] + '.' + [application_domain_name] \
| [instance_dot_version] + '.' + [application_domain_name] \
| [instance_dot_version_dot_service] + '.' + [application_domain_name]
- application_domain_name = The domain name of the app,
for example .appspot.com, which is associated with the
job's project ID.
- service =
service
- version =
version
- version_dot_service =
version
+ '.' +
service
- instance =
instance
- instance_dot_service =
instance
+ '.' +
service
- instance_dot_version =
instance
+ '.' +
version
- instance_dot_version_dot_service =
instance
+ '.' +
version
+ '.' +
service
If
service
is empty, then the job will be sent to the service which is
the default service when the job is attempted.
If
version
is empty, then the job will be sent to the version which is
the default version when the job is attempted.
If
instance
is empty, then the job will be sent to an instance which is
available when the job is attempted.
If
service ,
version ,
or
instance
is invalid, then the job will be sent to the default version
of the default service when the job is attempted.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
