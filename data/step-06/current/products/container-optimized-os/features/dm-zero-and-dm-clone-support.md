---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.075Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "dm-zero and dm-clone support"
feature_slug: "dm-zero-and-dm-clone-support"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
keywords:
  - "dm"
  - "zero"
  - "clone"
  - "adds"
  - "device"
  - "mapper"
  - "targets"
  - "container"
---

# dm-zero and dm-clone support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Adds support for dm-zero and dm-clone device-mapper targets; Container-Optimized OS supports the dm-zero and dm-clone device-mapper targets.

## Extended Definition

Adds support for dm-zero and dm-clone device-mapper targets; Container-Optimized OS supports the dm-zero and dm-clone device-mapper targets.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)

## Supporting Pages

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Create a script file using the following contents: #cloud-config bootcmd : - fsck.ext4 -tvy /dev/ DEVICE ID - mkdir -p /mnt/disks/ MNT DIR - mount -t ext4 -o ... /dev/ DEVICE ID /mnt/disks/ MNT DIR Replace the following: DEVICE ID : the device ID of the disk that you want to format and mount.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Disks and file system overview Stay organized with collections Save and categorize content based on your preferences.
- When using Container-Optimized OS, be aware of the partitioning if you run your own services that have certain expectations about the file system layout outside of containers.

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Running in hypervisor To boot your image in hypervisor, run the following command: x86 image kvm -m 1024 -nographic -net nic,model = virtio -net user,hostfwd = tcp:127.0.0.1:9222-:22 -hda src/build/images/lakitu/latest/chromiumos test image.bin Arm image sudo apt-get install qemu-system-arm qemu-efi dd if = /dev/zero of = /tmp/flash0.img bs = 1M count = 64 dd if = /usr/share/qemu-efi/QEMU EFI.fd of = /tmp/flash0.img conv = notrunc sudo qemu-system-aarch64 -m 1024 -cpu cortex-a57 -M virt -nographic \ -pflash /tmp/flash0.img \ -device virtio-scsi-pci,id = scsi \ -drive if = none,file = src/build/images/lakitu-arm64/latest/chromiumos test image.bin,id = hd0 \ -device scsi-hd,drive = hd0,bootindex = 0 \ -net nic \ -net user,hostfwd = tcp::9222-:22 Booting in this manner leaves the VM's serial port connected to your console, letting you log in without using SSH.
- To build Container-Optimized OS, specify lakitu (x86 image) or lakitu-arm64 (Arm image) for the board name as follows: x86 image build packages --board = lakitu build image --board = lakitu test Arm image build packages --board = lakitu-arm64 build image --board = lakitu-arm64 test In addition to test , you can build either a base , or dev image by passing the appropriate parameter to the ./build image script command.
- You can use the cros sdk tool included in depot tools to create and enter a chroot that's ready for Container-Optimized OS compilation by running the following command in the source directory that you created in the previous step: cd $HOME/cos-src cros sdk --enter Once inside chroot , you can build the disk image.
- Prerequisites To build a Container-Optimized OS image, you'll need to install the following tools on your development machine: git and curl A package of Chromium scripts called depot tools that includes tools like repo and cros sdk .

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- End-to-end: Running a GPU application on Container-Optimized OS The following end-to-end example shows you how to use cloud-init to configure Container-Optimized OS VM instances that provision a GPU application container myapp:latest after the GPU driver has been installed: #cloud-config users : - name : myuser uid : 2000 write files : - path : /etc/systemd/system/install-gpu.service permissions : 0644 owner : root content : [Unit] Description=Install GPU drivers Wants=gcr-online.target docker.socket After=gcr-online.target docker.socket [Service] User=root Type=oneshot ExecStart=cos-extensions install gpu StandardOutput=journal+console StandardError=journal+console - path : /etc/systemd/system/myapp.service permissions : 0644 owner : root content : [Unit] Description=Run a myapp GPU application container Requires=install-gpu.service After=install-gpu.service [Service] User=root Type=oneshot RemainAfterExit=true ExecStart=/usr/bin/docker run --rm -u 2000 --name=myapp --device /dev/nvidia0:/dev/nvidia0 myapp:latest StandardOutput=journal+console StandardError=journal+console runcmd : - systemctl daemon-reload - systemctl start install-gpu.service - systemctl start myapp.service About the NVIDIA CUDA-X libraries CUDA® is NVIDIA's parallel computing platform and programming model for GPUs.
- The following example shows you how to run a CUDA application in a Docker container that consumes /dev/nvidia0 : docker run \ --volume /var/lib/nvidia/lib64:/usr/local/nvidia/lib64 \ --volume /var/lib/nvidia/bin:/usr/local/nvidia/bin \ --device /dev/nvidia0:/dev/nvidia0 \ --device /dev/nvidia-uvm:/dev/nvidia-uvm \ --device /dev/nvidiactl:/dev/nvidiactl \ registry.k8s.io/cuda-vector-add:v0.1 You can run your containers through cloud-init to specify the dependency between driver installation and your containers. see the End-to-end: Running a GPU application on Container-Optimized OS section for more details.
- For example, on a COS VM, you could use the following command to install the NVIDIA driver and load the nvidia.ko kernel module with the NVreg EnableGpuFirmware=0 parameter. sudo cos-extensions install gpu -- --module-arg nvidia.NVreg EnableGpuFirmware=0 Preload the driver You can preload the GPU driver on your Container-Optimized OS instance even when no GPU device is attached.
- Restrictions Container-Optimized OS version restrictions Only Container-Optimized OS LTS release milestone 85 and later support the cos-extensions utility mentioned in the Installing NVIDIA GPU device drivers section.

