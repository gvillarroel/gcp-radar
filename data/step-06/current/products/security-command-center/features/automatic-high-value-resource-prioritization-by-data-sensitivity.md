---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.838Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Automatic high-value resource prioritization by data sensitivity"
feature_slug: "automatic-high-value-resource-prioritization-by-data-sensitivity"
latest_feature_date: "2024-02-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
keywords:
  - "automatic"
  - "high"
  - "value"
  - "resource"
  - "prioritization"
  - "sensitivity"
  - "resources"
  - "can"
---

# Automatic high-value resource prioritization by data sensitivity

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Supported high-value resources can be prioritized automatically based on whether Sensitive Data Protection discovery finds medium- or high-sensitivity data.

## Extended Definition

Supported high-value resources can be prioritized automatically based on whether Sensitive Data Protection discovery finds medium- or high-sensitivity data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)

## Supporting Pages

### "Define and manage your high-value resource set \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- Source ID: `site-docs-reference`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Assign resource value field, select a priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported AWS data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .
- Set the priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .
- Note: If you select Any and enable the Include discovery insights from Sensitive Data Protection option, then for all supported AWS resources , the system automatically sets resource values based on data sensitivity classifications from Sensitive Data Protection.
- Note: If you select Any and enable the Include discovery insights from Sensitive Data Protection option, then for all supported resources , the system automatically sets resource values based on data sensitivity classifications from Sensitive Data Protection.

### "Control IAM access based on data sensitivity \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- Source ID: `site-docs-reference-3`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Deny access if moderate-sensitivity or high-sensitivity data is present The following excerpt of a deny policy denies the bigquery.googleapis.com/tables.get permission if the resource has any moderate-sensitivity or high-sensitivity data. "rules": [ { "denyRule": { "deniedPrincipals": [ "principalSet://goog/group/data-team@example.com" ], "deniedPermissions": [ "bigquery.googleapis.com/tables.get" ], "denialCondition": { "title": "Resource has moderate or high data sensitivity", "expression": "resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR MODERATE SENSITIVITY ") resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR HIGH SENSITIVITY ")" } } } ] Replace the following: SENSITIVITY LEVEL TAG KEY : the numeric ID of the sensitivity level tag key that you created TAG VALUE FOR MODERATE SENSITIVITY : the numeric ID of the tag value that you created for moderate-sensitivity data TAG VALUE FOR HIGH SENSITIVITY : the numeric ID of the tag value that you created for high-sensitivity data Enable the automatic tagging in the discovery configuration In this task, you enable the Tag resources action.
- Create a sensitivity level tag Grant conditional access to resources based on the value of the sensitivity level tag Enable the automatic tagging in the discovery configuration Grant the service agent permission to attach the sensitivity level tag to resources Required permissions The permissions that you need depend on the action that you need to perform.
- Supported resources With this feature, Sensitive Data Protection automatically tags data at following levels: BigQuery tables Cloud SQL instances Cloud Storage buckets How it works The following is a high-level workflow for controlling access to resources based on data sensitivity.
- Set the following tag values: low Tag value to attach to low-sensitivity data moderate Tag value to attach to moderate-sensitivity data high Tag value to attach to high-sensitivity data You can also create a tag value for resources that have an unknown sensitivity level.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: N/A

Evidence snippets:
- Supported Google Cloud resource types for automated data-sensitivity priority values Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following data resource types: aiplatform.googleapis.com/Dataset bigquery.googleapis.com/Dataset sqladmin.googleapis.com/Instance storage.googleapis.com/Bucket Supported AWS resource types for automated data-sensitivity priority values Attack path simulations can automatically set priority values based on data-sensitivity classifications from Sensitive Data Protection discovery for only the following AWS data resource types: Amazon S3 bucket High-value resource sets Premium and Enterprise service tiers (requires organization-level activation ) A high-value resource set is a defined collection of the resources in your Google Cloud environment that are the most important to secure and protect.
- Set resource priority values automatically by data sensitivity If you use Sensitive Data Protection discovery and publish the data profiles to Security Command Center , then you can configure Security Command Center to automatically set the priority value of certain high-value resources by the sensitivity of the data that the resources contain.
- If you need data resources that contain only low-sensitivity data to be designated as high-value resources with a low priority, create a duplicate resource value configuration, but specify a priority value of LOW instead of enabling data-sensitivity prioritization.
- Security Command Center assigns resources in the default high-value resource a priority value of LOW , unless you use Sensitive Data Protection discovery, in which case, Security Command Center assigns resources that contain high-sensitivity or medium-sensitivity data a corresponding priority value of HIGH or MEDIUM .

