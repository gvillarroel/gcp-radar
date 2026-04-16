---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:08.274Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "App Engine regional availability: us-west3"
feature_slug: "app-engine-regional-availability-us-west3"
latest_feature_date: "2020-03-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "availability"
  - "us"
  - "west3"
  - "added"
  - "applications"
---

# App Engine regional availability: us-west3

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine added support for applications deployed in the us-west3 (Salt Lake City, Utah) region.

## Extended Definition

App Engine added support for applications deployed in the us-west3 (Salt Lake City, Utah) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)

## Supporting Pages

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-required-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- However, this is bound by the following restrictions: App Engine reserves automatic scaling capacity for applications with low latency, where the application responds to requests in less than one second.
- Handling request timeouts App Engine is optimized for applications with short-lived requests, typically those that take a few hundred milliseconds.
- See the License for the specific language governing permissions and limitations under the License. from flask import Flask If entrypoint is not defined in app.yaml, App Engine will look for an app called app in main.py. app = Flask ( name ) @app . route ( "/" ) def hello (): """Return a friendly HTTP greeting.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-required-2`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- After configuring authentication, you can begin managing your apps, including deploying versions of applications and managing the amount of traffic to those versions.

### "Configuring warmup requests to improve performance \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests](https://docs.cloud.google.com/appengine/docs/standard/configuring-warmup-requests)
- Source ID: `site-docs-reference-required-2`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Configuring warmup requests to improve performance Stay organized with collections Save and categorize content based on your preferences.
- If warmup requests are enabled for your application, App Engine attempts to detect when your application needs a new instance and initiates a warmup request to initialize a new instance.
- Enabling warmup requests Warmup requests are used by the App Engine scheduler, which controls the auto scaling of instances based on user-supplied configuration.
- When deploying to Google App Engine, a webserver process such as Gunicorn will serve the app.

