---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.799Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Unlimited default daily budget for billed apps"
feature_slug: "unlimited-default-daily-budget-for-billed-apps"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/developers-console"
  - "https://docs.cloud.google.com/appengine/docs/managing-costs"
keywords:
  - "unlimited"
  - "budget"
  - "daily"
  - "billed"
  - "newly"
  - "apps"
  - "applications"
  - "default"
---

# Unlimited default daily budget for billed apps

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

Newly billed applications now default to an unlimited daily budget instead of a zero-dollar cap.

## Extended Definition

Newly billed applications now default to an unlimited daily budget instead of a zero-dollar cap.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.
- Daily quotas protect the integrity of the App Engine system by ensuring that no single app over-consumes a resource to the detriment of other apps.

### "Setting up your Google Cloud project for App Engine \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/developers-console](https://docs.cloud.google.com/appengine/docs/developers-console)
- Source ID: `site-docs-reference-4`
- Final score: 91
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before you can deploy your apps to the App Engine standard environment, you typically need to create or set up the following: A Google Cloud project An App Engine application A billing account Creating a project and application You can select or create a new Google Cloud project and App Engine application to create and manage a collection of settings, credentials, and your app's metadata.
- App Engine Locations App Engine is regional , which means the infrastructure that runs your apps is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .
- Tips: If you deploy your apps with the gcloud app deploy command, the gcloud CLI will ensure that your Google Cloud project includes an App Engine application and prompt you to select a region when needed.
- To create a budget and set alerts in a Google Cloud project: In the Google Cloud console, go to the Billing page: Go to Billing Click the billing account for which you want to create a budget.

### "Manage App Engine costs \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- Source ID: `site-docs-reference-4`
- Final score: 81
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If the function and the app are in separate projects , change the source code so APP NAME identifies the project that contains the app you want to disable . import base64 import json import os from googleapiclient import discovery APP NAME = os . getenv ( "GCP PROJECT" ) def limit use appengine ( data , context ): pubsub data = base64 . b64decode ( data [ "data" ]) . decode ( "utf-8" ) pubsub json = json . loads ( pubsub data ) cost amount = pubsub json [ "costAmount" ] budget amount = pubsub json [ "budgetAmount" ] if cost amount < = budget amount : print ( f "No action necessary. (Current cost: { cost amount } )" ) return appengine = discovery . build ( "appengine" , "v1" , cache discovery = False ) apps = appengine . apps () Get the target app's serving status target app = apps . get ( appsId = APP NAME ) . execute () current status = target app [ "servingStatus" ] Disable target app, if necessary if current status == "SERVING" : print ( f "Attempting to disable app { APP NAME } ..." ) body = { "servingStatus" : "USER DISABLED" } apps . patch ( appsId = APP NAME , updateMask = "serving status" , body = body ) . execute () Add the following dependencies to your function's requirements.txt file: google-api-python-client==2.131.0 Under Function to execute enter limit use appengine .
- To limit the costs of your App Engine app, you can use any of the following mechanisms: Specify the maximum number of instances Create budget alerts Disable your app manually Disable your app programmatically Specify the maximum number of instances Since App Engine costs usually scale based on the amount of traffic your app receives, you can limit your costs by limiting the number of instances App Engine can create.
- Disable your app programmatically You can use Budget Alerts, Pub/Sub, and Cloud Run functions to automatically disable your app when your costs exceed a threshold you specify.
- Select the scope of a budget alert You can create budget alerts for the total cost of all Google Cloud services in one or more projects, or just for the cost of App Engine.

