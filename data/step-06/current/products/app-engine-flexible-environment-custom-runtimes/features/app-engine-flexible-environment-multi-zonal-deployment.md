---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:29.627Z"
product_name: "App Engine flexible environment custom runtimes"
product_slug: "app-engine-flexible-environment-custom-runtimes"
feature_name: "App Engine flexible environment multi-zonal deployment"
feature_slug: "app-engine-flexible-environment-multi-zonal-deployment"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/flexible/known-issues"
keywords:
  - "app"
  - "engine"
  - "flexible"
  - "environment"
  - "multi"
  - "zonal"
  - "deployment"
  - "gained"
---

# App Engine flexible environment multi-zonal deployment

Product: App Engine flexible environment custom runtimes
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment gained multi-zonal deployment support.

## Extended Definition

The App Engine flexible environment gained multi-zonal deployment support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)

## Supporting Pages

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring the web.xml deployment descriptor Stay organized with collections Save and categorize content based on your preferences.
- App Engine doesn't support JNDI environment variables ( <env-entry> ).
- Here is a simple filter implementation that logs a message, and passes control down the chain, which may include other filters or a servlet, as described by the deployment descriptor: package mysite.server; import java.io.IOException; import java.util.logging.Logger; import javax.servlet.Filter; import javax.servlet.FilterChain; import javax.servlet.FilterConfig; import javax.servlet.ServletException; import javax.servlet.ServletRequest; import javax.servlet.ServletResponse; public class LogFilterImpl implements Filter { private FilterConfig filterConfig; private static final Logger log = Logger.getLogger(LogFilterImpl.class.getName()); public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException { log.warning("Log filter processed a " + getFilterConfig().getInitParameter("logType") + " request"); filterChain.doFilter(request, response); } public FilterConfig getFilterConfig() { return filterConfig; } public void init(FilterConfig filterConfig) { this.filterConfig = filterConfig; } public void destroy() {} } Similar to servlets, you configure a filter in the deployment descriptor by declaring the filter with the <filter> element, then mapping it to a URL pattern with the <filter-mapping> element.
- The name for each servlet must be unique across the deployment descriptor. <servlet> <servlet-name>redteam</servlet-name> <servlet-class>mysite.server.TeamServlet</servlet-class> <init-param> <param-name>teamColor</param-name> <param-value>red</param-value> </init-param> <init-param> <param-name>bgColor</param-name> <param-value>#CC0000</param-value> </init-param> </servlet> <servlet> <servlet-name>blueteam</servlet-name> <servlet-class>mysite.server.TeamServlet</servlet-class> <init-param> <param-name>teamColor</param-name> <param-value>blue</param-value> </init-param> <init-param> <param-name>bgColor</param-name> <param-value>#0000CC</param-value> </init-param> </servlet> The <servlet-mapping> element specifies a URL pattern and the name of a declared servlet to use for requests whose URL matches the pattern.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).
- For example, you can name a configuration file after your service, or use unique names to represent each version of that particular service, like service1.yaml or app.flexible.yaml .
- If you are deploying several versions of a service, you can create multiple YAML files in the same directory to represent the configuration for each of your versions.

### Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/known-issues](https://docs.cloud.google.com/appengine/docs/flexible/known-issues)
- Source ID: `site-docs-reference-2`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Some events that may affect App Engine flexible environment minimum number of instances are: Rolling out updates to flexible environment instances Zonal failure (Stockout issues, such as when your region is at capacity for your selected CPU, etc.) App Engine flexible environment uses 3 zones to distribute your instances and in such a configuration, we recommend provisioning 50% more instances than required.
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Known issues in the App Engine flexible environment Stay organized with collections Save and categorize content based on your preferences.
- After you deploy a new version of an existing service in the App Engine flexible environment with gcloud app deploy , the "Count/sec" metric shown in the "Summary" graph of the App Engine dashboard may decrease significantly.
- If there is an organization policy on your project that restricts access to external IPs, you won't be able to deploy an App Engine flexible environment app with external IP addresses.

