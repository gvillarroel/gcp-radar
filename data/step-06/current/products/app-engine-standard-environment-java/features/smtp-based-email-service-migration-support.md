---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.212Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "SMTP-based email service migration support"
feature_slug: "smtp-based-email-service-migration-support"
latest_feature_date: "2026-03-02"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access"
  - "https://docs.cloud.google.com/appengine/docs/standard/java/services/access"
keywords:
  - "email"
  - "smtp"
  - "migration"
  - "based"
---

# SMTP-based email service migration support

Product: App Engine standard environment Java
Coverage: LOW

## Step 02 Summary

App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet.

## Extended Definition

App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet; App Engine standard environment Java supports migrating from the legacy Mail API to SMTP-based email services such as SendGrid, Mailgun, or Mailjet.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- [https://docs.cloud.google.com/appengine/docs/standard/java/services/access](https://docs.cloud.google.com/appengine/docs/standard/java/services/access)

## Supporting Pages

### "Mail API for legacy bundled services \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid](https://docs.cloud.google.com/appengine/docs/standard/java/mail/sendgrid)
- Source ID: `site-docs-reference-4`
- Final score: 32
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go Java PHP Python Note: To improve email security and ensure reliable, high-volume email delivery, we recommend that you migrate from the legacy Mail API to an SMTP-based email service , such as SendGrid, Mailgun, or Mailjet.
- Who can send mail For security purposes, the sender address of a message must be one of the following: The Gmail or Google Workspace Account of the user who is currently signed in Any email address of the form anything@[MY PROJECT ID].appspotmail.com or anything@[MY PROJECT NUMBER].appspotmail.com Any email address listed in the Google Cloud console under Email API Authorized Senders All email addresses on the Email API Authorized Senders list need to be valid Gmail or Google-hosted domain accounts.
- App Administrators can add the following accounts to the list of Authorized Senders: Their own email address Any group for which they are an Owner or Manager Applications hosted in a Google Workspace domain: noreply@[DOMAIN].com , as long as noreply@[DOMAIN].com is a valid account (user or group).
- If the Mail service cannot deliver a message, or if a recipient's mail server returns a bounce message (for example, because there is no account for that address on that system), an error message can be sent by email to the address of the sender for the message.

### "Access legacy bundled services for Java 11+ \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/services/access)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- The following table indicates the environment variables that can be used to enable/disable/configure features, and the default values if they are not set: Env Var Description Type Default CPROF ENABLE Stackdriver Profiler boolean false GAE MEMORY MB Available memory size Set by App Engine or /proc/meminfo -400M HEAP SIZE RATIO Memory for the heap percent 80 HEAP SIZE MB Available heap size ${HEAP SIZE RATIO} % of ${GAE MEMORY MB} JAVA HEAP OPTS JVM heap args JVM args -Xms${HEAP SIZE MB}M -Xmx${HEAP SIZE MB}M JAVA GC OPTS JVM GC args JVM args -XX:+UseG1GC plus configuration JAVA USER OPTS JVM other args JVM args JAVA OPTS JVM args JVM args See below If not explicitly set, JAVA OPTS is defaulted to: JAVA OPTS:=-showversion \ $ JAVA HEAP OPTS \ $ JAVA GC OPTS \ $ JAVA USER OPTS When CPROF ENABLE is true, the default entrypoint adds the PROFILER AGENT as: -agentpath:/opt/cprof/profiler java agent.so=--logtostderr For example, if your application code needs more -add-opens flags, you can use the JAVA USER OPTS environment variable defined in the appengine-web.xml file: <env-variables> <env-var name="JAVA USER OPTS" value="--add-opens java.base/java.util=ALL-UNNAMED" /> </env-variables> Migration considerations You should be aware of the following considerations if you are migrating to a second-generation Java runtime and your app uses legacy bundled services: To test the legacy bundled services capabilities in your second-generation Java app, you can use the local development server .
- For example: java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED -showversion -Xms32M -Xmx204M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime We don't recommend changing this default entrypoint as the memory settings are calculated based on the instance type (F1, F2, F4) and memory available.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Java 11+ Stay organized with collections Save and categorize content based on your preferences.
- To migrate your app from the first-generation to the second-generation runtime, see Migrate from Java 8 to the latest Java runtime and the migration considerations section.

### "Access legacy bundled services for Java 11+ \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java/services/access](https://docs.cloud.google.com/appengine/docs/standard/java/services/access)
- Source ID: `site-docs-reference-required-7`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- The following table indicates the environment variables that can be used to enable/disable/configure features, and the default values if they are not set: Env Var Description Type Default CPROF ENABLE Stackdriver Profiler boolean false GAE MEMORY MB Available memory size Set by App Engine or /proc/meminfo -400M HEAP SIZE RATIO Memory for the heap percent 80 HEAP SIZE MB Available heap size ${HEAP SIZE RATIO} % of ${GAE MEMORY MB} JAVA HEAP OPTS JVM heap args JVM args -Xms${HEAP SIZE MB}M -Xmx${HEAP SIZE MB}M JAVA GC OPTS JVM GC args JVM args -XX:+UseG1GC plus configuration JAVA USER OPTS JVM other args JVM args JAVA OPTS JVM args JVM args See below If not explicitly set, JAVA OPTS is defaulted to: JAVA OPTS:=-showversion \ $ JAVA HEAP OPTS \ $ JAVA GC OPTS \ $ JAVA USER OPTS When CPROF ENABLE is true, the default entrypoint adds the PROFILER AGENT as: -agentpath:/opt/cprof/profiler java agent.so=--logtostderr For example, if your application code needs more -add-opens flags, you can use the JAVA USER OPTS environment variable defined in the appengine-web.xml file: <env-variables> <env-var name="JAVA USER OPTS" value="--add-opens java.base/java.util=ALL-UNNAMED" /> </env-variables> Migration considerations You should be aware of the following considerations if you are migrating to a second-generation Java runtime and your app uses legacy bundled services: To test the legacy bundled services capabilities in your second-generation Java app, you can use the local development server .
- For example: java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.nio.charset=ALL-UNNAMED -showversion -Xms32M -Xmx204M -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:+PrintCommandLineFlags -Dclasspath.runtimebase=/base/java runtime -Djava.class.path=/base/java runtime/runtime-main.jar -Djava.library.path=/base/java runtime: com/google/apphosting/runtime/JavaRuntimeMainWithDefaults --fixed application path=/workspace /base/java runtime We don't recommend changing this default entrypoint as the memory settings are calculated based on the instance type (F1, F2, F4) and memory available.
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Access legacy bundled services for Java 11+ Stay organized with collections Save and categorize content based on your preferences.
- To migrate your app from the first-generation to the second-generation runtime, see Migrate from Java 8 to the latest Java runtime and the migration considerations section.

