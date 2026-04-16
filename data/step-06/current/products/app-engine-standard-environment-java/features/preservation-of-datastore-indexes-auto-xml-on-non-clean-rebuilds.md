---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.891Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Preservation of datastore-indexes-auto.xml on non-clean rebuilds"
feature_slug: "preservation-of-datastore-indexes-auto-xml-on-non-clean-rebuilds"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "preservation"
  - "datastore"
  - "indexes"
  - "auto"
  - "xml"
  - "non"
  - "clean"
  - "rebuilds"
---

# Preservation of datastore-indexes-auto.xml on non-clean rebuilds

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The local development/server rebuild process no longer removes datastore-indexes-auto.xml during non-clean rebuilds.

## Extended Definition

The local development/server rebuild process no longer removes datastore-indexes-auto.xml during non-clean rebuilds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/java/tools/using-local-server)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To disable automatic index configuration, create or edit the datastore-indexes.xml file in the WEB-INF/ directory, using the attribute autoGenerate="false" for the <datastore-indexes> element.
- This generates a file named datastore-indexes-auto.xml in the directory WEB-INF/appengine-generated/ in the WAR.
- To specify the automatic ID policy, set the datastore.auto id allocation policy system property to either sequential or scattered . -Ddatastore.auto id allocation policy=scattered To set this system property through a flag passed to the dev appserver macro: java dev appserver --jvm flag=-Ddatastore.auto id allocation policy=scattered Simulating User Accounts The development web server simulates Google Accounts with its own sign-in and sign-out pages.
- As described in Datastore Index Configuration , the development server can generate configuration for Datastore indexes needed by your application, determined from the queries it performs while you are testing it.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.
- Deploy the index configuration file To deploy the index.yaml configuration file, run the following command: gcloud app deploy index.yaml Delete unused indexes When you change or remove an index from the index configuration, the original index is not deleted from App Engine automatically.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- You can specify the set of indexes your application requires in a WEB-INF/datastore-indexes.xml file, or they can be generated automatically as you test your application in the Development Server.
- LESS THAN , today ); for ( Entity taskEntity : datastore . prepare ( query ). asIterable ()) { if ( "done" . equals ( taskEntity . getProperty ( "status" ))) { datastore . delete ( taskEntity ); } else { taskEntity . setProperty ( "status" , "overdue" ); datastore . put ( taskEntity ); } } This illustrates several basic points: The actual datastore itself is accessed through a com.google.appengine.api.datastore.DatastoreService object, produced from a com.google.appengine.api.datastore.DatastoreServiceFactory .
- A common pattern of usage is: // Get a handle on the datastore itself DatastoreService datastore = DatastoreServiceFactory . getDatastoreService (); // Lookup data by known key name Entity userEntity = datastore . get ( KeyFactory . createKey ( "UserInfo" , email )); // Or perform a query Query query = new Query ( "Task" ); query . addFilter ( "dueDate" , Query .
- If, for example, vendor X wanted to provide an alternate implementation of the DatastoreService, they would have to provide an implementation of com.google.appengine.api.datastore.IDatastoreServiceFactory that returns their implementation for com.google.appengine.api.datastore.DatastoreService .

