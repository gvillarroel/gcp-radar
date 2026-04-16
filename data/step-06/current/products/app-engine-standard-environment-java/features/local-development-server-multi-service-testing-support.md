---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.906Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Local development server multi-service testing support"
feature_slug: "local-development-server-multi-service-testing-support"
latest_feature_date: "2017-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine"
keywords:
  - "local"
  - "development"
  - "server"
  - "multi"
  - "testing"
  - "added"
  - "multiple"
---

# Local development server multi-service testing support

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Added support for testing multiple services with the local development server.

## Extended Definition

Added support for testing multiple services with the local development server.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Google Cloud CLI for Java includes a local development server for testing your application on your computer.
- For example: if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) { // Production } else { // Local development server // which is: SystemProperty.Environment.Value.Development } Using the local Datastore emulator The development web server simulates Datastore using a local file-backed Datastore on your computer.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- As described in Datastore Index Configuration , the development server can generate configuration for Datastore indexes needed by your application, determined from the queries it performs while you are testing it.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### An overview of App Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine](https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Versions Having multiple versions of your app within each service allows you to quickly switch between different versions of that app for rollbacks, testing, or other temporary events.
- In this diagram, the app has two services that contain multiple versions, and two of those versions are actively running on multiple instances: Other Google Cloud services, for example Datastore, are shared across your App Engine app.
- You can route all traffic to a specific version of your app by " migrating traffic " ( standard flexible ) or route to multiple versions of your app by " splitting traffic " ( standard flexible ) .
- Therefore, you can run your whole app in a single service or you can design and deploy multiple services to run as a set of microservices.

