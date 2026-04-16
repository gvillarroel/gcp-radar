---
title: "Require continuous validation check-based platform policies for all GKE clusters\
  \ \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/cv-org-policy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/cv-org-policy
  title: "Require continuous validation check-based platform policies for all GKE\
    \ clusters \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Require continuous validation check-based platform policies for all GKE clusters
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to use the Organization Policy Service to require that
GKE clusters use one or more continuous validation (CV) check-based platform
policies. You specify the required check-based platform policies in
custom constraints .
You then enforce the custom constraints in your organization policy.
Costs
This guide uses the following Google Cloud services:
Binary Authorization, but CV is available free of charge during the Preview stage
Organization policies and constraints are offered at no charge.
Before you begin
Enable Binary Authorization .
Set up CV with check-based platform policies
and at least one CV check-based platform policy .
Required roles
To get the permissions that
you need to create constraints and enforce organization policies,
ask your administrator to grant you the
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
IAM role on your Google Cloud organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a CV custom constraint
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
On the Organization policies page, click add
Custom constraint .
If you're prompted to do so, click Switch to parent organization . To
learn more about organizations, see Introduction to the Organization Policy Service
In Constraint details enter the following information in the fields:
Display name: A display name for your constraint, such as
Require a Binary Authorization continuous validation policy for all GKE clusters .
You use the display name to look up the constraint after it is saved.
The display name field has a maximum length of 200 characters
Constraint ID : a constraint ID for your constraint—for example,
RequireBinAuthzCVPolicy .
Description (Optional): a human-friendly description of the
constraint to display as an error message when the policy is violated.
The description field has a maximum length of 2000 characters.
In Enforcement , do the following:
In Resource types , enter container.googleaips.com/Cluster .
In Enforcement method , select Enforce on create and update .
Enter an expression into the Condition field.
This field has a maximum length of 1000 characters. The custom constraint is
enforced when the condition evaluates to true . The condition is as expression
in the Common Expression Language (CEL) syntax . You can
combine expressions with and ( && ) and or ( || ) to create a complex condition.
CEL is a C-like expression language. To learn more about the syntax and
semantics of CEL, see https://github.com/google/cel-spec .
To enter the condition, do the following:
Click edit Edit condition .
Enter an expression to check for the existence of a
CV platform policy.
The following condition requires that a CV platform
policy binding exists and that the platform policy has a specific
name:
resource.binaryAuthorization.policyBindings.exists(policy, policy.name == "projects/ PROJECT_ID /platforms/gke/policies/ POLICY_ID ")
Replace the following:
PROJECT_ID : the project ID of your
platform policy. The project must be in the same organization.
POLICY_ID : the policy ID of your
platform policy.
The following condition requires that two CV platform
policy bindings exist and that each has a specific platform policy name.
resource.binaryAuthorization.policyBindings.exists(policy, policy.name == "projects/ PROJECT_ID1 /platforms/gke/policies/ POLICY_ID1 ") && resource.binaryAuthorization.policyBindings.exists(policy, policy.name == "projects/ PROJECT_ID2 /platforms/gke/policies/ POLICY_ID2 ")
PROJECT_ID1 : the project ID of your
first platform policy. The project must be in the same organization.
POLICY_ID1 : the policy ID of your
first platform policy.
PROJECT_ID2 : the project ID of your
second platform policy.
POLICY_ID2 : the policy ID of your
second platform policy.
Click Save .
In Action , select Allow .
To create your custom constraint, click Create Constraint .
gcloud
Create a YAML file for the custom constraint:
name : organizations/ ORGANIZATION_ID /customConstraints/custom. CONSTRAINT_ID
resource_types : container.googleapis.com/Cluster
method_types :
- CREATE
- UPDATE
condition : > -
CONDITION
action_type : ACTION
display_name : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID—for
example, 123456789 .
CONSTRAINT_ID : a constraint ID—for example,
RequireBinAuthzCVPolicy .
CONDITION : enter an expression to check for
the existence of a CV platform policy.
This field has a maximum length of 1000 characters. The custom constraint is
enforced when the condition evaluates to true . The condition is as expression
in the Common Expression Language (CEL) syntax . You can
combine expressions with and ( && ) and or ( || ) to create a complex condition.
CEL is a C-like expression language. To learn more about the syntax and
semantics of CEL, see https://github.com/google/cel-spec .
The following condition requires that a CV platform
policy binding exists and that the platform policy has a specific
name:
resource.binaryAuthorization.policyBindings.exists(policy, policy.name == "projects/ PROJECT_ID /platforms/gke/policies/ POLICY_ID ")
Replace the following:
PROJECT_ID : the project ID of your
platform policy. The project must be in the same organization.
POLICY_ID : the policy ID of your
platform policy.
The following condition requires that two CV platform
policy bindings exist and that each has a specific platform policy name.
resource.binaryAuthorization.policyBindings.exists(policy, policy.name == "projects/ PROJECT_ID1 /platforms/gke/policies/ POLICY_ID1 ") && resource.binaryAuthorization.policyBindings.exists(policy, policy.name == "projects/ PROJECT_ID2 /platforms/gke/policies/ POLICY_ID2 ")
PROJECT_ID1 : the project ID of your
first platform policy. The project must be in the same organization.
POLICY_ID1 : the policy ID of your
first platform policy.
PROJECT_ID2 : the project ID of your
second platform policy.
POLICY_ID2 : the policy ID of your
second platform policy.
ACTION : the action to take if the condition
is met. This can be either ALLOW or DENY .
DISPLAY_NAME : a human-friendly name for the
constraint—for example, Require a Binary Authorization
continuous validation policy for all GKE clusters .
The display name field has a maximum length of 200 characters
DESCRIPTION : a human-friendly description of
the constraint to display as an error message when the policy is
violated.
The description field has a maximum length of 2000 characters.
Apply the custom constraint:
gcloud org-policies set-custom-constraint CUSTOM_CONSTRAINT_PATH
Replace CUSTOM_CONSTRAINT_PATH with the path of
your custom constraint definition.
Verify that the custom constraint exists:
gcloud org-policies list-custom-constraints \
--organization = ORGANIZATION_ID
The output is similar to the following:
CUSTOM_CONSTRAINT: custom.RequireBinAuthzCVPolicy
ACTION_TYPE: ALLOW
METHOD_TYPES: CREATE,UPDATE
RESOURCE_TYPES: container.googleapis.com/Cluster
DISPLAY_NAME: This cluster requires the continuous validation policy: projects/my-project/platforms/gke/policies/my-policy
To enable enforcement of the custom constraint that you created, create an organization policy .
Use an organization policy to enforce the custom constraint
To enforce the new custom constraint, create an organization policy that
references the constraint, and then apply the organization policy.
Console
To enforce the constraint, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
Select the project picker select the organization.
Search for and select your constraint from the list.
In the Policy details page for that constraint, click
Manage policy .
On the Edit policy page, select Override parent's policy .
Click Add a rule .
In Enforcement , select On .
Optional: Click Test changes to simulate the
effect of this organization policy. For more information, see
Test organization policy changes with Policy Simulator .
To finish and apply the organization policy, click Set policy .
gcloud
Create a YAML policy definition file:
name : organizations/ ORGANIZATION_ID /policies/custom. CONSTRAINT_ID
spec :
rules :
- enforce : true
Replace the following:
ORGANIZATION_ID : the organization ID
CONSTRAINT_ID : the constraint ID
Enforce the policy:
gcloud org-policies set-policy ORG_POLICY_PATH
Replace ORG_POLICY_PATH with the path to your
policy definition file.
Verify that the policy exists:
gcloud org-policies list \
--organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the organization ID.
For a list of arguments, refer to
gcloud org-policies list .
The output is similar to the following:
CONSTRAINT: custom.RequireBinAuthzCVPolicy
LIST_POLICY: -
BOOLEAN_POLICY: SET
ETAG: CN622LIGEIDXnpMB-
The policy can take up to 15 minutes to take effect.
To enforce multiple constraints on CV check-based platform
policies, do the following:
Create one custom constraint per CV
check-based policy.
Update the organization policy with each custom constraint as described in
this section.
Delete the custom constraint
You can delete a custom constraint using the Google Cloud console or the
Google Cloud CLI.
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
Select the project picker at the top of the page.
From the project picker, select your organization.
Search for and select your constraint from the list.
In Constraint details , click delete
Delete .
To confirm you want to delete the constraint, click Delete .
gcloud
To delete a custom constraint, use the org-policies delete-custom-constraint
gcloud CLI command:
gcloud org-policies delete-custom-constraint custom. CONSTRAINT_ID \
--organization = ORGANIZATION_ID
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789
CONSTRAINT_NAME : the name of your custom
constraint
The output is similar to the following:
Deleted custom constraint [organizations/123456789/customConstraints/ CONSTRAINT_NAME ]
After you delete a custom constraint, any policies that have been created using
that constraint continue to exist, but are ignored. You can't create another
custom constraint with the same name as a deleted custom constraint.
What's next
Learn about Organization Policy constraints .
Use the image freshness check
Use the simple signing attestation check
Use the Sigstore signature check
Use the SLSA check
Use the trusted directory check
Use the vulnerability check
View CV logs
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
