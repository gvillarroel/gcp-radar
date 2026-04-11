---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.387Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Removal of Java class whitelisting in App Engine Java 8 runtime"
feature_slug: "removal-of-java-class-whitelisting-in-app-engine-java-8-runtime"
latest_feature_date: "2017-06-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "whitelist deprecation"
  - "class whitelist removal"
  - "Java class whitelisting"
  - "class whitelisting"
  - "class whitelist"
  - "public Java APIs"
  - "Java 8 runtime"
---

# Removal of Java class whitelisting in App Engine Java 8 runtime

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

The Java 8 runtime removed class whitelisting for public Java APIs.

## Extended Definition

The Java 8 runtime removed class whitelisting for public Java APIs.

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
- All public Java 8 APIs are available, class whitelisting has been removed.
- Fixed Fixed the NoClassDefFoundError error that occurs when using the local development server with the Java 8 runtime and Endpoints Framework Gradle Plugin.
- Feature Updated Java SDK to version 1.9.58 September 25, 2017 Deprecated The Java 8 runtime no longer supports JDK9 JARs that contain module-info.class .
- The Java 8 runtime default is to use the native Java HTTP(S) transport, not the URL Fetch transport, as is the case for Java 7 runtime.

