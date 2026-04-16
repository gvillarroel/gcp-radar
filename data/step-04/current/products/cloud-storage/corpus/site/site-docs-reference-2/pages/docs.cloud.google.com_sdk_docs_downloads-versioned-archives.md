---
title: "Installing from versioned archives \_|\_ Google Cloud SDK \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sdk/docs/downloads-versioned-archives
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/downloads-versioned-archives
  title: "Installing from versioned archives \_|\_ Google Cloud SDK \_|\_ Google Cloud\
    \ Documentation"
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
Installing from versioned archives
Stay organized with collections
Save and categorize content based on your preferences.
The gcloud CLI provides downloadable, versioned archives for each release.
Each versioned archive contains a self-contained installation of the
gcloud CLI in a directory named google-cloud-sdk that can be copied
to any location on your file system.
Best uses for installing from versioned archives
Versioned archives are designed for non-interactive installation of specific
versions of the gcloud CLI and are useful when:
You require a specific version of the gcloud CLI. For example:
You're scripting with the gcloud CLI or another
gcloud CLI component and want to make sure that your scripts
don't break as the result of a gcloud CLI update.
You're using the gcloud CLI as part of a CI (continuous
integration) process or production system where you want to control your
dependencies in order to ensure compatibility between parts of the
system.
You're performing automated deployments of the gcloud CLI to many
machines that must be in sync.
You're behind a proxy or firewall that requires
additional configuration to be able to
access the internet.
You don't want to perform an interactive installation.
Installation instructions
To install the latest release of the gcloud CLI from a versioned archive:
Check which version (64-bit or 32-bit) your OS is running on.
Linux / macOS: Run getconf LONG_BIT from your command line
Windows: Control Panel > System > System Type
Additionally, for macOS, to check your machine hardware name (x86_64,
arm64, or x86), run uname -m .
Download the appropriate archive compatible with your version:
Platform
Package
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
macOS 64-bit (x86_64)
google-cloud-cli-darwin-x86_64.tar.gz
59.5 MB
b743a4840395578c16f6bd72bb58a074d92e62b83cdd5f96b18f9848792b9039
macOS 64-bit (arm64)
google-cloud-cli-darwin-arm.tar.gz
59.4 MB
25e78b82d2c0f03bdbcc698c11479b73399fb768b6682fb4a74f8f7b010850b7
macOS 32-bit (x86)
google-cloud-cli-darwin-x86.tar.gz
57.8 MB
2b2eac21d95ea54d02eec5c5240e8de4f9fba7db4eb4236356933f2801441d7a
Windows 64-bit (x86_64)
google-cloud-cli-windows-x86_64.zip
82.1 MB
6f3e141ba21c34e658c391eadc4651b05aa9c25c9292f0cb29e48ae663f72b32
Windows 64-bit (x86_64) with Python bundled
google-cloud-sdk-564.0.0-windows-x86_64-bundled-python.zip
106.3 MB
9a827fd08c19d4950801e464b6f363aaa97cdabcefcbe45147c7d0273d2a32b4
Windows 32-bit (x86)
google-cloud-cli-windows-x86.zip
82.0 MB
c8c6f4e5cbf22bb64ec0a8cb84a92d18f8ed97bc16467d637748cb184b33059b
Windows 32-bit (x86) with Python bundled
google-cloud-sdk-564.0.0-windows-x86-bundled-python.zip
103.8 MB
987f282c78d9b129dfc90c50bc2bf3ebba316c1c57275c7b97e4211ac970200b
Extract the contents of the file to any location on your file system.
Preferably, this is your Home folder.
To add the gcloud CLI tools to your path, run the install script
from the root of the folder you extracted. Running this script also
generates instructions to enable command completion in your bash shell
(Linux and macOS only) and enable usage reporting.
On Linux or macOS:
./google-cloud-sdk/install.sh
To run the install script with screen reader mode turned on:
./google-cloud-sdk/install.sh --screen-reader=true
On Windows:
.\google-cloud-sdk\install.bat
Run install.sh --help or install.bat --help for a list of flags you
can pass to this script, including those that can run the installation
non-interactively.
Note: If you answered n when the installer prompted
asking to modify your profile to update your PATH and enable
command completion, you can still set up your profile to do so (to ensure
the gcloud CLI works correctly) by doing the following:
Bash shell
Source /path/to/gcloud/path.bash.inc in your profile
to add the gcloud CLI tools to your PATH .
Source /path/to/gcloud/completion.bash.inc in your
profile to enable command completion for the gcloud CLI.
Zsh shell
Source /path/to/gcloud/path.zsh.inc in your profile
to add the gcloud CLI command line tools to your PATH .
Source /path/to/gcloud/completion.zsh.inc in your
profile to enable command completion for the gcloud CLI.
Fish shell
Source /path/to/gcloud/path.fish.inc in your profile
to add the gcloud CLI command line tools to your PATH .
To initialize the gcloud CLI, run
gcloud init :
For Linux or macOS:
./google-cloud-sdk/bin/gcloud init
For Windows:
.\google-cloud-sdk\bin\gcloud init
Previous versions
Previous versions of the gcloud CLI are available in the
download archive
in Cloud Storage. They are directly accessible through
https://storage.googleapis.com/cloud-sdk-release/<archive_name> .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
