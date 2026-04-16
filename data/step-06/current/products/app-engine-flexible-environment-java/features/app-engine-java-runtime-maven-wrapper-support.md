---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.455Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine Java runtime Maven wrapper support"
feature_slug: "app-engine-java-runtime-maven-wrapper-support"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
keywords:
  - "app"
  - "engine"
  - "java"
  - "runtime"
  - "maven"
  - "wrapper"
  - "now"
  - "supports"
---

# App Engine Java runtime Maven wrapper support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine Java runtime now supports using Maven wrappers to manage project Maven dependencies.

## Extended Definition

The App Engine Java runtime now supports using Maven wrappers to manage project Maven dependencies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/flexible/java/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)

## Supporting Pages

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Specifying Jetty version 9 (default / optional): runtime config : jdk : openjdk8 server : jetty9 Specifying Java version 8: runtime config : jdk : openjdk8 Sample app.yaml for Java 8: runtime : java env : flex handlers : - url : /. script : this field is required, but ignored See pom.xml for configuring Maven and build.gradle for configuring Gradle.
- JAVA OPTS JVM runtime arguments Enhanced Cloud Logging (Beta) When running on the App Engine flexible environment, you can configure Java Util Logging to send logs to Cloud Logging by setting the JETTY ARGS environment variable.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Java runtime Stay organized with collections Save and categorize content based on your preferences.
- Java 8 supports: The Eclipse Jetty 9 runtime and runs Jetty 9 using Servlet 3.1.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins require the Dockerfile to be in src/main/docker/Dockerfile and the app.yaml file to be in src/main/appengine/app.yaml .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- To create a custom runtime you must: Provide an app.yaml file that describes your application's runtime configuration to App Engine.

### "Specifying dependencies \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/flexible/java/specifying-dependencies)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- If you do not use the Maven Wrapper, App Engine defaults to using a recent version of Maven when running gcloud app deploy .
- These instructions use Apache Maven to build, run, and deploy a sample app using a supported Java runtime.
- You can use any Java compatible libraries with the Java runtime on the App Engine flexible environment.
- Specify it in your pom.xml file's <dependencies> entry: <dependency> <groupId>com.example.appengine</groupId> <artifactId>simple-jetty-main</artifactId> <version>1</version> <scope>provided</scope> </dependency> Note that frameworks such as SparkJava or Spring Boot won't require the servlet library.

