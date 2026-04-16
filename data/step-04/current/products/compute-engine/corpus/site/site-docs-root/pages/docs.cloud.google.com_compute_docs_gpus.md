---
title: "GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/gpus
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/gpus
  title: "GPU machine types \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
GPU machine types
Stay organized with collections
Save and categorize content based on your preferences.
This document outlines the NVIDIA GPU models that you can use to
accelerate machine learning (ML), data processing, and graphics-intensive
workloads on your Compute Engine instances. This
document also details which GPUs come pre-attached to accelerator-optimized
machine series such as A4X Max, A4X, A4, A3, A2, G4, and G2, and which GPUs you
can attach to N1 general-purpose instances.
Use this document to compare the performance, memory, and features of different
GPU models. For a more detailed overview of the accelerator-optimized machine
family, including information on CPU platforms, storage options, and networking
capabilities, and to find the specific machine type that matches your workload,
see Accelerator-optimized machine family .
For more information about GPUs on Compute Engine, see
About GPUs .
To view available regions and zones for GPUs on Compute Engine, see
GPUs regions and zone availability .
Overview
Compute Engine offers different machine types to support your various
workloads.
Some machine types support
NVIDIA RTX Virtual Workstations (vWS) .
When you create an instance that uses NVIDIA RTX Virtual Workstation,
Compute Engine automatically adds a vWS license. For information about pricing
for virtual workstations, see the
GPU pricing page .
GPU machine types
AI and ML workloads
Graphics and visualization
Other GPU workloads
Accelerator-optimized A series machine types are designed for high
performance computing (HPC), artificial intelligence (AI), and machine
learning (ML) workloads.
The later generation A series are ideal for pre-training and fine-tuning
foundation models that involves large clusters of accelerators, while the A2
series can be used for training smaller models and single host inference.
For these machine types, the GPU model is automatically attached to the instance.
Accelerator-optimized G series machine types are designed for workloads
such as NVIDIA Omniverse simulation workloads, graphics-intensive applications,
video transcoding, and virtual desktops. These machine types support
NVIDIA RTX Virtual Workstations (vWS) .
The G series can also be used for training smaller models and for
single-host inference.
For these machine types, the GPU model is automatically attached to the instance.
For N1 general-purpose machine types, except for the N1 shared-core
( f1-micro and g1-small ), you can attach a select
set of GPU models. Some of these GPU models also support NVIDIA RTX Virtual
Workstations (vWS).
A4X Max
(NVIDIA GB300 Ultra Superchips) ( nvidia-gb300 )
A4X
(NVIDIA GB200 Superchips) ( nvidia-gb200 )
A4
(NVIDIA B200) ( nvidia-b200 )
A3 Ultra
(NVIDIA H200) ( nvidia-h200-141gb )
A3 Mega
(NVIDIA H100) ( nvidia-h100-mega-80gb )
A3 High
(NVIDIA H100) ( nvidia-h100-80gb )
A3 Edge
(NVIDIA H100) ( nvidia-h100-80gb )
A2 Ultra
(NVIDIA A100 80GB) ( nvidia-a100-80gb )
A2 Standard
(NVIDIA A100) ( nvidia-a100-40gb )
G4 (NVIDIA RTX PRO 6000) ( nvidia-rtx-pro-6000 ) ( nvidia-rtx-pro-6000-vws )
G2 (NVIDIA L4)
( nvidia-l4 ) ( nvidia-l4-vws )
The following GPU models can be attached to N1 general-purpose machine
types:
NVIDIA T4 ( nvidia-tesla-t4 ) ( nvidia-tesla-t4-vws )
NVIDIA P4 ( nvidia-tesla-p4 ) ( nvidia-tesla-p4-vws )
NVIDIA V100 ( nvidia-tesla-v100 )
NVIDIA P100 ( nvidia-tesla-p100 ) ( nvidia-tesla-p100-vws )
You can also use some GPU machine types on
AI Hypercomputer . AI Hypercomputer is a
supercomputing system that is optimized to support your artificial intelligence
(AI) and machine learning (ML) workloads. This option is recommended for creating a
densely allocated, performance-optimized infrastructure that has integrations
for Google Kubernetes Engine (GKE) and Slurm schedulers.
A4X Max and A4X machine series
The A4X Max and A4X machine series
runs on an exascale platform based on
NVIDIA's rack-scale architecture
and is optimized for compute and memory-intensive, network-bound ML training and
HPC workloads. A4X Max and A4X differ primarily in their GPU and networking
components. A4X Max also offers bare metal instances, which provide
direct access to the host server's CPU and memory, without the Compute Engine
hypervisor layer.
A4X Max machine types (bare metal)
A4X Max accelerator-optimized
machine types use NVIDIA GB300 Grace Blackwell Ultra Superchips ( nvidia-gb300 ) and
are ideal for foundation model training and serving. A4X Max machine types are available
as bare metal instances .
A4X Max is an exascale platform based on
NVIDIA GB300
NVL72 . Each machine has two sockets with NVIDIA Grace CPUs with Arm
Neoverse V2 cores. These CPUs are connected to four NVIDIA B300 Blackwell GPUs with fast
chip-to-chip ( NVLink-C2C )
communication.
Note: When provisioning A4X Max instances, you
must reserve capacity to create instances
and clusters. You can then create instances that use the features and services available from
AI Hypercomputer. For more information, see
Deployment options overview in
the AI Hypercomputer documentation.
Attached NVIDIA GB300 Grace Blackwell Ultra Superchips
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4x-maxgpu-4g-metal
144
960
12,000
6
3,600
4
1,116
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4X machine types
A4X accelerator-optimized
machine types use NVIDIA GB200 Grace Blackwell Superchips ( nvidia-gb200 ) and
are ideal for foundation model training and serving.
A4X is an exascale platform based on
NVIDIA GB200
NVL72 . Each machine has two sockets with NVIDIA Grace CPUs with Arm
Neoverse V2 cores. These CPUs are connected to four NVIDIA B200 Blackwell GPUs with fast
chip-to-chip ( NVLink-C2C )
communication.
Note: When provisioning A4X instances, you
must reserve capacity to create instances
and clusters. You can then create instances that use the features and services available from
AI Hypercomputer. For more information, see
Deployment options overview in
the AI Hypercomputer documentation.
Attached NVIDIA GB200 Grace Blackwell Superchips
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4x-highgpu-4g
140
884
12,000
6
2,000
4
744
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A4 machine series
A4 accelerator-optimized
machine types have
NVIDIA B200 Blackwell GPUs
( nvidia-b200 ) attached and are ideal for foundation model
training and serving.
Note: When provisioning A4 machine types, you must
reserve capacity to create instances or clusters, use Spot VMs, use
Flex-start VMs, or create a resize request in a MIG. For instructions on how to create A4
instances, see
Create an A3 Ultra or A4 instance .
.
Attached NVIDIA B200 Blackwell GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a4-highgpu-8g
224
3,968
12,000
10
3,600
8
1,440
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth, see
Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 machine series
A3 accelerator-optimized
machine types have NVIDIA H100 SXM or NVIDIA H200 SXM GPUs attached.
A3 Ultra machine type
A3 Ultra
machine types have NVIDIA H200 SXM GPUs
( nvidia-h200-141gb ) attached and provides the highest network
performance in the A3 series. A3 Ultra machine types are ideal for foundation model training and
serving.
Note: When provisioning A3 Ultra machine
types, you must reserve capacity to create instances or clusters, use Spot VMs, use
Flex-start VMs, or create a resize request in a MIG. For more information about the
parameters to set when creating an A3 Ultra instance, see
Create an A3 Ultra or A4 instance .
Attached NVIDIA H200 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3e)
a3-ultragpu-8g
224
2,952
12,000
10
3,600
8
1128
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A3 Mega, High, and Edge machine types
To use NVIDIA H100 SXM GPUs , you have the following options:
A3 Mega : these machine types have H100 SXM GPUs ( nvidia-h100-mega-80gb ) and are ideal for large-scale training and serving workloads.
A3 High : these machine types have H100 SXM GPUs ( nvidia-h100-80gb ) and are well-suited for both training and serving tasks.
A3 Edge : these machine types have H100 SXM GPUs ( nvidia-h100-80gb ), are designed specifically for serving, and are available in a limited set of regions .
A3 Mega
Note: When provisioning
a3-megagpu-8g machine types, we recommend using a cluster of these instances and deploying
with a scheduler such as Google Kubernetes Engine (GKE) or Slurm. For detailed instructions on either of
these options, review the following:
To create Google Kubernetes Engine cluster, see
Deploy an A3 Mega cluster
with GKE .
To create a Slurm cluster, see
Deploy an A3 Mega Slurm cluster .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-megagpu-8g
208
1,872
6,000
9
1,800
8
640
A3 High
Note: When provisioning
a3-highgpu-1g , a3-highgpu-2g , or a3-highgpu-4g machine types,
you must create instances by using Spot VMs or
Flex-start VMs. For detailed instructions on these options, review the following:
To create Spot VMs, set the provisioning model to SPOT when you
create an accelerator-optimized
VM .
To create Flex-start VMs, you can use one of the following methods:
Create a standalone VM and set the provisioning model to FLEX_START when you
create an
accelerator-optimized VM .
Create a resize request in a managed instance group (MIG). For instructions, see
Create a MIG with GPU
VMs .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-highgpu-1g
26
234
750
1
25
1
80
a3-highgpu-2g
52
468
1,500
1
50
2
160
a3-highgpu-4g
104
936
3,000
1
100
4
320
a3-highgpu-8g
208
1,872
6,000
5
1,000
8
640
A3 Edge
Note: To get started with A3 Edge instances, see
Create an A3 VM with GPUDirect-TCPX enabled .
Attached NVIDIA H100 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Physical NIC count
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM3)
a3-edgegpu-8g
208
1,872
6,000
5
600: for asia-south1 and northamerica-northeast2
400: for all other A3 Edge regions
8
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
A2 machine series
A2 accelerator-optimized
machine types have NVIDIA A100 GPUs
attached and are ideal for model fine tuning, large model
and cost optimized inference.
The A2 machine series offers two types:
A2 Ultra : these machine types have A100 80GB GPUs
( nvidia-a100-80gb ) and Local SSD disks attached.
A2 Standard : these machine types have A100 40GB GPUs
( nvidia-tesla-a100 ) attached. You can also add Local
SSD disks when creating an A2 Standard instance. For the number of disks
you can attach, see
Machine types that require you to choose a number of Local SSD disks .
A2 Ultra
Attached NVIDIA A100 80GB GPUs
Machine type
vCPU count 1
Instance memory (GB)
Attached Local SSD (GiB)
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM2e)
a2-ultragpu-1g
12
170
375
24
1
80
a2-ultragpu-2g
24
340
750
32
2
160
a2-ultragpu-4g
48
680
1,500
50
4
320
a2-ultragpu-8g
96
1,360
3,000
100
8
640
A2 Standard
Attached NVIDIA A100 40GB GPUs
Machine type
vCPU count 1
Instance memory (GB)
Local SSD supported
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB HBM2)
a2-highgpu-1g
12
85
Yes
24
1
40
a2-highgpu-2g
24
170
Yes
32
2
80
a2-highgpu-4g
48
340
Yes
50
4
160
a2-highgpu-8g
96
680
Yes
100
8
320
a2-megagpu-16g
96
1,360
Yes
100
16
640
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
G4 machine series
G4 accelerator-optimized
machine types use
NVIDIA RTX PRO 6000 Blackwell Server Edition GPUs ( nvidia-rtx-pro-6000 )
and are
suitable for NVIDIA Omniverse simulation workloads, graphics-intensive applications, video
transcoding, and virtual desktops. G4 machine types also provide a low-cost solution for
performing single host inference and model tuning compared with A series machine types.
A key feature of the G4 series is support for direct GPU peer-to-peer (P2P) communication
on multi-GPU machine types ( g4-standard-96 , g4-standard-192 ,
g4-standard-384 ). This allows GPUs within the same instance to
exchange data directly over the PCIe bus, without involving the CPU host. For more information about
G4 GPU peer-to-peer communication, see
G4 GPU peer-to-peer communication .
Note: To get started with G4 instances, see
Create a G4 instance .
Attached NVIDIA RTX PRO 6000 GPUs
Machine type
vCPU count 1
Instance memory (GB)
Maximum Titanium SSD supported (GiB) 2
Physical NIC count
Maximum network bandwidth (Gbps) 3
GPU count
GPU memory 4 (GB GDDR7)
g4-standard-6
6
22
0
1
20
1/8
12
g4-standard-12
12
45
375
1
20
1/4
24
g4-standard-24
24
90
750
1
20
1/2
48
g4-standard-48
48
180
1,500
1
50
1
96
g4-standard-96
96
360
3,000
1
100
2
192
g4-standard-192
192
720
6,000
1
200
4
384
g4-standard-384
384
1,440
12,000
2
400
8
768
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 You can add Titanium SSD disks when creating a G4 instance. For the number of disks
you can attach, see
Machine types that require you to choose a number of Local SSD disks .
3 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
See Network bandwidth .
4 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
G2 machine series
G2 accelerator-optimized
machine types have NVIDIA L4 GPUs
attached and are ideal for cost-optimized inference, graphics-intensive and
high performance computing workloads.
Each G2 machine type also has a default memory and a custom
memory range. The custom memory range defines the amount of memory that
you can allocate to your instance for each machine type. You can also add Local
SSD disks when creating a G2 instance. For the number of disks
you can attach, see
Machine types that require you to choose a number of Local SSD disks .
Attached NVIDIA L4 GPUs
Machine type
vCPU count 1
Default instance memory (GB)
Custom instance memory range (GB)
Max Local SSD supported (GiB)
Maximum network bandwidth (Gbps) 2
GPU count
GPU memory 3 (GB GDDR6)
g2-standard-4
4
16
16 to 32
375
10
1
24
g2-standard-8
8
32
32 to 54
375
16
1
24
g2-standard-12
12
48
48 to 54
375
16
1
24
g2-standard-16
16
64
54 to 64
375
32
1
24
g2-standard-24
24
96
96 to 108
750
32
2
48
g2-standard-32
32
128
96 to 128
375
32
1
24
g2-standard-48
48
192
192 to 216
1,500
50
4
96
g2-standard-96
96
384
384 to 432
3,000
100
8
192
1 A vCPU is implemented as a single hardware hyper-thread on one of
the available CPU platforms .
2 Maximum egress bandwidth cannot exceed the number given. Actual
egress bandwidth depends on the destination IP address and other factors.
For more information about network bandwidth,
see Network bandwidth .
3 GPU memory is the memory on a GPU device that can be used for
temporary storage of data. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
N1 machine series
You can attach the following GPU models to an
N1 machine type
with the exception of the N1 shared-core machine types .
Unlike the machine types in the accelerator-optimized machine series, N1 machine
types don't come with a set number of attached GPUs. Instead, you specify the
number of GPUs to attach when creating the instance.
N1 instances with fewer GPUs limit the maximum number of vCPUs. In general, a
higher number of GPUs lets you create instances with a higher number of vCPUs
and memory.
N1+T4 GPUs
You can attach NVIDIA T4
GPUs to N1 general-purpose instances with the following instance configurations.
Accelerator type
GPU count
GPU memory 1 (GB GDDR6)
vCPU count
Instance memory (GB)
Local SSD supported
nvidia-tesla-t4 or
nvidia-tesla-t4-vws
1
16
1 to 48
1 to 312
Yes
2
32
1 to 48
1 to 312
Yes
4
64
1 to 96
1 to 624
Yes
1 GPU memory is the memory available on a GPU device that you can use
for temporary data storage. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
N1+P4 GPUs
You can attach
NVIDIA P4
GPUs to N1 general-purpose instances with the following instance configurations.
Accelerator type
GPU count
GPU memory 1 (GB GDDR5)
vCPU count
Instance memory (GB)
Local SSD supported 2
nvidia-tesla-p4 or
nvidia-tesla-p4-vws
1
8
1 to 24
1 to 156
Yes
2
16
1 to 48
1 to 312
Yes
4
32
1 to 96
1 to 624
Yes
1 GPU memory is the memory that is available on a GPU device
that you can use for temporary data storage. It is separate from the instance's
memory and is specifically designed to handle the higher bandwidth demands of
your graphics-intensive workloads.
2 For instances with attached NVIDIA P4 GPUs, Local SSD disks
are only supported in zones us-central1-c and
northamerica-northeast1-b .
N1+V100 GPUs
You can attach NVIDIA V100
GPUs to N1 general-purpose instances with the following instance configurations.
Accelerator type
GPU count
GPU memory 1 (GB HBM2)
vCPU count
Instance memory (GB)
Local SSD supported 2
nvidia-tesla-v100
1
16
1 to 12
1 to 78
Yes
2
32
1 to 24
1 to 156
Yes
4
64
1 to 48
1 to 312
Yes
8
128
1 to 96
1 to 624
Yes
1 GPU memory is the memory available on a GPU device that you can use
for temporary data storage. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
2 For instances with attached NVIDIA V100 GPUs, Local SSD disks
aren't supported in us-east1-c .
N1+P100 GPUs
You can attach NVIDIA P100 GPUs
to N1 general-purpose instances with the following instance configurations.
For some NVIDIA P100 GPUs, the maximum CPU and memory available for some
configurations depends on the zone in which the GPU resource runs.
Accelerator type
GPU count
GPU memory 1 (GB HBM2)
Zone
vCPU count
Instance memory (GB)
Local SSD supported
nvidia-tesla-p100 or
nvidia-tesla-p100-vws
1
16
All P100 zones
1 to 16
1 to 104
Yes
2
32
All P100 zones
1 to 32
1 to 208
Yes
4
64
us-east1-c , europe-west1-d , europe-west1-b
1 to 64
1 to 208
Yes
All other P100 zones
1 to 96
1 to 624
Yes
1 GPU memory is the memory available on a GPU device that you can use
for temporary data storage. It is separate from the instance's memory and is
specifically designed to handle the higher bandwidth demands of your
graphics-intensive workloads.
General comparison chart
The following table describes the GPU memory size, feature availability, and
ideal workload types of different GPU models on
Compute Engine.
Machine type (GPU model)
GPU memory
Interconnect
NVIDIA RTX Virtual Workstation (vWS) support
Best used for
A4X Max (GB300)
279 GB HBM3e @ 8 TBps
NVLink Full Mesh @ 1,800 GBps
Large-scale distributed training and inference of MoE LLMs, Recommenders, HPC
A4X (GB200)
186 GB HBM3e @ 8 TBps
NVLink Full Mesh @ 1,800 GBps
Large-scale distributed training and inference of LLMs, Recommenders, HPC
A4 (B200)
180 GB HBM3e @ 8 TBps
NVLink Full Mesh @ 1,800 GBps
Large-scale distributed training and inference of LLMs, Recommenders, HPC
A3 Ultra (H200)
141 GB HBM3e @ 4.8 TBps
NVLink Full Mesh @ 900 GBps
Large models with massive data tables for ML Training, Inference, HPC,
BERT, DLRM
A3 Mega, A3 High, A3 Edge (H100)
80 GB HBM3 @ 3.35 TBps
NVLink Full Mesh @ 900 GBps
Large models with massive data tables for ML Training, Inference, HPC,
BERT, DLRM
A2 Ultra (A100 80GB)
80 GB HBM2e @ 1.9 TBps
NVLink Full Mesh @ 600 GBps
Large models with massive data tables for ML Training, Inference, HPC,
BERT, DLRM
A2 Standard (A100 40GB)
40 GB HBM2 @ 1.6 TBps
NVLink Full Mesh @ 600 GBps
ML Training, Inference, HPC
G4 (RTX PRO 6000)
96 GB GDDR7 with ECC @ 1597 GBps
N/A
ML Inference, Training, Remote Visualization Workstations,
Video Transcoding, HPC
G2 (L4)
24 GB GDDR6 @ 300 GBps
N/A
ML Inference, Training, Remote Visualization Workstations,
Video Transcoding, HPC
N1 (T4)
16 GB GDDR6 @ 320 GBps
N/A
ML Inference, Training, Remote Visualization Workstations, Video Transcoding
N1 (P4)
8 GB GDDR5 @ 192 GBps
N/A
Remote Visualization Workstations, ML Inference, and Video Transcoding
N1 (V100)
16 GB HBM2 @ 900 GBps
NVLink Ring @ 300 GBps
ML Training, Inference, HPC
N1 (P100)
16 GB HBM2 @ 732 GBps
N/A
ML Training, Inference, HPC, Remote Visualization Workstations
To compare GPU pricing for the different GPU models and regions available on
Compute Engine, see GPU pricing .
Tensor Core and standard CUDA core performance
The following sections provide performance metrics for each GPU architecture,
separated into vector or standard CUDA cores and Tensor Core performance.
Tensor Cores : Tensor performance refers to the throughput specialized
Tensor Cores achieve. These are dedicated hardware units (often called
matrix units ) designed specifically to accelerate the large
matrix multiply-accumulate operations that form the backbone of deep
learning, training, and inference.
This type of performance is best for deep learning, large language models
(LLMs), and any workload that can be expressed as dense matrix operations.
Tensor Cores provide significantly higher throughput than CUDA cores for the
same data type.
Vector or standard CUDA cores : Vector performance refers to the
throughput standard CUDA cores achieve. These are general-purpose units
that operate using a single instruction, multiple threads (SIMT) model,
typically performing operations on individual data elements or vectors.
This type of performance is best for general compute, graphics rendering,
and workloads that don't involve dense matrix math.
Blackwell architecture
The A4X Max, A4X, A4, and G4 machine types run on NVIDIA's
Blackwell architecture .
Tensor Core
NVIDIA's Blackwell architecture, used by these machine types,
introduces Tensor Core support for FP4 precision and expanded INT4
capabilities for breakthrough performance in large-model inference.
Machine type (GPU model)
FP64 (TFLOPS)
TF32 (TFLOPS)
Mixed FP16/32 (TFLOPS)
INT8 (TOPS)
INT4 (TOPS)
FP8 (TFLOPS)
FP4 (TFLOPS)
A4X Max (GB300)
1.3
2,500
5,000
330
155
10,000
15,000
A4X (GB200)
40
2,500
5,000
10,000
20,000
10,000
10,000
A4 (B200)
40
1,100
4,500
9,000
-
9,000
-
G4 (RTX PRO 6000)
1.8
140
935.6
1,871.2
-
-
2,200
Additional notes :
For mixed precision training, NVIDIA GB300, GB200, B200, and RTX PRO 6000
also support the bfloat16 data type.
NVIDIA GB300, GB200, B200, and RTX PRO 6000 GPUs support
structural sparsity ,
which can double computational throughput. The performance values in this
section assume dense matrix multiplication—if you use structural sparsity,
performance is doubled.
Standard CUDA cores
The machine types that use the Blackwell architecture
provide high-performance FP64 and FP32 operations for demanding HPC and AI workloads.
For A4X Max, A4X, and A4, FP16 operations are accelerated by Tensor Cores.
For G4, FP16 performance on standard CUDA cores is
included because graphics workloads, such as rendering and visualization, can
benefit from the reduced memory usage and bandwidth requirements of FP16
precision, even when not using Tensor Cores.
Machine type (GPU model)
FP64 (TFLOPS)
FP32 (TFLOPS)
FP16 (TFLOPS)
A4X Max (GB300)
1.3
80
-
A4X (GB200)
40
80
-
A4 (B200)
40
80
-
G4 (RTX PRO 6000)
2
117
117
Hopper, Ada Lovelace, and Ampere architectures
The A3 series uses the
Hopper architecture ,
which introduced specialized engines for transformer models. The A2 series uses
the Ampere architecture ,
providing a balanced foundation for high-performance training and inference.
The G2 series uses the Ada Lovelace architecture ,
which provides versatile and energy-efficient acceleration for AI inference,
video transcoding, and graphics workloads.
Tensor Core
The Hopper, Ada Lovelace, and Ampere architectures, feature advanced Tensor
Cores that accelerate TF32, FP16, FP8, and INT8 data types, providing high
throughput for mixed-precision training and inference.
Machine type (GPU model)
FP64 (TFLOPS)
TF32 (TFLOPS)
Mixed FP16/32 (TFLOPS)
INT8 (TOPS)
INT4 (TOPS)
FP8 (TFLOPS)
A3 Ultra (H200)
67
989
1,979
3,958
-
3,958
A3 Mega/High/Edge (H100)
67
989
1,979
3,958
-
3,958
A2 Ultra (A100 80GB)
19.5
156
312
624
1248
-
A2 Standard (A100 40GB)
19.5
156
312
624
1248
-
G2 (L4)
-
120
242
485
-
485
Additional notes :
For mixed precision training, NVIDIA H200, H100, A100, and L4 also support
the bfloat16 data type.
NVIDIA H200, H100, A100, and L4 GPUs support structural sparsity ,
which can double computational throughput. The performance values in this
section assume dense matrix multiplication—if you use structural sparsity,
performance is doubled.
Standard CUDA cores
The machine types that use the Hopper, Ada Lovelace, and Ampere architectures
provide high-performance FP64 and FP32 operations for demanding HPC and AI workloads.
Machine type (GPU model)
FP64 (TFLOPS)
FP32 (TFLOPS)
A3 Ultra (H200)
34
67
A3 Mega, High, Edge (H100)
34
67
A2 Ultra (A100 80GB)
9.7
19.5
A2 Standard (A100 40GB)
9.7
19.5
G2 (L4)
0.5
30.3
Volta, Pascal, and Turing architectures
The N1 machine types use the following GPU architectures:
Volta (V100)
Pascal (P100 and P4)
Turing (T4)
Tensor Core
NVIDIA's Turing and Volta architectures, available on N1 instances, provide
Tensor Core support for mixed-precision, INT8, and INT4 operations, offering
foundational acceleration for deep learning inference.
These GPUs introduced the first generations of Tensor Cores, used primarily
for FP16 training and INT8 and INT4 quantization in inference. This
table doesn't include the N1 (P4) and N1 (P100) machine types because
they don't have Tensor cores.
Machine type (GPU model)
Mixed FP16/32 (TFLOPS)
INT8 (TOPS)
INT4 (TOPS)
N1 (V100)
125
-
-
N1 (T4)
65
130
260
Standard CUDA cores
The machine types that use the Volta, Pascal, and Turing architectures are
equipped with FP64 and FP32 CUDA cores to accelerate a range of HPC and AI
workloads. For P100 and P4 GPUs, FP16 and INT8 performance is also included
to support deep learning workloads.
Machine type (GPU model)
FP64 (TFLOPS)
FP32 (TFLOPS)
Additional metrics
N1 (V100)
7.8
15.7
-
N1 (P100)
4.7
9.3
FP16: 18.7 TFLOPS
N1 (T4)
0.25
8.1
-
N1 (P4)
0.2
5.5
INT8: 22 TOPS
What's next?
Learn more about Compute Engine GPUs .
Check GPU regions and zones availability .
Review Network bandwidths and GPUs .
View GPU pricing details .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
