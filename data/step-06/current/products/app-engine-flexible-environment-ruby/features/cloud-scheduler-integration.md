---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:04.004Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Cloud Scheduler integration"
feature_slug: "cloud-scheduler-integration"
latest_feature_date: "2019-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "scheduler"
  - "integration"
  - "app"
  - "engine"
  - "can"
  - "use"
  - "run"
  - "scheduled"
---

# Cloud Scheduler integration

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine can use Cloud Scheduler to run scheduled units of work such as cron jobs.

## Extended Definition

App Engine can use Cloud Scheduler to run scheduled units of work such as cron jobs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- For example, Cloud SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins require the Dockerfile to be in src/main/docker/Dockerfile and the app.yaml file to be in src/main/appengine/app.yaml .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Build custom runtimes Stay organized with collections Save and categorize content based on your preferences.
- In rare cases, outages can prevent App Engine from providing 30 seconds of shutdown time, which means the STOP and KILL signals might not be sent before an instance terminates.
- Build and deploy your custom runtime After you configure your app.yaml and DOCKER file, you can build and deploy that container image to App Engine.

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- OK Download the Hello World app Choose one of the following to download the Hello World sample app from GitHub, to your local machine: Clone the Hello World sample app from the following repository: git clone https://github.com/GoogleCloudPlatform/appengine-custom-runtimes-samples Download the sample as a .zip file and then extract it to a local directory.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.
- Navigate to the nginx directory where the sample code is located, for example: cd appengine-custom-runtimes-samples/nginx Running Hello World on your local machine You can test the sample app by downloading and installing Docker , and then running the Hello World container on your local machine.

### "About Custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/about-custom-runtimes)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Use the following table to understand how a custom runtime compares to the existing set of App Engine runtimes: Feature Flexible runtime Custom runtime Dockerfile Default file supplied automatically by the SDK Hand-written by the developer Dockerfile modifications permitted Yes Yes Languages Python, Java, Node.js, Go, Ruby, PHP, .NET Any software that can service HTTP requests Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Applications that use custom runtimes take advantage of all the various Google Cloud services by using the public REST APIs or client libraries, such as the App Engine Admin API and the Google Client Libraries .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback About Custom runtimes Stay organized with collections Save and categorize content based on your preferences.

