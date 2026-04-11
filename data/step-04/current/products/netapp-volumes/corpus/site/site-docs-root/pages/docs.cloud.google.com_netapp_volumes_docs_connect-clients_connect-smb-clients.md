---
title: "Connect SMB clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/connect-clients/connect-smb-clients
  title: "Connect SMB clients \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
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
Connect SMB clients
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to connect SMB clients.
Before you begin
Before you begin, make sure your client is logged in as a valid domain user.
Connect SMB clients
Use the following instructions to connect SMB clients using the Google Cloud console
or Google Cloud CLI or ONTAP-mode.
Console
Go to the NetApp Volumes page in the Google Cloud console.
Go to NetApp Volumes
Click Volumes .
Click more_vert Show more .
Click Mount instructions .
Follow the mount instructions shown in the Google Cloud console.
Click Finish .
gcloud
Run the following command:
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
ONTAP-mode
Use the following steps to identify your volume's hostname or IP address, and
share name:
Look up the computer account name
you used when you created the SMB server. When joining the domain, ONTAP
registers this name with Active Directory DNS using secure DDNS updates.
For large capacity volumes, ONTAP registers all IP addresses for that
hostname.
Find the IP addresses of the share by looking up all network interfaces for the data_cifs service.
Look up the share name
assigned to your volume.
Connect your client to \\<var>HOSTNAME</var>\<var>SHARENAME</var> .
If you use IP addresses instead of the hostname, make sure your Active
Directory has the appropriate Kerberos service principal names (SPN)
created for those IP addresses.
After you identify the required commands, see ONTAP-mode
for instructions about how to submit ONTAP commands to the storage pool.
Firewall rules for SMB volumes access
SMB uses various ports to communicate between the client and a server. For
communication between Google Compute Engine and NetApp Volumes,
these ports aren't blocked by default. If you use a firewall, you must enable
access to the following ports for the full NetApp Volume PSA CIDR
or the following individual volume IP addresses:
445 TCP SMB2/3
135 TCP msrpc and 40001 TCP SMB CA : Used only for SMB 3.x continuously
available shares. These ports aren't required for non-continuously available
shares.
The service exposes, but doesn't use, port 139/TCP .
The IP addresses for NetApp Volumes are automatically assigned
from the CIDR range you assigned to the service during network peering. For
more information, see Choose a CIDR .
Your SMB clients don't need to expose ingress ports for SMB to work.
What's next
Connect NFS clients .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
