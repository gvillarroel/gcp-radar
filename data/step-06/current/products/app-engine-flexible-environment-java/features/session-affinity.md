---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.282Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Session affinity"
feature_slug: "session-affinity"
latest_feature_date: "2019-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity"
keywords:
  - "session"
  - "affinity"
  - "app"
  - "engine"
  - "supports"
  - "keep"
  - "persistent"
  - "connections"
---

# Session affinity

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine supports session affinity to keep persistent connections routed to an instance; Compat runtimes support session affinity configuration in appengine-web.xml.

## Extended Definition

App Engine supports session affinity to keep persistent connections routed to an instance; Compat runtimes support session affinity configuration in appengine-web.xml.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)

## Supporting Pages

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference-required-3`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Specifically, you cannot customize the 404 response page when no servlet mapping is defined for a URL, the 403 quota error page, or the 500 server error page that appears after an App Engine internal error. web.xml features not supported The following web.xml features are not supported by App Engine: App Engine supports the <load-on-startup> element for servlet declarations.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring the web.xml deployment descriptor Stay organized with collections Save and categorize content based on your preferences.
- Here is a web.xml example that maps all URL paths ( / ) to the servlet class = mysite.server.ComingSoonServlet : <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app 3 1.xsd" version="3.1"> <servlet> <servlet-name>comingsoon</servlet-name> <servlet-class>mysite.server.ComingSoonServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>comingsoon</servlet-name> <url-pattern>/ </url-pattern> </servlet-mapping> </web-app> Servlets and URL paths web.xml defines mappings between URL paths and the servlets that handle requests with those paths.
- This file is named web.xml , and resides in the app's WAR under the WEB-INF/ directory. web.xml is part of the servlet standard for web applications.

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Important: App Engine applications must always be tolerant of session affinity interruptions, particularly because all App Engine instances are periodically restarted.
- Enabling session affinity can also limit the effectiveness of App Engine's load balancing algorithms and can cause your instance to become overloaded.

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins require the Dockerfile to be in src/main/docker/Dockerfile and the app.yaml file to be in src/main/appengine/app.yaml .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- In rare cases, outages can prevent App Engine from providing 30 seconds of shutdown time, which means the STOP and KILL signals might not be sent before an instance terminates.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.

