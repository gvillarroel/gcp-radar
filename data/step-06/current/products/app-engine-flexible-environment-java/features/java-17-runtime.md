---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.266Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Java 17 runtime"
feature_slug: "java-17-runtime"
latest_feature_date: "2023-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle"
keywords:
  - "java"
  - "17"
  - "runtime"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "supports"
---

# Java 17 runtime

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment Java runtime supports Java 17; The App Engine flexible environment Java runtime supports Java 17.

## Extended Definition

The App Engine flexible environment Java runtime supports Java 17; The App Engine flexible environment Java runtime supports Java 17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)

## Supporting Pages

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JAVA OPTS JVM runtime arguments Enhanced Cloud Logging (Beta) When running on the App Engine flexible environment, you can configure Java Util Logging to send logs to Cloud Logging by setting the JETTY ARGS environment variable.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Java runtime Stay organized with collections Save and categorize content based on your preferences.
- The Java runtime is the software stack responsible for installing your application code and dependencies, and then running that application in the flexible environment.
- Organizing your files Your source tree should look like this: MyDir/ [pom.xml] [build.gradle] [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml docker/ [Dockerfile] java/ com.example.mycode/ MyCode.java webapp/ [index.html] [jsp.jsp] WEB-INF/ [web.xml] Local testing When testing in your local environment, you may use emulated Google Cloud services, rather than remote Google Cloud services.

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- When you use a custom runtime, you must write your application code to handle certain flexible environment life-cycle and health checking requests.
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .

### "Runtime lifecycle \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle](https://docs.cloud.google.com/appengine/docs/flexible/lifecycle/runtime-lifecycle)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Runtime lifecycle Stay organized with collections Save and categorize content based on your preferences.
- The App Engine flexible environment runtimes use open source components that are maintained by their respective communities.
- Upon notification, you should prepare to upgrade your application to a newer runtime that is supported in the flexible environment .
- Runtime lifecycle GA-level support End of Support Deprecated Decommissioned Creation & redeployment Yes No No No Project Configuration Updates Yes Yes No No Running existing workloads Yes Yes Yes No UI & CLI Warnings Yes Yes No No Language patches Automatic No automatic updates No automatic updates No automatic updates Patching APIs & SDKs Automatic No automatic updates No automatic updates No automatic updates Customer Support GA-level support No runtime support No runtime support No runtime support Notification period App Engine will begin issuing in-app notifications 90 days before the application reaches end of support.

