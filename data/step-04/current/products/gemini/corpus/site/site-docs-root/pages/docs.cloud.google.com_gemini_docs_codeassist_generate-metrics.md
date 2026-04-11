---
title: "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/generate-metrics
  title: "Generate Gemini Code Assist metrics \_|\_ Gemini for Google Cloud \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Generate Gemini Code Assist metrics
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to generate Gemini Code Assist metrics. For
example, you can generate metrics that report the daily active usage or the
acceptance of code recommendations for a variety of Google Cloud products,
including Cloud Logging, Google Cloud CLI, Cloud Monitoring, and
BigQuery.
If you need to enable and view Gemini for Google Cloud
prompt, response, and metadata logs, see
View Gemini for Google Cloud logs .
Limitations
This page applies specifically to generating metrics for user interactions with
Gemini Code Assist within an IDE.
For information about logging metrics for
Gemini CLI , which
requires you to set up Open Telemetry, see
Gemini CLI telemetry .
Gemini Code Assist on GitHub
doesn't support logging in Google Cloud.
Before you begin
Ensure you have
set up Gemini Code Assist
in your project.
Ensure you have
enabled Gemini for Google Cloud logging
in your project.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
List the number of unique users
The following instructions describe how to use the gcloud CLI to list
the number of unique users of Gemini Code Assist in the most
recent 28-day period:
In a shell environment, ensure that you have updated all installed components
of the gcloud CLI to the latest version:
gcloud components update
Read the log entries for Gemini Code Assist users and usage:
gcloud logging read 'resource.type=cloudaicompanion.googleapis.com/Instance labels.product=~"code_assist"' \
--freshness 28d \
--project PROJECT_ID \
--format "csv(timestamp.date('%Y-%m-%d'),labels.user_id)"
Replace PROJECT_ID with your Google Cloud project ID.
You can use the Unix command uniq to uniquely identify users on a per-day
basis.
The output is similar to the following:
2024-10-30,user1@company.com
2024-10-29,user2@company.com
2024-10-29,user2@company.com
2024-10-29,user2@company.com
2024-10-29,user1@company.com
2024-10-28,user1@company.com
Create a chart that displays daily usage
The following steps show how to use Monitoring to create daily use
graphs that show the aggregate total of daily active Gemini Code Assist
users and the number of their requests per day.
Create a Monitoring metric from your log data that records
the number of Gemini Code Assist users:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the query pane, enter the following query, and then click
Run query :
resource.type="cloudaicompanion.googleapis.com/Instance" AND labels.product="code_assist" AND jsonPayload.@type="type.googleapis.com/google.cloud.cloudaicompanion.logging.v1.ResponseLog"
Note: The default time period value is Last 1 hour , but you can set
it to a longer time period (such as Last 7 days ).
In the toolbar, click Actions , and then select Create metric .
The Create log-based metric dialog appears.
Configure the following metric details:
Ensure the Metric Type is set to Counter .
Name the metric code_assist_example .
Ensure Filter selection is set to point to
the location where your logs are being stored, either Project or
Bucket .
For information about generating Monitoring metrics from
your log data, see
Log-based metrics overview .
Click Create metric .
A success banner is displayed, explaining the metric was created.
In that success banner, click View in Metrics explorer .
Metrics Explorer opens and displays a preconfigured chart.
Note: It may take up to 10 minutes for data to populate on the chart.
For more information, see Metric is missing logs data .
Save the chart to a dashboard:
In the toolbar, click Save chart .
Optional: Update the chart title.
Use the Dashboard menu either to select an existing custom
dashboard or to create a new dashboard.
Click Save chart .
Analyze usage by using BigQuery
The following steps show how to use BigQuery to analyze your
log data.
There are two approaches that you can use to analyze your log data in
BigQuery:
Create a log sink
and export your log data to a BigQuery dataset.
Upgrade the log bucket that stores your log data to use
Observability Analytics ,
and then create a linked BigQuery dataset.
With both approaches, you can use SQL to query and analyze your log data, and
you can chart the results of those queries. If you use Observability Analytics,
then you can save your charts to a custom dashboard. However, there are
differences in pricing. For details, see
Observability Analytics pricing and
BigQuery pricing .
This section describes how to create a log sink to export select log entries
to BigQuery, and it provides a list of sample queries.
If you want to know more about Observability Analytics, see
Query and analyze logs with Observability Analytics
and Query a linked BigQuery dataset .
Create a log sink
In the Google Cloud console, go to the Log Router page:
Go to Log Router
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Select the Google Cloud project in which the log entries that you
want to route originate.
Select Create sink .
In the Sink details panel, enter the following details:
For Sink name , provide an identifier for the sink. After you create
the sink, you can't rename the sink but you can delete it and create a new
sink.
For Sink description , describe the purpose or use case for the sink.
In the Sink destination panel, configure the following details:
For Select sink service , select BigQuery dataset .
For Select BigQuery dataset , create a new BigQuery
dataset and name it code_assist_bq .
Open the Choose logs to include in sink panel, and in the
Build inclusion filter field, enter the following:
resource.type = "cloudaicompanion.googleapis.com/Instance" AND labels.product = "code_assist"
Optional: To verify that you entered the correct filter, select
Preview logs . The Logs Explorer opens in a new tab with the filter
pre-populated.
Click Create sink .
Authorize the log sink to write log entries to the dataset
When you have Owner access to the BigQuery dataset,
Cloud Logging grants the log sink the necessary permissions to write log
data.
If you don't have Owner access or if you don't see any entries in your
dataset, then the log sink might not have the required permissions. To resolve
this failure, follow the instructions in
Set destination permissions .
Queries
You can use the following sample BigQuery queries to generate
user- and aggregate-level data for daily active use and suggestions generated.
Before using the following sample queries, you must obtain the fully qualified
path for the newly created sink . To obtain the path, do the following:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the resources list, locate the dataset named code_assist_bq . This
data is the sink destination .
Select the responses table from beneath the code_assist_bq_dataset , click
the more_vert icon, and then click
Copy ID to generate the dataset ID. Make note of it so that you can use
it in the following sections as the GENERATED_BIGQUERY_TABLE variable.
List individual users by day
SELECT DISTINCT labels . user_id as user , DATE ( timestamp ) as use_date
FROM GENERATED_BIGQUERY_TABLE
ORDER BY use_date
Replace GENERATED_BIGQUERY_TABLE with the fully qualified path of the
BigQuery response table you noted in the
previous steps for creating a sink .
List aggregate users by day
SELECT COUNT ( DISTINCT labels . user_id ) as total_users , DATE ( timestamp ) as use_date
FROM GENERATED_BIGQUERY_TABLE
GROUP BY use_date
ORDER BY use_date
List individual requests per day by user
SELECT COUNT ( * ), DATE ( timestamp ) as use_date , labels . user_id as user
FROM GENERATED_BIGQUERY_TABLE
GROUP BY use_date , user
ORDER BY use_date
List aggregate requests per day by date
SELECT COUNT ( * ), DATE ( timestamp ) as use_date
FROM GENERATED_BIGQUERY_TABLE
GROUP BY use_date
ORDER BY use_date
What's next
Learn more about
Gemini for Google Cloud logging .
Learn more about
Gemini for Google Cloud monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
