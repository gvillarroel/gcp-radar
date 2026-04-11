---
title: "Boost your workstation \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workstations/docs/boost-workstation
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/workstations/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/workstations/docs/boost-workstation
  title: "Boost your workstation \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Workstations
Guides
Send feedback
Boost your workstation
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the workstation configuration parameters that provide support for boosting your workstations. Specifying a boost configuration temporarily allows your workstation to use a more powerful set of resources on demand, including VM type, GPUs, boot disk size, and nested virtualization. For example, a team may need a more powerful workstation with GPUs attached for certain applications. By specifying a boost configuration in the workstation config, workstations created as a part of this config can be started using the boost configuration when running applications requiring GPUs. In the API, these parameters are collectively referred to as the
BoostConfig . BoostConfig .
Creating a boost configuration
To create a workstation config that includes a boost configuration, run the following gcloud CLI command:
gcloud beta workstations configs create WORKSTATION_CONFIG_ID \
--cluster= WORKSTATION_CLUSTER_ID \
--region= LOCATION \
--project= PROJECT_ID \
--boost-config=id= BOOST_CONFIG_ID ,machine-type= MACHINE_TYPE ,accelerators= ACCELERATORS ,enable-nested-virtualization= ENABLE_NESTED_VIRTUALIZATION ,boot-disk-size= BOOT_DISK_SIZE ,pool-size= POOL_SIZE
Replace the following:
PROJECT_ID : the ID of the project that contains the workstation configuration.
LOCATION : the location of the workstation cluster.
WORKSTATION_CLUSTER_ID : the name workstation cluster that contains the workstation configuration.
WORKSTATION_CONFIG_ID : the name of the workstation configuration to be created.
BOOST_CONFIG_ID : The ID to be used for the boost configuration.
MACHINE_TYPE : The type of machine that boosted VM instances will use (for example, e2-standard-4 ).
ENABLE_NESTED_VIRTUALIZATION : Whether to enable nested virtualization.
ACCELERATORS : A list of the type and count of accelerator cards attached to the boost instance.
BOOT_DISK_SIZE : The size of the boot disk for the VM in gigabytes (GB).
POOL_SIZE : The number of boost VMs that the system should keep idle.
See Boost Config API reference for more information about each parameter and their defaults.
Starting a boosted workstation
If the workstation config includes a boost configuration, when starting a workstation, users can choose to use a VM provisioned under the BoostConfig by passing the boost config id in the start request. If no boost config id is provided in the start request, the system will choose a VM from the pool provisioned under the default config.
To boost a specific workstation, run the following gcloud CLI command:
gcloud beta workstations start WORKSTATION_ID \
--boost= BOOST_CONFIG_ID
Replace the following:
WORKSTATION_ID : the name workstation to start.
BOOST_CONFIG_ID : The ID matching the boost configuration to boost up to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
