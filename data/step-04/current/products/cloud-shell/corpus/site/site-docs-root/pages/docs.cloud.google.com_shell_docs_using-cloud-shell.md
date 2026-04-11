---
title: "Use Cloud Shell \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/shell/docs/using-cloud-shell
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/shell/docs
source_metadata:
  url: https://docs.cloud.google.com/shell/docs/using-cloud-shell
  title: "Use Cloud Shell \_|\_ Google Cloud Documentation"
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
Use Cloud Shell
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to start and set up a new Cloud Shell session.
Start a new session
Click
Activate Cloud Shell at the top of the Google Cloud console.
A Cloud Shell session opens inside a new frame at the bottom of the
Google Cloud console and displays a command-line prompt. It can take a few
seconds for the session to be initialized.
Use the terminal
Cloud Shell provides command-line access to the virtual machine
instance in a terminal window that opens in the Google Cloud console.
In addition to accessing the Google Cloud CLI and other
utilities from the command line, you can use the cloudshell command to launch
tutorials, open the Cloud Shell Editor, and download files.
Refer to the guide on using the
Cloud Shell Terminal
for more details.
Use the Cloud Shell Editor
The built-in code editor provides the convenience of viewing and editing files
in the same environment where projects are built and deployed. Launch the Cloud Shell Editor by clicking
Open Editor on the toolbar of the Cloud Shell window.
For more information, see
Cloud Shell Editor interface overview .
Choose ephemeral mode
By default, Cloud Shell provisions 5 GB of free persistent disk
storage on your temporarily allocated virtual machine. This is your $HOME
directory. When you use the default Cloud Shell experience, the
files in your home directory persist between sessions.
If you do not need persistent storage, use Cloud Shell in ephemeral
mode. In ephemeral mode, you can get started with Cloud Shell
faster because there is less set up and there is no disk attachment or archive.
However, this means that all the files you create during your ephemeral mode
session are deleted with the VM when the session ends.
To choose ephemeral mode, append ephemeral=true to the
https://shell.cloud.google.com URL. For example:
https://shell.cloud.google.com/?ephemeral=true .
This does not work for https://console.cloud.google.com URLs.
Alternatively, you can open the Cloud Shell
More menu, select
Ephemeral mode , and click Save .
To set ephemeral mode as your Cloud Shell default, enable Always
start Cloud Shell in ephemeral mode before you click Save .
Adjust the display window
To adjust the display window:
Click Hide or
Restore
to hide or restore the session display.
Click
Open Session in New Window to detach the session as a new window.
To close the detached window and re-open the session in the
Google Cloud console, click
Activate Cloud Shell at the top of the
Google Cloud console window.
To toggle between themes, click
Settings and
then click Switch to Light Theme or Switch to Dark Theme .
What's next
Now that you're familiar with configuring Cloud Shell, you can
start to use the
pre-installed tools and commands from
the command line. You can also install additional tools in your
home directory in
persistent disk storage as needed.
Learn how to use web preview
Explore examples of things you can do in Cloud Shell
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
