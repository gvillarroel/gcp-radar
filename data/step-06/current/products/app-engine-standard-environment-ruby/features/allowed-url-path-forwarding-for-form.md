---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.381Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "Allowed URL path forwarding for /form"
feature_slug: "allowed-url-path-forwarding-for-form"
latest_feature_date: "2016-02-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore"
keywords:
  - "forwarding"
  - "path"
  - "form"
  - "allowed"
  - "url"
  - "is"
  - "for"
  - "the"
---

# Allowed URL path forwarding for /form

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

The /form URL path is now allowed and forwarded to applications.

## Extended Definition

The /form URL path is now allowed and forwarded to applications.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore)

## Supporting Pages

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A user visiting the URL path /help/accounts/password.jsp for information on account passwords might try to visit /help/accounts/ to find a page introducing the account system documentation.
- The <filter> element contains a <filter-name> , <filter-class> , and optional <init-param> elements. <filter> <filter-name>logSpecial</filter-name> <filter-class>mysite.server.LogFilterImpl</filter-class> <init-param> <param-name>logType</param-name> <param-value>special</param-value> </init-param> </filter> The <filter-mapping> element contains a <filter-name> that matches the name of a declared filter, and either a <url-pattern> element for applying the filter to URLs, or a <servlet-name> element that matches the name of a declared servlet for applying the filter whenever the servlet is called. <!-- Log for all URLs ending in ".special" --> <filter-mapping> <filter-name>logSpecial</filter-name> <url-pattern> .special</url-pattern> </filter-mapping> <!-- Log for all URLs that use the "comingsoon" servlet --> <filter-mapping> <filter-name>logSpecial</filter-name> <servlet-name>comingsoon</servlet-name> </filter-mapping> Note: Filters are not invoked on static assets, even if the path matches a filter-mapping pattern.
- For example, if the user accesses the URL path /help/accounts/ , the following <welcome-file-list> element in the deployment descriptor tells the server to check for help/accounts/index.jsp and help/accounts/index.html before reporting that the URL does not exist: <welcome-file-list> <welcome-file>index.jsp</welcome-file> <welcome-file>index.html</welcome-file> </welcome-file-list> Filters A filter is a class that acts on a request like a servlet, but can allow the handling of the request to continue with other filters or servlets.
- The URL path cannot start with a period ( . ). <servlet-mapping> <servlet-name>redteam</servlet-name> <url-pattern>/red/ </url-pattern> </servlet-mapping> <servlet-mapping> <servlet-name>blueteam</servlet-name> <url-pattern>/blue/ </url-pattern> </servlet-mapping> With this example, a request for the URL http://www.example.com/blue/teamProfile is handled by the TeamServlet class, with the teamColor parameter equal to blue and the bgColor parameter equal to #0000CC .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- This can impact class loading order, so if your app depends on a certain order using the former false default, you can set this to false . delete-jsps false true compile-encoding utf-8 utf-8 Include and exclude syntax Path patterns are specified using zero or more <include> and <exclude> elements.
- If you want to disallow the use of HTTPS for the application, put the following in the appengine-web.xml file: <ssl-enabled>false</ssl-enabled> There is no way to disallow HTTPS for some URL paths and not others in the Java runtime environment. <static-error-handlers> Optional.
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Package google.golang.org/appengine/v2/blobstore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- UploadURLOptions type UploadURLOptions struct { MaxUploadBytes int64 // optional MaxUploadBytesPerBlob int64 // optional // StorageBucket specifies the Google Cloud Storage bucket in which // to store the blob. // This is required if you use Cloud Storage instead of Blobstore. // Your application must have permission to write to the bucket. // You may optionally specify a bucket name and path in the format // "bucket name/path", in which case the included path will be the // prefix of the uploaded object's name.
- URL , error ) UploadURL creates an upload URL for the form that the user will fill out, passing the application path to load when the POST of the form is completed.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
- Time datastore:"creation" Filename string datastore:"filename" Size int64 datastore:"size" MD5 string datastore:"md5 hash" // ObjectName is the Google Cloud Storage name for this blob.

