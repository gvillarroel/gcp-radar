---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.509Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "App Engine Ruby runtime build pipeline"
feature_slug: "app-engine-ruby-runtime-build-pipeline"
latest_feature_date: "2017-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "app"
  - "engine"
  - "ruby"
  - "runtime"
  - "build"
  - "pipeline"
  - "was"
  - "upgraded"
---

# App Engine Ruby runtime build pipeline

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

The Ruby runtime build pipeline was upgraded to provide improvements such as environment-variable and Cloud SQL access for build tasks like Rails asset precompilation.

## Extended Definition

The Ruby runtime build pipeline was upgraded to provide improvements such as environment-variable and Cloud SQL access for build tasks like Rails asset precompilation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.
- To create a custom runtime you must: Provide an app.yaml file that describes your application's runtime configuration to App Engine.

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- If you'd like to use an alternative implementation of Python, Java, Node.js, Go, Ruby, PHP, .NET or you write code in any other language, then custom runtimes are for you.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.

