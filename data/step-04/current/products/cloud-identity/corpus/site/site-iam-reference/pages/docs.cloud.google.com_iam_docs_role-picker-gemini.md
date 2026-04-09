---
title: "Get predefined role suggestions with Gemini assistance \_|\_ Identity and\
  \ Access Management (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/role-picker-gemini
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/role-picker-gemini
  title: "Get predefined role suggestions with Gemini assistance \_|\_ Identity and\
    \ Access Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Get predefined role suggestions with Gemini assistance | Identity and Access Management (IAM) | Google Cloud Documentation
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
עברית
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
Required Roles
Get role suggestions with Gemini assistance
Sample use cases
Best practices
Troubleshooting Gemini suggests roles that you can't grant at the project level
What's next
Home
Documentation
Security
IAM
Guides
Was this helpful?
Send feedback
Get predefined role suggestions with Gemini assistance
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required Roles
Get role suggestions with Gemini assistance
Sample use cases
Best practices
Troubleshooting Gemini suggests roles that you can't grant at the project level
What's next
This page describes how you can find and grant the least permissive
Identity and Access Management (IAM) predefined roles to your principals with
Gemini assistance.
The IAM role picker lets you ask Gemini which roles you
should grant to your principals. Typically, to find the right predefined roles
to grant, you would need to search through the
IAM roles and permissions index or
the Roles page in the
Google Cloud console . With the
IAM role picker, you can describe the actions you want the principal to
perform and the resources that they need to perform them on. Based on your
input, Gemini suggests the least permissive predefined roles that
it considers appropriate.
Gemini can suggest predefined roles for individual principals. If
Gemini suggests granting a role at the project level, then you
can use the IAM role picker to grant that role.
You can't use the IAM role picker to get suggestions for the following
things:
Custom roles
Roles for multiple principals (with a single prompt)
Roles for Google Workspace products like Google Sheets and Google Docs
Note: Gemini can't suggest custom roles through the
IAM role picker, but you can still get custom role suggestions from
Gemini by using the
Gemini Cloud Assist chat panel. For instructions, see Use
Gemini Cloud Assist in the Google Cloud console in the
Gemini Cloud Assist documentation.
Learn how and when Gemini
for Google Cloud uses your data .
Required Roles
To get the permissions that
you need to use the IAM role picker,
ask your administrator to grant you the
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
IAM role on project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to use the IAM role picker. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to use the IAM role picker:
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Get role suggestions with Gemini assistance
As an early-stage technology, Gemini for Google Cloud
products can generate output that seems plausible but is factually incorrect. We recommend that you
validate all output from Gemini for Google Cloud products before you use it.
For more information, see
Gemini for Google Cloud and responsible AI .
To get role suggestions from Gemini, you can access the
IAM role picker on pages in the Google Cloud console that let you grant access
at the project level. For example, the IAM role picker is
available on the following pages:
The IAM page
The Service Accounts page
The Google Cloud console Dashboard page
The following procedure uses the
IAM page as the primary entry point.
In the Google Cloud console, go to the IAM page.
Go
to IAM
Select a project.
Select a principal to get role suggestions for:
To get role suggestions for a principal who already has other roles on the
resource, find a row containing the principal, and then click edit Edit principal in that row.
To grant a role to a service agent , select the Include
Google-provided role grants checkbox to see its email address.
Note: You cannot edit inherited roles when managing access to a
resource. To edit inherited roles, go to the resource where the
role was granted.
To get role suggestions for a principal who doesn't have any existing roles on the
resource, click person_add Grant
Access , then enter a
principal identifier —for
example,
my-user@example.com or
//iam.googleapis.com/locations/global/workforcePools/example-pool/group/example-group@example.com .
To open the IAM role picker dialog, click Help me choose roles .
In your own words, describe the action you want the principal to perform and
the resource in the project that they need to perform it on.
Click Suggest roles . Based on your input, Gemini suggests
the least permissive predefined roles that it considers appropriate.
To get more information about the roles and why Gemini
suggested them, click Show reasoning . We also recommend using the roles
and permissions reference to validate
Gemini's suggested roles before granting them to the
principal.
Optional: If Gemini doesn't suggest the right roles, you can
refine your prompt.
To modify your prompt, click Edit .
Edit the description and then click Update .
Gemini updates its role suggestions based on the new
description.
To accept the suggestions, click Add roles .
Optional: Add a condition to the role.
Click Save . The principal is granted the role on the resource.
You can grant project-level roles suggested by Gemini directly
from the IAM role picker. For organization-, folder-, or resource-level role
suggestions, note the suggested roles and grant them to the principal at
the appropriate level using the typical process in the Google Cloud console.
For more information about granting roles, see Manage access to projects,
folders, and organizations .
If you don't have the permissions to grant the roles at the organization,
folder, or resource levels, contact your administrator.
Sample use cases
The following table illustrates some example use cases where
Gemini can help you identify the least permissive roles for your
principals.
Use case
Prompt examples
Identifying least-permissive roles necessary to perform a specific task
"What role is required to create, start, and stop VMs?"
"What are the least-privileged IAM roles required to create IAM policies?"
"I need to allow a user to create and manage BigQuery datasets and tables. What role should I assign?"
"I need to grant a service account access to invoke Cloud Run functions. What's the minimal role required?"
"Which role allows a service account to read data from Cloud Storage but not write or delete objects?"
Identifying least-permissive roles necessary to run Google Cloud CLI commands
"What IAM role is required to run the following command: gcloud compute instances create instance-1 --zone=us-central1-a "
"I would like to identify the necessary roles for a service account to execute the following command: gcloud datastore instances describe "
Identifying roles for a task that includes transitive
dependencies
"I need to configure a Compute Engine instance
to automatically scale based on CPU utilization. Which IAM role(s)
should be granted to the service account used by the instance
autoscaler?"
Identifying roles for a task that might require a combination
of multiple granular roles
"Provide users access only to a
particular dataset. We don't want to share the access to all
datasets, and we only allow users to access a particular dataset
within BigQuery. They shouldn't be able to create new datasets or
delete it"
Best practices
To help Gemini provide the most accurate suggestions for your use
case, we recommend that you adhere to the following best practices when drafting
your prompt.
Clearly describe your use case. Avoid using vague language in your
prompts. Be as clear as possible about what actions you want the principal to
perform on which services and resource types.
Do
Don't
Details
"What role is required to execute SQL queries on a BigQuery table and read the data from it?"
"What role is required to execute SQL statements?"
SQL is a generic language used across multiple Google Cloud services. Without specifying the service or actions, Gemini can't suggest a precise role.
"I need roles to start, stop, and reboot Compute Engine virtual machine instances."
"I need to manage my virtual machines."
The term manage is too vague. Manage could mean creating, deleting, updating, or viewing VMs. Clearly listing the specific actions to be performed (start, stop, reboot) and the exact resource type (Compute Engine virtual machine instances) yields more accurate suggestions.
"I need to upload and download objects from a Cloud Storage bucket named example-bucket ."
"Give me access to storage."
The term Storage alone could refer to various services like Cloud Storage, Filestore, or Persistent Disk. In addition, there are no actions specified. Without specifying the service (Cloud Storage), the resource type name ( example-bucket ), or the actions (upload and download objects), Gemini doesn't have enough information to suggest the right roles.
Use official names. Use the official names of Google Cloud services,
resource types, and API operations in your prompt. If you are unsure about the
official names of services, resource types, or API operations, we recommend
consulting the official product documentation.
Do
Don't
Details
"What role do I need to update BigQuery datasets?"
"What role do I need to update Big query datasets?
BigQuery is the official name of the product—not Big query .
"What role is required to create a Cloud Storage bucket in my project?"
"What role is required to create a Storage bucket in my project?"
Storage bucket could refer to different resource types from services like Cloud Storage, Filestore, or Persistent Disk. Specifying the product name and the associated resource type will yield more accurate suggestions.
Troubleshooting
This section describes resolutions for common issues with the IAM role picker.
Gemini suggests roles that you can't grant at the project level
Gemini can suggest roles at all resource levels; however, you can
only use the IAM role picker to grant the project-level roles that are
suggested. When Gemini suggests organization, folder, or
resource-level roles, the IAM role picker indicates that there are
suggested roles that can't be granted and the Add roles button will be
disabled.
When this occurs, you can copy the suggested roles and grant them to the
principal at the appropriate level using the typical process in the
Google Cloud console. For more information on granting roles, see Manage
access to projects, folders, and organizations .
If you don't have the permissions to grant the roles at the organization,
folder, or resource levels, contact your administrator.
What's next
Read Gemini for Google Cloud
overview .
Learn how Gemini for Google Cloud uses your
data .
Learn how to manually find the right predefined roles .
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
עברית
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
