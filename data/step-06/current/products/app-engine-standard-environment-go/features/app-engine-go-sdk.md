---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.307Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine Go SDK"
feature_slug: "app-engine-go-sdk"
latest_feature_date: "2017-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "local"
  - "development"
  - "deployment"
  - "provides"
---

# App Engine Go SDK

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine Go SDK provides local development and deployment tooling for App Engine Go applications; The App Engine Go SDK provides local development and deployment tooling for App Engine Go applications.

## Extended Definition

The App Engine Go SDK provides local development and deployment tooling for App Engine Go applications; The App Engine Go SDK provides local development and deployment tooling for App Engine Go applications.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-4`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- Run the local development server After setting up the local development server and creating the app.yaml configuration file for your app, you can use the dev appserver.py command to run your app locally.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-4`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- Run the local development server After setting up the local development server and creating the app.yaml configuration file for your app, you can use the dev appserver.py command to run your app locally.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Set up your development environment You can either use your local machine, and use tools you're already familiar with, or Cloud Shell .
- Local Machine Install Go and set up the gcloud CLI as described in Setting up your development environment .
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .
- When your app is running on App Engine, the PORT environment variable is set for you, but when testing your app locally, you can set PORT to any preferred value.

