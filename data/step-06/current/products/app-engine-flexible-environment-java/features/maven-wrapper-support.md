---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.263Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Maven wrapper support"
feature_slug: "maven-wrapper-support"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "maven"
  - "wrapper"
  - "java"
  - "runtime"
  - "supports"
  - "wrappers"
  - "manage"
  - "project"
---

# Maven wrapper support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java runtime supports using Maven wrappers to manage a project's Maven dependency.

## Extended Definition

The Java runtime supports using Maven wrappers to manage a project's Maven dependency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Specifying Jetty version 9 (default / optional): runtime config : jdk : openjdk8 server : jetty9 Specifying Java version 8: runtime config : jdk : openjdk8 Sample app.yaml for Java 8: runtime : java env : flex handlers : - url : /. script : this field is required, but ignored See pom.xml for configuring Maven and build.gradle for configuring Gradle.
- Java 8 supports: The Eclipse Jetty 9 runtime and runs Jetty 9 using Servlet 3.1.
- You can use the following emulators: Datastore Pub/Sub Bigtable Use the gcloud command to start them before you run your app: gcloud beta emulators datastore start gcloud beta emulators pubsub start gcloud beta emulators bigtable start Maven Add these lines in your maven pom.xml file to add the Jetty 9 Maven Plugin : < plugin > < groupId>org . eclipse . jetty < / groupId > < artifactId>jetty - maven - plugin < / artifactId > < version>9 .4.2 . v20170220 < / version > < / plugin > To run your app locally, use the Maven command: mvn jetty : run - exploded Gradle Follow the Creating a new Gradle project instructions to add the Gretty Gradle plugin to your build.gradle , and use the command: gradle jettyRun Deploy your app To initialize the Google Cloud CLI, run: gcloud init After completing the configurations, you can use the Google Cloud CLI to deploy this directory containing the app.yaml and WAR files using: gcloud app deploy app . yaml If you are using any of the optional configuration files ( index.yaml , cron.yaml , and dispatch.yaml ) deploy them separately with the gcloud command.
- Examples To specify Java 25 on Ubuntu 24: runtime : java env : flex runtime config : operating system : "ubuntu24" runtime version : "25" To specify the latest supported Java version on Ubuntu 24: runtime : java env : flex runtime config : operating system : "ubuntu24" Previous runtime versions Warning: Java 8 has reached end of support.

### "Quickstart: Create a Java app in the App Engine flexible environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/create-app](https://docs.cloud.google.com/appengine/docs/flexible/java/create-app)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing or replacing it should not affect the execution of the samples in anyway. --> <parent> <groupId>com.google.cloud.samples</groupId> <artifactId>shared-configuration</artifactId> <version>1.2.0</version> </parent> <properties> <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> <exec.mainClass>com.example.appengine.Application</exec.mainClass> <maven.compiler.target>11</maven.compiler.target> <maven.compiler.source>11</maven.compiler.source> <micronaut.version>3.10.3</micronaut.version> </properties> <dependencies> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-runtime</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-client</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>javax.annotation</groupId> <artifactId>javax.annotation-api</artifactId> <version>1.3.2</version> <scope>compile</scope> </dependency> <dependency> <groupId>io.micronaut</groupId> <artifactId>micronaut-http-server-netty</artifactId> <version>${micronaut.version}</version> <scope>compile</scope> </dependency> <dependency> <groupId>junit</groupId> <artifactId>junit</artifactId> <version>4.13.2</version> <scope>test</scope> </dependency> </dependencies> <build> <plugins> <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.0</version> <configuration> <projectId>GCLOUD CONFIG</projectId> <version>micronaut-helloworld</version> </configuration> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-shade-plugin</artifactId> <version>3.5.1</version> <executions> <execution> <phase>package</phase> <goals> <goal>shade</goal> </goals> <configuration> <transformers> <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer"> <mainClass>${exec.mainClass}</mainClass> </transformer> <transformer implementation="org.apache.maven.plugins.shade.resource.ServicesResourceTransformer"/> </transformers> </configuration> </execution> </executions> </plugin> <plugin> <groupId>org.codehaus.mojo</groupId> <artifactId>exec-maven-plugin</artifactId> <version>3.1.1</version> <configuration> <executable>java</executable> <arguments> <argument>-noverify</argument> <argument>-XX:TieredStopAtLevel=1</argument> <argument>-Dcom.sun.management.jmxremote</argument> <argument>-classpath</argument> <classpath/> <argument>${exec.mainClass}</argument> </arguments> </configuration> </plugin> <plugin> <artifactId>maven-surefire-plugin</artifactId> <version>3.2.5</version> </plugin> <plugin> <groupId>org.apache.maven.plugins</groupId> <artifactId>maven-compiler-plugin</artifactId> <version>3.12.1</version> <configuration> <encoding>UTF-8</encoding> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> <executions> <execution> <id>test-compile</id> <goals> <goal>testCompile</goal> </goals> <configuration> <compilerArgs> <arg>-parameters</arg> </compilerArgs> <annotationProcessorPaths> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-inject-java</artifactId> <version>${micronaut.version}</version> </path> <path> <groupId>io.micronaut</groupId> <artifactId>micronaut-validation</artifactId> <version>${micronaut.version}</version> </path> </annotationProcessorPaths> </configuration> </execution> </executions> </plugin> </plugins> </build> </project> For more information about pom.xml files, see the Maven documentation .
- Specifies the runtime used by the app. runtime : java env : flex runtime config : operating system : ubuntu22 runtime version : 17 handlers : - url : /. script : this field is required, but ignored manual scaling : instances : 1 For more information on how the Java runtime works, see The Java runtime . pom.xml Hello World also includes a pom.xml file, which contains information about the project, such as its dependencies and the build target. <?xml version="1.0" encoding="UTF-8"?> <!-- Copyright 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- To initialize the gcloud CLI, run the following command: gcloud init Required roles To get the permissions that you need to complete this quickstart, ask your administrator to grant you the following IAM roles: App Engine Admin ( roles/appengine.appAdmin ) on the project Cloud Build Editor ( roles/cloudbuild.builds.editor ) on the project Storage Object Admin ( roles/storage.objectAdmin ) on the project Logs Viewer ( roles/logging.viewer ) on the project Service Account User ( roles/iam.serviceAccountUser ) on the service account Ask your administrator to grant the following roles for the App Engine default service account: Artifact Registry Reader ( roles/artifactregistry.reader ) on the project Cloud Build Service Account ( roles/cloudbuild.builds.builder ) on the project Storage Object Viewer ( roles/storage.objectViewer ) on the project For more information about granting roles, see Manage access to projects, folders, and organizations .
- See the License for the specific language governing permissions and limitations under the License. --> <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> <modelVersion>4.0.0</modelVersion> <groupId>com.example.appengine.flexible</groupId> <artifactId>micronaut-helloworld</artifactId> <version>0.1</version> <!-- The parent pom defines common style checks and testing strategies for our samples.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go to Manage resources In the project list, select the project that you want to delete, and then click Delete .
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.

