---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.287Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Cloud Datastore pricing model"
feature_slug: "cloud-datastore-pricing-model"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "datastore"
  - "pricing"
  - "model"
  - "was"
  - "made"
  - "effective"
---

# Cloud Datastore pricing model

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The new Cloud Datastore pricing model was made effective.

## Extended Definition

The new Cloud Datastore pricing model was made effective.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample index.yaml Every Datastore query made by an application needs a corresponding index.
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.

### Build a Python app on App Engine | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
- Source ID: `site-docs-reference-required-6-http`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Build a Python app on App Engine | App Engine standard environment | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in App Engine Standard environment Start free Overview Guides Reference Resources App Engine environments App Engine standard environment Learn about the standard environment App Engine flexible environment Learn about the flexible environment App Engine Migration Center Learn how to migrate to the latest supported versions Technology areas More Overview Guides Reference Resources App Engine environments More Cross-product tools More Console App Engine standard environment App Engine home Standard environment overview Choose a language and environment Discover standard environment runtimes Go runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Java runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Upgrade an existing app Re-package a WAR file Migrate from the first-generation to the second-generation runtimes Node.js runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Update your web service View logs PHP runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Python runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Handle data Add Firebase Authenticate users Personalize data Clean up Upgrade an existing app Overview Migrate from the first-generation to the second-generation runtimes Migrate to Python 3 runtime Migrate legacy bundled services Prepare configuration files for the Python 3 environment Test and deploy your app Ruby runtime Overview Create an app Get started Set up your environment Set up your development environment Set up optional tools for Java Apache Maven Using Maven and the App Engine plugin Maven Plugin goals and parameters Gradle Use the App Engine plugin Tasks and properties Set up your Cloud project Grant access Set up access control View roles that grant access to App Engine Configure service accounts Google-managed service agent Design your app Structure web services Host a static website Communicate between your services Handle requests Route requests Define configuration files Go Define runtime settings Specify dependencies Java Define runtime settings Specify dependencies Node.js Define runtime settings Specify dependencies Run a custom build step PHP Define runtime settings Specify dependencies Python Define runtime settings Specify dependencies Ruby Define runtime settings Specify dependencies Test and deploy your app Test on the local development server Using the local development server Command options Configure your app Set up networking Map custom domains Secure custom domains with SSL Secure your app with minimum TLS Virtual private cloud (VPC) Connect to a VPC network Connect to a Shared VPC network Shared VPC with connectors in service projects Shared VPC with connectors in the host project Set up a static outbound IP address Store data and files Overview Use Cloud Firestore in Datastore mode Use Cloud SQL Use Cloud Storage (cloud file hosting) Store and serve static files Read and write temporary files Cache data with Memorystore Create triggers Write and respond to Pub/Sub messages Send messages with third-party services Secure your app Overview Specify Ingress and Egress settings Understand firewalls Create firewall rules Authenticate users Operate and maintain Manage instances Label resources Manage your app's traffic Migrate traffic Split traffic Schedule cron jobs Run asynchronous tasks Configure warmup requests Automate tasks Get started with the Admin API Monitor, log, and debug Access audit logs Write and view logs Monitor and alerts latency Understand Performance with Cloud Profiler Access legacy bundled services Overview Go 1.12+ Java 11+ PHP 7/8 Python 3 Overview Blobstore overview Deferred overview Mail overview Available APIs Overview App Identity Blobstore Capabilities Datastore Overview Client library concepts API overview Asynchronous operation Callbacks Creating, retrieving, updating, and deleting entities Creating and using entity keys Entity, properties and keys Entity property reference Indexes Metadata Projection queries Queries Query cursors Query data consistency Query restrictions Retrieving query results Statistics Structuring data for strong consistency Transactions Managing Datastore from the Console Overview Viewing Datastore Statistics Configuring Datastore indexes Images Mail Mail API Overview Bulk mail guidelines Sending mail Receiving mail Receiving bounce notification Mail with headers or attachments Memcache Memcache Overview Using Memcache Memcache Examples Memcache Audit Logs Modules Namespaces API Namespaces API Overview Multitenancy with Namespaces NDB Client Library for Cloud Datastore Overview Administration Asynchronous operation Caching Creating, retrieving, updating, and deleting entities Creating entity models Creating and using entity keys Configuring Datastore indexes Projection queries Queries Transactions Writing property subclasses NDB Client Library Reference Entity Property Reference Context Exceptions Functions Future Key Metadata Model PolyModel Query Search Documents and indexes Query strings Query and sorting options Handling search results Faceted search Best practices Using the local development server Reference for Python Cursor Document Facet Classes FacetOptions FacetRange FacetRefinement FacetResult FacetResultValue Field Classes FieldExpression GeoPoint GetResponse Index MatchScorer Query QueryOptions RescoringMatchScorer ScoredDocument SearchResults SortExpression SortOptions Functions Exceptions Task Queues Task Queue Overview Using Push Queues Using Push Queues Creating Push Queues Creating Push Tasks Creating Task Handlers Deleting Tasks and Queues Retrying Failed Push Tasks Testing Push Queues in the Development Server Using Pull Queues Using Pull Queues Creating Pull Queues Creating Pull Tasks Leasing Pull Tasks URL Fetch Outbound requests Issue HTTP(S) requests Users Overview User objects Login URLs Admin users Migration center Migration resources Troubleshoot Introduction Deployment Serving Elevated latency Connectivity Community resources AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools App Engine standard environment App Engine flexible environment App Engine Migration Center Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Python app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어
- The following tasks demonstrate the basic developer flow for creating that web service using Firestore in Datastore mode (Datastore) data storage and Firebase authentication : Create your Google Cloud project Learn how to create a Google Cloud project and then set up the App Engine resources for your web service.
- Handle Data Learn how to use Datastore to store and retrieve data about site requests.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-required-2`
- Final score: 41
- Re-rank relevance: N/A

Evidence snippets:
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --destination-ranges = RESOURCE CIDR RANGE \ --direction = EGRESS \ --network = VPC NETWORK \ --target-tags = VPC CONNECTOR NETWORK TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- RESOURCE CIDR RANGE : the CIDR range for the connector whose access you are restricting VPC NETWORK : the name of your VPC network VPC CONNECTOR NETWORK TAG : the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future.

