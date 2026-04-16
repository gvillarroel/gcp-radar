---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.327Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "python-compat runtime (App Engine flexible environment)"
feature_slug: "python-compat-runtime-app-engine-flexible-environment"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/runtime"
keywords:
  - "python"
  - "compat"
  - "runtime"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "was"
---

# python-compat runtime (App Engine flexible environment)

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

The python-compat runtime in App Engine flexible environment was marked as deprecated; deprecated on 2016-11-15.

## Extended Definition

The python-compat runtime in App Engine flexible environment was marked as deprecated; deprecated on 2016-11-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/runtime](https://docs.cloud.google.com/appengine/docs/flexible/python/runtime)

## Supporting Pages

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- When you use a custom runtime, you must write your application code to handle certain flexible environment life-cycle and health checking requests.
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes)
- Source ID: `site-docs-root-2`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- When you use a custom runtime, you must write your application code to handle certain flexible environment life-cycle and health checking requests.
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .

### "The Python runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/runtime](https://docs.cloud.google.com/appengine/docs/flexible/python/runtime)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Python runtime Stay organized with collections Save and categorize content based on your preferences.
- The Python runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Extending the runtime The flexible environment Python runtime can be used to create a custom runtime.
- Examples To specify Python 3.14 on Ubuntu 24: runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : "ubuntu24" runtime version : "3.14" To specify the latest supported Python version on Ubuntu 24: runtime : python env : flex entrypoint : gunicorn -b :$PORT main:app runtime config : operating system : "ubuntu24" See the app.yaml reference page for more information.

