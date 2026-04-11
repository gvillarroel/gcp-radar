---
title: "Create a scoped access policy \_|\_ VPC Service Controls \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/manage-policies
  title: "Create a scoped access policy \_|\_ VPC Service Controls \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Create a scoped access policy
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to create and delegate scoped access policies.
Before you begin
Read about scoped policies .
Read about granting access to VPC Service Controls .
Note: The access control for scoped policies is independent of the projects or
folders in their scopes. Any Access Context Manager permissions granted on folders or
projects have no effect on scoped policies as permissions can only be granted
at the organization-level or on individual policies.
Make sure that the delegated administrator to whom the scoped access policy
is delegated has the cloudasset.assets.searchAllResources
permission on the folder or the project to which the scoped policy is bound.
This permission is required by the delegated administrator to search all Google Cloud resources.
Read about configuring service perimeters .
Creating a scoped access policy
Create a scoped access policy and delegate administration to folders and projects in the organization.
After you create a scoped access policy, you cannot change the scope of the policy.
To change the scope of an existing policy, delete the policy, and recreate the policy with the new scope.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to VPC Service Controls
If you are prompted, select your organization, folder, or project.
On the VPC Service Controls page, select the access policy that is the
parent of the scoped policy. For example, you can select the default policy
organization policy.
Click Manage policies .
On the Manage VPC Service Controls page, click Create .
On the Create access policy page, in the Access policy name box,
type a name for the scoped access policy.
The scoped access policy name can have a maximum length of 50 characters, must start
with a letter, and can contain only ASCII Latin letters (a-z, A-Z),
numbers (0-9), or underscores ( _ ). The scoped access policy name is case sensitive
and must be unique within an organization's access policy.
To specify a scope for the access policy, click Scopes .
Specify either a project or a folder as the scope of the access policy.
To select a project that you want to add to the scope of the access
policy, do the following:
In the Scopes pane, click Add project .
In the Add project dialog, select that project's checkbox.
Click Done . The added project appears in the Scopes section.
To select a folder that you want to add to the scope of the access policy,
do the following:
In the Scopes pane, click Add folder .
In the Add folders dialog, select that folder's checkbox.
Click Done . The added folder appears in the Scopes section.
To delegate administration of the scoped access policy, click Principals .
To specify the principal
and the role that you want to bind to the access policy, do the following:
In the Principals pane, click Add principals .
In the Add principals dialog, select a principal, such as a user
name or service account.
Select the role that you want to associate with the principal, such
as editor and read roles.
Click Save . The added principal and role appear in the Principals section.
On the Create access policy page, click Create access policy .
gcloud
To create a scoped access policy, use the gcloud access-context-manager policies create
command.
gcloud access-context-manager policies create \
--organization ORGANIZATION_ID [ --scopes = SCOPE ] --title POLICY_TITLE
Where:
ORGANIZATION_ID is the numeric ID of your organization.
POLICY_TITLE is a human-readable title for your policy.
The policy title can have a maximum length of 50 characters, must start
with a letter, and can contain only ASCII Latin letters (a-z, A-Z),
numbers (0-9), or underscores ( _ ). The policy title is case sensitive
and must be unique within an organization's access policy.
SCOPE is the folder or project on which this policy is applicable. You
can specify only one folder or project as the scope, and the scope must exist
within the specified organization. If you don't specify a scope, the policy
applies to the entire organization.
The following output appears (where POLICY_NAME
is a unique numeric identifier for the policy
assigned by Google Cloud):
Create request issued
Waiting for operation [accessPolicies/ POLICY_NAME /create/1521580097614100] to complete...done.
Created.
To delegate administration by binding a principal and role with a scoped access policy, use the add-iam-policy-binding
command.
gcloud access-context-manager policies add-iam-policy-binding \
[ POLICY ] --member = PRINCIPAL --role = ROLE
Where:
POLICY is ID of the policy or fully qualified identifier for the policy.
PRINCIPAL is the principal to add the binding for. Specify in the
following format: user|group|serviceAccount:email or domain:domain .
ROLE is the role name to assign to the principal. The role name
is the complete path of a predefined role, such as roles/accesscontextmanager.policyEditor ,
or the role ID for a custom role, such as
organizations/{ORGANIZATION_ID}/roles/accesscontextmanager.policyEditor .
API
To create a scoped access policy, do the following:
Create a request body.
{
"parent" : " ORGANIZATION_ID " ,
"scope" : " SCOPE "
"title" : " POLICY_TITLE "
}
Where:
ORGANIZATION_ID is the numeric ID of your organization.
SCOPE is the folder or project on which this policy is applicable.
POLICY_TITLE is a human-readable title for your policy.
The policy title can have a maximum length of 50 characters, must start
with a letter, and can contain only ASCII Latin letters (a-z, A-Z),
numbers (0-9), or underscores ( _ ). The policy title is case sensitive
and must be unique within an organization's access policy.
Create the access policy by
calling accessPolicies.create .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies
Response body
If successful, the response body for the call contains an
Operation resource that provides details about the
POST operation.
To delegate administration of the scoped access policy, do the following:
Create a request body.
{
"policy" : " IAM_POLICY " ,
}
Where:
IAM_POLICY is a collection of bindings. A binding binds one
or more members, or principals, to a single role. Principals can be user
accounts, service accounts, Google groups, and domains. A role is a named
list of permissions; each role can be an IAM predefined role or a user-created
custom role.
Delegate the access policy by
calling accessPolicies.setIamPolicy .
POST https://accesscontextmanager.googleapis.com/v1/accessPolicies
Response body
If successful, the response body contains an instance of policy .
What's next
Learn how to manage existing service perimeters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
