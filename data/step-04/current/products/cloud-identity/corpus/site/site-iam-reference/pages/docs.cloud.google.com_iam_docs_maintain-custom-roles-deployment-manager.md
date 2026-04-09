---
title: "Maintaining custom roles with Deployment Manager \_|\_ Identity and Access\
  \ Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/maintain-custom-roles-deployment-manager
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/maintain-custom-roles-deployment-manager
  title: "Maintaining custom roles with Deployment Manager \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Maintaining custom roles with Deployment Manager | Identity and Access Management (IAM) | Google Cloud Documentation
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
IAM
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Get started
Grant roles in the Google Cloud console
Grant roles using client libraries
IAM and your security architecture
Identity management for Google Cloud
Configure identities for users
Identities for users
Create and manage Google groups in the Google Cloud console
Best practices for using Google groups
Federate identities for users
Workforce identity federation
SCIM provisioning for Workforce Identity Federation
Configure Workforce Identity Federation
Microsoft Entra ID
Microsoft Entra ID with a large number of groups
Okta
Other OIDC or SAML 2.0
Access BigQuery data in Power BI with Microsoft Entra
Configure SCIM
Microsoft Entra ID
Okta
OIDC or SAML 2.0
Obtain short-lived credentials for Workforce Identity Federation
Manage workforce identity pools and providers
Delete Workforce Identity Federation users and their data
Set up user access to console (federated)
Sign in to the gcloud CLI with your federated identity
Integrate OAuth applications
OAuth application integration overview
Manage OAuth applications
Configure identities for workloads
Identities for workloads
Create and manage service accounts
About service accounts
Service accounts
Service account credentials
Service account impersonation
Service account types
Roles for service account authentication
Create and grant roles to service agents
Create service accounts
Manage service accounts
List and edit service accounts
Disable and enable service accounts
Delete and undelete service accounts
Manage tags for service accounts
Attach service accounts to resources
Use custom organization policies for service accounts and keys
Service account best practices
Best practices for using service accounts
Best practices for using service accounts in deployment pipelines
Use managed workload identities
About managed workload identities
Compute Engine
Create managed workload identities for GCE
GKE
Create managed workload identities for GKE
Troubleshoot managed workload identities for GKE
Use custom organization policies
Federate identities for external workloads
Workload Identity Federation
Configure Workload Identity Federation
AWS or Azure
Active Directory
Deployment pipelines
Kubernetes
Workloads with X.509 certificates
Other identity providers
Authenticate workloads using Google auth libraries
Manage workload identity pools and providers
Best practices for using Workload Identity Federation
Let customers access their Google Cloud resources from your product or service
Download credential configuration and grant access
Integrate Cloud Run and Workload Identity Federation
Use custom organization policies
Create and manage service account keys
Migrate from service account keys
Service account key rotation
Create and delete service account keys
List and get service account keys
Upload a public key
Disable and enable service account keys
Best practices for managing service account keys
Built-in identities for resources
Control access to resources
About IAM access controls
Roles and permissions
Principals
Policy types
Allow policies
Allow policy inheritance
Deny policies
Principal access boundary policies
Access change propagation
IAM Conditions
Choose roles to grant
Choose which type of role to use
Find the right predefined roles
Get predefined role suggestions with Gemini assistance
View grantable roles
Roles for specific job functions
Predefined roles for job functions
Billing-related job functions
Networking-related job functions
Auditing-related job functions
Create and manage custom roles
Create and manage custom roles
Manage tags for custom roles
Use Deployment Manager to maintain custom roles
Grant access
Manage access to projects, folders, and organizations
Manage access to service accounts
Manage access to other resources
Test allow policy changes
Grant access conditionally
Manage conditional role bindings
Configure temporary access
Configure resource-based access
Tags and conditional access
Set limits on granting roles
Lint conditions in allow policies
Deny access
Restrict the resources that a principal can access
Create and apply principal access boundary policies
View principal access boundary policies
Edit principal access boundary policies
Remove principal access boundary policies
Temporary elevated access
Temporary elevated access overview
Control temporary elevated access with PAM
PAM overview
Permissions and setup
Create entitlements
View, update, and delete entitlements
Configure PAM settings
View and export PAM settings
View grants
Revoke grants
Audit entitlement and grant events
Best practices for PAM
Request temporary elevated access with PAM
Withdraw grants
Approve or deny grants with PAM
Create short-lived credentials for a service account
Create short-lived credentials for multiple service accounts
Restrict a credential's Cloud Storage permissions
Credential Access Boundaries overview
Create a downscoped short-lived credential
Migrate to the Service Account Credentials API
Test permissions for custom user interfaces
Use custom organization policies for allow policies
Use IAM to help prevent exfiltration from data pipelines
Optimize your IAM configuration
Use IAM securely
Optimize IAM policies by using Policy Intelligence tools
Help secure IAM using VPC Service Controls
Monitor
Audit logging
IAM API audit logging
IAM SCIM audit logging
Service Account Credentials API audit logging
Privileged Access Manager audit logging
Security Token Service API audit logging
Example logs for service accounts
Example logs for Workforce Identity Federation
Example logs for Workforce OAuth application integration
Example logs for Workload Identity Federation
Analyze access to resources
Monitor service account usage
Tools to understand service account usage
Monitor usage patterns for service accounts and keys
Review allow policy history
Review security insights
Troubleshoot
Troubleshoot permission error messages
Permission error messages
Request missing permissions
Resolve permission errors
Troubleshoot allow and deny policies
Troubleshoot organization policy errors for service accounts
Troubleshoot "withcond" in policies and role bindings
Troubleshoot Workforce Identity Federation
Troubleshoot Workload Identity Federation
Samples
All Identity and Access Management code samples
Code samples for all products
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
Background
Before you begin
Scenarios for maintaining custom roles using Deployment Manager Understanding Deployment Manager configuration files
Before you begin
Grant permissions to the Google APIs service account
Deploy custom roles to your project
View your deployed custom role
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Maintaining custom roles with Deployment Manager
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Background
Before you begin
Scenarios for maintaining custom roles using Deployment Manager Understanding Deployment Manager configuration files
Before you begin
Grant permissions to the Google APIs service account
Deploy custom roles to your project
View your deployed custom role
Background
Identity and Access Management custom roles enable you to grant granular permissions to user
accounts and service accounts. Unlike predefined roles, which are maintained by
Google and updated accordingly, custom roles are maintained by your organization
as new permissions become available.
Cloud Deployment Manager can make it easier to configure and maintain
your custom roles. You can use Deployment Manager to describe roles
using configuration files, that can then be checked in to your source control
system of choice. Together, Deployment Manager and source control can
make it easier to make "config-as-code" for:
Tracking custom roles as they change over time
Promoting custom roles through launch stages as they are tested and
validated
Automating how roles are deployed throughout your organization
Before you begin
Enable the IAM and Cloud Deployment Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Scenarios for maintaining custom roles using Deployment Manager
Consider the following scenarios that demonstrate the benefits of using
Deployment Manager to maintain custom roles:
Controlling access to new permissions: You have a custom role that
contains permissions for a Google Cloud service. The service adds
new Beta features and exposes new permissions. Your custom role will not
automatically inherit these new permissions -- they must be added manually.
Until the new permissions are added to your custom role, users in your
organization will not have access to the Beta features. You can use
Deployment Manager's configuration files and source control to help
audit existing permissions, update your custom roles as necessary, and
maintain a revision history.
Role lifecycle management: You have a new custom role to which you have
assigned an ALPHA launch stage. After the custom role has been tested and
validated, you can use Deployment Manager to update the custom
role's configuration and advance it to BETA stage without using the
Google Cloud console.
Understanding custom roles adoption: By having more of your
organization's custom role definitions in source control, it makes it easier
to share, learn from patterns of usage, and enforce access controls across
multiple projects.
Understanding Deployment Manager configuration files
Deployment Manager uses three different file types to describe a
deployment. Each type is described below:
Configurations are YAML files that describe resources and their
properties. For Identity and Access Management (IAM) custom roles, each YAML file specifies
all of the properties for one or more custom roles, such as its name,
description, and permissions.
Schemas specify all possible properties for a given resource and their
default values. For IAM custom roles, there are
schemas for project-level and organization-level custom roles.
Templates , which are Jinja or Python files that enhance configurations
by allowing you to break down a configuration into reusable parts. For
IAM custom roles, there are two provided templates:
one for project-level custom roles, and one for organization-level custom
roles.
For more information about these types, see
Deployment Manager Fundamentals .
Before you begin
If you are unfamiliar with Deployment Manager, first complete the
Quickstart . Then follow the steps below:
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
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
Enable the Deployment Manager and IAM APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Deployment Manager and IAM APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Once these prerequisite steps have been completed, you can start using
Deployment Manager with IAM to maintain your
custom roles.
Grant permissions to the Google APIs service account
To maintain custom roles using Deployment Manager, you must first grant
the appropriate permissions to the Google APIs service account. This account is
created by default for each organization and project.
In the Google Cloud console, go to the IAM page.
Go to the IAM page
From the list of principals, locate the principal with the name Google
APIs service agent .
To edit the service account's roles, click the Edit
edit button, and then add the
Roles > Role Administrator role.
Click Save to apply the role.
Now that the Google APIs service account has been granted the permission to
maintain custom roles, you can deploy a sample custom role using
Deployment Manager.
Deploy custom roles to your project
As described in the section above ,
Deployment Manager uses a combination of configuration files to
describe a deployment. For IAM, consider the following two
example files for a project's custom roles:
project_custom_role.yaml
imports :
- path : project_custom_role.jinja
resources :
- name : custom-role
type : project_custom_role.jinja
properties :
roleId : myCustomRole
title : My Title
description : My description.
includedPermissions :
- iam.roles.get
- iam.roles.list
This YAML file specifies the properties about a custom role named custom-role ,
which grants permissions to iam.roles.get and iam.roles.list .
Note that it references a .jinja file twice; these references use the values
provided by the Jinja template as described below.
project_custom_role.jinja
# Copyright 2017 Google LLC. All rights reserved.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
resources :
- name : custom-role
type : gcp-types/iam-v1:projects.roles
properties :
parent : projects/{{ env["project"] }}
roleId : {{ properties [ "roleId" ] }}
role :
title : {{ properties [ "title" ] }}
description : {{ properties [ "description" ] }}
stage : {{ properties [ "stage" ] }}
includedPermissions : {{ properties [ "includedPermissions" ] }}
This Jinja file provides a template for a custom role to minimize duplication
of the same properties across many roles. Default values are inserted from a
.schema file if the corresponding YAML file does not specify values for
each property.
To deploy this custom role with Deployment Manager:
Download the contents of
this GitHub repository
to your local machine.
In a terminal window, navigate to the
examples/v2/iam_custom_role/jinja
directory in the downloaded repository. It contains the
project_custom_role.yaml file and the associated Jinja files.
Execute the following command to deploy the example custom role, replacing
the your-deployment-name
placeholder value with a deployment name of your choice:
gcloud deployment-manager deployments create \
your-deployment-name --config project_custom_role.yaml
Wait for the operation to complete. The deployment fingerprint and a
progress indicator are shown:
The fingerprint of the deployment is PUo2fmKdoFdJqiLViHjT3Q==
Waiting for create [operation-1513228867042-560460d157ad1-b4ababb8-c6a7dddc]...done.
If the operation was successful, you will see the following status message:
Create operation operation-1513228867042-560460d157ad1-b4ababb8-c6a7dddc completed successfully.
NAME TYPE STATE ERRORS INTENT
custom-role gcp-types/iam-v1:projects.roles COMPLETED []
View your deployed custom role
To view your custom role in Deployment Manager:
In a terminal window, execute the following command:
gcloud deployment-manager deployments describe your-deployment-name
You will see a description of the deployment, including comprehensive
information about its status, any errors, and more.
fingerprint: oaJoGesEFYvsAldP2bm5jQ==
id: '3222872306422524501'
insertTime: '2018-01-29T13:40:10.822-08:00'
manifest: manifest-1517262010855
name: your-deployment-name
operation:
endTime: '2018-01-29T13:40:26.500-08:00'
name: operation-1517262010573-563f1172be0c9-ce5f0242-239fe1af
operationType: insert
progress: 100
startTime: '2018-01-29T13:40:11.535-08:00'
status: DONE
user: id-7201362145@my-example-project.iam.gserviceaccount.com
NAME TYPE STATE INTENT
custom-role gcp-types/iam-v1:projects.roles COMPLETED
You can also see the detailed information about the custom role's
configuration by retrieving the deployment's manifest . In the output from
the describe command in step 2 above, note the manifest ID. Copy this ID,
including the manifest- prefix, and use it to replace the placeholder value
below:
gcloud deployment-manager manifests describe your-manifest-id \
--deployment your-deployment-name
The manifest contains exhaustive information about the custom role
deployment, including the raw contents of the source
project_custom_role.yaml and project_custom_role.jinja files. In
particular, note the resources block near the bottom of the manifest,
which summarizes the details about the custom role:
...
resources :
- name : custom-role
properties :
description : My description.
includedPermissions :
- iam.roles.get
- iam.roles.list
roleId : aCustomRole
stage : ALPHA
title : My Title
resources :
- name : custom-role
type : gcp-types/iam-v1:projects.roles
type : project_custom_role.jinja
...
To view your custom role in the Google Cloud console:
In the Google Cloud console, go to the IAM page.
Go to the IAM page
Select a project and click Open .
On the left menu, click Roles .
Click the name of the newly created custom role from the list. It should look similar to the screenshot below:
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
