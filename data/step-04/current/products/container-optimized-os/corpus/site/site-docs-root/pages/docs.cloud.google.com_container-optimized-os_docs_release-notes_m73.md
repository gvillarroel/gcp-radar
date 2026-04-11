---
title: "Release Notes: Milestone 73 \_|\_ Container-Optimized OS \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m73
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m73
  title: "Release Notes: Milestone 73 \_|\_ Container-Optimized OS \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Container-Optimized OS
Resources
Send feedback
Release Notes: Milestone 73
Stay organized with collections
Save and categorize content based on your preferences.
Current Status
Image Family
cos-73-lts
Deprecated After
Jun 19, 2020
Kernel
4.14.174
Kubernetes
v1.13.3
Docker
v18.09.7
Changelog
cos-73-11647-656-0
Date: Sep 05, 2020
Fixed Linux kernel vulnerability CVE-2020-14386 by fixing an integer
overflow issue in tpacket_rcv.
cos-73-11647-600-0
Date: July 13, 2020
Moved Kernel source to cos.googlesource.com.
Mounted /var/lib/containerd with exec option.
Fixed incorrect bprm->vma_pages prevent capturing all stack pages.
cos-73-11647-534-0
Date: May 07, 2020
Image rebuild to address an infrastructure issue. No image changes.
cos-73-11647-510-0
Date: Apr 13, 2020
Disabled `accept_ra` on all interfaces by default.
Upgraded OpenSSH to 7.9_p1 to fix CVE-2018-15473.
cos-73-11647-501-0
Date: Apr 05, 2020
Upgraded the Linux kernel to v4.14.174.
Backported systemd patch ba0d56f55 to address an issue that resulted in
leaked mount units.
cos-73-11647-459-0
Date: Feb 21, 2020
Fixed TCP empty skb at the tail of the write queue bug in kernel.
Upgraded the Linux kernel to v4.14.171.
cos-73-11647-449-0
Date: Feb 12, 2020
Upgraded runc to 1.0.0-rc10. This resolves CVE-2019-19921.
Upgraded the Linux kernel to v4.14.170.
cos-73-11647-415-0
Date: Jan 07, 2020
Fixed CFS quota throttling issue.
Increase sysctl net.ipv4.tcp_limit_output_bytes to 1048576.
Upgraded the Linux kernel to v4.14.160.
cos-73-11647-348-0
Date: Oct 28, 2019
Upgraded the Linux kernel to v4.14.150.
Fixed the unnecessary creation of two separate test slices (resulting in 4
systemd log messages total + runtime overhead) for every runc execution.
Fixed a performance regression in completely fair scheduler (CFS).
cos-73-11647-338-0
Date: Oct 21, 2019
Fixed an issue in systemd that resulted in unnecessary CPU consumption.
Fixed an issue in runc that resulted in unnecessary CPU consumption.
cos-73-11647-329-0
Date: Oct 08, 2019
Upgraded the Linux kernel to 4.14.145.
Backported a kernel patch to ensure the cfs cgroup quota/period ratio
always stays the same. This addresses a Kubernetes issue where the pod
cgroup could be changed into an inconsistent state.
cos-73-11647-293-0
Date: Sep 04, 2019
Upgraded containerd to v1.2.8.
Upgraded the Linux kernel to version 4.14.138.
Backported upstream writeback patches to fix a softlockup issue.
cos-73-11647-267-0
Date: Aug 08, 2019
Upgraded the Linux kernel to v4.14.137. This resolves CVE-2019-1125.
cos-73-11647-239-0
Date: Jul 12, 2019
Upgraded Docker to version 18.09.7. This resolves CVE-2018-15664.
Upgraded runc to version 1.0.0_rc8.
Upgraded docker-proxy to version 0.8.0_p20190513.
cos-73-11647-231-0
Date: Jul 02, 2019
Upgraded containerd to v1.2.7.
Updated kernel to version v4.14.131.
Fixed vulnerability in app-arch/bzip2 (CVE-2019-12900).
Fixed an issue introduced by NFLX-2019-001 fixes.
cos-73-11647-217-0
Date: Jun 19, 2019
Updated the Linux kernel to version 4.14.127 to resolve the NFLX-2019-001
TCP SACK vulnerabilities.
cos-73-11647-214-0
Date: Jun 17, 2019
Updated kernel to version v4.14.124.
Backported affinity change-set for napi-tx.
cos-73-11647-192-0
Date: May 28, 2019
Upgraded curl to v7.64.1 to fix CVE-2018-16890.
Upgraded containerd to version 1.2.6.
Set OOM score to -999 for docker.service and containerd.service to enhance
the reliability of core system daemons.
Add restart policy in containerd.service, and corrected docker.service's
dependency on containerd.service to allow containerd to recover from crashes.
Backported affinity changes to support napi-tx in COS.
Cherry-picked upstream patch https://patchwork.kernel.org/patch/10951403/ in kernel to fix
a bug in lockd introduced by commit 01b79d20008d "lockd: Show pid of lockd for remote locks"
in Linux kernel v4.14.105.
Rotated keys used by UEFI Secure Boot for signing and verifying the UEFI boot path.
cos-73-11647-182-0
Date: May 16, 2019
Merged Linux Stable Kernel 'v4.14.119' for resolving
Microarchitectural Data Sampling (MDS) vulnerabilities
(CVE-2018-12126, CVE-2018-12127, CVE-2018-12130, CVE-2019-11091).
Mitigated a mount hang issue in the Linux kernel.
cos-73-11647-163-0
Date: Apr 19, 2019
Set LimitNOFILE to 1048576 in containerd.service to fix an issue
where the file descriptor limit was not being properly applied to
containerd.
cos-73-11647-121-0
Date: Apr 01, 2019
Included perf tool in the image.
Fixed a bug that dockerd may start containerd even if
containerd.service exists.
Fixed an issue where Docker did not preserve the UIDs/GIDs of the
init process on exec.
cos-73-11647-112-0 (vs Milestone 69)
Date: Mar 25, 2019
New features
Added support for collecting kernel memory crash dumps.
Added support for RAID and LVM.
Added support for IPv6.
Added support for iscsi and multipath in the kernel.
Added support for kernel module signing.
Enabled auto updates on Shielded VMs that have never booted in secure
boot mode. Auto update is still disabled on Shielded VMs that have
previously booted in secure boot mode.
Disabled the CONFIG_DEVMEM configuration option in the kernel
to restrict privileged access to system memory.
Added behavior for logging more debugging information to the serial
console during boot.
Bug fixes
Fixed an
issue observed in Kubernetes liveness probes.
Configured docker.service to always restart Docker after 10 seconds.
Fixed an issue where a race condition between Docker and containerd
resulted in a Docker live restore failure.
Increased fs.inotify.max_user_instances to 1024.
Configured containerd to run as a standalone systemd service.
Package updates
Upgraded the built-in kubelet to v1.13.3.
Upgraded containerd to v1.2.5.
Upgraded openssl to 1.0.2q.
Upgraded Docker to 18.09.3.
Installed the pigz package for faster Docker image downloads.
Installed the keyutils package.
Installed the sosreport package.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
