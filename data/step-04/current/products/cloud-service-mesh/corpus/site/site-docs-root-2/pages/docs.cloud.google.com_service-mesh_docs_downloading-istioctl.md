---
title: "Downloading the troubleshooting tool \_|\_ Cloud Service Mesh \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/downloading-istioctl
  title: "Downloading the troubleshooting tool \_|\_ Cloud Service Mesh \_|\_ Google\
    \ Cloud Documentation"
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
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Downloading the troubleshooting tool
This page shows you how to download the troubleshooting tool for
Cloud Service Mesh. To debug and review your Cloud Service Mesh deployment
you need to install the istioctl component for Google Cloud CLI.
Download istioctl
Managed control plane
Update Google Cloud CLI:
gcloud components update
Download the embedded Cloud Service Mesh troubleshooting tool:
gcloud components install istioctl
If you receive error message You cannot perform this action because the
Google Cloud CLI component manager is disabled for this installation , you
have previously installed Google Cloud CLI through
Debian/Ubuntu . Use the
following commands instead:
Update Google Cloud CLI
sudo apt-get update
Download the embedded Cloud Service Mesh troubleshooting tool:
sudo apt-get install google-cloud-sdk-istioctl
In-cluster control plane
Linux
Download the Cloud Service Mesh installation file to your current working directory:
curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-linux-amd64.tar.gz
Download the signature file and use openssl to verify the
signature:
curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-linux-amd64.tar.gz.1.sig
openssl dgst -verify /dev/stdin -signature istio-1.28.5-asm.9-linux-amd64.tar.gz.1.sig istio-1.28.5-asm.9-linux-amd64.tar.gz
The expected output is: Verified OK .
Extract the contents of the file to any location on your file system. For
example, to extract the contents to the current working directory:
tar xzf istio-1.28.5-asm.9-linux-amd64.tar.gz
The command creates an installation directory in your current working
directory named istio-1.28.5-asm.9 that contains:
- Sample applications in the `samples` directory .
- The `istioctl` command - line tool that you use to install Cloud Service Mesh is
in the < code>bin < / code > directory .
- The Cloud Service Mesh configuration profiles are in the `manifests/profiles`
directory .
Ensure that you're in the Cloud Service Mesh installation's root directory.
cd istio-1.28.5-asm.9
Mac OS
Download the Cloud Service Mesh installation file to your current working
directory:
curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-osx.tar.gz
Download the signature file and use openssl to verify the signature:
curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-osx.tar.gz.1.sig
openssl dgst -sha256 -verify /dev/stdin -signature istio-1.28.5-asm.9-osx.tar.gz.1.sig istio-1.28.5-asm.9-osx.tar.gz
The expected output is: Verified OK .
Extract the contents of the file to any location on your file system. For
example, to extract the contents to the current working directory:
tar xzf istio-1.28.5-asm.9-osx.tar.gz
The command creates an installation directory in your current working
directory named istio-1.28.5-asm.9 that contains:
- Sample applications in the `samples` directory .
- The `istioctl` command - line tool that you use to install Cloud Service Mesh is
in the < code>bin < / code > directory .
- The Cloud Service Mesh configuration profiles are in the `manifests/profiles`
directory .
Ensure that you're in the Cloud Service Mesh installation's root directory.
cd istio-1.28.5-asm.9
Windows
Download the Cloud Service Mesh installation file to your current working
directory:
curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-win.zip
Download the signature file and use openssl to verify the signature:
curl -LO https://storage.googleapis.com/gke-release/asm/istio-1.28.5-asm.9-win.zip.1.sig
openssl dgst -verify - -signature istio-1.28.5-asm.9-win.zip.1.sig istio-1.28.5-asm.9-win.zip
The expected output is: Verified OK .
Extract the contents of the file to any location on your file system. For
example, to extract the contents to the current working directory:
tar xzf istio-1.28.5-asm.9-win.zip
The command creates an installation directory in your current working
directory named istio-1.28.5-asm.9 that contains:
- Sample applications in the `samples` directory .
- The `istioctl` command - line tool that you use to install Cloud Service Mesh is
in the < code>bin < / code > directory .
- The Cloud Service Mesh configuration profiles are in the `manifests/profiles`
directory .
Ensure that you're in the Cloud Service Mesh installation's root directory.
cd istio-1.28.5-asm.9
What's next
Troubleshoot Cloud Service Mesh step-by-step
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
