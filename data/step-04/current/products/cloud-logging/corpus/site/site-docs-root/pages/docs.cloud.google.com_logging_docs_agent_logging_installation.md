---
title: "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/logging/installation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/logging/installation
  title: "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\
    \ Documentation"
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
Installing the Cloud Logging agent on individual VMs
Stay organized with collections
Save and categorize content based on your preferences.
This is a legacy agent. While this agent is
still supported,
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
Logging agent.
There will be no new feature development or support for new operating systems
for the legacy Logging agent.
The Logging agent streams logs from your VM instances and from
selected third-party software packages to Cloud Logging. It is a best
practice to run the Logging agent on all your VM instances.
The VM images for Compute Engine don't include the Logging agent,
so you must complete these steps to install it on those instances. The agent
runs under both Linux and Windows.
If your VMs are running in Google Kubernetes Engine or App Engine , the
agent is already included in the VM image, so you can skip this page.
Before you begin
To install the agent, ensure that you have the following:
A supported VM instance in a
Google Cloud project.
When installing the Logging agent, a minimum of 250 MiB
memory is required, but 1 GiB is recommended.
Also ensure your VM is running a supported operating
system .
Credentials on the VM instance that authorize communication with
Cloud Logging or Cloud Monitoring. Compute Engine VM instances
generally have the correct credentials by default. If the following
scenario applies to you, then you might not have the proper credentials and
must complete the
Authorize the Logging agent procedures:
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
curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh
sudo bash add-logging-agent-repo.sh --also-install
After it is installed, the agent is started automatically.
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking the
PowerShell icon and selecting Run as Administrator .
Run the following PowerShell commands:
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe")
& "${env:UserProfile}\StackdriverLogging-v1-22.exe"
Installing a specific version of the agent
To install a specific version of the agent, complete the following steps.
Linux
Open a terminal connection to your VM instance using SSH or a similar tool
and ensure you have sudo access.
Change to a directory you have write access to, for example your home
directory.
Download the agent installation script:
curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh
When running the add-logging-agent-repo.sh script, you can also set the
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
sudo bash add-logging-agent-repo.sh --also-install \
--version= MAJOR_VERSION.*.*
For example, to pin to the 1.x.x of the
agent, run:
sudo bash add-logging-agent-repo.sh --also-install \
--version=1.*.*
To install a specific version of the agent, run:
sudo bash add-logging-agent-repo.sh --also-install \
--version= MAJOR_VERSION.MINOR_VERSION.PATCH_VERSION
Restart the agent service
A restart is required for the configurations that are installed by the
catch-all packages above to take effect.
sudo service google-fluentd restart
You can delete the installation script after it runs successfully.
To verify that the agent is working as expected, run:
sudo service google-fluentd status
The status of the agent should be OK .
You can also examine the logs and ensure there are no errors:
tail / var / log / google - fluentd / google - fluentd . log
If you have trouble with the installation, refer to the
Troubleshooting page.
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking the
PowerShell icon and selecting Run as Administrator .
Note: Only the latest version of the agent is supported on VM instances
running Windows. Installing previous versions is not recommended.
Run the following PowerShell commands:
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe")
& "${env:UserProfile}\StackdriverLogging-v1-22.exe"
Alternatively, you can browse to the following URL to download and run the
agent's installer:
https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe
Caution: You must download the installer to a non-system directory, such
as C:\Users\[USERNAME] . For security reasons, the installer doesn't
run from system directories, including the directory C:\ .
If you download the installer to a system directory, move it to
another directory before running it. Note: The agent installer also supports a “silent” option,
/S , that can be used in scripting the installation.
To install the agent silently, append the /S option to the invocation
of the installer:
& "${env:UserProfile}\StackdriverLogging-v1-22.exe" /S
Caution: Silent installation is an asynchronous operation. When the
installation command exits, the agent is not yet installed. You can
check for a successful installation by looking for the
StackdriverLogging service. Note: The installer places the agent in the
`C:\Program Files (x86)\Stackdriver\LoggingAgent` directory
by default. You can change that directory during installation.
In “silent” mode use the /D option to specify the
installation directory, for example:
& "${env:UserProfile}\StackdriverLogging-v1-22.exe" /S /D="C:\Stackdriver\Logging\"
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
Enable structured logging
When you run the installation script on a Linux VM, the script by default
installs the google-fluentd-catch-all package when the --also-install flag
is present. In order to switch to structured logging, complete the following
steps.
Back up any local changes to /etc/google-fluentd/config.d/ .
Run one of the following commands, depending on your Linux distribution:
YUM:
sudo yum remove -y google-fluentd-catch-all-config
sudo yum install -y google-fluentd-catch-all-config-structured
sudo service google-fluentd restart
APT:
sudo apt-get remove -y google-fluentd-catch-all-config
sudo apt-get install -y google-fluentd-catch-all-config-structured
sudo service google-fluentd restart
For information about structured logging, refer to the
structured logging guide.
Configuring the Logging agent
The agent comes preconfigured to monitor certain known log locations. On Linux,
those locations are described in the package google-fluentd-catch-all-config ,
which is automatically pulled in by the installation script. On Windows, the
agent monitors the Windows Event Log by default.
To adjust the agent configuration, see Configure the Logging agent .
Configure an HTTP proxy
If you use an HTTP proxy for proxying requests to the Logging and
Monitoring APIs, do the following:
Linux
Edit the following configuration file (create the file if it doesn't already
exist):
/etc/default/google-fluentd
Add the following to the file:
export http_proxy = "http:// proxy-ip : proxy-port "
export https_proxy = "http:// proxy-ip : proxy-port "
export no_proxy = 169.254 . 169.254 # Skip proxy for the local Metadata Server.
Restart the agent by running the following command on your VM instance:
sudo service google-fluentd restart
Windows
If you use an HTTP proxy, run the following command from an
administrator command prompt. This sets the
http_proxy and https_proxy
environment variables so that the agent can send data using outbound HTTPS:
setx http_proxy http:// proxy-ip : proxy-port /m
setx https_proxy http:// proxy-ip : proxy-port /m
setx no_proxy 169.254.169.254 /m
Determine the agent version
To determine the version of the Logging agent on your system,
run the following commands on your VM instance:
DEBIAN / UBUNTU
Run the following command on Debian or Ubuntu:
dpkg-query --show --showformat ' ${ Package } ${ Version } ${ Architecture } ${ Status } \n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured
SLES / SUSE
Run the following command on SUSE:
rpm --query --queryformat '%{NAME} %{VERSION} %{RELEASE} %{ARCH}\n' google-fluentd google-fluentd-catch-all-config google-fluentd-catch-all-config-structured
WINDOWS
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking
the PowerShell icon and selecting Run as Administrator .
Run the following PowerShell command:
reg query HKLM\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\GoogleStackdriverLoggingAgent\ /v Version
Restart the agent
You must restart the Logging agent to pick up changes in
configuration files. To restart the agent, use the following instructions.
LINUX
Run the following command on your instance:
sudo service google-fluentd restart
After restarting the Logging agent, you might want to
send a test message .
Windows
Connect to your instance using RDP or a similar tool and login to Windows.
Open a PowerShell terminal with administrator privileges by right-clicking the
PowerShell icon and selecting Run as Administrator .
Run the following PowerShell command:
Restart-Service -Name StackdriverLogging
Upgrade the agent
To upgrade the Logging agent to the latest release, use the
following instructions:
Note: If you upgraded your instance's Linux operating system to a new major
release, then you should first remove the agent and then
re-install it using the procedures on this page, instead of
completing these upgrade procedures.
Linux
To upgrade the agent to the latest version, run the following command:
sudo bash add-logging-agent-repo.sh --also-install
To upgrade the agent to the latest point release of a specific major version,
run the following command:
sudo bash add-logging-agent-repo.sh --also-install \
--version= MAJOR_VERSION.*.*
Windows
To upgrade to the latest agent release, install the newest agent as described in
Installing on Windows on this page. The installer prompts you
to uninstall the previous version of the agent.
List all agent versions
To list the available versions of the agent, run the following command:
CENTOS / RHEL
List the available versions of the agent:
sudo yum list --showduplicates google-fluentd
DEBIAN / UBUNTU
List the available versions of the agent:
sudo apt-cache madison google-fluentd
SLES / SUSE
List the available versions of the agent:
sudo zypper search -s google-fluentd
WINDOWS
Installing earlier versions of the agent on Windows is not supported.
Uninstall the agent
To remove the Logging agent and its configuration files, use the
following instructions.
After you uninstall the agent, the Google Cloud console might take up to one
hour to report this change.
Note: If you added your own fluentd configuration files, copy them from the
agent's configuration
directory for safekeeping.
Linux
Run the following command:
sudo bash add-logging-agent-repo.sh --uninstall
Optionally, to remove the repository in addition to uninstalling the agent,
append --remove-repo to the previous command.
Windows
In the Windows Control Panel, choose Uninstall a program . You should see the
Logging agent in the list of programs that you can uninstall. You can also
run uninstall.exe from the directory where you installed the
Logging agent.
VMs without remote package access
Installing the Logging agent requires access to
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
What's next
Learn about what logs the agent sends to Cloud Logging using its
default configuration .
For information on viewing your logs, see Using the
Logs Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
