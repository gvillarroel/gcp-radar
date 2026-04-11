---
title: "Set up and view the violation dashboard \_|\_ VPC Service Controls \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/violation-dashboard
  title: "Set up and view the violation dashboard \_|\_ VPC Service Controls \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Set up and view the violation dashboard
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set up and use the VPC Service Controls violation dashboard
to view the details about access denials by service perimeters in your organization.
Cost
When you use the VPC Service Controls violation dashboard, you need to consider the
costs that you incur for using the following billable components of Google Cloud:
Because you deploy Cloud Logging resources in your organization while setting
up the violation dashboard, you incur cost for using these resources.
Because you use an organization-level Log Router sink for the violation dashboard,
VPC Service Controls duplicates all of your audit logs in the configured log bucket.
You incur cost for using the log bucket. To estimate the potential cost for using
the log bucket, query and calculate the volume of your audit logs. For more information
about querying your existing logs, see View logs .
For information about the Cloud Logging and Cloud Monitoring pricing, see
Google Cloud Observability pricing .
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
Enable the Service Usage API.
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
Enable the Service Usage API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Required roles
To get the permissions that
you need to set up the violation dashboard,
ask your administrator to grant you the
Logging Admin ( roles/logging.admin )
IAM role on the project in which you configure a log bucket during the violation dashboard setup.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to set up the violation dashboard. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to set up the violation dashboard:
To list the log buckets from the selected project:
logging.buckets.list
To create a new log bucket:
logging.buckets.create
To enable Observability Analytics in the selected log bucket:
logging.buckets.update
To create a new Log Router sink:
logging.sinks.create
You might also be able to get
these permissions
with custom roles or
other predefined roles .
To get the permissions that
you need to view the violation dashboard,
ask your administrator to grant you the
following IAM roles on the project in which you configure a log bucket during the violation dashboard setup:
Logs View Accessor ( roles/logging.viewAccessor )
VPC Service Controls Troubleshooter Viewer ( roles/accesscontextmanager.vpcScTroubleshooterViewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to view the violation dashboard. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view the violation dashboard:
To display the access policy names:
accesscontextmanager.policies.list
To display the project names:
resourcemanager.projects.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Set up the dashboard
To set up the violation dashboard, you need to configure a log bucket
to aggregate the VPC Service Controls audit logs and create an organization-level
Log Router sink that will route all the
VPC Service Controls audit logs to the log bucket.
To set up the violation dashboard for your organization, do the following one time:
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
If you are prompted, select your organization. You can access the VPC Service
Controls page only at the organization level.
On the VPC Service Controls page, click Violation dashboard .
On the Violation dashboard setup page, in the Project field, select the
project that contains the log bucket in which you want to aggregate the audit logs.
For Log bucket destination , select Existing log bucket or Create
new log bucket .
If you want to use an existing log bucket, in the Log bucket list,
select the required log bucket.
If you create a new log bucket , enter the
required information in the following fields:
Name : A name for your log bucket.
Description : A description for your log bucket.
Region : The region where you want to store your logs.
Note: After you create the log bucket, you can't change the log bucket's
region.
Retention period : A custom duration for which Cloud Logging
needs to retain your logs.
For more information about these fields, see Create a bucket .
Click Create log router sink . VPC Service Controls creates a new Log Router
sink named reserved_vpc_sc_dashboard_log_router in the selected project.
This operation takes about a minute to complete.
Note: When you create a new log bucket or select an existing log bucket that doesn't
have Observability Analytics enabled, VPC Service Controls automatically enables
Observability Analytics in the log bucket before VPC Service Controls creates
the Log Router sink.
View access denials in the dashboard
After you set up the violation dashboard, you can use the dashboard to view the details
about access denials by service perimeters in your organization.
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
If you are prompted, select your organization. You can access the VPC Service
Controls page only at the organization level.
On the VPC Service Controls page, click Violation dashboard . The Violation
dashboard page appears.
Note: If you select a new log bucket during the setup, you might initially see an empty
dashboard with no access denials. When new access denials occur, the information about
these denials appear in the dashboard.
On the Violation dashboard page, you can do the following operations:
Filtering: In the filter_list
Filter list, select the required options to filter and view specific
data—for example, principal, access policy, resource. To apply a specific
value from one of the tables as a filter, click filter_alt
Add filter preceding the value.
Time intervals: To select the time range for the data, click one of the predefined
time intervals. To define a custom time range, click Custom .
Tables and charts: Scroll the Violation dashboard page to view the data categorized
under different tables and charts. The violation dashboard displays the following tables
and charts:
Violations
Violation count
Top violations by principal
Top violations by principal IP
Top violations by service
Top violations by method
Top violations by resource
Top violations by service perimeter
Top violations by access policy
Count: The Violations table lists the total occurrences for each access
denial in the Count column, whereas the Last occurrence column shows the
timestamp of the most recent denial. The Unique count columns in other tables
in the violation dashboard show unique occurrences grouped by attributes such
as principal, principal IP, and service.
Troubleshoot access denials: Click the token in the Troubleshooting
token column of the Violations table to open the violation analyzer and
view the troubleshooting result for the access denial. This column displays only
the most recent troubleshooting token for the access denial. To view all occurrences
of the access denial, click unfold_more
Unfold more . The Violation instances pane opens and lists all tokens
for the access denial along with their timestamps and unique IDs. Clicking a
token in this pane opens the troubleshooting result for the access denial.
For information about using the violation analyzer, see Diagnose an access denial
in violation analyzer .
Pagination: The violation dashboard paginates the data displayed in all tables.
Click chevron_left Previous and
chevron_right Next to navigate and
view the paginated data.
Modify Log Router sink: To modify the configured Log Router sink, click Edit log sink .
For information about modifying a Log Router sink, see Manage sinks .
Troubleshoot
If you encounter issues while using the violation dashboard, then try troubleshooting
and resolving the issues as described in the following sections.
A service perimeter denied access to your user account
If you encounter an error due to insufficient permissions, check if any service perimeter
within your organization is denying access to the Cloud Logging API. To resolve this
issue, create an ingress rule that lets you access the Cloud Logging API:
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
If you are prompted, select your organization.
On the VPC Service Controls page, click the service perimeter that protects
the project containing your log bucket.
Create an ingress rule
that lets you access the Cloud Logging API in the project.
A service perimeter denied access to the log bucket
If VPC Service Controls doesn't route your audit logs to the configured log bucket,
you might have to create an ingress rule that allows the Log Router sink's service
account to access the Cloud Logging API in your service perimeter:
In the Google Cloud console, go to the Log Router page.
Go to Log Router
On the Log Router page, select more_vert Menu
for the configured Log Router sink, and then select View sink details .
In the Sink details dialog, from the Writer identity field, copy the service
account that the Log Router sink uses.
In the Google Cloud console, go to the VPC Service Controls page.
Go to VPC Service Controls
If you are prompted, select your organization.
On the VPC Service Controls page, click the service perimeter that protects
the project containing your log bucket.
Create an ingress rule
that allows the Log Router sink's service account to access the Cloud Logging API in the project.
Limitations
VPC Service Controls doesn't backfill the audit logs from other project-level buckets:
If you create a new log bucket while setting up the violation dashboard, VPC Service Controls
doesn't backfill the existing logs from other projects within your organization
into the newly created log bucket. The dashboard appears empty until VPC Service Controls
logs new violations and routes these logs to the new log bucket.
If you select an existing log bucket while setting up the violation dashboard,
the dashboard displays information about all existing logs from the selected log
bucket. The dashboard doesn't display logs from other projects within your
organization because VPC Service Controls doesn't backfill these logs into
the selected log bucket.
What's next
VPC Service Controls audit logging
Learn how to diagnose an access denial in violation analyzer and view its comprehensive evaluation report.
Diagnose an access denial and view the classic report
Troubleshoot common VPC Service Controls issues with Google Cloud services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
