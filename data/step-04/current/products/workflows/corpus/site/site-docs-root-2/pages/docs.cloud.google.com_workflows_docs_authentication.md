---
title: "Grant a workflow permission to access Google Cloud resources \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/authentication
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/authentication
  title: "Grant a workflow permission to access Google Cloud resources \_|\_ Workflows\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Guides
Send feedback
Grant a workflow permission to access Google Cloud resources
Stay organized with collections
Save and categorize content based on your preferences.
Workflows uses service accounts to give
workflows access to Google Cloud resources. Service accounts are special
accounts that serve as the identity of a non-person, like a function, an
application, or a VM. They give you a way to authenticate these non-persons. A
service account can be thought of as both an identity and a resource.
When thinking of a service account as an identity , you can grant a role
to a service account, allowing it to access a resource (such as a workflow).
When thinking of a service account as a resource , you can grant roles to
other users to access or manage that service account.
A service account is identified by its email address, which is unique to the
account.
For more information about setting up authentication with a production
application, see
Authenticate as a service account .
Note:
When managing access for users in external identity providers , replace instances of Google Account principal identifiers—like user:kiran@example.com , group:support@example.com , and domain:example.com —with
appropriate Workforce Identity Federation principal identifiers .
Default service account
Every workflow is associated with an Identity and Access Management (IAM) service
account at the time the workflow is created. If you don't specify a service
account during the workflow's creation, the workflow uses the default
Compute Engine service account for its identity. You can verify a workflow's
associated service account. In this document, see
Verify a workflow's associated service account .
We recommend using the default service account for testing and development
only. For production environments, we strongly recommend creating a new
service account and granting it one or more IAM roles that
contain the minimum permissions required
for managing workflows.
The only roles required by your service account are those required to access
the resources orchestrated by your workflows. For more information, in this
document, see
Service account permissions .
Note:
Depending on your organization policy configuration, the default service account might
automatically be granted the Editor role on your
project. We strongly recommend that you disable the automatic role grant by
enforcing the iam.automaticIamGrantsForDefaultServiceAccounts organization policy
constraint . If you created your organization after May 3, 2024, this
constraint is enforced by default.
If you disable the automatic role grant, you must decide which roles to grant to the default
service accounts, and then grant these
roles yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Service account permissions
Because service accounts are identities, you can let a service account access
resources in your project by granting it a role, just like you would for any
other principal. For example, if you want to let your workflow send logs to
Cloud Logging, make sure the service account executing the workflow has
been granted a role that includes the logging.logEntries.create permission
(for example, the Logs Writer role). In general, the roles required by your
service account depend on the resources you are orchestrating with your
workflows. To determine which roles are required, review the product
documentation for the resource you're orchestrating, or
choose predefined roles .
Note that the workflow service account does not require the workflows.invoker
role, unless the workflow invokes itself or other workflows (that is, creates
new workflow executions). For more information, see
Invoke Workflows .
For more information on granting roles to principals, including service accounts,
see Manage access to projects, folders, and organizations .
Attaching service accounts to resources
To create a resource and attach a service account, you need permissions to
create that resource and to attach the service account to the resource.
Permission to attach the service account to a resource is provided by any role
that includes the iam.serviceAccounts.actAs permission.
For more information, see
Roles for service account authentication .
Invoke Cloud Run functions
In Cloud Run functions, invocation permissions are available by
managing the underlying Cloud Run service. If your workflow is invoking
a Cloud Run functions service, you don't need to grant the caller's
service account the Cloud Functions Invoker
( roles/cloudfunctions.invoker ) role. Instead, you must grant the
Cloud Run Invoker ( roles/run.invoker ) role.
For more information, see
Compare Cloud Run functions .
Deploy a workflow with a custom service account
You can create your own user-managed service account to give you greater
flexibility in controlling access to your workflow.
Create your service account
and note its name.
Grant the service account
the appropriate roles ,
based on what resources the workflow must access to do its work.
Ensure that all principals who deploy workflows have the ability to attach
the service account to resources. If you created the service account, you are
automatically granted this permission. For more information, see Roles for
service account authentication .
To get the permission that
you need to attach a service account to a resource,
ask your administrator to grant you the
Service Account User ( roles/iam.serviceAccountUser )
IAM role on your project or the service account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
iam.serviceAccounts.actAs
permission,
which is required to
attach a service account to a resource.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Grant the role on the project:
gcloud projects add-iam-policy-binding WORKFLOWS_PROJECT_ID \
--member = PRINCIPAL \
--role = 'roles/iam.serviceAccountUser'
Or, grant the role on the service account:
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_RESOURCE_NAME \
--member = PRINCIPAL \
--role = 'roles/iam.serviceAccountUser'
Replace the following:
WORKFLOWS_PROJECT_ID : your Google Cloud project
ID that contains the workflow resources
PRINCIPAL : an identifier for the workflow deployer
in the format user|group|serviceAccount:email or
domain:domain . For example:
user:test-user@gmail.com
group:admins@example.com
serviceAccount:test123@example.domain.com
domain:example.domain.com
SERVICE_ACCOUNT_RESOURCE_NAME : the full resource
name of the service account. For example:
projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com
Where:
SERVICE_ACCOUNT_PROJECT_ID is the Google Cloud
project ID that contains the service account.
SERVICE_ACCOUNT_NAME is the name of the service
account.
Deploy your workflow
using the custom service account.
Deploy a workflow with a cross-project service account
By default, you cannot create a service account in one project and attach it to
a resource in another project. The following instructions show you how to attach
a service account in one project to a workflow in another project. You can then
use the service account across different projects to deploy a workflow.
If the service account and the workflow resources are in different projects,
from the project where the service account is located, complete the following:
In the Google Cloud console, go to the Organization policies page:
Go to Organization policies
Check the organization policy
for the project and ensure that the
iam.disableCrossProjectServiceAccountUsage boolean constraint is not
enforced for the project. For more information, see
Enable service accounts to be attached across projects .
Create your service account
and note its name.
Grant the service account
the appropriate roles ,
based on what resources the workflow must access to do its work.
Grant the Service Account Token Creator role
( roles/iam.serviceAccountTokenCreator ) to the Workflows
service agent. This permits the service agent to manage the cross-project
access for the service account. A service agent is the identity of a given
Google Cloud service for a particular project. For more information, see
Service agents .
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create to create a workflow or select the name of the workflow that
you want to update.
In the Service account list, click Switch project .
Select a service account from a different project.
If prompted, grant the roles/iam.serviceAccountTokenCreator role to
the Workflows service agent.
gcloud
Grant the roles/iam.serviceAccountTokenCreator role to the
Workflows service agent:
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_RESOURCE_NAME \
--member = 'serviceAccount:service- WORKFLOWS_PROJECT_NUMBER @gcp-sa-workflows.iam.gserviceaccount.com' \
--role = 'roles/iam.serviceAccountTokenCreator'
Replace the following:
SERVICE_ACCOUNT_RESOURCE_NAME : the full
resource name of the service account. For example:
projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com
Where:
SERVICE_ACCOUNT_PROJECT_ID is the
Google Cloud project ID that contains the service account.
SERVICE_ACCOUNT_NAME is the name of the
service account.
WORKFLOWS_PROJECT_NUMBER : the
Google Cloud project number that contains the workflow resources.
Ensure that all principals who deploy workflows have the ability to attach
the service account to resources. If you created the service account, you are
automatically granted this permission. For more information, see Roles for
service account authentication .
To get the permission that
you need to attach a service account to a resource,
ask your administrator to grant you the
Service Account User ( roles/iam.serviceAccountUser )
IAM role on your project or the service account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains the
iam.serviceAccounts.actAs
permission,
which is required to
attach a service account to a resource.
You might also be able to get
this permission
with custom roles or
other predefined roles .
Console
In the Google Cloud console, go to the Workflows
page:
Go to Workflows
Click add
Create to create a workflow or select the name of the workflow that
you want to update.
In the Service account list, click Switch project .
Select a service account from a different project.
If prompted, grant the roles/iam.serviceAccountUser role on the
project.
gcloud
Grant the role on the project:
gcloud projects add-iam-policy-binding WORKFLOWS_PROJECT_ID \
--member = PRINCIPAL \
--role = 'roles/iam.serviceAccountUser'
Or, grant the role on the service account:
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_RESOURCE_NAME \
--member = PRINCIPAL \
--role = 'roles/iam.serviceAccountUser'
Replace the following:
WORKFLOWS_PROJECT_ID : your Google Cloud
project ID that contains the workflow resources
PRINCIPAL : an identifier for the workflow
deployer in the format user|group|serviceAccount:email
or domain:domain . For example:
user:test-user@gmail.com
group:admins@example.com
serviceAccount:test123@example.domain.com
domain:example.domain.com
SERVICE_ACCOUNT_RESOURCE_NAME : the full
resource name of the service account. For example:
projects/ SERVICE_ACCOUNT_PROJECT_ID /serviceAccounts/ SERVICE_ACCOUNT_NAME @ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com
Where:
SERVICE_ACCOUNT_PROJECT_ID is the
Google Cloud project ID that contains the service account.
SERVICE_ACCOUNT_NAME is the name of the
service account.
Deploy your workflow
using the cross-project service account.
Verify the service account associated with a workflow
You can verify which service account is associated with a particular workflow.
Console
In the Google Cloud console, go to the Workflows page:
Go to Workflows
On the Workflows page, click the workflow
name.
On the Workflow Details page, click the Details tab.
The workflow's associated service account is displayed.
gcloud
Open a terminal.
Enter the following command:
gcloud workflows describe MY_WORKFLOW
Replace MY_WORKFLOW with the name of your
workflow.
A full workflow description including the associated service account is
returned. For example:
createTime: '2020-06-05T23:45:34.154213774Z'
name: projects/myProject/locations/us-central1/workflows/myWorkflow
serviceAccount: projects/my-project/serviceAccounts/012345678901-compute@developer.gserviceaccount.com
sourceContents: [...]
What's next
Manage access to projects, folders, and organizations
Make authenticated requests from a workflow
Workflows roles and permissions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
