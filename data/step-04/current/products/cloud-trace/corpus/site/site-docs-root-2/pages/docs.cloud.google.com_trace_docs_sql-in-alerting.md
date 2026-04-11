---
title: "Monitor your SQL query results with an alerting policy \_|\_ Cloud Trace \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/sql-in-alerting
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/sql-in-alerting
  title: "Monitor your SQL query results with an alerting policy \_|\_ Cloud Trace\
    \ \_|\_ Google Cloud Documentation"
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
Monitor your SQL query results with an alerting policy
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
This document explains how to create an alerting policy to monitor the results
of a query you run in Observability Analytics. These queries are written in SQL and they
must query an observability view named _AllSpans . The alerting policy notifies
you when the query result satisfies conditions that you specify.
Alerting policies that you create from the Observability Analytics page run on
a BigQuery engine. Therefore, the data being queried must be
accessible through a linked BigQuery dataset .
For general information about Observability Analytics, see
Query and analyze traces with Observability Analytics .
How alerting policies work
An alerting policy describes the circumstances under which you want to be
alerted and how you want to be notified about an incident. There are a
few different approaches that you can use to get notified
when content or patterns appear in your trace data:
To monitor the number of Cloud Trace spans ingested per month,
your quota usage, and your rate of span ingestion, create alerting policies
in Cloud Monitoring. If you have never created an alerting policy, see
Create alerting policies
for detailed information about using the Cloud Monitoring console.
To view or explore individual traces or spans, or view attributes that are
attached to spans, use the Trace Explorer page. For information
about that page, see Find and explore traces .
To monitor aggregate analysis of your trace data, combine Observability Analytics
with alerting policies. In this scenario, you use SQL queries to query the
_AllSpans view on the observability bucket named _Trace . Finally, you
create the alerting policy to monitor the SQL-query results. This type of
alerting policy is called a SQL-based alerting policy .
To learn more about how your trace data is stored, see
Storage overview .
The remainder of this document describes how to use SQL-based alerting policies.
Alerting policy components
A SQL-based alerting policy contains a condition and a schedule:
The condition contains the query , which is a SQL query that queries
your data. The condition
also defines the circumstances under which the query result
causes Monitoring to create an incident.
The schedule defines how frequently the alerting policy runs its query.
The schedule also defines the size of the lookback window , which is a filter
that selects only data that has been received since the previous time the
query was evaluated. For example, if you set the schedule to 60 minutes, then
the query is run every 60 minutes using a lookback window that selects the
most-recent 60 minutes of data.
Alerting policies also contain a list of
notification channels .
When the condition of the alerting policy is met,
Cloud Monitoring creates an incident and then sends
notifications about the incident through these channels.
An incident is a record of the data that caused the condition to be
met along with other relevant information. This
information can help you troubleshoot the issues that caused the incident.
You can view the incident by using the Google Cloud console.
Evaluation types for SQL-based alerting policies
Conditions that monitor a SQL query result support two types of evaluation:
Row count threshold : The condition is met when the number of rows in the
query result is greater than, equal to, or less than a
threshold value.
Boolean : The condition is met when a specific boolean column in the query
result table contains any row with a value of true .
Alerting policies that monitor a SQL query result must have only one condition.
Alerting policies and BigQuery
For an alerting policy to query your trace data, you must configure a
linked BigQuery dataset .
Linked datasets let BigQuery read your trace data,
and they let you perform BigQuery functions on the data
returned by your SQL query.
When an alerting policy runs a SQL query, that query is run on
BigQuery engine in the Google Cloud project where the
alerting policy is defined. By default, queries run on the
BigQuery engine use on-demand slots. On-demand slots and
reserved slots are subject to
BigQuery pricing .
You can also choose to configure dedicated
BigQuery slot reservations for your project:
Create a reservation with dedicated slots or identify an
existing reservation.
Create reservation assignments for your project .
Lookback window and incident propagation time
When an alerting policy is scheduled to evaluate its condition, Observability Analytics
delays the SQL query execution by five minutes to provide time for
Cloud Logging to index the data received during the lookback window.
For example, if the alerting policy uses a lookback window that ends at 2:00 PM,
then Observability Analytics doesn't execute the SQL query until 2:05 PM.
If the alert condition is met after the query is executed, then it can take up
to two additional minutes for the incident to propagate through the
system.
Query failures
Queries issued by SQL-based alerting policies can fail for various reasons,
including the following:
The Monitoring Service Account no longer exists or it no longer has the
necessary permissions to read the trace data that is being queried.
The query execution time exceeds fives minutes.
An internal error occurs.
A failed query generates a log entry containing the alert policy ID and the
error status. You can use a
log-based alerting policy to create
an alert when an error is logged.
Before you begin
This section assumes that you have a linked BigQuery
dataset for your trace data .
Before you create a SQL-based alerting policy, complete the following steps:
To get the permissions that
you need to query trace data and create SQL-based alerting policies,
ask your administrator to grant you the
following IAM roles on your project:
Query trace data:
Cloud Trace User ( roles/cloudtrace.user )
Create SQL-based alerting policies:
Monitoring Editor ( roles/monitoring.editor )
Logging SqlAlertWriter ( roles/logging.sqlAlertWriter )
Verify that the
Monitoring Service Account
exists and that it has the following roles:
Monitoring Service Agent ( roles/monitoring.notificationServiceAgent )
on your project.
BigQuery Data Viewer ( roles/bigquery.dataViewer )
on your linked dataset.
If the Monitoring Service Account doesn't exist, then see
Troubleshoot: No Monitoring Service Account .
Configure the notification channels that you want to use to
receive any notifications for incidents. For redundancy purposes, we
recommend that you create multiple types of notification channels. For more
information, see
Create and manage notification channels .
Create a SQL-based alerting policy
To create a SQL-based alerting policy, do the following:
Google Cloud console
In the Google Cloud console, go to the
manage_search Log Analytics page:
Go to Log Analytics
If you use the search bar to find this page, then select the result whose subheading is
Logging .
On the Observability Analytics page, in the query editor,
enter a SQL query that queries your trace data.
On the toolbar, click Run on BigQuery .
Observability Analytics runs your query on the BigQuery engine and
displays the results in the Results table.
If Run on BigQuery isn't shown, then click
settings Select query engine
and then click BigQuery . The Run query button changes to
Run on BigQuery .
On the Results table of the Observability Analytics page, click
add_alert Create alert .
The Observability Analytics page shows the Create sql alert policy window, which
shows your query under the SQL query section.
In the Alert condition section,
configure the condition and schedule of your alerting policy.
Configure the alert details of your alerting policy.
Add notification channels
and configure notification content, such as a custom subject line.
Optional: Add alerting policy labels and
documentation .
Click Next .
Review your alerting policy and then create it by clicking Save .
Cloud Monitoring API
Use the alertPolicies.create
method to programmatically create alerting policies. The
Condition
type of your alerting policy must be
MonitoringQueryLanguageCondition , which is an instance of
SqlCondition .
This condition type allows the conditions of your
alerting policy to be defined with SQL.
To define the schedule,
set a periodicity value for one of the minutes , hours , or days
fields. For example, if you want the query to run every 12 hours, then set
the periodicity of the hours field to 12.
To define the condition, use the following fields:
boolean_test : Configures the alerting policy so that its condition is met
when a row of a boolean column in the query result table contains a true
value.
row_count_test : Configures the alerting policy so that its condition is met
when the number of rows in the query result table meets a certain
threshold.
For a complete list of fields and definitions, see
SqlCondition in the Cloud Monitoring API documentation.
For more information about the Monitoring API for alerting policies,
see Managing alerting policies by API .
Terraform
Install and configure Terraform
for you project. For App Hub
configurations, select the App Hub host project or management project.
In the Cloud Shell,
go to the directory that contains your Terraform configuration.
In your Terraform configuration, configure an instance of the
google_monitoring_alert_policy resource,
including condition_sql .
In the Cloud Shell, enter terraform apply .
To modify your alerting policy, make your edits and then re-apply the
Terraform configuration. For more information, see
Manage alerting policies with Terraform .
For general information about using Google Cloud with Terraform, see
Terraform with Google Cloud .
Limitations
You can have one condition per SQL-based alerting policy.
SQL-based alerting policies can't query an
analytics view .
Queries issued by SQL-based alerting policies fail when their execution time
exceeds five minutes.
There is a delay of up to seven minutes, plus the query execution time,
between when a query is scheduled and when an incident is created.
For a full list of limits associated with alerting policies, see
Monitoring limits .
What's next
Query a linked BigQuery dataset
Sample SQL queries
Save and share a SQL query
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
