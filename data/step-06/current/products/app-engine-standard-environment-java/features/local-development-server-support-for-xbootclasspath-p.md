---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.890Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Local development server support for -Xbootclasspath/p"
feature_slug: "local-development-server-support-for-xbootclasspath-p"
latest_feature_date: "2017-09-25"
deprecation_date: "2017-09-25"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service"
keywords:
  - "local"
  - "development"
  - "server"
  - "xbootclasspath"
  - "no"
  - "longer"
  - "supports"
  - "jvm"
---

# Local development server support for -Xbootclasspath/p

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The local development server no longer supports using the -Xbootclasspath/p JVM option; deprecated on 2017-09-25.

## Extended Definition

The local development server no longer supports using the -Xbootclasspath/p JVM option; deprecated on 2017-09-25.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) { // Production } else { // Local development server // which is: SystemProperty.Environment.Value.Development } Using the local Datastore emulator The development web server simulates Datastore using a local file-backed Datastore on your computer.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- Detecting the application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the SystemProperty.environment.value() method.
- To access the console, visit the URL / ah/admin on your server: http://localhost:8080/ ah/admin Command-Line Arguments For the local development server command options, see here .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### "Write your web service \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the downloaded project, edit the file springboot/src/main/java/com/example/appengine/springboot/DemoApplication.java to add some java imports and a REST hello handler: package com.example.appengine.springboot ; import org.springframework.boot.SpringApplication ; import org.springframework.boot.autoconfigure.SpringBootApplication ; import org.springframework.web.bind.annotation.GetMapping ; import org.springframework.web.bind.annotation.RestController ; @SpringBootApplication @RestController public class DemoApplication { public static void main ( String [] args ) { SpringApplication . run ( DemoApplication . class , args ); } @GetMapping ( "/" ) public String hello () { return "Hello world!" ; } } The modified class is a controller that starts Spring Boot's embedded Tomcat server and responds to GET requests at the root path ( '/' ) with the text "Hello world!" Run the server locally To run the server locally: Start a local web server using the Spring Boot Maven plugin. mvn spring - boot : run In your web browser, enter the following address: http://localhost:8080 The Hello World message from the sample app displays on the page.
- If you used the Spring Initializr link above, you should now have a file structure like the following: springboot/ pom.xml src/main/ appengine/ app.yaml java/com/example/appengine/springboot/ DemoApplication.java You can also add in the project pom.xml the Maven plugin that allows deployment of the application: <plugin> <groupId>com.google.cloud.tools</groupId> <artifactId>appengine-maven-plugin</artifactId> <version>2.8.1</version> <configuration> <projectId>YOUR PROJECT NAME</projectId> <version>YOUR VERSION</version> <promote>false</promote> </configuration> </plugin> Next steps Now that you've created a simple Java web server that listens to the correct port and you've specified the runtime in an app.yaml file, you're ready to deploy your service on App Engine .
- Your application must have a main class that starts a web server which responds to HTTP requests on the port specified by the PORT environment variable, typically 8080.
- Before you begin If you haven't already: Install the latest version of the Java Development Kit (JDK) for the App Engine runtime version you plan to use.

