---
title: "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/geography_functions
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers
  title: "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Schedule a Comparison Shopping Service Center Transfer
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center
transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .
This document shows you how to schedule and manage recurring load jobs for
CSS Center reporting data using the BigQuery Data Transfer Service .
Before you begin
Before you create a CSS Center data transfer:
Enable the BigQuery Data Transfer Service .
Create a BigQuery dataset
to store the CSS Center data.
For dataset region, we support using the default option, Multi-region, in
either US or EU.
If you want to create a dataset in a specific region, the CSS Center
data transfer is only supported in the following regions:
us-east4 (Northern Virginia) ,
asia-northeast1 (Tokyo) ,
asia-southeast1 (Singapore) ,
australia-southeast1 (Sydney) ,
europe-north1 (Finland) ,
europe-west2 (London) ,
europe-west6 (Zurich) .
You must have your CSS domain ID in order to create a CSS Center data transfer.
If you intend to setup transfer run notifications for Pub/Sub, you
must have pubsub.topics.setIamPolicy permissions. Pub/Sub
permissions are not required if you only set up email notifications. For more
information, see
BigQuery Data Transfer Service Run Notifications .
Required permissions
Ensure that you have granted the following permissions.
Required BigQuery roles
To get the permissions that
you need to create a BigQuery Data Transfer Service data transfer,
ask your administrator to grant you the
BigQuery Admin ( roles/bigquery.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a BigQuery Data Transfer Service data transfer. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a BigQuery Data Transfer Service data transfer:
BigQuery Data Transfer Service permissions:
bigquery.transfers.update
bigquery.transfers.get
BigQuery permissions:
bigquery.datasets.get
bigquery.datasets.getIamPolicy
bigquery.datasets.update
bigquery.datasets.setIamPolicy
bigquery.jobs.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
For more information, see Grant bigquery.admin access .
Required CSS Center roles
You must have access to the CSS Center account that is used in the transfer
configuration.
Set up a CSS Center transfer
To create a data transfer for CSS Center reporting:
Console
Go to the Data transfers page in the Google Cloud console.
Go to Data transfers
Click add Create transfer .
On the Create Transfer page:
In the Source type section, for Source , choose
Google CSS Center .
In the Transfer config name section, for Display name , enter a
name for the data transfer such as My Transfer . The transfer name can
be any value that lets you identify the transfer if you need to modify
it later.
The Schedule options section is not configurable. CSS Center
data transfers are scheduled to run once every 24 hours.
In the Destination settings section, for Destination dataset ,
choose the dataset that you created to store your data.
In the Data source details section, for CSS ID , enter your CSS
domain ID.
Select the report(s) that you would like to transfer. See
Supported reports
for more details.
(Optional) In the Notification options section:
Click the toggle to enable email notifications. When you enable this
option, the transfer administrator receives an email notification
when a transfer run fails.
For Select a Pub/Sub topic , choose your
topic name or click Create a topic .
This option configures Pub/Sub run
notifications for your
data transfer.
Click Save .
bq
Enter the bq mk command and supply the transfer creation flag —
--transfer_config . The following flags are also required:
--data_source
--target_dataset
--display_name
--params
You can also supply the --project_id flag to specify a particular
project. If --project_id isn't specified, the default project is used.
bq mk \
--transfer_config \
--project_id = project_id \
--target_dataset = dataset \
--display_name = name \
--params = ' parameters ' \
--data_source = data_source
Where:
project_id is your project ID.
dataset is the target dataset for the data transfer configuration.
name is the display name for the data transfer configuration. The
transfer name can be any value that lets you identify the
transfer if you need to modify it later.
parameters contains the parameters for the created data transfer
configuration in JSON format. For example:
--params='{"param":"param_value"}' .
css_id : the CSS domain ID.
export_products : whether or not to transfer product
and product issues data. This parameter is included by default, even if
you don't specify the export_products parameter. We recommend
that you include this parameter explicitly and set it to true .
data_source is the data source — css_center .
Caution: You cannot configure notifications by using the
command-line tool.
For example, the following command creates a CSS Center data transfer
named My Transfer using CSS domain ID 1234 and target dataset
mydataset . The data transfer is created in your default project.
bq mk \
--transfer_config \
--target_dataset = mydataset \
--display_name = 'My Transfer' \
--params = '{"css_id":"1234","export_products":"true","export_regional_inventories":"true","export_local_inventories":"true","export_price_benchmarks":"true","export_best_sellers":"true"}' \
--data_source = css_center
The first time you run the command, you receive a message like the
following:
[URL omitted] Please copy and paste the above URL into your web browser and
follow the instructions to retrieve an authentication code.
Follow the instructions in the message and paste the authentication code on
the command line.
API
Use the projects.locations.transferConfigs.create
method and supply an instance of the TransferConfig
resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
