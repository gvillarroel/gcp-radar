---
title: "Clean up your local machine \_|\_ Migrate to Containers \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/architecture
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/m2c-cli/clean-up
  title: "Clean up your local machine \_|\_ Migrate to Containers \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Clean up your local machine
After you've completed the migration, to clean up your local machine, you can
remove the directory that contains the copy of the source machine file system.
This page describes how you can clean up your local machine.
Clean up a Linux machine
To remove the directory that contains the copy of the source machine file
system from your local machine, run the following command:
./m2c cleanup --source PATH_TO_COPIED_FILESYSTEM
Replace PATH_TO_COPIED_FILESYSTEM with the path to the
copied file system directory.
Note: The cleanup command is supported on Linux machines only.
Clean up a Windows machine
To clean up a Windows machine, you need to manually remove all the disk images
that you have on your local machine.
What's next
Learn how to manage usage statistics .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
