---
title: "Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/how-to/arm
  title: "Using Arm-based Container-Optimized OS images \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Guides
Send feedback
Using Arm-based Container-Optimized OS images
Stay organized with collections
Save and categorize content based on your preferences.
Starting with Milestone 101 ,
Container-Optimized OS publishes Arm-based OS images. The images can be used
to create Tau T2A VMs on Compute
Engine. To learn more about what types of workloads work well with Tau T2A, see
Workload Recommendations .
To learn how you can run Arm workloads on Google Kubernetes Engine (GKE), see
Arm workloads on GKE .
View Arm-based images
Arm-based Container-Optimized OS images are hosted under the cos-cloud
project with the prefix cos-arm64 . You can also see all available
releases on command line by running the following command:
gcloud compute images list --project cos-cloud --no-standard-images --filter = "name~'cos-arm64-*'"
The output is similar to the following:
NAME PROJECT FAMILY DEPRECATED STATUS
cos-arm64-101-17162-40-5 cos-cloud cos-arm64-101-lts READY
cos-arm64-beta-101-17162-40-5 cos-cloud cos-arm64-beta READY
cos-arm64-dev-105-17228-0-0 cos-cloud cos-arm64-dev READY
cos-arm64-stable-101-17162-40-5 cos-cloud cos-arm64-stable READY
Arm-based Container-Optimized OS images share the same
versioning scheme and LTS
milestone lifecycle
with x86-based images. There are also similar image families cos-arm64-dev ,
cos-arm64-beta , cos-arm64-stable and cos-arm64-[MILESTONE]-lts for
Arm-based Container-Optimized OS images.
Differences between Arm and x86 images
The Arm-based and x86-based Container-Optimized OS images share the same
source code ,
but the build and compile configurations are different. This means that an
Arm-based Container-Optimized OS image might not be functionally identical
with a x86-based Container-Optimized OS image even if they have the same
version.
The following sections describe the differences between Arm-based
and x86-based Container-Optimized OS images.
Kernel
Container-Optimized OS Arm-based images have a separate kernel configuration
that is different from x86-based images. The most noticeable difference is that
Arm-based images use NVMe interface for storage instead of SCSI interface, and
Google virtual NIC (gVNIC) for
networking instead of Virtionet. The
Container Threat Detection
feature also doesn't work on Arm-based images.
Cloud Logging agent
Container-Optimized OS Arm-based images use
fluent-bit as
Cloud Logging agent and
x86-based images use fluentd. You shouldn't see any difference if you only rely
on the default logging configuration built into the OS images. However, if you
have custom fluentd configurations, you might experience breakage when migrating
workloads to Arm-based Container-Optimized OS images. For more information,
see the Cloud Logging agent .
Automatic updates
Automatic updates are not
supported on Container-Optimized OS Arm-based images.
GPU accelerators
Using graphics processing unit (GPU) hardware accelerators is not supported on
Container-Optimized OS Arm-based images.
Create instances with the create-with-container command
Container-Optimized OS Arm-based images don't support creating VM instances
with the create-with-container
command. You can use
cloud-init
to configure Arm-based instances if you want to start containers when instances
are created.
Container images
Container-Optimized OS includes tools that download
containers at
runtime. The following table describes which containers are compatible with
Arm-based images:
Container images
Compatible with Arm-based images
gcr.io/cos-cloud/toolbox
Yes
gcr.io/cos-cloud/cos-gpu-installer
No
gcr.io/stackdriver-agents/stackdriver-logging-agent
No
gcr.io/gce-containers/konlet
No
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
