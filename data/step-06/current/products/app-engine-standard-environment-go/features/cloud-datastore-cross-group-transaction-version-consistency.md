---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.753Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Cloud Datastore cross-group transaction version consistency"
feature_slug: "cloud-datastore-cross-group-transaction-version-consistency"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
keywords:
  - "datastore"
  - "cross"
  - "group"
  - "transaction"
  - "version"
  - "consistency"
  - "transactions"
  - "were"
---

# Cloud Datastore cross-group transaction version consistency

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Cross-group transactions were changed so new and updated entities now receive identical version numbers regardless of entity group.

## Extended Definition

Cross-group transactions were changed so new and updated entities now receive identical version numbers regardless of entity group.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)

## Supporting Pages

### Defining runtime settings | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-4-http`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defining runtime settings | App Engine standard environment | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in App Engine Standard environment Start free Overview Guides Reference Resources App Engine environments App Engine standard environment Learn about the standard environment App Engine flexible environment Learn about the flexible environment App Engine Migration Center Learn how to migrate to the latest supported versions Technology areas More Overview Guides Reference Resources App Engine environments More Cross-product tools More Console App Engine standard environment App Engine home Standard environment overview Choose a language and environment Discover standard environment runtimes Go runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Java runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Upgrade an existing app Re-package a WAR file Migrate from the first-generation to the second-generation runtimes Node.js runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Update your web service View logs PHP runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Python runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Handle data Add Firebase Authenticate users Personalize data Clean up Upgrade an existing app Overview Migrate from the first-generation to the second-generation runtimes Migrate to Python 3 runtime Migrate legacy bundled services Prepare configuration files for the Python 3 environment Test and deploy your app Ruby runtime Overview Create an app Get started Set up your environment Set up your development environment Set up optional tools for Java Apache Maven Using Maven and the App Engine plugin Maven Plugin goals and parameters Gradle Use the App Engine plugin Tasks and properties Set up your Cloud project Grant access Set up access control View roles that grant access to App Engine Configure service accounts Google-managed service agent Design your app Structure web services Host a static website Communicate between your services Handle requests Route requests Define configuration files Go Define runtime settings Specify dependencies Java Define runtime settings Specify dependencies Node.js Define runtime settings Specify dependencies Run a custom build step PHP Define runtime settings Specify dependencies Python Define runtime settings Specify dependencies Ruby Define runtime settings Specify dependencies Test and deploy your app Test on the local development server Using the local development server Command options Configure your app Set up networking Map custom domains Secure custom domains with SSL Secure your app with minimum TLS Virtual private cloud (VPC) Connect to a VPC network Connect to a Shared VPC network Shared VPC with connectors in service projects Shared VPC with connectors in the host project Set up a static outbound IP address Store data and files Overview Use Cloud Firestore in Datastore mode Use Cloud SQL Use Cloud Storage (cloud file hosting) Store and serve static files Read and write temporary files Cache data with Memorystore Create triggers Write and respond to Pub/Sub messages Send messages with third-party services Secure your app Overview Specify Ingress and Egress settings Understand firewalls Create firewall rules Authenticate users Operate and maintain Manage instances Label resources Manage your app's traffic Migrate traffic Split traffic Schedule cron jobs Run asynchronous tasks Configure warmup requests Automate tasks Get started with the Admin API Monitor, log, and debug Access audit logs Write and view logs Monitor and alerts latency Understand Performance with Cloud Profiler Access legacy bundled services Overview Go 1.12+ Java 11+ PHP 7/8 Python 3 Overview Blobstore overview Deferred overview Mail overview Available APIs Overview App Identity Blobstore Capabilities Datastore Overview Client library concepts API overview Asynchronous operation Callbacks Creating, retrieving, updating, and deleting entities Creating and using entity keys Entity, properties and keys Entity property reference Indexes Metadata Projection queries Queries Query cursors Query data consistency Query restrictions Retrieving query results Statistics Structuring data for strong consistency Transactions Managing Datastore from the Console Overview Viewing Datastore Statistics Configuring Datastore indexes Images Mail Mail API Overview Bulk mail guidelines Sending mail Receiving mail Receiving bounce notification Mail with headers or attachments Memcache Memcache Overview Using Memcache Memcache Examples Memcache Audit Logs Modules Namespaces API Namespaces API Overview Multitenancy with Namespaces NDB Client Library for Cloud Datastore Overview Administration Asynchronous operation Caching Creating, retrieving, updating, and deleting entities Creating entity models Creating and using entity keys Configuring Datastore indexes Projection queries Queries Transactions Writing property subclasses NDB Client Library Reference Entity Property Reference Context Exceptions Functions Future Key Metadata Model PolyModel Query Search Documents and indexes Query strings Query and sorting options Handling search results Faceted search Best practices Using the local development server Reference for Python Cursor Document Facet Classes FacetOptions FacetRange FacetRefinement FacetResult FacetResultValue Field Classes FieldExpression GeoPoint GetResponse Index MatchScorer Query QueryOptions RescoringMatchScorer ScoredDocument SearchResults SortExpression SortOptions Functions Exceptions Task Queues Task Queue Overview Using Push Queues Using Push Queues Creating Push Queues Creating Push Tasks Creating Task Handlers Deleting Tasks and Queues Retrying Failed Push Tasks Testing Push Queues in the Development Server Using Pull Queues Using Pull Queues Creating Pull Queues Creating Pull Tasks Leasing Pull Tasks URL Fetch Outbound requests Issue HTTP(S) requests Users Overview User objects Login URLs Admin users Migration center Migration resources Troubleshoot Introduction Deployment Serving Elevated latency Connectivity Community resources AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools App Engine standard environment App Engine flexible environment App Engine Migration Center Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- About app.yaml files You can specify the runtime configuration for your Go 1.12+ app, including versions and URLs, in the app.yaml file.
- This file acts as a deployment descriptor of a specific service version.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- US/Europe Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.026/GB/month Asia (Japan) Resource Cost Code & Static Data Storage - First 1 GB Free Code & Static Data Storage - Exceeding 1 GB 0.023/GB/month"> Firestore in Datastore mode (Datastore) The Stored Data (billable) quota refers to all data stored for the application in Datastore and Blobstore.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- This gives you the opportunity to leave an older version of the app running while new indexes are being built, or to revert to the older version immediately if a problem is discovered with a newer version.

