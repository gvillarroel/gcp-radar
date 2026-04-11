---
title: "Install gsutil \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/gsutil_install
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/gsutil_install
  title: "Install gsutil \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
Install gsutil
Stay organized with collections
Save and categorize content based on your preferences.
Important: gsutil is not the recommended CLI for
Cloud Storage. Use
gcloud storage commands in the Google Cloud CLI instead.
This page describes the installation and setup of gsutil, a tool that lets you
access Cloud Storage from the command line using HTTPS.
Installing gsutil provides immediate access to public data, enabling you to read
and write as permitted. To interact with the protected data shared with you,
authentication with the Cloud Storage service is required. Enabling
billing gives you the ability to create and manage your own buckets.
System requirements
The gsutil tool runs on Linux/Unix, Mac OS, and Windows (XP or later).
gsutil versions 5.35 or later require Python 3.9 to 3.13, which you can obtain by
using your Python version manager or by installing an appropriate version.
Note: Support for Python 3.8 is dropped from gsutil v5.35.
To ensure compatibility with future gsutil releases, upgrade your Python
environment to a supported version (3.9+).
The following instructions show how to manage Python versions:
Linux
Prerequisites: Install a Python version manager (pyenv) and install a suitable Python version.
Set the Global Python Version:
To set Python 3.13 as the global version:
pyenv global 3.13
Or set the Python version locally for a specific project folder:
pyenv local 3.13
Confirm that the correct Python version is in use:
python --version
You should see:
Python 3.13
macOS
Method 1: Using Homebrew (brew)
Prerequisites: Install Homebrew and install a suitable Python version through homebrew.
Set a specific Python version as the default:
Add the version you want to your $PATH . For example, to use Python 3.13:
export PATH="/usr/local/opt/python@3.13/bin:$PATH"
To make this change permanent, add the path to your shell configuration file
( ~/.bash_profile , ~/.zshrc , or ~/.bashrc ).
Confirm that the correct Python version is in use:
python --version
You should see:
Python 3.13
Method 2: Using pyenv
Prerequisites: Install Python version manager (pyenv) and install a suitable python version through pyenv.
Set the global Python version:
To set the Python version globally (for all terminals):
pyenv global 3.13
Or set the Python version locally for a specific project folder:
pyenv local 3.13
Confirm that the correct Python version is in use:
python --version
You should see:
Python 3.13
Windows
Prerequisites: Install Python version manager (pyenv-win) and install a suitable Python version through pyenv.
Set the Global Python Version:
To set Python 3.13 as the global version:
pyenv global 3.13
Or set the Python version locally for a specific project folder:
pyenv local 3.13
Confirm that the correct Python version is in use:
python --version
You should see:
Python 3.13
If you plan to use composite objects , you need to install compiled
crcmod. On Windows, this is only available for 32-bit Python. For more
information on crcmod, install gsutil and see the help topic by using the
command gsutil help crc32c .
Warning: On some Linux distributions, another tool named gsutil , by
GrandStream BudgeTone, is pre-installed. If you run this command instead of the
Cloud Storage gsutil, it will likely print an error message similar to
"Choose one of -b, -d, -e, or -r to do something" . If this happens, you can
either move the Cloud Storage version of gsutil to the front of your
PATH environment variable, or you can specify the full path when running
Cloud Storage gsutil (for example, /home/users/joan/gsutil/gsutil ls ).
Installing gsutil
Note: If you have previously installed the Google Cloud CLI , then gsutil
is already included. Additionally, the Google Cloud CLI, including gsutil, is
installed by default on a number of Google Compute Engine images; see OS
details for a full list.
The officially supported installation and update method for gsutil is as part
of the Google Cloud CLI.
Before you begin
Google Cloud CLI and gsutil have Python version dependencies that might cause
compatibility issues. Google Cloud CLI requires Python 3.10 to 3.14, while gsutil requires Python 3.9 to 3.13.
To install gsutil, we recommend that you install it as part of the
Google Cloud CLI . If you choose to install gsutil directly, use
Python 3.9 to 3.13 to avoid compatibility issues.
Installing gsutil as part of the Google Cloud CLI
Follow the instructions for your operating system to install gsutil as a part of
the Google Cloud CLI:
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
Run gcloud init to
initialize, authorize, and configure the gcloud CLI.
Optional: Install additional components using the
component manager .
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
Run gcloud init to
initialize, authorize, and configure the gcloud CLI.
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
Run gcloud init to
initialize, authorize, and configure the gcloud CLI.
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
Run gcloud init to
initialize, authorize, and configure the gcloud CLI.
Optional: Install additional components using the
component manager .
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
and Desktop shortcuts, start the Google Cloud CLI shell, and configure the
gcloud CLI. Leave the options to start the shell and configure
your installation selected. The installer starts a terminal window and runs the
gcloud init command to initialize,
authorize, and configure the gcloud CLI.
The default installation doesn't include the App Engine extensions required to deploy an
application using gcloud commands. These components can be installed using the
gcloud CLI component manager .
Troubleshooting tips
If your installation is unsuccessful
due to the find command not being recognized, ensure your PATH
environment variable is set to include the folder containing find . Usually,
this is C:\WINDOWS\system32; .
If you uninstalled the gcloud CLI, you must reboot your
system before installing the gcloud CLI again.
If unzipping fails, run the installer as an administrator.
As part of installing gsutil , you must set the
CLOUDSDK_PYTHON environment variable to use the correct
Python version. For more details, see the gcloud startup topic .
Perform updates with the components update command: gcloud components update .
Setting Up Credentials to Access Protected Data
In order to access protected data or write to a protected bucket, you need
to set up credentials (authenticate). For example, if someone else has created a
Cloud Storage account and uploaded data that is only accessible to you
or other specific individuals, you must set up your credentials to the
Cloud Storage service to be able to access this data.
When using gsutil as part of the Google Cloud CLI, OAuth2 is used to
authenticate and authorize access to your Cloud Storage resources. To
establish access, run the command gcloud init and follow the
instructions provided in the command line, which include logging into your user
account. Note that you likely already performed this setup if you followed the
installation steps . If you ran gcloud init previously,
when you run the command again you are asked if you want to re-initialize the
configuration or create a new one. For more information, see
Initialize the Google Cloud CLI .
That's it. You're ready to access protected data. To see a listing of gsutil
commands, type gsutil at the command prompt.
Troubleshooting
If you try to authenticate gsutil using the gcloud init command, but are still
not able to access the expected buckets or objects, your system might have both
the legacy, stand-alone version of gsutil and the Google Cloud CLI-bundled
version of gsutil installed on it. Run the command gsutil version -l and check
the value for using cloud sdk . If False , your system is using the
stand-alone version of gsutil when you run commands. It's recommended that you
remove the stand-alone version of gsutil from your system; however, you can
alternatively authenticate using gsutil config -a or gsutil config -e .
Authenticate with HMAC
While OAuth 2.0 is the recommended way to authenticate gsutil, you can also
use HMAC keys for your credentials . To authenticate with HMAC,
use the following command:
gsutil config -a
Using this command takes you through an authentication process in which you are
prompted for the access ID and secret associated with your HMAC key.
When authenticating with HMAC keys, you should disable credential passing from
the Google Cloud CLI by using the command:
gcloud config set pass_credentials_to_gsutil false .
Enable mTLS
You might also want to enable mutual TLS (mTLS). When mTLS is enabled on your
device, your device attempts to connect to the mTLS request endpoint for
the JSON API. Before the connection is allowed, Cloud Storage verifies
the certificate on your device.
Note: This feature only works when gsutil makes requests through the
Cloud Storage JSON API.
The simplest way to to obtain a certificate is through Google Cloud CLI .
You can set one manually in the .boto file by setting the following
values under "Credentials":
use_client_certificate : A flag controlling whether or
not to use mTLS.
cert_provider_command : A shell command that prints a
certificate to stdout for gsutil to read.
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Cloud Storage performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Cloud Storage free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
