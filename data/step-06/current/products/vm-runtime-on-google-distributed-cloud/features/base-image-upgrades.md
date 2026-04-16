---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.739Z"
product_name: "VM Runtime on Google Distributed Cloud"
product_slug: "vm-runtime-on-google-distributed-cloud"
feature_name: "Base image upgrades"
feature_slug: "base-image-upgrades"
latest_feature_date: "2023-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm"
keywords:
  - "base"
  - "image"
  - "upgrades"
  - "vm"
  - "runtime"
  - "on"
  - "distributed"
  - "now"
---

# Base image upgrades

Product: VM Runtime on Google Distributed Cloud
Coverage: MEDIUM

## Step 02 Summary

VM Runtime on Google Distributed Cloud now upgrades base images to include security fixes for vulnerabilities.

## Extended Definition

VM Runtime on Google Distributed Cloud now upgrades base images to include security fixes for vulnerabilities.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)

## Supporting Pages

### "Connect to VMs that use VM Runtime on GDC \_|\_ Google Distributed Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/connect-vms)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Connect to VMs that use VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- After you confirm (or force) the password reset, the command returns the new password for the specified VM and username: Resetting and retrieving password for USERNAME on VM NAME vm name: VM NAME username: USERNAME password: PASSWORD What's next Manage the power state of a VM in Google Distributed Cloud .
- After you have successfully connected using SSH the VM and no longer need the connection, exit the SSH session: exit Connect directly using the console If you don't have direct network connectivity to your Linux VM for SSH access, connect to the console of the VM using the VM Runtime on GDC console.
- Use the --configure-initial-password parameter with kubectl virt create command: kubectl virt create vm VM NAME \ --image ubuntu20.04 \ --os-type Linux \ --configure-initial-password USERNAME : PASSWORD \ --kubeconfig KUBECONFIG Replace the following values: VM NAME : name for your VM.

### "VM Runtime on Google Distributed Cloud overview \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview)
- Source ID: `site-docs-root`
- Final score: 273
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback VM Runtime on Google Distributed Cloud overview Stay organized with collections Save and categorize content based on your preferences.
- VM Runtime on Google Distributed Cloud is the key component for running virtual machine-based workloads in installations of Google Distributed Cloud (software only) on bare metal.
- VM Runtime on GDC integrates Kubevirt into your Google Distributed Cloud software-only installation to give a consistent way to manage your applications.
- VM Runtime on GDC is a part of Google Distributed Cloud that lets you run VMs on top of Kubernetes in the same way that you run containers.

### "Convert a virtual disk image to qcow2 format for use in VM Runtime on GDC\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/convert-image)
- Source ID: `site-docs-reference`
- Final score: 268
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Convert a virtual disk image to qcow2 format for use in VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- Before you begin To create a VM after you convert your existing virtual disk image, you need access to the following resources: Access to Google Distributed Cloud version 1.12.0 ( anthosBareMetalVersion: 1.12.0 ) or higher cluster.
- This document shows you how to manually convert an existing virtual disk image to the qcow2 format so that you can create and run VMs in VM Runtime on GDC using that source image.
- The qemu-img tool can convert virtual disk images from multiple formats, such as vmdk or vhdx , to the qcow2 format for use with VM Runtime on GDC.

### "Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC \_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/tutorial-deploy-existing-vm)
- Source ID: `site-docs-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deploy the VM-based workload When you deploy a VM into an installation of Google Distributed Cloud (software only) on bare metal, VM Runtime on GDC expects a VM image.
- Home Technology areas Google Distributed Cloud GDC for bare metal Guides Send feedback Tutorial: Deploy an existing VM in a cluster using VM Runtime on GDC Stay organized with collections Save and categorize content based on your preferences.
- This document provides a step-by-step guide to deploy a virtual machine (VM) based workload into an installation of Google Distributed Cloud (software only) on bare metal using VM Runtime on GDC.
- Objectives Enable VM Runtime on GDC and install the virtctl plugin Deploy the VM-based workload Log in to the VM and check the application status Access the VM-based workload Before you begin To complete this document you need the following resources: Access to a version 1.12.0 or higher bare metal cluster that was created by following the Install with Manual Loadbalancer guide.

