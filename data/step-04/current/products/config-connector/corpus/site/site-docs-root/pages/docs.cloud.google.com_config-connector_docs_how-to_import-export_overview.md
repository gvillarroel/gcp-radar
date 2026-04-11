---
title: "Install the config-connector CLI tool \_|\_ Config Connector \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview
  title: "Install the config-connector CLI tool \_|\_ Config Connector \_|\_ Google\
    \ Cloud Documentation"
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
Install the config-connector CLI tool
This page explains how to install the config-connector CLI tool.
With the config-connector CLI tool, you can export existing Google Cloud resources into
YAML files, which are required for Config Connector to acquire those resources.
The config-connector CLI tool is not installed by default when you install Config Connector.
Before you begin
Install Config Connector with a supported installation method .
Install config-connector CLI tool
Download the latest config-connector binary tar file:
gcloud storage cp gs://cnrm/latest/cli.tar.gz .
Extract the tar file:
tar zxf cli.tar.gz
The tar file includes a binary executable for Linux, macOS, and Windows.
Choose the appropriate binary for your operating system:
Linux: ./linux/amd64/config-connector
macOS: ./darwin/amd64/config-connector
Windows: ./windows/amd64/config-connector
Copy the binary to a location on your ${PATH} . For example, on Linux
and macOS, you might use mv to place it into /usr/local/bin .
mv linux/amd64/config-connector /usr/local/bin
If you want to use the config-connector CLI tool to export directly from
Cloud Asset Inventory, enable the Cloud Asset Inventory API on your Google Cloud
Identity's project with gcloud .
gcloud services enable cloudasset.googleapis.com
Upgrade config-connector
To upgrade the config-connector CLI tool to the latest version, repeat the installation
steps and overwrite the executable.
What's next
Perform an export on individual resources .
Perform a bulk export for all resources in your project, folder, or organization .
Learn about the resources that Config Connector supports .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
