---
title: "Authorize the Logging agent \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/agent/logging/authorization
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent/logging/authorization
  title: "Authorize the Logging agent \_|\_ Google Cloud Documentation"
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
Authorize the Logging agent
Stay organized with collections
Save and categorize content based on your preferences.
Note: Skip this guide and return to Install the
Logging agent if you are using a
Compute Engine VM instance, and you have not yet attempted to install the
agent. Compute Engine instances should be pre-authorized to run the agent.
This guide explains how to ensure that the Logging agent , which you install
on your virtual machine (VM) instance, is authorized to send telemetry data to
Logging.
Authorization overview
Authorization refers to the process of determining what permissions an
authenticated client has for a set of resources. Google Cloud authorizes
the Logging agent on a Compute Engine VM instance by using
application default credentials
(ADC).
The Logging agent supports ADC
that authenticate either a VM's attached service account,
or a service account key.
An attached service account refers to a service account that's specific
to a
given resource, such as a VM. The service account has its own unique
credentials. ADC uses the VM's metadata server
to obtain credentials for a service.
A service account key refers to a private key used to
authorize the
key pair on a service account in a project, which lets you create an access
token. You use the token to provide an identity so that you can interact
with Google Cloud APIs on behalf of the service account.
We recommend that you configure ADC to authenticate by using
an attached service account
whenever possible, as the private key requires local storage, and that storage
can be compromised. For more information about service account keys, see
Best practices for managing service account keys .
Before you begin
Read this guide if any of the following applies to you:
If you're running very old Compute Engine instances or if you have
modified the access scopes or service account settings for your
Compute Engine instances, then you must complete the steps in this
guide before installing the agent. These VMs might not have the required
service account key file. For information about how to verify the access
scopes and service account settings of your instances, see
Verify Compute Engine credentials .
On newly created Compute Engine VM instances, the access scopes and
service account settings are sufficient to run the agents.
To verify your access scopes, do the following:
Query the access scopes by running the following command on
your Compute Engine instance:
curl --silent --connect-timeout 1 -f -H "Metadata-Flavor: Google" http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/scopes
In the command output, if the access scope
https://www.googleapis.com/auth/cloud-platform
is listed, then you have sufficient authorization.
If https://www.googleapis.com/auth/cloud-platform isn't
listed, then you require two access scopes, one from each of the
following "logging" and "monitoring" pairs:
https://www.googleapis.com/auth/logging.write or
https://www.googleapis.com/auth/logging.admin
https://www.googleapis.com/auth/monitoring.write or
https://www.googleapis.com/auth/monitoring.admin
To modify your access scopes, do the following:
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
If necessary, click the drop-down list of Google Cloud projects
and select the name of your project.
Select VM instances from the navigation menu, select the
Instances tab, and the select the name of your VM.
Shut down the VM by clicking stop Stop .
After the VM stops, click edit Edit .
Locate the Access scopes in the Identity and API access
section of the page, and then select Set access for each API .
For Stackdriver Logging API and Stackdriver Monitoring API entries,
select the Write Only .
Click Save , and then restart the VM by clicking
play_arrow Start/Resume .
Use a service account
Authentication refers to the process of determining a client's identity.
For authentication, we recommend using a service account , a special kind
of account that is typically used by an application or a workload,
rather than a person. For more information, see
Service accounts overview .
You can use service accounts for authentication regardless of where your code
runs: on Compute Engine, App Engine, or on-premise.
For more information, see Authentication at Google .
This section describes how to create a new service account and grant it
the necessary roles, and how to update an existing service account if it
doesn't have the necessary roles.
Create a service account
To create a service account, complete the
Creating a service account
procedures with the following information:
Select the Google Cloud project in which to create the service account.
For Compute Engine instances, choose the project in which you
created the instance.
In the Role drop-down menu, select the following roles:
Logging > Logs Writer . This authorizes the Logging
agent to ingest logs.
Monitoring > Monitoring Metric Writer . This authorizes the
Logging agent to ingest its own health metrics.
If you plan to authenticate using a service account key,
then select JSON as the Key type and click Create .
When you click Create , a file that contains a service account key is
downloaded to your local system. For more information, see
Create and delete service account keys .
Note: After you download a key, you cannot download that key again.
Next, configure your service account and settings based on whether you authorize
by using attached service accounts or by using service account private keys.
Verify and modify roles of an existing service account
You can use the Google Cloud console to determine which roles an existing service
account has, and to add any necessary roles that are missing:
In the Google Cloud console, go to the IAM page:
Go to IAM
If you use the search bar to find this page, then select the result whose subheading is
IAM & Admin .
If necessary, click the drop-down list of Google Cloud projects
and select the name of your project.
If you don't see a list of IAM principals
(users and service accounts), then select the Permissions tab.
In the View by Principals list, locate the entry for the
service account. The Role column lists the roles granted to
the service account.
If your service account does not have the necessary roles for the
Logging agent , then use the following steps to add the roles described in
Create a service account :
Click edit Edit in the entry for the service account.
Click Add Another Role to add any missing roles.
Click Save .
Authorize with an attached service account
To authorize the Logging agent installed on a Compute Engine VM instance
that has an attached service account, do the following:
Ensure that you
verified the access scopes of your VM .
Grant your service account the least privileged
IAM roles possible. For the required roles, see the
Create a service account section of this page.
Attach the service account
to the VM where the agent is running.
If you haven't already installed the agent, then install it.
For information about how to install the agent, see
Installing the agent .
Authorize with a service account key
To authorize the Logging agent installed on a VM instance by using
service account private keys, do the following:
Transfer the service account key file from your local system to your VM instance:
Create an environment variable to point to the service account key file
on your
local system. The following example creates a variable called CREDS :
CREDS = ~/Downloads/ PROJECT-NAME - KEY-ID .json
In the Google Cloud console, go to the VM instances page:
Go to VM instances
If you use the search bar to find this page, then select the result whose subheading is
Compute Engine .
Identify the INSTANCE_NAME and INSTANCE_ZONE for your VM.
On your local system, run a Google Cloud CLI
command to copy the key file from your local system to your VM instance:
REMOTE_USER = " $USER "
INSTANCE = " INSTANCE_NAME "
ZONE = " INSTANCE_ZONE "
gcloud compute scp " $CREDS " " $REMOTE_USER @ $INSTANCE :~/temp.json" --zone " $ZONE "
On your Compute Engine instance, move the service account key file
from the temporary location to a permanent location,
and for Linux, ensure that the service account key file is readable only
by root .
Warning: If you already have a service account key file, ensure that your new
key file doesn't overwrite the key file for your current applications.
These are the locations where the agent expects your key file:
Linux VMs : /etc/google/auth/application_default_credentials.json
Windows VMs : C:\ProgramData\Google\Auth\application_default_credentials.json
Linux and Windows VMs:
Any location you store in the environment
variable GOOGLE_APPLICATION_CREDENTIALS , which must be visible to
the agent's process. For configuration information, see
Set GOOGLE_APPLICATION_CREDENTIALS .
For example, on Linux you can run the following script which moves the
service account key file to the default location, and then sets the appropriate
permissions:
CREDENTIALS_FILE_LOCATION = "/etc/google/auth/application_default_credentials.json"
sudo mkdir -p /etc/google/auth
sudo mv " $HOME /temp.json" " $CREDENTIALS_FILE_LOCATION "
sudo chown root:root " $CREDENTIALS_FILE_LOCATION "
sudo chmod 0400 " $CREDENTIALS_FILE_LOCATION "
Your VM instance now has the service account key file that the agent needs.
Next, install or restart the agent:
For information about how to install the agent, see
Installing the agent .
For information about how to restart the agent, see
Restarting the agent .
If you would like to double-check the service account key file, see
Verifying private-key credentials .
Set GOOGLE_APPLICATION_CREDENTIALS
This section shows how to set the environment variable
GOOGLE_APPLICATION_CREDENTIALS so that it is visible to the agent's process.
Note: The Logging agent isn't the only service that uses the environment
variable GOOGLE_APPLICATION_CREDENTIALS . If you change the value of this
variable as described in this section,
then that change affects all system services that rely on that variable.
Linux
Edit the following configuration file, or create the file if it doesn't
exist:
/etc/default/google-fluentd
Add the following to the configuration file:
GOOGLE_APPLICATION_CREDENTIALS = PATH_TO_CREDENTIAL_FILE
Restart the agent by running the following command on your VM instance:
sudo service google-fluentd restart
Windows
In PowerShell, run the following commands as administrator to set the
GOOGLE_APPLICATION_CREDENTIALS system environment variable for the
Ops Agent to use:
[ Environment ]:: SetEnvironmentVariable ( "GOOGLE_APPLICATION_CREDENTIALS" , " PATH_TO_CREDENTIAL_FILE " , "Machine" )
Restart the agent by running the following command on your VM instance:
Restart-Service -Name StackdriverLogging
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
