---
title: ".NET \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/client-libraries/dotnet
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/client-libraries/dotnet
  title: ".NET \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
.NET
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google provides a .NET client library for interacting with the Ad Manager API, which is recommended to be used with NuGet by adding the Google.Ads.AdManager.V1 package to your project.
Authentication for the .NET client library uses OAuth2 and Application Default Credentials (ADC), which searches for credentials in specific locations.
You can make requests using the service's ServiceClient object and handle errors of type Grpc.Core.RpcException to extract information like HTTP status, error message, and a unique request ID for troubleshooting.
The client library offers helper classes to construct resource names from IDs, which can be directly passed to service methods, and respects proxy settings from HttpClient.DefaultProxy .
Google provides a .NET client library for interacting with the Ad Manager API.
We recommend using the client library with NuGet.
To get started, create a new project in the IDE of your choice or add the
dependency to an existing project. Google publishes client library artifacts to
NuGet repository as
Google.Ads.AdManager.V1 .
Package Reference
<!-- MyProject.csproj -->
<PackageReference Include="Google.Ads.AdManager.V1" Version="1.0.0-beta01" />
.NET CLI
dotnet add package Google.Ads.AdManager.V1 --version 1 .0.0-beta01
Configure credentials
The .NET client library uses OAuth2 and Application Default Credentials
(ADC) to authenticate.
ADC searches for credentials in order in the following locations:
GOOGLE_APPLICATION_CREDENTIALS environment variable.
User credentials set up through the Google Cloud CLI (gcloud CLI).
When running on Google Cloud, the service account attached to the Google Cloud resource.
For creating and configuring your ADC credentials, see
Authentication .
Make your first request
Each service has a ServiceClient object with both synchronous and asynchronous
methods for each REST method. The following example reads a Network
synchronously. All entities are identified by a
resource name consisting of the type and numeric
identifier of the entity.
using Google.Ads.AdManager.V1 ;
public sealed partial class GeneratedNetworkServiceClientSnippets
{
public void GetNetwork ()
{
// Create client
NetworkServiceClient networkServiceClient = NetworkServiceClient . Create ();
// Initialize request argument(s)
string name = "networks/[NETWORK_CODE]" ;
// Make the request
Network response = networkServiceClient . GetNetwork ( name );
}
} NetworkServiceClient . GetNetworkSnippet . g . cs
For examples of other methods and resources, see the GitHub repository
googleapis/google-cloud-dotnet .
Handle errors
All Ad Manager API errors are of the type
Grpc.Core.RpcException
in the .NET client library.
Errors include a unique request_id you can
provide to support for assistance with
troubleshooting. The following example extracts the HTTP status, error message,
and request_id .
using Google.Ads.AdManager.V1 ;
using Google.Api.Gax.Grpc ;
using Google.Rpc ;
using Grpc.Core ;
try
{
NetworkServiceClient networkServiceClient = NetworkServiceClient . Create ();
Network network = networkServiceClient . GetNetwork ( "networks/[NETWORK_CODE]" );
}
catch ( RpcException e )
{
// HTTP Status code
StatusCode statusCode = e . Status . StatusCode ;
// Error message
string errorMessage = e . Status . Detail ;
// Unique request identifier.
RequestInfo requestInfo = e . GetStatusDetail<RequestInfo> ();
string requestId = requestInfo ?. RequestId ?? "Unexpected null request identifier" ;
}
Construct resource names
The client library provides helper classes for building resource names from
IDs. These can be passed directly to service methods.
// Represents a resource name in the format:
// "networks/{networkCode}/orders/{orderId}"
OrderName name = OrderName . FromNetworkCodeOrder ( "123" , "456" );
Order response = orderServiceClient . GetOrder ( name );
Configure proxy settings
The .NET client library respects the HttpClient.DefaultProxy property
including setting proxies from the environment variables HTTP_PROXY and
HTTPS_PROXY . For more details, see
HttpClient.DefaultProxy Property .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The Google Ad Manager API .NET client library, available via NuGet as `Google.Ads.AdManager.V1`, uses OAuth2 and Application Default Credentials (ADC) for authentication. To make requests, create a `ServiceClient` object, and utilize synchronous or asynchronous methods. Resource names, formatted with IDs, can be constructed using helper classes. Error handling involves catching `RpcException`, retrieving the status code, message, and `request_id`. The library also supports proxy configuration through the `HttpClient.DefaultProxy` property and environment variables.\n"]]
