---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.089Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "Serial port baud rate 115200"
feature_slug: "serial-port-baud-rate-115200"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
keywords:
  - "serial"
  - "port"
  - "baud"
  - "rate"
  - "115200"
  - "container"
  - "optimized"
  - "os"
---

# Serial port baud rate 115200

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Container-Optimized OS sets the serial port baud rate to 115200.

## Extended Definition

Container-Optimized OS sets the serial port baud rate to 115200.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)

## Supporting Pages

### "Collecting debugging information using sosreport \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport](https://docs.cloud.google.com/container-optimized-os/docs/how-to/sosreport)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Collecting the sosreport data To generate a sosreport: Connect to the instance using the gcloud compute ssh command. gcloud compute ssh [INSTANCE NAME] --zone [ZONE] --project [PROJECT ID] Check the OS version: sudo cat /etc/os-release egrep -w 'NAME VERSION' The output is similar to the following: NAME="Container-Optimized OS" VERSION=105 Run the sos command that corresponds to your OS version: COS 85 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo toolbox sudo apt install sosreport -y COS 105 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo toolbox sudo apt install sosreport -y Ubuntu-18 and earlier Run the following sosreport command to collect the logs: sudo sosreport --all-logs --batch --tmp-dir = /var If the previous command fails with sosreport: command not found , install the sosreport package and then run the previous sosreport command: sudo apt install sosreport Ubuntu-20 and later Run the following sos command to collect the logs: sudo sos report --all-logs --batch --tmp-dir = /var If the previous command fails with sos: command not found , install the sosreport package and then run the previous sos report command: sudo apt install sosreport You can change the directory where the report is stored by passing a different directory to the --tmp-dir option.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Collecting debugging information using sosreport Stay organized with collections Save and categorize content based on your preferences.
- Container-Optimized OS includes the sosreport utility, which collects information on demand to help you debug problems in a Container-Optimized OS virtual machine instance.
- Your sosreport has been generated and saved in: /var/sosreport-cos-20181106231224.tar.xz The checksum is: 5a8b97c6020346a688254c8b04ef86ec Viewing the collected data The report is owned by root and is not readable by other users.

### Supported filesystems \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems](https://docs.cloud.google.com/container-optimized-os/docs/concepts/supported-filesystems)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Container-Optimized OS enables the following EXT4-related features: Support for the EXT4 filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used EXT4 features enabled: CONFIG EXT4 FS=y CONFIG EXT4 USE FOR EXT2=y CONFIG EXT4 FS POSIX ACL=y CONFIG EXT4 FS SECURITY=y CONFIG JBD2=y e2fsprogs package : The e2fsprogs package contains several critical user space utilities available for the EXT4 filesystem (for example, mkfs and fsck ).
- Container-Optimized OS enables the following XFS-related features: Support for the XFS filesystem in kernel : The Linux kernel in Container-Optimized OS has the most commonly used XFS features enabled: CONFIG XFS FS=y CONFIG XFS SUPPORT V4=y CONFIG XFS QUOTA=y CONFIG XFS POSIX ACL=y xfsprogs package : The xfsprogs package contains several critical user space utilities available for the XFS filesystem (for example, mkfs and fsck ).
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Supported filesystems Stay organized with collections Save and categorize content based on your preferences.
- XFS filesystem Container-Optimized OS comes with a fully-supported XFS filesystem starting from COS M105.

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Running Your Image Once you've built your Container-Optimized OS image, you can run the image using KVM, or import the image to a Compute Engine instance.
- Running in hypervisor To boot your image in hypervisor, run the following command: x86 image kvm -m 1024 -nographic -net nic,model = virtio -net user,hostfwd = tcp:127.0.0.1:9222-:22 -hda src/build/images/lakitu/latest/chromiumos test image.bin Arm image sudo apt-get install qemu-system-arm qemu-efi dd if = /dev/zero of = /tmp/flash0.img bs = 1M count = 64 dd if = /usr/share/qemu-efi/QEMU EFI.fd of = /tmp/flash0.img conv = notrunc sudo qemu-system-aarch64 -m 1024 -cpu cortex-a57 -M virt -nographic \ -pflash /tmp/flash0.img \ -device virtio-scsi-pci,id = scsi \ -drive if = none,file = src/build/images/lakitu-arm64/latest/chromiumos test image.bin,id = hd0 \ -device scsi-hd,drive = hd0,bootindex = 0 \ -net nic \ -net user,hostfwd = tcp::9222-:22 Booting in this manner leaves the VM's serial port connected to your console, letting you log in without using SSH.
- To build Container-Optimized OS, specify lakitu (x86 image) or lakitu-arm64 (Arm image) for the board name as follows: x86 image build packages --board = lakitu build image --board = lakitu test Arm image build packages --board = lakitu-arm64 build image --board = lakitu-arm64 test In addition to test , you can build either a base , or dev image by passing the appropriate parameter to the ./build image script command.
- To SSH into the image, use the key generated for that image, as follows: x86 image ssh root@localhost -p 9222 -i src/build/images/lakitu/latest/id rsa Arm image ssh root@localhost -p 9222 -i src/build/images/lakitu-arm64/latest/id rsa Running on Compute Engine To import your image to a Compute Engine instance, you must compress the image into a .tar file.

