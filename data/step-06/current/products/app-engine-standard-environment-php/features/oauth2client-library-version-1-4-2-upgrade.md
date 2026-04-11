---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:27.578Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "oauth2client library version 1.4.2 upgrade"
feature_slug: "oauth2client-library-version-1-4-2-upgrade"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime"
keywords:
  - "oauth2client"
  - "library"
  - "upgrade"
  - "upgraded"
  - "been"
  - "has"
  - "version"
  - "the"
---

# oauth2client library version 1.4.2 upgrade

Product: App Engine standard environment PHP
Coverage: LOW

## Step 02 Summary

The oauth2client library has been upgraded to version 1.4.2.

## Extended Definition

The oauth2client library has been upgraded to version 1.4.2.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)

## Supporting Pages

### "The deployment descriptor: web.xml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/webxml)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A tag library has a path to the JSP Tag Library Descriptor (TLD) file ( <taglib-location> ) and a URI that JSPs use to select the library for loading ( <taglib-uri> ).
- To learn more about your configuration options, see Upgrade an existing application . v21 and later (EE10) This filter class implements the jakarta.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import jakarta.servlet.Filter ; import jakarta.servlet.FilterChain ; import jakarta.servlet.FilterConfig ; import jakarta.servlet.ServletException ; import jakarta.servlet.ServletRequest ; import jakarta.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } v21 (EE8) This filter class implements the javax.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import javax.servlet.Filter ; import javax.servlet.FilterChain ; import javax.servlet.FilterConfig ; import javax.servlet.ServletException ; import javax.servlet.ServletRequest ; import javax.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } v17 and earlier This filter class implements the javax.servlet.Filter interface with the doFilter() method. package mysite.server ; import java.io.IOException ; import java.util.logging.Logger ; import javax.servlet.Filter ; import javax.servlet.FilterChain ; import javax.servlet.FilterConfig ; import javax.servlet.ServletException ; import javax.servlet.ServletRequest ; import javax.servlet.ServletResponse ; public class LogFilterImpl implements Filter { private FilterConfig filterConfig ; private static final Logger log = Logger . getLogger ( LogFilterImpl . class . getName ()); public void doFilter ( ServletRequest request , ServletResponse response , FilterChain filterChain ) throws IOException , ServletException { log . warning ( "Log filter processed a " + getFilterConfig (). getInitParameter ( "logType" ) + " request" ); filterChain . doFilter ( request , response ); } public FilterConfig getFilterConfig () { return filterConfig ; } public void init ( FilterConfig filterConfig ) { this . filterConfig = filterConfig ; } public void destroy () {} } Similar to servlets, you configure a filter in the deployment descriptor by declaring the filter with the <filter> element, then mapping it to a URL pattern with the <filter-mapping> element.
- Jakarta EE 11 <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 1.xsd" version="6.1"> <servlet> <servlet-name>comingsoon</servlet-name> <servlet-class>mysite.server.ComingSoonServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>comingsoon</servlet-name> <url-pattern>/ </url-pattern> </servlet-mapping> </web-app> Jakarta EE 10 <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 0.xsd" version="6.0"> <servlet> <servlet-name>comingsoon</servlet-name> <servlet-class>mysite.server.ComingSoonServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>comingsoon</servlet-name> <url-pattern>/ </url-pattern> </servlet-mapping> </web-app> Java EE 8 <web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app 4 0.xsd" version="4.0"> <servlet> <servlet-name>comingsoon</servlet-name> <servlet-class>mysite.server.ComingSoonServlet</servlet-class> </servlet> <servlet-mapping> <servlet-name>comingsoon</servlet-name> <url-pattern>/ </url-pattern> </servlet-mapping> </web-app> If you factor your application into services, each service has its own configuration parameters.
- If you are migrating from Java 8 and need to use the legacy bundled services with the latest supported Java version, you must add the <app-engine-apis> element and set it to true in your web.xml file: < app - engine - apis>true < / app - engine - apis > Deployment descriptors A web application's deployment descriptor describes the classes, resources and configuration of the application and how the web server uses them to serve web requests.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- The Datastore's automatic ID allocator never assigns a key that has already been allocated (either through automatic ID allocation or through an explicit AllocateIDs call).
- Context ) EnableKeyConversion enables encoded key compatibility with the Cloud Datastore client library (cloud.google.com/go/datastore).
- In particular, whether the key has a zero StringID and a zero IntID. func ( Key) IntID func ( k Key ) IntID () int64 IntID returns the key's integer ID, which may be 0. func ( Key) Kind func ( k Key ) Kind () string Kind returns the key's kind (also known as entity type). func ( Key) MarshalJSON func ( k Key ) MarshalJSON () ([] byte , error ) func ( Key) Namespace func ( k Key ) Namespace () string Namespace returns the key's namespace. func ( Key) Parent func ( k Key ) Parent () Key Parent returns the key's parent key, which may be nil. func ( Key) String func ( k Key ) String () string String returns a string representation of the key. func ( Key) StringID func ( k Key ) StringID () string StringID returns the key's string ID (also known as an entity name or key name), which may be "". func ( Key) UnmarshalJSON func ( k Key ) UnmarshalJSON ( buf [] byte ) error KeyRangeCollisionError type KeyRangeCollisionError struct { // contains filtered or unexported fields } func ( KeyRangeCollisionError) Error func ( e KeyRangeCollisionError ) Error () string KeyRangeContentionError type KeyRangeContentionError struct { // contains filtered or unexported fields } func ( KeyRangeContentionError) Error func ( e KeyRangeContentionError ) Error () string Property type Property struct { // Name is the property name.
- Example code: // A and B are renamed to a and b. // A, C and J are not indexed. // D's tag is equivalent to having no tag at all (E). // I is ignored entirely by the datastore. // J has tag information for both the datastore and json packages. type TaggedStruct struct { A int datastore:"a,noindex" B int datastore:"b" C int datastore:",noindex" D int datastore:"" E int I int datastore:"-" J int datastore:",noindex" json:"j" } Structured Properties If the struct pointed to contains other structs, then the nested or embedded structs are flattened.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime](https://docs.cloud.google.com/appengine/docs/standard/go/upgrade-go-runtime)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Go second-generation runtimes (after end of support) : To upgrade to a supported version of Go , update the app.yaml file by specifying a version of Go that you want your app to run.
- You must upgrade your applications to the latest supported runtime version to continue receiving security updates and be eligible for technical support.
- The process of upgrading an existing app depends on the runtime version that your app currently uses: Go 1.11 (first-generation runtime) : You must migrate your app to the latest supported Go version .
- To migrate to the latest supported version of Go, see Migrate from Go 1.11 to the latest Go runtime .

