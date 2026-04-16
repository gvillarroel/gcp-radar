---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.291Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Subnetwork configuration support"
feature_slug: "subnetwork-configuration-support"
latest_feature_date: "2017-09-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
keywords:
  - "subnetwork"
  - "configuration"
  - "compat"
  - "runtimes"
  - "specifying"
  - "name"
  - "appengine"
  - "web"
---

# Subnetwork configuration support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

Compat runtimes support specifying subnetwork_name in appengine-web.xml.

## Extended Definition

Compat runtimes support specifying subnetwork_name in appengine-web.xml.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)

## Supporting Pages

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference-required-3`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is a web.xml example that maps all URL paths ( / ) to the servlet class = mysite.server.ComingSoonServlet : <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app 3 1.xsd" version="3.1"> <servlet> <servlet-name>comingsoon</servlet-name> <servlet-class>mysite.server.ComingSoonServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>comingsoon</servlet-name> <url-pattern>/ </url-pattern> </servlet-mapping> </web-app> Servlets and URL paths web.xml defines mappings between URL paths and the servlets that handle requests with those paths.
- This file is named web.xml , and resides in the app's WAR under the WEB-INF/ directory. web.xml is part of the servlet standard for web applications.
- The deployment descriptor is a file named web.xml .
- Specifically, you cannot customize the 404 response page when no servlet mapping is defined for a URL, the 403 quota error page, or the 500 server error page that appears after an App Engine internal error. web.xml features not supported The following web.xml features are not supported by App Engine: App Engine supports the <load-on-startup> element for servlet declarations.

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organizing your files Your source tree should look like this: MyDir/ [pom.xml] [build.gradle] [index.yaml] [cron.yaml] [dispatch.yaml] src/main/ appengine/ app.yaml docker/ [Dockerfile] java/ com.example.mycode/ MyCode.java webapp/ [index.html] [jsp.jsp] WEB-INF/ [web.xml] Local testing When testing in your local environment, you may use emulated Google Cloud services, rather than remote Google Cloud services.
- If you use any these files, you must deploy them separately with the gcloud app deploy command. web.xml is optional and only needed if you are not using Servlet 3.x annotations.
- You can use the following emulators: Datastore Pub/Sub Bigtable Use the gcloud command to start them before you run your app: gcloud beta emulators datastore start gcloud beta emulators pubsub start gcloud beta emulators bigtable start Maven Add these lines in your maven pom.xml file to add the Jetty 9 Maven Plugin : < plugin > < groupId>org . eclipse . jetty < / groupId > < artifactId>jetty - maven - plugin < / artifactId > < version>9 .4.2 . v20170220 < / version > < / plugin > To run your app locally, use the Maven command: mvn jetty : run - exploded Gradle Follow the Creating a new Gradle project instructions to add the Gretty Gradle plugin to your build.gradle , and use the command: gradle jettyRun Deploy your app To initialize the Google Cloud CLI, run: gcloud init After completing the configurations, you can use the Google Cloud CLI to deploy this directory containing the app.yaml and WAR files using: gcloud app deploy app . yaml If you are using any of the optional configuration files ( index.yaml , cron.yaml , and dispatch.yaml ) deploy them separately with the gcloud command.
- Examples Specifying Jetty version 9 (default / optional): runtime config : jdk : openjdk8 server : jetty9 Specifying Java version 8: runtime config : jdk : openjdk8 Sample app.yaml for Java 8: runtime : java env : flex handlers : - url : /. script : this field is required, but ignored See pom.xml for configuring Maven and build.gradle for configuring Gradle.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Provide an app.yaml file Your app.yaml configuration file must contain at least the following settings: runtime: custom env: flex For information about what else you can set for your app, see Configuring your App with app.yaml .
- For example, Cloud SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins require the Dockerfile to be in src/main/docker/Dockerfile and the app.yaml file to be in src/main/appengine/app.yaml .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Integrate your application with Google Cloud Applications running in custom runtimes can use the Google Cloud Client Libraries to access Google Cloud services.

