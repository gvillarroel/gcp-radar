---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.471Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Cloud Scheduler general availability"
feature_slug: "cloud-scheduler-general-availability"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/community"
keywords:
  - "scheduler"
  - "availability"
  - "became"
  - "generally"
  - "available"
  - "scheduled"
  - "unit"
  - "work"
---

# Cloud Scheduler general availability

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

Cloud Scheduler became generally available for scheduled unit-of-work execution (cron jobs).

## Extended Definition

Cloud Scheduler became generally available for scheduled unit-of-work execution (cron jobs).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/community](https://docs.cloud.google.com/appengine/docs/flexible/community)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.
- When a resource is depleted When an application consumes all of an allocated resource, the resource becomes unavailable until the quota is replenished.

### "Quickstart: Create a Java app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)
- Source ID: `site-docs-reference-required-4`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Removing or replacing it should not affect the execution of the samples in anyway. --> <parent> <groupId>com.google.cloud.samples</groupId> <artifactId>shared-configuration</artifactId> <version>1.2.0</version> </parent> <properties> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <exec.mainClass>com.example.appengine.Application</exec.mainClass> <maven.compiler.target>11</maven.compiler.target> <maven.compiler.source>11</maven.compiler.source> <micronaut.version>3.10.3</micronaut.version> </properties> <dependencies> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-runtime</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-client</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>javax.annotation</groupId> <artifactId>javax.annotation-api</artifactId> <version>1.3.2</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-server-netty</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.13.2</version> <scope>test</scope> </dependency> </dependencies> <build> <plugins> <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.0</version> <configuration> <projectId>GCLOUD CONFIG</projectId> <version>micronaut-helloworld</version> </configuration> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-shade-plugin</artifactId> <version>3.5.1</version> <executions> <execution> <phase>package</phase> <goals> <goal>shade</goal> </goals> <configuration> <transformers> <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"> <mainClass>${exec.mainClass}</mainClass> </transformer> <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/> </transformers> </configuration> </execution> </executions> </plugin> <plugin> <groupId>org.codehaus.mojo</groupId> <artifactId>exec-maven-plugin</artifactId> <version>3.1.1</version> <configuration> <executable>java</executable> <arguments> <argument>-noverify</argument> <argument>-XX:TieredStopAtLevel=1</argument> <argument>-Dcom.sun.management.jmxremote</argument> <argument>-classpath</argument> <classpath/> <argument>${exec.mainClass}</argument> </arguments> </configuration> </plugin> <plugin> <artifactId>maven-surefire-plugin</artifactId> <version>3.2.5</version> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-compiler-plugin</artifactId> <version>3.12.1</version> <configuration> <encoding>UTF-8</encoding> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> <executions> <execution> <id>test-compile</id> <goals> <goal>testCompile</goal> </goals> <configuration> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> </execution> </executions> </plugin> </plugins> </build> </project> For more information about pom.xml files, see the Maven documentation .
- See the License for the specific language governing permissions and limitations under the License. / package com.example.appengine ; import static org.junit.Assert.assertEquals ; import io.micronaut.context.ApplicationContext ; import io.micronaut.http.HttpRequest ; import io.micronaut.http.client.HttpClient ; import io.micronaut.runtime.server.EmbeddedServer ; import org.junit.AfterClass ; import org.junit.BeforeClass ; import org.junit.Test ; public class HelloControllerTest { private static EmbeddedServer server ; private static HttpClient client ; @BeforeClass public static void setupServer () { server = ApplicationContext . run ( EmbeddedServer . class ); client = server . getApplicationContext (). createBean ( HttpClient . class , server . getURL ()); } @AfterClass public static void stopServer () { if ( client != null ) { client . stop (); } if ( server != null ) { server . stop (); } } @Test public void testHelloWorldResponse () { String response = client . toBlocking (). retrieve ( HttpRequest .
- Specifies the runtime used by the app. runtime : java env : flex runtime config : operating system : ubuntu22 runtime version : 17 handlers : - url : /. script : this field is required, but ignored manual scaling : instances : 1 For more information on how the Java runtime works, see The Java runtime . pom.xml Hello World also includes a pom.xml file, which contains information about the project, such as its dependencies and the build target. <?xml version="1.0" encoding="UTF-8"?> <!-- Copyright 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### "App Engine community \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/community](https://docs.cloud.google.com/appengine/docs/flexible/community)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- This is a great place for App Engine team members and the developer community to discuss and track implementations of features or resolution of bug fixes, as well as share workarounds and patches to the SDK.
- There are many ways to get involved in the App Engine developer community, whether you want to learn from other App Engine developers and community resources, contribute to open source projects, or share your own knowledge and experience.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback App Engine community Stay organized with collections Save and categorize content based on your preferences.
- App Engine general discussions App Engine downtime notifications You can also visit the Google Cloud Slack community to discuss App Engine and other Google Cloud products.

