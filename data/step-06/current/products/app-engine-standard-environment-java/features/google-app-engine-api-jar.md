---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.227Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Google App Engine API jar"
feature_slug: "google-app-engine-api-jar"
latest_feature_date: "2019-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "compiled"
  - "target"
---

# Google App Engine API jar

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Google App Engine API jar is now compiled for a Java 8 target.

## Extended Definition

The Google App Engine API jar is now compiled for a Java 8 target.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 46
- Re-rank relevance: N/A

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference-4`
- Final score: 46
- Re-rank relevance: N/A

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>F2</instance-class> <automatic-scaling> <target-cpu-utilization>0.65</target-cpu-utilization> <min-instances>5</min-instances> <max-instances>100</max-instances> <max-concurrent-requests>50</max-concurrent-requests> </automatic-scaling> </appengine-web-app> <basic-scaling> Optional.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- When the number of concurrent requests reaches a value equal to max-concurrent-requests times target-throughput-utilization , the scheduler starts a new instance. <max-instances> Optional.
- This avoids the ambiguity with URLs like 123.my-module.uc.r.appspot.com , which can be interpreted two ways: If version "123" exists, the target will be version "123" of the given module.

