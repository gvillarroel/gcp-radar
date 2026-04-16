---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T08:39:49.481Z"
product_name: "Artifact Registry"
product_slug: "artifact-registry"
feature_name: "Artifact Registry artifact download rules"
feature_slug: "artifact-registry-artifact-download-rules"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/artifact-registry/docs/repositories"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesPager"
keywords:
  - "previewed"
  - "restrict"
  - "rules"
  - "download"
  - "introduces"
---

# Artifact Registry artifact download rules

Product: Artifact Registry
Coverage: MEDIUM

## Step 02 Summary

Artifact Registry introduces previewed download rules that can restrict artifact downloads at repository and package levels.

## Extended Definition

Artifact Registry introduces previewed download rules that can restrict artifact downloads at repository and package levels.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesPager)

## Supporting Pages

### Repository overview \_|\_ Artifact Registry \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/artifact-registry/docs/repositories](https://docs.cloud.google.com/artifact-registry/docs/repositories)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- For details on how downloads rules work, see the Restrict artifact downloads section of the Control access and protect artifacts overview.
- You can restrict artifact downloads with download rules .
- Restrict artifact downloads Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Download rules let you allow or deny artifact downloads from your repositories and packages.

### "Class ListRulesAsyncPager (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesAsyncPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.artifactregistry v1.types.ListRulesRequest The initial request object. response google.cloud.artifactregistry v1.types.ListRulesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.1 1.15.2 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.0 1.8.4 1.7.0 1.6.1 1.5.0 1.4.1 1.3.3 1.2.1 1.1.2 1.0.2 0.5.0 0.4.1 0.3.3 0.2.2 0.1.0 ListRulesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRulesAsyncPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListRules requests and continue to iterate through the rules field on the corresponding responses.

### "Class ListRulesPager (1.20.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesPager](https://docs.cloud.google.com/python/docs/reference/artifactregistry/latest/google.cloud.artifactregistry_v1.services.artifact_registry.pagers.ListRulesPager)
- Source ID: `site-python-reference`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.artifactregistry v1.types.ListRulesRequest The initial request object. response google.cloud.artifactregistry v1.types.ListRulesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.20.0 (latest) 1.19.0 1.18.0 1.17.0 1.16.1 1.15.2 1.14.0 1.13.1 1.12.0 1.11.5 1.10.0 1.9.0 1.8.4 1.7.0 1.6.1 1.5.0 1.4.1 1.3.3 1.2.1 1.1.2 1.0.2 0.5.0 0.4.1 0.3.3 0.2.2 0.1.0 ListRulesPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListRulesPager (1.20.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the iter method will make additional ListRules requests and continue to iterate through the rules field on the corresponding responses.

