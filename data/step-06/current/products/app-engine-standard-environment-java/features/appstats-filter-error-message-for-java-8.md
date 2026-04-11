---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.384Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Appstats filter error message for Java 8"
feature_slug: "appstats-filter-error-message-for-java-8"
latest_feature_date: "2017-09-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "Appstats filter message"
  - "appstats compatibility error"
  - "appstats filter"
  - "appstats explicit error"
  - "appstats error"
  - "Java 8 appstats"
  - "Java 8 runtime"
---

# Appstats filter error message for Java 8

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

The Java runtime now emits an explicit error message when the appstats filter is used with Java 8.

## Extended Definition

The Java runtime now emits an explicit error message when the appstats filter is used with Java 8.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Fixed the NoClassDefFoundError error that occurs when using the local development server with the Java 8 runtime and Endpoints Framework Gradle Plugin.
- Feature Updated Java SDK to version 1.9.58 September 25, 2017 Deprecated The Java 8 runtime no longer supports JDK9 JARs that contain module-info.class .
- The Java 8 runtime default is to use the native Java HTTP(S) transport, not the URL Fetch transport, as is the case for Java 7 runtime.
- Fixed Fixed NoClassDefFoundError exception on the local development server when using Cloud Endpoints v2 on the Java 8 runtime.

