---
title: "Uninstalling the Google Cloud CLI \_|\_ Google Cloud SDK \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/sdk/docs/uninstall-cloud-sdk
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/uninstall-cloud-sdk
  title: "Uninstalling the Google Cloud CLI \_|\_ Google Cloud SDK \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Guides
Send feedback
Uninstalling the Google Cloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
For installations completed using an OS package (such as apt-get or yum ),
uninstall gcloud CLI using the OS package manager.
For Windows installations, execute the uninstaller.exe file in your
gcloud CLI directory.
To remove the gcloud CLI, follow these instructions:
Locate your installation directory by running:
gcloud info --format='value(installation.sdk_root)'
Locate your user config directory (typically ~/.config/gcloud
on MacOS and Linux) by running:
gcloud info --format='value(config.paths.global_config_dir)'
Delete both of these directories.
Additionally, remove lines sourcing completion.bash.inc and
path.bash.inc in your .bashrc or equivalent shell init file, if you
added them during installation.
Review the contents of the .boto file in your home directory and remove
the sections [GoogleCompute] and [GSUtil] . In addition, review the
sections [OAuth2] and [Credentials] for settings that are no longer
needed.
Some systems may have Cache directories such as ~/Library/Caches/ on
Mac OS X. Find and delete these directories for your system:
find ~/ Library / Caches / - type d - name "google-cloud-sdk" | xargs - I {} rm - r "{}"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
