---
title: "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing
  title: "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Build ELT pipeline for marketing analytics data
This tutorial shows you how to set up an ELT workflow that extracts, loads,
and transforms marketing analytics data in BigQuery.
A typical ELT workflow periodically extracts new customer data from your data
source and loads it into BigQuery. The unstructured data is then
processed into meaningful metrics. In this tutorial, you create an ELT
workflow by setting up a marketing analytics data transfer by using the
BigQuery Data Transfer Service. Then, you schedule Dataform to run periodic
transformations on the data.
In this tutorial, you use Google Ads as your data source, but you
can use any of the data sources supported by the BigQuery Data Transfer Service .
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
Required roles
To get the permissions that
you need to complete this tutorial,
ask your administrator to grant you the
following IAM roles on the project:
BigQuery Admin ( roles/bigquery.admin )
Dataform Admin ( roles/dataform.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Schedule recurring data transfers
To keep BigQuery up to date with the latest marketing data from
your data source, set up recurring data transfers using the BigQuery Data Transfer Service
to extract and load data on a schedule.
In this tutorial, you use Google Ads as the example data source.
For a full list of data sources supported by the BigQuery Data Transfer Service, see
Supported data
sources .
Go to the Data transfers page in the Google Cloud console.
Go to Data transfers
Click add Create transfer .
In the Source type section, for Source , choose Google Ads .
In the Data source details section:
For Customer ID , enter your Google Ads customer ID.
For Report type , select Standard . The standard report includes
the standard set of reports and fields as detailed in
Google Ads report
transformation .
For Refresh window , enter 5 .
In the Destination settings section, for Dataset , select the
dataset that you created to store your data.
In the Transfer config name section, for Display name , enter Marketing tutorial .
In the Schedule options section:
For Repeat frequency , select Days .
For At , enter 08:00 .
Click Save .
After you save the configuration, the BigQuery Data Transfer Service begins the data
transfer. Based on the settings in the transfer configuration, the data transfer
runs once every day at 8:00 AM UTC and extracts data from
Google Ads from the past five days.
You can monitor ongoing transfer jobs to check
the status of each data transfer.
Query table data
When your data is transferred to BigQuery, the data is
written to ingestion-time partitioned tables. For more information, see
Introduction to partitioned tables .
If you query your tables directly instead of using the auto-generated views, you
must use the _PARTITIONTIME pseudocolumn in your query. For more information,
see Querying partitioned tables .
The following sections show sample queries that you can use to examine your
transferred data.
Campaign performance
The following sample query analyzes Google Ads campaign performance for the past
30 days.
Console
SELECT
c . customer_id ,
c . campaign_name ,
c . campaign_status ,
SUM ( cs . metrics_impressions ) AS Impressions ,
SUM ( cs . metrics_interactions ) AS Interactions ,
( SUM ( cs . metrics_cost_micros ) / 1000000 ) AS Cost
FROM
` DATASET .ads_Campaign_ CUSTOMER_ID ` c
LEFT JOIN
` DATASET .ads_CampaignBasicStats_ CUSTOMER_ID ` cs
ON
( c . campaign_id = cs . campaign_id
AND cs . _DATA_DATE BETWEEN
DATE_ADD ( CURRENT_DATE (), INTERVAL - 31 DAY ) AND DATE_ADD ( CURRENT_DATE (), INTERVAL - 1 DAY ))
WHERE
c . _DATA_DATE = c . _LATEST_DATE
GROUP BY
1 , 2 , 3
ORDER BY
Impressions DESC
bq
bq query --use_legacy_sql = false '
SELECT
c.customer_id,
c.campaign_name,
c.campaign_status,
SUM(cs.metrics_impressions) AS Impressions,
SUM(cs.metrics_interactions) AS Interactions,
(SUM(cs.metrics_cost_micros) / 1000000) AS Cost
FROM
` DATASET .ads_Campaign_ CUSTOMER_ID ` c
LEFT JOIN
` DATASET .ads_CampaignBasicStats_ CUSTOMER_ID ` cs
ON
(c.campaign_id = cs.campaign_id
AND cs._DATA_DATE BETWEEN
DATE_ADD(CURRENT_DATE(), INTERVAL -31 DAY) AND DATE_ADD(CURRENT_DATE(), INTERVAL -1 DAY))
WHERE
c._DATA_DATE = c._LATEST_DATE
GROUP BY
1, 2, 3
ORDER BY
Impressions DESC'
Replace the following:
DATASET : the name of the dataset that you created to
store the transferred table
CUSTOMER_ID : your Google Ads Customer
ID.
Count of keywords
The following sample query analyzes keywords by campaign, ad group, and keyword
status. This query uses the KeywordMatchType function. Keyword match types
help control which searches can trigger your ad. For more information about keyword
matching options, see
About keyword matching options .
Console
SELECT
c . campaign_status AS CampaignStatus ,
a . ad_group_status AS AdGroupStatus ,
k . ad_group_criterion_status AS KeywordStatus ,
k . ad_group_criterion_keyword_match_type AS KeywordMatchType ,
COUNT ( * ) AS count
FROM
` DATASET .ads_Keyword_ CUSTOMER_ID ` k
JOIN
` DATASET .ads_Campaign_ CUSTOMER_ID ` c
ON
( k . campaign_id = c . campaign_id AND k . _DATA_DATE = c . _DATA_DATE )
JOIN
` DATASET .ads_AdGroup_ CUSTOMER_ID ` a
ON
( k . ad_group_id = a . ad_group_id AND k . _DATA_DATE = a . _DATA_DATE )
WHERE
k . _DATA_DATE = k . _LATEST_DATE
GROUP BY
1 , 2 , 3 , 4
bq
bq query --use_legacy_sql = false '
SELECT
c.campaign_status AS CampaignStatus,
a.ad_group_status AS AdGroupStatus,
k.ad_group_criterion_status AS KeywordStatus,
k.ad_group_criterion_keyword_match_type AS KeywordMatchType,
COUNT(*) AS count
FROM
` DATASET .ads_Keyword_ CUSTOMER_ID ` k
JOIN
` DATASET .ads_Campaign_ CUSTOMER_ID ` c
ON
(k.campaign_id = c.campaign_id AND k._DATA_DATE = c._DATA_DATE)
JOIN
` DATASET .ads_AdGroup_ CUSTOMER_ID ` a
ON
(k.ad_group_id = a.ad_group_id AND k._DATA_DATE = a._DATA_DATE)
WHERE
k._DATA_DATE = k._LATEST_DATE
GROUP BY
1, 2, 3, 4'
Replace the following:
DATASET : the name of the dataset that you created to
store the transferred table
CUSTOMER_ID : your Google Ads Customer
ID.
Create a Dataform repository
After you create the data transfer configuration to transfer the latest data
from Google Ads, set up Dataform to regularly
transform your marketing analytics data. Dataform lets you
schedule regular data transformations, and it lets you define these
transformations with SQL while collaborating with other data analysts.
Create a Dataform repository to store the SQLX queries
that make up your transformation code.
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Click add Create repository .
On the Create repository page, do the following:
In the Repository ID field, enter marketing-tutorial-repository .
In the Region list, select a region.
Click Create .
The marketing-tutorial-repository repository now appears in your
Dataform repositories list.
For more information about Dataform repositories,
see About Dataform repositories .
Create and initialize a Dataform development workspace
Create a Dataform development workspace so that you can work on
the transformation code within your repository before you commit and push your
changes to your repository.
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Click marketing-tutorial-repository .
Click add Create development
workspace .
In the Create development workspace window, do the following:
In the Workspace ID field, enter marketing-tutorial-workspace .
Click Create .
The development workspace page appears.
Click Initialize workspace .
The marketing-tutorial-workspace development workspace now appears in your
marketing-tutorial-repository repository under the Development Workspaces
tab, along with two example files in the definitions directory called
*first_view.sqlx and *second_view.sqlx .
For more information about Dataform development workspaces,
see Overview of development workspaces .
Declare your Google Ads table as table source
Connect your newly-transferred Google Ads table to Dataform
by declaring it as a data source by following these following steps:
Create a SQLX file for data source declaration
In Dataform, you declare a data source destination by creating
a SQLX file in the definitions/ directory:
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select marketing-tutorial-repository .
Select marketing-tutorial-workspace .
In the Files pane, next to definitions/ , click the More menu.
Click Create file .
In the Create new file pane, do the following:
In the Add a file path field, after definitions/ , enter the name
definitions/googleads-declaration.sqlx .
Click Create file .
Declare a data source
Edit the definitions/googleads-declaration.sqlx to declare a transferred
Google Ads table as a data source. This example declares the
ads_Campaign table as a data source:
In your development workspace, in the Files pane, click your SQLX file
for data source declaration.
In the file, enter the following code snippet:
config {
type : "declaration" ,
database : " PROJECT_ID " ,
schema : " DATASET " ,
name : "ads_Campaign_ CUSTOMER_ID " ,
}
Define your transformation
Define your data transformations by create a SQLX file in the definitions/
directory. In this tutorial, you create a daily transformation that aggregates
metrics like clicks, impressions, costs, and conversions using a file named
daily_performance.sqlx .
Create the transformation SQLX file
In the Files pane, next to definitions/ , click the
more_vert More menu, and then select Create file .
In the Add a file path field, enter definitions/daily_performance.sqlx .
Click Create file .
Define the transformation SQLX file
In the Files pane, expand the definitions/ directory.
Select daily_performance.sqlx , then enter the following query:
config {
type : "table" ,
schema : "reporting" ,
tags : [ "daily" , "google_ads" ]
}
SELECT
date ,
campaign_id ,
campaign_name ,
SUM ( clicks ) AS total_clicks
FROM
`ads_Campaign_ CUSTOMER_ID `
GROUP BY
date ,
campaign_id ,
campaign_name
ORDER BY
date DESC
Commit and push your changes
After you have made your changes in your development workspace, you can commit
and push these changes to your repository by following these steps:
In the marketing-tutorial-workspace workspace, click Commit 1 change .
In the New commit pane, enter a commit description in the Add a commit
message field.
Click Commit all changes .
In the marketing-tutorial-workspace workspace, click Push to default
branch .
After your changes are successfully pushed to your repository, the Workspace is up to date message appears.
Schedule your data transformation
After you have defined your data transformation file, schedule the data
transformations.
Create a production release
A production release in Dataform ensures that your environment is
consistently updated with the results of your data transformations. The following
steps show you how to specify the main branch of the marketing-tutorial-repository
repository to store your data transformations:
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select marketing-tutorial-repository .
Click the Releases & scheduling tab.
Click Create production release .
In the Create release configuration pane, configure the following
settings:
In the Release ID field, enter transformations .
In the Git commitish field, leave the default value main .
In the Schedule frequency section, select On-demand .
Click Create .
Create a workflow configuration
Once you have created a production release, you can then create a workflow
configuration that runs your data transformations on a specified schedule
in your repository. The following steps show you how to schedule daily
transformations from the transformations file:
In the Google Cloud console, go to the Dataform page.
Go to the Dataform page
Select marketing-tutorial-repository .
Click the Releases & scheduling tab.
In the Workflow configurations section, click Create .
In the Create workflow configuration pane, in the Configuration ID
field, enter transformations .
In the Release configuration menu, select transformations .
Under Authentication , select Execute with user credentials
In the Schedule frequency section, do the following:
1. Select ** Repeat ** .
1. For ** Repeats ** , select `Daily` .
1. For ** At time ** , enter `10:00 AM` .
1. For ** Timezone ** , select `Coordinated Universal Time (UTC)` .
Click Selection of tags .
In the Select tags to execute field, select Daily .
Click Create .
The workflow configuration that you have created runs the entire latest
compilation result created by the transformations release configuration.
Clean up
To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
Delete the dataset created in BigQuery
To avoid incurring charges for BigQuery assets, delete the
dataset called dataform .
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the Explorer panel, expand your project and select dataform .
Click the more_vert Actions menu, and then select
Delete .
In the Delete dataset dialog, enter delete into the field, and then
click Delete .
Delete the Dataform development workspace and configurations
Dataform development workspace creation incurs no costs, but to delete
the development workspace you can follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Click quickstart-repository .
Click the Release & scheduling tab.
Under the Release configurations section, click the
more_vert More menu next to the production
configuration, and then click Delete .
Under the Workflow configurations section, click the
more_vert More menu next to the transformations
configuration, and then click Delete .
In the Development workspaces tab, click the more_vert
More menu by quickstart-workspace , and then select Delete .
To confirm, click Delete .
Delete the Dataform repository
Dataform repository creation incurs no costs, but to delete the
repository you can follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
By quickstart-repository , click the more_vert More menu,
and then select Delete .
In the Delete repository window, enter the name of the repository to
confirm deletion.
To confirm, click Delete .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
