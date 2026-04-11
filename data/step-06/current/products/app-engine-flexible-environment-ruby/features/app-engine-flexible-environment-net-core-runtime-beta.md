---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:48:27.807Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine flexible environment .NET Core runtime beta"
feature_slug: "app-engine-flexible-environment-net-core-runtime-beta"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime"
keywords:
  - "beta .NET Core"
  - ".NET Core beta"
  - ".NET Core runtime"
  - "beta .NET runtime"
  - ".NET runtime"
  - "App Engine flexible beta runtime"
  - "runtime support"
  - "C# runtime"
---

# App Engine flexible environment .NET Core runtime beta

Product: App Engine flexible environment Ruby
Coverage: LOW

## Step 02 Summary

The .NET Core runtime entered beta status in the App Engine flexible environment.

## Extended Definition

In the App Engine flexible environment, the .NET runtime is the managed runtime responsible for installing .NET application code and dependencies and running the application, and Google documents deployment with `dotnet restore`, `dotnet publish -c Release`, and `gcloud app deploy`. The runtime’s supported .NET versions are listed in the Runtime support schedule, and for unsupported .NET versions, App Engine recommends using a custom runtime with an appropriate base image or customizing the Docker image.

## Evidence Summary

These pages define the App Engine flexible .NET runtime’s deployment flow, support scope, and customization/custom-runtime options, but do not explicitly confirm the runtime’s beta status in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)

## Supporting Pages

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: The page covers the App Engine flexible .NET runtime details and version support, but it does not describe a .NET Core runtime beta launch or lifecycle status.

Evidence snippets:
- To deploy your .NET app, run the following commands from the root directory where your app resides: dotnet restore dotnet publish -c Release gcloud app deploy Support for other .NET runtimes If you need to use a .NET version that isn't supported , you can create a custom runtime and select a valid base image with the .NET version you need.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- For the full list of supported .NET versions, and their corresponding Ubuntu version, see the Runtime support schedule .

### "Customizing the .NET Runtime \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Customizing the .NET Runtime Stay organized with collections Save and categorize content based on your preferences.
- You can extend the .NET runtime to add additional functionality by customizing the Docker image.

