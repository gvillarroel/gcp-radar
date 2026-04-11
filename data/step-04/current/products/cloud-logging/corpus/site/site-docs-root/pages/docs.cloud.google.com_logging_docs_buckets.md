---
title: "Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/buckets
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/buckets
  title: "Configure log buckets \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Guides
Send feedback
Configure log buckets
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create and manage Cloud Logging buckets using
the Google Cloud console, the Google Cloud CLI , and the
Logging API .
It also provides instructions for creating and managing log buckets at the
Google Cloud project level. You can't create log buckets at the folder
or organization level; however, Cloud Logging automatically creates
_Default and _Required log buckets at the folder and organization level for
you.
You can upgrade log buckets to use Observability Analytics .
Observability Analytics lets you run SQL queries on your log data, helping you
troubleshoot application, security, and networking issues.
To use BigQuery to analyze your log data, you have two choices:
Upgrade a log bucket to use Observability Analytics and then create a
linked BigQuery dataset . In this scenario,
Logging stores your log data but
BigQuery can read the log data.
Export your log entries to BigQuery. In this scenario, you
must create a sink, BigQuery stores and manages the data,
and you have the option to use partitioned tables.
When your log data is available to BigQuery, you can join your
log data with other data stored in BigQuery, and you can access
this data from other tools like Looker Studio and Looker.
For a conceptual overview of buckets, see
Routing and storage overview: Log buckets .
This document doesn't describe how to create a log bucket that uses a
customer-managed encryption key (CMEK). If you are interested in that topic,
then see
Configure CMEK for logs storage .
Before you begin
To get started with buckets, do the following:
Configure your Google Cloud project:
Verify that billing is enabled for your Google Cloud project .
To get the permissions that
you need to create, upgrade, and link a log bucket,
ask your administrator to grant you the
Logs Configuration Writer ( roles/logging.configWriter )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For the full list of permissions and roles, see
Access control with IAM .
Optional: To use BigQuery to view the data stored in a
log bucket, do the following:
Make sure that the BigQuery API is enabled. You
can verify that the API is enabled by
listing available services .
Your Identity and Access Management role includes the permissions that let you create
a linked dataset .
For more information, see
Permissions for linked BigQuery datasets .
Understand the supported regions
in which you can store your logs.
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
If you plan to use the Google Cloud CLI or Cloud Logging API to
create or manage your log buckets, then understand the
LogBucket formatting requirements.
Create a bucket
You can create a maximum of 100 buckets per
Google Cloud project.
To create a user-defined log bucket for your Google Cloud project, do the
following:
Google Cloud console
To create a log bucket in your Google Cloud project, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Click Create log bucket .
Enter a Name and Description for your bucket.
Optional: Upgrade your bucket to use Observability Analytics.
Note: After a log bucket has been upgraded to use Observability Analytics, you
can't reconfigure the log bucket to change or remove the use of
Observability Analytics.
Select Upgrade to use Observability Analytics .
When you upgrade a bucket to use Observability Analytics, you can query
your logs in the Observability Analytics page by using SQL queries. You
can also continue to view your logs by using the Logs Explorer.
Optional: To view your logs in BigQuery, select
Create a new BigQuery dataset that links to this bucket and enter a unique dataset name.
When you select this option, BigQuery can read the
data stored in your log bucket. You can now query in the
BigQuery interface where you can join your log data,
and also access data from other tools like Looker Studio
and Looker.
To select the storage region
for your logs, click the Select log bucket region menu and select a
region.
Note: Log buckets in the global region or in multi-regions don't offer
added resiliency compared to log buckets created in single regions like
us-west1 .
Note: After you create your log bucket, you
can't change your bucket's region. If you need a bucket in a different region, you must create a
new bucket in that region,
redirect the appropriate sinks to the new bucket , and then
delete the old bucket .
Optional: To set a custom retention period for the
logs in the bucket, click Next .
In the Retention period field, enter the number of days, between
1 day and
3650 days, that you want Cloud Logging to
retain your logs. If you don't customize the retention period, the default
is 30 days .
You can also update your bucket to apply custom retention after you create
it.
Click Create bucket .
After the log bucket is created, Logging upgrades the
bucket and creates the dataset link, if these options were selected.
It might take a moment for these steps to complete.
gcloud
Note: You can't create a linked BigQuery dataset when you create
the log bucket unless you use the Google Cloud console. However,
if you create and upgrade a log bucket, then you can use the
gcloud logging links create command
method to create a linked dataset.
To only create a log bucket,
run the gcloud logging buckets create command. If you want
to upgrade the log bucket to use Observability Analytics, then include
the --enable-analytics and
--async flags,
and make sure that you set the variable LOCATION to a
supported region :
gcloud logging buckets create BUCKET_ID --location= LOCATION --enable-analytics --async OPTIONAL_FLAGS
The flag --async forces the
command to be asynchronous. The return of
an asynchronous method is an Operation object, it
contains information about the progress of the method. When the
method completes, the Operation object contains the status. For more
information, see Asynchronous API methods .
If you don't want to upgrade the log bucket to use Observability Analytics, then
omit the --enable-analytics and
--async flags.
For example, if you want to create a bucket with the BUCKET_ID
my-bucket in the global region, your command would look like the
following:
gcloud logging buckets create my-bucket --location global --description "My first bucket"
For example, to create a bucket with the BUCKET_ID
my-upgraded-bucket in the global location,
and then upgrade the log bucket to use Observability Analytics,
your command would look like the following:
gcloud logging buckets create my-upgraded-bucket --location global \
--description "My first upgraded bucket" \
--enable-analytics --retention-days=45
Note: After you create your log bucket, you
can't change your bucket's region. If you need a bucket in a different region, you must create a
new bucket in that region,
redirect the appropriate sinks to the new bucket , and then
delete the old bucket .
REST
Note: You can't create a linked BigQuery dataset as
part of the create operation unless you use the Google Cloud console. However,
if you create and upgrade a log bucket, then you can use the
projects.locations.buckets.links.create
method to create a linked dataset.
To create a bucket, use the
projects.locations.buckets.create
or the
projects.locations.buckets.createAsync
method. Prepare the arguments to the method as follows:
Set the parent parameter to be the resource in which
to create the bucket:
projects/ PROJECT_ID /locations/ LOCATION
The variable LOCATION refers to the
region in which you
want your logs to be stored.
For example, if you want to create a bucket for project my-project in
the in the global region, your parent parameter would look like
this: projects/my-project/locations/global
Set the bucketId parameter; for example, my-bucket .
Do one of the following:
To create a log bucket and then upgrade the log bucket to use
Observability Analytics:
Set the LogBucket.analyticsEnabled boolean to true .
Note: After a log bucket has been upgraded to use
Observability Analytics, you can't reconfigure the log bucket to
change or remove the use of Observability Analytics.
Call the asynchronous method
projects.locations.buckets.createAsync
to create the bucket.
The response to the asynchronous methods is an
Operation object. This object contains
information about the progress of the method. When the method
completes, the Operation object contains the status. For more
information, see Asynchronous API methods .
The createAsync method takes several minutes to complete.
This method method doesn't generate an error message or
fail when the analyticsEnabled boolean is set to true .
Otherwise, call the synchronous method
projects.locations.buckets.create
to create the bucket.
After creating a bucket, create a sink to route log entries to your bucket and
configure log views
to control who can access the logs in your new bucket and which logs are
accessible to them.
You can also update the bucket to configure
custom retention and
restricted fields .
Track volume of logs stored in log buckets
The Logs Storage page in the Google Cloud console tracks the volume of
logs data stored in log buckets:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
The Logs Storage page displays a summary of statistics for your
Google Cloud project:
The following statistics are reported:
Current month ingestion : The amount of logs data that your
Google Cloud project has stored in log buckets since the first day
of the current calendar month.
Previous month ingestion : The amount of logs data that your
Google Cloud project stored in log buckets in the last calendar month.
Projected ingestion by EOM : The estimated amount of logs data that your
Google Cloud project will store in log buckets by the end of the
current calendar month, based on current usage.
Current month billable storage : The amount of logs data that has been
retained for over 30 days that is billed.
The previous statistics don't include logs in the
_Required bucket . The
logs in that bucket can't be excluded or disabled.
The Log Router page in the Google Cloud console gives you tools that you
can use to minimize any charges for storing logs in log buckets or
for storage that exceeds your monthly allotment. You can do the following:
Disable logs from being stored at the bucket level.
Exclude certain log entries from being stored in log buckets.
For more information, see
Manage sinks .
Manage buckets
This section describes how to manage your log buckets using the Google Cloud CLI
or the Google Cloud console.
Update a bucket
To update the properties of your bucket, such as the
description or retention period, do the following:
Google Cloud console
To update your bucket's properties, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
For the bucket you want to update, click more_vert More .
Select Edit bucket .
Edit your bucket as needed.
Click Update bucket .
gcloud
To update your bucket's properties, run the
gcloud logging buckets update command:
gcloud logging buckets update BUCKET_ID --location= LOCATION UPDATED_ATTRIBUTES
For example:
gcloud logging buckets update my-bucket --location=global --description "Updated description"
REST
To update your bucket's properties, use
projects.locations.buckets.patch
in the Logging API.
Upgrade a bucket to use Observability Analytics
After you upgrade a bucket to use Observability Analytics, any new log entries that
arrive are available to analyze in the Observability Analytics interface. You can't
undo an upgrade operation on a bucket.
To upgrade an existing bucket to use Observability Analytics, the following
restrictions apply:
The log bucket was created at the Google Cloud project level.
The log bucket is unlocked unless it is the
_Required bucket.
There aren't pending updates to the bucket.
Google Cloud console
To upgrade an existing bucket to use Observability Analytics, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Locate the bucket that you want to upgrade.
When the Observability Analytics available column displays Upgrade ,
you can upgrade the log bucket to use Observability Analytics.
Click Upgrade .
A dialog opens. Click Confirm .
gcloud
To upgrade your log bucket to use Observability Analytics, run the
gcloud logging buckets update command. You must
set the --enable-analytics
flag, and we recommend that you also include the
--async flag:
gcloud logging buckets update BUCKET_ID --location= LOCATION --enable-analytics --async
The flag --async forces the
command to be asynchronous. The return of an asynchronous
method is an Operation object, and it
contains information about the progress of the method. When the
method completes, the Operation object contains the status. For more
information, see Asynchronous API methods .
Note: Don't update any other property of a log bucket when you upgrade
the log bucket to use Observability Analytics. For example, a call to the
update command that changes the retention period and upgrades the
log bucket fails.
REST
To upgrade a log bucket to use Observability Analytics, use the
projects.locations.buckets.updateAsync
method of the Cloud Logging API.
Prepare the arguments to the method as follows:
Set the LogBucket.analyticsEnabled boolean to true .
For the query parameter of the command, use
updateMask=analyticsEnabled .
The response to the asynchronous methods is an
Operation object. This object contains
information about the progress of the method. When the method
completes, the Operation object contains the status. For more information,
see Asynchronous API methods .
The updateAsync might take several minutes to complete.
Create a linked BigQuery dataset
When you want to use the capabilities of BigQuery to analyze your
log data, upgrade a log bucket to use Observability Analytics, and then create a
linked dataset .
With this configuration,
Logging stores your log data but
BigQuery can read the log data.
Note: A log bucket can be linked to at most one BigQuery dataset.
Google Cloud console
To create a link to a BigQuery dataset for an existing
log bucket, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Locate the log bucket and verify that the Observability Analytics available
column displays Open .
If this column displays Upgrade , then the log bucket hasn't been
upgraded to use Observability Analytics. Configure Observability Analytics:
Click Upgrade .
Click Confirm in the dialog.
After the upgrade completes, proceed to the next step.
On the log bucket, click More more_vert ,
and then click Edit bucket .
The Edit log bucket dialog opens.
Select Create a new BigQuery dataset that links to this bucket and enter the name for the new dataset.
The dataset name must be unique for each Google Cloud project. If you enter
the name of an existing dataset, then you receive the following error:
Dataset name must be unique in the selected region.
Click Done and then click Update bucket .
After Logging displays the linked dataset name on the
Logs Storage page, it might take several minutes before
BigQuery recognizes the dataset.
gcloud
To create a linked dataset for a log bucket that is upgraded
to use Observability Analytics, run the
gcloud logging links create command:
gcloud logging links create LINK_ID --bucket= BUCKET_ID --location= LOCATION
The LINK_ID that you provide is used as the
name of the BigQuery dataset, and the value of this field must
be unique for your Google Cloud project.
The links create command is asynchronous. The return of an
asynchronous method is an Operation object, and it
contains information about the progress of the method. When the
method completes, the Operation object contains the status. For more
information, see Asynchronous API methods .
The links create command takes several minutes to complete.
For example, the following command creates a linked dataset named
mylink for the log bucket named my-bucket :
gcloud logging links create mylink --bucket=my-bucket --location=global
The dataset name must be unique for each Google Cloud project. If you attempt
to create a dataset with the same name as an existing dataset, then you
receive the following error:
BigQuery dataset with name " LINK_ID " already exists.
If you attempt to create a linked dataset for a log bucket that isn't
upgraded to use Observability Analytics, then the following error is reported:
A link can only be created for an analytics-enabled bucket.
REST
To create a linked a BigQuery dataset for an existing log bucket
that is upgraded use Observability Analytics, call the asynchronous
projects.locations.buckets.links.create
method of the Cloud Logging API.
Prepare the arguments to the method as follows:
Construct the request body for the create command. The request body
is formatted as a Link object.
For the query parameter of the command, use
linkId= LINK_ID . The LINK_ID that you provide is used as the
name of the BigQuery dataset, and the value of this field must
be unique for your Google Cloud project..
The response to the asynchronous methods is an
Operation object. This object contains
information about the progress of the method. When the
method completes, the Operation object contains the status. For more
information, see Asynchronous API methods .
The links.create method takes several minutes to complete.
The dataset name must be unique for each Google Cloud project. If you attempt
to create a dataset with the same name as an existing dataset, then you
receive the following error:
BigQuery dataset with name " LINK_ID " already exists.
If you attempt to create a linked dataset for a log bucket that isn't
upgraded to use Observability Analytics, then the following error is reported:
A link can only be created for an analytics-enabled bucket.
Lock a bucket
Warning: Locking a log bucket is irreversible.
When you lock a bucket against updates, you also lock the bucket's
retention policy. After a retention policy is locked, you can't delete the
bucket until every log entry in the bucket has fulfilled the bucket's retention
period. If you want to prevent the accidental deletion of a project that
contains a locked log bucket, then add a lien to the project.
To learn more, see Protecting projects with liens .
To prevent anyone from updating or deleting a log bucket, lock the bucket. To
lock the bucket, do the following:
Google Cloud console
The Google Cloud console doesn't support locking a log bucket.
gcloud
To lock your bucket, run the gcloud logging buckets update
command with the --locked flag:
gcloud logging buckets update BUCKET_ID --location= LOCATION --locked
For example:
gcloud logging buckets update my-bucket --location=global --locked
REST
To lock your bucket's attributes, use
projects.locations.buckets.patch
in the Logging API. Set the locked parameter to true .
List buckets
To list the log buckets associated with a Google Cloud project, and to see
details such as retention settings, do the following:
Google Cloud console
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
A table named Log buckets lists the buckets associated with the current
Google Cloud project.
The table lists the following attributes for each log bucket:
Name : The name of the log bucket.
Description : The description of the bucket.
Retention period : The number of days that the bucket's data will
be stored by Cloud Logging.
Region : The geographic location in which the bucket's data is stored.
Status : Whether the bucket is locked or
unlocked.
If a bucket is pending deletion by Cloud Logging,
then its table entry is annotated with a warning warning
symbol.
gcloud
Run the gcloud logging buckets list command:
gcloud logging buckets list
You see the following attributes for the log buckets:
LOCATION : The region
in which the bucket's data is stored.
BUCKET_ID : The name of the log bucket.
RETENTION_DAYS : The number of days that the bucket's data will be
stored by Cloud Logging.
LIFECYCLE_STATE : Indicates whether the bucket is pending
deletion by Cloud Logging.
LOCKED : Whether the bucket is locked or
unlocked.
CREATE_TIME : A timestamp that indicates when the bucket was created.
UPDATE_TIME : A timestamp that indicates when the bucket was last
modified.
You can also view the attributes for just one bucket. For example, to view
the details for the _Default log bucket in the global region, run the
gcloud logging buckets describe command:
gcloud logging buckets describe _Default --location=global
REST
To list the log buckets associated with a Google Cloud project, use
projects.locations.buckets.list
in the Logging API.
View a bucket's details
To view the details of a single log bucket, do the following:
Google Cloud console
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
On the log bucket, click more_vert More and then
select View bucket details .
The dialog lists the following attributes for the log bucket:
Name : The name of the log bucket.
Description : The description of the log bucket.
Retention period : The number of days that the bucket's data will
be stored by Cloud Logging.
Region : The geographic location in which the bucket's data is stored.
Observability Analytics : Indicates whether your bucket is upgraded to use
Observability Analytics.
BigQuery analysis : Indicates whether a
BigQuery dataset is linked to your bucket.
BigQuery dataset : Provides a link to your
BigQuery dataset, which opens in the
BigQuery Studio page.
The date that BigQuery linking was enabled is also shown.
gcloud
Run the gcloud logging buckets describe command.
For example, the following command reports the details of the _Default
bucket:
gcloud logging buckets describe _Default --location=global
You see the following attributes for the log bucket:
createTime : A timestamp that indicates when the bucket was created.
description : The description of the log bucket.
lifecycleState : Indicates whether the bucket is pending
deletion by Cloud Logging.
name : The name of the log bucket.
retentionDays : The number of days that the bucket's data will be
stored by Cloud Logging.
updateTime : A timestamp that indicates when the bucket was last
modified.
REST
To view the details of a single log bucket, use
projects.locations.buckets.get
in the Logging API.
Delete a bucket
Note: If you delete a log bucket, then make sure that you also delete any
log sinks that route log entries to that log bucket.
You can delete log buckets that satisfy one of the following:
The log bucket is unlocked .
The log bucket is locked and all log entries in
the log bucket have fulfilled the bucket's retention period.
You can't delete a log bucket that is locked against updates
when that log bucket stores log entries that haven't fulfilled the bucket's
retention period.
After you issue the delete command, the log bucket transitions to the
DELETE_REQUESTED state , and it stays in that state
for 7 days. During this time period, Logging continues to
route logs to the log bucket. You can stop routing logs to the log bucket
by deleting or modifying the log sinks that route log entries to the bucket.
You can't create a new log bucket that uses the same name as a log bucket
that is in the DELETE_REQUESTED state.
Note: Log buckets that are in the DELETE_REQUESTED state count toward the
quota of buckets per Google Cloud project until
they are fully deleted.
To delete a log bucket, do the following:
Google Cloud console
To delete a log bucket, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Locate the bucket that you want to delete, and click
more_vert More .
If the Linked dataset in BigQuery column displays a
link, then delete the linked BigQuery dataset:
Click Edit bucket .
Clear Create a new BigQuery dataset that links to this bucket , click Done , and then click
Update bucket .
After you return to the Logs Storage page, click
more_vert More for the bucket you want to delete, then
proceed to the next steps.
Select Delete bucket .
On the confirmation panel, click Delete .
On the Logs Storage page, your bucket has an indicator that it's
pending deletion. The bucket, including all the logs in it, is deleted
after 7 days.
gcloud
To delete a log bucket, run the
gcloud logging buckets delete command:
gcloud logging buckets delete BUCKET_ID --location= LOCATION
You can't delete a log bucket when that bucket has a linked
BigQuery dataset:
To list the links associated with a log bucket, run the
gcloud logging links list command.
To delete a linked dataset, run the
gcloud logging links delete command.
REST
To delete a bucket, use
projects.locations.buckets.delete
in the Logging API.
It is an error to delete a log bucket if that bucket has a linked
BigQuery dataset. You must delete the linked dataset before
deleting the log bucket:
To list the links associated with a log bucket, run the
projects.locations.buckets.links.list
method.
To delete a linked dataset, run the
projects.locations.buckets.links.delete
method.
Restore a deleted bucket
You can restore, or undelete, a log bucket that's in the pending deletion state.
To restore a log bucket, do the following:
Google Cloud console
To restore a log bucket that is pending deletion, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
For the bucket you want to restore,
click more_vert More , and then select
Restore deleted bucket .
On the confirmation panel, click Restore .
On the Logs Storage page, the pending-deletion indicator is removed
from your log bucket.
gcloud
To restore a log bucket that is pending deletion, run the
gcloud logging buckets undelete command:
gcloud logging buckets undelete BUCKET_ID --location= LOCATION
REST
To restore a bucket that is pending deletion, use
projects.locations.buckets.undelete
in the Logging API.
Alert on monthly log bytes stored in log buckets
To create an alerting policy, on the Logs Storage page in the
Google Cloud console, click add_alert Create usage alert . This
button opens the Create alerting policy page in Monitoring,
and populates the metric type field with
logging.googleapis.com/billing/bytes_ingested .
To create an alerting policy that triggers when the number of
log bytes written to your log buckets exceeds your user-defined limit for
Cloud Logging , use the following settings.
Steps to create an alerting policy .
To create an alerting policy, do the following:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the resource, metric, and filters, expand the Select a metric menu and
then use the values in the New condition table:
Optional: To limit the menu to relevant entries, enter the resource or
metric name in the filter bar.
Select a Resource type . For example, select VM instance .
Select a Metric category . For example, select instance .
Select a Metric . For example, select CPU Utilization .
Select Apply .
Click Next and then configure the alerting policy trigger.
To complete these fields, use the values in the Configure alert trigger table.
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
To be notified when incidents are openend and closed, check
Notify on incident closure . By default, notifications are sent only when
incidents are openend.
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
New condition Field
Value
Resource and Metric
In the Resources menu, select Global .
In the Metric categories menu, select Logs-based metric .
In the Metrics menu, select Monthly log bytes ingested .
Filter
None.
Across time series
Time series aggregation
sum
Rolling window
60 m
Rolling window function
max
Configure alert trigger Field
Value
Condition type
Threshold
Alert trigger
Any time series violates
Threshold position
Above threshold
Threshold value
You determine the acceptable value.
Retest window
Minimum acceptable value is 30 minutes.
For more information about alerting policies, see
Alerting overview .
Write to a bucket
You don't directly write logs to a log bucket. Rather, you write logs to
Google Cloud resource: a Google Cloud project, folder, or organization.
The sinks in the parent resource then route the logs to destinations, including
log buckets. A sink routes logs to a log bucket destination when the logs match
the sink's filter and the sink has permission to route the logs to the log
bucket.
Read from a bucket
Each log bucket has a set of log views. To read logs from a log bucket, you
need access to a log view on the log bucket. Log views let you grant a user
access to only a subset of the logs stored in a log bucket. For information
about how to configure log views, and how to grant access to specific log views,
see Configure log views on a log bucket .
To read logs from a log bucket, do the following:
Google Cloud console
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
To customize which logs are displayed in the Logs Explorer,
click Refine scope , and then select an option. For example,
you can view logs stored in a project or by log view.
Click Apply . The Query results pane reloads with logs that match
the option you selected.
For more information, see
Logs Explorer overview: Refine scope .
gcloud
To read logs from a log bucket, use the
gcloud logging read command and add
a LOG_FILTER to select
data:
gcloud logging read LOG_FILTER --bucket= BUCKET_ID --location= LOCATION --view= LOG_VIEW_ID
REST
To read logs from a log bucket, use the
entries.list method. Set
resourceNames to specify the appropriate bucket and log view, and set
filter to select data.
For detailed information about the filtering syntax, see
Logging query language .
Configure custom retention
Note: Effective
April 1, 2023, retention costs
apply to logs data retained longer than the
default retention period of
the _Default bucket and user-defined log buckets.
For pricing details, see the Cloud Logging sections of the
Google Cloud Observability pricing
page. To review the billable storage for your
log buckets, go to the Logs Storage page of the Google Cloud console.
When you create a log bucket , you have the option to
customize the period for how long Cloud Logging stores the bucket's logs.
You can configure the retention period for any user-defined log bucket and also
for the _Default log bucket. You can't change the retention period of the
_Required log bucket.
If you shorten a bucket's retention, then there is a 7-day grace period in
which expired logs aren't deleted. You can't query or view those expired logs
but, in those 7 days, you can restore full access by extending the bucket's
retention. Logs stored during the grace period count towards your
retention costs.
Retention enforcement is an eventually-consistent process. If you write
log entries to a log bucket when the log entries are older than the bucket's
retention period, then you might be able to briefly see these log entries.
For example, if you send log entries that are 10 days old to a log bucket
with a retention period of 7 days, then those log entries are stored and then
eventually purged. These log entries don't contribute to your retention
costs. They do contribute to your storage costs. To minimize your storage
costs, don't write log entries that are older than your bucket's
retention period.
To update the retention period for a custom log bucket or for the
_Default log bucket, do the following:
Google Cloud console
To update a log bucket's retention period, do the following:
In the Google Cloud console, go to the Logs Storage page:
Go to Logs Storage
If you use the search bar to find this page, then select the result whose subheading is
Logging .
For the bucket you want to update,
click more_vert More , and then select
Edit bucket .
In the Retention field, enter the number of days, between
1 day and
3650 days, that you want Cloud Logging to
retain your logs.
Click Update bucket . Your new retention duration appears in the
Logs bucket list.
gcloud
To update the retention period for a log bucket, run the
gcloud logging buckets update command, after setting a value for
RETENTION_DAYS :
gcloud logging buckets update BUCKET_ID --location= LOCATION --retention-days= RETENTION_DAYS
For example, to retain the logs in the _Default bucket in the
global location for a year, your command would look like the following:
gcloud logging buckets update _Default --location=global --retention-days=365
If you extend a bucket's retention period, then the retention rules apply going
forward and not retroactively. Logs can't be recovered after the applicable
retention period ends.
Asynchronous API methods
The response of an asynchronous method like
projects.locations.buckets.createAsync
is an Operation object.
Applications that call an asynchronous API method should poll
the operation.get endpoint until the
value of the Operation.done field is true :
When done is false , the operation is in progress.
To refresh the status information, send a GET request to the
operation.get endpoint.
When done is true , the operation is complete and either the error or
response field is set:
error : When set, the asynchronous operation
failed. The value of this field is a Status object that
contains a gRPC error code and an error message.
response : When set, the asynchronous operation completed successfully,
and the value reflects the result.
To poll an asynchronous command by using the Google Cloud CLI, run the following
command:
gcloud logging operations describe OPERATION_ID --location= LOCATION --project= PROJECT_ID
For more information, see gcloud logging operations describe .
Troubleshoot common issues
If you encounter problems when using log buckets, refer to the following
troubleshooting steps and answers to common questions.
Why can't I delete this bucket?
If you're trying to delete a bucket, do the following:
Verify that you have the correct permissions to delete the bucket. For the
list of the permissions that you need, see
Access control with IAM .
Determine whether the bucket is locked by
listing the bucket's attributes . If the bucket is
locked, check the bucket's
retention period . You can't delete a locked bucket until
all of the logs in the bucket have fulfilled the bucket's retention period.
Verify that the log bucket doesn't have a linked BigQuery dataset.
You can't delete a log bucket with a linked dataset.
The following error is shown in response to a delete command on a
log bucket that has a linked dataset:
FAILED_PRECONDITION: This bucket is used for advanced analytics and has an active link. The link must be deleted first before deleting the bucket
To list the links associated with a log bucket, run the
gcloud logging links list command or run the
projects.locations.buckets.links.list
API method.
Which service accounts are routing logs to my bucket?
To determine if any service accounts have IAM permissions to
route logs to your bucket, do the following:
In the Google Cloud console, go to the IAM page:
Go to IAM
If you use the search bar to find this page, then select the result whose subheading is
IAM & Admin .
From the Permissions tab, view by Roles . You see a table with all
the IAM roles and principals associated with your
Google Cloud project.
In the table's Filter
text box filter_list ,
enter Logs Bucket Writer .
You see any principals with the Logs Bucket Writer role. If a principal
is a service account, its ID contains the string gserviceaccount.com .
Optional: If you want to remove a service account from being able to route
logs to your Google Cloud project, select the
check box check_box_outline_blank
for the service account and click Remove .
Why do I see logs for a Google Cloud project even though I excluded them from my _Default sink?
You might be viewing logs in a log bucket in a
centralized Google Cloud project , which
aggregates logs from across your organization.
If you're using the Logs Explorer to access these logs and see logs that you
excluded from the _Default sink, then your view might be set to the
Google Cloud project level.
To fix this issue, select Log view in the
Refine scope menu
and then select the log view associated with the _Default bucket in your
Google Cloud project. You shouldn't see the excluded logs anymore.
What's next
For information on the log bucket API methods, refer to the
LogBucket reference documentation.
If you manage an organization or a folder, then you can specify the location of
the _Default and _Required log buckets of child resources. You can also
configure whether log buckets use CMEK and the behavior of the
_Default log sink. For more information, see
Configure default settings for organizations and folders .
For information on addressing common use cases with log buckets, see the
following topics:
Aggregate and store your organization's logs .
Multi-tenant logging on GKE .
Regionalize your logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
