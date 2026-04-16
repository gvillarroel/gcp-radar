---
title: "Troubleshoot capacity issues \_|\_ Filestore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/filestore/docs/capacity-issues
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/filestore/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/filestore/docs/capacity-issues
  title: "Troubleshoot capacity issues \_|\_ Filestore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Filestore
Guides
Send feedback
Troubleshoot capacity issues
Stay organized with collections
Save and categorize content based on your preferences.
The following sections describe scenarios where an instance might encounter
capacity issues and provides steps to help address the problem.
"No space left on device"
Check if the Filestore instance has sufficient inodes by running
the following command on the client VM:
df -i
The command returns something similar to the following:
Filesystem Inodes IUsed IFree IUse% Mounted on
10.0.0.2:/vol1 134217728 13 134217715 1% /mnt/test
Each file stored on the file share consumes one inode. If IUse% reaches 100%,
you are not able to store more files on the file share even if you haven't
reached the maximum allocated capacity. The number of inodes scales with
capacity. If you want to add more inodes, you must add more capacity. However,
reaching the maximum number of inodes is rare and is only a concern if you need
to store numerous small files.
For more information, see Inode usage and
Monitoring instances .
df and du commands report different amounts of free disk space
When a file that is open by a running process is deleted, the disk space that
the file consumes does not get freed until the file is closed. The df commands
accounts for the space consumed by deleted open files, whereas the du command
does not. This difference in calculation is why the du command often shows
more free space than df .
To display the deleted files that are still open by a running process, run:
lsof | grep deleted
Number of client connections
You can control the number of client connections with IOPS rather than
provisioned instance capacity by using custom performance .
For more information, see Client connection limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
