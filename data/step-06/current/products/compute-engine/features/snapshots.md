---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:50:03.247Z"
product_name: "Compute Engine"
product_slug: "compute-engine"
feature_name: "Snapshots"
feature_slug: "snapshots"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/compute/docs/disks/data-protection"
  - "https://docs.cloud.google.com/compute/docs/disks/data-protection"
  - "https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient"
keywords:
  - "snapshots"
  - "create"
  - "point"
  - "time"
  - "backups"
  - "persistent"
  - "disks"
---

# Snapshots

Product: Compute Engine
Coverage: MEDIUM

## Step 02 Summary

Snapshots create point-in-time backups of persistent disks.

## Extended Definition

Snapshots create point-in-time backups of persistent disks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/compute/docs/disks/data-protection](https://developers.google.com/compute/docs/disks/data-protection)
- [https://docs.cloud.google.com/compute/docs/disks/data-protection](https://docs.cloud.google.com/compute/docs/disks/data-protection)
- [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)

## Supporting Pages

### "Class DisksClient (1.41.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient](https://docs.cloud.google.com/python/docs/reference/compute/latest/google.cloud.compute_v1.services.disks.DisksClient)
- Source ID: `site-python-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create both boot and non-boot (data) persistent disks.
- JSON example: :literal: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ],="" "etag":="" "bwwwja0yfja=", " version":="" 3=""> \ \ YAML example:\ \ \ bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01t00:00:00.000z')="" etag:="" bwwwja0yfja="version:"> \ \ For a description of IAM and its features, see the IAM documentation. get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disks stop group async replication resource resource google.cloud.compute v1.types.DisksStopGroupAsyncReplicationResource The body resource for this request This corresponds to the disks stop group async replication resource resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the zone field on the request instance; if request is provided, this should not be set. disks stop group async replication resource resource google.cloud.compute v1.types.DisksStopGroupAsyncReplicationResource The body resource for this request This corresponds to the disks stop group async replication resource resource field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Data protection options for disks and instances \_|\_ Compute Engine \_\

- URL: [https://docs.cloud.google.com/compute/docs/disks/data-protection](https://docs.cloud.google.com/compute/docs/disks/data-protection)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disks Standard snapshots Captures the state of your disk at a particular point in time.
- Use machine images to create backups of all disks attached to an instance To create backups of all disks that are attached to an instance, use machine images .
- Use images for fast and frequent disk creation across regions To create many disks from a single data source, use images instead of snapshots.
- Use Google Cloud Backup and DR Service to manage instance backups at scale With Backup and DR Service, you manage backups of your instances across projects and environments by using advanced policies, centralized monitoring and backup reporting in the following way: Create backup vaults that serve as secure storage locations for your backups.

### "Data protection options for disks and instances \_|\_ Compute Engine \_\

- URL: [https://developers.google.com/compute/docs/disks/data-protection](https://developers.google.com/compute/docs/disks/data-protection)
- Source ID: `site-docs-root-3`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Disks Standard snapshots Captures the state of your disk at a particular point in time.
- Use machine images to create backups of all disks attached to an instance To create backups of all disks that are attached to an instance, use machine images .
- Use images for fast and frequent disk creation across regions To create many disks from a single data source, use images instead of snapshots.
- Use Google Cloud Backup and DR Service to manage instance backups at scale With Backup and DR Service, you manage backups of your instances across projects and environments by using advanced policies, centralized monitoring and backup reporting in the following way: Create backup vaults that serve as secure storage locations for your backups.

