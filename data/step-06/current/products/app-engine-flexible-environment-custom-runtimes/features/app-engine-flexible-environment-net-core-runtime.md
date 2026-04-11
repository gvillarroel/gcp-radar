---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:39:03.563Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine flexible environment .NET Core runtime"
feature_slug: "app-engine-flexible-environment-net-core-runtime"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
keywords:
  - "App Engine flex .NET Core"
  - "ASP.NET Core runtime"
  - "App Engine flexible environment .NET Core runtime"
  - "ASP.NET Core"
  - "App Engine .NET Core"
  - ".NET Core"
  - "flex runtime support"
  - "beta .NET runtime"
---

# App Engine flexible environment .NET Core runtime

Product: App Engine flexible environment custom runtimes
Coverage: LOW

## Step 02 Summary

The .NET Core runtime entered beta for the App Engine flexible environment.

## Extended Definition

The App Engine flexible environment .NET Core runtime is the capability for running ASP.NET Core/.NET Core applications on App Engine’s flexible environment using provided runtime images. In the official quickstart, Google documents creating such apps and references images for ASP.NET Core built on .NET Core 1.0, 1.1, 2.0, and 2.1, with deployment requiring a local LTS .NET Core SDK setup. The provided excerpt does not explicitly verify the release stage (for example, beta) or lifecycle status of this runtime.

## Evidence Summary

The cited App Engine flexible .NET quickstart page confirms runtime support for ASP.NET Core/.NET Core versions and local SDK prerequisites, but does not document the beta-announcement date or deprecation status.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)

## Supporting Pages

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: The quickstart details deploying .NET apps in the App Engine flexible environment with runtime version/OS settings, which is useful context for the .NET runtime feature though it does not state beta status.

Evidence snippets:
- The Hello World app is similar to the app created by Visual Studio when an empty ASP.NET core app is created.
- Images are available for ASP.NET Core apps written for .NET Core 1.0, 1.1, 2.0 and 2.1.
- Install the following on your local machine: Install the .NET Core SDK, LTS version .

