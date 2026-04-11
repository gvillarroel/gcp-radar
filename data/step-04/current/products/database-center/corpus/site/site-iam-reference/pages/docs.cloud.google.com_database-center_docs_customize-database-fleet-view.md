---
title: "Customize your database fleet view \_|\_ Database Center \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/set-up-database-center
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/customize-database-fleet-view
  title: "Customize your database fleet view \_|\_ Database Center \_|\_ Google Cloud\
    \ Documentation"
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
Customize your database fleet view
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to customize your view of your database fleet health.
You can use this information to assess and identify
opportunities to improve your overall database fleet health.
Data displayed in Database Center is not updated in real time.
Data is usually updated within a few minutes, but sometimes data can take up to
24 hours to update.
Before you begin
Ensure that Database Center is set up for your organization .
Choose your database fleet scope
In the Google Cloud console, go to the
Database Center page.
Database Center
When you open Database Center for the first time, the
dashboard displays all available databases, database resources, health
issues, and database issues for your selected scope.
In the Google Cloud console menu bar, select a project.
Select the following information, which affects
the information that's displayed on the Overview and All Resources
in the Database Center dashboard:
Projects: You can select Google Cloud projects when the scope is at
an organization level.
Database products and database versions
Regions: The geographic location where your data is served.
Labels
Tags
Customize your database fleet health issues
To measure your fleet health, Database Center categorizes the
health issues that your fleet might encounter and displays the number of issues
for each displayed health issue test.
For more information about the health issues for supported Google Cloud
database products, see
Supported health issues .
To remove health issues from the Database Center dashboard, follow
these steps:
In the Google Cloud console, go to the Database Center page.
Database Center
Click Overview .
Click Customize issues . By default, all health issues are selected.
Clear the health issues that you want to exclude from your
Database Center dashboard.
Click Apply . The health issues that you cleared are no longer displayed
in your Database Center dashboard. Health issue
customizations are applied to the Overview and All Resources pages.
When you customize health issues, those customizations are only visible to you
and aren't applied to your entire organization. After you customize health
issues, Database Center displays only data that's related to the
health issues that you selected. To learn how to save a customized dashboard
view, see
Create customized dashboard view .
Your database fleet health is summarized in
inventory health cards , show in Figure 1. These cards display database fleet
health issues by category (availability configuration, data protection,
security, industry compliance, performance and capacity, cost, and other).
Figure 1. Fleet issue health cards
What's next
Learn about Database Center using Gemini .
View and filter database fleet health information .
Filter resources and export fleet inventory information .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
