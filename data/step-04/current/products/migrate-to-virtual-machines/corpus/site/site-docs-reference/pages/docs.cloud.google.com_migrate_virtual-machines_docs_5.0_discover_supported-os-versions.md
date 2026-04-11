---
title: "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started
source_metadata:
  url: https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions
  title: "Supported operating systems \_|\_ Migrate to Virtual Machines \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Migrate to Virtual Machines
Guides
Send feedback
Supported operating systems
Stay organized with collections
Save and categorize content based on your preferences.
To migrate a virtual machine (VM) from any migration source , the VM must be running an operating
system supported by Migrate to Virtual Machines. This page lists the operating
systems supported by Migrate to Virtual Machines for each migration source.
Some Compute Engine features require agents and services running on the VM.
These agents and services are installed automatically during the migration.
However, certain security features such as SELinux, anti-viruses, and firewalls,
may interfere with these services and prevent certain features from functioning.
In order to make sure that the guest environment functions properly, follow the
steps in Loaded services for the guest environment
and if needed, the Troubleshooting steps for Compute Engine .
To request support for any operating system, contact us at: m2vm-os-support-request@google.com .
Note: Migrate to Virtual Machines supports the migration of 64-bit x86 VMs for Linux
(all flavours) and Windows Server operating systems only.
VMware source
You can migrate a VM from a VMware source, if the VM is running an
operating system that is listed in the following table.
OS
Version
Default license
License option
BIOS to UEFI conversion supported
AlmaLinux
8.3 - 8.10
N/A
N/A
Yes
9.0 - 9.6
N/A
N/A
Yes
10.0
N/A
N/A
No
CentOS
Stream 8
N/A
N/A
Yes
Stream 9
N/A
N/A
Yes
Debian
11.0 - 11.6
N/A
N/A
Yes
12
N/A
N/A
Yes
13.0 - 13.2
N/A
N/A
Yes
RHEL
7.9
BYOL
PAYG with ELS (see Append RHEL ELS licenses )
No
8.0 - 8.10
BYOL
PAYG
Yes
8.0 - 8.10 SAP
PAYG
PAYG
No
9.0 - 9.1
BYOL
PAYG
Yes
9.2
BYOL
PAYG
No
9.0 - 9.2 SAP
PAYG
PAYG
No
9.3 - 9.4
BYOL
PAYG
No
10.0
BYOL
PAYG
Yes
Rocky Linux
8.4 - 8.5
N/A
N/A
No
9
N/A
N/A
No
SLES
12 SP5
BYOL
PAYG
Yes
12 SP4 SAP
BYOL
PAYG
No
15 SP3
BYOL
PAYG
Yes
15 SP5
BYOL
PAYG
No
15 SP2 SAP
BYOL
PAYG
No
Ubuntu
18.04.6
N/A
N/A
No
20.04.0 - 20.04.04
N/A
N/A
Yes
22.04
N/A
N/A
Yes
24.04
N/A
N/A
Yes
Windows Server (Essentials, Standard, and Datacenter)
2016
PAYG
BYOL 1
Yes
2019
PAYG
BYOL 1
Yes
2022
PAYG
N/A
Yes
2025
PAYG
N/A
No
AWS source
You can migrate a VM from an AWS source, if the VM is running an operating system
that is listed in the following table.
Note: To migrate a VM running Amazon Linux 2, Migrate to Virtual Machines first
converts Amazon Linux 2 to Rocky Linux 8 and then completes the migration. For
more information, see Migrate an Amazon Linux 2 VM to Google Cloud . To participate in the preview ,
contact us at m2vm-amazon-linux-migration@google.com .
OS
Version
Default license
License option
BIOS to UEFI conversion supported
Arm supported
AlmaLinux
8.3 - 8.10
N/A
N/A
Yes
Yes
9.0 - 9.6
N/A
N/A
Yes
Yes
10.0
N/A
N/A
No
Yes
Amazon Linux
2
Not applicable (N/A)
N/A
No
No
CentOS
Stream 8
N/A
N/A
Yes
No
Stream 9
N/A
N/A
Yes
No
Debian
11.0 - 11.6
N/A
N/A
Yes
Yes
12
N/A
N/A
Yes
Yes
13.0 - 13.2
N/A
N/A
Yes
Yes
RHEL
7.9
PAYG
PAYG with ELS (see Append RHEL ELS licenses )
No
No
8.0 - 8.10
PAYG
PAYG
Yes
Yes
8.0 - 8.10 SAP
PAYG
PAYG
No
No
9.0 - 9.1
PAYG
PAYG
Yes
Yes
9.2
PAYG
PAYG
No
Yes
9.0 - 9.2 SAP
PAYG
PAYG
No
No
9.3 - 9.4
PAYG
PAYG
No
No
10.0
PAYG
PAYG
Yes
Yes
Rocky Linux
8.4 - 8.5
N/A
N/A
No
Yes
9
N/A
N/A
No
Yes
SLES
12 SP5
PAYG
PAYG
Yes
No
15 SP3
PAYG
PAYG
Yes
No
15 SP5
PAYG
PAYG
No
Yes
Ubuntu
18.04.6
N/A
N/A
No
No
20.04.0 - 20.04.04
N/A
N/A
Yes
Yes
22.04
N/A
N/A
Yes
Yes
24.04
N/A
N/A
Yes
Yes
Windows Server (Essentials, Standard, and Datacenter)
2016
PAYG
BYOL 1
Yes
N/A
2019
PAYG
BYOL 1
Yes
N/A
2022
PAYG
N/A
Yes
N/A
2025
PAYG
N/A
No
N/A
Azure source
You can migrate a VM from an Azure source, if the VM is running an operating
system that is listed in the following table.
OS
Version
Default license
License option
BIOS to UEFI conversion supported
Arm supported
AlmaLinux
8.3 - 8.10
N/A
N/A
Yes
Yes
9.0 - 9.6
N/A
N/A
Yes
Yes
10.0
N/A
N/A
No
Yes
CentOS
Stream 8
N/A
N/A
Yes
No
Stream 9
N/A
N/A
Yes
No
Debian
11.0 - 11.6
N/A
N/A
Yes
Yes
12
N/A
N/A
Yes
Yes
13.0 - 13.2
N/A
N/A
Yes
Yes
RHEL
7.9
PAYG
PAYG with ELS (see Append RHEL ELS licenses )
Yes
No
8.0 - 8.10
PAYG
PAYG
Yes
Yes
8.0 - 8.10 SAP
PAYG
PAYG
No
No
9.0 - 9.2
PAYG
PAYG
Yes
Yes
9.0 - 9.2 SAP
PAYG
PAYG
No
No
9.3 - 9.4
PAYG
PAYG
No
No
10.0
PAYG
PAYG
Yes
Yes
Rocky Linux
8.4 - 8.5
N/A
N/A
No
Yes
9
N/A
N/A
Yes
Yes
SLES
12 SP5
PAYG
PAYG
Yes
No
15 SP3
PAYG
PAYG
Yes
No
15 SP5
PAYG
PAYG
Yes
Yes
Ubuntu
20.04.0 - 20.04.04
N/A
N/A
Yes
Yes
22.04
N/A
N/A
Yes
Yes
24.04
N/A
N/A
Yes
Yes
Windows Server (Essentials, Standard, and Datacenter)
2016
PAYG
BYOL 1
Yes
N/A
2019
PAYG
BYOL 1
Yes
N/A
2022
PAYG
N/A
Yes
N/A
2025
PAYG
N/A
No
N/A
Image import
You can import a virtual disk to Compute Engine using Migrate to Virtual Machines,
if the VM is running an operating system that is listed in the following table.
OS
Version
Default license
License option
BIOS to UEFI conversion supported
Arm supported
AlmaLinux
8.3 - 8.10
N/A
N/A
Yes
Yes
9.0 - 9.6
N/A
N/A
Yes
Yes
10.0
N/A
N/A
No
Yes
CentOS
Stream 8
N/A
N/A
Yes
No
Stream 9
N/A
N/A
Yes
No
Debian
11.0 - 11.6
N/A
N/A
Yes
Yes
12
N/A
N/A
Yes
Yes
13.0 - 13.2
N/A
N/A
Yes
Yes
RHEL
7.9
BYOL
PAYG with ELS (see Append RHEL ELS licenses )
No
No
8.0 - 8.10
BYOL
PAYG
Yes
Yes
8.0 - 8.10 SAP
BYOL
PAYG
No
No
9.0 - 9.1
BYOL
PAYG
Yes
Yes
9.2
BYOL
PAYG
No
Yes
9.0 - 9.2 SAP
BYOL
PAYG
No
No
9.3 - 9.4
BYOL
PAYG
No
No
10.0
BYOL
PAYG
Yes
Yes
Rocky Linux
8.4 - 8.5
N/A
N/A
No
Yes
9
N/A
N/A
No
Yes
SLES
12 SP5
BYOL
PAYG
Yes
No
12 SP4 SAP
BYOL
PAYG
No
No
15 SP3
BYOL
PAYG
Yes
No
15 SP5
BYOL
PAYG
No
Yes
15 SP2 SAP
BYOL
PAYG
No
No
Ubuntu
18.04.6
N/A
N/A
No
No
20.04.0 - 20.04.04
N/A
N/A
Yes
Yes
22.04
N/A
N/A
Yes
Yes
24.04
N/A
N/A
Yes
Yes
Windows Server (Essentials, Standard, and Datacenter)
2016
PAYG
BYOL 1
Yes
N/A
2019
PAYG
BYOL 1
Yes
N/A
2022
PAYG
N/A
Yes
N/A
2025
PAYG
N/A
No
N/A
1 See the notes on Bring Your Own License (BYOL) for Microsoft Licensing .
Operating systems supported by partners
Migrate to Virtual Machines supports importing images and migrating VMs running the
following operating systems supported by partners. Contact the
Migrate to Virtual Machines support team if you need assistance to import images or
migrate VMs with these operating systems. For more information on importing
images and migrating VMs to Oracle Linux, see Oracle Linux on Google Cloud .
OS
Version
Default license
License option
BIOS to UEFI conversion supported
Comments
Oracle Linux
6.0 - 6.7
BYOL
N/A
No
Requires kernel-uek version of at least 4.1.12-37.4.1
6.8 - 6.10
BYOL
N/A
No
7.0 - 7.9
BYOL
N/A
No
8.0 - 8.10
BYOL
N/A
No
9.0 - 9.3
BYOL
N/A
No
10.0
BYOL
N/A
No
Oracle Linux on Google Cloud
Google Cloud supports importing Oracle Linux images using the
import virtual disk images
capability of Migrate to Virtual Machines. Note that you don't incur any costs when
using Oracle Linux on Google Cloud.
If you are running VMs on Compute Engine with Oracle Linux, Google Cloud
provides support for your VMs as part of Google Cloud support packages. This
includes support for Compute Engine capabilities and generic Linux support.
If you need support for issues specifically related to Oracle Linux, we
recommend that you consult community resources or get enterprise-grade support
directly from Oracle.
While you can import Oracle Linux images with different configurations, we
recommend that you either import the Oracle Linux Cloud Images published by Oracle , or import images that mimic their overall
configuration or layout.
The following sections discuss the considerations you must keep in mind while
importing Oracle Linux images to Google Cloud:
gVNIC driver requirements
The Google Virtual NIC (gVNIC) driver is
needed for virtio -enabled VM families (and certain newer VM families) to
have access to Tier1 networking that provides up to 100GB bandwidth.
The gVNIC driver is supported, but is not configured on Oracle Linux images
using the Unbreakable Enterprise Kernel Release 7 (UEK7) kernel supported by
Oracle Linux 8 and 9. In these cases, Migrate to Virtual Machines installs the
kernel-uek-modules-extra package during the OS adaptation process to add support for the gVNIC
driver. If you need the gVNIC driver, ensure that you don't enable the
Skip OS adaptations option when you import virtual disk images .
The gVNIC driver is not supported by the following Oracle Linux images:
The UEK6 kernel supported on Oracle Linux 7 and 8
The UEK5 kernel supported on Oracle Linux 7 only
UEK4 kernel supported in Oracle Linux 6 only using extended support
If you need the gVNIC driver, we recommend that you to switch to Oracle Linux 8
or 9 and use either UEK7 or Red Hat Compatible Kernel (RHCK) kernels.
IDPF driver requirements
The Infrastructure Data Plane Function (IDPF) driver is needed for certain Compute Engine machine series to have networking capabilities. However, the
IDPF driver is not supported by the Oracle Linux images using UEK kernels and
Oracle Linux 6 or 7 images using RHCK kernels. If you need IDPF support, we
recommend that you switch to Oracle Linux 8 or 9, and use the RHCK kernel. IDPF
driver support was introduced in Oracle Linux versions 8.10.1.* and 9.4.*.
Note that even for Oracle Linux images that support the IDPF driver, the
import virtual disk images process
doesn't automatically set the corresponding IDPF value in the guestOsFeatures
attribute of the image resource. You must set the guestOsFeatures attribute
when you launch instances of a VM series that require IDPF driver for
networking. To do this, create a new image resource using the
gcloud compute image create command with the imported image as the source,
and add the IDPF value using the guest-os-feautres parameter.
Other considerations
The following are a few considerations you must keep in mind when using Oracle
Linux on Google Cloud:
A Unified Extensible Firmware Interface (UEFI) boot is required for
Compute Engine features such Shielded VMs .
If the imported images don't have the (UEFI) bootloader configured correctly,
the boot falls back to using Basic Input/Output System (BIOS).
If the applications you've deployed on Oracle Linux have dependencies on
specific features in the guest environment ,
we recommend that you test and verify that your application is working as
intended. The guest environment is installed while importing an image as part of the OS adaptations process .
If you see any issues with the application, update your OS configuration with
specific emphasis on the following:
The OS configuration supporting alias IP ranges . This
configuration might also be required by internal passthrough Network Load Balancer .
The order of execution of Compute Engine startup scripts .
The device name or symbolic link (symlink)
of Persistent Disk resources.
The automatic expansion of a root partition when the Persistent Disk size is
increased.
Operating systems with migration support only
Migrate to Virtual Machines supports migrating VMs running the following operating
systems that have reached end of life (EOL), or are not officially supported on
Google Cloud. For more information on the OSes supported by
Compute Engine, see the full
Operating system details .
You can migrate VMs running these operating systems to Google Cloud,
however, note that not all Compute Engine features might be supported.
Contact the Migrate to Virtual Machines support team if you need assistance to
migrate these VMs.
OS
Version
Default license
License option
BIOS to UEFI conversion supported
Comments
CentOS
6.0 - 6.10
N/A
N/A
No
7.0 - 7.9
N/A
N/A
Yes
8.0 - 8.5
N/A
N/A
Yes
Debian
8.0 - 8.11
N/A
N/A
No
9.0 - 9.13
N/A
N/A
No
10.0 - 10.12
N/A
N/A
No
RHEL
6.0 - 6.9
BYOL
N/A
No
7.0 - 7.8
BYOL
N/A
No
7.0 - 7.9 SAP
BYOL
N/A
No
SLES
11 SP3
BYOL
N/A
No
11 SP4
BYOL
BYOL
No
Ubuntu
14.04
N/A
N/A
No
16.04
N/A
N/A
No
18.04
N/A
N/A
No
Windows Client
7 SP1 (x86 and x64)
BYOL
N/A
No
8 (x86 and x64)
BYOL
N/A
No
8.1 (x86 and x64)
BYOL
N/A
No
10 (x86 and x64)
BYOL
N/A
No
Windows Server (Essentials, Standard, and Datacenter).
2008 R2
PAYG
BYOL
No
The Windows 2008 R2, 2012, and 2012 R2 servers have reached end-of-life (EoL). Google Cloud provides limited support for these operating systems. You can upgrade these servers post-migration. For instructions on performing an in-place upgrade post-migration, see Performing an in-place upgrade of Windows Server .
2012
PAYG
BYOL
Yes
2012 R2
PAYG
BYOL
Yes
These servers can be upgraded post-migration. For instructions on performing an in-place upgrade post-migration, see Performing an in-place upgrade of Windows Server .
Licensing
Compute Engine supports pay as you go (PAYG) licenses and bring your own
licenses (BYOL). The default license type for migrated VMs is assigned by
Migrate to Virtual Machines based on the migrated OS. For more information, see the
tables in the preceding sections.
If the operating system supports multiple license types, you can change the
license type when you configure the target Compute Engine instance.
For more information, see Configuring the target for a migrated VM .
Note: Some operating system types, such as CentOS and Debian, don't support a
license. Others, such as Windows Client, only support one type of license.
Support for encrypted disks
Migrate to Virtual Machines does not support software encrypted disks because they
cannot be read without a key. Specifically, you cannot migrate Windows 10 and
later systems that use BitLocker drive encryption .
Support for Compute Engine machine series
Migrate to Virtual Machines supports migrating virtual machine instances (VMs) to
Compute Engine 1st, 2nd, 3rd, and 4th generation machine series . Migrate to Virtual Machines doesn't support
Compute Engine bare metal instances and machine types .
Note that the 3rd generation machine series such as C3 ,
H3 ,
and M3 require non-volatile
memory express (NVMe) and Google Virtual NIC (gVNIC)
drivers which may not be supported by some older operating systems. If a
migrating VM is running an operating system that doesn't support gVNIC or NVMe,
Migrate to Virtual Machines blocks you from selecting an incompatible 3rd generation
machine series.
For information on different machine types that support NVMe and gVNIC, go to
the Machine series comparison
section, click Choose VM properties to compare , and select Disk interface type
and Network interfaces . For more information on machine types and their
requirements, see General-purpose machine family for Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
