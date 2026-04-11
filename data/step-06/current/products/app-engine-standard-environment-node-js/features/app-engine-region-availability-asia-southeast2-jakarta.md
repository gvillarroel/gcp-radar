---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T22:04:50.072Z"
product_name: "App Engine standard environment Node.js"
product_slug: "app-engine-standard-environment-node-js"
feature_name: "App Engine region availability: asia-southeast2 (Jakarta)"
feature_slug: "app-engine-region-availability-asia-southeast2-jakarta"
latest_feature_date: "2020-06-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
keywords:
  - "asia-southeast2 launch"
  - "App Engine in asia-southeast2"
  - "new Jakarta region support"
  - "asia-southeast2 availability"
  - "asia-southeast2"
  - "Jakarta region"
  - "Jakarta"
---

# App Engine region availability: asia-southeast2 (Jakarta)

Product: App Engine standard environment Node.js
Coverage: LOW

## Step 02 Summary

App Engine became available in the asia-southeast2 (Jakarta) region.

## Extended Definition

App Engine became available in the asia-southeast2 (Jakarta) region.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 1.xsd" version="6.1"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 0.xsd" version="6.0"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- APIs and requires you to update your applications and third-party dependencies to use newer Java artifacts like the Jakarta namespace.

