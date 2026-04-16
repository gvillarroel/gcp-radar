---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.080Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Tag holds"
feature_slug: "tag-holds"
latest_feature_date: "2022-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview"
  - "https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects"
keywords:
  - "tag"
  - "holds"
  - "prevent"
  - "value"
  - "being"
  - "deleted"
  - "until"
  - "hold"
---

# Tag holds

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Tag holds prevent a tag value from being deleted until the hold is removed.

## Extended Definition

Tag holds prevent a tag value from being deleted until the hold is removed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- [https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects](https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects)

## Supporting Pages

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Protect tag values with tag holds A tag hold is a resource that you can create to protect a tag value from being deleted.
- If you are creating a tag hold for a tag value attached to a global resource such as an organization, use the tagHolds.create method with the global endpoint hostname: POST https://cloudresourcemanager.googleapis.com/v3/tagValues/ TAGVALUE NAME /tagHolds If you are creating a tag hold for a tag value attached to a regional resource, such as a Compute Engine instance, use the tagHolds.create method with the regional endpoint where your resource is located.
- Create tag holds You can manually create a tag hold using the gcloud CLI or the API. gcloud To create a tag hold, use the gcloud resource-manager tags holds create gcloud CLI command: gcloud resource-manager tags holds create TAGVALUE NAME \ --holder= HOLDER NAME \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value for which this tag hold should be created; for example: tagValues/567890123456 .
- List tag holds You can list all tag holds under a particular tag value using the gcloud CLI or the API. gcloud To list tag holds that are under a tag value, use the gcloud resource-manager tags holds list gcloud CLI command: gcloud resource-manager tags holds list TAGVALUE NAME \ --location= LOCATION Where: TAGVALUE NAME is the permanent ID or namespaced name of the tag value; for example: tagValues/567890123456 .

### Tags overview \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview](https://docs.cloud.google.com/resource-manager/docs/tags/tags-overview)
- Source ID: `site-docs-reference-2`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- A tag hold, like a tag binding, prevents a user from deleting the tag value.
- The following table lists some of the differences between tags and labels: Tags Labels Resource structure Tag keys, tag values, and tag bindings are all discrete resources Not a resource in itself, but metadata for resources Definition Defined at the organization or project level Defined by each resource Access control Management and attachment of tags requires Identity and Access Management (IAM) roles Attachment of labels requires IAM roles , which vary based on the service resource Prerequisite for attachment The tag key and tag value must be defined before a tag can be attached to a resource No prerequisites for attachment Inheritance Tag bindings are inherited by children of the resource in the Google Cloud hierarchy Not inherited by children of the resource Deletion requirements Tags can't be deleted unless no tag bindings for that tag exist Can be removed from a resource at any time Naming requirements Requirements for tag values and tag keys Requirements for labels Key-value name length 256 characters maximum 63 characters maximum Allow and deny policy support Tags can be referenced by allow policy conditions and deny policy conditions No allow and deny policy support Organization policy support Tags on some resources can be referenced by organization policy conditional constraints No organization policy support Cloud Billing integration Perform chargebacks, audits, and other cost allocation analysis, export Cloud Billing cost data to BigQuery Filter resources by label in Cloud Billing, export Cloud Billing data to BigQuery For more information about labels, see Creating and managing labels .
- Protecting tag values from deletion You can create an additional layer of protection for your tag values by attaching a tag hold to a tag value.
- Some resources automatically create a tag hold on each tag value attached to the resource.

### Delete and restore projects \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects](https://docs.cloud.google.com/resource-manager/docs/delete-restore-projects)
- Source ID: `site-iam-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Project quota: Until a project is permanently deleted (after the 30-day window), it continues to count toward your project quota.
- This action immediately moves the project into a 30-day recovery period, after which the project and all associated data are permanently deleted.
- Restore a project Project owners can restore a deleted project within the 30-day recovery period that begins when the project is shut down.
- Cloud Shell is a shell environment with the Google Cloud CLI already installed and with values already set for your current project.

