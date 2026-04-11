---
title: "Container-Optimized OS Release Notes: Milestone 125 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m125
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m125
  title: "Container-Optimized OS Release Notes: Milestone 125 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Container-Optimized OS Release Notes: Milestone 125
Stay organized with collections
Save and categorize content based on your preferences.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
Warning: Milestone 125 has known performance and functional issues on a3-highgpu-(1|2|4|8)g machine types. We recommend continuing to use Milestone 121 with a3-highgpu until these issues are resolved.
April 06, 2026
Change
cos-125-19216-220-117
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Made it so that /dev/hugepages is mounted as noexec for cchost boards.
Change
Made it so that /mnt/disks is mounted as noexec for cchost boards.
Change
Made it so that /run is mounted as noexec for cchost boards.
Change
Upgraded sys-apps/iproute2 to version 6.18.0.
Fixed
Fixed a kernel panic in virtio_pci teardown when virtually queues are conditionally skipped.
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed CVE-2026-33997 and CVE-2026-34040 in Docker.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
April 01, 2026
Change
cos-125-19216-220-106
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed CVE-2026-23304 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
March 30, 2026
Change
cos-125-19216-220-99
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Feature
Enabled dynamic configuration of FUSE max pages limit.
Security
Fixed CVE-2026-23292 in the Linux kernel.
Security
Fixed CVE-2026-23293 in the Linux kernel.
Security
Fixed CVE-2026-23296 in the Linux kernel.
Security
Fixed CVE-2026-23297 in the Linux kernel.
Security
Fixed CVE-2026-23300 in the Linux kernel.
Security
Fixed CVE-2026-23303 in the Linux kernel.
Security
Fixed CVE-2026-23310 in the Linux kernel.
Security
Fixed CVE-2026-23316 in the Linux kernel.
Security
Fixed CVE-2026-23319 in the Linux kernel.
Security
Fixed CVE-2026-23340 in the Linux kernel.
Security
Fixed CVE-2026-23352 in the Linux kernel.
Security
Fixed CVE-2026-23359 in the Linux kernel.
Security
Fixed CVE-2026-23360 in the Linux kernel.
Security
Fixed CVE-2026-23380 in the Linux kernel.
Security
Fixed CVE-2026-23381 in the Linux kernel.
Security
Fixed CVE-2026-23383 in the Linux kernel.
Security
Fixed CVE-2026-23388 in the Linux kernel.
Security
Fixed CVE-2026-23390 in the Linux kernel.
Security
Fixed CVE-2026-27135 in net-libs/nghttp2.
Security
Fixed CVE-2026-27448 in dev-python/pyopenssl.
Security
Fixed CVE-2026-27459 in dev-python/pyopenssl.
Security
Fixed KCTF-9df9578 in the Linux kernel.
Change
Runtime sysctl changes:
Added: fs.fuse.max_pages_limit: 256
March 25, 2026
Change
cos-125-19216-220-87
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Feature
Added support for loading the ublk kernel module.
Fixed
Added CPU balloon support for Arm CPUs.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2025-71265 in the Linux kernel.
Security
Fixed CVE-2025-71266 in the Linux kernel.
Security
Fixed CVE-2025-71267 in the Linux kernel.
Security
Fixed CVE-2025-71268 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-23262 in the Linux kernel.
Security
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Security
Fixed KCTF-c9bc175 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
March 23, 2026
Change
cos-125-19216-220-72
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Fixed
Added CPU balloon support for Arm CPUs.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Fixed
Upgraded sys-apps/file to v5.47-r1.
Security
Fixed CVE-2025-71265 in the Linux kernel.
Security
Fixed CVE-2025-71266 in the Linux kernel.
Security
Fixed CVE-2025-71267 in the Linux kernel.
Security
Fixed CVE-2025-71268 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-23262 in the Linux kernel.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
March 14, 2026
Change
cos-125-19216-220-57
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Fixed
Downgraded ek-cpu-balloon driver to version 1.1.0 to address efficiency daemon issues.
March 08, 2026
Change
cos-125-19216-220-43
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Updated cos-gpu-installer to v2.6.0.
Fixed
Upgraded app-admin/node-problem-detector to v0.8.25.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
March 07, 2026
Change
cos-125-19216-220-39
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Fixed
Fixed a kernel bug which could cause traffic drops after NIC resets.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
March 06, 2026
Change
cos-125-19216-220-38
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2026-23100 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
March 04, 2026
Change
cos-125-19216-220-34
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Added support for the Lustre 2.14.0_p246 drivers.
Fixed
Upgraded dev-util/gdbus-codegen to v2.86.3.
Fixed
Upgraded the galog version to v0.0.0-20250924170816-9dbf105986f4 in google-guest-agent to fix an issue with high CPU consumption.
Security
Fixed CVE-2026-23204 in the Linux kernel.
Security
Fixed CVE-2026-23229 in the Linux kernel.
Security
Fixed CVE-2026-23230 in the Linux kernel.
Security
Upgraded dev-libs/glib to v2.86.3. This fixes
CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
February 24, 2026
Change
cos-125-19216-220-24
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Change
Fixed CVE-2026-23177 in the Linux kernel.
Feature
Added support for 590.44.01 and 590.48.01 NVIDIA driver for NVIDIA_RTX_PRO_6000
Fixed
Added support for NVIDIA driver v580.126.09-grid for NVIDIA_RTX_PRO_6000 GPU type.
Fixed
Upgraded app-admin/sosreport to v4.11.0.
Fixed
Upgraded net-misc/rsync to v3.4.1-r2.
Fixed
Upgraded net-misc/socat to v1.8.1.1.
Fixed
Upgraded sys-apps/less to v692.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Security
Fixed CVE-2025-47912, CVE-2025-58185, CVE-2025-58187, CVE-2025-58188, CVE-2025-58189, CVE-2025-61723, CVE-2025-61724, CVE-2025-61726, and CVE-2025-61728 in dev-lang/go.
Security
Fixed CVE-2025-60753 in libarchive.
Security
Fixed CVE-2025-71225 in the Linux kernel.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Security
Fixed CVE-2026-23148 in the Linux kernel.
Security
Fixed CVE-2026-23154 in the Linux kernel.
Security
Fixed CVE-2026-23156 in the Linux kernel.
Security
Fixed CVE-2026-23159 in the Linux kernel.
Security
Fixed CVE-2026-23161 in the Linux kernel.
Security
Fixed CVE-2026-23168 in the Linux kernel.
Security
Fixed CVE-2026-23173 in the Linux kernel.
Security
Fixed CVE-2026-23179 in the Linux kernel.
Security
Fixed CVE-2026-23193 in the Linux kernel.
Security
Fixed CVE-2026-23198 in the Linux kernel.
Security
Fixed CVE-2026-23199 in the Linux kernel.
Security
Fixed CVE-2026-23200 in the Linux kernel.
Security
Fixed CVE-2026-23205 in the Linux kernel.
Security
Fixed CVE-2026-23212 in the Linux kernel.
Security
Fixed CVE-2026-23214 in the Linux kernel.
Security
Fixed CVE-2026-23215 in the Linux kernel.
Security
Fixed CVE-2026-23216 in the Linux kernel.
Security
Fixed CVE-2026-23219 in the Linux kernel.
Security
Fixed KCTF-e3f000f in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-10148, CVE-2025-10966, CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
February 19, 2026
Change
cos-125-19216-220-9
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.68
v27.5.1
v2.1.5
See List
Announcement
This is an LTS Refresh release.
Feature
Added CPU balloon support for Arm CPUs.
Feature
Added guest support for paravirtualization of cpuids on Arm machines.
Fixed
Upgraded app-containers/docker-registry-test to v2.8.3.
Fixed
Upgraded dev-libs/expat to v2.7.3.
Fixed
Upgraded google-guest-configs to v20260121.00.
Fixed
Upgraded net-libs/libtirpc to v1.3.7.
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Fixed
Upgraded net-nds/rpcbind to v1.2.8.
Fixed
Upgraded sys-apps/gentoo-functions to v1.7.4.
Fixed
Upgraded sys-auth/pambase to v20251104.
Fixed
Upgraded sys-libs/libcap to v2.77.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: kernel.tainted: 4608 -> 4096
February 10, 2026
Change
cos-125-19216-104-149
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Fixed
Fixed TCPX performance issues.
Feature
Added support for NVIDIA driver v535.288.01, v570.211.01 and v580.126.09.
Feature
Enabled TC Traffic Police as a module.
Security
Fixed CVE-2025-71183 in the Linux kernel.
Security
Fixed CVE-2026-23023 in the Linux kernel.
Security
Fixed CVE-2026-23038 in the Linux kernel.
February 03, 2026
Change
cos-125-19216-104-133
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2025-38591 in the Linux kernel.
Security
Fixed CVE-2025-40149 in the Linux kernel.
Security
Fixed CVE-2025-71148 in the Linux kernel.
Security
Fixed CVE-2025-71149 in the Linux kernel.
Security
Fixed CVE-2025-71151 in the Linux kernel.
Security
Fixed CVE-2025-71156 in the Linux kernel.
Security
Fixed CVE-2025-71157 in the Linux kernel.
Security
Fixed CVE-2025-71160 in the Linux kernel.
Security
Fixed CVE-2026-0915 in sys-apps/glibc.
Security
Fixed CVE-2026-22976 in the Linux kernel.
Security
Fixed CVE-2026-22977 in the Linux kernel.
Security
Fixed CVE-2026-22979 in the Linux kernel.
Security
Fixed CVE-2026-22980 in the Linux kernel.
Security
Fixed CVE-2026-22988 in the Linux kernel.
Security
Fixed CVE-2026-22989 in the Linux kernel.
Security
Fixed CVE-2026-22994 in the Linux kernel.
Security
Fixed CVE-2026-22996 in the Linux kernel.
Security
Fixed CVE-2026-22998 in the Linux kernel.
Security
Fixed CVE-2026-22999 in the Linux kernel.
Security
Fixed CVE-2026-23000 in the Linux kernel.
Security
Fixed CVE-2026-23001 in the Linux kernel.
Security
Fixed CVE-2026-23002 in the Linux kernel.
Security
Fixed CVE-2026-23003 in the Linux kernel.
Security
Fixed CVE-2026-23005 in the Linux kernel.
Security
Fixed CVE-2026-23010 in the Linux kernel.
Security
Fixed CVE-2026-23011 in the Linux kernel.
Security
Fixed KCTF-2397e92 in the Linux kernel.
Security
Fixed KCTF-50da4b9 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: kernel.tainted: 4096 -> 4608
January 28, 2026
Change
cos-125-19216-104-126
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Fixed
Upgraded app-admin/sosreport to v4.10.2.
Fixed
Upgraded sys-apps/less to v691.
Security
Fixed CVE-2025-13836 in dev-lang/python.
Security
Fixed CVE-2026-21441 in dev-python/urllib3.
Security
Updated dev-libs/openssl to v3.5.5. This resolves CVE-2025-15467.
January 23, 2026
Change
cos-125-19216-104-117
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Fixed
Fixed a performance issue in TCPX.
Security
Fixed CVE-2025-13837 in dev-lang/python.
Security
Fixed CVE-2025-71141 in the Linux kernel.
January 20, 2026
Change
cos-125-19216-104-113
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Security
Applied urllib3 patch for CVE-2024-37891.
Change
Applied ethtool ring length changes to a4x's first Diorite interface.
Fixed
Updated dev-libs/openssl to v3.5.4.
Feature
Enabled guest support for NVIDIA virtual command queues (CMDQV).
Fixed
Updated cos-gpu-installer to v2.5.10.
Security
Fixed CVE-2025-12084 in dev-lang/python.
Security
Fixed CVE-2025-22111 in the Linux kernel.
Security
Fixed CVE-2025-38234 in the Linux kernel.
Security
Fixed CVE-2025-40325 in the Linux kernel.
Security
Fixed CVE-2025-61727 in dev-lang/go.
Security
Fixed CVE-2025-61729 in dev-lang/go.
Security
Fixed CVE-2025-68206 in the Linux kernel.
Security
Fixed CVE-2025-68259 in the Linux kernel.
Security
Fixed CVE-2025-68261 in the Linux kernel.
Security
Fixed CVE-2025-68264 in the Linux kernel.
Security
Fixed CVE-2025-68265 in the Linux kernel.
Security
Fixed CVE-2025-68337 in the Linux kernel.
Security
Fixed CVE-2025-68348 in the Linux kernel.
Security
Fixed CVE-2025-68349 in the Linux kernel.
Security
Fixed CVE-2025-68363 in the Linux kernel.
Security
Fixed CVE-2025-68366 in the Linux kernel.
Security
Fixed CVE-2025-68369 in the Linux kernel.
Security
Fixed CVE-2025-68372 in the Linux kernel.
Security
Fixed CVE-2025-68374 in the Linux kernel.
Security
Fixed CVE-2025-68724 in the Linux kernel.
Security
Fixed CVE-2025-68727 in the Linux kernel.
Security
Fixed CVE-2025-68728 in the Linux kernel.
Security
Fixed CVE-2025-68740 in the Linux kernel.
Security
Fixed CVE-2025-68742 in the Linux kernel.
Security
Fixed CVE-2025-68744 in the Linux kernel.
Security
Fixed CVE-2025-68775 in the Linux kernel.
Security
Fixed CVE-2025-68778 in the Linux kernel.
Security
Fixed CVE-2025-68780 in the Linux kernel.
Security
Fixed CVE-2025-68782 in the Linux kernel.
Security
Fixed CVE-2025-68788 in the Linux kernel.
Security
Fixed CVE-2025-68794 in the Linux kernel.
Security
Fixed CVE-2025-68795 in the Linux kernel.
Security
Fixed CVE-2025-68798 in the Linux kernel.
Security
Fixed CVE-2025-68800 in the Linux kernel.
Security
Fixed CVE-2025-68801 in the Linux kernel.
Security
Fixed CVE-2025-68803 in the Linux kernel.
Security
Fixed CVE-2025-68810 in the Linux kernel.
Security
Fixed CVE-2025-68811 in the Linux kernel.
Security
Fixed CVE-2025-68813 in the Linux kernel.
Security
Fixed CVE-2025-68814 in the Linux kernel.
Security
Fixed CVE-2025-68816 in the Linux kernel.
Security
Fixed CVE-2025-68820 in the Linux kernel.
Security
Fixed CVE-2025-68821 in the Linux kernel.
Security
Fixed CVE-2025-71067 in the Linux kernel.
Security
Fixed CVE-2025-71068 in the Linux kernel.
Security
Fixed CVE-2025-71072 in the Linux kernel.
Security
Fixed CVE-2025-71077 in the Linux kernel.
Security
Fixed CVE-2025-71080 in the Linux kernel.
Security
Fixed CVE-2025-71084 in the Linux kernel.
Security
Fixed CVE-2025-71089 in the Linux kernel.
Security
Fixed CVE-2025-71096 in the Linux kernel.
Security
Fixed CVE-2025-71097 in the Linux kernel.
Security
Fixed CVE-2025-71098 in the Linux kernel.
Security
Fixed CVE-2025-71102 in the Linux kernel.
Security
Fixed CVE-2025-71104 in the Linux kernel.
Security
Fixed CVE-2025-71113 in the Linux kernel.
Security
Fixed CVE-2025-71118 in the Linux kernel.
Security
Fixed CVE-2025-71120 in the Linux kernel.
Security
Fixed CVE-2025-71123 in the Linux kernel.
Security
Fixed CVE-2025-71125 in the Linux kernel.
Security
Fixed CVE-2025-71131 in the Linux kernel.
Security
Fixed CVE-2025-71134 in the Linux kernel.
Security
Fixed CVE-2025-71135 in the Linux kernel.
January 14, 2026
Change
cos-125-19216-104-95
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2025-40350 in the Linux kernel.
Security
Fixed CVE-2025-40350 in the Linux kernel.
Security
Fixed CVE-2025-40350 in the Linux kernel.
Security
Fixed CVE-2025-68329 in the Linux kernel.
Security
Fixed CVE-2025-68756 in the Linux kernel.
Security
Fixed CVE-2025-68758 in the Linux kernel.
Security
Fixed CVE-2025-68763 in the Linux kernel.
Security
Fixed CVE-2025-68764 in the Linux kernel.
Security
Fixed CVE-2025-68766 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
January 05, 2026
Change
cos-125-19216-104-89
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Change
Updated app-admin/sosreport to v4.10.1. Enabled containerd stack dump by default.
Fixed
Upgraded net-misc/socat to v1.8.1.0.
Fixed
Upgraded sys-apps/dmidecode to v3.7.
Security
Fixed CVE-2025-40346 in the Linux kernel.
Security
Fixed CVE-2025-40348 in the Linux kernel.
Security
Fixed CVE-2025-40353 in the Linux kernel.
Security
Fixed CVE-2025-40359 in the Linux kernel.
Security
Fixed CVE-2025-40360 in the Linux kernel.
Security
Fixed CVE-2025-40361 in the Linux kernel.
Security
Fixed CVE-2025-66471 and CVE-2025-66418 in dev-python/urllib3.
Security
Fixed CVE-2025-68171 in the Linux kernel.
Security
Fixed CVE-2025-68173 in the Linux kernel.
Security
Fixed CVE-2025-68178 in the Linux kernel.
Security
Fixed CVE-2025-68183 in the Linux kernel.
Security
Fixed CVE-2025-68185 in the Linux kernel.
Security
Fixed CVE-2025-68186 in the Linux kernel.
Security
Fixed CVE-2025-68188 in the Linux kernel.
Security
Fixed CVE-2025-68191 in the Linux kernel.
Security
Fixed CVE-2025-68198 in the Linux kernel.
Security
Fixed CVE-2025-68199 in the Linux kernel.
Security
Fixed CVE-2025-68200 in the Linux kernel.
Security
Fixed CVE-2025-68208 in the Linux kernel.
Security
Fixed CVE-2025-68213 in the Linux kernel.
Security
Fixed CVE-2025-68214 in the Linux kernel.
Security
Fixed CVE-2025-68219 in the Linux kernel.
Security
Fixed CVE-2025-68224 in the Linux kernel.
Security
Fixed CVE-2025-68229 in the Linux kernel.
Security
Fixed CVE-2025-68231 in the Linux kernel.
Security
Fixed CVE-2025-68241 in the Linux kernel.
Security
Fixed CVE-2025-68242 in the Linux kernel.
Security
Fixed CVE-2025-68292 in the Linux kernel.
Security
Fixed CVE-2025-68293 in the Linux kernel.
Security
Fixed CVE-2025-68295 in the Linux kernel.
Security
Fixed CVE-2025-68313 in the Linux kernel.
Security
Fixed CVE-2025-68317 in the Linux kernel.
Security
Fixed CVE-2025-68321 in the Linux kernel.
Security
Fixed CVE-2025-68324 in the Linux kernel.
Security
Fixed CVE-2025-68325 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811475 -> 811504
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
December 16, 2025
Change
cos-125-19216-104-74
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Fixed
Backported upstream commit to reduce bcache gc latency.
Security
Fixed KCTF-f05a4f9 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811448 -> 811475
December 15, 2025
Change
cos-125-19216-104-72
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.5
See List
Security
Fixed CVE-2025-40231 in the Linux kernel.
Security
Fixed CVE-2025-40238 in the Linux kernel.
Security
Fixed CVE-2025-40248 in the Linux kernel.
Security
Fixed CVE-2025-40256 in the Linux kernel.
Security
Fixed CVE-2025-40292 in the Linux kernel.
Security
Fixed CVE-2025-40297 in the Linux kernel.
Security
Fixed CVE-2025-40303 in the Linux kernel.
Security
Fixed CVE-2025-40305 in the Linux kernel.
Security
Fixed CVE-2025-40313 in the Linux kernel.
Security
Fixed CVE-2025-40319 in the Linux kernel.
Security
Fixed CVE-2025-40320 in the Linux kernel.
Security
Fixed CVE-2025-40324 in the Linux kernel.
Security
Fixed CVE-2025-40328 in the Linux kernel.
Security
Fixed CVE-2025-40341 in the Linux kernel.
Security
Fixed CVE-2025-47914 and CVE-2025-58181 in dev-go/crypto.
Security
Updated app-containers/containerd and app-containers/containerd-test to v2.1.5. This resolves CVE-2024-25621 and CVE-2025-64329.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811449 -> 811448
December 10, 2025
Change
cos-125-19216-104-61
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.4
See List
Feature
Added patches to handle IDPF tx timeouts.
Feature
Enabled automatic loading of RDMA kernel modules when CX-8 devices are detected.
Fixed
Upgraded app-admin/google-guest-configs to v20251014.00.
Security
Fixed CVE-2025-38678 in the Linux kernel.
Security
Fixed CVE-2025-40209 in the Linux kernel.
Security
Fixed CVE-2025-40230 in the Linux kernel.
Security
Fixed CVE-2025-40235 in the Linux kernel.
Security
Fixed CVE-2025-40250 in the Linux kernel.
Security
Fixed CVE-2025-40251 in the Linux kernel.
Security
Fixed CVE-2025-40266 in the Linux kernel.
Security
Fixed CVE-2025-40268 in the Linux kernel.
Security
Fixed CVE-2025-40271 in the Linux kernel.
Security
Fixed CVE-2025-40272 in the Linux kernel.
Security
Fixed CVE-2025-40273 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811530 -> 811449
December 03, 2025
Change
cos-125-19216-104-45
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.4
See List
Feature
Added support for NVIDIA driver v580.105.08 and set it as the default version for all GPU types.
Fixed
Made the google-guest-agent more resilient to network link
flakes.
Security
Upgraded vim & vim-core to version 9.1.1652. This fixes
CVE-2025-53905, CVE-2025-53906, CVE-2025-9390.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811428 -> 811530
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
December 02, 2025
Change
cos-125-19216-104-39
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.4
See List
Feature
Enabled KVM for COS ARM64.
Feature
Enabled Software Watchdog as a module.
Fixed
Fixed an issue in app-containers/runc that caused runc to
use more file descriptors than intended.
Fixed
Upgraded net-misc/rsync to v3.4.1-r1.
Security
Fixed CVE-2025-22105 in the Linux kernel.
Security
Fixed CVE-2025-40212 in the Linux kernel.
Security
Fixed KCTF-60e6489 in the Linux Kernel.
Security
Fixed KCTF-b441cf3 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811512 -> 811428
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
November 17, 2025
Change
cos-125-19216-104-25
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.4
See List
Fixed
Backported various TCPDirect networking fixes.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811458 -> 811512
November 14, 2025
Change
cos-125-19216-104-23
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.4
See List
Change
Updated app-containers/runc to v1.3.3.
Fixed
Fixed a bug where setting MTU above 9000 on ARM systems with a 64k page size would cause IDPF networking to fail.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811489 -> 811458
November 11, 2025
Change
cos-125-19216-104-17
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.4
See List
Fixed
Made CX-8 NIC naming order deterministic.
Feature
Added support for SCSI logging.
Security
Fixed CVE-2025-21833 in the Linux kernel.
Change
Updated app-containers/containerd to v2.1.4.
Fixed
Fixed a race condition where unmounting file systems monitored by inotify or fanotify could result in kernel crash.
Feature
Enabled HTCP TCP congestion control algorithm as a module.
Fixed
Upgraded sys-apps/makedumpfile to v1.7.8.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811455 -> 811489
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Feature
Added support for the Lustre 2.14.0_p224 drivers.
Security
Fixed CVE-2025-40083 in the Linux kernel.
Fixed
Enabled multiport support for CX-8 devices.
November 07, 2025
Change
cos-125-19216-104-5
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.3
See List
Change
Runtime sysctl changes:
Changed: fs.file-max: 811499 -> 811455
Security
Fixed CVE-2025-31133, CVE-2025-52565, and CVE-2025-52881 in
app-containers/runc.
Fixed
Fixed bcache latency spikes.
November 03, 2025
Change
cos-125-19216-104-3
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.55
v27.5.1
v2.1.3
See List
Fixed
Upgraded dev-lang/go to v1.23.12.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811500 -> 811499
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
Announcement
This is an LTS refresh release.
Security
Fixed CVE-2025-40006 in the Linux kernel.
Feature
Fixed a bug in cos-extensions which would cause GB200 and GB300 devices not to be detected in one code path, which would result in Imex channels not being created by default.
Fixed
Fixed a TCPX bug which would sometimes incorrectly report devices as being missing when route cache entries were missing or invalidated.
Security
Fixed CVE-2025-40009 in the Linux kernel.
October 27, 2025
Change
cos-125-19216-0-115
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Feature
Added GB300 support to cos-extensions.
Fixed
Added support for NVIDIA driver v535.274.02 and v570.195.03.
Change
Updated cos-gpu-installer to v2.5.9. This adds support for installing drivers for GB 300 devices.
Security
Fixed CVE-2025-11413, CVE-2025-11414 in binutils-libs.
Fixed
Upgraded sys-apps/pv to v1.9.44.
October 24, 2025
Change
cos-125-19216-0-110
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Security
Fixed CVE-2025-11495 in binutils-libs.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Change
Updated app-containers/runc to v1.2.7.
Security
Fixed CVE-2025-11494 in binutils-libs.
Fixed
Upgraded sys-apps/pv to v1.9.42.
Change
Updated cos-gpu-installer to v2.5.8.
Security
Fixed CVE-2025-11412 in binutils-libs.
Feature
Added support for NVIDIA GB300 devices.
Fixed
Reduced gcr_wait_online retry gap.
Fixed
Upgraded sys-apps/less to v685.
Fixed
Upgraded sys-apps/hwdata to v0.400.
Change
Added support for A4X-Max NICs.
October 20, 2025
Change
cos-125-19216-0-100
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Security
Fixed CVE-2025-39984 in the Linux kernel.
Security
Fixed CVE-2025-39998 in the Linux kernel.
Security
Fixed CVE-2025-39975 in the Linux kernel.
Security
Fixed CVE-2025-39971 in the Linux kernel.
Security
Fixed CVE-2025-39972 in the Linux kernel.
Security
Fixed CVE-2025-39969 in the Linux kernel.
Security
Fixed CVE-2025-39940 in the Linux kernel.
Security
Fixed CVE-2025-38322 in the Linux kernel.
Security
Fixed CVE-2025-39990 in the Linux kernel.
Security
Fixed CVE-2025-39973 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811534 -> 811421
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
Security
Fixed CVE-2025-39980 in the Linux kernel.
Security
Fixed CVE-2025-39977 in the Linux kernel.
Security
Fixed CVE-2025-39992 in the Linux kernel.
October 17, 2025
Change
cos-125-19216-0-94
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Fixed
Added task information collection to sosreports.
Fixed
Updated golang.org/x/crypto, golang.org/x/net, and
golang.org/x/oauth2 in kubelet and kubectl.
Security
Fixed KCTF-6bb73db in the Linux Kernel.
Fixed
Updated the dump capture kernel to v6.12.52.
Security
Fixed CVE-2025-39963 in the Linux kernel.
Security
Fixed CVE-2025-39965 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811514 -> 811534
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Security
Fixed CVE-2025-41244 in app-emulation/open-vm-tools.
Security
Fixed CVE-2025-39961 in the Linux kernel.
October 13, 2025
Change
cos-125-19216-0-87
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Fixed
Upgraded sys-apps/hwdata to v0.399.
Feature
Added support for NVIDIA driver v580.95.05. Updated all latest driver version and default driver versions for NVIDIA_GB200 and NVIDIA_B200 to v580.95.05.
Security
Fixed CVE-2025-39947 in the Linux kernel.
Security
Fixed CVE-2025-39953 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811500 -> 811514
Fixed
Upgraded app-admin/node-problem-detector to v0.8.22.
Security
Fixed CVE-2025-11081, CVE-2025-11082 and CVE-2025-11083 in sys-libs/binutils-libs.
Security
Fixed CVE-2025-39931 in the Linux kernel.
Fixed
Partially fixed an issue where excessive contention among writeback kworkers when switching a large number of inodes between cgroups could lead to system unresponsiveness.
October 09, 2025
Change
cos-125-19216-0-80
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Security
Fixed KCTF-134121b in the Linux kernel.
Announcement
Promoted Milestone 125 to stable.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811450 -> 811500
Changed: net.ipv4.udp_mem: 188034 250715 376068 -> 188034 250714 376068
Change
Updated toolbox container image tag to v20251002.
October 06, 2025
Change
cos-beta-125-19216-0-76
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Security
Fixed KCTF-1b34cbb in the Linux kernel.
Fixed
Add support for NVIDIA MFT Tools v4.33.0.
Security
Fixed CVE-2025-39917 in the Linux kernel.
Security
Fixed CVE-2025-39913 in the Linux kernel.
Security
Fixed CVE-2025-22106 in the Linux kernel.
Security
Fixed CVE-2025-39914 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811504 -> 811450
Feature
Configured the cos-gpu-installer to use R580 drivers as the
default GPU drivers.
Security
Fixed CVE-2025-39886 in the Linux kernel.
Security
Fixed CVE-2025-39911 in the Linux kernel.
Security
Updated dev-python/jinja to v3.1.6. This resolves
CVE-2024-56326, CVE-2024-56201 and CVE-2025-27516.
Security
Fixed CVE-2025-39926 in the Linux kernel.
Security
Updated dev-python/urllib3 to v1.26.18 and fixed CVE-2025-50181.
September 29, 2025
Change
cos-beta-125-19216-0-62
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Security
Fixed CVE-2025-40300 in the Linux kernel.
Security
Fixed CVE-2025-39883 in the Linux kernel.
Security
Fixed CVE-2025-39881 in the Linux kernel.
Fixed
Updated golang.org/x/oauth2, golang.org/x/net,
golang.org/x/crypto, and github.com/golang-jwt/jwt/v5 in Docker.
Fixed
Updated app-admin/node-problem-detector to v0.8.21.
Security
Fixed KCTF-0aeb54a in the Linux Kernel.
Security
Fixed CVE-2025-39884 in the Linux kernel.
Security
Fixed CVE-2025-39882 in the Linux kernel.
September 24, 2025
Change
cos-beta-125-19216-0-53
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.46
v27.5.1
v2.1.3
See List
Fixed
Added support for NVIDIA driver v580.82.07.
Updated all latest driver version and default driver
versions for NVIDIA_GB200 and NVIDIA_B200 to v580.82.07.
Change
Enabled Coherent Driver Memory Management by default when installing GPU drivers on GB2000.
Feature
Added support for the fwctl subsystem and the Mellanox fwctl driver for ARM64.
Change
Updated cos-gpu-installer to v2.5.7.
Fixed
Upgraded dev-libs/libxslt to version 1.1.43-r1.
Fixed
Updated the Linux kernel to v6.12.46.
Security
Upgraded dev-libs/libxml2 to version 2.13.9. This fixes
CVE-2025-9714.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811500 -> 811534
September 16, 2025
Change
cos-beta-125-19216-0-47
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.41
v27.5.1
v2.1.3
See List
Fixed
Fixed a kernel bug which caused boot to fail for n4 machine types.
Security
Fixed CVE-2025-38640 in the Linux kernel.
Feature
Added GDRCopy kernel module for NVIDIA drivers.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811507 -> 811500
Security
Fixed CVE-2025-38622 in the Linux kernel.
Security
Fixed CVE-2025-38568 in the Linux kernel.
Feature
Added support for NVIDIA MFT Tools on arm64.
Security
Fixed CVE-2025-38572 in the Linux kernel.
Security
Fixed CVE-2025-38608 in the Linux kernel.
Security
Fixed CVE-2025-38587 in the Linux kernel.
Security
Fixed CVE-2025-38565 in the Linux kernel.
Security
Fixed CVE-2025-38645 in the Linux kernel.
Security
Fixed CVE-2025-38614 in the Linux kernel.
Security
Fixed CVE-2025-38588 in the Linux kernel.
Security
Fixed CVE-2025-38639 in the Linux kernel.
Security
Fixed CVE-2025-38571 in the Linux kernel.
September 08, 2025
Change
cos-beta-125-19216-0-38
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.41
v27.5.1
v2.1.3
See List
Feature
Added NVIDIA GPU driver's R580 branch. Updated the LATEST GPU driver label to version 580.65.06.
Security
Fixed CVE-2025-38676 in the Linux kernel.
Fixed
Disabled network management by the google-guest-agent.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811504 -> 811507
September 02, 2025
Change
cos-beta-125-19216-0-33
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.41
v27.5.1
v2.1.3
See List
Fixed
Upgraded sys-apps/file to v5.46-r3.
Security
Fixed KCTF-6db015f in the Linux kernel.
Feature
Added iRDMA support in the Linux kernel.
Fixed
Upgraded sys-apps/hwdata to v0.398.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811541 -> 811504
Feature
Enabled dynamic vlan configuration for non-primary NICs.
Fixed
Added support for the Lustre 2.14.0_p216 drivers.
Security
Fixed CVE-2025-6052 in dev-libs/glib.
Security
Fixed KCTF-aba0c94 in the Linux kernel.
Security
Fixed KCTF-62708b9 in the Linux kernel.
August 25, 2025
Change
cos-beta-125-19216-0-24
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.41
v27.5.1
v2.1.3
See List
Feature
Disabled DNSSEC by default for COS TPU VMs.
Feature
Enabled the google-guest-agent's network management functionality.
Fixed
Fixed an issue where cpusets cgroups did not work with
cgroup v1 enabled.
Feature
Added IPv6 support for machines using the IDPF driver.
Fixed
Installed app-misc/c_rehash.
Feature
Removed the cloud-final.service dependency on multi-user.target which could delay cloud-init user-data scripts indefinitely when long-running startup scripts are used.
Change
Added kernel support for bare-metal on the NVIDIA Grace platform.
Security
Fixed KCTF-abad3d0 in the Linux kernel.
Change
Runtime sysctl changes:
Changed: fs.file-max: 811484 -> 811541
Feature
Added ConnectX-8 RDMA support.
Feature
Added TDX RTMR support.
August 18, 2025
Change
cos-beta-125-19216-0-12
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.41
v27.5.1
v2.1.3
See List
Security
Fixed CVE-2024-53427 in app-misc/jq.
Fixed
Upgraded app-arch/gzip to v1.14.
Feature
Add support for iRDMA devices.
Security
Update NVIDIA GPU drivers to v535.247.01 for default/ R535
and v570.133.20 for latest/R570. This resolves CVE-2025-23244.
Feature
Added support for Nvidia driver version 575.57.08. Added support for NVIDIA_RTX_PRO_6000 devices.
Feature
Supported NVIDIA MFT Tools on COS.
Security
Upgraded dev-libs/glib to 2.82.5. This resolves
CVE-2024-52533.
Fixed
Upgraded net-dns/libidn2 to v2.3.8.
Fixed
Upgraded sys-apps/acl to v2.3.2-r2.
Fixed
Upgraded sys-apps/which to v2.23.
Fixed
Disabled martian logging for ConnectX-7 network cards. These cards only communicate locally, but martian logging during communications with the host can lead to a race condition which causes GID table construction to sometimes fail.
Fixed
Upgraded sys-libs/libcap to v2.76.
Change
Upgrade cloud-init to v24.4.1.
Security
Fixed CVE-2025-8058 in glibc.
Security
Fixed CVE-2025-0840 in binutils.
Security
Upgraded dev-libs/libxml2 to v1.12.10. Fixes CVE-2025-27113.
Fixed
Upgraded app-admin/node-problem-detector to v0.8.20.
Feature
Added support for NVIDIA GB200 GPU with 570.124.06 GPU driver. This driver version has been assigned the latest, default, and R570 tags for this GPU type.
Fixed
Upgraded chromeos-base/chromeos-common-script to v0.0.1-r667.
Fixed
Updated app-misc/jq to v1.8.1.
Change
Updated Python to v3.11.
Security
Upgraded sys-libs/binutils-libs to version 2.45. This fixes CVE-2025-8224,CVE-2025-8225 and CVE-2025-1153.
Security
Upgraded net-misc/netplan to v1.1.2. This fixes
CVE-2022-4968.
Change
Upgraded the Linux kernel to version 6.12.
Fixed
Upgraded sys-libs/libseccomp to v2.6.0-r2.
Fixed
Fixed issue where modinfo could not display module signatures.
Fixed
Upgraded sys-apps/rootdev to v0.0.1-r51.
Fixed
Upgraded app-containers/runc to v1.2.5, Upgraded app-containers/runc-test to v1.2.5.
Security
Fixed CVE-2024-26130 in dev-python/cryptography.
Fixed
Upgraded chromeos-base/minijail to v18-r168.
Fixed
Updated dev-python/s3transfer to v0.11.4.
Fixed
Upgraded dev-libs/openssl to 3.5.1.
Fixed
Increased kdump memory reservation.
Fixed
Updated dev-python/requests to v2.32.4.
Change
Restored standard upstream Linux kernel layout for sessionid and loginuid fields in struct task_struct .
Security
Fixed CVE-2024-13176 in dev-libs/openssl.
Fixed
Upgraded sys-process/lsof to v4.99.5.
Security
Upgraded vim, vim-core to
version 9.1.1500. This fixes CVE-2025-26603, CVE-2025-27423,
CVE-2025-29768, CVE-2025-1215, CVE-2025-24014, CVE-2025-22134.
Security
Upgrade libarchive to v3.8.1. This fixes CVE-2025-5914.
Feature
Added ARM support for the Lustre v2.14.0 drivers.
Security
Upgraded net-misc/curl to v8.12.1. This fixes CVE-2025-0167.
Fixed
Upgraded sys-apps/makedumpfile to v1.7.7.
Fixed
Upgraded chromeos-base/debugd-client to v0.0.1-r2734.
Fixed
Upgraded sys-apps/less to v679.
Security
Upgraded dev-go/crypto to v0.35.0. This fixes CVE-2025-22869.
Feature
Fixed an issue in containerd that prevented some v2 shims from shutting down properly.
Change
Patched a null ptr exception bug in NVIDIA 570.124.06 OSS driver.
Fixed
Updated dev-python/botocore to v1.37.9.
Security
Fixed CVE-2024-9287 in dev-lang/python.
Fixed
Fixed EINTR error in app-container/cni-plugins.
Change
Fixed an issue that resulted in missing grub boot measurements in some machine configurations.
Fixed
Upgraded dev-libs/double-conversion to v3.3.1.
Fixed
Upgraded app-arch/unzip to v6.0_p29.
Fixed
Upgraded sys-apps/grep to v3.12.
Fixed
Upgraded app-admin/google-guest-agent to v20250418.00.
Fixed
Upgraded app-admin/google-guest-configs to v20250718.00.
Security
Updated dev-go/net in policy manager to v0.39.0. This fixes CVE-2025-22870.
Fixed
Upgraded sys-auth/pambase to v20250228.
Security
Upgraded dev-vcs/git to version 2.49.1. This fixes CVE-2025-48385, CVE-2025-27613, CVE-2025-27614, CVE-2025-48384, CVE-2025-46835.
Fixed
Upgraded sys-apps/diffutils to v3.11-r2.
Fixed
Upgraded app-admin/fluent-bit to v3.2.5.
Fixed
Upgraded sys-apps/dbus to v1.16.2-r197.
Change
Upgrade dpdk-kmods to 9b182be2ee4b.
Feature
Added NVIDIA 570.133.20 vGPU driver.
Change
Updated the NVIDIA GPU driver policy for New Feature Branch (NFB) drivers. The LATEST tag has been updated to point to the stable 570.133.20 Production Branch. The 575.57.08 NFB driver remains available for development and testing but must now be selected by its specific version number.Removed 575.57.08 NFB driver support for NVIDIA_GB200 machine.
Fixed
Upgraded chromeos-base/shill-client to v0.0.1-r4879.
Security
Upgraded net-misc/wget to v1.25.0. This fixes CVE-2024-10524.
Feature
Updated cos-gpu-installer to v2.4.8: Add the -skip-nvidia-smi flag to disable the execution of nvidia-smi verification during gpu driver installation.
Security
Fixed CVE-2025-46836 in sys-apps/net-tools
Fixed
Upgraded net-nds/rpcbind to v1.2.7.
Security
Fixed CVE-2024-6174 and CVE-2024-11584 in cloud-init.
Security
Fixed CVE-2025-32728 in net-misc/openssh.
Fixed
Upgraded sys-apps/ethtool to version 6.11.
Fixed
Upgraded net-misc/rsync to v3.4.1.
Security
Added support for Nvidia driver version 535.261.03. This fixes CVE-2025-23286 and CVE-2025-23279.
Fixed
Upgraded sys-process/procps to v4.0.5-r2.
Fixed
Upgraded sys-apps/pv to v1.9.34.
Fixed
Upgraded app-containers/docker-credential-helpers to v0.9.3.
Fixed
Upgraded app-benchmarks/microbenchmarks to v0.0.1-r20.
Fixed
Modified toolbox to use unified cgroup hierarchy mode instead of hybrid mode when possible.
Security
Updated dev-go/oauth2 to v0.27.0. Fixes CVE-2025-22868.
Security
Updated app-editors/nano to v8.5. This resolves
CVE-2024-5742.
Security
Fixed CVE-2024-23337 in app-misc/jq.
Security
Fixed CVE-2025-47273 in dev-python/setuptools.
Fixed
Added support for the Lustre 2.14.0_p212 drivers.
Fixed
Reverted a containerd change which reduced the default soft file descriptor limit for processes in containers to 1024.
Fixed
Upgraded net-misc/socat to v1.8.0.3.
Change
iptables-restore.service to start after ipset.service.
Fixed
Upgraded net-misc/openssh to 10.0_p1.
Change
Added support for 7th generation TPU devices.
Change
Upgraded nvidia-container-toolkit to v1.17.8. This fixes CVE-2025-23266.
Security
Upgraded elfutils to v0.193. This fixes CVE-2025-1365, CVE-2025-1371, CVE-2025-1372, and CVE-2025-1377.
Fixed
Upgraded virtual/logger to v0-r2.
Security
Fixed CVE-20250-3198 in sys-libs/bintuils-libs.
Fixed
Fixed docker MTU mismatch.
Fixed
Upgraded chromeos-base/session_manager-client to v0.0.1-r2830.
Fixed
Upgraded chromeos-base/google-breakpad to v2025.07.23.214511-r244.
Feature
Enabled the Btrfs kernel module.
Security
Fixed CVE-2025-0395 in sys-libs/glibc.
Change
Runtime sysctl changes:
Added: kernel.apparmor_restrict_unprivileged_unconfined: 0
Added: kernel.core_file_note_size_limit: 4194304
Added: kernel.core_sort_vma: 0
Added: net.ipv4.fib_multipath_hash_seed: 0
Added: net.ipv4.tcp_pingpong_thresh: 1
Added: net.ipv6.conf.all.ra_honor_pio_life: 0
Added: net.ipv6.conf.all.ra_honor_pio_pflag: 0
Added: net.ipv6.conf.all.regen_min_advance: 2
Added: net.ipv6.conf.default.ra_honor_pio_life: 0
Added: net.ipv6.conf.default.ra_honor_pio_pflag: 0
Added: net.ipv6.conf.default.regen_min_advance: 2
Added: net.ipv6.conf.docker0.ra_honor_pio_life: 0
Added: net.ipv6.conf.docker0.ra_honor_pio_pflag: 0
Added: net.ipv6.conf.docker0.regen_min_advance: 2
Added: net.ipv6.conf.eth0.ra_honor_pio_life: 0
Added: net.ipv6.conf.eth0.ra_honor_pio_pflag: 0
Added: net.ipv6.conf.eth0.regen_min_advance: 2
Added: net.ipv6.conf.lo.ra_honor_pio_life: 0
Added: net.ipv6.conf.lo.ra_honor_pio_pflag: 0
Added: net.ipv6.conf.lo.regen_min_advance: 2
Added: vm.enable_soft_offline: 1
Changed: fs.epoll.max_user_watches: 1809007 -> 1808517
Changed: fs.fanotify.max_user_marks: 67544 -> 68412
Changed: fs.file-max: 811774 -> 811484
Changed: fs.inotify.max_user_watches: 63425 -> 64189
Changed: kernel.threads-max: 63487 -> 63178
Changed: net.ipv4.tcp_mem: 94041 125391 188082 -> 94017 125357 188034
Changed: net.ipv4.udp_mem: 188085 250783 376170 -> 188034 250715 376068
Changed: user.max_cgroup_namespaces: 31743 -> 31589
Changed: user.max_fanotify_marks: 67544 -> 68412
Changed: user.max_inotify_watches: 63425 -> 64189
Changed: user.max_ipc_namespaces: 31743 -> 31589
Changed: user.max_mnt_namespaces: 31743 -> 31589
Changed: user.max_net_namespaces: 31743 -> 31589
Changed: user.max_pid_namespaces: 31743 -> 31589
Changed: user.max_time_namespaces: 31743 -> 31589
Changed: user.max_user_namespaces: 31743 -> 31589
Changed: user.max_uts_namespaces: 31743 -> 31589
Changed: vm.lowmem_reserve_ratio: 256 256 32 0 0 -> 256 256 32 0
Deleted: kernel.sched_child_runs_first: 0
Fixed
Upgraded sysram to version 6.12-0.
Fixed
Updated dev-python/python-dateutil to v2.9.0.
Feature
Backported support for AMD SEV-SNP SVSM vTPM driver and
configfs-tsm addition for extended attestation protocol.
Fixed
Upgraded chromeos-base/power_manager-client to v0.0.1-r2969.
Security
Added support for Nvidia driver version 570.172.08. This fixes CVE-2025-23279.
Fixed
Upgraded dev-libs/nss to v3.110.
Fixed
Upgraded sys-apps/hwdata to v0.391.
Security
Updated apparmor to v3.1.6. This fixes CVE-2016-1585.
Change
Updated the default tag of the GPU driver supporting the NVIDIA H200 GPU device to 570.86.15.
Change
Updated containerd to v2.1.3.
Fixed
Upgraded chromeos-base/update_engine-client to v0.0.1-r2480.
Security
Fixed CVE-2025-31498 in net-dns/c-ares.
Fixed
Upgraded app-admin/sudo to v1.9.17_p2.
Feature
Applied Intel patches to add iRDMA support in the Linux kernel.
Change
Updated cos-gpu-installer to v2.5.5.
Security
Updated systemd to v254.26. This resolves CVE-2025-4598.
Fixed
Upgraded dev-db/sqlite to v3.50.3.
Feature
Fixed an issue in containerd that potentially breaks metric collection.
Fixed
Removed an artifact registry ping that would delay multi-user.target indefinitely for machines with no external IP address.
Change
Upgraded app-containers/docker to v27.5.1, Upgraded app-containers/docker-test to v27.5.1, Upgraded app-containers/docker-cli to v27.5.1.
Security
Fixed CVE-2024-48615 in app-arch/libarchive.
Security
Patched openssl to fix CVE-2023-50782 affecting
dev-python/crytography.
Fixed
Upgraded dev-libs/expat to v2.7.1.
Fixed
Upgraded dev-lang/go to v1.23.11.
Security
Fix CVE-2025-32414, CVE-2025-32415 in dev-libs/libxml2.
Feature
Injected IMEX channel char device for GB200 GPUs.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
