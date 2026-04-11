---
title: "Package com.google.devtools.clouderrorreporting.v1beta1 (0.209.0-beta) \_\
  |\_ Java client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-errorreporting/latest/com.google.devtools.clouderrorreporting.v1beta1
  title: "Package com.google.devtools.clouderrorreporting.v1beta1 (0.209.0-beta) \_\
    |\_ Java client libraries \_|\_ Google Cloud Documentation"
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
Package com.google.devtools.clouderrorreporting.v1beta1 (0.209.0-beta)
Stay organized with collections
Save and categorize content based on your preferences.
0.209.0-beta (latest)
0.208.0-beta
0.206.0-beta
0.204.0-beta
0.203.0-beta
0.202.0-beta
0.201.0-beta
0.199.0-beta
0.197.0-beta
0.196.0-beta
0.195.0-beta
0.194.0-beta
0.193.0-beta
0.191.0-beta
0.189.0-beta
0.188.0-beta
0.185.0-beta
0.184.0-beta
0.183.0-beta
0.181.0-beta
0.180.0-beta
0.179.0-beta
0.178.0-beta
0.177.0-beta
0.176.0-beta
0.175.0-beta
0.174.0-beta
0.173.0-beta
0.172.0-beta
0.170.0-beta
0.169.0-beta
0.168.0-beta
0.167.0-beta
0.166.0-beta
0.165.0-beta
0.164.0-beta
0.163.0-beta
0.162.0-beta
0.161.0-beta
0.160.0-beta
0.158.0-beta
0.157.0-beta
0.156.0-beta
0.155.0-beta
0.154.0-beta
0.153.0-beta
0.152.0-beta
0.151.0-beta
0.150.0-beta
0.149.0-beta
0.148.0-beta
0.145.0-beta
0.144.0-beta
0.143.0-beta
0.142.0-beta
0.141.0-beta
0.140.0-beta
0.139.0-beta
0.138.0-beta
0.137.0-beta
0.136.0-beta
0.135.0-beta
0.134.0-beta
0.133.0-beta
0.132.0-beta
0.130.0-beta
0.129.0-beta
0.128.0-beta
0.127.0-beta
0.126.0-beta
0.125.0-beta
0.124.15-beta
0.123.4-beta
0.122.23-beta
GitHub Repository
Prerelease Implications
This package is a prerelease version! Use with caution.
Prerelease versions are considered unstable as they may be shut down and/or subject to breaking changes when upgrading.
Use them only for testing or if you specifically need their experimental features.
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Client
Service Description: Service for retrieving and updating individual error groups.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client
Service Description: An API for retrieving and managing error statistics as well as data for
individual events.
This class provides the ability to make remote calls to the backing service through method
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Client
Service Description: An API for reporting error events.
This class provides the ability to make remote calls to the backing service through method
calls that map to API methods. Sample code to get started:
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Settings
Settings class to configure an instance of ErrorGroupServiceClient .
The default instance has everything set to sensible defaults:
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Settings
Settings class to configure an instance of ErrorStatsServiceClient .
The default instance has everything set to sensible defaults:
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Settings
Settings class to configure an instance of ReportErrorsServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. devtools. clouderrorreporting. v1beta1. Common Proto
com. google. devtools. clouderrorreporting. v1beta1. Delete Events Request
Deletes all events in the project.
com. google. devtools. clouderrorreporting. v1beta1. Delete Events Request. Builder
Deletes all events in the project.
com. google. devtools. clouderrorreporting. v1beta1. Delete Events Response
Response message for deleting error events.
com. google. devtools. clouderrorreporting. v1beta1. Delete Events Response. Builder
Response message for deleting error events.
com. google. devtools. clouderrorreporting. v1beta1. Error Context
A description of the context in which an error occurred.
This data should be provided by the application when reporting an error,
unless the
com. google. devtools. clouderrorreporting. v1beta1. Error Context. Builder
A description of the context in which an error occurred.
This data should be provided by the application when reporting an error,
unless the
com. google. devtools. clouderrorreporting. v1beta1. Error Event
An error event which is returned by the Error Reporting system.
com. google. devtools. clouderrorreporting. v1beta1. Error Event. Builder
An error event which is returned by the Error Reporting system.
com. google. devtools. clouderrorreporting. v1beta1. Error Group
Description of a group of similar error events.
com. google. devtools. clouderrorreporting. v1beta1. Error Group. Builder
Description of a group of similar error events.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Name
com. google. devtools. clouderrorreporting. v1beta1. Error Group Name. Builder
Builder for projects/{project}/groups/{group}.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Grpc
Service for retrieving and updating individual error groups.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Grpc. Error Group Service Impl Base
Base class for the server implementation of the service ErrorGroupService.
Service for retrieving and updating individual error groups.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Proto
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Settings. Builder
Builder for ErrorGroupServiceSettings.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Stats
Data extracted for a specific group based on certain filter criteria,
such as a given time period and/or service filter.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Stats. Builder
Data extracted for a specific group based on certain filter criteria,
such as a given time period and/or service filter.
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client. List Events Fixed Size Collection
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client. List Events Page
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client. List Events Paged Response
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client. List Group Stats Fixed Size Collection
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client. List Group Stats Page
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Client. List Group Stats Paged Response
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Grpc
An API for retrieving and managing error statistics as well as data for
individual events.
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Grpc. Error Stats Service Impl Base
Base class for the server implementation of the service ErrorStatsService.
An API for retrieving and managing error statistics as well as data for
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Proto
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Settings. Builder
Builder for ErrorStatsServiceSettings.
com. google. devtools. clouderrorreporting. v1beta1. Get Group Request
A request to return an individual group.
com. google. devtools. clouderrorreporting. v1beta1. Get Group Request. Builder
A request to return an individual group.
com. google. devtools. clouderrorreporting. v1beta1. Group Name
com. google. devtools. clouderrorreporting. v1beta1. Group Name. Builder
Builder for GroupName.
com. google. devtools. clouderrorreporting. v1beta1. Http Request Context
HTTP request data that is related to a reported error.
This data should be provided by the application when reporting an error,
unless the
com. google. devtools. clouderrorreporting. v1beta1. Http Request Context. Builder
HTTP request data that is related to a reported error.
This data should be provided by the application when reporting an error,
unless the
com. google. devtools. clouderrorreporting. v1beta1. List Events Request
Specifies a set of error events to return.
com. google. devtools. clouderrorreporting. v1beta1. List Events Request. Builder
Specifies a set of error events to return.
com. google. devtools. clouderrorreporting. v1beta1. List Events Response
Contains a set of requested error events.
com. google. devtools. clouderrorreporting. v1beta1. List Events Response. Builder
Contains a set of requested error events.
com. google. devtools. clouderrorreporting. v1beta1. List Group Stats Request
Specifies a set of ErrorGroupStats to return.
com. google. devtools. clouderrorreporting. v1beta1. List Group Stats Request. Builder
Specifies a set of ErrorGroupStats to return.
com. google. devtools. clouderrorreporting. v1beta1. List Group Stats Response
Contains a set of requested error group stats.
com. google. devtools. clouderrorreporting. v1beta1. List Group Stats Response. Builder
Contains a set of requested error group stats.
com. google. devtools. clouderrorreporting. v1beta1. Project Name
com. google. devtools. clouderrorreporting. v1beta1. Project Name. Builder
Builder for projects/{project}.
com. google. devtools. clouderrorreporting. v1beta1. Query Time Range
A time range for which error group data shall be displayed.
Query time ranges end at 'now'.
When longer time ranges are selected, the resolution of the data decreases.
com. google. devtools. clouderrorreporting. v1beta1. Query Time Range. Builder
A time range for which error group data shall be displayed.
Query time ranges end at 'now'.
When longer time ranges are selected, the resolution of the data decreases.
com. google. devtools. clouderrorreporting. v1beta1. Report Error Event Request
A request for reporting an individual error event.
com. google. devtools. clouderrorreporting. v1beta1. Report Error Event Request. Builder
A request for reporting an individual error event.
com. google. devtools. clouderrorreporting. v1beta1. Report Error Event Response
Response for reporting an individual error event.
Data may be added to this message in the future.
com. google. devtools. clouderrorreporting. v1beta1. Report Error Event Response. Builder
Response for reporting an individual error event.
Data may be added to this message in the future.
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Grpc
An API for reporting error events.
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Grpc. Report Errors Service Impl Base
Base class for the server implementation of the service ReportErrorsService.
An API for reporting error events.
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Proto
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Settings. Builder
Builder for ReportErrorsServiceSettings.
com. google. devtools. clouderrorreporting. v1beta1. Reported Error Event
An error event which is reported to the Error Reporting system.
com. google. devtools. clouderrorreporting. v1beta1. Reported Error Event. Builder
An error event which is reported to the Error Reporting system.
com. google. devtools. clouderrorreporting. v1beta1. Service Context
Describes a running service that sends errors.
Its version changes over time and multiple versions can run in parallel.
com. google. devtools. clouderrorreporting. v1beta1. Service Context. Builder
Describes a running service that sends errors.
Its version changes over time and multiple versions can run in parallel.
com. google. devtools. clouderrorreporting. v1beta1. Service Context Filter
Specifies criteria for filtering a subset of service contexts.
The fields in the filter correspond to the fields in ServiceContext .
Only exact, case-sensitive matches are supported.
com. google. devtools. clouderrorreporting. v1beta1. Service Context Filter. Builder
Specifies criteria for filtering a subset of service contexts.
The fields in the filter correspond to the fields in ServiceContext .
Only exact, case-sensitive matches are supported.
com. google. devtools. clouderrorreporting. v1beta1. Source Location
Indicates a location in the source code of the service for which errors are
reported. functionName must be provided by the application when reporting
an error, unless the error report contains a message with a supported
com. google. devtools. clouderrorreporting. v1beta1. Source Location. Builder
Indicates a location in the source code of the service for which errors are
reported. functionName must be provided by the application when reporting
an error, unless the error report contains a message with a supported
com. google. devtools. clouderrorreporting. v1beta1. Timed Count
The number of errors in a given time period.
All numbers are approximate since the error events are sampled
before counting them.
com. google. devtools. clouderrorreporting. v1beta1. Timed Count. Builder
The number of errors in a given time period.
All numbers are approximate since the error events are sampled
before counting them.
com. google. devtools. clouderrorreporting. v1beta1. Tracking Issue
Information related to tracking the progress on resolving the error.
com. google. devtools. clouderrorreporting. v1beta1. Tracking Issue. Builder
Information related to tracking the progress on resolving the error.
com. google. devtools. clouderrorreporting. v1beta1. Update Group Request
A request to replace the existing data for the given group.
com. google. devtools. clouderrorreporting. v1beta1. Update Group Request. Builder
A request to replace the existing data for the given group.
Interfaces
Interface
Description
com. google. devtools. clouderrorreporting. v1beta1. Delete Events Request Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Delete Events Response Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Error Context Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Error Event Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Error Group Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Error Group Service Grpc. Async Service
Service for retrieving and updating individual error groups.
com. google. devtools. clouderrorreporting. v1beta1. Error Group Stats Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Error Stats Service Grpc. Async Service
An API for retrieving and managing error statistics as well as data for
individual events.
com. google. devtools. clouderrorreporting. v1beta1. Get Group Request Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Http Request Context Or Builder
com. google. devtools. clouderrorreporting. v1beta1. List Events Request Or Builder
com. google. devtools. clouderrorreporting. v1beta1. List Events Response Or Builder
com. google. devtools. clouderrorreporting. v1beta1. List Group Stats Request Or Builder
com. google. devtools. clouderrorreporting. v1beta1. List Group Stats Response Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Query Time Range Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Report Error Event Request Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Report Error Event Response Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Report Errors Service Grpc. Async Service
An API for reporting error events.
com. google. devtools. clouderrorreporting. v1beta1. Reported Error Event Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Service Context Filter Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Service Context Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Source Location Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Timed Count Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Tracking Issue Or Builder
com. google. devtools. clouderrorreporting. v1beta1. Update Group Request Or Builder
Enums
Enum
Description
com. google. devtools. clouderrorreporting. v1beta1. Error Group Order
A sorting order of error groups.
com. google. devtools. clouderrorreporting. v1beta1. Query Time Range. Period
The supported time ranges.
com. google. devtools. clouderrorreporting. v1beta1. Resolution Status
Resolution status of an error group.
com. google. devtools. clouderrorreporting. v1beta1. Timed Count Alignment
Specifies how the time periods of error group counts are aligned.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
