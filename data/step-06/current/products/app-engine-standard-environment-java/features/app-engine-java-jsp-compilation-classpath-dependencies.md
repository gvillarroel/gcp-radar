---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.879Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java JSP compilation classpath dependencies"
feature_slug: "app-engine-java-jsp-compilation-classpath-dependencies"
latest_feature_date: "2018-12-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview"
  - "https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview"
keywords:
  - "app"
  - "engine"
  - "java"
  - "jsp"
  - "compilation"
  - "classpath"
  - "dependencies"
  - "ecj"
---

# App Engine Java JSP compilation classpath dependencies

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The ECJ (Eclipse Compiler for Java) is no longer bundled in the JSP compilation classpath.

## Extended Definition

The ECJ (Eclipse Compiler for Java) is no longer bundled in the JSP compilation classpath.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview)
- [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)

## Supporting Pages

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 65
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM --> <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.28.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-storage</artifactId> </dependency> </dependencies> You can configure the Cloud Client Libraries for Java to handle authentication automatically .
- Specify it in your pom.xml file's <dependencies> entry: <dependencies> <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>3.1.0</version> <type>jar</type> <scope>provided</scope> </dependency> </dependencies> Note that frameworks such as SparkJava or Spring Boot won't require the servlet library.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Specifying dependencies Stay organized with collections Save and categorize content based on your preferences.
- Private dependencies with Artifact Registry If you need to host private dependencies for your Java app, you can use an Artifact Registry Maven repository .

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- These services were bundled with first-generation runtimes (also called App Engine legacy runtimes ), which include Python 2, Java 8, Go 1.11, and PHP 5.5.
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/bundled-services-overview)
- Source ID: `site-docs-reference-2`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- These services were bundled with first-generation runtimes (also called App Engine legacy runtimes ), which include Python 2, Java 8, Go 1.11, and PHP 5.5.
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Overview of legacy bundled services Stay organized with collections Save and categorize content based on your preferences.

