---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T21:44:03.373Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Java local development server native URLStreamHandler default"
feature_slug: "java-local-development-server-native-urlstreamhandler-default"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "native url-stream-handler"
  - "url stream handler setting"
  - "url-stream-handler"
  - "native URL handler"
  - "dev server URL handler"
  - "URLStreamHandler default"
  - "Java local development server"
---

# Java local development server native URLStreamHandler default

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

The Java local development server now defaults the url-stream-handler configuration parameter to native behavior.

## Extended Definition

In App Engine standard environment Java, the `appengine-web.xml` setting `<url-stream-handler>` is an optional configuration element that controls how `URL.openConnection` and related methods handle HTTP/HTTPS transport. When this element is explicitly set to `urlfetch`, URL connections use URL Fetch for those protocols. The provided excerpt does not state the default value of this setting or explicitly confirm that a native behavior became the default on 2017-12-14.

## Evidence Summary

The cited page documents the `url-stream-handler` option and explicitly states that setting it to `urlfetch` makes URL connections use URL Fetch, but it does not provide explicit evidence of a native default-value change.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- If you set url-stream-handler to urlfetch , URL.openConnection and related methods will use URL Fetch for http and https transport. <url-stream-handler>urlfetch</url-stream-handler> <version> The <version> element contains the version identifier for the latest version of the app's code.
- For example: <system-properties> <property name="appengine.use.virtualthreads" value="true"/> </system-properties> For more information regarding thread support, see Jetty 12 – Virtual Threads Support . <url-stream-handler> Optional.

