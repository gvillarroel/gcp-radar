---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:21:33.500Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "App Engine multi-zonal deployment support"
feature_slug: "app-engine-multi-zonal-deployment-support"
latest_feature_date: "2016-11-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor"
  - "https://docs.cloud.google.com/appengine/docs/flexible/configuration-files"
  - "https://docs.cloud.google.com/appengine/docs/flexible/quotas"
keywords:
  - "app"
  - "engine"
  - "multi"
  - "zonal"
  - "deployment"
  - "flexible"
  - "environment"
  - "added"
---

# App Engine multi-zonal deployment support

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

The App Engine flexible environment added multi-zonal deployment capability.

## Extended Definition

The App Engine flexible environment added multi-zonal deployment capability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)

## Supporting Pages

### "Configuring the web.xml deployment descriptor \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor](https://docs.cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor)
- Source ID: `site-docs-reference-required-3`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring the web.xml deployment descriptor Stay organized with collections Save and categorize content based on your preferences.
- App Engine doesn't support JNDI environment variables ( <env-entry> ).
- Here is a simple filter implementation that logs a message, and passes control down the chain, which may include other filters or a servlet, as described by the deployment descriptor: package mysite.server; import java.io.IOException; import java.util.logging.Logger; import javax.servlet.Filter; import javax.servlet.FilterChain; import javax.servlet.FilterConfig; import javax.servlet.ServletException; import javax.servlet.ServletRequest; import javax.servlet.ServletResponse; public class LogFilterImpl implements Filter { private FilterConfig filterConfig; private static final Logger log = Logger.getLogger(LogFilterImpl.class.getName()); public void doFilter(ServletRequest request, ServletResponse response, FilterChain filterChain) throws IOException, ServletException { log.warning("Log filter processed a " + getFilterConfig().getInitParameter("logType") + " request"); filterChain.doFilter(request, response); } public FilterConfig getFilterConfig() { return filterConfig; } public void init(FilterConfig filterConfig) { this.filterConfig = filterConfig; } public void destroy() {} } Similar to servlets, you configure a filter in the deployment descriptor by declaring the filter with the <filter> element, then mapping it to a URL pattern with the <filter-mapping> element.
- The name for each servlet must be unique across the deployment descriptor. <servlet> <servlet-name>redteam</servlet-name> <servlet-class>mysite.server.TeamServlet</servlet-class> <init-param> <param-name>teamColor</param-name> <param-value>red</param-value> </init-param> <init-param> <param-name>bgColor</param-name> <param-value>#CC0000</param-value> </init-param> </servlet> <servlet> <servlet-name>blueteam</servlet-name> <servlet-class>mysite.server.TeamServlet</servlet-class> <init-param> <param-name>teamColor</param-name> <param-value>blue</param-value> </init-param> <init-param> <param-name>bgColor</param-name> <param-value>#0000CC</param-value> </init-param> </servlet> The <servlet-mapping> element specifies a URL pattern and the name of a declared servlet to use for requests whose URL matches the pattern.

### "Quotas and limits \_|\_ App Engine flexible environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/quotas](https://docs.cloud.google.com/appengine/docs/flexible/quotas)
- Source ID: `site-docs-reference-2`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Resources Send feedback Quotas and limits Stay organized with collections Save and categorize content based on your preferences.
- Quotas for the App Engine flexible environment When you deploy an application to the App Engine flexible environment, some Google Cloud resources are consumed.
- Both the standard environment and the flexible environment share the same limits for services and versions.
- Deployments In each App Engine application, you can deploy up to 10,000 times per day.

### "Structuring web services in App Engine \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/configuration-files](https://docs.cloud.google.com/appengine/docs/flexible/configuration-files)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Structuring web services in App Engine Stay organized with collections Save and categorize content based on your preferences.
- You can serve your app's static content directly from that app in App Engine, host your static content on a Google Cloud option like Cloud Storage, or use a third-party content delivery network (CDN).
- For example, you can name a configuration file after your service, or use unique names to represent each version of that particular service, like service1.yaml or app.flexible.yaml .
- If you are deploying several versions of a service, you can create multiple YAML files in the same directory to represent the configuration for each of your versions.

