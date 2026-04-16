---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.099Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Debian 8 Jessie operating system"
feature_slug: "debian-8-jessie-operating-system"
latest_feature_date: "2018-05-04"
deprecation_date: "June 2018"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet"
keywords:
  - "debian"
  - "jessie"
  - "operating"
  - "system"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Debian 8 Jessie operating system

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment used the Debian 8 Jessie operating system for application instances; deprecated on June 2018.

## Extended Definition

App Engine flexible environment used the Debian 8 Jessie operating system for application instances; deprecated on June 2018.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/python/runtime](https://docs.cloud.google.com/appengine/docs/flexible/python/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet](https://docs.cloud.google.com/appengine/docs/flexible/dotnet)

## Supporting Pages

### "The Python runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/runtime](https://docs.cloud.google.com/appengine/docs/flexible/python/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Python runtime Stay organized with collections Save and categorize content based on your preferences.
- Examples To specify Python 3.14 on Ubuntu 24: runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : "ubuntu24" runtime version : "3.14" To specify the latest supported Python version on Ubuntu 24: runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : "ubuntu24" See the app.yaml reference page for more information.
- The Python runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- To use a supported Python version, you must: Include the runtime config and operating system settings in your app.yaml file to specify an operating system.

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- Specify the operating system setting in your app.yaml file: runtime : aspnetcore env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a runtime version by including the runtime version setting in your app.yaml file.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet](https://docs.cloud.google.com/appengine/docs/flexible/dotnet)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.
- Specify the operating system setting in your app.yaml file: runtime : aspnetcore env : flex runtime config : operating system : "ubuntu24" Optionally, you can specify a runtime version by including the runtime version setting in your app.yaml file.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .

