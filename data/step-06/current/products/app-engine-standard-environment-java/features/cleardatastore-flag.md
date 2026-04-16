---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.909Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "clearDatastore flag"
feature_slug: "cleardatastore-flag"
latest_feature_date: "2017-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "cleardatastore"
  - "flag"
  - "was"
  - "added"
  - "clear"
  - "local"
  - "datastore"
  - "when"
---

# clearDatastore flag

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

A clearDatastore flag was added to clear the local datastore when startup occurs.

## Extended Definition

A clearDatastore flag was added to clear the local datastore when startup occurs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To adjust this level of consistency, set the datastore.default high rep job policy unapplied job pct system property with a value corresponding to the amount of eventual consistency you want your application to see. -Ddatastore.default high rep job policy unapplied job pct=20 If you are setting this property using the command prompt java dev appserver.sh , you need to use --jvm flag=... to set the property: google cloud sdk/bin/java-dev appserver.sh --jvm flag=-Ddatastore.default high rep job policy unapplied job pct=20 The valid range for datastore.default high rep job policy unapplied job pct is between 0 and 100.
- To specify the automatic ID policy, set the datastore.auto id allocation policy system property to either sequential or scattered . -Ddatastore.auto id allocation policy=scattered To set this system property through a flag passed to the dev appserver macro: java dev appserver --jvm flag=-Ddatastore.auto id allocation policy=scattered Simulating User Accounts The development web server simulates Google Accounts with its own sign-in and sign-out pages.
- For example: if (SystemProperty.environment.value() == SystemProperty.Environment.Value.Production) { // Production } else { // Local development server // which is: SystemProperty.Environment.Value.Development } Using the local Datastore emulator The development web server simulates Datastore using a local file-backed Datastore on your computer.
- The Cloud Datastore consistency model By default, the local Datastore is configured so that the percentage of Datastore writes that are not immediately visible in global queries set to 10%.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Deploy the index configuration file To deploy the index.yaml configuration file, run the following command: gcloud app deploy index.yaml Delete unused indexes When you change or remove an index from the index configuration, the original index is not deleted from App Engine automatically.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- If a request tries to read the session data when memcache is not available (or the session data has been flushed), it will fail over to Datastore, which might not yet have the most recent session data.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

