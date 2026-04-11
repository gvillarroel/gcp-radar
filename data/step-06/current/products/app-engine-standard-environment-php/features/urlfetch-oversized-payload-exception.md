---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.579Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "URLFetch oversized payload exception"
feature_slug: "urlfetch-oversized-payload-exception"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
keywords:
  - "requestpayloadtoolargeexception"
  - "oversized"
  - "urlfetch"
  - "raises"
  - "exception"
  - "payload"
  - "when"
  - "now"
---

# URLFetch oversized payload exception

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed supported size limits.

## Extended Definition

URLFetch now raises RequestPayloadTooLargeException when request payloads exceed supported size limits.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The following example demonstrates how to designate all png files as static files (except those in the data/ directory and all of its subdirectories): < static - files > < include path = "/ .png" / > < exclude path = "/data/ .png" / > < / static - files > You can also set HTTP headers to use when responding to requests to these static resources. < static - files > < include path = "/my static-files" > < http - header name = "Access-Control-Allow-Origin" value = "http://example.org" / > < / include > < / static - files > Note: If the path string doesn't start with a slash, then the HTTP headers, if any, work on App Engine but do not work on the Development Server.
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- The appengine-web.xml file can define system properties and environment variables that are set when the application is running. <system-properties> <property name="myapp.maximum-message-length" value="140" /> <property name="myapp.notify-every-n-signups" value="1000" /> <property name="myapp.notify-url" value="http://www.example.com/signupnotify" /> </system-properties> <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> Optional.
- If for some reason you prefer that your app not use precompilation, you can turn it off by adding the following to your appengine-web.xml file: <precompilation-enabled>false</precompilation-enabled> <module> Note: Modules are now named Services and services are still declared in appengine-web.xml files as modules, for example: <module>service name</module> .

### "Package google.golang.org/appengine/v2/urlfetch (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/urlfetch)
- Source ID: `site-docs-reference`
- Final score: 45
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Reference Send feedback Package google.golang.org/appengine/v2/urlfetch (v2.0.6) Stay organized with collections Save and categorize content based on your preferences.
- New ( "urlfetch: truncated body" ) ErrTruncatedBody is the error returned after the final Read() from a response's Body if the body has been truncated by App Engine's proxy.
- Package urlfetch provides an http.RoundTripper implementation for fetching URLs via App Engine's urlfetch service.
- Client Client returns an http.Client using a default urlfetch Transport.

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The server can display an alternate page location when it's about to send a particular HTTP status code, or when a servlet raises a particular Java exception.
- To learn more about your configuration options, see Upgrade an existing application . v21 and later (EE10) This filter class implements the jakarta.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import jakarta.servlet.Filter ; import jakarta.servlet.FilterChain ; import jakarta.servlet.FilterConfig ; import jakarta.servlet.ServletException ; import jakarta.servlet.ServletRequest ; import jakarta.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } v21 (EE8) This filter class implements the javax.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import javax.servlet.Filter ; import javax.servlet.FilterChain ; import javax.servlet.FilterConfig ; import javax.servlet.ServletException ; import javax.servlet.ServletRequest ; import javax.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } v17 and earlier This filter class implements the javax.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import javax.servlet.Filter ; import javax.servlet.FilterChain ; import javax.servlet.FilterConfig ; import javax.servlet.ServletException ; import javax.servlet.ServletRequest ; import javax.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } Similar to servlets, you configure a filter in the deployment descriptor by declaring the filter with the <filter> element, then mapping it to a URL pattern with the <filter-mapping> element.
- The <filter> element contains a <filter-name> , <filter-class> , and optional <init-param> elements. <filter> <filter-name>logSpecial</filter-name> <filter-class>mysite.server.LogFilterImpl</filter-class> <init-param> <param-name>logType</param-name> <param-value>special</param-value> </init-param> </filter> The <filter-mapping> element contains a <filter-name> that matches the name of a declared filter, and either a <url-pattern> element for applying the filter to URLs, or a <servlet-name> element that matches the name of a declared servlet for applying the filter whenever the servlet is called. <!-- Log for all URLs ending in ".special" --> <filter-mapping> <filter-name>logSpecial</filter-name> <url-pattern> .special</url-pattern> </filter-mapping> <!-- Log for all URLs that use the "comingsoon" servlet --> <filter-mapping> <filter-name>logSpecial</filter-name> <servlet-name>comingsoon</servlet-name> </filter-mapping> Note: Filters are not invoked on static assets, even if the path matches a filter-mapping pattern.
- It also contains a <location> element containing the URL path of the resource to show when the error occurs. <error-page> <error-code>500</error-code> <location>/errors/servererror.jsp</location> </error-page> You can't configure custom error handlers for the following error conditions: 404 response page when no servlet mapping is defined for a URL.

