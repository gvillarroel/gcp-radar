---
title: "Create, query, and manage analytics views \_|\_ Cloud Trace \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/trace/docs/create-and-manage-analytics-views
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/create-and-manage-analytics-views
  title: "Create, query, and manage analytics views \_|\_ Cloud Trace \_|\_ Google\
    \ Cloud Documentation"
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
Create, query, and manage analytics views
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
This document describes how to create and manage analytics views. After
you create an analytics view, you can query it in a manner similar to querying
observability views.
For an overview of analytics views, see
About analytics views .
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
you need to create, manage, and use analytics views,
ask your administrator to grant you the
following IAM roles:
Observability View Accessor ( roles/observability.viewAccessor )
on the observability views that you want to query. This role supports IAM conditions, which let you restrict the grant to a specific view. If you don't attach a condition to the role grant, then the principal can access all observability views. Observability views are in Public Preview.
Observability Analytics User ( roles/observability.analyticsUser )
on your project. This role contains the permissions required to save and run private queries, and to run shared queries.
Logs Viewer ( roles/logging.viewer )
on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Make sure that you have an observability view. To learn more, see
Cloud Trace storage model .
Create an analytics view
Note: An analytics view can query observability views. When an analytics view
queries multiple views, then those views must be in the same location.
To create an analytics view, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Configure the Observability Analytics page:
Make sure that the toolbar displays Run query .
If the toolbar displays Run in BigQuery , then
click settings Settings and select
Observability Analytics (default) .
If the Views menu isn't shown, then go to the
navigation pane and click
last_page Views and Schema .
Enter and validate the query that you want to save as an analytics view.
You might want to load and edit the default query for the
observability view that your analytics view will query.
To load the default query, do the following:
In the Views menu, go to the
Traces section,
and then select _Trace.Spans._AllSpans .
In the Schema toolbar, click Query , and then
click Overwrite .
The Query pane is updated with a SQL query.
Update the query until you're satisfied with the query results.
Create an analytics view:
In the toolbar, click save Save , and then select
Save as analytics view .
Enter a name and description for the analytics view.
The name is limited to 100 characters and can include only letters,
digits, underscores, and hyphens.. You can't change the name after you
create the analytics view.
Click Save .
The system creates your analytics view and lists it in the Views pane,
in the data_table Analytics Views section.
Query an analytics view
You query an analytics view in a manner analogous to querying
observability views. To query analytics views ,
use the following format for the FROM clause:
FROM ` analytics_view . PROJECT_ID . LOCATION . ANALYTICS_VIEW_ID `
The fields in the previous expressions have the following meaning:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the analytics view.
ANALYTICS_VIEW_ID : The ID of the analytics view, which is limited to 100 characters and can include only letters,
digits, underscores, and hyphens.
To learn more, see Query and analyze traces .
List analytics views
To list the analytics views in your Google Cloud project, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Configure the Observability Analytics page:
Make sure that the toolbar displays Run query .
If the toolbar displays Run in BigQuery , then
click settings Settings and select
Observability Analytics (default) .
If the Views menu isn't shown, then go to the
navigation pane and click
last_page Views and Schema .
In the Views menu, go to the
data_table Analytics Views section.
Get details about an analytics views
You can use options in the Schema pane to display the following information
about an analytics view:
Name.
Create date.
Last update.
Schema.
Query.
To view the details for an analytics views, list the analytics views
in your project, and then do the following:
Select the analytics view whose information you want to view.
In the Schema toolbar
click more_vert View analytics view options ,
and select View details .
Modify an analytics view
To modify an analytics view, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Configure the Observability Analytics page:
Make sure that the toolbar displays Run query .
If the toolbar displays Run in BigQuery , then
click settings Settings and select
Observability Analytics (default) .
If the Views menu isn't shown, then go to the
navigation pane and click
last_page Views and Schema .
In the Views menu, go to the
data_table Analytics Views section, and select
the analytics view that you want to modify.
In the Schema toolbar,
click more_vert View analytics view options ,
and select Edit view .
A dialog opens that displays information about the analytics view.
You can modify the description and query.
After you complete your modifications, click
Overwrite saved view .
Delete an analytics view
Note: If you've written queries against an analytics view and delete
the analytics view, then those queries will fail.
To delete an analytics view, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Configure the Observability Analytics page:
Make sure that the toolbar displays Run query .
If the toolbar displays Run in BigQuery , then
click settings Settings and select
Observability Analytics (default) .
If the Views menu isn't shown, then go to the
navigation pane and click
last_page Views and Schema .
In the Views menu, go to the
data_table Analytics Views section, and select
the analytics view that you want to delete.
In the Schema toolbar,
click more_vert View analytics view options ,
select Delete view , and complete the dialog.
Limitations
The following limitations apply to analytics views:
An analytics view can only query observability views.
The parent resource of an analytics view must be a Google Cloud project.
You can only query an analytics view by using the Observability Analytics page,
and only when you use the Observability Analytics (default) query engine.
All views that an analytics view queries must be in the same location.
You must use the Google Cloud console to create or manage your
analytics views.
You can create at most 100
analytics views per Google Cloud project.
You can create a most 50
analytics views per region.
Per Google Cloud project, at most 10
regions can contain an analytics view.
What's next
Query and analyze traces .
Chart SQL query results .
Save and share queries .
Sample SQL queries .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
