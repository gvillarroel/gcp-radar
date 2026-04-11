---
title: "MachineShape \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/MachineShape
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/capacity-planner/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/capacity-planner/docs/reference/rest/v1beta/MachineShape
  title: "MachineShape \_|\_ Capacity Planner \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Capacity Planner
Reference
Send feedback
MachineShape
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Machine shape details Next : 13
JSON representation
{
"machineFamily" : string ,
"machineType" : string ,
"machineShape" : string ,
"cpuCores" : number ,
"gpuType" : string ,
"gpuComputeType" : string ,
"gpuCores" : string ,
"localSsdPartitions" : string ,
"localSsdGb" : number ,
"memoryGb" : number ,
"localSsdInterface" : string ,
"minCpuPlatform" : string
}
Fields
machineFamily
string
Optional. The VM family.
machineType
string
Optional. The characteristics of the sampled VM expressed as a string.
machineShape
string
Optional. The customer visible string representing the type of VM.
cpuCores
number
Optional. Number of CPU cores per VM.
gpuType
string
Optional. The type of GPU with the VM.
gpuComputeType
string
Optional. The GPU name recognized by Compute Engine APIs.
gpuCores
string ( int64 format)
Optional. The number of GPU cores per VM.
localSsdPartitions
string ( int64 format)
Optional. The number of local SSD partitions per VM.
localSsdGb
number
Optional. Total amount of local SSD storage.
memoryGb
number
Optional. Total amount of memory with the VM.
localSsdInterface
string
Optional. The local SSD interface used such as nvme or scsi
minCpuPlatform
string
Optional. The Min-cpu platform used such as icelake
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-29 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-29 UTC."],[],[]]
