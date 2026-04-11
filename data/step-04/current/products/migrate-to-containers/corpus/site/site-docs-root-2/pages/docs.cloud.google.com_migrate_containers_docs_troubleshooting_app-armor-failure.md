---
title: "Migrated workload fails on 1.20 and later with Ubuntu nodes \_|\_ Migrate\
  \ to Containers \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/containers/docs/getting-started
source_metadata:
  url: https://docs.cloud.google.com/migrate/containers/docs/troubleshooting/app-armor-failure
  title: "Migrated workload fails on 1.20 and later with Ubuntu nodes \_|\_ Migrate\
    \ to Containers \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Containers
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Migrated workload fails on 1.20 and later with Ubuntu nodes
AppArmor lets a system administrator
restrict capabilities of a deployed container. To deploy a migrated container workload,
Migrate to Containers requires the AppArmor profile provided by the Linux LXC package.
However, as part of the update to Google Kubernetes Engine (GKE) 1.20, Ubuntu node images
no longer include the LXC package by default. That means new deployment clusters that
use Ubuntu nodes, or Ubuntu nodes for existing deployment clusters
that are upgraded to GKE 1.20 and later, cannot run your migrated workloads.
When deploying container workloads on Ubuntu nodes for GKE
versions 1.20 and later, the workload can enter a crash-loop and the logs contain
error messages in the form:
D0806 01:59:15.000000 8 hcutil.py:136] SHELL CMD : aa-exec -p lxc-container-default echo 123
D0806 01:59:15.000000 8 hcutil.py:168] SHELL STDERR : b"aa-exec : ERROR : profile 'lxc-container-default' does not exist\n"
D0806 01:59:15.000000 8 hcutil.py:168] SHELL STDERR : b'\n'
D0806 01:59:15.000000 8 hcutil.py:210] SHELL COMPLETED : 1 (aa-exec -p lxc-container-default echo 123)
required AppArmor profile 'lxc-container-default' does not exist, if this pod runs on a
GKE node of type 'Container Optimized OS' (COS) please run
` migctl setup install --cos-runtime` to install it
E0806 01:59:15.000000 8 hcmain.py:22] Traceback (most recent call last) :
File "./hcmain.py", line 19, in safe_action
File "./hcmain.py", line 74, in run_action
File "./hcrunner.py", line 392, in validateSystem
Exception : Invalid system or AppArmor profile
E0806 01:59:15.000000 8 hcmain.py:23] Invalid system or AppArmor profile
I0806 01:59:15.000000 8 termination_log.py:4] writing error to termination log at /dev/termination-log
To resolve this issue:
Connect to the deployment cluster using a command in the form:
gcloud container clusters get-credentials CLUSTER --zone ZONE --project PROJECT
Manually install the Linux LXC package on the deployment cluster by using the command:
migctl setup install --cos-runtime
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
