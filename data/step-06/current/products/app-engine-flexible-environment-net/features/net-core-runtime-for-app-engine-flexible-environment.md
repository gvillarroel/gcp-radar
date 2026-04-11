---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.766Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: ".NET Core runtime for App Engine flexible environment"
feature_slug: "net-core-runtime-for-app-engine-flexible-environment"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "ASP.NET Core"
  - "beta release"
  - "dotnet runtime"
  - ".NET Core runtime"
  - "dotnet"
  - "App Engine flexible environment runtime"
  - ".NET Core"
  - "runtime support"
---

# .NET Core runtime for App Engine flexible environment

Product: App Engine flexible environment .NET
Coverage: LOW

## Step 02 Summary

The .NET Core runtime entered beta for the App Engine flexible environment.

## Extended Definition

The .NET Core runtime entered beta for the App Engine flexible environment.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: The quickstart is specifically for creating a .NET app on App Engine flexible environment and explains how to set the .NET runtime version in app.yaml, which is useful context for runtime support even though it does not mention beta status.

Evidence snippets:
- The Hello World app is similar to the app created by Visual Studio when an empty ASP.NET core app is created.
- Images are available for ASP.NET Core apps written for .NET Core 1.0, 1.1, 2.0 and 2.1.
- Change to the directory that contains the sample code. cd dotnet-docs-samples/appengine/flexible/HelloWorld Run Hello World on your local machine Run the following commands from the dotnet-docs-samples/appengine/flexible/HelloWorld/HelloWorld.Sample directory: dotnet restore dotnet run In your web browser, go to http://localhost:5000 .
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: STRONG
- Re-rank rationale: This page is the official App Engine flexible .NET runtime documentation and defines how to configure and run .NET apps in that environment.

Evidence snippets:
- For more information, see Migrate from ASP.NET Core 3.1 to 6.0 .
- To deploy your .NET app, run the following commands from the root directory where your app resides: dotnet restore dotnet publish -c Release gcloud app deploy Support for other .NET runtimes If you need to use a .NET version that isn't supported , you can create a custom runtime and select a valid base image with the .NET version you need.
- For the full list of supported .NET versions, and their corresponding Ubuntu version, see the Runtime support schedule .

