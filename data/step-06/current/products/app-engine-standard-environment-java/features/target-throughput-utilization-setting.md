---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.236Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "target throughput utilization setting"
feature_slug: "target-throughput-utilization-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
keywords:
  - "throughput"
  - "concurrent"
  - "tune"
  - "utilization"
  - "target"
  - "setting"
  - "lets"
---

# target throughput utilization setting

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The target throughput utilization setting lets you tune the concurrent request level that triggers new instances.

## Extended Definition

The target throughput utilization setting lets you tune the concurrent request level that triggers new instances.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- When the number of concurrent requests reaches a value equal to max-concurrent-requests times target-throughput-utilization , the scheduler starts a new instance. <max-instances> Optional.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>F2</instance-class> <automatic-scaling> <target-cpu-utilization>0.65</target-cpu-utilization> <min-instances>5</min-instances> <max-instances>100</max-instances> <max-concurrent-requests>50</max-concurrent-requests> </automatic-scaling> </appengine-web-app> <basic-scaling> Optional.
- For example, a value of 0.7 means that new instances will be started after CPU usage reaches 70 percent. <target-throughput-utilization> Optional.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance. max concurrent requests Optional.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance.
- Used with target throughput utilization to specify when a new instance is started due to concurrent requests.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance. max concurrent requests Optional.
- App Engine calculates the number of instances necessary to serve your current application traffic based on scaling settings such as target cpu utilization and target throughput utilization .
- When the number of concurrent requests reaches a value equal to max concurrent requests times target throughput utilization , the scheduler tries to start a new instance.
- Used with target throughput utilization to specify when a new instance is started due to concurrent requests.

