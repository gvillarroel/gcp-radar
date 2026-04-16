---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:16:06.791Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "XMPP service"
feature_slug: "xmpp-service"
latest_feature_date: "2016-10-27"
deprecation_date: "2017-10-31"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
keywords:
  - "xmpp"
  - "send"
  - "messages"
  - "receive"
  - "enables"
  - "applications"
---

# XMPP service

Product: App Engine standard environment Python
Coverage: MEDIUM

## Step 02 Summary

The XMPP service enables App Engine applications to send and receive XMPP messages; deprecated on 2017-10-31.

## Extended Definition

The XMPP service enables App Engine applications to send and receive XMPP messages; deprecated on 2017-10-31.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource Default daily limit Maximum rate Recipients emailed 100 messages 8 messages/minute Admins emailed 5,000 mails 24 mails/minute Message body data sent 60 MB 340 KB/minute Attachments sent 2,000 attachments 8 attachments/minute Attachment data sent 100 MB 10 MB/minute You can add up to a maximum of 50 authorized senders for the Mail API.
- For example, sending one email to ten recipients counts as 10 messages.
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- This helps make App Engine a cost-effective solution for small applications that don't receive continuous requests.
- Some instance shutdown log messages you might see include: [ start ] Quitting on terminated signal [ INFO ] Handling signal : term [ INFO ] Worker exiting ( pid : 21 ) [ INFO ] Worker exiting ( pid : 24 ) [ INFO ] Shutting down : Master [ start ] Start program failed : termination triggered by nginx exit These log messages do not indicate any error condition but are indications of the normal instance shut down process.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference-3`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- This helps make App Engine a cost-effective solution for small applications that don't receive continuous requests.
- Some instance shutdown log messages you might see include: [ start ] Quitting on terminated signal [ INFO ] Handling signal : term [ INFO ] Worker exiting ( pid : 21 ) [ INFO ] Worker exiting ( pid : 24 ) [ INFO ] Shutting down : Master [ start ] Start program failed : termination triggered by nginx exit These log messages do not indicate any error condition but are indications of the normal instance shut down process.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

