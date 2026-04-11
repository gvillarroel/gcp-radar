---
title: "Package com.google.devtools.cloudprofiler.v2 (2.88.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2
  title: "Package com.google.devtools.cloudprofiler.v2 (2.88.0) \_|\_ Java client\
    \ libraries \_|\_ Google Cloud Documentation"
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
Package com.google.devtools.cloudprofiler.v2 (2.88.0)
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
2.3.5
2.2.0
2.1.10
GitHub Repository
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. devtools. cloudprofiler. v2. Export Service Client
Service Description: Service allows existing Cloud Profiler customers to export their profile
data out of Google Cloud.
This class provides the ability to make remote calls to the backing service through method
com. google. devtools. cloudprofiler. v2. Profiler Service Client
Service Description: Manage the collection of continuous profiling data provided by profiling
agents running in the cloud or by an offline provider of profiling data.
The APIs listed in this service are intended for use within our profiler agents only.
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. devtools. cloudprofiler. v2. Export Service Settings
Settings class to configure an instance of ExportServiceClient .
The default instance has everything set to sensible defaults:
com. google. devtools. cloudprofiler. v2. Profiler Service Settings
Settings class to configure an instance of ProfilerServiceClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. devtools. cloudprofiler. v2. Create Offline Profile Request
CreateOfflineProfileRequest describes a profile resource offline creation
request.
com. google. devtools. cloudprofiler. v2. Create Offline Profile Request. Builder
CreateOfflineProfileRequest describes a profile resource offline creation
request.
com. google. devtools. cloudprofiler. v2. Create Profile Request
CreateProfileRequest describes a profile resource online creation request.
The deployment field must be populated. The profile_type specifies the list
of profile types supported by the agent. The creation call will hang until a
com. google. devtools. cloudprofiler. v2. Create Profile Request. Builder
CreateProfileRequest describes a profile resource online creation request.
The deployment field must be populated. The profile_type specifies the list
of profile types supported by the agent. The creation call will hang until a
com. google. devtools. cloudprofiler. v2. Deployment
Deployment contains the deployment identification information.
com. google. devtools. cloudprofiler. v2. Deployment. Builder
Deployment contains the deployment identification information.
com. google. devtools. cloudprofiler. v2. Export Service Client. List Profiles Fixed Size Collection
com. google. devtools. cloudprofiler. v2. Export Service Client. List Profiles Page
com. google. devtools. cloudprofiler. v2. Export Service Client. List Profiles Paged Response
com. google. devtools. cloudprofiler. v2. Export Service Grpc
Service allows existing Cloud Profiler customers to export their profile data
out of Google Cloud.
com. google. devtools. cloudprofiler. v2. Export Service Grpc. Export Service Impl Base
Base class for the server implementation of the service ExportService.
Service allows existing Cloud Profiler customers to export their profile data
com. google. devtools. cloudprofiler. v2. Export Service Settings. Builder
Builder for ExportServiceSettings.
com. google. devtools. cloudprofiler. v2. List Profiles Request
ListProfilesRequest contains request parameters for listing profiles for
deployments in projects which the user has permissions to view.
com. google. devtools. cloudprofiler. v2. List Profiles Request. Builder
ListProfilesRequest contains request parameters for listing profiles for
deployments in projects which the user has permissions to view.
com. google. devtools. cloudprofiler. v2. List Profiles Response
ListProfileResponse contains the list of collected profiles for deployments
in projects which the user has permissions to view.
com. google. devtools. cloudprofiler. v2. List Profiles Response. Builder
ListProfileResponse contains the list of collected profiles for deployments
in projects which the user has permissions to view.
com. google. devtools. cloudprofiler. v2. Profile
Profile resource.
com. google. devtools. cloudprofiler. v2. Profile. Builder
Profile resource.
com. google. devtools. cloudprofiler. v2. Profiler Proto
com. google. devtools. cloudprofiler. v2. Profiler Service Grpc
Manage the collection of continuous profiling data provided by profiling
agents running in the cloud or by an offline provider of profiling data.
__The APIs listed in this service are intended for use within our profiler
com. google. devtools. cloudprofiler. v2. Profiler Service Grpc. Profiler Service Impl Base
Base class for the server implementation of the service ProfilerService.
Manage the collection of continuous profiling data provided by profiling
com. google. devtools. cloudprofiler. v2. Profiler Service Settings. Builder
Builder for ProfilerServiceSettings.
com. google. devtools. cloudprofiler. v2. Project Name
com. google. devtools. cloudprofiler. v2. Project Name. Builder
Builder for projects/{project}.
com. google. devtools. cloudprofiler. v2. Update Profile Request
UpdateProfileRequest contains the profile to update.
com. google. devtools. cloudprofiler. v2. Update Profile Request. Builder
UpdateProfileRequest contains the profile to update.
Interfaces
Interface
Description
com. google. devtools. cloudprofiler. v2. Create Offline Profile Request Or Builder
com. google. devtools. cloudprofiler. v2. Create Profile Request Or Builder
com. google. devtools. cloudprofiler. v2. Deployment Or Builder
com. google. devtools. cloudprofiler. v2. Export Service Grpc. Async Service
Service allows existing Cloud Profiler customers to export their profile data
out of Google Cloud.
com. google. devtools. cloudprofiler. v2. List Profiles Request Or Builder
com. google. devtools. cloudprofiler. v2. List Profiles Response Or Builder
com. google. devtools. cloudprofiler. v2. Profile Or Builder
com. google. devtools. cloudprofiler. v2. Profiler Service Grpc. Async Service
Manage the collection of continuous profiling data provided by profiling
agents running in the cloud or by an offline provider of profiling data.
__The APIs listed in this service are intended for use within our profiler
com. google. devtools. cloudprofiler. v2. Update Profile Request Or Builder
Enums
Enum
Description
com. google. devtools. cloudprofiler. v2. Profile Type
ProfileType is type of profiling data.
NOTE: the enumeration member names are used (in lowercase) as unique string
identifiers of profile types, so they must not be renamed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
