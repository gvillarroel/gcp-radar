---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.488Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Aggregated log exports"
feature_slug: "aggregated-log-exports"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/default-logs"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler"
keywords:
  - "aggregated"
  - "log"
  - "exports"
  - "logging"
  - "supports"
  - "organization"
  - "folder"
  - "billing"
---

# Aggregated log exports

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports organization, folder, and billing account sinks that export logs from included projects.

## Extended Definition

Cloud Logging supports organization, folder, and billing account sinks that export logs from included projects.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/default-logs](https://docs.cloud.google.com/logging/docs/agent/default-logs)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)

## Supporting Pages

### Default Logging agent logs \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/agent/default-logs](https://docs.cloud.google.com/logging/docs/agent/default-logs)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Log ID Source and configuration files syslog Linux syslog apache-access , apache-error Apache logs cassandra , cassandra-output Cassandra logs chef- Chef logs gitlab- gitlab logs jenkins Jenkins logs jetty- Jetty logs joomla Joomla logs magento- Magento logs mediawiki MediaWiki logs memcached memcached logs mongodb Mongodb logs mysql , mysql-slow MySQL logs nginx-access , nginx-error Nginx logs postgresql PostgreSQL logs puppet- Puppet Enterprise logs rabbitmq- RabbitMQ logs redis Redis logs redmine Redmine logs salt- Salt logs solr Solr logs sugarcrm SugarCRM logs tomcat , tomcat-localhost access log Tomcat logs zookeeper , zookeeper-trace Zookeeper logs Windows instances The following logs are pre-configured in the Logging agent running on Windows VM instances.
- Log ID Description fluent.info Logging agent messages winevt.raw Windows Event Log The logs from the agent are named projects/ [PROJECT ID] /logs/ [LOG ID] . [LOG ID] is a simple name such as syslog or redis .
- Home Documentation Observability Cloud Logging Guides Send feedback Default Logging agent logs Stay organized with collections Save and categorize content based on your preferences.
- Linux instances The following logs are pre-configured in the Logging agent running on Linux VM instances.

### ListLogScopesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse)
- Source ID: `site-docs-reference`
- Final score: 76
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Reference Send feedback ListLogScopesResponse Stay organized with collections Save and categorize content based on your preferences.

### "Class LoggingHandler (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.LoggingHandler)
- Source ID: `site-java-reference`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example using the following line: com.example.mypackage.handlers=com.google.cloud.logging.LoggingHandler See Also: Structured logging Inheritance java.lang.Object > Handler > LoggingHandler Inherited Members Object.clone() Object.equals(Object) Object.finalize() Object.getClass() Object.hashCode() Object.notify() Object.notifyAll() Object.toString() Object.wait() Object.wait(long) Object.wait(long,int) Handler.close() Handler.flush() Handler.getEncoding() Handler.getErrorManager() Handler.getFilter() Handler.getFormatter() Handler.getLevel() Handler.isLoggable(LogRecord) Handler.publish(LogRecord) Handler.reportError(String,Exception,int) Handler.setEncoding(String) Handler.setErrorManager(ErrorManager) Handler.setFilter(Filter) Handler.setFormatter(Formatter) Handler.setLevel(Level) Static Methods addHandler(Logger logger, LoggingHandler handler) public static void addHandler ( Logger logger , LoggingHandler handler ) Adds the provided LoggingHandler to logger .
- This handler will call each enhancer list whenever it builds a LogEntry instance (defaults to empty list). com.google.cloud.logging.LoggingHandler.resourceType the type name to use when creating the default MonitoredResource (defaults to auto-detected resource type, else "global"). com.google.cloud.logging.Synchronicity the synchronicity of the write method to use to write logs to the Cloud Logging service (defaults to Synchronicity#ASYNC ). com.google.cloud.logging.LoggingHandler.autoPopulateMetadata is a boolean flag that opts-out the population of the log entries metadata before the logs are sent to Cloud Logging (defaults to true ). com.google.cloud.logging.LoggingHandler.redirectToStdout is a boolean flag that opts-in redirecting the output of the handler to STDOUT instead of ingesting logs to Cloud Logging using Logging API (defaults to false ).
- If properties are not defined (or have invalid values) then the specified default values are used. com.google.cloud.logging.LoggingHandler.log the log name (defaults to java.log ). com.google.cloud.logging.LoggingHandler.level specifies the default level for the handler (defaults to Level.INFO ). com.google.cloud.logging.LoggingHandler.filter specifies the name of a Filter class to use (defaults to no filter). com.google.cloud.logging.LoggingHandler.formatter specifies the name of a Formatter class to use (defaults to SimpleFormatter ). com.google.cloud.logging.LoggingHandler.flushLevel specifies the flush log level.
- If it is null then a default resource is created based on the project ID and deployment environment. enhancers List < LoggingEnhancer > List of LoggingEnhancer instances used to enhance any LogEntry instances built by this handler. destination LogDestinationName the log destination LogDestinationName (see 'logName' parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry ) Methods close() public synchronized void close () Closes the handler and the associated Logging object.

