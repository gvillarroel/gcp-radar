---
title: "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/creating-managing-organization
  title: "Set up a Google Cloud organization resource \_|\_ Resource Manager \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Set up a Google Cloud organization resource
Stay organized with collections
Save and categorize content based on your preferences.
The organization resource is the root node in the
Google Cloud resource hierarchy
and is the hierarchical super node of projects. This page explains how to
acquire and manage an organization resource.
Note: To streamline setup, Google Cloud will automatically create an organization resource for new Free Trial customers. Additionally, every organization resource will automatically have a set of organization policies enforced on it. For more information, see
Standalone organizations and Managing baseline constraints .
Before you begin
Read an overview
of the organization resource.
Get an organization resource
An organization resource is available for Google Workspace and Cloud Identity customers:
Google Workspace: Sign up for Google Workspace .
Cloud Identity: Sign up for Cloud Identity .
Once you have created your Google Workspace or Cloud Identity account and associated it with a
domain, your organization resource will be automatically created for you. The resource will be
provisioned at different times depending on your account status:
If you are new to Google Cloud and have not created a project yet, the
organization resource will be created for you when you log in to the
Google Cloud console and accept the terms and conditions.
If you are an existing Google Cloud user, the organization resource will
be created for you when you create a new project or billing account. Any projects you created
previously will be listed under "No organization", and this is normal. The organization
resource will appear and the new project you created will be linked to it automatically.
You will need to move any projects you created under "No organization" into your new
organization resource. For instructions on how to move your projects, see
Migrating projects into an organization resource .
The organization resource that is created will be linked to your Google Workspace or
Cloud Identity account with the project or billing account you created set as a child resource.
All projects and billing accounts created under your Google Workspace or Cloud Identity domain
will be children of this organization resource.
For information about how to migrate pre-existing projects, see
Migrating existing projects .
Each Google Workspace or Cloud Identity account is associated with exactly
one organization resource. An organization resource is associated with exactly
one domain, which is set when the organization resource is created.
Important: When the organization resource is created, we communicate its availability to
the Google Workspace or Cloud Identity super admins. These
super administrator accounts should be used carefully because they have a lot of control
over your organization resource and all the resources underneath it. For this reason, we
recommend against using Google Workspace or Cloud Identity super administrator accounts
for day-to-day management of your organization resource. For more information about using
Google Workspace or Cloud Identity super administrator accounts in Google Cloud,
see Super administrator account best practices .
To actively adopt the organization resource, the Google Workspace or
Cloud Identity super admins need to assign the
Organization Administrator
( roles/resourcemanager.organizationAdmin ) Identity and Access Management (IAM) role to a
user or group. For steps on setting up your organization resource, see
Set up your organization resource .
When the organization resource is created, all users in your domain are automatically
granted Project Creator ( roles/resourcemanager.projectCreator ) and
Billing Account Creator ( roles/billing.creator ) IAM roles
at the organization resource level. This enables users in your domain to continue
creating projects with no disruption.
The Organization Administrator will decide when they want to start
actively using the organization resource. They can then change the default
permissions and enforce more restrictive policies as needed.
If the organization resource is available and you don't have the IAM
permissions to view it, you can still create projects and billing accounts.
These are automatically created under the organization resource, even if you
can't see it.
Note: There is a second way to obtain an organization resource: a standalone organization
is automatically created for users when they sign up for a Google Account. For
more information, see the documentation on standalone organizations.
Google Cloud security baseline
Google Cloud security baseline addresses insecure security postures with a bundle of organization
policies that are enforced when an organization resource is created. These
constraints are automatically created and enforced on your organization when it
is created. For information about viewing and managing these constraints,
see Google Cloud security baseline constraints .
Get your organization resource ID
The organization resource ID is a unique identifier for an organization resource and is
automatically created when your organization resource is created. Organization resource
IDs are formatted as decimal numbers, and cannot have leading zeroes.
You can get your organization resource ID using the Google Cloud console,
the gcloud CLI, or the Cloud Resource Manager API.
console
To get your organization resource ID using the Google Cloud console, do
the following:
Go to the Google Cloud console:
Go to the Google Cloud console
From the project picker at the top of the page, select your organization
resource.
On the right side, click More , and then click Settings .
The Settings page displays your organization resource ID.
gcloud
To find your organization resource ID, run the following command:
gcloud organizations list
This command lists all the organization resources to which you belong to,
and their corresponding organization resource IDs.
API
To find your organization resource ID using the Cloud Resource Manager API, use the
organizations.search()
method, including a query for your domain. For example:
GET https://cloudresourcemanager.googleapis.com/v3/organizations:search { query = domain:altostrat.com }
The response contains the metadata of the organization resource that
belongs to altostrat.com , which includes the organization resource ID.
Set up your organization resource
If you're a Google Workspace or Cloud Identity customer, an organization
resource is provided to you automatically.
The Google Workspace or Cloud Identity super administrators are the first
users who can access the organization resource upon creation. All other users or groups
will be able to use Google Cloud as before. They'll be able to see the
organization resource, but they'll only be able to modify it after the correct
permissions are set.
The Google Workspace or Cloud Identity super administrators and the
Google Cloud Organization Administrator are key roles during the setup
process and for lifecycle control for the organization resource. The two roles
are generally assigned to different users or groups, although this depends on
the organization resource's structure and needs.
Google Workspace or Cloud Identity super administrator responsibilities, in
the context of Google Cloud organization resource setup are:
Assigning the Organization Administrator role to some users
Being a point of contact in case of recovery issues
Controlling the lifecycle of the Google Workspace or Cloud Identity
account and organization resource as explained under
Delete an organization
The Organization Administrator , once assigned, can assign Identity and Access Management roles
to other users. The responsibilities of the Organization Administrator role
are:
Defining allow and deny policies and granting roles to other users.
Seeing the structure of the
resource hierarchy
Following the principle of least privilege, this role does not include the
permission to perform other actions, such as creating folders or projects. To
get these permissions, an Organization Administrator must assign additional
roles to their account.
Having two distinct roles ensures separation of duties between the
Google Workspace or Cloud Identity super administrators and the
Google Cloud Organization Administrator. This is
often a requirement as the two Google products are typically managed by
different departments in the customer's organization.
To actively use the organization resource, follow these steps to add an
Organization Administrator :
Add an Organization Administrator
Console
To add an Organization Administrator:
Sign in to the Google Cloud console as a Google Workspace or
Cloud Identity super administrator and navigate to the
IAM & Admin page:
Open the IAM & admin page
Select the organization resource you want to edit:
Click the project drop-down list at the top of the page.
In the Select from dialog, click the organization drop-down list,
and select the organization resource to which you want to add an
Organization Administrator.
On the list that appears, click the organization resource to open its
IAM Permissions page.
Click Add , and then enter the email address of one or more users you
want to set as Organization Administrators.
In the Select a role drop-down list, select Resource Manager
> Organization Administrator , and then click Save .
The Organization Administrator can do the following:
Take full control of the organization resource. Separation of
responsibilities between Google Workspace or Cloud Identity
super administrator and Google Cloud administrator is
established.
Delegate responsibility over critical functions by assigning the
relevant IAM roles.
As explained in getting an organization resource , upon creation,
all users in the domain are granted Project Creator and Billing Account Creator
roles at the organization resource level by default. This ensures that no disruption is
caused to Google Cloud users when the organization resource is created. As the
Organization Administrator takes control, they might want to remove these
organization-level permissions to start locking down access at a finer
granularity (for instance, at the folder or project level). Note that, because
allow and deny policies are inherited down the hierarchy, having
the Project Creator role assigned to the entire domain
( domain:mycompany.com ) at the organization resource level implies that every user
in the domain can create projects anywhere in the hierarchy.
What's next
Manage projects and billing in your organization
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
