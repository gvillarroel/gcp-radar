---
title: "Access change propagation \_|\_ Identity and Access Management (IAM) \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/access-change-propagation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/google-identities
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/access-change-propagation
  title: "Access change propagation \_|\_ Identity and Access Management (IAM) \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Access change propagation
Stay organized with collections
Save and categorize content based on your preferences.
In IAM, access changes, such as granting a role or denying a
permission, are eventually consistent . This means that it takes time for access changes to propagate
through the system. In the meantime, recent access changes might not be effective
everywhere. For example, principals might still be able to use a recently
revoked role or a recently denied permission. Alternatively, they might not be
able to use a recently granted role or a permission they were, until recently,
denied from using.
The amount of time it takes for an access change to propagate depends on how you
make the access change:
Method
Examples
Propagation time
Change a policy
Change a principal's access by editing an allow or deny policy.
When making policy changes, you can't exceed the limits on the number of principals allowed in
a policy .
You edit your organization's allow policy to grant a principal the
Organization Administrator role
( roles/resourcemanager.organizationAdmin ).
You edit an organization-level deny policy to deny a principal the
cloudresourcemanager.googleapis.com/ projects.setIamPolicy
permission.
Typically 2 minutes, potentially
7 minutes or longer
Change a group's membership
Change a principal's access by adding or removing them from a
Google group that's included in an allow or deny policy.
You have a group, org-admins@example.com , that is granted
the Organization Administrator role on your organization. You add a
principal to the group to give them the Organization Administrator role.
You have a group, eng@example.com , that is denied the
cloudresourcemanager.googleapis.com/ projects.setIamPolicy
permission at the organization level. You add a principal to the group
to deny them the
cloudresourcemanager.googleapis.com/ projects.setIamPolicy
permission.
Typically several minutes, potentially
hours or longer
Change a nested group's membership
Change a principal's access by adding or removing them from a nested group whose parent group is included in an
allow or deny policy.
You have a group, admins@example.com , that is granted the
Tag Viewer role ( roles/resourcemanager.tagViewer ) on your
organization. This group's membership is made up of a number of other
groups, including org-admins@example.com . You add a
principal to the org-admins@example.com group to give them
the Tag Viewer role.
You have a group, eng@example.com , that is denied the
cloudresourcemanager.googleapis.com/ projects.setIamPolicy
permission at the organization level. This group's membership is made up
of a number of other groups, including
eng-prod@example.com . You add a principal to the
eng-prod@example.com group to deny them the
cloudresourcemanager.googleapis.com/ projects.setIamPolicy
permission.
Typically several minutes, potentially
hours or longer
Also keep in mind the following details for how group membership changes
propagate:
In general, adding a principal to a group propagates faster than removing
a principal from a group.
In general, group membership changes propagate faster than nested
group membership changes.
You can use these propagation time estimates to inform the way you modify your
principals' access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
