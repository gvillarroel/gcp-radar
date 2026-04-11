---
title: "gsutil tool \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/gsutil
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/apis?hl=en
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/gsutil
  title: "gsutil tool \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Reference
Send feedback
gsutil tool
Stay organized with collections
Save and categorize content based on your preferences.
Important: gsutil is not the recommended CLI for
Cloud Storage. Use
gcloud storage commands in the Google Cloud CLI instead.
gsutil is a Python application that lets you access Cloud Storage from the
command line. You can use gsutil to do a wide range of bucket and object
management tasks, including:
Creating and deleting buckets.
Uploading, downloading, and deleting objects.
Listing buckets and objects.
Moving, copying, and renaming objects.
Editing object and bucket ACLs.
gsutil performs all operations, including uploads and downloads, using HTTPS
and transport-layer security (TLS).
Should you use gsutil?
Generally, you should use gcloud storage commands instead of gsutil
commands:
The gsutil tool is a legacy Cloud Storage CLI and minimally
maintained.
The gsutil tool does not support working with newer Cloud Storage
features, such as soft delete and managed folders .
gcloud storage commands require less manual optimization in order to achieve
the fastest upload and download rates.
Migrating to the gcloud CLI
If you are a gsutil user wanting to migrate to the gcloud CLI, you
should first check if you're using a standalone version of gsutil by running
the following command:
gsutil version -l
If the result of the command includes using cloud sdk: False , then you are
using a standalone version of gsutil. To migrate to the gcloud CLI,
start by Installing the gcloud CLI .
If the result of the command includes using cloud sdk: True , then you
already have the gcloud CLI installed.
Once the gcloud CLI is installed, you can use gcloud storage
commands just like you use gsutil commands. The following resources can help
you get started:
Explore gcloud storage commands by following the quickstart
Discover object storage with gcloud CLI .
Read the gcloud storage reference .
Review the Shim for running gcloud storage , which documents
functionality that's not available in gcloud storage commands.
Syntax for accessing resources
gsutil uses the prefix gs:// to indicate a resource in Cloud Storage:
gs:// BUCKET_NAME / OBJECT_NAME
In addition to specifying exact resources, gsutil supports the use of
wildcards in your commands.
Accessing a file list
For operations involving a large number of files, you can pass a list of source
files to gsutil by using the -I flag. This tells gsutil to read the list of
files or object URLs from stdin rather than from the command-line arguments.
The input must be a list of local file paths or Cloud Storage object URLs,
with one path per line. For example, you can create a file named
example_file_list.txt that contains the following paths:
gs://example-source-bucket/data-01.csv
gs://example-source-bucket/images/logo.png
/local/logs/error_log_20251226.txt
The following example commands read the file paths from example_file_list.txt
and copy them to a destination bucket named gs://example-destination-bucket :
cat example_file_list.txt | gsutil -m cp -I gs://example-destination-bucket/
You can also generate the list of paths on the fly and pipe it directly into
gsutil. For example, the following commands upload all JPG files found in your
current directory and copy them to gs://example-destination-bucket :
find . -name "*.jpg" | gsutil -m cp -I gs://example-destination-bucket
Built-in help
gsutil contains thorough built-in help about every command as well as a number
of topics, which you can list and read with the gsutil help command.
To get information about a specific command or topic, use gsutil help followed
by the intended command or topic name. For example, gsutil help cp and
gsutil help options are a command help page and a topic help page,
respectively.
To get information about your gsutil installation, use the gsutil version
command:
gsutil version -l
Usage statistics
During the installation process, you can opt-in to tracking usage statistics
which helps improve the gsutil tool. If you subsequently decide that you want to
disable these usage statistics, see Usage statistics .
About gsutil
gsutil is an open-source project. To download the developer version of gsutil
or volunteer to help develop gsutil , visit the gsutil project on
GitHub.
Limitations
When using gsutil with Windows, commands that use the -m global flag
cannot be canceled using Ctrl-C .
What's next
Install gsutil .
See community discussion in gsutil Stack Overflow questions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
