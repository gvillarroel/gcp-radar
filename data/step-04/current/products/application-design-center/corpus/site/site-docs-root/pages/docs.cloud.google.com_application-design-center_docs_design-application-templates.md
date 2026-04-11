---
title: "Design application templates \_|\_ Application Design Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/design-application-templates
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/design-application-templates
  title: "Design application templates \_|\_ Application Design Center \_|\_ Google\
    \ Cloud Documentation"
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
Design application templates
Stay organized with collections
Save and categorize content based on your preferences.
Administrators create application templates to help ensure that their preferred
architecture is used by each development team. This helps you govern the
resources and configurations that developers use in their application
deployments.
Once you create an application template, others in your space can access it. You
can also add a template to a catalog to share with other spaces.
Developers can use your template to create and deploy an application. When
developers create an application, they can configure each component from the
template, but they can't add or remove any components. The template generates
Terraform code, which developers can download or deploy from
App Design Center.
This document helps you design, configure, and share an application template
using App Design Center.
Tip: To use natural language assistance to design and refine your application
template, see Design and deploy an application with Gemini assistance .
Before you begin
You must have one of the following
roles on the app-enabled
folder or management project:
Application Design Center Admin ( roles/designcenter.admin )
Application Design Center User ( roles/designcenter.user )
Create an application template
Create application templates to share your architecture design with development
teams. You can add the following components to your template design:
Assets : High-level resources that help you control other resources. For
example, service accounts.
Services : Network or API interfaces that are consumed over the network.
Examples include Cloud Storage and Vertex AI.
Workloads : Binary deployments that perform business functions. Examples
include Cloud Run and Compute Engine.
You can select from the following components:
Components designed by Google ,
incorporating Google Cloud best practices and default security configurations.
Your own components that you import ,
based on your own Terraform modules.
As you design your template, App Design Center generates Terraform
code to reflect the design and configuration details.
Specify template details
Template details help you categorize your template and help developers decide
whether to use your template.
To enter details for your template, do the following:
Design canvas
From the navigation menu, click Templates .
Go to Templates
Click Create template .
In the Template ID field, enter a unique identifier for the template.
This field is required.
In the Template Name field, enter a human-readable identifier to display
in the Google Cloud console.
If you don't provide a name, the Template ID is copied to this field.
In the Description field, enter a brief explanation of the application's
purpose.
Click Create template . The design canvas is displayed.
gcloud CLI
Create a new application template.
gcloud design-center spaces application-templates create APPLICATION_TEMPLATE \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--display-name = DISPLAY_NAME \
--description = DESCRIPTION
Replace the following:
APPLICATION_TEMPLATE : The template ID for the application
template that you want to create.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
DISPLAY_NAME : A name to display in the Google Cloud console.
DESCRIPTION : A brief description.
For more information, see gcloud design-center spaces application-templates create .
Design your template
Design your template by adding and connecting components on the design canvas.
The following example includes three connected components.
You can design your template by adding components to the following starting
points:
A blank canvas.
A Google-provided
template .
A template that you generate with Gemini
assistance .
To design your template, do the following:
Design canvas
From the design canvas, make sure Design is selected.
Do one of the following to get started:
To start from scratch, from the Components area, click a component
to add it to the canvas area.
To start from a Google-provided template, click the template name.
To use natural language chat to generate a template, click
Custom Application with Gemini .
To create a communication channel between components, do one of the
following:
To connect two components on the canvas, drag from a blue dot on a
component to a blue dot on another component.
To add to an existing component, click add
Add and select the component to add.
For connection details, see the configuration documentation for each supported resource .
To remove a component or connection, do the following:
In the canvas, click the component or connection.
In the Configuration area, click Delete .
In the field, enter delete .
Click Delete .
gcloud CLI
Identify the template revision URIs for the Google catalog components
that you want to add to the template.
gcloud design-center spaces shared-templates list \
--google-catalog \
--location = us-central1
For more information, see gcloud design-center spaces shared-templates list .
Add a component to your application template.
gcloud design-center spaces application-templates components create COMPONENT \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE \
--shared-template-revision-uri = SHARED_TEMPLATE_URI
Replace the following:
COMPONENT : The component ID for the component that
you want to add to the template.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the
application template where you're adding the component.
SHARED_TEMPLATE_URI : The component shared template
URI. For example, projects/my-project/locations/us-central1/spaces/my-space/sharedTemplates/my-shared-template/revisions/rev1 .
For more information, see gcloud design-center spaces application-templates components create .
Add a second component to your template.
gcloud design-center spaces application-templates components create COMPONENT_2 \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE \
--shared-template-revision-uri = SHARED_TEMPLATE_URI_2
Replace the following:
COMPONENT_2 : The component ID for the second
component that you want to add to the template.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the
application template where you're adding the component.
SHARED_TEMPLATE_URI_2 : The second component shared
template URI. For example, projects/my-project/locations/us-central1/spaces/my-space/sharedTemplates/my-shared-template/revisions/rev1 .
For more information, see gcloud design-center spaces application-templates components create .
Create a connection between the two components.
gcloud design-center spaces application-templates components connections create CONNECTION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE \
--component = COMPONENT \
--destination-component-uri = COMPONENT_2
Replace the following:
CONNECTION : The connection ID for the connection
that you want to add to the template.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the
application template where you're adding the connection.
COMPONENT : The source component ID.
COMPONENT_2 : The destination component ID.
For more information, see gcloud design-center spaces application-templates components connections create .
Configure default values for components
For each component that you add to the canvas, you can specify configuration
details such as the project where the resource is created, and the location
where it's deployed. If you specify configuration details,
Application Design Center uses them as default values for applications.
You can also modify connection details if the default configuration doesn't meet
your requirements. For example, you might modify environment variable key names,
change connection ports, or add additional roles to service accounts.
Before developers deploy an application, they can view and modify the default
values you configured in the template. Developers must configure the required
details for each supported
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
Describe each component in the application template to view component parameters.
gcloud design-center spaces application-templates components describe COMPONENT \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--application-template = APPLICATION_TEMPLATE
Replace the following:
COMPONENT : The component ID for the component that you want to describe.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
APPLICATION_TEMPLATE : The template ID for the application
template.
For more information, see gcloud design-center spaces application-templates components describe .
For each component that you want to modify, in your home directory, create a JSON file that
contains parameter values.
For example, you might create the following file for a Cloud Run component:
[
{
"key" : "service_name" ,
"value" : "frontend-service"
},
{
"key" : "project_id" ,
"value" : " DEPLOYMENT_PROJECT "
}
]
Update each component in the application template to configure the required parameters.
gcloud design-center spaces application-templates components update COMPONENT \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--parameters = PARAMETERS_FILE_PATH_1 \
--application-template = APPLICATION_TEMPLATE
Replace the following:
COMPONENT : The component ID for the component that you want to update.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
PARAMETERS_FILE_PATH_1 : A JSON file that includes component parameters.
APPLICATION_TEMPLATE : The template ID for the application
template.
For more information, see gcloud design-center spaces application-templates components update .
Describe the component connections.
gcloud design-center spaces application-templates components connections describe CONNECTION \
--component = COMPONENT \
--application-template = APPLICATION_TEMPLATE \
--project = PROJECT \
--location = LOCATION \
--space = SPACE
Replace the following:
CONNECTION : The connection ID.
COMPONENT : The component ID.
APPLICATION_TEMPLATE : The template ID.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces application-templates components connections describe .
Edit component connection parameters.
gcloud design-center spaces application-templates components connections update CONNECTION \
--component = COMPONENT \
--application-template = APPLICATION_TEMPLATE \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--source-component-parameters = '[{"key": SOURCE_KEY , "value": SOURCE_VALUE }]'
Replace the following:
CONNECTION : The connection ID.
COMPONENT : The component ID.
APPLICATION_TEMPLATE : The template ID.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
SOURCE_KEY : The new parameter key.
SOURCE_VALUE : The new parameter value.
For more information, see gcloud design-center spaces application-templates components connections update .
Edit Terraform code
As you design your application template, Application Design Center generates
Terraform code to reflect the design and configuration details. You can edit the
Terraform to specify component configuration details.
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
Delete a template
If you no longer need a template, you can delete it.
Design canvas
From the design canvas, click more_vert
Actions .
Click Delete .
gcloud CLI
Delete an application template.
```sh
gcloud design-center spaces application-templates delete APPLICATION_TEMPLATE \
--project= PROJECT \
--location= LOCATION \
--space= SPACE
```
Replace the following:
APPLICATION_TEMPLATE : The template ID for the application
template that you want to delete.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces application-templates delete .
Verify your template
Before you share your template with developers, make sure that it functions as
you intended. To verify your template, do the following:
Create an application with
the following settings:
From the Environment list, select TEST .
From the Criticality list, select LOW .
Deploy the application. For steps to deploy, see Deploy an application from the console .
Test your infrastructure to make sure that it meets your requirements.
To avoid recurring costs, delete the test deployment.
Share a template to a catalog
Once you have verified your template, you can publish the template to a catalog.
The template can be used by application developers who have access to a space
where the catalog is shared.
From the design canvas, click Add to Catalog .
To manage spaces where the catalog is shared, see Manage
catalogs .
Revise and reshare your template
As you gain experience with your application and your business needs evolve, you
might want to update your application template. For example, you might decide to
improve performance for a backend service by adding a Memorystore service
for caching.
When you modify a template, you create a template revision. To apply your
changes to existing applications, developers must deploy applications using the
revision.
App Design Center doesn't automatically publish template revisions to
catalogs. To share the latest revision, publish the template to the catalog
again.
To create a new revision, do the following:
From the navigation menu, click Templates .
Go to Templates
Select the application template that you want to revise. The canvas opens.
Modify the template to fit your new requirements. For example, add and
configure a new component.
To share the latest revision with other spaces, add the template to
relevant catalogs again.
What's next
To share templates with other spaces, create and share a
catalog .
To use your own Terraform modules in your application template design, import components .
Before you deploy, create an application .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
