---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.887Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java local development server native URLStreamHandler default"
feature_slug: "java-local-development-server-native-urlstreamhandler-default"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "java"
  - "local"
  - "development"
  - "server"
  - "native"
  - "urlstreamhandler"
  - "default"
  - "now"
---

# Java local development server native URLStreamHandler default

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java local development server now defaults the url-stream-handler configuration parameter to native behavior.

## Extended Definition

The Java local development server now defaults the url-stream-handler configuration parameter to native behavior.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The local development server emulates the App Engine Java runtime environment and all of its services, including Datastore.
- The Google Cloud CLI for Java includes a local development server for testing your application on your computer.
- To adjust this level of consistency, set the datastore.default high rep job policy unapplied job pct system property with a value corresponding to the amount of eventual consistency you want your application to see. -Ddatastore.default high rep job policy unapplied job pct=20 If you are setting this property using the command prompt java dev appserver.sh , you need to use --jvm flag=... to set the property: google cloud sdk/bin/java-dev appserver.sh --jvm flag=-Ddatastore.default high rep job policy unapplied job pct=20 The valid range for datastore.default high rep job policy unapplied job pct is between 0 and 100.
- To specify the automatic ID policy, set the datastore.auto id allocation policy system property to either sequential or scattered . -Ddatastore.auto id allocation policy=scattered To set this system property through a flag passed to the dev appserver macro: java dev appserver --jvm flag=-Ddatastore.auto id allocation policy=scattered Simulating User Accounts The development web server simulates Google Accounts with its own sign-in and sign-out pages.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference-2`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that if you use the legacy bundled services to test your app using the local development server , the available routing and dispatch features are slightly different.
- When you are testing locally, the routing behavior depends on the particular runtime and development environment that you're using.
- To programmatically create URLs that work with both production and development servers, use the get hostname method.
- For example, to describe version 20191023t101741 for the default service, enter gcloud app versions describe 20191023t101741 --service=default Domain name is included in the request data The domain name used for the request is included in the request data that is passed to your app.

