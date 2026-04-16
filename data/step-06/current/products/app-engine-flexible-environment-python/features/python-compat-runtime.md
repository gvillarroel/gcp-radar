---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.107Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "python-compat runtime"
feature_slug: "python-compat-runtime"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/runtime"
keywords:
  - "python"
  - "compat"
  - "runtime"
  - "provides"
  - "compatibility"
  - "app"
  - "engine"
  - "flexible"
---

# python-compat runtime

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

The python-compat runtime provides Python compatibility support in the App Engine flexible environment; deprecated on 2016-11-15.

## Extended Definition

The python-compat runtime provides Python compatibility support in the App Engine flexible environment; deprecated on 2016-11-15.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/runtime](https://docs.cloud.google.com/appengine/docs/flexible/python/runtime)

## Supporting Pages

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .
- If you'd like to use an alternative implementation of Python, Java, Node.js, Go, Ruby, PHP, .NET or you write code in any other language, then custom runtimes are for you.

### "The Python runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/runtime](https://docs.cloud.google.com/appengine/docs/flexible/python/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Python runtime Stay organized with collections Save and categorize content based on your preferences.
- The Python runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Extending the runtime The flexible environment Python runtime can be used to create a custom runtime.
- Examples To specify Python 3.14 on Ubuntu 24: runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : "ubuntu24" runtime version : "3.14" To specify the latest supported Python version on Ubuntu 24: runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : "ubuntu24" See the app.yaml reference page for more information.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- A custom runtime lets you use an alternate implementation of any supported flexible environment language, or to customize a Google-provided one.

