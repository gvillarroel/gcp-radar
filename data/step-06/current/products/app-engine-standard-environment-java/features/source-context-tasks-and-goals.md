---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.259Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Source context tasks and goals"
feature_slug: "source-context-tasks-and-goals"
latest_feature_date: "2017-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime"
keywords:
  - "context"
  - "source"
  - "goals"
  - "tasks"
  - "gradle"
  - "maven"
---

# Source context tasks and goals

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine Maven and Gradle plugins provide source-context tasks and goals.

## Extended Definition

The App Engine Maven and Gradle plugins provide source-context tasks and goals.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For example: <staging> <delete-jsps>false</delete-jsps> </staging> Staging option defaults The defaults for staging options are different depending on whether you use Google Cloud SDK-based tooling, such as the gcloud CLI, or the Google Cloud SDK-based Maven , Gradle , or IntelliJ plugins.
- Element Description <application> Not required if you deploy your app using Google Cloud SDK-based tooling, such as the gcloud app deploy command, IntelliJ plugins, Maven or Gradle plugins.
- App Engine resource files are read using java.io.File or javax.servlet.ServletContext.getResource/getResourceAsStream .
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Download the latest version of the Google Cloud CLI or update your gcloud CLI to the current version: gcloud components update To deploy using Maven, you will need to add the App Engine Maven Plugin to your pom.xml file: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include using the gcloud app deploy command or the App Engine Gradle plugin .
- To deploy a Maven project project as source code, go to your project's top level directory and type: gcloud app deploy pom.xml Build and deploy logs will be streamed, and you can see the detailed logs in the Cloud Build history section in the Google Cloud console .
- Deploy Maven source projects to the Java runtime You can deploy your Maven project as source code and have it built and deployed using Google Cloud's buildpacks .
- If your Maven or Gradle build file produces an executable Uber JAR, the runtime starts your application by running an Uber JAR application.

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin Download the latest version of the Google Cloud CLI or update your gcloud CLI to the current version: gcloud components update To deploy using Maven, you will need to add the App Engine Maven Plugin to your pom.xml file: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include using the gcloud app deploy command or the App Engine Gradle plugin .
- To deploy a Maven project project as source code, go to your project's top level directory and type: gcloud app deploy pom.xml Build and deploy logs will be streamed, and you can see the detailed logs in the Cloud Build history section in the Google Cloud console .
- Deploy Maven source projects to the Java runtime You can deploy your Maven project as source code and have it built and deployed using Google Cloud's buildpacks .
- If your Maven or Gradle build file produces an executable Uber JAR, the runtime starts your application by running an Uber JAR application.

