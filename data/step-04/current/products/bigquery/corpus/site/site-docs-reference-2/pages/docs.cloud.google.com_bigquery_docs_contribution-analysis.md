---
title: "Contribution analysis overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/contribution-analysis
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/contribution-analysis
  title: "Contribution analysis overview \_|\_ BigQuery \_|\_ Google Cloud Documentation"
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
Contribution analysis overview
Use this document to understand the contribution analysis use case,
and the options for performing contribution analysis in BigQuery ML.
What is contribution analysis?
Contribution analysis, also called key driver analysis, is a method used to
generate insights about changes to key metrics in your multi-dimensional data.
For example, you can use contribution analysis to see what data contributed to a
change in revenue numbers across two quarters, or to compare two sets of
training data to understand changes in an ML model's performance.
Contribution analysis is a form of
augmented analytics ,
which is the use of artificial intelligence (AI) to enhance and automate the
analysis and understanding of data. Contribution analysis accomplishes one of
the key goals of augmented analytics, which is to help users find patterns in
their data.
Contribution analysis with BigQuery ML
To use contribution analysis in BigQuery ML, create a
contribution analysis model with the
CREATE MODEL statement .
A contribution analysis model detects segments of data that show changes in
a given metric by comparing a test set of data to a control set of data. For
example, you might use a table snapshot
of sales data taken at the end of 2023 as your test data and a table snapshot
taken at the end of 2022 as your control data, and compare them to see how
your sales changed over time. A contribution analysis model could show you
which segment of data, such as online customers in a particular region, drove
the biggest change in sales from one year to the next.
A metric is the numerical value that contribution analysis models use
to measure and compare the changes between the test and control data. You can
specify the following types of metrics with a contribution analysis model:
Summable :
sums the values of a metric column that you specify, and then determines
a total for each segment of the data.
Summable ratio :
sums the values of two numeric columns that you specify, and determines
the ratio between them for each segment of the data.
Summable by category :
sums the value of a numeric column and divides it by the number of distinct
values from a categorical column.
A segment is a slice of the data identified by a given combination of
dimension values. For example, for a contribution analysis model based on the
store_number , customer_id , and day dimensions, every unique combination of
those dimension values represents a segment. In the following table, each row
represents a different segment:
store_number
customer_id
day
store 1
store 1
customer 1
store 1
customer 1
Monday
store 1
customer 1
Tuesday
store 1
customer 2
store 2
To reduce model creation time, specify an
apriori support threshold .
An apriori support threshold lets you prune small and less relevant segments
so that the model uses only the largest and most relevant segments.
After you have created a contribution analysis model, you can use the
ML.GET_INSIGHTS function
to retrieve the metric information calculated by the model. The model output
consists of rows of insights, where each insight corresponds to a segment and
provides the segment's corresponding metrics.
Contribution analysis user journey
The following table describes the statements and functions you can use with
contribution analysis models:
Model creation
Feature preprocessing
Insights generation
Tutorials
CREATE MODEL
Manual preprocessing
ML.GET_INSIGHTS
Get data insights from a contribution analysis model using a summable metric
Get data insights from a contribution analysis model using a summable ratio metric
What's next
Create a contribution analysis model
Get data insights from a contribution analysis model
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
