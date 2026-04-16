---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.925Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Build step persistent volumes"
feature_slug: "build-step-persistent-volumes"
latest_feature_date: "2017-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-config"
  - "https://docs.cloud.google.com/build/docs/build-config-file-schema"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "persistent"
  - "volumes"
  - "persist"
  - "paths"
  - "specified"
  - "step"
  - "added"
---

# Build step persistent volumes

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build added support for volumes that persist specified paths across build steps.

## Extended Definition

Cloud Build added support for volumes that persist specified paths across build steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config](https://docs.cloud.google.com/build/docs/build-config)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.
- If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions (unless a volume for that path is specified).
- For information on using this field see Using the encrypted variable in build requests . volumes A Volume is a Docker container volume that is mounted into build steps to persist files across build steps.
- If these steps did not specify /persistent volume path as a persistent volume, the first step would write the file at that path, then that file would be discarded before the second step executes.

### Build configuration file schema \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/build-config-file-schema](https://docs.cloud.google.com/build/docs/build-config-file-schema)
- Source ID: `site-docs-root-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- YAML steps : - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' entrypoint : 'bash' args : - '-c' - echo "Hello, world!" > /persistent volume/file - name : 'ubuntu' volumes : - name : 'vol1' path : '/persistent volume' args : [ 'cat' , '/persistent volume/file' ] JSON { "steps" : [ { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "entrypoint" : "bash" , "args" : [ "-c" , "echo \"Hello, world!\" > /persistent volume/file\n" ] }, { "name" : "ubuntu" , "volumes" : [ { "name" : "vol1" , "path" : "/persistent volume" } ], "args" : [ "cat" , "/persistent volume/file" ] } ] } timeout Use the timeout field in a build step to set a time limit for executing the step.
- If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions (unless a volume for that path is specified).
- For information on using this field see Using the encrypted variable in build requests . volumes A Volume is a Docker container volume that is mounted into build steps to persist files across build steps.
- If these steps did not specify /persistent volume path as a persistent volume, the first step would write the file at that path, then that file would be discarded before the second step executes.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-2`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- It's possible to reduce request latency by configuring your application to asynchronously write HTTP session data to the Datastore: <async-session-persistence enabled="true" /> With async session persistence turned on, App Engine will submit a Task Queue task to write session data to the Datastore before writing the data to memcache.
- However, you won't be charged for more instances than the maximum number you've specified. <max-pending-latency> The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.

