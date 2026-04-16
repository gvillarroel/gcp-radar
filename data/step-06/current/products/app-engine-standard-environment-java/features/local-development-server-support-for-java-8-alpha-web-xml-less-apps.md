---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.903Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Local development server support for Java 8 alpha web.xml-less apps"
feature_slug: "local-development-server-support-for-java-8-alpha-web-xml-less-apps"
latest_feature_date: "2017-03-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration"
keywords:
  - "local"
  - "development"
  - "server"
  - "java"
  - "alpha"
  - "web"
  - "xml"
  - "less"
---

# Local development server support for Java 8 alpha web.xml-less apps

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

Enabled Java 8 alpha applications without a web.xml file to run in the local development server.

## Extended Definition

Enabled Java 8 alpha applications without a web.xml file to run in the local development server.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The appengine-web.xml file can define environment variables that are set when the application is running. <env-variables> <env-var name="DEFAULT ENCODING" value="UTF-8" /> </env-variables> To avoid conflicts with your local environment, the development server does not set environment variables based on this file, and requires that the local environment have these variables already set to matching values. export DEFAULT ENCODING = "UTF-8" dev appserver war When deployed to App Engine, the environment is created with these variables already set.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.
- However, these files and directories will still be accessible to your application when running on the local Development Server.

### "Access legacy bundled services for Java 11+ \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table indicates the environment variables that can be used to enable/disable/configure features, and the default values if they are not set: Env Var Description Type Default CPROF ENABLE Stackdriver Profiler boolean false GAE MEMORY MB Available memory size Set by App Engine or /proc/meminfo -400M HEAP SIZE RATIO Memory for the heap percent 80 HEAP SIZE MB Available heap size ${HEAP SIZE RATIO} % of ${GAE MEMORY MB} JAVA HEAP OPTS JVM heap args JVM args -Xms${HEAP SIZE MB}M -Xmx${HEAP SIZE MB}M JAVA GC OPTS JVM GC args JVM args -XX:+UseG1GC plus configuration JAVA USER OPTS JVM other args JVM args JAVA OPTS JVM args JVM args See below If not explicitly set, JAVA OPTS is defaulted to: JAVA OPTS:=-showversion \ $ JAVA HEAP OPTS \ $ JAVA GC OPTS \ $ JAVA USER OPTS When CPROF ENABLE is true, the default entrypoint adds the PROFILER AGENT as: -agentpath:/opt/cprof/profiler java agent.so=--logtostderr For example, if your application code needs more -add-opens flags, you can use the JAVA USER OPTS environment variable defined in the appengine-web.xml file: <env-variables> <env-var name="JAVA USER OPTS" value="--add-opens java.base/java.util=ALL-UNNAMED" /> </env-variables> Migration considerations You should be aware of the following considerations if you are migrating to a second-generation Java runtime and your app uses legacy bundled services: To test the legacy bundled services capabilities in your second-generation Java app, you can use the local development server .
- Add the following settings in your appengine-web.xml file depending on the Java version: Java 25 (EE 11) <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java25</runtime> <system-properties> <property name="appengine.use.EE11" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Java 21 (EE 10) <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java21</runtime> <system-properties> <property name="appengine.use.EE10" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> Java 17 (EE 8) <?xml version="1.0" encoding="utf-8"?> <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java17</runtime> <system-properties> <property name="appengine.use.EE8" value="true"/> </system-properties> <app-engine-apis>true</app-engine-apis> </appengine-web-app> To specify the legacy bundled services as a dependency, add the following lines in your pom.xml file: <dependency> <groupId>com.google.appengine</groupId> <artifactId>appengine-api-1.0-sdk</artifactId> <version>2.0.31</version> <!-- or later--> </dependency> If your app uses a web.xml file, you must add the <app-engine-apis> element and set it to true : <app-engine-apis>true</app-engine-apis> To deploy your Java 25 app, run the mvn appengine:deploy command, or the gcloud app deploy /my app/WEB-INF/appengine-web.xml command on a compiled and staged web application.
- For example: java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED -showversion -Xms32M -Xmx204M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime We don't recommend changing this default entrypoint as the memory settings are calculated based on the instance type (F1, F2, F4) and memory available.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Java 11+ Stay organized with collections Save and categorize content based on your preferences.

### "Upgrade an existing application \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration](https://docs.cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Java runtime compatibility By default, App Engine includes an EE embedded web server in your Java project.
- Starting from Java 25, App Engine the EE web server is installed during deployment.
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 1.xsd" version="6.1"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......
- For example: <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/web-app 6 0.xsd" version="6.0"> ... </web-app> Rename your application servlets and dependencies from javax.servlet. to jakarta.servlet. : import jakarta.servlet.ServletException ; import jakarta.servlet.annotation.WebServlet ; import jakarta.servlet.http.Cookie ; import jakarta.servlet.http.HttpServlet ; import jakarta.servlet.http.HttpServletRequest ; import jakarta.servlet.http.HttpServletResponse ; @WebServlet ( name = "viewer" , urlPatterns = { "/view" }) public class MyServlet extends HttpServlet { ......

