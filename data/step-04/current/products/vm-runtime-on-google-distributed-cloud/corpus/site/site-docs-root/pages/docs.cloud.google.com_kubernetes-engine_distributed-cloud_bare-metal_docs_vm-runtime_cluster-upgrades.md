---
title: "Upgrade VM Runtime on GDC from a Preview version \_|\_ Google Distributed\
  \ Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/cluster-upgrades
  title: "Upgrade VM Runtime on GDC from a Preview version \_|\_ Google Distributed\
    \ Cloud (software only) for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Upgrade VM Runtime on GDC from a Preview version
Stay organized with collections
Save and categorize content based on your preferences.
VM Runtime on GDC is released for General Availability (GA) with the
release of Google Distributed Cloud version 1.12.0. All earlier releases of
VM Runtime on GDC are in Preview .
You can't upgrade from a Preview version to the GA version without first
deleting your VMs and disabling VM Runtime on GDC. Once you've upgraded
your clusters, then you can enable VM Runtime on GDC again and recreate
your VMs.
To upgrade from a pre-GA version of VM Runtime on GDC:
Delete all VMs and their resources from the cluster.
Note: If you have version 1.11 or later clusters, you can delete VMs and resource and
disable VM Runtime on GDC with a single command. For information on
how to use bmctl to disable VM Runtime on GDC, see
Disable VM Runtime on GDC
in the version 1.11 documentation.
For instructions for version 1.10 clusters, see
Delete VMs and their resources
in the 1.10 documentation. For instructions for 1.11 and later clusters, see
Delete VMs in Google Distributed Cloud .
Disable VM Runtime on GDC.
If Multus is installed on your cluster, uninstall it.
Multus is used with the
multi-NIC for pods feature.
Upgrade the cluster.
You can't skip minor versions when upgrading your Google Distributed Cloud.
For example, if you have a version 1.10 cluster, you must first upgrade to
version 1.11 before you can upgrade to version 1.12.0 or higher. For more
information, see Upgrade clusters .
Enable VM Runtime on GDC on your 1.12.0 or higher cluster.
For instructions, see
Enable VM Runtime on GDC .
Recreate your VMs.
Due to changes in the VM schema for the GA release of
VM Runtime on GDC, you must recreate your VMs. For use with
VM Runtime on GDC on version 1.12.0 or higher clusters.
What's next
Quickstart: Create a VM in Google Distributed Cloud
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
