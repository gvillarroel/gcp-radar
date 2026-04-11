---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:06.175Z"
product_name: "Data Catalog"
product_slug: "data-catalog"
feature_name: "Required tag template attributes"
feature_slug: "required-tag-template-attributes"
latest_feature_date: "2020-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient"
keywords:
  - "required"
  - "tag"
  - "template"
  - "attributes"
  - "templates"
  - "can"
  - "mark"
  - "as"
---

# Required tag template attributes

Product: Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Tag templates can mark attributes as required so tags cannot be created without valid values for them.

## Extended Definition

Tag templates can mark attributes as required so tags cannot be created without valid values for them.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates](https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient)

## Supporting Pages

### Tags and tag templates \_|\_ Data Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates](https://docs.cloud.google.com/data-catalog/docs/tags-and-tag-templates)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can search or view the tags and the data entries associated with the tags only if you are granted the required view permissions on both the private tag template and the data entries.
- You can set up tag templates with many access control configurations, for example: A tag template that only the template creator can use to create tags A tag template that creates tags that are only visible to a select set of users A tag template that a select set of users can use to create tags that are only visible to another (possibly identical) set of users A tag template visible to all the users of an organization or a project (public tag) Access to a tag template is granted or denied with IAM roles.
- This document explains two key Data Catalog concepts: Tags : custom metadata fields that you can attach to a data entry to provide context Tag templates : reusable structures that you can use to rapidly create new tags Tags Tags are a type of business metadata.
- Home Documentation Data analytics Data Catalog Guides Send feedback Tags and tag templates Stay organized with collections Save and categorize content based on your preferences.

### "Class DataCatalogAsyncClient (3.29.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.data_catalog.DataCatalogAsyncClient)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported resources are: Tag templates Entry groups Note: This method sets policies only within Data Catalog and can't be used to manage policies in BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources synced with the Data Catalog.
- Supported resources are: Tag templates Entry groups Note: This method gets policies only within Data Catalog and can't be used to get policies from BigQuery, Pub/Sub, Dataproc Metastore, and any external Google Cloud Platform resources ingested into Data Catalog.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 async def sample rename tag template field enum value(): Create a client client = datacatalog v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import datacatalog v1 async def sample create tag template field(): Create a client client = datacatalog v1 .

### "Class PolicyTagManagerAsyncClient (3.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient](https://docs.cloud.google.com/python/docs/reference/datacatalog/latest/google.cloud.datacatalog_v1.services.policy_tag_manager.PolicyTagManagerAsyncClient)
- Source ID: `site-python-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Union [ str , bytes ]]] = () ) - > None Deletes a policy tag together with the following: All of its descendant policy tags, if any Policies associated with the policy tag and its descendants References from BigQuery table schema of the policy tag and its descendants This snippet has been automatically generated and should be regarded as a code template only.
- A condition can add constraints based on attributes of the request, the resource, or both.
- A condition can add constraints based on attributes of the request, the resource, or both.
- For example, a "data sensitivity" taxonomy might contain the following policy tags: :literal: + PII + Account number + Age + SSN + Zipcode + Financials + Revenue \ \ A "data origin" taxonomy might contain the following policy tags: :literal: + User data + Employee data + Partner data + Public data \ \ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

