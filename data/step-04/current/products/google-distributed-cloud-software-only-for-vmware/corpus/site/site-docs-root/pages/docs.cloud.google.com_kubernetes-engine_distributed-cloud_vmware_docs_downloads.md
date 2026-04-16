---
title: "Google Distributed Cloud for VMware downloads \_|\_ Google Distributed Cloud\
  \ (software only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/downloads
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/downloads
  title: "Google Distributed Cloud for VMware downloads \_|\_ Google Distributed Cloud\
    \ (software only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Google Distributed Cloud for VMware downloads
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how to download the gkeadm command-line tool and other
components that are part of Google Distributed Cloud (software only) for VMware.
This page is for IT administrators and Operators who manage the
lifecycle of the underlying tech infrastructure. To learn more about common
roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Typically, gkeadm is the only component that you have to download manually.
For example, you don't need to manually download gkectl , or the
Google Distributed Cloud bundle file, because they are automatically copied
to the admin workstation. Also, you don't have to manually download the Admin
workstation Open Virtual Appliance (OVA), because gkeadm automatically copies
the OVA to your vSphere environment.
Before you begin
You must be logged in with a
Google Account .
To see whether you are logged in, view your SDK account
property :
gcloud config get-value account
To sign in:
gcloud auth login
Download gkeadm
You use the gkeadm command-line tool to create an admin workstation. Then you
get an SSH connection to your admin workstation, and from there, you create
clusters.
The gkeadm command-line tool is available for 64-bit Linux.
gcloud storage cp gs://gke-on-prem-release/gkeadm/ VERSION /linux/gkeadm ./
chmod +x gkeadm
Replace VERSION with the version of Google Distributed Cloud you
want to install or upgrade your clusters to. Here's the list of the latest patch
versions for supported minor versions:
1.34.200-gke.68
1.33.600-gke.40
1.32.1000-gke.57
For a list of available versions, see
Versioning .
Verify gkeadm using openssl
You can use openssl to verify the gkeadm binary against the public key.
Copy the following public key to a file:
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEWZrGCUaJJr1H8a36sG4UUoXvlXvZ
wQfk16sxprI2gOJ2vFFggdq3ixF2h4qNBt0kI7ciDhgpwS8t+/960IsIgw==
-----END PUBLIC KEY-----
Run the following command:
openssl dgst -verify PATH_TO_PUBLIC_KEY -signature PATH_TO_SIGNATURE -binary PATH_TO_GKEADM
The expected output of this command is Verified OK .
Download the Google Distributed Cloud bundle
In certain cases, you might want to download a Google Distributed Cloud bundle to
your admin workstation.
On your admin workstation, run this command:
gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz /var/lib/gke/bundles/gke-onprem-vsphere- VERSION .tgz
Replace VERSION with the version of Google Distributed Cloud you
want to install or upgrade your clusters to. Here's the list of the latest patch
versions for supported minor versions:
1.34.200-gke.68
1.33.600-gke.40
1.32.1000-gke.57
For a list of all available versions, see
Versioning .
Verify the bundle
gcloud storage cp gs://gke-on-prem-release/gke-onprem-bundle/ VERSION /gke-onprem-vsphere- VERSION .tgz.1.sig /tmp/gke-onprem-vsphere- VERSION .tgz.1.sig
echo "-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEWZrGCUaJJr1H8a36sG4UUoXvlXvZ
wQfk16sxprI2gOJ2vFFggdq3ixF2h4qNBt0kI7ciDhgpwS8t+/960IsIgw==
-----END PUBLIC KEY-----" > key.pem
openssl dgst -verify key.pem -signature /tmp/gke-onprem-vsphere- VERSION .tgz.1.sig /var/lib/gke/bundles/gke-onprem-vsphere- VERSION .tgz
Download gkectl
Normally there is no reason for your to download the gkectl command-line
tool. In the rare case that you want to download gkectl , you can find it
here:
gcloud storage cp gs://gke-on-prem-release/gkectl/ VERSION /gkectl ./
Replace VERSION with the version of Google Distributed Cloud you
want to install or upgrade your clusters to. Here's the list of the latest patch
versions for supported minor versions:
1.34.200-gke.68
1.33.600-gke.40
1.32.1000-gke.57
For a list of available versions, see
Versioning .
Verify gkectl using openssl
You can use openssl to verify the gkectl binary against the public key.
Copy the following public key to a file:
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEWZrGCUaJJr1H8a36sG4UUoXvlXvZ
wQfk16sxprI2gOJ2vFFggdq3ixF2h4qNBt0kI7ciDhgpwS8t+/960IsIgw==
-----END PUBLIC KEY-----
Run the following command:
openssl dgst -verify PATH_TO_PUBLIC_KEY -signature PATH_TO_SIGNATURE -binary PATH_TO_GKECTL
The expected output of this command is Verified OK .
Download the OVA
In certain cases, you might want to download the admin workstation Open
Virtual Appliance (OVA).
To download the admin workstation OVA:
gcloud storage cp gs://gke-on-prem-release/admin-appliance/ VERSION /gke-on-prem-admin-appliance-vsphere- VERSION .ova ./
Replace VERSION with the version of Google Distributed Cloud you
want to install or upgrade your clusters to. Here's the list of the latest patch
versions for supported minor versions:
1.34.200-gke.68
1.33.600-gke.40
1.32.1000-gke.57
For a list of available versions, see
Versioning .
Verify the OVA using openssl
You can use openssl to verify the OVA file you downloaded against a signature
file (SIG).
Copy the following public key to a file:
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEWZrGCUaJJr1H8a36sG4UUoXvlXvZ
wQfk16sxprI2gOJ2vFFggdq3ixF2h4qNBt0kI7ciDhgpwS8t+/960IsIgw==
-----END PUBLIC KEY-----
Run the following command:
openssl dgst -verify PATH_TO_PUBLIC_KEY -signature SIGNATURE -binary OVA
The expected output of this command is Verified OK .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
