---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.339Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "PyAMF 0.7.2 beta integration"
feature_slug: "pyamf-0-7-2-beta-integration"
latest_feature_date: "2015-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains"
keywords:
  - "pyamf"
  - "beta"
  - "integration"
  - "version"
  - "has"
  - "been"
  - "added"
---

# PyAMF 0.7.2 beta integration

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

PyAMF version 0.7.2 (Beta) has been added.

## Extended Definition

PyAMF version 0.7.2 (Beta) has been added.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference-4`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- The following example illustrates how to catch the OverQuotaError , which may be raised by the SendMessage() method if an email-related quota has been exceeded: try: mail.SendMessage ( to = 'test@example.com' , from = 'admin@example.com' , subject = 'Test Email' , body = 'Testing' ) except apiproxy errors.OverQuotaError, message: Log the error. logging.error(message) Display an informative message to the user. self.response.out.write ( 'The email could not be sent. ' 'Please try again later.' ) Is your app exceeding the default limits?
- The following limits apply to task queues according to their type: Push Queue Limits Maximum task size 100KB Queue execution rate 500 task invocations per second per queue Maximum countdown/ETA for a task 30 days from the current date and time Maximum number of tasks that can be added in a batch 100 tasks Maximum number of tasks that can be added in a transaction 5 tasks Default maximum number of task queues 100 queues.
- Limit Free app Paid app Maximum services per app 5 210 Maximum versions per app 15 210 There is also a limit to the number of instances for each service with basic or manual scaling: Maximum instances per manual/basic scaling version Free app Paid app US Paid app EU 20 25 (200 for us-central ) 25 There is also a limit to the number of instances across standard versions that can be running per project and region.
- Description Limit Maximum characters in Project URL for VERSION -dot- SERVICE -dot- PROJECT ID URL 63 Default Cloud Storage bucket The Default Cloud Storage bucket has a free quota for daily usage as shown below.

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/php7/mapping-custom-domains)
- Source ID: `site-docs-reference-4`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- You can use a dig tool, such as this online dig version , to confirm the DNS records have been successfully updated.
- Wildcard routing rules apply to URLs that contain components for services, versions, and instances, following the service routing rules for App Engine .
- If the user browses a domain that matches an application version name or service name, the application serves that version.
- If you encounter the limit, App Engine keeps trying to issue managed certificates until all requests have been fulfilled.

### "Migrate from PHP 5.5 to the latest PHP runtime \_|\_ App Engine migration\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences](https://docs.cloud.google.com/appengine/docs/standard/php7/php-differences)
- Source ID: `site-docs-reference-4`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The behavior of some elements in the app.yaml configuration file has been modified: Element Change type Description entrypoint Added Optionally , use this field to specify the command that will run when your app starts . threadsafe Deprecated All applications are presumed to be threadsafe, meaning an instance can handle multiple requests at the same time. api version Deprecated Previously required but not needed in the second-generation PHP runtimes. application readable Deprecated builtins Deprecated libraries Deprecated Arbitrary third party dependencies can be installed using a composer.json metadata file. handlers Modified The script field is optional and the only accepted value is auto .
- Compatibility issues between PHP 5.5 and the second-generation PHP runtimes The official PHP documentation provides information on migrating from different PHP versions: Migrating from PHP 5.5.x to PHP 5.6.x Migrating from PHP 5.6.x to PHP 7.0.x Migrating from PHP 7.0.x to PHP 7.1.x Migrating from PHP 7.1.x to PHP 7.2.x Migrating from PHP 7.2.x to PHP 7.3.x Migrating from PHP 7.3.x to PHP 7.4.x Migrating from PHP 7.4.x to PHP 8.0.x Migrating from PHP 8.0.x to PHP 8.1.x Key differences between PHP 5.5 and the second-generation PHP runtimes The following is a summary of the differences between the PHP 5.5 and the second-generation PHP runtimes in the App Engine standard environment: Memory usage differences Second-generation runtimes see a higher baseline of memory usage compared to first-generation runtimes.
- Running your application locally To test your application and run it locally: Locally install a version of PHP that corresponds to a second-generation PHP runtime available in the App Engine standard environment.
- This is due to multiple factors, such as different base image versions, and differences in how the two generations calculate memory usage.

