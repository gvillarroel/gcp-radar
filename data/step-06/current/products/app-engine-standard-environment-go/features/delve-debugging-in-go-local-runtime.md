---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.743Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Delve debugging in Go local runtime"
feature_slug: "delve-debugging-in-go-local-runtime"
latest_feature_date: "2017-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml"
keywords:
  - "delve"
  - "debugging"
  - "go"
  - "local"
  - "runtime"
  - "added"
  - "debug"
  - "flag"
---

# Delve debugging in Go local runtime

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Added the `-debug` flag to `goapp serve` to enable Delve debugging.

## Extended Definition

Added the `-debug` flag to `goapp serve` to enable Delve debugging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Go Java Node.js PHP Python Ruby Note: You can't use the latest version of dev appserver.py to locally run your applications for runtimes that reached end of support .
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- Using Sendmail To enable mail support with Sendmail, invoke dev appserver.py as follows: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --enable sendmail=yes [PATH TO YOUR APP] The local server uses the sendmail command to send email messages with your installation's default configuration.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Go Java Node.js PHP Python Ruby Note: You can't use the latest version of dev appserver.py to locally run your applications for runtimes that reached end of support .
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- Using Sendmail To enable mail support with Sendmail, invoke dev appserver.py as follows: python3 [ CLOUD SDK ROOT ]/ bin / dev appserver . py --enable sendmail=yes [PATH TO YOUR APP] The local server uses the sendmail command to send email messages with your installation's default configuration.

### Defining runtime settings | App Engine standard environment | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/standard/go/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference-4-http`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Defining runtime settings | App Engine standard environment | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil עברית 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in App Engine Standard environment Start free Overview Guides Reference Resources App Engine environments App Engine standard environment Learn about the standard environment App Engine flexible environment Learn about the flexible environment App Engine Migration Center Learn how to migrate to the latest supported versions Technology areas More Overview Guides Reference Resources App Engine environments More Cross-product tools More Console App Engine standard environment App Engine home Standard environment overview Choose a language and environment Discover standard environment runtimes Go runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Java runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Upgrade an existing app Re-package a WAR file Migrate from the first-generation to the second-generation runtimes Node.js runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Update your web service View logs PHP runtime Overview Build an app Upgrade an existing app Migrate from the first-generation to the second-generation runtimes Python runtime Overview Build an app Overview Create your project Write your web service Deploy your web service Handle data Add Firebase Authenticate users Personalize data Clean up Upgrade an existing app Overview Migrate from the first-generation to the second-generation runtimes Migrate to Python 3 runtime Migrate legacy bundled services Prepare configuration files for the Python 3 environment Test and deploy your app Ruby runtime Overview Create an app Get started Set up your environment Set up your development environment Set up optional tools for Java Apache Maven Using Maven and the App Engine plugin Maven Plugin goals and parameters Gradle Use the App Engine plugin Tasks and properties Set up your Cloud project Grant access Set up access control View roles that grant access to App Engine Configure service accounts Google-managed service agent Design your app Structure web services Host a static website Communicate between your services Handle requests Route requests Define configuration files Go Define runtime settings Specify dependencies Java Define runtime settings Specify dependencies Node.js Define runtime settings Specify dependencies Run a custom build step PHP Define runtime settings Specify dependencies Python Define runtime settings Specify dependencies Ruby Define runtime settings Specify dependencies Test and deploy your app Test on the local development server Using the local development server Command options Configure your app Set up networking Map custom domains Secure custom domains with SSL Secure your app with minimum TLS Virtual private cloud (VPC) Connect to a VPC network Connect to a Shared VPC network Shared VPC with connectors in service projects Shared VPC with connectors in the host project Set up a static outbound IP address Store data and files Overview Use Cloud Firestore in Datastore mode Use Cloud SQL Use Cloud Storage (cloud file hosting) Store and serve static files Read and write temporary files Cache data with Memorystore Create triggers Write and respond to Pub/Sub messages Send messages with third-party services Secure your app Overview Specify Ingress and Egress settings Understand firewalls Create firewall rules Authenticate users Operate and maintain Manage instances Label resources Manage your app's traffic Migrate traffic Split traffic Schedule cron jobs Run asynchronous tasks Configure warmup requests Automate tasks Get started with the Admin API Monitor, log, and debug Access audit logs Write and view logs Monitor and alerts latency Understand Performance with Cloud Profiler Access legacy bundled services Overview Go 1.12+ Java 11+ PHP 7/8 Python 3 Overview Blobstore overview Deferred overview Mail overview Available APIs Overview App Identity Blobstore Capabilities Datastore Overview Client library concepts API overview Asynchronous operation Callbacks Creating, retrieving, updating, and deleting entities Creating and using entity keys Entity, properties and keys Entity property reference Indexes Metadata Projection queries Queries Query cursors Query data consistency Query restrictions Retrieving query results Statistics Structuring data for strong consistency Transactions Managing Datastore from the Console Overview Viewing Datastore Statistics Configuring Datastore indexes Images Mail Mail API Overview Bulk mail guidelines Sending mail Receiving mail Receiving bounce notification Mail with headers or attachments Memcache Memcache Overview Using Memcache Memcache Examples Memcache Audit Logs Modules Namespaces API Namespaces API Overview Multitenancy with Namespaces NDB Client Library for Cloud Datastore Overview Administration Asynchronous operation Caching Creating, retrieving, updating, and deleting entities Creating entity models Creating and using entity keys Configuring Datastore indexes Projection queries Queries Transactions Writing property subclasses NDB Client Library Reference Entity Property Reference Context Exceptions Functions Future Key Metadata Model PolyModel Query Search Documents and indexes Query strings Query and sorting options Handling search results Faceted search Best practices Using the local development server Reference for Python Cursor Document Facet Classes FacetOptions FacetRange FacetRefinement FacetResult FacetResultValue Field Classes FieldExpression GeoPoint GetResponse Index MatchScorer Query QueryOptions RescoringMatchScorer ScoredDocument SearchResults SortExpression SortOptions Functions Exceptions Task Queues Task Queue Overview Using Push Queues Using Push Queues Creating Push Queues Creating Push Tasks Creating Task Handlers Deleting Tasks and Queues Retrying Failed Push Tasks Testing Push Queues in the Development Server Using Pull Queues Using Pull Queues Creating Pull Queues Creating Pull Tasks Leasing Pull Tasks URL Fetch Outbound requests Issue HTTP(S) requests Users Overview User objects Login URLs Admin users Migration center Migration resources Troubleshoot Introduction Deployment Serving Elevated latency Connectivity Community resources AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools App Engine standard environment App Engine flexible environment App Engine Migration Center Home Documentation Application hosting App Engine Standard environment Guides Send feedback Defining runtime settings Stay organized with collections Save and categorize content based on your preferences.
- Generally, your app.yaml file requires only the runtime element for a simple Go 1.12+ app in the standard environment, for example: runtime : go126 App Engine provides default values for all other settings, including the F1 instance class , which determines the memory and CPU resources that are available to your app, and automatic scaling , which controls how and when new instances of your app are created.
- An App Engine app is configured using an app.yaml file, that contains the runtime, handlers, scaling, and other general settings including environment variables.
- About app.yaml files You can specify the runtime configuration for your Go 1.12+ app, including versions and URLs, in the app.yaml file.

