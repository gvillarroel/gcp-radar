---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.241Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Native URL stream handler default"
feature_slug: "native-url-stream-handler-default"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "handler"
  - "native"
  - "stream"
  - "development"
  - "default"
  - "server"
  - "local"
---

# Native URL stream handler default

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The local development server now sets the url-stream-handler configuration parameter to native by default to match Java 8 production behavior.

## Extended Definition

The local development server now sets the url-stream-handler configuration parameter to native by default to match Java 8 production behavior.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference-4`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) { // Production } else { // Local development server // which is: SystemProperty.Environment.Value.Development } Using the local Datastore emulator The development web server simulates Datastore using a local file-backed Datastore on your computer.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- Detecting the application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the SystemProperty.environment.value() method.
- To access the console, visit the URL / ah/admin on your server: http://localhost:8080/ ah/admin Command-Line Arguments For the local development server command options, see here .

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cache expiration By default, the caching headers that App Engine static file and directory handlers add to responses instruct clients and web proxies such as the Google Front End to expire the cache after 10 minutes.
- Responses App Engine calls the handler script with a Request and waits for the script to return; all data written to the standard output stream is sent as the HTTP response.
- If a script handler generates a response larger than this limit, the server sends back an empty response with a 500 Internal Server Error status code.
- You can change the default expiration for all static file and directory handlers by specifying the default expiration element in your app.yaml file.

