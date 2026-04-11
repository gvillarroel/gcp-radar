---
title: "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/configure-serial-console
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/configure-serial-console
  title: "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\
    \ Google Cloud Documentation"
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
Configure the interactive serial console
Bare Metal Solution provides an interactive serial console to access your
Bare Metal Solution servers. You can directly run commands and respond to prompts
in the serial console. You can use the serial console to perform configuration
and troubleshooting tasks. Bare Metal Solution servers use the first serial port
(port 1) as the serial console.
The interactive serial console is supported only on the following servers:
General-purpose servers with TS54 ( 43.45.00.002 ) or
higher firmware version.
Memory-optimized servers with 3.50.58 or higher firmware version.
Make sure you upgrade your server to the latest firmware before starting. See
Before you begin .
Caution: Some organization policy constraints can cause the interactive serial
console connection to be rejected by the server. To enable the interactive
serial console access, you must remove those organization policy constraints.
For more information on these constraints, see Disable VM serial port access
( constraints/compute.disableSerialPortAccess ) and
Disable Global Access to VM Serial Ports
( constraints/compute.disableGlobalSerialPortAccess ) in
Organization policy constraints .
Interactive serial console connections older than 30 days might be
forcefully disconnected.
This document describes how to enable and disable interactive serial console
access on your servers.
Before you begin
Enable the Bare Metal Solution API. See Set up your Google Cloud project to
use the Bare Metal Solution API .
Grant the appropriate Identity and Access Management (IAM) role to the user.
To perform all tasks in this document, you must have either of the following
roles:
roles/baremetalsolution.admin
roles/baremetalsolution.editor
Verify that you have the required version of the firmware:
For general-purpose servers, TS54 ( 43.45.00.002 ) or higher.
For memory-optimized servers, 3.50.58 or higher.
Follow these steps:
On your Bare Metal Solution server, run the following command:
sudo dmidecode -s bios-version
If successful, the output shows the required BIOS version or higher. For
example, in the case of a general-purpose server, the output shows a BIOS
version of 43.45.00.002 or higher:
Version: BIOS_PUR043.45.00.002
If the BIOS version is lower than the required firmware, upgrade the
firmware for your servers. Contact
Customer Care for upgrade
assistance.
Note: We need a 5-day notice to schedule the upgrade. The upgrade requires
approximately 10 hours to complete. We can upgrade up to 5 servers
concurrently in a 10-hour window.
If your Bare Metal Solution server was provisioned before June 2022, the
kernel boot parameters might lack the required configuration for the
interactive serial console. Conversely, if it was provisioned after
June 2022, the required configuration might already be integrated into your
OS image. Nevertheless, there's a possibility that OS patching or
enterprise-specific policy enforcement might have altered the default kernel
boot parameters. In any case, we recommend that you verify the availability
of the OS configuration required for the interactive serial console.
To ensure that your OS has the required configuration for the interactive
serial console, follow these steps:
Locate the GRand Unified Bootloader (GRUB) configuration file in the
/etc/default directory.
Verify that the GRUB configuration file contains the following settings:
GRUB_CMDLINE_LINUX="(append to the existing value) console=tty0 console=ttyS0,115200"
GRUB_TERMINAL_OUTPUT="console serial"
GRUB_TERMINAL="console serial"
GRUB_SERIAL_COMMAND="serial --speed=115200 --unit=0 --word=8 --parity=no --stop=1"
If the file contains these settings, skip the remaining instructions. You can use your
GRUB configuration file to access the serial console.
If the GRUB configuration file does not have these settings, add them
manually.
Run the grub-mkconfig command to process the changes. For
more information, see the GRUB documentation .
Reboot your server.
Enable interactive serial console access
To enable and access the interactive serial console, follow these steps:
Enable access to the interactive serial console .
Generate an SSH key .
Register the SSH key .
Connect to the server .
Enable access to the interactive serial console
Before using the interactive serial console, you must enable access to it on
your server.
gcloud
To enable access to the interactive serial console, run the
gcloud bms instances enable-serial-console command.
gcloud bms instances enable-serial-console SERVER_NAME --project= PROJECT_ID --region= REGION
Replace the following:
SERVER_NAME : Name of your server.
PROJECT_ID : Your project ID.
REGION : Region of your server.
API
To enable access to the interactive serial console, enter your project ID,
region, and server name, and issue the following curl command.
curl -v \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME :enableInteractiveSerialConsole"
Replace the following:
PROJECT_ID : Your project ID.
REGION : Region of your server.
SERVER_NAME : Name of your server.
Generate an SSH key pair
Generate an SSH key pair to authenticate your access to the serial console. This
needs to be done only once per project.
Note: Any project with VPC-SC cannot use a jump host or other VM inside your
project.
Run the ssh-keygen command from a jump host VM instance or other
internet-connected terminal to create a new SSH key pair.
ssh-keygen -b 4096 -f SSH_KEY_ID -N ' PASSPHRASE ' -t rsa
Replace the following:
SSH_KEY_ID : Root name of your SSH key file used to generate the
public and private keys.
PASSPHRASE : Passphrase to use when accessing your servers through
the serial console.
The ssh-keygen command saves your private key to a file called SSH_KEY_ID , and
your public key to a file called SSH_KEY_ID .pub in your home
directory.
Register the SSH keys
To authenticate your access to the serial console, register the SSH keys in your
project. This needs to be done only once per key pair.
gcloud
To register your SSH keys, run the
gcloud bms ssh-keys add command.
gcloud bms ssh-keys add SSH_KEY_ID --project= PROJECT_ID --key-file= SSH_KEY_ID .pub
Replace the following:
SSH_KEY_ID : Root name of your SSH key file used to generate
the public and private keys.
PROJECT_ID : Your project ID.
REGION : Region of your server.
SERVER_NAME : Name of your server.
API
To register your SSH keys, enter your project ID, SSH key ID, and public key
filename, and issue the following curl command.
curl -v \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/global/sshKeys?ssh_key_id= SSH_KEY_ID " \
--data "{\"public_key\": \"$(cat SSH_KEY_ID .pub)\"}"
Replace the following:
PROJECT_ID : Your project ID.
SSH_KEY_ID : Root name of your SSH key file used to generate
the public and private keys.
To manage the SSH keys in your project, see Manage SSH keys .
Connect to the server
Before you connect to the interactive serial console, you can optionally
validate the connection using the serial console's host keys
to help to ensure that you're protected against impersonation or
man-in-the-middle attacks.
Important:
The command to connect to the serial console is changing. The
following command will no longer be valid from May 1, 2025.
ssh -i SSH_KEY_ID -p 9600 PROJECT_ID . REGION . SERVER_NAME . USERNAME .bms=true@ssh-serialport.googleapis.com
To avoid disruptions, we recommend that you update your configurations with the
new command described in this section by April 30, 2025.
Use SSH to access the interactive serial console. Run the following command:
ssh -i SSH_KEY_ID -p 9600 PROJECT_ID . REGION . SERVER_NAME . USERNAME .bms=true@\ REGION \-ssh-serialport.googleapis.com
Replace the following:
SSH_KEY_ID : Root name of your SSH key file used to generate
the public and private keys.
PROJECT_ID : Your project ID.
REGION : Region of your server.
SERVER_NAME : Name of your server.
USERNAME : Username that you use to access the Bare Metal Solution
server through the serial console.
When prompted, enter the SSH key passphrase you configured earlier. As needed,
press the Enter or Return key to gain access to the interactive serial
console.
Disconnect from the interactive serial console
To disconnect from the serial console, follow these steps:
Press the ENTER or RETURN key.
Type ~. (tilde, followed by a period).
Manage SSH keys
The SSH keys are stored on a per-project basis. You can manage your SSH keys in
the following ways:
List SSH keys
Delete SSH keys
List SSH keys
You can list the public SSH keys registered in your project.
gcloud
To list the public SSH keys, run the
gcloud bms ssh-keys list command.
gcloud bms ssh-keys list --project= PROJECT_ID
Replace the following:
PROJECT_ID : Your project ID.
API
To list the public SSH keys, enter your project ID and issue the following
curl command.
curl -v \
-X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/global/sshKeys"
Replace the following:
PROJECT_ID : Your project ID.
Delete SSH keys
You can delete an SSH key from the list of authorized keys for a project.
gcloud
To delete a public SSH key, run the
gcloud bms ssh-keys remove command.
gcloud bms ssh-keys remove SSH_KEY_ID --project= PROJECT_ID
Replace the following:
SSH_KEY_ID : Root name of your SSH key file used to generate
the public and private keys.
PROJECT_ID : Your project ID.
API
To delete a public SSH key, enter your project ID and SSH key ID, and issue
the following curl command.
curl -v \
-X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/global/sshKeys/ SSH_KEY_ID "
Replace the following:
PROJECT_ID : Your project ID.
SSH_KEY_ID : Root name of your SSH key file used to generate
the public and private keys.
Disable interactive serial console access
Use the following instructions to disable the interactive serial console access
on a server.
gcloud
To disable the interactive serial console, run the
gcloud bms instances disable-serial-console command.
gcloud bms instances disable-serial-console SERVER_NAME --project= PROJECT_ID --region= REGION
Replace the following:
SERVER_NAME : Name of your server.
PROJECT_ID : Your project ID.
REGION : Region of your server.
API
To disable the interactive serial console, enter your project ID, region,
and server name, and issue the following curl command.
curl -v \
-X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME :disableInteractiveSerialConsole"
Replace the following:
PROJECT_ID : Your project ID.
REGION : Region of your server.
SERVER_NAME : Name of your server.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
