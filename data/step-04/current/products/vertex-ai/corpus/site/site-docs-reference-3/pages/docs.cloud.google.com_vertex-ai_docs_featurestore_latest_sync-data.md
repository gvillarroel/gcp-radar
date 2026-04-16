---
title: "Start a data sync \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/sync-data
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/sync-data
  title: "Start a data sync \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Start a data sync
Stay organized with collections
Save and categorize content based on your preferences.
If your feature view is configured to use scheduled data sync, you can
optionally skip the wait until the next scheduled sync operation by manually
initiating the data sync.
You can't manually trigger a data sync if your feature view is configured
to use continuous data sync. For more information about the types of data sync
that Vertex AI Feature Store supports and how to configure the sync type
for a feature view, see
Sync feature data in a feature view .
Note that to sync the data for the entire online store, you need to sync the
data for all of its feature views.
Data sync might involve costs for BigQuery resource usage. For
information about how to optimize costs while setting the sync schedule for a
feature view, see Optimize costs during sync .
Before you begin
Authenticate to
Vertex AI, unless you've done so already.
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Manually start a data sync
Use the following sample to manually start the data sync in a feature view
configured for scheduled data sync.
Note that only one data sync operation can be active at any point of time for
a feature view. If you try to manually start the data sync while another sync is
in progress, then the new sync operation starts only after the ongoing sync
operation ends.
Caution: You can't trigger the data sync if your feature view
is configured for continuous data sync .
If your feature view is configured for continuous data sync, then the feature
data is refreshed whenever the feature data in the BigQuery data source is updated.
REST
To manually start a data sync in a
FeatureView ,
send a POST request by using the
featureViews.sync
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where the online store is located, such as us-central1 .
PROJECT_ID : Your project ID.
FEATUREONLINESTORE_NAME : The name of the online store containing the feature view.
FEATUREVIEW_NAME : The name of the feature view where you want to manually start the data sync.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /featureViews/ FEATUREVIEW_NAME :sync
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /featureViews/ FEATUREVIEW_NAME :sync"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /featureViews/ FEATUREVIEW_NAME :sync" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"featureViewSync": "projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /featureViews/ FEATUREVIEW_NAME /featureViewSyncs/ OPERATION_ID "
}
What's next
Learn how to view a list of all data sync operations executed for a feature view .
Learn how to update a feature view
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
