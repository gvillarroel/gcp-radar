---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.791Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Real-time notifications for org and access policies"
feature_slug: "real-time-notifications-for-org-and-access-policies"
latest_feature_date: "2020-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes"
  - "https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy"
keywords:
  - "notifications"
  - "access"
  - "real"
  - "policies"
  - "time"
---

# Real-time notifications for org and access policies

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

Cloud Asset Inventory users can subscribe to real-time change notifications for org policies and access policies.

## Extended Definition

Cloud Asset Inventory users can subscribe to real-time change notifications for org policies and access policies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes)
- [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)

## Supporting Pages

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitor-asset-changes)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can receive real-time notifications about resource and policy changes by creating and subscribing to a feed.
- Tip: You can connect real-time notifications to your workloads.
- Example condition expressions The following condition expression sends notifications on creation events: temporal asset.deleted == false && temporal asset.prior asset state == google.cloud.asset.v1.TemporalAsset.PriorAssetState.DOES NOT EXIST The following condition expression sends notifications for resources that are located in folders 12345 and 23456 : "folders/12345" in temporal asset.asset.ancestors "folders/23456" in temporal asset.asset.ancestors The following condition expression sends notifications when new allowed rules are added to firewalls, assuming the asset type is already set to compute.googleapis.com/Firewall in the feed: size(temporal asset.asset.resource.data.allowed) > size(temporal asset.prior asset.resource.data.allowed) The following condition expression sends notifications for VM instances with n1-standard-1 machine type, assuming the asset type is already set to compute.googleapis.com/Instance in the feed: temporal asset.asset.resource.data.machineType.endsWith('/machineTypes/n1-standard-1') The following condition expression sends notifications for storage buckets with any IAM policies for allUsers , assuming the asset type is set to storage.googleapis.com/Bucket , and the content type is set to IAM POLICY in the feed: temporal asset.asset.iam policy.bindings.exists(b, b.members.exists(m, m == "allUsers")) The following condition expression sends a notification when a storage bucket with the test key in its label is deleted: temporal asset.deleted == true && temporal asset.prior asset state == google.cloud.asset.v1.TemporalAsset.PriorAssetState.PRESENT && "test" in temporal asset.prior asset.resource.data.labels Troubleshooting If you're not receiving notifications for resource or IAM policy updates, the following steps can help you to troubleshoot: Make sure that the metadata has changed on your assets.
- Logged information Real-time feed log entries contain following types of information: General information shown in most Google Cloud logs, such as severity, project ID, project number, or timestamp.

### "Monitor asset changes with Pub/Sub \_|\_ Cloud Asset Inventory \_|\_ Google\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes](https://docs.cloud.google.com/asset-inventory/docs/monitoring-asset-changes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- You can receive real-time notifications about resource and policy changes by creating and subscribing to a feed.
- Tip: You can connect real-time notifications to your workloads.
- Example condition expressions The following condition expression sends notifications on creation events: temporal asset.deleted == false && temporal asset.prior asset state == google.cloud.asset.v1.TemporalAsset.PriorAssetState.DOES NOT EXIST The following condition expression sends notifications for resources that are located in folders 12345 and 23456 : "folders/12345" in temporal asset.asset.ancestors "folders/23456" in temporal asset.asset.ancestors The following condition expression sends notifications when new allowed rules are added to firewalls, assuming the asset type is already set to compute.googleapis.com/Firewall in the feed: size(temporal asset.asset.resource.data.allowed) > size(temporal asset.prior asset.resource.data.allowed) The following condition expression sends notifications for VM instances with n1-standard-1 machine type, assuming the asset type is already set to compute.googleapis.com/Instance in the feed: temporal asset.asset.resource.data.machineType.endsWith('/machineTypes/n1-standard-1') The following condition expression sends notifications for storage buckets with any IAM policies for allUsers , assuming the asset type is set to storage.googleapis.com/Bucket , and the content type is set to IAM POLICY in the feed: temporal asset.asset.iam policy.bindings.exists(b, b.members.exists(m, m == "allUsers")) The following condition expression sends a notification when a storage bucket with the test key in its label is deleted: temporal asset.deleted == true && temporal asset.prior asset state == google.cloud.asset.v1.TemporalAsset.PriorAssetState.PRESENT && "test" in temporal asset.prior asset.resource.data.labels Troubleshooting If you're not receiving notifications for resource or IAM policy updates, the following steps can help you to troubleshoot: Make sure that the metadata has changed on your assets.
- Logged information Real-time feed log entries contain following types of information: General information shown in most Google Cloud logs, such as severity, project ID, project number, or timestamp.

### Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy](https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Execute the gcloud asset analyze-iam-policy command: Linux, macOS, or Cloud Shell Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy -- RESOURCE TYPE = RESOURCE ID \ --identity = PRINCIPAL \ --full-resource-name = FULL RESOURCE NAME \ --permissions = ' PERMISSIONS ' \ --access-time = ACCESS TIME Windows (PowerShell) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project . gcloud asset analyze-iam-policy -- RESOURCE TYPE = RESOURCE ID --identity = PRINCIPAL --full-resource-name = FULL RESOURCE NAME --permissions = ' PERMISSIONS ' --access-time = ACCESS TIME Windows (cmd.exe) Note: Ensure you have initialized the Google Cloud CLI with authentication and a project by running either gcloud init ; or gcloud auth login and gcloud config set project .
- If the condition evaluates to true, the condition evaluation value in the analysis response is TRUE . ... { "attachedResourceFullName": "//cloudresourcemanager.googleapis.com/projects/my-project", "iamBinding": { "role": "roles/compute.admin", "members": [ "user:my-user@example.com" ], "condition": { "expression": "request.time.getHours(\"America/Los Angeles\") \u003e= 5", "title": "No access before 5am PST" } }, "accessControlLists": [ { "resources": [ { "fullResourceName": "//cloudresourcemanager.googleapis.com/projects/my-project" } ], "accesses": [ { "permission": "compute.instances.get" }, { "permission": "compute.instances.start" } ], "conditionEvaluation": { "evaluationValue": "TRUE" } } ], "identityList": { "identities": [ { "name": "user:my-user@example.com" } ] }, "fullyExplored": true }, ...
- HTTP method and URL: POST https://cloudasset.googleapis.com/v1/ RESOURCE TYPE / RESOURCE ID :analyzeIamPolicy Request JSON body: { "analysisQuery": { "identitySelector": { "identity": " PRINCIPAL " }, "resourceSelector": { "fullResourceName": " FULL RESOURCE NAME " }, "accessSelector": { "permissions": [ " PERMISSION 1 ", " PERMISSION 2 ", " PERMISSION N " ] }, "conditionContext": { "accessTime": " ACCESS TIME " } } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If the condition evaluates to true, the result of the condition evaluation is listed as TRUE . ... --- ACLs: - accesses: - permission: compute.instances.get - permission: compute.instances.start conditionEvaluationValue: 'TRUE' identities: - name: user:my-user@example.com resources: - fullResourceName: //cloudresourcemanager.googleapis.com/projects/my-project policy: attachedResource: //cloudresourcemanager.googleapis.com/projects/my-project binding: condition: expression: request.time.getHours("America/Los Angeles") >= 5 title: No access before 5am PST members: - user: my-user@example.com role: roles/compute.admin --- ...

