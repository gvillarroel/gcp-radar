---
title: "Compute Engine container startup agent deprecation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/deprecations/container-startup-agent-on-compute
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/deprecations/container-startup-agent-on-compute
  title: "Compute Engine container startup agent deprecation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Resources
Send feedback
Compute Engine container startup agent deprecation
Stay organized with collections
Save and categorize content based on your preferences.
The container startup agent in Compute Engine was deprecated on July 21, 2025.
This agent was used to deploy containers on Compute Engine instances
when you create VMs or VMs in a managed instance group (MIG). To create and
to run containers on VMs and MIGs, use one of the following solutions instead:
Run Docker container on VMs using a startup script or cloud-init :
to run a container on a single VM or on each VM in a MIG,
use one of the Container-optimized VM images
and configure container using a startup script
or cloud-init .
Google Kubernetes Engine : to
deploy and manage containerized applications at scale.
Cloud Run : to run stateless container applications
and small or medium jobs.
Batch : to run a
batch job that has a definite end state and requires additional computing resources.
For more information, see
Migrate containers that were deployed on VMs during VM creation .
Shutdown schedule
The following table lists the shutdown schedule for Compute Engine
container startup agent.
Date
Event
July 21, 2025
Compute Engine container startup agent was deprecated.
July 31, 2026
Compute Engine container startup agent shutdown.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
