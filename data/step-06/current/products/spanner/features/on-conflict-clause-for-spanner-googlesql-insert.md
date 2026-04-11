---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:28:00.827Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "ON CONFLICT clause for Spanner GoogleSQL INSERT"
feature_slug: "on-conflict-clause-for-spanner-googlesql-insert"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest"
  - "https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session"
keywords:
  - "on"
  - "conflict"
  - "clause"
  - "for"
  - "spanner"
  - "googlesql"
  - "insert"
  - "statements"
---

# ON CONFLICT clause for Spanner GoogleSQL INSERT

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Spanner GoogleSQL INSERT statements support the ON CONFLICT clause to handle unique constraint violations, including DO NOTHING and DO UPDATE forms.

## Extended Definition

Spanner GoogleSQL INSERT statements support the ON CONFLICT clause to handle unique constraint violations, including DO NOTHING and DO UPDATE forms.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest](https://docs.cloud.google.com/python/docs/reference/spanner/latest)
- [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session)

## Supporting Pages

### Python Client for Cloud Spanner | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest](https://docs.cloud.google.com/python/docs/reference/spanner/latest)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Python Client for Cloud Spanner Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest Cloud Spanner is the world’s first fully managed relational database service to offer both strong consistency and horizontal scalability for mission-critical online transaction processing (OLTP) applications.

### django_spanner.operations — google-cloud-spanner-django documentation

- URL: [https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html](https://googleapis.dev/python/django-google-spanner/latest/_modules/django_spanner/operations.html)
- Source ID: `site-python-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- django spanner.operations — google-cloud-spanner-django documentation Source URL: https://googleapis.dev/python/django-google-spanner/latest/ modules/django spanner/operations.html [docs]class DatabaseOperations(BaseDatabaseOperations): &quot;&quot;&quot;A Spanner-specific version of Django database operations.&quot;&quot;&quot; cast data types = {&quot;CharField&quot;: &quot;STRING&quot;, &quot;TextField&quot;: &quot;STRING&quot;} cast char field without max length = &quot;STRING&quot; compiler module = &quot;django spanner.compiler&quot; # Django&#x27;s lookup names that require a different name in Spanner&#x27;s # EXTRACT() function.

### Class Session (3.62.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_v1.session.Session)
- Source ID: `site-python-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Class Session (3.62.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner v1.session.Session Representation of a Cloud Spanner Session.

