---
title: "Prerequisites \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/deployment-prerequisites
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/deployment-prerequisites
  title: "Prerequisites \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Cortex Framework
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Prerequisites
This page describes the prerequisites required for deploying
Cortex Framework Data Foundation solution content. Take some time to
familiarize yourself with these resources before proceeding.
Understand your business needs
Consider your business goals and requirements, and the data sources needed to
support them. When deploying Cortex Framework content you will want to
understand which data sources and workloads are required to meet your business
needs and are relevant for deployment.
Review available workloads and data sources
View compatible workloads and data sources that Cortex Framework supports
in Data Sources and workloads . Become
familiar with the type of data you want to work with (for example, data from
Salesforce, SAP, or other data sources).
Brush up on basic knowledge
Get familiar with some key Google Cloud services and components needed:
Google Cloud console
Cloud Shell
Cloud Shell Editor
BigQuery
Cloud Build
Identity and Access Management
Cloud Composer
Apache Airflow
Dataflow
Workflows
Colab Enterprise
Learn about Change Data Capture (CDC) for tracking updates to your data. For
more information, see the CDC guide .
Explore the repository
The prerequisites outlined on this page are specifically designed for
deploying Cortex Framework Data Foundation content from the
official GitHub repository .
This repository contains essential resources to deploy Cortex Framework,
including configuration files, Entity Relationship Diagrams (ERD), and predefined
data models.
Select or create a project
Deploying Cortex Framework Data Foundation solution content
involves the following projects:
Source project: Project where your raw data lives. You need at least one
Google Cloud project to store data and run the deployment process.
Target project (optional): Project where Cortex Framework
Data Foundation stores its processed data models. This can be the same as
the source project, or a different one depending on your needs.
If you want to have separate sets of projects and datasets for each
workload (for example, one set of source and target projects for
SAP and a different set of target and source projects for Salesforce),
run separate deployments for each workload. For more information, see
Using different projects to segregate access
in the optional steps section.
To select or create a project, do the following:
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Get the required roles
To get the permissions that
you need to deploy Cortex Framework Data Foundation solution content,
ask your administrator to grant you the
following IAM roles on your source project and target project:
BigQuery Job User ( roles/bigquery.jobUser )
BigQuery Data Editor ( roles/bigquery.dataEditor )
Create Service Accounts ( roles/iam.serviceAccountCreator )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Project Reader ( roles/reader )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
Storage Object Viewer ( roles/storage.objectViewer )
Storage Admin ( roles/storage.admin )
Cloud Build Editor ( roles/cloudbuild.builds.editor )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Next steps
After reviewing these prerequisites, you are ready to move on to deployment:
Establish workloads .
Clone repository .
Determine integration mechanism .
Set up components .
Configure deployment .
Execute deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
