---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.490Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine regional availability in europe-west3"
feature_slug: "app-engine-regional-availability-in-europe-west3"
latest_feature_date: "2017-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/locations"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/create-app"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "availability"
  - "europe"
  - "west3"
  - "became"
  - "available"
---

# App Engine regional availability in europe-west3

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine became available in the europe-west3 (Frankfurt, Germany) region.

## Extended Definition

App Engine became available in the europe-west3 (Frankfurt, Germany) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)

## Supporting Pages

### "App Engine locations \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/locations](https://docs.cloud.google.com/appengine/docs/flexible/locations)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback App Engine locations Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Create a .NET app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/create-app)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- By default, App Engine uses the latest available LTS .NET version if you don't specify a runtime version in your app.yaml file.

### "Quickstart: Create a Java app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)
- Source ID: `site-docs-reference-required-4`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- You can generally select the region nearest to your app's users, but you should consider the locations where App Engine is available as well as the locations of the other Google Cloud products and services that your app uses.
- Note: Two locations, which are called europe-west and us-central in App Engine commands and in the Google Cloud console, are called europe-west1 and us-central1 , respectively, elsewhere in Google documentation.
- Removing or replacing it should not affect the execution of the samples in anyway. --> <parent> <groupId>com.google.cloud.samples</groupId> <artifactId>shared-configuration</artifactId> <version>1.2.0</version> </parent> <properties> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <exec.mainClass>com.example.appengine.Application</exec.mainClass> <maven.compiler.target>11</maven.compiler.target> <maven.compiler.source>11</maven.compiler.source> <micronaut.version>3.10.3</micronaut.version> </properties> <dependencies> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-runtime</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-client</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>javax.annotation</groupId> <artifactId>javax.annotation-api</artifactId> <version>1.3.2</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-server-netty</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.13.2</version> <scope>test</scope> </dependency> </dependencies> <build> <plugins> <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.0</version> <configuration> <projectId>GCLOUD CONFIG</projectId> <version>micronaut-helloworld</version> </configuration> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-shade-plugin</artifactId> <version>3.5.1</version> <executions> <execution> <phase>package</phase> <goals> <goal>shade</goal> </goals> <configuration> <transformers> <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"> <mainClass>${exec.mainClass}</mainClass> </transformer> <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/> </transformers> </configuration> </execution> </executions> </plugin> <plugin> <groupId>org.codehaus.mojo</groupId> <artifactId>exec-maven-plugin</artifactId> <version>3.1.1</version> <configuration> <executable>java</executable> <arguments> <argument>-noverify</argument> <argument>-XX:TieredStopAtLevel=1</argument> <argument>-Dcom.sun.management.jmxremote</argument> <argument>-classpath</argument> <classpath/> <argument>${exec.mainClass}</argument> </arguments> </configuration> </plugin> <plugin> <artifactId>maven-surefire-plugin</artifactId> <version>3.2.5</version> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-compiler-plugin</artifactId> <version>3.12.1</version> <configuration> <encoding>UTF-8</encoding> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> <executions> <execution> <id>test-compile</id> <goals> <goal>testCompile</goal> </goals> <configuration> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> </execution> </executions> </plugin> </plugins> </build> </project> For more information about pom.xml files, see the Maven documentation .

