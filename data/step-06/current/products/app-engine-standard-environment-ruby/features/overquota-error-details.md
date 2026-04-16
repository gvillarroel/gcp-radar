---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.422Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "OverQuota error details"
feature_slug: "overquota-error-details"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "exceptions"
  - "overquota"
  - "messages"
  - "details"
  - "error"
---

# OverQuota error details

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

App Engine error messages for OverQuota exceptions now include error details when available.

## Extended Definition

App Engine error messages for OverQuota exceptions now include error details when available.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- In the Python API, this exception is apiproxy errors.OverQuotaError .
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 113
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- In the Python API, this exception is apiproxy errors.OverQuotaError .
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Don't use personally identifiable information (PII) or sensitive data in display names because this name could be exposed in error messages.
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your description, because it could be exposed in error messages.

