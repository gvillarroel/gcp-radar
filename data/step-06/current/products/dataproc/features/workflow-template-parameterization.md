---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T10:21:49.106Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Workflow Template Parameterization"
feature_slug: "workflow-template-parameterization"
latest_feature_date: "2018-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesPager"
keywords:
  - "workflow"
  - "template"
  - "parameterization"
  - "lets"
  - "dataproc"
  - "templates"
  - "be"
  - "reused"
---

# Workflow Template Parameterization

Product: Dataproc
Coverage: LOW

## Step 02 Summary

Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters; Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters.

## Extended Definition

Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters; Workflow Template Parameterization lets Dataproc workflow templates be reused with different parameters.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesPager)

## Supporting Pages

### "Overview of Managed Service for Apache Spark Workflow Templates \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview](https://docs.cloud.google.com/dataproc/docs/concepts/workflows/overview)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Inline Workflows can be instantiated inline using the gcloud command with workflow template YAML files or by calling the Managed Service for Apache Spark InstantiateInline API (see Using inline Dataproc workflows ).
- See Parameterization of Workflow Templates for more information.
- Workflow Templates replace the steps involved in a typical flow, which include: creating the cluster submitting jobs polling deleting the cluster Workflow Templates use a single token to track progress from cluster creation to deletion, and automate error handling and recovery.
- Home Documentation Data analytics Managed Service for Apache Spark Guides Send feedback Overview of Managed Service for Apache Spark Workflow Templates Stay organized with collections Save and categorize content based on your preferences.

### "Class ListSessionTemplatesAsyncPager (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesAsyncPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListSessionTemplatesRequest The initial request object. response google.cloud.dataproc v1.types.ListSessionTemplatesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListSessionTemplatesResponse ], ], request : google . cloud . dataproc v1 . types . session templates .
- ListSessionTemplatesResponse ], ], request : google . cloud . dataproc v1 . types . session templates .
- ListSessionTemplatesRequest , response : google . cloud . dataproc v1 . types . session templates .

### "Class ListSessionTemplatesPager (5.26.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesPager](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.session_template_controller.pagers.ListSessionTemplatesPager)
- Source ID: `site-python-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.dataproc v1.types.ListSessionTemplatesRequest The initial request object. response google.cloud.dataproc v1.types.ListSessionTemplatesResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- ListSessionTemplatesResponse , ], request : google . cloud . dataproc v1 . types . session templates .
- ListSessionTemplatesResponse , ], request : google . cloud . dataproc v1 . types . session templates .
- ListSessionTemplatesRequest , response : google . cloud . dataproc v1 . types . session templates .

