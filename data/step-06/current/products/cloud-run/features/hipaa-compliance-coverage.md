---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.931Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "HIPAA compliance coverage"
feature_slug: "hipaa-compliance-coverage"
latest_feature_date: "2019-10-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsPager"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "hipaa"
  - "compliance"
  - "coverage"
  - "run"
  - "is"
  - "covered"
  - "by"
  - "requirements"
---

# HIPAA compliance coverage

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run is covered by HIPAA compliance requirements.

## Extended Definition

Cloud Run is covered by HIPAA compliance requirements.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsPager)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)

## Supporting Pages

### "Class ListRevisionsAsyncPager (0.16.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsAsyncPager)
- Source ID: `site-python-reference`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.run v2.types.ListRevisionsRequest The initial request object. response google.cloud.run v2.types.ListRevisionsResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) A pager for iterating through list revisions requests.
- ListRevisionsResponse ], ], request : google . cloud . run v2 . types . revision .
- ListRevisionsResponse ], ], request : google . cloud . run v2 . types . revision .

### "Class ListRevisionsPager (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsPager](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.revisions.pagers.ListRevisionsPager)
- Source ID: `site-python-reference`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.run v2.types.ListRevisionsRequest The initial request object. response google.cloud.run v2.types.ListRevisionsResponse The initial response object. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Union [ str , bytes ]]] = () ) A pager for iterating through list revisions requests.
- ListRevisionsResponse ], request : google . cloud . run v2 . types . revision .
- ListRevisionsResponse ], request : google . cloud . run v2 . types . revision .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- October 21, 2019 Feature Cloud Run is now covered by HIPAA Compliance .
- July 20, 2021 Feature Cloud Run is now covered by FedRAMP Moderate June 30, 2021 Feature Cloud Run is now available in the following region: asia-south2 (Delhi, India) June 25, 2021 Feature Cloud Run is now available in the following region: australia-southeast2 (Melbourne) June 22, 2021 Feature Cloud Run support for WebSockets , HTTP/2 , and gRPC streaming are now at general availability (GA).
- May 17, 2024 Feature Cloud Run is now covered by FedRAMP High .
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

