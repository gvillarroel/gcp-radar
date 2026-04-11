---
title: "Connect iSCSI clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-iscsi-clients
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-iscsi-clients
  title: "Connect iSCSI clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Connect iSCSI clients
Stay organized with collections
Save and categorize content based on your preferences.
Note: NetApp Volumes offers block storage feature with iSCSI
protocol for the Flex Unified service level.
This page provides instructions about how to connect iSCSI clients.
Use the following instructions to attach NetApp Volumes to iSCSI
clients using the Google Cloud console or Google Cloud CLI.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Volumes .
Click more_vert Show more icon on
the volume.
Click Mount instructions .
Follow the mount instructions shown in the Google Cloud console.
Click Finish .
gcloud
Connect iSCSI clients:
gcloud netapp volumes describe VOLUME_NAME \
--project = PROJECT_ID \
--location = LOCATION \
--format = "value(mountOptions.instructions)"
Replace the following information:
VOLUME_NAME : the name of the volume.
PROJECT_ID : the name of the project the volume
is in.
LOCATION : the location of the volume.
For more information about additional optional flags, see
Google Cloud SDK documentation on volumes .
Firewall rules for iSCSI volumes access
For iSCSI access, NetApp Volumes uses specific network ports to
enable communication between initiators (clients) and targets (storage volumes).
For communication between Google Compute Engine and
NetApp Volumes, these ports aren't blocked by default. If you use
a firewall, you must enable access to the following ports for the full
NetApp Volume PSA CIDR
or the individual volume IP addresses:
3260 TCP iSCSI target port
The IP addresses for NetApp Volumes are automatically assigned
from the CIDR range you assigned to the service during network peering. For more
information, see Choose a CIDR .
What's next
Protect your data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
