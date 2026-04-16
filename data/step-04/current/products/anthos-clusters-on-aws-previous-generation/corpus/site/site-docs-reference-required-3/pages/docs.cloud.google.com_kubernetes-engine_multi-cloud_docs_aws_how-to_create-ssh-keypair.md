---
title: "Create an EC2 key pair \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-ssh-keypair
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-ssh-keypair
  title: "Create an EC2 key pair \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Create an EC2 key pair
Stay organized with collections
Save and categorize content based on your preferences.
You can associate a specific SSH key pair with control plane or node pool
instances during creation.
To generate an asymmetric private key and import its public key into AWS, run
the following commands:
ssh-keygen -t rsa -m PEM -b 4096 -C " COMMENT " \
-f SSH_PRIVATE_KEY -N "" 1>/dev/null
aws ec2 import-key-pair --key-name SSH_KEY_PAIR_NAME \
--public-key-material fileb:// SSH_PRIVATE_KEY .pub
Replace the following:
SSH_PRIVATE_KEY : a file name to save the key in
SSH_KEY_PAIR_NAME : a name you choose for the key pair
COMMENT : a text string describing the key
What's next
Quickstart
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
