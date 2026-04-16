---
title: "View and filter database fleet health information \_|\_ Database Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/filter-database-resource-view
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/filter-database-resource-view
  title: "View and filter database fleet health information \_|\_ Database Center\
    \ \_|\_ Google Cloud Documentation"
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
View and filter database fleet health information
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to view and filter database fleet inventory and health
issue information on your Database Center dashboard.
Before you begin
Ensure that Database Center is set up for your
organization .
View database fleet health information
In the Google Cloud console, go to the Database Center page.
Database Center
To define the scope of your database fleet, use the drop-down in
the Google Cloud console menu bar, select a Google Cloud project, folder, or
organization.
Select the Google Cloud project, products and versions, regions, and label and
tag filters you want to apply to your dashboard. For more information about
filtering by labels and tags, see
Filter database resources .
To view a summary of your database fleet inventory, click Overview and
view the Fleet inventory pane.
To view a summary of database fleet health issues, view the Fleet issues
pane. To learn more about a specific issue, click the issue to see details
and any relevant recommendations or next steps.
View recently added database resources
Preview
— View recently added database resources
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
To view the number of database resources added to your database fleet in the
last seven days, follow these steps:
Go to the Database Center page in the Google Cloud console.
Database Center
Click Overview .
In Time range , click time range you want for the recently added database
resources. The options are:
1 day
7 days (default)
30 days
In the Fleet inventory pane, click the View inventory changes link.
The text of the link reflects the time range you clicked in the previous
step.
Filter database fleet health information
You can filter your database resources information to focus on the database
fleet information that's important to you. Your filtering choices apply to
the Overview and All Resources pages on the
Database Center dashboard.
Your database fleet is represented as database groups and individual database
resources. A database group represents all database resources that serve the
same data and replicate together (parents and children together as a family).
An individual database resource is anything you provisioned that represents
compute and storage (a single family member).
To filter your database resources, follow these steps:
In the Google Cloud console, go to the Database Center Overview page.
Database Center
To define the scope of your database fleet, use the drop-down in
the Google Cloud console menu bar, select a Google Cloud project, folder, or
organization.
Click Products , Locations , Labels , Tags , and Issues to
select the products, locations, label, tag, and issue filters you want to
apply to your dashboard. The data in your Database Center
dashboard view changes based on your filter selections. For more
information, see
Filter by labels and tags .
You can apply additional filters to the Resources table based on
properties like resource name, CPU count, memory size, and peak storage
utilization. Click
filter_list Filter and select
one or more filters.
In the Fleet inventory pane, select the fleet inventory filters you want
to apply. For more information, see
Analyze your database inventory .
In Segment 1 , choose how you want to group database resources in your
inventory in the first column.
In Segment 2 , choose how you want to group database resources in each
row.
What's next
View and filter database fleet health information .
Filter resources and export fleet inventory information .
Analyze your database inventory .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
