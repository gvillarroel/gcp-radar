---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.242Z"
product_name: "Memorystore for Memcached"
product_slug: "memorystore-for-memcached"
feature_name: "Cloud Logging maintenance logs"
feature_slug: "cloud-logging-maintenance-logs"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/memcached/audit-logging"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/audit-logs"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances"
  - "https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance"
keywords:
  - "logging"
  - "maintenance"
  - "logs"
  - "can"
  - "be"
  - "used"
  - "to"
  - "query"
---

# Cloud Logging maintenance logs

Product: Memorystore for Memcached
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging can be used to query and view maintenance logs for Memorystore for Memcached instances.

## Extended Definition

Cloud Logging can be used to query and view maintenance logs for Memorystore for Memcached instances.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/memcached/audit-logging](https://docs.cloud.google.com/memorystore/docs/memcached/audit-logging)
- [https://docs.cloud.google.com/memorystore/docs/memcached/audit-logs](https://docs.cloud.google.com/memorystore/docs/memcached/audit-logs)
- [https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances](https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances)
- [https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance](https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance)

## Supporting Pages

### Memorystore for Memcached audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/audit-logging](https://docs.cloud.google.com/memorystore/docs/memcached/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.memcache.v1.CloudMemcache.GetInstance google.cloud.memcache.v1.CloudMemcache.ListInstances google.cloud.memcache.v1beta2.CloudMemcache.GetInstance google.cloud.memcache.v1beta2.CloudMemcache.ListInstances google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.memcache.v1.CloudMemcache.ApplyParameters (LRO) google.cloud.memcache.v1.CloudMemcache.CreateInstance (LRO) google.cloud.memcache.v1.CloudMemcache.DeleteInstance (LRO) google.cloud.memcache.v1.CloudMemcache.UpdateInstance (LRO) google.cloud.memcache.v1.CloudMemcache.UpdateParameters (LRO) google.cloud.memcache.v1.CloudMemcache.UpgradeInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.ApplyParameters (LRO) google.cloud.memcache.v1beta2.CloudMemcache.ApplySoftwareUpdate google.cloud.memcache.v1beta2.CloudMemcache.CreateInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.DeleteInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.UpdateInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.UpdateParameters (LRO) google.cloud.memcache.v1beta2.CloudMemcache.UpgradeInstance google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Memorystore for Memcached. google.cloud.memcache.v1.CloudMemcache The following audit logs are associated with methods belonging to google.cloud.memcache.v1.CloudMemcache .
- Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.ListInstances" UpdateInstance Method : google.cloud.memcache.v1.CloudMemcache.UpdateInstance Audit log type : Admin activity Permissions : memcache.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.UpdateInstance" UpdateParameters Method : google.cloud.memcache.v1.CloudMemcache.UpdateParameters Audit log type : Admin activity Permissions : memcache.instances.updateParameters - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.UpdateParameters" UpgradeInstance Method : google.cloud.memcache.v1.CloudMemcache.UpgradeInstance Audit log type : Admin activity Permissions : memcache.instances.upgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.UpgradeInstance" google.cloud.memcache.v1beta2.CloudMemcache The following audit logs are associated with methods belonging to google.cloud.memcache.v1beta2.CloudMemcache .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Memorystore for Memcached audit logs use the service name memcache.googleapis.com .
- Filter for this service: protoPayload . serviceName = "memcache.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .

### Memorystore for Memcached audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/audit-logs](https://docs.cloud.google.com/memorystore/docs/memcached/audit-logs)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.memcache.v1.CloudMemcache.GetInstance google.cloud.memcache.v1.CloudMemcache.ListInstances google.cloud.memcache.v1beta2.CloudMemcache.GetInstance google.cloud.memcache.v1beta2.CloudMemcache.ListInstances google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.memcache.v1.CloudMemcache.ApplyParameters (LRO) google.cloud.memcache.v1.CloudMemcache.CreateInstance (LRO) google.cloud.memcache.v1.CloudMemcache.DeleteInstance (LRO) google.cloud.memcache.v1.CloudMemcache.UpdateInstance (LRO) google.cloud.memcache.v1.CloudMemcache.UpdateParameters (LRO) google.cloud.memcache.v1.CloudMemcache.UpgradeInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.ApplyParameters (LRO) google.cloud.memcache.v1beta2.CloudMemcache.ApplySoftwareUpdate google.cloud.memcache.v1beta2.CloudMemcache.CreateInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.DeleteInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.UpdateInstance (LRO) google.cloud.memcache.v1beta2.CloudMemcache.UpdateParameters (LRO) google.cloud.memcache.v1beta2.CloudMemcache.UpgradeInstance google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Memorystore for Memcached. google.cloud.memcache.v1.CloudMemcache The following audit logs are associated with methods belonging to google.cloud.memcache.v1.CloudMemcache .
- Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.ListInstances" UpdateInstance Method : google.cloud.memcache.v1.CloudMemcache.UpdateInstance Audit log type : Admin activity Permissions : memcache.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.UpdateInstance" UpdateParameters Method : google.cloud.memcache.v1.CloudMemcache.UpdateParameters Audit log type : Admin activity Permissions : memcache.instances.updateParameters - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.UpdateParameters" UpgradeInstance Method : google.cloud.memcache.v1.CloudMemcache.UpgradeInstance Audit log type : Admin activity Permissions : memcache.instances.upgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.memcache.v1.CloudMemcache.UpgradeInstance" google.cloud.memcache.v1beta2.CloudMemcache The following audit logs are associated with methods belonging to google.cloud.memcache.v1beta2.CloudMemcache .
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Memorystore for Memcached audit logs use the service name memcache.googleapis.com .
- Filter for this service: protoPayload . serviceName = "memcache.googleapis.com" Methods by permission type Each IAM permission has a type property, whose value is an enum that can be one of four values: ADMIN READ , ADMIN WRITE , DATA READ , or DATA WRITE .

### "Monitor Memcached instances \_|\_ Memorystore for Memcached \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances](https://docs.cloud.google.com/memorystore/docs/memcached/monitor-instances)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- In addition to the types of monitoring covered here, Memorystore for Memcached is compatible with open source Memcached, so you can use existing Memcached monitoring tools from Compute Engine VMs to monitor your instances.
- You can change the time horizon in the upper-right hand corner as well as add filters to tailor the information you're seeing to a particular region, project, instance, or node.
- After February 1, 2027, you can't create Memorystore for Memcached instances in new projects unless these instances already exist in these projects.
- In the search box labeled Find resource type and metric , search for "Memorystore Memcached Node", and select the metric.

### About maintenance on Memorystore for Memcached \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance](https://docs.cloud.google.com/memorystore/docs/memcached/about-maintenance)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In very rare circumstances, in order to protect against vulnerabilities that are time sensitive, maintenance can be applied to a Memcached instance outside of your designated maintenance window.
- Upcoming maintenance notifications You can have a notification about upcoming maintenance sent to your email at least one week before maintenance is scheduled.
- The maintenance windows feature allows users to specify a recurring time frame when maintenance can be automatically scheduled and performed.
- Leverage the reschedule features to test the update on a non-production instance once the update becomes available Manual maintenance While we expect that automatic maintenance via maintenance windows meets the requirements for the majority of Memorystore users, manual maintenance provides a gcloud interface for updating an instance.

