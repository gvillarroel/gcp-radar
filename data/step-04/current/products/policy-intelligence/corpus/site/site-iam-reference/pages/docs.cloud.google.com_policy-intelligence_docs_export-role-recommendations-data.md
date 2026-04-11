---
title: "Export data for role recommendations \_|\_ Policy Intelligence \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/export-role-recommendations-data
  title: "Export data for role recommendations \_|\_ Policy Intelligence \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Export data for role recommendations
Stay organized with collections
Save and categorize content based on your preferences.
The IAM role recommender uses aggregated
IAM access data, collected during the usage of services in
Google Cloud, to provide recommendations. This data is primarily used for
compliance purposes.
This page explains how to export that access data to BigQuery using the
BigQuery Data Transfer Service .
If you want to export a snapshot of your insights and recommendations, see
Export recommendations to
BigQuery .
Before you begin
Enable the IAM, Resource Manager, Recommender, BigQuery, BigQuery Data Transfer Service, and Pub/Sub APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Read about role recommendations .
Required permissions
To get the permissions that
you need to create a data transfer,
ask your administrator to grant you the
following IAM roles:
Data Processing Controls Resource Admin ( roles/dataprocessing.admin )
on your organization
BigQuery Admin ( roles/bigquery.admin )
on the project that you will export data to
To publish notifications for your transfer to an existing Pub/Sub topic:
Pub/Sub Viewer ( roles/pubsub.viewer )
on the project that you will export data to
To publish notifications for your topic to a new Pub/Sub topic:
Pub/Sub Editor ( roles/pubsub.editor )
on the project that you will export data to
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Export aggregated IAM access data
To export your projects' aggregated IAM access history to
BigQuery, use the Transparency and Control Center to set up a data
transfer:
In the Google Cloud console, go to the Privacy & Security page.
Go to Privacy & Security
Select your organization from the drop-down list, then click Select .
Click Transparency & control .
In the Data processing group table, click IAM .
In the Data sources section of the page, click
add Create transfer .
In the Project field, click Browse , then select the project that
you want to export data to. If the project does not have the
BigQuery Data Transfer Service API enabled, click Enable API and wait until the API is
enabled.
Click Next .
Configure the data transfer:
In the Display name field, enter a display name for your data
transfer.
In Schedule options section, choose when the data transfer will start
and how often it will run.
To choose when to start the transfer, you can leave the default value
of Start now , or click Start at a set time .
In the Repeats field, choose an option for how often to run the
transfer. If you choose an option other than Daily, additional options
are available. For example, if you choose Weekly , an option appears
for you to select the day of the week.
For Start date and run time , enter the date and time to start the
transfer. If you choose Start now , this option is disabled.
In the Dataset ID field, choose a BigQuery dataset
to export the data to.
Important: This dataset must have a location of United States (US)
or European Union (EU) . No other regions are supported.
You can export data to an existing dataset, or create a new dataset:
To export data to an existing dataset, click the Dataset ID field,
then select a dataset from the drop-down list.
To export data to a new dataset, click the Dataset ID field, click
Create new dataset , and fill out the fields in the Create
dataset pane:
In the Dataset ID field, enter an ID for the dataset. Letters,
numbers, and underscores are allowed.
From the Data location drop-down list, select either United
States (US) or European Union (EU) .
Optional: Enable table expiration by
selecting Enable table expiration .
Optional: Select an encryption method. The default encryption
method is Google-managed encryption key . If you select
Customer-managed encryption key (CMEK) , you must also select a
customer-managed key .
The transfer you set up will be in the same region as the dataset, and
cannot be moved.
In the project_numbers field, enter the project numbers for the
projects whose aggregated IAM access data you want to
export. If you list multiple project numbers, separate the project
numbers with commas. You can export data for up to 10 projects at a time.
To find a project's number, do the following:
In the Google Cloud console, go to the Settings page.
Go to Settings
Select your project.
Copy the project ID from the Project number field.
Optional: Enable notifications for your transfer:
To enable notifications for failed transfer runs, click the
Email notifications toggle.
When you enable this option, the transfer administrator
receives an email notification when a transfer run fails.
To enable Pub/Sub notifications for your
transfer , click Select a Pub/Sub
topic , then select or create a topic.
Click Done .
If prompted, allow IAM Recommender Aggregated Access Transfers access
to your Google account.
Manage existing data transfers
You can view and manage your transfers in the Transparency and Control Center, or
in BigQuery:
To view all aggregated IAM access data transfers for your
organization, use the Transparency and Control Center:
In the Google Cloud console, go to the Privacy & Security page.
Go to Privacy & Security
Select your organization from the drop-down list, then click Select .
Click Transparency & control .
In the Data processing group table, click IAM . The Data
transfers section of the page lists all aggregated IAM
access data transfers for your organization.
To manage an individual transfer, click the transfer's display name.
To view all data transfers in a project, including aggregated
IAM access data transfers, use BigQuery:
In the Google Cloud console, go to the Data transfers page.
Go to Data transfers
Select the project that you exported data to.
The Data transfers page shows all data transfers for your project,
including aggregated IAM access data transfers.
To manage an individual transfer, click the transfer's display name.
What's next
Learn how to export a snapshot of your recommendations and
insights .
Understand
best practices for using role recommendations .
Find out how to review and apply recommendations .
Learn how to disable role recommendations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
