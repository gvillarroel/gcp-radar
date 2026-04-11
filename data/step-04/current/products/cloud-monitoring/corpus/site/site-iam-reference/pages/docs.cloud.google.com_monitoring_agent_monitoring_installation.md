---
title: "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/agent/monitoring/installation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent/monitoring/installation
  title: "Installing the Cloud Monitoring agent on individual VMs \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Guides
Send feedback
Installing the Cloud Monitoring agent on individual VMs
Stay organized with collections
Save and categorize content based on your preferences.
This is a legacy agent. While this agent is
still supported on Linux,
we recommend against using it for new Google Cloud workloads.
Instead, we recommend that you use the
Ops Agent
for new Google Cloud workloads and eventually transition your existing
Compute Engine VMs to use the Ops Agent.
The Ops Agent, which combines the collection of metrics and logging into a
single agent, is the eventual replacement for the legacy agents.
The Ops Agent is under active development, but there might be some
use cases that it doesn't support. If the Ops Agent doesn't support your
use case, then you can still use the
Monitoring agent on Linux.
There will be no new feature development or support for new operating systems
for the legacy Monitoring agent.
We strongly recommend against using the legacy Monitoring agent on Windows.
The legacy Monitoring agent on Windows is unsupported, and all of its features are available in the Ops Agent. We strongly recommend using Ops Agent for monitoring Windows instances. However, if you have to run the legacy Logging agent on Windows and also need to collect metrics, you must use the legacy Monitoring agent; you can't run the Ops Agent and a legacy agent on the same machine.
The Cloud Monitoring agent gathers system and application metrics from your
VM instances and sends them to Monitoring. You can also configure
the Monitoring agent to monitor third-party applications.
This guide explains how to install the Cloud Monitoring agent for
Monitoring on Compute Engine and Amazon Elastic Compute Cloud
(EC2) VMs. Using the agent is optional but recommended for Compute Engine
VM instances. For these VMs,
Monitoring can access some metrics from the VM's hypervisor
without the agent, including CPU utilization, some disk traffic metrics, network
traffic, and uptime. Using the agent is required for Amazon Elastic Compute
Cloud (EC2) VMs.
On instances running Microsoft Windows, the agent records CPU utilization and
memory, pagefile, and volume usage. If you are running IIS or SQL server, the
agent collects metrics from those services by default.
Note: The Cloud Monitoring agent is designed to ingest system, third-party,
user-defined, and agent telemetry metrics. Some of these metrics are chargeable.
For information about pricing, see the Monitoring sections of the
Google Cloud Observability pricing page.
Before you begin
To install the agent, ensure that you have the following:
A supported VM instance in a
Google Cloud project.
A minimum of 250 MiB of resident (RSS) memory is recommended to run the
Monitoring agent.
Also ensure your VM is running a supported operating
system .
Credentials on the VM instance that authorize communication with
Cloud Logging or Cloud Monitoring. Compute Engine VM instances
generally have the correct credentials by default. If the following
scenario applies to you, then you might not have the proper credentials and
must complete the
Authorize the Monitoring agent procedures:
Running very old Compute Engine instances or Compute Engine
instances created without the default credentials.
To check if you have the proper credentials, run the Verifying
Compute Engine credentials
procedures.
For pricing information, go to Google Cloud Observability pricing .
If you're using VMs that don't have access to remote package repositories,
refer to the VMs without remote package access
section for more information.
Install the agent from the command line
Note: First verify that all conditions are met in the Before you
begin section.
To install the agent using the command line, use the following instructions.
Install the latest version of the agent
To install the latest version of the agent, complete the following steps.
Linux
Open a terminal connection to your VM instance using SSH or a similar tool
and ensure you have sudo access.
Change to a directory you have write access to, for example your home
directory.
Download and run the agent-installation script by using the following
commands:
curl -sSO https://dl.google.com/cloudagents/add-monitoring-agent-repo.sh
sudo bash add-monitoring-agent-repo.sh --also-install
After it is installed, the agent is started automatically.
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking the
PowerShell icon and selecting Run as Administrator .
Run the following PowerShell commands:
(New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe")
& "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe"
Installing a specific version of the agent
To install a specific version of the agent, complete the following steps.
Linux
Open a terminal connection to your VM instance using SSH or a similar tool
and ensure you have sudo access.
Change to a directory you have write access to, for example your home
directory.
Download the agent installation script:
curl -sSO https://dl.google.com/cloudagents/add-monitoring-agent-repo.sh
When running the add-monitoring-agent-repo.sh script, you can also set the
following flags:
--verbose : Turns on verbose logging during the script execution.
--also-install : Installs the agent after adding the agent package
repository.
--version : Sets the agent version for the script to install.
For version information, see List all agent versions .
--uninstall : Uninstalls the agent.
--remove-repo : Removes the corresponding agent package repository after
installing or uninstalling the agent.
--dry-run : Triggers only a dry run of the script execution and prints out
the commands that it is supposed to execute.
See the script comments for more information and example usage.
Add the agent's package repository and install the agent:
To list the available agent versions, see
List all agent versions .
For production environments, you might want to pin to a major version to
avoid installing major versions that might include backward incompatible
changes. To pin to a major version, run:
sudo bash add-monitoring-agent-repo.sh --also-install \
--version= MAJOR_VERSION.*.*
For example, to pin to the 6.x.x of the
agent, run:
sudo bash add-monitoring-agent-repo.sh --also-install \
--version=6.*.*
To install a specific version of the agent, run:
sudo bash add-monitoring-agent-repo.sh --also-install \
--version= MAJOR_VERSION.MINOR_VERSION.PATCH_VERSION
Start the agent service
sudo service stackdriver-agent start
You can delete the installation script after it runs successfully.
To verify that the agent is working as expected, run:
sudo service stackdriver-agent status
The status of the agent should be OK .
You can also examine the logs and ensure there are no errors:
sudo grep collectd / var / log / { syslog , messages } | tail
If you have trouble with the installation, refer to the
Troubleshooting page.
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking the
PowerShell icon and selecting Run as Administrator .
Note: Only the latest version of the agent is supported on VM instances
running Windows. Installing previous versions is not recommended.
Run the following PowerShell commands:
(New-Object Net.WebClient).DownloadFile("https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe", "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe")
& "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe"
Alternatively, you can browse to the following URL to download and run the
agent's installer:
https://repo.stackdriver.com/windows/StackdriverMonitoring-GCM-46.exe
Caution: You must download the installer to a non-system directory, such
as C:\Users\[USERNAME] . For security reasons, the installer doesn't
run from system directories, including the directory C:\ .
If you download the installer to a system directory, move it to
another directory before running it. Note: The agent installer also supports a “silent” option,
/S , that can be used in scripting the installation.
To install the agent silently, append the /S option to the invocation
of the installer:
& "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" /S
Caution: Silent installation is an asynchronous operation. When the
installation command exits, the agent is not yet installed. You can
check for a successful installation by looking for the
StackdriverMonitoring service. Note: The installer places the agent in the
`C:\Program Files (x86)\Stackdriver\MonitoringAgent` directory
by default. You can change that directory during installation.
In “silent” mode use the /D option to specify the
installation directory, for example:
& "${env:UserProfile}\StackdriverMonitoring-GCM-46.exe" /S /D="C:\Stackdriver\Monitoring\"
You can delete the installer when it completes successfully.
If you have trouble with the installation, refer to the
Troubleshooting page.
Viewing agent information by using the Google Cloud console
You can find status information about the agent on the
pre-configured Monitoring VM Instances dashboard.
To reach this dashboard, do the following:
In the Google Cloud console, go to the VM Instances page:
Go to VM Instances
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
The List view on the Inventory tab on the dashboard lists all VMs and
includes a status column for your agent, as shown in the following screenshot:
The Agent column reports the following values:
Not detected : Either you don't have an agent installed or it is
not running. If you aren't sure if you've installed an agent, then you
can query for the installed version . If you've installed
the agent, then you can restart the agent .
Ops Agent : You are running the Ops Agent.
If you don't see a green checkmark beside the entry, then there is an
agent upgrade available, based on the detected operating system of your VM.
When you hover over the Ops Agent indicator in the table, you see information
about the version of the Ops Agent. If you are running an older version, you
also see a recommendation to upgrade your agent.
Pending : The Ops Agent is being installed or upgraded.
Agent installation failed : Installation of the Ops Agent failed.
Not Collecting Telemetry : Installation of the Ops Agent succeeded, but
the agent isn't yet sending telemetry.
Legacy Agent : You are running the legacy Monitoring or the
Logging agent.
See Migrating from the legacy agents to the
Ops Agent
for information on transitioning to the Ops Agent.
Not applicable : This VM is not a supported platform for running the agent.
VM Stopped : The VM is not running, so the agent's status is not known.
You can install the Ops Agent by doing the following:
Select the VM instances on which you want to install agents.
Click the Install/Update Ops Agent option on the Instances table.
You can also install or update the Ops Agent from
the VM Details page for a specific VM.
When possible, the agent is installed by using an Ops Agent OS policy.
For more information, see
Manage VMs covered by the Ops Agent OS policy .
Ops Agent OS policies aren't supported on all versions of all operating
systems. In this case, clicking Install/Update Ops Agent provides
a series of commands to run in Cloud Shell.
The Ops Agent collects both metrics and logs by default. You can change
this default behavior by
configuring the Ops Agent .
Optional tasks
This section describes how to perform common maintenance tasks.
Configuring the Monitoring agent
To adjust the agent configuration, see Configure the Monitoring agent .
Configure an HTTP proxy
If you use an HTTP proxy for proxying requests to the Logging and
Monitoring APIs, do the following:
Linux
Edit the following configuration file (create the file if it doesn't already
exist):
For agent versions 6.0.0 and higher, edit:
/etc/default/stackdriver-agent
For agent versions earlier than 6.0.0, edit the appropriate file for
your OS:
For Debian and Ubuntu, edit:
/etc/default/stackdriver-agent
For CentOS and SLES, edit:
/etc/default/stackdriver-collectd
Note: If this file doesn't exist, create it.
Add the following to the file:
export http_proxy = "http:// proxy-ip : proxy-port "
export https_proxy = "http:// proxy-ip : proxy-port "
export no_proxy = 169.254 . 169.254 # Skip proxy for the local Metadata Server.
Restart the agent by running the following command on your VM instance:
sudo service stackdriver-agent restart
Windows
If you use an HTTP proxy, run the following command from an
administrator command prompt. This sets the
HTTP_PROXY and HTTPS_PROXY
environment variables so that the agent can send data using outbound HTTPS:
setx HTTP_PROXY http:// proxy-ip : proxy-port /m
setx HTTPS_PROXY http:// proxy-ip : proxy-port /m
setx no_proxy 169.254.169.254 /m
Determine the agent version
To determine the version of the Monitoring agent on your system,
run the following commands on your VM instance:
DEBIAN / UBUNTU
Run the following command on Debian or Ubuntu:
dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' stackdriver-agent
SLES / SUSE
Run the following command on SUSE:
rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' stackdriver-agent
WINDOWS
There is presently no way to determine the version of the
Monitoring agent running on Windows.
Restart the agent
You must restart the Monitoring agent to pick up changes in
configuration files. To restart the agent, use the following instructions.
LINUX
Run the following command on your instance:
sudo service stackdriver-agent restart
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking the
PowerShell icon and selecting Run as Administrator .
Run the following PowerShell command:
Restart-Service -Name StackdriverMonitoring
Upgrade the agent
To upgrade the Monitoring agent to the latest release, use the
following instructions:
Note: If you upgraded your instance's Linux operating system to a new major
release, then you should first remove the agent and then
re-install it using the procedures on this page, instead of
completing these upgrade procedures.
Linux
To upgrade the agent to the latest version, run the following command:
sudo bash add-monitoring-agent-repo.sh --also-install
To upgrade the agent to the latest point release of a specific major version,
run the following command:
sudo bash add-monitoring-agent-repo.sh --also-install \
--version= MAJOR_VERSION.*.*
Windows
To upgrade to the latest agent release, install the newest agent as described in
Installing on Windows on this page. The installer prompts you
to uninstall the previous version of the agent.
List all agent versions
To list the available versions of the agent, run the following command:
CENTOS / RHEL
List the available versions of the agent:
sudo yum list --showduplicates stackdriver-agent
DEBIAN / UBUNTU
List the available versions of the agent:
sudo apt-cache madison stackdriver-agent
SLES / SUSE
List the available versions of the agent:
sudo zypper search -s stackdriver-agent
WINDOWS
Installing earlier versions of the agent on Windows is not supported.
Uninstall the agent
To remove the Monitoring agent and its configuration files, use the
following instructions.
After you uninstall the agent, the Google Cloud console might take up to one
hour to report this change.
Linux
Run the following command:
sudo bash add-monitoring-agent-repo.sh --uninstall
Optionally, to remove the repository in addition to uninstalling the agent,
append --remove-repo to the previous command.
Windows
In the Windows Control Panel, choose Uninstall a program . You should see the
Monitoring agent in the list of programs that you can uninstall. You can also
run uninstall.exe from the directory where you installed the
Monitoring agent.
VMs without remote package access
Installing the Monitoring agent requires access to
remote package repositories, for both the agent package and (on Linux) its
dependencies.
If you are using VPC-SC or a private network,
the network configuration might also affect your ability to install agent
dependencies from upstream repositories. The agent packages themselves are
accessible by using Private Google
Access . This can be configured
following Enable Private Google
Access .
If your VM host's security policy denies access to remote package repositories,
we recommend creating a custom VM
image with the
agent pre-installed and disabling package management in that image.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
