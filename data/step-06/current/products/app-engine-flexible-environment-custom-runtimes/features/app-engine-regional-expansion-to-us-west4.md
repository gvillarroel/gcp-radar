---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.608Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine regional expansion to us-west4"
feature_slug: "app-engine-regional-expansion-to-us-west4"
latest_feature_date: "2020-04-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
keywords:
  - "app"
  - "engine"
  - "regional"
  - "expansion"
  - "us"
  - "west4"
  - "became"
  - "available"
---

# App Engine regional expansion to us-west4

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

App Engine became available in the us-west4 (Las Vegas, NV) region.

## Extended Definition

App Engine became available in the us-west4 (Las Vegas, NV) region.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)

## Supporting Pages

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- In the Go API, the appengine.IsOverQuota function reports whether an error represents an API call failure due to insufficient available quota.
- Resource Daily limit Maximum rate UrlFetch API calls 860,000,000 calls 660,000 calls/minute UrlFetch data sent 4.5 TB 3,600 MB/minute UrlFetch data received 4.5 TB 3,600 MB/minute Networking limits The following networking limits apply to App Engine: Outbound connections per second per instance: 500 (cannot be increased) Outbound DNS resolutions per second per instance: 100 (cannot be increased) Maximum packets per second per instance: 80,000 Maximum bits per second per instance: 100,000,000 Maximum worker connections in Nginx per instance: 4,096 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Resource or API call Description System Limit Shared Centi Memcache Compute Units Per Region Per Minute For each project per region and minute, the available centi-MCUs, which are 1/100ths of an Memcache Compute Unit .
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that App Engine provides the JavaServer Pages Standard Tag Library (JSTL) , and you do not need to install it. <taglib> <taglib-uri>/escape</taglib-uri> <taglib-location>/WEB-INF/escape-tags.tld</taglib-location> </taglib> The welcome file list When the URLs for your site represent paths to static files or JSPs in your WAR, it is often a good idea for paths to directories to do something useful as well.
- Specifically, you cannot customize the 404 response page when no servlet mapping is defined for a URL, the 403 quota error page, or the 500 server error page that appears after an App Engine internal error. web.xml features not supported The following web.xml features are not supported by App Engine: App Engine supports the <load-on-startup> element for servlet declarations.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring the web.xml deployment descriptor Stay organized with collections Save and categorize content based on your preferences.
- For example, if an app has a JSP file named start.jsp in a subdirectory named register/ in its WAR, App Engine compiles it and maps it to the URL path /register/start.jsp .

### "Customizing the .NET Runtime \_|\_ App Engine flexible environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/customizing-the-dotnet-runtime)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Customizing the .NET Runtime Stay organized with collections Save and categorize content based on your preferences.

