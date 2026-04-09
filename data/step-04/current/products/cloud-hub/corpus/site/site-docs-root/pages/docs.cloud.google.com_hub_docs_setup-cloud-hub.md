---
title: "Set up Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/setup-cloud-hub
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/setup-cloud-hub
  title: "Set up Cloud Hub \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Set up Cloud Hub | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Hub
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Explore Application-centric Google Cloud
Cloud Hub overview
Application views and project views
Get started
Set up Cloud Hub
Control access
Access control with IAM
Review data and insights
View top items on the home page
View deployments
View application and resource health
Optimize resource costs and utilization
View maintenance activities
View quotas and reservations
Get support and manage support cases
Troubleshoot
Troubleshoot Cloud Hub
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Set up application management Required roles
Enable a application management
Link a billing account to the management project
Configure observability scopes
Create applications
Enable APIs for Cloud Hub Required roles
Enable APIs
Grant access to Cloud Hub users Required roles
Grant access for application data
Grant access for project data
What's next
Home
Documentation
Access and resource management
Cloud Hub
Guides
Was this helpful?
Send feedback
Set up Cloud Hub
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Set up application management Required roles
Enable a application management
Link a billing account to the management project
Configure observability scopes
Create applications
Enable APIs for Cloud Hub Required roles
Enable APIs
Grant access to Cloud Hub users Required roles
Grant access for application data
Grant access for project data
What's next
This document describes how to set up Cloud Hub.
There are several main steps in the setup process:
To create App Hub applications and view data about them in
Cloud Hub, set up application management .
If you don't set up application management, you can still view some data by
Google Cloud project instead of by application in Cloud Hub.
Enable APIs for project data . Some pages in
Cloud Hub don't support application data. You must enable
APIs for these pages separately.
Configure aggregated views of logs, metrics, and traces .
Grant access to Cloud Hub users.
Different people or teams might be responsible for different steps in the
Cloud Hub setup process.
Set up application management
This section describes the steps required to enable application management and
create your applications.
Required roles
To get the permissions that
you need to configure an app-enabled folder,
ask your administrator to grant you the
following IAM roles:
Enable application management:
Folder Admin ( roles/resourcemanager.folderAdmin )
on the parent resource for the folder
Enable APIs:
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
on the target folder (to enable required and recommended APIs)
Link a billing account to the management project:
Project Billing Manager ( roles/billing.projectManager )
on the management project
Billing Account User ( roles/billing.user )
on the target billing account
Grant application-centric roles to users:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on the management project
Configure the observability scope:
Observability Editor ( roles/observability.editor )
on the management project
Logs Configuration Writer ( roles/logging.configWriter )
on the management project
Monitoring Admin ( roles/monitoring.admin )
on the management project and on each project that you want to add to the metrics scope
Cloud Trace User ( roles/cloudtrace.user )
on the management project
App Hub Viewer ( roles/apphub.viewer )
on the management project
View application-level and project-level data in Cloud Hub:
Cloud Hub Operator ( roles/cloudhub.operator )
on the app-enabled folder
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable a application management
Application management lets you shift your focus from individual infrastructure
components to your application as a whole.
When you enable application management on a folder, the folder is called
app-enabled folder and the following occurs:
A project is defined as the
management project in the
folder.
The system enables required APIs on the management project.
The management project stores application data, including enabled APIs,
billing, quotas, and access controls.
To enable application management on a folder, do the following:
Console gcloud Terraform
More
Select or create the Google Cloud folder that you want to configure as an
app-enabled folder. To create a new folder, see
Creating folders .
In the Google Cloud console, open the Manage resources page.
Go to Manage resources
From the list of projects and folders, locate the folder that you want to
configure.
If a folder has the
app-enabled folder icon, application management is already enabled.
In the folder row, open the
more_vert Actions menu and click
Settings .
If application management has not been enabled on the folder, the
Application management setting displays Not enabled .
In the Enable application management area, click Create project .
The Create management project and enable required APIs panel opens.
Review the list of required APIs . These APIs manage your
application lifecycle. For APIs that have associated costs, click the API
name to learn more about pricing.
To enable application management, click Create project and enable APIs .
The system creates the management project in the folder.
Warning: If API enablement fails, you must restart the application
management enablement process. The error is displayed in
notifications_none Notifications .
Make note of the project name and ID of the management project. You'll
use these values to grant access.
Alternatively, to get the management project ID, you can use the
following Google Cloud CLI command:
gcloud resource-manager folders describe FOLDER_ID
--format = "value(managementProject.split('/').slice(-1))"
Replace FOLDER_ID with the ID of the
app-enabled folder.
For more information, see
Find the project name, number, and ID .
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Make sure that the most recent version of Google Cloud CLI is installed:
gcloud components update
To enable application management on a specific folder, use the
gcloud resource-manager capabilities update command with the
--enable flag.
gcloud resource-manager capabilities update folders/ FOLDER_ID /capabilities/app-management \
--enable
Replace FOLDER_ID with the ID of the folder.
This command enables the application management capability on the
specified folder and automatically provisions a new Google Cloud project
within that folder to serve as the management project.
Optionally, to enable recommended APIs on the
management project, follow the instructions to
enable Google Cloud services on a project .
To enable application management on a folder using Terraform, use
the google_resource_manager_capability resource ,
for example:
resource "google_folder" "folder" {
display_name = "my-folder"
parent = "organizations/123456789"
deletion_protection = false
}
resource "time_sleep" "wait_60s" {
depends_on = [ google_folder.folder ]
create_duration = "60s"
}
resource "google_resource_manager_capability" "capability" {
value = true
parent = "${google_folder.folder.name}"
capability_name = "app-management"
depends_on = [ time_sleep.wait_60s ]
}
This command enables the application management capability on the specified
folder and automatically provisions a new Google Cloud project within that
folder to serve as the management project. To enable the list of
recommended APIs on the management project, follow the
instructions to
enable an API service on a Google Cloud project .
Important: When you create an app-enabled folder, it is important to
understand the resource hierarchy
in the folder. If a descendant project or subfolder that contains services and
workloads is moved out of an app-enabled folder after an application is
created, the application remains in the app-enabled folder. However, the
registration status of services and workloads
changes to detached .
Link a billing account to the management project
To use advanced Application-centric Google Cloud features, you must link an active billing account to the
management project. For example, a linked billing account helps you do the
following:
Manage workloads that exceed App Hub resource quotas.
Use Application Design Center to create templates and deploy applications.
For an overview of potential costs associated with application management and
the enabled APIs, see Understanding costs .
Note: If you don't link a billing account, you can still use App Hub
and Application Monitoring. You can model your applications with underlying
services and workloads at no cost and use the
free data usage allotments for Google Cloud Observability usage in the
management project.
Follow these steps to link an active billing account to your
management project:
Console gcloud
More
Verify the billing account that you want to use for application
management exists. To create a billing account, see
Create a new self-serve Cloud Billing account .
In the Google Cloud console, open the Billing page.
Go to Billing
In the My projects tab, locate the management project.
In the project row, open the
more_vert Actions menu, select
Change billing , and then choose the Cloud Billing account.
For more information about enabling billing for a project, see
Enabling billing for a project .
gcloud billing projects link PROJECT_ID \
--billing-account ACCOUNT_ID
Replace the following:
PROJECT_ID : the ID of the management project.
ACCOUNT_ID : the ID of the billing account.
Billing account IDs are in the format 0X0X0X-0X0X0X-0X0X0X .
Configure observability scopes
The observability scope determines where the Google Cloud console
searches for telemetry data to display. Each Google Cloud project has a
single observability scope, which identifies the default log and trace scopes.
For metric data, the project's metrics scope determines where the
Google Cloud console searches for data.
To view or analyze all of your application's telemetry data, configure the
observability scope and the metrics scope for the management project. By
configuring these scopes, Cloud Hub and other services can find
and display your application's log, metric, and trace data, even when that
data is stored in multiple projects.
This section summarizes the required configuration. For detailed instructions,
see Set up application monitoring . The following table shows the
required configuration scopes.
Scope component
Configuration scenario
Key actions and considerations
Log scope
You use an aggregated sink to route all logs in the organization to a central log bucket.
Create a log view that only includes application logs stored in the bucket.
Configure the default log scope on the management project to include the log view.
You don't have an organization-level aggregated sink, and the app-enabled folder doesn't have nested folders.
Configure an aggregated sink to route application logs to the _Default log bucket of the management project.
Make sure that the log scope named _Default is the default log scope.
You don't want to use an aggregated sink.
Configure the default log scope on the management project to list the storage locations of your application's log data.
Metrics scope
You configured an app-enabled folder containing all the projects that store the metric data you want to view.
Google Cloud Observability attempts to synchronize the list of projects in your app-enabled folder with the list of projects on the scope of the metrics.
As long as the number of projects in the app-enabled folder doesn't exceed your metric scope quota, Google Cloud Observability can keep the list of projects on the scope of the metrics updated when you add or remove projects in the app-enabled folder.
Trace scope
You want to monitor application trace data across multiple projects.
Create a custom trace scope on the management project that lists the projects that store your application's trace data.
Set your custom trace scope as the default trace scope.
Create applications
After you have enabled application management , you
can create your applications. You have the following options to create your
applications:
Use App Hub to create applications from existing
Google Cloud resources. See Create an application .
Use Application Design Center to design and deploy new
Google Cloud resources, which automatically provision
App Hub applications. You use application templates to
define the design and then deploy application instances based on the
templates.
Enable APIs for Cloud Hub
Cloud Hub does not have its own API. Instead, it calls other APIs
that provide data to Cloud Hub.
The following table lists APIs that Cloud Hub uses. Some of these
APIs have associated costs or have dependencies with costs. Review the pricing
links for more information.
API
Usage in Cloud Hub
Pricing
App Hub API
( apphub.googleapis.com )
Stores metadata for all registered applications. Lets you organize existing resources into applications.
Required to display application data in Cloud Hub.
Learn about App Hub.
App Hub pricing
App Design Center API
( designcenter.googleapis.com )
Design, deploy, and update applications
Required to view application
deployments in Cloud Hub.
Pricing
App Optimize API
( appoptimize.googleapis.com )
Get cost and utilization data to help you optimize costs.
Required for viewing data on the
Optimization page in Cloud Hub.
The are no additional charges for this API. The API
retrieves data from Cloud Billing and
Cloud Monitoring
Capacity Planner API
( planner.googleapis.com )
View cost and utilization data to help you optimize costs.
Required to view
usage and forecast data in Cloud Hub.
Capacity Planner pricing
Compute Engine API
( compute.googleapis.com )
Provision self-managed virtual machine (VM) instances and bare metal instances.
Required to
view reservation data
in Cloud Hub.
Billing information for future reservations
Cloud Logging API
( logging.googleapis.com )
Real-time log-management.
Provides logging for Google Cloud services. Required
for the Health & Troubleshooting page in
Cloud Hub.
Observability pricing
Cloud Monitoring API API
( monitoring.googleapis.com )
Provides metrics and alerting for Google Cloud services.
Required for alert and telemetry data on the
Health & Troubleshooting page in Cloud Hub.
Observability pricing
Service Health API
( servicehealth.googleapis.com )
Identify Google Cloud service disruptions relevant to your
applications
Required to view Google Cloud incidents on the
Health & Troubleshooting and
Support pages in Cloud Hub.
Personalized Service Health pricing
Recommender API
( recommender.googleapis.com )
Generate Active Assist recommendations and insights to help
you optimize your Google Cloud resources
Required to view
cost optimization recommendations in Cloud Hub
Recommender pricing
Gemini Cloud Assist API
( geminicloudassist.googleapis.com )
A product of the
Gemini for Google Cloud portfolio that offers AI-powered assistance to simplify the application lifecycle in Google Cloud.
Required use Gemini Cloud Assist for assistance with
tasks such as
cost optimization and
troubleshooting .
Gemini Cloud Assist pricing
Cloud Quotas API
( cloudquotas.googleapis.com )
View and manage quotas.
Required to
view quotas and system
limits in Cloud Hub.
Cloud Quotas pricing
Unified Maintenance API
( maintenance.googleapis.com )
Manage planned maintenance across Google Cloud services.
Required to view maintennance acitivities in Cloud Hub
Unified Maintenance pricing
Service Usage API
( serviceusage.googleapis.com )
List and manage APIs and services in your Google Cloud projects.
Required to
view quotas and system
limits in Cloud Hub.
Service Usage pricing
After you set up application management, many of the APIs that provide data to
Cloud Hub are enabled on the management project as
required APIs .
However, some APIs that Cloud Hub uses only provide data for
projects or are not automatically enabled as required APIs on a management
project.
Use the instructions in this section to enable missing APIs for
Cloud Hub.
Required roles
To get the permissions that
you need to enable APIs,
ask your administrator to grant you the
Service Usage Admin (roles/serviceusage.serviceUsageAdmin)
IAM role on the project where you want to enable APIs.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable APIs
For information about APIs that Cloud Hub uses, see
Enable APIs for Cloud Hub .
Console gcloud
More
From the Cloud Hub Home page, you can view a list of APIs
that are not enabled for Cloud Hub and enable those APIs.
In the Google Cloud console, go to the Home page,
Go to Home
From the project picker, select the project that you want to view.
Next to Enable Recommended APIs click Enable APIs . A panel opens
and displays APIs that are not yet enabled.
Select the APIs that you want To enable the APIs, and then click
Enable .
Set the default project to the project where you want to enable the API.
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your project ID.
Get a list of services that you can enable in your project:
gcloud services list --available
If you don't see the API listed, that means you haven't been granted
access to enable the API.
Enable the services that you want to use in the project. You can enable
more than one API by providing a list of service names.
gcloud services enable SERVICE_NAME1 SERVICE_NAME2
Grant access to Cloud Hub users
The Cloud Hub Operator role includes permissions for viewing most
data in Cloud Hub. You must grant access to view resource costs
on the Optimization page and Gemini Cloud Assist investigations
separately.
Depending on the specific responsibilities of your users, you might need to
grant other roles so that they can take action on data that they view in
Cloud Hub.
Required roles
To get the permissions that
you need to manage access to a project or folder,
ask your administrator to grant you the
following IAM roles on the resource that you want to manage access for (project
or folder):
To manage access to a project:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
To manage access to a folder:
Folder Admin ( roles/resourcemanager.folderAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Grant access for application data
Console gcloud
More
In the Google Cloud console, go to the IAM page.
Go to IAM
In the project selector, choose the app-enabled folder.
On the IAM page, click
person_add Grant access .
The Grant access pane opens.
In the New principals field, enter the email address of a
Cloud Hub user.
Click Select a role and in the Filter field, enter
Cloud Hub .
Select the Cloud Hub Operator role and click Save .
The role is granted to the individual across all the projects and
sub-folders of the app-enabled folder.
In the project selector, choose the management project.
To grant roles for resource costs and investigations, grant the
required roles on the management project.
On the IAM page, click
person_add Grant access .
The Grant access pane opens.
Grant the following roles to the appropriate individuals:
To view cost data on the Optimization page - Reader ( roles/reader )
or Viewer ( roles/viewer ), or a custom role that contains the
billing.resourceCosts.get permission.
To view Gemini Cloud Assist investigations -
Investigation Viewer ( roles/geminicloudassist.investigationViewer )
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Make sure that the most recent version of Google Cloud CLI is installed.
Run the following command from the Cloud Shell:
gcloud components update
Grant the Cloud Hub Operator role in the
app-enabled folder to
the individuals. This
role is granted to an individual across all the projects and sub-folders
of the app-enabled folder.
gcloud resource-manager folders add-iam-policy-binding FOLDER_ID \
--member='user: PRINCIPAL ' \
--role='roles/cloudhub.operator'
Replace FOLDER_ID with the ID of the folder. You
can find your app-enabled folder ID on the
IAM & Admin Settings
page of the Google Cloud console. To ensure that the folder is
app-enabled, the Settings page should display the
Management project ID. If you can't find the
Management project ID, you might not be on an
app-enabled folder. From the project selector, select your
app-enabled folder.
Grant access to view resource costs on the management project. The
example command grants the Reader ( roles/reader ) role. To grant a role
with a narrower set of permissions, create a custom role that contains
the billing.resourceCosts.get permission.
gcloud projects add-iam-policy-binding PROJECT-ID \
--member='user: PRINCIPAL ' \
--role='roles/reader'
Replace PROJECT-ID with the ID of the management
project. The management project ID for a folder has the format
FOLDER-NAME -mp .
Grant access to view investigations on the management project.
gcloud projects add-iam-policy-binding PROJECT-ID \
--member='user: PRINCIPAL ' \
--role='roles/geminicloudassist.investigationViewer'
Grant access for project data
Console gcloud
More
In the Google Cloud console, go to the Cloud Hub
Home page.
Go to Home
In the project selector, choose your project.
Click
person_add Manage access .
The Grant access pane opens.
In the New principals field, enter the email address of a
Cloud Hub user.
Click Select a role and in the Filter field, enter
Cloud Hub .
Select the Cloud Hub Operator role and click Save .
Use the same steps to grant roles for viewing resource costs and
investigations.
To view cost data on the Optimization page - Reader ( roles/reader )
or Viewer ( roles/viewer ), or a custom role that contains the
billing.resourceCosts.get permission.
To view Gemini Cloud Assist investigations -
Investigation Viewer ( roles/geminicloudassist.investigationViewer )
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Make sure that the most recent version of Google Cloud CLI is installed.
Run the following command from the Cloud Shell:
gcloud components update
Grant the Cloud Hub Operator role on the project.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member='user: PRINCIPAL ' \
--role='roles/cloudhub.operator'
Replace PROJECT_ID with the project ID.
Grant access to view resource costs in the project. The
example command grants the Reader ( roles/reader ) role. To grant a role
with a narrower set of permissions, create a custom role that contains
the billing.resourceCosts.get permission.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member='user: PRINCIPAL ' \
--role='roles/reader'
Grant access to view investigations in the project.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member='user: PRINCIPAL ' \
--role='roles/geminicloudassist.investigationViewer'
What's next
View the Home page.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
