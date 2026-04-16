---
title: "AppEngineRouting \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2/AppEngineRouting
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/reference/rest/v2/AppEngineRouting
  title: "AppEngineRouting \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
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
AppEngineRouting
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
App Engine Routing.
Defines routing characteristics specific to App Engine - service, version, and instance.
For more information about services, versions, and instances see An Overview of App Engine , Microservices Architecture on Google App Engine , App Engine Standard request routing , and App Engine Flex request routing .
Using AppEngineRouting requires appengine.applications.get Google IAM permission for the project and the following scope:
https://www.googleapis.com/auth/cloud-platform
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
By default, the task is sent to the service which is the default service when the task is attempted.
For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service , version , and instance . For example, some tasks which were created using the App Engine SDK use a custom domain name; custom domains are not parsed by Cloud Tasks. If host is not parsable, then service , version , and instance are the empty string.
version
string
App version.
By default, the task is sent to the version which is the default version when the task is attempted.
For some queues or tasks which were created using the App Engine Task Queue API, host is not parsable into service , version , and instance . For example, some tasks which were created using the App Engine SDK use a custom domain name; custom domains are not parsed by Cloud Tasks. If host is not parsable, then service , version , and instance are the empty string.
instance
string
App instance.
By default, the task is sent to an instance which is available when the task is attempted.
Requests can only be sent to a specific instance if manual scaling is used in App Engine Standard . App Engine Flex does not support instances. For more information, see App Engine Standard request routing and App Engine Flex request routing .
host
string
Output only. The host that the task is sent to.
The host is constructed from the domain name of the app associated with the queue's project ID (for example .appspot.com), and the service , version , and instance . Tasks which were created using the App Engine SDK might have a custom domain name.
For more information, see How Requests are Routed .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
