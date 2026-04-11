---
title: "Deploy applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/deploy-applications
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/deploy-applications
  title: "Deploy applications \_|\_ Application Design Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Deploy applications
Stay organized with collections
Save and categorize content based on your preferences.
After you create an application draft from a template, you can deploy the
application. When you deploy an application using App Design Center,
your application is automatically registered in App Hub. The deployment
process lets you do the following:
Preview changes that Terraform plans to make to your infrastructure.
Enable Google Cloud resource APIs that are required for your application.
Investigate deployment issues.
Use telemetry data to analyze resource performance.
Identify and apply template revisions to your application.
This document helps you deploy, manage, and apply a template revision to your
application.
Before you begin
You must have one of the following
roles on the app-enabled
folder or management project:
Application Admin ( roles/designcenter.applicationAdmin )
Application Operator ( roles/designcenter.applicationOperator )
To deploy the application with a service account ,
you must have one of the following:
Your own service account that you configured to deploy applications and
underlying resources. For more information, see Grant roles to your service account .
The Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) role on the
app-enabled folder. This role lets you create a new service account during
deployment.
Deploy your application
Select a service account option and deploy your application. When you deploy an
application, Google Cloud resources are created, and you begin to incur charges
associated with those resources.
Design canvas
From the navigation menu, click Applications .
Go to Applications
From the table, click the Application name .
From the Application details page, review the details and click Edit
to make changes.
Note: If you plan to deploy and later delete this application, deploy to
the TEST , DEVELOPMENT , or STAGING Environment .
Click Deploy .
Select one of the following service accounts to deploy your application:
Select a service account : In the Service account field, enter
the name of an existing service account. To configure the service
account, see Grant roles to your service account .
Create a new service account : You must have the Project IAM Admin
( roles/resourcemanager.projectIamAdmin ) role, which is used to assign
the required deployment roles to the service account.
Click Proceed .
To preview the changes that Terraform plans to make to your infrastructure,
do the following:
Click Preview .
Review the changes and click Copy and close . The preview is copied to
your clipboard.
To save the preview, paste and save in a document of your choice.
In the Review APIs area, review the list of APIs that are required for
your application. The APIs are automatically enabled when you deploy.
Click Deploy . The application details and deployment status are
displayed as the deployment completes.
If there are issues with your deployment, do the following:
In the Application details panel, click Deployments .
Review the error messages.
Click View logs to view detailed build information.
Tip: To view a list of applications with deployment issues in
Cloud Hub, see View deployments .
To manage your deployed application, see View application details .
gcloud CLI
Preview the application to view the Terraform code before you deploy.
This operation might require several minutes to complete. Do one of the following:
To automatically create a service account, use the following command:
gcloud design-center spaces applications preview APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--create-sa \
--service-account = SERVICE_ACCOUNT
To use your own service account, use the following command:
gcloud design-center spaces applications preview APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--service-account = SERVICE_ACCOUNT
Replace the following:
APPLICATION : The application ID.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
SERVICE_ACCOUNT : Do one of the following:
To create a new service account, provide a name for the service account.
To use your own service account, provide the full resource name in the format projects/ PROJECT /serviceAccounts/ EMAIL_ADDRESS .
For more information, see gcloud design-center spaces applications preview .
Deploy the application asynchronously and copy the full operation name. Do one
of the following:
Note: To update an existing application, add the --replace flag to the
following deploy commands.
To automatically create a service account, use the following command:
gcloud design-center spaces applications deploy APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--create-sa \
--service-account = SERVICE_ACCOUNT \
--async
To use your own service account, use the following command:
gcloud design-center spaces applications deploy APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--service-account = SERVICE_ACCOUNT \
--async
Replace the following:
APPLICATION : The application ID.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
SERVICE_ACCOUNT : Do one of the following:
To create a new service account, provide a name for the service account.
To use your own service account, provide the full resource name in the format projects/ PROJECT /serviceAccounts/ EMAIL_ADDRESS .
For more information, see gcloud design-center spaces applications deploy .
The deployment requires a few minutes to complete. Track the deployment status.
gcloud design-center operations describe OPERATION \
--project = PROJECT \
--location = LOCATION
Replace the following:
OPERATION : The full operation name copied from
the deploy command output in the format projects/ PROJECT /locations/ LOCATION /operations/operation-<var>OPERATION_ID</var> .
PROJECT : Your management project ID.
LOCATION : The application region.
For more information, see gcloud design-center operations describe .
View application details
When your application deployment finishes, you can examine its related
information. For example, you might view the following:
Details such as last update time, revision date, and region.
Outputs such as service URI.
Deployment status, error information, and links to logs.
To view application details, do the following:
Design canvas
From the navigation menu, click Applications .
Go to Applications
From the table, click the Application name . The Application details
panel displays the following:
View app in App Hub : Investigate your application in
App Hub. You can view deployed resources and examine
telemetry data to diagnose issues and analyze performance. For more
information, see Monitor App Hub
applications .
App Details : View information like the last updated date, source
template, region, and service account.
Outputs : Identify service URIs, which you can use to interact with
your application frontend or backend.
Deployments : Examine the deployment status, deployment errors, and
links to logs to troubleshoot errors.
gcloud CLI
gcloud design-center spaces applications describe APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE
Replace the following:
APPLICATION : The application ID.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces applications describe .
Modify deployed applications
If you want to modify a deployed application, do one of the following to make
sure that your changes are retained when you redeploy the application:
Revise the template and then Apply the template revision
Revise the application
Apply template revisions
If your application was previously deployed using App Design Center,
and an administrator has shared a template revision with you, you can apply the
template changes to your application. When you update your application, an
application revision is created. You can configure components that were modified
or added to the revised template.
You can view available template revisions for your applications using
Cloud Hub. For more information, see View deployments .
To apply template revisions to your application, do the following:
Caution: If you modified an application's components outside of
App Design Center, those changes are not retained when you
redeploy. To retain changes, see Modify deployed applications .
Design canvas
From the navigation menu, click Templates .
Go to Templates
Click the Template ID that contains the revision you want to apply.
From the Configure an app list, select the application that you want to
update.
Edit the application details and click Save .
Click each component in the design canvas, and modify component
configurations.
Click Deploy . For deployment steps, see Deploy your application .
gcloud CLI
Identify the application template revision URI for the latest revision.
gcloud design-center spaces application-templates describe APPLICATION_TEMPLATE \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--format = 'yaml(name,latestRevision)'
Replace the following:
APPLICATION_TEMPLATE : The application template ID that is the basis of your application.
PROJECT : Your management project ID.
LOCATION : The application template region.
SPACE : Your space ID.
For more information, see gcloud design-center spaces application-templates describe .
Copy the latestRevision output.
Update the application to use the application template revision.
gcloud design-center spaces applications update APPLICATION \
--project = PROJECT \
--location = LOCATION \
--space = SPACE \
--source-application-template-revision = SOURCE_APPLICATION_TEMPLATE_REVISION
Replace the following:
APPLICATION : The application ID.
PROJECT : Your management project ID.
LOCATION : The application region.
SPACE : Your space ID.
SOURCE_APPLICATION_TEMPLATE_REVISION : Your application template URI. For example, projects/ PROJECT /locations/ LOCATION /spaces/ SPACE /applicationTemplates/ APPLICATION_TEMPLATE /revisions/ REVISION
For more information, see gcloud design-center spaces applications update .
To configure new or updated components in the application, see Configure components and connections .
When you deploy the application, use the --replace flag. For deployment steps, see Deploy your application .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
