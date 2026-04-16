---
title: "Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/core-release-notes
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore
  title: "Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Create an online store instance
Stay organized with collections
Save and categorize content based on your preferences.
To set up online serving, you need to first create an online store instance for
Bigtable online serving or Optimized online serving
( Deprecated ).
Note that you can't change the type of online serving after you choose
Bigtable online serving or Optimized online serving while creating
your online store. However, you can change the serving endpoint configuration
for an online store instance created for Optimized online serving.
After you create the online store, you can add feature views
and associate those feature views with feature data sources in BigQuery.
You can encrypt your online store instance by specifying a
customer-managed encryption key (CMEK)
when you create your online store instance.
Only Bigtable online serving supports encryption using a CMEK.
To learn more about the benefits of using a CMEK and to understand whether
a CMEK is useful for your online store, see Benefits of CMEK .
Using a CMEK can involve additional usage costs, depending on the
type of key being used. For more information about pricing, refer to
Cloud Key Management Service pricing .
Before you begin
Authenticate to
Vertex AI, unless you've done so already.
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
Python
To use the Python samples on this page in a local development environment, install and
initialize the gcloud CLI, and then set up Application Default Credentials with
your user credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
For more information, see
Set up authentication for a local development environment .
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Create an online store for Bigtable online serving
When you use Bigtable online serving, you have the option to encrypt the online store using a CMEK .
Create an online store for Bigtable online serving without CMEK
To create an online store instance for
Bigtable online serving with autoscaling, without specifying a CMEK, use
the Google Cloud console or the REST API.
Note: Bigtable online serving doesn't support embeddings. If you want to
serve embeddings, use
Vector Search instead.
Console
Use the following instructions to create an online store for Bigtable online serving using the Google Cloud console.
In the Vertex AI section of the Google Cloud console, go
to the Feature Store page.
Go to the Feature Store page
Click Online store to go to the Online store section.
Click Create to open the Create Online Store page.
Specify a name for the online store.
Optional: To add labels, click Add label , and specify the label name and value. You can add multiple labels to an online store.
In the Choose a storage solution for your online store field, click Bigtable .
Modify the Minimum node count , Maximum node count , and CPU utilization target , as needed.
Click Create .
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from google.cloud import aiplatform
from vertexai.resources.preview import feature_store
def create_bigtable_feature_online_store_sample (
project : str ,
location : str ,
feature_online_store_id : str ,
):
aiplatform . init ( project = project , location = location )
fos = feature_store . FeatureOnlineStore . create_bigtable_store (
feature_online_store_id
)
return fos
project : Your project ID.
location : Region where the online store is located, such as us-central1 .
feature_online_store_id : The name of the new FeatureOnlineStore instance.
REST
To create a FeatureOnlineStore resource, send a POST request by using the
featureOnlineStores.create
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where you want to create the online store, such as us-central1 .
PROJECT_ID : Your project ID.
FEATUREONLINESTORE_NAME : The name of the new online store instance.
BOOLEAN : Optional: To create an online store that supports embedding management,
enter true . The default value is false .
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME
Request JSON body:
{
"bigtable": {
"auto_scaling": {
"min_node_count": 1,
"max_node_count": 3,
"cpu_utilization_target": 50
}
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata",
"genericMetadata": {
"createTime": "2023-09-18T17:49:23.847496Z",
"updateTime": "2023-09-18T17:49:23.847496Z"
}
}
}
Create an online store that uses a CMEK
Use the following steps to create an online store instance for
Bigtable online serving that's encrypted with a CMEK.
Using a CMEK encryption can involve additional usage costs, depending on the
type of key being used. For more information about pricing, refer to
Cloud Key Management Service pricing .
Note: Bigtable online serving doesn't support embeddings. If you want to
serve embeddings, use
Vector Search instead.
Use Cloud Key Management Service to configure a customer-managed encryption
key.
To create a
FeatureOnlineStore
resource, send the following POST request by using the
featureOnlineStores.create
method and specifying the CMEK.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where you want to create the online store, such as us-central1 .
PROJECT_ID : Your project ID.
FEATUREONLINESTORE_NAME : The name of the new online store instance.
BOOLEAN : Optional: To create an online store that supports embedding management,
enter true . The default value is false .
KEY_NAME : The name of the encryption key that you want to use for this metadata store.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME
Request JSON body:
{
"bigtable": {
"auto_scaling": {
"min_node_count": 1,
"max_node_count": 3,
"cpu_utilization_target": 50
}
},
"encryption_spec": {
"kms_key_name": " KEY_NAME "
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata",
"genericMetadata": {
"createTime": "2023-09-18T17:49:23.847496Z",
"updateTime": "2023-09-18T17:49:23.847496Z"
}
}
}
Create an online store for Optimized online serving
Vertex AI Feature Store Optimized online serving is
deprecated . Beginning on
May 17, 2026, no new features will be added and
only critical patches will be provided. On February 17, 2027, the capability will be fully
sunset and APIs will no longer be available.
To improve latency and cost optimizations, migrate to
Bigtable online serving .
To efficiently store and serve embeddings, use the purpose-built
Vector Search .
When you use Optimized online serving, you can configure the online store
to serve features from either a public endpoint or a dedicated
Private Service Connect endpoint.
Create an online store for Optimized online serving with a public endpoint
Use the following samples to create an online store for Optimized online serving with a public endpoint.
Console
Use the following instructions to create an online store for Optimized online serving using the Google Cloud console.
In the Vertex AI section of the Google Cloud console, go
to the Feature Store page.
Go to the Feature Store page
Click Online store to go to the Online store section.
Click Create to open the Create Online Store page.
Specify a name for the online store.
Optional: To add labels, click Add label , and specify the label name and value. You can add multiple labels to an online store.
In the Choose a storage solution for your online store field, click Optimized .
Click Create .
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from google.cloud import aiplatform
from vertexai.resources.preview import feature_store
def create_optimized_public_feature_online_store_sample (
project : str ,
location : str ,
feature_online_store_id : str ,
):
aiplatform . init ( project = project , location = location )
fos = feature_store . FeatureOnlineStore . create_optimized_store (
feature_online_store_id
)
return fos
project : Your project ID.
location : Region where you want to create the FeatureOnlineStore instance, such as us-central1 .
feature_online_store_id : The name of the new FeatureOnlineStore instance.
REST
To create an online store instance, send a POST request by using the
featureOnlineStores.create
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where you want to create the FeatureOnlineStore instance, such as us-central1 .
PROJECT_ID : Your project ID.
FEATUREONLINESTORE_NAME : The name of the new FeatureOnlineStore instance.
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME
Request JSON body:
{
"optimized": {}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata",
"genericMetadata": {
"createTime": "2023-09-18T17:49:23.847496Z",
"updateTime": "2023-09-18T17:49:23.847496Z"
}
}
}
Create an online store for Optimized online serving with a Private Service Connect endpoint
Use the following samples to create an online store for Optimized online serving with
Private Service Connect .
Python
To learn how to install or update the Vertex AI SDK for Python, see Install the Vertex AI SDK for Python .
For more information, see the
Python API reference documentation .
from typing import List
from google.cloud import aiplatform
from vertexai.resources.preview import feature_store
def create_optimized_private_feature_online_store_sample (
project : str ,
location : str ,
feature_online_store_id : str ,
project_allowlist : List [ str ],
):
aiplatform . init ( project = project , location = location )
fos = feature_store . FeatureOnlineStore . create_optimized_store (
name = feature_online_store_id ,
enable_private_service_connect = True ,
project_allowlist = project_allowlist ,
)
return fos
project : Your project ID.
location : Region where you want to create the FeatureOnlineStore instance, such as us-central1 .
feature_online_store_id : The name of the new FeatureOnlineStore instance.
project_allowlist : The list of project names to be allowlisted for private service connect (PSC).
REST
To create an online store instance, send a POST request by using the
featureOnlineStores.create
method.
Before using any of the request data,
make the following replacements:
LOCATION_ID : Region where you want to create the FeatureOnlineStore instance, such as us-central1 .
PROJECT_ID : Your project ID.
FEATUREONLINESTORE_NAME : The name of the new FeatureOnlineStore instance.
PROJECT_NAMES : The list of project names to be allowlisted for private service connect (PSC).
HTTP method and URL:
POST https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME
Request JSON body:
{
"optimized": {},
"dedicated_serving_endpoint": {
"private_service_connect_config": {
"enable_private_service_connect": true,
"project_allowlist": [" PROJECT_NAMES "]
}
}
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https:// LOCATION_ID -aiplatform.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION_ID /featureOnlineStores?feature_online_store_id= FEATUREONLINESTORE_NAME " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT_NUMBER /locations/ LOCATION_ID /featureOnlineStores/ FEATUREONLINESTORE_NAME /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata",
"genericMetadata": {
"createTime": "2023-09-18T17:49:23.847496Z",
"updateTime": "2023-09-18T17:49:23.847496Z"
}
}
}
What's next
Learn how to create a feature view .
Learn how to update an online store .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
