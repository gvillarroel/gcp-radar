---
title: "Google.Cloud.AlloyDb.V1Alpha \_|\_ .NET client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Alpha/latest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Profiler.V2/latest/Google.Cloud.Profiler.V2?skip_cache=true
source_metadata:
  url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Alpha/latest
  title: "Google.Cloud.AlloyDb.V1Alpha \_|\_ .NET client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Google.Cloud.AlloyDb.V1Alpha
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.0.0-alpha16 (latest)
1.0.0-alpha15
Google.Cloud.AlloyDb.V1Alpha is a.NET client library for the AlloyDB API .
Note:
This documentation is for version 1.0.0-alpha16 of the library.
Some samples may not work with other versions.
Installation
Install the Google.Cloud.AlloyDb.V1Alpha package from NuGet. Add it to
your project in the normal way (for example by right-clicking on the
project in Visual Studio and choosing "Manage NuGet Packages...").
Please ensure you enable pre-release packages (for example, in the
Visual Studio NuGet user interface, check the "Include prerelease"
box). Some of the following samples might only work with the latest
pre-release version ( 1.0.0-alpha16 ) of Google.Cloud.AlloyDb.V1Alpha .
Authentication
When running on Google Cloud, no action needs to be taken to authenticate.
Otherwise, the simplest way of authenticating your API calls is to
set up Application Default Credentials.
The credentials will automatically be used to authenticate. See
Set up Application Default Credentials for more details.
Getting started
All operations are performed through the following client classes:
AlloyDBAdminClient
AlloyDBCSQLAdminClient
Create a client instance by calling the static Create or CreateAsync methods. Alternatively,
use the builder class associated with each client class (e.g. AlloyDBAdminClientBuilder for AlloyDBAdminClient)
as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe,
and we recommend using a single instance across your entire application unless you have a particular need
to configure multiple client objects separately.
Using the REST (HTTP/1.1) transport
This library defaults to performing RPCs using gRPC using the binary Protocol Buffer wire format.
However, it also supports HTTP/1.1 and JSON, for situations where gRPC doesn't work as desired. (This is typically due to an incompatible proxy
or other network issue.) To create a client using HTTP/1.1, specify a RestGrpcAdapter reference for the GrpcAdapter property in the client builder.
Sample code:
var client = new AlloyDBAdminClientBuilder
{
GrpcAdapter = RestGrpcAdapter.Default
}.Build();
For more details, see the transport selection page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
