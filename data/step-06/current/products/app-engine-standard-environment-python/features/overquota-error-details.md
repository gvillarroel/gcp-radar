---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.794Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "OverQuota error details"
feature_slug: "overquota-error-details"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "exceptions"
  - "overquota"
  - "returned"
  - "details"
  - "messages"
  - "include"
  - "error"
  - "available"
---

# OverQuota error details

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

OverQuota exceptions include available error details in returned error messages.

## Extended Definition

OverQuota exceptions include available error details in returned error messages.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 167
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- When an app tries to exceed this amount, an insufficient quota error is returned.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your description, because it could be exposed in error messages.
- Don't use personally identifiable information (PII) or sensitive data in display names because this name could be exposed in error messages.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://cloud.google.com/appengine/docs/standard/connecting-vpc](https://cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-3`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your description, because it could be exposed in error messages.
- Don't use personally identifiable information (PII) or sensitive data in display names because this name could be exposed in error messages.

