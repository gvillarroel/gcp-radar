---
title: "Troubleshoot Pathways on cloud \_|\_ AI Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/troubleshooting-pathways
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/troubleshooting-pathways
  title: "Troubleshoot Pathways on cloud \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot Pathways on cloud | AI Hypercomputer | Google Cloud Documentation
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
Viewing logs
Monitoring Health monitoring
Metrics collection
Debugging common errors
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Troubleshoot Pathways on cloud
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Viewing logs
Monitoring Health monitoring
Metrics collection
Debugging common errors
What's next
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Before you begin
Installed XPK
Installed Kubernetes tools
Installed the gcloud CLI
Enabled the TPU API
Enabled the Google Kubernetes Engine API
Created a Google Kubernetes Engine cluster
This document explains how to troubleshoot your Pathways workloads.
Viewing logs
In the Cloud Logging Logs Explorer ,
use the following query adjusted to match your project, region, cluster, and
workload.
See more code actions.
Light code theme
Dark code theme
resource.type="k8s_container"
resource.labels.project_id=" PROJECT "
resource.labels.location=" LOCATION "
resource.labels.cluster_name=" CLUSTER "
resource.labels.namespace_name="default"
resource.labels.pod_name:" WORKLOAD_NAME "
Replace the following:
PROJECT : your Google Cloud project ID
LOCATION : the region or zone where you created your GKE cluster
CLUSTER : the name of your GKE cluster
WORKLOAD_NAME : the name of your workload when using XPK or the JobSet name
when using kubectl
This query will match multiple Pathways Kubernetes containers with names like
pathways-rm , pathways-proxy , pathways-worker . You can narrow down
which contain is causing a problem by adding a filter on container name like
resource.labels.container_name:"<container_name>"
Monitoring
Health monitoring
You can monitor the health of various Pathways components by looking for entries
in the container logs, for example:
pathways-proxy is ready to serve new connection requests when the following
log is written:
kubectl logs ${ HEAD_POD_NAME } --container pathways-proxy
...
I1101 04 :51:41.967764 1 proxy_server.cc:125 ] IFRT proxy server started with status OK
pathways-rm is ready to serve new connection requests when the following log
is written:
kubectl logs $HEAD_POD_NAME --container pathways-rm
...
I1101 04 :50:41.967764 1 server_lib.cc:1473 ] Pathways Server serving on [ :: ] :29001
To verify all TPUs registered to the Pathways Resource Manager are ready, you
can look for ***<num slices>/<num slices> Pathways Slices Now Ready *** in the
pathways-rm container logs:
kubectl logs $HEAD_POD_NAME --container pathways-rm
...
I1101 04 :52:41.967764 1 multi_job_allocator.cc:1063 ] *** 2 /2 Pathways Slices Now Ready ***
The Pathways client can make connections to the IFRT Proxy server as long as
the proxy server is ready even if not all slices are ready. Your job works
with virtual slices until the slice becomes ready. Virtual slices allow your
code to run when TPUs are unavailable.
pathways-worker is ready to serve new connection requests when the following
log is written:
kubectl logs $WORKER_POD_NAME --container pathways-worker
...
I1101 04 :50:41.967764 1 server_lib.cc:1473 ] Pathways Server serving on [ :: ] :29001
Metrics collection
Pathways can write low level system metrics to Cloud Monitoring for debugging.
The metrics include:
DCN Transfer Latency
Collective Latency
Host to Device Transfer Latency
Device to Host transfer Latency
You can find the metrics on the Cloud Monitoring dashboard of the {gcp_name} project
where the GKE cluster is running.
To monitor these metrics in Metrics Explorer:
Navigate to the Metrics Explorer
Filter by the name of the metric using the Select a metric field
Filter by your workload name and time range by selecting Add Filter and
filter by pod_name
Choose an appropriate aggregation type based on the metric and the
workloads you are monitoring.
DCN transfer latency
This is a Megascale XLA (MXLA) metric that measures the cumulative distribution
of network-transfer latencies for multislice traffic. Latency measurement starts
when a request for data to be transferred over the DCN is issued and ends when an
acknowledgement is received that the transfer of data has completed. To monitor
this metric, filter by the dcn_transfer_latencies metric name.
Collective latency
This is a MXLA metric that measures the cumulative distribution of end to end
collective latency for multislice traffic. Latency measurement starts when a
request for a collective is issued and ends when an acknowledgement is received
that the data transferhas completed. To monitor this metric, filter by the
collective_e2e_latency metric name.
Host to device transfer latency
This is a MXLA metric that measures the cumulative distribution of host to device
transfer latencies for multislice traffic. Latency measurement starts when a
request for data to be transferred over the DCN is issued and ends when an
acknowledgement is received that the data transfer has completed. To monitor
this metric, filter by host_to_device_transfer_latencies metric name.
Device to host transfer latency
This is a MXLA metric that measures the cumulative distribution of device to
host transfer latencies for multislice traffic. Latency measurement starts when
a request for data to be transferred over the DCN is issued and ends when an
acknowledgement is received that the data transfer has completed. To monitor
this metric, filter by the device_to_host_transfer_latencies metric name.
Debugging common errors
Unable to hash accelerator config warnings
The following messages are only warnings and don't affect the performance of
your JAX code.
INFO:jax._src.cache_key:get (_hash_accelerator_config): unable to hash accelerator config, falling back to hashing devices + platform: UNIMPLEMENTED: GetTopologyForDevices is not supported for the IFRT proxy client. (type <class 'jaxlib.xla_extension.XlaRuntimeError'>)
Permission logging.logEntries.create denied on resource
If you see the following error, ensure the Compute Engine service
account used by Vertex AI Workbench has permissions to write log entries
to the Google Cloud logging system.
INFO:absl:Created 'ArrayHandler' with primary_host=0, replica-id=0
WARNING:absl:pathwaysutils: Detected Pathways-on-Cloud backend. Applying changes.
Failed to submit 1 logs.
Traceback (most recent call last):
File "/opt/conda/lib/python3.10/site-packages/google/api_core/grpc_helpers.py", line 65, in error_remapped_callable
return callable_(**args, **kwargs)
File "/opt/conda/lib/python3.10/site-packages/grpc/_channel.py", line 1181, in __call__
return _end_unary_response_blocking(state, call, False, None)
File "/opt/conda/lib/python3.10/site-packages/google/api_core/grpc_helpers.py", line 1006, in _end_unary_response_blocking
raise _InactiveRpcError(state) # pytype: disable-not-instantiable
grpc._channel._InactiveRpcError: <_InactiveRpcError of RPC that terminated with:
status = StatusCode.PERMISSION_DENIED
details = "Permission 'logging.logEntries.create' denied on resource (or it may not exist)."
debug_error_string = "UNKNOWN:Error received from peer ipv4:216.239.34.174:443 {created_time:"2024-10-03T20:30:44.820425276+00.00", grpc_status:7, grpc_message:"Permission \'logging.logEntries.create\' denied on resource (or it may not exist)."}"
>
To fix this issue, add the Logs Writer
role to the Compute Engine service account.
Not able to connect to the IFRT proxy server
If you see this error, your IFRT proxy client is not able to connect to the IFRT
proxy server.
Ensure your VPC network is configured correctly
Ensure your firewall is configured to allow the connection
Ensure your Pathways cluster has been provisioned
Check for start up error messages
When your first JAX command that sends an IFRT command to the Pathways cluster
tries to execute, it will stop responding for about a minute and then display a
RuntimeError like the following:
RuntimeError: Unable to initialize backend 'proxy': UNAVAILABLE: Unable to establish connection to ifrt_proxy server, please check provided address example-workload-proxy-0-0.example-workload.default.svc.example-cluster-domain.:38676'; detailed error: DNS resolution failed (set JAX_PLATFORMS='' to automatically choose an available backend)
There is an existing connection to the Pathways cluster
A Pathways cluster can only maintain a session with one client at a time. If two
separate notebooks attempt to connect to the same Pathways cluster, one will be
able to connect and the other will show the following errors.
INFO:absl:Created ArrayHandler with primary_host=0, replica_id=0
WARNING:absl:pathwaysutils: Detected Pathways-on-Cloud backend. Applying changes.
E0927 21:19:52.919607 37624 rpc_helper.cc:56] Connection to IFRT proxy server was terminated: CANCELLED: Cancelled
E0927 21:20:03.467547 37719 rpc_helper.cc:56] Connection to IFRT proxy server was terminated: CANCELLED: Cancelled
E0927 21:20:14.011645 37807 rpc_helper.cc:56] Connection to IFRT proxy server was terminated: CANCELLED: Cancelled
E0927 21:20:24.557955 37924 rpc_helper.cc:56] Connection to IFRT proxy server was terminated: CANCELLED: Cancelled
---------------------------------------------------------------------------
XlaRuntimeError Traceback (most recent call last)
File /opt/conda/lib/python3.10/site-packages/jax/_src/xla_bridge.py:887, in backends()
885 continue
--> 887 backend = _init_backend(platform)
888 _backends[platform] = backend
File /opt/conda/lib/python3.10/site-packages/jax/_src/xla_bridge.py:973, in _init_backend(platform)
972 logger.debug("Initializing backend '%s'", platform)
--> 973 backend = registration.factory()
974 # TODO: consider raising more descriptive errors directly from backend
975 # factories instead of returning None.
File /opt/conda/lib/python3.10/site-packages/pathwaysutils/proxy_backend.py:24, in register_backend_factory.<locals>.<lambda>()
21 def register_backend_factory():
22 xla_bridge.register_backend_factory(
23 "proxy",
---> 24 lambda: ifrt_proxy.get_client(
25 jax.config.read("jax_backend_target"),
26 ifrt_proxy.ClientConnectionOptions(),
27 ),
28 priority=-1,
29 )
XlaRuntimeError: UNAVAILABLE: Unable to establish connection to ifrt_proxy server, please check provided address example-workload-proxy-0-0.example-workload.default.svc.example-cluster-domain.:38676'; detailed error: Connection to IFRT proxy server was terminated: CANCELLED: Cancelled
During handling of the above exception, another exception occurred:
RuntimeError Traceback (most recent call last)
Cell In[2], line 4
1 import pathwaysutils
3 import jax
----> 4 print(jax.devices())
File /opt/conda/lib/python3.10/site-packages/jax/_src/xla_bridge.py:1085, in devices(backend)
1060 def devices(
1061 backend: str | xla_client.Client | None = None
1062 ) -> list[xla_client.Device]:
1063 """Returns a list of all devices for a given backend.
1064
1065 .. currentmodule:: jaxlib.xla_extension
(...)
1083 List of Device subclasses.
1084 """
-> 1085 return get_backend(backend).devices()
File /opt/conda/lib/python3.10/site-packages/jax/_src/xla_bridge.py:1019, in get_backend(platform)
1015 @lru_cache(maxsize=None) # don't use util.memoize because there is no X64 dependence.
1016 def get_backend(
1017 platform: None | str | xla_client.Client = None
1018 ) -> xla_client.Client:
-> 1019 return _get_backend_uncached(platform)
File /opt/conda/lib/python3.10/site-packages/jax/_src/xla_bridge.py:998, in _get_backend_uncached(platform)
994 return platform
996 platform = (platform or _XLA_BACKEND.value or _PLATFORM_NAME.value or None)
--> 998 bs = backends()
999 if platform is not None:
1000 platform = canonicalize_platform(platform)
File /opt/conda/lib/python3.10/site-packages/jax/_src/xla_bridge.py:903, in backends()
901 else:
902 err_msg += " (you may need to uninstall the failing plugin package, or set JAX_PLATFORMS=cpu to skip this backend.)"
--> 903 raise RuntimeError(err_msg)
905 assert _default_backend is not None
906 if not config.jax_platforms.value:
RuntimeError: Unable to initialize backend 'proxy': UNAVAILABLE: Unable to establish connection to ifrt_proxy server, please check provided address 'example-workload-proxy-0-0.example-workload.default.svc.example-cluster-domain.:38676'; detailed error: Connection to IFRT proxy server was terminated: CANCELLED: Cancelled (set JAX_PLATFORMS='' to automatically choose an available backend)
Once the original client disconnects, the second client will be able to connect.
After an unexpected disconnection, you may need to restart the Pathways cluster
to enable other clients to connect.
LocalProxy. init () got an unexpected keyword argument 'unbound_message'
If you see this error after importing pathwaysutils , check if there are
outdated versions of Flask or Werkzeug installed in your environment:
pip3 list --outdated ( replacing pip with pip3 as needed )
If Flask or Werkzeug is listed, consider upgrading them with the caveat that
doing so may break other packages or dependencies in your project:
pip install flask Werkzeug --upgrade ()
Internal error from proxy server
"Internal error from proxy server during Array::IsDeleted(): UNAVAILABLE:Connection to IFRT proxy server was terminated: FAILED_PRECONDITION:
GrpcClientSession: writes no longer allowed."
This error indicates that the IFRT Proxy server has disconnected from the client.
This can be fixed by restarting your client. For notebooks, you can restart the
notebook kernel and rerun your notebook.
SIGTERMS and HBM OOM
A SIGTERM found in the logs associated with a RESOURCE_EXHAUSTED error may
indicate an HBM OOM, in this case, you can reduce the amount HBM memory used in
your JAX code.
INVALID_ARGUMENT
"INVALID_ARGUMENT : Permanent error, with a last message of Lifecycle
matches_prefix cannot specify more than 50 prefixes per config.; Error while
initializing persistent cache storage Cloud Storage"
This error occurs if the Cloud Storage bucket passed in to the --pathways_gcs_location
flag has reached the maximum lifecycle policy limit. If this occurs,
clean up Cloud Storage lifecycle policies that are no longer being used.
Permanent error
Permanent error, with a last message of The specified bucket does not exist.; Error while initializing persistent cache storage gcs
This error is printed on the Resource Manager or Pathways workers when you
provide an invalid Cloud Storage location to pathways containers.
Error response from daemon
Error response from daemon: dockerfile parse error line 16: Unknown flag: exclude
This is due to an old version of docker, upgrade your docker version.
IFRT Proxy client and server failed to agree
IFRT Proxy client and server failed to agree on the protocol version; supported versions: client = [1, 1], server = [3, 14]
This indicates that an older version of MaxText is being used, please ensure that you rebuild the latest MaxText image.
What's next
Multihost inference with Pathways
Batch workloads with Pathways
Pathways interactive mode
Porting JAX workloads to Pathways
Resilient training with Pathways
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
