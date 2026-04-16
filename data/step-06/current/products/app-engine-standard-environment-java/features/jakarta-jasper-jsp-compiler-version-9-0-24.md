---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.877Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Jakarta Jasper JSP compiler version 9.0.24"
feature_slug: "jakarta-jasper-jsp-compiler-version-9-0-24"
latest_feature_date: "2019-12-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime"
keywords:
  - "jakarta"
  - "jasper"
  - "jsp"
  - "compiler"
  - "version"
  - "24"
  - "used"
  - "app"
---

# Jakarta Jasper JSP compiler version 9.0.24

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Jakarta Jasper JSP compiler used by App Engine was upgraded to version 9.0.24.

## Extended Definition

The Jakarta Jasper JSP compiler used by App Engine was upgraded to version 9.0.24.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)

## Supporting Pages

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- ModulesService modules = ModulesServiceFactory.getModulesService(); // Lookup the versions associated with the current service/module. for (String version : modules.getVersions(modules.getCurrentModule())) { // Process version. } See Also: com.google.appengine.api.modules.ModulesService com.google.appengine.api.oauth Provides a method for clients to access server resources on behalf of a resource owner, as well as a process for end-users to authorize third-party access to their server resources without sharing their credentials.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.taskqueue.jakarta Provides a mechanism to perform work initiated by a user request, outside of that request.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/search)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- ModulesService modules = ModulesServiceFactory.getModulesService(); // Lookup the versions associated with the current service/module. for (String version : modules.getVersions(modules.getCurrentModule())) { // Process version. } See Also: com.google.appengine.api.modules.ModulesService com.google.appengine.api.oauth Provides a method for clients to access server resources on behalf of a resource owner, as well as a process for end-users to authorize third-party access to their server resources without sharing their credentials.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: com.google.appengine.api.taskqueue.Queue , The Task Queue Java API in the Google App Engine Developer's Guide . com.google.appengine.api.taskqueue.jakarta Provides a mechanism to perform work initiated by a user request, outside of that request.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/upgrade-java-runtime)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 1.xsd" version="6.1"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 0.xsd" version="6.0"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- Upgrade Java on a compatible Enterprise Edition (EE) version To use Java 25 on Enterprise Edition 11 (EE 11) , or Java 21 on Enterprise Edition 10 (EE 10) , upgrade your application servlets and dependencies in your Maven and Gradle files to include the Jakarta namespace: Java 25 (EE 11) To use Java 25 on Enterprise Edition 11 (EE 11) , follow these steps: Change the version number in your web.xml configuration file to version=6.1 .
- To run your applications on Java EE 8, declare a new system-properties tag in your appengine-web.xml file with the non-default app.engine.use.EE8 configuration: <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Optional: Java version 21 and later includes support for virtual threads.

