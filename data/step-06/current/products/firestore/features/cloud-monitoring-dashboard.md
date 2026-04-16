---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:17.869Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "Cloud Monitoring dashboard"
feature_slug: "cloud-monitoring-dashboard"
latest_feature_date: "2024-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/docs/monitor-usage"
  - "https://docs.cloud.google.com/firestore/docs/manage-databases"
  - "https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library"
keywords:
  - "monitoring"
  - "dashboard"
  - "console"
  - "includes"
  - "each"
  - "firestore"
  - "database"
---

# Cloud Monitoring dashboard

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console includes a monitoring dashboard for each Firestore database.

## Extended Definition

The Google Cloud console includes a monitoring dashboard for each Firestore database.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)

## Supporting Pages

### Monitor usage \_|\_ Firestore in Native mode \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/docs/monitor-usage](https://docs.cloud.google.com/firestore/docs/monitor-usage)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Aggregated usage dashboard If your project has multiple Firestore databases, you can view aggregated usage metrics in the Google Cloud console or Firebase console.
- Database usage dashboard To view usage metrics for a Firestore database, open the database Usage page in the Google Cloud console.
- Go to Google Cloud project project usage The project usage dashboard shows document operations over time as follows: Firebase console Go to the Firestore usage page (Firebase console) Usage dashboard and billing reports The Firestore usage dashboards in the Firebase and Cloud consoles provide an estimate of usage.
- Cloud Monitoring includes the following Firestore metrics: Metric Name Description Document Reads The number of successful document reads.

### "Create and manage databases \_|\_ Firestore in Native mode \_|\_ Google\

- URL: [https://docs.cloud.google.com/firestore/docs/manage-databases](https://docs.cloud.google.com/firestore/docs/manage-databases)
- Source ID: `site-docs-reference`
- Final score: 121
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Monitoring Firestore metrics are reported under two monitored resources. firestore.googleapis.com/Database firestore instance (Legacy) You can inspect aggregate metrics at the database level by looking at firestore.googleapis.com/Database .
- Set up Firestore Security Rules for your databases Use the Firebase CLI to deploy Firestore Security Rules to each of your databases.
- To delete a database use the Google Cloud CLI . gcloud Use the gcloud firestore databases list command to list all the databases in your project. gcloud firestore databases list Firebase CLI Use the firebase firestore:databases:list command to list all the databases in your project. firebase firestore:databases:list View database details To view details about a single database, use one of the following methods: gcloud Use the gcloud firestore databases describe command: gcloud firestore databases describe --database= DATABASE ID Firebase CLI Use the firebase firestore:databases:get command: firebase firestore:databases:get DATABASE ID Replace DATABASE ID with a database ID.
- Required roles and permissions To create and manage databases, you'll need the following Identity and Access Management role: Cloud Datastore Owner ( roles/datastore.owner ) That role grants the following permissions that you need to create and manage databases: Create a database: datastore.databases.create Read database configuration: datastore.databases.getMetadata Configure a database: datastore.databases.update Delete a database: datastore.databases.delete Clone a database: datastore.databases.clone Create a database To create a database, use one of the following methods: Console In the Google Cloud console, go to the Databases page.

### "Quickstart: Create a Firestore database by using a server client library\

- URL: [https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library](https://docs.cloud.google.com/firestore/native/docs/create-database-server-client-library)
- Source ID: `site-docs-reference-required-4`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . const snapshot = await db . collection ( 'users' ). get (); snapshot . forEach (( doc ) = > { console . log ( doc . id , '=>' , doc . data ()); }); Go To authenticate to Firestore, set up Application Default Credentials.
- For more information, see Set up authentication for a local development environment . doc ref = firestore . doc " #{ collection path } /aturing" doc ref . set ( { first : "Alan" , middle : "Mathison" , last : "Turing" , born : 1912 } ) puts "Added data to the aturing document in the users collection." Read data To quickly verify that you've added data to Firestore, use the data viewer in the Firebase console .
- Create a Firestore database by using a server client library This quickstart shows you how to set up Firestore, add data, and read data by using the C#, Go, Java, Node.js, PHP, Python, or Ruby server client library.
- Home Documentation Databases Firestore in Native mode Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

