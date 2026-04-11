---
title: "Prepare an offline installation of Cloud Service Mesh \_|\_ Cloud Service\
  \ Mesh v1.26 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/offline-install-cloud-service-mesh
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/provision-control-plane
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.26/docs/onboarding/kubernetes-off-gcp/install/offline-install-cloud-service-mesh
  title: "Prepare an offline installation of Cloud Service Mesh \_|\_ Cloud Service\
    \ Mesh v1.26 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
v1.26
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Prepare an offline installation of Cloud Service Mesh
This page explains how to prepare offline installations of Cloud Service Mesh on
supported platforms other than
GKE on Google Cloud.
Note: This guide only supports Cloud Service Mesh with Istio APIs and does
not support Google Cloud APIs. For more information see,
Cloud Service Mesh overview .
When running the asmcli tool to
install Cloud Service Mesh ,
it uses a local directory to store configuration and artifacts. By default, a
temporary directory is created when executing the tool. However, you can specify
a directory using the --output_dir option on the command line. If the
directory already exists with the necessary configuration and artifacts, they
will be reused instead of re-downloading anything.
To perform an offline installation of Cloud Service Mesh, you can generate a
configuration package on a machine with Internet access, and then distribute
that package to other machines without internet access. Then, use the subcommand
asmcli build-offline-package to generate configuration packages.
Before you begin
Before you begin, make sure that you:
Review the prerequisites .
Review the information in
Plan the install .
Install the required tools .
Download asmcli .
During installation, ensure access to
Google APIs and Services
is possible, or manually enable the required dependencies. Even in offline
mode, asmcli uses Google Cloud CLI to enable some dependencies if the
corresponding flag is passed during installation.
Offline installation of Cloud Service Mesh
The following outlines how to prepare an offline installation of Cloud Service Mesh:
On the machine with Internet access that you installed Cloud Service Mesh,
create a package and then save it to the folder
OFFLINE_PKG_DIR_PATH :
. / asmcli build - offline - package \
-- output_dir OFFLINE_PKG_DIR_PATH
Note: The offline-package includes critical hidden files. You must copy
all of the files to the offline machine. To avoid missing files, create an
archive bundle of the entire output_dir and copy it to the offline machine.
Copy the configuration directory and asmcli tool to the offline machine.
Follow the normal instructions for
installing Cloud Service Mesh .
Wherever the instructions specify to run asmcli install , ensure that you
also pass the --offline flag and specify the configuration directory
created in the previous steps:
./asmcli install \
--output_dir OFFLINE_PKG_DIR_PATH \
--project_id PROJECT_ID \
--cluster_location CLUSTER_LOCATION \
--cluster_name CLUSTER_NAME \
--offline
What's next?
Learn about setting up a multi-cluster mesh outside of Google Cloud .
Configure an external IP address on-premises .
Deploy the Online Boutique sample application .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
