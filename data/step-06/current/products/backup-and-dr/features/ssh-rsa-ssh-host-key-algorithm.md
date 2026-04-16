---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.925Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "ssh-rsa SSH host key algorithm"
feature_slug: "ssh-rsa-ssh-host-key-algorithm"
latest_feature_date: "2024-11-21"
deprecation_date: "2024-11-21"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/compute/docs/containers/migrate-containers"
keywords:
  - "deprecated"
  - "algorithm"
  - "being"
  - "2024"
  - "host"
---

# ssh-rsa SSH host key algorithm

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Support for ssh-rsa as an SSH Host Key algorithm is being deprecated; deprecated on 2024-11-21.

## Extended Definition

Support for ssh-rsa as an SSH Host Key algorithm is being deprecated; deprecated on 2024-11-21.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint](https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)

## Supporting Pages

### "Serial console SSH host key endpoint deprecation \_|\_ Compute Engine \_\

- URL: [https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint](https://docs.cloud.google.com/compute/docs/deprecations/serial-console-ssh-host-key-endpoint)
- Source ID: `site-docs-reference-2`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Deprecated endpoint : https://www.gstatic.com/vm serial port/ REGION / REGION .pub New endpoint : https://www.gstatic.com/vm serial port public keys/ REGION / REGION .pub To use the new endpoint, do one of the following, depending on how you connect to the serial console: Connect using the Google Cloud console : no action is required.
- Home Documentation Compute Compute Engine Resources Send feedback Serial console SSH host key endpoint deprecation Stay organized with collections Save and categorize content based on your preferences.
- Date Event March 31, 2025 The https://www.gstatic.com/vm serial port/ REGION / REGION .pub server SSH key endpoint was deprecated.
- As of March 31, 2025, the serial console SSH key endpoint is deprecated and a new serial SSH key endpoint is available.

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- When adding multiple new applications or VMs, try to stagger the initial protection jobs for each new application over time, to prevent all of the new data from being ingested simultaneously.
- Unmount Delete unmount delete Unmounts an image previously mounted to a host and discards all changes made in that mount.
- Filter by job name, host and application in the Jobs view or by event message in the Events view is now auto-submit.
- Unmount unmount Unmounts an image previously mounted to a host, but keeps the image available for later mounting.

### "Migrate containers that were deployed on VMs during VM creation \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- Source ID: `site-docs-reference-2`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- To mount a disk, first mount it on the VM, and then mount that disk to the container: To mount the disk to the VM, run the following command: #!/bin/bash DISK DEVICE NAME = "my-persistent-disk" # This name MUST match the 'device-name' in the gcloud --disk flag DISK BY ID PATH = "/dev/disk/by-id/google- ${ DISK DEVICE NAME } " HOST MOUNT POINT = "/mnt/disks/my-persistent-disk" # This is the path where the disk will be mounted on the VM CONTAINER MOUNT PATH = "/usr/share/my-persistent-disk" # This is the path where the disk will be mounted in the container format a disk as an ext4 filesystem, if it doesn't already contain one file -sL $DISK BY ID PATH grep -q filesystem \ mkfs.ext4 -m 0 -E lazy itable init = 0 ,lazy journal init = 0 ,discard $DISK BY ID PATH create a directory for mounting point sudo mkdir -p " ${ HOST MOUNT POINT } " mount a disk to the VM sudo mount -o defaults,discard " ${ DISK BY ID PATH } " " ${ HOST MOUNT POINT } " After you mount the disk to the VM, add the --mount flag with the docker run command to mount the disk to the container: docker run -d --name = $CONTAINER NAME --mount type = bind,source = " ${ HOST MOUNT POINT } " ,target = " ${ CONTAINER MOUNT PATH } " ,readonly nginx:latest Create a VM by using the startup script After creating a startup script with your container configuration, use this startup script to create a VM based on Container-Optimized OS.
- Example 1 Run a standalone container in a VM based on Container-Optimized OS: #!/bin/bash A name for the container CONTAINER NAME = "my-app-container" Stop and remove the container if it exists docker stop $CONTAINER NAME true docker rm $CONTAINER NAME true Pull the latest version of the container image from Docker Hub docker pull busybox:latest Run docker container from image in docker hub docker run busybox:latest \ echo "hello world!" Example 2 Run a web server container in a VM based on Container-Optimized OS: #!/bin/bash Enable incoming traffic iptables -A INPUT -j ACCEPT A name for the container CONTAINER NAME = "my-app-container" Stop and remove the container if it exists docker stop $CONTAINER NAME true docker rm $CONTAINER NAME true Pull the latest version of the container image from Docker Hub docker pull nginx:latest Run docker container from image in docker hub docker run \ --name = $CONTAINER NAME \ --privileged \ --restart = always \ --tty \ --detach \ --network = "host" \ nginx:latest Additional configuration options for container deployment This section describes the additional configuration parameters for deploying containers on your VMs.
- If the output of the command from the preceding step lists instances that use the gce-container-declaration metadata key, run the following command to get more details about the container declaration on your VMs: gcloud compute instances list \ --filter = 'metadata.items.key:gce-container-declaration AND (metadata.items.value "image:")' \ --format = "table(name, zone, metadata.items.filter(key='gce-container-declaration').extract(value).slice(0):label=CONTAINER DECLARATION)" Based on the output of the command, consider the following: If the metadata contains the definition for the deprecated container startup agent, then you must migrate the container deployment to an alternative solution as described in this document.
- Console The Deploy container option on the Create an instance page is deprecated: gcloud The following gcloud commands that configure a container on a VM or an instance template are deprecated: gcloud compute instances create-with-container gcloud compute instances update-container gcloud compute instance-templates create-with-container gcloud compute instances create command that uses the --metadata flag to set the gce-container-declaration metadata key gcloud compute instance-templates create command that uses the --metadata flag to set the gce-container-declaration metadata key Terraform The Terraform module gce-container and the gce-container-declaration metadata key to configure containers are deprecated.

