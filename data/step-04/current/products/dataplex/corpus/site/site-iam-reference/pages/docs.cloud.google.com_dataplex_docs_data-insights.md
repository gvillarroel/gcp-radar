---
title: "Access data insights in Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/data-insights
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/data-insights
  title: "Access data insights in Dataplex Universal Catalog \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Guides
Send feedback
Access data insights in Dataplex Universal Catalog
Stay organized with collections
Save and categorize content based on your preferences.
When exploring a new, unfamiliar table, data analysts often face the cold-start
problem of how to get started writing queries. The problem can involve
uncertainties about the data structure and key patterns in the data.
Data insights automatically
generates descriptions, relationship graphs, and SQL queries from your table and
dataset metadata. This information helps you quickly understand data structure,
content, and relationships without extensive manual setup. To
investigate further, you can ask follow-up questions in
data canvas .
The Dataplex Universal Catalog data insights feature offers an automated way to
explore and understand your data. This helps you uncover patterns, assess data
quality, and perform statistical analysis.
Note: To provide feedback on this feature, email
dataplex-data-insights-help@google.com .
Before you begin
Data insights are generated using
Gemini in BigQuery
and can only be generated in BigQuery Studio.
First
set up Gemini in BigQuery ,
then
generate insights in BigQuery .
After you generate insights, you can view them in Dataplex Universal Catalog.
Note: Dataset insights are only available in BigQuery Studio.
Note : Gemini in BigQuery is part
of Gemini for Google Cloud and doesn't support the
same compliance and security offerings as BigQuery.
You should only set up Gemini in BigQuery
for BigQuery projects that don't require
compliance offerings that aren't supported by Gemini for Google Cloud .
For information about how to turn off or prevent access to
Gemini in BigQuery, see
Turn off Gemini in BigQuery .
Required roles
To get read-only access to the generated insights, ask your administrator
to grant you the following IAM role:
Dataplex DataScan DataViewer ( roles/dataplex.dataScanDataViewer )
on the project containing the BigQuery tables for which you want to
view insights.
For more information about granting roles, see
Manage access to projects, folders, and organizations .
You might also be able to get the required permissions through
custom roles or other
predefined roles . To see the exact permissions
that are required generate insights, expand the Required permissions
section:
Required permissions
dataplex.datascans.get
dataplex.datascans.getData
Enable APIs
To use data insights, enable the following APIs in your project:
Dataplex API, BigQuery API, and Gemini for Google Cloud API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
For more information about enabling the Gemini for Google Cloud API, see
Enable the Gemini for Google Cloud API in a Google Cloud project .
About data insights
Data insights automatically generates natural language queries and their SQL
equivalents based on a table's metadata.
Example of an insights run
Consider a table called telco_churn with the following metadata:
Field name
Type
CustomerID
STRING
Gender
STRING
Tenure
INT64
InternetService
STRING
StreamingTV
STRING
OnlineBackup
STRING
Contract
STRING
TechSupport
STRING
PaymentMethod
STRING
MonthlyCharges
FLOAT
Churn
BOOLEAN
The following are some of the sample queries that data insights
generates for this table:
Identify customers who have subscribed to all premium services and have been
a customer for more than 50 months.
SELECT
CustomerID ,
Contract ,
Tenure
FROM
agentville_datasets . telco_churn
WHERE
OnlineBackup = 'Yes'
AND TechSupport = 'Yes'
AND StreamingTV = 'Yes'
AND Tenure > 50 ;
Identify which internet service has the most churned customers.
SELECT
InternetService ,
COUNT ( DISTINCT CustomerID ) AS total_customers
FROM
agentville_datasets . telco_churn
WHERE
Churn = TRUE
GROUP BY
InternetService
ORDER BY
total_customers DESC
LIMIT 1 ;
Identify churn rates by segment among high-value customers.
SELECT
Contract ,
InternetService ,
Gender ,
PaymentMethod ,
COUNT ( DISTINCT CustomerID ) AS total_customers ,
SUM ( CASE WHEN Churn = TRUE THEN 1 ELSE 0 END ) AS churned_customers ,
( SUM ( CASE WHEN Churn = TRUE THEN 1 ELSE 0 END ) / COUNT ( DISTINCT CustomerID ))
* 100 AS churn_rate
FROM
agentville_datasets . telco_churn
WHERE
MonthlyCharges > 100
GROUP BY
Contract ,
InternetService ,
Gender ,
PaymentMethod ;
View insights
To view insights for a BigQuery table, use Dataplex Universal Catalog Search.
In the Google Cloud console, go to the Dataplex Universal Catalog Search page.
Go to Search
Search for a BigQuery table that you want to view insights for.
In the search results, click the table to open its entry page.
Click the Insights tab. If the tab is empty, it means that the insights
for this table have not yet been generated. You can
generate data insights in BigQuery Studio.
Pricing
For details about pricing for this feature, see
Gemini in BigQuery pricing overview .
Quotas and limits
For information about quotas and limits for this feature, see
Quotas for Gemini in BigQuery .
Locations
You can use data insights in all
BigQuery locations . To learn about
where Gemini in BigQuery processes your data, see
Where Gemini in BigQuery processes your data .
Limitations
Data insights is available for BigQuery tables,
BigLake tables, external tables, and views.
For multicloud customers, data from other clouds isn't available.
Data insights doesn't support Geo or JSON column types.
Insights runs don't guarantee the presentation of queries every time. To
increase the likelihood of generating more engaging queries, regenerate
insights in BigQuery Studio.
What's next
Learn how to generate insights in BigQuery .
Learn how to generate a data profiling scan .
Learn how to write queries with Gemini assistance in BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
