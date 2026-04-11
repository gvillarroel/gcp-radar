---
title: "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/logging-gce-quickstart
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/logging-gce-quickstart
  title: "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\
    \ \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Collect logs from Apache with the Ops Agent
Learn how to collect and view syslog logs collected from an
Apache web server installed on a Compute Engine virtual machine (VM) instance
by using the Ops Agent. You can
use a process similar to the one in this quickstart to
monitor other third-party applications .
In this quickstart, you do the following:
Create a Compute Engine VM instance and install the
Ops Agent .
Install an Apache web server.
Configure the Ops Agent for the Apache web server.
View your logs in the Logs Explorer.
Create a log-based alert.
Test your alert.
Clean up.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Security constraints defined by your organization might prevent you from completing the
following steps. For troubleshooting information, see
Develop applications in a constrained Google Cloud environment .
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Cloud Monitoring, Cloud Logging, and OS Config APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Cloud Monitoring, Cloud Logging, and OS Config APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to create a Compute Engine instance, install Apache, and to view metric data,
ask your administrator to grant you the
following IAM roles on your project:
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
Logs Viewer ( roles/logging.viewer )
Monitoring Editor ( roles/monitoring.editor )
OSPolicyAssignment Admin ( roles/osconfig.osPolicyAssignmentAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a VM instance
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Create a VM by clicking Create instance . Configure your instance by using the options in
the navigation menu.
In the Machine configuration option, do the following:
In the Name field, enter a descriptive name.
In the Machine type preset drop-down, select Shared-core > e2-small .
Verify that the OS and storage option displays Debian GNU/Linux . If not, click the
OS and storage option and click Change . In the Boot disk dialog, set
Version to Debian GNU/Linux .
In the Networking option, for Firewall , select both Allow HTTP traffic and
Allow HTTPS traffic .
Verify that the Observability option displays Install Ops Agent . If not, click
the Observability option and select Install Ops Agent for Monitoring and
Logging .
Click Create .
Install an Apache web server
To install an Apache web server on your Compute Engine VM instance, do
the following:
On the VM instances page, locate your new VM,
go to the Connect column,
and then click SSH .
Having trouble connecting? Refer to
Troubleshooting SSH .
To update the package lists, copy the following command to your clipboard,
paste the command into the SSH terminal, and then press enter:
sudo apt-get update
After you see the message "Reading package lists... Done", in the
SSH terminal, run the following command to install an Apache2 web server:
sudo apt-get install apache2 php7.0
When asked to continue the installation, enter Y . If the
install command fails, then use sudo apt-get install apache2 php .
When your command prompt returns, go to the VM instances page and copy
the VM's external IP address into the following URL:
http:// EXTERNAL_IP
To connect to your Apache web server, open a new browser tab, and then
enter the URL from the previous step.
When the web server is successfully installed, the browser tab displays the
Apache2 Debian default page.
Collect Apache web server logs and metrics
In these steps, you configure the Ops Agent
to collect logs and metrics from your Apache web server:
Go to the SSH terminal for your VM instance. If you don't have a terminal open,
then do the following:
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Locate your new VM and then click SSH .
Copy the following command, then paste it into the terminal for your instance, and then
press enter:
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
apache :
type : apache
service :
pipelines :
apache :
receivers :
- apache
logging :
receivers :
apache_access :
type : apache_access
apache_error :
type : apache_error
service :
pipelines :
apache :
receivers :
- apache_access
- apache_error
EOF
The previous command creates the configuration to collect and ingest logs
and metrics from the Apache web server. For more information, see
Configure
the Ops Agent for Apache web server .
Restart the Ops Agent:
To restart the agent, run the following command on your instance:
sudo systemctl restart google-cloud-ops-agent
To confirm that the agent restarted, run the following command and
verify that the components "Metrics Agent" and "Logging Agent" started:
sudo systemctl status "google-cloud-ops-agent*"
View Apache web server logs
To view your logs in the Google Cloud console, use the Logs Explorer:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
Your most recent logs are displayed in the Query results pane.
In the toolbar, ensure that Show query is enabled.
To view your Apache web server logs, create and run a query:
Expand the list of Google Cloud projects from the
Google Cloud project selector, and then copy the
Google Cloud project ID into your clipboard.
In the following expression, paste the copied ID into the PROJECT_ID
field, and then copy the expression into the query editor:
resource.type = "gce_instance"
logName =( "projects/ PROJECT_ID /logs/apache_access" OR "projects/ PROJECT_ID /logs/apache_error" )
When the previous query is run, only apache_access and apache_error log
entries are shown.
Click
Run query .
The results of the query are displayed in the Query results pane.
You've configured the Ops Agent to collect logs and metrics from your
Apache web server, and you've viewed those logs. The next step is to
create an alerting policy so that you're notified when a specific pattern
appears in a log.
Create an email notification channel
Before you create an alerting policy, configure the notification channels that you want the
alerting policy to use. Cloud Monitoring supports many different types of notification
channels, including email, Slack, PagerDuty, and Pub/Sub. For more information, see
Create and manage notification channels .
To get notifications by e-mail, do the following:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar, click Edit Notification Channels .
On the Notification channels page, scroll to
Email ,
and then click Add new .
Enter your email address, a display name such as My email , and then
click Save .
Create a log-based alert
To be notified when a specific message appears in your log entries, create a
log-based alert. In this section, you create a log-based alert so that you are
notified when a 404 Not Found message appears in your log entries.
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the Query results toolbar,
click add_alert
Create alert . The log-based alert policy pane opens.
In Alert details , for the Alert Policy Name field,
enter 404 Not Found .
In Choose logs to include in this alert , do the following:
Remove any content that is in the log filter field.
Copy the following query and paste it into the log filter field:
severity > = DEFAULT /help httpRequest.status = 404
The previous log filter searches for log entries with a severity level
of at least DEFAULT , that contain the text /help , and that contain an
httpRequest status of 404 .
In Set notification frequency and autoclose duration section, do
the following:
Set the Time between notifications field to 5 min .
Set the Incident autoclose duration field to 30 min .
In Who should be notified? , select your email from
Notification Channels menu, and then click Save .
Test the alerting policy
To test the alerting policy, do the following:
Go to the SSH terminal for your VM instance. If you don't have a terminal
open, then do the following:
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Locate your new VM and then click SSH .
To search the server for the fake page localhost/help , run the
following command:
curl localhost/help
After you see a 404 Not Found message in the terminal, an email
notification is sent. It takes several minutes for this process
to complete.
The email notification you receive looks similar to the following:
To view the new log entries, do the following:
In the Google Cloud console, go to the
segment
Logs Explorer page:
Go to Logs Explorer
If you use the search bar to find this page, then select the result whose subheading is
Logging .
In the toolbar, click Jump to now .
You've configured the Ops Agent to collect logs and metrics from your
Apache web server, but you've only viewed logs. For information
about how to view Apache web server metrics, see
Collect Apache web server metrics with the Ops Agent: Generate traffic .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
If you created a new project and you no longer need the project, then
delete the project .
If you used an existing project, then do the following:
If you created a VM, then delete it:
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
Select the checkbox for
the instance that you want to delete.
To delete the instance, click more_vert More actions , click Delete ,
and then follow the instructions.
Delete the alerting policy that you created:
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Select the alerting policy that you created, and then click
Delete .
What's next
To learn about the Ops Agent and supported integrations, see:
Ops Agent overview .
Monitor third-party applications
For information about viewing logs in the Logs Explorer, see
View logs by using the Logs Explorer .
For information about querying in the Logs Explorer, see
Build queries in the Logs Explorer .
For information about how to collect and view Apache web server metrics,
see the quickstart
Collect Apache web server metrics with the Ops Agent .
For more information about Monitoring and its relation to
Cloud Logging, see Monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
