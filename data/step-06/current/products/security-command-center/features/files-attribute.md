---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.967Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "files attribute"
feature_slug: "files-attribute"
latest_feature_date: "2022-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage"
keywords:
  - "files"
  - "attribute"
  - "finding"
  - "object"
  - "captures"
  - "information"
  - "about"
  - "associated"
---

# files attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Finding object attribute that captures information about files associated with a finding.

## Extended Definition

Finding object attribute that captures information about files associated with a finding.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- August 22, 2022 Feature The following attributes were added to the Finding object of the Security Command Center API: Database provides information about access to a database that is related to a finding. serviceAccountKeyName , serviceAccountDelegationInfo , and principalSubject attributes were added to the existing access attribute.
- The files attribute contains information about each file that triggered a finding, including the name of the file, the full path to the file, and the size of the file.
- The container attribute provides information about both Kubernetes and non-Kubernetes containers that are associated with a given finding.
- The kubernetes attribute provides information about Kubernetes resources that are associated with a given finding.

### "Profile Cloud Storage data in a single project \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-project-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- Note: For information about how other Google Cloud services may charge you for configuring actions, see Pricing for exporting data profiles .
- For information about the contents of each finding that is saved in the BigQuery table, see DataProfileFinding .
- For more information about the discovery service, see Data profiles .

### "Profile Cloud Storage data in an organization or folder \_|\_ Sensitive\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage](https://docs.cloud.google.com/sensitive-data-protection/docs/profile-org-folder-cloud-storage)
- Source ID: `site-docs-reference-3`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using the exported data profiles and the exported sample findings, you can run queries to get more information about the specific items that were flagged, the infoTypes they matched, their exact locations, their calculated sensitivity levels, and other details.
- Note: For information about how other Google Cloud services may charge you for configuring actions, see Pricing for exporting data profiles .
- For information about the required permissions, see Roles required to work with data profiles at the organization or folder level .
- For information about the contents of each finding that is saved in the BigQuery table, see DataProfileFinding .

