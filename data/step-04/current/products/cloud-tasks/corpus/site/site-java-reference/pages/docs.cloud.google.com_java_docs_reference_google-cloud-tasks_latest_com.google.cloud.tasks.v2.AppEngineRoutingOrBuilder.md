---
title: "Interface AppEngineRoutingOrBuilder (2.88.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.AppEngineRoutingOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-tasks/latest/com.google.cloud.tasks.v2.AppEngineRoutingOrBuilder
  title: "Interface AppEngineRoutingOrBuilder (2.88.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface AppEngineRoutingOrBuilder (2.88.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.88.0 (latest)
2.87.0
2.85.0
2.83.0
2.82.0
2.80.0
2.78.0
2.76.0
2.75.0
2.74.0
2.73.0
2.72.0
2.70.0
2.68.0
2.67.0
2.64.0
2.63.0
2.62.0
2.60.0
2.59.0
2.58.0
2.57.0
2.56.0
2.55.0
2.54.0
2.53.0
2.52.0
2.51.0
2.49.0
2.48.0
2.47.0
2.46.0
2.45.0
2.44.0
2.43.0
2.42.0
2.41.0
2.40.0
2.39.0
2.37.0
2.36.0
2.35.0
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.0
2.28.0
2.27.0
2.24.0
2.23.0
2.22.0
2.21.0
2.20.0
2.19.0
2.18.0
2.17.0
2.16.0
2.15.0
2.14.0
2.13.0
2.12.0
2.11.0
2.9.0
2.8.0
2.7.0
2.6.0
2.5.0
2.4.0
2.3.12
2.2.0
2.1.11
public interface AppEngineRoutingOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getHost()
public abstract String getHost ()
Output only. The host that the task is sent to.
The host is constructed from the domain name of the app associated with
the queue's project ID (for example <app-id>.appspot.com), and the
service ,
version , and
instance . Tasks which
were created using the App Engine SDK might have a custom domain name.
For more information, see
How Requests are
Routed .
string host = 4;
Returns
Type
Description
String
The host.
getHostBytes()
public abstract ByteString getHostBytes ()
Output only. The host that the task is sent to.
The host is constructed from the domain name of the app associated with
the queue's project ID (for example <app-id>.appspot.com), and the
service ,
version , and
instance . Tasks which
were created using the App Engine SDK might have a custom domain name.
For more information, see
How Requests are
Routed .
string host = 4;
Returns
Type
Description
ByteString
The bytes for host.
getInstance()
public abstract String getInstance ()
App instance.
By default, the task is sent to an instance which is available when
the task is attempted.
Requests can only be sent to a specific instance if
manual scaling is used in App Engine
Standard .
App Engine Flex does not support instances. For more information, see
App Engine Standard request
routing
and App Engine Flex request
routing .
string instance = 3;
Returns
Type
Description
String
The instance.
getInstanceBytes()
public abstract ByteString getInstanceBytes ()
App instance.
By default, the task is sent to an instance which is available when
the task is attempted.
Requests can only be sent to a specific instance if
manual scaling is used in App Engine
Standard .
App Engine Flex does not support instances. For more information, see
App Engine Standard request
routing
and App Engine Flex request
routing .
string instance = 3;
Returns
Type
Description
ByteString
The bytes for instance.
getService()
public abstract String getService ()
App service.
By default, the task is sent to the service which is the default
service when the task is attempted.
For some queues or tasks which were created using the App Engine
Task Queue API, host is not
parsable into service ,
version , and
instance . For example,
some tasks which were created using the App Engine SDK use a custom domain
name; custom domains are not parsed by Cloud Tasks. If
host is not parsable, then
service ,
version , and
instance are the empty
string.
string service = 1;
Returns
Type
Description
String
The service.
getServiceBytes()
public abstract ByteString getServiceBytes ()
App service.
By default, the task is sent to the service which is the default
service when the task is attempted.
For some queues or tasks which were created using the App Engine
Task Queue API, host is not
parsable into service ,
version , and
instance . For example,
some tasks which were created using the App Engine SDK use a custom domain
name; custom domains are not parsed by Cloud Tasks. If
host is not parsable, then
service ,
version , and
instance are the empty
string.
string service = 1;
Returns
Type
Description
ByteString
The bytes for service.
getVersion()
public abstract String getVersion ()
App version.
By default, the task is sent to the version which is the default
version when the task is attempted.
For some queues or tasks which were created using the App Engine
Task Queue API, host is not
parsable into service ,
version , and
instance . For example,
some tasks which were created using the App Engine SDK use a custom domain
name; custom domains are not parsed by Cloud Tasks. If
host is not parsable, then
service ,
version , and
instance are the empty
string.
string version = 2;
Returns
Type
Description
String
The version.
getVersionBytes()
public abstract ByteString getVersionBytes ()
App version.
By default, the task is sent to the version which is the default
version when the task is attempted.
For some queues or tasks which were created using the App Engine
Task Queue API, host is not
parsable into service ,
version , and
instance . For example,
some tasks which were created using the App Engine SDK use a custom domain
name; custom domains are not parsed by Cloud Tasks. If
host is not parsable, then
service ,
version , and
instance are the empty
string.
string version = 2;
Returns
Type
Description
ByteString
The bytes for version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
