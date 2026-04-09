---
title: "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/what-apigee
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/tutorials/ingest-azure-api-hub
  title: "Ingest Microsoft Azure API data into API hub \_|\_ Apigee \_|\_ Google Cloud\
    \ Documentation"
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
Ingest Microsoft Azure API data into API hub
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows you how to ingest API metadata from Azure API Management (APIM) platform into Apigee API hub. You'll use a pre-built Application Integration template and a set of scripts to perform a manual and on-demand ingestion of your API data.
Note: The process covered in this tutorial doesn't set up a continuous synchronization. It only ingests the data from Azure APIM whenever the integration is manually executed.
The following diagram illustrates the workflow you'll be setting up:
Objectives
In this tutorial, you will complete the following steps:
Step 1: Create an Azure App
Step 2: Configure Google Cloud resources
Step 3: Create and publish an integration in Application Integration
Step 4: Execute the integration to ingest API data from Azure APIM to API hub
Step 5: Verify and view the ingested API data in API hub
Costs
In this document, you use the following billable components of Google Cloud:
Application Integration
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Ensure the following in your Microsoft Azure portal:
An active Azure account with an active subscription.
An existing Azure APIM service instance deployed within a resource group. For this tutorial, you'll need the names of the APIM service and the resource group, and the Azure subscription ID.
Ensure that you do the following in your Google Cloud console:
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Make sure that you have the following role or roles on the project:
API hub Admin ( roles/apihub.admin )
Application Integration Admin ( roles/integrations.admin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Alternatively, you can grant the Owner ( roles/owner ) or Editor ( roles/editor ) IAM role to your user account. This lets you manage the resources in your project.
Provision API hub in your Google Cloud project.
Provision Application Integration in your Google Cloud project.
Note: Both API hub and Application Integration must be provisioned within the same location in your project.
Prepare the environment
Set up your bash terminal
To get started, you'll need to set up your local bash terminal. You'll use this terminal to run and execute all the commands in this tutorial.
Download and install the following CLI tools:
Azure CLI
Google Cloud CLI
Download the necessary files from GitHub
Download the following files from the Apigee samples directory and save them all into a new, single directory on your local machine.
File
Description
env.sh
Main configuration file for the scripts.
azure_setup.sh
Script to configure Azure resources.
gcp_setup.sh
Script to configure Google Cloud resources.
azure_ip_template.json
The prebuilt integration JSON file.
deploy_integration.sh
Script to deploy and publish the integration.
execute_integration.sh
Script to trigger the integration.
Update the main configuration file
Open the downloaded env.sh file in a text editor and replace the placeholder variables with your specific project and Azure details.
Replace the following:
<GCP_PROJECT_ID> : the ID of your Google Cloud project.
<GCP_REGION> : the region where API hub is provisioned.
<AZURE_SUBSCRIPTION_ID> : your Azure subscription ID.
<AZURE_TENANT_ID> : your Azure tenant ID.
<AZURE_RESOURCE_GROUP> : the name of the Azure resource group that contains your Azure APIM instance.
<AZURE_APP_NAME> : apihub-integration . This name is used to create an Azure App Registration. The App Registration is used to authenticate with Azure and allow access to APIM data.
<AZURE_APIM_RESOURCE_NAME> : the name of your Azure APIM resource.
You can ignore the other environment variables in the file for now. Once you've updated the file, save and close it.
Step 1: Create an Azure App
With the env.sh file updated, run the azure_setup.sh script. This script creates an Azure App Registration in your Azure directory, which is used to authenticate with Azure and allow access to Azure APIM data.
Run the following commands in order:
cd DIRECTORY_PATH # The directory where you saved the files
source env.sh
chmod +x ./azure_setup.sh
./azure_setup.sh Important: Once the script runs successfully, note down the Azure Client ID and Azure Client Secret .
Edit the env.sh file and enter these values in the AZURE_CLIENT_ID and AZURE_CLIENT_SECRET variables. Save the file.
Step 2: Configure Google Cloud resources
Now, run the gcp_setup.sh script to configure the necessary Google Cloud resources in your Google Cloud project. This script creates the required service account, grants it permissions, and deploys the Azure custom plugin and plugin instance in API hub.
Run the following commands in order:
source env.sh
chmod +x ./gcp_setup.sh
./gcp_setup.sh Note: If your Google Cloud project has existing IAM policies with conditions, you may be prompted to specify a condition when running this script. If this happens, choose the [4] None option to grant the permissions without a condition.
Step 3: Create and publish an integration in Application Integration
Next, create and publish the integration that uses the prebuilt template, azure_ip_template.json .
Run the following commands in order:
chmod +x ./deploy_integration.sh
./deploy_integration.sh Note: (For macOS users) You may encounter a No such file or directory error due to differences in the sed command. If this happens, open the deploy_integration.sh script and change the line sed -i \ to sed -i ' ' \ .
View the integration in Application Integration
You can optionally verify that the integration was created successfully. Go to the Application Integration page in the Google Cloud console and click the azure-apim-plugin integration to view its components and structure.
The following image shows a snapshot of the deployed integration.
The following table describes the key components of the integration:
Component
Configuration or task ID
Description
API Trigger
api_trigger/azure_apim_sync_trigger
Starts the integration process when triggered by the execute_integration.sh script.
Accepts input variables required for Azure authentication, such as in_client_id , in_client_secret , in_subscription_id , in_tenant_id , and cached_token_expiry_timestamp_ms .
Data Mapping Task
taskId: 1
Checks if the cached Azure access token is valid by comparing $cached_token_expiry_timestamp_ms$ with the current time ( NOW_IN_MILLIS ).
Sets the boolean output variable $token_validate$ .
Call REST Endpoint
taskId: 2
If $token_validate$ is FALSE , fetches a new bearer token from the Azure Active Directory (Azure AD) OAuth endpoint: https://login.microsoftonline.com/$in_tenant_id$/oauth2/v2.0/token .
Email Task
taskId: 5
If Task 2 fails to fetch a new token, sends an email notification with failure details.
Data Mapping Task
taskId: 4 and 12
Stores or updates the Azure access token details in the variables $cached_access_token$ , $cached_token_expiry_timestamp_ms$ , and $new_token$ .
Call Integration Task
taskId: 7 and 13
Calls a sub-integration ( api_trigger/INTEGRATION_NAME_API_2 ) to begin discovering Azure APIM service instances.
Call REST Endpoint
taskId: 6
Retrieves a list of Azure APIM service instances from the Azure Management API.
Data Mapping Task
taskId: 8
Extracts the list of Azure APIM instances from the response and maps it to the $apims-list$ array variable for iteration.
For Each Parallel Task
taskId: 14
For each instance in $apims-list$ , runs a sub-integration ( api_trigger/INTEGRATION_NAME_API_3 ) in parallel to fetch APIs from that instance.
Call REST Endpoint
taskId: 9
Retrieves detailed resource and service names for the current Azure APIM instance being processed.
Data Mapping Task
taskId: 10
Parses the response from Task 9 to extract service and resource names into variables such as $servicename$ , $resourcenames$ , and $in_service_name$ .
For Each Parallel Task
taskId: 17
For each service in $servicename$ , runs a sub-integration ( api_trigger/INTEGRATION_NAME_API_4 ) in parallel to process the APIs within that service.
Call REST Endpoint
taskId: 15
Retrieves all APIs within the current service being processed.
Data Mapping Task
taskId: 16
Extracts API metadata from the response, populating $apis-list$ with API details and $api_id-list$ with API IDs for iteration. Also calculates $numberOfapiIds$ .
For Each Parallel Task
taskId: 19
For each API ID in $api_id-list$ , runs a sub-integration ( api_trigger/INTEGRATION_NAME_API_5 ) in parallel to gather detailed metadata for that API, including operations, revisions, specifications, and deployments.
Call REST Endpoint
taskId: 18
Retrieves operation details for the current API ( $current_api_id$ ).
Data Mapping Task
taskId: 20
Maps the API operation details from the response to the $operations-list$ variable.
Call Integration Task
taskId: 23
Calls a sub-integration ( api_trigger/INTEGRATION_NAME_API_6 ) to process API revision details.
Call REST Endpoint
taskId: 21
Retrieves revision details for the current API.
Data Mapping Task
taskId: 22
Maps revision details to $revisions_list$ and extracts the revision number to $versionnumber$ .
Call Integration Task
taskId: 26
Calls a sub-integration ( api_trigger/INTEGRATION_NAME_API_7 ) to process the API specification.
Call REST Endpoint
taskId: 24
Retrieves the API specification by calling the Azure export API with format=openapi+json .
Data Mapping Task
taskId: 40
Stores the JSON response containing the raw OpenAPI specification in $openaispecs-list$ .
JavaScript Task
taskId: 38
Executes a JavaScript task that transforms the raw Azure specification from $openaispecs-list$ into a valid OpenAPI 3.0 specification object and saves it to $specJson$ .
Data Mapping Task
taskId: 39
Converts the $specJson$ object to a Base64-encoded string ( $finalBase64Content$ ), as required by the API hub ingestion endpoint.
Call Integration Task
taskId: 29
Calls a sub-integration ( api_trigger/INTEGRATION_NAME_API_9 ) to process deployment details.
Call REST Endpoint
taskId: 30
Retrieves deployment and service metadata for the current API from Azure.
Data Mapping Task
taskId: 31
Extracts deployment properties such as $deploymenturl$ , $publisherEmail$ , $publisherName$ , $deploymentenvironment$ , $deploymentcreatedAt$ , and $deploymentlastUpdatedTime$ from the response.
Call Integration Task
taskId: 34
Calls a sub-integration ( api_trigger/INTEGRATION_NAME_API_10 ) to assemble and send the collected data to API hub.
Call REST Endpoint
taskId: 37
Sends the transformed API data (including specification and metadata) to the API hub collectApiData endpoint using a POST request.
Data Mapping Task
taskId: 36
Maps the response from the API hub ingestion call (Task 37) to the $responsebodyforsending$ variable.
Step 4: Execute the integration
To run the ingestion process, trigger the integration using the execute_integration.sh script.
Note: The execute_integration.sh script triggers a one-time ingestion of metadata from Azure APIM and does not set up a continuous synchronization. To refresh the data in API hub, you must execute this script again.
Run the following command in order:
chmod +x ./execute_integration.sh
./execute_integration.sh
Step 5: View the ingested data in API hub
Upon successful ingestion, you can see the ingested data in API hub. To verify that the ingestion was successful, go to the APIs page in API hub in the Google Cloud console. The page displays all the ingested APIs from Azure APIM.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
