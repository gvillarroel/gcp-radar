---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.725Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "Go SDK support for Go 1.9 and older"
feature_slug: "go-sdk-support-for-go-1-9-and-older"
latest_feature_date: "2019-09-27"
deprecation_date: "2019-09-27"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/authenticating-users"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses"
keywords:
  - "go"
  - "sdk"
  - "older"
  - "earlier"
  - "runtimes"
  - "app"
  - "engine"
  - "was"
---

# Go SDK support for Go 1.9 and older

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

Support for Go 1.9 and earlier runtimes in the App Engine Go SDK was removed; deprecated on 2019-09-27.

## Extended Definition

Support for Go 1.9 and earlier runtimes in the App Engine Go SDK was removed; deprecated on 2019-09-27.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)

## Supporting Pages

### "Authenticating users \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/authenticating-users](https://docs.cloud.google.com/appengine/docs/standard/authenticating-users)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Authenticating users Stay organized with collections Save and categorize content based on your preferences.
- Identity-Aware Proxy (IAP) Provides authentication by adding an Identity and Access Management (IAM) verification layer above your App Engine app.
- The Users API allows an App Engine app to perform the following tasks: Detect whether the current user is signed in using a Google Account.
- IAP doesn't protect against activity within a project, such as one App Engine service accessing another service in the same project.

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the audit log names, including variables for the resource identifiers: projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Factivity projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fdata access projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fsystem event projects/ PROJECT ID /logs/cloudaudit.googleapis.com%2Fpolicy folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Factivity folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fdata access folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fsystem event folders/ FOLDER ID /logs/cloudaudit.googleapis.com%2Fpolicy billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Factivity billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fdata access billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fsystem event billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com%2Fpolicy organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Factivity organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fdata access organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fsystem event organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com%2Fpolicy Note: The part of the log name following /logs/ must be URL-encoded.
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- To read your Google Cloud project-level audit log entries, run the following command: gcloud logging read "logName : projects/ PROJECT ID /logs/cloudaudit.googleapis.com" \ --project= PROJECT ID To read your folder-level audit log entries, run the following command: gcloud logging read "logName : folders/ FOLDER ID /logs/cloudaudit.googleapis.com" \ --folder= FOLDER ID To read your organization-level audit log entries, run the following command: gcloud logging read "logName : organizations/ ORGANIZATION ID /logs/cloudaudit.googleapis.com" \ --organization= ORGANIZATION ID To read your Cloud Billing account-level audit log entries, run the following command: gcloud logging read "logName : billingAccounts/ BILLING ACCOUNT ID /logs/cloudaudit.googleapis.com" \ --billing-account= BILLING ACCOUNT ID Add the --freshness flag to your command to read logs that are more than 1 day old.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.

### "Outbound IP addresses for App Engine services \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses](https://docs.cloud.google.com/appengine/docs/standard/go/outbound-ip-addresses)
- Source ID: `site-docs-reference-2`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to know the IP addresses associated with outbound traffic from your service, you can either find the current IP address ranges that include the App Engine IP addresses, or set up a static IP address for your service.
- IP addresses for App Engine services You can find the current IP address ranges for App Engine services by using two json files that are published by Google: Google publishes a list of Google-owned IP addresses in goog.json .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Outbound IP addresses for App Engine services Stay organized with collections Save and categorize content based on your preferences.
- Set up a static outbound IP address To set up a static IP address for your App Engine standard environment service, use Serverless VPC Access with Cloud Router and Cloud NAT .

