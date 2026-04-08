---
title: "Resilient training with Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/resilient-training
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/resilient-training
  title: "Resilient training with Pathways \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Resilient training with Pathways | AI Hypercomputer | Google Cloud Documentation
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
Suspend-resume
Elastic training Implement an elastic handler
Update your training loop
Configure the elastic manager
Snapshots
Reduce sharding
Increase sharding
Hot-swap
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Resilient training with Pathways
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Suspend-resume
Elastic training Implement an elastic handler
Update your training loop
Configure the elastic manager
Snapshots
Reduce sharding
Increase sharding
Hot-swap
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Pathways provides resiliency benefits in the following ways:
Suspend-Resume : tolerance in face of planned interruptions like
preemption notices without needing the user to write any custom preemption
handling code.
Elastic Training : tolerance in face of unplanned hardware failures
without causing the client to crash but requiring users to write model
specific recovery code.
Before you begin
Make sure you have:
Installed XPK
Installed Kubernetes tools
Installed the gcloud CLI
Enabled the TPU API
Enabled the GKE API
Suspend-resume
Typically, GKE sends a preemption notice to an accelerator pod,
before the pod is preempted. Pathways preemption tolerance is enabled by default
on all cloud deployments and Pathways accelerator jobs listen for these notices.
When a preemption notice arrives, Pathways first determines whether the current
workload is restorable - whether Pathways can transparently save and restore the
workload. If so, then it attempts to transparently suspend your ML workload by
writing out its current state to persistent storage such as Cloud Storage
before GKE evicts your accelerator jobs. When GKE
reschedules your jobs later, Pathways resumes your ML workload by reading
back its persisted state.
If the workload is not restorable, Pathways shuts down the accelerator
job and forwards the failure to your job if Elastic training
is configured. If Elastic training is not configured, GKE
restarts the entire workload based on the JobSet restart policy.
Typical ML workloads defined using JAX rely on stateless Pathways XLA components
which are restorable using a high bandwidth memory (HBM) snapshot. Certain ML
workloads such as those defined using the JAX colocated python API
rely on stateful Pathways components; these are not restorable.
Elastic training
Elastic training allows your training job to continue even when hardware
failures occur. This is achieved through a combination of Pathways system
capabilities and user-defined model recovery logic:
Detection of failure : When a hardware failure happens (for example, a TPU
worker crashes), the Pathways system detects this and notifies the user's
training job through an exception the next time data that was located on that
hardware is accessed. This notification doesn't crash your workload; it allows
your code to handle the notification and reconfigure your resources to either
continue processing or exit gracefully.
User-defined elasticity handler : User's model code needs to be able to
handle this exception. This is what makes it "model-specific recovery".
Snapshotting : The most common approach is to periodically save snapshots
of your model's state. When a failure occurs, you can load from the most recent
snapshot to resume training.
Reconfiguration : You will likely need to reconfigure your training job to
adjust for the number of available slices. For example, if one slice stops
working, you might reduce the number of active slices by one until a
replacement is available. For more information, see Elastic Handler .
Data/Computation graph updates : Your code needs to handle any changes
in the number of devices available to your computation by re-creating the
computation graph as needed. This might involve re-partitioning data or
re-compiling your model.
Pathways' role in recovery : Pathways provides the primitives to support
user defined reconfiguration:
Slice replacement : If a failed slice is replaced, the client can be
informed once the new slice is available. Your code can then reconfigure to
use this new slice.
Transparent recovery : Pathways handles the lower-level details of the
recovery, like re-establishing connections to the healthy portions of the
cluster.
Utilities in pathwaysutils : A set of Pathways utilities defined in
pathways-utils .
Implement an elastic handler
Most of the code you will have to write will be in a user-defined elastic
handler. This handler reacts to elastic events (such as a TPU slice becoming
unavailable) by re-creating the mesh and reinitializing the training loop.
Each workload is unique. The complexity of the elastic handler may scale with
the complexity of the workload. The inputs and outputs of the handler should be
the minimum arguments and return values needed to reinitialize the train loop.
def elastic_handler ( elastic_utils , * args , ** kwargs ):
mesh = initialize_mesh ( ** kwargs [ "mesh_kwargs" ])
initial_state , initial_step , jitted_train_step , other_variables =
initialize_training_loop ( mesh , ** kwargs [ "initialize_training_loop_kwargs" ])
step , snapshot = elastic_utils . get_next_snapshot ()
state = initial_state . replace ( ** snapshot )
return state , step , mesh , jitted_train_step , other_variables
Update your training loop
You need to make the following changes to your training loop:
Create an elastic manager
Wrap your training loop inside a try-except blocks that handles jax.errors.JaxRuntimeError s
Within your jax.errors.JaxRuntimeError handler, call maybe_reshard_down .
The elastic manager will reshard down if the error is related to an elastic
event or otherwise reraise it.
Call maybe_snapshot and maybe_reshard_up at the end of the training loop
import pathwaysutils
from pathwaysutils.elastic import manager
pathwaysutils . initialize ()
def initialize_mesh ( ** kwargs ):
...
def initialize_training_loop ( ** kwargs ):
...
def train_loop (
final_step ,
elastic_manager ,
mesh_kwargs ,
initialize_training_loop_kwargs ,
):
mesh = initialize_mesh ( ** mesh_kwargs )
initial_state , initial_step , jitted_train_step , other_variables =
initialize_training_loop ( mesh , ** initialize_training_loop_kwargs )
step = initial_step
while step < final_step :
try :
state = jitted_train_step ( state )
elastic_manager . maybe_snapshot ( step = step , snapshot = state )
handler_returns = elastic_manager . maybe_reshard_up (
step = step ,
snapshot = state ,
elastic_handler = elastic_handler ,
handler_args = (),
handler_kwargs = dict (
mesh_kwargs = mesh_kwargs ,
initialize_training_loop_kwargs = initialize_training_loop_kwargs ,
),
)
if handler_returns :
state , step , mesh , jitted_train_step , other_variables = handler_returns
step += 1
except jax . errors . JaxRuntimeError as error :
handler_returns = elastic_manager . maybe_reshard_down (
error = error ,
elastic_handler = elastic_handler ,
handler_args = (),
handler_kwargs = dict (
mesh_kwargs = mesh_kwargs ,
initialize_training_loop_kwargs = initialize_training_loop_kwargs ,
),
)
if handler_returns :
state , step , mesh , jitted_train_step , other_variables = handler_returns
return state
def main ():
elastic_manager = manager . Manager (
devices = jax . devices (),
snapshot_period = 10 ,
snapshot_buffer_size = 1 ,
reshard_check_period = 5 ,
max_elastic_down_event_count = 10 ,
max_reshard_retry_count = 3 ,
)
train_loop ( 100 , elastic_manager , {}, {})
Configure the elastic manager
The elastic manager can be configured in a few different ways. The frequency of
snapshotting is determined by the snapshot period. The snapshot period effects
the average number of steps lost due to an elastic event. The reshard check
period determines how often your training loop will poll for slice availability.
The max_elastic_down_event_count lets you set the number of elastic events due
to slice loss your training loop will support. The max_reshard_retry_count
specifies the number of times the elastic manager should retry resharding. The
manager is a singleton object and should be created only once.
Snapshots
Based on the elastic manager configuration, the function may snapshot data onto
host memory that will be available to use by your elastic handler during an
elastic event.
Reduce sharding
After catching a jax.errors.JaxRuntimeError , Pathways will check if the error
is due to an elastic event due to a lost slice. If so, it will call the elastic
handler in a loop until success or the maximum retry attempts. If the error is not
due to an elastic event, the error will be raised again. The return values of
the elastic handler are passed through to the caller.
Increase sharding
Based on the elastic manager configuration and if there are unavailable slices,
Pathways will check if additional slices have become available. If so, it will
immediately save a snapshot (if a pre-existing snapshot for the current step was
not already taken) and call the elastic handler in a loop until success or the
maximum number of retry attempts is reached. If re-sharding occurs, the return
values of the elastic handler are passed through to the caller. Otherwise,
None is returned.
Hot-swap
Hot-Swap refers to a feature of the GKE JobSet API where a higher-priority job
can quickly take over resources from a lower-priority job, minimizing downtime
and ensuring faster recovery.
When a JobSet is created, GKE schedules the workload across multiple slices, as
specified in the JobSet configuration. If a hardware failure occurs on one or
more slices, the affected Pods are marked as failed. When rescheduling this
Jobset, if you have elected to keep a spare slice in your GKE cluster which
could be utilized for a lower priority Job, the JobSet system will remap the
workload of the failed slice of the higher-priority job onto the spare slice
being utilized by the lower priority job within the same GKE cluster. This
remapping typically takes less than a minute.
Upon JobSet restart, hot-swap can occur in the following situations:
Default Mode : If spare, idle TPU slices are available within the same
cluster, the Kubernetes scheduler will prioritize scheduling the restarted
jobs onto these slices rather than waiting for the failed slices to be
repaired. This provides faster recovery.
Heterogeneous Workloads : In clusters running multiple workloads with
a configured Kubernetes PriorityClass, a restarted JobSet can trigger a hot
swap. If the restarted job's affinity matches a lower-priority job's
resources, Kubernetes preempts the lower-priority job, allowing the
higher-priority job to start immediately. For example, you can configure your
Pathways worker pods with different priorities using PriorityClass .
To use priorities in your cluster, define a priority class, for example:
kind : PriorityClass
metadata :
name : high-prior-job
value : 2000
globalDefault : false
description : "This priority class should be used for high priority job."
Apply this YAML to your GKE cluster:
kubectl apply -f high-prior-job.yaml
Next, attach the new priority class to your Pathways worker job by adding the
following text to the podspec of your pathways-worker Pod.
priorityClassName: high-prior-job
What's next
Create a GKE Cluster with Pathways
Run a batch workload with Pathways
Run an interactive workload with Pathways
Perform multihost inference using Pathways
Port JAX workloads to Pathways
Troubleshoot Pathways on cloud
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
