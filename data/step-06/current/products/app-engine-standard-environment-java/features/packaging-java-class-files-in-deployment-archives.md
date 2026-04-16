---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.907Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Packaging Java class files in deployment archives"
feature_slug: "packaging-java-class-files-in-deployment-archives"
latest_feature_date: "2017-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/quotas"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "packaging"
  - "java"
  - "class"
  - "files"
  - "deployment"
  - "archives"
  - "adjusted"
  - "include"
---

# Packaging Java class files in deployment archives

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Adjusted deployment packaging to include Java class files in zip archives even when no JSPs are present.

## Extended Definition

Adjusted deployment packaging to include Java class files in zip archives even when no JSPs are present.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- If enable-jar-splitting is enabled, all files that match the suffixes will be excluded from all JARs. <disable jar jsps> Don't jar classes generated from JSPs. (Default: false). <enable-jar-classes> Jar the contents of WEB-INF/classes. (Default: true). <delete-jsps> Delete the JSP source files after compilation. (Default: true). <compile-encoding> Input encoding of source files for compilation. (Default: utf-8).

### "Quotas and limits \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/quotas](https://docs.cloud.google.com/appengine/docs/quotas)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Files The following quota applies to the total number of app deployment files.
- Resource Default limit Default Cloud Storage Bucket Stored Data First 5 GB free; no maximum Default Cloud Storage Bucket Class A Operations First 20,000 ops/day free; no maximum Default Cloud Storage Bucket Class B Operations First 50,000 ops/day free; no maximum Default Cloud Storage Bucket Network Egress First 1 GB free; no maximum Blobstore The following quotas apply specifically to use of the blobstore.
- Task Queue When a task executes, its associated requests count toward the application request quotas These limits apply to all task queues: Resource Daily limit Maximum rate Task Queue management calls (using the Google Cloud console) 10,000 n/a Resource Default limit Maximum number of queues (includes both push and pull queues but not the default queue) 100 queues.
- This includes: data received by the application in secure requests and non-secure requests uploads to the Blobstore data received in response to HTTP requests by the URL fetch service Secure outgoing bandwidth The amount of data sent by the application over a secure connection in response to requests.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : java25 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : - url : /stylesheets static dir : stylesheets - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description build env variables Optional.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.
- App Engine can handle URLs by executing application code, or by serving static files uploaded with the code, such as images, CSS, or JavaScript.
- Example automatic scaling : target cpu utilization : 0.65 min instances : 5 max instances : 100 min pending latency : 30ms max pending latency : automatic max concurrent requests : 50 basic scaling Applications that use an instance class of B1 or higher must specify either this element or manual scaling .

