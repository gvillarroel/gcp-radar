---
title: "Deploy an API to a gateway \_|\_ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/deploying-api
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/about-api-gateway
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/deploying-api
  title: "Deploy an API to a gateway \_|\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy an API to a gateway
This page describes how to deploy an API to API Gateway.
Prerequisites
Before you can deploy an API to API Gateway, ensure that you do the following:
Prepare your development environment as described in Configure your development environment .
Create an API , if using the Google Cloud CLI.
Note : When using the Google Cloud console, this step is completed when deploying the API, as described below.
Create an OpenAPI spec that defines your API.
Create an API config from your API definition.
Gateway ID requirements
Many of the gcloud CLI commands shown below require you to specify the ID of the gateway, in the form: GATEWAY_ID .
API Gateway enforces the following requirements for the gateway ID:
Must have a maximum length of 49 characters.
Must contain only lowercase letters, numbers, or dashes.
Must not start with a dash.
Must not contain an underscore.
Define the endpoint of the deployed API config
When you deploy an API config to a gateway, API Gateway creates a unique
URL for the gateway in the gateway.dev domain. Your API clients then
use a URL in the form below to access the deployed API config:
https:// GATEWAY_ID - HASH . REGION_CODE .gateway.dev
where GATEWAY_ID is the name of the gateway, HASH is the unique hash code generated when you deployed the API,
and REGION_CODE is the code for the Cloud location in which you deployed the gateway.
For example:
https:// my-gateway - a12bcd345e67f89g0h . uc .gateway.dev
Deploy an API to a gateway
To deploy an API to a gateway:
Google Cloud console
In the Google Cloud console, go to the API Gateway page.
Go to API Gateway
Click add_box Create Gateway
The Create Gateway page displays.
In the Select an API , select Create new API in the Select an API field.
In the Display Name field, enter the display name of the API.
In the API ID field, enter the ID of the API. See API ID requirements for API naming guidelines.
(Optional) Add labels for your API.
In the API Config section, select Create a new API config in the Select a Config field
In the Upload an API Spec field, upload a .yaml or .json file. See OpenAPI 2.0 and OpenAPI 3.x file formats for API definition.
In the Display Name field, enter the display name of the API config.
In the Select a Service Account list, select the required service account. This service account will be used by API Gateway as its identity.
(Optional) Add labels for your API config.
In the Gateway details section, enter a display name for your gateway.
In the Location field, select the Google Cloud region where you want to deploy your gateway.
(Optional) Add labels for your API Gateway.
Click Create gateway .
The newly created API is visible on the API Gateway homepage.
Google Cloud CLI
Validate the project ID returned from the following command to make sure that
the gateway isn't created in the wrong project.
gcloud config list project
If you need to change the default project, run the following command
and replace PROJECT_ID with the Google Cloud project ID
in which you want to create the service::
gcloud config set project PROJECT_ID
View help for the gateway create command:
gcloud api-gateway gateways create --help
Run the following command to deploy the API config to the gateway:
gcloud api-gateway gateways create GATEWAY_ID \
--api= API_ID --api-config= CONFIG_ID \
--location= GCP_REGION
where:
GATEWAY_ID specifies the ID of the new gateway. If the gateway does not already exist then this command creates it.
API_ID specifies the ID of the API Gateway API associated with this gateway.
CONFIG_ID specifies the ID of the API config deployed to the gateway. You must specify an API config when creating a gateway.
GCP_REGION specifies the Cloud location for the deployed gateway.
Note: Allowed values are:
asia-northeast1
australia-southeast1
europe-west1
europe-west2
us-east1
us-east4
us-central1
us-west2
us-west3
us-west4
As it is creating the gateway, the gcloud CLI outputs information to the terminal.
On successful completion, you can use the following command to view details about the gateway:
gcloud api-gateway gateways describe GATEWAY_ID \
--location= GCP_REGION
This command returns the following:
apiConfig : projects / PROJECT_ID / locations / global / apis / API_ID / configs / CONFIG_ID
createTime : ' 2020 -02-05 T13 : 44 : 12.997862831 Z '
defaultHostname : my - gateway - a12bcd345e67f89g0h . uc . gateway . dev
displayName : GATEWAY_ID
name : projects / PROJECT_ID / locations / GCP_REGION / gateways / GATEWAY_ID
serviceAccount :
email : gateway -111111@222222 - tp . iam.gserviceaccount.com
state : ACTIVE
updateTime : ' 2020 -02-05 T13 : 45 : 00.844705087 Z '
Note the value of the defaultHostname property. This is the hostname portion of the gateway URL. To access an API config deployed to this gateway, you use a URL in the form:
https://my-gateway-a12bcd345e67f89g0h.uc.gateway.dev
The gcloud CLI takes many options, including those described in the
gcloud Reference . In addition,
for API Gateway, you can set the following options when creating a gateway:
--async : Return control to the terminal immediately, without waiting for the operation to complete.
--display-name= NAME : Specifies the display name of the gateway, meaning the name shown in the UI. Do not use spaces in the name. Use hyphens and underscores instead. The default value is GATEWAY_ID .
--labels= KEY1 = VALUE1 , KEY2 = VALUE2 ,... : Specifies labels associated with the gateway.
List gateways
This section explains how to view a list of all API Gateways deployed in your Google Cloud project.
Google Cloud console
In the Google Cloud console, go to the API Gateway > Gateways page.
Go to Gateways
Google Cloud CLI
To list gateways for a specific project:
gcloud api-gateway gateways list
This command returns output in the form:
GATEWAY_ID LOCATION DISPLAY_NAME STATE CREATE_TIME UPDATE_TIME
my-gateway us-central1 my-gateway ACTIVE 2021-01-07T00:04:19 2022-05-21T00:33:46
To list gateways for a specific project and region:
gcloud api-gateway gateways list --location= GCP_REGION
Use a filter expression to list the gateways associated with a specific API:
gcloud api-gateway gateways list \
--filter="apiConfig:projects/ PROJECT_ID /locations/global/apis/ API_ID /*" \
Or use this filter to list gateways for a specific API config:
gcloud api-gateway gateways list \
--filter="apiConfig:projects/ PROJECT_ID /locations/global/apis/ API_ID /configs/ CONFIG_ID " \
--project= PROJECT_ID
Use the region, and gateway IDs to obtain detailed information about the gateway,
including the identity of the API config deployed to the gateway:
gcloud api-gateway gateways describe GATEWAY_ID \
--location= GCP_REGION
Update a gateway
Update a gateway to:
Deploy a different API config to the gateway
Update the display name
Update the labels
Google Cloud console
Refer the following steps to update the API Gateway details:
In the Google Cloud console, go to the API Gateway page.
Go to API Gateway
Click the required API.
Click the Gateways tab.
Click the required Gateway.
Click edit Edit .
Edit the Display Name or Labels .
Select the required API Config , or click Create new API config and create the config as shown
here .
Click Update .
Click
arrow_back
to return on the Gateway list page.
On the Gateway list page, you can view the updated Gateway.
Google Cloud CLI
Use the following gcloud CLI command to update an existing gateway, where UPDATE_OPTIONS is replaced with the gateway option flag and value you want to update:
gcloud api-gateway gateways update GATEWAY_ID \
UPDATE_OPTIONS --api= API_ID --location= GCP_REGION
For example, to update the API config deployed to the gateway:
gcloud api-gateway gateways update GATEWAY_ID \
--api-config= NEW_CONFIG_ID --api= API_ID --location= GCP_REGION
where NEW_CONFIG_ID specifies the new API config to deploy to the gateway.
Note : There are two important points to keep in mind when updating a gateway with a new API config:
Gateways only support API configs created under the same API. To deploy an API config created under an other API, you must either create a new gateway or use a gateway that already serves configs under the new API.
API Gateway supports a zero-downtime update model, which means your API continues to handle requests during the deployment of the updated API config. However, there is a period of time while the new API config is being deployed when some requests might still be handled by the previous version of the API config. If you have deployed the API config across multiple regions and gateways, you have to redeploy the updated API config in each region separately.
For a complete list of available update flags and arguments, see the gcloud api-gateway gateways update reference or use the following command to view all update options:
gcloud api-gateway gateways update --help
Delete a gateway
This section describes how to delete an existing API Gateway. Follow these steps to permanently remove a gateway and its associated configuration from your Google Cloud project.
Google Cloud console
In the Google Cloud console, go to the API Gateway > Gateways page.
Go to Gateways
Click More more_vert and then click Delete to delete the chosen API Gateway.
Google Cloud CLI
Use the following gcloud CLI command to delete an existing gateway:
gcloud api-gateway gateways delete GATEWAY_ID \
--location= GCP_REGION
What's next
Monitor your API
Pass data to and from the backend service
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
