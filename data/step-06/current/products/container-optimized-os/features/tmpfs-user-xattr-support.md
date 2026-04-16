---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:37:11.097Z"
product_name: "Container Optimized OS"
product_slug: "container-optimized-os"
feature_name: "tmpfs user.* xattr support"
feature_slug: "tmpfs-user-xattr-support"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/security"
  - "https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem"
  - "https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig"
keywords:
  - "tmpfs"
  - "user"
  - "xattr"
  - "supports"
  - "extended"
  - "attributes"
  - "namespace"
  - "container"
---

# tmpfs user.* xattr support

Product: Container Optimized OS
Coverage: MEDIUM

## Step 02 Summary

Tmpfs supports extended attributes in the user.* namespace; Container-Optimized OS supports user.* extended attributes on tmpfs.

## Extended Definition

Tmpfs supports extended attributes in the user.* namespace; Container-Optimized OS supports user.* extended attributes on tmpfs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)

## Supporting Pages

### Security Overview \_|\_ Container-Optimized OS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/security](https://docs.cloud.google.com/container-optimized-os/docs/concepts/security)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Additionally, Container-Optimized OS supports security features like seccomp and AppArmor that make it possible to enforce finer grained security policies.
- Instance access By default, Container-Optimized OS does not contain any accessible user accounts.
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .

### "Disks and file system overview \_|\_ Container-Optimized OS \_|\_ Google\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem](https://docs.cloud.google.com/container-optimized-os/docs/concepts/disks-and-filesystem)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They are mounted from /mnt/stateful partition . /var/lib/google /var/lib/docker /var/lib/toolbox writable executable stateful These paths are working directories for Compute Engine packages (for example, the accounts manager service), Docker, and Toolbox respectively. /var/lib/cloud writable executable stateless tmpfs This path is the working directory of the cloud-init package. /etc writable executable stateless tmpfs Typically holds your configuration (for example, systemd services defined via cloud-init ).
- It's a good idea to capture the desired state of your instances in cloud-init , as cloud-init is applied when an instance is newly created as well as when an instance is restarted. /tmp writable non-executable stateless tmpfs Typically used as a scratch space and should not be used to store persistent data. /mnt/disks writable executable stateless tmpfs You can mount persistent disks at directories under /mnt/disks .
- To create a VM, use the following command: gcloud compute instances create INSTANCE NAME \ --metadata-from-file user-data = SCRIPT FILE NAME To update an existing instance, use the following command: gcloud compute instances add-metadata INSTANCE NAME \ --metadata-from-file user-data = SCRIPT FILE NAME Replace the following: INSTANCE NAME : the name of your VM instance.
- Working with the Container-Optimized OS file system The following is a list of paths in the Container-Optimized OS node image file system, along with their properties and recommended usage: Path Properties Purpose / read-only executable The root filesystem is mounted as read-only to maintain integrity.

### "Configuring instances with user-defined guest policies \_|\_ Container-Optimized\

- URL: [https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig](https://docs.cloud.google.com/container-optimized-os/docs/how-to/osconfig)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Here is an example that shows how users can use assignment and recipes features of guest policies to create a file on instances located at us-central1-a. assignment : zones : - us-central1-a recipes : - name : recipe-runscript desiredState : INSTALLED installSteps : - scriptRun : interpreter : SHELL script : touch /tmp/TOUCH FILE Note: While it is optional to provide an interpreter on other distros, Container-Optimized OS requires interpreter to execute the given script.
- Home Documentation Compute Compute Engine Container-Optimized OS Guides Send feedback Configuring instances with user-defined guest policies Stay organized with collections Save and categorize content based on your preferences.
- You can use OS Config's guest policies to configure your instance. packages and packageRepositories features of guest policies are not supported on Container-Optimized OS.
- Note: While recipes are run once-per-instance on other distros, on Container-Optimized OS, recipes are run on every boot.

