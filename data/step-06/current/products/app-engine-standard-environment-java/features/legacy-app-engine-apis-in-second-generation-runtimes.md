---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.871Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Legacy App Engine APIs in second-generation runtimes"
feature_slug: "legacy-app-engine-apis-in-second-generation-runtimes"
latest_feature_date: "2021-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/apis"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview"
keywords:
  - "legacy"
  - "app"
  - "engine"
  - "apis"
  - "second"
  - "generation"
  - "runtimes"
  - "selected"
---

# Legacy App Engine APIs in second-generation runtimes

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Selected legacy App Engine APIs were made available to Java 11 second-generation runtimes via language-idiomatic libraries in preview.

## Extended Definition

Selected legacy App Engine APIs were made available to Java 11 second-generation runtimes via language-idiomatic libraries in preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview)

## Supporting Pages

### "APIs & Reference \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/apis](https://docs.cloud.google.com/appengine/docs/standard/apis)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- App Engine legacy bundled services APIs App Engine legacy bundled services APIs for Go Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for Python Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for PHP Use the App Engine legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.
- App Engine legacy bundled services APIs for Java Use the legacy bundled services APIs to ease the transition of moving your app from first-generation runtimes to newer runtimes.

### "Access legacy bundled services for Java 11+ \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- The following table indicates the environment variables that can be used to enable/disable/configure features, and the default values if they are not set: Env Var Description Type Default CPROF ENABLE Stackdriver Profiler boolean false GAE MEMORY MB Available memory size Set by App Engine or /proc/meminfo -400M HEAP SIZE RATIO Memory for the heap percent 80 HEAP SIZE MB Available heap size ${HEAP SIZE RATIO} % of ${GAE MEMORY MB} JAVA HEAP OPTS JVM heap args JVM args -Xms${HEAP SIZE MB}M -Xmx${HEAP SIZE MB}M JAVA GC OPTS JVM GC args JVM args -XX:+UseG1GC plus configuration JAVA USER OPTS JVM other args JVM args JAVA OPTS JVM args JVM args See below If not explicitly set, JAVA OPTS is defaulted to: JAVA OPTS:=-showversion \ $ JAVA HEAP OPTS \ $ JAVA GC OPTS \ $ JAVA USER OPTS When CPROF ENABLE is true, the default entrypoint adds the PROFILER AGENT as: -agentpath:/opt/cprof/profiler java agent.so=--logtostderr For example, if your application code needs more -add-opens flags, you can use the JAVA USER OPTS environment variable defined in the appengine-web.xml file: <env-variables> <env-var name="JAVA USER OPTS" value="--add-opens java.base/java.util=ALL-UNNAMED" /> </env-variables> Migration considerations You should be aware of the following considerations if you are migrating to a second-generation Java runtime and your app uses legacy bundled services: To test the legacy bundled services capabilities in your second-generation Java app, you can use the local development server .
- Add the following settings in your appengine-web.xml file depending on the Java version: Java 25 (EE 11) <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java25</runtime> <system-properties> <property name="appengine.use.EE11" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Java 21 (EE 10) <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java21</runtime> <system-properties> <property name="appengine.use.EE10" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Java 17 (EE 8) <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> To specify the legacy bundled services as a dependency, add the following lines in your pom.xml file: <dependency> <groupId>com.google.appengine</groupId> <artifactId>appengine-api-1.0-sdk</artifactId> <version>2.0.31</version> <!-- or later--> </dependency> If your app uses a web.xml file, you must add the <app-engine-apis> element and set it to true : <app-engine-apis>true</app-engine-apis> To deploy your Java 25 app, run the mvn appengine:deploy command, or the gcloud app deploy /my app/WEB-INF/appengine-web.xml command on a compiled and staged web application.
- If your application is trying to call an API which is not enabled for the second-generation Java runtimes, it will receive a com.google.apphosting.api.ApiProxy$FeatureNotEnabledException error.
- Entry Point Features The entry point for the second-generation Java versions can be customized with user-defined environment variables added in the appengine-web.xml configuration file.

### "Overview of legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/bundled-services-overview)
- Source ID: `site-docs-reference`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To reduce runtime migration complexity, Google Cloud now supports a set of App Engine legacy bundled services and their associated APIs on second-generation runtimes, which include Python 3 , Java 11+ , Go 1.12+ , and PHP 7+ .
- Your app can call legacy bundled services APIs for second-generation runtimes through language-idiomatic libraries.
- These services were bundled with first-generation runtimes (also called App Engine legacy runtimes ), which include Python 2, Java 8, Go 1.11, and PHP 5.5.
- Because several of the legacy runtimes are no longer maintained by their respective open-source communities, as an App Engine developer, you may face hard choices on whether to invest time and effort in migrating to a newer runtime or else incur growing costs to retain your app on a legacy runtime.

