---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.736Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Delve debugging in App Engine local dev server"
feature_slug: "delve-debugging-in-app-engine-local-dev-server"
latest_feature_date: "2017-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
keywords:
  - "delve"
  - "debugging"
  - "app"
  - "engine"
  - "local"
  - "dev"
  - "server"
  - "added"
---

# Delve debugging in App Engine local dev server

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Added the `--go_debugging` flag to `dev_appserver.py` to enable Delve-based debugging for Go apps.

## Extended Definition

Added the `--go_debugging` flag to `dev_appserver.py` to enable Delve-based debugging for Go apps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)

## Supporting Pages

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app](https://docs.cloud.google.com/appengine/docs/standard/go/testing-and-deploying-your-app)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- The local development server also simulates the services provided by the libraries in the SDK for App Engine, including Datastore, Memcache, and Task Queues, by performing their tasks locally.
- You can use the local development server to simulate running your App Engine application in production as well as use it to access App Engine legacy bundled services.

### "Using the local development server \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server](https://docs.cloud.google.com/appengine/docs/standard/go/tools/using-local-server)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Detect application runtime environment To determine whether your code is running in production or in the local development server, you can check the value of the GAE ENV environment variable: if os.getenv('GAE ENV', '').startswith('standard'): Production in the standard environment else: Local development server Use the Mail service The local development server can send email for calls to the App Engine mail service using either an SMTP server or a local installation of Sendmail .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Using the local development server Stay organized with collections Save and categorize content based on your preferences.
- The local development server also simulates the services provided by the libraries in the SDK for App Engine, including Datastore, Memcache, and Task Queues, by performing their tasks locally.
- You can use the local development server to simulate running your App Engine application in production as well as use it to access App Engine legacy bundled services.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- App Engine runs multiple instances of your application, and each instance has its own web server for handling requests.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .

