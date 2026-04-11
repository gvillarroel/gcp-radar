---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:26:39.379Z"
product_name: "App Engine standard environment Ruby"
product_slug: "app-engine-standard-environment-ruby"
feature_name: "OverQuota error detail enrichment"
feature_slug: "overquota-error-detail-enrichment"
latest_feature_date: "2016-04-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "enrichment"
  - "overquota"
  - "exception"
  - "messages"
  - "detail"
  - "include"
  - "error"
  - "now"
---

# OverQuota error detail enrichment

Product: App Engine standard environment Ruby
Coverage: LOW

## Step 02 Summary

OverQuota exception messages now include error details when such details are available.

## Extended Definition

OverQuota exception messages now include error details when such details are available.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your constraint ID, because it could be exposed in error messages.
- Don't include PII or sensitive data in your description, because it could be exposed in error messages.
- Don't use personally identifiable information (PII) or sensitive data in display names because this name could be exposed in error messages.

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- The <error-page> element contains either an <error-code> element with an HTTP error code value (such as 500 ), or an <exception-type> element with the class name of the expected exception (such as java.io.IOException ).
- To learn more about your configuration options, see Upgrade an existing application . v21 and later (EE10) This filter class implements the jakarta.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import jakarta.servlet.Filter ; import jakarta.servlet.FilterChain ; import jakarta.servlet.FilterConfig ; import jakarta.servlet.ServletException ; import jakarta.servlet.ServletRequest ; import jakarta.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } v21 (EE8) This filter class implements the javax.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import javax.servlet.Filter ; import javax.servlet.FilterChain ; import javax.servlet.FilterConfig ; import javax.servlet.ServletException ; import javax.servlet.ServletRequest ; import javax.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } v17 and earlier This filter class implements the javax.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import javax.servlet.Filter ; import javax.servlet.FilterChain ; import javax.servlet.FilterConfig ; import javax.servlet.ServletException ; import javax.servlet.ServletRequest ; import javax.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } Similar to servlets, you configure a filter in the deployment descriptor by declaring the filter with the <filter> element, then mapping it to a URL pattern with the <filter-mapping> element.
- The admin role makes it easy to build administrator-only sections of your site. <security-constraint> <web-resource-collection> <web-resource-name>profile</web-resource-name> <url-pattern>/profile/ </url-pattern> </web-resource-collection> <auth-constraint> <role-name> </role-name> </auth-constraint> </security-constraint> <security-constraint> <web-resource-collection> <web-resource-name>admin</web-resource-name> <url-pattern>/admin/ </url-pattern> </web-resource-collection> <auth-constraint> <role-name>admin</role-name> </auth-constraint> </security-constraint> Note: G Suite domain administrators and App Engine domain administrators are not included in the admin role in this context.
- It also contains a <location> element containing the URL path of the resource to show when the error occurs. <error-page> <error-code>500</error-code> <location>/errors/servererror.jsp</location> </error-page> You can't configure custom error handlers for the following error conditions: 404 response page when no servlet mapping is defined for a URL.

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- To serve custom error pages, add a <static-error-handlers> section to your appengine-web.xml , as ins this example: <static-error-handlers> <handler file="default error.html" /> <handler file="over quota.html" error-code="over quota" /> </static-error-handlers> Warning : Make sure that the path to the error response file does not overlap with static file handler paths.
- If for some reason you prefer that your app not use precompilation, you can turn it off by adding the following to your appengine-web.xml file: <precompilation-enabled>false</precompilation-enabled> <module> Note: Modules are now named Services and services are still declared in appengine-web.xml files as modules, for example: <module>service name</module> .
- This can impact class loading order, so if your app depends on a certain order using the former false default, you can set this to false . delete-jsps false true compile-encoding utf-8 utf-8 Include and exclude syntax Path patterns are specified using zero or more <include> and <exclude> elements.

