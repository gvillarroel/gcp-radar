---
title: "Filter resources and export fleet inventory information \_|\_ Database Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information
  title: "Filter resources and export fleet inventory information \_|\_ Database Center\
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
Filter resources and export fleet inventory information
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to filter the database fleet information that is
displayed in your Database Center dashboard, and describes how to
export database fleet inventory information into a CSV file.
You can filter the following information in the Database Center
dashboard:
Database products and versions
Regions
Labels
Tags
Google Cloud projects, if you select a folder or organization in the Open
project picker in the Google Cloud console.
Filter by labels and tags
You can filter resources that appear in the Database Center
dashboard by using labels and tags. Filtering database resources by labels and
tags lets you do the following:
Focus on the database groups that matter to you.
Filter out non-critical information, like databases used for
non-production purposes (development, testing, staging, and benchmarking).
If you filter by both labels and tags, then all resources with either a selected
label or a selected tag are displayed in the dashboard. For example, if you
filter by labels and tags with env - prod , then database resources with either
are listed.
A label is a key-value pair that you can assign to Google Cloud resources. You
can use labels to help you organize these resources and manage your costs at
scale. Labels are imported from your organization or Google Cloud projects.
Database Center uses the labels associated with your
organization's Google Cloud projects. To learn more, see Best practices for
labels .
A tag is a key-value pair that can be attached to a Google Cloud resource. You
can use tags to conditionally allow or deny policies based on whether a resource
has a specific tag. To learn more, see Creating and managing tags .
To learn more about labels and tags, see Differences between labels and tags .
Before you begin
Ensure that Database Center is set up for your organization .
Filter database resources
In the Google Cloud console, go to the Overview page in
Database Center .
Database Center
From the drop-down in the Google Cloud console menu bar, select a database
scope—for example, a Google Cloud project, folder, or organization.
Optional: Click Labels to add labels to your filter. Click Tags to
add tags to your filter. For more information, see
Filter by labels and tags .
Click Products , Locations , Labels , Tags , and Issues to
select the products, locations, label, tag, and issue filters you want to
apply to your dashboard. The data in your Database Center
dashboard view changes based on your filter selections. For more
information, see
Filter by labels and tags
You can apply additional filters to the Resources table based on
properties like resource name, CPU count, memory size, and peak storage
utilization. Click
filter_list Filter and select
one or more filters.
Optional: To choose your column display options, click
.
Export database fleet inventory information
You can export database fleet inventory information to a comma-separated values
(CSV) file. Exporting to a CSV file is useful when you want to work with and
analyze database fleet information in a spreadsheet.
In the Google Cloud console, go to the Database Center page.
Database Center
From the drop-down in the Google Cloud console menu bar, select a
database scope—for example, a Google Cloud project, folder, or organization.
Click CSV Export . Database Center downloads fleet
inventory information for your database scope (Google Cloud project, folder, or
organization) resources to a CSV file.
What's next
Analyze your database inventory .
Troubleshoot database health issues .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
