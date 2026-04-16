---
title: "Installing a Snap package \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sdk/docs/downloads-snap
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/sdk/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sdk/docs/downloads-snap
  title: "Installing a Snap package \_|\_ Google Cloud SDK \_|\_ Google Cloud Documentation"
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
Installing a Snap package
Stay organized with collections
Save and categorize content based on your preferences.
Note: This installation method is only available on Ubuntu versions that support
snaps .
If you prefer automatic updates, you can install the Google Cloud CLI using a snap package on
Ubuntu systems. This package contains the gcloud CLI, gcloud alpha ,
gcloud beta , gsutil , docker-credential-gcloud , and
bq command-line tools only. It doesn't include kubectl or the
App Engine extensions required to deploy an application using the gcloud CLI.
If you need these components, install the Debian package
instead.
If you have the old snap package google-cloud-sdk installed, remove it with the
following command:
snap remove google-cloud-sdk
You can't install the new snap package without removing this package because both installations
require the same aliases.
Install the gcloud CLI snap package:
snap install google-cloud-cli --classic
Optional: To enable command completion, update your profile to source the
completion script.
For Bash shells, run the following command:
echo "source /snap/google-cloud-cli/current/completion.bash.inc" >> ~/.bashrc
For Zsh shells, run the following command:
echo "source /snap/google-cloud-cli/current/completion.zsh.inc" >> ~/.zshrc
You must restart your shell for this change to take effect.
Run gcloud init to
initialize, authorize, and configure the gcloud CLI.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
