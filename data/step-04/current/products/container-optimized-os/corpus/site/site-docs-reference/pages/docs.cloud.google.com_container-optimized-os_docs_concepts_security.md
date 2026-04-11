---
title: "Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/container-optimized-os/docs/concepts/security
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/container-optimized-os/docs/concepts
source_metadata:
  url: https://docs.cloud.google.com/container-optimized-os/docs/concepts/security
  title: "Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation"
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
Guides
Send feedback
Security Overview
Stay organized with collections
Save and categorize content based on your preferences.
This page provides an overview of the security features of
Container-Optimized OS running on Google Cloud.
OS Security
Based on Chromium OS , Container-Optimized OS from Google
implements several security design principles to provide a well-configured
platform for running production services.
Minimal OS footprint
This is at the core of Container-Optimized OS security. Since
Container-Optimized OS is optimized to run containers and containers package
their own dependencies, we can trim unnecessary packages and thus minimize the
OS attack surface.
Immutable root filesystem and verified boot
The Container-Optimized OS root filesystem is always mounted as read-only.
Additionally, its checksum is computed at build time and verified by the kernel
on each boot. This mechanism prevents against attackers from "owning" the
machine through permanent local changes. Additionally, several other mounts are
non-executable by default. See Filesystem for details.
Stateless configuration
While having a read-only root filesystem is good for security, it makes the
system difficult to use. For example, we need to be able to create and add users
in order to log in to the system. To address this, we customize the root
filesystem such that /etc/ is writable but stateless. This allows you to write
configuration settings at run time, but those settings do not persist across
reboots. Thus, every time a Container-Optimized OS node reboots, it starts from
a clean slate. Certain data, such as users' home directories, logs, and Docker
images, persist across reboots, as they are not part of the root filesystem.
Security-hardened kernel
Container-Optimized OS enables several security-hardening kernel features,
including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table
Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.
Additionally, Container-Optimized OS supports security features like
seccomp
and
AppArmor
that make it possible to enforce finer grained security policies.
Security-centric defaults
Container-Optimized OS provides another level of hardening by providing
security-minded default values for several features. This includes things such as sysctl
settings
that disable ptrace and unprivileged BPF, lock down the firewall, and so on.
These defaults, when automatically applied to a fleet of instances, help secure
the entire cluster, project, and organization.
Automatic updates
Container-Optimized OS's automatic updates feature allows timely delivery of
security patches to running VMs. When Container-Optimized OS is managed by
Kubernetes Engine,
node auto-upgrades
strike a balance between security and stability.
Filesystem
The following is a list of paths in the Container-Optimized OS node image file
system, along with their properties and recommended usage:
Path
Properties
Purpose
/
read-only
executable
The root filesystem is mounted as read-only to maintain integrity. The
kernel verifies integrity root filesystem during boot up, and refuses to boot
in case of errors.
/home
/var
writable
non-executable
stateful
These paths are meant for storing data that persists for the lifetime of
the boot disk. They are mounted from /mnt/stateful_partition .
/var/lib/google
/var/lib/docker
/var/lib/toolbox
writable
executable
stateful
These paths are working directories for Compute Engine packages (for example, the
accounts manager service), Docker, and Toolbox
respectively.
/var/lib/cloud
writable
executable
stateless
tmpfs
This path is the working directory of the cloud-init package.
/etc
writable
executable
stateless
tmpfs
Typically holds your configuration (for example,
systemd services defined via cloud-init ).
It's a good idea to capture the desired state of your instances in
cloud-init , as cloud-init is applied when an
instance is newly created as well as when an instance is
restarted.
/tmp
writable
non-executable
stateless
tmpfs
Typically used as a scratch space and should not be used to store
persistent data.
/mnt/disks
writable
executable
stateless
tmpfs
You can mount persistent disks at directories under /mnt/disks .
Firewall
By default, Container-Optimized OS is configured to drop all incoming TCP/UDP
connections except SSH on port 22. See Configuring the Host
Firewall on how to change the
default to open up more ports.
Instance access
By default, Container-Optimized OS does not contain any accessible user
accounts.
User accounts and SSH keys are managed through
instance or project metadata
or OS Login .
OS Login lets you to manage access to instances using IAM. It allows for finer
grained access control (sudo versus non-sudo), identifiable SSH keys, and
organizational login policy.
The SSH daemon is configured to disallow password-based authentication and to
disallow root logins.
However, this does not prevent the users from gaining root privileges using sudo
after login unless the user account is managed with OS Login.
Infrastructure Security
In addition to various hardening features in the OS itself, the
Container-Optimized OS team also takes the software supply chain seriously and
prioritizes infrastructure security when developing, building, and deploying
images, based on years of experience from both Chromium OS and Google in
general.
Built from source at Google
Each package in Container-Optimized OS, including the Linux kernel itself, is
built from source from ChromiumOS code repositories. This means that we know
exactly what is going into the OS, who checked it in, in which version it was
introduced, etc. This also lets us quickly patch and update any package in case
a vulnerability is discovered, at any level.
Continuous vulnerability (CVE) scanning and response
A CVE-scanning system alerts us whenever a vulnerability is discovered in the
kernel or any package of the OS. This is the same system used to detect
vulnerabilities in Android and Chromium OS. The Container-Optimized OS team
responds with priority to make patched releases. The Container-Optimized OS team
also works with Google's incident response team to make wider security patches
available quickly in Container-Optimized OS.
Testing and qualification process
Before we publish a new Container-Optimized OS image to Google Cloud, we test it
at multiple levels—including kernel fuzz testing by
syzkaller ,
cluster-level Kubernetes tests, integration testing with Compute Engine features,
and several performance benchmarks. This ensures the stability and quality of
our releases.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
