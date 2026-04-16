---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.317Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Endpoints API discovery toggle"
feature_slug: "endpoints-api-discovery-toggle"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/managing-costs"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
keywords:
  - "discoverable"
  - "annotation"
  - "endpoints"
  - "discovery"
  - "boolean"
  - "disable"
  - "toggle"
  - "supports"
---

# Endpoints API discovery toggle

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Endpoints API supports a discoverable boolean on the @Api annotation to disable API discovery.

## Extended Definition

Endpoints API supports a discoverable boolean on the @Api annotation to disable API discovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)

## Supporting Pages

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-4`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- SSL certificate types App Engine supports the following certificate types: Single Domain/Hostname Self-signed Wildcard Subject Alternative Name (SAN) / Multi Domain It requires some things of your certificates and keys: Private Key and Certificate should be uploaded in PEM format.
- Disable managed SSL certificates To disable managed SSL certificates: In the Google Cloud console, go to App Engine > Settings > Custom Domains : Go to Custom Domains Select the domain and click Disable managed security .
- App Engine SSL support offers globally distributed SSL endpoints and built-in load balancing to serve your app securely, reliably, and quickly to a worldwide audience.
- Disable the default Google-managed certificates .

### "Manage App Engine costs \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- Source ID: `site-docs-reference-4`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the function and the app are in separate projects , change the source code so APP NAME identifies the project that contains the app you want to disable . import base64 import json import os from googleapiclient import discovery APP NAME = os . getenv ( "GCP PROJECT" ) def limit use appengine ( data , context ): pubsub data = base64 . b64decode ( data [ "data" ]) . decode ( "utf-8" ) pubsub json = json . loads ( pubsub data ) cost amount = pubsub json [ "costAmount" ] budget amount = pubsub json [ "budgetAmount" ] if cost amount < = budget amount : print ( f "No action necessary. (Current cost: { cost amount } )" ) return appengine = discovery . build ( "appengine" , "v1" , cache discovery = False ) apps = appengine . apps () Get the target app's serving status target app = apps . get ( appsId = APP NAME ) . execute () current status = target app [ "servingStatus" ] Disable target app, if necessary if current status == "SERVING" : print ( f "Attempting to disable app { APP NAME } ..." ) body = { "servingStatus" : "USER DISABLED" } apps . patch ( appsId = APP NAME , updateMask = "serving status" , body = body ) . execute () Add the following dependencies to your function's requirements.txt file: google-api-python-client==2.131.0 Under Function to execute enter limit use appengine .
- To limit the costs of your App Engine app, you can use any of the following mechanisms: Specify the maximum number of instances Create budget alerts Disable your app manually Disable your app programmatically Specify the maximum number of instances Since App Engine costs usually scale based on the amount of traffic your app receives, you can limit your costs by limiting the number of instances App Engine can create.
- When creating the function: Use the following source code: Note: The source code assumes that the function you are creating and the app you want to disable are in the same Google Cloud project.
- Disable your app programmatically You can use Budget Alerts, Pub/Sub, and Cloud Run functions to automatically disable your app when your costs exceed a threshold you specify.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

