---
title: "Java \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/client-libraries/java
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/client-libraries/java
  title: "Java \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Java
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google provides a Java client library for interacting with the Ad Manager API, which is recommended for use with Apache Maven or Gradle.
The Java client library uses OAuth2 and Application Default Credentials (ADC) for authentication, searching for credentials in specific locations.
You can make requests using the ServiceClient object for each service, with examples provided for synchronous methods.
To log HTTP requests and responses, configure the java.util.logging logger for com.google.api.client.http.HttpTransport to a CONFIG level or higher, with options for JUL and Log4j.
Ad Manager API errors are subclasses of ApiException and include ErrorDetails with unique error codes and request IDs for troubleshooting.
Google provides a Java client library for interacting with the Ad Manager API.
We recommend using the client library with Apache Maven or Gradle.
To get started, create a new project in the IDE of your choice or add the
dependency to an existing project. Google publishes client library artifacts to
the Maven central repository as
com.google.api-ads/ad-manager .
Maven
<!-- pom.xml -->
<dependency>
<groupId>com.google.api-ads</groupId>
<artifactId>ad-manager</artifactId>
<version>0.1.0</version>
</dependency>
Gradle
implementation 'com.google.api-ads:ad-manager:0.1.0'
Configure credentials
The Java client library uses OAuth2 and Application Default Credentials
(ADC) to authenticate.
ADC searches for credentials in order in the following locations:
GOOGLE_APPLICATION_CREDENTIALS environment variable.
User credentials set up through the Google Cloud CLI (gcloud CLI).
When running on Google Cloud, the service account attached to the Google Cloud resource.
For creating and configuring your ADC credentials, see
Authentication .
Make your first request
Each service has a ServiceClient object with both synchronous and asynchronous
methods for each REST method. The following example reads a Network
synchronously.
import com.google.ads.admanager.v1.GetNetworkRequest ;
import com.google.ads.admanager.v1.Network ;
import com.google.ads.admanager.v1.NetworkName ;
import com.google.ads.admanager.v1.NetworkServiceClient ;
public class SyncGetNetwork {
public static void main ( String [] args ) throws Exception {
syncGetNetwork ();
}
public static void syncGetNetwork () throws Exception {
try ( NetworkServiceClient networkServiceClient = NetworkServiceClient . create ()) {
GetNetworkRequest request =
GetNetworkRequest . newBuilder ()
. setName ( NetworkName . of ( "[NETWORK_CODE]" ). toString ())
. build ();
Network response = networkServiceClient . getNetwork ( request );
}
}
} SyncGetNetwork . java
For examples of other methods and resources, see the GitHub repository
googleapis/google-cloud-java .
Log HTTP requests and responses
The com.google.api.client.http.HttpTransport class makes all HTTP requests.
This class uses
java.util.logging
(JUL) for logging HTTP request and response details, including URL, headers, and
content.
To enable logging, set the logger for this class to a log level of
CONFIG or higher. The steps for this differ depending on which logging
implementation you use.
JUL
To enable logging, set com.google.api.client.http.level to CONFIG or
higher in your logging.properties file.
handlers=java.util.logging.ConsoleHandler
com.google.api.client.http.level=CONFIG
java.util.logging.ConsoleHandler.level=CONFIG
Alternatively, you can enable logging in your Java code.
import com.google.api.client.http.HttpTransport ;
import java.util.logging.ConsoleHandler ;
import java.util.logging.Level ;
import java.util.logging.Logger ;
public static void enableLogging () {
Logger logger = Logger . getLogger ( HttpTransport . class . getName ());
logger . setLevel ( Level . CONFIG );
ConsoleHandler handler = new ConsoleHandler ();
handler . setLevel ( Level . CONFIG );
logger . addHandler ( handler );
}
Log4j
If you use Log4j for logging, you can use the
Log4j JDK Logging Adapter
to log JUL messages. This can be configured through a SystemProperty or by
using the Log4jBridgeHandler and a JUL logging.properties file.
System Property
-Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager
Log4j Bridge Handler
handlers = org.apache.logging.log4j.jul.Log4jBridgeHandler
org.apache.logging.log4j.jul.Log4jBridgeHandler.propagateLevels = true
These settings write Ad Manager API logs to any Logger with a level of
CONFIG or higher. The following example log4j2.xml file configures a
Logger that writes to System.out .
<?xml version="1.0" encoding="UTF-8"?>
<Configuration>
<Appenders>
<Console name="Console" target="SYSTEM_OUT">
<PatternLayout pattern="%m%n"/>
</Console>
</Appenders>
<Loggers>
<Logger name="com.google.api.client.http.HttpTransport" level="debug">
<AppenderRef ref="Console"/>
</Logger>
<Root level="error">
<AppenderRef ref="Console"/>
</Root>
</Loggers>
</Configuration>
Handle errors
All Ad Manager API errors are subclasses of
ApiException
in the Java client library.
All errors except 404 Not Found and 401 Unauthorized contain ErrorDetails
with additional information.
Parse errors
The error reason field uniquely identifies error types. Use
this field to determine how to handle the error.
ErrorDetails errorDetails = apiException . getErrorDetails ();
if ( errorDetails != null ) {
// Unique error code in UPPER_SNAKE_CASE.
String errorCode = errorDetails . getReason ();
}
Ad Manager API errors also include a unique request_id you can
provide to support for assistance with
troubleshooting. The following example extracts the
request_id .
ErrorDetails errorDetails = apiException . getErrorDetails ();
if ( errorDetails != null && errorDetails . getRequestInfo () != null ) {
// Unique request identifier.
String requestId = errorDetails . getRequestInfo (). getRequestId ();
}
Construct resource names
The client library provides helper classes for building resource names from
IDs.
import com.google.ads.admanager.v1.OrderName ;
// ...
// Constructs a String in the format:
// "networks/{networkCode}/orders/{orderId}"
OrderName . of ( "123" , "789" );
Configure proxy settings
The Java client library respects both http.proxyHost and https.proxyHost
System Property settings. For more details on these settings, see
Java networking and Proxies .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["The Google Ad Manager API's Java client library, accessible via Maven or Gradle, uses OAuth2 and Application Default Credentials (ADC) for authentication, sourcing credentials from the environment, gcloud CLI, or Google Cloud resources. It facilitates API interaction through `ServiceClient` objects, offering synchronous and asynchronous methods. Logging HTTP requests/responses is enabled through `java.util.logging` or Log4j. The client handles errors, identified by unique error codes and `request_id`, and offers resource name construction tools. Proxy settings are configurable using `http.proxyHost` and `https.proxyHost`.\n"]]
