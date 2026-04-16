---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.228Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java 7 runtime application builds"
feature_slug: "java-7-runtime-application-builds"
latest_feature_date: "2019-02-13"
deprecation_date: "2019-01-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime"
keywords:
  - "builds"
  - "building"
  - "application"
  - "applications"
  - "longer"
  - "runtime"
---

# Java 7 runtime application builds

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Building Java 7 applications is no longer supported in App Engine standard environment; deprecated on 2019-01-25.

## Extended Definition

Building Java 7 applications is no longer supported in App Engine standard environment; deprecated on 2019-01-25.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- After deprecation, you won't be able to deploy Java 8 applications, even if your organization previously used an organization policy to re-enable deployments of legacy runtimes.
- Upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.
- The process of upgrading an existing application depends on the runtime version that your application uses: Java 8 : Migrate your application to the latest supported Java version .

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, an executable with the filename myexecutable could have the following app.yaml configuration file: runtime : 25 # or another supported runtime version. entrypoint : ./myexecutable Google Cloud client libraries can be used to compile applications as a GraalVM native image.
- For example: runtime: java25 # or another supported runtime entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar Where the example YOUR-ARTIFACT.jar application jar must: Be in the root directory with your app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, an executable with the filename myexecutable could have the following app.yaml configuration file: runtime : 25 # or another supported runtime version. entrypoint : ./myexecutable Google Cloud client libraries can be used to compile applications as a GraalVM native image.
- For example: runtime: java25 # or another supported runtime entrypoint: java -Xmx64m -jar YOUR-ARTIFACT.jar Where the example YOUR-ARTIFACT.jar application jar must: Be in the root directory with your app.yaml file.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Java runtime environment Stay organized with collections Save and categorize content based on your preferences.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.

