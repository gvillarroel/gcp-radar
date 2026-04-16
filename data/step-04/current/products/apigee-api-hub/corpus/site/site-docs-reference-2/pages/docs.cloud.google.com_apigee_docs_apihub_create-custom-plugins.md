---
title: "Manage custom plugins \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/create-custom-plugins
  title: "Manage custom plugins \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Manage custom plugins
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
API hub offers you the capability to manually create and manage custom plugins to connect to third party systems and gateways. Once the plugin is created, you can create a plugin instance to establish the connection and ingest the third party API data into API hub.
Before you begin
Grant the following IAM permissions to your principal account:
apihub.plugins.create
apihub.plugins.delete
apihub.plugins.get
apihub.plugins.list
For information on granting roles to principals, see Granting, changing, and revoking access .
Create a custom plugin
You can create a custom plugin using the Google Cloud console or the REST API.
Console
To create a custom plugin, do the following:
In the Google Cloud console, go to the API hub page.
Go to API hub
Click settings Settings from the left navigation menu to open the Settings page.
Click the Plugins tab to view the available plugins in your project.
Click Create a new plugin .
Configure the following fields in the Create plugin pane:
Display name : Enter a name for the plugin.
Optional: Click Specify ID to provide a unique ID for the plugin. API hub generates a unique ID if you don't provide one.
Note: The ID must be between 4 to 500 characters in length and can only contain the following characters: /[A-Z][a-z][0-9]-/.
Description : Enter a description for the plugin.
Plugin type : This field is selected by default.
Click Create plugin to create the plugin.
On successful creation, you can see a new plugin card displayed in the Plugins tab. To use the plugin, you need to create a plugin instance .
REST
You can create a custom plugin using the Create Plugin API :
Custom plugin without a hosting service:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"display_name": " PLUGIN_DISPLAY_NAME ",
"description": " PLUGIN_DESCRIPTION ",
"actions_config": [
{
"id": " PLUGIN_ACTION_ID ",
"display_name": " PLUGIN_ACTION_DISPLAY_NAME ",
"description": " PLUGIN_ACTION_DESCRIPTION ",
"trigger_mode": " PLUGIN_ACTION_TRIGGER_MODE "
}
],
"plugin_category": " PLUGIN_CATEGORY ",
"ownership_type": "USER_OWNED"
}' \
"https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ HUB_LOCATION /plugins?plugin_id= PLUGIN_ID "
Example
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"display_name": "Nebula Connect",
"description": "Nebula Connect plugin for syncing metadata via gRPC.",
"actions_config": [
{
"id": "sync-metadata-core",
"display_name": "Sync Core Metadata",
"description": "Initiates synchronization of core API metadata.",
"trigger_mode": "API_HUB_SCHEDULE_TRIGGER"
}
],
"plugin_category": "API_GATEWAY",
"ownership_type": "USER_OWNED"
}' \
"https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin_id=nebula-connect-v1"
Custom plugin with a hosting service:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"display_name": " PLUGIN_DISPLAY_NAME ",
"description": " PLUGIN_DESCRIPTION ",
"actions_config": [
{
"id": " PLUGIN_ACTION_ID ",
"display_name": " PLUGIN_ACTION_DISPLAY_NAME ",
"description": " PLUGIN_ACTION_DESCRIPTION ",
"trigger_mode": " PLUGIN_ACTION_TRIGGER_MODE "
}
],
"plugin_category": " PLUGIN_CATEGORY ",
"hosting_service": {
"service_uri": " PLUGIN_HOSTING_SERVICE_URI "
},
"ownership_type": "USER_OWNED"
}' \
"https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ HUB_LOCATION /plugins?plugin_id= PLUGIN_ID "
Example
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
-d '{
"display_name": "Nebula Connect",
"description": "Nebula Connect plugin for syncing metadata via gRPC.",
"actions_config": [
{
"id": "sync-metadata-core",
"display_name": "Sync Core Metadata",
"description": "Initiates synchronization of core API metadata.",
"trigger_mode": "API_HUB_SCHEDULE_TRIGGER"
}
],
"plugin_category": "API_GATEWAY",
"hosting_service": {
"service_uri": "[https://nebula-endpoints-987654321098.us-west1.run.app](https://nebula-endpoints-987654321098.us-west1.run.app)"
},
"ownership_type": "USER_OWNED"
}' \
"https://apihub.googleapis.com/v1/projects/test-project/locations/us-west1/plugins?plugin_id=nebula-connect-v1"
Replace the following:
PLUGIN_DISPLAY_NAME : The display name of the plugin.
PLUGIN_DESCRIPTION : A description of the plugin.
PLUGIN_ACTION_ID : The ID of the plugin action.
PLUGIN_ACTION_DISPLAY_NAME : The display name of the plugin action.
PLUGIN_ACTION_DESCRIPTION : A description of the plugin action.
PLUGIN_ACTION_TRIGGER_MODE : The trigger mode of the plugin action.
PLUGIN_CATEGORY : The category of the plugin.
PLUGIN_HOSTING_SERVICE_URI : The URI of the hosting service.
PROJECT_ID : The name of your API hub host project. The host project was selected when API hub was provisioned.
HUB_LOCATION : The location of the API hub.
PLUGIN_ID : The ID of the plugin.
Delete a custom plugin
You can delete a custom plugin using the Google Cloud console or the REST API. Before deleting a plugin, you must ensure to delete all the plugin instances associated with it.
Warning: Deleting a plugin also deletes all the associated data from API hub. This action can't be undone.
Console
To delete a custom plugin, do the following:
In the Google Cloud console, go to the API hub page.
Go to API hub
Click settings Settings from the left navigation menu to open the Settings page.
Click the Plugins tab to view the available custom plugin cards in your project.
For the plugin that you want to delete, click delete (Delete plugin).
In the confirmation dialog, click Delete to confirm the deletion of the plugin.
REST API
To delete a custom plugin, do the following:
Send a DELETE request to the plugins resource:
curl -X DELETE -H "Authorization: Bearer $(gcloud auth print-access-token)"
https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ HUB_LOCATION /plugins/ PLUGIN_ID
Replace the following:
PROJECT_ID : The name of your API hub host project. The host project was selected when API hub was provisioned.
HUB_LOCATION : The location of the API hub.
PLUGIN_ID : The ID of the plugin.
Get a custom plugin
REST API
You can use the plugin ID to get a specific custom plugin. To get a custom plugin, send a GET request to the plugins resource:
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)"
https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ HUB_LOCATION /plugins/ PLUGIN_ID
Replace the following:
PROJECT_ID : The name of your API hub host project. The host project was selected when API hub was provisioned.
HUB_LOCATION : The location of the API hub.
PLUGIN_ID : The ID of the plugin.
List custom plugins
REST API
To list all the custom plugins in your project, do the following:
Send a GET request to the plugins resource:
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)"
https://apihub.googleapis.com/v1/projects/ PROJECT_ID /locations/ HUB_LOCATION /plugins
Replace the following:
PROJECT_ID : The name of your API hub host project. The host project was selected when API hub was provisioned.
HUB_LOCATION : The location of the API hub.
What's next
Learn more about Plugins overview .
Learn how to Ingest Microsoft Azure API data into API hub .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
