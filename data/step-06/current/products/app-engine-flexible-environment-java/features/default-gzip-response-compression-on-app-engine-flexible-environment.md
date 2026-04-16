---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.482Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Default gzip response compression on App Engine flexible environment"
feature_slug: "default-gzip-response-compression-on-app-engine-flexible-environment"
latest_feature_date: "2017-10-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls"
keywords:
  - "default"
  - "gzip"
  - "response"
  - "compression"
  - "app"
  - "engine"
  - "flexible"
  - "environment"
---

# Default gzip response compression on App Engine flexible environment

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine flexible environment apps now serve all responses with gzip compression by default after redeploy.

## Extended Definition

App Engine flexible environment apps now serve all responses with gzip compression by default after redeploy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)

## Supporting Pages

### "The Java runtime \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/runtime](https://docs.cloud.google.com/appengine/docs/flexible/java/runtime)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- Jetty 9 , which the App Engine flexible environment uses as its Servlet container, uses Apache Jasper as the default JSP implementation and includes JSTL taglibs.
- JAVA OPTS JVM runtime arguments Enhanced Cloud Logging (Beta) When running on the App Engine flexible environment, you can configure Java Util Logging to send logs to Cloud Logging by setting the JETTY ARGS environment variable.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback The Java runtime Stay organized with collections Save and categorize content based on your preferences.
- Enabling gzip compression The gzip handler is bundled with Jetty but not activated by default.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- For resources that are required to initiate a request, when the resource is depleted, App Engine by default returns an HTTP 403 or 503 error code for the request instead of calling a request handler.

### "Creating App Engine firewall rules \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/creating-firewalls)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating App Engine firewall rules Stay organized with collections Save and categorize content based on your preferences.
- Examples: Use the following examples to help you create your firewall: Add a rule that allows an IPv6 address and subnet mask, and then test that rule to ensure it gets evaluated prior to your other rules: gcloud app firewall-rules create 123 --source-range fe80::3636:3bff:fecc:8778/128 --action allow gcloud app firewall-rules test-ip fe80::3636:3bff:fecc:8778 Add a rule to deny an IPv4 address and subnet mask, and then test that rule to ensure that it gets appropriately evaluated: gcloud app firewall-rules create 123456 --source-range "74.125.0.0/16" --action deny gcloud app firewall-rules test-ip 74 .125.0.8 Update and then test the default rule to ensure that it restricts all IP addresses that don't match any other rules: gcloud app firewall-rules update default --action deny gcloud app firewall-rules test-ip 123 .456.7.89 API To programmatically create firewall rules for your App Engine app, you can use the apps.firewall.ingressRules methods in the Admin API.
- 2147483647 Deny Default Action After the firewall is created, assume that the following requests are directed at the sample app and note the app's response: Request from 198.51.100.2 matches rule with priority 2000 and is allowed.
- 2147483647 Deny Default Action The engineer in the satellite office will not be able to access the company's app as the rule's new priority means it will never be evaluated.

