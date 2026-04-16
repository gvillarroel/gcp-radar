---
title: "View the performance of your database fleet \_|\_ Database Center \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/performance
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/performance
  title: "View the performance of your database fleet \_|\_ Database Center \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Center
Guides
Send feedback
View the performance of your database fleet
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— View database fleet performance
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this feature
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Database Center provides performance information about your fleet
resources to help you maintain your database fleet. You can view a list of your
database resources to identify which are most highly utilized for different
metrics, such as CPU utilization and storage used. You can also view a
visualization of resource performance over time. Use this information to
prioritize database fleet maintenance and ensure optimal fleet operation.
Before you begin
Ensure that Database Center is set up for your
organization .
View database fleet resource performance
To view your database fleet resource performance details, go to the
Performance page in Database Center.
Go to Database Center
The Performance page includes one card for each database product in your
fleet. The cards appear in alphabetical order by product name. A card appears
for each database product you use, such as Bigtable and
Spanner. Product cards don't appear for products you're not using. Each
product card includes the following performance details:
Resource count : The total number of resources used by the database
product.
Metric selection : Select a metric from the available metrics. The metrics
you can choose from are pertinent to the database product. For
example, the peak storage utilization metric is available on a
Bigtable card, but not the AlloyDB for PostgreSQL card.
Resources ranked by utilization : The table on the product card lists
resources in the Resource name column by utilization for the selected
metric. The resource with the highest utilization is at the top. Click the
resource name to view details about that resource. The table shows ten
resources. Click chevron_left or chevron_right to show the previous or next ten
resources.
Resource utilization over time : For each resource listed in the table, the
chart shows resource utilization over the past seven days for the selected
metric. Hold the pointer over a line to see which resource it's associated
with.
What's next
Learn more about the Database Center .
Learn how to analyze your database inventory .
Learn how to analyze database fleet health using Gemini .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
