---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.863Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java 8 runtime support"
feature_slug: "java-8-runtime-support"
latest_feature_date: "2026-01-31"
deprecation_date: "2026-03-02"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
keywords:
  - "java"
  - "runtime"
  - "deprecated"
  - "deployment"
  - "while"
  - "existing"
  - "applications"
  - "remain"
---

# Java 8 runtime support

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java 8 runtime is deprecated for deployment, while existing Java 8 applications remain running and continue receiving traffic; deprecated on 2026-03-02.

## Extended Definition

The Java 8 runtime is deprecated for deployment, while existing Java 8 applications remain running and continue receiving traffic; deprecated on 2026-03-02.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After deprecation, you won't be able to deploy Java 8 applications, even if your organization previously used an organization policy to re-enable deployments of legacy runtimes.
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- The process of upgrading an existing application depends on the runtime version that your application uses: Java 8 : Migrate your application to the latest supported Java version .
- Your existing Java 11 applications will continue to run and receive traffic after their deprecation date .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- You should use the appengine-web.xml file for configuring your app only if you are migrating an existing app from the App Engine Java 8 runtime to the latest supported Java version and you want to use the legacy bundled services .
- Notice that the application is deployed in the /workspace directory, while the runtime JARs are located under /base/java runtime directory.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- After deprecation, you won't be able to deploy Java 8 applications, even if your organization previously used an organization policy to re-enable deployments of legacy runtimes.
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.
- The process of upgrading an existing application depends on the runtime version that your application uses: Java 8 : Migrate your application to the latest supported Java version .
- Your existing Java 11 applications will continue to run and receive traffic after their deprecation date .

