---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.090Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "automatic known modules list generation"
feature_slug: "automatic-known-modules-list-generation"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source"
keywords:
  - "automatic"
  - "known"
  - "modules"
  - "list"
  - "generation"
  - "image"
  - "build"
  - "process"
---

# automatic known modules list generation

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

The image build process can automatically generate a known modules list; The image build process can automatically generate a known modules list.

## Extended Definition

The image build process can automatically generate a known modules list; The image build process can automatically generate a known modules list.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)

## Supporting Pages

### "Running instances with GPU accelerators \_|\_ Container-Optimized OS \_\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus](https://docs.cloud.google.com/container-optimized-os/docs/how-to/run-gpus)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For N1 general-purpose machine types, you can attach the following GPUs: NVIDIA T4 NVIDIA V100 NVIDIA P100 NVIDIA P4 GPUs provide compute power to drive deep-learning tasks such as image recognition and natural language processing, as well as other compute-intensive tasks such as video transcoding and image processing.
- Identify GPU driver versions Each version of Container-Optimized OS image has a list of supported NVIDIA GPU driver versions for each GPU type, along with a default driver for each type.
- You may also check all the GPU driver versions supported by the GPU on your Container-Optimized OS VM instance by running the following command: sudo cos-extensions list Identify the required CUDA toolkit version If your applications use CUDA , install NVIDIA's CUDA toolkit in your containers.
- For example, in the supported GPU driver version list for Container-Optimized OS version cos-105-17412-448-12 , the NVIDIA L4 has a Default GPU driver version of 535.183.01 , whereas the NVIDIA P100 has a Default GPU driver version of 470.256.02 .

### Building Container-Optimized OS from source \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source](https://docs.cloud.google.com/container-optimized-os/docs/how-to/building-from-open-source)
- Source ID: `site-docs-reference`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Running in hypervisor To boot your image in hypervisor, run the following command: x86 image kvm -m 1024 -nographic -net nic,model = virtio -net user,hostfwd = tcp:127.0.0.1:9222-:22 -hda src/build/images/lakitu/latest/chromiumos test image.bin Arm image sudo apt-get install qemu-system-arm qemu-efi dd if = /dev/zero of = /tmp/flash0.img bs = 1M count = 64 dd if = /usr/share/qemu-efi/QEMU EFI.fd of = /tmp/flash0.img conv = notrunc sudo qemu-system-aarch64 -m 1024 -cpu cortex-a57 -M virt -nographic \ -pflash /tmp/flash0.img \ -device virtio-scsi-pci,id = scsi \ -drive if = none,file = src/build/images/lakitu-arm64/latest/chromiumos test image.bin,id = hd0 \ -device scsi-hd,drive = hd0,bootindex = 0 \ -net nic \ -net user,hostfwd = tcp::9222-:22 Booting in this manner leaves the VM's serial port connected to your console, letting you log in without using SSH.
- To build Container-Optimized OS, specify lakitu (x86 image) or lakitu-arm64 (Arm image) for the board name as follows: x86 image build packages --board = lakitu build image --board = lakitu test Arm image build packages --board = lakitu-arm64 build image --board = lakitu-arm64 test In addition to test , you can build either a base , or dev image by passing the appropriate parameter to the ./build image script command.
- To SSH into the image, use the key generated for that image, as follows: x86 image ssh root@localhost -p 9222 -i src/build/images/lakitu/latest/id rsa Arm image ssh root@localhost -p 9222 -i src/build/images/lakitu-arm64/latest/id rsa Running on Compute Engine To import your image to a Compute Engine instance, you must compress the image into a .tar file.
- You can use the cros sdk tool included in depot tools to create and enter a chroot that's ready for Container-Optimized OS compilation by running the following command in the source directory that you created in the previous step: cd $HOME/cos-src cros sdk --enter Once inside chroot , you can build the disk image.

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Infrastructure Security In addition to various hardening features in the OS itself, the Container-Optimized OS team also takes the software supply chain seriously and prioritizes infrastructure security when developing, building, and deploying images, based on years of experience from both Chromium OS and Google in general.
- Testing and qualification process Before we publish a new Container-Optimized OS image to Google Cloud, we test it at multiple levels—including kernel fuzz testing by syzkaller , cluster-level Kubernetes tests, integration testing with Compute Engine features, and several performance benchmarks.
- Filesystem The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.
- Security-hardened kernel Container-Optimized OS enables several security-hardening kernel features, including Integrity Measurement Architecture (IMA), Audit, Kernel Page Table Isolation (KPTI), and some Linux Security Modules (LSMs) from Chromium OS.

