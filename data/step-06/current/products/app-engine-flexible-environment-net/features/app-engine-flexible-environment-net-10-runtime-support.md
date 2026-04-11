---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:44:02.738Z"
product_name: "App Engine flexible environment .NET"
product_slug: "app-engine-flexible-environment-net"
feature_name: "App Engine flexible environment .NET 10 runtime support"
feature_slug: "app-engine-flexible-environment-net-10-runtime-support"
latest_feature_date: "2026-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
keywords:
  - "GA .NET 10"
  - ".NET 10 runtime support"
  - "preview .NET 10"
  - "dotnet10"
  - ".NET 10 runtime"
  - "runtime in app.yaml"
  - ".NET 10"
  - "App Engine .NET runtime"
---

# App Engine flexible environment .NET 10 runtime support

Product: App Engine flexible environment .NET
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment added General Availability support for the .NET 10 runtime; App Engine flexible environment added preview support for the .NET 10 runtime.

## Extended Definition

In App Engine flexible environment, the .NET runtime can be configured to use runtime version "10" via `app.yaml` settings (`runtime: aspnetcore`, `runtime config` / `runtime version: "10"`, and related fields such as `operating system: "ubuntu24"` in the documented example). The runtime stack is responsible for installing the app code and dependencies and running the app, and Google’s documentation states that .NET 10 in this environment is built using buildpacks. Based on the provided excerpt, this indicates explicit support for .NET 10 configuration in App Engine flexible, though lifecycle stage (for example GA vs. preview) is not shown in the snippet.

## Evidence Summary

The referenced Google Cloud documentation page gives the canonical `app.yaml` form for selecting .NET runtime version 10 and describes that App Engine flexible’s .NET runtime installs dependencies and runs the app using buildpacks.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)

## Supporting Pages

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page documents using .NET 10 (example config and target framework guidance) and links to runtime support details, but does not explicitly state GA/preview rollout status.

Evidence snippets:
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .

