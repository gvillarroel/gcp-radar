---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.223Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Region ID in app URLs"
feature_slug: "region-id-in-app-urls"
latest_feature_date: "2020-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/config/appref"
keywords:
  - "urls"
  - "include"
  - "improve"
  - "region"
---

# Region ID in app URLs

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine app URLs can include a region ID to improve request routing efficiency and reliability.

## Extended Definition

App Engine app URLs can include a region ID to improve request routing efficiency and reliability.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- This can impact class loading order, so if your app depends on a certain order using the former false default, you can set this to false . delete-jsps false true compile-encoding utf-8 utf-8 Include and exclude syntax Path patterns are specified using zero or more <include> and <exclude> elements.
- Specify the fully-qualified name of a connector in the <name> element: <vpc-access-connector> <name>projects/[PROJECT ID]/locations/[REGION]/connectors/[CONNECTOR NAME]</name> </vpc-access-connector> For more information, see Connecting to internal resources in a VPC network .

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All of these URLs include the region ID. gcloud When you deploy an app or service, the gcloud app deploy command displays the URL after the deployment succeeds.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- You can use the following tools to see the region ID of your app: Console In the Google Cloud console, you can view the URLs for your app's Instances , Services , and Versions .

### "App Engine app.yaml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/config/appref](https://docs.cloud.google.com/appengine/docs/standard/java/config/appref)
- Source ID: `site-docs-reference-4`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- For apps created after February 2020, REGION ID .r is included in App Engine URLs.
- All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. static files A static file pattern handler associates a URL pattern with paths to static files uploaded with the application.
- To target a specific version of your app using the REGION ID .r.appspot.com domain, you replace the periods that would usually separate the subdomain components of the URL with the string " -dot- ", for example: https:// VERSION ID -dot-default-dot- PROJECT ID .
- Example vpc access connector : name : "projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME " egress setting : all-traffic Handlers element The handlers element provides a list of URL patterns and descriptions of how they should be handled.

