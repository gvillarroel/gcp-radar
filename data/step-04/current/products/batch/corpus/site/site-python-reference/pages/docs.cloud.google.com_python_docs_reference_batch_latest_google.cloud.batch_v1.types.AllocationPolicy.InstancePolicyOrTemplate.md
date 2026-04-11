---
title: "Class InstancePolicyOrTemplate (0.20.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.InstancePolicyOrTemplate
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/batch/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.InstancePolicyOrTemplate
  title: "Class InstancePolicyOrTemplate (0.20.0) \_|\_ Python client libraries \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class InstancePolicyOrTemplate (0.20.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
0.20.0 (latest)
0.19.0
0.18.0
0.17.37
0.16.0
0.15.0
0.14.0
0.13.0
0.12.0
0.11.0
0.10.0
0.9.0
0.8.1
0.7.0
0.6.0
0.5.0
0.4.1
0.3.2
0.2.0
0.1.2
InstancePolicyOrTemplate ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
InstancePolicyOrTemplate lets you define the type of
resources to use for this job either with an InstancePolicy or
an instance template. If undefined, Batch picks the type of VM
to use and doesn't include optional VM resources such as GPUs
and extra disks.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
policy
google.cloud.batch_v1.types.AllocationPolicy.InstancePolicy
InstancePolicy.
This field is a member of oneof _ policy_template .
instance_template
str
Name of an instance template used to create VMs. Named the
field as 'instance_template' instead of 'template' to avoid
C++ keyword conflict.
Batch only supports global instance templates from the same
project as the job. You can specify the global instance
template as a full or partial URL.
This field is a member of oneof _ policy_template .
install_gpu_drivers
bool
Set this field true if you want Batch to help fetch drivers
from a third party location and install them for GPUs
specified in policy.accelerators or
instance_template on your behalf. Default is false.
For Container-Optimized Image cases, Batch will install the
accelerator driver following milestones of
https://cloud.google.com/container-optimized-os/docs/release-notes.
For non Container-Optimized Image cases, following
https://github.com/GoogleCloudPlatform/compute-gpu-installation/blob/main/linux/install_gpu_driver.py.
install_ops_agent
bool
Optional. Set this field true if you want
Batch to install Ops Agent on your behalf.
Default is false.
block_project_ssh_keys
bool
Optional. Set this field to true if you want Batch to
block project-level SSH keys from accessing this job's VMs.
Alternatively, you can configure the job to specify a VM
instance template that blocks project-level SSH keys. In
either case, Batch blocks project-level SSH keys while
creating the VMs for this job.
Batch allows project-level SSH keys for a job's VMs only if
all the following are true:
- This field is undefined or set to false .
- The job's VM instance template (if any) doesn't block
project-level SSH keys.
Notably, you can override this behavior by manually updating
a VM to block or allow project-level SSH keys. For more
information about blocking project-level SSH keys, see the
Compute Engine documentation:
https://cloud.google.com/compute/docs/connect/restrict-ssh-keys#block-keys
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
