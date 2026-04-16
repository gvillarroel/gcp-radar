---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:17.327Z"
product_name: "App Engine flexible environment Python"
product_slug: "app-engine-flexible-environment-python"
feature_name: "Multi-zonal deployment for App Engine flexible environment"
feature_slug: "multi-zonal-deployment-for-app-engine-flexible-environment"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/flexible/known-issues"
  - "https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity"
keywords:
  - "multi"
  - "zonal"
  - "deployment"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "gained"
---

# Multi-zonal deployment for App Engine flexible environment

Product: App Engine flexible environment Python
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment gained support for deploying applications across multiple zones.

## Extended Definition

App Engine flexible environment gained support for deploying applications across multiple zones.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)

## Supporting Pages

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-reference-2`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).
- For example, you can name a configuration file after your service, or use unique names to represent each version of that particular service, like service1.yaml or app.flexible.yaml .
- If you are deploying several versions of a service, you can create multiple YAML files in the same directory to represent the configuration for each of your versions.

### Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some events that may affect App Engine flexible environment minimum number of instances are: Rolling out updates to flexible environment instances Zonal failure (Stockout issues, such as when your region is at capacity for your selected CPU, etc.) App Engine flexible environment uses 3 zones to distribute your instances and in such a configuration, we recommend provisioning 50% more instances than required.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Known issues in the App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- After you deploy a new version of an existing service in the App Engine flexible environment with gcloud app deploy , the "Count/sec" metric shown in the "Summary" graph of the App Engine dashboard may decrease significantly.
- If there is an organization policy on your project that restricts access to external IPs, you won't be able to deploy an App Engine flexible environment app with external IP addresses.

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/python/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/python-docs-samples cd python-docs-samples/appengine/flexible/websockets/ Run the sample locally To run locally, you need to use Gunicorn with the flask socket worker: $ gunicorn -b 127 .0.0.1:8080 -k flask sockets.worker main:app Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the directory where your app.yaml is located: gcloud app deploy You can then direct your browser to https:// PROJECT ID .
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- App Engine flexible environment VM instances are restarted on a weekly basis.
- Typical use cases for WebSockets include: Real time event updates, such as social media feeds, sports scores, news, or stock market prices User notifications, such as software or content updates Chatting applications Collaborative editing tools Multiplayer games WebSockets are always available to your application without any additional setup.

