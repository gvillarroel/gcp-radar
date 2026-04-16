---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.315Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Mail service quota increase requests"
feature_slug: "mail-service-quota-increase-requests"
latest_feature_date: "2016-04-18"
deprecation_date: "2016-04-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/config/appref"
keywords:
  - "previously"
  - "increase"
  - "mail"
  - "allowed"
  - "quota"
  - "requests"
---

# Mail service quota increase requests

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine mail service previously allowed customers to request quota increases for sending mail; deprecated on 2016-04-18.

## Extended Definition

The App Engine mail service previously allowed customers to request quota increases for sending mail; deprecated on 2016-04-18.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- Resource or API call Free Quota Total storage (documents and indexes) 0.25 GB Queries 1000 queries per day Adding documents to indexes 0.01 GB per day The application console quota section displays a raw count of API requests.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- Users may also experience increased latency because of requests waiting in the pending queue for available instances.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/config/appref](https://docs.cloud.google.com/appengine/docs/standard/go/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Specifying a value can lower running costs but increase the time users must wait for their requests to be served.
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- Note that the scheduler might spawn a new instance before the actual maximum number of requests is reached. max pending latency The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.

