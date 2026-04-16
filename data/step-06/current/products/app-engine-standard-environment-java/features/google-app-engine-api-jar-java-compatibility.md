---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.878Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "Google App Engine API JAR Java compatibility"
feature_slug: "google-app-engine-api-jar-java-compatibility"
latest_feature_date: "2019-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/getting-started"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager"
keywords:
  - "app"
  - "engine"
  - "jar"
  - "java"
  - "compatibility"
  - "now"
  - "compiled"
  - "target"
---

# Google App Engine API JAR Java compatibility

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The Google App Engine API JAR is now compiled for the Java 8 target.

## Extended Definition

The Google App Engine API JAR is now compiled for the Java 8 target.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- By default, the generated entrypoint for a F4 instance class (memory settings are calculated from the instance class) is equivalent to the following configuration: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <entrypoint> java -showversion -Xms32M -Xmx819M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED --add-opens java.logging/java.util.logging=ALL-UNNAMED --add-opens java.base/java.util.concurrent=ALL-UNNAMED -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime </entrypoint> </appengine-web-app> You can modify the configuration to add extra JVM process flags or define your own process to boot.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>F2</instance-class> <automatic-scaling> <target-cpu-utilization>0.65</target-cpu-utilization> <min-instances>5</min-instances> <max-instances>100</max-instances> <max-concurrent-requests>50</max-concurrent-requests> </automatic-scaling> </appengine-web-app> <basic-scaling> Optional.
- Example <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <application>simple-app</application> <module>default</module> <version>uno</version> <instance-class>B8</instance-class> <manual-scaling> <instances>5</instances> </manual-scaling> </appengine-web-app> Staging elements Much of the work done during a deployment occurs locally in a preparation step called staging , where JAR files are assembled, JSPs are compiled, and so forth.
- For more information regarding EE support, see Upgrade Java on a compatible Enterprise Edition (EE) version . <system-properties> <property name="appengine.use.EE11" value="true"/><!--only for Java 25--> </system-properties> Starting in Java 21, you can configure your Java web server to use virtual threads.

### "An Overview of the Admin API \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/getting-started](https://docs.cloud.google.com/appengine/docs/admin-api/getting-started)
- Source ID: `site-docs-reference-2`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Home Technology areas App Engine Admin API Overview Send feedback An Overview of the Admin API Stay organized with collections Save and categorize content based on your preferences.
- The Admin API provides programmatic access to several of the App Engine administrative operations that are found in the Google Cloud console .
- The App Engine Admin API is a RESTful API for managing your App Engine applications regardless of programming language.
- With the Admin API, you can manage your App Engine applications in manners that best suit your environment or process.

### "appengine-apis overview (5.0.0) \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager](https://docs.cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/ThreadManager)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- As an example, your application might, in a JSP file, have code like this: < % UserService userService = UserServiceFactory . getUserService (); if ( ! userService . isUserLoggedIn ()) { % > Please { @code ">log in >} <% } else { %> Welcome, <%= userService.getCurrentUser().getNickname(); %>! {@code ( " > log out > )} < % } % >> See Also: com.google.appengine.api.users.UserService , The Users Java API in the Google App Engine Developer's Guide . com.google.appengine.api.utils Provides common utility classes. com.google.appengine.api.utils.jakarta com.google.appengine.setup com.google.appengine.setup.timer com.google.appengine.setup.utils.http com.google.appengine.spi Support for alternate implementations of Google App Engine services.
- See Also: The URL Fetch Java API in the Google App Engine Developer's Guide ., com.google.appengine.api.urlfetch.URLFetchService com.google.appengine.api.users Provides facilities to check if a user has authenticated, retrieve their email address, and check if they are an administrator for this application.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.jakarta Provides a service to send email messages on behalf of administrators or authenticated users, also accessible via a JavaMail interface.
- See Also: JavaMail API , com.google.appengine.api.mail.MailService , The Mail Java API in the Google App Engine Developer's Guide com.google.appengine.api.mail.stdimpl com.google.appengine.api.memcache Provides fast but unreliable data storage, also accessible via a JCache interface.

