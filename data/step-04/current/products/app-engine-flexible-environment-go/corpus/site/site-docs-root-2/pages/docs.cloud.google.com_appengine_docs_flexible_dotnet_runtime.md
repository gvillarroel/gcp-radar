---
title: "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/go/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime
  title: "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Guides
Send feedback
The .NET runtime
Stay organized with collections
Save and categorize content based on your preferences.
Note: Some .NET runtimes have reached end of support . You cannot re-deploy
versions that use runtimes after their end of support date. We recommend that
you upgrade your app
to use the latest version of .NET.
The .NET runtime is the software stack responsible for
installing your application code and dependencies, and then running that
application in the flexible environment.
.NET versions
.NET 10 is built using
buildpacks . For the full list of supported
.NET versions, and their corresponding Ubuntu
version, see the Runtime support schedule .
To use a supported
.NET version, you must:
Update your project file with the .NET version you want to use.
<Project Sdk="Microsoft.NET.Sdk.Web">
<PropertyGroup>
<TargetFramework>net10.0</TargetFramework>
<Nullable>enable</Nullable>
<ImplicitUsings>enable</ImplicitUsings>
</PropertyGroup>
<ItemGroup>
<None Update="app.yaml">
<CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory>
</None>
</ItemGroup>
</Project>
Install gcloud CLI version 420.0.0 or later . You can update your
CLI tooling by running the gcloud components update
command. To view your installed version, you can run the
gcloud version command.
Specify the operating_system setting in your app.yaml file:
runtime : aspnetcore
env : flex
runtime_config :
operating_system : "ubuntu24"
Optionally, you can specify a runtime version by including the runtime_version
setting in your app.yaml file. By default, App Engine uses the latest
available LTS .NET version if the runtime_version setting is not specified.
For example, the app.yaml file looks as follows when specifying
.NET 10 on Ubuntu 24:
runtime : aspnetcore
env : flex
runtime_config :
runtime_version : "10"
operating_system : "ubuntu24"
Previous runtime versions
Warning: .NET version 3 and earlier have reached end of support.
App Engine blocks you from deploying your applications using runtimes that have
reached end of support. We recommend that you migrate your app to use a supported version
of .NET or use a custom runtime .
To target a specific .NET SDK version, update your project file. For more
information, see Migrate from ASP.NET Core 3.1 to 6.0 .
If you want to use GKE or other Docker hosts, you need to create a
Dockerfile that copies your application code and installs
dependencies. For more information, see
Custom Runtimes .
To deploy your .NET app, run the following commands from the
root directory where your app resides:
dotnet restore
dotnet publish -c Release
gcloud app deploy
Support for other .NET runtimes
If you need to use a .NET version that isn't supported , you can create a
custom runtime and select a
valid base image with the .NET version you need.
For Google-supplied base images or
Docker .NET base images ,
see Building custom runtimes .
HTTPS and forwarding proxies
App Engine terminates the HTTPS connection at the load balancer and forwards the
request to your application. Applications can examine the X-Forwarded-Proto to
observe whether the original protocol was HTTP or HTTPS.
Some applications also need to ascertain the user's IP address. This is
available in the standard X-Forwarded-For header.
Extending the runtime
The flexible environment .NET runtime can be used to create a custom runtime.
Custom runtimes are configured via a Dockerfile .
You can customize the Dockerfile and .dockerignore as desired. Finally,
you will need to specify runtime: custom instead of runtime: aspnetcore in
app.yaml . See
Customizing the .NET Runtime
for more information.
Environment variables
The following environment variables are set by the runtime environment:
Environment variable
Description
GAE_INSTANCE
The name of the current instance.
GAE_MEMORY_MB
The amount of memory available to the application process.
GAE_SERVICE
The service name specified in your application's app.yaml
file, or if no service name is specified, it is set to default .
GAE_VERSION
The version label of the current application.
GOOGLE_CLOUD_PROJECT
The Project ID associated with your application, which is visible in
the Google Cloud console
PORT
The port that will receive HTTP requests.
You can set additional configuration variables with appsettings.json .
Metadata server
Each instance of your application can use the
Compute Engine metadata server to
query information about the instance, including its host name, external IP
address, instance ID, custom metadata, and service account information. App
Engine does not allow you to set custom metadata for each instance, but you can
set project-wide custom metadata
and read it from your App Engine and Compute Engine instances.
This example function uses the metadata server to get the external IP address of
the instance:
var client = new HttpClient ();
client . DefaultRequestHeaders . Add ( "Metadata-Flavor" , new [] { "Google" });
response = await client . GetStringAsync (
"http://metadata.google.internal/computeMetadata/v1/instance/network-interfaces/0/access-configs/0/external-ip" );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
