---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.224Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Jakarta Jasper JSP compiler 9.0.24"
feature_slug: "jakarta-jasper-jsp-compiler-9-0-24"
latest_feature_date: "2019-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
keywords:
  - "jakarta"
  - "jasper"
  - "compiler"
---

# Jakarta Jasper JSP compiler 9.0.24

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine standard environment Java includes Jakarta Jasper JSP compiler version 9.0.24.

## Extended Definition

App Engine standard environment Java includes Jakarta Jasper JSP compiler version 9.0.24.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)

## Supporting Pages

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 1.xsd" version="6.1"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 0.xsd" version="6.0"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- APIs and requires you to update your applications and third-party dependencies to use newer Java artifacts like the Jakarta namespace.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference-4`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 1.xsd" version="6.1"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 0.xsd" version="6.0"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- APIs and requires you to update your applications and third-party dependencies to use newer Java artifacts like the Jakarta namespace.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference-4`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.taskqueue.jakarta Provides a mechanism to perform work initiated by a user request, outside of that request.
- See Also: com.google.appengine.api.blobstore.BlobstoreService , The Blobstore Java API in the Google App Engine Developer's Guide . com.google.appengine.api.blobstore.jakarta Provides management and persistent storage of large, immutable byte arrays.

