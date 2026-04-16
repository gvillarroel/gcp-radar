---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.879Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "App Engine Java bytecode processing (ASM library)"
feature_slug: "app-engine-java-bytecode-processing-asm-library"
latest_feature_date: "2018-12-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies"
keywords:
  - "app"
  - "engine"
  - "java"
  - "bytecode"
  - "processing"
  - "asm"
  - "library"
  - "was"
---

# App Engine Java bytecode processing (ASM library)

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The ASM library was upgraded to improve support for Java 11 bytecode handling.

## Extended Definition

The ASM library was upgraded to improve support for Java 11 bytecode handling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)

## Supporting Pages

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.
- Go Java Node.js PHP Python Ruby You can use warmup requests to reduce request and response latency during the time when your app's code is being loaded to a newly created instance.
- Enabling warmup requests Warmup requests are used by the App Engine scheduler, which controls the auto scaling of instances based on user-supplied configuration.

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine legacy bundled services APIs for Java Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- Cloud Client Libraries for Java A client library that embraces idioms of Java and provides high-level API abstractions so that you can easily access Google Cloud services.
- Configuration Files app.yaml Details about the configuration file that is used to configure App Engine deployed versions. cron.yaml Details about the configuration file that is used to configure regularly scheduled tasks on App Engine. dispatch.yaml Details about the configuration file that is used to route incoming requests to a specific service based on the path or hostname in the URL. index.yaml Details about the configuration file used to define the Datastore indexes of the data in your app.
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

### "Specifying dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 37
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specify it in your pom.xml file's <dependencies> entry: <dependencies> <dependency> <groupId>javax.servlet</groupId> <artifactId>javax.servlet-api</artifactId> <version>3.1.0</version> <type>jar</type> <scope>provided</scope> </dependency> </dependencies> Note that frameworks such as SparkJava or Spring Boot won't require the servlet library.
- You can use any Java compatible libraries with the Java runtime on the App Engine standard environment.
- Specify the Java servlet library Eclipse Jetty and Tomcat apps require the Java servlet library.
- See https://github.com/GoogleCloudPlatform/cloud-opensource-java/wiki/The-Google-Cloud-Platform-Libraries-BOM --> <dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>libraries-bom</artifactId> <version>26.28.0</version> <type>pom</type> <scope>import</scope> </dependency> </dependencies> </dependencyManagement> <dependencies> <dependency> <groupId>com.google.cloud</groupId> <artifactId>google-cloud-storage</artifactId> </dependency> </dependencies> You can configure the Cloud Client Libraries for Java to handle authentication automatically .

