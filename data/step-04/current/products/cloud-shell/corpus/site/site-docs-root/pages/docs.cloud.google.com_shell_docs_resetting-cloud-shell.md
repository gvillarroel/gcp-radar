---
title: "Disable or reset Cloud Shell \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/shell/docs/resetting-cloud-shell
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/resetting-cloud-shell
  title: "Disable or reset Cloud Shell \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Shell
Guides
Send feedback
Disable or reset Cloud Shell
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to disable Cloud Shell for managed user accounts
and how to reset Cloud Shell.
Disable Cloud Shell for managed user accounts
To disable Cloud Shell for
Google Workspace and
Cloud Identity
managed user accounts, go to the
Google Admin console and then navigate to
Apps > Additional Google services > Google Cloud Platform >
Cloud Shell Settings
and disable Cloud Shell Access Settings .
To disable Cloud Shell for specific users, you'll need to use access
groups: add individual users to the group and turn off the group's
Cloud Shell access setting. For more information, see
Controlling who uses Google Cloud in your organization guide .
Reset Cloud Shell
To reset Cloud Shell and restore your Cloud Shell home
directory to a clean state, follow these steps.
Note: Before resetting your Cloud Shell home directory, consider
using Safe mode to sign in as
root and fix issues with your files.
To restore your Cloud Shell home directory to a clean state:
Check for personal files in the home directory and note that the next step
deletes these files:
ls -a $HOME
Remove all files from your home directory:
Important: This will permanently delete all files in your home directory.
sudo rm -rf $HOME
In the Cloud Shell menu, click
more_vert More and then click
power_settings_new Restart .
If prompted, click Restart in the confirmation dialog.
This provisions a new VM and restores the home directory to its default state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
