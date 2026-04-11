---
title: "Transfer agent command-line options \_|\_ Storage Transfer Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/on-prem-agent-command-options
  title: "Transfer agent command-line options \_|\_ Storage Transfer Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
Transfer agent command-line options
Stay organized with collections
Save and categorize content based on your preferences.
Transfer agents transfer data from your file system to Google Cloud. You
can control agent options when you run an
agent through the flags and options described in this page.
Command summary
sudo docker run [--ulimit memlock=64000000 -d --rm -v host-directory : container-directory ]
--env environment-variable = variable-value
gcr.io/cloud-ingest/tsop-agent:latest
{--help | --version | --project-id= project-id }
[--agent-id-prefix= id-prefix --creds-file= credential-file
--enable_mount_directory --hostname= hostname
--log-dir= logs-directory
--max-physical-mem= maximum-memory ]
Docker options
--ulimit memlock=64000000
Locks shared memory for a shared pool for Docker, so that it is always in
memory for access by multiple sessions.
-d
Starts the Docker container in detached mode, or in the background. This
allows you to continue issuing commands from the Linux terminal.
For more information, see
Detached -d
--rm
Deletes the container and the container's file system when Docker exits.
For more information, see
Clean up (--rm)
-v host-directory : container-directory
Specifies one or more
volumes to
map from the host to the container. When using -v , we require
the host-directory
and container-directory to be the same, otherwise
Storage Transfer Service won't successfully locate your files for transfer.
For more information, see
VOLUME (shared file systems)
--env environment-variable = variable-value
Specifies an environment variable for the Docker container. Use this flag to
configure your agents to use a forward proxy. For more information, see
Using a forward proxy .
Agent options
--agent-id-prefix= id-prefix
An optional prefix that is prepended to the agent ID to help identify the
agent or its machine in the Google Cloud console. When a prefix is used, the
agent ID is formatted as prefix + hostname + Docker container ID .
--creds-file= credential-file
An optional JSON-formatted service account credential file. For more
information about generating a service account credential file, see
creating and managing service account keys .
Note: Unless you are using --enable_mount_directory , you must
prefix this path with /transfer_root , for example
/transfer_root/path/to/cred_file.json .
--enable_mount_directory
Optionally mounts the whole file system under the directory
/transfer_root within the Docker container, rather than
specifying individual
Docker -v volume mounts .
When using this flag, you don't need to prefix /transfer_root
to the log directory or the service account credentials file path, and
/transfer_root isn't visible in transfer logs or GUI error
samples.
--help
Displays brief usage help.
--hostname= hostname
set the hostname that the agent is running on. Used to report the hostname
of the machine a particular agent is running on.
Note: We recommend passing --hostname=$(hostname) when using
this flag.
--log-dir= logs-directory
An optional directory that the agent writes logs to. The default directory
is /tmp/ .
Note: Unless you are using --enable_mount_directory , you must
prefix this path with /transfer_root , for example,
/transfer/root/path/to/log_file .
--max-physical-mem= maximum-memory
Agents default to using 8GiB maximum of system memory. If the default
doesn't fit your environment, you can specify a relevant maximum memory
usage in the following formats:
max-physical-mem value
Maximum memory setting
6g
6 gigabytes
6gb
6 gigabytes
6GiB
6 gibibytes
--project-id= project-id
Required string of the project ID that is hosting the transfer resources that are created and billed.
--version
Displays the current version of the agent.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
