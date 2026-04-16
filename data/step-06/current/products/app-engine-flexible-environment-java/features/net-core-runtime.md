---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.297Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: ".NET Core runtime"
feature_slug: "net-core-runtime"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
keywords:
  - "net"
  - "core"
  - "runtime"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
---

# .NET Core runtime

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment supports a .NET Core runtime in Beta.

## Extended Definition

The App Engine flexible environment supports a .NET Core runtime in Beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet](https://docs.cloud.google.com/appengine/docs/flexible/dotnet)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)

## Supporting Pages

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/runtime)
- Source ID: `site-docs-reference`
- Final score: 103
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Extending the runtime The flexible environment .NET runtime can be used to create a custom runtime.
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you use a custom runtime, you must write your application code to handle certain flexible environment life-cycle and health checking requests.
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .

### "The .NET runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet](https://docs.cloud.google.com/appengine/docs/flexible/dotnet)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The .NET runtime Stay organized with collections Save and categorize content based on your preferences.
- The .NET runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment. .NET versions .NET 10 is built using buildpacks .
- Extending the runtime The flexible environment .NET runtime can be used to create a custom runtime.
- For example, the app.yaml file looks as follows when specifying .NET 10 on Ubuntu 24: runtime : aspnetcore env : flex runtime config : runtime version : "10" operating system : "ubuntu24" Previous runtime versions Warning: .NET version 3 and earlier have reached end of support.

