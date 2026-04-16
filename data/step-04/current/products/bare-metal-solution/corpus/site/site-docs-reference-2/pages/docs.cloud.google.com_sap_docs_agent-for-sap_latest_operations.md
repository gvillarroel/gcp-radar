---
title: "Google Cloud's Agent for SAP operations guide \_|\_ SAP on Google Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/operations
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/agent-for-sap/latest/operations
  title: "Google Cloud's Agent for SAP operations guide \_|\_ SAP on Google Cloud\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
SAP on Google Cloud
Guides
Send feedback
Google Cloud's Agent for SAP operations guide
Stay organized with collections
Save and categorize content based on your preferences.
Version 3.12 (latest) keyboard_arrow_down
Version 3.12 (latest)
Version 2
This guide covers operational considerations and procedures for
running version 3.12 (latest) of Google Cloud's Agent for SAP on
Compute Engine instances and Bare Metal Solution servers.
Understand the agent lifecycle
When managing the operations of Google Cloud's Agent for SAP, it's helpful to
understand what the agent does. In general, here's how it works:
You must install Google Cloud's Agent for SAP on each
Compute Engine instance or Bare Metal Solution server that
hosts SAP systems. The agent runs as a Linux service or a Windows
service.
On Compute Engine instances, the agent combines
monitoring data from Monitoring and the Compute Engine APIs.
On Bare Metal Solution servers, for collection of only SAP Host Agent metrics,
the agent does not access the Google Cloud APIs.
The SAP Host Agent polls Google Cloud's Agent for SAP for its cached
data, over HTTP. It aggregates the SAP Host Agent metrics, reports them,
and stores them in the SAP NetWeaver database.
The SAP transaction ST06 or the saposcol command line interface
displays the aggregated SAP Host Agent metrics.
You can view the SAP Host Agent metrics from Google Cloud's Agent for SAP
by running a command in a terminal window .
Verify that the agent is running
After installing the agent or restarting the agent, you can verify that
the agent is running as expected.
To check whether the agent is running, follow these steps:
Linux
Establish an SSH connection with your
Bare Metal Solution server or Compute Engine instance.
Run the following command:
systemctl status google-cloud-sap-agent
If the agent is functioning properly, then the output
contains active (running) . For example:
google-cloud-sap-agent.service - Google Cloud Agent for SAP
Loaded: loaded (/usr/lib/systemd/system/google-cloud-sap-agent.service; enabled; vendor preset: disabled)
Active: active (running) since Fri 2022-12-02 07:21:42 UTC; 4 days ago
Main PID: 1337673 (google-cloud-sa)
Tasks: 9 (limit: 100427)
Memory: 22.4 M (max: 1.0G limit: 1.0G)
CGroup: /system.slice/google-cloud-sap-agent.service
└─1337673 /usr/bin/google-cloud-sap-agent
Windows
Use RDP to connect to the Compute Engine instance.
As an administrator, run the following command from PowerShell:
$(Get-Service -Name 'google-cloud-sap-agent' -ErrorAction Ignore).Status
If the agent is running, then the status shows Running .
If Google Cloud's Agent for SAP isn't running, then
restart the agent .
Check the version of the agent
After installing or restarting Google Cloud's Agent for SAP, you can check the
version of the agent.
To check the version of your agent, complete the following steps:
Linux
For RHEL, follow these steps:
Use SSH to connect to the host Compute Engine instance or
Bare Metal Solution server.
Run the following command:
yum info google-cloud-sap-agent
For SLES, follow these steps:
Use SSH to connect to the host Compute Engine instance or
Bare Metal Solution server.
Run the following command:
zypper info google-cloud-sap-agent
Windows
Use RDP to connect to the host Compute Engine instance or
Bare Metal Solution server.
As an administrator, run the following command from PowerShell:
googet installed google-cloud-sap-agent
List all available versions of the agent
To list all the available versions of Google Cloud's Agent for SAP:
Note: The following commands work only for installations done using
google-cloud-sap-agent RPM repository.
RHEL
Establish an SSH connection with your host Compute Engine
instance or Bare Metal Solution server.
Run the following command:
sudo yum list --showduplicates google-cloud-sap-agent
SLES
Establish an SSH connection with your host Compute Engine
instance or Bare Metal Solution server.
Run the following command:
sudo zypper search -s -t package -r google-cloud-sap-agent google-cloud-sap-agent
Verify that SAP Host Agent is receiving metrics
To verify that the infrastructure metrics are collected by
Google Cloud's Agent for SAP and sent correctly to the SAP Host Agent,
follow these steps:
In your SAP system, enter transaction ST06 .
In the overview pane, check the availability and content of the
following fields for the correct end-to-end setup of the SAP and Google
monitoring infrastructure:
Cloud Provider : Google Cloud Platform
Enhanced Monitoring Access : TRUE
Enhanced Monitoring Details : ACTIVE
View the SAP Host Agent metrics
After installing or updating the configuration of Google Cloud's Agent for SAP,
you can view the collected SAP Host Agent metrics.
To view the SAP Host Agent metrics collected by Google Cloud's Agent for SAP, follow
these steps:
Linux
Establish an SSH connection with your host Compute Engine instance or
Bare Metal Solution server.
Run the following command:
curl http://localhost:18181
If the metrics are available, then you should receive an XML output
containing information about your system. For example:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<metrics>
<metric category="cpu" context="vm" type="double" unit="Percent" last-refresh="1670422670" refresh-interval="60">
<name>VM Processing Power Consumption</name>
<value>0.0</value>
</metric>
Windows
Use RDP to connect to the Compute Engine instance.
As an administrator, run the following command from PowerShell:
(Invoke-WebRequest -Uri 'http://localhost:18181').RawContent
If the metrics are available, you should see a XML output containing
information about your system. For example:
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<metrics>
<metric category="cpu" context="vm" type="double" unit="Percent" last-refresh="1670422528" refresh-interval="60">
<name>VM Processing Power Consumption</name>
<value>10.0</value>
</metric>
View the other metrics
After you update the configuration of Google Cloud's Agent for SAP to collect the
Process Monitoring metrics or the SAP HANA monitoring metrics, we recommend that
you view them to verify that the agent is collecting the metrics as expected.
You can view the metrics and information collected by Google Cloud's Agent for SAP
in Cloud Monitoring
by completing the following steps:
In the Google Cloud console, go to the Monitoring Metrics explorer page.
Go to Metrics explorer
Select the Configuration tab.
Expand the Select a metric menu.
In the Resources menu, select VM instance .
In the Metric category menu, select sap .
In the Metric menu, select metric: workload.googleapis.com/sap/service/active
or any of the new metrics to chart.
Click Apply .
You should see a chart with the time series metric values.
Note: Any missing metrics indicates that no metrics were collected during the
searched timeframe and therefore excluded from the filtered list.
Restart the agent
Up to version 3.6, if the agent stops working or you update its configuration,
then you need to restart the agent.
From version 3.7, you need not restart the agent for any configuration updates
because the changes are automatically picked by the agent within the next 30
seconds.
To manually restart the agent, select your operating system, and then follow the
steps:
Linux
Establish an SSH connection with your host Compute Engine
instance or Bare Metal Solution server.
Run the following command:
sudo systemctl restart google-cloud-sap-agent
Windows
Establish an RDP connection with your host host Compute Engine
instance or Bare Metal Solution server.
As an administrator, run the following command from PowerShell:
Restart-Service -Name 'google-cloud-sap-agent' -Force
Disable or enable the agent
To enable proper monitoring, the systemd service of Google Cloud's Agent for SAP
on your compute instance must be running at all times. However, if you're
required to disable or stop the agent on your Linux based compute instance, then
run the following command:
sudo /usr/bin/google_cloud_sap_agent service -disable
To enable and start the agent's systemd service on your Linux based compute
instance:
sudo /usr/bin/google_cloud_sap_agent service -enable
When you disable or enable the agent's systemd service on Linux, the action is
logged in the following file: /var/log/google-cloud-sap-agent/service.log .
Upgrade to Google Cloud's Agent for SAP from other Google Cloud agents
Google Cloud's Agent for SAP is the successor to other
Google Cloud agents. The following sections provide information for
upgrading from these agents to version 3.12 (latest) of
Google Cloud's Agent for SAP.
For instructions on installing and configuring Google Cloud's Agent for SAP, see
Choose your Google Cloud's Agent for SAP installation and configuration guide .
Upgrading from Cloud Storage Backint agent for SAP HANA
To upgrade from Cloud Storage Backint agent for SAP HANA to version 3.12 (latest),
complete the following steps:
Make sure that no data backups are in-progress or scheduled for the period
overlapping with the upgrade.
Disable automatic log backups by setting the SAP HANA parameter
enable_auto_log_backup parameter to no . For instructions, see the SAP
HANA document
Enable and Disable Automatic Log Backup .
Install Google Cloud's Agent for SAP. For instructions, see the
installation guide for your scenario .
Enable the Backint feature of Google Cloud's Agent for SAP. For instructions, see
Configure Backint based backup and recovery .
Enabling the Backint feature of Google Cloud's Agent for SAP automatically
detects the Backint agent on your host and disables it from your
host machine.
To create a JSON version of your existing Backint configuration text file,
run the following command for each of your text files:
/usr/bin/google_cloud_sap_agent configurebackint -f= PATH_TO_PARAMETERS_FILE
Replace PATH_TO_PARAMETERS_FILE with the path to your
PARAMETERS .txt file.
The JSON files are created in the same location in your file system as the
text files as long as Google Cloud's Agent for SAP has the permission to
access those locations. While Google Cloud's Agent for SAP is capable of
interpreting the Backint related parameters specified in the text file,
we recommend that you use the JSON files for updating any configuration.
Enable automatic log backups by setting the SAP HANA parameter
enable_auto_log_backup parameter to yes . For instructions, see the SAP
HANA document
Enable and Disable Automatic Log Backup .
Validate backup and recovery .
When you perform this upgrade, the following happen:
For backup and reference purposes, all installation files in the backint-gcs
directory of Backint agent are copied to
backint-gcs-old- TIMESTAMP / . These are required in case
you need to revert to using the Backint agent.
The backint-gcs folder is then cleaned up to contain only those files that
are required to run Google Cloud's Agent for SAP, which includes its configuration
file, parameters.json , and the Backint configuration files such
as PARAMETERS .txt .
For information about the mapping of the configuration parameters between the
Backint agent and Google Cloud's Agent for SAP, expand the following
section.
Mapping of configuration parameters
Parameter name in Backint agent
Parameter name in Google Cloud's Agent for SAP
BUCKET
bucket
DISABLE_COMPRESSION
compress
ENCRYPTION_KEY
encryption_key
KMS_KEY_NAME
kms_key
MAX_GCS_RETRY
retries
PARALLEL_FACTOR
parallel_streams
PARALLEL_PART_SIZE
This is not available in Google Cloud's Agent for SAP.
RATE_LIMIT_MB
rate_limit_mb
SERVICE_ACCOUNT
service_account_key
THREADS
thread
READ_IDLE_TIMEOUT
file_read_timeout_ms
CHUNK_SIZE_MB
buffer_size_mb
HTTP_READ_TIMEOUT
This is not available in Google Cloud's Agent for SAP.
Upgrading from monitoring agent for SAP HANA
Installing version 3.12 (latest) of Google Cloud's Agent for SAP
automatically detects versions of the
monitoring agent for SAP HANA,
disables them, and then removes them from your host machines during
installation.
If this agent is detected, then its configuration is migrated to
Google Cloud's Agent for SAP during its installation. For backup and reference
purposes, the configuration of the monitoring agent for SAP HANA is copied to the
following file:
/etc/google-cloud-sap-agent/backup-of-hanamonitoring-configuration.yaml
Upgrading SSL-enabled instances
If you have configured the monitoring agent for SAP HANA to use SSL certificates
for communication with your SAP HANA instances, then when you
install Google Cloud's Agent for SAP, all the SAP HANA monitoring configuration
except the SSL configuration are migrated to Google Cloud's Agent for SAP. In such a
case, to use Google Cloud's Agent for SAP for monitoring your SAP HANA
instances, you must complete the following steps:
Establish an SSH connection with your host Compute Engine instance or
Bare Metal Solution server.
Open the configuration file of Google Cloud's Agent for SAP:
/etc/google-cloud-sap-agent/configuration.json
In the hana_monitoring_configuration section, set the parameter enabled
to true .
In the hana_monitoring_configuration.hana_instances section, perform the
following for each SAP HANA instance that uses the TLS/SSL protocol for
secure communication:
Specify the parameter enable_ssl and set its value to true .
Specify the parameter host_name_in_certificate and set the SAP HANA
hostname, as specified in the TLS/SSL certificate, as its value.
Specify the parameter tls_root_ca_file and set the path, where the
TLS/SSL certificate is stored, as its value.
Save the configuration file.
Restart the agent for the new settings to take effect:
sudo systemctl restart google-cloud-sap-agent
Verify that the agent is collecting the SAP HANA monitoring metrics. For
instructions, see View the other metrics .
Uninstall the monitoring agent for SAP HANA.
If you experience any connection issues with your SAP HANA instances after this
upgrade, then you can
view the agent's logs in Logging
and use the
troubleshooting guide
to resolve the issue.
Upgrading from monitoring agent for SAP NetWeaver
Installing version 3.12 (latest) of Google Cloud's Agent for SAP
automatically detects versions of the monitoring agent for SAP NetWeaver.
If this agent is detected, then its configuration is migrated to
Google Cloud's Agent for SAP during its installation.
Update Google Cloud's Agent for SAP
To ensure that you have the latest version of Google Cloud's Agent for SAP, you need
to check for updates periodically and update the agent.
Check for updates
Select your operating system, and then follow these steps:
RHEL
Establish an SSH connection with your instance.
Run the following command:
sudo yum check-update google-cloud-sap-agent
SLES
Establish an SSH connection with your instance.
Run the following command:
sudo zypper list-updates -r google-cloud-sap-agent
Windows
Establish an RDP connection with your host Compute Engine instance.
As an administrator, run the following command from PowerShell:
googet latest google-cloud-sap-agent
Install an update
Select your operating system, and then follow the steps:
RHEL
Establish an SSH connection with your instance.
Update your agent instance:
(Recommended) To update to version 3.12 (latest)
of the agent:
sudo yum --nogpgcheck update google-cloud-sap-agent
To update to a specific version of the agent:
sudo yum install google-cloud-sap-agent- VERSION_NUMBER .x86_64
Replace VERSION_NUMBER with the agent's
version number that you want to install, such as
3.1-606637668 . For information about the agent
versions that you can install, see
List all available
versions of the agent .
SLES
Establish an SSH connection with your instance.
Update your agent instance:
(Recommended) To update to version 3.12 (latest)
of the agent:
sudo zypper --no-gpg-checks update google-cloud-sap-agent
To update to a specific version of the agent:
sudo zypper install google-cloud-sap-agent- VERSION_NUMBER .x86_64
Replace VERSION_NUMBER with the agent's
version number that you want to install, such as
3.1-606637668 . For information about the agent
versions that you can install, see
List all available
versions of the agent .
Windows
Establish an RDP connection with your host Compute Engine instance.
To update to version 3.12 (latest) of the agent, as an
administrator, run the following command from PowerShell:
googet install google-cloud-sap-agent
Downgrade Google Cloud's Agent for SAP
While we recommend that always using the latest version of
Google Cloud's Agent for SAP, you can downgrade from its latest version to any other
supported version of the agent by running the following command:
RHEL
sudo tee /etc/yum.repos.d/google-cloud-sap-agent.repo VERSION_NUMBER .x86_64
SLES15
sudo zypper addrepo --refresh https://packages.cloud.google.com/yum/repos/google-cloud-sap-agent-sles15-x86_64 google-cloud-sap-agent
sudo zypper install google-cloud-sap-agent- VERSION_NUMBER .x86_64
SLES 12
sudo zypper addrepo --refresh https://packages.cloud.google.com/yum/repos/google-cloud-sap-agent-sles12-x86_64 google-cloud-sap-agent
sudo zypper install google-cloud-sap-agent- VERSION_NUMBER .x86_64
Replace VERSION_NUMBER with the agent's version
number that you want to install, such as 3.1-606637668 . For
information about the agent versions that you can install, see
List all available versions of the agent .
Roll back to using the Backint agent
If you want to roll back to using the Backint agent and stop using the
Backint feature of Google Cloud's Agent for SAP, then follow these steps:
Delete all files related to the Backint feature of Google Cloud's Agent for SAP:
rm -r /usr/sap/ SID /SYS/global/hdb/opt/backint/backint-gcs
Replace SID with the SID of your SAP system.
Restore the files of the Backint agent that were stored as a backup
when you upgraded to using Google Cloud's Agent for SAP, by copying them to the
backint-gcs directory:
cp -r /usr/sap/ SID /SYS/global/hdb/opt/backint/backint-gcs-old- TIMESTAMP /usr/sap/ SID /SYS/global/hdb/opt/backint/backint-gcs
Replace the following:
SID : the SID of your SAP system
TIMESTAMP : the timestamp value in the name of the
folder that was created when you upgraded from Backint agent to
Google Cloud's Agent for SAP
Use SAP HANA Studio or SAP HANA Cockpit to edit the global.ini file, and
update the paths to your .txt configuration files. For information about
the parameters for which you must specify the path to the .txt files, see
Configure SAP HANA for the Backint feature .
Save the changes made to the global.ini file.
Uninstall the agent
To uninstall or remove the agent from your host:
RHEL
Establish an SSH connection with your host.
Run the following command:
sudo yum remove google-cloud-sap-agent
SLES
Establish an SSH connection with your host.
Run the following command:
sudo zypper remove google-cloud-sap-agent
Windows
Establish an RDP connection with your host Compute Engine instance.
As an administrator, run the following command from PowerShell:
Remove-Service -Name 'google-cloud-sap-agent'
View the agent's logs in Cloud Logging
By default, the logs for Google Cloud's Agent for SAP are redirected from your
Compute Engine instances and Bare Metal Solution servers to
Cloud Logging .
To view the agent's logs in Logging, follow these steps:
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs explorer
Go the Query pane.
From the Resources drop-down menu, select Global , and then click
Apply .
In the query editor, enter google-cloud-sap-agent .
Click Run query .
You can see the logs generated by the agent instances running on all your
Compute Engine instances or Bare Metal Solution servers. To filter the
logs from a specific instance or server, use the filters available in the
interface.
You can disable the default redirection of agent's logs that is concerned with
the collection of metrics. To do so, complete the following steps:
Establish an SSH connection with your host Compute Engine instance or
Bare Metal Solution server.
Open the following configuration file:
/etc/google-cloud-sap-agent/configuration.json
For the parameter log_to_cloud , update the value to false .
Save the configuration file.
Restart the agent
for this change to take effect.
To disable the default redirection of the logs related to the Backint feature of
Google Cloud's Agent for SAP, edit your
Backint configuration file
and set the log_to_cloud parameter to false .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
