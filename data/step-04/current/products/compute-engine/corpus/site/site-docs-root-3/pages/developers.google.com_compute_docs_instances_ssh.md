---
title: "About SSH connections \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://developers.google.com/compute/docs/instances/ssh
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/compute/docs
source_metadata:
  url: https://developers.google.com/compute/docs/instances/ssh
  title: "About SSH connections \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
About SSH connections
Stay organized with collections
Save and categorize content based on your preferences.
Linux
Windows
Compute Engine uses key-based SSH authentication to establish connections to
Linux virtual machine (VM) instances and additionally supports
certificate-based authentication for OS Login VMs .
You can optionally enable SSH for Windows VMs. By default, passwords aren't
configured for local users on Linux VMs.
Before you can connect to a VM, several configurations must be performed. If you
use the Google Cloud console or the Google Cloud CLI to connect to your VMs,
Compute Engine performs these configurations on your behalf.
Compute Engine performs different configurations depending on which tool you
use to connect and whether you
manage access to VMs through
metadata or OS Login . OS Login is available only for
Linux VMs.
Note: When a user connects to a VM, that user can use all of the IAM
permissions granted to the service account attached to the VM.
Metadata-managed SSH connections
By default,
Compute Engine uses custom project and/or instance metadata to
configure SSH keys and to manage SSH access.
All Windows VMs use metadata to
manage SSH keys, while Linux VMs can use metadata keys or OS Login. If you use
OS Login, metadata SSH keys are disabled.
Click each tab to learn more about the configurations Compute Engine performs
before it grants SSH connections when you use the Google Cloud console, the
gcloud CLI, or third-party tools to connect to VMs. If you connect to
VMs without using the Google Cloud console or the gcloud CLI, you must
perform some configurations yourself.
Console
You use the SSH button in the
Google Cloud console to connect
to your VM .
Compute Engine sets a username and creates an ephemeral SSH key pair with the
following configuration:
Your username is set as the username in your Google Account. For example, if the email
address associated with your Google Account is cloudysanfrancisco@gmail.com , then
your username is cloudysanfrancisco .
Note: You can override the default username by clicking the
settings gear icon and selecting Change Linux
Username when you connect to the VM.
Your public and private SSH keys are stored in your browser session.
Your SSH key has an expiry of three minutes. Three minutes after Compute Engine creates the
key, you can't use the SSH key to connect to the VM anymore.
Compute Engine authenticates your SSH key and grants your connection.
Compute Engine uploads the public SSH key and username to metadata.
Compute Engine retrieves the SSH key and username from metadata, creates a
user account with the username, and on Linux VMs, stores the public key in your
user's ~/.ssh/authorized_keys file on the VM. On Windows VMs, Compute Engine
doesn't store the public key on the VM.
Compute Engine grants your connection.
gcloud
You use the gcloud compute ssh command to
connect to your VM .
Compute Engine sets a username and creates a persistent SSH key pair with the
following configurations:
Your username is set as the username in your local machine.
Note: You can override the default username by providing a
different username when you connect to the VM. Use the format
USERNAME @ VM_NAME .
Your public SSH key is stored in project metadata. If Compute Engine can't store the SSH
key in project metadata, for example, because block-project-ssh-keys is set to
TRUE , Compute Engine stores the SSH key in instance metadata.
Your private SSH key is stored on your local machine.
Your SSH key doesn't have an expiry. It is used for all future SSH connections you make,
unless you configure a new key.
Compute Engine authenticates your SSH key and grants your connection.
Compute Engine uploads the public SSH key and username to metadata.
Compute Engine retrieves the SSH key and username from metadata, creates a
user account with the username, and on Linux VMs, stores the public key in your
user's ~/.ssh/authorized_keys file on the VM. On Windows VMs, Compute Engine
doesn't store the public key on the VM.
Compute Engine grants your connection.
Third-party tools
You create an SSH key pair and username. See
Create SSH keys for details.
You upload the public key and username to metadata.
See
Add SSH keys to VMs that use metadata-based SSH keys for details.
You connect to the VM.
Compute Engine retrieves the SSH key and username from metadata, creates a
user account with the username, and on Linux VMs, stores the public key in your
user's ~/.ssh/authorized_keys file on the VM. On Windows VMs, Compute Engine
doesn't store the public key on the VM.
Compute Engine grants your connection.
Note: Google doesn't have access to your private key.
OS Login-managed SSH connections
Note: OS Login is only available for Linux VMs.
When you set OS Login metadata, Compute Engine deletes the VM's
authorized_keys files and no longer accepts connections from SSH keys that are
stored in project or instance metadata. OS Login supports connections from SSH
keys that are associated with your Google Account, and SSH certificates that are
signed by the OS Login certificate authority. You can optionally require OS
Login to only allow connections using SSH certificates, as described in Require
SSH certificates with OS Login .
SSH key connections
Click each tab to learn more about the configurations Compute Engine
performs before it grants SSH connections when you use SSH keys to connect
to VMs. Compute Engine performs different configurations depending on if
you use the Google Cloud console, the gcloud CLI, or third-party
tools to connect to VMs. If you connect using third-party tools, you must
perform some configurations yourself.
Console
You use the SSH button in the
Google Cloud console to connect
to your VM .
Compute Engine sets a username and creates an ephemeral SSH key pair with the
following configuration:
Your username is the username set by your organization's Cloud Identity or
Google Workspace administrator. If your organization hasn't configured a username for you, or
your project doesn't belong to an organization, Compute Engine uses your Google Account
email, in the following format:
USERNAME _ DOMAIN _ SUFFIX
For example, if the email associated with your Google Account is
cloudysanfrancisco@gmail.com , then your generated username is
cloudysanfrancisco_gmail_com .
Your public SSH key is stored in your browser session and in your Google Account.
Your private SSH key is stored in your browser session.
Your SSH key has an expiry of three minutes. Three minutes after Compute Engine creates
the key, you can't use the SSH key to connect to the VM anymore.
Compute Engine authenticates your SSH key and grants your connection.
gcloud
You use the gcloud compute ssh command to
connect to your VM .
Compute Engine sets a username and creates a persistent SSH key pair with the
following configurations:
Your username is the username set by your organization's Cloud Identity or
Google Workspace administrator. If your organization hasn't configured a
username for you, Compute Engine uses your Google Account email, in the following format:
USERNAME _ DOMAIN _ SUFFIX
For example, if the email associated with your Google Account is
cloudysanfrancisco@gmail.com , then your generated username is
cloudysanfrancisco_gmail_com .
Your public SSH key is stored in your Google Account.
Your private SSH key is stored on your local machine in the
google_compute_engine file.
Your SSH key doesn't have an expiry. It is used for all future SSH connections you make,
unless you configure a new key.
Compute Engine authenticates your SSH key and grants your connection.
Third-party tools
You create an SSH key pair. See
Create SSH keys for details.
You upload your public SSH key to your OS Login profile. See
Add keys to VMs that use OS Login for details.
Compute Engine stores your key in your Google Account.
Compute Engine configures your username in the default format:
USERNAME _ DOMAIN _ SUFFIX
For example, if the email associated with your Google Account is
cloudysanfrancisco@gmail.com , then your generated
username is cloudysanfrancisco_gmail_com .
You optionally set a username with the
Google Workspace Admin SDK Directory API .
You connect to the VM.
Compute Engine authenticates your SSH key and grants your
connection.
SSH certificate connections
Click each tab to learn more about the configurations Compute Engine
performs before it grants SSH connections when you use SSH certificates
to connect to VMs. Compute Engine performs different configurations
depending on if you use the Google Cloud console, the gcloud CLI, or
third-party tools to connect to VMs. If you connect using third-party tools,
you must perform some configurations yourself.
Console
You use the SSH button in the
Google Cloud console to connect
to your VM .
Compute Engine sets a username and creates an ephemeral SSH key pair. Your username is the
username set by your organization's Cloud Identity or Google Workspace administrator. If your
organization hasn't configured a username for you, or your project doesn't belong to an
organization, Compute Engine uses your Google Account email, in the following format:
USERNAME _ DOMAIN _ SUFFIX
For example, if the email associated with your Google Account is
cloudysanfrancisco@gmail.com , then your generated username is
cloudysanfrancisco_gmail_com .
Compute Engine sends your public key to the OS Login certificate authority and performs
IAM authorization to ensure you have the permissions to connect to the VM.
The OS Login certificate authority provides a short-lived signed SSH certificate.
Compute Engine authenticates your short-lived certificate and grants your connection.
gcloud
You use the
gcloud beta compute ssh
command to connect to your VM.
Compute Engine sets a username and creates an ephemeral SSH key pair. Your username is the
username set by your organization's Cloud Identity or Google Workspace administrator. If your
organization hasn't configured a username for you, or your project doesn't belong to an
organization, Compute Engine uses your Google Account email, in the following format:
USERNAME _ DOMAIN _ SUFFIX
For example, if the email associated with your Google Account is
cloudysanfrancisco@gmail.com , then your generated username is
cloudysanfrancisco_gmail_com .
Compute Engine sends your public key to the OS Login certificate authority and performs
IAM authorization to ensure you have the permissions to connect to the VM.
The OS Login certificate authority provides a short-lived signed SSH certificate.
Compute Engine authenticates your short-lived certificate and grants your connection.
Third-party tools
You create an SSH key pair. See
Create SSH keys for details.
If you haven't previously connected to a VM that uses OS Login, you
provision
a POSIX account .
Compute Engine configures your username in the default format:
USERNAME _ DOMAIN _ SUFFIX
For example, if the email associated with your Google Account is
cloudysanfrancisco@gmail.com , then your generated username
is cloudysanfrancisco_gmail_com .
Your administrator can optionally
set a username with the Google Workspace Admin SDK Directory API .
If your organization uses
workforce identity federation you must contact your administrator to
change your username instead.
You
send your public key to the OS Login certificate authority .
The OS Login certificate authority provides a short-lived signed SSH certificate.
You use the certificate to connect to the VM.
Compute Engine authenticates your short-lived certificate and grants your connection.
Note: Google doesn't have access to your private key.
What's next?
Learn more about the benefits of using OS Login .
Set up OS Login
to manage access to your VMs.
Learn how to Require SSH
certificates with OS Login .
Learn how to Manage SSH keys in metadata ,
if you don't want to use OS Login.
Learn how to Connect to VMs .
To find methods and tools for diagnosing and resolving failed SSH connections,
see Troubleshooting SSH .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
