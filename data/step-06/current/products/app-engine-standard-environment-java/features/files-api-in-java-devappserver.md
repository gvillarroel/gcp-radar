---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.267Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Files API in Java DevAppServer"
feature_slug: "files-api-in-java-devappserver"
latest_feature_date: "2015-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "devappserver"
  - "longer"
  - "files"
  - "supports"
---

# Files API in Java DevAppServer

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Java DevAppServer no longer supports the Files API.

## Extended Definition

The Java DevAppServer no longer supports the Files API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. static files A static file pattern handler associates a URL pattern with paths to static files uploaded with the application.
- The combined length of VERSION-dot-SERVICE-dot-PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.
- Example: handlers : All URLs beginning with /stylesheets are treated as paths to static files in the stylesheets/ directory. - url : /stylesheets static dir : stylesheets ... static files Optional.

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java11/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Example The following is an example of an app.yaml file: runtime : python314 instance class : F2 env variables : BUCKET NAME : "example-gcs-bucket" handlers : Matches requests to /images/... to files in static/images/... - url : /images static dir : static/images - url : /. secure : always redirect http response code : 301 script : auto The following table provides YAML examples of available fields in an app.yaml file: Runtime and app elements Element Description app engine apis Optional.
- A high maximum means users might wait longer for their requests to be served (if there are pending requests and no idle instances to serve them), but your application will cost less to run. min pending latency An optional element you can set to specify the minimum amount of time that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. static files A static file pattern handler associates a URL pattern with paths to static files uploaded with the application.
- The combined length of VERSION-dot-SERVICE-dot-PROJECT ID , where VERSION is the name of your version, SERVICE is the name of your service, and PROJECT ID is your project ID, cannot be longer than 63 characters and cannot start or end with a hyphen.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- If enable-jar-splitting is enabled, all files that match the suffixes will be excluded from all JARs. <disable jar jsps> Don't jar classes generated from JSPs. (Default: false). <enable-jar-classes> Jar the contents of WEB-INF/classes. (Default: true). <delete-jsps> Delete the JSP source files after compilation. (Default: true). <compile-encoding> Input encoding of source files for compilation. (Default: utf-8).
- If for some reason you prefer that your app not use precompilation, you can turn it off by adding the following to your appengine-web.xml file: <precompilation-enabled>false</precompilation-enabled> <module> Note: Modules are now named Services and services are still declared in appengine-web.xml files as modules, for example: <module>service name</module> .

