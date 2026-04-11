---
title: "Enable Migrate to Virtual Machines services \_|\_ Google Cloud Documentation"
url: https://cloud.google.com/migrate/virtual-machines/docs/5.0/get-started/enable-services
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://cloud.google.com/migrate/virtual-machines/docs/5.0
source_metadata:
  url: https://cloud.google.com/migrate/virtual-machines/docs/5.0/get-started/enable-services
  title: "Enable Migrate to Virtual Machines services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Enable Migrate to Virtual Machines services
Stay organized with collections
Save and categorize content based on your preferences.
Before you can begin a migration, you must enable the Migrate to Virtual Machines
service on Google Cloud and also enable all other Google Cloud
services required by Migrate to Virtual Machines.
Identifying your host project
Google Cloud projects
form the basis for creating, enabling, and using Google Cloud services
including managing APIs, enabling billing, adding and removing collaborators,
and managing permissions for Google Cloud resources.
Migrate to Virtual Machines uses the following types of projects:
Host project (Required)
Use the host project to control the migration process and optionally to
host the Compute Engine instances running your migrated workloads. You
must create and configure a host project as described in the following
sections.
Target project (Optional)
A target project defines the destination project for a Compute Engine
instance running your migrated VM. Your host project can be used as a
target project. If you want to migrate VMs to additional projects, you must
add them as target projects to Migrate to Virtual Machines. See Adding a target project for more.
To enable Migrate to Virtual Machines services, you must identify the
Google Cloud project that you want to use as the host project:
In the Google Cloud console, on the project selector page, select or create a
Google Cloud project to use as the host project:
Go to the project selector page
Note the name and ID of the selected project.
Installing the gcloud CLI
Install the gcloud CLI on your workstation, which also installs the
Google Cloud CLI. gcloud is the primary CLI tool that you use to create and
manage Google Cloud resources. You can use gcloud to perform many common
platform tasks either from the command line or in scripts and other automations.
To install the gcloud CLI:
Install and initialize the gcloud CLI .
Update gcloud CLI:
gcloud components update
Make sure that gcloud CLI is authorized to access your data and
services:
gcloud auth login
A new browser tab opens and you are prompted to choose an account.
Enabling required services on the host project
Within your host project, enable the Google Cloud services required by
Migrate to Virtual Machines service. For more information about these services,
see gcloud services .
The host project for Migrate to Virtual Machines requires that you enable the
following Google Cloud services:
Name
Title
vmmigration.googleapis.com
Migrate to Virtual Machines API
servicemanagement.googleapis.com
Service Management API
servicecontrol.googleapis.com
Service Control API
iam.googleapis.com
Identity and Access Management (IAM) API
cloudresourcemanager.googleapis.com
Cloud Resource Manager API
compute.googleapis.com
Compute Engine API
To enable the required services:
Ensure that you have set the default project to the host project.
Replace PROJECT_ID with the project ID of your host project:
gcloud config set project PROJECT_ID
View the list of services already enabled on the project:
gcloud services list
If you don't see all of the required services listed, enable them:
gcloud services enable vmmigration.googleapis.com servicemanagement.googleapis.com servicecontrol.googleapis.com iam.googleapis.com cloudresourcemanager.googleapis.com compute.googleapis.com
You should now be able to open the Migrate to Virtual Machines page in the
Google Cloud console:
Go to the Migrate to Virtual Machines page
Using predefined roles
Identity and Access Management includes two predefined roles that you can use to control access
for users in your organization:
Role
Title
Description
roles/vmmigration.admin
VM Migration Administrator
Allows users to create new Migrate to Virtual Machines sources and perform all other migration operations.
roles/vmmigration.viewer
VM Migration Viewer
Allows users to retrieve information about Migrate to Virtual Machines in the Google Cloud console. Intended for users who are performing migrations, but not setting up the system or adding new migration sources.
For example, if you want to allow a user in your organization to be able to view
information about a migration, but not be able to perform a migration, assign
them the role roles/vmmigration.viewer .
What's next
Installing the Migrate Connector
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
