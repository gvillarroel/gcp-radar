---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:43:43.870Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "jetty9-compat runtime deprecation"
feature_slug: "jetty9-compat-runtime-deprecation"
latest_feature_date: "2016-11-15"
deprecation_date: "2016-11-15"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
keywords:
  - "Jetty 9 compat runtime"
  - "jetty9-compat runtime"
  - "jetty9 compat"
  - "jetty9-compat"
  - "Jetty 9"
  - "App Engine flexible environment"
  - "runtime deprecation"
  - "deprecated runtime"
---

# jetty9-compat runtime deprecation

Product: App Engine flexible environment Java
Coverage: LOW

## Step 02 Summary

The jetty9-compat runtime was deprecated in App Engine flexible environment; deprecated on 2016-11-15.

## Extended Definition

The jetty9-compat runtime was deprecated in App Engine flexible environment; deprecated on 2016-11-15.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)

## Supporting Pages

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Jetty 9 , which the App Engine flexible environment uses as its Servlet container, uses Apache Jasper as the default JSP implementation and includes JSTL taglibs.
- You can use the following emulators: Datastore Pub/Sub Bigtable Use the gcloud command to start them before you run your app: gcloud beta emulators datastore start gcloud beta emulators pubsub start gcloud beta emulators bigtable start Maven Add these lines in your maven pom.xml file to add the Jetty 9 Maven Plugin : < plugin > < groupId>org . eclipse . jetty < / groupId > < artifactId>jetty - maven - plugin < / artifactId > < version>9 .4.2 . v20170220 < / version > < / plugin > To run your app locally, use the Maven command: mvn jetty : run - exploded Gradle Follow the Creating a new Gradle project instructions to add the Gretty Gradle plugin to your build.gradle , and use the command: gradle jettyRun Deploy your app To initialize the Google Cloud CLI, run: gcloud init After completing the configurations, you can use the Google Cloud CLI to deploy this directory containing the app.yaml and WAR files using: gcloud app deploy app . yaml If you are using any of the optional configuration files ( index.yaml , cron.yaml , and dispatch.yaml ) deploy them separately with the gcloud command.
- JAVA OPTS JVM runtime arguments Enhanced Cloud Logging (Beta) When running on the App Engine flexible environment, you can configure Java Util Logging to send logs to Cloud Logging by setting the JETTY ARGS environment variable.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Java runtime Stay organized with collections Save and categorize content based on your preferences.

