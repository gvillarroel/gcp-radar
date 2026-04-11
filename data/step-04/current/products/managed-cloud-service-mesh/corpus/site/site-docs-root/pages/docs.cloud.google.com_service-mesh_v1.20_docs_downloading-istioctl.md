---
title: "Downloading the correct istioctl version \_|\_ Cloud Service Mesh v1.20 \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/downloading-istioctl
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/downloading-istioctl
  title: "Downloading the correct istioctl version \_|\_ Cloud Service Mesh v1.20\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Downloading the correct istioctl version
Cloud Service Mesh and istioctl versions
Your Cloud Service Mesh version must match the istioctl client version. Download
the installation file to ensure that these versions match.
Downloading the installation file
The following commands download the installation file for the most recent
version of Cloud Service Mesh 1.28.5. You can update the following
commands with any supported version listed on the Versions page
to download the installation file for a different version.
Note: If you are using
managed Cloud Service Mesh ,
then download the version currently on the
Rapid channel
(currently version 1.21).
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
Sample applications in the samples directory.
The istioctl command-line tool that you use to install Cloud Service Mesh is
in the bin directory.
The Cloud Service Mesh configuration profiles are in the manifests/profiles
directory.
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
Sample applications in the samples directory.
The istioctl command-line tool that you use to install Cloud Service Mesh is
in the bin directory.
The Cloud Service Mesh configuration profiles are in the manifests/profiles
directory.
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
Sample applications in the samples directory.
The istioctl command-line tool that you use to install Cloud Service Mesh is
in the bin directory.
The Cloud Service Mesh configuration profiles are in the manifests/profiles
directory.
Ensure that you're in the Cloud Service Mesh installation's root directory.
cd istio-1.28.5-asm.9
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
