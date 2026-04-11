---
title: "Quickstart: Deploy a sample worker pool to Google Cloud with Cloud Run \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run
source_metadata:
  url: https://docs.cloud.google.com/run/docs/quickstarts/workerpools/deploy-workerpool
  title: "Quickstart: Deploy a sample worker pool to Google Cloud with Cloud Run \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Quickstart: Deploy a sample worker pool to Cloud Run
Preview
— Cloud Run worker pools
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page shows you how to deploy a sample worker pool container.
After deploying, the worker pool continually writes a log message.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Review Cloud Run pricing or estimate costs
with the pricing calculator .
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles:
Cloud Run Admin ( roles/run.admin )
on the worker pool
Service Account User ( roles/iam.serviceAccountUser )
on the service identity
Logs Viewer ( roles/logging.viewer )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Deploy worker pool
To deploy the sample worker pool container, follow these steps:
In the Google Cloud console, go to Cloud Run:
Go to Cloud Run
Select Worker pools from the menu, and click Deploy container to
display the Create worker pools form.
Click Test with a sample container .
Click Create to deploy the image to Cloud Run. Wait for the
deployment to finish.
Click the Logs tab to view the logs written by the worker pool.
The worker pool continually writes the log message
Cloud Run Worker Pool instance is running! .
Success: You deployed a sample
worker pool to Cloud Run.
Clean up
To avoid additional charges to your Google Cloud account, delete all the resources
you deployed with this quickstart.
Delete your repository
You might be charged for storing the container image in
Artifact Registry . To delete Artifact Registry repositories,
follow the steps in Delete
repositories in the Artifact Registry
documentation.
Delete your worker pool
The sample worker pool continually writes logs. To stop logging, follow one of these
steps to delete the worker pool:
In the Google Cloud console, go to Cloud Run:
Go to Cloud Run
Select Worker pools from the menu, and select the worker pool you want
to delete.
Click Delete .
Delete your test project
Deleting your Google Cloud project stops billing for all resources in that
project. To release all Google Cloud resources in your project, follow these steps:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
What's next
For more information on worker pools, see:
Deploy worker pools to Cloud Run
Logging and viewing logs
Manually scale worker pools
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
