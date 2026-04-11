---
title: "Start a cost estimation \_|\_ Migration Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/migration-center/docs
source_metadata:
  url: https://docs.cloud.google.com/migration-center/docs/estimate/start-estimation
  title: "Start a cost estimation \_|\_ Migration Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migration Center
Guides
Send feedback
Start a cost estimation
Stay organized with collections
Save and categorize content based on your preferences.
To estimate your cloud cost using Migration Center, first you need to
gather some data about your current environment.
On the Estimate cost page, you can start by specifying a name for your
estimate. If you have previously generated an estimate and saved the details in
a Google Sheets file, you can import the field values from the sheet and modify
them as needed to generate another estimate as well.
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
If you access the cost estimation tool from the Migration Center
homepage, you need to activate Migration Center .
If Migration Center is already activated, review the
roles and permissions required
to manage Migration Center.
Alternatively, you can skip the Migration Center activation and go to
rapid cost estimation directly, as shown in this document.
Start an estimate
To skip the Migration Center activation and start your cost estimation,
in the Google Cloud console, go to the Migration Center Estimate
cost page.
Go to Estimate cost
On the Estimate cost page, enter a name for the estimate.
In the Select one or more types of environments to be migrated to Google
Cloud section, click Add to estimate for workload types that
you want to migrate to Google Cloud:
On-premise: select this calculator card to estimate the cost of
migrating your on-premises infrastructure to Google Cloud.
SAP: select this calculator card to estimate the cost of hosting SAP
workloads on Google Cloud.
Data warehousing: select this calculator card to estimate the cost
of running your data analytics and warehousing setup from other cloud
platforms to BigQuery on Google Cloud.
Google Cloud VMware Engine: select this calculator card to estimate
the costs of running the VMware platform as a fully managed service in
Google Cloud.
After you have selected the environments, click Start estimate .
On the Start your estimate page, all the selected workloads are
displayed.
On this page, you can choose to add or remove any workload if you want,
and then start a specific cost estimation.
What's next
Learn how to specify infrastructure details .
Learn how to specify SAP workload requirements .
Learn how to specify data warehousing requirements .
Learn how to specify VMware Engine requirements .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
