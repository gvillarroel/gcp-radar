---
title: "Grant permissions to applications \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/grant-access-applications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/manage-applications
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/grant-access-applications
  title: "Grant permissions to applications \_|\_ App Hub \_|\_ Google Cloud Documentation"
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
Grant permissions to applications
Stay organized with collections
Save and categorize content based on your preferences.
Configure who can access your
App Hub applications by
assigning Identity and Access Management (IAM) roles to principals,
such as users, groups, or service accounts. Applications are contained within
an application management boundary ,
which is a project or a folder of projects, and are managed by a
management project .
You can grant these permissions on the management project to principals in
two ways:
Grant access to all applications in the
boundary.
Grant access to individual applications in the
boundary.
For recommended roles, see Grant application-centric roles to your users .
Grant access to all applications
To grant access to all applications within your application management boundary, assign
an IAM role to a principal on the management project:
Console
In the Google Cloud console, use the project picker to select your
management project.
Navigate to the IAM page.
Go to IAM
Click person_add Grant access .
Enter an identifier for the principal who will get access to all
applications within the boundary. For example,
user@example.com .
From the Select a role drop-down menu, search for the role you want to
assign and click it.
Click Save .
Verify that the principal and the corresponding role are listed in the
IAM page.
gcloud
Find the project ID
of the management project.
Add a policy binding :
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = USER_EMAIL \
--role = ROLE
Replace the following:
PROJECT_ID : the ID of the
management project.
USER_EMAIL : the email address of the user who
will get access to all applications within the boundary, such
as user@example.com .
ROLE : the role that you want to provide to the
user, such as roles/apphub.editor .
Grant access to individual applications
To grant access to individual applications within your
application management boundary , assign an
IAM role to a principal on the application:
Find the project ID
of the management project.
Set a IAM policy :
gcloud apphub applications set-iam-policy APPLICATION_NAME \
--project = PROJECT_ID \
--location = LOCATION \
POLICY_FILE
Replace the following:
APPLICATION_NAME : the name of your application.
The name must include only lowercase alphanumeric characters without
spaces, such as my-application .
PROJECT_ID : the ID of the management project.
LOCATION : the location of the application.
POLICY_FILE : the name of the policy file that
grants the role to the user, such as my-policy.yaml .
The following example of a policy file grants the roles/apphub.editor role to
the user user@example.com :
# policyfile.yaml
bindings :
- role : roles/apphub.editor
members :
- user:user@example.com
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
