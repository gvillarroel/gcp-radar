---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.267Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Private Python dependencies from Artifact Registry in App Engine Standard"
feature_slug: "private-python-dependencies-from-artifact-registry-in-app-engine-standard"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/python3/building-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services"
keywords:
  - "private"
  - "python"
  - "dependencies"
  - "artifact"
  - "registry"
  - "app"
  - "engine"
  - "standard"
---

# Private Python dependencies from Artifact Registry in App Engine Standard

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Adds support for Python 3 App Engine apps to install private packages from an Artifact Registry Python repository.

## Extended Definition

Adds support for Python 3 App Engine apps to install private packages from an Artifact Registry Python repository.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
- [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts)
- Source ID: `site-docs-reference-required-2`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configure App Engine service accounts Stay organized with collections Save and categorize content based on your preferences.
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in Google Cloud projects without previous Container Registry usage.
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### Build a Python app on App Engine | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/python3/building-app](https://docs.cloud.google.com/appengine/docs/standard/python3/building-app)
- Source ID: `site-docs-reference-required-6-http`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Build a Python app on App Engine | App Engine standard environment | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in App Engine Standard environment Start free Overview Guides Reference Resources App Engine environments App Engine standard environment Learn about the standard environment App Engine flexible environment Learn about the flexible environment App Engine Migration Center Learn how to migrate to the latest supported versions Technology areas More Overview Guides Reference Resources App Engine environments More Cross-product tools More Console App Engine standard environment App Engine home Standard environment overview Choose a language and environment Discover standard environment runtimes Go runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Java runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Upgrade an existing app Re-package a WAR file Migrate from the first-generation to the second-generation runtimes Node.js runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Update your web service View logs PHP runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Python runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Handle data Add Firebase Authenticate users Personalize data Clean up Upgrade an existing app Overview Migrate from the first-generation to the second-generation runtimes Migrate to Python 3 runtime Migrate legacy bundled services Prepare configuration files for the Python 3 environment Test and deploy your app Ruby runtime Overview Create an app Get started Set up your environment Set up your development environment Set up optional tools for Java Apache Maven Using Maven and the App Engine plugin Maven Plugin goals and parameters Gradle Use the App Engine plugin Tasks and properties Set up your Cloud project Grant access Set up access control View roles that grant access to App Engine Configure service accounts Google-managed service agent Design your app Structure web services Host a static website Communicate between your services Handle requests Route requests Define configuration files Go Define runtime settings Specify dependencies Java Define runtime settings Specify dependencies Node.js Define runtime settings Specify dependencies Run a custom build step PHP Define runtime settings Specify dependencies Python Define runtime settings Specify dependencies Ruby Define runtime settings Specify dependencies Test and deploy your app Test on the local development server Using the local development server Command options Configure your app Set up networking Map custom domains Secure custom domains with SSL Secure your app with minimum TLS Virtual private cloud (VPC) Connect to a VPC network Connect to a Shared VPC network Shared VPC with connectors in service projects Shared VPC with connectors in the host project Set up a static outbound IP address Store data and files Overview Use Cloud Firestore in Datastore mode Use Cloud SQL Use Cloud Storage (cloud file hosting) Store and serve static files Read and write temporary files Cache data with Memorystore Create triggers Write and respond to Pub/Sub messages Send messages with third-party services Secure your app Overview Specify Ingress and Egress settings Understand firewalls Create firewall rules Authenticate users Operate and maintain Manage instances Label resources Manage your app's traffic Migrate traffic Split traffic Schedule cron jobs Run asynchronous tasks Configure warmup requests Automate tasks Get started with the Admin API Monitor, log, and debug Access audit logs Write and view logs Monitor and alerts latency Understand Performance with Cloud Profiler Access legacy bundled services Overview Go 1.12+ Java 11+ PHP 7/8 Python 3 Overview Blobstore overview Deferred overview Mail overview Available APIs Overview App Identity Blobstore Capabilities Datastore Overview Client library concepts API overview Asynchronous operation Callbacks Creating, retrieving, updating, and deleting entities Creating and using entity keys Entity, properties and keys Entity property reference Indexes Metadata Projection queries Queries Query cursors Query data consistency Query restrictions Retrieving query results Statistics Structuring data for strong consistency Transactions Managing Datastore from the Console Overview Viewing Datastore Statistics Configuring Datastore indexes Images Mail Mail API Overview Bulk mail guidelines Sending mail Receiving mail Receiving bounce notification Mail with headers or attachments Memcache Memcache Overview Using Memcache Memcache Examples Memcache Audit Logs Modules Namespaces API Namespaces API Overview Multitenancy with Namespaces NDB Client Library for Cloud Datastore Overview Administration Asynchronous operation Caching Creating, retrieving, updating, and deleting entities Creating entity models Creating and using entity keys Configuring Datastore indexes Projection queries Queries Transactions Writing property subclasses NDB Client Library Reference Entity Property Reference Context Exceptions Functions Future Key Metadata Model PolyModel Query Search Documents and indexes Query strings Query and sorting options Handling search results Faceted search Best practices Using the local development server Reference for Python Cursor Document Facet Classes FacetOptions FacetRange FacetRefinement FacetResult FacetResultValue Field Classes FieldExpression GeoPoint GetResponse Index MatchScorer Query QueryOptions RescoringMatchScorer ScoredDocument SearchResults SortExpression SortOptions Functions Exceptions Task Queues Task Queue Overview Using Push Queues Using Push Queues Creating Push Queues Creating Push Tasks Creating Task Handlers Deleting Tasks and Queues Retrying Failed Push Tasks Testing Push Queues in the Development Server Using Pull Queues Using Pull Queues Creating Pull Queues Creating Pull Tasks Leasing Pull Tasks URL Fetch Outbound requests Issue HTTP(S) requests Users Overview User objects Login URLs Admin users Migration center Migration resources Troubleshoot Introduction Deployment Serving Elevated latency Connectivity Community resources AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools App Engine standard environment App Engine flexible environment App Engine Migration Center Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Python app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- Use this guide to learn the basics of developing and deploying Python web services to the App Engine standard environment .
- Deploy your web service to App Engine Learn how to deploy your Python code and then view your web service running on App Engine.
- The following tasks demonstrate the basic developer flow for creating that web service using Firestore in Datastore mode (Datastore) data storage and Firebase authentication : Create your Google Cloud project Learn how to create a Google Cloud project and then set up the App Engine resources for your web service.

### "Communicating between your services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services](https://docs.cloud.google.com/appengine/docs/standard/communicating-between-services)
- Source ID: `site-docs-reference-required-2`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Private Communication Communication between services in the same project You can allow an App Engine standard service to communicate with another App Engine service in the same project without having to expose the destination service to the public internet.
- Route the traffic over a Serverless VPC Access connector : For each App Engine version sending private traffic to other app endpoints, attach the version to a Serverless VPC Access connector belonging to one of the Google Cloud project's own networks, not a Shared VPC network.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Communicating between your services Stay organized with collections Save and categorize content based on your preferences.
- Additionally, services in the standard environment that reside within the same Google Cloud project can also use one of the App Engine APIs for the following tasks: Share a single memcache instance.

