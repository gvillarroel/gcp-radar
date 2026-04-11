---
title: "Container-Optimized OS Release Notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/legacy-release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/legacy-release-notes
  title: "Container-Optimized OS Release Notes \_|\_ Google Cloud Documentation"
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
Container-Optimized OS Release Notes
Stay organized with collections
Save and categorize content based on your preferences.
The following table provides a summary of Container-Optimized OS releases available on
Compute Engine:
Active Milestones
OS version
Image project
x86 image family
Arm image family
Built by
End of support
Release notes
COS 133 DEV
cos-cloud
cos-dev
cos-arm64-dev
Google
To Be Defined
dev
COS 129 BETA
cos-cloud
cos-beta
cos-arm64-beta
Google
To Be Defined
milestone 129
COS 125 LTS
cos-cloud
cos-125-lts
cos-arm64-125-lts
Google
Sept 2027
milestone 125
COS 121 LTS
cos-cloud
cos-121-lts
cos-arm64-121-lts
Google
March 2027
milestone 121
COS 117 LTS
cos-cloud
cos-117-lts
cos-arm64-117-lts
Google
Sept 2026
milestone 117
COS 113 LTS
cos-cloud
cos-113-lts
cos-arm64-113-lts
Google
March 2026
milestone 113
Deprecated Milestones
OS version
Image project
x86 image family
Arm image family
Built by
Deprecation date
Release notes
COS 109 LTS
cos-cloud
cos-109-lts
cos-arm64-109-lts
Google
Sept 2025
milestone 109
COS 105 LTS
cos-cloud
cos-105-lts
cos-arm64-105-lts
Google
March 2025
milestone 105
COS 101 LTS
cos-cloud
cos-101-lts
N/A
Google
Oct 2024
milestone 101
COS 97 LTS
cos-cloud
cos-97-lts
N/A
Google
April 2024
milestone 97
COS 93 LTS
cos-cloud
cos-93-lts
N/A
Google
October 2023
milestone 93
COS 89 LTS
cos-cloud
cos-89-lts
N/A
Google
March 2023
milestone 89
COS 85 LTS
cos-cloud
cos-85-lts
N/A
Google
September 2022
milestone 85
COS 81 LTS
cos-cloud
cos-81-lts
N/A
Google
September 2021 1
milestone 81
COS 77 LTS
cos-cloud
cos-77-lts
N/A
Google
April 2021 1
milestone 77
COS 73 LTS
cos-cloud
cos-73-lts
N/A
Google
June 2020
milestone 73
COS 69 LTS
cos-cloud
cos-69-lts
N/A
Google
December 2019
milestone 69
COS 77 LTS and COS 81 LTS, when bundled with GKE, have slightly longer support durations.
GKE users should consult the
GKE release schedule for details.
↩
Development Release Notes
For release notes related to the milestone under development, see the
Development Release Notes page.
For release notes related to cos-dev before M93, see the
Legacy Release Notes
page.
Note: Kubernetes version provided in the changelog corresponds to the Kubelet
and the Kubectl version that are shipped in that Container-Optimized OS
image. Also, these component version may not be used when running a
GKE cluster using a Container-Optimized OS image.
Changelog
cos-89-16108-470-1
Date: Jun 24, 2021
Kernel: COS-5.4.120
Kubernetes: v1.20.5
Docker: v20.10.3
Containerd: v1.4.4
Default GPU Driver: v450.119.04
Changelog (vs 89-16108-403-51):
* LTS Refresh Release .
* Upgraded dev-db/sqlite to v3.34.1. This resolves CVE-2021-20227.
* Upgraded app-arch/tar to v1.34. This resolves CVE-2021-20193.
* Upgraded dev-vcs/git to v2.29.3. This resolves CVE-2021-21300.
* Updated the Linux kernel to v5.4.120. This resolves CVE-2021-31916 and
CVE-2021-31829.
* Updated kubernetes to v1.20.5.
* Updated containerd to v1.4.4. This resolves CVE-2021-21334.
* Upgraded Google OS Config Agent(aka VMManager) to version 20210607.00.
* Fixed CVE-2021-3537 and CVE-2020-24977 in dev-libs/libxml2.
* Automatically mount OEM partition if it is sealed.
cos-dev-93-16509-0-0
Date: Jun 21, 2021
Kernel: COS-5.10.44
Kubernetes: v1.20.5
Docker: v20.10.6
Containerd: v1.4.4
Default GPU Driver: v450.119.04
Changelog (vs 93-16482-0-0):
* Updated the Linux kernel to v5.10.44.
* Set kernel config flag to enable dump capture kernel for ARM64.
* Runtime sysctl:
* Changed: fs.epoll.max_user_watches: 1668321 -> 1668341
* Changed: fs.file-max: 814309 -> 814308
cos-89-16108-403-51
Date: Jun 21, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.3
Default GPU Driver: v450.119.04
Changelog (vs 89-16108-403-47):
* Fixed a memory leak in the GVE kernel driver.
cos-85-13310-1260-26
Date: Jun 21, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Default GPU Driver: v450.51.06
Changelog (vs 85-13310-1260-23):
* Fixed a memory leak in the GVE kernel driver.
* Fixed a low network bandwidth issue in the Linux kernel.
cos-89-16108-403-47
Date: Jun 14, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.3
Default GPU Driver: v450.119.04
Changelog (vs 89-16108-403-46):
* Fixed a network regression on single-core systems when using the
GVE network interface.
cos-85-13310-1260-23
Date: Jun 14, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Default GPU Driver: v450.51.06
Changelog (vs 85-13310-1260-22):
* Fixed a network regression on single-core systems when using the
GVE network interface.
cos-dev-93-16482-0-0
Date: Jun 09, 2021
Kernel: COS-5.10.42
Kubernetes: v1.20.5
Docker: v20.10.6
Containerd: v1.4.4
Default GPU Driver: v450.119.04
Changelog (vs 93-16442-0-0):
* Upgraded Google OS Config Agent (VMManager) to version 20210607.00.
* Upgraded cloud-init to v21.2.
* Upgraded the Linux kernel to v5.10.42.
* Updated runc to v1.0.0_rc95. This resolves CVE-2021-30465.
* Stackdriver logs now record Docker container names by default.
* As a result of the kernel upgrade, the following sysctl changes occurred:
* Added: kernel.hung_task_all_cpu_backtrace: 0
* Added: kernel.oops_all_cpu_backtrace: 0
* Added: kernel.sched_deadline_period_max_us: 4194304
* Added: kernel.sched_deadline_period_min_us: 100
* Added: net.ipv4.ip_autobind_reuse: 0
* Added: net.ipv4.nexthop_compat_mode: 1
* Added: net.ipv4.tcp_comp_sack_slack_ns: 100000
* Added: net.ipv4.tcp_no_ssthresh_metrics_save: 1
* Added: net.ipv4.tcp_reflect_tos: 0
* Added: net.ipv6.conf.all.rpl_seg_enabled: 0
* Added: net.ipv6.conf.default.rpl_seg_enabled: 0
* Added: net.ipv6.conf.docker0.rpl_seg_enabled: 0
* Added: net.ipv6.conf.eth0.rpl_seg_enabled: 0
* Added: net.ipv6.conf.lo.rpl_seg_enabled: 0
* Added: user.max_time_namespaces: 31820
* Added: vm.compaction_proactiveness: 20
* Added: vm.page_lock_unfairness: 5
* Changed: fs.epoll.max_user_watches: 1668751 -> 1668321
* Changed: fs.file-max: 814576 -> 814309
* Changed: kernel.cap_last_cap: 37 -> 40
* Changed: kernel.threads-max: 63658 -> 63641
* Changed: kernel.usermodehelper.bset: 4294967295 63 -> 4294967295 511
* Changed: kernel.usermodehelper.inheritable: 4294967295 63 -> 4294967295 511
* Changed: net.core.bpf_jit_kallsyms: 0 -> 1
* Changed: net.ipv4.tcp_mem: 94299 125733 188598 -> 94275 125700 188550
* Changed: net.ipv4.udp_mem: 188598 251466 377196 -> 188550 251401 377100
* Changed: user.max_cgroup_namespaces: 31829 -> 31820
* Changed: user.max_ipc_namespaces: 31829 -> 31820
* Changed: user.max_mnt_namespaces: 31829 -> 31820
* Changed: user.max_net_namespaces: 31829 -> 31820
* Changed: user.max_pid_namespaces: 31829 -> 31820
* Changed: user.max_user_namespaces: 31829 -> 31820
* Changed: user.max_uts_namespaces: 31829 -> 31820
* Deleted: kernel.random.read_wakeup_threshold: 64
cos-85-13310-1260-22
Date: Jun 09, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Default GPU Driver: v450.51.06
Changelog (vs 85-13310-1260-17):
* Fixed a network regression on multi-core systems when using the
GVE network interface.
* Updated runc to v1.0.0_rc95. This resolves CVE-2021-30465.
cos-89-16108-403-46
Date: Jun 08, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.3
Default GPU Driver: v450.119.04
Changelog (vs 89-16108-403-42):
* Fixed a low network bandwidth issue in the Linux kernel.
* Updated runc to v1.0.0_rc95. This resolves CVE-2021-30465.
cos-81-12871-1290-12
Date: Jun 08, 2021
Kernel: COS-4.19.188
Kubernetes: v1.17.17
Docker: v19.03.15
Containerd: v1.3.9
Changelog (vs 81-12871-1290-11):
* Updated runc to v1.0.0_rc95. This resolves CVE-2021-30465.
cos-89-16108-403-42
Date: Jun 07, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.3
Default GPU Driver: v450.119.04
Changelog (vs 89-16108-403-26):
* Upgraded the default GPU drver version to 450.119.04.
* Fixed a network regression on multi-core systems when using the
GVE network interface.
* Fixed CPU usage for workloads with heavy page cache usage.
cos-85-13310-1260-17
Date: Jun 07, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Default GPU Driver: v450.51.06
Changelog (vs 85-13310-1260-8):
* Fixed CPU usage for workloads with heavy page cache usage.
cos-81-12871-1290-11
Date: Jun 07, 2021
Kernel: COS-4.19.188
Kubernetes: v1.17.17
Docker: v19.03.15
Containerd: v1.3.9
Changelog (vs 81-12871-1290-8):
* Fixed CVE-2019-25044 in the Linux kernel.
cos-dev-93-16442-0-0
Date: Jun 01, 2021
Kernel: COS-5.4.120
Kubernetes: v1.20.5
Docker: v20.10.6
Containerd: v1.4.4
Default GPU Driver: v450.119.04
Changelog (vs 93-16379-0-0):
* Fixed CPU usage for workloads with heavy page cache usage.
* Fixed 32 x truesize under-estimation for tiny skbs in the Linux kernel.
* Fixed CVE-2021-3537 in libxml2.
* Automatically mount OEM partition if it is sealed.
* Upgraded the default GPU drver version to 450.119.04.
* Upgraded Google OS Config Agent to v20210506.00.
* Updated docker to v20.10.6.
* Updated the Linux kernel to v5.4.120.
* Updated makedumpfile package to v1.6.9.
cos-81-12871-1290-8
Date: Jun 01, 2021
Kernel: COS-4.19.188
Kubernetes: v1.17.17
Docker: v19.03.15
Containerd: v1.3.9
Changelog (vs 81-12871-1290-2):
* Updated docker to v19.03.15. This fixed CVE-2021-21285.
cos-dev-93-16379-0-0
Date: May 03, 2021
Kernel: COS-5.4.114
Kubernetes: v1.20.5
Docker: v20.10.3
Containerd: v1.4.4
Changelog (vs 93-16351-0-0):
* Fixed CVE-2020-24977 in libxml2.
* Updated the Linux kernel to v5.4.114.
* Updated google-guest-agent to v20210408.00.
* Updated sshd.service to not drop active ssh sessions when sshd is
restarted.
cos-89-16108-403-26
Date: May 03, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.3
Changelog (vs 89-16108-403-22):
* Updated google-guest-agent to v20210408.00.
* Updated sshd.service to not drop active ssh sessions when sshd is
restarted.
cos-85-13310-1260-8
Date: May 03, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Changelog (vs 85-13310-1260-5):
* Upgraded dev-vcs/git to version 2.26.3. This resolves CVE-2021-21300.
cos-81-12871-1290-2
Date: Apr 27, 2021
Kernel: COS-4.19.188
Kubernetes: v1.17.17
Docker: v19.03.14
Containerd: v1.3.9
Changelog (vs 81-12871-1245-24):
* LTS Refresh Release .
* Fixed an authentication error when using go-dbus to connect systemd.
* Addressed CVE-2020-12049 in dbus.
* Updated the Linux kernel to v4.19.188.
* Fixed CVE-2021-23840 and CVE-2021-23841 in openssl.
* Updated the built-in kubectl/kubelet to 1.17.17.
* Updated glib to v2.66.7. This resolved CVE-2021-27218 and CVE-2021-27219.
* Updated curl to v7.74.0. This resolved CVE-2020-8177, CVE-2020-8169,
CVE-2020-8285, CVE-2020-8284 and CVE-2020-8286.
* Upgraded tar to 1.34.
* Upgraded libgcrypt to v1.9.1. This addresses CVE-2021-3345.
cos-dev-93-16351-0-0
Date: Apr 22, 2021
Kernel: COS-5.4.113
Kubernetes: v1.20.5
Docker: v20.10.3
Containerd: v1.4.4
Changelog (vs 93-16340-0-0):
* Updated the Linux kernel to v5.4.113.
* Upgraded dev-vcs/git to version 2.31.0. This resolves CVE-2021-21300.
* Fixed an out-of-bounds write issue in the Linux kernel.
cos-89-16108-403-22
Date: Apr 22, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.3
Changelog (vs 89-16108-403-15):
* Fixed an out-of-bounds write issue in the Linux kernel.
cos-85-13310-1260-5
Date: Apr 22, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Changelog (vs 85-13310-1260-1):
* Fixed an out-of-bounds write issue in the Linux kernel.
cos-81-12871-1245-24
Date: Apr 22, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Containerd: v1.3.9
Changelog (vs 81-12871-1245-19):
* Fixed an out-of-bounds write issue in the Linux kernel.
cos-dev-93-16340-0-0
Date: Apr 19, 2021
Kernel: COS-5.4.112
Kubernetes: v1.20.5
Docker: v20.10.3
Containerd: v1.4.4
Changelog (vs 93-16331-0-0):
* Updated the Linux kernel to v5.4.112.
* Updated kubernetes to v1.20.5.
* Upgrade tar to 1.34.
* Enable ip6table_nat as module.
cos-85-13310-1260-1
Date: Apr 13, 2021
Kernel: COS-5.4.109
Kubernetes: v1.18.15
Docker: v19.03.15
Containerd: v1.4.3
Changelog (vs 85-13310-1209-29):
* LTS Refresh Release .
* Updated the Linux kernel to v5.4.109.
* Updated glib to v2.66.7. This fixes CVE-2021-27218 and CVE-2021-27219.
* Updated the built-in kubectl/kubelet to v1.18.15.
* Fixed CVE-2020-28493 in dev-python/jinja.
* Fixed CVE-2020-13630,CVE-2020-9327,CVE-2020-13871,
CVE-2020-11656,CVE-2020-11655,CVE-2020-15358,
CVE-2020-13631,CVE-2020-13632,CVE-2020-13434,CVE-2020-9327,CVE-2020-13435
for dev-db/sqlite
* Upgraded docker to v19.03.15
* Added cos-package-info.json file containing the installed
packages as well as packages used during build time of COS image.
cos-dev-93-16331-0-0
Date: Apr 12, 2021
Kernel: COS-5.4.110
Kubernetes: v1.20.2
Docker: v20.10.3
Containerd: v1.4.4
Changelog (vs 93-16303-0-0):
* Updated the Linux kernel to v5.4.110.
* Upgraded dev-db/sqlite to version 3.34.1. This resolves CVE-2021-20227.
* Upgraded Google OS Config Agent to version 20210331.00.
* Updated containerd to version 1.4.4.
* Configured google-guest-agent to use usermod instead of gpasswd to add
users to groups. This fixes an issue where users
created through cloud-init sometimes were not added to the appropriate
groups.
* Enabled CONFIG_IP6_NF_MANGLE to allow ip6table_mangle kernel module.
cos-85-13310-1209-29
Date: Apr 12, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Containerd: v1.4.3
Changelog (vs 85-13310-1209-24):
* Upgraded openssh to version 8.5_p1. This resolves CVE-2021-28041.
* Upgraded openssl to version 1.1.1k. This resolves CVE-2021-3449 and
CVE-2021-3450.
cos-89-16108-403-15
Date: Apr 07, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 89-16108-403-11):
* Configured google-guest-agent to use usermod instead
of gpasswd to add users to groups. This fixes an issue where users
created through cloud-init sometimes were not added to the appropriate
groups.
* Upgraded Google OS Config Agent to version 20210331.00.
* M89 has been promoted to stable; this image is now ready for production
use.
cos-dev-93-16303-0-0
Date: Apr 05, 2021
Kernel: COS-5.4.108
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 93-16295-0-0):
* Updated openssl to 1.1.1k to resolve CVE-2021-3449 and CVE-2021-3450.
* Enabled CONFIG_TLS and CONFIG_TLS_DEVICE in the kernel to support kTLS.
cos-beta-89-16108-403-11
Date: Apr 05, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 89-16108-403-7):
* Updated openssh to 8.5_p1 to resolve CVE-2021-28041.
* Updated openssl to 1.1.1k to resolve CVE-2021-3449 and CVE-2021-3450.
cos-85-13310-1209-24
Date: Apr 05, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Changelog (vs 85-13310-1209-17):
* Updated openssl to version 1.1.1j. This resolves CVE-2021-23840 and
CVE-2021-23841.
cos-81-12871-1245-19
Date: Apr 05, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Changelog (vs 81-12871-1245-15):
* Updated sqlite to version 3.33.0. This resolves the following CVEs:
CVE-2020-13630
CVE-2020-9327
CVE-2020-13871
CVE-2020-11656
CVE-2020-11655
CVE-2020-15358
CVE-2020-13631
CVE-2020-13632
CVE-2020-13434
CVE-2020-9327
CVE-2020-13435
cos-dev-93-16295-0-0
Date: Mar 29, 2021
Kernel: COS-5.4.108
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 93-16259-0-0):
* Upgraded OpenSSH to v8.5_p1. This resolved CVE-2021-28041.
* Updated docker-credential-gcr to v2.0.4.
* Updated the Linux kernel to v5.4.108.
* Fixed an issue in google-guest-agent where the GID of a user's home
directory referred to a different user after a reboot.
* Enabled CONFIG_TLS in the kernel to support OpenSSL3.0.
cos-beta-89-16108-403-7
Date: Mar 29, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 89-16108-403-1):
* Enabled CONFIG_TLS in the kernel to support OpenSSL3.0.
* Fixed an issue in google-guest-agent where the GID of a user's home
directory referred to a different user after a reboot.
cos-beta-89-16108-403-1
Date: Mar 23, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 89-16108-0-380):
* LTS Refresh Release .
* Upgraded dev-python/jinja to v2.11.3. This resolved CVE-2020-28493.
* Updated openssl to version 1.1.1j. This resolved CVE-2021-23840 and
CVE-2021-23841.
* Updated glib to v2.66.7. This resolved CVE-2021-27218 and CVE-2021-27219.
* Updated the Linux kernel to v5.4.104. This resolved CVE-2021-28038,
CVE-2021-27363, CVE-2021-27365, CVE-2021-27364 and CVE-2020-27825.
* Updated docker-cli to v20.10.3. This resolved CVE-2021-21285.
* Updated docker to v20.10.3. This resolved CVE-2021-21285.
* Updated e2fsprogs and e2fsprogs-libs to v1.46.2.
* Updated docker-credential-gcr to v2.0.4.
cos-dev-93-16259-0-0
Date: Mar 22, 2021
Kernel: COS-5.4.104
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 93-16240-0-0):
* Updated cos-gpu-installer to v2.0.5 in cos-extensions.
* Upgrade e2fsprogs to version 1.46.2
* Updated the Linux kernel to upstream/v5.4.104.
cos-beta-89-16108-0-380
Date: Mar 22, 2021
Kernel: COS-5.4.92
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 89-16108-0-376):
* Make google-guest-agent part of systemd-networkd.
cos-dev-93-16240-0-0
Date: Mar 15, 2021
Kernel: COS-5.4.102
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 93-16234-0-0):
* Updated the Linux kernel to v5.4.102.
cos-dev-93-16234-0-0
Date: Mar 08, 2021
Kernel: COS-5.4.101
Kubernetes: v1.20.2
Docker: v20.10.3
Changelog (vs 93-16207-0-0):
* Revert "Stackdriver logs now record Docker container names by default"
due to an incompatibility with Kubernetes.
* Upgraded sys-auth/pambase to version 20201103.
* Upgraded sys-libs/pam to version 1.5.1.
* Upgraded sys-auth/passwdqc to version 1.4.0.
* Updated the Linux kernel to upstream/v5.4.101.
* Updated Docker to 20.10.3.
* Updated openssl to version 1.1.1j. This resolves CVE-2021-23840 and
CVE-2021-23841.
* Updated chronyd to run as the chrony user instead of the root user.
cos-beta-89-16108-0-376
Date: Mar 08, 2021
Kernel: COS-5.4.92
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 89-16108-0-262):
* Revert "Stackdriver logs now record Docker container names by default"
due to an incompatibility with Kubernetes.
* Fixed warning in docker when homedir not present.
* Fixed CVE-2021-3347 in the Linux kernel.
cos-dev-93-16207-0-0
Date: Mar 01, 2021
Kernel: COS-5.4.100
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 93-16173-0-0):
* Upgraded libgcrypt to v1.9.1. This addresses CVE-2021-3345.
* Upgraded dev-python/jinja to v2.11.3. This addresses CVE-2020-28493.
* Updated glib to v2.66.7. This addresses CVE-2021-27218 and CVE-2021-27219.
* Updated the Linux kernel to v5.4.100.
* Fixed warning in docker when homedir not present.
* Updated cos-gpu-installer to v2.0.4 in cos-extensions.
* Added support for multiple architectures in toolbox.
cos-beta-89-16108-0-262
Date: Mar 01, 2021
Kernel: COS-5.4.92
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 89-16108-0-180):
* Upgraded libgcrypt to v1.9.1. This addresses CVE-2021-3345.
cos-85-13310-1209-17
Date: Mar 01, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Changelog (vs 85-13310-1209-12):
* Upgraded libgcrypt to v1.9.1. This addresses CVE-2021-3345.
cos-81-12871-1245-15
Date: Mar 01, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Changelog (vs 81-12871-1245-10):
* Upgraded libgcrypt to v1.9.1. This addresses CVE-2021-3345.
cos-dev-93-16173-0-0
Date: Feb 22, 2021
Kernel: COS-5.4.98
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 93-16136-0-0):
* Fixed a kernel crash due to fast commit changes.
* Updated the Linux kernel to upstream/v5.4.98.
cos-85-13310-1209-12
Date: Feb 22, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Changelog (vs 85-13310-1209-10):
* Fixed an issue where firewall initialization would fail
because ip6tables was not waiting to claim the xtables lock.
cos-81-12871-1245-10
Date: Feb 22, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Changelog (vs 81-12871-1245-7):
* Fixed an issue where firewall initialization would fail
because ip6tables was not waiting to claim the xtables lock.
cos-beta-89-16108-0-180
Date: Feb 16, 2021
Kernel: COS-5.4.92
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 89-16108-0-69):
* Fixed a kernel crash due to fast commit changes.
* Fixed an issue where firewall initialization would fail because ip6tables was not waiting to claim the xtables lock.
cos-dev-93-16136-0-0
Date: Feb 08, 2021
Kernel: COS-5.4.95
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 89-16091-0-0):
* Remove read/write/execute permissions of group and other user accounts
for systemd timer files.
* Upgraded e2fsprogs to version 1.46.0.
* Upgraded sys-libs/e2fsprogs-libs-1.46.0.
* Downgraded Google OS Config Agent to v20201229.01.
* Added package net-fs/cifs-utils v6.11.
* Updated the Linux kernel to v5.4.95.
cos-beta-89-16108-0-69
Date: Feb 08, 2021
Kernel: COS-5.4.92
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 89-16091-0-0):
* Remove read/write/execute permissions of group and other user accounts
for systemd timer files.
* Upgraded e2fsprogs to version 1.46.0.
* Upgraded sys-libs/e2fsprogs-libs-1.46.0.
* Downgraded Google OS Config Agent to v20201229.01.
* Added package net-fs/cifs-utils v6.11.
cos-85-13310-1209-10
Date: Feb 08, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Changelog (vs 85-13310-1209-7):
* Fixed 32 x truesize under-estimation for tiny skbs in the Linux kernel.
cos-81-12871-1245-7
Date: Feb 08, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Changelog (vs 81-12871-1245-6):
* Fixed 32x truesize under-estimation for tiny skbs in the Linux kernel.
cos-dev-89-16091-0-0
Date: Feb 01, 2021
Kernel: COS-5.4.92
Kubernetes: v1.20.2
Docker: v20.10.2
Changelog (vs 88-16038-0-0):
* Upgraded app-admin/sudo to version 1.9.5_p2. This resolves CVE-2021-3156.
* Upgraded the default GPU driver version to 450.80.02.
* Upgraded Docker to v20.10.2.
* Updated runc to v1.0.0_rc92.
* Updated tini to v0.19.0.
* Updated docker-proxy to v0.8.0_p20201215.
* Updated the Linux kernel to v5.4.92.
* Updated the built-in kubectl/kubelet to 1.20.2.
* Updated node-problem-detector to v0.8.6.
* Updated systemd to track the v239-stable branch.
* Added CIFS support.
* Backported support for experimental ext4 fast commit.
* Stackdriver logs now record Docker container names by default.
cos-85-13310-1209-7
Date: Feb 01, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Changelog (vs 85-13310-1209-3):
* Upgraded app-admin/sudo to version 1.9.5_p2. This resolves CVE-2021-3156.
cos-81-12871-1245-6
Date: Feb 01, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Changelog (vs 81-12871-1245-2):
* Upgraded app-admin/sudo to version 1.9.5_p2. This resolves CVE-2021-3156.
cos-dev-88-16038-0-0
Date: Jan 25, 2021
Kernel: COS-5.4.90
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 88-16013-0-0):
* Updated cos-gpu-installer to v2.0.3 in cos-extensions. Fixed an issue in
which installing GPU drivers was failing due to loading GPU kernel modules
in incorrect order.
* Updated the Linux kernel to upstream/v5.4.90.
* Added support for parsing container logs in json format.
cos-85-13310-1209-3
Date: Jan 25, 2021
Kernel: COS-5.4.89
Kubernetes: v1.18.13
Docker: v19.03.14
Changelog (vs 85-13310-1041-161):
* LTS Refresh Release .
* Updated cos-gpu-installer to v2.0.3 in cos-extensions. Fixed an issue in
which installing GPU drivers was failing due to loading GPU kernel modules
in incorrect order.
* Fixed an authenication error when using go-dbus to connect systemd.
* Updated Docker to v19.03.14.
* Updated the Linux kernel to upstream/v5.4.89.
* Updated the built-in kubectl/kubelet to v1.18.13.
* Added support for the bpf_get_netns_cookie eBPF helper.
* Updated containerd to v1.4.3.
cos-81-12871-1245-2
Date: Jan 25, 2021
Kernel: COS-4.19.167
Kubernetes: v1.17.15
Docker: v19.03.14
Changelog (vs 81-12871-1230-3):
* LTS Refresh Release .
* Updated Docker to v19.03.14.
* Updated the Linux kernel to upstream/v4.19.167.
* Updated containerd to v1.3.9.
* Updated the built-in kubectl/kubelet to v1.17.15.
cos-dev-88-16013-0-0
Date: Jan 11, 2021
Kernel: COS-5.4.87
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 88-15978-0-0):
* Updated oslogin to v20201216.00.
* Updated stackdriver-logging-agent to 1.8.4.
* Add build time packages to cos-package-info.json.
* Updated containerd to v1.4.3.
* Updated the Linux kernel to v5.4.87.
* Updated Google OS Config Agent to version 20201217.00.
* Add cri-tools package to COS.
cos-85-13310-1041-161
Date: Jan 11, 2021
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-38):
* Fixed CVE-2020-29661 in the Linux kernel.
* Fixed CVE-2020-29660 in the Linux kernel.
* Fixed an issue where sshd is restarted every minute if no
oslogin users are returned by the metadata server.
cos-81-12871-1230-3
Date: Jan 11, 2021
Kernel: COS-4.19.150
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1226-0):
* Created /var/lib/chrony for chrony to work accurately.
* Fixed CVE-2020-29660 in the Linux kernel.
* Fixed CVE-2020-29661 in the Linux kernel.
cos-77-12371-1109-0
Date: Jan 11, 2021
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1105-0):
* Fixed CVE-2020-29660 in the Linux kernel.
* Fixed CVE-2020-29661 in the Linux kernel.
cos-dev-88-15978-0-0
Date: Dec 15, 2020
Kernel: COS-5.4.83
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 88-15823-0-0):
* Updated node-problem-detector to v0.8.5.
* Updated the Linux kernel to upstream/v5.4.83.
* Updated Google OS Config Agent to version 20201208.00.
* Ported sched/futex enhancement to COS kernel.
* Removed metrics-daemon.service from sysdaemons.
* Upgraded python based compute-image-packages to the new Go based
google-guest-agent v20201102.00.
* Added crictl.
* Added console=tty1 to the kernel command line.
cos-dev-88-15823-0-0
Date: Dec 02, 2020
Kernel: COS-5.4.79
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 88-15480-0-0):
* Updated shadow tool suite (sys-apps/shadow) to 4.8.1.
* Updated the Linux kernel to upstream/v5.4.78.
* Updated AppArmor to 2.13.5.
* Updated net-firewall/iptables to 1.8.5.
* Updated Linux Audit (sys-process/audit) to 2.8.5.
* Updated the Linux kernel to upstream/v5.4.79.
* Addressed a regression in VM provisioning time by restructuring cloud-init service dependencies.
* Updated sosreport to 4.0.
* Fixed an authenication error when using go-dbus to connect to systemd.
* Updated the default toolbox Docker image to 20201104-00.
* Moved Docker's "registry-mirrors" configuration to the dockerd command
line to address Kubernetes cluster provisioning errors.
* Fixed CVE-2020-15257 in containerd.
cos-85-13310-1041-38
Date: Dec 02, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-28):
* Fixed CVE-2020-15257 in containerd.
cos-81-12871-1226-0
Date: Dec 02, 2020
Kernel: COS-4.19.150
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1218-0):
* Fixed CVE-2020-15257 in containerd.
cos-77-12371-1105-0
Date: Dec 02, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1096-0):
* Fixed CVE-2020-15257 in containerd.
cos-stable-85-13310-1041-28
Date: Nov 11, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-24):
* cloud-init starts after network-online because cloud-init does not
configure network for COS on GCP.
cos-dev-88-15480-0-0
Date: Nov 02, 2020
Kernel: COS-5.4.72
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 86-15217-0-0):
* Updated the Linux kernel to upstream/v5.4.72.
* Backported INIT_STACK_ALL_ZERO to replace INIT_STACK_ALL.
* Added PPP loadable modules back, which were removed in
cos-rc-85-13310-1019-0.
* Enabled GENEVE in kernel.
* Updated node-problem-detector to identify HungTasks.
* Upgraded libcrypt package to libcrypt-1.
* Made node-problem-detector as default monitoring agent. Also, deprecated
Stackdriver monitoring agent.
* Fixed data corruption in network packet for gve-1.1.0.
* Upgraded google-osconfig-agent to 20201008.00.
cos-81-12871-1218-0
Date: Oct 26, 2020
Kernel: COS-4.19.150
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1216-0):
* Updated the Linux kernel to v4.19.150.
cos-77-12371-1096-0
Date: Oct 26, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1088-0):
* Fixed CVE-2020-14356.
cos-stable-85-13310-1041-24
Date: Oct 19, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-17):
* Backported INIT_STACK_ALL_ZERO to replace INIT_STACK_ALL.
* Fixed data corruption in network packet for gve-1.1.0.
cos-81-12871-1216-0
Date: Oct 19, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1210-0):
* Fixed CVE-2020-14356.
cos-stable-85-13310-1041-17
Date: Oct 12, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-14):
* Added PPP loadable modules back, which were removed in
cos-rc-85-13310-1019-0.
* Moved Docker's "registry-mirrors" configuration to the dockerd command
line to address Kubernetes cluster provisioning errors.
cos-81-12871-1210-0
Date: Oct 12, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1207-0):
* Added PPP loadable modules back, which were removed in
cos-81-12871-1185-0.
* Moved Docker's "registry-mirrors" configuration to the dockerd command
line to address Kubernetes cluster provisioning errors.
cos-77-12371-1088-0
Date: Oct 12, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1086-0):
* Added PPP loadable modules back, which were removed in
cos-77-12371-1072-0.
* Moved Docker's "registry-mirrors" configuration to the dockerd command
line to address Kubernetes cluster provisioning errors.
cos-dev-86-15217-0-0
Date: Oct 08, 2020
Kernel: COS-5.4.69
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 86-15199-0-0):
* Updated the Linux kernel to v5.4.69.
* Moved the configuration of Docker's "registry-mirrors" option from the
dockerd command line to /etc/docker/daemon.json. This should allow users
to configure a custom registry mirror, which can be useful when responding
to recent Docker Hub free tier changes.
cos-stable-85-13310-1041-14
Date: Oct 08, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-9):
* Moved the configuration of Docker's "registry-mirrors" option from the
dockerd command line to /etc/docker/daemon.json. This should allow users
to configure a custom registry mirror, which can be useful when responding
to recent Docker Hub free tier changes.
cos-81-12871-1207-0
Date: Oct 08, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1200-0):
* Fixed an issue in containerd that can cause the Kubelet on master VMs
to fail to restart containers in static pods.
* Moved the configuration of Docker's "registry-mirrors" option from the
dockerd command line to /etc/docker/daemon.json. This should allow users
to configure a custom registry mirror, which can be useful when responding
to recent Docker Hub free tier changes.
cos-77-12371-1086-0
Date: Oct 08, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1079-0):
* Moved the configuration of Docker's "registry-mirrors" option from the
dockerd command line to /etc/docker/daemon.json. This should allow users
to configure a custom registry mirror, which can be useful when responding
to recent Docker Hub free tier changes.
* Fixed CVE-2020-15157 in containerd.
cos-dev-86-15199-0-0
Date: Oct 01, 2020
Kernel: COS-5.4.68
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 86-15184-0-0):
* Updated the Linux kernel to v5.4.68.
* Fixed a kernel crash in KTD.
* Updated node-problem-detector to detect dockerhung, corruptdockeroverlays
and docker start-up failures.
cos-dev-86-15184-0-0
Date: Sep 24, 2020
Kernel: COS-5.4.66
Kubernetes: v1.19.2
Docker: v19.03.13
Changelog (vs 86-15168-0-0):
* Fixed CVE-2019-5815 in libxslt (heap corruption via crafted XML data).
* Fixed CVE-2019-19956 in libxml2 (memory leak).
* Updated cloud-init to 20.1.
* Upgraded Docker to version 19.03.13.
* Updated the Linux kernel to v5.4.66.
* Added nfs-utils.
* Updated the built-in kubectl/kubelet to 1.19.2.
* Upgraded containerd to version 1.4.1.
cos-85-13310-1041-9
Date: Sep 24, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.9
Docker: v19.03.9
Changelog (vs 85-13310-1041-1):
* Updated the built-in kubectl/kubelet to 1.18.9.
* Updated e2fsprogs to fix partition resize issue.
* Upgraded containerd to version 1.4.1.
* Fixed a kernel crash in KTD.
* Added nfs-utils.
cos-81-12871-1200-0
Date: Sep 24, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1196-0):
* Fixed an issue where containerd leaked eventfds.
cos-dev-86-15168-0-0
Date: Sep 18, 2020
Kernel: COS-5.4.65
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 86-15151-0-0):
* Updated node-problem-detector to version 0.8.4
* Updated the Linux kernel to v5.4.65.
* Deprecate stackdriver monitoring and replace with node-problem-detector
when `google-monitoring-enabled` key is set to true.
* Fixed a containerd issue found after 1.4.0 upgrade where the container
would become unresponsive after running `docker exec`.
cos-beta-85-13310-1041-1
Date: Sep 18, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 85-13310-1040-0):
* Fixed a containerd issue found after 1.4.0 upgrade where the container
would become unresponsive after running `docker exec`.
cos-81-12871-1196-0
Date: Sep 05, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1190-0):
* Fixed Linux kernel vulnerability CVE-2020-14386 by fixing an integer
overflow issue in tpacket_rcv.
cos-77-12371-1079-0
Date: Sep 05, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1073-0):
* Fixed Linux kernel vulnerability CVE-2020-14386 by fixing an integer
overflow issue in tpacket_rcv.
cos-73-11647-656-0
Date: Sep 05, 2020
Kernel: COS-4.14.174
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-600-0):
* Fixed Linux kernel vulnerability CVE-2020-14386 by fixing an integer
overflow issue in tpacket_rcv.
cos-dev-86-15151-0-0
Date: Sep 04, 2020
Kernel: COS-5.4.61
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 86-15130-0-0):
* Fixed Linux kernel vulnerability CVE-2020-14386 by fixing an integer
overflow issue in tpacket_rcv.
* Added package rpcbind to support rpc.
* Updated the Linux kernel to v5.4.61.
* Added package nfs-utils to support NFS.
* Upgraded containerd to v1.4.0.
cos-beta-85-13310-1040-0
Date: Sep 04, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 85-13310-1037-0):
* Fixed Linux kernel vulnerability CVE-2020-14386 by fixing an integer
overflow issue in tpacket_rcv.
* Added package rpcbind to support rpc.
* Added package nfs-utils to support NFS.
* Upgraded containerd to v1.4.0.
cos-beta-85-13310-1037-0
Date: Sep 02, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 85-13310-1034-0):
* Added ext4 block bitmap prefetching feature.
cos-dev-86-15130-0-0
Date: Aug 27, 2020
Kernel: COS-5.4.60
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 86-15119-0-0):
* Updated the built-in kubectl/kubelet to 1.18.8.
* Updated Konlet to v0.11.0.
* Updated the Linux kernel to v5.4.60.
* Updated OpenSSH to v8.3_p1.
cos-rc-85-13310-1034-0
Date: Aug 27, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.8
Docker: v19.03.9
Changelog (vs 85-13310-1032-0):
* Updated the built-in kubectl/kubelet to 1.18.8.
* Updated Konlet to v0.11.0.
cos-stable-77-12371-1073-0
Date: Aug 21, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1072-0):
* Enabled utmp in systemd to allow creation of utmp files.
cos-stable-81-12871-1190-0
Date: Aug 20, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1185-0):
* Reverted the change that enforcing kernel modules must be signed.
* Removed cos-extensions utility. Users should use cos-gpu-installer
to install GPU drivers on COS milestone 81.
* Enabled utmp in systemd to allow creation of utmp files.
cos-dev-86-15119-0-0
Date: Aug 17, 2020
Kernel: COS-5.4.58
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 86-15103-0-0):
* Upgraded the Linux kernel to v5.4.58.
* Enabled utmp in systemd to allow creation of utmp files.
* Added XFS quota support in preview mode.
* Upgraded default GPU driver version to 450.51.06.
* Upgraded containerd to 1.4.0-rc.0.
cos-rc-85-13310-1032-0
Date: Aug 17, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13310-1028-0):
* Created /var/lib/chrony for chrony to work accurately.
* Enabled utmp in systemd to allow creation of utmp files.
* Upgraded default GPU driver version to 450.51.06.
cos-dev-86-15103-0-0
Date: Aug 10, 2020
Kernel: COS-5.4.57
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 86-15078-0-0):
* Fixed CVE-2020-14308, CVE-2020-14311 and CVE-2020-15705 in grub.
* Update docker-credential-gcr to v2.0.2.
* Made dioread_nolock non-default.
* Added the cos-extensions-manager package. Click here to learn more about cos-extensions.
* Fixed bug in chrony due to non-presence of /var/lib/chrony.
* Updated the Linux kernel to v5.4.57.
* Updated e2fsprogs to fix partition resize issue.
cos-77-12371-1072-0
Date: Aug 10, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-1064-0):
* Disabled CONFIG_PPP to mitigate Linux Kernel CVE-2020-14416.
* Fixed CVE-2020-15705 in grub.
cos-rc-85-13310-1028-0
Date: Aug 07, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13310-1023-0):
* Fixed CVE-2020-14308, CVE-2020-14311 and CVE-2020-15705 in grub.
* Fixed CVE-2020-14155 and CVE-2019-20838 in libpcre.
* Updated docker-credential-gcr to v2.0.2.
* Made dioread_nolock non-default.
* Added the cos-extensions-manager package. Click here to learn more about cos-extensions.
cos-81-12871-1185-0
Date: Aug 07, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1174-0):
* Fixed CVE-2020-14308, CVE-2020-14311 and CVE-2020-15705 in grub.
* Disabled CONFIG_PPP to mitigate Linux Kernel CVE-2020-14416.
* Added the cos-extensions-manager package. Click here to learn more about cos-extensions.
* Updated docker-credential-gcr to v2.0.2.
cos-dev-86-15078-0-0
Date: Jul 30, 2020
Kernel: COS-5.4.53
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 86-15053-0-0):
* Removed the metrics daemon to address an issue where it would
periodically cause CPU usage spikes in some cases.
* Updated the Linux kernel to v5.4.53.
* Updated toolbox to version 20200715-00.
* Added support for LSM and SELinux checks.
* Fixed CVE-2020-14155 by updating libpcre to version 8.44.
cos-rc-85-13310-1023-0
Date: Jul 30, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13310-1019-0):
* Removed the metrics daemon to address an issue where it would
periodically cause CPU usage spikes in some cases.
cos-81-12871-1174-0
Date: Jul 30, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-1160-0):
* Removed the metrics daemon to address an issue where it would
periodically cause CPU usage spikes in some cases.
* Changed kernel command line to enforce kernel module must be signed.
cos-77-12371-1064-0
Date: Jul 30, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-326-0):
* Removed the metrics daemon to address an issue where it would
periodically cause CPU usage spikes in some cases.
cos-rc-85-13310-1019-0
Date: Jul 24, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13310-1015-0):
* Backport upstream patch 'perf_event: support for LSM and SELinux check'.
* Disable CONFIG_PPP to mitigate Linux Kernel CVE-2020-14416.
* Updated toolbox tag to 20200715-00.
cos-stable-81-12871-1160-0
Date: Jul 24, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-181-0):
* Updated node problem detector to 0.8.1
cos-rc-85-13310-1015-0
Date: Jul 15, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13310-12-0):
* Update tcp_keepalive_time to 300 seconds.
cos-stable-81-12871-181-0
Date: Jul 13, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-148-0):
* Added rsync back into the image, which was removed in
cos-dev-77-12293-0-0.
* Mount /var/lib/containerd with exec option.
* Fixed CVE-2019-9169.
* Enabled support for Confidential VMs.
cos-stable-77-12371-326-0
Date: Jul 13, 2020
Kernel: COS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-296-0):
* Added rsync back into the image, which was removed in
cos-dev-77-12293-0-0.
* Mount /var/lib/containerd with exec option.
* Moved Kernel source to cos.googlesource.com.
* Fixed CVE-2019-9169.
cos-stable-73-11647-600-0
Date: Jul 13, 2020
Kernel: COS-4.14.174
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-559-0):
* Moved Kernel source to cos.googlesource.com.
* Mounted /var/lib/containerd with exec option.
* Fixed incorrect bprm->vma_pages prevent capturing all stack pages.
cos-dev-86-15053-0-0
Date: Jul 09, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13288-0-0):
* Disabled CONFIG_PPP to mitigate Linux Kernel CVE-2020-14416.
* Enabled INIT_STACK_ALL kernel hardening option.
* Made /proc/self/mem readonly.
* Integrated KTD LSM into 5.4 kernel.
* Disabled hung_task_panic by default.
* Upgraded Konlet to v0.10.0
* Added rsync back into the image, which was removed in cos-dev-77-12293-0-0.
* Upgraded docker-credential-gcr to 2.0.1.
* Added FUSE userspace utilities.
* Added the cos-extensions-manager package. Click here to learn more about cos-extensions.
* Updated tcp_keepalive_time to 300 seconds.
* Increased kdump memory reservation to 256M for 8G-16G instances.
* Enabled DEVTMFS_SAFE, which automounts devtmpfs with nosuid and noexec.
* Added sys-apps/nvme-cli package.
* Upgraded oslogin to v20200507.00.
* Made chrony the default NTP client.
* Added Google OS Config Agent.
* Upgraded the Linux kernel to v5.4.49.
* Mount /var/lib/containerd with exec option.
* Upgraded compute-image-packages to v20191210.
* Addressed CVE-2020-12049 in dbus.
* Fixed a bug that caused OS login to use excessive amounts of memory.
* Enabled support for Confidential VMs.
cos-rc-85-13310-12-0
Date: Jul 09, 2020
Kernel: COS-5.4.49
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13288-0-0):
* Upgraded oslogin to v20200507.00.
* Mount /var/lib/containerd with exec option.
* Upgraded docker-credential-gcr to 2.0.1.
* Upgraded the Linux kernel to v5.4.49.
* Enabled INIT_STACK_ALL kernel hardening option.
* Made /proc/self/mem readonly.
* Upgraded compute-image-packages to v20191210.
* Added rsync back into the image, which was removed in cos-dev-77-12293-0-0.
* Added sys-apps/nvme-cli package.
* Integrated KTD LSM into 5.4 kernel.
* Upgraded Konlet to v0.10.0.
* Disabled hung_task_panic by default.
* Enabled DEVTMFS_SAFE, which automounts devtmpfs with nosuid and noexec.
* Increased kdump memory reservation to 256M for 8G-16G instances.
* Added FUSE userspace utilities.
* Added Google OS Config Agent.
* Made chrony the default NTP client.
* Addressed CVE-2020-12049 in dbus.
* Fixed a bug that caused OS login to use excessive amounts of memory.
* Enabled support for Confidential VMs.
cos-dev-85-13288-0-0
Date: Jun 17, 2020
Kernel: COS-4.19.127
Kubernetes: v1.18.3
Docker: v19.03.9
Changelog (vs 85-13260-0-0):
* Fixed a build issue in systemd due to Meson upgrade.
* Updated toolbox base container image to include security patches.
* Upgraded the Linux kernel to v4.19.127.
* Made dioread_nolock non-default.
* Updated the built-in kubectl/kubelet to 1.18.3.
* Updated GVNIC driver to version 1.1.0.
cos-stable-81-12871-148-0
Date: Jun 17, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-146-0):
* Made dioread_nolock non-default.
cos-stable-81-12871-146-0
Date: Jun 16, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-130-0):
* Updated toolbox base container image to include security patches.
cos-77-12371-296-0
Date: Jun 16, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-284-0):
* Updated toolbox base container image to include security patches.
cos-stable-81-12871-130-0
Date: Jun 16, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.6
Docker: v19.03.6
Changelog (vs 81-12871-119-0):
* Updated the built-in kubectl/kubelet to v1.17.6 to fix a bug that could result in the inability to start a cluster.
cos-dev-85-13260-0-0
Date: Jun 01, 2020
Kernel: COS-4.19.124
Kubernetes: v1.18.2
Docker: v19.03.9
Changelog (vs 84-13078-0-0):
* Upgraded the Linux kernel to v4.19.124.
* Upgraded Docker to v19.03.9.
* Upgraded gve driver to v1.1.0.
* Upgraded json-c to v0.14-r2.
* Fixed OS Login CVEs.
* Set default umask to 027.
cos-77-12371-284-0
Date: Jun 01, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-274-0):
* Upgraded libseccomp to version 2.4.2 to address CVE-2019-9893.
cos-73-11647-559-0
Date: Jun 01, 2020
Kernel: ChromiumOS-4.14.174
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-534-0):
* Upgraded libseccomp to version 2.4.2 to address CVE-2019-9893.
cos-stable-81-12871-119-0
Date: May 28, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-117-0):
* Fixed a few OS Login CVEs: CVE-2020-8903, CVE-2020-8907, CVE-2020-8933.
cos-stable-81-12871-117-0
Date: May 27, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-103-0):
* Upgraded sys-libs/libseccomp to version 2.4.2-r1 to fix CVE-2019-9893.
cos-77-12371-274-0
Date: May 26, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-273-0):
* Fixed a few OS Login CVEs: CVE-2020-8903, CVE-2020-8907, CVE-2020-8933.
cos-beta-81-12871-117-0
Date: May 26, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-44-0):
* Added package sys-apps/acl.
* Backported systemd patch ba0d56f55 to address an issue that resulted in
leaked mount units.
* Disabled `accept_ra` on all interfaces by default.
* Moved kernel repository to https://cos.googlesource.com/third_party/kernel.
* Removed gve package.
* Upgraded dev-db/sqlite to version 3.31.1.
* Upgraded sys-libs/libseccomp to version 2.4.2-r1 to fix CVE-2019-9893.
cos-77-12371-273-0
Date: May 21, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-251-0):
* Fixed a Stackdriver Monitoring agent bug where not all mounted disk partitions has their usage reported.
cos-dev-84-13078-0-0
Date: May 07, 2020
Kernel: COS-4.19.119
Kubernetes: v1.18.2
Docker: v19.03.8
Changelog (vs 83-13020-12-0):
* Updated makedumpfile to 1.6.7.
* Added package sys-apps/acl.
* Updated docker to 19.03.8.
* Upgraded to latest google sdk(287) in cos-toolbox.
* Disabled `accept_ra` on all interfaces by default.
* Updated containerd to v1.3.4.
* Upgraded the Linux kernel to v4.19.119.
* Updated the built-in kubectl/kubelet to 1.18.2.
* Updated the Python requests package to v2.22.0 to address CVE-2018-18074.
* Updated libseccomp to v2.4.2 to address CVE-2019-9893.
cos-81-12871-103-0
Date: May 07, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-96-0):
* Added package sys-apps/acl.
cos-73-11647-534-0
Date: May 07, 2020
Kernel: ChromiumOS-4.14.174
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-510-0):
* Image rebuild to address an infrastructure issue. No image changes.
cos-81-12871-96-0
Date: Apr 29, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-76-0):
* Fixed a kernel bug where eBPF programs can cause softlockups.
cos-77-12371-251-0
Date: Apr 29, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-233-0):
* Fixed a kernel bug where eBPF programs can cause softlockups.
lockups
cos-81-12871-76-0
Date: Apr 29, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-69-0):
* Disabled `accept_ra` on all interfaces by default.
cos-77-12371-233-0
Date: Apr 29, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-227-0):
* Disabled `accept_ra` on all interfaces by default.
cos-dev-83-13020-12-0
Date: Apr 13, 2020
Kernel: COS-4.19.114
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 83-12998-0-0):
* Backported systemd patch ba0d56f55 to address an issue that resulted in
leaked mount units.
* Moved kernel repository to https://cos.googlesource.com/third_party/kernel.
* Upgraded the Linux kernel to v4.19.112.
* Backported necessary ext4 patches and made dioread_nolock default.
cos-stable-73-11647-510-0
Date: Apr 13, 2020
Kernel: ChromiumOS-4.14.174
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-501-0):
* Disabled `accept_ra` on all interfaces by default.
* Upgraded OpenSSH to 7.9_p1 to fix CVE-2018-15473.
cos-stable-81-12871-69-0
Date: Apr 05, 2020
Kernel: COS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-44-0):
* Upgraded the Linux kernel to v4.19.112.
* Backported systemd patch ba0d56f55 to address an issue that resulted in
leaked mount units.
* Upgraded dev-db/sqlite to 3.31.1.
* Moved kernel repository to cos.googlesource.com/third_party/kernel.
* Backported necessary ext4 patches and made dioread_nolock default.
cos-stable-77-12371-227-0
Date: Apr 05, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-208-0):
* Upgraded the Linux kernel to v4.19.112.
* Backported systemd patch ba0d56f55 to address an issue that resulted in
leaked mount units.
cos-stable-73-11647-501-0
Date: Apr 05, 2020
Kernel: ChromiumOS-4.14.174
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-459-0):
* Upgraded the Linux kernel to v4.14.174.
* Backported systemd patch ba0d56f55 to address an issue that resulted in
leaked mount units.
cos-dev-83-12998-0-0
Date: Mar 27, 2020
Kernel: ChromiumOS-4.19.108
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 82-12962-0-0):
* Upgraded cloud-init to v19.4.
* Upgraded the Linux kernel to v4.19.108.
* Removed size limit on /etc/ to fix cluster creation failure because of large number of addons.
* Upgraded node problem detector to v0.8.1.
cos-stable-81-12871-59-0
Date: Mar 27, 2020
Kernel: ChromiumOS-4.19.112
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-44-0):
* Upgraded the Linux kernel to v4.19.112.
cos-beta-81-12871-44-0
Date: Mar 17, 2020
Kernel: ChromiumOS-4.19.108
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-38-0):
* Upgraded the Linux kernel to v4.19.108.
* Removed size limit on /etc/ to fix cluster creation failure because of large number of addons.
cos-stable-80-12739-104-0
Date: Mar 17, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.6
Docker: v19.03.5
Changelog (vs 80-12739-91-0):
* Removed size limit on /etc/ to fix cluster creation failure because of large number of addons.
cos-stable-77-12371-208-0
Date: Mar 17, 2020
Kernel: ChromiumOS-4.19.109
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-183-0):
* Enabled NETFILTER_XT_MATCH_SOCKET.
* Fixed a bug where DHCP is not started after link flaps.
* Removed size limit on /etc/ to fix cluster creation failure because of large number of addons.
* Upgraded the Linux kernel to v4.19.109
cos-dev-82-12962-0-0
Date: Mar 09, 2020
Kernel: ChromiumOS-4.19.107
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 82-12941-0-0):
* Enabled kernel config NETFILTER_XT_MATCH_SOCKET.
* Upgraded the Linux kernel to v4.19.107.
* Fixed ssh hostkey verification error.
* Backported two trace_uprobe patches from upstream to make USDT work.
cos-beta-81-12871-38-0
Date: Mar 09, 2020
Kernel: ChromiumOS-4.19.107
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-31-0):
* Enabled kernel config NETFILTER_XT_MATCH_SOCKET.
* Upgraded the Linux kernel to v4.19.107.
* Fixed ssh hostkey verification error.
* Backported two trace_uprobe patches from upstream to make USDT work.
cos-dev-82-12941-0-0
Date: Mar 03, 2020
Kernel: ChromiumOS-4.19.105
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 82-12919-0-0):
* Upgraded the Linux kernel to v4.19.105.
cos-beta-81-12871-31-0
Date: Mar 03, 2020
Kernel: ChromiumOS-4.19.105
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-17-0):
* Upgraded the Linux kernel to v4.19.105.
* Fixed a bug where DHCP is not started after link flaps.
cos-stable-80-12739-91-0
Date: Mar 03, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.6
Docker: v19.03.5
Changelog (vs 80-12739-78-0):
* Minor changes.
cos-dev-82-12919-0-0
Date: Feb 21, 2020
Kernel: ChromiumOS-4.19.104
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 82-12894-0-0):
* Fixed a bug where DHCP is not started after link flaps.
* Upgraded the Linux kernel to v4.19.104.
* Updated the built-in kubectl/kubelet to 1.17.3.
* Made Python3 the default Python interpreter.
* Updated Docker to release v19.03.6.
* Bring back 99-virtio.network to fix DHCPv6 issue.
* Fixed TCP empty skb at the tail of the write queue bug in kernel.
cos-beta-81-12871-17-0
Date: Feb 21, 2020
Kernel: ChromiumOS-4.19.104
Kubernetes: v1.17.3
Docker: v19.03.6
Changelog (vs 81-12871-7-0):
* Upgraded the Linux kernel to v4.19.104.
* Updated the built-in kubectl/kubelet to 1.17.3.
* Upgraded runc to 1.0.0-rc10. This resolves CVE-2019-19921.
* Updated Docker to release v19.03.6.
* Bring back 99-virtio.network to fix DHCPv6 issue.
* Fixed TCP empty skb at the tail of the write queue bug in kernel.
cos-stable-80-12739-78-0
Date: Feb 21, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.6
Docker: v19.03.5
Changelog (vs 80-12739-68-0):
* Bring back 99-virtio.network to fix DHCPv6 issue.
* Fixed TCP empty skb at the tail of the write queue bug in kernel.
cos-77-12371-183-0
Date: Feb 21, 2020
Kernel: ChromiumOS-4.19.104
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-175-0):
* Upgraded the Linux kernel to v4.19.104
* Fixed TCP empty skb at the tail of the write queue bug in kernel.
cos-73-11647-459-0
Date: Feb 21, 2020
Kernel: ChromiumOS-4.14.171
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-449-0):
* Upgraded the Linux kernel to v4.14.171.
* Fixed TCP empty skb at the tail of the write queue bug in kernel.
cos-dev-82-12894-0-0
Date: Feb 12, 2020
Kernel: ChromiumOS-4.19.102
Kubernetes: v1.17.2
Docker: v19.03.5
Changelog (vs 82-12892-0-0):
* Upgraded the Linux kernel to v4.19.102.
cos-beta-81-12871-7-0
Date: Feb 12, 2020
Kernel: ChromiumOS-4.19.102
Kubernetes: v1.17.2
Docker: v19.03.5
Changelog (vs 81-12871-6-0):
* Upgraded the Linux kernel to v4.19.102.
cos-stable-80-12739-68-0
Date: Feb 12, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.6
Docker: v19.03.5
Changelog (vs 80-12739-66-0):
* Upgraded runc to 1.0.0-rc10. This resolves CVE-2019-19921.
cos-77-12371-175-0
Date: Feb 12, 2020
Kernel: ChromiumOS-4.19.102
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-141-0):
* Enabled some QoS and Fair Queuing options in the Linux kernel.
* Upgraded the Linux kernel to v4.19.102.
* Upgraded runc to 1.0.0-rc10. This resolves CVE-2019-19921.
cos-73-11647-449-0
Date: Feb 12, 2020
Kernel: ChromiumOS-4.14.170
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-415-0):
* Upgraded runc to 1.0.0-rc10. This resolves CVE-2019-19921.
* Upgraded the Linux kernel to v4.14.170.
cos-dev-82-12892-0-0
Date: Feb 10, 2020
Kernel: ChromiumOS-4.19.101
Kubernetes: v1.17.2
Docker: v19.03.5
Changelog (vs 81-12854-0-0):
* Upgraded runc to 1.0.0-rc10. This resolves CVE-2019-19921.
* Upgraded cloud-init to v18.5.
* Upgraded the built-in kubelet to 1.17.2.
* Upgraded the Linux kernel to v4.19.101.
* Upgraded iptables to 1.6.2.
* Enabled some QoS and Fair Queuing options.
cos-beta-81-12871-6-0
Date: Feb 10, 2020
Kernel: ChromiumOS-4.19.101
Kubernetes: v1.17.2
Docker: v19.03.5
Changelog (vs 81-12854-0-0):
* Promoted to beta channel.
* Upgraded the built-in kubelet to 1.17.2.
* Upgraded the Linux kernel to v4.19.101.
* Enabled some QoS and Fair Queuing options.
cos-stable-80-12739-66-0
Date: Feb 10, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.6
Docker: v19.03.5
Changelog (vs 80-12739-48-0):
* Promoted to stable channel.
* Updated the built-in kubelet to 1.16.6.
cos-dev-81-12854-0-0
Date: Jan 27, 2020
Kernel: ChromiumOS-4.19.97
Kubernetes: v1.17.1
Docker: v19.03.5
Changelog (vs 81-12834-0-0):
* Upgraded the Linux kernel to v4.19.97.
* Updated the built-in kubelet to 1.17.1.
* Upgraded iptables to v1.6.2.
* Upgraded openssl to 1.0.2u.
cos-beta-80-12739-48-0
Date: Jan 27, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.5
Docker: v19.03.5
Changelog (vs 80-12739-37-0):
* Updated the built-in kubelet to 1.16.5.
cos-dev-81-12834-0-0
Date: Jan 16, 2020
Kernel: ChromiumOS-4.19.94
Kubernetes: v1.17.0
Docker: v19.03.5
Changelog (vs 81-12813-0-0):
* Updated the Linux kernel to v4.19.94.
* Updated gve driver to v1.0.1.
* Updated docker-credential-gcr to 2.0.0.
* Updated docker-credential-helpers to 0.6.3.
* Updated the built-in kubelet to 1.17.0.
cos-beta-80-12739-37-0
Date: Jan 16, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.4
Docker: v19.03.5
Changelog (vs 80-12739-29-0):
* Minor changes.
cos-dev-81-12813-0-0
Date: Jan 07, 2020
Kernel: ChromiumOS-4.19.91
Kubernetes: v1.16.4
Docker: v19.03.5
Changelog (vs 80-12688-0-0):
* Fixed vulnerability in glibc (CVE-2019-19126).
* Upgraded sqlite to 3.30.1 to fix CVE-2019-16168.
* Upgraded sudo to 1.8.28_p1 to fix CVE-2019-14287.
* Fixed CFS quota throttling issue.
* Updated the built-in kubelet to 1.16.4.
* Upgraded oslogin package to v20190315.
* Upgraded the Linux kernel to v4.19.91.
* Upgraded cos-toolbox to 20191218-00.
* Upgrade containerd to v1.3.2.
* Added chrony as an alternative NTP client.
* Added GVNIC driver kernel module.
* Added tcm_loop kernel module.
* Disable multicast protocol LLMNR and MDNS by default.
cos-beta-80-12739-29-0
Date: Jan 07, 2020
Kernel: ChromiumOS-4.19.87
Kubernetes: v1.16.4
Docker: v19.03.5
Changelog (vs 80-12688-0-0):
* Upgraded sudo to 1.8.28_p1 to fix CVE-2019-14287.
* Backported fix for Linux kernel CVE-2019-19072.
* Upgraded the Linux kernel to v4.19.87.
* Updated the built-in kubelet to 1.16.4.
* Upgraded oslogin package to v20190315.
* Added GVNIC driver kernel module.
* Removed alsa/midi/audio kernel features.
cos-stable-79-12607-80-0
Date: Jan 07, 2020
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.3
Docker: v19.03.5
Changelog (vs 79-12607-60-0):
* Backported fix for Linux kernel CVE-2019-19072.
cos-stable-77-12371-141-0
Date: Jan 07, 2020
Kernel: ChromiumOS-4.19.91
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-114-0):
* Backported fix for Linux kernel CVE-2019-19072.
* Fixed CFS quota throttling issue.
* Upgraded the Linux kernel to v4.19.91.
cos-stable-73-11647-415-0
Date: Jan 07, 2020
Kernel: ChromiumOS-4.14.160
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-348-0):
* Fixed CFS quota throttling issue.
* Increase sysctl net.ipv4.tcp_limit_output_bytes to 1048576.
* Upgraded the Linux kernel to v4.14.160.
cos-beta-79-12607-60-0
Date: Dec 16, 2019
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.3
Docker: v19.03.5
Changelog (vs 79-12607-46-0):
* Fixed CFS quota throttling issue.
cos-stable-78-12499-89-0
Date: Dec 16, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.4
Docker: v19.03.3
Changelog (vs 78-12499-59-0):
* Fixed CFS quota throttling issue.
cos-beta-79-12607-46-0
Date: Dec 04, 2019
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.3
Docker: v19.03.5
Changelog (vs 79-12607-32-0):
* Updated Docker to v19.03.5.
* Updated the built-in kubelet to 1.16.3.
cos-dev-80-12688-0-0
Date: Nov 18, 2019
Kernel: ChromiumOS-4.19.83
Kubernetes: v1.16.3
Docker: v19.03.5
Changelog (vs 80-12657-0-0):
* Fixed the problem of spawning 8 runc state process for every exec
on containerd. This was leading to high cpu utilization.
* Upgraded to docker v19.03.5.
* Changed the MTU of the default docker network to 1460.
* Updated the built-in kubelet to 1.16.3.
* Upgraded the Linux kernel to v4.19.83.
* Upgraded sys-libs/libapparmor to version 2.13.3.
cos-beta-79-12607-32-0
Date: Nov 18, 2019
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.0
Docker: v19.03.3
Changelog (vs 79-12607-22-0):
* Minor changes.
cos-dev-80-12657-0-0
Date: Nov 11, 2019
Kernel: ChromiumOS-4.19.81
Kubernetes: v1.15.3
Docker: v19.03.4
Changelog (vs 79-12607-7-0):
* Increase sysctl net.ipv4.tcp_limit_output_bytes to 1048576.
* Fixed the unnecessary creation of two separate test slices
(resulting in 4 systemd log messages total + runtime overhead) for every
runc execution.
* Enabled AMD_MEM_ENCRYPT in COS kernel config.
* Fixed a Stackdriver Monitoring agent bug where not all mounted disk
partitions has their usage reported.
* Upgraded node problem detector to v0.8.0.
* Upgraded Docker to v19.03.4.
* Fixed the problem of spawning 8 runc state process for every exec on
containerd. This was leading to high cpu utilization.
* Revert kubernetes to v1.15.3.
* Revert containerd to v1.2.9.
* Upgraded jsonpatch to v1.23.
* Upgraded jsonpointer to v2.0.
* Upgraded configobj to v5.0.6.
* Fixed a performance regression in completely fair scheduler (CFS).
cos-beta-79-12607-22-0
Date: Nov 11, 2019
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.0
Docker: v19.03.3
Changelog (vs 79-12607-7-0):
* Increase sysctl net.ipv4.tcp_limit_output_bytes to 1048576.
* Fixed the unnecessary creation of two separate test slices
(resulting in 4 systemd log messages total + runtime overhead) for every
runc execution.
* Fixed a Stackdriver Monitoring agent bug where not all mounted disk
partitions has their usage reported.
* Fixed the problem of spawning 8 runc state process for every exec on
containerd. This was leading to high cpu utilization.
* Revert containerd to v1.2.9.
cos-stable-78-12499-59-0
Date: Nov 08, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.4
Docker: v19.03.3
Changelog (vs 78-12499-46-0):
* Increase sysctl net.ipv4.tcp_limit_output_bytes to 1048576.
* Fixed the unnecessary creation of two separate test slices
(resulting in 4 systemd log messages total + runtime overhead) for every
runc execution.
* Fixed the problem of spawning 8 runc state process for every exec on
containerd. This was leading to high cpu utilization.
cos-stable-77-12371-114-0
Date: Oct 31, 2019
Kernel: ChromiumOS-4.19.80
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-89-0):
* Increased sysctl net.ipv4.tcp_limit_output_bytes to 1048576.
* Fixed the problem of spawning 8 runc state process for every exec on
containerd. This was leading to high cpu utilization.
* Fixed the unnecessary creation of two separate test slices (resulting
in 4 systemd log messages total + runtime overhead) for every runc
execution.
* Fixed an issue in runc that resulted in unnecessary CPU consumption.
* Upgraded the Linux kernel to v4.19.80.
* Fixed a performance regression in completely fair scheduler (CFS).
cos-dev-79-12607-7-0
Date: Oct 28, 2019
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.0
Docker: v19.03.3
Changelog (vs 79-12605-0-0):
* Upgraded Docker to v19.03.3.
* Fixed a performance regression in completely fair scheduler (CFS).
cos-beta-78-12499-46-0
Date: Oct 28, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.4
Docker: v19.03.3
Changelog (vs 78-12499-38-0):
* Fixed an issue in runc that resulted in unnecessary CPU consumption.
* Fixed a performance regression in completely fair scheduler (CFS).
cos-73-11647-348-0
Date: Oct 28, 2019
Kernel: ChromiumOS-4.14.150
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-338-0):
* Fixed the unnecessary creation of two separate test slices (resulting in 4
systemd log messages total + runtime overhead) for every runc execution.
* Fixed a performance regression in completely fair scheduler (CFS).
* Upgraded the Linux kernel to v4.14.150.
cos-dev-79-12605-0-0
Date: Oct 21, 2019
Kernel: ChromiumOS-4.19.79
Kubernetes: v1.16.0
Docker: v19.03.2
Changelog (vs 79-12577-0-0):
* Upgraded containerd to v1.3.0.
* Upgraded the built-in kubelet to 1.16.0.
* Upgraded openssl to version 1.0.2t.
cos-beta-78-12499-38-0
Date: Oct 21, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.4
Docker: v19.03.3
Changelog (vs 78-12499-32-0):
* Upgraded the built-in kubelet to 1.15.4.
* Upgraded Docker to v19.03.3
cos-73-11647-338-0
Date: Oct 21, 2019
Kernel: ChromiumOS-4.14.147
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-329-0):
* Fixed an issue in systemd that resulted in unnecessary CPU consumption.
* Fixed an issue in runc that resulted in unnecessary CPU consumption.
cos-dev-79-12577-0-0
Date: Oct 14, 2019
Kernel: ChromiumOS-4.19.76
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 79-12575-0-0):
* Minor changes.
cos-beta-78-12499-32-0
Date: Oct 14, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 78-12499-26-0):
* Updated openssl to 1.0.2t. This resolves CVE-2019-1563.
* Backported a kernel patch to fix performance regression in wbt
scale_up/scale_down
cos-stable-77-12371-89-0
Date: Oct 09, 2019
Kernel: ChromiumOS-4.19.76
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-76-0):
* Upgraded the Linux kernel to 4.19.76
* Backported a kernel patch to ensure the cfs cgroup quota/period ratio
always stays the same. This addresses a Kubernetes issue where the pod
cgroup could be changed into an inconsistent state
* Backported a kernel patch to fix performance regression in wbt
scale_up/scale_down
cos-dev-79-12575-0-0
Date: Oct 08, 2019
Kernel: ChromiumOS-4.19.76
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 79-12544-0-0):
* Upgraded the Linux kernel to 4.19.76
* Enabled FORTIFY_SOURCE, SLAB_FREELIST_RANDOM and SLAB_FREELIST_HARDENED
* Backported a kernel patch to ensure the cfs cgroup quota/period ratio
always stays the same. This addresses a Kubernetes issue where the pod
cgroup could be changed into an inconsistent state
cos-beta-78-12499-26-0
Date: Oct 08, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 78-12499-16-0):
* Backported a kernel patch to ensure the cfs cgroup quota/period ratio
always stays the same. This addresses a Kubernetes issue where the pod
cgroup could be changed into an inconsistent state
cos-stable-73-11647-329-0
Date: Oct 08, 2019
Kernel: ChromiumOS-4.14.145
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-293-0):
* Upgraded the Linux kernel to 4.14.145
* Backported a kernel patch to ensure the cfs cgroup quota/period ratio
always stays the same. This addresses a Kubernetes issue where the pod
cgroup could be changed into an inconsistent state
cos-stable-69-10895-385-0
Date: Oct 08, 2019
Kernel: ChromiumOS-4.14.145
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-348-0):
* Upgraded the Linux kernel to 4.14.145.
* Backported a kernel patch to ensure the cfs cgroup quota/period ratio
always stays the same. This addresses a Kubernetes issue where the pod
cgroup could be changed into an inconsistent state
cos-dev-79-12544-0-0
Date: Sep 27, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 78-12493-0-0):
* New milestone: M79.
* Enabled dm-snapshot.
* Cherry-picked https://github.com/containerd/cri/pull/1084 to containerd.
* Upgraded containerd to v1.2.9.
cos-beta-78-12499-16-0
Date: Sep 27, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 78-12493-0-0):
* Promoted to beta.
* Cherry-picked https://github.com/containerd/cri/pull/1084 to containerd.
cos-stable-77-12371-76-0
Date: Sep 27, 2019
Kernel: ChromiumOS-4.19.72
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-57-0):
* Promoted to stable.
* Cherry-picked https://github.com/containerd/cri/pull/1084 to containerd.
cos-dev-78-12493-0-0
Date: Sep 12, 2019
Kernel: ChromiumOS-4.19.69
Kubernetes: v1.15.3
Docker: v19.03.2
Changelog (vs 78-12477-0-0):
* Upgraded Docker to version 19.03.2
* Upgraded compute-image-packages to 20190801
cos-beta-77-12371-57-0
Date: Sep 12, 2019
Kernel: ChromiumOS-4.19.60
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-44-0):
* Minor changes.
cos-dev-78-12477-0-0
Date: Sep 04, 2019
Kernel: ChromiumOS-4.19.69
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 78-12466-0-0):
* Minor changes.
cos-beta-77-12371-44-0
Date: Sep 04, 2019
Kernel: ChromiumOS-4.19.60
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-37-0):
* Upgraded containerd to v1.2.8.
cos-73-11647-293-0
Date: Sep 04, 2019
Kernel: ChromiumOS-4.14.138
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-267-0):
* Upgraded containerd to v1.2.8.
* Upgraded the Linux kernel to version 4.14.138.
* Backported upstream writeback patches to fix a softlockup issue.
cos-dev-78-12466-0-0
Date: Aug 30, 2019
Kernel: ChromiumOS-4.19.68
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 78-12447-0-0):
* Upgraded containerd to v1.2.8.
cos-beta-77-12371-37-0
Date: Aug 30, 2019
Kernel: ChromiumOS-4.19.60
Kubernetes: v1.15.3
Docker: v19.03.1
Changelog (vs 77-12371-34-0):
* Minor changes.
cos-69-10895-348-0
Date: Aug 30, 2019
Kernel: ChromiumOS-4.14.138
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-329-0):
* Backported upstream writeback patches to fix a softlockup issue.
cos-dev-78-12427-0-0
Date: Aug 16, 2019
Kernel: ChromiumOS-4.19.66
Kubernetes: v1.15.2
Docker: v19.03.1
Changelog (vs 77-12366-0-0):
* Changed kernel compiler from gcc to clang.
* Included app-admin/node-problem-detector in COS.
* Upgraded Docker to version 19.03.1.
* Updated the built-in kubelet to 1.15.2.
* Upgraded to Linux Kernel version 4.19.66; this resolves CVE-2019-1125.
cos-beta-77-12371-24-0
Date: Aug 16, 2019
Kernel: ChromiumOS-4.19.60
Kubernetes: v1.15.2
Docker: v19.03.1
Changelog (vs 77-12366-0-0):
* Changed kernel compiler from gcc to clang.
* Included app-admin/node-problem-detector in COS
* Upgraded Docker to version 19.03.1.
* Updated the built-in kubelet to 1.15.2.
cos-stable-76-12239-60-0
Date: Aug 16, 2019
Kernel: ChromiumOS-4.19.44
Kubernetes: v1.14.4
Docker: v18.09.8
Changelog (vs 76-12239-60-0):
* Promoted to stable channel.
cos-73-11647-267-0
Date: Aug 08, 2019
Kernel: ChromiumOS-4.14.137
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-239-0):
* Upgraded the Linux kernel to v4.14.137. This resolves CVE-2019-1125.
cos-69-10895-329-0
Date: Aug 08, 2019
Kernel: ChromiumOS-4.14.137
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-299-0):
* Upgraded the Linux kernel to v4.14.137. This resolves CVE-2019-1125.
cos-dev-77-12366-0-0
Date: Aug 02, 2019
Kernel: ChromiumOS-4.19.60
Kubernetes: v1.15.1
Docker: v18.09.8
Changelog (vs 77-12318-0-0):
* Added a package sys-fs/xfsprogs.
* Upgraded Docker to version 18.09.8. This resolves CVE-2018-15664.
* Upgraded runc to version 1.0.0_rc8.
* Upgraded docker-proxy to version 0.8.0_p20190513.
* Upgraded the built-in kubelet to 1.15.1.
cos-beta-76-12239-60-0
Date: Aug 02, 2019
Kernel: ChromiumOS-4.19.44
Kubernetes: v1.14.4
Docker: v18.09.8
Changelog (vs 76-12239-39-0):
* Upgraded Docker to version 18.09.8.
cos-dev-77-12318-0-0
Date: Jul 12, 2019
Kernel: ChromiumOS-4.19.47
Kubernetes: v1.15.0
Docker: v18.09.6
Changelog (vs 77-12314-0-0):
* Minor changes.
cos-beta-76-12239-39-0
Date: Jul 12, 2019
Kernel: ChromiumOS-4.19.44
Kubernetes: v1.14.4
Docker: v18.09.7
Changelog (vs 76-12239-29-0):
* Upgraded Docker to version 18.09.7. This resolves CVE-2018-15664.
* Upgraded runc to version 1.0.0_rc8.
* Updated the built-in kubelet to 1.14.4.
* Upgraded docker-proxy to version 0.8.0_p20190513.
* Upgraded containerd to v1.2.7.
cos-stable-75-12105-97-0
Date: Jul 12, 2019
Kernel: ChromiumOS-4.14.111
Kubernetes: v1.13.6
Docker: v18.09.7
Changelog (vs 75-12105-88-0):
* Upgraded Docker to version 18.09.7. This resolves CVE-2018-15664.
* Upgraded runc to version 1.0.0_rc8.
* Upgraded docker-proxy to version 0.8.0_p20190513.
* Fixed an issue introduced by NFLX-2019-001 fixes.
cos-stable-73-11647-239-0
Date: Jul 12, 2019
Kernel: ChromiumOS-4.14.131
Kubernetes: v1.13.3
Docker: v18.09.7
Changelog (vs 73-11647-231-0):
* Upgraded Docker to version 18.09.7. This resolves CVE-2018-15664.
* Upgraded runc to version 1.0.0_rc8.
* Upgraded docker-proxy to version 0.8.0_p20190513.
cos-stable-69-10895-299-0
Date: Jul 12, 2019
Kernel: ChromiumOS-4.14.132
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-277-0):
* Fixed vulnerability in app-arch/bzip2 (CVE-2019-12900).
* Updated kernel to version v4.14.132.
* Fixed an issue introduced by NFLX-2019-001 fixes.
cos-dev-77-12314-0-0
Date: Jul 02, 2019
Kernel: ChromiumOS-4.19.56
Kubernetes: v1.15.0
Docker: v18.09.6
Changelog (vs 77-12293-0-0):
* Upgraded containerd to v1.2.7.
cos-beta-76-12239-29-0
Date: Jul 02, 2019
Kernel: ChromiumOS-4.19.44
Kubernetes: v1.14.2
Docker: v18.09.5
Changelog (vs 76-12239-21-0):
* Fixed an issue introduced by NFLX-2019-001 fixes.
cos-stable-75-12105-88-0
Date: Jul 02, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.6
Docker: v18.09.3
Changelog (vs 75-12105-77-0):
* Upgraded containerd to v1.2.7.
cos-73-11647-231-0
Date: Jul 02, 2019
Kernel: ChromiumOS-4.14.131
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-217-0):
* Upgraded containerd to v1.2.7.
* Updated kernel to version v4.14.131.
* Fixed vulnerability in app-arch/bzip2 (CVE-2019-12900).
* Fixed an issue introduced by NFLX-2019-001 fixes.
cos-dev-77-12293-0-0
Date: Jun 24, 2019
Kernel: ChromiumOS-4.19.53
Kubernetes: v1.15.0
Docker: v18.09.6
Changelog (vs 76-12239-14-0):
* Upgraded to Linux kernel version 4.19.
* Fixed the NFLX-2019-001 TCP SACK vulnerabilities in the Linux kernel.
* Updated the built-in kubelet to 1.15.0.
* Enabled virtio_balloon driver.
* Added the conntrack command line utility.
* Enabled cgroup-v2 hybrid mode.
* Upgraded Docker to v18.09.6.
* Upgraded sys-apps/lm_sensors to version 3.5.0.
* Fixed a vulnerability in vim (CVE-2019-12735) that allows remote attackers to execute arbitrary OS commands.
cos-beta-76-12239-21-0
Date: Jun 24, 2019
Kernel: ChromiumOS-4.19.44
Kubernetes: v1.14.2
Docker: v18.09.5
Changelog (vs 76-12239-14-0):
* Fixed the NFLX-2019-001 TCP SACK vulnerabilities in the Linux kernel.
cos-stable-75-12105-77-0
Date: Jun 24, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.6
Docker: v18.09.3
Changelog (vs 75-12105-71-0):
* Fixed the NFLX-2019-001 TCP SACK vulnerabilities in the Linux kernel.
cos-73-11647-217-0
Date: Jun 19, 2019
Kernel: ChromiumOS-4.14.127
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-214-0):
* Updated the Linux kernel to version 4.14.127 to resolve the NFLX-2019-001
TCP SACK vulnerabilities.
cos-69-10895-277-0
Date: Jun 19, 2019
Kernel: ChromiumOS-4.14.127
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-273-0):
* Updated the Linux kernel to version 4.14.127 to resolve the NFLX-2019-001
TCP SACK vulnerabilities.
cos-dev-76-12239-14-0
Date: Jun 17, 2019
Kernel: ChromiumOS-4.19.44
Kubernetes: v1.14.2
Docker: v18.09.5
Changelog (vs 76-12238-0-0):
* Upgraded to Linux kernel version 4.19.
* Enabled cgroup-v2 hybrid mode in systemd
cos-beta-75-12105-71-0
Date: Jun 17, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.6
Docker: v18.09.3
Changelog (vs 75-12105-54-0):
* Minor changes.
cos-73-11647-214-0
Date: Jun 17, 2019
Kernel: ChromiumOS-4.14.124
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-192-0):
* Updated kernel to version v4.14.124.
* Backported affinity change-set for napi-tx.
cos-69-10895-273-0
Date: Jun 17, 2019
Kernel: ChromiumOS-4.14.124
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-255-0):
* Updated kernel to version v4.14.124.
cos-dev-76-12238-0-0
Date: May 31, 2019
Kernel: ChromiumOS-4.14.120
Kubernetes: v1.14.2
Docker: v18.09.5
Changelog (vs 76-12232-0-0):
* Updated kernel to version 4.14.120.
cos-beta-75-12105-54-0
Date: May 31, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.6
Docker: v18.09.3
Changelog (vs 75-12105-52-0):
* Minor changes.
cos-dev-76-12232-0-0
Date: May 28, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.14.2
Docker: v18.09.5
Changelog (vs 76-12206-0-0):
* Merged Linux Stable Kernel 'v4.14.119' for resolving Microarchitectural
Data Sampling (MDS) vulnerabilities (CVE-2018-12126, CVE-2018-12127,
CVE-2018-12130, CVE-2019-11091).
* Upgrade systemd to v239
* Updated the built-in kubelet to 1.14.2.
* Upgraded cos-toolbox to version 20190523-00.
* Set OOM score to -999 for docker.service and containerd.service to enhance
the reliability of core system daemons.
* Add restart policy in containerd.service, and corrected docker.service's
dependency on containerd.service to allow containerd to recover from crashes.
* Cherry-picked upstream patch https://patchwork.kernel.org/patch/10951403/ in kernel to fix
a bug in lockd introduced by commit 01b79d20008d "lockd: Show pid of lockd for remote locks"
in Linux kernel v4.14.105.
* Rotated keys used by UEFI Secure Boot for signing and verifying the UEFI boot path.
cos-beta-75-12105-52-0
Date: May 28, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.6
Docker: v18.09.3
Changelog (vs 75-12105-40-0):
* Merged Linux Stable Kernel 'v4.14.119' for resolving Microarchitectural
Data Sampling (MDS) vulnerabilities (CVE-2018-12126, CVE-2018-12127,
CVE-2018-12130, CVE-2019-11091).
* Set OOM score to -999 for docker.service and containerd.service to enhance
the reliability of core system daemons.
* Add restart policy in containerd.service, and corrected docker.service's
dependency on containerd.service to allow containerd to recover from crashes.
* Cherry-picked upstream patch https://patchwork.kernel.org/patch/10951403/ in kernel to fix
a bug in lockd introduced by commit 01b79d20008d "lockd: Show pid of lockd for remote locks"
in Linux kernel v4.14.105.
* Rotated keys used by UEFI Secure Boot for signing and verifying the UEFI boot path.
cos-stable-74-11895-125-0
Date: May 28, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.5
Docker: v18.09.3
Changelog (vs 74-11895-86-0):
* Merged Linux Stable Kernel 'v4.14.119' for resolving Microarchitectural
Data Sampling (MDS) vulnerabilities (CVE-2018-12126, CVE-2018-12127,
CVE-2018-12130, CVE-2019-11091).
* Upgraded curl to 7.64.1 to fix CVE-2018-16890.
* Upgraded containerd to version 1.2.6.
* Set OOM score to -999 for docker.service and containerd.service to enhance
the reliability of core system daemons.
* Add restart policy in containerd.service, and corrected docker.service's
dependency on containerd.service to allow containerd to recover from crashes.
* Cherry-picked upstream patch https://patchwork.kernel.org/patch/10951403/ in kernel to fix
a bug in lockd introduced by commit 01b79d20008d "lockd: Show pid of lockd for remote locks"
in Linux kernel v4.14.105.
* Rotated keys used by UEFI Secure Boot for signing and verifying the UEFI boot path.
cos-73-11647-192-0
Date: May 28, 2019
Kernel: ChromiumOS-4.14.119+
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-182-0):
* Upgraded curl to 7.64.1 to fix CVE-2018-16890.
* Upgraded containerd to version 1.2.6.
* Set OOM score to -999 for docker.service and containerd.service to enhance
the reliability of core system daemons.
* Add restart policy in containerd.service, and corrected docker.service's
dependency on containerd.service to allow containerd to recover from crashes.
* Backported affinity changes to support napi-tx in COS.
* Cherry-picked upstream patch https://patchwork.kernel.org/patch/10951403/ in kernel to fix
a bug in lockd introduced by commit 01b79d20008d "lockd: Show pid of lockd for remote locks"
in Linux kernel v4.14.105.
* Rotated keys used by UEFI Secure Boot for signing and verifying the UEFI boot path.
cos-69-10895-255-0
Date: May 28, 2019
Kernel: ChromiumOS-4.14.119+
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-242-0):
* Upgraded curl to 7.64.1 to fix CVE-2018-16890.
* Cherry-picked upstream patch https://patchwork.kernel.org/patch/10951403/ in kernel to fix
a bug in lockd introduced by commit 01b79d20008d "lockd: Show pid of lockd for remote locks"
in Linux kernel v4.14.105.
* Rotated keys used by UEFI Secure Boot for signing and verifying the UEFI boot path.
cos-dev-76-12206-0-0
Date: May 16, 2019
Kernel: ChromiumOS-4.14.118
Kubernetes: v1.14.1
Docker: v18.09.5
Changelog (vs 76-12163-0-0):
* Upgraded the built-in kubelet to 1.14.1.
* Upgraded containerd to version 1.2.6.
* Upgraded sqlite to 3.25.3 to fix CVE-2018-20346.
* Mitigated a mount hang issue in the Linux kernel.
cos-beta-75-12105-40-0
Date: May 16, 2019
Kernel: ChromiumOS-4.14.111
Kubernetes: v1.13.6
Docker: v18.09.3
Changelog (vs 75-12105-24-0):
* Upgraded containerd to version 1.2.6.
* Upgraded the built-in kubelet to 1.13.6.
* Upgraded sqlite to 3.25.3 to fix CVE-2018-20346.
* Upgraded tar to 1.32 to fix CVE-2019-9923.
* Upgraded curl to 7.64.1 to fix CVE-2018-16890.
cos-73-11647-182-0
Date: May 16, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-163-0):
* Merged Linux Stable Kernel 'v4.14.119' for resolving Microarchitectural
Data Sampling (MDS) vulnerabilities (CVE-2018-12126, CVE-2018-12127,
CVE-2018-12130, CVE-2019-11091).
* Mitigated a mount hang issue in the Linux kernel.
cos-69-10895-242-0
Date: May 15, 2019
Kernel: ChromiumOS-4.14.119
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-211-0):
* Merged Linux Stable Kernel 'v4.14.119' for resolving Microarchitectural
Data Sampling (MDS) vulnerabilities (CVE-2018-12126, CVE-2018-12127,
CVE-2018-12130, CVE-2019-11091).
* Mitigated a mount hang issue in the Linux kernel.
cos-dev-76-12163-0-0
Date: May 02, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.5
Changelog (vs 76-12128-0-0):
* Updated curl to 7.64.1. This resolves CVE-2018-16890, CVE-2019-3822 and CVE-2019-3823.
* Updated tar to 1.32. This resolves CVE-2019-9923.
cos-beta-75-12105-24-0
Date: May 02, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.3
Changelog (vs 75-12105-10-0):
* Backported fix for Linux kernel CVE-2019-7308.
* Backported affinity changes to support napi-tx in COS.
cos-dev-76-12128-0-0
Date: Apr 25, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.5
Changelog (vs 75-12103-0-0):
* Upgraded Docker to v18.09.5
* Backported affinity changes to support napi-tx in COS.
cos-beta-75-12105-10-0
Date: Apr 25, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.3
Changelog (vs 75-12103-0-0):
* Promoted to beta channel.
* Minor changes.
cos-stable-74-11895-86-0
Date: Apr 25, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.5
Docker: v18.09.3
Changelog (vs 74-11895-76-0):
* Promoted to stable channel.
* Minor changes.
cos-dev-75-12103-0-0
Date: Apr 19, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.3
Changelog (vs 75-12062-0-0):
* Set LimitNOFILE to 1048576 in containerd.service to fix an issue
where the file descriptor limit was not being properly applied to
containerd.
cos-beta-74-11895-76-0
Date: Apr 19, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.5
Docker: v18.09.3
Changelog (vs 74-11895-56-0):
* Set LimitNOFILE to 1048576 in containerd.service to fix an issue
where the file descriptor limit was not being properly applied to
containerd.
cos-stable-73-11647-163-0
Date: Apr 19, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-121-0):
* Set LimitNOFILE to 1048576 in containerd.service to fix an issue
where the file descriptor limit was not being properly applied to
containerd.
cos-dev-75-12062-0-0
Date: Apr 11, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.3
Changelog (vs 75-12001-0-0):
* Included 'perf' tool in the image.
* Fixed an issue where Docker did not preserve the UIDs/GIDs of the init
process on exec.
* Fixed slow access to /sys/fs/cgroup/memory/memory.stat. This resolves
kubelet performance degradation.
cos-beta-74-11895-56-0
Date: Apr 11, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.5
Docker: v18.09.3
Changelog (vs 74-11895-38-0):
* Minor changes.
cos-69-10895-211-0
Date: Apr 11, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-201-0):
* Fixed slow access to /sys/fs/cgroup/memory/memory.stat. This resolves
kubelet performance degradation.
cos-dev-75-12001-0-0
Date: Apr 01, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.3
Changelog (vs 75-11981-0-0):
* Updated compute-image-package and oslogin package to v20190304.
* Added cos-kernel tool to toolbox.
cos-beta-74-11895-38-0
Date: Apr 01, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.5
Docker: v18.09.3
Changelog (vs 74-11895-32-0):
* Included perf tool in the image.
* Fixed a bug that dockerd may start containerd even if containerd.service exists.
* Fixed an issue where Docker did not preserve the UIDs/GIDs of the init process on exec.
* Updated the built-in kubelet to 1.13.5.
cos-stable-73-11647-121-0
Date: Apr 01, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-112-0):
* Included perf tool in the image.
* Fixed a bug that dockerd may start containerd even if containerd.service exists.
* Fixed an issue where Docker did not preserve the UIDs/GIDs of the init process on exec.
cos-69-10895-201-0
Date: Apr 01, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.8
Docker: v17.03.2
Changelog (vs 69-10895-172-0):
* Included perf tool in the image.
* Included sosreport in the image.
* Updated the built-in kubelet to 1.11.8.
* Fixed an issue where Shielded VM integrity measurements weren't being logged properly.
* Merged Linux Stable Kernel 'v4.14.106'.
cos-dev-75-11981-0-0
Date: Mar 25, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.4
Docker: v18.09.3
Changelog (vs 74-11892-0-0):
* New milestone: M75
* Updated the built-in kubelet to 1.13.4.
* Fixed an issue where a race condition between Docker and containerd
resulted in a Docker live restore failure.
* Upgraded Docker to v18.09.3.
* Upgraded containerd to v1.2.5.
cos-beta-74-11895-32-0
Date: Mar 25, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 74-11892-0-0):
* Promoted to beta channel.
* Upgraded Docker to v18.09.3.
* Upgraded containerd to v1.2.5.
cos-stable-73-11647-112-0
Date: Mar 25, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-97-0):
* Promoted to stable channel.
cos-beta-73-11647-97-0
Date: Mar 18, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.3
Changelog (vs 73-11647-90-0):
* Upgraded Docker to v18.09.3.
* Upgraded containerd to v1.2.5.
cos-dev-74-11892-0-0
Date: Mar 15, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 74-11888-0-0):
* Enabled Shielded VMs. Instances created from this image will use UEFI
firmware and measure boot components into a vTPM by default. Click
here to learn more about Shielded VMs.
cos-beta-73-11647-90-0
Date: Mar 15, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-75-0):
* Minor changes.
cos-stable-72-11316-171-0
Date: Mar 15, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.4
Docker: v18.06.1
Changelog (vs 72-11316-136-0):
* Fixed an issue where setting the "cos-update-strategy"
metadata key to "update_disabled" had no impact on the system's auto
update policy.
cos-dev-74-11888-0-0
Date: Mar 07, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 74-11836-0-0):
* Fixed a bug that caused crash-reporter to abort early.
cos-beta-73-11647-75-0
Date: Mar 07, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-64-0):
* Fixed a bug that caused crash-reporter to abort early.
cos-dev-74-11836-0-0
Date: Feb 28, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 74-11800-0-0):
* Fixed an issue where setting the "cos-update-strategy"
metadata key to "update_disabled" had no impact on the system's auto
update policy.
cos-beta-73-11647-64-0
Date: Feb 28, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-46-0):
* Fixed an issue where setting the "cos-update-strategy"
metadata key to "update_disabled" had no impact on the system's auto
update policy.
cos-69-10895-172-0
Date: Feb 28, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-138-0):
* Enabled kernel.softlockup_all_cpu_backtrace. This was
previously disabled to mitigate a kernel deadlock issue, which is now
resolved.
* Configured docker.service by setting RestartSecs=10 to
always restart Docker after 10 seconds.
cos-dev-74-11800-0-0
Date: Feb 22, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 74-11758-0-0):
* Configured docker.service by setting RestartSecs=10 to
always restart Docker after 10 seconds.
cos-beta-73-11647-46-0
Date: Feb 22, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-35-0):
* Configured docker.service by setting RestartSecs=10 to
always restart Docker after 10 seconds.
cos-dev-74-11758-0-0
Date: Feb 14, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-29-0):
* New milestone: M74.
* Updated containerd to 1.2.3.
* Enabled RAID0 related kernel config.
* Updated openssl to 1.0.2q. This resolves CVE-2018-0734.
cos-beta-73-11647-35-0
Date: Feb 14, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-29-0):
* Promoted to beta channel.
* Updated containerd to 1.2.3.
* Updated openssl to 1.0.2q. This resolves CVE-2018-0734.
cos-stable-72-11316-136-0
Date: Feb 14, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.4
Docker: v18.06.1
Changelog (vs 72-11316-134-0):
* Promoted to stable channel.
cos-dev-73-11647-29-0
Date: Feb 11, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.3
Docker: v18.09.1
Changelog (vs 73-11647-18-0):
* Enabled kernel crash dump Alpha feature in COS.
* Updated the built-in kubelet to 1.13.3.
* Enabled auto update when using Shielded VMs that have never booted in Secure Boot mode. Shielded VMs that have booted in Secure Boot mode at least once will still have auto update disabled. This change does not impact images in cos-cloud.
cos-beta-72-11316-134-0
Date: Feb 11, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.4
Docker: v18.06.1
Changelog (vs 72-11316-115-0):
* Backported fix for Linux kernel CVE-2018-16884.
cos-dev-73-11647-18-0
Date: Feb 04, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.2
Docker: v18.09.1
Changelog (vs 73-11636-0-0):
* Updated docker to v18.09.1.
* Updated containerd to v1.2.2.
* Logs additional debug info on serial console during boot.
cos-beta-72-11316-115-0
Date: Feb 04, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.4
Docker: v18.06.1
Changelog (vs 72-11316-99-0):
* Minor changes.
cos-dev-73-11636-0-0
Date: Jan 24, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.2
Docker: v18.09.0
Changelog (vs 73-11553-0-0):
* Made containerd run as a standalone systemd service.
* Updated the built-in kubelet to 1.13.2.
* Reenabled kernel.softlockup_all_cpu_backtrace sysctl.
* Disabled the CONFIG_DEVMEM configuration option in the kernel.
* Enabled kernel module signing.
* Installed a new package keyutils.
* Updated mdadm to 4.1.
cos-beta-72-11316-99-0
Date: Jan 24, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.4
Docker: v18.06.1
Changelog (vs 72-11316-72-0):
* Updated the built-in kubelet to 1.12.4.
cos-69-10895-138-0
Date: Jan 24, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-123-0):
* Backported the fix for a deadlock issue in kernel panic.
* Merged Linux Stable Kernel 'v4.14.91'.
cos-dev-73-11553-0-0
Date: Jan 10, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.0
Docker: v18.09.0
Changelog (vs 73-11517-0-0):
* Upgraded docker to v18.09.0.
* Cherry-pick Ext4 commits that address FS inconsistencies caused by
disruptions during NFS CREATE operation under certain conditions.
cos-beta-72-11316-72-0
Date: Jan 10, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.3
Docker: v18.06.1
Changelog (vs 72-11316-56-0):
* Set CONFIG_BLK_WBT_MQ=y to improve performance isolation on
persistent disks. This fixes a bug where writes on a SSD persistent
disk can affect performance on the Standard persistent boot disk.
cos-69-10895-123-0
Date: Jan 10, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-102-0):
* Set CONFIG_BLK_WBT_MQ=y to improve performance isolation on
persistent disks. This fixes a bug where writes on a SSD persistent
disk can affect performance on the Standard persistent boot disk.
* Cherry-pick Ext4 commits that address FS inconsistencies caused by
disruptions during NFS CREATE operation under certain conditions.
* Merge Linux Stable Kernel 'v4.14.89'
cos-dev-73-11517-0-0
Date: Jan 03, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.0
Docker: v18.06.1
Changelog (vs 73-11438-0-0):
* Set CONFIG_BLK_WBT_MQ=y to improve performance isolation on
persistent disks. This fixes a bug where writes on a SSD persistent
disk can affect performance on the Standard persistent boot disk.
* Merged Linux stable version v4.14.89 into the kernel.
cos-beta-72-11316-56-0
Date: Jan 03, 2019
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.3
Docker: v18.06.1
Changelog (vs 72-11316-34-0):
* Minor changes.
cos-dev-73-11438-0-0
Date: Dec 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.0
Docker: v18.06.1
Changelog (vs 73-11391-0-0):
* Upgraded runc to version 1.0.0-rc6. Fixes an issue observed in
Kubernetes liveness probes (https://github.com/opencontainers/runc/issues/1884).
cos-beta-72-11316-34-0
Date: Dec 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.3
Docker: v18.06.1
Changelog (vs 72-11316-21-0):
* Enabled the "metadata_csum" ext4 feature on the stateful partition. This
also improves performance of boot-disk resize operation.
cos-stable-71-11151-71-0
Date: Dec 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.5
Docker: v18.06.1
Changelog (vs 71-11151-60-0):
* Enabled the "metadata_csum" ext4 feature on the stateful partition. This
also improves performance of boot-disk resize operation.
* Apply IMA Policy only when cloud-audit-setup.service is explicitly run.
cos-69-10895-102-0
Date: Dec 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-93-0):
* Disabled auto update on shielded images. Images in cos-cloud are
not impacted by this change.
* Enabled the "metadata_csum" ext4 feature on the stateful partition. This
also improves performance of boot-disk resize operation.
* Apply IMA Policy only when cloud-audit-setup.service is explicitly run.
cos-dev-73-11391-0-0
Date: Dec 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.13.0
Docker: v18.06.1
Changelog (vs 72-11316-6-0):
* New milestone: M73.
* Increase default fs.inotify.max_user_instances to 1024.
* Enabled the "metadata_csum" ext4 feature on the stateful partition.
* Updated built-in kubelet to 1.13.0.
* Apply IMA Policy only when cloud-audit-setup.service is explicitly run.
cos-beta-72-11316-21-0
Date: Dec 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.3
Docker: v18.06.1
Changelog (vs 72-11316-6-0):
* Promoted to beta channel.
* Apply IMA Policy only when cloud-audit-setup.service is explicitly run.
cos-stable-71-11151-60-0
Date: Dec 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.5
Docker: v18.06.1
Changelog (vs 71-11151-53-0):
* Promoted to stable channel.
* Updated built-in Kubelet to 1.11.5.
* Disabled auto update on Shielded VM enabled images. Images in 'cos-cloud' project are not impacted by this change.
cos-dev-72-11316-6-0
Date: Dec 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.3
Docker: v18.06.1
Changelog (vs 72-11315-0-0):
* Minor changes.
cos-beta-71-11151-53-0
Date: Dec 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.4
Docker: v18.06.1
Changelog (vs 71-11151-47-0):
* Minor changes.
cos-stable-70-11021-99-0
Date: Dec 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-67-0):
* Backported fix for Linux kernel CVE-2018-17182.
* Backported fix for Linux kernel CVE-2018-18281.
cos-dev-72-11315-0-0
Date: Nov 30, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.12.3
Docker: v18.06.1
Changelog (vs 72-11264-0-0):
* Disabled auto update on Shielded VM enabled images. Images in 'cos-cloud' project are not impacted by this change.
* Updated Kubernetes to v1.12.3.
cos-beta-71-11151-47-0
Date: Nov 30, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.4
Docker: v18.06.1
Changelog (vs 71-11151-32-0):
* Minor changes.
cos-69-10895-93-0
Date: Nov 16, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-91-0):
* Updated kernel to v4.14.79.
* Fixed the bug that cloud-init can't write gzipped files.
cos-dev-72-11264-0-0
Date: Nov 15, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.4
Docker: v18.06.1
Changelog (vs 72-11229-0-0):
* Set CONFIG_SCSI_MQ_DEFAULT=y to enable support for multiqueue SCSI for Local SSD devices.
* Enable a few kernel configs for IPv6.
* Upgraded built-in kubelet to v1.11.4
* Switching back to using gcc to compile the kernel from using clang.
cos-beta-71-11151-32-0
Date: Nov 15, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.4
Docker: v18.06.1
Changelog (vs 71-11151-21-0):
* Upgraded built-in kubelet to v1.11.4
cos-dev-72-11229-0-0
Date: Nov 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 72-11190-0-0):
* Upgrade glibc version to v2.27.
* Use clang compiler to build the Linux kernel.
cos-beta-71-11151-21-0
Date: Nov 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11151-16-0):
* Minor changes.
cos-stable-70-11021-67-0
Date: Nov 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-62-0):
* Minor changes.
cos-dev-72-11190-0-0
Date: Oct 29, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 72-11172-0-0):
* Minor changes.
cos-beta-71-11151-16-0
Date: Oct 29, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11151-5-0):
* Fixed an issue where an interaction between IMA and NFS could cause deadlock.
cos-stable-70-11021-62-0
Date: Oct 29, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-51-0):
* Fixed an issue where an interaction between IMA and NFS could cause deadlock.
cos-69-10895-91-0
Date: Oct 29, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-85-0):
* Fixed an issue where an interaction between IMA and NFS could cause deadlock.
* Fixed a `stackdriver-logging.service` issue observed in Containers on Compute Engine.
* PCID is now enabled by default when supported by the CPU platform.
cos-dev-72-11172-0-0
Date: Oct 19, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11147-0-0):
* New milestone: 72.
* Fixed an issue where an interaction between IMA and NFS could cause deadlock.
* PCID is now enabled by default when supported by the CPU platform.
* Fixed a `stackdriver-logging.service` issue observed in Containers on Compute Engine.
cos-beta-71-11151-5-0
Date: Oct 19, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11147-0-0):
* Promoted to beta channel.
* PCID is now enabled by default when supported by the CPU platform.
* Fixed a `stackdriver-logging.service` issue observed in Containers on Compute Engine.
cos-stable-70-11021-51-0
Date: Oct 19, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-45-0):
* Fixed the bug that cloud-init can't write gzipped files.
* PCID is now enabled by default when supported by the CPU platform.
* Fixed a `stackdriver-logging.service` issue observed in Containers on Compute Engine.
cos-dev-71-11147-0-0
Date: Oct 11, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11128-0-0):
* Fixed bug preventing cloud-init from writing gzipped files.
* Enabled CONFIG_NET_ACT_MIRRED and CONFIG_NET_ACT_PEDIT.
cos-beta-70-11021-45-0
Date: Oct 11, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-39-0):
* Reset softlockup_all_cpu_backtrace to '0' to avoid kernel deadlock on high
CPU machines under certain circumstances.
cos-stable-69-10895-85-0
Date: Oct 11, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-71-0):
* Reset softlockup_all_cpu_backtrace to '0' to avoid kernel deadlock on high
CPU machines under certain circumstances.
cos-dev-71-11128-0-0
Date: Oct 05, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11104-0-0):
* Reset softlockup_all_cpu_backtrace to '0' to avoid kernel deadlock on
high-CPU machines under certain circumstances.
cos-beta-70-11021-39-0
Date: Oct 05, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-29-0):
* Minor changes.
cos-dev-71-11104-0-0
Date: Sep 27, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 71-11074-0-0):
* Updated toolbox docker container tag '20180918-00'
* Installed pigz for faster docker image downloads.
* Update Kubernetes to v1.11.3
cos-beta-70-11021-29-0
Date: Sep 27, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.3
Docker: v18.06.1
Changelog (vs 70-11021-18-0):
* Updated toolbox docker container tag '20180918-00'
* Update Kubernetes to v1.11.3
cos-stable-69-10895-71-0
Date: Sep 27, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-62-0):
* Removed userspace headers from kernel header artifact.
cos-stable-69-10895-62-0
Date: Sep 18, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-52-0):
* Minor changes.
cos-dev-71-11074-0-0
Date: Sep 17, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v18.06.1
Changelog (vs 70-11021-11-0):
* Minor changes.
cos-beta-70-11021-18-0
Date: Sep 17, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v18.06.1
Changelog (vs 70-11021-11-0):
* Minor changes.
* Promoted to beta channel.
cos-stable-69-10895-52-0
Date: Sep 17, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-52-0):
* Promoted to stable channel.
cos-stable-68-10718-106-0
Date: Sep 13, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-102-0):
* Backported a fix to ensure that scsi contributes to randomness when running
rotational device (https://chromium-review.googlesource.com/1212547).
This addresses an issue where docker is slow to start because of
low entropy on standard PDs since v4.14.63 merge.
cos-dev-70-11021-11-0
Date: Sep 10, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v18.06.1
Changelog (vs 70-11021-0-0):
* Backported a fix to ensure that scsi contributes to randomness when running
rotational device (https://chromium-review.googlesource.com/1212545).
This addresses an issue where docker is slow to start because of
low entropy on standard PDs since v4.14.63 merge.
cos-beta-69-10895-52-0
Date: Sep 10, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-42-0):
* Backported a fix to ensure that scsi contributes to randomness when running
rotational device (https://chromium-review.googlesource.com/1212546).
This addresses an issue where docker is slow to start because of
low entropy on standard PDs since v4.14.63 merge.
cos-stable-65-10323-104-0
Date: Sep 10, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-99-0):
* Merge Linux stable kernel 'v4.4.153'.
cos-dev-70-11021-0-0
Date: Aug 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v18.06.1
Changelog (vs 69-10895-27-0):
* Turn on virtio_net.napi_tx.
* Enabled CONFIG_RANDOM_TRUST_CPU to address entropy starvation on PD-SSD boot disks.
* Upgraded docker to 18.06.1
* Upgraded OpenSSL to 1.0.2p
* Upgraded the ca-certificates package to version 20180409.3.37
cos-beta-69-10895-42-0
Date: Aug 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-27-0):
* Enabled CONFIG_RANDOM_TRUST_CPU to address entropy starvation on PD-SSD boot disks.
* Upgraded OpenSSL to 1.0.2p
* Merged Linux stable version v4.14.65 into the kernel.
cos-stable-68-10718-102-0
Date: Aug 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-86-0):
* Fixed a softlockup issue that occurred on single VCPU VMs when using FUSE filesystems.
* Enabled CONFIG_RANDOM_TRUST_CPU to address entropy starvation on PD-SSD boot disks.
* Merged Linux stable version v4.14.65 into the kernel.
cos-stable-67-10575-67-0
Date: Aug 24, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-66-0):
* Backported the fix for a cloud-init bug that write_files can't deal with non-asci content (https://bugs.launchpad.net/bugs/1487877).
cos-dev-69-10895-27-0
Date: Aug 17, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-23-0):
* Backported the fix for a cloud-init bug that write_files can't deal with non-asci content (https://bugs.launchpad.net/bugs/1487877).
cos-beta-69-10895-27-0
Date: Aug 17, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-23-0):
* Promoted to beta channel.
* Backported the fix for a cloud-init bug that write_files can't deal with non-asci content (https://bugs.launchpad.net/bugs/1487877).
cos-stable-68-10718-86-0
Date: Aug 17, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-81-0):
* Promoted to stable channel.
* Backported the fix for a cloud-init bug that write_files can't deal with non-asci content (https://bugs.launchpad.net/bugs/1487877).
cos-stable-65-10323-99-0
Date: Aug 14, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-98-0):
* Fix for Linux Kernel CVE-2018-12232
* Backported fixes for L1 Terminal Fault (L1TF) issue (CVE-2018-3615, CVE-2018-3620, and CVE-2018-3646).
cos-dev-69-10895-23-0
Date: Aug 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-16-0):
* Backported fix for a kernel warning "WARNING: fs/overlayfs/readdir.c:393 ovl_iterate+0x25c/0x260 WARN_ON(!cache->refcount)"
* Fix for Linux Kernel CVE-2018-12232
* Backported fixes for L1 Terminal Fault (L1TF) issue (CVE-2018-3615, CVE-2018-3620, and CVE-2018-3646).
cos-beta-68-10718-81-0
Date: Aug 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-76-0):
* Fix for Linux Kernel CVE-2018-12232
* Backported fixes for L1 Terminal Fault (L1TF) issue (CVE-2018-3615, CVE-2018-3620, and CVE-2018-3646).
cos-stable-67-10575-66-0
Date: Aug 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-65-0):
* Fix for Linux Kernel CVE-2018-12232
* Backported fixes for L1 Terminal Fault (L1TF) issue (CVE-2018-3615, CVE-2018-3620, and CVE-2018-3646).
cos-stable-66-10452-110-0
Date: Aug 14, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-109-0):
* Fix for Linux Kernel CVE-2018-12232
* Backported fixes for L1 Terminal Fault (L1TF) issue (CVE-2018-3615, CVE-2018-3620, and CVE-2018-3646).
cos-dev-69-10895-16-0
Date: Aug 07, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.1
Docker: v17.03.2
Changelog (vs 69-10895-10-0):
* Fixes for CVE-2018-5391.
* Fixed a softlockup issue that occurred on single VCPU VMs when using FUSE filesystems.
* Updated Kubernetes to v1.11.1
cos-beta-68-10718-76-0
Date: Aug 07, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-70-0):
* Fixes for CVE-2018-5391.
cos-stable-67-10575-65-0
Date: Aug 07, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-64-0):
* Fixes for CVE-2018-5391.
cos-stable-66-10452-109-0
Date: Aug 07, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-108-0):
* Fixes for CVE-2018-5391.
cos-stable-65-10323-98-0
Date: Aug 04, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-97-0):
* Fixes for CVE-2018-5391.
cos-dev-69-10895-10-0
Date: Jul 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.0
Docker: v17.03.2
Changelog (vs 69-10895-0-0):
* Fixes for CVE-2018-5390.
cos-beta-68-10718-70-0
Date: Jul 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-63-0):
* Fixes for CVE-2018-5390.
cos-stable-67-10575-64-0
Date: Jul 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-62-0):
* Fixes for CVE-2018-5390.
cos-stable-66-10452-108-0
Date: Jul 31, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-107-0):
* Fixes for CVE-2018-5390.
cos-stable-65-10323-97-0
Date: Jul 31, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-94-0):
* Fixes for CVE-2018-5390.
cos-dev-69-10895-0-0
Date: Jul 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.0
Docker: v17.03.2
Changelog (vs 69-10884-0-0):
* Minor changes.
cos-beta-68-10718-63-0
Date: Jul 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-59-0):
* Minor changes.
cos-dev-69-10884-0-0
Date: Jul 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.0
Docker: v17.03.2
Changelog (vs 69-10873-0-0):
* Increase default kernel.pid_max to 2^22.
cos-beta-68-10718-59-0
Date: Jul 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-52-0):
* Minor changes.
cos-dev-69-10873-0-0
Date: Jul 13, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.0
Docker: v17.03.2
Changelog (vs 69-10850-0-0):
* Rebased Kernel to 4.14.54.
cos-beta-68-10718-52-0
Date: Jul 13, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-41-0):
* Removed SCSI CD-ROM support. This resolves CVE-2018-11506.
* Updated curl to 7.60.0. This resolves CVE-2018-1000300 and CVE-2018-1000301.
cos-stable-67-10575-62-0
Date: Jul 16, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-57-0):
* Removed SCSI CD-ROM support. This resolves CVE-2018-11506.
* Updated curl to 7.60.0. This resolves CVE-2018-1000300 and CVE-2018-1000301.
cos-stable-66-10452-107-0
Date: Jul 13, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-104-0):
* Removed SCSI CD-ROM support. This resolves CVE-2018-11506.
* Updated curl to 7.60.0. This resolves CVE-2018-1000300 and CVE-2018-1000301.
cos-stable-65-10323-94-0
Date: Jul 13, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-91-0):
* Removed SCSI CD-ROM support. This resolves CVE-2018-11506.
* Updated curl to 7.60.0. This resolves CVE-2018-1000300 and CVE-2018-1000301.
cos-dev-69-10850-0-0
Date: Jul 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.11.0
Docker: v17.03.2
Changelog (vs 69-10824-0-0):
* Removed SCSI CD-ROM support. This resolves CVE-2018-11506.
* Upgraded built-in kubelet to v1.11.0
cos-beta-68-10718-41-0
Date: Jul 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.5
Docker: v17.03.2
Changelog (vs 68-10718-36-0):
* Upgraded built-in kubelet to v1.10.5
cos-dev-69-10824-0-0
Date: Jun 28, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.4
Docker: v17.03.2
Changelog (vs 69-10803-0-0):
* Updated docker-credential-gcr to 1.5.0
cos-beta-68-10718-36-0
Date: Jun 28, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10718-29-0):
* Minor changes.
cos-dev-69-10803-0-0
Date: Jun 22, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.4
Docker: v17.03.2
Changelog (vs 69-10783-0-0):
* Updated BUG_REPORT_URL in /etc/os-release.
* Enabled NFS debug configs in the kernel.
* Enabled tcp_bbr kernel module for TCP congestion control.
* Upgraded Git to version 2.16.4 to fix CVE 2018-11235.
cos-beta-68-10718-29-0
Date: Jun 22, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10718-23-0):
* Upgraded Git to version 2.16.4 to fix CVE 2018-11235.
cos-stable-67-10575-57-0
Date: Jun 22, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-55-0):
* Upgraded Git to version 2.16.4 to fix CVE 2018-11235.
cos-stable-66-10452-104-0
Date: Jun 22, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-101-0):
* Upgraded Git to version 2.16.4 to fix CVE 2018-11235.
cos-stable-65-10323-91-0
Date: Jun 22, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-85-0):
* Upgraded Git to version 2.16.4 to fix CVE 2018-11235.
cos-dev-69-10783-0-0
Date: Jun 15, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.4
Docker: v17.03.2
Changelog (vs 68-10718-15-0):
* Set '--disable-legacy-registry' Docker config to true by default.
* Updated Kubernetes to 1.10.4.
* Updated sshd_config to drop cbc based Ciphers.
* Updated root CA certificates to match Mozilla NSS 3.36.1.
* Updated OpenSSL to 1.0.2o.
cos-beta-68-10718-23-0
Date: Jun 15, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10718-15-0):
* Promoted to beta channel.
cos-stable-67-10575-55-0
Date: Jun 15, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-54-0):
* Promoted to stable channel.
cos-dev-68-10718-15-0
Date: Jun 07, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10718-6-0):
* Minor changes.
cos-beta-67-10575-54-0
Date: Jun 07, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-50-0):
* Minor changes.
cos-dev-68-10718-6-0
Date: Jun 01, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10714-0-0):
* Minor changes.
cos-beta-67-10575-50-0
Date: Jun 01, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-45-0):
* Minor changes.
cos-stable-66-10452-101-0
Date: Jun 01, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-89-0):
* Fixed an issue where invoking the `getsockopt` system call would sometimes
cause the kernel to deadlock.
cos-dev-68-10714-0-0
Date: May 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10690-0-0):
* Resolved CVE-2017-18258 by upgrading the libxml2 package.
cos-beta-67-10575-45-0
Date: May 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-41-0):
* Resolved CVE-2017-18258 by upgrading the libxml2 package.
cos-dev-68-10690-0-0
Date: May 18, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.2
Docker: v17.03.2
Changelog (vs 68-10658-0-0):
* Fixed a go-1.10 incompatibility issue in Docker by backporting https://github.com/moby/moby/commit/a422774.
* Upgraded Kubernetes to v1.10.2.
cos-beta-67-10575-41-0
Date: May 18, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-32-0):
* Fixed a go-1.10 incompatibility issue in Docker by backporting https://github.com/moby/moby/commit/a422774.
cos-dev-68-10658-0-0
Date: May 10, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.1
Docker: v17.03.2
Changelog (vs 68-10644-0-0):
* Enabled EFI Variable filesystem.
* Minor fixes.
cos-beta-67-10575-32-0
Date: May 10, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-27-0):
* Fixes for CVE-2018-1092,CVE-2018-1093,CVE-2018-1094,CVE-2018-1095.
* Minor changes.
cos-stable-66-10452-89-0
Date: May 11, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-81-0):
* Fixes for CVE-2018-1092,CVE-2018-1093,CVE-2018-1094,CVE-2018-1095.
* Minor changes.
cos-stable-65-10323-85-0
Date: May 10, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-83-0):
* Disabled kernel memory accounting.
* Backported fixes for CVE-2018-1092,CVE-2018-1093,CVE-2018-1094.
cos-dev-68-10644-0-0
Date: May 04, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.1
Docker: v17.03.2
Changelog (vs 68-10615-0-0):
* Fixes to grub to remove unnecessary modules
* Minor changes.
cos-beta-67-10575-27-0
Date: May 04, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-13-0):
* Minor changes.
cos-stable-66-10452-81-0
Date: May 01, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-74-0):
* Backported a fix for Linux kernel CVE-2018-1000199.
cos-stable-65-10323-83-0
Date: May 01, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-75-0):
* Backported a fix for Linux kernel CVE-2018-1000199.
cos-dev-68-10615-0-0
Date: Apr 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.1
Docker: v17.03.2
Changelog (vs 67-10575-8-0):
* Updated Kubernetes to v1.10.1.
* Backported a fix for a Linux kernel race condition that was causing kernel
panics.
cos-beta-67-10575-13-0
Date: Apr 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10575-8-0):
* Promoted to beta channel.
* Backported a fix for a Linux kernel race condition that was causing kernel
panics.
cos-stable-66-10452-74-0
Date: Apr 25, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-68-0):
* Promoted to stable channel.
* Backported a fix for a Linux kernel race condition that was causing kernel
panics.
cos-dev-67-10575-8-0
Date: Apr 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10574-0-0):
* Minor changes.
cos-beta-66-10452-68-0
Date: Apr 20, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-53-0):
* Backported a fix for Linux kernel CVE-2018-1068.
cos-stable-65-10323-75-0
Date: Apr 20, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-69-0):
* Backported a fix for Linux kernel CVE-2018-1068.
cos-dev-67-10574-0-0
Date: Apr 13, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.10.0
Docker: v17.03.2
Changelog (vs 67-10550-0-0):
* Updated kubernetes to v1.10.0
cos-beta-66-10452-53-0
Date: Apr 13, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-45-0):
* Enabled the fix for a bug in containerd (https://github.com/containerd/containerd/pull/872 - Killing a container's shim process while having an exec attached to it will result in panic error).
cos-dev-67-10550-0-0
Date: Apr 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.6
Docker: v17.03.2
Changelog (vs 67-10527-0-0):
* Minor changes.
cos-beta-66-10452-45-0
Date: Apr 06, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-28-0):
* Backported a fix for a bug in containerd that killing a container's shim process while having an exec attached to it will result in panic error (https://github.com/containerd/containerd/pull/872).
cos-stable-65-10323-69-0
Date: Apr 06, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-64-0):
* Backported a fix for a bug in containerd that killing a container's shim process while having an exec attached to it will result in panic error (https://github.com/containerd/containerd/pull/872).
cos-dev-67-10527-0-0
Date: Mar 29, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.6
Docker: v17.03.2
Changelog (vs 67-10505-0-0):
* Updated kubernetes to v1.9.6.
* Backported a fix for a bug in containerd that killing a container's shim process while having an exec attached to it will result in panic error (https://github.com/containerd/containerd/pull/872).
* Updated e2fsprogs to 1.44.0.
cos-beta-66-10452-28-0
Date: Mar 29, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-21-0):
* Minor changes.
cos-stable-65-10323-64-0
Date: Mar 29, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-62-0):
* Backported fix for Linux kernel CVE-2018-1065.
cos-dev-67-10505-0-0
Date: Mar 22, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-13-0):
* New milestone in dev channel.
* Updated docker-credential-gcr to v1.4.3.
* Enabled BPF JIT.
cos-beta-66-10452-21-0
Date: Mar 22, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-13-0):
* Promoted to beta channel.
cos-stable-65-10323-62-0
Date: Mar 22, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-55-0):
* Promoted to stable channel.
cos-dev-66-10452-13-0
Date: Mar 16, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10452-8-0):
* Updated Toolbox container tag to '20180309-00'
cos-beta-65-10323-55-0
Date: Mar 16, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-51-0):
* Minor bugfixes
cos-dev-66-10452-8-0
Date: Mar 12, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10428-0-0):
* Enable BPF JIT.
* Minor changes.
cos-beta-65-10323-51-0
Date: Mar 08, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-47-0):
* Minor changes.
cos-beta-65-10323-47-0
Date: Mar 01, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-39-0):
* Minor changes.
cos-dev-66-10428-0-0
Date: Feb 23, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.9.3
Docker: v17.03.2
Changelog (vs 66-10408-0-0):
* Enabled IP Virtual Server support in kernel (CONFIG_IP_VS)
* Updated Kubernetes to v1.9.3.
* Avoid flooding console with iptables log messages
* Upgraded bash to version 4.3_p48-r1, which includes a fix for CVE-2016-9401
cos-beta-65-10323-39-0
Date: Feb 23, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-33-0):
* Avoid flooding console with iptables log messages
* Upgraded curl to version 7.58.0, which includes a fix for CVE-2018-1000007
cos-dev-66-10408-0-0
Date: Feb 16, 2018
Kernel: ChromiumOS-4.14
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 66-10385-0-0):
* Enable OS Login Guest Environment for Google Compute Engine
* Updated Linux Kernel to 4.14.
cos-beta-65-10323-33-0
Date: Feb 15, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-23-0):
* Minor changes.
cos-dev-66-10385-0-0
Date: Feb 08, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 66-10367-0-0):
* Updated compute-image-packages to v20180129
cos-beta-65-10323-23-0
Date: Feb 08, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-12-0):
* Backported a bugfix for netcat: https://sourceforge.net/p/nc110/code/25/
cos-dev-66-10367-0-0
Date: Feb 02, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-1-0):
* New milestone in dev channel.
* Updated Toolbox Docker image
* Updated Kubernetes to v1.8.7
cos-beta-65-10323-12-0
Date: Feb 02, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 65-10323-1-0):
* Promoted to beta channel.
* Updated Toolbox Docker image
* Updated Kubernetes to v1.8.7
cos-stable-64-10176-62-0
Date: Feb 02, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 64-10176-60-0):
* Promoted to stable channel.
cos-dev-65-10323-1-0
Date: Jan 24, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.6
Docker: v17.03.2
Changelog (vs 65-10312-0-0):
* Increased default kernel.hung_task_timeout_secs to 300 so that COS is more tolerant to occassional PD slowness.
* Add retries to cloud-init when connecting to Google Compute Engine metadata server.
cos-beta-64-10176-60-0
Date: Jan 24, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.7
Docker: v17.03.2
Changelog (vs 64-10176-49-0):
* Updated Kubernetes to v1.8.7
cos-stable-63-10032-88-0
Date: Jan 19, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-71-0):
* Backported fixes for Linux kernel CVE-2017-16939
cos-dev-65-10312-0-0
Date: Jan 16, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.6
Docker: v17.03.2
Changelog (vs 65-10280-0-0):
* Updated docker-credential-gcr to v1.4.2
* Fixed an issue in systemd that leaked inactive units when creating mounts on specific mountpoints.
cos-beta-64-10176-49-0
Date: Jan 16, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.2
Docker: v17.03.2
Changelog (vs 64-10176-39-0):
* Fixed an issue in systemd that leaked inactive units when creating mounts on specific mountpoints.
cos-dev-65-10280-0-0
Date: Jan 05, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.6
Docker: v17.03.2
Changelog (vs 64-10176-7-0):
* Recompiled kernel with RETPOLINE enabled GCC.
* Updated Kubernetes to v1.8.6.
* Updated openssl version to 1.0.2n that contains the fix for CVE-2017-3737.
* Updated rsync version to 3.1.2-r2 that contains the fixes for CVE-2017-17433 and CVE-2017-17434.
cos-beta-64-10176-39-0
Date: Jan 05, 2018
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.2
Docker: v17.03.2
Changelog (vs 64-10176-7-0):
* Promoted to beta channel.
cos-stable-62-9901-80-0
Date: Dec 15, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-79-0):
* Backported fixes for CVE-2017-1000405.
* Include performance fix for KPTI (previously called KAISER).
cos-stable-63-10032-71-0
Date: Dec 08, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-62-0):
* Backported fixes for CVE-2017-1000405.
cos-beta-63-10032-71-0
Date: Dec 08, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-62-0):
* Backported fixes for CVE-2017-1000405.
cos-stable-63-10032-62-0
Date: Dec 06, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-60-0):
* Include performance fix for KPTI (previously called KAISER).
cos-beta-63-10032-62-0
Date: Dec 06, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-60-0):
* Include performance fix for KPTI (previously called KAISER).
cos-dev-64-10176-7-0
Date: Dec 07, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.2
Docker: v17.03.2
Changelog (vs 64-10173-0-0):
* Backported fixes for CVE-2017-1000405.
* Include performance fix for KPTI (previously called KAISER).
Caution: cos-dev-64-10173-0-0 has been marked OBSOLETE due to potential
functional regressions with the GCP virtualization stack. This image version is
no longer available when you create new instances, and any attempts to create an
instance with this image version will fail.
cos-dev-64-10173-0-0
Date: Nov 30, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.2
Docker: v17.03.2
Changelog (vs 64-10151-0-0):
* Backported fixes for CVE-2017-16548 and CVE-2017-16994.
cos-stable-63-10032-60-0
Date: Nov 30, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs cos-beta-63-10032-60-0):
* Promoted to stable channel.
cos-beta-63-10032-60-0
Date: Nov 30, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-50-0):
* Backported fixes for CVE-2017-16548 and CVE-2017-16994.
cos-dev-64-10151-0-0
Date: Nov 22, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.8.2
Docker: v17.03.2
Changelog (vs 64-10133-0-0):
* Enabled KPTI (previously called KAISER) security feature in kernel
* Mounted /tmp with noexec option.
* Updated Kubernetes to v1.8.2
* Disabled unprivileged use of ebpf syscall.
cos-beta-63-10032-50-0
Date: Nov 22, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-40-0):
* Enabled KPTI (previously called KAISER) security feature in kernel
* Disabled unprivileged use of ebpf syscall.
cos-stable-62-9901-79-0
Date: Nov 22, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-78-0):
* Enabled KPTI (previously called KAISER) security feature in kernel
cos-stable-62-9901-78-0
Date: Nov 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-75-0):
* Backported fixes for CVE-2017-15951
cos-dev-64-10133-0-0
Date: Nov 16, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 64-10112-0-0):
* Backported fixes for CVE-2017-1000254
* Move storage-driver option from docker.service to daemon.json
cos-beta-63-10032-40-0
Date: Nov 09, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-32-0):
* Backported fixes for CVE-2017-1000254
* Move storage-driver option from docker.service to daemon.json
* Move live-restore docker options form docker.service to /etc/docker/daemon.json
cos-stable-61-9765-89-0
Date: Nov 10, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.10
Docker: v17.03.2
Changelog (vs 61-9765-79-0):
* Backported the fix for https://github.com/systemd/systemd/issues/4747 in systemd
* Enabled kernel softlockup panic at runtime via sysctl instead of at kernel compile time
* Backported fixes for Linux kernel CVE-2017-1000111 and CVE-2017-1000112
cos-dev-64-10112-0-0
Date: Nov 09, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 64-10083-0-0):
* Enabled kernel softlockup panic at runtime via sysctl instead of at kernel compile time
* Backported the fix for https://github.com/systemd/systemd/issues/4747 in systemd
* Patched shadow to allow user names that match the gnu-regex '[a-zA-Z0-9_.][a-zA-Z0-9_.-]{0,30}[a-zA-Z0-9_.$-]?', except fully numeric ones and pure dots
* Updated compute-image-packages to v20171006
* Increased Docker log line max size from 16KB to 100kB
* Backported fixes for Linux kernel CVE-2017-15299, CVE-2017-12192, and CVE-2017-15537
* Bugfix for Containers on Compute Engine (Alpha)
cos-beta-63-10032-32-0
Date: Nov 09, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-22-0):
* Backported the fix for https://github.com/systemd/systemd/issues/4747 in systemd
* Patched shadow to allow user names that match the gnu-regex '[a-zA-Z0-9_.][a-zA-Z0-9_.-]{0,30}[a-zA-Z0-9_.$-]?', except fully numeric ones and pure dots
* Enabled kernel softlockup panic at runtime via sysctl instead of at kernel compile time
* Backported fixes for Linux kernel CVE-2017-15299, CVE-2017-12192, and CVE-2017-15537
* Bugfix for Containers on Compute Engine (Alpha)
cos-stable-62-9901-75-0
Date: Nov 09, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-59-0):
* Backported the fix for https://github.com/systemd/systemd/issues/4747 in systemd
* Enabled kernel softlockup panic at runtime via sysctl instead of at kernel compile time
* Backported fixes for Linux kernel CVE-2017-1000111 and CVE-2017-1000112
cos-dev-64-10083-0-0
Date: Oct 31, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-4-0):
* New milestone in dev channel
* Reduce VM boot time by setting grub timeout to zero.
* Upgrade Kubernetes to v1.7.8
* Move live-restore docker options from docker.service to /etc/docker/daemon.json
cos-beta-63-10032-22-0
Date: Oct 31, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.8
Docker: v17.03.2
Changelog (vs 63-10032-4-0):
* Promoted to beta channel.
* Upgrade Kubernetes to v1.7.8.
cos-stable-62-9901-59-0
Date: Oct 31, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-50-0):
* Promoted to stable channel.
* Upgrade Curl to v7.55.1.
cos-dev-63-10032-4-0
Date: Oct 19, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 63-10022-0-0):
* Minor changes
cos-beta-62-9901-50-0
Date: Oct 19, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-45-0):
* Minor changes
cos-beta-62-9901-45-0
Date: Oct 12, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 62-9901-37-0):
* Upgraded Kubernetes to v1.7.7.
cos-dev-63-10022-0-0
Date: Oct 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 63-10004-0-0):
* Upgraded e2fsprogs to v1.43.6
cos-stable-60-9592-100-0
Date: Oct 06, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-95-0):
* Fix for Linux Kernel CVE-2017-12146
cos-stable-61-9765-79-0
Date: Oct 6, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.10
Docker: v17.03.2
Changelog (vs 61-9765-66-0):
* Fix for Linux Kernel CVE-2017-12146
cos-beta-62-9901-37-0
Date: Oct 5, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.6
Docker: v17.03.2
Changelog (vs 62-9901-21-0):
* Minor changes
cos-dev-63-10004-0-0
Date: Oct 5, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.7
Docker: v17.03.2
Changelog (vs 63-9975-0-0):
* Upgraded Kubernetes to v1.7.7.
cos-dev-63-9975-0-0
Date: Sep 28, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.6
Docker: v17.03.2
Changelog (vs 63-9956-0-0):
* Fix for Linux Kernel CVE-2017-11600
cos-dev-63-9956-0-0
Date: Sep 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.6
Docker: v17.03.2
Changelog (vs 62-9901-8-0):
* Upgraded Kubernetes package to v1.7.6
* Enabled CONFIG_IFB as module
* Enabled support for eBPF syscall
cos-beta-62-9901-21-0
Date: Sep 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.6
Docker: v17.03.2
Changelog (vs 62-9901-8-0):
* Promoted to beta channel
* Upgraded Kubernetes package to v1.7.6
cos-stable-61-9765-66-0
Date: Sep 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.10
Docker: v17.03.2
Changelog (vs 61-9765-50-0):
* Mitigated a potential performance regression
in Kubernetes by adding a temporary experimental flag to docker daemon
that allows disabling docker healthchecks. This does not affect
non-Kubernetes use cases.
* Upgraded dev-vcs/git package to 2.13.5 in order to fix CVE-2017-1000117.
cos-stable-60-9592-95-0
Date: Sep 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-90-0):
* Upgraded dev-vcs/git package to 2.13.5 in order to fix CVE-2017-1000117.
cos-beta-61-9765-58-0
Date: Sep 08, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.9
Docker: v17.03.2
Changelog (vs 61-9765-50-0):
* Mitigated a potential performance regression
in Kubernetes by adding a temporary experimental flag to docker daemon
that allows disabling docker healthchecks. This does not affect
non-Kubernetes use cases.
cos-dev-62-9901-8-0
Date: Sep 08, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.2
Docker: v17.03.2
Changelog (vs 62-9901-0-0):
* Minor changes
cos-dev-62-9901-0-0
Date: Sep 01, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.2
Docker: v17.03.2
Changelog (vs 62-9874-0-0):
* Mitigated a potential performance regression
in Kubernetes by adding a temporary experimental flag to docker daemon
that allows disabling docker healthchecks. This does not affect
non-Kubernetes use cases.
* Upgraded dev-python/prettytable to version 0.7.2. This fixes an issue seen
in cloud-init
cos-beta-61-9765-50-0
Date: Sep 01, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.9
Docker: v17.03.2
Changelog (vs 61-9765-31-0):
* Upgraded kubernetes to 1.6.9
* Backported https://golang.org/cl/53635 which resolved the incompatibility
in tar files generated between Go 1.7 and Go 1.8
* Backported Linux kernel fix https://patchwork.kernel.org/patch/9882431/
cos-stable-60-9592-90-0
Date: Sep 01, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-84-0):
* Fix for Linux Kernel CVE-2017-10661
* Backported https://golang.org/cl/53635 which resolved the incompatibility
in tar files generated between Go 1.7 and Go 1.8
cos-dev-62-9874-0-0
Date: Aug 24, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.2
Docker: v17.03.2
Changelog (vs 62-9851-0-0):
* Alpha support for Containers on Compute Engine.
cos-dev-62-9851-0-0
Date: Aug 17, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.2
Docker: v17.03.2
Changelog (vs 62-9831-0-0):
* Cherrypicked upstream kernel change https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=6e7bc478c9a006c701c14476ec9d389a484b4864
* Cherrypicked upstream Go language change https://go.googlesource.com/go/+/01e45c736882754ca785b5a802ec0866a6544f8b
cos-beta-61-9765-31-0
Date: Aug 17, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.7
Docker: v17.03.2
Changelog (vs 61-9765-24-0):
* Fix for Linux Kernel CVE-2017-7533
cos-stable-60-9592-84-0
Date: Aug 17, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-82-0):
* Fix for Linux Kernel CVE-2017-7533
cos-dev-62-9831-0-0
Date: Aug 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.7.2
Docker: v17.03.2
Changelog (vs cos-dev-62-9785-0-0):
* Disabled HPN support in OpenSSH so that Compute Engine's SSH-from-browser
feature is compatible with Container-Optimized OS instances.
* Upgraded Kubernetes to v1.7.2
* Fixed systemd-resolved CVE-2017-9445
* Backported kernel fixes for CVE-2017-11473, CVE-2017-11472, CVE-2017-7542,
and CVE-2017-7533.
cos-beta-61-9765-24-0
Date: Aug 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.7
Docker: v17.03.2
Changelog (vs cos-beta-61-9765-17-0):
* Disabled HPN support in OpenSSH so that Compute Engine's SSH-from-browser
feature is compatible with Container-Optimized OS instances.
* Backported a few systemd-resolved fixes for alloc size calculation (fixes
CVE-2017-9445)
cos-stable-60-9592-82-0
Date: Aug 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs cos-stable-60-9592-76-0):
* Backported a few systemd-resolved fixes for alloc size calculation (fixes
CVE-2017-9445)
cos-dev-62-9785-0-0
Date: Aug 04, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.2
Changelog (vs 61-9765-17-0):
* New milestone in dev channel
* Minor bugfixes
cos-beta-61-9765-17-0
Date: Aug 04, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.7
Docker: v17.03.2
Changelog (vs 61-9765-8-0):
* Promoted to beta
* Upgraded Kubernetes to v1.6.7
cos-stable-60-9592-76-0
Date: Aug 04, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-70-0):
* Promoted to stable
* Minor bugfixes
cos-dev-61-9765-8-0
Date: Jul 27, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.2
Changelog (vs 61-9759-0-0):
* Fixed build issues with open source codebase
cos-beta-60-9592-70-0
Date: Jul 27, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-65-0):
* Updated sys-apps/coreutils to 8.25. Greatly reduced number of syscalls `du` makes and improved kubelet performance
cos-beta-60-9592-65-0
Date: Jul 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-52-0):
* Fix for Linux kernel CVE-2017-11176
* Fixed a bug in the `ip sets` command: sometimes valid entries in hash:* types of sets were evicted
cos-dev-61-9759-0-0
Date: Jul 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.2
Changelog (vs 61-9733-0-0):
* Updated sys-apps/coreutils to 8.25. Greatly reduced number of syscalls `du` makes and improved kubelet performance
* Updated dev-go/dbus to use upstream commit bd29ed602e2c
* Fix for Linux kernel CVE-2017-11176
cos-stable-59-9460-73-0
Date: Jul 14, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.11.2
Changelog (vs 59-9460-64-0):
* Fix for Linux kernel CVE-2017-1000364
* Fix for Linux kernel CVE-2017-1000365
* Fix for Linux kernel CVE-2017-1000370
* Fix for Linux kernel CVE-2017-1000371
* Fix for Linux kernel CVE-2017-1000379
* Fix for glibc CVE-2017-1000366
cos-dev-61-9733-0-0
Date: Jul 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.2
Changelog (vs 61-9715-0-0):
* Upgraded Docker to v17.03.2
* Fixed a bug in the `ip sets` command: sometimes valid entries in hash:* types of sets were evicted
* Fix for Linux kernel CVE-2017-1000364
cos-beta-60-9592-52-0
Date: Jul 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-31-0):
* Fix for Linux kernel CVE-2017-1000364
* Fix for Linux kernel CVE-2017-1000365
* Fix for Linux kernel CVE-2017-1000370
* Fix for Linux kernel CVE-2017-1000371
* Fix for Linux kernel CVE-2017-1000379
* Fix for glibc CVE-2017-1000366
cos-dev-61-9715-0-0
Date: Jul 05, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.1
Changelog (vs 61-9696-0-0):
* Fixed a regression in cos-dev builds starting with 61-9655-0-0 that caused the image size to grow beyond 10GB.
cos-dev-61-9696-0-0
Date: Jun 29, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.1
Changelog (vs 61-9678-0-0):
* Switched to LLVM compiler
* Fixed a bug that may lead to the kernel freezing with the following error message: "unregister_netdevice: waiting for lo to become free."
cos-dev-61-9678-0-0
Date: Jun 26, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v17.03.1
Changelog (vs 61-9655-0-0):
* Upgraded Docker to v17.03.1
* Enabled live-restore and overlay2 for Docker by default
* Updated default toolbox image tag to '20170615-00'
* Fixed ext4 kernel panic caused by memory shortage in memory cgroup
cos-beta-60-9592-31-0
Date: Jun 26, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-23-0):
* Fixed ext4 kernel panic caused by memory shortage in memory cgroup
cos-dev-61-9655-0-0
Date: Jun 16, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 61-9626-0-0):
* Disabled the default IP Aliases setting in the Google IP
Forwarding Daemon
* Upgraded docker-credential-gcr to v1.4.1
* kernel: remove sysctl vm.disk_based_swap (default behavior is enabled)
* Fix for Linux kernel CVE-2017-9075
cos-beta-60-9592-23-0
Date: Jun 16, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-11-0):
* Disabled the default IP Aliases setting in the Google IP
Forwarding Daemon
* Fix for Linux kernel CVE-2017-9077
* Fix for Linux kernel CVE-2017-9242
cos-stable-59-9460-64-0
Date: Jun 16, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.11.2
Changelog (vs 59-9460-60-0):
* Disabled the default IP Aliases setting in the Google IP
Forwarding Daemon
* Fix for Linux kernel CVE-2017-9077
* Fix for Linux kernel CVE-2017-9242
cos-dev-61-9626-0-0
Date: Jun 8, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-2-0):
* New milestone in dev channel
* Fixed /etc/resolv.conf in toolbox container
* Upgraded Kubernetes to v1.6.4
* Support multiple network interfaces that are configured through DHCP
* Updated to compute-image-packages-20170523
* Fix for Linux kernel CVE-2017-9077
* Fix for Linux kernel CVE-2017-9242
cos-beta-60-9592-11-0
Date: Jun 8, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.13.1
Changelog (vs 60-9592-2-0):
* Fixed /etc/resolv.conf in toolbox container
* Upgraded Kubernetes to v1.6.4
* Promoted to beta channel
cos-stable-59-9460-60-0
Date: Jun 8, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.4
Docker: v1.11.2
Changelog (vs 59-9460-57-0):
* Upgraded Kubernetes to v1.6.4
* Promoted to stable channel
cos-dev-60-9592-2-0
Date: Jun 1, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.3
Docker: v1.13.1
Changelog (vs 60-9588-0-0):
* Minor bugfixes
cos-beta-59-9460-57-0
Date: Jun 1, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.1
Docker: v1.11.2
Changelog (vs 59-9460-51-0):
* Minor bugfixes
cos-dev-60-9588-0-0
Date: May 25, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.3
Docker: v1.13.1
Changelog (vs 60-9565-0-0):
* Fix for Linux kernel CVE-2017-8890
* Fix a bug in CPU scheduler that may lead to kernel panic
cos-beta-59-9460-51-0
Date: May 25, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.1
Docker: v1.11.2
Changelog (vs 59-9460-43-0):
* Fix for Linux kernel CVE-2017-8890
cos-stable-58-9334-74-0
Date: May 25, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.6
Docker: v1.11.2
Changelog (vs 58-9334-72-0):
* Fix for Linux kernel CVE-2017-8890
cos-stable-57-9202-74-0
(gci-stable-57-9202-74-0 in google-containers project)
Date: May 22, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 57-9202-64-0):
* Fix for Linux kernel CVE-2017-7895
cos-dev-60-9565-0-0
Date: May 22, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.3
Docker: v1.13.1
Changelog (vs 60-9540-0-0):
* Fix for Linux kernel CVE-2017-7895
* Upgraded Docker to v1.13.1
* Upgraded Kubernetes to v1.6.3
* /proc/config.gz available by default (without needed 'modprobe configs')
* Added support for docker-credential-gcr
(https://github.com/GoogleCloudPlatform/docker-credential-gcr)
* Minor bugfix in audit subsystem
cos-stable-58-9334-72-0
Date: May 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.6
Docker: v1.11.2
Changelog (vs 58-9334-62-0):
* Fix for Linux kernel CVE-2017-7895
cos-beta-59-9460-43-0
Date: May 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.1
Docker: v1.11.2
Changelog (vs 59-9460-20-0):
* Fix for Linux kernel CVE-2017-7895
cos-dev-60-9540-0-0
Date: May 11, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.1
Docker: v1.11.2
Changelog (vs 60-9504-0-0):
* Enabled kernel's static hugepage support
* Enabled DM_THIN_PROVISIONING support
* Enabled kernel address space layout randomization (KASLR)
* Ensured cloud-init waits for user-data to become accessible
* Added new gcr-online.target that can be used to launch tasks when Google
Container Registry (GCR) becomes accessible on boot
* Added support for DHCP option 119 (Domain Search List) in systemd
cos-dev-60-9504-0-0
Date: May 3, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.1
Docker: v1.11.2
Changelog (vs 59-9460-11-0):
* Upgraded Kubernetes to version 1.6.1
* Upgraded systemd to version 232
* Upgraded D-Bus to version 1.10.12
* Promoted to dev channel
cos-beta-59-9460-20-0
Date: May 3, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.6.1
Docker: v1.11.2
Changelog (vs 59-9460-11-0):
* Upgraded Kubernetes to version 1.6.1
* Promoted to beta channel
cos-stable-58-9334-62-0
Date: May 3, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.6
Docker: v1.11.2
Changelog (vs 58-9334-56-0):
* No major changes since the last release
* Promoted to stable channel
cos-dev-59-9460-11-0
Date: Apr 27, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 59-9460-4-0):
* No major changes since the last release.
cos-beta-58-9334-56-0
Date: Apr 27, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.6
Docker: v1.11.2
Changelog (vs 58-9334-53-0):
* Backported upstream kernel patch for error handling in encrypted ext4 filesystem
cos-beta-58-9334-53-0
Date: Apr 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.6
Docker: v1.11.2
Changelog (vs 58-9334-35-0):
* Upgraded kubernetes to version 1.5.6
cos-dev-59-9460-4-0
Date: Apr 20, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 59-9452-0-0):
* Fixed the incorrect kernel version shown in image description
* Fixed the bug wherein journald doesn't persist logs across instance reboot
* Changed compilation of runc, containerd and docker to dynamically-linked
* Added support for journald as log driver for Docker containers
* Run fsck for the stateful partition on every boot
* Use new JSON file format for Docker configuration in dockercfg_update.sh
cos-dev-59-9452-0-0
Date: Apr 12, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 59-9436-0-0):
* Minor internal implementation changes
cos-dev-59-9436-0-0
Date: Apr 6, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 59-9415-0-0):
* Cherry-picked fixes for 'gcplogs' log-driver in Docker
(https://github.com/docker/docker/issues/29344)
* Enabled KPROBES kernel config so kprobes work
cos-beta-58-9334-35-0
Date: Apr 6, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 58-9334-28-0):
* Cherry-picked fixes for 'gcplogs' log-driver in Docker
(https://github.com/docker/docker/issues/29344)
cos-stable-57-9202-64-0
(gci-stable-57-9202-64-0 in google-containers project)
Date: Apr 6, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Chaneglog (vs 57-9202-56-0):
* Fixes for CVE-2017-7184, CVE-2017-7308
* Cherry-picked fixes for 'gcplogs' log-driver in Docker
(https://github.com/docker/docker/issues/29344)
cos-stable-56-9000-104-0
(gci-stable-56-9000-104-0 in google-containers project)
Date: Apr 6, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.9
Docker: v1.11.2
Changelog (vs 56-9000-103-0)
* Fixes for CVE-2017-7184, CVE-2017-7308
cos-stable-56-9000-103-0
(gci-stable-56-9000-103-0 in google-containers project)
Date: Apr 3, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.9
Docker: v1.11.2
Changelog (vs 56-9000-84-2)
* Updated Kubernetes to v1.4.9
cos-beta-58-9334-28-0
Date: Mar 31, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 58-9334-19-0):
* Fixes for CVE-2017-7184, CVE-2017-7308
cos-dev-59-9415-0-0
Date: Mar 31, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 59-9394-0-0):
* Upgraded libseccomp to version 2.3.1
* Upgraded sys-kernel/linux-headers to version 4.4
* Fixes for CVE-2017-7184, CVE-2017-7308
cos-stable-57-9202-56-0 rollback
(gci-stable-57-9202-56-0 rollback in google-containers project)
Date: Mar 30, 2017
Rollback Reason:
* Identified an issue where using the Docker API from inside a Docker
container breaks in certain cases.
cos-dev-59-9394-0-0
Date: Mar 24, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 58-9334-11-0):
* Improved metadata polling in device_policy_manager for lower latency
cos-beta-58-9334-19-0
Date: Mar 24, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Changelog (vs 58-9334-11-0):
* Upgraded kubernetes version to v1.5.4
* Promoted to beta channel
cos-stable-57-9202-56-0
(gci-stable-57-9202-56-0 in google-containers project)
Date: Mar 24, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.4
Docker: v1.11.2
Chaneglog (vs 57-9202-51-0):
* Upgraded kubernetes version to v1.5.4
* Promoted to stable channel
cos-beta-57-9202-51-0
(gci-beta-57-9202-51-0 in google-containers project)
Date: Mar 15, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 57-9202-38-0)
* Minor changes
cos-dev-58-9334-11-0
Date: Mar 15, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 58-9333-2-0)
* Minor changes
cos-dev-58-9334-2-0
Date: Mar 8, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 58-9330-0-0)
* Fixed double-logging of audit messages
* Updated compute-image-packages to v20170227
cos-dev-58-9330-0-0
Date: Mar 3, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 58-9312-0-0)
* Includes 3 network and 1 filesystem backports from upstream kernel
cos-dev-58-9312-0-0
Date: Feb 24, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 58-9289-0-0)
* Fixed CVE-2017-5551, CVE-2017-5967, CVE-2017-5970.
* Allowed environment variables EDITOR, LANG, LC_ALL, PAGER, and TZ to be set through ssh.
* Backported a patch for compute-image-packages to fix high cpu usage.
cos-beta-57-9202-38-0
(gci-beta-57-9202-38-0 in google-containers project)
Date: Feb 24, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 57-9202-38-0)
* Minor changes.
cos-dev-58-9289-0-0
Date: Feb 17, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 57-9202-30-0)
* device_policy_manager now supports full image name as the value for 'cos-update-strategy'.
* device_policy_manager now performs channel switch when users try to update to a different channel.
* Expanded bindmount@.service into .mount units.
* Removed dependency on Upstart so that systemd is now the init process as PID 1.
* Added a C.UTF-8 locale and made it default.
* Moved all COS-specific system services under the cgroup slice '/system.slice/system-sysdaemons.slice/'.
* Backported fixes for issues identified by KASAN.
cos-stable-56-9000-84-2
(gci-stable-56-9000-84-2 in google-containers project)
Date: Fec 17, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.8
Docker: v1.11.2
Changelog (vs 56-9000-84-0)
* Promoted to stable channel.
* Backported upstream kernel patches to fix iptables-restore performance regression in 4.4 kernel.
* Fixed a bug in google-accounts-daemon which causes it to misbehave when network/metadata service becomes unavailable.
cos-beta-57-9202-30-0
(gci-beta-57-9202-30-0 google-containers project)
Date: Feb 16, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 57-9202-26-0)
* Fixed a bug in google-accounts-daemon which causes it to misbehave when network/metadata service becomes unavailable.
* Improved handling of missing metadata keys in device_policy_manager.
cos-dev-57-9202-26-0
(gci-dev-57-9202-26-0 google-containers project)
Date: Feb 13, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 57-9202-20-0)
* Backported upstream kernel patches to fix iptables-restore performance regression in 4.4 kernel
cos-dev-57-9202-20-0
(gci-dev-57-9202-20-0 google-containers project)
Date: Feb 09, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.5.2
Docker: v1.11.2
Changelog (vs 57-9196-0-0)
* Backported the get_metadata_value script from compute-image-packages 1.3.3
* Changeed ID=gci to ID=cos in /etc/os-release
* Added support metadata keys with 'cos-' prefix
* Upgraded kubernetes to 1.5.2
* Fixed CVE-2016-9962 in runc
* Backported a few upstream kernel patches that fixed xfstest failures for ext4.
cos-beta-56-9000-84-0
(gci-beta-56-9000-84-0 in google-containers project)
Date: Fec 08, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.8
Docker: v1.11.2
Changelog (vs 56-9000-80-0)
* Changed ID=gci to ID=cos in /etc/os-release
cos-stable-55-8872-79-0
(gci-stable-55-8872-79-0 in google-containers project)
Date: Feb 03, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 55-8872-77-0)
* Added support metadata keys with 'cos-' prefix
* Changed ID=gci to ID=cos in /etc/os-release
cos-beta-56-9000-80-0
(gci-beta-56-9000-80-0 in google-containers project)
Date: Jan 31, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.8
Docker: v1.11.2
Changelog (vs 56-9000-76-0)
* Backported get_metadata_value script
* Added support metadata keys with 'cos-' prefix
cos-stable-55-8872-77-0
(gci-stable-55-8872-77-0 in google-containers project)
Date: Jan 27, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 55-8872-76-0)
* Fixed CVE-2016-9962 in runc component of Docker
cos-beta-56-9000-76-0
(gci-beta-56-9000-76-0 in google-containers project)
Date: Jan 26, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.8
Docker: v1.11.2
Changelog (vs 56-9000-66-0)
* Updated Kubernetes to v1.4.8
* Fix issue where net.ipv4.conf.eth0.forwarding and net.ipv4.ip_forward could
get reset to 0 on systemd-networkd and/or systemd-sysctl service restart
* Fixed CVE-2016-9962 in runc component of Docker
cos-dev-57-9196-0-0
(gci-dev-57-9196-0-0 google-containers project)
Date: Jan 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 57-9102-0-0)
* kernel: Use kernel default of net.ipv4.ip_forwarding
* kernel: LSM: fix buffer over-read in printable_cmdline
* kernel: Merge with stable kernel v4.4.35
* glibc: roll to 2.23
gci-beta-56-9000-66-0
Date: Jan 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 56-9000-36-0)
* minor changes
gci-stable-55-8872-76-0
Date: Jan 18, 2017
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 55-8872-71-0)
* minor changes
gci-dev-56-9000-36-0
Date: Dec 22, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 56-9000-21-0)
* Fixed CVE-2016-7039, CVE-2016-8655, CVE-2016-9793
gci-dev-57-9102-0-0
Date: Dec 19, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 56-9000-21-0):
* default.target now refers to multi-user.target instead of graphical.target in systemd
* fixes a bug in systemd that could cause toolbox to terminate unexpectedly
* Fixed CVE-2016-7039, CVE-2016-8655, CVE-2016-9793
* other bugfixes
gci-beta-56-9000-21-0
Date: Dec 15, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog:
* Promoted to beta from #gci-dev-56-9000-21-0
gci-stable-55-8872-71-0
Date: Dec 14, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog:
* Promoted to stable from #gci-beta-55-8872-71-0
gci-beta-55-8872-71-0
Date: Dec 14, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 55-8872-70-0)
* Fixed CVE-2016-7039, CVE-2016-8655, CVE-2016-9793
gci-beta-55-8872-70-0
Date: Dec 09, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 55-8872-55-0)
* Enabled BLK_DEV_THROTTLING and process stats accounting config options in kernel
* Fixed CVE-2015-8964, CVE-2016-6828, CVE-2016-7042, CVE-2016-7097, CVE-2016-7917 and CVE-2016-8666
gci-dev-56-9000-21-0
Date: Dec 09, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 56-8977-0-0)
* Updated Kubernetes to v1.4.6
* Added compute-image-packages (20160930 release)
* Enabled BLK_DEV_THROTTLING, BLK_DEV_NVME and process stats accounting config options in kernel
* Fixed Fixed CVE-2015-8964, CVE-2016-6828, CVE-2016-7042, CVE-2016-7097 and CVE-2016-7917
gci-stable-54-8743-89-0
Date: Dec 06, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.10
Docker: v1.11.2
Changelog (vs 54-8743-86-0)
* Enabled BLK_DEV_THROTTLING kernel config
* Enabled kernel configs related to process stats accounting
* Fixed CVE-2015-8964, CVE-2016-6828, CVE-2016-7042, CVE-2016-7097, CVE-2016-7917 and CVE-2016-8666
gci-beta-55-8872-55-0
Date: Nov 17, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.6
Docker: v1.11.2
Changelog (vs 54-8872-47-0)
* Updated Kubernetes to v1.4.6
* Change the product name to 'Container-Optimized OS' in /etc/os-release
gci-stable-54-8743-86-0
Date: Nov 17, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.10
Docker: v1.11.2
Changelog (vs 54-8743-76-0)
* Updated Kubernetes to v1.3.10
* Change the product name to 'Container-Optimized OS' in /etc/os-release
gci-stable-53-8530-102-0
Date: Nov 17, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.9
Docker: v1.11.2
Changelog (vs 53-8530-100-0)
* Change the product name to 'Container-Optimized OS' in /etc/os-release
gci-beta-55-8872-47-0
Date: Nov 11, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.5
Docker: v1.11.2
Changelog (vs 55-8872-40-0)
* Cherry-pick runc PR#608: Eliminate redundant parsing of mountinfo
gci-dev-56-8977-0-0
Date: Nov 10, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.5
Docker: v1.11.2
Changelog (vs 56-8956-0-0)
* Cherry-pick runc PR#608: Eliminate redundant parsing of mountinfo
* Enabled various kernel modules needed for iptables and conntrack functionality to work correctly.
* Updated Docker image used by `toolbox` and it now comes with several networking tools pre-installed.
* Fixed CVE-2016-8666
gci-beta-55-8872-40-0
Date: Nov 04, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.5
Docker: v1.11.2
Changelog (vs 55-8872-26-0)
* Updated kubernetes to v1.4.5
gci-dev-56-8956-0-0
Date: Nov 03, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.5
Docker: v1.11.2
Changelog (vs 56-8938-0-0)
* Updated kubernetes to v1.4.5
gci-dev-56-8938-0-0
Date: Oct 27, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.4
Docker: v1.11.2
Changelog (vs 55-8872-18-0)
* Updated kubernetes to v1.4.4
* Fixed a bug in e2fsprogs that caused mke2fs to take a very long time. Upstream fix: http://git.kernel.org/cgit/fs/ext2/e2fsprogs.git/commit/?h=next&id=d33e690fe7a6cbeb51349d9f2c7fb16a6ebec9c2
gci-beta-55-8872-26-0
Date: Oct 26, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.4
Docker: v1.11.2
Changelog (vs 55-8872-18-0)
* Updated kubernetes to v1.4.4
* Fixed a bug in e2fsprogs that caused mke2fs to take a very long time. Upstream fix: http://git.kernel.org/cgit/fs/ext2/e2fsprogs.git/commit/?h=next&id=d33e690fe7a6cbeb51349d9f2c7fb16a6ebec9c2
gci-stable-54-8743-76-0
Date: Oct 26, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.9
Docker: v1.11.2
Changelog (vs 54-8743-71-0)
* Fixed a bug in e2fsprogs that caused mke2fs to take a very long time. Upstream fix: http://git.kernel.org/cgit/fs/ext2/e2fsprogs.git/commit/?h=next&id=d33e690fe7a6cbeb51349d9f2c7fb16a6ebec9c2
gci-stable-54-8743-71-0
Date: Oct 21, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.9
Docker: v1.11.2
Changelog (vs 54-8743-69-0)
* Fix for Linux Kernel CVE-2016-5195 (Dirty Cow)
* Updated kubernetes to v1.3.9
* Disabled timeout in systemd-networkd-wait-online.service to better deal with network bringup latency observed in some cases
gci-stable-53-8530-100-0
Date: Oct 20, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.9
Docker: v1.11.2
Changelog (vs 53-8530-85-0)
* Fix for Linux Kernel CVE-2016-5195 (Dirty Cow)
* Updated kubernetes to v1.3.9
gci-dev-55-8872-18-0
Date: Oct 20, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.1
Docker: v1.11.2
Changelog (vs 55-8872-16-0)
* Fix for Linux Kernel CVE-2016-5195 (Dirty Cow)
gci-beta-54-8743-69-0
Date: Oct 19, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.8
Docker: v1.11.2
Changelog (vs 54-8743-54-0)
* Minor bugfixes
gci-dev-55-8872-16-0
Date: Oct 19, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.1
Docker: v1.11.2
Changelog (vs 55-8866-0-0)
* Updated kubernetes to v1.4.1
* Toolbox started using gcr.io/google-containers/toolbox as base image
* Enabled FSCACHE, CACHEFILES and NFS_FSCACHE kernel configurations for better NFS support
gci-dev-55-8866-0-0
Date: Oct 5, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.4.0
Docker: v1.11.2
Changelog (vs 55-8820-0-0)
* Updated kubernetes to v1.4.0
* Enabled VXLAN and IP_SET config options in kernel to support some networking tools
* Patched OpenSSL (CVE-2016-2177, CVE-2016-2178, CVE-2016-2179, CVE-2016-2181, CVE-2016-2182, CVE-2016-6302, CVE-2016-6303)
gci-beta-54-8743-54-0
Date: Oct 4, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.8
Docker: v1.11.2
Changelog (vs 54-8743-42-0):
* Updated Kubernetes to v1.3.8
* Backported OverlayFS fixes from v4.4.21 stable kernel
gci-stable-53-8530-94-0
Date: Sep 28, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.8
Docker: v1.11.2
Changelog (vs 53-8530-85-0):
* Fixed performance regression in veth device driver in ChromiumOS kernel
* Updated Kubernetes to v1.3.8
gci-dev-55-8820-0-0
Date: Sep 20, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.7
Docker: v1.11.2
Changelog:
* Updated kubernetes to v1.3.7
* Added ebtables and ethtools
* Changed the binaries runc, containerd and docker to be statically linked
* Patched systemd to prevent being OOM-killed when running as PID other than 1
* Fixed performance regression in veth device driver in ChromiumOS kernel
gci-beta-54-8743-42-0
Date: Sep 27, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.7
Docker: v1.11.2
Changelog (vs 54-8743-25-0):
* Updated Kubernetes to v1.3.7
* Fixed performance regression in veth device driver in ChromiumOS kernel
* Patched OpenSSL (CVE-2016-2177, CVE-2016-2178, CVE-2016-2179, CVE-2016-2181, CVE-2016-2182, CVE-2016-6302, CVE-2016-6303)
gci-beta-54-8743-25-0
Date: Sep 13, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.6
Docker: v1.11.2
Changelog:
* Promoted release milestone 54 to beta
gci-stable-53-8530-85-0
Date: Sep 14, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.7
Docker: v1.11.2
Changelog (vs 53-8530-81-0):
* Updated Kubernetes to v1.3.7
* Enable marketing name injection for model and name
* CRAS: bt_device - Associate with adapter's object path
gci-stable-53-8530-81-0
Date: Sep 8, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.6
Docker: v1.11.2
Changelog (vs 53-8530-71-0):
* docker: upgrade go-patricia to fix memory leak ( Docker issue#24420 )
* overlayfs corruption fix ( Kernel commit 45d11738969633ec07ca35d75d486bf2d8918df6 )
gci-dev-54-8743-3-0
Date: Aug 29, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.6
Docker: v1.11.2
Changelog (vs 54-8711-0-0):
* Updated Kubernetes to v1.3.6.
* Docker: cherry-pick fix for memory leak in go-patricia
( Docker commit 3d714b5ed58cfdfd5872ddd3654d171b09bb02d3 )
* Cloud-Init: execute users-groups before write-files
* Kernel: make SHA256 the default hash for IMA
gci-beta-53-8530-71-0
Date: Aug 29, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.6
Docker: v1.11.2
Changelog (vs gci-beta-53-8530-57-0):
* Updated Kubernetes to v1.3.6.
gci-stable-52-8350-75-0
Date: August 25, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.2.6
Docker: v1.9.1
Changelog (vs gci-stable-52-8350-60-0):
* Fix for a ChromiumOS-specific memory leak in fs/namei.c
gci-dev-54-8711-0-0
Date: Aug 16, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.5
Docker: v1.11.2
Changelog (vs 54-8666-0-0):
* Updated Kubernetes to v1.3.5.
* Enable apparmor support by default
* Enable GCR (Container Registry) mirror
* Enable bcache as a module
gci-beta-53-8530-57-0
Date: Aug 15, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.5
Docker: v1.11.2
Changelog (vs gci-beta-53-8530-42-0):
* Updated Kubernetes to v1.3.5.
* Users creates by Google accounts manager daemon are automatically added to `docker` group
* Fixed a filesystem-related memory leak in ChromiumOS kernel
gci-dev-54-8666-0-0
Date: Aug 3, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.4
Docker: v1.11.2
Changelog (vs gci-dev-53-8530-29-0):
* Updated Kubernetes to v1.3.4.
* Kernel: many unused features were disabled
* Added apparmor support
* Enabled seccomp support
* Kernel updated to 4.4.14
* Updated 'toolbox' image to 'jessie-backports'
gci-beta-53-8530-42-0
Date: Aug 3, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.4
Docker: v1.11.2
Changelog:
* Updated Kubernetes to v1.3.4.
gci-beta-53-8530-40-0
Date: Aug 2, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.3
Docker: v1.11.2
Changelog:
* Promoted release milestone 53 to beta (no code changes vs gci-dev-53-8530-29-0)
gci-stable-52-8350-60-0
Date: July 28, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.2.6
Docker: v1.9.1
Changelog:
* Promoted release milestone 52 to stable (no code changes)
gci-dev-53-8530-29-0
Date: July 25, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.3
Docker: v1.11.2
Changelog:
* Updated Kubernetes to v1.3.3.
* Minor bugfix in crash/metrics reporting code.
gci-beta-52-8350-60-0
Date: July 21, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.2.6
Docker: v1.9.1
Changelog:
* Updated Kubernetes to v1.2.6.
gci-dev-53-8530-20-0
Date: July 18, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.2
Docker: v1.11.2
Changelog:
* Updated Kubernetes to v1.3.2.
gci-dev-53-8530-14-0
Date: July 14, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.0
Docker: v1.11.2
Changelog:
* Minor fixes.
gci-dev-53-8530-6-0
Date: July 07, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.0
Docker: v1.11.2
Changelog:
* Updated Kubernetes to v1.3.0
* Fixed a typo in cloud-init's UID assignment code
* Enabled NFS server and client support in the kernel
* Enabled crash and metrics collection daemons (requires user opt-in, see
Configuring a Container-VM instance )
gci-beta-52-8350-45-0
Date: June 28, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.2.5
Docker: v1.9.1
Changelog:
* Updated Kubernetes to v1.2.5
gci-dev-53-8490-0-0
Date: June 23, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.3.0-beta2
Docker: v1.11.2
Changelog:
* Updated Kubernetes to v1.3.0-beta2
* Added a systemd service `cloud-audit-setup` to log network connections and binary executions (disabled by default)
gci-beta-52-8350-39-0
Date: June 23, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.2.4
Docker: v1.9.1
Changelog:
* Promoted release milestone 52 to beta
* Started to audit every binary execution
gci-stable-51-8172-47-0
Date: June 9, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v.1.2.4
Docker: v1.9.1
Changelog:
* Promoted release milestone 51 to stable (no code changes since `gci-beta-51-8172-38-0`)
gci-dev-52-8352-0-0
Date: May 23, 2016
Kernel: ChromiumOS-4.4
Kubernetes: v1.2.4
Docker: v1.9.1
Changelog:
* Kernel upgraded to v4.4
* cloud-init: add patch to resolve metadata server locally
* docker: backport fix for issue#18113
* docker: Add error checks in dockercfg_update.sh
gci-beta-51-8172-38-0
Date: May 18, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.4
Docker: v1.9.1
Changelog:
* cloud-init: add patch to resolve metadata server locally
* docker: backport fix for issue#18113
* docker: Add error checks in dockercfg_update.sh
gci-dev-52-8300-0-0
Date: May 09, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.4
Docker: v1.9.1
Changelog:
* Updated Kubernetes to v1.2.4
* Fixed device policy file corruption
* Fixed image license
* Switched to using grub2
* Fixed manual rollback
* Added /etc/os-release file
gci-beta-51-8172-26-0
Date: May 09, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.4
Docker: v1.9.1
Changelog:
* Updated Kubernetes to v1.2.4
gci-stable-50-7978-71-0
Date: May 05, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.1.8
Docker: v1.9.1
Changelog:
* Fixed image license
* Internal cleanup changes
gci-beta-51-8172-23-0
Date: May 04, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.3
Docker: v1.9.1
Changelog:
* Fixed image license
* Fixed device-policy file corruption
gci-stable-50-7978-62-0
Date: Apr 26, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.1.8
Docker: v1.9.1
Changelog:
* Promoted to Stable channel
* Fix for CVE-2015-8785
gci-beta-51-8172-12-0
Date: Apr 26, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.3
Docker: v1.9.1
Changelog:
* Promoted to Beta channel
* Updated Kubernetes to 1.2.3
* Added kubelet systemd service
* glibc: backport fix for CVE-2013-7423
* Fix for CVE-2015-8785
gci-dev-52-8244-0-0
Date: Apr 26, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.3
Docker: v1.9.1
Changelog:
* Updated Kubernetes to 1.2.3
* Added kubelet systemd service
* Fixed /etc/localtime symlink
* Rixed mount options usage in gci_startup
* Improved error checks in dockercfg_update.sh
* Send audit messages to journald
* glibc: backport fix for CVE-2013-7423
* Fix for CVE-2015-8785
gci-dev-51-8168-0-0
Date: Apr 21, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.2.2
Docker: v1.9.1
Changelog:
* Bug fixes
gci-beta-50-7978-52-0
Date: Apr 11, 2016
Kernel: ChromiumOS-3.18
Kubernetes: v1.1.8
Docker: v1.9.1
Changelog:
* Promoted to beta channel
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
