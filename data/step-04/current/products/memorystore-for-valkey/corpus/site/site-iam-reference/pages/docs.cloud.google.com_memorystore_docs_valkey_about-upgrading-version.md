---
title: "About upgrading the Valkey version of an instance \_|\_ Memorystore for Valkey\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/valkey/access-control
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/valkey/about-upgrading-version
  title: "About upgrading the Valkey version of an instance \_|\_ Memorystore for\
    \ Valkey \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Valkey
Guides
Send feedback
About upgrading the Valkey version of an instance
Stay organized with collections
Save and categorize content based on your preferences.
This page contains the following information:
Best practices to upgrade the version of your Memorystore for Valkey instance
How your instance behaves during a version upgrade operation
For more information about upgrading your instance's version, see Upgrade the
Valkey version of an instance .
Best practices to upgrade your instance's version
This section provides guidance for upgrading the version of your
Memorystore for Valkey instance.
Important: Upgrading an instance is irreversible. You can't downgrade the
version of a Memorystore for Valkey instance.
Before you run a version upgrade operation, we recommend that you create a backup of your
instance's data.
To increase the speed and reliability of the version upgrade operation,
upgrade your instance during periods of low instance traffic. To learn how to
monitor instance traffic, see Monitor instances .
Make sure that you use our best practices for memory management
to manage the memory of your instance.
Before you upgrade the version of your instance, make sure that you become
familiar with the newer version
to see how this version impacts your application.
Version upgrade behavior
Memorystore for Valkey upgrades the version of your instance by updating
all nodes within the instance. This upgrade process is similar to a maintenance
operation. For more information about the process, see Create-before-destroy lifecycle strategy .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
