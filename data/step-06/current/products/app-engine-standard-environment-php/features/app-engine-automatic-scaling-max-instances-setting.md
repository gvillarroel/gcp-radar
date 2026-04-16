---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.312Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine automatic scaling max instances setting"
feature_slug: "app-engine-automatic-scaling-max-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic"
keywords:
  - "app"
  - "engine"
  - "automatic"
  - "scaling"
  - "max"
  - "instances"
  - "setting"
  - "was"
---

# App Engine automatic scaling max instances setting

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

A new max instances setting was introduced to cap the total number of App Engine automatic-scaling instances that can be scheduled.

## Extended Definition

A new max instances setting was introduced to cap the total number of App Engine automatic-scaling instances that can be scheduled.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)

## Supporting Pages

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Scaling types App Engine supports the following scaling types , which controls how and when instances are created: Automatic (default) Basic Manual You specify the scaling type in your app's app.yaml .
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.
- Scaling dynamic instances App Engine applications that use basic or automatic scaling are powered by any number of dynamic instances at a given time, depending on the volume of incoming requests.
- Note: For new projects you create after March 2025, App Engine sets the automatic scaling maximum instances default for standard environment deployments to 20.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref](https://docs.cloud.google.com/appengine/docs/standard/php7/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following values are available depending on your service's scaling : Automatic scaling F1 , F2 , F4 , F4 1G Default: F1 Optionally use the automatic scaling element to change default settings for automatic scaling, such as minimum and maximum number of instances, latency, and concurrent connections.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- Specify this element to change default settings for automatic scaling, such as setting minimum and maximum levels for number of instances, latency, and concurrent connections for a service.
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .

### "Method: apps.services.versions.patch \_|\_ App Engine Admin API \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic](https://docs.cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic)
- Source ID: `site-docs-reference-4`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: Standard environment instanceClass automatic scaling in the standard environment: automaticScaling.min idle instances automaticScaling.max idle instances automaticScaling.standard scheduler settings.max instances automaticScaling.standard scheduler settings.min instances automaticScaling.standard scheduler settings.target cpu utilization automaticScaling.standard scheduler settings.target throughput utilization basic scaling or manual scaling in the standard environment: servingStatus manualScaling.instances Flexible environment servingStatus automatic scaling in the flexible environment: automaticScaling.min total instances automaticScaling.max total instances automaticScaling.cool down period sec automaticScaling.cpu utilization.target utilization manual scaling in the flexible environment: manualScaling.instances HTTP request PATCH https://appengine.googleapis.com/v1/{name=apps/ /services/ /versions/ } The URL uses gRPC Transcoding syntax.
- Authorization requires the following IAM permission on the specified resource name : appengine.versions.update Query parameters Parameters updateMask string ( FieldMask format) Standard field mask for the set of fields to be updated.
- Home Technology areas App Engine Admin API Reference Send feedback Method: apps.services.versions.patch Stay organized with collections Save and categorize content based on your preferences.

