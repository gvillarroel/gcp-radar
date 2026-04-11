---
title: "Develop code using a local VS Code editor \_|\_ Cloud Workstations \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/develop-code-using-local-vscode-editor
  title: "Develop code using a local VS Code editor \_|\_ Cloud Workstations \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Develop code using a local VS Code editor
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to open an SSH tunnel from your local machine
to a workstation, and then use
VS Code Remote Development
support to connect to Cloud Workstations from your local VS Code editor.
Tip: For an in-browser experience, you can use the Cloud Workstations IDE
Code OSS for Cloud Workstations ,
which is based on the
Code-OSS
open source project.
Before you begin
Before you begin, make sure that you follow the steps for these tasks:
Make sure that someone on your team has created a
workstation configuration .
Create and launch your workstation .
While you're in the Google Cloud console, copy the following information:
Project name and ID: click the project name in the Google Cloud
menu bar and copy the ID in the Project name and ID dialog that
opens.
Region
Cluster name
Configuration name
From your local machine,
install the gcloud CLI .
If you're running gcloud CLI for the first time, you may also
need to run gcloud auth login to obtain credentials and
gcloud config set project PROJECT_ID to set your current
project to the project ID you copied in the previous step.
When using ssh for the first time, install a remote SSH extension so you
can connect to a workstation from the VS Code editor through the
Extension Marketplace or through the command palette.
Extension Marketplace
Open your local VS Code editor application and then open the
Extension Marketplace by selecting
Extensions in the Activity bar.
Click Install to install the Remote - SSH extension.
Enter remote ssh in the search field, which opens the extension page
for Remote - SSH.
Command palette
To open the command palette, press Control+Shift+P
(or Command+Shift+P on macOS), or click
View > Command Palette .
Enter ext install ms-vscode-remote.remote-ssh to install the
extension.
Open an SSH tunnel
Open an SSH tunnel from your local machine to a workstation using the
gcloud workstations start-tcp-tunnel
command:
In the Google Cloud console,
go to the Cloud Workstations > Workstations page.
Go to Workstations
Click the workstation name to open the Workstation details page.
In the following example, replace the placeholders for the
workstation name, region (location), workstation cluster name, and
workstation configuration name. Copy the values from the Workstation details
panel into the placeholders marked with an
edit Edit icon.
gcloud workstations start-tcp-tunnel \
--project= PROJECT_ID \
--region= REGION \
--cluster= CLUSTER_NAME \
--config= CONFIG_NAME \
--local-host-port=: LOCAL_PORT \
WORKSTATION_NAME 22
See the
Before you begin
section to find the project ID.
The --local-host-port=: LOCAL_PORT flag is optional.
If you would like to specify a local port, replace
LOCAL_PORT with the local port number that you want
to use. If you don't specify a local port, the system chooses an
arbitrary, unused local port for you, and outputs a message with the port
number so you know which local port it uses.
After filling in the placeholders, click
content_copy
Copy code sample to copy the gcloud CLI command.
Paste the command into your local terminal window and press Enter
to create the tunnel.
When the command succeeds, a Listening on port message appears followed by
the local port number.
For more details about each configuration flag, see
SSH tunnel
or
start-tcp-tunnel .
Connect to a Cloud Workstations host
Follow these steps to connect to a Cloud Workstations host:
Open or return to the VS Code application.
To launch Remote - SSH , click
Open a Remote Window in the status bar.
Select the Connect to Host option when the command palette opens.
Enter user@localhost: LOCAL_PORT , replacing
LOCAL_PORT with your local port number.
The following example connects to local port 1025 by specifying
user@localhost:1025 .
Note: The host keys for the workstations change between
sessions because workstations run on ephemeral VMs. Ensure that host key
validation is disabled for the workstation configuration for this reason.
If prompted to connect after you see the Host Added confirmation
message, click Connect .
The system might also prompt you to confirm the hash. If prompted, click
Continue .
A new VS Code editor opens and the VS Code status bar shows
SSH: localhost: followed by the port number.
You now have access to the files and language servers on your remote workstation,
and you can build and run processes that run inside your workstation.
The following example shows a VS Code editor window connected to
Cloud Workstations through SSH: localhost: 1025 .
You can also go back to the Extensions Marketplace to install
Cloud Code
and other local VS Code extensions to help you
build, run, and test your code.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
