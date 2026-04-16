---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.578Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Cloud Resource Manager Enumeration"
feature_slug: "cloud-resource-manager-enumeration"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/administration/audit-logging"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "resource"
  - "manager"
  - "enumeration"
  - "hacktool"
  - "rule"
  - "detects"
  - "activity"
  - "against"
---

# Cloud Resource Manager Enumeration

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

This Cloud Hacktool rule detects enumeration activity against Cloud Resource Manager resources.

## Extended Definition

This Cloud Hacktool rule detects enumeration activity against Cloud Resource Manager resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Cloud Hacktool : Activity detected from known offensive security platforms or from offensive tools or software used in the wild by threat actors that specifically target cloud resources.
- Azure - Data : Detects activity associated with data resources, including Azure blob permissions, modifications, and invitations to external users to use Azure services on the tenant.
- Serverless Threats : Detects activity associated with potential compromise or abuse of Serverless resources in Google Cloud, including Cloud Run and Cloud Run functions.

### "Google SecOps audit logs \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/audit-logging](https://docs.cloud.google.com/chronicle/docs/administration/audit-logging)
- Source ID: `site-docs-reference-required-1`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="chronicle.googleapis.com" protoPayload.methodName="google.cloud.chronicle.v1main.RuleService.UpdateRule" Example: cloudresourcemanager.googleapis.com service name log To find the users who updated an access control role or subject, run the following query in the Logs Explorer : resource.type="project" resource.labels.service="cloudresourcemanager.googleapis.com" protoPayload.methodName="SetIamPolicy" Examples: malachitefrontend-pa.googleapis.com service name logs The following sections describe common use cases for Cloud Audit Logs that use the malachitefrontend-pa.googleapis.com service name.
- Listing actions taken by a specific user To find the actions taken by a given user, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.authenticationInfo.principalSubject=USER Identifying users who took a specific action To find the users who updated an access control subject, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateSubject" To find the users who updated an access control role, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRole" To find the users who updated a detection rule, run the following query in the Logs Explorer : resource.type="audited resource" resource.labels.service="malachitefrontend-pa.googleapis.com" protoPayload.methodName="malachite.frontend.v1.MalachiteFrontendService.UpdateRule" What's next Cloud Audit Logs overview Understand audit logs Available audit logs Google Cloud Observability pricing: Cloud Logging Need more help?
- Enable the data read setting for your Google Cloud project to record SIEM search queries run by users. chronicle.googleapis.com/feeds.get chronicle.googleapis.com/rules.list chronicle.googleapis.com/curatedRuleSets.countCuratedRuleSetDetections Logs with service name chronicleservicemanager.googleapis.com Google SecOps audit logs written using the chronicleservicemanager.googleapis.com service name are only available at the organization level, not at the project level.
- Google SecOps audit logs use one of the following service names: chronicle.googleapis.com chronicleservicemanager.googleapis.com malachitefrontend-pa.googleapis.com Audit operations use the resource type audited resource for all audit logs written, regardless of the preview program.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- See running a rule against live data to learn more.

