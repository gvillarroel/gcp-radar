---
title: "Use Compute Engine reservations with Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/compute-engine-reservations
  title: "Use Compute Engine reservations with Dataflow \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Use Compute Engine reservations with Dataflow
Stay organized with collections
Save and categorize content based on your preferences.
To ensure that VM resources are available when your Dataflow jobs need
them, you can use Compute Engine reservations. Reservations provide a high
level of assurance in obtaining capacity for Compute Engine zonal
resources.
To use Compute Engine reservations with Dataflow, perform the
following steps:
Create a Compute Engine reservation. It can be a single-project
reservation or a shared reservation. For more information, see the following
documents:
Create a reservation for a single project
Create a shared reservation
The reservation can include GPU or TPU accelerators.
When you submit your Dataflow job, pass one of the following
service options, depending on which version of the Beam SDK you are using:
Beam version < 2.29: --experiments=skip_gce_quota_verification
Beam version >= 2.29: --dataflow_service_options=automatically_use_created_reservation
To prevent low-priority workloads in the same project from competing for
reservations with Dataflow, set the reservation affinity to
none when you create VMs for those workloads. For more information, see
Consuming reserved instances .
In order to use the reservation, the Dataflow workers must match
the reservation configuration. You might need to set the worker machine type for
the job. For more information, see
Workers .
Limitations
All limitations of Compute Engine reservations apply when
Dataflow workers consume reservations. See
How reservations work .
Dataflow relies on the
default consumption order
in Compute Engine. As a result, the following limitations apply:
Other workloads in the same project or Organization that don't specify the
--reservation flag might compete with Dataflow workloads for
project-specific or shared reservations.
Dataflow Prime jobs don't consume Compute Engine reservations.
Reservations and accelerators
Dataflow supports specifically targeted
reservations
for pipelines using accelerators (GPUs or TPUs). This functionality is generally
available with an allowlist. For instructions on using Dataflow
accelerators with specific reservations, contact your account team.
Pricing
Dataflow bills you for VMs from automatically consumed
reservations while your Dataflow job runs. When
Dataflow isn't using the VMs, Compute Engine bills you.
Compute Engine pricing model
If your Dataflow usage includes VMs from specifically targeted
reservations
that have GPUs or TPUs, then compute resources from those reserved VMs are
billed according to Compute Engine
Pricing . If your specifically targeted reservations are
attached to a Compute Engine resource-based
commitment , then
you also receive applicable resource-based committed use discounts (CUDs) for
your usage. You're also billed a management premium for compute resources
consumed in Dataflow. For more pricing details, see
Dataflow Pricing .
Dataflow pricing model
For any other type of Compute Engine reservations that you use with
Dataflow, your usage is billed by using the
Dataflow pricing model . Dataflow
usage from those reservations isn't eligible for resource-based CUDs, even if
those reservations are attached to a resource-based commitment. This applies to
the following Compute Engine reservations:
Specifically targeted reservations that don't have GPUs or TPUs
All automatically consumed reservations
What's next
To learn more about Compute Engine reservations, see
Reservations of Compute Engine zonal resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
