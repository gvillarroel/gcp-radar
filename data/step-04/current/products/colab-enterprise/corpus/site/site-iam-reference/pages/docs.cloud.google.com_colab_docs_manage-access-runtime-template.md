---
title: "Manage access to a runtime template in Colab Enterprise \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/colab/docs/manage-access-runtime-template
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/manage-access-runtime-template
  title: "Manage access to a runtime template in Colab Enterprise \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage access to a runtime template
This page describes how you can grant and revoke access to
a runtime template in Colab Enterprise.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to manage access to a runtime template,
ask your administrator to grant you the
Colab Enterprise Admin ( roles/aiplatform.colabEnterpriseAdmin )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
One or more of the required roles includes the dataform.repositories.list
permission. Users who are granted the dataform.repositories.list permission or the
Code Creator
( roles/dataform.codeCreator ) role in a project can list the
names of code assets in that project by using the Dataform API or the
Dataform command-line interface (CLI). Non-administrators using
BigQuery Studio can only see code assets that they created or that were
shared with them.
Grant access to a runtime template
To grant a principal access to a runtime template, you can use
the Google Cloud console, the Google Cloud CLI, or Terraform.
Console
In the Google Cloud console, go to
the Colab Enterprise Runtime templates page.
Go to Runtime templates
In the Region menu, select the region that contains
your runtime template.
In the Runtime template menu,
select a runtime template. If there aren't any runtime templates listed,
create
a runtime template .
Click
Permissions .
In the Permissions window, click
Add
principal .
In the Grant access dialog,
in the New principals field, enter one or
a comma separated list of principals.
In the Select a role menu, complete the dialog
to assign a role.
Optional: Click add Add
another role , and repeat the last step.
Click Save .
gcloud
Before using any of the command data below,
make the following replacements:
RUNTIME_TEMPLATE_ID : the ID of your runtime template.
PRINCIPAL : the principal to add the binding for.
ROLE : the role name to assign to the principal.
PROJECT_ID : your project ID.
REGION : the region where your runtime template is located.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates add-iam-policy-binding RUNTIME_TEMPLATE_ID \
--member = PRINCIPAL \
--role = ROLE \
--project = PROJECT_ID \
--region = REGION
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates add-iam-policy-binding RUNTIME_TEMPLATE_ID `
--member = PRINCIPAL `
--role = ROLE `
--project = PROJECT_ID `
--region = REGION
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates add-iam-policy-binding RUNTIME_TEMPLATE_ID ^
--member = PRINCIPAL ^
--role = ROLE ^
--project = PROJECT_ID ^
--region = REGION
For more information about managing IAM policies for runtime templates
from the command line, see the gcloud CLI
documentation .
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
For more information, see the
Terraform provider reference documentation .
The following sample uses the
google_colab_runtime_template_iam_policy
Terraform resource to grant access to a Colab Enterprise
runtime template.
data "google_iam_policy" "admin" {
binding {
role = "roles/viewer"
members = [
"user:jane@example.com" ,
]
}
}
resource "google_colab_runtime_template_iam_policy" "policy" {
project = google_colab_runtime_template.runtime-template.project
location = google_colab_runtime_template.runtime-template.location
runtime_template = google_colab_runtime_template.runtime-template.name
policy_data = data.google_iam_policy.admin.policy_data
}
Colab Enterprise principals are users, groups, or domains
You can grant access to users, groups, or domains.
See the following table:
Principal
Example user account
Single user
user@gmail.com
Google group
admins@googlegroups.com
Google Workspace domain
example.com
Revoke access to a runtime template
To revoke access to a runtime template, you can use the Google Cloud console
or the gcloud CLI.
Console
In the Google Cloud console, go to the IAM page.
Go to IAM
Select a project, folder, or organization.
Find the row containing the principal whose access you want to revoke. Then,
click edit Edit principal in that
row.
Note: You cannot edit inherited roles when managing access to a
resource. To edit inherited roles, go to the resource where the
role was granted.
Click the Delete delete button for
the role that you want to revoke, and then click Save .
gcloud
Before using any of the command data below,
make the following replacements:
RUNTIME_TEMPLATE_ID : the ID of your runtime template.
PRINCIPAL : the principal whose access you want to revoke.
ROLE : the role to remove from the principal.
PROJECT_ID : your project ID.
REGION : the region where your runtime template is located.
Execute the
following
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates remove-iam-policy-binding RUNTIME_TEMPLATE_ID \
--member = PRINCIPAL \
--role = ROLE \
--project = PROJECT_ID \
--region = REGION
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates remove-iam-policy-binding RUNTIME_TEMPLATE_ID `
--member = PRINCIPAL `
--role = ROLE `
--project = PROJECT_ID `
--region = REGION
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud colab runtime-templates remove-iam-policy-binding RUNTIME_TEMPLATE_ID ^
--member = PRINCIPAL ^
--role = ROLE ^
--project = PROJECT_ID ^
--region = REGION
For more information about managing IAM policies for runtime templates
from the command line, see the gcloud CLI
documentation .
What's next
To learn how to grant access to a notebook, see Manage access
to a notebook .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
