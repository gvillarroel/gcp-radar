---
title: "Register existing resources to an application \_|\_ App Hub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/app-hub/docs/register-resources
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/register-resources
  title: "Register existing resources to an application \_|\_ App Hub \_|\_ Google\
    \ Cloud Documentation"
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
Register existing resources to an application
Stay organized with collections
Save and categorize content based on your preferences.
Registering your existing Google Cloud resources as
services and
workloads in an App Hub
application lets you simplify management by organizing resources based on their
business purpose. This approach provides unified visibility, monitoring,
governance, and operational control.
This guide shows you how to group existing Google Cloud resources that are not
yet formally defined as an application.
Before you begin
You must complete the initial setup for application management before organizing
resources into applications. This process typically involves the following
roles and steps:
For administrators :
Choose your application setup model .
You must configure a
management project and
define an application management boundary
that includes the Google Cloud resources you want to organize.
Enable required APIs for all Google Cloud resources you intend to use.
Grant access to users .
Assign appropriate IAM roles based on user's
responsibilities in the application lifecycle.
For developers and operators :
Confirm with your administrator that the initial setup is finalized.
Make sure you have the necessary IAM roles
for the tasks you want to perform.
Open your management project
in the Google Cloud console or
find the project ID
of the management project for Terraform or Google Cloud CLI
interactions.
Create an application
Create an application in App Hub to act as a logical container for your
existing Google Cloud resources:
Console
In the Google Cloud console, use the project picker to select your
management project.
Go to the Applications page from App Hub:
Go to Applications
Click add Create application .
In the Application details tab, select the best location for your
application based on your geographic distribution requirements:
Select Global to create a global application.
Select Regional to create a regional application. Then, select
the specific region for your application based on
App Hub supported regions .
For more information about the best location for your application, see
Global and regional applications .
Important: After creating an application, you can't change its location.
Enter a name for your application.
This name is a unique identifier that can only contain lowercase
letters, numbers, or hyphens. You can't change this name after you
create the application.
Optionally, add a display name and a description for the application.
These are not unique identifiers, and you can change them after you
create the application.
Click Continue .
In the Application resources tab, browse through infrastructure
resources and select the checkboxes of the resources you want to
register as services and workloads of the application.
You can select up to 10 resources at a time.
Click Continue .
In the Attributes and owners tab, you can add
attributes for the
application, such as criticality, environment, and application owners.
You can choose to use the same attributes and owners for the resources
you are registering to the application or
define those later .
Note: If you are registering a
shared service that is being
used by another application, attributes and owner information from the
new application are not applied to it because shared services don't
have attributes.
Click Create .
When the application is created, the Applications page displays its
details, including the resources you registered as services and workloads.
After creating the application, you can
register more services and workloads to
it.
gcloud
Use Google Cloud CLI to create an application from your terminal or
Cloud Shell:
gcloud apphub applications create APPLICATION_NAME \
--project = PROJECT_ID \
--scope-type = LOCATION \
--location = REGION \
--display-name = DISPLAY_NAME \
--criticality-type = CRITICALITY \
--environment-type = ENVIRONMENT \
--developer-owners = display-name = DEV_NAME ,email = DEV_EMAIL \
--operator-owners = display-name = OPERATOR_NAME ,email = OPERATOR_EMAIL \
--business-owners = display-name = BUSINESS_NAME ,email = BUSINESS_EMAIL
Replace APPLICATION_NAME with the name of your
application. This name is a unique identifier that can only contain
lowercase letters, numbers, or hyphens.
Use optional flags such as --criticality-type to define the
application's top-level
attributes and
support discoverability and governance.
For required and optional flags, replace the following:
Required: PROJECT_ID : the ID of the
management project.
Required: LOCATION : the location for your
application based on your geographic distribution requirements. Use
one of the following values:
REGIONAL for regional applications.
GLOBAL for global applications.
For more information about the best location for your application, see
Global and regional applications .
Required: REGION : the specific region for
your application. Use one of the following values:
If the --scope-type location for your application is set to
REGIONAL , specify
an App Hub supported region name .
If the --scope-type location for your application is set to
GLOBAL , use global .
Optional: DISPLAY_NAME : the display name of
your application. The display name is not a unique identifier and you
can change it after you create the application.
Optional: CRITICALITY : the importance level
of the application for your operations. Use one of the following
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
OPERATOR_EMAIL : the display name and email
address of the operator owner, respectively.
Optional: BUSINESS_NAME and
BUSINESS_EMAIL : the display name and email
address of the business owner, respectively.
Note: Email addresses must have the format username@yourdomain , for
example, jane-doe@gmail.com .
List the applications in your project:
gcloud apphub applications list \
--project = PROJECT_ID \
--location = REGION
You must obtain an output similar to the following:
ID DISPLAY_NAME CREATE_TIME
APPLICATION_NAME DISPLAY_NAME 2023 -10-31T18:33:48
Terraform
To create an application with Terraform, use
the google_apphub_application resource .
This resource lets you define the application's properties, including its
name, location, and attributes.
The following example creates a regional application in us-central1 with
defined criticality, environment, and owner attributes:
resource "google_apphub_application" "example" {
project = "my-project-id"
location = "us-central1"
application_id = "my-application"
display_name = "My Application"
description = "This application represents our platform."
scope {
type = "REGIONAL"
}
attributes {
criticality {
type = "MISSION_CRITICAL"
}
environment {
type = "PRODUCTION"
}
business_owners {
display_name = "Alice"
email = "alice@example.com"
}
developer_owners {
display_name = "Bob"
email = "bob@example.com"
}
operator_owners {
display_name = "Charlie"
email = "charlie@example.com"
}
}
}
Register services and workloads
App Hub lets you select
supported resources located within your
application management boundary to register them as services and workloads. After
creating an application , you can register Google Cloud
resources as services and workloads in it.
You can only register exclusive services
to one application. However, shared services
can be registered to more than one application. App Hub will discover
shared services when you are registering them to an application even if they are
already registered to another application, but you might not be able to modify
their attributes.
Console
After creating an application , you can register
multiple resources to it:
In the Google Cloud console, use the project picker to select your
management project.
Go to the Applications page from App Hub:
Go to Applications
Click the name of the application for which you want to register
Google Cloud resources.
From the application's page, select the Services and workloads tab.
Click add Register services or workloads .
In the Services and workloads tab, browse through infrastructure
resources and select the checkboxes of the resources you want to
register as services or workloads of the application.
You can select up to 10 resources at a time.
Click Continue .
In the Attributes and owners tab, you can add
attributes for these
resources, such as criticality, environment, and resource owners.
You can choose to use the same attributes and owners from the
application or
define different attributes later .
Note: When you select a shared service for registration, attributes and
owner information from the application are not applied to it because
shared services don't have attributes.
Click Register .
The Services and workloads tab displays all the registered services and
workloads of the application.
gcloud
App Hub lets you select
supported resources located within your
application management boundary as services or workloads. Use Google Cloud CLI to list
services or workloads that you can register to the application from your
terminal or Cloud Shell. Commands are slightly different for services and
workloads:
Register services
List the available services that you can register to an
application:
gcloud apphub discovered-services list \
--project = PROJECT_ID \
--location = REGION \
--filter = FILTER_EXPRESSION
For required and optional flags, replace the following:
Required: PROJECT_ID : the ID of the
management project.
Required: REGION : the specific region of
your service based on your geographic distribution. Use one of
the following values:
If the service is regional, specify
the App Hub supported region name .
If the service is global, use global .
Optional: FILTER_EXPRESSION : the filter
expression for the
--filter flag to only
display services from a specified project within the
application management boundary or with a specific property, for example:
service_properties.gcp_project=projects/ PROJECT_ID
service_properties.gcp_project=projects/ PROJECT_ID AND service_reference.uri~"forwardingRules"
The output is similar to the following example:
ID SERVICE_REFERENCE SERVICE_PROPERTIES
SERVICE_ID { 'uri' : '//compute.googleapis.com/projects/ PROJECT_NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } { 'gcpProject' : 'projects/ PROJECT_ID ' , 'location' : ' REGION ' }
Copy the service ID, SERVICE_ID , from the
output.
Register the service to your application:
gcloud apphub applications services create SERVICE_NAME \
--project = PROJECT_ID \
--location = REGION \
--application = APPLICATION_NAME \
--discovered-service = projects/ PROJECT_ID /locations/ REGION /discoveredServices/ SERVICE_ID \
--display-name = SERVICE_DISPLAY_NAME \
--criticality-type = CRITICALITY \
--environment-type = ENVIRONMENT \
--developer-owners = display-name = DEV_NAME ,email = DEV_EMAIL \
--operator-owners = display-name = OPERATOR_NAME ,email = OPERATOR_EMAIL \
--business-owners = display-name = BUSINESS_NAME ,email = BUSINESS_EMAIL
Replace SERVICE_NAME with the name you want
to use to register the service to the application.
Use optional flags such as --criticality-type to define the
service's top-level
attributes and
support discoverability and governance.
Note: You can select different values for the criticality and
environment of the service or workload than the values you set for
the application.
For required and optional flags, replace the following:
Required: PROJECT_ID : the ID of the
management project.
Required: REGION : the specific region of
your service based on your geographic distribution. Use one of
the following values:
If the service is regional, specify
the App Hub supported region name .
If the service is global, use global .
Required: APPLICATION_NAME : the name of
the application for which you want to register the service.
Required: SERVICE_ID : the service ID you
copied from the previous output.
Optional: SERVICE_DISPLAY_NAME : the
display name of your service.
Optional: CRITICALITY : the importance
level of the service for your operations. Use one of the
following values:
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
List the registered services in your application:
gcloud apphub applications services list \
--application = APPLICATION_NAME
--project = PROJECT_ID \
--location = REGION
You must obtain an output similar to the following for each
registered service:
ID DISPLAY_NAME SERVICE_REFERENCE CREATE_TIME
SERVICE_NAME SERVICE_DISPLAY_NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT_NUMBER /regions/ REGION /forwardingRules/forwarding-rule' } 2023 -11-01T21:38:08
Register workloads
List the available workloads that you can register to an
application:
gcloud apphub discovered-workloads list \
--project = PROJECT_ID \
--location = REGION \
--filter = FILTER_EXPRESSION
For required and optional flags, replace the following:
Required: PROJECT_ID : the ID of the
management project.
Required: REGION : the specific region of
your workload based on your geographic distribution. Use one of
the following values:
If the workload is regional, specify
the App Hub supported region name .
If the workload is global, use global .
Optional: FILTER_EXPRESSION : the filter
expression for the
--filter flag to only
display workloads from a specified project within the
application management boundary or with a specific property, for example,
workload_properties.gcp_project=projects/ PROJECT_ID .
The output is similar to the following example:
ID WORKLOAD_REFERENCE WORKLOAD_PROPERTIES
WORKLOAD_ID { 'uri' : '//compute.googleapis.com/projects/ PROJECT_NUMBER /regions/ REGION /instanceGroups/mig-name' } { 'gcpProject' : 'projects/ PROJECT_ID ' , 'location' : ' REGION ' }
Copy the workload ID, WORKLOAD_ID , from the
output.
Register the workload to your application:
gcloud apphub applications workloads create WORKLOAD_NAME \
--project = PROJECT_ID \
--location = REGION \
--application = APPLICATION_NAME \
--discovered-workload = projects/ PROJECT_ID /locations/ REGION /discoveredWorkloads/ WORKLOAD_ID \
--display-name = WORKLOAD_DISPLAY_NAME \
--criticality-type = CRITICALITY \
--environment-type = ENVIRONMENT \
--developer-owners = display-name = DEV_NAME ,email = DEV_EMAIL \
--operator-owners = display-name = OPERATOR_NAME ,email = OPERATOR_EMAIL \
--business-owners = display-name = BUSINESS_NAME ,email = BUSINESS_EMAIL
Replace WORKLOAD_NAME with the name you
want to use to register the workload to the application.
Use optional flags such as --criticality-type to define the
workload's top-level
attributes and
support discoverability and governance.
Note: You can select different values for the criticality and
environment of the service or workload than the values you set for
the application.
For required and optional flags, replace the following:
Required: PROJECT_ID : the ID of the
management project.
Required: REGION : the specific region of
your workload based on your geographic distribution. Use one of
the following values:
If the workload is regional, specify
the App Hub supported region name .
If the workload is global, use global .
Required: APPLICATION_NAME : the name of
the application for which you want to register the workload.
Required: WORKLOAD_ID : the workload ID
you copied from the previous output.
Optional: WORKLOAD_DISPLAY_NAME : the
display name of your workload.
Optional: CRITICALITY : the importance
level of the workload for your operations. Use one of the
following values:
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
List the registered workloads in your application:
gcloud apphub applications workloads list \
--application = APPLICATION_NAME
--project = PROJECT_ID \
--location = REGION
You must obtain an output similar to the following for each
registered workload:
ID DISPLAY_NAME WORKLOAD_REFERENCE CREATE_TIME
WORKLOAD_NAME WORKLOAD_DISPLAY_NAME { 'uri' : '//compute.googleapis.com/projects/ PROJECT_NUMBER /regions/ REGION /instanceGroups/mig-name' } 2023 -11-01T21:38:08
Terraform
To use Terraform to register Google Cloud resources within your
application management boundary as services or workloads in an application, use the
google_apphub_discovered_service
and
google_apphub_discovered_workload
data sources to dynamically retrieve information about the resources you
want to register.
Then, use the
google_apphub_service
or
google_apphub_workload
resources to register services or workloads, respectively.
Register services
Get information about a service using its URI:
data "google_apphub_discovered_service" "my-service" {
location = " REGION "
service_uri = " SERVICE_URI "
}
Register the discovered service to your application, for example:
resource "google_apphub_service" "example" {
project = "my-project-id"
location = "us-central1"
application_id = google_apphub_application.example.application_id
service_id = "frontend-load-balancer"
discovered_service = data.google_apphub_discovered_service.my-forwarding-rule.name
display_name = "Frontend Load Balancer"
description = "The primary load balancer for the frontend."
}
Register workloads
Get information about a workload using its URI:
data "google_apphub_discovered_workload" "my-workload" {
location = " REGION "
workload_uri = " WORKLOAD_URI "
}
Register the discovered workload to your application, for example:
resource "google_apphub_workload" "example" {
project = "my-project-id"
location = "us-central1"
application_id = google_apphub_application.example.application_id
workload_id = "frontend-instance-group"
discovered_workload = data.google_apphub_discovered_workload.my-mig.name
display_name = "Frontend Instance Group"
description = "The managed instance group for the frontend."
}
The registration status of services and workloads registered to an application
might change to detached if you move a project or folder out of your
application management boundary or delete the underlying resource. Detached services and
workloads remain in the application until you unregister them, but
App Hub can no longer manage or monitor them. For more information, see
Registration status of services and workloads .
To reattach services or workloads to an application, you must register them
again.
Grant permissions and begin operations
After creating an application and registering services and workloads in
App Hub, you must grant user access based on lifecycle responsibilities
to manage this logic grouping as a single unit:
Depending on your access needs, you can
grant permissions to individual applications or all applications .
For a list of recommended roles, see
Grant application-centric roles to your users .
Optionally, navigate to Cloud Hub to see a
unified operational dashboard for your defined application, including its
health, performance, and cost data.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
