---
title: "Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/manage-applications
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/modify-app-hub-resources
  title: "Manage services and workloads \_|\_ App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Manage services and workloads
Stay organized with collections
Save and categorize content based on your preferences.
When you choose your application setup model ,
you define an application management boundary
for your App Hub applications in a
management project .
You can then register services and workloads in applications inside this
boundary.
For recommended use cases to introduce application management practices, see
Prepare for application lifecycle management .
To avoid configuration drift and maintain a clear source of truth, we recommend
that you manage your application components in the environment where they were
originally defined:
For applications deployed from an Application Design Center template :
Use Application Design Center to manage and update the application.
You can either
revise the template
for application design changes or
create an application revision
to update settings such as application and component details.
Go to Application Design Center
For applications created by registering existing resources in App Hub :
Manage applications, services, and workloads directly within App Hub.
Go to App Hub
This page describes how to manage services and workloads that are discovered or
registered directly within App Hub. You can perform these actions using
either the Google Cloud console or the Google Cloud CLI. For applications deployed
from a template , see
Application Design Center
documentation.
Before you begin
This document assumes you have an application with
supported resources registered to it .
Required roles
To get the permissions that
you need to manage services and workloads in App Hub,
ask your administrator to grant you the
following IAM roles on
the management project that defines your application management boundary
:
Update and unregister services and workloads:
App Hub Editor ( roles/apphub.editor )
View services, workloads, and their details:
App Hub Viewer ( roles/apphub.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information about App Hub roles, see
App Hub IAM roles and permissions .
View details of services and workloads
Follow these steps to view details of services and workloads within your
application management boundary, including the following:
Location
Registration status to an application
Properties and attributes
For more information about these details, see
App Hub concepts and data model .
Console
View details from services and workloads of an application with a
registration status value of registered or detached :
In the Google Cloud console, use the project picker to select your
management project.
Navigate to the Applications page from App Hub:
Go to Applications
The page displays a list of your applications.
Click the name of the application from which you want to view service
or workload details.
In the Services and workloads tab, click the name of the service or
workload you want to view.
In the Details page of the component, you can look at information
such as the display name, location, registration status, properties, and
attributes.
Alternatively, view a list of all services and workloads
with a registration status value of discovered or registered :
Navigate to the Services and workloads page from App Hub:
Go to Services and workloads
The page displays a list of all discovered and registered services and
workloads.
Use the Filter field to narrow the results by properties,
attributes, or status, using values like Environment , Owners , or
Registration status .
gcloud
View details from services and workloads of an application with a
registration status value of registered or detached :
Find the project ID
of your management project.
Describe a service or workload from an application to review its
details, including properties and attributes:
Describe a service:
gcloud apphub applications services describe SERVICE \
--project = PROJECT_ID \
--application = APPLICATION \
--location = LOCATION
Replace the following:
SERVICE : the ID of the service.
PROJECT_ID : the ID of your
management project.
APPLICATION : the ID of the
application to which the service is registered.
LOCATION : the location of the service.
Use global for global resources or a specific region, such as
us-east1 , for regional resources.
Describe a workload:
gcloud apphub applications workloads describe WORKLOAD \
--project = PROJECT_ID \
--application = APPLICATION \
--location = LOCATION
Replace the following:
WORKLOAD : the ID of the workload.
PROJECT_ID : the ID of your
management project.
APPLICATION : the ID of the
application to which the workload is registered.
LOCATION : the location of the workload.
Use global for global resources or a specific region, such as
us-east1 , for regional resources.
The output displays details from the component, such as the display name,
location, and registration status. It also includes
properties and attributes ,
if they are present on the resource.
Alternatively, view a list of all services and workloads
with a registration status value of discovered or registered :
Discovered
Discovered Google Cloud resources within your application management boundary are
available to be registered as services or workloads in an application.
Follow these steps to list discovered resources:
List discovered services:
gcloud apphub discovered-services list \
--project = PROJECT_ID \
--location = LOCATION
Replace the following:
PROJECT_ID : the ID of your
management project.
LOCATION : the location where you
want to discover resources. Use global for global
resources or a specific region, such as us-east1 , for
regional resources.
List discovered workloads:
gcloud apphub discovered-workloads list \
--project = PROJECT_ID \
--location = LOCATION
Registered
Registered services and workloads are part of an application. Follow
these steps to list registered components of a particular application.
You can filter the list based on attributes, using the
--filter flag :
List registered services in an application:
gcloud apphub applications services list \
--application = APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--filter = FILTER_EXPRESSION
Replace the following:
APPLICATION_NAME : the name of your
application. You specify this value when you
create an application .
PROJECT_ID : the ID of your
management project.
LOCATION : the component location.
Use global for global components or a specific region, such
as us-east1 , for regional components.
Optional: FILTER_EXPRESSION : the
filter expression to specify attributes. For example, to
list components with a PRODUCTION environment type, use
attributes.environment.type=PRODUCTION .
List registered workloads in an application:
gcloud apphub applications workloads list \
--application = APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--filter = FILTER_EXPRESSION
The registration status of services and workloads in an application might change
to detached if you move a project or folder out of your application management boundary
or delete the underlying resource. Detached services and workloads remain in the
application until you unregister them, but App Hub can no longer manage
or monitor them. For more information, see
Registration status of services and workloads .
To reattach services or workloads to an application, you must
register
them again.
View extended metadata schemas
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
App Hub enriches your services and workloads with metadata to improve
discoverability, governance, and integration with other systems. You can
search for the available metadata schemas and view their definitions using the
App Hub API.
Follow these steps to view the schema definition of the extended metadata
property, listing all available schemas or getting the details of a specific
schema if available.
For more information about the extended metadata property, see
Properties and attributes .
For a list of the supported metadata types and their schemas, see
Extended metadata schemas .
gcloud
List all available extended metadata schemas in a project and location:
gcloud alpha apphub extended-metadata-schemas list \
--project = PROJECT_ID \
--location = LOCATION \
Replace the following:
PROJECT_ID : the ID of your
management project.
LOCATION : the component location.
Use global for global components or a specific region, such
as us-east1 , for regional components.
View the details of a specific schema:
gcloud alpha apphub extended-metadata-schemas describe SCHEMA_NAME \
--project = PROJECT_ID \
--location = LOCATION \
Replace SCHEMA_NAME with the full name of the
schema, for example, apphub.googleapis.com/AgentProperties .
Terraform
You can use a data source in Terraform to retrieve the details of a specific
schema. The following example lets you view the details of the
apphub.googleapis.com/AgentProperties schema for a workload with the
AGENT functional type in the my-project-id project at the us-central1
location.
data "google_apphub_extended_metadata_schema" "agent_properties" {
project = "my-project-id"
location = "us-central1"
name = "apphub.googleapis.com/AgentProperties"
}
Update service and workload attributes
To modify the attributes of
services and workloads that are registered in an application, follow these steps:
Note: You cannot modify attributes for shared services .
Console
In the Google Cloud console, use the project picker to select your
management project.
Navigate to the Applications page from App Hub:
Go to Applications
The page displays a list of your applications.
Click the name the application for which you want to update
service or workload attributes.
In the Services and workloads tab, find the name of the service or
workload you want to update.
Click more_vert More ,
then click edit Edit service or
edit Edit workload .
In the pane that opens, edit the fields as required and click Save .
gcloud
Find the project ID
of your management project.
Update service or workload attributes:
Update service attributes:
gcloud apphub applications services update SERVICE_NAME \
--application = APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--display-name = DISPLAY_NAME \
--criticality-type = CRITICALITY_LEVEL \
--environment-type = ENVIRONMENT \
--developer-owners = display-name = DEV_NAME ,email = DEV_EMAIL \
--operator-owners = display-name = OPERATOR_NAME ,email = OPERATOR_EMAIL \
--business-owners = display-name = BUSINESS_NAME ,email = BUSINESS_EMAIL
Replace SERVICE_NAME with the name of the
service you want to update.
Update workload attributes:
gcloud apphub applications workloads update WORKLOAD_NAME \
--application = APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--display-name = DISPLAY_NAME \
--criticality-type = CRITICALITY_LEVEL \
--environment-type = ENVIRONMENT \
--developer-owners = display-name = DEV_NAME ,email = DEV_EMAIL \
--operator-owners = display-name = OPERATOR_NAME ,email = OPERATOR_EMAIL \
--business-owners = display-name = BUSINESS_NAME ,email = BUSINESS_EMAIL
Replace WORKLOAD_NAME with the name of the
workload you want to update.
Replace the following required and optional flags:
Required: APPLICATION_NAME : the name of
your application. You specify this value when you
create an application .
Required: PROJECT_ID : the ID of your
management project.
Required: LOCATION : your component
location. Use global for global components or a specific
region, such as us-east1 , for regional components.
Optional: DISPLAY_NAME : the display name
of your component.
Optional: CRITICALITY_LEVEL : the
importance level of the component. Use one of the following
values:
MISSION_CRITICAL
HIGH
MEDIUM
LOW
Optional: ENVIRONMENT : the stage of the
software lifecycle. Use one of the following values:
PRODUCTION
STAGING
DEVELOPMENT
TEST
Optional: DEV_NAME and
DEV_EMAIL : the display name and email
address of the developer owner, respectively.
Optional: OPERATOR_NAME and
OPERATOR_EMAIL : the display name and
email address of the operator owner, respectively.
Optional: BUSINESS_NAME and
BUSINESS_EMAIL : the display name and
email address of the business owner, respectively.
Note: Email addresses must have the format username@yourdomain ,
for example, jane-doe@gmail.com .
Terraform
To update service or workload attributes with Terraform, modify the
arguments within the corresponding
google_apphub_service
or
google_apphub_workload
resource block in your configuration file. When you apply the changes,
Terraform updates the resource to match the new configuration.
The following examples update the criticality and environment attributes of
services and workloads of a regional application:
Update service attributes:
resource "google_apphub_service" "example" {
# ... other arguments
attributes {
criticality {
type = "HIGH" # Updated criticality
}
environment {
type = "PRODUCTION"
}
# ... other attributes
}
}
Update workload attributes:
resource "google_apphub_workload" "example" {
# ... other arguments
attributes {
criticality {
type = "HIGH" # Updated criticality
}
environment {
type = "PRODUCTION"
}
# ... other attributes
}
}
Unregister services and workloads
Unregistering a service or workload removes it from an application. The
underlying resource is not deleted. If it is still within your
application management boundary, it becomes a resource with a registration status value of
discovered , available for registration to another application.
Follow these steps to unregister services and workloads:
Console
In the Google Cloud console, use the project picker to select your
management project.
Navigate to the Applications page from App Hub:
Go to Applications
The page displays a list of your applications.
Click the name the application from which you want to unregister
services or workloads.
In the Services and workloads tab, click the name of the service or
workload you want to unregister.
In the details page of the component, click Unregister .
gcloud
Find the project ID
of your management project.
Unregister a service or a workload:
Unregister a service:
gcloud apphub applications services delete SERVICE_NAME \
--application = APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION
Replace the following:
SERVICE_NAME : the name of the service
you want to unregister.
APPLICATION_NAME : the name of your
application. You specify this value when you
create an application .
PROJECT_ID : the ID of your
management project.
LOCATION : the component location. Use
global for global components or a specific region, such as
us-east1 , for regional components.
Unregister a workload:
gcloud apphub applications workloads delete WORKLOAD_NAME \
--application = APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION
Replace WORKLOAD_NAME with the name of the
workload you want to unregister.
Terraform
To unregister a service or workload managed by Terraform, remove the
corresponding
google_apphub_service
or
google_apphub_workload
resource block from your configuration file and run terraform apply . When
you apply the changes, Terraform removes the registration from
App Hub.
After unregistering all services and workloads, you can
delete the application .
What's next
Manage your applications
Optimize an application with design recommendations
Monitor your applications
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
