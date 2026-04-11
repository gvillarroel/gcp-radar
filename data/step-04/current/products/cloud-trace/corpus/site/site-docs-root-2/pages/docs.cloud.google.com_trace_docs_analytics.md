---
title: "Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/analytics
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/analytics
  title: "Query and analyze traces \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
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
Query and analyze traces
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
This document describes how to query and analyze your trace data by using
Observability Analytics, which provides a SQL -based query interface. SQL lets you
perform aggregate analysis, which can help you generate insights and identify
trends. To view your query results, use tables or charts.
You can also save these tables and charts to your custom dashboards.
If you want to view or explore individual traces or spans, or view attributes
that are attached to spans, then use the
Trace Explorer page. For information about that page, see
Find and explore traces .
For trace, you can query an observability bucket named _Trace . One view,
_AllSpans , is available to query. To learn more about how
your trace data is stored, see
Storage overview .
About linked BigQuery datasets
You don't need a linked BigQuery dataset to query
your trace data, or to query your trace and log data.
For those scenarios, you can use the Observability Analytics page. For information
about querying log data, see
Query and analyze logs with Observability Analytics .
You do need a linked BigQuery dataset when you
want to do any of the following:
Join trace data with other BigQuery datasets.
Query trace data from another service like the
BigQuery Studio page or Looker Studio.
Improve the performance of the queries that you run from the Observability Analytics
by running them on your
BigQuery reserved slots .
This document doesn't describe how to create a linked dataset or how to
configure the Observability Analytics to run queries on reserved slots.
For information about these topics, then see
Query a linked BigQuery dataset .
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
Display the schema
The schema defines how the data is stored, which includes the fields and their
data types. This information is important to you because the schema determines
the fields you query and whether you need to cast fields to different data
types. For example, to write a query that computes the average latency of
HTTP requests, you need to know how to access the latency field and whether it
is stored as an integer like 100 or as a string like "100" . If the latency
data is stored as a string, then the query must cast the value to a numeric
value before computing an average.
To identify the schema, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the Views menu, go to the
Traces section,
and then select _Trace.Spans._AllSpans .
The Schema pane is updated. Observability Analytics
automatically infers the fields of a column when the data type is JSON.
To view how often these inferred fields appear in your data,
click more_vert Options and
select View info and description .
To learn about the schema, see
Storage schema for trace data .
If you don't see a view named _Trace.Spans._AllSpans , then your
Google Cloud project doesn't contain a observability bucket named
_Trace . For information about how to resolve this failure, see
Trace storage initialization fails .
Query trace data
This section describes the approaches that you can use to query your
trace data:
Load a system-defined query, edit this query, and then run the query.
Enter and run a custom query. For example, you might paste in a query you
have or write one. Custom queries can include joins, nested queries, and
other complex SQL statements. For examples, see Sample SQL queries .
Build a query by making menu selections and then run that query.
Observability Analytics converts your selections into a SQL query, which you can both
view and edit.
Load, edit, and run the system-defined query
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Note: If a window on the Observability Analytics page
displays a "Get started with Observability Analytics" message, then on the window,
click close Close .
In the Views menu, go to the
Traces section,
and then select _Trace.Spans._AllSpans .
If you don't see a view named _Trace.Spans._AllSpans , then your
Google Cloud project doesn't contain a observability bucket named
_Trace . For information about how to resolve this failure, see
Trace storage initialization fails .
Do one of the following:
To load a system-defined query that relies on the Query Builder , which
lets you define the query with menu selections, make sure that the
Query pane displays Query Builder . If a SQL editor is shown, then
click tune Builder .
To load a system-defined query that extracts JSON values, then make sure
that Query pane displays the SQL editor. If this pane displays
Query Builder , then click code SQL .
In the Schema pane, select Query , and then click Overwrite .
The Query pane displays a system-defined query. If you selected the
Query Builder mode but want to view the SQL query, click code SQL .
Optional: Modify the query.
To run the query, go to the toolbar and select
Run Query .
Observability Analytics presents the query results in a table. However, you can create
a chart, and you can also save the table or chart to
a custom dashboard . For more information, see
Chart SQL query results .
If the toolbar displays Run in BigQuery , then you need to switch
Observability Analytics to use the default query engine. To make this change, in the
toolbar of the Query pane, click settings Settings
and then select Analytics (default) .
Enter and run a custom query
To enter a SQL query, then do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Note: If a window on the Observability Analytics page
displays a "Get started with Observability Analytics" message, then on the window,
click close Close .
In the Query pane, click the code SQL .
To specify a time range, we recommend that you use the time-range
selector. If you add a WHERE clause that specifies the
timestamp field, then that value overrides the setting in the
time-range selector and that selector is disabled.
For examples, see Sample SQL queries .
The SQL editor displays the fully qualified name for the
_Trace.Spans._AllSpans view, which has the following form:
FROM ` PROJECT_ID . LOCATION . _Trace . Spans . _AllSpans `
The fields in the previous expression have the following meaning:
PROJECT_ID : The identifier of the project.
LOCATION : The location of the observability bucket .
If the query pane displays an error message that references the
FROM statement, then the view can't be found.
For information about how to resolve this failure, see
Error message stating a view does not exist .
To run the query, go to the toolbar and select
Run Query .
Observability Analytics presents the query results in a table. However, you can create
a chart, and you can also save the table or chart to
a custom dashboard . For more information, see
Chart SQL query results .
If the toolbar displays Run in BigQuery , then you need to switch
Observability Analytics to use the default query engine. To make this change, in the
toolbar of the Query pane, click settings Settings
and then select Analytics (default) .
Build, edit, and run a query
The Query Builder interface lets you build a query by making selections from
menus. Observability Analytics converts your selections into a SQL query, which you can
view and edit. For example, you might start by using the
Query Builder interface and then switch to the SQL editor to refine your
query.
Observability Analytics can always convert your menu-selections from the Query Builder
interface into a SQL query. However, not all SQL queries can be represented
by the Query Builder interface. For example, queries with joins can't
be represented by this interface.
Note: There might be cases where fields that you want to query aren't listed
by the query builder interface . When the data type of a column
is JSON, Observability Analytics automatically infers the fields of the column. If you want
your query to use a JSON field that wasn't automatically inferred, then switch
to the SQL editor and write a query.
To build a query, do the following:
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Note: If a window on the Observability Analytics page
displays a "Get started with Observability Analytics" message, then on the window,
click close Close .
If the Query pane displays a SQL editor, then select
tune Builder , which opens the Query Builder pane.
Use the Source menu to select the view you want to query. Your selections
are mapped to the FROM clause in the SQL query.
Optional: Use the following menus to restrict or format the result table:
Search all fields : Search for matching strings. Your selections are
mapped to the WHERE clause in the SQL query.
Columns : Select the columns that appear in the result table. Your
selections are mapped to the SELECT clauses in the SQL query.
When you select a field name in this menu, a dialog opens. In this dialog,
you can do the following:
Use the menu to aggregate or group your data.
To prevent syntax errors, any aggregation and grouping you apply
to one column is automatically applied to other columns as well.
For an example of how to aggregate and group entries, see
Group and aggregate data by using the Query Builder .
Cast a value of any type into another specified data type. For more
information, see the CAST
documentation.
Extract a substring of values by using regular expressions. For more
information, see the REGEXP_EXTRACT
documentation.
Filters : Add filters when you want to restrict the query to spans
that contain a specific attribute or span ID. The menu lists all
available filter options. Your selections are mapped to the WHERE
clause in the SQL query.
Sort By : Set the columns to sort by, and whether the sort is
ascending or descending. Your selections are mapped to the ORDER BY
clause in the SQL query.
Limit : Set the maximum number of rows in the result table. Your
selections are mapped to the LIMIT clause in the SQL query.
To run the query, go to the toolbar and select
Run Query .
Observability Analytics presents the query results in a table. However, you can create
a chart, and you can also save the table or chart to
a custom dashboard . For more information, see
Chart SQL query results .
If the toolbar displays Run in BigQuery , then you need to switch
Observability Analytics to use the default query engine. To make this change, in the
toolbar of the Query pane, click settings Settings
and then select Analytics (default) .
Example: Group and aggregate data by using the Query Builder
When you select a column in the Query Builder, each field includes a menu where
you can add grouping and aggregation. Grouping lets you organize your data into
groups based on the value of one or more columns, and aggregation lets you
perform calculations on these groups to return a single value.
Each field that you select in the Columns element has an attached menu with
the following options:
None : Don't group or aggregate by this field.
Aggregate : Group fields listed in the Columns element except when
the field has an Aggregate selection. For those fields, compute the
value by performing an operation on all entries in each grouping.
The operation might be to compute the average of a field
or to do something like count the number of entries in each grouping.
Group By : Group entries by all fields listed in the Columns element.
The following illustrates how you might construct a query that groups entries
and then performs some type of aggregation.
This example describes how to use the Query Builder to group
spans by start time, span name, and span kind. Then, for each group, the query
computes the average duration in nanoseconds.
To construct this query, do the following:
In the Columns menu, select the start_time , name , kind , and
duration_nano fields.
To truncate the start time to the hour, expand the menu on the start_time
column and select Group By . Make sure that the granularity menu is set
to Hour .
Click Apply .
When you select Group By for any column, the system groups entries by all
columns. In this example, the entries are grouped by the truncated value of
the start_time , the span name, the span kind, and the value of the
duration.
However, the objective for this example is to group entries by the
truncated time, the span name, and the span kind, and then for each group,
to compute the average duration. In the next step, you modify the grouping
and add an aggregation.
Expand the menu on the duration_nano field, select Aggregate , and
then set the Aggregation field to Average .
When you run the query, each row corresponds to a group, which consists
of a truncated time, a span name, and a span kind. The final entry in
each row is the average duration for all entries in that group.
The results of this query is similar to the following:
+-----------------------------------+----------------+----------+-----------------------+
| Row | hour_timestamp | span_name | kind | average_duation_nano |
| | TIMESTAMP | STRING | INTEGER | FLOAT |
+-----+-----------------------------+-----------+---------------+-----------------------+
| 1 | 2025-10-09 13:00:00.000 EDT | http.receive | 3 | 122138.22813990474
| 2 | 2025-10-09 13:00:00.000 EDT | query.request | 1 | 6740819304.390297
| 3 | 2025-10-09 13:00:00.000 EDT | client.handler | 2 | 6739339098.409376
Your query can include multiple aggregations. For example, to add a column
that counts the number of entries in each group, do the following:
In the Columns element, click Add column .
Select All (*) .
In the dialog, select Aggregate , select Count for the
Aggregation , and then select Apply .
With this change the grouping remains the same. Entries are grouped by
the truncated start time, span name, and span kind. However, for each group,
the query computes the average duration and the number of entries.
The corresponding SQL query for the previous example is as follows:
WITH
scope_query AS (
SELECT
*
FROM
` PROJECT_ID . global . _Trace . _AllSpans ` )
SELECT
-- Report the truncated start time, span name, span kind, average duration and number
-- of entries for each group.
TIMESTAMP_TRUNC ( start_time , HOUR ) AS hour_start_time ,
name AS span_name ,
kind ,
AVG ( duration_nano ) AS average_duration_nano ,
COUNT ( * ) AS count_all
FROM
scope_query
GROUP BY
TIMESTAMP_TRUNC ( start_time , HOUR ),
name ,
kind
LIMIT
100
What's next
Save and share a SQL query .
Chart SQL query results .
Sample SQL queries .
Query a linked dataset in BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
