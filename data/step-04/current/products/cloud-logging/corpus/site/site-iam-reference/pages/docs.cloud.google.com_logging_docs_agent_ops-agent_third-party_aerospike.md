---
title: "Aerospike \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/ops-agent/third-party/aerospike
  title: "Aerospike \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
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
Aerospike
Stay organized with collections
Save and categorize content based on your preferences.
The Aerospike integration collects key namespace and system metrics, such as disk and memory usage, scans,
and connections. The integration collects these metrics using the official
client API provided by Aerospike.
For more information about Aerospike, see the
Aerospike documentation .
Prerequisites
To collect Aerospike telemetry, you must
install the Ops Agent :
For metrics, install version 2.18.2 or higher.
For logs, install version 2.23.0 or higher.
This integration supports Aerospike versions 4.9, 5.x, and 6.x.
Configure your Aerospike instance
Aerospike logs are automatically ingested on systems where Aerospike runs as
a systemd service. On other systems such as SLES, you can manually
configure a
files
receiver which points to Aerospike's log file, which is usually located at
$HOME/aerospike-server/var/log/aerospike.log .
Configure the Ops Agent for Aerospike
Following the guide to Configure the Ops
Agent , add the required elements
to collect telemetry from Aerospike instances, and
restart the agent .
Example configuration
The following commands create the configuration to collect and ingest telemetry
for Aerospike:
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
aerospike :
type : aerospike
service :
pipelines :
aerospike :
receivers :
- aerospike
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
Collect logs
Aerospike writes logs to syslog , which is captured by the Ops Agent by default.
No additional user configuration is required.
Configure metrics collection
To ingest metrics from Aerospike, you must create a receiver for the metrics
that Aerospike produces and then create a pipeline for the new receiver.
This receiver does not
support the use of multiple instances in the configuration, for example, to
monitor multiple endpoints. All such instances write to the same time series,
and Cloud Monitoring has no way to distinguish among them.
To configure a receiver for your aerospike metrics, specify the following
fields:
Field
Default
Description
collect_cluster_metrics
true
Configures the receiver to collect metrics from peer nodes of the Aerospike system.
collection_interval
60s
A time duration value, such as 30s or 5m .
endpoint
localhost:3000
Address of the Aerospike system, formatted as host:port.
password
The configured password if Aerospike is configured to require authentication.
timeout
20s
Timeout for requests to the Aerospike system, a time duration value such as 30s or 5m .
type
aerospike
This value must be aerospike .
username
The configured username if Aerospike is configured to require authentication.
What is monitored
The following table provides the list of metrics that the Ops Agent collects
from the Aerospike instance.
Metric type
Kind, Type Monitored resources
Labels
workload.googleapis.com/aerospike.namespace.disk.available
GAUGE , INT64
gce_instance
namespace_name
node_name
workload.googleapis.com/aerospike.namespace.memory.free
GAUGE , INT64
gce_instance
namespace_name
node_name
workload.googleapis.com/aerospike.namespace.memory.usage
GAUGE , INT64
gce_instance
component
namespace_name
node_name
workload.googleapis.com/aerospike.namespace.scan.count
CUMULATIVE , INT64
gce_instance
namespace_name
node_name
result
type
workload.googleapis.com/aerospike.namespace.transaction.count
CUMULATIVE , INT64
gce_instance
namespace_name
node_name
result
type
workload.googleapis.com/aerospike.node.connection.count
CUMULATIVE , INT64
gce_instance
node_name
operation
type
workload.googleapis.com/aerospike.node.connection.open
GAUGE , INT64
gce_instance
node_name
type
workload.googleapis.com/aerospike.node.memory.free
GAUGE , INT64
gce_instance
node_name
Verify the configuration
This section describes how to verify that you correctly configured the
Aerospike receiver. It might take one or two
minutes for the Ops Agent to begin collecting telemetry.
To verify that Aerospike logs are being sent to
Cloud Logging, do the following:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Enter the following query in the editor, and then click Run query :
resource.type="gce_instance"
log_id("syslog")
jsonPayload.message~=' asd([[0-9]+])*:'
To verify that Aerospike metrics are being sent to
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
{"workload.googleapis.com/aerospike.node.connection.open", monitored_resource="gce_instance"}
View dashboard
To view your Aerospike metrics, you must have a chart or dashboard
configured.
The Aerospike integration includes one or more dashboards for you.
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
Aerospike
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
The Aerospike integration includes one or more alerting policies for
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
Aerospike
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
