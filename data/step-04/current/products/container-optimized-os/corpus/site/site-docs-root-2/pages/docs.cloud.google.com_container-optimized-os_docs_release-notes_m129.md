---
title: "Container-Optimized OS Release Notes: Milestone 129 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts/features-and-benefits
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/release-notes/m129
  title: "Container-Optimized OS Release Notes: Milestone 129 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Container-Optimized OS Release Notes: Milestone 129
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
April 06, 2026
Change
cos-beta-129-19506-0-121
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
Upgraded sys-apps/iproute2 to version 6.18.0.
Fixed
Fixed a kernel panic in virtio_pci teardown when virtually queues are conditionally skipped.
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed CVE-2026-23270 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
April 01, 2026
Change
cos-beta-129-19506-0-115
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Security
Fixed CVE-2024-14027 in the Linux kernel.
Security
Fixed KCTF-7cb9a23 in the Linux kernel.
March 30, 2026
Change
cos-beta-129-19506-0-109
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
Fixed CVE-2026-27135 in net-libs/nghttp2.
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
Fixed CVE-2026-23304 in the Linux kernel.
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
Fixed KCTF-9df9578 in the Linux kernel.
Change
Runtime sysctl changes:
Added: fs.fuse.max_pages_limit: 256
March 26, 2026
Change
cos-beta-129-19506-0-98
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
Added support for the Lustre 2.14.0_p249 drivers.
Change
Fixed CVE-2026-32597 with pyjwt package upgrade to 2.12.1.
Feature
Added support for loading the ublk kernel module.
Fixed
Fixed an ek-cpu-balloon bug which would result in CPUs being underreported on ek machines with SMT enabled.
Fixed
Upgraded app-admin/google-osconfig-agent to v20260119.00.
Security
Fixed CVE-2025-71265 in the Linux kernel.
Security
Fixed CVE-2025-71266 in the Linux kernel.
Security
Fixed CVE-2025-71267 in the Linux kernel.
Security
Fixed CVE-2025-71268 in the Linux kernel.
Security
Fixed CVE-2026-23069 in the Linux kernel.
Security
Fixed CVE-2026-23083 in the Linux kernel.
Security
Fixed CVE-2026-23085 in the Linux kernel.
Security
Fixed CVE-2026-23086 in the Linux kernel.
Security
Fixed CVE-2026-23095 in the Linux kernel.
Security
Fixed CVE-2026-23097 in the Linux kernel.
Security
Fixed CVE-2026-23099 in the Linux kernel.
Security
Fixed CVE-2026-23103 in the Linux kernel.
Security
Fixed CVE-2026-23105 in the Linux kernel.
Security
Fixed CVE-2026-23107 in the Linux kernel.
Security
Fixed CVE-2026-23110 in the Linux kernel.
Security
Fixed CVE-2026-23243 in the Linux kernel.
Security
Fixed CVE-2026-23254 in the Linux kernel.
Security
Fixed CVE-2026-23262 in the Linux kernel.
Security
Fixed KCTF-329f0b9 in the Linux kernel.
Security
Fixed KCTF-c9bc175 in the Linux kernel.
Security
Updated dev-libs/openssl to v3.5.5. This resolves CVE-2025-15467.
Security
Updated net-misc/curl to v8.19.0. This resolves CVE-2026-1965 and CVE-2026-3783.
Security
Updated sys-libs/binutils-libs to 2.46.0. This resolves CVE-2025-69644.
March 17, 2026
Change
cos-beta-129-19506-0-66
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.2
See List
Change
Added support for the Lustre 2.14.0_p246 drivers.
Change
Fixed the "CrackArmor" vulnerability in the Linux kernel.
Breaking
/dev/hugepages is now mounted with the noexec option.
Breaking
/run is now mounted with the noexec option.
Change
Updated cos-gpu-installer to v2.6.0.
Change
Upgraded CASFS to v0.1.2.
Change
Upgraded app-containers/containerd to v2.2.2.
Change
Upgraded dev-libs/glib to v2.86.3. This fixes CVE-2025-14087, CVE-2025-14512 and CVE-2025-13601.
Feature
Added support for larger ring sizes for the GVNIC driver in DQO-QPL mode.
Fixed
Enabled buffer overflow detection for kernel str/mem functions.
Fixed
Fixed a kernel bug which could cause traffic drops after NIC resets.
Fixed
Fixed performance and efficiency issues in TCPX through optimized netmem handling and scatter-gather list coalescing for large memory mappings.
Fixed
Updated cos-gpu-installer to v2.6.1.
Fixed
Upgraded app-admin/fluent-bit to v4.2.3.1.
Fixed
Upgraded app-admin/sosreport to v4.11.0.
Fixed
Upgraded dev-util/gdbus-codegen to v2.86.3.
Fixed
Upgraded the galog version to v0.0.0-20250924170816-9dbf105986f4 in google-guest-agent to fix an issue with high CPU consumption.
Security
Fixed CVE-2026-23229 in the Linux kernel.
Security
Fixed CVE-2026-23230 in the Linux kernel.
Security
Fixed CVE-2026-23240 in the Linux kernel.
Security
Fixed a packet header clobbering issue in the IDPF driver occurring when SWIOTLB and header split are enabled.
Security
Fixed KCTF-71e99ee in the Linux kernel.
February 24, 2026
Change
cos-beta-129-19506-0-32
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.0
See List
Change
Upgraded net-misc/curl to version 8.18.0. This fixes CVE-2025-13034, CVE-2025-14017, CVE-2025-14524, CVE-2025-14819, CVE-2025-15079, and CVE-2025-15224.
Feature
Added support for 590.44.01 and 590.48.01 NVIDIA driver for NVIDIA_RTX_PRO_6000
Fixed
Added support for NVIDIA driver v580.126.09-grid for NVIDIA_RTX_PRO_6000 GPU type.
Security
Fixed CVE-2025-15281 and CVE-2026-0861 in sys-libs/glibc.
Security
Fixed CVE-2025-68358 in the Linux kernel.
Security
Fixed CVE-2025-68365 in the Linux kernel.
Security
Fixed CVE-2025-68725 in the Linux kernel.
Security
Fixed CVE-2025-71225 in the Linux kernel.
Security
Fixed CVE-2026-23112 in the Linux kernel.
Security
Fixed CVE-2026-23113 in the Linux kernel.
Security
Fixed CVE-2026-23119 in the Linux kernel.
Security
Fixed CVE-2026-23124 in the Linux kernel.
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
Fixed CVE-2026-23177 in the Linux kernel.
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
Fixed CVE-2026-23204 in the Linux kernel.
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
February 20, 2026
Change
cos-beta-129-19506-0-17
Kernel
Docker
Containerd
GPU Drivers
COS-6.12.67
v27.5.1
v2.2.0
See List
Change
Added kernel support for bare-metal on the NVIDIA Grace platform.
Change
Added support for A4X-Max NICs.
Change
Applied ethtool ring length changes to a4x's first Diorite interface.
Change
Enabled Coherent Driver Memory Management by default when installing GPU drivers on GB2000.
Change
Changed the mount options for /mnt/disks to noexec.
Change
Updated CONFIG_BLK_DEV_LOOP_MIN_COUNT to 0. This allows
unlimited loop devices.
Change
Updated app-containers/containerd to v2.2.0.
Change
Updated app-containers/runc to v1.4.0.
Change
Updated dev-libs/openssl to v3.5.4.
Change
Updated the Linux kernel to v6.12.67.
Change
Upgraded dev-libs/json-c from 0.16-r1 to 0.18.0.
Change
Upgraded dev-libs/libuv from 1.43.0 to 1.51.0-r1.
Change
Upgraded dev-util/cmake from 3.26.4 to 3.31.9.
Feature
Added CPU balloon support for ARM CPUs.
Feature
Added ConnectX-8 RDMA support.
Feature
Added GB300 support to cos-extensions.
Feature
Added GDRCopy kernel module for NVIDIA drivers.
Feature
Added IPv6 support for machines using the IDPF driver.
Feature
Added TDX RTMR support.
Feature
Added guest support for paravirtualization of cpuids on ARM machines.
Feature
Added iRDMA support in the Linux kernel.
Feature
Added patches to handle IDPF tx timeouts.
Feature
Added support for CASFS (Content Addressable Storage File System) as a kernel module.
Feature
Added support for NVIDIA GB300 devices.
Feature
Added support for NVIDIA MFT Tools on arm64.
Feature
Added support for NVIDIA driver v535.288.01, v570.211.01 and v580.126.09.
Feature
Added support for NVIDIA driver v580.105.08 and set it as the default version for all GPU types.
Feature
Added support for SCSI logging.
Feature
Added support for the Lustre 2.14.0_p224 drivers.
Feature
Added support for the fwctl subsystem and the Mellanox fwctl driver for ARM64.
Feature
Added support for zswap in the Linux kernel.
Feature
Backported support for AMD SEV-SNP SVSM vTPM driver and
configfs-tsm addition for extended attestation protocol.
Feature
Configured the cos-gpu-installer to use R580 drivers as the
default GPU drivers.
Feature
Disabled DNSSEC by default for COS TPU VMs.
Feature
Enabled HTCP TCP congestion control algorithm as a module.
Feature
Enabled KVM for COS ARM64.
Feature
Enabled Software Watchdog as a module.
Feature
Enabled automatic loading of RDMA kernel modules when CX-8 devices are detected.
Feature
Enabled dynamic vlan configuration for non-primary NICs.
Feature
Enabled hardware optimized SHA256 algorithms for x86 machines with SSSE3 and AVX/AVX2 instructions and ARM64 machines with SHA-NI and ARMv8 Crypto Extensions.
Feature
Enabled the Btrfs kernel module.
Feature
Enabled the google-guest-agent's network management functionality.
Feature
Fixed a bug in cos-extensions which would cause GB200 and GB300 devices not to be detected in one code path, which would result in Imex channels not being created by default.
Feature
Removed the cloud-final.service dependency on multi-user.target which could delay cloud-init user-data scripts indefinitely when long-running startup scripts are used.
Feature
Removed the futility program from the root file system.
Fixed
Add support for NVIDIA MFT Tools v4.33.0.
Fixed
Added binary auth-provider-gcp.
Fixed
Added support for NVIDIA driver v535.274.02 and v570.195.03.
Fixed
Added support for the Lustre 2.14.0_p216 drivers.
Fixed
Backported various TCPDirect networking fixes.
Fixed
Enabled multiport support for CX-8 devices.
Fixed
Fixed a TCPX bug which would sometimes incorrectly report devices as being missing when route cache entries were missing or invalidated.
Fixed
Fixed a bug where setting MTU above 9000 on ARM systems with a 64k page size would cause IDPF networking to fail.
Fixed
Fixed a kernel bug which caused boot to fail for n4 machine types.
Fixed
Fixed an issue in app-containers/runc that caused runc to
use more file descriptors than intended.
Fixed
Fixed an issue where cpusets cgroups did not work with
cgroup v1 enabled.
Fixed
Fixed an issue where the cpuidle driver selected for some
machine types would cause inflated reports of high CPU usage.
Fixed
Fixed bcache latency spikes.
Fixed
Installed app-misc/c_rehash.
Fixed
Made CX-8 NIC naming order deterministic.
Fixed
Made the google-guest-agent more resilient to network link
flakes.
Fixed
Partially fixed an issue where excessive contention among writeback kworkers when switching a large number of inodes between cgroups could lead to system unresponsiveness.
Fixed
Reduced gcr_wait_online retry gap.
Fixed
Removed an artifact registry ping that would delay multi-user.target indefinitely for machines with no external IP address.
Fixed
Reverted a containerd change which reduced the default soft file descriptor limit for processes in containers to 1024.
Fixed
Reverted a containerd change which reduced the default soft file descriptor limit for processes in containers to 1024.
Fixed
Updated app-admin/node-problem-detector to 0.8.21.
Fixed
Updated app-containers/cni-plugins to 1.7.1.
Fixed
Updated app-containers/cri-tools to 1.32.0.
Fixed
Updated cos-gpu-installer to v2.5.10.
Fixed
Updated dev-python/requests to v2.32.4.
Fixed
Updated golang.org/x/crypto, golang.org/x/net, and
golang.org/x/oauth2 in kubelet and kubectl.
Fixed
Updated golang.org/x/oauth2, golang.org/x/net, golang.org/x/crypto, and github.com/golang-jwt/jwt/v5 in Docker.
Fixed
Updated kubelet and kubectl to v1.35.0.
Fixed
Updated net-misc/chrony to v4.8.
Fixed
Updated sys-libs/readline to v8.3.
Fixed
Updated app-admin/google-osconfig-agent to v20250522.00.
Fixed
Updated the dump capture kernel to v6.12.52.
Fixed
Updated toolbox container image tag to v20251002.
Fixed
Upgraded app-admin/fluent-bit to v4.2.2.
Fixed
Upgraded app-admin/node-problem-detector to v0.8.25.
Fixed
Upgraded app-admin/oslogin to v20260116.00.
Fixed
Upgraded app-admin/sosreport to v4.10.2.
Fixed
Upgraded app-admin/sudo to v1.9.17_p2.
Fixed
Upgraded app-benchmarks/microbenchmarks to v0.0.1-r21.
Fixed
Upgraded app-containers/cni-plugins to v1.9.0.
Fixed
Upgraded app-containers/docker-credential-gcr to v2.1.31
Fixed
Upgraded app-containers/docker-credential-helpers to v0.9.5.
Fixed
Upgraded app-crypt/mit-krb5 from version 1.20.1 to version 1.22.1.
Fixed
Upgraded app-emulation/cloud-init to v25.1.4.
Fixed
Upgraded app-shells/bash to v5.3.
Fixed
Upgraded chromeos-base/chromeos-common-script to v0.0.1-r668.
Fixed
Upgraded chromeos-base/chromeos-common-script to v0.0.1-r671.
Fixed
Upgraded chromeos-base/debugd-client to v0.0.1-r2737.
Fixed
Upgraded chromeos-base/google-breakpad to v2026.01.16.201758-r268.
Fixed
Upgraded chromeos-base/minijail to v18-r168.
Fixed
Upgraded chromeos-base/power_manager-client to v0.0.1-r2972.
Fixed
Upgraded chromeos-base/session_manager-client to v0.0.1-r2833.
Fixed
Upgraded chromeos-base/shill-client to v0.0.1-r4879.
Fixed
Upgraded dev-db/sqlite to v3.50.3.
Fixed
Upgraded dev-db/sqlite to v3.50.4.
Fixed
Upgraded dev-db/sqlite to v3.51.1.
Fixed
Upgraded dev-lang/go to v1.23.11.
Fixed
Upgraded dev-lang/go to v1.23.12.
Fixed
Upgraded dev-libs/expat to v2.7.3.
Fixed
Upgraded dev-libs/libxslt to version 1.1.43-r1.
Fixed
Upgraded dev-libs/nss to 3.117 and dev-libs/nspr to 4.37.
Fixed
Upgraded dev-libs/openssl to 3.5.1.
Fixed
Upgraded dev-python/coverage to v7.10.7.
Fixed
Upgraded google-guest-configs to v20260121.00.
Fixed
Upgraded net-dns/c-ares to v1.34.6.
Fixed
Upgraded net-libs/gnutls to v3.8.11.
Fixed
Upgraded net-libs/libtirpc to v1.3.7-r2.
Fixed
Upgraded net-misc/curl from 8.12.1 to 8.17.0.
Fixed
Upgraded net-misc/openssh to 10.0_p1.
Fixed
Upgraded net-misc/rsync to v3.4.1-r2.
Fixed
Upgraded net-misc/socat to v1.8.1.0-r1.
Fixed
Upgraded net-misc/wget to v1.25.0-r1.
Fixed
Upgraded net-nds/rpcbind to v1.2.8.
Fixed
Upgraded sys-apps/dmidecode to v3.7.
Fixed
Upgraded sys-apps/file to v5.46-r3.
Fixed
Upgraded sys-apps/gentoo-functions to v1.7.4.
Fixed
Upgraded sys-apps/hwdata to v0.400.
Fixed
Upgraded sys-apps/kmod to v34.2.
Fixed
Upgraded sys-apps/less to v692.
Fixed
Upgraded sys-apps/makedumpfile to v1.7.8.
Fixed
Upgraded sys-apps/nvme-cli from version 1.6-r1 to version 2.16, added package sys-libs/libnvme.
Fixed
Upgraded sys-apps/pv to v1.10.1.
Fixed
Upgraded sys-apps/pv to v1.10.2.
Fixed
Upgraded sys-apps/pv to v1.10.3.
Fixed
Upgraded sys-apps/pv to v1.9.34.
Fixed
Upgraded sys-apps/pv to v1.9.42.
Fixed
Upgraded sys-apps/pv to v1.9.44.
Fixed
Upgraded sys-auth/pambase to v20251104.
Fixed
Upgraded sys-libs/libcap to v2.77.
Fixed
Upgraded sys-libs/libseccomp to v2.6.0-r3.
Fixed
Upgraded sys-process/audit to 4.0.2-r1.
Fixed
Upgraded sys-process/lsof to v4.99.5.
Fixed
Upgraded sys-process/procps to v4.0.5-r3.
Fixed
Upgraded virtual/logger to v0-r2.
Fixed
upgraded net-fs/cifs-utils to v7.4.
Security
Added support for Nvidia driver version 535.261.03. This fixes CVE-2025-23286 and CVE-2025-23279.
Security
Added support for Nvidia driver version 570.172.08. This fixes CVE-2025-23279.
Security
Fixed CVE-2025-11081, CVE-2025-11082 and CVE-2025-11083 in sys-libs/binutils-libs.
Security
Fixed CVE-2025-11412 in binutils-libs.
Security
Fixed CVE-2025-11413 and CVE-2025-11414 in binutils-libs.
Security
Fixed CVE-2025-11494 in binutils-libs.
Security
Fixed CVE-2025-11495 in binutils-libs.
Security
Fixed CVE-2025-12084 in dev-lang/python.
Security
Fixed CVE-2025-13836 in dev-lang/python.
Security
Fixed CVE-2025-13837 in dev-lang/python.
Security
Fixed CVE-2025-31133, CVE-2025-52565, and CVE-2025-52881 in
app-containers/runc.
Security
Fixed CVE-2025-40147 in the Linux kernel.
Security
Fixed CVE-2025-40212 in the Linux kernel.
Security
Fixed CVE-2025-40256 in the Linux kernel.
Security
Fixed CVE-2025-47914 and CVE-2025-58181 in dev-go/crypto.
Security
Fixed CVE-2025-6052 in dev-libs/glib.
Security
Fixed CVE-2025-61727 in dev-lang/go.
Security
Fixed CVE-2025-61729 in dev-lang/go.
Security
Fixed CVE-2025-66471 and CVE-2025-66418 in dev-python/urllib3.
Security
Fixed CVE-2025-8058 in glibc.
Security
Fixed CVE-2026-21441 in dev-python/urllib3.
Security
Fixed KCTF-01d3c84 in the Linux kernel.
Security
Fixed KCTF-134121b in the Linux kernel.
Security
Fixed KCTF-2397e92 in the Linux kernel.
Security
Fixed KCTF-50da4b9 in the Linux kernel.
Security
Fixed KCTF-60e6489 in the Linux Kernel.
Security
Fixed KCTF-6bb73db in the Linux Kernel.
Security
Fixed KCTF-abad3d0 in the Linux kernel.
Security
Fixed KCTF-b441cf3 in the Linux kernel.
Security
Fixed KCTF-f41c5d1 in the Linux kernel.
Security
Fixed KCTF-f8db647 in the Linux kernel.
Security
Updated dev-libs/libxml2 to version 2.14.6. This resolves CVE-2025-6021.
Security
Updated dev-python/jinja to v3.1.6. This resolves
CVE-2024-56326, CVE-2024-56201 and CVE-2025-27516.
Security
Updated dev-python/urllib3 to v2.5.0. This resolves
CVE-2025-50181.
Security
Updated sys-apps/coreutils to v9.5. This resolves
CVE-2024-0684.
Security
Upgraded dev-libs/glib to 2.82.5. This resolves
CVE-2024-52533.
Security
Upgraded dev-vcs/git to version 2.49.1. This fixes CVE-2025-48385, CVE-2025-27613, CVE-2025-27614, CVE-2025-48384, CVE-2025-46835.
Security
Upgraded net-misc/netplan to 1.1.2. This fixes
CVE-2022-4968.
Security
Upgraded open-vm-tools to 13.0.5. This fixes CVE-2025-41244 in anthos variant.
Security
Upgraded sys-libs/binutils-libs to version 2.45. This fixes CVE-2025-8224,CVE-2025-8225 and CVE-2025-1153.
Security
Upgraded urllib3 to version 1.26.18. This fixes CVE-2021-33503, CVE-2023-43804, and CVE-2023-45803.
Security
Upgraded vim & vim-core to version 9.1.1652. This fixes
CVE-2025-53905, CVE-2025-53906, CVE-2025-9390.
Change
Runtime sysctl changes:
Changed: net.ipv4.udp_mem: 188034 250714 376068 -> 188034 250715 376068
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
