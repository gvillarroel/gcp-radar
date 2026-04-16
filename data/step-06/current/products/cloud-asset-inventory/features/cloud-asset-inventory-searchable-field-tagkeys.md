---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:43:35.328Z"
product_name: "Cloud Asset Inventory"
product_slug: "cloud-asset-inventory"
feature_name: "Cloud Asset Inventory searchable field: tagKeys"
feature_slug: "cloud-asset-inventory-searchable-field-tagkeys"
latest_feature_date: "2022-04-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient"
keywords:
  - "tagkeys"
  - "searchable"
  - "available"
  - "publicly"
  - "field"
---

# Cloud Asset Inventory searchable field: tagKeys

Product: Cloud Asset Inventory
Coverage: MEDIUM

## Step 02 Summary

The tagKeys field is now publicly available as a searchable field in SearchAllResources.

## Extended Definition

The tagKeys field is now publicly available as a searchable field in SearchAllResources.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)

## Supporting Pages

### "Method: searchAllResources \_|\_ Cloud Asset Inventory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources](https://docs.cloud.google.com/asset-inventory/docs/reference/rest/v1/TopLevel/searchAllResources)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Examples: name:Important to find Google Cloud resources whose name contains Important as a word. name=Important to find the Google Cloud resource whose name is exactly Important . displayName:Impor to find Google Cloud resources whose display name contains Impor as a prefix of any word in the field. location:us-west to find Google Cloud resources whose location contains both us and west as prefixes. labels:prod to find Google Cloud resources whose labels contain prod as a key or value. labels.env:prod to find Google Cloud resources that have a label env and its value is prod . labels.env: to find Google Cloud resources that have a label env . tagKeys:env to find Google Cloud resources that have directly attached tags where the TagKey.namespacedName contains env . tagValues:prod to find Google Cloud resources that have directly attached tags where the TagValue.namespacedName contains a word prefixed by prod . tagValueIds=tagValues/123 to find Google Cloud resources that have directly attached tags where the TagValue.name is exactly tagValues/123 . effectiveTagKeys:env to find Google Cloud resources that have directly attached or inherited tags where the TagKey.namespacedName contains env . effectiveTagValues:prod to find Google Cloud resources that have directly attached or inherited tags where the TagValue.namespacedName contains a word prefixed by prod . effectiveTagValueIds=tagValues/123 to find Google Cloud resources that have directly attached or inherited tags where the TagValue.name is exactly tagValues/123 . kmsKey:key to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains key as a word.
- JSON representation { "name" : string , "assetType" : string , "project" : string , "folders" : [ string ] , "organization" : string , "displayName" : string , "description" : string , "location" : string , "labels" : { string : string , ... } , "networkTags" : [ string ] , "kmsKey" : string , "kmsKeys" : [ string ] , "createTime" : string , "updateTime" : string , "state" : string , "additionalAttributes" : { object } , "parentFullResourceName" : string , "versionedResources" : [ { object ( VersionedResource ) } ] , "attachedResources" : [ { object ( AttachedResource ) } ] , "relationships" : { string : { object ( RelatedResources ) } , ... } , "tagKeys" : [ string ] , "tagValues" : [ string ] , "tagValueIds" : [ string ] , "tags" : [ { object ( Tag ) } ] , "effectiveTags" : [ { object ( EffectiveTagDetails ) } ] , "enrichments" : [ { object ( AssetEnrichment ) } ] , "parentAssetType" : string , "sccSecurityMarks" : { string : string , ... } } Fields name string The full resource name of this resource.
- This field contains a subset of the resource metadata fields that are returned by the List or Get APIs provided by the corresponding Google Cloud service (e.g., Compute Engine). see API references and supported searchable attributes to see which fields are included.
- Important location:(us-west1 OR global) to find Google Cloud resources that contain Important as a word in any of the searchable fields and are also located in the us-west1 region or the global location. assetTypes[] string Optional.

