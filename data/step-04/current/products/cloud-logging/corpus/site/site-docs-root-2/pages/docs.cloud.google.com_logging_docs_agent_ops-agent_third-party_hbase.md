---
title: "Apache HBase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/hbase
  title: "Apache HBase \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
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
Apache HBase
Stay organized with collections
Save and categorize content based on your preferences.
The Apache HBase integration collects cluster metrics from master and region
servers. Region server metrics are related to storage as well as request and
latency. The integration also collects master and region server logs and
parses them into a JSON payload. The result includes fields for source, level,
and message.
For more information about HBase, see the
Apache HBase documentation .
Prerequisites
To collect HBase telemetry, you must
install the Ops Agent :
For metrics, install version 2.11.0 or higher.
For logs, install version 2.11.0 or higher.
This integration supports HBase versions 1.7.x, 2.3.x, and 2.4.x.
Configure your HBase instance
To expose a JMX endpoint, you must set the com.sun.management.jmxremote.port
system property when starting the JVM. We also recommend setting the
com.sun.management.jmxremote.rmi.port system property to the same port. To
expose a JMX endpoint remotely, you must also set the java.rmi.server.hostname
system property.
By default, these properties are set in a HBase deployment's hbase-env.sh
file.
To set system properties by using command-line arguments, prepend the property
name with -D when starting the JVM. For example, to set
com.sun.management.jmxremote.port to port 10101 , specify the following when
starting the JVM:
-Dcom.sun.management.jmxremote.port=10101
Configure the Ops Agent for HBase
Following the guide to Configure the Ops
Agent , add the required elements
to collect telemetry from HBase instances, and
restart the agent .
Example configuration
The following commands create the configuration to collect and ingest telemetry
for HBase:
# Configures Ops Agent to collect telemetry from the app . You must restart the agent for the configuration to take effect .
set - e
# Check if the file exists
if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then
# Create the file if it doesn ' t exist .
sudo mkdir - p / etc / google - cloud - ops - agent
sudo touch / etc / google - cloud - ops - agent / config . yaml
fi
# Create a back up of the existing file so existing configurations are not lost .
sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak
# Configure the Ops Agent .
sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF
metrics :
receivers :
hbase :
type : hbase
endpoint : service : jmx : rmi : ///jndi/rmi://127.0.0.1:10101/jmxrmi
service :
pipelines :
hbase :
receivers :
- hbase
logging :
receivers :
hbase_system :
type : hbase_system
service :
pipelines :
hbase_system :
receivers :
- hbase_system
EOF
For these changes to take effect, you must restart the Ops Agent:
Linux
To restart the agent, run the following command on your instance:
sudo systemctl restart google-cloud-ops-agent
To confirm that the agent restarted, run the following command and
verify that the components "Metrics Agent" and "Logging Agent" started:
sudo systemctl status "google-cloud-ops-agent*"
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by
right-clicking the PowerShell icon and selecting Run as Administrator
To restart the agent, run the following PowerShell command:
Restart-Service google-cloud-ops-agent -Force
To confirm that the agent restarted, run the following command and
verify that the components "Metrics Agent" and "Logging Agent" started:
Get-Service google-cloud-ops-agent*
Configure logs collection
To ingest logs from HBase, you must create a receiver for the logs
that HBase produces and then create a pipeline for the new receiver.
To configure a receiver for your hbase_system logs, specify the following
fields:
Field
Default
Description
exclude_paths
A list of filesystem path patterns to exclude from the set matched by include_paths .
include_paths
[/opt/hbase/logs/hbase-*-regionserver-*.log, /opt/hbase/logs/hbase-*-master-*.log]
A list of filesystem paths to read by tailing each file. A wild card ( * ) can be used in the paths; for example, /var/log/hbase*/*.log .
record_log_file_path
false
If set to true , then the path to the specific file from which the log record was obtained appears in the output log entry as the value of the agent.googleapis.com/log_file_path label. When using a wildcard, only the path of the file from which the record was obtained is recorded.
type
This value must be hbase_system .
wildcard_refresh_interval
60s
The interval at which wildcard file paths in include_paths are refreshed. Given as a time duration , for example 30s or 2m . This property might be useful under high logging throughputs where log files are rotated faster than the default interval.
What is logged
The logName is derived from
the receiver IDs specified in the configuration. Detailed fields inside the
LogEntry
are as follows.
The hbase_system logs contain the following fields in the LogEntry :
Field
Type
Description
jsonPayload.level
string
Log entry level
jsonPayload.message
string
Log message, including detailed stacktrace where provided
jsonPayload.module
string
Module of hbase where the log originated
jsonPayload.source
string
source of where the log originated
severity
string ( LogSeverity )
Log entry level (translated).
Configure metrics collection
To ingest metrics from HBase, you must create a receiver for the metrics
that HBase produces and then create a pipeline for the new receiver.
This receiver does not
support the use of multiple instances in the configuration, for example, to
monitor multiple endpoints. All such instances write to the same time series,
and Cloud Monitoring has no way to distinguish among them.
To configure a receiver for your hbase metrics, specify the following
fields:
Field
Default
Description
collect_jvm_metrics
true
Configures the receiver to also collect the supported JVM metrics.
collection_interval
60s
A time duration value, such as 30s or 5m .
endpoint
localhost:10101
The JMX Service URL or host and port used to construct the service URL. This value must be in the form of service:jmx:<protocol>:<sap> or host:port . Values in host:port form are used to create a service URL of service:jmx:rmi:///jndi/rmi://<host>:<port>/jmxrmi .
password
The configured password if JMX is configured to require authentication.
type
This value must be hbase .
username
The configured username if JMX is configured to require authentication.
What is monitored
The following table provides the list of metrics that the Ops Agent collects
from the HBase instance.
Metric type
Kind, Type Monitored resources
Labels
workload.googleapis.com/hbase.master.region_server.count
GAUGE , INT64
gce_instance
state
workload.googleapis.com/hbase.master.regions_in_transition.count
GAUGE , INT64
gce_instance
workload.googleapis.com/hbase.master.regions_in_transition.oldest_age
GAUGE , INT64
gce_instance
workload.googleapis.com/hbase.master.regions_in_transition.over_threshold
GAUGE , INT64
gce_instance
workload.googleapis.com/hbase.region_server.active_handler.count
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.authentication.count
GAUGE , INT64
gce_instance
region_server
state
workload.googleapis.com/hbase.region_server.block_cache.operation.count
GAUGE , INT64
gce_instance
region_server
state
workload.googleapis.com/hbase.region_server.blocked_update.time
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.disk.store_file.count
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.disk.store_file.size
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.files.local
GAUGE , DOUBLE
gce_instance
region_server
workload.googleapis.com/hbase.region_server.gc.old_gen.time
CUMULATIVE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.gc.time
CUMULATIVE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.gc.young_gen.time
CUMULATIVE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.open_connection.count
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.append.latency.max
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.append.latency.mean
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.append.latency.median
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.append.latency.min
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.append.latency.p99
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.delete.latency.max
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.delete.latency.mean
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.delete.latency.median
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.delete.latency.min
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.delete.latency.p99
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.get.latency.max
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.get.latency.mean
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.get.latency.median
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.get.latency.min
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.get.latency.p99
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.increment.latency.max
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.increment.latency.mean
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.increment.latency.median
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.increment.latency.min
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.increment.latency.p99
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.put.latency.max
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.put.latency.mean
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.put.latency.median
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.put.latency.min
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.put.latency.p99
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.replay.latency.max
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.replay.latency.mean
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.replay.latency.median
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.replay.latency.min
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operation.replay.latency.p99
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.operations.slow
GAUGE , INT64
gce_instance
operation
region_server
workload.googleapis.com/hbase.region_server.queue.length
GAUGE , INT64
gce_instance
region_server
state
workload.googleapis.com/hbase.region_server.queue.request.count
GAUGE , INT64
gce_instance
region_server
state
workload.googleapis.com/hbase.region_server.region.count
GAUGE , INT64
gce_instance
region_server
workload.googleapis.com/hbase.region_server.request.count
GAUGE , INT64
gce_instance
region_server
state
workload.googleapis.com/hbase.region_server.write_ahead_log.count
GAUGE , INT64
gce_instance
region_server
Verify the configuration
This section describes how to verify that you correctly configured the
HBase receiver. It might take one or two
minutes for the Ops Agent to begin collecting telemetry.
To verify that HBase logs are being sent to
Cloud Logging, do the following:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enter the following query in the editor, and then click Run query :
resource.type="gce_instance"
log_id("hbase_system")
To verify that HBase metrics are being sent to
Cloud Monitoring, do the following:
In the Google Cloud console, go to the
leaderboard Metrics explorer page:
Go to Metrics explorer
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the
query-builder pane, select the button whose name is either
code MQL or code PromQL .
Verify that PromQL is selected
in the Language toggle. The language toggle is in the same toolbar that
lets you format your query.
Enter the following query in the editor, and then click Run query :
{"workload.googleapis.com/hbase.region_server.operation.append.latency.p99", monitored_resource="gce_instance"}
View dashboard
To view your HBase metrics, you must have a chart or dashboard
configured.
The HBase integration includes one or more dashboards for you.
Any dashboards are automatically installed after you configure the
integration and the Ops Agent has begun collecting metric data.
You can also view static previews of dashboards without
installing the integration.
To view an installed dashboard, do the following:
In the Google Cloud console, go to the dashboard Dashboards page:
Go to Dashboards
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Select the Dashboard List tab, and then choose the
Integrations category.
Click the name of the dashboard you want to view.
If you have configured an integration but the dashboard has not been
installed, then check that the Ops Agent is running. When there is no
metric data for a chart in the dashboard, installation of the dashboard fails.
After the Ops Agent begins collecting metrics, the dashboard is installed
for you.
To view a static preview of the dashboard, do the following:
In the Google Cloud console, go to the
Integrations
page:
Go to Integrations
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Click the Compute Engine deployment-platform filter.
Locate the entry for
HBase
and click View Details .
Select the Dashboards tab to see a static preview. If the
dashboard is installed, then you can navigate to it by clicking
View dashboard .
For more information about dashboards in Cloud Monitoring, see
Dashboards and charts .
For more information about using the Integrations page, see
Manage integrations .
Install alerting policies
Alerting policies instruct Cloud Monitoring to notify you when
specified conditions occur.
The HBase integration includes one or more alerting policies for
you to use.
You can view and install
these alerting policies from the Integrations page in
Monitoring.
To view the descriptions of available alerting policies and
install them, do the following:
In the Google Cloud console, go to the
Integrations
page:
Go to Integrations
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Locate the entry for
HBase
and click View Details .
Select the Alerts tab. This tab provides descriptions of
available alerting policies and provides an interface for installing
them.
Install alerting policies. Alerting policies need
to know where to send notifications that the alert has been
triggered, so they require information from you for installation.
To install alerting policies, do the following:
From the list of available alerting policies,
select those that you want to install.
In the Configure notifications section, select one or
more notification channels. You have the option to disable the
use of notification channels, but if you do, then your alerting
policies fire silently. You can check their status in
Monitoring, but you receive no notifications.
For more information about notification channels,
see Manage
notification channels .
Click Create Policies .
For more information about alerting policies in Cloud Monitoring, see
Introduction to alerting .
For more information about using the Integrations page, see
Manage integrations .
What's next
For a walkthrough on how to use Ansible to install the Ops Agent, configure
a third-party application, and install a sample dashboard, see the
Install the Ops Agent to troubleshoot third-party applications video.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
