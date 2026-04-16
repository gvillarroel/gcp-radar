---
title: "Set up a host project (Legacy) \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/supported-resources
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/set-up-app-hub-host-project
  title: "Set up a host project (Legacy) \_|\_ App Hub \_|\_ Google Cloud Documentation"
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
Set up a host project (Legacy)
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to set up a host project in App Hub and
create a multiple-project boundary .
The host project is a legacy application setup model supported for existing
App Hub users. We recommend defining folder-level boundaries
by setting up an app-enabled folder
for new implementations. Folder-level boundaries provide access to the
complete set of Application-centric Google Cloud features, such as Application Design Center and
Gemini Cloud Assist. For a comparison of key differences between the
available models for application management, see
Choose your application setup model .
Overview of host and service projects
A host project is a Google Cloud
project to which you attach other projects that contain the services and
workloads you want to group as App Hub applications. The projects you
attach to the host project are called
service projects . The attachment
of the host project and service projects define a multiple-project
boundary .
A host project can manage its own resources directly by attaching to itself.
However, for a single-project setup, we recommend using
the single-project approach .
Important: The host and service project model in App Hub is distinct
from the model used by Shared VPC . You cannot
use a Shared VPC host project and its attached service projects for
App Hub. In App Hub, host and service projects are for
logically grouping application components, not for sharing VPC networks.
Before you begin
Before you set up a Google Cloud project as a host project and attach service
projects to it, complete the following steps:
Identify the Google Cloud project you want to use as the host project.
You can use an existing project or
create a new project .
Identify the Google Cloud projects that you want to attach to the host
project as service projects. You must identify all the projects that contain
the services and workloads that you intend to register to App Hub
applications. Resources in other projects won't be visible to
App Hub. Service projects have the following requirements:
Service projects must be in the same
organization as
the host project.
A service project can only be attached to one host project at a time.
A host project can act as a service project for itself to manage its own
resources, but you cannot attach it as a service project to any other
host project.
Choose a host project and service projects that aren't descendants of
folders that you configured for application
management. This separation ensures that all resources in a folder
are managed with the same type of setup model.
Required roles
To get the permissions that
you need to attach service projects to the host project,
ask your administrator to grant you the
App Hub Admin ( roles/apphub.admin )
IAM role on the host project and on each service project that you want to attach.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Set up the host project
To configure a Google Cloud project as a host project, follow these steps:
Console
In the Google Cloud console, use the project picker to select your project.
Navigate to the Overview page from App Hub:
Go to Overview
Click Set up App Hub .
In the Enable App Hub page, choose Full setup to create a
multiple-project boundary.
Make note of the project name and ID. This information identifies the
host project and you'll use these values to grant access.
Review the list of APIs being enabled .
Some APIs have associated costs.
Learn more about the costs of APIs
or click each API to see associated costs.
Note: This setup process enables several APIs, but only App Hub
and Application Monitoring support host projects. Therefore, other
enabled APIs might not function as expected in this legacy setup
model. For more information, see
Feature support by boundary type .
Click Continue .
In the Define boundary tab, verify your project information.
Click add Add project to
add service projects to your boundary
or add those later.
Click Continue .
In the Grant access tab, choose the appropriate
IAM roles and permissions
for administrators in the project.
For a list of recommended application-centric roles across
Google Cloud products, see
Grant application-centric roles to your users .
In the New principals box, enter the users, groups, or
service accounts who should have administrator access to
application-centric tasks in the project.
Click Grant roles and then click Complete .
Later, you can grant additional IAM roles to your principals
from the IAM page. For more information, see
Grant an IAM role by using the Google Cloud console .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Make sure that the most recent version of Google Cloud CLI is installed:
gcloud components update
Find the project ID
of the Google Cloud project that you want to configure as the host
project.
Set the host project as the default project for commands:
gcloud config set project HOST_PROJECT_ID
Replace HOST_PROJECT_ID with the ID of the
project you want to configure as the host project.
Enable the App Hub API in the
host project:
gcloud services enable apphub.googleapis.com \
--project = HOST_PROJECT_ID
Add service projects
Add service projects to your
application management boundary by
attaching them to the host project.
To attach service projects to the host project and create a multiple-project
boundary, follow these steps:
Console
In the Google Cloud console, use the project picker to select the host
project.
Go to Welcome
Navigate to the Boundary settings page from App Hub:
Go to Boundary settings
Click add Add project .
Select the service projects that you want to attach to the host project
and add to your boundary in one of the following ways:
From the list of projects, select the checkboxes for the projects
you want to attach as service projects.
Filter the project names and select their checkboxes.
Click Select .
The Projects in your boundary table displays the selected service
projects. The attachment process might take some time to complete.
Verify the list of service projects is complete.
gcloud
Find the project ID
of each of the Google Cloud projects that you want to configure as
service projects.
Attach each service project:
gcloud apphub service-projects add SERVICE_PROJECT_ID \
--project = HOST_PROJECT_ID
Replace the following:
SERVICE_PROJECT_ID : the ID of the service
project to attach.
HOST_PROJECT_ID : the ID of the host
project.
Repeat the previous process for each service project you want to attach
to the host project.
Terraform
To attach a service project to a host project using Terraform, use
the google_apphub_service_project_attachment resource ,
for example:
resource "google_apphub_service_project_attachment" "example" {
service_project_attachment_id = google_project.service_project.project_id
depends_on = [ time_sleep.wait_120s ]
}
resource "google_project" "service_project" {
project_id = "project-1"
name = "Service Project"
org_id = "123456789"
deletion_policy = "DELETE"
}
resource "time_sleep" "wait_120s" {
depends_on = [ google_project.service_project ]
create_duration = "120s"
}
To detach a service project from a host project, see Remove service projects .
Assign App Hub roles and permissions
To grant appropriate
App Hub roles and permissions to
App Hub users in the host project and service projects, follow these
steps:
Console
In the Google Cloud console, use the project picker to select the host
project.
Go to Welcome
Navigate to the IAM page:
Go to IAM
Click person_add Grant access .
The Grant access pane opens.
In the New principals field, enter the email address of the
principal that you want to grant access to App Hub.
Click Select a role and enter App Hub in the
Filter field.
Select the
App Hub IAM role
you intend to assign to the principal and click Save .
In each of the App Hub service projects you attached to the
host project, repeat the previous process to grant the same roles to the
same users.
gcloud
Find the project ID
of each of the Google Cloud projects that you configured as host and
service projects.
Grant access to principals in the host project:
gcloud projects add-iam-policy-binding HOST_PROJECT_ID \
--member = 'user: EMAIL_ADDRESS ' \
--role = ' ROLE_NAME '
Replace the following:
HOST_PROJECT_ID : the ID of the host
project.
EMAIL_ADDRESS : the email address of the
principal who must obtain App Hub access in the host
project. This value must have the format username@yourdomain ,
for example, my.user@example.com .
ROLE_NAME : the
App Hub IAM role
you want to assign to the principal, for example,
roles/apphub.admin .
In each of the App Hub service projects you attached to the
host project, grant the same roles to the same users:
gcloud projects add-iam-policy-binding SERVICE_PROJECT_ID \
--member = 'user: EMAIL_ADDRESS ' \
--role = ' ROLE_NAME '
Replace SERVICE_PROJECT_ID with the ID of
the service project you are granting access to.
Set up VPC Service Controls
To protect your applications with a VPC Service Controls perimeter, add
your App Hub host project and service projects to the perimeter before
you create your applications. For more information, see
Use VPC Service Controls with App Hub .
Optional: Configure the metrics scope
To view system metrics for applications within your host project in
Cloud Monitoring, add the attached service projects to the host project's
metrics scope . The host project serves as a scoping
project for time-series data, enabling the charting and monitoring of data. For
more information and configuration instructions, see
Configure a metrics scope and
Configure a metrics scope by using the API .
Remove service projects
Remove service projects from your
application management boundary by
detaching them from the host project.
To detach a service project from a host project, follow these steps:
Console
In the Google Cloud console, use the project picker to select the host
project.
Go to Welcome
Navigate to the Boundary settings page from App Hub:
Go to Boundary settings
Select the checkboxes of the service projects that you want to detach
from the host project and remove from your boundary.
Click Detach projects .
The Projects in your boundary table refreshes to display only the
projects that remain attached to the host project.
Verify the list of service projects is updated.
gcloud
Find the project ID
of each of the service projects that you want to remove from the host
project.
Remove each service project:
gcloud apphub service-projects remove SERVICE_PROJECT_ID \
--project = HOST_PROJECT_ID
Replace the following:
SERVICE_PROJECT_ID : the ID of the service
project to remove.
HOST_PROJECT_ID : the ID of the host
project.
Repeat the previous process for each service project you want to remove
from the host project.
Important: When you remove a service project from a host project, the
registration status of services and workloads
from that project that are registered to applications changes to detached .
When you remove a service project from a host project, consider removing it also
from the host project's metrics scope if you previously
configured the metrics scope . For more information, see
Remove projects from a metrics scope .
What's next
Register existing resources to an application
Set up application monitoring
App Hub IAM roles and permissions
App Hub overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
