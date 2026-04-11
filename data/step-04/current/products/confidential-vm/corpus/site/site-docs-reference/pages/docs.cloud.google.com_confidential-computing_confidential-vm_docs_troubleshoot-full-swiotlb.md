---
title: "Full SWIOTLB \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-full-swiotlb
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/create-a-confidential-vm-instance
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-vm/docs/troubleshoot-full-swiotlb
  title: "Full SWIOTLB \_|\_ Confidential VM \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Confidential VM
Guides
Send feedback
Full SWIOTLB
Stay organized with collections
Save and categorize content based on your preferences.
For disk and network input/output operations, Confidential VM uses a specific area
in memory called the Software Input Output Translation Lookaside Buffer
(SWIOTLB), which has a default size of 64 MB. The SWIOTLB is part of the
total available RAM on the guest.
To check if a Confidential VM instance has encountered the swiotlb buffer is full
error, connect to the instance and run the following command to query the
dmesg logs:
dmesg | grep 'swiotlb buffer is full'
To resolve this issue, increase the SWIOTLB size. Before increasing the size,
ensure that the guest has enough RAM for the SWIOTLB and the operating system.
Increase the SWIOTLB size
To increase the size of the SWIOTLB, append the following line to
/etc/default/grub :
GRUB_CMDLINE_LINUX_DEFAULT=".... swiotlb= SIZE_IN_BYTES "
The following example shows how to increase the size of the SWIOTLB to
512 MB:
GRUB_CMDLINE_LINUX_DEFAULT=".... swiotlb=262144"
Based on the Ubuntu version, you need to update the string in the grub
file. For example, if you use Ubuntu 18.04, you need to update the
GRUB_CMDLINE_LINUX string instead of the GRUB_CMDLINE_LINUX_DEFAULT
string.
Run the following command to regenerate grub.cfg :
Ubuntu
sudo update-grub
Other distros
grubcfg="/etc/grub2-efi.cfg"
cp $grubcfg $grubcfg.bak
grub2-mkconfig -o $grubcfg
Reboot the VM.
For more information, see
How to increase SWIOTLB limit .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
