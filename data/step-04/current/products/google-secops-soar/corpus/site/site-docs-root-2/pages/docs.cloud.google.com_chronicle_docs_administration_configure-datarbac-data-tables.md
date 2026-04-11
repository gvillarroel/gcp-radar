---
title: "Configure data RBAC for data tables \_|\_ Google Security Operations \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/secops/google-secops-soar-toc
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-data-tables
  title: "Configure data RBAC for data tables \_|\_ Google Security Operations \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure data RBAC for data tables
Supported in:
Google secops
SIEM
This page describes how data role-based access control ( data RBAC )
administrators and users can assign scopes to data tables. Data tables are
multicolumn data constructs that let you input your own data into
Google Security Operations. They can function as lookup tables with defined columns and
data stored in rows. By assigning scopes to a data table, you can control
which users and resources can access and utilize it (for example, rules and unified data model (UDM) search instances).
Access permissions vary by user type (scoped versus global):
Scoped users can create a scoped data table using all or a subset of the
scopes that are assigned to them.
Global users can create either an unscoped data table (a data table
that all the users can use) or a scoped data table. An unscoped data table
can be viewed by all users, but only global users can write to it.
Another way of looking at this is from the perspective of a data table:
Scoped data tables with selected can be accessed by specific users or rules that have
matching scopes. However, to perform write operations on a scoped table, the
user or rule needs to have the same matching scopes.
Unscoped data tables are accessible to all users and rules for read operations.
However, write operations are limited to global users only.
For more information on how data RBAC and scopes work, see
Overview of Data RBAC .
For detailed information about user access permissions, see the table in Access permissions for users in data tables .
Add scopes to data tables
To add scopes to a data table, you must have access to all the scopes that
you intend to add. You cannot add scopes that you don't have access to.
To add scopes to an unscoped data table or add more scopes to a scoped data
table, do the following:
Log in to Google SecOps .
Click Investigation > Data tables .
In the Data tables window, select the data table that you want to add scopes
to.
At the top, select the scope assignment list.
Select all the scopes that the data table must have access to.
Click Save . The scopes are added to the data table.
Update scopes in a data table
To update the scopes for a data table, you must have access to all the data
scopes that you intend to add to the data table. You cannot add or remove scopes
that you don't have access to.
The following considerations apply when updating a data table:
Removing scopes from a data table is only allowed if all existing rules
that use the data table remain functional after the change.
For example:
An update for a data table from scopes A and B to scope A is
not allowed if a rule scoped to B uses the data table.
An update for an unscoped data table to Scope A is not allowed
if a rule with scoped to B uses the data table.
Removing scope B is not allowed if a rule with scope B uses the data
table.
A scoped user can remove a scope from a data table, which can cause
other scoped users to lose access.
For example, a user with scopes A and B can remove scope B from a data table
with scopes A and B. After this change, the user can still use the
data table, but another user with only scope B can no longer view or
access the data table.
Adding more scopes can cause some users to lose their edit access to a data
table. To have read and write permissions, you need access to all scopes.
Having access to one or just a few only gives you read permissions.
For example, a user with scopes A and B can add scope B to a data table
that has scope A. After this change, the user can still edit the data table,
but another user with only scope A is no longer able to edit the data table.
To read a data table, a user only needs one scope assigned to the data table.
To write to data table or modify it, the user needs all of the scopes assigned
to the data table.
To update the scopes in a data table, do the following:
Log in to Google SecOps .
Click Investigation > Data tables .
In the Data tables window, select the data table that you want to update.
At the top, select the scope assignment drop-down.
Select all the scopes that the data table should have access to. Deselect the
scopes the data table shouldn't have access to.
Click Save . The scope assignment for the data table is updated.
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
