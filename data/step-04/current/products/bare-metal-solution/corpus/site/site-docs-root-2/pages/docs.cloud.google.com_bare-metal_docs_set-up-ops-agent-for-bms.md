---
title: "Set up Ops Agent for Bare Metal Solution \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/set-up-ops-agent-for-bms
  title: "Set up Ops Agent for Bare Metal Solution \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Set up Ops Agent for Bare Metal Solution
The Ops Agent collects logs and metrics on your Bare Metal Solution server. It
sends your logs to Cloud Logging and your metrics to Cloud Monitoring. To
learn more about Ops Agent, see
Ops Agent overview .
If you already have an existing OS-level monitoring solution, ensure that you
can share data with us in event of an incident where you need our support. If
you don't have any such solution or anything else, we recommend that you use
Ops Agent.
Before you begin
Ensure that your Bare Metal Solution server is running a supported OS. The
following OSes are supported for Ops Agent:
RHEL 7.x
RHEL 8.x
SLES 12.x
SLES 15.x
Ensure that you have the Service Account Credentials on your
Bare Metal Solution server that authorize communication with Cloud Logging
and Cloud Monitoring. If you don't have the required credentials, you must
authorize the Ops Agent before installing it.
Enable the services for both the
Cloud Logging API and Cloud Monitoring API.
Authorize the Ops Agent
Before installing the Ops Agent, you must ensure that it has the
permission to send information to Google Cloud. This
permission is given by using Service Account Credentials that must be
stored on your Bare Metal Solution server. These credentials serve as
Application Default Credentials (ADC)
for the Ops Agent.
Authorization refers to the process of determining what permissions an
authenticated client has for a set of resources. Google Cloud authorizes
the Ops Agent on a Bare Metal Solution server by using ADC.
The Ops Agent supports ADC that authenticate using a private key from a service
account. The key authorizes the key pair on a service account in a project,
which lets you create an access token. The token is then used to provide an
identity so that you can interact with Google Cloud APIs on behalf of the
service account.
Authorizing the agent involves the following steps:
Create a service account .
Authorize the service account with a private key .
Authorize the Ops Agent .
If you already have the required credentials, you can skip this process and
install the Ops Agent .
Create a service account and key
This section describes how to create a new service account and grant it the
necessary roles, and how to update an existing service account if it doesn't
have the necessary roles.
To create a service account, complete the
creating a service account procedures with
the following information:
Select the same Google Cloud project that contains your Bare Metal Solution
server to create the service account.
In the Role drop-down menu, select the following roles:
Monitoring > Monitoring Metric Writer .
Logging > Logs Writer .
Select JSON as the Key type .
Click Create .
When you click Create , a file that contains a service account key is
downloaded to your local system. For more information, see
Create and delete service account keys .
Note:
Service account keys are a security risk if not managed correctly. You are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
Next, authorize the Ops Agent by using a service account private key.
Authorize a service account with a private key
To authorize the Ops Agent by using a service account private key, do
the following:
Copy the private key file to the following location on your
Bare Metal Solution server so that the Ops Agent can recognize the
credentials.
Warning: If you already have a credential file, ensure that your new
credentials don't overwrite the credentials for your current applications.
/etc/google/auth/application_default_credentials.json
Create an environment variable to point to the credentials file on your
workstation. The following example creates a variable called CREDS :
CREDS = "~/Downloads/ PROJECT-NAME - KEY-ID .json"
Transfer the service account key to your Bare Metal Solution server.
Note: The following instructions assume that you have a Linux environment on
both your local system and your server. If you're using a different
environment, consult the documentation from your cloud provider for how to
copy the private key file. Ensure that the private key file is in the
same location as the CREDS variable.
On your local system, use the scp command-line tool.
Go to the Servers page.
Go to Servers
Identify the following information for your server:
Project ID
Server name
Location of the server
On your Bare Metal Solution server, run the following commands:
GOOGLE_APPLICATION_CREDENTIALS="/etc/google/auth/application_default_credentials.json"
sudo mkdir -p /etc/google/auth
sudo mv "$HOME/temp.json" "$GOOGLE_APPLICATION_CREDENTIALS"
sudo chown root:root "$GOOGLE_APPLICATION_CREDENTIALS"
sudo chmod 0400 "$GOOGLE_APPLICATION_CREDENTIALS"
The variable GOOGLE_APPLICATION_CREDENTIALS must be visible to the
Ops Agent process. If your credential file is not in the previously
listed default location, then in addition to the commands in the preceding
examples, ensure that
GOOGLE_APPLICATION_CREDENTIALS is defined
and visible to the Ops Agent process.
Authorize the Ops Agent
Edit the /etc/systemd/system.conf file to add the following information.
Create the file if it doesn't exist.
DefaultEnvironment=GOOGLE_APPLICATION_CREDENTIALS= path_to_credentials_file BMS_PROJECT_ID= PROJECT_ID BMS_LOCATION= REGION BMS_INSTANCE_ID= SERVER_ID
Reload the environment variables.
sudo systemctl daemon - reload
Your Bare Metal Solution server now has the credentials that the Ops Agent
needs.
On your Bare Metal Solution server, restart the Ops Agent to use the new
credentials by running the following command:
sudo service google-cloud-ops-agent restart
Install the Ops Agent
To install the agent using the command line, do the following:
Open a terminal connection to your Bare Metal Solution server using SSH or a
similar tool and ensure that you have sudo access.
Change to a directory for which you have write access. For example, your home
directory.
Download and run the Ops Agent installation script by running the following
commands:
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo REPO_SUFFIX=bms bash add-google-cloud-ops-agent-repo.sh --also-install
After the installation is complete, the Ops Agent is started automatically.
What's next
Learn about Ops Agent's default and custom configurations. See
Configure the Ops Agent .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
