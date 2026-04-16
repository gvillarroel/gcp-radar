---
title: "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/monitor-health-clusters-instances
  title: "Monitor the health of your clusters and instances \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Monitor the health of your clusters and instances
Stay organized with collections
Save and categorize content based on your preferences.
AlloyDB for PostgreSQL integrates critical cluster and instance health issues and their
recommended resolutions from Database Center
and displays this information in the Google Cloud console. You can use this information to
monitor and improve the health of your AlloyDB for PostgreSQL clusters and instances.
Health issues have different priorities, and the most urgent
issues—those marked as critical or high priority—are displayed in
your AlloyDB cluster list so that you can do the following:
Organize, prioritize, assign, and close AlloyDB cluster issues.
Take action at an aggregate level.
Prevent cluster problems.
Use intelligent assistance to predict cluster issues before they occur.
You can view a list of all issues (critical, high, medium, and low) in your
database fleet in Database Center. For more information, see
View and filter health issues and recommendations .
Issue priority definitions
Health issues for AlloyDB are ranked by priority. Critical
and high priority issues are displayed in the Health issues section on
the Clusters page in the AlloyDB console. You can view
medium and low priority issues by clicking Issues in the Resource name list.
Note: These priorities are general. Depending on your resource's
environment—production, development, or test—and specific workloads,
priorities can vary.
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
Before you begin
To monitor AlloyDB health issues in the Google Cloud console,
you must have the following (Identity and Access Management (IAM)) roles:
AlloyDB Administrator ( roles/alloydb.admin )
alloydb.instances.list
alloydb.clusters.get
Monitoring Viewer ( roles/monitoring.viewer )
monitoring.timeSeries.list
Note: This role is required to view insight charts in the Clusters page,
but it isn't required to view Database Center health issues.
Database Center Viewer ( roles/databasecenter.viewer ) or Database Center Administrator ( roles/databasecenter.admin )
databasecenter.databaseGroups.list
databasecenter.fleetHealthStats.list
Monitor AlloyDB cluster health
The AlloyDB Clusters page in the Google Cloud
includes a Health issues section, which displays the most critical
cluster issues across your project.
View critical and high-priority issues
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Review the Health issues section displayed in the resource list. This
section displays the aggregate count of critical and high priority issues
affecting resources in your project. For more information about health issues
and issue priorities, see Database health issues .
To view a summary of all issues affecting the resource, click
High priority issues or View issues in the Issues column.
For more information, see View and filter database fleet health information .
Filter the cluster list by issue
The Issues column in the AlloyDB cluster list displays the
highest priority issue affecting that cluster or any of its primary and read pool
instances.
To see which issues affect a specific cluster, examine the Issues column
for the resource.
Clusters affected by a critical issue display a Critical badge.
Clusters affected by a high priority issue display a High priority badge.
To view the list of resources affected by a specific issue type, click
the issue name in the Health issues component. This action automatically
filters the cluster list to display only the affected resources.
View and resolve issues for a specific instance
You can view a summarized list of health issues on the Overview page for any
AlloyDB primary or read pool instance.
In the Google Cloud console, go to the Clusters page.
Go to Clusters
Click the name of a cluster.
Click the name of a primary or read pool instance to open the associated
Overview page.
Find the Instance health issues section on the overview page.
Critical and high priority issues are displayed first.
Medium, low, and informational issues are listed in
Issue priority definitions .
If none of the resources have issues, then the Instance health issues section
isn't displayed.
To view all details for all issues affecting a specific instance, click
View all issue details . This opens the Aggregate issues panel.
In the Aggregate issues panel , click any issue card to expand it and
view recommendations, next steps, and implications.
To resolve an issue, do one of the following:
Click Edit configuration to display the required setting on the instance's
Edit page—for example, auto scrolling and highlighting for flags or storage settings.
Click Go to System insights to validate the issue with performance metrics.
View all AlloyDB issues in Database Center
Database Center provides a list of issues across your database
fleet, including all medium and low priority AlloyDB issues.
With Database Center you can also view database fleet health
recommendations and ask questions about database fleet health issues, including
availability configuration, data protection, security, and industry compliance.
For more information, see Database health issues .
To view all AlloyDB issues in Database Center,
follow these steps:
In the Google Cloud console, go to the Database Center page.
Go to Database Center
Click Health issues in the left navigation menu.
Use the table to view all issues across your organization or project. You can
filter the list by the following:
Priority
Product and version
Issue Category
Location
Labels
Tags
Issues
Implications
To download a report that you can use in external tracking systems like JIRA or
internal dashboards, click Export CSV of issue details .
What's next
Learn more about Database Center .
Monitor AlloyDB instances .
Learn best practices for improving AlloyDB performance and availability .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
