---
title: "Troubleshoot the Logging agent \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/logging/troubleshooting
  title: "Troubleshoot the Logging agent \_|\_ Google Cloud Documentation"
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
Troubleshoot the Logging agent
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for troubleshooting common issues found with
installing or interacting with the Logging agent.
Checklist
If you are having trouble installing or using the Logging agent,
here are some things to check:
If Linux installation commands result in errors, then make sure that you
prefix the installation commands with sudo .
Verify that the agent service is running on your VM instance:
For a Windows VM, use the following PowerShell command:
Get-Service -Name StackdriverLogging
Search for a service called Stackdriver Logging . If the agent is not
running, you might need to restart it.
For a Linux VM, use the following command:
sudo service google-fluentd status
If the agent is not running, you might need to restart it using the
following command:
sudo service google-fluentd restart
If the restart fails, and the log output shows "Disabled via metadata",
you are likely running an image from Google Cloud Marketplace ,
where the Logging agent is disabled by default. The
google-logging-enable instance metadata key controls the Logging agent
enablement status, where a value of 0 disables the agent. To re-enable
the agent, either remove the google-logging-enable key or set its
value to 1 . For more information, see
Create an instance with the logging agent disabled ).
If the agent is not disabled via metadata, reinstall the agent.
See the following section, Reinstalling the Logging agent .
See if the agent has written error messages to the logs.
On Windows, as of version v1-9, the Logging agent saves its
logs in C:\Program Files (x86)\Stackdriver\LoggingAgent\fluentd.log .
There is no way to get the logs for prior versions of the agent.
On Linux, the Logging agent is a fluentd package and logs
messages to /var/log/google-fluentd/google-fluentd.log :
If you see HTTP 429 errors, you might have exceeded your
Logging API quotas . You can see your
available quota by selecting APIs & services > Dashboard in
the Google Cloud console. Choose the Logging API.
If you see API access or authorization problems, go to Verifying
Compute Engine credentials .
If the agent seems to be running normally, but you are not getting data,
then you should check that the agent is sending data to the correct project.
See the following section, Verifying Compute Engine credentials .
If the agent fails to authorize, check whether the credentials for your
private key are missing or invalid .
Verify the agent installation
Note: If your VM was launched as part of an App Engine flexible environment
or Kubernetes Engine deployment, you do not need to install the
Logging agent. Skip this page.
To check that the installation was successful, look for the agent's test log
entry in the Logs Explorer.
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
At the top of the page, choose the project containing your VM instance:
For Compute Engine VM instances , choose the Google Cloud project
that contains the VM instance.
In the windows tabs , choose the resource for your VM instance:
For Compute Engine , choose GCE VM Instance .
Select syslog (Linux), fluent.info (Windows), or All logs .
If you see a log entry, "Successfully sent gRPC to Logging API,"
then the agent installation is complete. This message generated once when the
agent is installed and also each the agent is restarted.
For more information about the Logs Explorer,
see Using the Logs Explorer .
Test the agent
If you suspect that the agent is not working, check that it is running and try
to send a test message to Logging:
Linux instance
Verify that the Logging agent is running by executing the following
commands on your VM instance:
ps ax | grep fluentd
You should see output similar to the following:
2284 ? Sl 0:00 /opt/google-fluentd/embedded/bin/ruby /usr/sbin/google-fluentd [...]
2287 ? Sl 42:44 /opt/google-fluentd/embedded/bin/ruby /usr/sbin/google-fluentd [...]
Send a test log message by running the following command on your VM
instance:
logger "Some test message"
Windows instance
The Logging agent has two Windows service names:
StackdriverLogging for versions v1-5 and later
fluentdwinsvc for earlier versions
You should be running one agent service. Run the following commands on
your VM instance using PowerShell:
Ask for the status of both services. If you know which
service should be running, you can use just that service name:
Get-Service StackdriverLogging,fluentdwinsvc
If a service is not running, you see an error message. If it is running,
you see output like the following:
Status Name DisplayName
------ ---- -----------
Running StackdriverLogging Cloud Logging
If you query both services, you should see one error message and one
Running status:
If you do not see any Running status, then the Logging agent
is not running.
If you see that StackdriverLogging is running, then you are
running a recent agent version. To determine the specific version,
see Getting the version .
If you see that fluentdwinsvc is running, then you should
upgrade your agent to
the latest version.
Requires Administrator privileges : If any agent version is running,
then send a test log message by running the following PowerShell commands:
New-EventLog -LogName Application -Source "Test Source"
Write-EventLog -LogName Application -Source "Test Source" -EntryType Information -EventID 1 -Message "Testing 123 Testing."
Find your test message
After sending a test message, look for it in the
Logs Explorer :
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
At the top of the page, choose the project containing your VM instance:
For Compute Engine VM instances , choose the Google Cloud project
that contains the VM instance.
In the windows tabs , choose the resource for your VM instance:
For Compute Engine , choose GCE VM Instance .
Select syslog (Linux), fluent.info (Windows), or All logs .
You should see a log entry with your test message. If so, then the Logging
agent is operating correctly.
Verify Compute Engine credentials
For a Compute Engine VM instance to run the agent without private-key
credentials, the instance must have suitable access
scopes and the
service account identity
being used by the instance must have suitable IAM permissions.
When you create a VM instance, the default scope and service account settings
are sufficient to run the agents. Very old instances, or instances
for which you have changed the default settings, might not have suitable
credentials.
Failure to load default credentials
In case there are Could not load the default credentials failures in the
Logging log file, this implies the agent may be failing to
connect to the Compute Engine Metadata Server.
The error log looks like the following:
Starting google - fluentd 1.8 . 4 : / opt / google - fluentd / embedded / lib / ruby / gems / 2.6 . 0 / gems / googleauth - 0.9 . 0 / lib / googleauth / application_default . rb : 74 : in ` get_application_default ': Could not load the default credentials. Browse to (RuntimeError) https://developers.google.com/accounts/docs/application-default-credentials for more information.
One potential cause to this is if the VM has custom proxy setup. To fix this,
refer to the Proxy setup instruction
to exclude the Compute Engine Metadata Server ( metadata.google.internal , or
169.254.169.254 ) from going through the proxy. If the error persists, then
remove the default Compute Engine service account from the VM and re-add it.
Verify access scopes
To verify the access scopes, do the following:
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Click the name of your VM instance. The detail page for your instance
appears.
In the Cloud API access scopes section, click Details to see the
list of APIs. Look for the following entries:
If you see "This instance has full API access to all Google Cloud
Services," then your access scopes are adequate.
If you see next to Stackdriver Logging API , an older name for
the Cloud Logging API, that you have
Write Only or Full permission, then your instance's
access scopes are adequate for the Cloud Logging agent.
If you see next to Stackdriver Monitoring API , an older name for
the Cloud Monitoring API, that you have
Write Only or Full permission, then your instance's
access scopes are adequate for the Cloud Monitoring agent.
Correct the problem
If you do not have suitable access scopes in your Compute Engine instance,
add the needed access scopes to your
instance .
The following table shows the scopes relevant to the Logging and
Monitoring agents:
Access scope
Agent permissions
https://www.googleapis.com/auth/logging.write
Adequate for the Logging agent
https://www.googleapis.com/auth/monitoring.write
Adequate for the Monitoring agent
Verify default service account permission
Even if your Compute Engine VM instance's access scopes are adequate, your
instance's default service account might not provide the right
IAM permissions for the agent.
To verify the default service account permission, start by locating the
default service account:
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Click the name of your VM instance. The detail page for your instance
appears.
Look for the Service account heading on the page. The
default service account for the instance is listed. It might
look like the following:
[ ID ]- compute @ developer.gserviceaccount.com
In the Google Cloud console, go to the IAM page:
Go to IAM
If you use the search bar to find this page, then select the result whose subheading is
IAM & Admin .
Select View By: Principals . You should see a list of people, groups, and
service accounts. In the Role column are the roles each principal
has in your project.
In the row for your instance's default service account, you should see one
or more roles:
If you see Editor , that role is adequate for all the agents.
The Editor role might automatically be granted to the default
service account depending on your organization policy configuration .
If you see Logs Writer , that role is sufficient for the Logging
agent. For other Logging roles that include the write permission, see
Access Control for Cloud Logging .
If you see Monitoring Metric Writer , that role is sufficient for the
Monitoring Agent. For other Monitoring roles that include the write
permission, see Access Control for Cloud Monitoring .
Correct the problem
If your default service account does not have adequate roles, try editing the
roles for your service account in the IAM & admin > IAM page. Add the proper
Logging or Monitoring
roles to authorize the agent(s): Logging > Logs Writer
or Monitoring > Monitoring Metric Writer .
Verify private-key credentials
On Compute Engine VM instances, you can configure the agent to use a non-default
service account that has the proper authorization.
To configure the agent this way, you must create private-key credentials for the
designated service account and give those credentials to the agent.
The agent looks for an environment variable,
GOOGLE_APPLICATION_CREDENTIALS , which holds the name of a file which
contains the private-key credentials.
If the environment variable is not present, then
the agent will look for credentials in a default location:
Linux
/etc/google/auth/application_default_credentials.json
Windows
C:\ProgramData\Google\Auth\application_default_credentials.json
If the default location doesn't contain the credentials, the agent uses the
application default credentials from metadata server.
Caution: Use file system or other access control to be sure that the private key
is only accessible by the applications that need it on your instances.
The following information helps you diagnose private-key credentials problems:
Is the private key in place?
Is the private key still valid for the service account?
Does the service account have the roles needed for the agent?
To verify that valid private-key credentials are installed on your VM instance,
first verify that the credentials file exists in its expected location, and then
verify that the information in the credentials file is valid.
Are the credentials present?
To see if private-key service account credentials are on your instance, run the
following Linux commands on your instance:
sudo cat $GOOGLE_APPLICATION_CREDENTIALS
sudo cat /etc/google/auth/application_default_credentials.json
If either command displays a file like the one shown below, then your instance
might have valid private-key credentials. If both commands display a file, then
the file denoted by GOOGLE_APPLICATION_CREDENTIALS is used.
{
"type" : "service_account" ,
"project_id" : "[YOUR-PROJECT-ID]" ,
"private_key_id" : "[YOUR-PRIVATE-KEY-ID]" ,
"private_key" : "[YOUR-PRIVATE-KEY]" ,
"client_email" : "[YOUR-PROJECT-NUMBER]-[YOUR-KEY]@developer.gserviceaccount.com" ,
"client_id" : "[YOUR-CLIENT-ID]" ,
"auth_uri" : "https://accounts.google.com/o/oauth2/auth" ,
"token_uri" : "https://accounts.google.com/o/oauth2/token" ,
"auth_provider_x509_cert_url" : "{x509-cert-url}" ,
"client_x509_cert_url" : "{client-x509-cert-url}"
}
Discrepancies between credential configurations may cause the agent to use
credentials different from what your service requires. For example, if you set a
custom credential location in GOOGLE_APPLICATION_CREDENTIALS in the login
shell, but do not set that variable in the agent's service configuration, the
service will look in the default location rather than your custom location.
To review or change your credentials environment variable,
access or set GOOGLE_APPLICATION_CREDENTIALS in /etc/default/google-fluentd .
If there are no credential files present, then see
Adding credentials .
Caution: Other services besides Logging might use private-key
credentials on your instance. Replacing existing credentials might prevent
other services from working.
Are the credentials valid?
In the credentials file, project_id is your Google Cloud project, client_email
identifies the service account in the project, and private_key_id identifies
the private key in the service account. Match this information with what is
shown in the IAM & Admin > Service accounts section of the
Google Cloud console.
The credentials file is not valid if any of the following are true:
You are checking a Compute Engine instance, but the Google Cloud project
in the credentials file is not the project that contains your instance.
The listed service account doesn't exist. It could have been deleted.
The listed service account doesn't have the right roles enabled:
Logs Writer for the Cloud Logging agent
and Monitoring Metric Writer for the Cloud Monitoring
agent.
The private key doesn't exist. It could have been revoked.
Credentials can be revoked using the IAM & Admin > Service accounts section
of the Google Cloud console. If valid credentials aren't present, see
Adding credentials
to replace the existing
credentials or to add new ones.
If the service account is the correct one but the private key has been revoked,
then you can create a new private key and copy it to your instance. See
Creating service account keys .
Otherwise, you must create a new service account as described in the section
Adding credentials .
Verify Log Exclusion queries
View your
current exclusion queries
to ensure that the logs you are looking for are not accidentally excluded.
Verify Firewall
To see if your instance has access to logging.googleapis.com , run the
following Linux command on your instance:
curl -sSL 'https://logging.googleapis.com/$discovery/rest?version=v2' | head
The command can take some time to finish when the firewall blocks outbound
traffic. Sample output that indicates a firewall issue:
curl: (7) Failed to connect to 2607:f8b0:4001:c03::5f: Network is unreachable
Visit Firewall Rules for
information on how to set up rules for outbound traffic.
Reinstall the agent
Installing the most recent version of the agent can solve
many problems:
If you are sure that the problem is not related to credentials, you can skip
ahead
to Installing on Linux and Windows .
For a full install of the agent and any needed credentials,
see Install the Logging agent .
Other common issues
The following table lists some common problems that you may encounter with the
Cloud Logging agent and tells you how to fix them.
On Linux, the Logging agent records errors in
/var/log/google-fluentd/google-fluentd.log . On Windows, the Logging agent
records errors in C:\Program Files (x86)\Stackdriver\LoggingAgent\fluentd.log
(starting at version v1-9).
The error class Google::APIClient::ClientError indicates there is a problem
with permissions or API access.
You may start seeing errors after the agent has been running successfully.
For example, someone might have revoked the required permissions from your
project or your VM instance.
Error
Cause
Solution
The agent's installer on Windows fails to run
You might have downloaded the installer to a
system directory.
Move the installer to a non-system directory, such as
C:\Users\[USERID]\ .
Project has not enabled the API
You have not enabled the Cloud Logging API in your project.
Go to the APIs console
and change the status of the Cloud Logging API to ON .
Request had invalid credentials
or Unable to fetch access token (no scopes configured?)
Your VM instance does not have suitable credentials.
See
Authorize the Logging agent to install credentials.
Authorization failed
Your private-key authorization credentials for the Logging agent are
not configured correctly.
See
Verifying private key credentials .
The caller does not have permission
The service account used for authorization in your project has
insufficient permissions. It might be the default service account used
within Compute Engine or App Engine, or it might be a user-defined
service account used for private key authorization. The account
must have the role of Editor .
Change the permission of the service account in your project's
IAM page.
If necessary, you can modify the access scope for an existing VM using the
Changing the service account and access scopes for an instance
procedures.
Cannot obtain project ID
The Cloud Logging agent failed to get the project ID from a
service account's private key credentials file.
To add or override a project ID for the agent,
edit the agent's configuration file,
/etc/google-fluentd/google-fluentd.conf , on your VM
instance.
In the <match **> section,
add the following line:
project_id [YOUR_PROJECT_ID]
Otherwise, see
Authorize the Logging agent to fix or replace the credentials.
Window Logging agent stops ingesting event logs from some
channels
The Logging agent might silently fail in ingesting
event logs from certain channels, even though it is
still running and ingesting agent logs and event logs from other channels.
The reason is that windows_eventlog plugin has some issues as
mentioned in this presentation .
Using windows_eventlog2
resolves this issue.
Note: The data format of the windows_eventlog2 plugin is not backward-compatible
with the windows_eventlog plugin. If there are
any BigQuery or Google Cloud Storage exports pipelines that are set up for these logs,
they need to be adjusted accordingly. See
this log entries comparison
provided by windows_eventlog and windows_eventlog2 .
To use windows_eventlog2 , you must first stop the
Logging agent and then replace the configuration file with one similar to
this sample config file .
Finally, start the Logging agent.
Logging agent stops ingesting logs in the presence of
logrotate
The Logging agent may lose track of where it is in the
input files when logrotate is set up with the copytruncate
setting.
It's best to use the nocopytruncate setting to ensure
that logrotate moves the files instead of truncating them. If you want to
keep the copytruncate setting, the workaround is to
restart the agent
periodically. Or, you could use the postrotate setting to
restart the agent.
error_class=Errno::EADDRINUSE error="Address already in use - bind(2)
for 0.0.0.0:24231"
There are multiple Logging agent instances running on
the VM.
Using ps -aux | grep "/usr/sbin/google-fluentd" to show
running agent processes (there should be only two: one supervisor and one
worker), and sudo netstat -nltp | grep :24231 to show
running processes that occupies the port. Kill older instances as seen
fit.
Logging agent fails to start due to errors from
lib/fluent/config/types.rb
The Logging agent config uses a
regex parser section
that has malformed regex, resulting in an invalid subexp call and errors like Starting
google-fluentd 1.8.6:
/opt/google-fluentd/embedded/lib/ruby/gems/2.6.0/gems/fluentd-1.11.2/lib/fluent/config/types.rb:92:
warning: invalid subexp call .
Locate and fix the malformed regex in the agent
configuration
file . Tip: search for regex or parse .
Note: If the previous errors don't apply, and you're not seeing your log
entries, see
Viewing logs: Troubleshooting .
Limitation on log throughput
The maximum log throughput that the Logging agent can process is
CPU bounded. CPU usage tends to grow when the log throughput grows. But the
agent, with the default configuration, can use up to only one CPU core. So when
the log throughput spikes, the agent might hit a CPU usage limit. If these
spikes are just temporary, the Logging agent buffers the logs and
later catches up to eventually process them. If the log throughput consistently
stays high, the logs might overflow the buffer and eventually are lost.
Typically, when each log entry is 1000 byte raw text and contains no additional
format processing, the Logging agent hits the one core CPU limit
at about 5,500 log entries per second. If the log entries require advanced
processing, for example JSON or Regex parsing, the maximum log entries per
second might be lower.
If you need higher log throughput, you could consider using the Ops
Agent . On Linux, for log entries that
are 1000 byte raw text and involve no additional processing, the Ops Agent can
processes about 160,000 log entries per second.
Maximum log size exceeded
If one or more log entries exceeded the maximum size limit, then you might find
entries in the fluentd logs similar to the following:
Dropping 1 log message(s) error_class="Google::Apis::ClientError" error="Invalid request"
or
Dropping 1 log message(s) error="3:Log entry with size 1000515 bytes exceeds maximum size of 112640 bytes" error_code="3"
To resolve this error, trim your log entries so that they don't exceed the
maximum size limit. For example, the following sample code trims logs with tag
mytag , with the data in the field message :
# Cloud Logging only supports log entries that are up to 256 KiB in size .
# Trim the entries to just under that size to avoid dropping them .
< filter [ MY_TAG ] >
@type record_transformer
enable_ruby true
< record >
message ${ record [ 'message' ] . length > 256000 ? "[Trimmed]#{record['message'][0..256000]}..." : record [ 'message' ] }
< / record >
< / filter >
Logs are duplicated
LogEntry.insertID
is added in the processing pipeline within the agent. If insertID is different
among the duplicate logs, this indicates the logs are tailed from the log files
multiple times. This could happen in the presence of log rotation, or when the
pos file is missing or corrupted. To reduce the chance of this issue, ensure the
position files for any in_tail input are not configured to be in the /var/log
folder or any other folders that may have log rotation enabled.
The logging pipeline also relies on the
LogEntry.timestamp
field to de-duplicate logs. Make sure the actual timestamp of the log entry is
parsed properly. If Fluentd is not set up to
parse the original timestamp from the log entry, then Fluentd uses the time when
it processes the log entry. So if the input is read multiple times, even though
the timestamp in the log line is the same, Fluentd may treat them as different
log entries with different timestamps.
Repeated Audit log errors: Data points cannot be written more than 24h in the past
There is a known issue affecting versions 1.8.5 through 1.9.3 (inclusive) which
causes logs like the following to appear repeatedly in
Data Access audit logs , when the agent has
been running for over 24 hours:
Field timeSeries[0].points[0].interval.end_time had an invalid value of "2021-10-20T20:16:34.010866-07:00": Data points cannot be written more than 24h in the past.
The solution is to upgrade your agent
to 1.9.4 or later.
Unicode characters in logs get replaced by spaces or '�'
By default, the in_tail input expects the input files to be ASCII encoded, so
it replaces any non-ASCII character by a space. To actually ingest UTF-8 encoded
files, you need to supply two options in the in_tail configuration:
< source >
@ type tail
…
encoding UTF - 8
from_encoding UTF - 8
< / source >
Both options are necessary. If only the encoding option is supplied, non-ASCII
characters in the ingested logs will be replaced by '�'.
Removed agent reported by Google Cloud console as installed
After you uninstall the agent, the Google Cloud console might take up to one
hour to report this change.
Logging agent doesn't appear in Windows Uninstall a program list
To uninstall the Logging agent when it isn't listed in the Windows Control
Panel's Uninstall a program list, run uninstall.exe from the directory
where you installed it.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
