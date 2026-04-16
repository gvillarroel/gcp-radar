---
title: "Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/fleet-management
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/use-secure-tags
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/fleet-management
  title: "Managed Service for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Fleet management with custom organization policies
You can use the
Organization Policy Service with
custom constraints to
enforce specific configurations across your organization's Managed Service for Apache Spark
clusters. This centralized approach helps ensure compliance, control costs, and
standardize your Managed Service for Apache Spark fleet.
This guide shows you how to create and enforce a custom organization policy for
Managed Service for Apache Spark clusters. For more information, see the Introduction to
the Organization Policy .
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
Enable the Resource Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
Organization Policy Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Resource Manager API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Make sure that you have the following role or roles on the project:
Organization Policy Administrator
Check for the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
In the Principal column, find all rows that identify you or a group that
you're included in. To learn which groups you're included in, contact your
administrator.
For all rows that specify or include you, check the Role column to see whether
the list of roles includes the required roles.
Grant the roles
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project.
Click person_add Grant access .
In the New principals field, enter your user identifier.
This is typically the email address for a Google Account.
Click Select a role , then search for the role.
To grant additional roles, click add Add
another role and add each additional role.
Click Save .
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Enforce a custom constraint
The following steps show you how to enforce a common security requirement:
ensuring that all new Managed Service for Apache Spark clusters have Kerberos enabled.
Define the custom constraint.
Create a YAML file with the following content:
name : organizations/ ORGANIZATION_ID /customConstraints/custom.dataprocKerberos
resourceTypes :
- dataproc.googleapis.com/Cluster
methodTypes :
- CREATE
condition : "resource.config.securityConfig.kerberosConfig.enableKerberos == true"
actionType : ALLOW
displayName : Cluster must have Kerberos enabled.
Replace ORGANIZATION_ID with your organization
ID.
Set the custom constraint to make it available to your organization.
gcloud org-policies set-custom-constraint CONSTRAINT_PATH
Replace CONSTRAINT_PATH with the path to your
YAML constraint file.
Create an organization policy that enforces the constraint.
Create another YAML file with the following content:
name : projects/ PROJECT_ID /policies/custom.dataprocKerberos
spec :
rules :
- enforce : true
Replace PROJECT_ID with the ID of the project
to apply the policy to. You can also apply this policy at a folder or
organization level.
Apply the policy.
gcloud org-policies set-policy POLICY_PATH
Replace POLICY_PATH with the path to the YAML
policy file.
After you apply the policy, an attempt to create a Managed Service for Apache Spark
cluster in the specified resource without Kerberos enabled fails.
Note: The policy can take up to 15 minutes to propagate.
Use cases for custom constraints
You can create custom constraints to enforce a wide range of policies for your
Managed Service for Apache Spark fleet. Applying fleet policies helps with cost control,
standardization, and security.
Example: You can require specific machine types or prevent public IP addresses
on cluster nodes.
What's next
Read the Introduction to the Organization Policy
Learn more about custom
constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
