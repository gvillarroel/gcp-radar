---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.301Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Local development server process ID output"
feature_slug: "local-development-server-process-id-output"
latest_feature_date: "2018-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "process"
  - "output"
  - "prints"
  - "local"
  - "development"
  - "server"
  - "running"
---

# Local development server process ID output

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The local development server prints the process ID of the running process on startup to aid debugging.

## Extended Definition

The local development server prints the process ID of the running process on startup to aid debugging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-4`
- Final score: 179
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- You can use the local development server to simulate running your App Engine application in production as well as use it to access App Engine legacy bundled services.
- While running under the local development server, the functions return URLs for / ah/login and / ah/logout on the local server.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-4`
- Final score: 159
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Specify the directory path to your app, for example: python3 CLOUD SDK ROOT / bin / dev appserver . py [ PATH TO YOUR APP ] Alternatively, you can specify the configuration file of a specific service, for example: python3 CLOUD SDK ROOT /bin/dev appserver.py app.yaml To change the port, you include the --port option: python3 CLOUD SDK ROOT / bin / dev appserver . py --port=9999 [PATH TO YOUR APP] The local development server is now running and listening for requests.
- You can use the local development server to simulate running your App Engine application in production as well as use it to access App Engine legacy bundled services.
- While running under the local development server, the functions return URLs for / ah/login and / ah/logout on the local server.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note that if you use the legacy bundled services to test your app using the local development server , the available routing and dispatch features are slightly different.
- When you are testing locally, the routing behavior depends on the particular runtime and development environment that you're using.
- To programmatically create URLs that work with both production and development servers, use the get hostname method.
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.

