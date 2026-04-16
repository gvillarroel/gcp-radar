---
title: "Reports API: Login Activity Report \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
source_metadata:
  url: https://developers.google.com/workspace/admin/reports/v1/guides/manage-audit-login
  title: "Reports API: Login Activity Report \_|\_ Admin console \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Guides
Send feedback
Reports API: Login Activity Report
Stay organized with collections
Save and categorize content based on your preferences.
The login activity report returns information on the login activities of all of
your account's users. Each report uses the basic report endpoint request with
report-specific parameters such as a user's email. The
maximum time period for each report is the last 180 days.
Note: The login activity report only audits explicit password and SAML-based
single sign-on (SSO) logins.
The login activity report may be used only for lawful purposes in accordance with your Customer Agreement.
Retrieve Google Workspace login events for a domain
To retrieve all logins for all of your domain's services, use the following
GET HTTP request and include the authorization token described in the
authorization documentation .
For more information about the request query strings and response properties,
see the API Reference .
For readability purposes, the following example is formatted with line returns:
GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all
/applications/ login ?endTime= end date &startTime= start date
&maxResults= maximum number of events returned on a response page
The following example gets a report on all of your account's login events for
the past 180 days. The maxResults query parameter has this report return
25 results per page.
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?maxResults=25
The following example gets a report on all of a customer's login events for
the past 180 days. The customerId specifies which customer the report is
to be retrieved for.
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?customerId=C03az79cb
Retrieve Google Workspace login events by event name
In some instances, you may want to retrieve specific
events ,
such as suspicious successful logins. To do this, use a GET HTTP request of
the following form:
GET https://admin.googleapis.com/admin/reports/v1/activity/users/ all
/applications/ login ?maxResults= maximum number of events returned on a response page
&eventName= name of the login event
&filters= event parameter relational operator parameter value
The following example shows how to retrieve all suspicious successful logins
for a domain:
GET https://admin.googleapis.com/admin/reports/v1/activity/users/all/applications/login?eventName=login_success&filters=is_suspicious==true&maxResults=25
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
