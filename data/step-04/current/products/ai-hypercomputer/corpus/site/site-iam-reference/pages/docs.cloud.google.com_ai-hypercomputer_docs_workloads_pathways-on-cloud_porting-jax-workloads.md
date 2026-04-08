---
title: "Port JAX workloads to Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/porting-jax-workloads
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/porting-jax-workloads
  title: "Port JAX workloads to Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Port JAX workloads to Pathways | AI Hypercomputer | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
AI Hypercomputer
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Overview
Performance-optimized infrastructure
GPU machines
Networking services
GPU networking overview
Network services for deployments
Networking best practices
Storage services
Open software
OS and Docker images
Choose a consumption option
Cluster management
Overview
Configurations
Terminology
Get started
Cluster creation overview
Recommended configurations
Obtain capacity and quota
Overview
Reserve capacity
View reserved capacity
Quickstart: Create a Slurm cluster with A4 machine type
Deploy infrastructure
Deployment options overview
Compact placement policy and workload policy overview
Deploy AI-optimized VMs and clusters
Create GKE clusters
Create an AI-optimized GKE cluster with default configuration
Create a custom AI-optimized GKE cluster which uses A4X Max
Create a custom AI-optimized GKE cluster which uses A4X
Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra
Create Slurm clusters
Create an instance
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create instances in bulk
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create a managed instance group (MIG)
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Run workloads
Run workloads with Pathways on Cloud
Introduction to Pathways on Cloud
Create a GKE cluster with Pathways
Run a batch workload with Pathways
Run an interactive workload with Pathways
Perform multihost inference using Pathways
Resilient training with Pathways
Port JAX workloads to Pathways
Troubleshoot Pathways on Cloud
Schedule GKE workloads
Schedule workloads with Topology Aware Scheduling (TAS)
Enable node health prediction
AI workload tutorials
Overview
GPU
Run inference with vLLM on GKE
DeepSeek V3.1
DeepSeek V3.2-Speciale
Gemma 3
GPT-OSS
Llama 4
Qwen3
Run fine-tuning
Gemma 3 on a GKE cluster
Gemma 3 on a Slurm cluster
Gemma 3 for vision tasks on GKE
Llama 4 on a Slurm cluster
Mixtral-8x7b on a Slurm cluster
Run training
Qwen2 on a Slurm cluster
TPU
Serve Qwen2-7B with vLLM on TPUs
Serve Qwen2-7B-Instruct with vLLM on TPUs
Serve Qwen3-8B-Base with vLLM on TPUs
Serve Llama-3.1-8B with vLLM on TPUs
Manage infrastructure
Manage GKE clusters
Manage instances and Slurm clusters
View topology of an instance
Manage host events
Host events in instances
Host events in reservations
Report faulty host
Test and optimize
Optimize cluster networking by using NCCL/ g IB
Run NCCL tests
Run NCCL on Compute Engine instances
Run NCCL on GKE clusters that use default configuration
Run NCCL on custom GKE clusters that use A4X Max
Run NCCL on custom GKE clusters that use A4X
Run NCCL on custom GKE clusters that use A4 or A3 Ultra
Run NCCL on Slurm clusters
Collect and understand NCCL logs for troubleshooting
Test workloads with recipes
Benchmarking recipes
Goodput optimization recipes
Test clusters
Monitor
Monitor VMs and Slurm clusters
Manage how Co MMA collects NCCL telemetry
Collective Communication Analyzer (CoMMA)
Enable, disable, and configure CoMMA
Troubleshoot
Known issues
Troubleshoot slow performance
Troubleshoot reporting a faulty host
Troubleshoot CoMMA
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Before you begin
Process index
Hardware type and colocation
PathwaysUtils
Checkpointing
Colocated Python
Data loading
Jax Versioning
Compilation Cache
Profiling Programmatic profile capture
Manual profile capture
XLA Flags
HLO Dump
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Port JAX workloads to Pathways
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Process index
Hardware type and colocation
PathwaysUtils
Checkpointing
Colocated Python
Data loading
Jax Versioning
Compilation Cache
Profiling Programmatic profile capture
Manual profile capture
XLA Flags
HLO Dump
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Due to the distributed nature of JAX with Pathways, some operations might not
scale well due to communication overheads. While Pathways minimizes these
overheads with features like asynchronous dispatch , there are
some things you need to be aware of when you port JAX workloads to Pathways or
scale a JAX with Pathways workload to a large number of accelerators.
Before you begin
Make sure you have:
Installed Kubernetes tools
Installed the gcloud CLI
Enabled the TPU API
Enabled the Google Kubernetes Engine API
Process index
JAX with Pathways treats all devices across your Pathways cluster as local.
This simplifies device management and allows JAX to utilize all available
resources. In practice, this means:
jax.process_index() is always 0 for all devices.
jax.devices() and jax.local_devices() return all TPU devices across the
entire job.
Hardware type and colocation
For best performance, place all Pathways components and the user job in the
same Google Cloud cloud zone. Use a large CPU like the IFRT proxy and resource
manager. We recommend at least a dedicated n2-standard-64 which comes with 64
vCPUs and 256 GB memory.
Pathways Utils
Pathways-utils is a
Python-based GitHub repository providing essential utilities and tools that let
you streamline the deployment and execution of JAX workloads on the Pathways on
Cloud architecture. This package handles the necessary adaptations for the
cloud environment, allowing JAX developers to focus on their core machine
learning workflows with minimal platform-specific configuration. Specifically,
it offers:
A "proxy" JAX backend: this custom backend enables your JAX application to
use the Pathways infrastructure by setting the JAX_PLATFORMS=proxy environment variable.
Integrated Profiling Utilities: profiling capabilities that let you understand
your application's performance. By using standard JAX profiling APIs like
jax.profiler.start_trace and jax.profiler.start_server , you can profile
not only your JAX code but also the underlying Pathways components, providing
a holistic view of execution within the cloud environment.
Distributed Checkpointing with Orbax: a custom Orbax checkpoint handler that
lets you use distributed checkpoints and restore your checkpoints when using
the Orbax library within the Pathways environment. This integration aims to
work without requiring any changes to your existing Orbax checkpointing code
as long as it imports pathwaysutils .
Elastic Training Primitives: provides foundational elastic training primitives
that you can use to build robust and scalable training workflows using Pathways.
These primitives allow your training jobs to dynamically adapt to changes in
available resources, improving efficiency and resilience in cloud environments.
Checkpointing
Orbax is thoroughly tested with Pathways for
distributed checkpointing and restoring with Cloud Storage. When you
call import pathwaysutils; pathwaysutils.initialize() in your train.py , a custom
ArrayHandler is registered that efficiently handles checkpoint operations
through the IFRT
proxy, allowing Pathways workers on accelerators to directly save and restore data.
Colocated Python
Colocated Python
is an open-source JAX API that lets you run user-specified Python code
directly on the TPU or GPU hosts, which is more straightforward in multi-controller
JAX. This enables more compute-intensive tasks, such as data loading and
checkpointing, to avoid data transfer between the client and TPU machines. To
configure your Pathways cluster to run colocated python JAX API, follow the
instructions in the colocated Python README . These instructions explain how to start a
colocated Python sidecar alongside your Pathways workers.
Data loading
During training we repeatedly load batches from a dataset to feed it into the
model. Having an efficient, async data loader which shards the batch across
hosts is important to avoid starving accelerators of work. When running training
with Pathways, the data loader runs on a CPU VM (unlike a TPU VM which is used
on multi-controller setups) and dispatches data to TPU VMs. This incurs a higher
latency in reading data but that is mitigated partially by reading ahead X
number of batches on the CPU host and dispatching the read data asynchronously
to the TPUs. This solution is sufficient when running at small to medium scale.
For optimal performance at scale, we strongly recommend co-locating your input
data pipeline by using colocated Python to run your data pipeline directly on
the accelerators. This eliminates the CPU bottleneck and leverages the TPU's
fast interconnects for data transfer.
You can find a reference implementation of migrating a TFDS based
input pipeline in the RemoteIterator implementation in
multihost_dataloading.py .
This implementation works on both multi-controller JAX and Pathways in a
distributed manner using the colocated Python JAX API.
Jax Versioning
Pathways releases are tightly coupled with JAX versions to ensure compatibility
and stability. To avoid potential issues, verify that your Pathways artifacts
and your JAX version are aligned. Each Pathways release clearly specifies the
compatible JAX versions through a tag of the form jax-<version> .
Compilation Cache
Pathways persistent compilation cache is a feature that allows Pathways servers
to store compiled XLA executables in a persistent location, such as
Cloud Storage, to avoid redundant compilation. This feature is enabled by
default. The location of the cache is passed in as --gcs_scratch_location
flag to the resource manager and Pathways worker containers. To keep associated
storage costs to a minimum, the cache attaches a lifecycle policy to the
Cloud Storage location. There is a limit of 50 policies per
Cloud Storage bucket. Therefore, we recommend using a common
Cloud Storage location across all workloads.
This cache is similar to the JAX compilation cache
which is disabled by pathwaysutils.initialize() for Pathways workloads.
The following Cloud Storage permissions are required for the compilation cache:
storage.buckets.get : To retrieve bucket metadata.
storage.buckets.update : Essential for Pathways to set up object
lifecycle policies to enforce TTL for cache eviction.
storage.objects.list : To list existing cache objects within the bucket.
storage.objects.create : To write new compiled executables to the cache.
storage.objects.get : To read cached executables from the bucket.
Profiling
You can use the JAX profiler to generate traces of a JAX program. There are two
common ways supported with Pathways:
Programmatic
Programmatically capture profiles from your JAX code
Manual
Capturing profiles on demand after starting the profiler server from your
JAX code
In both cases, the profiles are written to a Cloud Storage bucket.
There will be multiple trace files created in the Cloud Storage bucket
potentially under different timestamp folders, for example:
Main Python process which invoked the trace (typically your notebook VM):
<jax-client-vm-name>.xplane.pb
Pathways IFRT proxy: client.<var>PATHWAYS_HEAD_NODE_NAME</var>.xplane.pb
Pathways Resource manager: server.*<var>PATHWAYS_HEAD_NODE_NAME</var>.xplane.pb
Pathways worker(s): server.*<tpu-node-name>.xplane.pb
These trace files can be analyzed with TensorBoard by running the following
command. For more information about TensorBoard and all of its profiling tools,
see Optimize TensorFlow performance using the Profiler .
# verify trace files are present
gsutil ls -l -r gs:// BUCKET / PREFIX
# View on tensorboard
tensorboard --logdir = gs:// BUCKET / PREFIX
Replace the following:
BUCKET : a Cloud Storage bucket to store the trace files
PREFIX : a path within your Cloud Storage bucket to store the trace files
Programmatic profile capture
Capture a profile from inside your code. The profiles are saved inside
gs://<bucket>/<prefix> under a timestamp directory
import jax
import pathwaysutils
pathwaysutils . initialize ()
jax . profiler . start_trace ( "gs://BUCKET/PREFIX" )
# Run the operations to be profiled
key = jax . random . key ( 0 )
x = jax . random . normal ( key , ( 5000 , 5000 ))
y = x @ x
y . block_until_ready ()
jax . profiler . stop_trace ()
Manual profile capture
To manually capture profile information, you must start the profiler server from
your Python code:
import jax
import pathwaysutils
pathwaysutils . initialize ()
jax . profiler . start_server ( jax_profiler_port )
# Your JAX code
jax . profiler . stop_server () # this is functionally a no-op
While the profiler server is running, you can capture a profile and export the
data to the target Cloud Storage location:
export DURATION_IN_SECS = 6
export OUTPUT_DIR = gs://<var>BUCKET</var>/<var>PREFIX</var>
curl -d "{\"duration_ms\":\" ${ DURATION_IN_SECS } * 1000 }}\", \"repository_path\":\" ${ OUTPUT_DIR } \"}" -H "Content-Type: application/json" -X POST http://localhost:<jax_profiler_port
You can find timing information for IFRT proxy client methods like Compile and
Execute within your program's trace. These events, which detail the
interactions with the IFRT Proxy gRPC server during compilation and execution,
appear on the thread named GrpcClientSessionUserFuturesWorkQueue . By examining
this thread in your trace, you can gain insights into the performance of these
operations.
XLA Flags
When you use Pathways, you need to set the XLA flags in the pathways-proxy
container. You can do so in using XPK or the PathwaysJob API.
When using XPK, set XLA flags like the following:
--custom-pathways-proxy-server-args = "--xla_flag_1=value1 --xla_flag_2=value2"
When using PathwaysJob API, set XLA flags like the following:
apiVersion : pathways-job.pathways.domain/v1
kind : PathwaysJob
metadata :
name : pathways- USER
spec :
customComponents :
- componentType : proxy_server
customFlags :
- --xla_flag_1= value1
- --xla_flag_2= value2
Replace the following:
USER : your Google Cloud username
value[n] : the XLA flags you want to set
HLO Dump
In order to deep dive into High Level Optimizer (HLO) inputs that are given to
the XLA compiler, you can configure Pathways to dump the HLO to a specified
Cloud Storage location as follows:
apiVersion : pathways-job.pathways.domain/v1
kind : PathwaysJob
metadata :
name : pathways- USER
spec :
customComponents :
- componentType : proxy_server
customEnv :
- name : XLA_FLAGS
value : "--xla_dump_to=gs:// your-bucket / your-desired-prefix /"
What's next
Create a GKE Cluster with Pathways
Multihost inference with Pathways
Batch workloads with Pathways
Pathways interactive mode
Resilient training with Pathways
Troubleshooting Pathways
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
