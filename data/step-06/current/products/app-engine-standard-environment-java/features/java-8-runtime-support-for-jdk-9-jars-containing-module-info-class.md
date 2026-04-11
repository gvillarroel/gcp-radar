---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.376Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java 8 runtime support for JDK 9 JARs containing module-info.class"
feature_slug: "java-8-runtime-support-for-jdk-9-jars-containing-module-info-class"
latest_feature_date: "2017-09-25"
deprecation_date: "2017-09-25"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "deprecation for module-info.class"
  - "module descriptor in JAR"
  - "module-info.class"
  - "module-info"
  - "modular JAR"
  - "JDK 9 JAR"
  - "Java 8 runtime"
---

# Java 8 runtime support for JDK 9 JARs containing module-info.class

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

The Java 8 runtime no longer supports JDK 9 JAR files that include a module-info.class file; deprecated on 2017-09-25.

## Extended Definition

The Java 8 runtime no longer supports JDK 9 JAR files that include a module-info.class file; deprecated on 2017-09-25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Feature Updated Java SDK to version 1.9.58 September 25, 2017 Deprecated The Java 8 runtime no longer supports JDK9 JARs that contain module-info.class .
- Fixed Fixed the NoClassDefFoundError error that occurs when using the local development server with the Java 8 runtime and Endpoints Framework Gradle Plugin.
- The Java 8 runtime default is to use the native Java HTTP(S) transport, not the URL Fetch transport, as is the case for Java 7 runtime.
- Fixed Fixed NoClassDefFoundError exception on the local development server when using Cloud Endpoints v2 on the Java 8 runtime.

