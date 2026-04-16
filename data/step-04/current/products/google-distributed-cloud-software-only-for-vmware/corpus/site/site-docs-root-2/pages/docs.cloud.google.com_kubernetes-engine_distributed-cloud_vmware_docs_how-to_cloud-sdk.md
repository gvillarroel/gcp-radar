---
title: "Installing Google Cloud CLI \_|\_ Google Distributed Cloud (software only)\
  \ for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cloud-sdk
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/cloud-sdk
  title: "Installing Google Cloud CLI \_|\_ Google Distributed Cloud (software only)\
    \ for VMware \_|\_ Google Cloud Documentation"
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
Installing Google Cloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
This document shows how to install Google Cloud CLI before you install
Google Distributed Cloud.
To install Google Distributed Cloud, you need certain tools that are in
gcloud CLI. Use the following steps to install the
tooling, including upgrading your existing gcloud CLI installation.
To install gcloud CLI and related tooling:
Install gcloud CLI:
Install gcloud CLI but skip the gcloud init command.
If you already have a version installed, run the following command to list
what components and versions you have:
gcloud components list
If you have the latest available version and both the anthos-auth and
kubectl components are Installed , you can stop here.
Retrieve the latest components and versions:
Run the following command to update gcloud CLI:
gcloud components update
To install the anthos-auth and kubectl
components, run the following commands:
gcloud components install kubectl
gcloud components install anthos-auth
Installing if you are behind a proxy
If you are behind a corporate proxy or firewall, the gcloud CLI might
not be able to access the internet with its default settings.
For information about how to install the gcloud CLI in this
situation, see
Configuring the gcloud CLI for use behind a proxy/firewall .
What's next
Create Google Cloud projects (full instructions) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
