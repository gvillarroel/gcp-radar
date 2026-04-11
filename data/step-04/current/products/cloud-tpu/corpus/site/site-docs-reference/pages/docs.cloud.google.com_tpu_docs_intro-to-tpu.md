---
title: "Introduction to Cloud TPU \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tpu/docs/intro-to-tpu
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/tpu/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/tpu/docs/intro-to-tpu
  title: "Introduction to Cloud TPU \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud TPU
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Introduction to Cloud TPU
Tensor Processing Units (TPUs) are Google's custom-developed,
application-specific integrated circuits (ASICs) used to accelerate machine
learning workloads. For more information about TPU hardware, see TPU architecture .
Cloud TPU is a web service that makes TPUs available as scalable computing
resources on Google Cloud.
TPUs efficiently train your models by using hardware designed for performing
large matrix operations often found in machine learning algorithms. TPUs have
on-chip high-bandwidth memory (HBM) letting you use larger models and batch
sizes. TPUs can be connected in groups called slices that scale up your
workloads with little to no code changes.
Code that runs on TPUs must be compiled by the accelerator linear algebra (XLA)
compiler. XLA is a just-in-time
compiler that takes the graph emitted by an ML framework application and
compiles the linear algebra, loss, and gradient components of the graph into
TPU machine code. The rest of the program runs on the TPU host machine. The XLA
compiler is part of the TPU VM image that runs on a TPU host machine.
For more information about Tensor Processing Units, see
How to think about TPUs .
When to use TPUs
Cloud TPUs are optimized for specific workloads. In some situations, you might
want to use GPUs or CPUs on Compute Engine instances to run your
machine learning workloads. In general, you can decide what hardware is best for
your workload based on the guidelines that follow.
CPUs
Quick prototyping that requires maximum flexibility
Simple models that don't take long to train
Small models with small, effective batch sizes
Models that contain many custom TensorFlow operations written in C++
Models that are limited by available I/O or the networking bandwidth of the
host system
GPUs
Models with a significant number of custom PyTorch/JAX operations that must
run at least partially on CPUs
Models with TensorFlow ops that are not available on Cloud TPU
(see the list of available TensorFlow ops )
Medium-to-large models with larger effective batch sizes
TPUs
Models dominated by matrix computations
Models with no custom PyTorch/JAX operations inside the main training loop
Models that train for weeks or months
Large models with large effective batch sizes
Models with ultra-large embeddings common in advanced ranking and
recommendation workloads
Cloud TPUs are not suited to the following workloads:
Linear algebra programs that require frequent branching or contain many
element-wise algebra operations
Workloads that require high-precision arithmetic
Neural network workloads that contain custom operations in the main training
loop
TPUs in Google Cloud
You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and
Vertex AI. The following table lists resources for each Google Cloud
service.
Google Cloud service
Resources
Cloud TPU
Get started with Cloud TPU VMs
Google Kubernetes Engine
About TPUs in GKE
Vertex AI
Training on Vertex AI with TPUs
Use TPUs for online prediction on Vertex AI
Best practices for model development
A program whose computation is dominated by non-matrix operations such as add,
reshape, or concatenate, will likely not achieve high MXU utilization. The
following are some guidelines to help you choose and build models that are
suitable for Cloud TPU.
Layout
The XLA compiler performs code transformations, including tiling a matrix
multiply into smaller blocks, to efficiently execute computations on the
matrix unit (MXU). The structure of the MXU hardware, a 128x128 systolic array ,
and the design of TPUs memory subsystem, which prefers dimensions that are
multiples of 8, are used by the XLA compiler for tiling efficiency.
Consequently, certain layouts are more conducive to tiling, while others require
reshapes to be performed before they can be tiled. Reshape operations are
often memory bound on the Cloud TPU.
Shapes
The XLA compiler compiles an ML graph just in time for the first batch. If any
subsequent batches have different shapes, the model doesn't work. (Re-compiling
the graph every time the shape changes is too slow.) Therefore, any model that
has tensors with dynamic shapes isn't well suited to TPUs.
Padding
A high performing Cloud TPU program is one where the dense compute
can be tiled into 128x128 chunks. When a matrix computation cannot occupy
an entire MXU, the compiler pads tensors with zeros. There are two drawbacks
to padding:
Tensors padded with zeros underutilize the TPU core.
Padding increases the amount of on-chip memory storage required for a tensor
and can lead to an out-of-memory error in the extreme case.
While padding is automatically performed by the XLA compiler when necessary, one
can determine the amount of padding performed by means of the
op_profile tool. You can
avoid padding by picking tensor dimensions that are well suited to TPUs.
Dimensions
Choosing suitable tensor dimensions goes a long way in extracting maximum
performance from the TPU hardware, particularly the MXU. The XLA compiler
attempts to use either the batch size or a feature dimension to maximally
use the MXU. Therefore, one of these must be a multiple of 128. Otherwise,
the compiler will pad one of them to 128. Ideally, batch size and feature
dimensions should be multiples of 8, which enables extracting high performance
from the memory subsystem.
Getting started with Cloud TPU
Set up a Google Cloud account
Activate the Cloud TPU API
Grant Cloud TPU access to your Cloud Storage buckets
Run a basic calculation on a TPU
Train a reference model on a TPU
Analyze your model
Requesting help
To get help, contact Cloud TPU support .
If you have an active Google Cloud project, be prepared to provide the
following information:
Your Google Cloud project ID
Your TPU name, if one exists
Other information you want to provide
What's next?
Looking to learn more about Cloud TPU? The following resources may help:
Cloud TPU architecture
Cloud TPU pricing
Contact sales
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
