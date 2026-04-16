---
title: "Dataflow support for GPUs \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/resources/locations
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support
  title: "Dataflow support for GPUs \_|\_ Google Cloud Documentation"
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
Dataflow support for GPUs
Stay organized with collections
Save and categorize content based on your preferences.
Note: The following
considerations apply to this GA offering:
Jobs that use GPUs incur charges as specified in the
Dataflow pricing page .
To use GPUs, your Dataflow job must use Dataflow Runner v2 .
This page provides background information on how GPUs work with
Dataflow, including information about prerequisites and supported
GPU types.
Using GPUs in Dataflow jobs lets you accelerate
some data processing tasks. GPUs can perform certain computations faster
than CPUs. These computations are usually numeric or linear algebra,
often used in image processing and machine learning use cases. The
extent of performance improvement varies by the use case, type of computation,
and amount of data processed.
Prerequisites for using GPUs in Dataflow
To use GPUs with your Dataflow job, you must use Runner v2.
Dataflow runs user code in worker VMs inside a Docker container.
These worker VMs run Container-Optimized OS .
For Dataflow jobs to use GPUs, you need the following prerequisites:
GPU drivers are installed on worker VMs and accessible to the Docker
container. For more information, see
Install GPU drivers .
GPU libraries required by your pipeline, such as
NVIDIA CUDA-X libraries
or the
NVIDIA CUDA Toolkit ,
are installed in the custom container image. For more information, see
Configure your container image .
Because GPU containers are typically large, to avoid
running out of disk space ,
increase the default
boot disk size
to 50 gigabytes or more.
Pricing
Jobs using GPUs incur charges as specified in the Dataflow
pricing page .
Availability
Note: TPUs are also supported with Dataflow. For more information,
see Dataflow support for TPUs .
The following GPU types are supported with Dataflow:
GPU type
worker_accelerator string
NVIDIA® L4
nvidia-l4
NVIDIA® A100 40 GB
nvidia-tesla-a100
NVIDIA® A100 80 GB
nvidia-a100-80gb
NVIDIA® Tesla® T4
nvidia-tesla-t4
NVIDIA® Tesla® P4
nvidia-tesla-p4
NVIDIA® Tesla® V100
nvidia-tesla-v100
NVIDIA® Tesla® P100
nvidia-tesla-p100
NVIDIA® H100
nvidia-h100-80gb
NVIDIA® H100 Mega
nvidia-h100-mega-80gb
For more information about each GPU type, including performance data, see
Compute Engine GPU platforms .
For information about available regions and zones for GPUs, see
GPU regions and zones availability
in the Compute Engine documentation.
Recommended workloads
The following table provides recommendations for which type of GPU to use for
different workloads. The examples in the table are suggestions only, and you
need to test in your own environment to determine the appropriate GPU type for
your workload.
For more detailed information about GPU memory size, feature availability, and
ideal workload types for different GPU models, see the
General comparison chart
on the GPU platforms page.
Workload
A100, H100
L4
T4
Model fine tuning
Recommended
Large model inference
Recommended
Recommended
Medium model inference
Recommended
Recommended
Small model inference
Recommended
Recommended
What's next
See an example of a
developer workflow for building pipelines that use GPUs .
Learn how to
run an Apache Beam pipeline on Dataflow with GPUs .
Work through
Processing Landsat satellite images with GPUs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
