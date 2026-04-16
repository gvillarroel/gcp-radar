---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.751Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go runtime version upgrade"
feature_slug: "go-runtime-version-upgrade"
latest_feature_date: "2017-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/runtime"
keywords:
  - "go"
  - "runtime"
  - "version"
  - "upgrade"
  - "app"
  - "engine"
  - "was"
  - "upgraded"
---

# Go runtime version upgrade

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Go runtime was upgraded to version 1.6.4.

## Extended Definition

The App Engine Go runtime was upgraded to version 1.6.4.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Go second-generation runtimes (after end of support) : To upgrade to a supported version of Go , update the app.yaml file by specifying a version of Go that you want your app to run.
- You must upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- The process of upgrading an existing app depends on the runtime version that your app currently uses: Go 1.11 (first-generation runtime) : You must migrate your app to the latest supported Go version .

### Defining runtime settings | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-4-http`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Defining runtime settings | App Engine standard environment | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in App Engine Standard environment Start free Overview Guides Reference Resources App Engine environments App Engine standard environment Learn about the standard environment App Engine flexible environment Learn about the flexible environment App Engine Migration Center Learn how to migrate to the latest supported versions Technology areas More Overview Guides Reference Resources App Engine environments More Cross-product tools More Console App Engine standard environment App Engine home Standard environment overview Choose a language and environment Discover standard environment runtimes Go runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Java runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Upgrade an existing app Re-package a WAR file Migrate from the first-generation to the second-generation runtimes Node.js runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Update your web service View logs PHP runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Python runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Handle data Add Firebase Authenticate users Personalize data Clean up Upgrade an existing app Overview Migrate from the first-generation to the second-generation runtimes Migrate to Python 3 runtime Migrate legacy bundled services Prepare configuration files for the Python 3 environment Test and deploy your app Ruby runtime Overview Create an app Get started Set up your environment Set up your development environment Set up optional tools for Java Apache Maven Using Maven and the App Engine plugin Maven Plugin goals and parameters Gradle Use the App Engine plugin Tasks and properties Set up your Cloud project Grant access Set up access control View roles that grant access to App Engine Configure service accounts Google-managed service agent Design your app Structure web services Host a static website Communicate between your services Handle requests Route requests Define configuration files Go Define runtime settings Specify dependencies Java Define runtime settings Specify dependencies Node.js Define runtime settings Specify dependencies Run a custom build step PHP Define runtime settings Specify dependencies Python Define runtime settings Specify dependencies Ruby Define runtime settings Specify dependencies Test and deploy your app Test on the local development server Using the local development server Command options Configure your app Set up networking Map custom domains Secure custom domains with SSL Secure your app with minimum TLS Virtual private cloud (VPC) Connect to a VPC network Connect to a Shared VPC network Shared VPC with connectors in service projects Shared VPC with connectors in the host project Set up a static outbound IP address Store data and files Overview Use Cloud Firestore in Datastore mode Use Cloud SQL Use Cloud Storage (cloud file hosting) Store and serve static files Read and write temporary files Cache data with Memorystore Create triggers Write and respond to Pub/Sub messages Send messages with third-party services Secure your app Overview Specify Ingress and Egress settings Understand firewalls Create firewall rules Authenticate users Operate and maintain Manage instances Label resources Manage your app's traffic Migrate traffic Split traffic Schedule cron jobs Run asynchronous tasks Configure warmup requests Automate tasks Get started with the Admin API Monitor, log, and debug Access audit logs Write and view logs Monitor and alerts latency Understand Performance with Cloud Profiler Access legacy bundled services Overview Go 1.12+ Java 11+ PHP 7/8 Python 3 Overview Blobstore overview Deferred overview Mail overview Available APIs Overview App Identity Blobstore Capabilities Datastore Overview Client library concepts API overview Asynchronous operation Callbacks Creating, retrieving, updating, and deleting entities Creating and using entity keys Entity, properties and keys Entity property reference Indexes Metadata Projection queries Queries Query cursors Query data consistency Query restrictions Retrieving query results Statistics Structuring data for strong consistency Transactions Managing Datastore from the Console Overview Viewing Datastore Statistics Configuring Datastore indexes Images Mail Mail API Overview Bulk mail guidelines Sending mail Receiving mail Receiving bounce notification Mail with headers or attachments Memcache Memcache Overview Using Memcache Memcache Examples Memcache Audit Logs Modules Namespaces API Namespaces API Overview Multitenancy with Namespaces NDB Client Library for Cloud Datastore Overview Administration Asynchronous operation Caching Creating, retrieving, updating, and deleting entities Creating entity models Creating and using entity keys Configuring Datastore indexes Projection queries Queries Transactions Writing property subclasses NDB Client Library Reference Entity Property Reference Context Exceptions Functions Future Key Metadata Model PolyModel Query Search Documents and indexes Query strings Query and sorting options Handling search results Faceted search Best practices Using the local development server Reference for Python Cursor Document Facet Classes FacetOptions FacetRange FacetRefinement FacetResult FacetResultValue Field Classes FieldExpression GeoPoint GetResponse Index MatchScorer Query QueryOptions RescoringMatchScorer ScoredDocument SearchResults SortExpression SortOptions Functions Exceptions Task Queues Task Queue Overview Using Push Queues Using Push Queues Creating Push Queues Creating Push Tasks Creating Task Handlers Deleting Tasks and Queues Retrying Failed Push Tasks Testing Push Queues in the Development Server Using Pull Queues Using Pull Queues Creating Pull Queues Creating Pull Tasks Leasing Pull Tasks URL Fetch Outbound requests Issue HTTP(S) requests Users Overview User objects Login URLs Admin users Migration center Migration resources Troubleshoot Introduction Deployment Serving Elevated latency Connectivity Community resources AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools App Engine standard environment App Engine flexible environment App Engine Migration Center Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- Generally, your app.yaml file requires only the runtime element for a simple Go 1.12+ app in the standard environment, for example: runtime : go126 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- About app.yaml files You can specify the runtime configuration for your Go 1.12+ app, including versions and URLs, in the app.yaml file.

### "Go runtime environment \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/runtime](https://docs.cloud.google.com/appengine/docs/standard/go/runtime)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Go runtime for App Engine in the standard environment is declared in the app.yaml file: runtime : go VERSION Where VERSION is the Go MAJOR and MINOR version numbers.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Go runtime environment Stay organized with collections Save and categorize content based on your preferences.
- Environment variables The following environment variables are set by the runtime: Environment variable Description GAE APPLICATION The ID of your App Engine application.
- For other supported Go versions, and the corresponding Ubuntu version for your Go version, see the Runtime support schedule .

