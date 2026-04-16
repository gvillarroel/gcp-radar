---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:18:25.392Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "TLS 1.2 and later support"
feature_slug: "tls-1-2-and-later-support"
latest_feature_date: "2025-10-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref"
keywords:
  - "approved"
  - "enables"
  - "secure"
  - "modern"
  - "later"
  - "transport"
  - "versions"
---

# TLS 1.2 and later support

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

TLS 1.2 and later support enables secure transport using modern TLS versions and approved cipher suites; TLS 1.2 and later support enables secure transport using modern TLS versions and approved cipher suites.

## Extended Definition

TLS 1.2 and later support enables secure transport using modern TLS versions and approved cipher suites; TLS 1.2 and later support enables secure transport using modern TLS versions and approved cipher suites.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/quotas](https://docs.cloud.google.com/appengine/docs/standard/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.
- This includes: data served in response to both secure requests and non-secure requests by application servers, static file servers, or the Blobstore data sent in email messages data in outgoing HTTP requests sent by the URL fetch service.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref](https://docs.cloud.google.com/appengine/docs/standard/ruby/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- For more information about the possible MIME media types, see the IANA MIME Media Types website . redirect http response code Optional. redirect http response code is used with the secure setting to set the HTTP response code returned when performing a redirect required by how the secure setting is configured. redirect http response code element has the following possible values: 301 Moved Permanently response code.
- Python example handlers : - url : /youraccount/. secure : always script : auto To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- This prevents a user from accidentally submitting query data over a non-secure connection that was intended for a secure connection. always Requests for a URL that match this handler that do not use HTTPS are automatically redirected to the HTTPS URL with the same path.

