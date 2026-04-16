---
title: "Quickstart: Install the Google Cloud CLI \_|\_ Google Cloud SDK \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/install-sdk
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/install-sdk
  title: "Quickstart: Install the Google Cloud CLI \_|\_ Google Cloud SDK \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Install the Google Cloud CLI
This quickstart describes the recommended method to install and initialize the
Google Cloud CLI. After initialization, run a few core
gcloud CLI commands to view information about your installation
and verify it was successful.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
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
Verify that billing is enabled for your Google Cloud project .
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
Verify that billing is enabled for your Google Cloud project .
Install gcloud CLI version 564.0.0
Linux
Confirm that you have a supported version of Python. The Google Cloud CLI requires
Python 3.10 to 3.14. The x86_64 Linux package includes
a bundled Python interpreter that will be preferred by default. For
information on how to choose and configure your Python interpreter, see the
gcloud topic startup documentation .
Download one of the following:
Note: To determine your Linux platform, run uname -a at the command line.
Platform
Package name
Size
SHA256 Checksum
Linux 64-bit (x86_64)
google-cloud-cli-linux-x86_64.tar.gz
205.2 MB
e28ee0d0c98194d3919f8a47b2ca1ed92c46e302f84f23c5764be723fc2c4698
Linux 64-bit (Arm)
google-cloud-cli-linux-arm.tar.gz
59.3 MB
13a4f15acd81de3da04fa730c9013f5d5ac47c16d835af612195c2e1b3aaaedd
Linux 32-bit (x86)
google-cloud-cli-linux-x86.tar.gz
59.4 MB
f82fdf31d26e5feebcaa90fea0490759a050854833d988a9fdcc043dd4cda711
To download the Linux archive file, run the following command:
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/ google-cloud-cli-linux-x86_64.tar.gz
Refer to the table above and replace google-cloud-cli-linux-x86_64.tar.gz with the
*.tar.gz package name that applies to your configuration.
To extract the contents of the file to your file system, run the following command:
tar -xf google-cloud-cli-linux-x86_64.tar.gz
To replace an existing installation, delete the existing
google-cloud-sdk directory and then extract the archive to the
same location.
Run the installation script from the root of the folder you
extracted:
./google-cloud-sdk/install.sh
The script prompts you to perform the following setup actions. To accept,
answer Y when prompted.
Add the gcloud CLI to your PATH .
Enable command completion.
Opt in to send anonymous usage statistics
to help improve the gcloud CLI.
You can also perform the installation non-interactively by providing flags.
To view available flags, run:
./google-cloud-sdk/install.sh --help
Optional: If you updated your PATH in the previous step, open a new
terminal so that the changes take effect.
Debian/Ubuntu
Package contents
The gcloud CLI is available in package format for installation on Debian and Ubuntu
systems. This package contains the gcloud , gcloud alpha ,
gcloud beta , gsutil , and bq command-line tools only. It
doesn't include kubectl or the App Engine extensions required to deploy an
application using gcloud commands. If you want these components, you must
install them separately .
Note: For specific setups, alternative installation methods are available:
If you're running a modern Ubuntu release with Snap Package Manager and want automatic
updates, you can install Google Cloud CLI as a
snap package .
If you're using a Compute Engine instance, the gcloud CLI might already
be installed. For a list of operating system images that include the CLI by default,
see OS details .
Before you begin
Before you install the gcloud CLI, make sure that your operating system meets the
following requirements:
It is an Ubuntu release that hasn't reached
end-of-life or a Debian stable
release that hasn't reached
end-of-life .
It has recently updated its packages. To do this now, run the following command:
sudo apt-get update
It has ca-certificates , gnupg ,
and curl installed. To install these packages, run the following command:
sudo apt-get install ca-certificates gnupg curl
Installation
Import the Google Cloud public key.
For newer distributions (Debian 9+ or Ubuntu 18.04+) run the
following command:
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
For older distributions, run the following command:
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
If your distribution's apt-key command doesn't support the --keyring argument, run the
following command:
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
If you can't get latest updates due to an expired key,
obtain the latest
apt-get.gpg key file .
Add the gcloud CLI distribution URI as a package source.
For newer distributions (Debian 9+ or Ubuntu 18.04+), run the following command:
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
For older distributions that don't support the signed-by option, run the following command:
echo "deb https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
Note: Make sure you don't have duplicate entries for the
cloud-sdk repo in /etc/apt/sources.list.d/google-cloud-sdk.list .
Update and install the gcloud CLI:
sudo apt-get update && sudo apt-get install google-cloud-cli
For additional apt-get options, such as disabling prompts or dry runs,
refer to the apt-get man pages .
Docker Tip: If installing the gcloud CLI inside a Docker image, use a
single RUN step instead:
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y
For older base images that do not support the gpg --dearmor command:
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key --keyring /usr/share/keyrings/cloud.google.gpg add - && apt-get update -y && apt-get install google-cloud-cli -y
Optional: Install any of the following
additional components :
google-cloud-cli-anthos-auth
google-cloud-cli-app-engine-go
google-cloud-cli-app-engine-grpc
google-cloud-cli-app-engine-java
google-cloud-cli-app-engine-python
google-cloud-cli-app-engine-python-extras
google-cloud-cli-bigtable-emulator
google-cloud-cli-cbt
google-cloud-cli-cloud-build-local
google-cloud-cli-cloud-run-proxy
google-cloud-cli-config-connector
google-cloud-cli-datastore-emulator
google-cloud-cli-firestore-emulator
google-cloud-cli-gke-gcloud-auth-plugin
google-cloud-cli-kpt
google-cloud-cli-kubectl-oidc
google-cloud-cli-local-extract
google-cloud-cli-minikube
google-cloud-cli-nomos
google-cloud-cli-pubsub-emulator
google-cloud-cli-skaffold
google-cloud-cli-spanner-emulator
google-cloud-cli-terraform-validator
google-cloud-cli-tests
kubectl
For example, the google-cloud-cli-app-engine-java component can be installed as
follows:
sudo apt-get install google-cloud-cli-app-engine-java
Downgrade gcloud CLI versions
To revert to a specific version of the gcloud CLI, where VERSION is of the
form 123.0.0 , run the following command:
sudo apt-get update && sudo apt-get install google-cloud-cli=123.0.0-0
The ten most recent releases are always available in the repo. For releases prior to 371.0.0,
the package name is google-cloud-sdk
Red Hat/Fedora/CentOS
Package contents
The gcloud CLI is available in package format for installation on
Red Hat Enterprise Linux 7, 8, 9, and 10; Fedora 41 and 42; and CentOS 7 and 8 systems.
This package contains the
gcloud , gcloud alpha , gcloud beta , gsutil , and
bq commands only. It doesn't include kubectl or the App Engine
extensions required to deploy an application using gcloud commands, which can be
installed separately as described later in this section.
Note: If you're using an instance on Compute Engine, the Google Cloud CLI is
installed by default on a number of OS images. See
OS details for a full list.
Installation
Update DNF with gcloud CLI repository information.
The following sample command is for a Red Hat Enterprise Linux 7, 8, or 9-compatible
installations, but make sure that you update the settings as needed for your
configuration:
sudo tee -a /etc/yum.repos.d/google-cloud-sdk.repo
[google-cloud-cli]
name=Google Cloud CLI
baseurl=https://packages.cloud.google.com/yum/repos/cloud-sdk-el9-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
EOM
For RHEL 10-compatible installations, use the following command with the updated
gpgkey :
sudo tee -a /etc/yum.repos.d/google-cloud-sdk.repo
[google-cloud-cli]
name=Google Cloud CLI
baseurl=https://packages.cloud.google.com/yum/repos/cloud-sdk-el10-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=0
gpgkey=https://packages.cloud.google.com/yum/doc/rpm-package-key-v10.gpg
EOM
For ARM64 (aarch64) installations, use
https://packages.cloud.google.com/yum/repos/cloud-sdk-el9-aarch64
(RHEL 7, 8, or 9-compatible) or
https://packages.cloud.google.com/yum/repos/cloud-sdk-el10-aarch64
(RHEL 10-compatible) as the baseurl value.
Install libxcrypt-compat.x86_64 .
sudo dnf install libxcrypt-compat.x86_64
Install the gcloud CLI:
sudo dnf install google-cloud-cli
Note: If you haven't moved to
dnf
on your system, you can run these commands using yum instead.
You can also use dnf / yum options, such as disabling prompts or dry runs, with the
provided commands.
Optional: Install any of the following
additional components :
google-cloud-cli-anthos-auth
google-cloud-cli-app-engine-go
google-cloud-cli-app-engine-grpc
google-cloud-cli-app-engine-java
google-cloud-cli-app-engine-python
google-cloud-cli-app-engine-python-extras
google-cloud-cli-bigtable-emulator
google-cloud-cli-cbt
google-cloud-cli-cloud-build-local
google-cloud-cli-cloud-run-proxy
google-cloud-cli-config-connector
google-cloud-cli-datastore-emulator
google-cloud-cli-firestore-emulator
google-cloud-cli-gke-gcloud-auth-plugin
google-cloud-cli-kpt
google-cloud-cli-kubectl-oidc
google-cloud-cli-local-extract
google-cloud-cli-minikube
google-cloud-cli-nomos
google-cloud-cli-pubsub-emulator
google-cloud-cli-skaffold
google-cloud-cli-spanner-emulator
google-cloud-cli-terraform-validator
google-cloud-cli-tests
kubectl
For example, to install the google-cloud-cli-app-engine-java component, run the
following command:
sudo dnf install google-cloud-cli-app-engine-java
Downgrade gcloud CLI versions
To revert to a specific version of gcloud CLI, run the following command. Replace
123.0.0 with the version that you want to install:
sudo dnf downgrade google-cloud-cli-123.0.0
The ten most recent releases are available in the repository. For releases prior to 371.0.0, use
google-cloud-sdk as the package name.
macOS
Confirm that you have a supported version of Python. The Google Cloud CLI requires
Python 3.10 to 3.14.
To check your Python version, run python3 -V or python -V .
The gcloud installer will install Python v3.13 and required extension modules by default.
For more information about configuring your Python interpreter, see the gcloud topic startup documentation .
Download one of the following:
Note: To determine your platform, run uname -m from a command line.
Platform
Package
Size
SHA256 Checksum
macOS 64-bit
(x86_64)
google-cloud-cli-darwin-x86_64.tar.gz
59.5 MB
b743a4840395578c16f6bd72bb58a074d92e62b83cdd5f96b18f9848792b9039
macOS 64-bit
(ARM64, Apple silicon)
google-cloud-cli-darwin-arm.tar.gz
59.4 MB
25e78b82d2c0f03bdbcc698c11479b73399fb768b6682fb4a74f8f7b010850b7
macOS 32-bit
(x86)
google-cloud-cli-darwin-x86.tar.gz
57.8 MB
2b2eac21d95ea54d02eec5c5240e8de4f9fba7db4eb4236356933f2801441d7a
Alternatively, you can download the archive from the command line.
Replace FILE_NAME with the package name for your
platform from the table above.
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/ FILE_NAME
Extract the contents of the file to your preferred location on your file
system. A common practice is to extract it to your home directory.
On macOS, you can do this by opening the downloaded
.tar.gz file in your preferred location. Alternatively, from the command line, run:
tar -xf FILE_NAME
To replace an existing installation, delete the existing
google-cloud-sdk directory and then extract the archive to the same location.
Run the installation script from the root of the folder you
extracted:
./google-cloud-sdk/install.sh
The script prompts you to perform the following setup actions. To accept,
answer Y when prompted.
Install Python 3.13 and recommended modules if needed.
Add the gcloud CLI to your PATH and enable command completion.
Opt in to send anonymous usage statistics
to help improve the gcloud CLI.
You can also perform the installation non-interactively by providing flags.
To view available flags, run:
./google-cloud-sdk/install.sh --help
To run the install script with screen reader mode enabled:
./google-cloud-sdk/install.sh --screen-reader = true
Optional: If you updated your PATH in the previous step, open a new
terminal so that the changes take effect.
Windows
The Google Cloud CLI on Windows requires Windows 8.1 and later, or Windows Server 2012 and later.
Download the Google Cloud CLI installer .
Alternatively, open a PowerShell terminal and run the following PowerShell commands:
( New-Object Net.WebClient ) .DownloadFile ( "https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe" , " $env :Temp\GoogleCloudSDKInstaller.exe" )
& $env :Temp \G oogleCloudSDKInstaller.exe
Launch the installer and follow the prompts. The installer is signed by Google LLC.
If you're using a screen reader, check the Turn on screen reader mode checkbox. This
option configures gcloud to use status trackers instead of unicode spinners,
display progress as a percentage, and flatten tables. For more information, see the
Accessibility features guide .
Google Cloud CLI requires Python; supported versions are Python 3.10 to 3.14. By
default, the Windows version of Google Cloud CLI comes bundled with Python 3. To use
Google Cloud CLI your operating system must be able to run a supported version of Python.
The installer installs all necessary dependencies, including the needed Python version.
While Google Cloud CLI installs and manages Python 3 by default, you can use an existing
Python installation if necessary by unchecking the option to Install Bundled Python.
See gcloud topic startup to
learn how to use an existing Python installation.
After installation is complete, the installer gives you the option to create Start Menu
and Desktop shortcuts, and start the Google Cloud CLI shell. Uncheck the option to start
the shell. You will run and configure the gcloud CLI in the next steps.
Troubleshooting tips
If your installation is unsuccessful
due to the find command not being recognized, ensure your PATH
environment variable is set to include the folder containing find . Usually,
this is C:\WINDOWS\system32; .
If you uninstalled the gcloud CLI, you must reboot your
system before installing the gcloud CLI again.
If unzipping fails, run the installer as an administrator.
Chromebook
Set up the Linux development environment on your Chromebook.
Add the gcloud CLI distribution URI as a package source. Run the following command:
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
Import the Google Cloud public key:
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -
Update and install the gcloud CLI:
sudo apt-get update && sudo apt-get install google-cloud-cli
Optional: Install any of the following
additional components :
google-cloud-cli-anthos-auth
google-cloud-cli-app-engine-go
google-cloud-cli-app-engine-grpc
google-cloud-cli-app-engine-java
google-cloud-cli-app-engine-python
google-cloud-cli-app-engine-python-extras
google-cloud-cli-bigtable-emulator
google-cloud-cli-cbt
google-cloud-cli-cloud-build-local
google-cloud-cli-cloud-run-proxy
google-cloud-cli-config-connector
google-cloud-cli-datastore-emulator
google-cloud-cli-firestore-emulator
google-cloud-cli-gke-gcloud-auth-plugin
google-cloud-cli-kpt
google-cloud-cli-kubectl-oidc
google-cloud-cli-local-extract
google-cloud-cli-minikube
google-cloud-cli-nomos
google-cloud-cli-pubsub-emulator
google-cloud-cli-skaffold
google-cloud-cli-spanner-emulator
google-cloud-cli-terraform-validator
google-cloud-cli-tests
kubectl
For example, to install the google-cloud-cli-app-engine-java component, run the
following command:
sudo apt-get install google-cloud-cli-app-engine-java
Downgrade the gcloud CLI versions
To revert to a specific version of gcloud CLI, run the
following command. Replace 123.0.0 with the version that you want to
install:
sudo apt-get update && sudo apt-get install google-cloud-cli = 123 .0.0-0
The ten most recent releases are available in the repository. For releases prior to 371.0.0, use google-cloud-sdk as the
package name.
Initialize and authorize the gcloud CLI
If you are behind a proxy or firewall, see
Proxy configuration to enable
network access for the gcloud CLI.
After you install the gcloud CLI, initialize it to authorize
access to Google Cloud and set up a default configuration. For more
information, see gcloud init .
Run gcloud init to initialize the gcloud CLI:
gcloud init
By default, this command opens a web browser to authorize access. To
authorize from the command line instead, add the --console-only flag.
For non-interactive authorization,
create a service account with the
appropriate scopes in the Google Cloud console , and then
use gcloud auth activate-service-account
with its JSON key file.
Follow the prompts to authorize and configure:
When prompted to sign in, accept and then sign in to your Google Account
in your browser. Click Allow to grant permission to access
resources.
From the list of projects for which you have Owner , Editor , or
Viewer permissions, select a project. If you have only one project,
gcloud init selects it for you.
If you have more than 200 projects, you are prompted to enter a project
ID, create a project, or list projects. If you choose to create a
project, you must also
enable billing on it .
If you have the
Compute Engine API
enabled, select a default Compute Engine zone.
Optional: For an improved screen reader experience, enable the
accessibility/screen_reader property with the following command:
gcloud config set accessibility/screen_reader true
For more information, see the
Enabling accessibility features
guide.
Run core commands
Run core commands to view information about your gcloud CLI installation:
List accounts whose credentials are stored on the local system:
gcloud auth list
The gcloud CLI displays a list of credentialed accounts:
Credentialed Accounts
ACTIVE ACCOUNT
* example-user-1@example.com
example-user-2@example.com
List the properties in your active gcloud CLI configuration:
gcloud config list
The gcloud CLI displays the list of properties:
[core]
account = example-user-1@example.com
disable_usage_reporting = False
project = example-project
View information about gcloud commands and other topics:
gcloud help
For example, to view the help for gcloud compute instances create :
gcloud help compute instances create
The gcloud CLI displays a help topic that contains a
description of the command, a list of command flags and arguments, and
examples of how to use the command.
Optional: Install additional components
To install additional components, such as the App Engine emulators, kubectl ,
or gcloud CLI commands at the alpha or beta release level, see
Managing gcloud CLI components .
What's next
Read the gcloud CLI guide for an overview of
the gcloud CLI, including a quick introduction to key
concepts, command conventions, and helpful tips.
Read the gcloud CLI reference guide
for detailed pages on each gcloud CLI command, including
descriptions, flags, and examples, that you can use to perform a variety of
tasks on Google Cloud.
See the gcloud CLI cheat sheet
for a list of commonly used commands and key concepts.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
