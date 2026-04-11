---
title: "Viewing and launching solutions \_|\_ Service Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-catalog/docs/view-and-launch
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-catalog/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-catalog/docs/view-and-launch
  title: "Viewing and launching solutions \_|\_ Service Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Service Catalog
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Viewing and launching solutions
In this document, you learn how to view and launch solutions from
Service Catalog.
Before you begin
Note: Starting April 29, 2024, Cloud Build uses Compute Engine service
accounts by default, instead of Cloud Build service accounts. This doesn't
affect any existing Google Cloud projects where Cloud Build is already
enabled. If you enable Cloud Build for a project on or after April 29th,
2024, you or your organization administrator must update your organization
policies or your Compute Engine service accounts to prevent issues. For more
details, see
Cloud Build Service Account Change .
To launch a solution using Service Catalog, you must have either the
Identity and Access Management (IAM) role of
Catalog Consumer OR
IAM Viewer for the
Google Cloud project where the solution has been shared with you. If
you don't have either role for the Google Cloud project, to request
access, contact your Organization Administrator.
If you're deploying a Terraform configuration, you need the following roles
for the Google Cloud project where you want to deploy the Terraform
configuration. If you don't have these roles, to request access, contact the
Project Owner, or someone who has the setIAMpolicy permission for the
project.
Cloud Build Editor
Storage Admin
Viewer
If you plan to use your own service account, you must also have the
Service Account User
role for the Google Cloud project that contains the service account that you
plan to use.
If you're deploying a Terraform configuration, and you choose to use your
own service account, your service account must have the following
IAM roles for the project
where you want to create your solution:
Storage Admin . If
your Terraform config is in a different project, your service account
must also have the role
Storage Object Viewer
for the project containing the Terraform config.
Logs Writer .
Any additional IAM roles required to run your Terraform
config.
If you're deploying a solution using Cloud Deployment Manager, the
Deployment Manager Editor
role for the project where you're deploying the solution. If you don't have
this role, contact the Project Owner OR someone who has the
setIAMpolicy
permission for the project to request access.
If you're launching a Terraform configuration, you must set up
Cloud Build:
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In Google Cloud console, go to the
Cloud Build page.
Select the Settings tab.
Use the service account listed under Service account email: .
If you aren't using your own service account, grant the following
Identity and Access Management (IAM) roles to the Cloud Build service account.
For example, in the sample Terraform configuration file provided in
Creating a Terraform configuration ,
Compute Engine is one of the resources, and the role
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) has
been enabled for the service account.
Note: If you don't provide your own service account,
Service Catalog uses the default Cloud Build service account
settings. For more information, see
Cloud Build Service Account Change .
Grant the
Project Editor
role to the service account for the project where you're deploying the
Terraform configuration.
To manage all of your Terraform state files in Service Catalog,
grant the Storage Admin role to your Cloud Build service account for
the project where the configuration is shared and the project where
you're deploying it. For steps to grant access, see
Configuring access for Cloud Build Service Account .
View Service Catalog solutions
In Service Catalog, you see a union of solutions from all the catalogs you have
access to in your Google Cloud hierarchy.
To view available solutions, go to the Google Cloud console Service Catalog
page. Solutions that have been shared with you appear in the main panel.
Launch a link-based solution
To launch a reference link-based solution:
Go to the Google Cloud console
Service Catalog
page.
Go to the Service Catalog page
Under TYPE , filter by Link and click a solution.
Click Go to link .
This takes you to a link outside of the Google domain where you can download
a solution.
Launch a Deployment Manager (DM)-based solution
To launch a DM-based solution:
Go to the Google Cloud console
Service Catalog
page.
Go to the Service Catalog page
Under TYPE , filter by DM Template and click a solution.
Click Launch on Compute Engine .
If prompted, enable the Deployment Manager API and the
Service Catalog API.
Enabling the APIs takes several minutes to complete, but you only need to do
it once per Google Cloud project (not per solution).
Complete the deployment form.
You must enter the zone parameter manually by specifying the
Compute Engine region and zone
you prefer. Enter the region followed by a dash and then the zone
(without spaces): region-zone . For example, us-central1-a where
us-central1 is the region and a is the zone .
Note: If you use the network parameter in your template and specify
default , the subnetwork must also be set to default .
Click Deploy .
The solution is deployed.
Launch a Terraform configuration
To launch a Terraform configuration:
Go to the Google Cloud console
Service Catalog
page.
Go to the Service Catalog page
Under TYPE , filter by Terraform and click a solution.
Click Deploy .
If prompted, in the window that appears, click Start a new deployment .
If prompted, enable the Cloud Build API.
Enabling the APIs takes several minutes to complete, but you only need to do
it once per Google Cloud project (not per solution).
Create a name for your deployment.
Optionally, you can provide your own service account by clicking the
checkbox next to Select or enter your own service account . If your
service account is located in the same Google Cloud project where you're
creating your solution, select
Select a service account from the current project , and select your
service account from the drop-down menu. If your service account is located
in a different Google Cloud project from your solution, select
Enter a service account email from any project , and enter the email of
your service account.
Note: If you don't provide your own service account, Service Catalog
uses the default Cloud Build service account settings. For more
information, see
Cloud Build Service Account Change .
Fill in the parameters.
Note: For some fields, you must use HashiCorp Configuration Language (HCL) syntax.
Click Preview and deploy .
Review the deployment and click Deploy .
The solution is deployed.
Update a Terraform deployment
For an existing deployment of a Terraform solution, you can update deployment
details, including parameters. If there is a new version of the Terraform
configuration available for the solution, you can
update your deployment to the latest version of the
configuration.
To update an existing deployment:
Go to the Deployments page in Service Catalog.
Go to the Deployments page
In the table of deployments, click the name of the deployment that you want to
update.
On the Deployment Details page, click Update deployment .
Update the deployment details.
Optionally, you can provide your own service account by clicking the
checkbox next to Select or enter your own service account . If your
service account is located in the same Google Cloud project where you're
creating your solution, select
Select a service account from the current project , and select your
service account from the drop-down menu. If your service account is located
in a different Google Cloud project from your solution, select
Enter a service account email from any project , and enter the email of
your service account.
Note: If you don't provide your own service account, Service Catalog
uses the default Cloud Build service account settings. For more
information, see
Cloud Build Service Account Change .
Click Preview and deploy .
Review the deployment and click Deploy .
View and apply the latest version of a configuration
When you manage your Terraform deployments, you can view if the associated
solution has released a newer version of the Terraform configuration and update
the deployment to the latest configuration.
To view if a deployment has available updates and apply the latest version of
the configuration:
Go to the Deployments page in Service Catalog.
Go to the Deployments page
Click View deployments with updates to filter the table of deployments.
In the table, find the deployment that you want to update and click New
Version Available .
On the Deployment Details page, click Update deployment .
Under Select version , select Update to the latest version .
Optionally, you can provide your own service account by clicking the
checkbox next to Select or enter your own service account . If your
service account is located in the same Google Cloud project where you're
creating your solution, select
Select a service account from the current project , and select your
service account from the drop-down menu. If your service account is located
in a different Google Cloud project from your solution, select
Enter a service account email from any project , and enter the email of
your service account.
Note: If you don't provide your own service account, Service Catalog
uses the default Cloud Build service account settings. For more
information, see
Cloud Build Service Account Change .
If prompted, enter values for any additional parameters.
Click Preview and deploy .
Review the deployment and click Deploy .
Deprovision a Terraform deployment
You deprovision a Terraform deployment to permanently delete all of its
resources.
To deprovision a deployment:
Go to the Google Cloud console
Service Catalog
page.
Go to the Service Catalog page
Click Terraform deployments .
In the table, find the deployment you want to deprovision.
Click the more actions menu (displayed as three dots arranged vertically)
more_vert .
Optionally, you can provide your own service account by clicking the
checkbox next to Select or enter your own service account . If your
service account is located in the same Google Cloud project where you're
creating your solution, select
Select a service account from the current project , and select your
service account from the drop-down menu. If your service account is located
in a different Google Cloud project from your solution, select
Enter a service account email from any project , and enter the email of
your service account.
Note: If you don't provide your own service account, Service Catalog
uses the default Cloud Build service account settings. For more
information, see
Cloud Build Service Account Change .
Click Deprovision .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
