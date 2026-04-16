---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T09:35:01.934Z"
product_name: "Backup and DR"
product_slug: "backup-and-dr"
feature_name: "Cloud Monitoring integration with Backup and DR"
feature_slug: "cloud-monitoring-integration-with-backup-and-dr"
latest_feature_date: "2024-02-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions"
  - "https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts"
  - "https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs"
keywords:
  - "configure"
  - "metrics"
  - "integrated"
  - "integration"
  - "monitoring"
  - "view"
---

# Cloud Monitoring integration with Backup and DR

Product: Backup and DR
Coverage: MEDIUM

## Step 02 Summary

Backup and DR Service integrated with Cloud Monitoring to view metrics and configure custom email alerts.

## Extended Definition

Backup and DR Service integrated with Cloud Monitoring to view metrics and configure custom email alerts.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs)

## Supporting Pages

### "Understand autoscaler decisions \_|\_ Compute Engine \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions](https://docs.cloud.google.com/compute/docs/autoscaler/understanding-autoscaler-decisions)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Monitoring tab shows charts and logs as follows: The charts display the evolution of the following metrics: Group size Autoscaler utilization CPU utilization Disk I/O (bytes) Disk I/O (operations) Network bytes Network packets For additional contextual details about the metric displayed in a chart, hold the pointer over the help icon next to the title of that chart.
- Average CPU utilization HTTP load balancing serving capacity Cloud Monitoring metrics collected from each instance in the MIG You can also manually resize a MIG to zero instances, even if the autoscaling policy includes metrics collected from each instance in the MIG.
- The autoscaler does not scale in beyond the maximum allowed reduction measured from the observed peak size: For example, in the preceding diagram, scale-in controls are configured for a 20 VM maximum allowed reduction in a 30-minute trailing time window: When load goes down autoscaler removes 20 VMs, which is the maximum allowed reduction configured in scale-in controls.
- How autoscalers calculate recommended size and affect target size When you configure an autoscaler for a MIG, the autoscaler constantly monitors the group and sets the group's recommended size to the number of virtual machine (VM) instances that are required in order to serve peak load over the stabilization period .

### "Configure log-based alerts for a backup/recovery appliance \_|\_ Backup\

- URL: [https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts](https://docs.cloud.google.com/backup-disaster-recovery/docs/configure-alerts)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can click View incident in the email to see the incident in Cloud Monitoring .
- If your alert policy includes or excludes specific event IDs then you need to modify the event ID as well: "entries" : [ { "jsonPayload" : { "eventId" : 10046 , "errorMessage" : "this is a manually generated error message created for testing" }, "resource" : { "type" : "backupdr.googleapis.com/BackupRecoveryAppliance" , }, "severity" : "ERROR" , "logName" : "projects/ PROJECT ID /logs/backupdr.googleapis.com %2F backup recovery appliance events" , } ] Copy the log entry you configured previously.
- To write the log entry, follow these steps: Go to the logEntries.write reference page, or click the following button: Go to logEntries.write Configure the following log entry by changing the PROJECT ID variable to your project ID.
- Home Documentation Storage Backup and DR Guides Send feedback Configure log-based alerts for a backup/recovery appliance Stay organized with collections Save and categorize content based on your preferences.

### View autoscaler logs \_|\_ Compute Engine \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs](https://docs.cloud.google.com/compute/docs/autoscaler/viewing-autoscaler-logs)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud logging read "resource.type=autoscaler" --limit 10 \ --format json To view the autoscaler logs of a specific MIG, specify the instance group manager name as follows: gcloud logging read "resource.type=autoscaler AND \ resource.labels.instance group manager name=example-igm " \ --limit 10 --format json To view the log entries related to autoscaler resize actions , specify the compute.autoscalers.resize method name: gcloud logging read "resource.type=autoscaler AND \ resource.labels.instance group manager name=example-igm AND \ protoPayload.methodName=compute.autoscalers.resize" \ --limit 10 --format json To view the log entries related to autoscaler status changes , specify the compute.autoscalers.changeStatus method name: gcloud logging read "resource.type=autoscaler AND \ resource.labels.instance group manager name=example-igm AND \ protoPayload.methodName=compute.autoscalers.changeStatus" \ --limit 10 --format json REST Make a request to the Logging V2 API .
- If scalingLimit applies, then the autoscaler limits calculatedSize to scalingLimit.limitSize . autoscalingReason.scalingSignal.calculationDetails Details used to determine the calculatedSize . servingSize : The number of VMs in the MIG excluding the VMs that are still in their initialization period . signalTarget : The target value that the autoscaler maintains for CPU utilization (real-time), predicted CPU utilization, load balancing utilization, or a metric configured with utilization target. singleInstanceAssignment : If scaling is based on a metric value that represents the total amount of work to be done, then singleInstanceAssignment is the quantity of work that each VM can handle. signalValue : The value of the autoscaling signal.
- In this example, you might notice the new status message indicating problems with your load balancing configuration. { insertId: "ivho6kg4icqfio" logName: "projects/example-project/logs/cloudaudit.googleapis.com%2Fsystem event" protoPayload: { metadata: { @type: "type.googleapis.com/autoscaler.AutoscalerStatusChange" newStatus : { details: "The autoscaler is configured to scale based on a load balancing signal but the instance group has not received any utilization data from the load balancer or the utilization is constantly 0.
- Home Documentation Compute Compute Engine Guides Send feedback View autoscaler logs Stay organized with collections Save and categorize content based on your preferences.

