---
title: ".NET client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/latest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.Profiler.V2/latest/Google.Cloud.Profiler.V2?skip_cache=true
source_metadata:
  url: https://docs.cloud.google.com/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/latest
  title: ".NET client libraries \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.5.0 (latest)
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.1.0
1.0.0
Google.Cloud.ApiGateway.V1
Google.Cloud.ApiGateway.V1 is a.NET client library for the API Gateway API .
Note:
This documentation is for version 2.5.0 of the library.
Some samples may not work with other versions.
Installation
Install the Google.Cloud.ApiGateway.V1 package from NuGet. Add it to
your project in the normal way (for example by right-clicking on the
project in Visual Studio and choosing "Manage NuGet Packages...").
Authentication
When running on Google Cloud, no action needs to be taken to authenticate.
Otherwise, the simplest way of authenticating your API calls is to
set up Application Default Credentials.
The credentials will automatically be used to authenticate. See
Set up Application Default Credentials for more details.
Getting started
All operations are performed through ApiGatewayServiceClient .
Create a client instance by calling the static Create or CreateAsync methods. Alternatively,
use the builder class associated with each client class (e.g. ApiGatewayServiceClientBuilder for ApiGatewayServiceClient)
as an easy way of specifying custom credentials, settings, or a custom endpoint. Clients are thread-safe,
and we recommend using a single instance across your entire application unless you have a particular need
to configure multiple client objects separately.
Using the REST (HTTP/1.1) transport
This library defaults to performing RPCs using gRPC using the binary Protocol Buffer wire format.
However, it also supports HTTP/1.1 and JSON, for situations where gRPC doesn't work as desired. (This is typically due to an incompatible proxy
or other network issue.) To create a client using HTTP/1.1, specify a RestGrpcAdapter reference for the GrpcAdapter property in the client builder.
Sample code:
var client = new ApiGatewayServiceClientBuilder
{
GrpcAdapter = RestGrpcAdapter.Default
}.Build();
For more details, see the transport selection page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
