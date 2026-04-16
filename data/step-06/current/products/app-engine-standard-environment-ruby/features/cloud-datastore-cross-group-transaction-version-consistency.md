---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:57:41.409Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Cloud Datastore cross-group transaction version consistency"
feature_slug: "cloud-datastore-cross-group-transaction-version-consistency"
latest_feature_date: "2016-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/audit-logging"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
keywords:
  - "datastore"
  - "cross"
  - "group"
  - "transaction"
  - "version"
  - "consistency"
  - "transactions"
  - "now"
---

# Cloud Datastore cross-group transaction version consistency

Product: App Engine standard environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Cross-group transactions now return identical version numbers for all new or updated entities, regardless of entity group.

## Extended Definition

Cross-group transactions now return identical version numbers for all new or updated entities, regardless of entity group.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)

## Supporting Pages

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Configure Datastore indexes with index.yaml Stay organized with collections Save and categorize content based on your preferences.
- This gives you the opportunity to leave an older version of the app running while new indexes are being built, or to revert to the older version immediately if a problem is discovered with a newer version.

### "App Engine audit logging information \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/audit-logging](https://docs.cloud.google.com/appengine/docs/standard/audit-logging)
- Source ID: `site-docs-root-2`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Audited operations The following table summarizes which API operations correspond to each audit log type in App Engine: Audit logs category App Engine operations Admin Activity audit logs apps.create apps.patch apps.repair apps.authorizedCertificates.create apps.authorizedCertificates.delete apps.authorizedCertificates.patch apps.domainMappings.create apps.domainMappings.delete apps.domainMappings.patch apps.firewall.ingressRules.batchUpdate apps.firewall.ingressRules.create apps.firewall.ingressRules.delete apps.firewall.ingressRules.patch apps.services.delete apps.services.patch apps.services.versions.create apps.services.versions.delete apps.services.versions.patch apps.services.versions.instances.debug apps.services.versions.instances.delete Data Access audit logs GetMemcacheItem SetMemcacheItem DeleteMemcacheItem FlushAllMemcacheItems Memcache audit logs only apply to operations made through Cloud Console.
- To manage your audit logs across an entire organization, you can create aggregated sinks that can route logs from any or all Google Cloud projects in the organization.
- If you want to use SQL to analyze groups of log entries, then use the Log Analytics page.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-root`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Similarly, both service2 and service3 are in separate directories, which contain each service's files, although service3 includes two versions of the YAML configuration file: In the following example, a single service has the optional dispatch.yaml file and two configuration files that represent different versions of that service, service1.yaml and service2.yaml : Design considerations for instance uptime Hardware or software failures that cause early termination or frequent instance restarts can occur without warning and can take considerable time to resolve.
- See the following topics for details about each of the optional features: cron.yaml configures regularly scheduled tasks that operate at defined times or regular intervals. dispatch.yaml overrides routing default rules by sending incoming requests to a specific service based on the path or hostname in the URL. index.yaml specifies which indexes your app needs if using Datastore queries.
- If you host your app out of a version control system (VCS), for example GitHub, you can also structure your app to use separate directories in a repository, or use separate repositories for each service.
- For example, you can name a configuration file after your service, or use unique names to represent each version of that particular service, like service1.yaml or app.flexible.yaml .