### "Class AssetServiceAsyncClient (4.2.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Examples: - name:Important to find Google Cloud resources whose name contains Important as a word. - name=Important to find the Google Cloud resource whose name is exactly Important . - displayName:Impor to find Google Cloud resources whose display name contains Impor as a prefix of any word in the field. - location:us-west to find Google Cloud resources whose location contains both us and west as prefixes. - labels:prod to find Google Cloud resources whose labels contain prod as a key or value. - labels.env:prod to find Google Cloud resources that have a label env and its value is prod . - labels.env: to find Google Cloud resources that have a label env . - tagKeys:env to find Google Cloud resources that have directly attached tags where the TagKey.namespacedName https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey contains env . - tagValues:prod to find Google Cloud resources that have directly attached tags where the TagValue.namespacedName <code> <https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue></code> contains a word prefixed by <code>prod</code>. - <code>tagValueIds=tagValues/123</code> to find Google Cloud resources that have directly attached tags where the <pre>TagValue.name https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue is exactly tagValues/123 . - effectiveTagKeys:env to find Google Cloud resources that have directly attached or inherited tags where the TagKey.namespacedName https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey contains env . - effectiveTagValues:prod to find Google Cloud resources that have directly attached or inherited tags where the TagValue.namespacedName contains a word prefixed by prod . - effectiveTagValueIds=tagValues/123 to find Google Cloud resources that have directly attached or inherited tags where the TagValue.name` https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue is exactly tagValues/123 . - kmsKey:key to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains key as a word.
- Note that if callers don't have iam.roles.get access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. - resource:organizations/123456 to find IAM policy bindings that are set on "organizations/123456". - resource=//cloudresourcemanager.googleapis.com/projects/myproject to find IAM policy bindings that are set on the project named "myproject". - Important to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). - resource:(instance1 OR instance2) policy:amy to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". - roles:roles/compute.admin to find IAM policy bindings that specify the Compute Admin role. - memberTypes:user to find IAM policy bindings that contain the principal type "user".
- 1609459200 is the epoch timestamp of 2021-01-01 00:00:00 UTC in seconds. - Important to find Google Cloud resources that contain Important as a word in any of the searchable fields. - Impor to find Google Cloud resources that contain Impor as a prefix of any word in any of the searchable fields. - Important location:(us-west1 OR global) to find Google Cloud resources that contain Important as a word in any of the searchable fields and are also located in the us-west1 region or the global location.
- For governed IAM policies, filtering is currently available for bare literal values and the following fields: - governed iam policy.project - governed iam policy.folders - consolidated policy.rules.enforce When filtering by governed iam policy.project or consolidated policy.rules.enforce , the only supported operator is = .

### "Class AssetServiceClient (4.2.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient](https://docs.cloud.google.com/python/docs/reference/cloudasset/latest/google.cloud.asset_v1.services.asset_service.AssetServiceClient)
- Source ID: `site-python-reference`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Examples: - name:Important to find Google Cloud resources whose name contains Important as a word. - name=Important to find the Google Cloud resource whose name is exactly Important . - displayName:Impor to find Google Cloud resources whose display name contains Impor as a prefix of any word in the field. - location:us-west to find Google Cloud resources whose location contains both us and west as prefixes. - labels:prod to find Google Cloud resources whose labels contain prod as a key or value. - labels.env:prod to find Google Cloud resources that have a label env and its value is prod . - labels.env: to find Google Cloud resources that have a label env . - tagKeys:env to find Google Cloud resources that have directly attached tags where the TagKey.namespacedName https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey contains env . - tagValues:prod to find Google Cloud resources that have directly attached tags where the TagValue.namespacedName <code> <https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue></code> contains a word prefixed by <code>prod</code>. - <code>tagValueIds=tagValues/123</code> to find Google Cloud resources that have directly attached tags where the <pre>TagValue.name https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue is exactly tagValues/123 . - effectiveTagKeys:env to find Google Cloud resources that have directly attached or inherited tags where the TagKey.namespacedName https://cloud.google.com/resource-manager/reference/rest/v3/tagKeys#resource:-tagkey contains env . - effectiveTagValues:prod to find Google Cloud resources that have directly attached or inherited tags where the TagValue.namespacedName contains a word prefixed by prod . - effectiveTagValueIds=tagValues/123 to find Google Cloud resources that have directly attached or inherited tags where the TagValue.name` https://cloud.google.com/resource-manager/reference/rest/v3/tagValues#resource:-tagvalue is exactly tagValues/123 . - kmsKey:key to find Google Cloud resources encrypted with a customer-managed encryption key whose name contains key as a word.
- Note that if callers don't have iam.roles.get access to a role's included permissions, policy bindings that specify this role will be dropped from the search results. - resource:organizations/123456 to find IAM policy bindings that are set on "organizations/123456". - resource=//cloudresourcemanager.googleapis.com/projects/myproject to find IAM policy bindings that are set on the project named "myproject". - Important to find IAM policy bindings that contain "Important" as a word in any of the searchable fields (except for the included permissions). - resource:(instance1 OR instance2) policy:amy to find IAM policy bindings that are set on resources "instance1" or "instance2" and also specify user "amy". - roles:roles/compute.admin to find IAM policy bindings that specify the Compute Admin role. - memberTypes:user to find IAM policy bindings that contain the principal type "user".
- 1609459200 is the epoch timestamp of 2021-01-01 00:00:00 UTC in seconds. - Important to find Google Cloud resources that contain Important as a word in any of the searchable fields. - Impor to find Google Cloud resources that contain Impor as a prefix of any word in any of the searchable fields. - Important location:(us-west1 OR global) to find Google Cloud resources that contain Important as a word in any of the searchable fields and are also located in the us-west1 region or the global location.
- For governed IAM policies, filtering is currently available for bare literal values and the following fields: - governed iam policy.project - governed iam policy.folders - consolidated policy.rules.enforce When filtering by governed iam policy.project or consolidated policy.rules.enforce , the only supported operator is = .

