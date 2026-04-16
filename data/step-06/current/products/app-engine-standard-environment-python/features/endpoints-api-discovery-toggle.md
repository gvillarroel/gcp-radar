---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.797Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Endpoints API discovery toggle"
feature_slug: "endpoints-api-discovery-toggle"
latest_feature_date: "2015-11-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
  - "https://docs.cloud.google.com/appengine/docs/managing-costs"
  - "https://docs.cloud.google.com/appengine/docs/standard/managing-costs"
keywords:
  - "discoverable"
  - "annotation"
  - "endpoints"
  - "discovery"
  - "parameter"
  - "disable"
  - "toggle"
  - "adds"
---

# Endpoints API discovery toggle

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The Endpoints API adds a discoverable parameter on the @Api annotation to disable API discovery.

## Extended Definition

The Endpoints API adds a discoverable parameter on the @Api annotation to disable API discovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- [https://docs.cloud.google.com/appengine/docs/standard/managing-costs](https://docs.cloud.google.com/appengine/docs/standard/managing-costs)

## Supporting Pages

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-11`
- Final score: 59
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use this parameter to override the default behavior of faceted search. options = FacetOptions(discover facet limit=5, discover facet value limit=10, depth=6000); Parameter Description Default discover facet limit Number of facets to discover if facet discovery is turned on.
- You can increase this limit up to 20 using the FacetOptions discovery value limit parameter.
- You can increase this limit up to 100 using the FacetOptions discovery limit parameter.
- If 0, facet discovery will be disabled.

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

### "Manage App Engine costs \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/managing-costs](https://docs.cloud.google.com/appengine/docs/standard/managing-costs)
- Source ID: `site-docs-reference-4`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the function and the app are in separate projects , change the source code so APP NAME identifies the project that contains the app you want to disable . import base64 import json import os from googleapiclient import discovery APP NAME = os . getenv ( "GCP PROJECT" ) def limit use appengine ( data , context ): pubsub data = base64 . b64decode ( data [ "data" ]) . decode ( "utf-8" ) pubsub json = json . loads ( pubsub data ) cost amount = pubsub json [ "costAmount" ] budget amount = pubsub json [ "budgetAmount" ] if cost amount < = budget amount : print ( f "No action necessary. (Current cost: { cost amount } )" ) return appengine = discovery . build ( "appengine" , "v1" , cache discovery = False ) apps = appengine . apps () Get the target app's serving status target app = apps . get ( appsId = APP NAME ) . execute () current status = target app [ "servingStatus" ] Disable target app, if necessary if current status == "SERVING" : print ( f "Attempting to disable app { APP NAME } ..." ) body = { "servingStatus" : "USER DISABLED" } apps . patch ( appsId = APP NAME , updateMask = "serving status" , body = body ) . execute () Add the following dependencies to your function's requirements.txt file: google-api-python-client==2.131.0 Under Function to execute enter limit use appengine .
- To limit the costs of your App Engine app, you can use any of the following mechanisms: Specify the maximum number of instances Create budget alerts Disable your app manually Disable your app programmatically Specify the maximum number of instances Since App Engine costs usually scale based on the amount of traffic your app receives, you can limit your costs by limiting the number of instances App Engine can create.
- When creating the function: Use the following source code: Note: The source code assumes that the function you are creating and the app you want to disable are in the same Google Cloud project.
- Disable your app programmatically You can use Budget Alerts, Pub/Sub, and Cloud Run functions to automatically disable your app when your costs exceed a threshold you specify.

