---
title: "Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/tools/gcloud-logging
  title: "Command-line interface \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Command-line interface
Stay organized with collections
Save and categorize content based on your preferences.
The Google Cloud CLI has a group of commands, gcloud logging ,
that
provide a command-line interface to the Logging API. A summary of the
important commands and examples of their use are shown on this page.
For additional information, go to the following sources:
For detailed documentation on the Logging Google Cloud CLI,
read the reference pages for the
gcloud logging command group. There might
also be new or changed commands in the beta command group:
gcloud beta logging .
For documentation on the Logging API, read
Cloud Logging API .
Getting started
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Set your default project so you don't have to supply the
--project flag with each command:
gcloud config set project PROJECT_ID
After you've installed and initialized the Google Cloud CLI, you can run
gcloud logging commands from the command line in the same way you use other
command-line tools.
Permissions
gcloud logging commands are controlled by Identity and Access Management (IAM)
permissions.
To use any of the gcloud logging commands, you must have the
serviceusage.services.use permission. You must also have the
IAM role that corresponds to the log's location, and to your
use case:
Use case
IAM role
List logs
Logging/Logs Viewer
Tail logs
Logging/Logs Viewer
Delete logs
Logging/Logging Admin
Write logs
Logging/Logs Writer
Read logs
Logging/Logs Viewer
Read Data Access audit logs
Logging/Private Logs Viewer
List sinks
Logging/Logs Viewer
Create sinks
Logging/Logs Configuration Writer
Update sinks
Logging/Logs Configuration Writer
Delete sinks
Logging/Logs Configuration Writer
List metrics
Logging/Logs Viewer
Create basic metrics
Logging/Logs Configuration Writer
Create advanced metrics
Logging/Logs Configuration Writer
Update metrics
Logging/Logs Configuration Writer
Delete metrics
Logging/Logs Configuration Writer
Create log scopes
Logging/Logs Configuration Writer
For additional information on required Logging IAM
roles and permissions, go to Access control .
Summary of commands
The following sections provide summaries and examples of the gcloud CLI
command-line interface for Logging. However, some command options
and details are omitted; the online documentation for the gcloud CLI
commands is authoritative.
From the command line, you can add --help to a partial command to get more
details. For example:
gcloud logging --help
gcloud logging sinks --help
gcloud logging sinks create --help
In a few cases, important command features in the Beta version of the
gcloud CLI are available:
gcloud beta logging metrics create --help
Over time, Beta features might be rolled into the standard release and new
features might be added to the Beta release.
Log entries
You can write and read log entries using gcloud .
Writing log entries
Use the gcloud logging write command,
corresponding to the API method
entries.write .
gcloud logging write LOG_NAME ...
LOG_NAME can either be the LOG_ID or the full resource name of the
log with the LOG_ID URL-encoded.
For simplicity, this command makes several assumptions about
the log entry . For example, it always sets the
resource type to global .
Examples
Write a log entry to log my-test-log in the current project with a plain-text
payload and a severity of ERROR :
gcloud logging write my - test - log "A simple entry" -- severity = ERROR
Write a log entry with a structured (JSON) payload:
gcloud logging write my - test - log '{ "message": "My second entry", "weather": "partly cloudy"}' -- payload - type = json
Write a log entry to a folder, billing account, or organization. The following
command writes a log entry to a folder:
gcloud logging write my-folder-log "A folder log entry" --folder= FOLDER_ID
To find your log entries, look in the Logs Explorer under the
Global resource type.
You can also gcloud logging read or the corresponding API method. See the
example in Reading log entries .
Reading log entries
To retrieve log entries, use the
gcloud logging read command, corresponding
to the API method entries.list :
gcloud logging read FILTER ...
FILTER is an expression to identify a set of log entries.
For more information, see
Logging query language .
To read log entries in folders, billing accounts, or organizations,
append the --folder , --billing-account , or --organization options.
Examples
Read up to 10 log entries in your project's syslog log from Compute Engine
instances containing payloads that include the word SyncAddress . The log
entries are to be shown in JSON format:
gcloud logging read "resource.type=gce_instance AND logName=projects/ PROJECT_ID /logs/syslog AND textPayload:SyncAddress" -- limit 10 -- format json
Following is an example of one returned log entry:
{
"insertId" : "2024-04-07|08:56:48.137651-07|10.162.32.129|-1509625619" ,
"logName" : "projects/[PROJECT_ID]/logs/syslog" ,
"resource" : {
"labels" : {
"instance_id" : "15543007601548829999" ,
"zone" : "global"
} ,
"type" : "gce_instance"
} ,
"textPayload" : "Apr 7 15:56:47 my-gce-instance google-address-manager: ERROR SyncAddresses exception: HTTP Error 503: Service Unavailable" ,
"timestamp" : "2024-04-07T15:56:47.000Z"
}
To list logs in a folder, add the --folder flag. That flag restricts the log
entries read to only those in the folder itself. The same applies to the
--organization and --billing-account flags. The following command retrieves
activity-type audit logs from a folder. Log entries are to be shown in the
default YAML format:
gcloud logging read "resource.type=folder AND logName:cloudaudit.googleapis.com%2Factivity" -- folder = FOLDER_ID
Following is an excerpt of one returned entry. It records a call to
SetIamPolicy on the folder:
insertId : mhcr1tc16u
logName : folders / FOLDER_ID / logs / cloudaudit . googleapis . com % 2 Factivity
protoPayload :
'@type' : type . googleapis . com / google . cloud . audit . AuditLog
methodName : SetIamPolicy
...
serviceName : cloudresourcemanager . googleapis . com
status : {}
resource :
labels :
folder_id : ' FOLDER_ID '
type : folder
severity : NOTICE
timestamp : '2024-03-19T16:26:49.308Z'
The previous section, Writing log entries , contains an example
of writing a log entry to a folder. Following is the command to read the log
entry:
gcloud logging read "resource.type=global" -- folder = FOLDER_ID -- limit = 1
Here is the result:
insertId : 1 f22es3frcguaj
logName : folders / FOLDER_ID / logs / my - folder - log
receiveTimestamp : '2024-03-19T18:20:19.306598482Z'
resource :
type : global
textPayload : A folder log entry
timestamp : '2024-03-19T18:20:19.306598482Z'
Logs
A log, or log stream, is the set of log entries that have the same full resource
name. The full resource name is equivalent to the LogName field in the
LogEntry .
The full resource name for a log must be one of the following:
projects/ PROJECT_ID /logs/ LOG_ID
organizations/ ORGANIZATION_ID /logs/ LOG_ID
folders/ FOLDER_ID /logs/ LOG_ID
billingAccounts/ BILLING_ACCOUNT_ID /logs/ LOG_ID
LOG_ID can only contain alphanumeric characters, forward-slash,
underscore, hyphen, and period characters. For example,
compute.googleapis.com/activity_log is a valid LOG_ID . The full resource
name includes the project, folder, billing account, or organization in which the
log is located. For more information, go to
Google Cloud resource hierarchy .
To manage logs, use the
gcloud logging logs command group:
gcloud logging logs list ...
gcloud logging logs delete ...
URL Encoding
When passing the full resource name of a log to a gcloud logging command,
you must URL-encode the LOG_ID . As an example, a LOG_ID of
compute.googleapis.com/activity_log encodes to
compute.googleapis.com%2Factivity_log .
When passing the LOG_ID to a gcloud logging command, you don't need to
URL-encode the LOG_ID . In this case, the gcloud command encodes for you.
When receiving data that includes the full resource name of a log from a
gcloud logging command, the LOG_ID is URL-encoded.
Creating logs
You create a log by writing a log entry to it. See
Writing log entries .
Listing log names
Use the gcloud logging logs list
command. It executes the API method
projects.logs/list .
Only logs that contain log entries are displayed. The display lists full
resource names of logs with the LOG_ID URL-encoded.
You can only use gcloud logging logs list to list logs in projects; you can't
use it to list logs in folders, billing accounts, or organizations.
Example
List the logs in the current project:
gcloud logging logs list
Sample result:
NAME
projects/my-gcp-project-id/logs/apache-error
projects/my-gcp-project-id/logs/cloudaudit.googleapis.com%2Factivity
projects/my-gcp-project-id/logs/cloudaudit.googleapis.com%2Fdata_access
projects/my-gcp-project-id/logs/compute.googleapis.com%2Factivity_log
projects/my-gcp-project-id/logs/compute.googleapis.com%2Fsystem_log
projects/my-gcp-project-id/logs/syslog
Deleting logs
To delete logs, use the
gcloud logging logs delete
command. It decides, based on the full resource name of a log,
which of the following delete API commands to execute:
projects.logs ,
organizations.logs ,
folders.logs ,
or
billingAccounts.logs .
Example: Delete a project log
To delete a log that exists in the current project using the LOG_ID :
gcloud logging logs delete my-new-log
Really delete all log entries from
[my-new-log]?g_logs
Do you want to continue (Y/n)? Y
Deleted [my-new-log].
An alternative is to specify the full resource name of a log with the
LOG_ID URL-encoded:
gcloud logging logs delete projects/my-gcp-project-id/logs/compute.googleapis.com%2Factivity_log
Result:
Really delete all log entries from
[projects/my-gcp-project-id/logs/compute.googleapis.com%2Factivity_log]?
Do you want to continue (Y/n)? Y
Deleted [projects/pamstestproject1/logs/compute.googleapis.com%2Factivity_log].
Example: Delete logs in folders, billing accounts or organizations
To delete a log contained in folders, billing accounts or organizations, pass
the full resource name with the LOG_ID URL-encoded. For example, the
following command deletes a log in a folder:
gcloud logging logs delete folders/ FOLDER_ID /logs/my-folder-log
FOLDER_ID must be the unique number that identifies the folder.
Note: Deleting log entries doesn't delete the error samples collected from logs
by Error Reporting . To delete those samples,
use the
deleteEvents method
of the Error Reporting API.
Live tailing log entries
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Live tailing lets you view your log entries in real time as Cloud Logging
writes them, by using either the Google Cloud CLI or the Cloud Logging API.
Live tailing isn't supported for log buckets with
field-level access controls , however you
can stream logs for
those buckets in the Logs Explorer.
For information on the API method for live tailing, see
the entries.tail method.
Installing gcloud alpha logging tail
To use gcloud alpha logging tail , you need to have Python 3 and
the grpcio Python package installed.
For instructions on how to
install Python, see the
Python page .
For instructions on how to install the Python package manager, pip , that is
needed to install the grpcio package, see
The Python Package Installer page .
Complete the following steps to install gcloud alpha logging tail :
Verify that you have the Google Cloud CLI installed. For instructions on how
to install the Google Cloud CLI, see
Installing Google Cloud CLI .
Verify that you're using version 302.0.0 or greater of the
gcloud CLI.
gcloud version
For instructions on updating the gcloud CLI, see
gcloud components update .
Install the gcloud CLI alpha components:
gcloud components install alpha
For MacOS, Linux, and Cloud Shell users :
Install gRPC client libraries:
sudo pip3 install grpcio
Set the environment variable CLOUDSDK_PYTHON_SITEPACKAGES to any
value:
export CLOUDSDK_PYTHON_SITEPACKAGES = 1
Note: By default, the Google Cloud CLI ignores Python libraries installed
on your local system. To allow the Google Cloud CLI to use the grpcio
library, you need to enable site packages. To enable site packages,
set the CLOUDSDK_PYTHON_SITEPACKAGES environment variable to 1 .
With site packages enabled, the gcloud CLI can use extra
libraries outside of the google-cloud-sdk/lib directory.
Use the following commands to set your Google Cloud project ID and to
authenticate:
gcloud config set project PROJECT_ID
gcloud auth login
To get the project ID, see Creating and managing
projects .
Verify that gcloud alpha logging tail is installed by running the following
command:
gcloud alpha logging tail
The command displays the following message:
Initializing tail session.
You are now viewing the log entries for your Google Cloud project as Logging
writes them.
For more information on using live tailing, see the
gcloud alpha logging tail reference guide .
Buffering and ordering
Because Logging can receive log entries out of chronological
order, live tailing provides a buffer-window setting so you can balance
the tradeoff between viewing the log entries as they are being written and
viewing them in ascending order. You can set the buffer window
between 0 and 60 seconds.
Note the following characteristics of the buffer window:
The default buffer window is two seconds.
Logging delays writing the log entries to log buckets for the
duration of the buffer window.
If a log entry is written outside of the buffer window, then
Logging returns the log entries as they are received.
When configuring the buffer window, you make a tradeoff between
viewing logs as they are written and viewing the entries out of order.
Buffer window
Tradeoff
0 seconds
Newest log entries returned, but with more likelihood of them being out
of order.
60 seconds
A delay of 60 seconds before seeing the entries returned, but
most of the logs are returned in ascending order.
Limits and quotas
The following table lists the limits and quotas for live tailing:
Limits and quotas
Value
Entries returned per minute
60,000
If more than 60,000 entries match a filter, then
Logging returns the count of entries in the response.
Open live-tailing sessions per Google Cloud project
10
Client limitations
For a Google Cloud project that writes lots of entries quickly, your client
might be unable to consume them as quickly as they're being written. In
this case, Logging limits the total number of entries sent,
prioritizing the most recent entries. At the end of the tail session,
Logging returns the number of entries that were not displayed
due to the limits of the client.
Resource descriptors
All log entries contain an instance of one of a fixed set of monitored resource
types that generally identifies the resource the log entry comes from, such as a
particular Compute Engine VM instance. For a list of monitored resource
types, go to Monitored Resource List .
To list the current resource descriptor types, use the
gcloud logging resource-descriptors list
command, corresponding to the API method
monitoredResourceDescriptors.list .
You don't need any special permissions to list the resource types.
Examples
List all the resource types that have instance in their names:
gcloud logging resource - descriptors list -- filter = "type:instance"
Result:
TYPE DESCRIPTION KEY
gce_instance A virtual machine instance hosted in Compute Engine . project_id , instance_id , zone
spanner_instance A Cloud Spanner instance . project_id , instance_id , location , instance_config
redis_instance A Redis instance hosted on Google Cloud MemoryStore . project_id , region , instance_id , node_id
gce_instance_group A Compute Engine instance group resource . project_id , instance_group_id , instance_group_name , location
gce_instance_group_manager A Compute Engine instance group manager resource . project_id , instance_group_manager_id , instance_group_manager_name , location
gce_instance_template A Compute Engine instance template resource . project_id , instance_template_id , instance_template_name
Routing logs
You route logs by creating sinks that send certain log entries to
supported destinations. For more information about sinks, see
Routing and storage overview: Sinks .
Use the
gcloud logging sinks command group,
corresponding to the API methods
projects.sinks ,
folders.sinks ,
billingAccounts.sinks ,
and
organizations.sinks .
Sinks can be located wherever logs are located: projects, folders, billing
accounts, and organizations. Use the gcloud logging flags --folder ,
--billing-account , or --organization to refer to those locations.
Omitting them defaults to the project specified by --project or
the current project.
Creating sinks
Use the
gcloud logging sinks create
command, corresponding to the API method
projects.sinks.create :
gcloud logging sinks create SINK_NAME SINK_DESTINATION --log-filter="..." ...
Destination authorization . To determine the writer identity service account
for your new sink, use the describe command in the next section to fetch the
new sink's properties. You need the service account to authorize the sink to
write to its destination. The gcloud logging command doesn't perform the
authorization for you, as the Logs Explorer does. For more information,
see Destination permissions .
Aggregated sinks . You can use one of the --folder ,
--billing-account , and --organization flags if you want to route the logs
from that resource. You have the following options:
By default, using the previous flags restricts the sink to routing only
the logs held in the named folder, organization, or billing account.
If you additionally add the --include-children flag, then the sink becomes
an aggregated sink and the sink routes logs from all folders and
projects contained within the named resource, subject to the filter in the
--log-filter flag.
Billing accounts don't contain folders or projects, so --include-children
has no effect with --billing-account .
Caution: With aggregated sinks, you can route a very large number of log
entries. Design your logs query carefully to avoid incurring extra costs.
For more information, see
Aggregated sinks overview .
Examples
Create a sink, syslog-errors , in the current project that routes syslog
entries with severity ERROR from Compute Engine VM instances. The
destination is an existing Cloud Storage bucket in the current project:
gcloud logging sinks create syslog - errors \
storage . googleapis . com / my - third - gcs - bucket \
-- log - filter "resource.type=gce_instance AND logName=projects/ PROJECT_ID /logs/compute.googleapis.com%2Fsyslog AND severity=ERROR"
Create a sink, syslog-sink , in the current project that routes all syslog
entries with severity WARNING or higher. The destination is a new
Pub/Sub topic in the current project, and the sink service account,
shown in the output of the logging sinks create command, is granted an
IAM role that lets the service account publish content to the
topic.
gcloud pubsub topics create syslog-sink-topic
gcloud logging sinks create syslog-sink pubsub.googleapis.com/projects/MY-PROJECT/topics/syslog-sink-topic \
--log-filter="severity>=WARNING"
gcloud pubsub topics add-iam-policy-binding syslog-sink-topic \
--member serviceAccount:LOG-SINK-SERVICE-ACCOUNT --role roles/pubsub.publisher
Create a sink, folder-logs in a folder FOLDER_ID that routes the Admin
Activity audit logs from the folder. The destination is an existing
Cloud Storage bucket in the current project.
gcloud logging sinks create folder-logs \
storage.googleapis.com/my-folder-bucket \
--folder= FOLDER_ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity"
The following command creates an aggregated sink, routing all Admin Activity
audit logs from a folder and from all folders and projects contained in the
folder:
gcloud logging sinks create folder-logs --include-children \
storage.googleapis.com/my-folder-bucket \
--folder= FOLDER_ID --log-filter="logName:logs/cloudaudit.googleapis.com%2Factivity"
Listing or describing sinks
Use the gcloud logging sinks list
or gcloud logging sinks describe commands,
corresponding to the API methods
projects.sinks.list
and projects.sinks.get ,
respectively:
gcloud logging sinks list
gcloud logging sinks describe SINK_NAME
Examples
List sinks in the current project:
gcloud logging sinks list
NAME DESTINATION FILTER
google-sink-1481139614360-9906 storage.googleapis.com/my-second-gcs-bucket logName = "projects/my-gcp-project-id/logs/syslog"
pubsub-logs-sink pubsub.googleapis.com/projects/my-gcp-project-id/topics/my-pubsub-logs-topic logName = "projects/my-gcp-project-id/logs/pubsubtestlog"
test-sink-v4 storage.googleapis.com/my-gcs-bucket severity=CRITICAL
List sinks in a folder:
gcloud logging sinks list --folder= FOLDER_ID
NAME DESTINATION FILTER
folder-logs storage.googleapis.com/my-folder-bucket logName:activity
List sinks in an organization:
gcloud logging sinks list --organization= ORGANIZATION_ID
NAME DESTINATION FILTER
organization-logs storage.googleapis.com/my-org-bucket logName:activity
Describe sinks in the current project test-sink-v4 :
gcloud logging sinks describe test-sink-v4
Output:
destination : storage . googleapis . com / my - gcs - bucket
filter : severity = CRITICAL
name : test - sink - v4
outputVersionFormat : V2
writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT_ID . iam.gserviceaccount.com
Describe sinks in a folder:
gcloud logging sinks describe test-sink-v4 --folder= FOLDER_ID
Output:
destination: storage.googleapis.com/my-gcs-bucket
filter: severity=CRITICAL
name: test-sink-v4
Describe sinks in an organization:
gcloud logging sinks describe test-sink-v4 --organization= ORGANIZATION_ID
Output:
createTime : [ TIMESTAMP ]
description : Test Sink
destination : storage . googleapis . com / my - gcs - bucket
filter : severity = CRITICAL
name : test - sink - v4
updateTime : [ TIMESTAMP ]
writerIdentity : serviceAccount : test - sink - v4 @logging - PROJECT_ID . iam.gserviceaccount.com
Updating sinks
Use the
gcloud logging sinks update
command, corresponding to the API method
projects.sink.update :
You can update a sink to change the destination or the query:
gcloud logging sinks update SINK_NAME NEW_DESTINATION --log-filter= NEW_FILTER
You can omit the NEW_DESTINATION or --log-filter if those parts don't change.
Examples
Update the destination of a project sink:
gcloud logging sinks update PROJECT_ID storage.googleapis.com/my-second-gcs-bucket
Deleting sinks
Use the gcloud logging sinks delete command,
corresponding to the API method
projects.sinks.delete :
You stop routing its log entries when you delete a sink:
gcloud logging sinks delete SINK_NAME
Examples
Delete sink syslog-sink-1 in the current project:
gcloud logging sinks delete syslog-sink-1
Log-based metrics
To manage log-based metrics, use the
gcloud logging metrics command group,
corresponding to the API methods at
projects.metrics .
Log-based metrics are located only in projects.
Creating basic metrics
Use the
gcloud logging metrics create
command, corresponding to the API method
projects.metrics.create :
gcloud logging metrics create METRIC_NAME --description=... --log-filter=...
For more complex counter metrics with labels, use the create command as
described in the section
Creating advanced metrics .
Examples
Create a log-based metric that counts the number of log entries
with severity of at least ERROR from Compute Engine instances:
gcloud logging metrics create error_count \
-- description = "Syslog error counts." \
-- log - filter = "resource.type=gce_instance AND severity>=ERROR"
Creating advanced metrics
To create complex metrics with labels, including distribution metrics,
use the
gcloud logging metrics create
command, corresponding to the API method
projects.metrics.create :
gcloud logging metrics create METRIC_NAME --config-from-file=FILE_NAME
FILE_NAME is the path to a file containing a YAML (or JSON) specification of a
LogMetric object .
Examples
Create a distribution metric to record request latencies:
gcloud logging metrics create my-distribution-metric --config-from-file=logmetric.dat
where logmetric.dat contains the following:
bucketOptions :
exponentialBuckets :
growthFactor : 2.0
numFiniteBuckets : 64
scale : 0.01
description : App Engine Request Latency
filter : |
resource . type = "gae_app"
logName = "projects/ PROJECT_ID /logs/appengine.googleapis.com %2F nginx.request"
labelExtractors :
path : EXTRACT ( httpRequest . requestUrl )
metricDescriptor :
labels :
- description : HTTP Path
key : path
metricKind : DELTA
name : projects / PROJECT_ID / metricDescriptors / logging . googleapis . com / user / my - distribution - metric
type : logging . googleapis . com / user / my - distribution - metric
valueType : DISTRIBUTION
name : my - distribution - metric
valueExtractor : EXTRACT ( jsonPayload . latencySeconds )
Result:
Created [my-distribution-metric].
Updating metrics
Use
gcloud logging metrics update ,
corresponding to the API method
projects.metrics.update :
gcloud logging metrics update METRIC_NAME ...
To change the query, use --log-filter . To change the description, use
--description . To change more items, use --config-from-file .
Examples
Change the query in my-distribution-metric :
gcloud logging metrics update my - distribution - metric --log-filter="[NEW_LOG_FILTER]"
Listing and describing metrics
Use gcloud logging metrics list ,
corresponding to the API method
projects.metrics.list ,
and
gcloud logging metrics describe ,
corresponding to the API method
projects.metrics.get :
gcloud logging metrics list ...
gcloud logging metrics describe METRIC_NAME
The metrics list command by defaults shows the full description of every
listed metric. Use the --format flag to control how much information is
listed.
Examples
List the distribution-type logging metrics in the current project. Show only the
metric name and its description:
gcloud logging metrics list --filter="metricDescriptor.valueType=DISTRIBUTION" --format="table(name,description)"
Result:
NAME DESCRIPTION
myapp/request_latency Request latency for myapp
bigquery_billed_bytes Billed Bytes
food_latency How long does it take to service all food requests
healthz_latencies /healthz latencies in microseconds
latency_on_food Tracking latency on food requests
lines_written
my_latency_metric
no-match-dist-metric
pizza_latency How long does it take to service pizza requests?
Describe a user-defined distribution metric named myapp/request_latency . Show
the information in the default YAML format:
gcloud logging metrics describe "myapp/request_latency"
Result:
bucketOptions :
exponentialBuckets :
growthFactor : 2.0
numFiniteBuckets : 64
scale : 0.01
description : Request latency for myapp
filter : |
resource . type = "gae_app"
logName = "projects/[PROJECT_ID]/logs/appengine.googleapis.com%2Fnginx.request"
labelExtractors :
path : EXTRACT ( httpRequest . requestUrl )
metricDescriptor :
description : Request latency for myapp
labels :
- description : HTTP Path
key : path
metricKind : DELTA
name : projects /[ PROJECT_ID ]/ metricDescriptors / logging . googleapis . com / user / myapp / request_latency
type : logging . googleapis . com / user / myapp / request_latency
valueType : DISTRIBUTION
name : myapp / request_latency
valueExtractor : EXTRACT ( jsonPayload . latencySeconds )
Deleting metrics
Use the
gcloud logging metrics delete
command, corresponding to the API method
projects.metrics.delete :
gcloud logging metrics delete METRIC_NAME
Examples
Delete the metric my-distribution-metric from the current project:
gcloud logging metrics delete "my-distribution-metric"
Result:
Really delete metric [my-distribution-metric]?
Do you want to continue (Y/n)? Y
Deleted [my-distribution-metric].
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
