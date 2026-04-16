---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.929Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Mounted image logs in Cloud Logging"
feature_slug: "mounted-image-logs-in-cloud-logging"
latest_feature_date: "2024-09-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs"
  - "https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs"
  - "https://docs.cloud.google.com/compute/docs/containers/migrate-containers"
keywords:
  - "mounted"
  - "image"
  - "logging"
  - "logs"
  - "view"
  - "added"
---

# Mounted image logs in Cloud Logging

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Added support to view mounted image logs in Cloud Logging.

## Extended Definition

Added support to view mounted image logs in Cloud Logging.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs)
- [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)

## Supporting Pages

### "Monitor jobs in the appliance management console \_|\_ Backup and DR \_\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Note: Manually replicated transaction logs won't be visible on the remote appliance until the Oracle or Microsoft SQL Server database image is replicated to the remote appliance.
- Migrate (Cancel) Migrate (Cancel) Cancels an in-progress migration, disables future migration jobs for the mounted image, and cleans up any partially migrated/copied data.
- Unmount Delete unmount delete Unmounts an image previously mounted to a host and discards all changes made in that mount.
- Unmount unmount Unmounts an image previously mounted to a host, but keeps the image available for later mounting.

### View autoscaler logs \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud logging read "resource.type=autoscaler" --limit 10 \ --format json To view the autoscaler logs of a specific MIG, specify the instance group manager name as follows: gcloud logging read "resource.type=autoscaler AND \ resource.labels.instance group manager name=example-igm " \ --limit 10 --format json To view the log entries related to autoscaler resize actions , specify the compute.autoscalers.resize method name: gcloud logging read "resource.type=autoscaler AND \ resource.labels.instance group manager name=example-igm AND \ protoPayload.methodName=compute.autoscalers.resize" \ --limit 10 --format json To view the log entries related to autoscaler status changes , specify the compute.autoscalers.changeStatus method name: gcloud logging read "resource.type=autoscaler AND \ resource.labels.instance group manager name=example-igm AND \ protoPayload.methodName=compute.autoscalers.changeStatus" \ --limit 10 --format json REST Make a request to the Logging V2 API .
- Home Documentation Compute Compute Engine Guides Send feedback View autoscaler logs Stay organized with collections Save and categorize content based on your preferences.
- The log explorer opens with a default query to fetch all autoscaler logs of the MIG. gcloud To look up all logs related to autoscaling, use the logging read command .
- The request body must contain the filter parameter to use when searching for logs and the project you want to view logs for.

### "Migrate containers that were deployed on VMs during VM creation \_|\_ Compute\

- URL: [https://docs.cloud.google.com/compute/docs/containers/migrate-containers](https://docs.cloud.google.com/compute/docs/containers/migrate-containers)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get your existing VM instance configuration in yaml format gcloud compute instances describe VM NAME --format = "(metadata.items)" The output is similar to the following: metadata: items: - key: gce-container-declaration value: spec: containers: - args: - '"hello world!"' command: - echo env: - name: ONE value: '1' image: docker.io/library/busybox name: my-instance securityContext: privileged: true stdin: true tty: true restartPolicy: Always - key: google-logging-enabled value: 'true' Use the following table to map existing specification to docker run commands: gcloud CLI flag VM metadata key Docker run command --container-image containers.image Specify as an argument without any flag.
- For troubleshooting other issues, see the following documents: Cloud Logging overview Using Cloud Logging with Container-Optimized OS Troubleshooting the Docker daemon Troubleshoot and diagnose Troubleshoot Terraform Troubleshooting when running a basic web server Set up and manage network address translation with Public NAT Use cloud-init with Container-Optimized OS You can use cloud-init , an industry-standard and cross-platform solution, to deploy containers on VMs running Container-Optimized OS.
- Alternatively, if you want to change the logging driver, you can include the --log-driver parameter with your docker run command: Use Cloud Logging logging driver docker run --log-driver = gcplogs nginx:latest For more information, see Using Cloud Logging with Container-Optimized OS Configure internal firewall Container-Optimized OS denies incoming traffic by default, so you must add iptables rules to allow that traffic.
- To view startup script logs on the VM instance, run the following command: sudo journalctl grep "startup-script" To view logs from the Docker container, run the docker logs command: docker logs CONTAINER NAME Replace CONTAINER NAME with the name of your container.

