---
title: "Class Accelerator (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.Accelerator
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/batch/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/batch/latest/google.cloud.batch_v1.types.AllocationPolicy.Accelerator
  title: "Class Accelerator (0.20.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Accelerator (0.20.0)
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
Accelerator ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Accelerator describes Compute Engine accelerators to be
attached to the VM.
Attributes
Name
Description
type_
str
The accelerator type. For example, "nvidia-tesla-t4". See
gcloud compute accelerator-types list .
count
int
The number of accelerators of this type.
install_gpu_drivers
bool
Deprecated: please use instances[0].install_gpu_drivers
instead.
driver_version
str
Optional. The NVIDIA GPU driver version that
should be installed for this type.
You can define the specific driver version such
as "470.103.01", following the driver version
requirements in
https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#minimum-driver.
Batch will install the specific accelerator
driver if qualified.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
