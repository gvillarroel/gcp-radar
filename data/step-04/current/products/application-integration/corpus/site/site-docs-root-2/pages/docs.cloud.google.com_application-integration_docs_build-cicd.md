---
title: "Build CICD for your integration \_|\_ Application Integration \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/build-cicd
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/build-cicd
  title: "Build CICD for your integration \_|\_ Application Integration \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Build CICD for your integration
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial describes how to automate promoting an integration between different environments in different Google Cloud projects using config variables ( preview ).
Note: You cannot use config variables to configure entity operations and actions for connectors.
Tip: To learn how to store integration and connector assets to a source code repository, promote changes across environments, and how such deployments can be automated, see the CICD for Application Integration blog.
Overview
In this tutorial, you'll automate Application Integration deployments using config variable for a sample integration. This sample integration flow calls an API and publishes the response from the API to a Pub/Sub topic.
This sample is meant to illustrate the use of Call REST Endpoint and Connectors tasks. You can store the sample integration in GitHub repositories that correspond to the different environments and Google Cloud projects.
Objectives
This tutorial shows you how to complete the following tasks in your integration:
Create an integration.
Create config variables and use them in your integration.
Promote your integration to another environment.
Costs
In this tutorial, you use the following billable components of Google Cloud:
Application Integration
Integration Connectors
The instructions in this tutorial are designed to keep your resource usage within the limits of Google Cloud Free cloud features and trial offer .
When you finish the tasks that are described in this document, you can avoid
continued billing by deleting the resources that you created. For more information, see
Clean up .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Enable the Secret Manager API, Connectors API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Pub/Sub Publisher ( roles/pubsub.publisher ) role to the service account.
To grant the role, find the Select a role list, then select
Pub/Sub Publisher ( roles/pubsub.publisher ) .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
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
Enable the Secret Manager API, Connectors API APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Grant the Pub/Sub Publisher ( roles/pubsub.publisher ) role to the service account.
To grant the role, find the Select a role list, then select
Pub/Sub Publisher ( roles/pubsub.publisher ) .
Note : The Role field affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
Click Continue .
Click Done to finish creating the service account.
Create a Pub/Sub topic
In the Google Cloud console, go to the Pub/Sub Topics page.
Go to Topics
Click Create topic .
In the Topic ID field, enter an ID for your topic. For more information about naming topics, see Guidelines to name a topic, subscription, schema, or snapshot.
Retain the option Add a default subscription .
Do not select the other options.
Click Create topic .
Configure a Pub/Sub connector
In the Google Cloud console , go to the Integration Connectors > Connections page
and then select or create a Google Cloud project.
Go to the Connections page
Click + Create New to open the Create Connection page.
In the Location section, choose the location for the connection.
Region : Select a location from the drop-down list.
For the list of all the supported regions, see Locations .
Click NEXT .
In the Connection Details section, complete the following:
Connector : Select Pub/Sub from the drop down list of available Connectors.
Connector version : Select the Connector version from the drop down list of available versions.
In the Connection Name field, enter pub-sub-connector .
Service Account : Select a service account that has the required roles .
Project ID : Google Cloud project ID where the Pub/Sub instance resides.
Topic ID : Enter the name of your Pub/Sub topic .
Click Next .
In the Authentication section, click NEXT .
Review : Review your connection and authentication details.
Click Create .
Create a new integration
After you Set up Application Integration , you can create a new integration:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
Click Integrations from the left navigation menu to open the Integrations page.
Click add_box Create integration and provide the following details in the Create Integration page:
Integration name: Enter a name for your integration. For example, build-cicd .
Description: Optionally, enter a description for your integration. For example, Demo integration created for CICD tutorial .
Region: Select the region us-central1 from the list of provisioned
regions. If the region that you want to select is not provision, see Provision a new region . To see a list of supported regions, see Application Integration locations .
Service account : This field appears if you have enabled governance for your region.
Select the service account for your integration. To learn how to enable governance for your
region, see Edit region .
Click Create . This opens the integration editor page in which you can add the tasks and the triggers to build your integration.
Create an integration flow
Add an API trigger and a Call REST Endpoint
To add an API trigger trigger, perform the following steps:
In the Google Cloud console, go to the Application Integration page.
Go to Application Integration
In the navigation menu, click Integrations
The Integrations List page appears listing all the integrations available in the Google Cloud project.
Select the build-cicd integration.
This opens the integration in the integration editor .
In the integration editor navigation bar, click Triggers > API Trigger to add the trigger.
In the integration editor navigation bar, click Tasks > Call REST Endpoint to add the task.
Add an edge connection from the API trigger element to the
Call REST Endpoint element by hovering over a control point on the API trigger element, then
clicking and dragging a line to a control point on the Call REST Endpoint task element.
Create config variables
To create config variables, follow these steps:
In the integration editor navigation bar, click last_page (Toggle panel) to bring up the Variables pane.
Click +Create .
Do the following in the Create Variable pane:
For Name , enter url .
Application Integration adds `CONFIG_ prefix to the config variables. If you want to add the config variable to your integration using APIs, use the following format for config variables: `CONFIG_ CONFIG_VARIABLE_NAME ` . For information about how to download and upload integrations, see Upload and download integrations .
For Variable type , select Config Variable .
For Data type , select String .
Click Create . The config variable appears in the Variables pane.
Repeat Step 2 and 3 to add the following config variable:
Name: connection_name
Variable type: Config Variable
Data type: String
Add and configure Call REST Endpoint
To create a config variable, follow these steps:
In the integration editor , click the Call REST Endpoint task to open the task configuration pane. Then, do the following:
Expand the Task input section.
In the Endpoint base URL click Variable and add $`CONFIG_url`$ .
Add and configure a Connectors task
In the integration editor navigation bar, click Task > Connectors .
Click Configure Connectors .
From the Region list, select the region where you created your Pub/Sub connector.
In the Connection field, select the Pub/Sub connector that you created in the preceding step.
In the Type section, select Actions .
In the Set entities/actions section, for Actions , select publishMessage .
In the Default value , add the default value for the config variable.
Click Create .
In the Connectors task configuration pane, expand the Connection details section to update the following field:
In the Connection name field, click Variable and select $`CONFIG_connection_name`$ .
Add a Data Mapping task
In the integration editor navigation bar, click Task > Data mapping .
Add an edge connection from the Call REST Endpoint element to the
Data Mapping element by hovering over a control point on the Call REST Endpoint element, then
clicking and dragging a line to a control point on the Data Mapping task element.
Add another edge connection from the Data Mapping element to the
Connectors element by hovering over a control point on the Data Mapping element, then
clicking and dragging a line to a control point on the Connectors task element.
In the Data Mapping task configuration pane, click Open Data Mapping Editor .
Map the output variable of the Call REST Endpoint task to the input variable of the Connectors task.
Publish the integration
To publish the integration, follow these steps:
To publish the integration click Publish in the integration editor toolbar.
The Publish integration dialog appears.
In the Publish integration dialog, enter the value for the following config variables:
url : Enter the name of the endpoint URL.
connection_name : Enter the name of the Pub/Sub connector that you created in the preceding step .
Click Publish .
Upon successfully publishing your integration, you can view and inspect the execution logs of the published integration. To view logs, click Logs in the toolbar of the integration editor.
Promote integration across environments
To promote your integration across environments, you can use the integrationcli tool, which is an open-source tool that lets you interact with Application Integration APIs and Integration Connectors APIs . This tool lets you manage integration entities such as integrations, auth configs, and so on. For information about how to generate the scaffold for the integration and apply the changes generated by the scaffold, see Introduction to integrationcli in the community blog.
You can also promote changes across environments by setting up DevOps pipelines for example, by using Jenkins, GitLab, Cloud Build, and so on. For more information, see Integration with Cloud Build .
If you don't want to use integrationcli , you can manually download and upload the integration to a new project. You'll have to create the connectors in the new project manually as they are currently not downloadable. When you publish the integration in the new environment, Application Integration enables you to enter values for the config variables.
What's next
Explore sample integrations in GitHub.
Learn more about config variables .
Learn more about the integrationcli tool.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
