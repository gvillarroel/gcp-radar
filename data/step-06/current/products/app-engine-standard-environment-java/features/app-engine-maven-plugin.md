---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.254Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Maven plugin"
feature_slug: "app-engine-maven-plugin"
latest_feature_date: "2017-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8"
keywords:
  - "building"
  - "plugin"
  - "deploying"
  - "maven"
  - "supports"
---

# App Engine Maven plugin

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine Maven plugin supports building and deploying Java applications from Maven; The App Engine Maven plugin supports building and deploying Java applications from Maven.

## Extended Definition

The App Engine Maven plugin supports building and deploying Java applications from Maven; The App Engine Maven plugin supports building and deploying Java applications from Maven.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8](https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8)

## Supporting Pages

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/runtime)
- Source ID: `site-docs-reference`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Download the latest version of the Google Cloud CLI or update your gcloud CLI to the current version: gcloud components update To deploy using Maven, you will need to add the App Engine Maven Plugin to your pom.xml file: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include using the gcloud app deploy command or the App Engine Gradle plugin .
- When deploying your application, the App Engine plugin will only upload the files that changed, rather than the entire uber JAR package.
- To deploy a Maven project project as source code, go to your project's top level directory and type: gcloud app deploy pom.xml Build and deploy logs will be streamed, and you can see the detailed logs in the Cloud Build history section in the Google Cloud console .
- Deploy Maven source projects to the Java runtime You can deploy your Maven project as source code and have it built and deployed using Google Cloud's buildpacks .

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime](https://docs.cloud.google.com/appengine/docs/standard/java/runtime)
- Source ID: `site-docs-reference-4`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Download the latest version of the Google Cloud CLI or update your gcloud CLI to the current version: gcloud components update To deploy using Maven, you will need to add the App Engine Maven Plugin to your pom.xml file: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include using the gcloud app deploy command or the App Engine Gradle plugin .
- When deploying your application, the App Engine plugin will only upload the files that changed, rather than the entire uber JAR package.
- To deploy a Maven project project as source code, go to your project's top level directory and type: gcloud app deploy pom.xml Build and deploy logs will be streamed, and you can see the detailed logs in the Cloud Build history section in the Google Cloud console .
- Deploy Maven source projects to the Java runtime You can deploy your Maven project as source code and have it built and deployed using Google Cloud's buildpacks .

### "Java runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8](https://docs.cloud.google.com/appengine/docs/standard/java/runtime-java8)
- Source ID: `site-docs-reference-4`
- Final score: 104
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you begin Download the latest version of the Google Cloud CLI or update your gcloud CLI to the current version: gcloud components update To deploy using Maven, you will need to add the App Engine Maven Plugin to your pom.xml file: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> </plugin> Other options for deploying include using the gcloud app deploy command or the App Engine Gradle plugin .
- When deploying your application, the App Engine plugin will only upload the files that changed, rather than the entire uber JAR package.
- To deploy a Maven project project as source code, go to your project's top level directory and type: gcloud app deploy pom.xml Build and deploy logs will be streamed, and you can see the detailed logs in the Cloud Build history section in the Google Cloud console .
- Deploy Maven source projects to the Java runtime You can deploy your Maven project as source code and have it built and deployed using Google Cloud's buildpacks .

