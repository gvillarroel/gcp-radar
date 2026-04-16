---
title: "Write your web service \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml?tab=go
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app/writing-web-service
  title: "Write your web service \_|\_ App Engine standard environment \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Write your web service
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are deploying a new Java web service to Google Cloud,
we recommend getting started with
Cloud Run .
This guide shows how to write a Java web service to run in the App Engine
standard environment. To learn more about the Java runtime and how it
works, see Java Runtime Environment .
Before you begin
If you haven't already:
Install the latest version of the Java Development Kit (JDK) for the App Engine runtime version
you plan to use.
Download
and install
Apache Maven to build, run, and deploy the sample app.
Key points
App Engine starts your application by uploading an executable JAR
application.
Your application must have a main class that starts a web server which
responds to HTTP requests on the port specified by the PORT environment
variable, typically 8080.
You need an app.yaml
file to deploy your service to App Engine.
You can use dependencies by listing them in your pom.xml
file. For more information, see Using Java libraries .
Create a main class
The core of your web service is the HTTP server. The sample code in this guide
uses the Spring Boot
framework to handle HTTP requests, but you are free to use a web framework of
your choice.
Generate a Spring Boot project for Java that uses the Maven build system and contains the
Spring Web dependency. To get started, click the following link:
Go to Spring Initializr
In Spring Initializer, click the Generate button to generate and download your project.
In the downloaded project, edit the file springboot/src/main/java/com/example/appengine/springboot/DemoApplication.java
to add some java imports and a REST hello handler:
package com.example.appengine.springboot ;
import org.springframework.boot.SpringApplication ;
import org.springframework.boot.autoconfigure.SpringBootApplication ;
import org.springframework.web.bind.annotation.GetMapping ;
import org.springframework.web.bind.annotation.RestController ;
@SpringBootApplication
@RestController
public class DemoApplication {
public static void main ( String [] args ) {
SpringApplication . run ( DemoApplication . class , args );
}
@GetMapping ( "/" )
public String hello () {
return "Hello world!" ;
}
}
The modified class is a controller that starts Spring Boot's embedded Tomcat
server and responds to GET requests at the root path ( '/' ) with the text "Hello world!"
Run the server locally
To run the server locally:
Start a local web server using the Spring Boot Maven plugin.
mvn spring - boot : run
In your web browser, enter the following address:
http://localhost:8080
The Hello World message from the sample app displays on the page. In your
terminal window, press Ctrl+C to exit the web server.
Create the app.yaml file
To specify settings for your app in the App Engine runtime environment:
Create a file named app.yaml in the following directory:
springboot/src/main/appengine/
Add the following contents to the file:
Java 21
runtime: java21
The app.yaml file can also specify network settings, scaling settings,
and more. For more information, see the
app.yaml reference .
If you used the Spring Initializr link above, you should now have a file structure like the following:
springboot/
pom.xml
src/main/
appengine/
app.yaml
java/com/example/appengine/springboot/
DemoApplication.java
You can also add in the project pom.xml the Maven plugin that allows deployment of the application:
<plugin>
<groupId>com.google.cloud.tools</groupId>
<artifactId>appengine-maven-plugin</artifactId>
<version>2.8.1</version>
<configuration>
<projectId>YOUR_PROJECT_NAME</projectId>
<version>YOUR_VERSION</version>
<promote>false</promote>
</configuration>
</plugin>
Next steps
Now that you've created a simple Java web server that listens to the correct
port and you've specified the runtime in an app.yaml file, you're ready to
deploy your service on App Engine .
Previous
arrow_back
Create your project
Next
Deploy your web service
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
