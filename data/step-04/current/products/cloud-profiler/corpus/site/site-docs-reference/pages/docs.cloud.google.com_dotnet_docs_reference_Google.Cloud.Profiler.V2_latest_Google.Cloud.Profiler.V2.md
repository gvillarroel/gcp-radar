---
title: "Cloud Profiler v2 API - Namespace Google.Cloud.Profiler.V2 (2.7.0) \_|\_ .NET\
  \ client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Profiler.V2/latest/Google.Cloud.Profiler.V2
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Profiler.V2/latest/Google.Cloud.Profiler.V2?skip_cache=true
source_metadata:
  url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Profiler.V2/latest/Google.Cloud.Profiler.V2
  title: "Cloud Profiler v2 API - Namespace Google.Cloud.Profiler.V2 (2.7.0) \_|\_\
    \ .NET client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
.NET
Client libraries
Send feedback
Cloud Profiler v2 API - Namespace Google.Cloud.Profiler.V2 (2.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.7.0 (latest)
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.2.0
1.1.0
1.0.0
Classes
CreateOfflineProfileRequest
CreateOfflineProfileRequest describes a profile resource offline creation
request.
CreateProfileRequest
CreateProfileRequest describes a profile resource online creation request.
The deployment field must be populated. The profile_type specifies the list
of profile types supported by the agent. The creation call will hang until a
profile of one of these types needs to be collected.
Deployment
Deployment contains the deployment identification information.
ExportService
Service allows existing Cloud Profiler customers to export their profile data
out of Google Cloud.
ExportService.ExportServiceBase
Base class for server-side implementations of ExportService
ExportService.ExportServiceClient
Client for ExportService
ExportServiceClient
ExportService client wrapper, for convenient use.
ExportServiceClientBuilder
Builder class for ExportServiceClient to provide simple configuration of credentials, endpoint
etc.
ExportServiceClientImpl
ExportService client wrapper implementation, for convenient use.
ExportServiceSettings
Settings for ExportServiceClient instances.
ListProfilesRequest
ListProfilesRequest contains request parameters for listing profiles for
deployments in projects which the user has permissions to view.
ListProfilesResponse
ListProfileResponse contains the list of collected profiles for deployments
in projects which the user has permissions to view.
Profile
Profile resource.
ProfileName
Resource name for the Profile resource.
ProfilerService
Manage the collection of continuous profiling data provided by profiling
agents running in the cloud or by an offline provider of profiling data.
The APIs listed in this service are intended for use within our profiler
agents only.
ProfilerService.ProfilerServiceBase
Base class for server-side implementations of ProfilerService
ProfilerService.ProfilerServiceClient
Client for ProfilerService
ProfilerServiceClient
ProfilerService client wrapper, for convenient use.
ProfilerServiceClientBuilder
Builder class for ProfilerServiceClient to provide simple configuration of credentials, endpoint
etc.
ProfilerServiceClientImpl
ProfilerService client wrapper implementation, for convenient use.
ProfilerServiceSettings
Settings for ProfilerServiceClient instances.
UpdateProfileRequest
UpdateProfileRequest contains the profile to update.
Enums
ProfileName.ResourceNameType
The possible contents of ProfileName .
ProfileType
ProfileType is type of profiling data.
NOTE: the enumeration member names are used (in lowercase) as unique string
identifiers of profile types, so they must not be renamed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
