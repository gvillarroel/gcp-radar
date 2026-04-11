---
title: "Manage applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/manage-applications
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/manage-applications
  title: "Manage applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Manage applications
Stay organized with collections
Save and categorize content based on your preferences.
Create an application when you want to customize and deploy from a template.
For example, you might create an application that you plan to deploy for testing
purposes. You might create another application for production use.
When you create an application, you specify information the helps you
categorize based on the application's intended usage. This information helps you
filter and find a specific application. You can also configure components and
connection details.
This document shows you how to manage the lifecycle of an application. You'll
learn how to create an application draft from a template, configure its
components, edit its underlying Terraform code, create a new revision, and
finally, delete the application when it's no longer needed.
Before you begin
Ask your administrator to grant you one of the following
roles on the app-enabled
folder or management project:
Application Design Center Admin ( roles/designcenter.admin ).
Application Admin ( roles/designcenter.applicationAdmin ).
Application Editor ( roles/designcenter.applicationEditor ).
Create an application draft
Create an application draft from a template by specifying details and optionally
overriding component configurations. You can then deploy the draft to create an
application.
Design canvas
From the navigation menu, do one of the following:
To view templates created in your space, click Templates .
Go to Templates
To view templates shared from another space, click Shared templates .
Go to Shared templates
Click the Template ID that you want to use.
From the design canvas, click Configure an app . Then click Create new
application .
In the Application name area , do the following to name and describe your
application:
In the Name field, enter a unique identifier in this space. For
example, use a unique name and environment combination like
web-app-staging . This is a required field.
You can use up to 63 characters, including lowercase letters, numbers,
and hyphens. The name must start with a lowercase letter and can't end
with a hyphen. Names can't be changed.
In the Display name field, enter a name to display in the
Google Cloud console.
In the Description field, enter the purpose of this application.
To set a default project for any components with an empty Project ID
field, select a project from the Deployment project list. The
project must have the following qualifications:
The project must be a descendant of the selected app-enabled folder .
The project must not be a management project .
If a component already has a project specified in its Project ID field,
that project is used instead of this setting.
From the Region list, select the region where components are deployed.
The component region is applied based on the following:
If the application scope is Global (default), the region is applied to
components that don't already have a configured region.
If the application scope is Regional , the region is applied to all
components.
From the Environment list, select the environment where you want to
deploy this application. For example, you might want to verify that your
deployment works as expected in TEST .
Note: If you plan to deploy and later delete this application, deploy to
TEST , DEVELOPMENT , or STAGING .
From the Criticality list, select the degree of impact on your
business. For example, LOW or HIGH .
To specify owners, in the Owners area, click Add owner and enter a
Display name and email for the following:
In the Business owners area, enter an owner who is responsible for
quality and user expectations.
In the Developer owners area, enter an owner who is responsible for
development and coding.
In the Operator owners area, enter an owner who is responsible for
operating the application.
From the Scope list, select one of the following:
Global (default): The application contains a global resource, or
resources are in multiple regions.
Regional : All resources are in a single region.
This is a required field. For more information, see Compare global and regional applications .
Click Create Application . The application details are displayed.
gcloud CLI
Identify the application template revision URI for the template that you want to use to create the application.
gcloud design-center spaces application-templates describe APPLICATION_TEMPLATE \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--format = 'yaml(name,latestRevision)'
Replace the following:
APPLICATION_TEMPLATE : The template ID for the application
template that you want to use as the basis for your application.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces application-templates describe .
Copy the latestRevision output.
Create an application draft based on your template.
gcloud design-center spaces applications create APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--source-application-template-revision = SOURCE_APPLICATION_TEMPLATE_REVISION \
--scope-type = SCOPE_TYPE
Replace the following:
APPLICATION : The application ID for the application
draft that you want to create.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
SOURCE_APPLICATION_TEMPLATE_REVISION : Your application template URI. For example, projects/ PROJECT /locations/ LOCATION /spaces/ SPACE /applicationTemplates/ APPLICATION_TEMPLATE /revisions/ REVISION
SCOPE_TYPE : The scope for your application. One of regional or global . If the application scope is 'global , the region is applied to
components that don't already have a configured region. If the application scope is regional`, the region is applied to all components.
For more information, see gcloud design-center spaces applications create .
Configure components and connections
For each component in the application, you can specify configuration
details such as the project where the resource is created, and the location
where it's deployed.
You can also modify connection details if the default configuration doesn't meet
your requirements. For example, you might modify environment variable key names,
change connection ports, or add additional roles to service accounts.
You must configure the required details for each supported
resource .
To configure components and connections, do the following:
Design canvas
From the design canvas, click a component.
In the Configuration area, from the Project ID list, select the
project where you want to deploy the resource. Select a project with the
following qualifications:
The project must be a descendant of the selected app-enabled
folder .
The project must not be a management
project .
Configure additional settings for the resource. For example, for
Cloud SQL, you might configure the following:
Region
Backup configuration
Database flags
IP configuration
For links to configuration documentation for each component, see Supported
resources .
When you connect components on the design canvas, default configuration
values are used to create the connection. To add or modify connection
details, do the following.
In the design canvas, click the connection between two components. The
Connection panel opens and displays connection parameters.
Do one of the following:
To modify an existing connection parameter, click Edit .
To add a new connection parameter, click Add parameter .
Update the Key and Value fields. For example, you might want to
modify the following details:
The environment variable key names to align with your application
requirements.
The connection port value.
The roles added to a service account.
Click Save .
gcloud CLI
Describe the application to view component parameters, and identify required parameters for your application.
gcloud design-center spaces applications describe APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--format = 'yaml(name,componentParameters)'
Replace the following:
APPLICATION : The application ID.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces applications describe .
For each component that you want to modify, in your home directory, create a JSON file that
contains parameter values.
For example, you might create the following file for a Cloud Run component:
{
"component" : "projects/ PROJECT /locations/us-central1/spaces/ SPACE /applicationTemplates/ APPLICATION_TEMPLATE /components/ COMPONENT " ,
"parameters" : [
{
"key" : "service_name" ,
"value" : "frontend-service"
},
{
"key" : "project_id" ,
"value" : " DEPLOYMENT_PROJECT "
}
]
}
Update the application to configure the required parameters.
gcloud design-center spaces applications update APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--component-parameters = COMPONENT_FILE_PATH_1
Replace the following:
APPLICATION : The application ID.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
COMPONENT_FILE_PATH_1 : A JSON file that includes component parameters. For each additional JSON file, add another --component-parameter argument and value.
For more information, see gcloud design-center spaces applications update .
For deployment steps, see Deploy applications .
Edit Terraform code
Your application generates Terraform code to reflect design and configuration
details. You can edit the Terraform to specify component configuration details.
The system generates the following Terraform files:
main.tf : Infrastructure code that includes a module for each component in
the template.
outputs.tf : Exposes information about infrastructure components that are
deployed.
variables.tf : Declares name, type, and description for variables used in
the main.tf file.
input.tfvars : Defines values for variables used in the main.tf file.
providers.tf : Defines
labels that help Terraform interact with Google Cloud APIs and resources.
For background information, see Overview of Terraform on
Google Cloud .
To edit the Terraform code, do the following:
From the design canvas, click Code . The system displays the generated
Terraform files.
Click main.tf . The system displays the Terraform module for each
component.
Edit configuration details. For more information, see the configuration
documentation for each supported resource .
The system automatically validates your edits, and displays errors if your
edits are invalid.
To highlight and compare your edits, do the following:
Click View diff .
To revert a change, in the margin, click Click to revert change .
Click View diff to close the comparison view.
To save your edits, click Save code changes .
To verify your changes, do the following.
Click Design .
Click a component and review its configuration details.
Create an application revision
Create an application revision to modify details or components. If you
modify application components outside of App Design Center, those
changes are not retained when you redeploy.
To create an application revision:
Design canvas
From the navigation menu, click Applications .
Go to Applications
From the table, click the Application name that you want to revise.
To modify application details, do the following:
Click Edit and modify the details.
Click Save to save your changes.
To modify a component in this application, do the following:
Click the component in the design canvas and edit the details in the
Configuration area.
Click Save to save your changes.
gcloud CLI
See Configure components and connections .
For deployment steps, see Deploy applications .
Delete an application
If you no longer need an application, you can delete it. For example, you might
deploy an application to verify your template in the TEST environment, and
then delete the application.
You can delete the following applications:
An application that has not been deployed. On the Applications page, the
Status is listed as Draft .
An application that was deployed to the TEST , DEVELOPMENT , or STAGING
Environment .
When you delete an application, the following occurs:
The application details are removed from Application Design Center.
The underlying App Hub application is deleted.
If you deployed, resources are deleted.
To delete an application:
Design canvas
From the navigation menu, click Applications .
Go to Applications
From the table, click the Application name .
Click more_vert
Actions and select Delete Application .
In the Delete field, enter the application name.
Click Delete .
gcloud CLI
Delete an application.
gcloud design-center spaces applications delete APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE
Replace the following:
APPLICATION : The application ID for the application
that you want to delete.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces applications delete .
What's next
Deploy your application using one of the following:
Deploy applications .
Download and deploy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
