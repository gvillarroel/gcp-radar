---
title: "Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer
knowledge_key: corpus
source_id: site-docs-reference-5
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/admin-jobs-explorer
  title: "Use administrative jobs explorer \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Use administrative jobs explorer
As a BigQuery administrator, you can use the administrative jobs
explorer to help you monitor jobs activity across your organization. Jobs
explorer also provides an array of filters and sorting options to troubleshoot
and identify problematic jobs. Jobs explorer removes the need for you to have a
deep understanding of INFORMATION_SCHEMA , and lets you quickly view job
information such as owner, project, slot usage, duration, and more, without the
need to write INFORMATION_SCHEMA queries.
You can also select individual jobs to open the job details
page , which provides query details such as execution graphs,
SQL text, and execution history to help you diagnose and troubleshoot queries.
From this page, you can compare two jobs to highlight
significant differences between them and address potential performance issues.
BigQuery provides job details and insights through the following INFORMATION_SCHEMA views:
INFORMATION_SCHEMA.JOBS_BY_PROJECT
INFORMATION_SCHEMA.JOBS_BY_ORGANIZATION
INFORMATION_SCHEMA.JOBS_BY_USER
Note: If you use organization restrictions, see Enable access to Google-owned resources .
Required roles
To get the permissions that
you need to use administrative jobs explorer,
ask your administrator to grant you the
BigQuery Resource Viewer ( roles/bigquery.resourceViewer )
IAM role on your organization or project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to use administrative jobs explorer. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to use administrative jobs explorer:
To see data at project level:
bigquery.jobs.listAll
on the project
To see data at organization level:
bigquery.jobs.listAll
on the organization
To filter by reservations in your organization:
bigquery.reservations.list
on the organization
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Note: This organization view is only available if you have defined Google Cloud organizations.
Filter jobs
To filter jobs for queries that are contained in the
INFORMATION_SCHEMA.JOBS* views, do the following:
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
In the navigation menu, click Jobs explorer .
From the Location list, select the location for which you want to view the
jobs.
Apply optional Filters as needed:
Job scope . Such as the current project, organization, and your jobs.
Status . Such as completed, error, active, and queued.
Job priority . Such as interactive or batch jobs.
Job ID .
Owner . Email ID of the job's owner (only applicable when job scope is project or organization).
Project ID . (Only applicable when job scope is organization)
Reservation ID . (Only applicable when job scope is organization)
Slot time more than . Jobs that took more time than the specified slot time.
Duration more than . Jobs that took longer than the specified duration.
Bytes processed more than . Jobs that processed more bytes than the specified processed bytes.
Query Insights . Types of query insights, such as slot contention,
memory shuffle capacity exceeded, and data input scale change.
Query Hash . Query hash contains the hashes of the query. It is a hexadecimal STRING
hash that ignores comments, parameter values, UDFs, and literals.
This field appears for successful GoogleSQL queries that are not cache hits.
Labels . key:value pairs that can be assigned to a job. You can filter using a key, value, or key:value combination.
Job category . The type of query, such as Standard or Continuous query .
View query execution details
To view query execution details of jobs, do the following:
Go to the Jobs explorer page.
Go to Jobs explorer
To view jobs, click Jobs explorer .
Filter jobs to view limited jobs.
Click a job for which you want to view the query execution details.
In the Query results pane, click the Execution graph tab to see the execution details of your job.
For information about how to interpret insights, see
Interpret query performance insights .
Get BigQuery job details
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To request feedback or support for this feature, send an email to
bq-performance-troubleshooting+feedback@google.com .
From the administrative jobs explorer, you can view the BigQuery
details page. The BigQuery job details page combines several
query details into one page to assist in diagnosing and troubleshooting queries.
The Performance tab compiles query information including the execution
graph, the SQL text, and execution history.
The Performance tab also supports query comparison, enabling you to compare
your historical usage of the query and analyze and resolve any possible
performance degradation. For more information about job comparison, see
Compare jobs .
Before you begin
To get the permissions that
you need to work with BigQuery job details and system-level
details,
ask your administrator to grant you the
following IAM roles on your organization or project:
View job details:
BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run
View system-level details:
BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to work with BigQuery job details and system-level
details. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to work with BigQuery job details and system-level
details:
To see data at project level:
bigquery.jobs.listAll
on the project
To see data at organization level:
bigquery.jobs.listAll
on the organization
To filter by reservations in your organization:
bigquery.reservations.list
on the organization
You might also be able to get
these permissions
with custom roles or
other predefined roles .
View job details
To view the job details page, do the following:
Go to the Jobs Explorer page.
Go to Jobs Explorer
Optional: filter the jobs
to narrow the available jobs displayed.
Click the job ID of the job you want to view. For queries that don't create a
job, the query ID appears and the link is disabled. For all other
queries, clicking the job ID displays the Job details page.
The Performance tab is displayed by default. You can navigate to the other
tabs to view additional job information.
Available query information
The following list describes the information and metrics available on the
Performance tab.
SQL Query : the text of the SQL query that created the job.
Job details : the information about the job, including the job ID, creation
time, bytes processed, and more. For more information, see View job
details .
Performance variance : information about how the job performed in
comparison to a past execution of the same query. BigQuery
compares the current job to a past execution with similar bytes processed
(+/- 5%) and the shortest job duration, if one exists. If no such past
execution exists, then BigQuery compares the current job to
the average of past executions in the last 30 days. If there are no past
executions, then this section indicates that no similar job was found for
comparison.
Execution history : a list of other executions of this query by query hash.
From this panel, you can select a job to compare to the job you are viewing. For
more information about comparing jobs, see Compare
jobs .
System load during execution : a description of the resources
BigQuery used to execute the job. This includes information
about the reservation settings used by this job, if applicable.
Execution graph : the execution graph of this job. For more information,
see Get query performance insights .
Compare jobs
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To request feedback or support for this feature, send an email to
bq-performance-troubleshooting+feedback@google.com .
The job performance comparison lets you compare your baseline job to
targeted jobs, and the query analysis highlights job details that differ
significantly between the two jobs. This helps you troubleshoot potential
performance issues between two query jobs.
Important details to consider for optimizing your queries when comparing two
queries include job duration, slot time, and bytes processed.
Before you begin
To get the permissions that
you need to work with BigQuery job details and system-level
details,
ask your administrator to grant you the
following IAM roles on your organization or project:
View job details:
BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the project where the queries were run
View system-level details:
BigQuery Resource Viewer ( roles/bigquery.resourceViewer ) - the administration project
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to work with BigQuery job details and system-level
details. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to work with BigQuery job details and system-level
details:
To see data at project level:
bigquery.jobs.listAll
on the project
To see data at organization level:
bigquery.jobs.listAll
on the organization
To filter by reservations in your organization:
bigquery.reservations.list
on the organization
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Understand job performance comparison
The following sections describe the Job performance comparison page and the
troubleshooting information it provides.
You can turn on the Show only significant
differences toggle to view only significant differences
between the two jobs for all metrics included on this page.
Significant differences are highlighted in green, yellow, and red:
Green : The change moves in a positive direction. For example, because
shorter query duration is better, if the target job runs faster than the
baseline job, it is marked as green.
Yellow : The change moves in a negative direction, but the difference is
less than 20%.
Red : The change moves in a negative direction, and the difference is
larger than 20%.
Query level analysis
The Query level analysis pane describes the differences between the two jobs
at the query level. It contains three tabs: the Metrics , SQL text , and
Execution graph tabs.
The Metrics tab describes the query metrics for the two jobs. Use this tab
to determine if discrepancies exist between job duration, unused
accelerators, and other metrics.
The SQL text tab shows the two SQL statements that created the jobs and
highlights differences between them. Use this tab to determine whether
changes in the SQL statements affected job performance.
The Execution graph tab compares the execution
graphs of the two jobs. Use this tab to
determine whether discrepancies occurred at any stage during the execution of
the jobs.
System level analysis
The System level analysis pane describes the factors potentially affecting
the two jobs at the system level. It consists of three sections: the
Project table, the Reservation table, and the Settings table.
The System level analysis pane can suggest areas for
improvement based on the differences between the two queries.
For example, if a job received fewer slots than previous executions, it might be
impacted by resource constraints in the system. If this is indicated, check the
project level metrics to see if the project as a whole received fewer slots. If
the project did not receive fewer slots, then contention likely occurred at the
project level, such as an increase in job concurrency. If the project did
receive fewer slots, then check the reservation level to identify any
constraints.
The Project table compares the two jobs at the project level. Use this
table to determine if any optimization is possible at the project level.
The Reservation table compares the two jobs at the
reservation level. Use this table to
identify differences in reservation usage between the two queries that
could affect job performance.
The Settings table compares the reservation settings between the two
jobs. Use this table to detect any changes to reservation settings that could
have caused a performance impact.
Compare two jobs
To compare two jobs:
Go to the Jobs Explorer page.
Go to Jobs Explorer
Optional: filter the jobs
to narrow the available jobs displayed.
Click the job ID of the initial job you want to view and compare. The Job
details page appears.
Click the Performance tab.
Click Compare Job .
In the Job one (baseline job) field, click Browse . The
Similar comparable jobs panel appears.
Identify the job you want to compare your baseline job to, and click
Compare . The job performance comparison appears.
To view only significant differences between the two jobs, turn on the Show
only significant differences toggle.
Change the jobs being compared
To change the jobs being compared:
Go to the Job performance comparison page.
In the Job one (baseline job) field, click Browse .
In the Similar comparable jobs pane, identify the job you want to compare
and click Compare .
Pricing
Jobs explorer is available at no additional
cost. Queries that are used to populate these charts aren't billed and don't use slots in
user-owned reservations. Queries that process too much data are timed out.
What's next
Learn about reservations .
Learn about purchasing slots .
Learn how to estimate slot capacity requirements .
Learn how to view slot recommendations and insights .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
