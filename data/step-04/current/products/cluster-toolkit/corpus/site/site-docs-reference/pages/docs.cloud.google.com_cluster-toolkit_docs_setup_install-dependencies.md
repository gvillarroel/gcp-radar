---
title: "Install dependencies \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/install-dependencies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-cluster-overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/setup/install-dependencies
  title: "Install dependencies \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Install dependencies
Stay organized with collections
Save and categorize content based on your preferences.
To create a cluster using the Cluster Toolkit, you can use either
Cloud Shell, or a workstation that is running Linux or macOS.
Pro Tip:
Cloud Shell is an interactive
development and operations environment that is accessible from your web browser.
If you use Cloud Shell, the following dependencies are already pre-installed
and you can skip this step and proceed to
set up Cluster Toolkit .
If you want to work from a Linux or macOS client or workstation,
complete the following steps.
Linux
Install the Google Cloud CLI, see Installing the gcloud CLI .
Install Terraform version 1.12.2 or later. For instructions, see
Download Terraform .
Note: Terraform versions 1.6.0 and later (including version 1.12.2) are distributed under the Business Source License (BSL) and have usage restrictions. Versions 1.5.7 and earlier were distributed as open source under the Mozilla Public License (MPL) and don't have these restrictions. Before you upgrade to Terraform version 1.6.0 or later, you must ensure that you can adhere to the HashiCorp Terraform License terms.
Install Packer version 1.7.9 or later. For instructions, see
Download Packer .
Install a supported Go release .
For install instructions, see
Download and install Go .
Also set up a GOPATH by running the following command:
export PATH=$PATH:$(go env GOPATH)/bin
Install Git. For instructions, see
Install Git .
Check that a Python 3 release of pip is installed by running pip3 .
If pip3 is not available, review the
Python documentation .
Install Make.
CentOS/RHEL
yum install -y make
Debian/Ubuntu
apt-get -y install make
macOS
Install the Google Cloud CLI, see Installing the gcloud CLI .
Install Terraform version 1.12.2 or later. For instructions, see
Download Terraform .
Note: Terraform versions 1.6.0 and later (including version 1.12.2) are distributed under the Business Source License (BSL) and have usage restrictions. Versions 1.5.7 and earlier were distributed as open source under the Mozilla Public License (MPL) and don't have these restrictions. Before you upgrade to Terraform version 1.6.0 or later, you must ensure that you can adhere to the HashiCorp Terraform License terms.
Install Packer version 1.7.9 or later. For instructions, see
Download Packer .
Install a supported Go release .
For install instructions, see
Download and install Go .
Also set up a GOPATH by running the following command:
export PATH=$PATH:$(go env GOPATH)/bin
Install Git. For instructions, see
Install Git .
Check that a Python 3 release of pip is installed by running pip3 .
If pip3 is not available,
download and install the package.
Install Make. On macOS, make is packaged with the Xcode command line
developer tools. To install Xcode, run the following command:
xcode-select --install
What's next
Set up Cluster Toolkit .
Review Cluster deployment overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
