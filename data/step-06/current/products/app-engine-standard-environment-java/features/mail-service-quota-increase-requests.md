---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.263Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Mail service quota increase requests"
feature_slug: "mail-service-quota-increase-requests"
latest_feature_date: "2016-04-18"
deprecation_date: "2016-04-18"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "customers"
  - "increase"
  - "previously"
  - "quota"
  - "mail"
  - "allowed"
  - "requests"
  - "request"
---

# Mail service quota increase requests

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The mail service previously allowed customers to request quota increases; deprecated on 2016-04-18.

## Extended Definition

The mail service previously allowed customers to request quota increases; deprecated on 2016-04-18.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 173
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.
- Resource or API call Free Quota Total storage (documents and indexes) 0.25 GB Queries 1000 queries per day Adding documents to indexes 0.01 GB per day The application console quota section displays a raw count of API requests.
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The Google Cloud console Quota Details page also reports Secure Requests , Secure Incoming Bandwidth , and Secure Outgoing Bandwidth as separate values for informational purposes.
- Users may also experience increased latency because of requests waiting in the pending queue for available instances.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- You can configure startup instructions by adding entrypoint to app.yaml. app . run ( host = "127.0.0.1" , port = 8080 , debug = True ) Quotas and limits App Engine automatically allocates resources to your application as traffic increases.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- This lowers running costs but increases the time users must wait for their requests to be served.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>F2</instance-class> <automatic-scaling> <target-cpu-utilization>0.65</target-cpu-utilization> <min-instances>5</min-instances> <max-instances>100</max-instances> <max-concurrent-requests>50</max-concurrent-requests> </automatic-scaling> </appengine-web-app> <basic-scaling> Optional.
- A high maximum means users might wait longer for their requests to be served, if there are pending requests and no idle instances to serve them, but your application will cost less to run. <min-idle-instances> The number of instances to be kept running and ready to serve traffic.This setting only applies to the version that receives most of the traffic.

