---
title: "Monitor and control Google Apps Script use in your Google Workspace organization\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/admin/monitor-use
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/admin/monitor-use
  title: "Monitor and control Google Apps Script use in your Google Workspace organization\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
Monitor and control Google Apps Script use in your Google Workspace organization
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Admins can monitor Apps Script project actions and daily usage in the Google Admin console.
You can view actions taken on Apps Script projects through Drive log events reporting in the Admin console.
The Admin console allows viewing the daily number of people using Apps Script and the number of projects used per day.
Admins with specific Google Workspace accounts can control access to external domains for Apps Script.
Administrators have the ability to turn Apps Script on or off for their organization or disable individual Apps Script projects.
You can monitor the actions people take on Apps Script projects
and how many people use Apps Script per day in the
Google Admin console .
View Apps Script audit logs
To view the actions people take on Apps Script projects with
Drive log events reporting in the Admin console, follow these
steps:
Open your Admin console at admin.google.com .
Click Menu menu
> Reporting
> Audit and investigation
> Drive log events . If
Reporting doesn't appear, click Show more .
Click Filter > Add a filter
> Document type .
In the Document type section, select Google Script and click
Apply .
Click Search .
View how many people use Apps Script
To view the number of people in your organization using
Apps Script each day and how many Apps Script
projects people use per day, follow these steps:
Open your Admin console at admin.google.com .
Click Menu menu
> Reporting
> Reports
> Apps Reports
> Apps Script . If
Reporting doesn't appear, click Show more .
To export the data, click Download
.
The charts show data for the last 6 months and include all script executions,
which includes any time a script runs.
Control access to external domains
Control access to external domains with a Business Plus, Enterprise,
Education Standard, Teaching and Learning Upgrade, or Education Plus
Google Workspace account.
By default, scripts can send or fetch data using any URL with
URL Fetch Service . As an administrator,
you can control which external domains your users can access through
Apps Script. Refer to Allow only certain external connections
for Apps Script and
Sheets .
Turn off Apps Script
As an administrator, you can turn Apps Script on or off for
people in your organization. For instructions on how to do this, see
Turn Apps Script on or off for users .
Turn off a specific Apps Script project
You can turn off an individual Apps Script project by deleting
its associated Cloud project. After you shut down a
Cloud project, all executions of the script project stop.
For more information, see
Shutting down (deleting) projects .
To delete a Cloud project, obtain delete permissions on the project.
To give delete permissions for projects in your organization, refer to
Assign delete permission for all Cloud projects in an organization .
Related resources
Drive log events
Create and manage reporting rules
Reports API: Drive Activity Report
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
