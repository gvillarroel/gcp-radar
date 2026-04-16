---
title: "What's new with Google Cloud's Agent for SAP \_|\_ SAP on Google Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sap/docs/agent-for-sap/whats-new
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sap/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sap/docs/agent-for-sap/whats-new
  title: "What's new with Google Cloud's Agent for SAP \_|\_ SAP on Google Cloud \_\
    |\_ Google Cloud Documentation"
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
What's new with Google Cloud's Agent for SAP
Stay organized with collections
Save and categorize content based on your preferences.
This document lists significant changes to Google Cloud's Agent for SAP.
Google Cloud's Agent for SAP is the successor to the Google Cloud agents:
Google Cloud's monitoring agent for SAP NetWeaver,
Google Cloud monitoring agent for SAP HANA,
and
Cloud Storage Backint agent for SAP HANA .
If you are using any of these Google Cloud agents, then we recommend that
you upgrade to using version 3.12 (latest) of
Google Cloud's Agent for SAP at your earliest convenience. For details about
Google Cloud's Agent for SAP, see the
Google Cloud's Agent for SAP planning guide .
To view all of the announcements from SAP on Google Cloud, see
Release notes .
Version 3.12
Version 3.12 on Google Cloud's Agent for SAP introduces bug fixes and the following
enhancements:
Enhancements for disk snapshot based recovery for SAP HANA : From version
3.12, when you use the agent's disk snapshot feature to recover an SAP HANA
database that uses two or more disks to host the SAP HANA data volume:
You also need the IAM permission compute.disks.delete . For
information about the IAM permissions that you need to
perform disk snapshot based backup and recovery, see
Set permissions .
You can set the names of the new disks by specifying the -new-disk-names
argument. This overrides the naming convention that the agent uses by
default.
When you don't specify the -new-disk-names argument, but specify the
-new-disk-suffix argument,
the agent names the new disks by appending the specified suffix to the
corresponding source disk names.
When you specify the -new-disk-suffix argument, the new disk names won't
include the UTC timestamp of when the disks were created.
For more information, see
Recover the database by using a disk snapshot based backup .
Enhancements for validating Pacemaker configurations : The agent
collects more Workload Manager evaluation metrics as part of
the sap/validation/pacemaker metric series. These metrics let you evaluate your
SLES-based SAP workloads against the following best practice in
Workload Manager: "Pacemaker: Upgrade the SUSE HA cluster and
the SAP HANA HA/DR provider hooks to use SAPHanaSR-angi ".
For more information about this evaluation, see the best practices that belong
to the "SAP High Availability" category in
Workload Manager best practices for SAP .
Version 3.11
Version 3.11 on Google Cloud's Agent for SAP introduces the following:
Optimizing SAP HANA performance on X4 : To help you optimize the performance of
SAP HANA workloads running on X4 instances, the agent's configureinstance
command has been updated. From version 3.11, the agent does the following:
When you run the configureinstance -apply command, the agent configures
the following TCP congestion control settings to use the BBR algorithm:
net.ipv4.tcp_allowed_congestion_control = reno cubic bbr
net.ipv4.tcp_congestion_control = bbr
This also helps you address the known issue about
reduced replication performanace for SAP HANA workloads running on X4 instances due to sub-optimal TCP congestion control settings .
To help you monitor OS configuration changes on X4 instances, the agent runs
the configureinstance -check command every 5 minutes.
The agent writes a summary output of the configureinstance command in the
/var/log/google-cloud-sap-agent.log file.
For information about configuring the guest OS on Compute Engine
bare metal instances that run SAP workloads, see
Configure guest OS on Compute Engine bare metal instances .
Enhancements for disk snapshot based backup and recovery for SAP HANA :
During backup operations, you can specify a prefix for the
snapshot and group snapshot names by using the -snapshot-prefix argument.
During recovery operations:
You can specify a suffix for the names of the new disks that are created,
by using the -new-disk-suffix argument. As part of this usability
enhancement, from version 3.11, the -new-disk-prefix argument is not
supported.
The new disk names include the UTC timestamp of when the disks are created.
For more information, see
Back up and recover SAP HANA by using disk snapshots .
( Preview )
Install and manage agents on a fleet of VMs : To install
and manage version 3.11 or later of the agent on your VM fleet,
you can use VM Extension Manager policies.
For more information, see
Install and manage Agent for SAP on a fleet of VMs .
Version 3.10
Version 3.10 of Google Cloud's Agent for SAP introduces the following:
General availability of disk snapshot based backup and recovery for SAP HANA :
The disk snapshot feature of the agent is generally available for the
following types of systems:
SAP HANA scale-up databases where the /hana/data volume is hosted on more
than one disk.
SAP HANA scale-out databases.
For more information about this feature, see
Backup and recovery for SAP HANA by using disk snapshots .
Workload observability enhancements : Once you update to version 3.10 of
the agent, the Workload Manager observability dashboard displays
information about the agent and its configuration related to observability.
This information is displayed in the following fields of the Applications
and Databases tabs of the observability dashboard: Agent version ,
Process metrics , System discovery , and HANA monitoring . For more
information, see
Applications and Databases tabs .
Workload evaluation enhancements : As part of the sap/validation/hana
Workload Manager evaluation metric, additional label-value
pairs are collected to support the evaluation rule
"High availability: Set the system replication hook for SAP HANA".
Version 3.9
Version 3.9 of Google Cloud's Agent for SAP introduces the following:
Monitoring enhancements :
To reduce the volume of Process Monitoring metrics collected by the agent, from version 3.9, the default collection frequency of fast-changing metrics has been reduced to 30 seconds and that of slow-changing metrics to 120 seconds. These changes don't affect the values that you've specified for the slow_process_metrics_frequency and process_metrics_frequency parameters in the agent's configuration file.
Bug fixes in process_metrics_to_skip for metrics that convey the availability of SAP processes.
Version 3.8
Version 3.8 of Google Cloud's Agent for SAP introduces the following:
Monitoring enhancements :
To improve the monitoring of memory usage by Linux system processes, the
"Compute resources" category of Process Monitoring metrics has been
introduced.
To improve the monitoring of memory usage by SAP HANA, the following metrics
have been introduced:
sap/hana/log/utilisationkb : This Process Monitoring metric specifies
the disk space (KB) that the SAP HANA log volume is using.
sap/hanamonitoring/fast_restart_enabled : This SAP HANA Monitoring
metric specifies if the SAP HANA Fast Restart option is enabled or not.
sap/hanamonitoring/logshipping_max_retention_size : This SAP HANA
Monitoring metric provides information about the
logshipping_max_retention_size SAP HANA parameter.
For more information, see the metric descriptions in
Process Monitoring metrics
and
SAP HANA monitoring metrics .
Supportability enhancements : To help you and Cloud Customer Care better
troubleshoot issues with your SAP workloads, the output of the supportbundle
command includes the information about the following:
The SAP products and related components that are running on the compute
instance. This information provides Customer Care better context
about the role and configuration of your SAP system.
The occurrences of predefined SAP events and the changes in the values of
Process Monitoring and SAP HANA Monitoring metrics.
For more information, see
Support Bundle .
Version 3.7
Version 3.7 of Google Cloud's Agent for SAP introduces the following:
Support for disk snapshot based backup and recovery for SAP HANA scale-out :
You can use the disk snapshot feature of the agent to back up and restore
SAP HANA scale-out systems that don't use the host auto-failover solution.
For more information, see
Backup and recovery for SAP HANA by using disk snapshots .
SAP HANA monitoring enhancements :
For multi-tenant SAP HANA systems, you can set up tenant-specific
monitoring. For SAP HANA HA systems deployed with the
Active/Active (Read Enabled)
configuration, you can set up node-specific monitoring. For more
information, see
Monitoring for multi-tenant and HA systems .
Additional metrics related to backups have been introduced. For more
information, see the descriptions of metrics belonging to the
sap/hanamonitoring/backups/logs/ , sap/hanamonitoring/backups/data/ , and
sap/hanamonitoring/backups/catalog/ series in
SAP HANA monitoring metrics .
Enhancements for Workload Manager evaluation of Pacemaker
configurations : The agent collects more Workload Manager
evaluation metrics as part of the sap/validation/pacemaker metric series.
These let you perform more evaluations for the configuration of
Pacemaker-managed HA clusters.
For information about the introduced evaluations, see the best practices that
belong to the "SAP High Availability" category in
Workload Manager best practices for SAP .
Validate the Google Cloud setup for agent features : By running the
agent's status command, you can validate if your setup in Google Cloud
is complete for using the agent features. This command tells you if the agent
is configured as required, if the required IAM permissions are
granted to the service account, if the host Compute Engine instance is
granted the required scopes to access the Cloud APIs.
For more information, see the configuration guides in the agent documentation.
For example, for information about how to validate the Google Cloud
setup for the collection of Process Monitoring metrics collection, see
Validate the setup for Process Monitoring metrics collection .
Support for showing SAP events as annotations on dashboards : You can set
up monitoring for certain SAP system events by displaying them as annotations
in Cloud Monitoring dashboards and predefined observability dashboards. For
more information, see
Show SAP events on Cloud Monitoring dashboards .
Backint related enhancements : Version 3.7 of the agent introduces the
following configuration parameters for Backint based backup and recovery of
SAP HANA: parallel_recovery_streams , object_retention_time , and
object_retention_mode . These let you specify object-level retention policies
instead of a bucket-level retention policy. For information about these
parameters, see their description in
Configuration parameters .
Automatic polling of agent configuration : When you manually edit the
agent's configuration file, you no longer need to restart the agent for the
changes to take effect. The changes are auto-picked within the next 30
seconds.
Version 3.6
Version 3.6 of Google Cloud's Agent for SAP introduces the following:
( Preview )
Striped disk support for snapshot based backup and recovery of SAP HANA :
You can use the disk snapshot feature of the agent to back up and restore
SAP HANA scale-up databases where the /hana/data volume is hosted on more than one
disk.
To use this feature enhancement, you need to contact Customer Care.
For more information, see
Backup and recovery for SAP HANA by using disk snapshots .
Updates to SAP HANA monitoring metrics :
The metric sap/hanamonitoring/backups/snapshot has been introduced. It
shows the state of the last complete disk snapshot based data backup. It
includes the labels backup_id and entry_type_name .
The metric sap/hanamonitoring/backups/data has been fixed. It was showing
the ID of the Backint based backup. It's been fixed to show the state of the
last complete Backint based backup. Also, from version 3.6, this metric
includes the labels backup_id and entry_type_name .
For more information, see the descriptions of these metrics in
SAP HANA monitoring metrics .
The Backint configuration parameter custom_time supports the value
UTCNow+ NUMBER d , which lets you set a future date for
the Custom_Time metadata of the backups you upload to
Cloud Storage. For more information, see the description of the
custom_time parameter in
Configuration parameters .
Enhancements to the agent's configureinstance command, which improve the
performance on SAP HANA scale-out systems running on Compute Engine
bare metal instances.
Version 3.5
Version 3.5 of Google Cloud's Agent for SAP introduces the following:
Support for setting up observability for your SAP workloads using
Workload Manager. For more information, see
SAP system discovery .
When you enable the collection of SAP HANA monitoring metrics, the agent
additionally collects the following metrics by default:
sap/hanamonitoring/transactions/blocked
sap/hanamonitoring/backups/data
sap/hanamonitoring/backups/log
sap/hanamonitoring/memory/unloads
sap/hanamonitoring/disk/readtime
sap/hanamonitoring/disk/writetime
For information about these metrics, see
SAP HANA monitoring metrics .
Enhanced the Workload Manager evaluation metric
sap/validation/hana . Additional label-value pairs are collected as part of
this metric to support Workload Manager evaluations related to
SAP HANA backups.
On Linux, you can now disable and enable the agent's systemd service by
running configuration commands. For more information, see
Disable or enable the agent .
Fixed the behavior of the Process Monitoring metric
sap/hana/ha/availability . When the secondary SAP HANA instance was stopped,
the agent instance installed on it was incorrectly reporting the value 0 for
this metric. It's now been fixed to show the appropriate value, depending on
its state. For more information, see the description of this metric in
Process Monitoring metrics .
Version 3.4
Version 3.4 of Google Cloud's Agent for SAP introduces the following:
Workload performance diagnostics : To help Cloud Customer Care in accelerating
troubleshooting any performance issues with your SAP workloads that
run on Google Cloud, a performance diagnostics tool is built into
Google Cloud's Agent for SAP.
For more information, see
Workload performance diagnostics .
Backint related enhancement : From version 3.4, you can specify the
custom-time parameter in your PARAMETERS .json file.
This parameter sets the Custom-Time metadata for your backups that are
uploaded to Cloud Storage. For more information, see the description
of the parameter in
Configuration parameters .
Disk snapshot related enhancements : From version 3.4, the following
enhancements are available:
While running the hanadiskbackup command, you can use the
-confirm-data-snapshot-after-create argument to specify when snapshot
creation is confirmed to SAP HANA. For more information, see this argument's
description in
Create a disk snapshot based backup .
While running the hanadiskrestore command:
The agent can auto-detect the disk hosting your /hana/data directory.
This means that the arguments -data-disk-name and -data-disk-zone are
optional from version 3.4. However, if you specify these arguments while
running the hanadiskrestore command, then they override the agent's
auto-detection.
If you're creating a new disk to host the /hana/data directory, then
you can specify the -labels-on-detached-disk arguments. This lets you
add label-value pairs to the disks that are detached during recovery.
You can let the agent send to Cloud Monitoring the duration that it
takes for the recovery operation to complete. You can do this by using
the send_metrics_to_monitoring boolean argument.
For more information, see
Supported arguments for disk restoration .
Version 3.3
Version 3.3 of Google Cloud's Agent for SAP introduces the following:
Disk snapshot related enhancement : From version 3.3, when you
create a disk snapshot based backup
by running the hanadiskbackup command, the agent can auto-detect the disk
hosting your /hana/data directory.
This means that the arguments -source-disk and -source-disk-zone are
optional from version 3.3. However, if you specify these arguments while
running the hanadiskbackup command, then they override the agent's
auto-detection.
Backint related enhancements :
To support activities such as lifecycle management of backups, you can
associate key-value pairs as metadata with the backup files in your
Cloud Storage bucket. You can do this by including the metadata
parameter while running the configurebackint command. For more
information, see
Configuration parameters .
To automatically shorten the path to the files in your
Cloud Storage bucket, you can specify the shorten_folder_path
boolean parameter while running the configurebackint command. For more
information, see
Configuration parameters .
You can let the agent send Backint related metrics to Cloud Monitoring.
These metrics indicate the status and throughput of the files uploaded and
downloaded during Backint operations. You can do this by using the
send_metrics_to_monitoring boolean parameter. For more information, see
Backint metrics collection .
While testing the agent's Backint related
self diagnostics tool ,
you can use the optional parameters diagnose_file_max_size_gb and
diagnose_tmp_directory . For information about these parameter, see
Configuration parameters .
Support for hdbuserstore key based authentication : To authenticate the
database user account that the agent uses to query your SAP HANA database,
you can specify an hdbuserstore key to the hdbuserstore_key configuration
parameter. This option is available when you perform the following:
Create a disk snapshot based backup
Configure Process Monitoring metrics collection
Configure Workload Manager evaluation metrics collection
Configure SAP HANA monitoring metrics collection
Version 3.2
Version 3.2 of Google Cloud's Agent for SAP introduces the following:
Default collection of Workload Manager evaluation metrics at no cost :
From version 3.2, by default, new installations of the agent are enabled to
collect the Workload Manager evaluation metrics. You don't
incur any cost to collect these metrics. However,
you'd still need to perform other configurations to let the agent collect
the Workload Manager evaluation metrics.
If you're updating to version 3.2, then to collect the
Workload Manager evaluation metrics, you'd need to provide
the concerned service account the
Workload Manager Insights Writer ( roles/workloadmanager.insightWriter )
role.
For more information, see
Configure Workload Manager evaluation metrics collection .
Configuration commands : From version 3.2, in addition to manually editing
the configuration file and restarting the agent, you can use commands to
configure the agent and automatically restart it. For more information, see
Configuration commands for Google Cloud's Agent for SAP .
Backint related enhancements :
You can enable parallel uploading of backups to a Cloud Storage
bucket that has a retention policy by using the xml_multipart_upload
parameter in combination with the parallel_streams parameter.
While uploading backups to a Cloud Storage bucket, you can specify
the storage class that is associated with the uploaded backup by using the
storage_class parameter.
For information about the Backint configuration parameters, see
Configuration parameters .
Disk snapshot related enhancements : From version 3.2, while creating disk
snapshot based backups:
You can associate label-value pairs to the snapshots by using the labels
argument with the hanadiskbackup command. For more information, see
Create a disk snapshot based backup .
The agent doesn't freeze or unfreeze the /hana/data volume by default. For
more information, see
Create disk snapshot based backups .
New Process monitoring metrics : sap/pacemaker and sap/hana/volumes . For
more information, see
Process Monitoring metrics .
Version 3.1
Version 3.1 of Google Cloud's Agent for SAP introduces the following:
For discovering SAP system information, the enable_workload_discovery and
enable_discovery configuration parameters have been introduced. These
parameters let the agent collect information about the SAP products running
on your Compute Engine instance or Bare Metal Solution server. For more information, see the agent
installation guide for your scenario.
For the Backint feature of the agent, the folder_prefix and
recovery_folder_prefix parameters have been introduced. These parameters
let you organize backups of multiple SAP HANA systems in the same
Cloud Storage bucket. For more information, see
Configure Backint based backup and recovery for SAP HANA .
Version 3.0
Note: Version 3.0 of Google Cloud's Agent for SAP is the successor to the
Cloud Storage Backint agent for SAP HANA .
Version 3.0 of Google Cloud's Agent for SAP introduces the following features:
Backup and recovery for SAP HANA by using Backint : From version 3.0, you
can back up and recover your SAP HANA database by using the agent's Backint
feature. This feature is available for SAP HANA systems running on Google Cloud,
on Bare Metal Solution, on premises, or on other cloud platforms. For more
information about this feature of the agent, see
Backup and recovery for SAP HANA by using Backint .
Backup and recovery for SAP HANA by using disk snapshots : From version 3.0,
you can back up and recover SAP HANA databases running on Google Cloud
by using the agent's disk snapshot feature. For more information about
this feature, see
Backup and recovery for SAP HANA by using disk snapshots .
Collection of the latest set of Workload Manager evaluation metrics :
From version 3.0, when the feature is enabled, the agent collects the latest
set of
Workload Manager evaluation metrics
without requiring you to update the agent. Consequently, this lets you
seamlessly evaluate your SAP systems against any new best practices introduced
in
Workload Manager .
If you need to turn off this behavior, then set the fetch_latest_config
configuration parameter to false .
For more information about version 3.0 of Google Cloud's Agent for SAP, see
Google Cloud's Agent for SAP planning guide .
Version 2.8
Version 2.8 of Google Cloud's Agent for SAP additionally collects the SAP Host Agent
metrics Guaranteed IOPS and Guaranteed Throughput for Google Cloud Hyperdisk
volumes.
Version 2.7
Version 2.7 of Google Cloud's Agent for SAP introduces the following:
Fixed the handling of SAP HANA database passwords that contain special
characters. They are now encoded in double quotes, as mandated by SAP.
The sap/networkstats family of Process Monitoring metrics that are related
to TCP network. For more information, see
Process Monitoring metrics .
For visualizing the SAP HANA monitoring metrics collected by agent versions
2.0 or later, the Agent for SAP - Detailed HANA Overview and
Agent for SAP - HANA performance dashboards. For information about these
dashboards, see
View the collected metrics .
Version 2.6
Version 2.6 of Google Cloud's Agent for SAP introduces the following:
Fixes for the collection of Workload Manager evaluation metrics
that are related to SAP HANA and Pacemaker instances.
From this version, for agent instances running on Bare Metal Solution servers,
the agent configuration parameter instance_id has been replaced by the
parameter instance_name . For more information, see
Install the agent .
Configuration parameter updates for the collection of the
Process Monitoring metrics :
process_metrics_frequency : From version 2.6, this parameter determines the
collection frequency for the following fast-changing Process Monitoring metrics:
sap/hana/availability , sap/hana/ha/availability , and
sap/nw/availability . All other Process Monitoring metrics are now referred to as
slow-changing Process Monitoring metrics.
slow_process_metrics_frequency : This parameter determines the
collection frequency of all other Process Monitoring metrics.
process_metrics_to_skip : This parameter determines the Process
Monitoring metrics that the agent skips from collecting. This parameter
accepts a comma-separated value of Process Monitoring metric names. For
example: "process_metrics_to_skip": ["/sap/nw/abap/sessions", "/sap/nw/abap/rfc"] .
For more information about the configuration parameters related to the
collection Process Monitoring metrics, see:
For agent instances on Compute Engine instances, see
Configuration parameters .
For agent instances on Bare Metal Solution servers, see
Configuration parameters .
Version 2.5
Version 2.5 of Google Cloud's Agent for SAP introduces the following:
A new metric, sap/validation/hanasecurity , which indicates the collection of
SAP HANA database metrics for Workload Manager evaluation. For
more information, see
Workload Manager evaluation metrics .
Enhancement to use the SOAP interface of sapcontrol for the collection of
the Process Monitoring metrics.
For the collection of Process Monitoring metrics, included fixes in SAP system
discovery to ignore commented entries.
Version 2.4
Version 2.4 of Google Cloud's Agent for SAP includes bug fixes for the collection
of the Workload Manager evaluation metric, sap/validation/corosync .
Version 2.3
Version 2.3 of Google Cloud's Agent for SAP includes bug fixes for SAP system
discovery sending data to Cloud Logging.
Version 2.2
Version 2.2 of Google Cloud's Agent for SAP includes bug fixes for SAP system discovery.
Version 2.1
Version 2.1 of Google Cloud's Agent for SAP includes the following features and
bug fixes:
SAP system discovery : Identifies all Google Cloud platform resources
related to the SAP system and sends this information to Cloud Logging.
Support bundle feature : Facilitates the collection of necessary information,
such as logs and error strings, to improve supportability.
Bug fixes in the collection of Workload Manager evaluation metrics.
Version 2.0
Note: Version 2.0 of Google Cloud's Agent for SAP is the successor to version 2 of
the monitoring agent for SAP HANA.
Version 2.0 of Google Cloud's Agent for SAP introduces the following features:
Collection of SAP HANA monitoring metrics : On Linux, you can configure
Google Cloud's Agent for SAP to collect the SAP HANA monitoring metrics. These
metrics provide you visibility into the performance, availability, and health of
your SAP HANA instances and the underlying infrastructure. For more
information, see
SAP HANA monitoring metrics .
For more information about version 2.0 of Google Cloud's Agent for SAP, see
Google Cloud's Agent for SAP planning guide .
Version 1.6
Version 1.6 of Google Cloud's Agent for SAP includes the following bug fixes:
Fix to collect the Process Monitoring metric
/sap/nw/enq/locks/usercountowner from all applicable instance types - ASCS
and ERS.
Fixes for accessing the cloud_properties configuration of agent instances
running on Bare Metal Solution servers.
Version 1.5
Version 1.5 of Google Cloud's Agent for SAP includes the following bug fixes:
Fix for the agent instances on Linux to always overwrite the systemd service
file contents, which ensure that the agent capabilities works as expected
during version updates.
Fix in Linux command-line execution while parsing the command's exit code.
This fix prevents the agent from shutting down in some edge cases.
Version 1.4
Version 1.4 of Google Cloud's Agent for SAP includes the following bug fixes
and features:
Added a new startdaemon sub-command to run the agent in daemon mode.
This change is non-impacting to the normal operation of the agent.
Prevented changes to the agent configuration file from being overwritten
during updates.
Fixed sending time-value logs to Cloud Logging.
Fixed the collection of Workload Manager maintenance mode
and the Process Monitoring metric sap/nw/abap/sessions .
New metrics that the agent can collect:
/sap/nw/enq/locks/usercountowner : a Process Monitoring metric that
monitors the enqueue locks in SAP NetWeaver systems.
Version 1.3
Version 1.3 of Google Cloud's Agent for SAP includes the following bug fixes
and features:
Fixed the collection of SAP HANA related Workload Manager evaluation metrics.
The agent's logs are now redirected to Cloud Logging by default.
You no longer need to do any configuration for this.
Bug fix in Process Monitoring metrics to use REPLICATION_MODE
to determine whether an SAP HANA node is primary or secondary.
This improves metric accuracy for HANA secondary systems.
Version 1.2
Version 1.2 of Google Cloud's Agent for SAP includes the following bug fixes
and features:
The Process Monitoring metrics now consider the status of the
enq_replicator and enq_server services to determine the availability of
SAP NetWeaver instances.
New metrics that the agent can collect:
/sap/infra/migration : an infrastructure migration metric that indicates
if a Compute Engine instance is undergoing a live migration.
/sap/agent/health : a metric that shows the agent's health in
Cloud Monitoring.
/sap/agent/cpu/utilization and /sap/agent/memory/utilization :
these Cloud Monitoring metrics enable you to monitor the CPU and memory
resources used by the agent.
Version 1.1
Version 1.1 of Google Cloud's Agent for SAP fixes a Workload Manager
evaluation related bug to strip double quotes from Linux OS metric value.
Version 1.0
Version 1.0 of Google Cloud's Agent for SAP introduces the following features:
Collection of SAP Host Agent metrics : Google Cloud's Agent for SAP
collects and sends all the required information to the SAP Host Agent, as
mandated by SAP. For more information, see the SAP Host Agent metrics .
Collection of Process Monitoring metrics : On Linux, you can configure
Google Cloud's Agent for SAP to collect Process Monitoring metrics for your
SAP applications and their runtime states. This information helps you
troubleshoot the issues related to your SAP workloads. For more information, see
the Process Monitoring metrics .
Collection of Workload Manager evaluation metrics : On Linux, you can
configure Google Cloud's Agent for SAP to collect Workload Manager evaluation
metrics that are required to enable the Workload Manager services for your SAP workloads. For more
information, see the Workload Manager evaluation metrics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
