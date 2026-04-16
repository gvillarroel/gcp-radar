---
title: "View and set maintenance windows for your database fleet \_|\_ Database Center\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-center/docs/fleet-maintenance
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/database-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/database-center/docs/fleet-maintenance
  title: "View and set maintenance windows for your database fleet \_|\_ Database\
    \ Center \_|\_ Google Cloud Documentation"
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
View and set maintenance windows for your database fleet
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— View and set fleet maintenance windows
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
Database Center lets you view maintenance windows for resources in your
database fleet. You can also view maintenance window recommendations to help you
maintain your database fleet. Database Center uses factors, such
as a resource's environment (production or non-production) and traffic, to
create suggested maintenance windows. Database Center also
identifies resources without a set maintenance window and provides
recommendations to help you reliably set one window for every resource in your
database fleet.
Database Center supports viewing and creating maintenance window
recommendations for AlloyDB for PostgreSQL resources only.
A maintenance window defines the preferred time, by hour-of-the-day and
day-of-the week, for your resources to begin maintenance events. For example,
you can set a resource to have a maintenance window that begins at 11AM on
Sundays (UTC). By default, database resources don't have a maintenance window.
For more information about maintenance windows for AlloyDB for PostgreSQL
resources, see
Maintenance timing and maintenance preferences .
Before you begin
Ensure you set up Database Center for your organization .
Create and configure an AlloyDB for PostgreSQL cluster and instance .
View database resource maintenance windows
To view information about database resource windows and recommended resource
windows, do the following:
Go to the Maintenance page in Database Center.
Go to Database Center
After the Maintenance page opens, view the following to learn more
about how maintenance windows are configured in your database fleet.
The Summary card shows you the following:
How many of your database resources have a configured maintenance window.
How many of your database resources have recommended maintenance windows
created by Database Center.
How many of your database resources have a deny maintenance window
configured. During a deny maintenance window, updates aren't allowed.
The Recommended maintenance windows by product version card shows you the
following:
To see a table that shows the resources in your database fleet by product
version, click View maintenance windows in the row for that product
version.
The number of resources in your database fleet for the product version in
that row
How many resources for the product version in a row that don't have a
configured maintenance window.
The Recommended maintenance windows by resource card shows you the
following:
The names of the resources in your database fleet for which
Database Center can make maintenance window recommendations.
The current maintenance window configured for each resource. If a resource
doesn't have a configured maintenance window, None is shown.
A menu with maintenance windows that Database Center
recommends. Learn how to
set a recommended maintenance window .
Set a recommended maintenance window
To set a recommended maintenance window for a database resource, complete these
steps:
Locate the resource for which you want to update the maintenance window by
completing one of the following steps:
To locate a resource by product version, click
View maintenance windows for a product version in the
Recommended maintenance windows by product version card. In the table
that appears, find the resource you want to update.
Find the resource in the
Recommended maintenance windows by resource card.
In the table row for the resource you want to update, click the
Recommended windows drop-down menu. Then, find a recommended maintenance
window you want to implement and make a note if its day and times. You need
this information to set the maintenance window in the next step. Clicking a
recommended maintenance window in the drop-down menu doesn't apply the
maintenance window.
Click the resource name or Apply to navigate to a page in the
Google Cloud console where you can specify the recommended maintenance window
you chose in the previous step. For information about how to specify a
maintenance window for an AlloyDB for PostgreSQL resource (cluster), see
Set a maintenance window on a cluster .
What's next
Learn more about the Database Center .
Learn how to customize your database fleet view .
Learn how to analyze database fleet health using Gemini .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
