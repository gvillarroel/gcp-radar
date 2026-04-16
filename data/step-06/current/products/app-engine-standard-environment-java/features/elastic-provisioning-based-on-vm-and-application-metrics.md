---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.269Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Elastic provisioning based on VM and application metrics"
feature_slug: "elastic-provisioning-based-on-vm-and-application-metrics"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
keywords:
  - "provisioning"
  - "elastic"
  - "metrics"
  - "application"
  - "applications"
  - "based"
---

# Elastic provisioning based on VM and application metrics

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Applications can be provisioned for current load and configured for elastic provisioning using both VM-level and application-level metrics.

## Extended Definition

Applications can be provisioned for current load and configured for elastic provisioning using both VM-level and application-level metrics.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Automatic scaling Automatic scaling creates instances based on request rate, response latencies, and other application metrics.
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback How instances are managed Stay organized with collections Save and categorize content based on your preferences.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- After deprecation, you won't be able to deploy Java 8 applications, even if your organization previously used an organization policy to re-enable deployments of legacy runtimes.
- If you use legacy bundled services, upgrade your applications to run on either: Java Enterprise Edition 11 (E11): EE 11 doesn't support javax.servlet.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference-4`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Upgrade an existing application Stay organized with collections Save and categorize content based on your preferences.
- After deprecation, you won't be able to deploy Java 8 applications, even if your organization previously used an organization policy to re-enable deployments of legacy runtimes.
- If you use legacy bundled services, upgrade your applications to run on either: Java Enterprise Edition 11 (E11): EE 11 doesn't support javax.servlet.

