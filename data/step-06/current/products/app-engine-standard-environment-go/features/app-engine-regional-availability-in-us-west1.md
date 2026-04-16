---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.718Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine regional availability in us-west1"
feature_slug: "app-engine-regional-availability-in-us-west1"
latest_feature_date: "2021-06-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/deprecations"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "availability"
  - "us"
  - "west1"
  - "feature"
  - "adds"
---

# App Engine regional availability in us-west1

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions.

## Extended Definition

This feature adds App Engine standard environment availability in the us-west1 (Oregon), asia-southeast1 (Singapore), and asia-east1 (Taiwan) regions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/deprecations](https://docs.cloud.google.com/appengine/docs/deprecations)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- The local development server also simulates the services provided by the libraries in the SDK for App Engine, including Datastore, Memcache, and Task Queues, by performing their tasks locally.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Verify that you have installed the Google Cloud CLI component that includes the App Engine extension for Python 3 ( app-engine-python ): gcloud components list If the app-engine-python component is not installed, run the following command: gcloud components install app-engine-python Locate the installation path of Google Cloud SDK by running the following command: gcloud info The command returns the root directory where you installed Google Cloud SDK, for example: Installation Root: [/Users/myname/google-cloud-sdk] Locate the dev appserver.py tool under the /bin/ folder where you installed Google Cloud CLI, for example: CLOUD SDK ROOT /bin/dev appserver.py Note the path to the dev appserver.py for later.
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- The local development server also simulates the services provided by the libraries in the SDK for App Engine, including Datastore, Memcache, and Task Queues, by performing their tasks locally.

### "Feature deprecations \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/deprecations](https://docs.cloud.google.com/appengine/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Resources Send feedback Feature deprecations Stay organized with collections Save and categorize content based on your preferences.
- After a service, feature, or product is officially deprecated, it continues to be available for at least the period of time defined in the Terms of Service.
- The Google Cloud Platform Terms of Service (section "Discontinuation of Services") defines the deprecation policy that applies to App Engine.
- The deprecation policy only applies to the services, features, or products listed therein.

