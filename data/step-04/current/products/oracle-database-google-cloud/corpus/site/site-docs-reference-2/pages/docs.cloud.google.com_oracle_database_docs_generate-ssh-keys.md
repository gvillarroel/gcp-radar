---
title: "Generate SSH keys \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/generate-ssh-keys
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/manage-databases
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/generate-ssh-keys
  title: "Generate SSH keys \_|\_ Oracle Database at Google Cloud \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Guides
Send feedback
Generate SSH keys
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to generate SSH keys for your Oracle Database@Google Cloud
resources.
To authenticate your Oracle Database@Google Cloud connection, you need to generate
an SSH key pair. You need to create an SSH key pair at least once in your project.
You can reuse the same key pair for multiple Exadata VM Clusters or create
a new key pair for each Exadata VM Cluster. You can generate
an SSH key pair using the ssh-keygen command.
Generate an SSH key pair
To generate an SSH key pair, run the following command:
ssh-keygen -b 4096 -f SSH_KEY_ID -N PASSPHRASE -t rsa
Replace the following:
SSH_KEY_ID : this is the root name of your SSH key file
used to generate the public and private keys
PASSPHRASE : this is the passphrase used when accessing
your resources using Google Cloud console
The ssh-keygen command saves your private key to a file called
SSH_KEY_ID and your public key to a file called
SSH_KEY_ID.pub in your home directory.
What's next
Configure a VPC network for your resources.
Create a Exadata VM Cluster .
Learn more about Oracle Database@Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
