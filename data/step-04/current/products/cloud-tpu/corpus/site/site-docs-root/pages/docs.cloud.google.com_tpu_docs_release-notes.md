---
title: "Cloud TPU release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tpu/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tpu/docs
source_metadata:
  url: https://docs.cloud.google.com/tpu/docs/release-notes
  title: "Cloud TPU release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud TPU
Resources
Send feedback
Cloud TPU release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud TPU. You can
periodically check this page for announcements about new or updated features,
bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 31, 2026
Feature
Generally available : TPU7x is generally available (GA). TPU7x is the first
release within the Ironwood family, Google Cloud's seventh generation TPU. TPU7x
supports large-scale AI training and inference, providing performance and
cost-effectiveness for demanding workloads such as large language (LLMs),
mixture of experts (MoEs), and diffusion models. For more information, see the
TPU7x (Ironwood) documentation .
November 24, 2025
Feature
Preview : TPU7x is available in Preview. TPU7x is the first release within
the Ironwood family, Google Cloud's seventh generation TPU. TPU7x supports
large-scale AI training and inference, providing performance and
cost-effectiveness for demanding workloads such as large language models (LLMs),
mixture of experts (MoEs), and diffusion models. For more information, see the
TPU7x (Ironwood) documentation .
May 22, 2025
Feature
Public preview : You can request Cloud TPUs using future reservations in calendar mode. This mode, powered by the Dynamic Workload Scheduler , lets you check TPU availability up to 120 days in advance and request capacity based on your schedule. You can use calendar mode to reserve TPUs for 1 to 90 days. Requesting a short-term reservation with calendar mode is a good fit for training and experimentation workloads that require precise start times and have a defined duration. For more information, see Request a short-term reservation using calendar mode .
Feature
Public preview : You can enable reservation sharing for Cloud TPU. This feature lets you share a reservation across multiple projects. You can also share a reservation with Vertex AI for training or serving workloads. For more information, see Share a Cloud TPU reservation .
March 31, 2025
Feature
Flex-start for Cloud TPU , powered by Dynamic Workload Scheduler , is available in Preview . Flex-start is a flexible and cost-effective consumption option for AI workloads. Flex-start enables you to dynamically provision TPUs for up to 7 days using the queued resources API, without long-term reservations. This option is ideal for quick experimentation, small-scale testing, dynamic inference provisioning, and model fine-tuning. For more information about Flex-start for Cloud TPU, see Request Cloud TPUs using Flex-start .
December 16, 2024
Announcement
This Release Note announces General Availability of Trillium AKA v6e. Trillium is the 6th generation and latest Cloud TPU. It is fully integrated with our AI Hypercomputer architecture to deliver compelling value to our Google Cloud Platform AI customers.
We used Trillium TPUs to train the new Gemini 2.0, Google's most capable AI model yet, and now enterprises and startups alike can take advantage of the same powerful, efficient, and sustainable infrastructure. Today, Trillium is generally available for Google Cloud customers and this week we will be delivering our first large tranches of Trillium capacity to some of our biggest Google Cloud Platform customers.
Here are some of the key improvements that Trillium delivers over the prior generations, v5e and v5p:
Over 4x improvement in training performance.
Up to 3x increase in inference throughput.
A 67% increase in energy efficiency.
An impressive 4.7x increase in peak compute performance per chip.
Double the High Bandwidth Memory (HBM) capacity.
Double the Interchip Interconnect (ICI) bandwidth.
100,000 Trillium chips per Jupiter network fabric with 13 Petabits/sec of bisection bandwidth, capable of scaling a single distributed training job to hundreds of thousands of accelerators.
Trillium provides up to 2.1x increase in performance per dollar over Cloud TPU v5e and up to 2.5x increase in performance per dollar over Cloud TPU v5p in training dense LLMs like Llama2-70b and Llama3.1-405b.
GKE integration enables seamless AI workload orchestration using Google Compute Engine MIGs including XPK for faster iterative development.
Multislice training with Trillium scales from one to hundreds of thousands of chips across pods using DCN.
Training and serving fungibility enables use of same Cloud TPU quota for both training and inference.
Support for collection scheduling with collection SLOs being defended.
Full-host VM support to enable inference support for larger models (70B+ parameters).
Official Libtpu releases that guarantees stability across all three frameworks (Jax/Pytorch-XLA/Tensorflow).
These enhancements enable Trillium to excel across a wide range of AI workloads, including:
Scaling AI training workloads like LLMs including dense and Mixture of Experts (MoE) models
Inference performance and collection scheduling
Embedding-intensive models acceleration
Delivering training and inference price-performance
November 01, 2024
Feature
You can now request Cloud TPUs as queued resources in the Google Cloud Console. Queuing your request for TPU resources can help alleviate stockout issues. If the resources you request are not immediately available, your request is added to a queue until the request succeeds or you delete it. You can also specify a time range in which you want to fulfill the resource request. For more information, see Manage queued resources .
Feature
Creating a Multislice TPU environment is now available in the Google Cloud Console. You can use Multislice to run training jobs using multiple TPU slices within a single Pod or on slices in multiple Pods. You must use a queued resource request to create a Multislice environment. For more information, see Cloud TPU Multislice overview .
March 11, 2024
Change
Cloud TPU now supports TensorFlow 2.16.1. For more information see the TensorFlow 2.16.1 release notes .
December 04, 2023
Change
Cloud TPU now supports TensorFlow 2.14.1. For more information see the TensorFlow 2.14.1 release notes .
November 13, 2023
Change
Cloud TPU now supports TensorFlow 2.15.0, which adds support for PJRT. For more information see the TensorFlow 2.15.0 release notes .
October 05, 2023
Change
Cloud TPU now supports TensorFlow 2.13.1. For more information see the TensorFlow 2.13.1 release notes .
September 27, 2023
Change
Cloud TPU now supports TensorFlow 2.14.0. For more information see the TensorFlow 2.14.0 release notes .
August 29, 2023
Announcement
You can now create Cloud Tensor Processing Unit (TPU) nodes in Google Kubernetes Engine (GKE) to run AI workloads, from training to inference models. GKE manages your cluster by automating TPU resource provisioning, scaling, scheduling, repairing, and upgrading. GKE provides TPU infrastructure metrics in Cloud Monitoring, TPU logs, and error reports for better visibility and monitoring of TPU node pools in GKE clusters. TPUs are available with GKE Standard clusters. GKE supports TPU v4 in version 1.26.1.gke-1500 and later, and supports TPU v5e in version 1.27.2-gke.1500 and later. To learn more, see TPUs in GKE introduction .
July 21, 2023
Change
Cloud TPU now supports TensorFlow 2.12.1. For more information see the TensorFlow 2.12.1 release notes .
July 10, 2023
Change
Cloud TPU now supports TensorFlow 2.13.0. For more information see the TensorFlow 2.13.0 Release Notes .
June 07, 2023
Change
You can now view historical logs of maintenance events on your TPU in system
event audit logs . For additional
information see the maintenance events documentation .
March 31, 2023
Change
Cloud TPU now supports Tensorflow 2.11.1. For more information see the TensorFlow 2.11.1 release notes .
March 27, 2023
Change
Cloud TPU now supports Tensorflow 2.12.0. For more information see the TensorFlow 2.12 release notes .
March 24, 2023
Change
Cloud TPUs now support the PyTorch 2.0 release , via PyTorch/XLA integration. On top of the underlying improvements and bug fixes in PyTorch's 2.0 release, this release introduces several features, and PyTorch/XLA specific bug fixes.
Beta Features
PJRT runtime
Checkout our newest document ; PjRt is the default runtime in 2.0.
New Implementation of xm.rendezvous with XLA collective communication which scales better ( #4181 )
New PJRT TPU backend through the C-API ( #4077 )
Use PJRT to default if no runtime is configured ( #4599 )
Experimental support for torch.distributed and DDP on TPU v2 and v3 ( #4520 )
FSDP
Add auto_wrap_policy into XLA FSDP for automatic wrapping ( #4318 )
Stable Features
Lazy Tensor Core Migration
Migration is completed, checkout this dev discussion for more detail.
Naively inherits LazyTensor ( #4271 )
Adopt even more LazyTensor interfaces ( #4317 )
Introduce XLAGraphExecutor ( #4270 )
Inherits LazyGraphExecutor ( #4296 )
Adopt more LazyGraphExecutor virtual interfaces ( #4314 )
Rollback to use xla::Shape instead of torch::lazy::Shape ( #4111 )
Use TORCH_LAZY_COUNTER/METRIC ( #4208 )
Improvements & Additions
Add an option to increase the worker thread efficiency for data loading ( #4727 )
Improve numerical stability of torch.sigmoid ( #4311 )
Add an api to clear counter and metrics ( #4109 )
Add met.short_metrics_report to display more concise metrics report ( #4148 )
Document environment variables ( #4273 )
Op Lowering
_linalg_svd ( #4537 )
Upsample_bilinear2d with scale ( #4464 )
Experimental Features
TorchDynamo ( torch.compile ) support
Checkout our newest doc .
Dynamo bridge python binding ( #4119 )
Dynamo bridge backend implementation ( #4523 )
Training optimization: make execution async ( #4425 )
Training optimization: reduce graph execution per step ( #4523 )
PyTorch/XLA GSPMD on single host
Preserve parameter sharding with sharded data placeholder ( #4721)
Transfer shards from server to host ( #4508 )
Store the sharding annotation within XLATensor(# 4390 )
Use d2d replication for more efficient input sharding ( #4336 )
Mesh to support custom device order. ( #4162 )
Introduce virtual SPMD device to avoid unpartitioned data transfer ( #4091 )
Ongoing development
Ongoing Dynamic Shape implementation
Implement missing XLASymNodeImpl::Sub ( #4551 )
Make empty_symint support dynamism. ( #4550 )
Add dynamic shape support to SigmoidBackward ( #4322 )
Add a forward pass NN model with dynamism test ( #4256 )
Ongoing SPMD multi host execution ( #4573 )
Bug fixes & improvements
Support int as index type ( #4602 )
Only alias inputs and outputs when force_ltc_sync == True ( #4575 )
Fix race condition between execution and buffer tear down on GPU when using bfc_allocator ( #4542 )
Release the GIL during TransferFromServer ( #4504 )
Fix type annotations in FSDP ( #4371 )
December 19, 2022
Change
Cloud TPU now supports TensorFlow patches: 2.8.4 , 2.9.3 , and 2.10.1 . See the TensorFlow release notes for details:
2.8.4 release notes
2.9.3 release notes
2.10.1 release notes
December 01, 2022
Change
Cloud TPU now supports Tensorflow 2.11.0. For more information see TensorFlow 2.11 release notes .
September 13, 2022
Change
Cloud TPU now supports Tensorflow 2.10.0. For more information see TensorFlow 2.10 release notes .
June 24, 2022
Change
Cloud TPU now supports TensorFlow 2.6.5 and TensorFlow 2.7.3 .
For more information see TensorFlow 2.6.5 and TensorFlow 2.7.3 release notes.
May 27, 2022
Change
Cloud TPU now supports Tensorflow 2.8.2 and 2.9.1. For more information see TensorFlow 2.8.2 release notes and TensorFlow 2.9.1 release notes .
March 18, 2022
Change
Cloud TPU now supports Tensorflow 2.6.3. For more information see TensorFlow 2.6.3 release notes .
March 09, 2022
Change
Cloud TPU now supports Tensorflow 2.5.3 and 2.7.1. For more information see TensorFlow 2.5.3 release notes and TensorFlow 2.7.1 release notes .
February 03, 2022
Change
Cloud TPU now supports Tensorflow 2.8.0. For more information, see TensorFlow 2.8.0 Release Notes .
December 02, 2021
Change
Cloud TPU team just released TF-2.4.4, TF-2.5.2 and TF-2.6.2 on Cloud TPUs. The TensorFlow release notes for these releases are shown below.
TF 2.4.4
TF 2.5.2
TF 2.6.2
November 05, 2021
Change
Cloud TPU now supports Tensorflow 2.7.0. For more information, see Tensorflow 2.7.0 Release Notes
August 24, 2021
Change
Cloud TPU team just released TF-2.3.4, TF-2.4.3 and TF-2.5.1 on Cloud TPUs. The TensorFlow release notes for these releases are shown below.
Tensoflow-2.3.4 Release notes
Tensoflow-2.4.3 Release notes
Tensoflow-2.5.1 Release notes
August 12, 2021
Change
Cloud TPU now supports Tensorflow 2.6.0. For more information, see Tensorflow 2.6.0 Release Notes .
In TF 2.6.0, TensorFlow has introduced a new version of the TF/XLA bridge using the MLIR compiler infrastructure. The MLIR bridge is enabled by default. To explicitly disable it at runtime, add the following code snippet to your model's code:
tf.config.experimental.disable_mlir_bridge()
June 22, 2021
Change
The Cloud TPU team has released support for TensorFlow 2.4.2. The corresponding Tensorflow release notes are:
Tensoflow-2.4.2 Release notes
June 17, 2021
Change
Cloud TPU team just released TF-2.1.4, TF-2.2.3 and TF-2.3.3 on Cloud TPUs. The TensorFlow release notes for these releases are shown below.
Tensoflow-2.1.4 Release notes
Tensoflow-2.2.3 Release notes
Tensoflow-2.3.3 Release notes
June 07, 2021
Change
Cloud TPU now supports Tensorflow 2.5.0. For more information, see Tensorflow 2.5.0 Release Notes
June 01, 2021
Change
New Cloud TPU VMs make training your ML models on TPUs easier than ever
The new Cloud TPU VM architecture makes it easier than ever before to use our industry-leading TPU hardware. The Cloud TPU VMs provide direct access to TPU host machines, offering a new and improved user experience for developing and deploying TensorFlow, PyTorch, and JAX on Cloud TPUs. Instead of accessing Cloud TPUs remotely over the network, Cloud TPU VMs let you set up your own interactive development environment on each TPU host machine. Now you can write and debug an ML model line-by-line using a single TPU VM, and then scale it up on a Cloud TPU Pod slice to take advantage of the super-fast TPU interconnects. You have root access to every TPU VM you create, so you can install and run any code you wish in a tight loop with your TPU accelerators. You can use local storage, execute custom code in your input pipelines, and more easily integrate Cloud TPUs into your research and production workflows. Google supports Cloud TPU integrations with TensorFlow, PyTorch, and JAX, and you can even write your own integrations via a new libtpu shared library on the VM. For more information, see https://cloud.google.com/blog/products/compute/introducing-cloud-tpu-vms.
December 14, 2020
Feature
Cloud TPU now supports Shared VPC
Shared VPC allows an organization to connect resources from multiple projects to a common VPC network to communicate with each other securely and efficiently using internal IPs from that network. This release enables connecting to Cloud TPU Nodes from Shared VPC networks.
September 11, 2020
Feature
Compute Engine TPU Metrics and Logs In-Context
New Monitoring tab for TPUs provides key TPU Metrics and access to logs at a glance. You can see a variety of key TPU metrics including MXU utilization, CPU, memory, sent/received traffic, and more. In addition, it provides instant access to TPU logs which give insight into important events.
August 20, 2020
Feature
PyTorch/XLA 1.6 Release (GA)
Highlights
Cloud TPUs now support the PyTorch 1.6 release , via PyTorch/XLA integration. With this release we mark our general availability (GA) with the models such as ResNet, FairSeq Transformer and RoBERTa, and HuggingFace GLUE task models that have been rigorously tested and optimized.
In addition, with our PyTorch/XLA 1.6 release, you no longer need to run the env-setup.py script on Colab/Kaggle as those are now compatible with native torch wheels. You can still continue to use that script if you would like to run with our latest unstable releases.
New Features
XLA RNG state checkpointing/loading (https://github.com/pytorch/xla/pull/2096)
Device Memory XRT API (https://github.com/pytorch/xla/pull/2295)
[Kaggle/Colab] Small host VM memory environment utility (https://github.com/pytorch/xla/pull/2025)
[Advanced User] XLA Builder Support (https://github.com/pytorch/xla/pull/2125)
New op supported on PyTorch/XLA
Hardsigmoid (https://github.com/pytorch/xla/pull/1940)
true_divide (https://github.com/pytorch/xla/pull/1782)
max_unpool2d (https://github.com/pytorch/xla/pull/2188)
max_unpool3d (https://github.com/pytorch/xla/pull/2188)
Replication_pad1d (https://github.com/pytorch/xla/pull/2188)
Replication_pad2d (https://github.com/pytorch/xla/pull/2188)
Dynamic shape support on XLA:CPU and XLA:GPU (experimental)
Bug Fixes
RNG Fix (proper dropout)
Manual all-reduce in backward pass (https://github.com/pytorch/xla/pull/2325)
August 19, 2020
Feature
Cloud TPU now supports Shared VPC in Beta.
Shared VPC allows an organization to connect resources from multiple projects to a common VPC network to communicate with each other securely and efficiently using internal IPs from that network. This release enables connecting to Cloud TPU Nodes from Shared VPC networks.
May 29, 2020
Change
Cloud TPU now supports TensorFlow version 1.15.3. See the TensorFlow 1.15.3 Release Notes .
May 21, 2020
Change
Cloud TPU now supports TensorFlow 2.1.1 with Keras support. See the TensorFlow 2.1.1 Release Notes for a complete list of features included in this release.
May 12, 2020
Change
Cloud TPU currently supports TensorFlow version 1.15.2. See the Release Notes .
TensorFlow 1.15 supported Python 2, but that support has been discontinued with TensorFlow 1.15.2.
May 08, 2020
Change
Cloud TPU now supports TensorFlow 2.2. See the TensorFlow 2.2 Release Notes for a complete list of features included with this release. New models for Image segmentation and Image classification have been added to the official cloud TPU supported models list .
April 21, 2020
Feature
Cloud TPUs and Cloud TPU Pods now support PyTorch 1.5 via the PyTorch/XLA integration. This integration makes it possible for PyTorch users to do everything they can do on GPUs on Cloud TPUs, while minimizing changes to the user experience. You can try out PyTorch on an 8-core Cloud TPU device for free via Google Colab, and you can use PyTorch on Cloud TPUs at a much larger scale on Google Cloud (all the way up to full Cloud TPU Pods).
See the ⁠ PyTorch/XLA 1.5 Release Notes for a complete list of features included in this release.
January 09, 2020
Feature
Cloud TPU now supports TensorFlow 2.1 with Keras support. See the TensorFlow 2.1 Release Notes for a complete list of features included in this release.
December 05, 2019
Feature
Cloud TPU v2 and v3 Pods are now Generally Available for TensorFlow version 1.x. Supported models can be found here .
Since TPU resources can scale from a single Cloud TPU to a Cloud TPU Pod, you don't need to choose between a single Cloud TPU and a Cloud TPU Pod. You can request portions of Cloud TPU Pods in slices or sets of cores, so that you purchase only the processing power you need.
Cloud TPU v2 and v3 Pod advantages over a single v2 or v3 Cloud TPU device:
Increased training speeds for fast iteration in R&D
*Increased human productivity by providing automatically scalable machine learning (ML) compute
Ability to train much larger models
Cloud TPU v3 Pod advantages over Cloud TPU v2 Pod:
Faster processing and larger memory:
v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM)
v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling* Can train even larger models
October 22, 2019
Change
Cloud TPU now supports TensorFlow version 1.15 ( Release Notes , API Documentation ). See the current supported TensorFlow versions in the Cloud TPU supported versions document .
Cloud TPU support for TensorFlow 1.15 includes the following changes:
The official Cloud TPU supported models list has been updated.
July 29, 2019
Change
Cloud TPU now supports TensorFlow version 1.14 . Support for Tensorflow versions 1.11 is removed. See the current supported TensorFlow versions in the Cloud TPU versioning policy .
Cloud TPU support for TensorFlow 1.14 includes the following changes:
Improved Error Messages: Cloud TPU errors in TensorFlow 1.14 are aggregated across multiple TPU cores and across multiple workers. This change makes error messages more comprehensible for user code.
Redesigned object detection codebase: The object detection codebase provides optimized training performance, clean and configurable parameter management, and advanced features such as spatial partition, NAS-FPN and AutoAugment .
May 07, 2019
Feature
Cloud TPU v3 Pod is available in Beta release.
Since TPU resources can scale from a single Cloud TPU to a Cloud TPU Pod, you don't need to choose between a single Cloud TPU and a Cloud TPU Pod. You can request portions of Cloud TPU Pods in slices or sets of cores, so that you purchase only the processing power you need.
Cloud TPU Pod (beta) advantages over a single v3 Cloud TPU device:
Increased training speeds for fast iteration in R&D
Increased human productivity by providing automatically scalable machine learning (ML) compute
Ability to train much larger models
Cloud TPU v3 Pod (beta) advantages over Cloud TPU v2 Pod (beta) :
Faster processing and larger memory:
v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM)
v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling* Can train even larger models
Feature
Cloud TPU v2 Pod is available in Beta release.
Since TPU resources can scale from a single Cloud TPU to a Cloud TPU Pod, you don't need to choose between a single Cloud TPU and a Cloud TPU Pod. You can request portions of Cloud TPU Pods in slices or sets of cores, so that you purchase only the processing power you need.
Cloud TPU Pod (beta) advantages over a single Cloud TPU v2 device:
Increased training speeds for fast iteration in R&D
Increased human productivity by providing automatically scalable machine learning (ML) compute
Ability to train much larger models
March 11, 2019
Change
Cloud TPU now supports TensorFlow version 1.13 . Support for Tensorflow versions 1.8 and 1.9 have been removed.
See the current supported TensorFlow versions in the Cloud TPU versioning policy .
January 31, 2019
Feature
Cloud TPU v3 is now GA (generally available). Cloud TPU v3 has double the memory of v2. This gives improved performance and enables support for more classes of models, for example deeper ResNets and larger images with RetinaNet. Existing models that run on Cloud TPU v2 will continue to work. Refer to the Cloud TPU versions guide for more information.
November 08, 2018
Change
Cloud TPU now supports TensorFlow version 1.12 . This release includes improvements for Keras on Cloud TPUs, performance optimizations throughout the software stack, and improved APIs, error messages, and reliability.
See the current supported TensorFlow versions in the Cloud TPU versioning policy .
November 07, 2018
Feature
Cloud TPU v2 Pod is available in Alpha release.
Since TPU resources can scale from a single Cloud TPU to a Cloud TPU Pod, you don't need to choose between a single Cloud TPU and a Cloud TPU Pod. You can request portions of Cloud TPU Pods in slices or sets of cores, so that you purchase only the processing power you need.
Cloud TPU Pod (alpha) advantages:
Increased training speeds for fast iteration in R&D
Increased human productivity by providing automatically scalable machine learning (ML) compute
Ability to train much larger models than on a single ML accelerator
October 10, 2018
Feature
Cloud TPU v3 is available in Beta release. You now have a choice between v2 and v3 in your configuration.
Cloud TPU v3 has double the memory of v2. This gives improved performance and enables support for more classes of models, for example deeper ResNets and larger images with RetinaNet.
Existing models that run on Cloud TPU v2 will continue to work.
Refer to the Cloud TPU versions guide for more information.
Change
Preemptible TPUs are now GA (generally available). A preemptible TPU is a Cloud TPU node that you can create and run at a much lower price than normal nodes. However, Cloud TPU may terminate (preempt) these nodes if it requires access to the resources for another purpose.
See how to use a preemptible TPU .
Review the pricing for preemptible and normal Cloud TPU nodes.
September 27, 2018
Change
Cloud TPU now supports TensorFlow version 1.11 . TensorFlow 1.11 introduces experimental support for all of the following on Cloud TPU: Keras, Colab, eager execution, LARS, RNNs, and Mesh TensorFlow . This release also introduces a high-performance Cloud Bigtable integration, new XLA compiler optimizations, other performance optimizations throughout the software stack, and it provides improved APIs, error messages, and reliability.
See the current supported TensorFlow versions in the Cloud TPU versioning policy .
September 07, 2018
Change
Support for TensorFlow version 1.7 ended on September 7, 2018. See the current supported versions in the Cloud TPU versioning policy .
July 24, 2018
Change
We're delighted to announce promotional pricing for Cloud TPU, resulting in significant price reductions. The following table shows the previous pricing and the new pricing available from today:
US
Previous price per TPU per hour
New price per TPU per hour
Cloud TPU
$6.50 USD
$4.50 USD
Preemptible TPU
$1.95 USD
$1.35 USD
Europe
Previous price per TPU per hour
New price per TPU per hour
Cloud TPU
$7.15 USD
$4.95 USD
Preemptible TPU
$2.15 USD
$1.485 USD
Asia Pacific
Previous price per TPU per hour
New price per TPU per hour
Cloud TPU
$7.54 USD
$5.22 USD
Preemptible TPU
$2.26 USD
$1.566 USD
See the pricing guide for details.
July 12, 2018
Feature
Cloud TPU is now available in Google Kubernetes Engine as a Beta feature. Run your machine learning workload in a Kubernetes cluster on Google Cloud, and let GKE manage and scale the Cloud TPU resources for you.
Follow the tutorial to train the Tensorflow ResNet-50 model on Cloud TPU and GKE.
Refer to the GKE setup guide for quick instructions on running Cloud TPU with GKE.
July 02, 2018
Change
Cloud TPU now supports TensorFlow version 1.9 . TensorFlow 1.9 brings increases in Cloud TPU performance as well as improved APIs, error messages, and reliability.
June 27, 2018
Feature
Cloud TPU is now GA (generally available). Google's revolutionary TPUs are designed to accelerate machine learning workloads with TensorFlow. Each Cloud TPU provides up to 180 teraflops of performance, providing the computational power to train and run cutting-edge machine learning models.
Follow the quickstart guide to set up your Cloud TPU.
Choose a tutorial to run a specific model on your Cloud TPU.
June 18, 2018
Feature
Preemptible TPUs are now available in Beta . A preemptible TPU is a Cloud TPU node that you can create and run at a much lower price than normal nodes. However, Cloud TPU may terminate (preempt) these nodes if it requires access to the resources for another purpose.
See how to use a preemptible TPU .
Review the pricing for preemptible and normal Cloud TPU nodes.
Change
Cloud TPU is now available in the European (EU) and Asia Pacific (APAC) regions as well as the United States (US). See the the pricing details per region. The following zones are available:
US
us-central1-b
us-central1-c
us-central1-f ( TFRC program only)
EU
europe-west4-a
APAC
asia-east1-c
June 12, 2018
Change
Support for TensorFlow version 1.6 ended on June 12, 2018. See the current supported versions in the Cloud TPU versioning policy .
April 20, 2018
Change
Cloud TPU now supports TensorFlow version 1.8 . TensorFlow 1.8 brings increases in Cloud TPU performance as well as improved APIs, error messages, and reliability.
Support for TensorFlow version 1.7 ends on June 20, 2018. See the details in the Cloud TPU versioning policy .
April 02, 2018
Change
Cloud TPU now supports TensorFlow version 1.7 . Support for TensorFlow version 1.6 ends on June 2, 2018. See the details in the Cloud TPU versioning policy .
February 12, 2018
Feature
Cloud TPU is available in Beta release. Google's revolutionary TPUs are designed to accelerate machine learning workloads with TensorFlow. Each Cloud TPU provides up to 180 teraflops of performance, providing the computational power to train and run cutting-edge machine learning models.
See how to request TPU quota .
Follow the quickstart guide to set up your Cloud TPU.
Choose a tutorial to run a specific model on your Cloud TPU.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
