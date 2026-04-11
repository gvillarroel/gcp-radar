---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.568Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine PHP mail service quota increase handling"
feature_slug: "app-engine-php-mail-service-quota-increase-handling"
latest_feature_date: "2016-04-18"
deprecation_date: "2016-04-18"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/building-app"
keywords:
  - "increase"
  - "handling"
  - "stopped"
  - "mail"
  - "quota"
  - "engine"
  - "php"
  - "app"
---

# App Engine PHP mail service quota increase handling

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

Google stopped accepting quota increase requests for the App Engine PHP mail service, directing users to SendGrid instead; deprecated on 2016-04-18.

## Extended Definition

Google stopped accepting quota increase requests for the App Engine PHP mail service, directing users to SendGrid instead; deprecated on 2016-04-18.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail)
- [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- To find the optimal value, gradually increase it and monitor the performance of your application. <max-idle-instances> The maximum number of idle instances that App Engine should maintain for this version.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.

### "Package google.golang.org/appengine/v2/mail (v2.0.6) \_|\_ App Engine standard\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/mail (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- Body string HTMLBody string Attachments [] Attachment // Extra mail headers. // See https://cloud.google.com/appengine/docs/standard/go/mail/ // for permissible headers.
- Package mail provides the means of sending email from an App Engine application.
- Context , msg Message ) error SendToAdmins sends an email message to the application's administrators.

### "Build a Go app on App Engine \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/building-app](https://docs.cloud.google.com/appengine/docs/standard/go/building-app)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Create a new folder called go-app for your Go service: mkdir go-app In your go-app/ folder, create a file called app.yaml , and add the following contents: runtime : go126 # or another supported version This is the simplest configuration for an App Engine app.
- Deploy your web service on App Engine In your go-app directory where your app.yaml file is located, deploy your web service to App Engine using the following command: gcloud app deploy To launch your browser and view your web service at https:// PROJECT ID .
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Build a Go app on App Engine Stay organized with collections Save and categorize content based on your preferences.
- To confirm service creation and version deployment: View your App Engine services in the Google Cloud console: View services You should see one service listed, named default .

