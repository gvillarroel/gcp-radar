---
title: "Export and read your carbon footprint using an API \_|\_ Carbon Footprint\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/carbon-footprint/docs/api
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/carbon-footprint/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/carbon-footprint/docs/api
  title: "Export and read your carbon footprint using an API \_|\_ Carbon Footprint\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Costs and usage management
Carbon Footprint
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Export and read your carbon footprint using an API
Carbon Footprint does not have a dedicated public API.
However, you can export your carbon footprint via the BigQuery Data Transfer Service API
and then query the data using the BigQuery API.
Using the BigQuery Data Transfer Service API
To call the BigQuery Data Transfer Service API, you can use the provided
client libraries or call the
REST API directly.
The documentation below describes how to create Carbon Footprint
transfer configs and backfills using the REST API. However, for
convenience you may prefer to make the equivalent API calls using the client
library in your language of choice.
Create an export via REST API
Call the transferConfigs.create endpoint
of the BigQuery Data Transfer Service API to create a transfer, using the following
payload:
{
"dataSourceId" : "61cede5a-0000-2440-ad42-883d24f8f7b8" ,
"displayName" : " NAME " ,
"params" : {
"billing_accounts" : " BILLING_ACCOUNT_IDS "
},
"destinationDatasetId" : " DATASET "
}
Replace:
NAME with your transfer config name. For example: "Company Carbon
Report"
BILLING_ACCOUNT_IDS with your billing account ID. This value can be a
comma-separated list of billing account IDs. For example:
XXXXXX-XXXXXX-XXXXXX,XXXXXX-XXXXXX-XXXXXX
DATASET with the destination BigQuery dataset ID in the
current project. For example: company_carbon_report
Once the transfer config is created, carbon data will automatically be exported
on the 15th of the month for all future months. To export historical data, see
below.
Run a backfill of historical data via REST API
To export historical carbon data for an existing transfer config (see above),
you must request a backfill on your transfer config.
To create a backfill, send a POST request to the
transferConfigs.startManualRuns
endpoint, using the identifier of the transfer created in the previous step
(for example, projects/0000000000000/locations/us/transferConfigs/00000000-0000-0000-0000-000000000000 )
and the following payload:
{
"requestedTimeRange" : {
"startTime" : "<var>START_TIME</var>" ,
"endTime" : "<var>END_TIME</var>"
}
}
Where:
START_TIME is a timestamp
that specifies the start time of the range to backfill.
For example: 2021-02-15T00:00:00Z .
Note that February 15, 2021 is the earliest date you can specify here,
as it contains the January 2021 data.
END_TIME is a timestamp
that specifies the end time of the range to backfill.
For example: 2022-09-15T00:00:00Z .
You can use the current date.
Query an existing export via API
Before querying the API, write a SQL query that returns the desired data from
the exported dataset. You can test the SQL query in the
BigQuery console .
After you have configured an export to BigQuery ,
use the BigQuery API
or BigQuery libraries to run the
query.
What's next?
Read an overview of the BigQuery APIs and Libraries
Learn more about running interactive and batch queries
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
