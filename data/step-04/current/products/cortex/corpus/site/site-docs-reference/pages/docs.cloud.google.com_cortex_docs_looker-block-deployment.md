---
title: "Deploy Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/cortex/docs/looker-block-deployment
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-one
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/looker-block-deployment
  title: "Deploy Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud\
    \ Documentation"
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
Deploy Looker Blocks
This page describes the steps for installing a prebuilt Looker
block for Cortex Framework located in a public GitHub repository, such as:
SAP for Cortex
Salesforce Sales Cloud (SFDC) for Cortex
Oracle EBS for Cortex
Salesforce Marketing Cloud (SFMC) for Cortex
Meta for Cortex
YouTube (with DV360) for Cortex
Cross Media & Product Connected Insights for Cortex
For deploying the Looker Dashboard for Dun & Bradstreet,
see Looker Studio Dashboard for Dun & Bradstreet .
Prerequisites
To access and use these pre built dashboards, you need to priorly do the
following:
Deploy Cortex Framework : Ensure you have Cortex Framework
set up and configured with your data sources. For more information, see
Cortex Framework prerequisites for deployment .
Access Looker: Access Looker and get familiar
with the platform.
Explore available dashboards : Explore the prebuilt dashboards and the
available insights in the dashboard you would like to deploy. For more
information, see Available Looker Blocks .
After completing the prerequisites, you are ready to install your
Looker Block.
Installation
Looker Blocks use LookML
(Looker Modeling Language) to define the semantic model for
the Looker dashboards. To install the LookML Model that
corresponds to your Cortex data source, use one of the following options:
Option A : Install through Looker Marketplace from a Git URL.
Option B : Install by forking the repository.
The following sections describe the steps for each option.
Option A: Install through Looker Marketplace from a Git URL
The Looker Marketplace is a central
location within Looker for finding, deploying, and managing
Looker Blocks, applications, visualizations, and plug-ins. To
install through Looker Marketplace from a Git URL, follow these steps:
Go to your Looker instance.
Click the Marketplace button on the Looker menu bar storefront .
From the Marketplace menu, select the Manage option.
On the Manage page, select the three-dot Options menu more_vert .
Select Install via Git URL button.
Enter the URL and commit SHA of the chosen repository:
SAP for Cortex
Salesforce Sales Cloud (SFDC) for Cortex
Oracle EBS for Cortex
Salesforce Marketing Cloud (SFMC) for Cortex
Meta for Cortex
YouTube (with DV360) for Cortex
Cross Media & Product Connected Insights for Cortex
Click Install .
Agree and Continue at the terms and conditions dialog.
Enter the required parameters
that corresponds to your data:
Connection Name
Project ID
Reporting Dataset
Click Install .
For more information, see the Looker documentation for
Installing a Tool from a Git URL.
Option B: Install by forking the repository
To install Looker blocks by forking the repository, follow these steps:
Fork the GitHub repository :
Navigate to the GitHub repository for the chosen Looker Block:
SAP for Cortex
Salesforce Sales Cloud (SFDC) for Cortex
Oracle EBS for Cortex
Salesforce Marketing Cloud (SFMC) for Cortex
Meta for Cortex
YouTube (with DV360) for Cortex
Cross Media & Product Connected Insights for Cortex
Click Fork in the top-right corner of the repository.
Create a fork with your username. This creates a copy of the repository
in your GitHub account.
Create a blank LookML project :
Note: For Looker versions prior to 24.20, see
Creating a Blank Project
from the New Project Page -
Verify that you are in Development Mode .
Select Projects from the Develop menu.
From the top left of the LookML Projects page, select
Configure New Model to open the Configure a Model page.
On the Configure a Model page, specify the options for your model:
Model : Name your model with the same name of
the model.lkml file in the repository. For example, name the
model cortex-<datasource> .
Note: Looker enforces unique model names. If a
model with the intended name already exists, an error message
will be displayed. Ensure model name uniqueness to avoid
installation failures.
Project : Name your project. Either name it the same as the
model or specify a different name.
Allowed Connections: Specify which database connections can
be used by the model, or specify that the model is allowed to use
any current or future connections.
Click Save to save the project as a Pending Project .
From the LookML Projects page, locate the new project under the
Pending Projects section.
Click Add LookML to open the New Project page.
On the New Project page, specify the options for your project:
Project Name : Already populated with value specified in prior
step.
Starting Point : Select Blank Project .
Select Create Project . Looker creates the project
and opens it in the Looker IDE .
For more information, see the original Looker documentation
for Generating a LookML model .
Connect the new LookML project to the forked repository : Follow the
steps in the Looker documentation,
Setting up and testing a Git connection .
Update the values of constants in the manifest.lkml file :
Open the manifest.lkml file in your forked repository in Looker.
Locate the constants section and update the values as described in the
Required parameters
section.
Commit and deploy changes to production . With the
Looker project based on your forked repository, you can customize
the LookML to fit your unique business needs. Follow the steps in
Getting your changes to production .
Required parameters
These required values are configured during the Marketplace Installation process
or if this Block was installed from a forked Git repository, you need to
update the values for these constants in the manifest.lkml file for the project.
Parameter
Value
Description
Looker Blocks
Connection Name
Name of the connection
The BigQuery connection
name allowing Looker to query the Cortex REPORTING dataset.
must be enabled.
All
Project ID
Project ID
The Google Cloud project where the
reporting dataset resides in BigQuery. For more information,
see Identifying projects .
All
Reporting Dataset
Name of the dataset for reporting
The deployed Cortex Data Foundation
REPORTING dataset where the data source dataset views reside within the
Google Cloud BigQuery project. Depending on the deployment
settings for the Cortex Data Foundation, this dataset name would typically
be of the pattern ending with _REPORTING .
All
Client
SAP Client number ( mandt )
The SAP Client number ( mandt )
to use for Reporting.
SAP
Sign Change
Yes or No
For Profit and Loss/Income Statement
reporting, revenue is generally displayed in general ledger as a negative
number, which indicates a credit. By setting Sign Change value to Yes ,
it's displayed as a positive number in income statement reports.
SAP
Additional block-specific requirements
Some blocks have specific requirements for its deployment. For more information,
see the block-specific deployment:
Block
Link to Additional Requirements
SAP
Additional specifications for Cortex Framework Looker Block for SAP .
Oracle EBS
Additional specifications for Cortex Framework Looker Block for Oracle EBS .
Extra Resources
For more information about LookML, see the following documentation and training:
Looker Best Practices
Looker Google Cloud Training
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
