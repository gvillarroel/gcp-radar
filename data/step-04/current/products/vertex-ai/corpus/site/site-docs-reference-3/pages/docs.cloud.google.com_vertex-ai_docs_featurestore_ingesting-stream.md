---
title: "Streaming import \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/ingesting-stream
  title: "Streaming import \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Streaming import
Stay organized with collections
Save and categorize content based on your preferences.
Vertex AI Feature Store (Legacy) is
deprecated . Beginning on
May 17, 2026, no new features will be added and only critical
patches will be provided. On February 17, 2027, the service will be fully sunset and APIs will
no longer be available.
For continued support and faster innovation, migrate to
Vertex AI Feature Store (V2) ,
our integrated platform for machine learning (ML) feature management introduced on November 17,
2023.
To learn more,
run the "Example Feature Store workflow with sample data" notebook in one of the following
environments:
Open in Colab
|
Open in Colab Enterprise
|
Open
in Vertex AI Workbench
|
View on GitHub
Streaming import lets you make real-time updates to feature values. This
method is useful when having the latest available data for online serving is a
priority. For example, you can import streaming event data and, within a few
seconds, Vertex AI Feature Store (Legacy) makes that data available for online
serving scenarios.
If you must backfill data or if you compute feature values in batch, use batch
import . Compared to streaming import requests, batch
import requests can handle larger payloads but
take longer to complete.
For information about the oldest feature value timestamp that you can import,
see Vertex AI Feature Store (Legacy) in Quotas and limits .
You can't import feature values for which the timestamps indicate future dates or times.
Example use case
An online retail organization might provide a personalized shopping experience
by using the current activity of a user. As users navigate through the website,
you can capture their activity into a featurestore and then, soon
after, serve all that information for online predictions. This real-time
import and serving can help you show useful and relevant recommendations to
customers during their shopping session.
Online storage node usage
Writing feature values to an online store uses the featurestore's CPU resources
(online storage nodes). Monitor your CPU
usage to check that demand doesn't exceed supply, which can lead to serving
errors. We recommend around a 70% usage rate or lower to avoid these errors. If
you regularly exceed that value, you can update your featurestore to increase
the number of nodes or use autoscaling. For more information, see Manage
featurestores .
Streaming import
Write a value to a particular feature. The feature value must be included as
part of the import request. You can't stream data directly from a data
source.
If you're writing to recently created features, wait a few minutes before you
do so because the new features might not have propagated yet. If you don't, you
might see a resource not found error.
You can import feature values for only one entity per write. For any specific project and region, you can simultaneously write feature values for multiple entities within a maximum of ten different entity types. This limit includes streaming import requests to all
featurestores in a given project and region. If you exceed this limit,
Vertex AI Feature Store (Legacy) might not write all of your data to the
offline store. If this occurs, Vertex AI Feature Store (Legacy) logs the error in the Logs Explorer . For more information, see Monitor offline storage write errors for streaming import .
REST
To import feature values for existing features, send a POST request by using the
featurestores.entityTypes.writeFeatureValues
method. If the names of the source data columns and the destination feature IDs
are different, include the sourceField parameter. Note that featurestores.entityTypes.writeFeatureValues lets you import feature values for only one entity at a time.
Before using any of the request data,
make the following replacements:
LOCATION : Region where the featurestore is created. For example, us-central1 .
PROJECT : Your project ID .
FEATURESTORE_ID : ID of the featurestore.
ENTITY_TYPE_ID : ID of the entity type.
FEATURE_ID : ID of an existing feature in the featurestore to
write values for.
VALUE_TYPE : The value
type of the feature.
VALUE : Value for the feature.
TIME_STAMP (optional): The time at which the feature was
generated. The timestamp must be in the RFC3339 UTC format.
HTTP method and URL:
POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID :writeFeatureValues
Request JSON body:
{
"payloads": [
{
"entityId": " ENTITY_ID ",
"featureValues": {
" FEATURE_ID ": {
" VALUE_TYPE ": VALUE ,
"metadata": {"generate_time": " TIME_STAMP "}
}
}
}
]
}
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
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID :writeFeatureValues"
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
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT /locations/ LOCATION /featurestores/ FEATURESTORE_ID /entityTypes/ ENTITY_TYPE_ID :writeFeatureValues" | Select-Object -Expand Content
You should receive a successful status code (2xx) and an empty response.
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from google.cloud import aiplatform
def write_feature_values_sample (
project : str , location : str , entity_type_id : str , featurestore_id : str
):
aiplatform . init ( project = project , location = location )
my_entity_type = aiplatform . featurestore . EntityType (
entity_type_name = entity_type_id , featurestore_id = featurestore_id
)
my_data = {
"movie_01" : {
"title" : "The Shawshank Redemption" ,
"average_rating" : 4.7 ,
"genre" : "Drama" ,
},
}
my_entity_type . write_feature_values ( instances = my_data )
Additional languages
You can install and use the
following Vertex AI client libraries to call the
Vertex AI API. Cloud Client Libraries provide an optimized developer
experience by using the natural conventions and
styles of each supported language.
Java
Node.js
What's next
Learn how to monitor offline storage write errors for streaming import .
Learn how to serve features through online
serving or batch
serving .
Troubleshoot common
Vertex AI Feature Store (Legacy) issues.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
