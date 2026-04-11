---
title: "View and filter health issues and recommendations \_|\_ Database Center \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/health-issues-recommendations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/set-up-database-center
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/health-issues-recommendations
  title: "View and filter health issues and recommendations \_|\_ Database Center\
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
View and filter health issues and recommendations
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— View and filter health issues and recommendations
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
Database Center lets you filter and prioritize health issues to
understand, triage, and manage database issues across your entire database
fleet, helping you identify key recommendations to address. For more
information, see
Database health issues .
Before you begin
Ensure that Database Center is set up for your
organization .
Find important health issues
To view the issues and recommendations for your fleet, do the following:
In the Google Cloud console, go to the Database Center
page.
Go to Database Center
In the navigation menu, click Health issues .
Use one or more filtering tools described in this document to identify key
health issues.
When you open the View health and recommendations page, health issues are
sorted by priority by default.
Note: Industry compliance health issues don't appear in the Health issues
page in the Google Cloud console. However, you can view industry compliance
health issues on the Resources page. For more information, see
Filter database resources .
Filter health issues by database resources
To narrow the list of issues, you can filter health issues by the following:
Database products and versions
Regions
Labels
Tags
Google Cloud projects, if you select a folder or organization in the Open
project picker in the Google Cloud console.
To filter health issues by database resources, do the following on the
View health and recommendations page or the
Database Center Overview
page:
From the drop-down in the Google Cloud console menu bar, select a
database scope—for example, a Google Cloud project, folder, or organization.
Optional: To add up to 10 custom label or tag filters, click
Add label/tag filters and follow the instructions in the pane that
opens.
Select the products and versions, regions, and label and tag filters you
want to apply to your dashboard. After you make your selection in a filter
drop-down, click OK .
Optional: To choose your column display options, click
Column display options .
Use insight cards
The cards at the top of the page provide insights into health issues in your
database fleet. For example, one card shows how many high priority health issues
affect your fleet.
To see the issues referenced on a card, click View all . Some cards, such as
the one that shows how many new issues appeared in the last seven days, don't
have this option.
Use filter tabs
Click one of the tabs to refine the health issues that appear in the table. For
example, you can do the following:
Click Priority and then select the priorities to display in the table.
Click Issue category and then select the issue categories you care about
most.
Click Implications and then select one or more implications to learn
which health issues share the same implications.
Understand the issues
The issues table provides details about each issue. The table includes the
following columns:
Priority : The priority of the health issue .
Priority values are Critical , High , Medium , or Low . Issues are
sorted by priority by default. Click the Priority column header to
change the sorting direction.
Issue category : The category of the issue, such as Data protection or
Security . For more information, see
Health issue categories .
Product : The product associated with the resource, such as Cloud SQL.
Issue : A description of the issue. Click the issue description to learn
more.
Resource : The name of the affected database resource. Click the resource
name to learn more about the resource.
Location : The region where the resource with the health issue is
located.
Project : The project that contains the health issue.
Recommendation : The suggested solution for the health issue.
Other actions : Additional information or solutions for the health issue.
Implications : The consequences of implementing the recommendation, such
as a required instance restart.
Understand health issue priorities
Health issues have one of the following priorities. Use these priorities to
manage maintenance on your database fleet.
Priority
Description
Critical
High risk, immediate service disruption, or a significant security
vulnerability if the issue isn't resolved. Immediate action is required .
High
High risk, but less serious than Critical . Unresolved issues might
lead to downtime, performance degradation, or data loss.
Medium
Configurations that aren't recommended or deviations from best practices that
require investigation to prevent performance or manageability issues.
Low
Informational items that are useful but low risk.
What's next
Learn more about the Database Center .
Learn how to customize your database fleet view .
Learn how to analyze database fleet health using Gemini .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
