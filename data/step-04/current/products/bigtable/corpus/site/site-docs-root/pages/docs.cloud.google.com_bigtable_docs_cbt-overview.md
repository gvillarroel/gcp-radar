---
title: "cbt CLI overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/cbt-overview
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/cbt-overview
  title: "cbt CLI overview \_|\_ Bigtable \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
cbt CLI
overview
The
cbt CLI
is a command-line interface for performing several
different operations on Bigtable. It is written in Go using the
Go client library for Bigtable . Source code for the
cbt CLI
is available in the
GoogleCloudPlatform/google-cloud-go GitHub repository. This
repository is a mirror of code.googlesource.com/gocloud .
For information about Bigtable in general, see
the overview of Bigtable .
Install the
cbt CLI
You can install the
cbt CLI
as a
gcloud CLI component .
The
cbt CLI
does not implement smart retries or error handling. When working in production
environment, use a Bigtable client library or the Google Cloud console.
Install the gcloud CLI .
Run the following commands:
gcloud components update
gcloud components install cbt
If the
cbt CLI
is already installed, the terminal window displays the All components are up to date message.
Note: If you install the gcloud CLI in a directory that is not your home
directory, you might need to update your PATH environment variable to include
the path to google-cloud-sdk/bin .
Verify the installation
Run the following
cbt CLI
command to verify installation of the CLI:
cbt listinstances
The terminal window displays two columns named Instance Name and Info .
Create a .cbtrc file
You can store required options and parameters, such as -project , -instance , -creds , -admin-endpoint , or -data-endpoint options, in a single .cbtrc file for convenience.
In your .cbtrc file, configure cbt to use your project and instance by
replacing project-id with the ID for the project where you created
your Bigtable instance:
echo project = project-id > ~/.cbtrc
echo instance = quickstart-instance >> ~/.cbtrc
Verify that you set up the .cbtrc file correctly:
cat ~/.cbtrc
The terminal displays the contents of the .cbtrc file, which looks similar
to the following settings:
project = project-id
instance = quickstart-instance
Now you can use the
cbt CLI
with your instance.
Use the
cbt CLI
For details about using the
cbt CLI
, including a list of available commands,
see the
cbt CLI
reference .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
