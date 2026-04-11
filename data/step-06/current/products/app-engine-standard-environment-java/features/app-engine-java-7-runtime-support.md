---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.361Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java 7 runtime support"
feature_slug: "app-engine-java-7-runtime-support"
latest_feature_date: "2019-02-13"
deprecation_date: "2019-01-25"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes"
keywords:
  - "Java7 deprecation"
  - "deployments using Java 7 blocked"
  - "Java 7 apps auto-migrated to Java 8"
  - "Java 7 end of support"
  - "Java 7 runtime support removed"
  - "Java 7 runtime shutdown"
  - "App Engine Java 7 deprecated"
  - "Java 7 runtime"
---

# App Engine Java 7 runtime support

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

Building Java 7 applications is no longer supported in the App Engine standard environment; App deployments using the Java 7 runtime are blocked and existing Java 7 apps are automatically migrated to Java 8; deprecated on 2019-01-25.

## Extended Definition

Building Java 7 applications is no longer supported in the App Engine standard environment; App deployments using the Java 7 runtime are blocked and existing Java 7 apps are automatically migrated to Java 8; deprecated on 2019-01-25.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)

## Supporting Pages

### "App Engine standard environment for Java gen2 release notes \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Feature Stop generating a web.xml file for apps that use the Java 7 runtime and include a web.xml that specifies the servlet 3.1 schema.
- The Java 8 runtime default is to use the native Java HTTP(S) transport, not the URL Fetch transport, as is the case for Java 7 runtime.
- If your app is currently using the Java 7 runtime, it will be automatically migrated to the Java 8 runtime .
- January 25, 2019 Deprecated App deployments on the Java 7 runtime are now blocked.

