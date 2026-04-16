---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:40:42.100Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Default Python 3.6 runtime"
feature_slug: "default-python-3-6-runtime"
latest_feature_date: "2017-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
keywords:
  - "default"
  - "python"
  - "runtime"
  - "when"
  - "requested"
  - "app"
  - "engine"
  - "flexible"
---

# Default Python 3.6 runtime

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

When Python 3 is requested, App Engine flexible environment defaults to the Python 3.6 runtime.

## Extended Definition

When Python 3 is requested, App Engine flexible environment defaults to the Python 3.6 runtime.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)

## Supporting Pages

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- With a custom runtime, the flexible environment provides and manages your scaling, monitoring, and load balancing infrastructure for you, so you can focus on building your application.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.
- The following are some of the logs that are configured by default: Log name Payload type Purpose crash.log text Information logged when setup fails.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create a custom runtime app in the App Engine flexible environment Region ID The REGION ID is an abbreviated code that Google assigns based on the region you select when you create your app.
- The app.yaml file must reside in the same directory as the Dockerfile file. runtime : custom env : flex The runtime: custom entry tells App Engine to look for a Dockerfile that will define your runtime's image and env: flex specifies that you are deploying to the flexible environment.
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- When you use a custom runtime, you must write your application code to handle certain flexible environment life-cycle and health checking requests.
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .

