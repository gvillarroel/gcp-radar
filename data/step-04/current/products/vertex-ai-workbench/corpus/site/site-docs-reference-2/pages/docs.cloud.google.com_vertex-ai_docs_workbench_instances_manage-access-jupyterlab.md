---
title: "Manage access to a Vertex AI Workbench instance's JupyterLab interface \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab
  title: "Manage access to a Vertex AI Workbench instance's JupyterLab interface \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Vertex AI Workbench
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage access to an instance's JupyterLab interface
This page describes how to grant access to the JupyterLab interface
of a Vertex AI Workbench instance.
You control access to a Vertex AI Workbench instance's
JupyterLab interface through the instance's access mode.
You set a JupyterLab access mode when you create
a Vertex AI Workbench instance.
The access mode can't be changed after the notebook is created.
The JupyterLab access mode determines who can use
the instance's JupyterLab interface.
The access mode also determines which credentials are used when
your instance interacts with other Google Cloud services.
Access limitations
Granting a principal access to
a Vertex AI Workbench instance's JupyterLab interface
doesn't grant access to the instance itself. For example,
to start, stop, or reset an instance, you must grant the principal
access to perform those operations by setting an
IAM policy on the instance.
To grant access to the Vertex AI Workbench instance,
see Manage access to
a Vertex AI Workbench instance .
JupyterLab access modes
Vertex AI Workbench instances support the
following access modes:
Single user only : The Single user only access mode
grants access only to the user that you specify.
Service account : The Service account access mode
grants access to a service account. You can grant access to one or more
users through this service account.
Note: To grant access to the instance through the single user option
or the service account, you must use an individual's
user account email address. Group access is not supported.
Single user only
When you create a Vertex AI Workbench instance
with Single user only access, you specify a user account.
The specified user account is the only user with access to
the JupyterLab interface. If the specified user is not the creator of the
instance, you must grant the specified user the
Service Account User role
( roles/iam.serviceAccountUser ) on the instance's service account. If the
instance needs to access other Google Cloud resources, this
service account
must also have access to those Google Cloud resources.
Note: When you create a Vertex AI Workbench instance
with Single user only access, your instance completes the boot process
using the Compute Engine default service account.
Your specified user account can access the instance after the boot process
is finished.
Grant access to a single user
To grant access to a single user, complete the following steps.
Create
a Vertex AI Workbench instance
with the following specifications:
In the Create instance dialog, in
the IAM and security section, select the Single user only access mode.
In the User email field, enter the user account that you want
to grant access.
Complete the rest of the dialog, and then click Create .
Service account
When you create a Vertex AI Workbench instance
with Service account access, you specify a service account. If
the instance needs to access
other Google resources, this service account must have access to those
Google resources also.
When you specify a service account,
choose one of the following:
Select the Compute Engine default service account.
Specify a custom service account. The custom service account must be
in the same project as your Vertex AI Workbench instance.
To create the instance, you must have
the iam.serviceAccounts.actAs permission on the service account.
To grant access to users through a service account,
you grant the iam.serviceAccounts.actAs permission on
the specified service account for each user who needs
to access JupyterLab.
Grant access to multiple users through a service account
Create
a Vertex AI Workbench instance
with the following specifications:
In the Create instance dialog, in
the IAM and security section, select the Service account access mode.
Choose the Compute Engine default service account
or a custom
service account .
To use the Compute Engine default service account,
select Use Compute Engine default service account .
To use a custom service account, clear
Use Compute Engine default service account , and then,
in the Service account email field, enter
your custom service account email address.
Complete the rest of the dialog, and then click Create .
For each user who needs to access JupyterLab,
grant the iam.serviceAccounts.actAs permission on your
service account .
Access mode metadata
The access mode that you configure during
Vertex AI Workbench instance creation
is stored in the notebook metadata.
When you select the Single user only access mode,
Vertex AI Workbench stores a value for proxy-mode and proxy-user-mail .
The following are examples of single user access metadata entries:
proxy-mode=mail
proxy-user-mail=user@example.com
When you select the Service account access mode, Vertex AI Workbench
stores a proxy-mode=service_account metadata entry.
Caution: Changing the access mode metadata is not supported and can make the
JupyterLab interface inaccessible.
What's next
Grant a principal access to
a Vertex AI Workbench instance.
To learn how to grant access to other Google resources, see
Manage access to
other resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
