---
title: "Save and share queries \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/analytics-save-share-query
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/analytics-save-share-query
  title: "Save and share queries \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Save and share queries
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to save and share queries that you create in
Observability Analytics. If you aren't familiar with Observability Analytics, see
Query and analyze traces .
For information about how to chart your queries or how to query your
trace data in BigQuery, see the documents listed in the
What's next section of this document.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Observability API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Observability API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
To get the permissions that
you need to load the Observability Analytics page, write, run, and save private
queries on your trace data,
ask your administrator to grant you the
following IAM roles:
Observability View Accessor ( roles/observability.viewAccessor )
on the observability views that you want to query. This role supports IAM conditions, which let you restrict the grant to a specific view. If you don't attach a condition to the role grant, then the principal can access all observability views.
Observability Analytics User ( roles/observability.analyticsUser )
on your project. This role contains the permissions required to save and run private queries, and to run shared queries.
Logs Viewer ( roles/logging.viewer )
on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note : If you want to create and manage
shared queries, then the previous IAM roles aren't
sufficient. To create and manage shared queries, your IAM
roles must include the
logging.queries.{share, updateShared, deleteShared}
permissions.
Save a query
All queries that you run are automatically saved for
30 days and are accessible by selecting the Recent tab
on the Observability Analytics page. You can search, view, run, and share the
queries that are listed on the Recent tab.
If you want to keep a query available for future use, annotate it with
information that is useful to you, or let teammates view and run your query,
then save the query. You can search and sort your saved queries by their
name, their description, and their visibility label. You can also edit
and delete these queries. Queries that you save are retained until you delete
them.
You can save 10,000 queries per Google Cloud project.
Console
To save a query, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Populate the Query pane with a query.
You can populate the Query pane by entering a new query,
by selecting a query from the Recent tab, or by
selecting a query from the Saved tab.
Your query can include any valid view, multiple views, and
analytics views .
When the query in the Query pane is valid,
the save Save is enabled.
Click save Save , select Save query ,
and complete the Name and Description fields.
The values you set for these fields are shown on the Saved tab.
Optional: To let everyone with access to the
Observability Analytics page for the Google Cloud project view and run your
saved query, enable the Share with project toggle.
By default, this toggle is disabled and the visibility is restricted to you.
Click Save query .
Optional: To view, sort, and run saved queries that are visible to you,
select the Saved tab.
You can sort and filter your saved queries by their name, description, and
visibility label. You can also filter by the contents of the query.
You can edit and delete queries that you created by using options on
the Saved tab:
To edit a query,
click more_vert More Options and select Edit .
You can modify the values for the
Name and Description fields; however, the query itself can't be
modified.
To delete a saved query,
click more_vert More Options and select Delete .
Share a query
You can share a saved query with everyone that has access to your
Google Cloud project. However, the principal's IAM roles determine
whether the query can be run and the data that the query returns.
Console
When troubleshooting a problem, or when you see anomalous results, you might
want to share a query and its results with a teammate. When you are viewing
query results on the Observability Analytics page, you can copy a URL that,
when opened, displays the query you ran and its results.
To share a query and results with a teammate, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Populate the Query pane with a query and then click Run query .
You can populate the Query pane by entering a new query,
by selecting a query from the Recent tab, or by
selecting a query from the Saved tab.
Click link Share link .
Send the link to your teammate.
When your teammate opens the link, the Observability Analytics page opens and
displays, but doesn't run, the query. Your teammate must manually run the
query.
The Observability Analytics page displays a warning dialog when the query runs on the
BigQuery engine and the queried resources aren't in the same
ownership boundary. Ownership boundaries are determined by several factors,
one of which is the hierarchy of the resources the query uses.
To open the URL successfully, your teammate's IAM role
on the Google Cloud project must include the permissions required to view the
Observability Analytics page.
View and run recent or saved queries
To view or re-run a query, select the Recent tab
on the Observability Analytics page and find the query:
To run the query, click Run .
To view the query, use the options in the
more_vert More Options menu.
To view, edit, or run a saved query, select the Saved tab
on the Observability Analytics page and find the query:
To run the query, click Run .
To edit, view, or delete the query, use the options in the
more_vert More Options menu.
What's next
Chart SQL query results .
Sample SQL queries .
Query a linked dataset in BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
