---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.265Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Endpoints API discovery toggle"
feature_slug: "endpoints-api-discovery-toggle"
latest_feature_date: "2015-12-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/managing-costs"
keywords:
  - "discoverable"
  - "annotation"
  - "discovery"
  - "disable"
  - "toggle"
  - "endpoints"
  - "parameter"
  - "provides"
---

# Endpoints API discovery toggle

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Endpoints API provides a discoverable parameter on the @Api annotation to disable API discovery.

## Extended Definition

The Endpoints API provides a discoverable parameter on the @Api annotation to disable API discovery.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- This parameter specifies the CPU usage threshold at which new instances will be started to handle traffic, enabling you to balance between performance and cost, with lower values increasing performance and increasing cost, and higher values decreasing performance but also decreasing cost.
- Example vpc access connector : name : "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting : all-traffic Handlers element The handlers element provides a list of URL patterns and descriptions of how they should be handled.
- When a user's request is redirected, the HTTP status code will be set to the value of the redirect http response code parameter.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- This parameter specifies the CPU usage threshold at which new instances will be started to handle traffic, enabling you to balance between performance and cost, with lower values increasing performance and increasing cost, and higher values decreasing performance but also decreasing cost.
- Example vpc access connector : name : "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting : all-traffic Handlers element The handlers element provides a list of URL patterns and descriptions of how they should be handled.
- When a user's request is redirected, the HTTP status code will be set to the value of the redirect http response code parameter.

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

