---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:45:54.306Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: ".NET Core runtime for App Engine flexible environment (Beta)"
feature_slug: "net-core-runtime-for-app-engine-flexible-environment-beta"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "ASP.NET Core"
  - "App Engine flexible environment .NET Core"
  - "flexible environment .NET workloads"
  - ".NET Core runtime"
  - ".NET Core"
  - "beta dotnet runtime"
  - "App Engine flexible .NET"
  - "dotnet"
---

# .NET Core runtime for App Engine flexible environment (Beta)

Product: App Engine flexible environment Python
Coverage: LOW

## Step 02 Summary

The .NET Core runtime was introduced for the App Engine flexible environment in Beta.

## Extended Definition

The .NET Core runtime was introduced for the App Engine flexible environment in Beta.

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
- Re-rank rationale: The page provides practical instructions for deploying a .NET app on App Engine flexible environment and discusses .NET runtime configuration in app.yaml, but it does not state that the runtime was introduced in Beta.

Evidence snippets:
- The Hello World app is similar to the app created by Visual Studio when an empty ASP.NET core app is created.
- Images are available for ASP.NET Core apps written for .NET Core 1.0, 1.1, 2.0 and 2.1.
- Change to the directory that contains the sample code. cd dotnet-docs-samples/appengine/flexible/HelloWorld Run Hello World on your local machine Run the following commands from the dotnet-docs-samples/appengine/flexible/HelloWorld/HelloWorld.Sample directory: dotnet restore dotnet run In your web browser, go to http://localhost:5000 .
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Migrate from ASP.NET Core 3.1 to 6.0 .
- To deploy your .NET app, run the following commands from the root directory where your app resides: dotnet restore dotnet publish -c Release gcloud app deploy Support for other .NET runtimes If you need to use a .NET version that isn't supported , you can create a custom runtime and select a valid base image with the .NET version you need.

