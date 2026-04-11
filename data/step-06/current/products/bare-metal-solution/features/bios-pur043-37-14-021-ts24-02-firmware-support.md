---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:19:23.974Z"
product_name: "Bare Metal Solution"
product_slug: "bare-metal-solution"
feature_name: "BIOS_PUR043.37.14.021 (TS24.02) firmware support"
feature_slug: "bios-pur043-37-14-021-ts24-02-firmware-support"
latest_feature_date: "2024-06-10"
deprecation_date: "2024-06-10"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bare-metal/docs/bms-planning"
  - "https://docs.cloud.google.com/bare-metal/docs/bms-maintenance"
  - "https://docs.cloud.google.com/bare-metal/docs/configure-serial-console"
keywords:
  - "021"
  - "14"
  - "02"
  - "pur043"
  - "bios"
  - "ts24"
  - "37"
  - "firmware"
---

# BIOS_PUR043.37.14.021 (TS24.02) firmware support

Product: Bare Metal Solution
Coverage: LOW

## Step 02 Summary

Support for BIOS_PUR043.37.14.021 (TS24.02) firmware on Bare Metal Solution is deprecated; deprecated on 2024-06-10.

## Extended Definition

Support for BIOS_PUR043.37.14.021 (TS24.02) firmware on Bare Metal Solution is deprecated; deprecated on 2024-06-10.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)

## Supporting Pages

### Plan for Bare Metal Solution \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-planning](https://docs.cloud.google.com/bare-metal/docs/bms-planning)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- General information Firmware version Machine series Machine type Lifecycle stage EOL and firmware deprecation date BIOS PUR043.45.00.002 (TS54) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA To be determined BIOS PUR043.37.14.021 (TS24.02) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 BIOS PUR043.37.16.023 (TS24.05) o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life April 2024 3.50.58 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA March 2024 3.80.24 o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA To be determined Features Firmware version Features BIOS PUR043.45.00.002 (TS54) Support for interactive serial console.
- Storage performance Standard SSD Storage For Fibre Channel and NFS storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for an 8 KiB block size on an SSD drive: Calculated IOPS = 7200 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 8 / 1024 The following table shows the IOPS and the throughput for common volume sizes: Volume size Read/Write IOPS Throughput (MiBps) Read/Write latency 200 GiB (0.2 TiB) 1400 10.9 1 TiB 7200 56 4 TiB 28800 225 8 TiB 57600 450 12 TiB 86400 675 16 TiB 115200 900 Performance SSD Storage For Fibre Channel storage, Bare Metal Solution provides throughput and input/output operations per second (IOPS) performance calculated according to the following formula for a 32 KiB block size on a Performance SSD drive: Calculated IOPS = 8192 Volume Size in TiB Maximum Throughput (MiBps) = Calculated IOPS 32 / 1024 The maximum volume size for a Performance SSD volume is 8 TiB.
- Identify your firmware version To identify the current firmware version of your Bare Metal Solution server, run the following command: sudo dmidecode -s bios-version Available firmware versions The following table provides details for the firmware versions available for Bare Metal Solution.
- OS version OS image code Machine series Machine type Lifecycle stage EOL and image deprecation date RHEL 7.7 for SAP LAMBRHEL77SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers End of Life August 2023 RHEL 7.9 RHEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2024 RHEL 8.4 (Minor version locked) RHEL84 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 8 (Latest minor release) RHEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2029 RHEL 8.0 for SAP RHEL80SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life December 2020 RHEL 8.1 for SAP RHEL81SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life November 2023 RHEL 9.4 (Minor version locked) RHEL94 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life May 2023 RHEL 9 (Latest minor release) RHEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA May 2032 OEL 7.9 OEL7x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2024 OEL 8 (Latest minor release) OEL8x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA July 2029 OEL 8.8 (Minor version locked) OEL88 o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2025 OEL 9 OEL9x o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose GA June 2032 SLES 15 SP1 SLES15SPx o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal General-purpose End of Life January 2024 SLES 12 SP4 for SAP SLES12SP4SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Life June 2023 SLES 12 SP5 for SAP SLES12SP5SAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support October 2027 SLES 15 for SAP SLES15SAP o2-standard-48-metal o2-standard-32-metal o2-standard-112-metal o2-standard-16-metal o2-highmem-224-metal General-purpose End of Life December 2022 SLES 15 SP1 for SAP SLES15SPxSAP o2-standard-16-metal o2-standard-32-metal o2-standard-48-metal o2-standard-112-metal o2-highmem-224-metal o2-ultramem-896-metal General-purpose & Memory-optimized servers End of Support January 2024 SLES 15 SP2 for SAP LAMBSLES15SP2SAP o2-ultramem-672-metal o2-ultramem-896-metal Memory-optimized servers GA December 2024 Bring Your Own Image (BYOI) The Bare Metal Solution servers are certified to run only the OS images of the following distributions: Red Hat Enterprise Linux (RHEL) Oracle Linux (OL) SUSE Linux Enterprise Server (SLES) Any other OS hasn't been tested or certified to run on the Bare Metal Solution servers.

### Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bare-metal/docs/bms-maintenance](https://docs.cloud.google.com/bare-metal/docs/bms-maintenance)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Determine the logical volume, physical volume, and the WWID of the underlying LUN for file system /testvol02 . sudo vgdisplay -v Sample output: --- Volume group --- VG Name testvg01 System ID Format lvm2 Metadata Areas 2 Metadata Sequence No 4 VG Access read/write VG Status resizable MAX LV 0 Cur LV 2 Open LV 2 Max PV 0 Cur PV 2 Act PV 2 VG Size 199.99 GiB PE Size 4.00 MiB Total PE 51198 Alloc PE / Size 50688 / 198.00 GiB Free PE / Size 510 / 1.99 GiB VG UUID W42Rle-9sER-jpS1-dwBC-xbtn-1D2b-FNRDMA --- Logical volume --- LV Path /dev/testvg01/lv01 LV Name lv01 VG Name testvg01 LV UUID W8bzQQ-Qtyf-CDJA-AXPt-P1b1-X4xL-2WDq92 LV Write Access read/write LV Creation host, time at-5176205-svr001, 2022-12-06 22:14:56 +0000 LV Status available open 1 LV Size 99.00 GiB Current LE 25344 Segments 1 Allocation inherit Read ahead sectors auto - currently set to 8192 Block device 253:9 --- Logical volume --- LV Path /dev/testvg01/lv02 LV Name lv02 VG Name testvg01 LV UUID B1vtMm-RAKx-3S92-mHfx-98xc-gKwR-XWOavH LV Write Access read/write LV Creation host, time at-5176205-svr001, 2022-12-07 17:02:53 +0000 LV Status available open 1 LV Size 99.00 GiB Current LE 25344 Segments 1 Allocation inherit Read ahead sectors auto - currently set to 8192 Block device 253:10 --- Physical volumes --- PV Name /dev/mapper/3600a0980383146354a2b522d53374235 PV UUID ieY2Cr-HNrg-dj2G-wHgP-lsuh-PTAH-hNemRq PV Status allocatable Total PE / Free PE 25599 / 255 PV Name /dev/mapper/3600a0980383146354a2b522d53374236 PV UUID AMrtZa-TZHO-w0h6-Uf1G-NCwa-UtFY-83rZen PV Status allocatable Total PE / Free PE 25599 / 255 The output shows the following: The file system /testvol02 is using the Logical Volume (LV) lv02 from the volume group testvg01 .
- Unmount the file system /testvol02 . sudo umount /testvol02 If required, find and remove the corresponding entry for the file system /testvol02 from file /etc/fstab by commenting or deleting the relevant line. grep testvol02 /etc/fstab Sample output: /dev/mapper/testvg01-lv02 /testvol02 xfs defaults 0 0 Deactivate the logical volume lv02 . sudo lvchange -an /dev/testvg01/lv02 Remove the logical volume lv02 from the volume group testvg01 . sudo lvremove /dev/testvg01/lv02 Sample output: Logical volume "lv02" successfully removed Remove the physical volume /dev/mapper/3600a0980383146354a2b522d53374236 from the volume group testvg01 . sudo vgreduce testvg01 /dev/mapper/3600a0980383146354a2b522d53374236 Sample output: Removed "/dev/mapper/3600a0980383146354a2b522d53374236" from volume group "testvg01" Optional: After removing the logical volume and the physical volume, use commands vgdisplay -v and dmsetup ls -tree to confirm that the device is no longer in use by the LVM.
- Determine the WWID of the device testvg01-lv02 . sudo dmsetup ls --tree Sample output: testvg01-lv02 (253:10) └─3600a0980383146354a2b522d53374236 (253:6) ├─ (8:176) ├─ (8:112) ├─ (8:240) └─ (8:48) testvg01-lv01 (253:9) └─3600a0980383146354a2b522d53374235 (253:5) ├─ (8:160) ├─ (8:96) ├─ (8:224) └─ (8:32) The output shows that the WWID of the device testvg01-lv02 is 3600a0980383146354a2b522d53374236 .
- The following example procedure shows how to remove LUNs with WWIDs of 3600a0980383146354a2b522d53374244 and 3600a0980383146354a2b522d53374245 that are part of the Oracle Linux Virtualization Manager storage domain olvm-domain-02 .

### "Configure the interactive serial console \_|\_ Bare Metal Solution \_|\_\

- URL: [https://docs.cloud.google.com/bare-metal/docs/configure-serial-console](https://docs.cloud.google.com/bare-metal/docs/configure-serial-console)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For example, in the case of a general-purpose server, the output shows a BIOS version of 43.45.00.002 or higher: Version: BIOS PUR043.45.00.002 If the BIOS version is lower than the required firmware, upgrade the firmware for your servers.
- To perform all tasks in this document, you must have either of the following roles: roles/baremetalsolution.admin roles/baremetalsolution.editor Verify that you have the required version of the firmware: For general-purpose servers, TS54 ( 43.45.00.002 ) or higher.
- The interactive serial console is supported only on the following servers: General-purpose servers with TS54 ( 43.45.00.002 ) or higher firmware version.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

