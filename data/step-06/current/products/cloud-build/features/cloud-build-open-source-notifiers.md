---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.891Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build open-source notifiers"
feature_slug: "cloud-build-open-source-notifiers"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/build-push-docker-image"
  - "https://docs.cloud.google.com/build/docs/quickstart-docker"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "notifiers"
  - "open"
  - "smtp"
  - "source"
  - "slack"
  - "generally"
---

# Cloud Build open-source notifiers

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Open-source notifiers for Slack and SMTP are now generally available for build status notifications.

## Extended Definition

Open-source notifiers for Slack and SMTP are now generally available for build status notifications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- [https://docs.cloud.google.com/build/docs/quickstart-docker](https://docs.cloud.google.com/build/docs/quickstart-docker)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/build-push-docker-image](https://docs.cloud.google.com/build/docs/build-push-docker-image)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built a Docker image named quickstart-image using a Dockerfile and pushed the image to Artifact Registry.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.

### "Quickstart: Build and push a Docker image with Cloud Build \_|\_ Google\

- URL: [https://docs.cloud.google.com/build/docs/quickstart-docker](https://docs.cloud.google.com/build/docs/quickstart-docker)
- Source ID: `site-docs-root-2`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- At build time, Cloud Build automatically replaces $PROJECT ID with your project ID. steps : - name : 'gcr.io/cloud-builders/docker' script : docker build -t us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1 . automapSubstitutions : true images : - 'us-west2-docker.pkg.dev/$PROJECT ID/quickstart-docker-repo/quickstart-image:tag1' Start the build by running the following command: gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 046ddd31-3670-4771-9336-8919e7098b11 2020 -11-05T18:24:02+00:00 15S gs://gcb-docs-project cloudbuild/source/1604600641.576884-8153be22c94d438aa86c78abf11403eb.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built quickstart-image using the build config file and pushed the image to Artifact Registry.
- After the build is complete, the output should be similar to the following: DONE ------------------------------------------------------------------------------------------------------------------------------------ ID CREATE TIME DURATION SOURCE IMAGES STATUS 545cb89c-f7a4-4652-8f63-579ac974be2e 2020 -11-05T18:16:04+00:00 16S gs://gcb-docs-project cloudbuild/source/1604600163.528729-b70741b0f2d0449d8635aa22893258fe.tgz us-west2-docker.pkg.dev/gcb-docs-project/quickstart-docker-repo/quickstart-image:tag1 SUCCESS You've just built a Docker image named quickstart-image using a Dockerfile and pushed the image to Artifact Registry.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.
- Create a project : To create a project, you need the Project Creator role ( roles/resourcemanager.projectCreator ), which contains the resourcemanager.projects.create permission.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- If enable-jar-splitting is enabled, all files that match the suffixes will be excluded from all JARs. <disable jar jsps> Don't jar classes generated from JSPs. (Default: false). <enable-jar-classes> Jar the contents of WEB-INF/classes. (Default: true). <delete-jsps> Delete the JSP source files after compilation. (Default: true). <compile-encoding> Input encoding of source files for compilation. (Default: utf-8).
- If you set url-stream-handler to urlfetch , URL.openConnection and related methods will use URL Fetch for http and https transport. <url-stream-handler>urlfetch</url-stream-handler> <version> The <version> element contains the version identifier for the latest version of the app's code.

