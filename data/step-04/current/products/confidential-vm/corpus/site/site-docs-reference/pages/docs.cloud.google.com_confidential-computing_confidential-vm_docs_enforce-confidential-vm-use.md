---
title: "Enforce Confidential VM use \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/enforce-confidential-vm-use
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/enforce-confidential-vm-use
  title: "Enforce Confidential VM use \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Enforce Confidential VM use
Stay organized with collections
Save and categorize content based on your preferences.
To make sure all VM instances created in your organization are Confidential VM
instances, you can use an
organization policy constraint .
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage organization policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies:
orgpolicy.constraints.list
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Enable the constraint
To enable the constraint on VM instances, complete the following instructions:
Console
In the Google Cloud console, go to the Organization policies page:
Go to Organization policies
Click the switcher box at the top of the page, and choose the organization
to apply the constraint to. To apply the constraint to a project, select a
project instead.
In the filter box, enter restrict non-confidential computing , and then
click the Restrict Non-Confidential Computing policy.
On the Policy details page for Restrict Non-Confidential Computing ,
click
edit
Manage policy .
Note: If
edit
Manage policy is disabled, you don't have
permission to set organization policy .
In the Applies to section, click Customize .
In the Policy enforcement section, choose one of the following
options:
Merge with parent. Merge your new policy setting with that of a
parent organization.
Replace. Replace the current policy setting and ignore that of the
parent organization.
In the Rules section, click Add a rule .
In the Policy values box, select Custom , and set the
Policy type to Deny .
In the Custom values box, enter compute.googleapis.com as the
API service name you want to
enforce the policy on.
Click Done .
Click Set policy .
gcloud
gcloud resource-manager org-policies deny \
constraints/compute.restrictNonConfidentialComputing compute.googleapis.com \
--organization = ORGANIZATION_ID
Provide the following value:
ORGANIZATION_ID : The ID of the organization to add the
constraint to.
How to find a Google Cloud organization ID
Console
To find a Google Cloud organization ID, complete the following steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Click the switcher box in the menu bar.
Click the Select from box, and then select your organization.
Click the All tab. The organization ID is shown next to the organization name.
gcloud CLI
You can retrieve a Google Cloud organization ID with the following command:
gcloud organizations describe ORGANIZATION_NAME --format = "value(name.segment(1))"
To apply the constraint at the project level instead of the organization
level, use --project= PROJECT_ID instead of
--organization= ORGANIZATION_ID .
Alternatively, you can set policies with a policy file using
set-policy commands .
Verify the constraint
To verify the constraint:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Click the project selector at the top of the page, and choose a project
to create a VM in.
Click Create instance .
In the Confidential VM service section, verify that your policy is
enforced.
Note: Organization policies can take a moment to propagate. If you don't see
the change, wait a few moments, and then try again.
Disable the constraint
To disable the constraint, complete the following instructions:
Console
In the Google Cloud console, go to the Organization policies page:
Go to Organization policies
Click the switcher box at the top of the page, and choose the organization
to apply the constraint to. To apply the constraint to a project, select a
project instead.
In the filter box, enter restrict non-confidential computing , and then
click the Restrict Non-Confidential Computing policy.
On the Policy details page for Restrict Non-Confidential Computing ,
click
edit
Manage policy .
Note: If
edit
Manage policy is disabled, you don't have
permission to set organization policy .
Click the rule to expand it.
In the Policy values box, select Allow all , and then click
Done .
Click Set policy .
gcloud
gcloud resource-manager org-policies delete \
constraints/compute.restrictNonConfidentialComputing \
--organization = ORGANIZATION_ID
Provide the following value:
ORGANIZATION_ID : The ID of the organization to delete the
constraint from.
How to find a Google Cloud organization ID
Console
To find a Google Cloud organization ID, complete the following steps:
Go to the Google Cloud console.
Go to the Google Cloud console
Click the switcher box in the menu bar.
Click the Select from box, and then select your organization.
Click the All tab. The organization ID is shown next to the organization name.
gcloud CLI
You can retrieve a Google Cloud organization ID with the following command:
gcloud organizations describe ORGANIZATION_NAME --format = "value(name.segment(1))"
To delete the constraint at the project level instead of the organization
level, use --project= PROJECT_ID instead of
--organization= ORGANIZATION_ID .
Alternatively, you can set policies with a policy file using
set-policy commands .
What's next
To learn more about the core concepts of organization policy:
Read the
overview of organization policy .
Read about
what constraints are .
Read about
the available organization policy constraints .
Read how to
use constraints to create organization policies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
