---
title: "Installing Config Connector v1alpha1 CRDs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/install-alpha-crds
  title: "Installing Config Connector v1alpha1 CRDs \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Installing Config Connector v1alpha1 CRDs
This topic explains how to install v1alpha1 Google Cloud resource Custom
Resource
Definitions
(CRDs) in Config Connector.
Warning: Config Connector v1alpha1 Google Cloud resource CRDs should not
be used in production. When Config Connector is upgraded, the v1alpha1 CRDs must
be manually upgraded to ensure they continue to work. You must manually install,
upgrade, and uninstall the v1alpha1 CRDs, as they are not managed by the
Config Connector operator or the Config Connector add-on.
Before you begin
Ensure Config Connector is
installed manually or through the
GKE add-on .
Check your Config Connector version and ensure it is 1.103.0 and above. You
can check the Config Connector version by connecting to the cluster where
Config Connector is installed and running the following command:
kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}'
Installing the v1alpha1 CRDs
Clone the GitHub
repository :
git clone https://github.com/GoogleCloudPlatform/k8s-config-connector
git checkout to your Config Connector version:
cd k8s-config-connector
echo 'v' $( kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' ) | xargs git checkout
Install the v1alpha1 CRDs:
cd crds
If you want to install a specific v1alpha1 CRD, run the following
command:
kubectl apply -f CRD_FILENAME
Replace CRD_FILENAME with the filename of the
v1alpha1 CRD you want to install.
If you want to install all the v1alpha1 CRDs, run the following command:
kubectl apply $( ls *v1alpha1*.yaml | awk ' { print " -f " $1 } ' )
The v1alpha1 CRDs are successfully installed when the kubectl apply command
successfully completes.
Upgrading the v1alpha1 CRDs
Warning: The v1alpha1 CRDs need to be upgraded after your Config Connector
version is upgraded to ensure the existing CRs of the v1alpha1 CRDs still work. Warning: Downgrading the v1alpha1 CRDs is not supported.
Ensure Config Connector version is upgraded before you upgrade the v1alpha1
CRDs.
git checkout to your Config Connector version at your local
Config Connector repository:
echo 'v' $( kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' ) | xargs git checkout
Upgrade the v1alpha1 CRDs:
cd crds
If you want to upgrade a specific v1alpha1 CRD, run the following
command:
kubectl apply -f CRD_FILENAME
Replace CRD_FILENAME with the filename of the
v1alpha1 CRD you want to install.
If you want to upgrade all the v1alpha1 CRDs, run the following command:
kubectl apply $( ls *v1alpha1*.yaml | awk ' { print " -f " $1 } ' )
The v1alpha1 CRDs are successfully upgraded when the kubectl apply command
successfully completes.
Uninstalling the v1alpha1 CRDs
Delete the CRs
for v1alpha1 CRDs if you no longer need the underlying Google Cloud
resources. Otherwise, skip this step.
Note: The CRs are
abandoned
when the v1alpha1 CRDs are uninstalled. The corresponding Google Cloud
resources will still exist.
Check out to your Config Connector version at your local Config Connector
repository:
echo 'v' $( kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' ) | xargs git checkout
Uninstall the v1alpha1 CRDs:
cd crds
kubectl delete $( ls *v1alpha1*.yaml | awk ' { print " -f " $1 } ' )
The v1alpha1 CRDs are successfully uninstalled if the kubectl delete command
successfully completes.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
