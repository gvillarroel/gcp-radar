---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.573Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "HTTP request size alignment in load balancing logs"
feature_slug: "http-request-size-alignment-in-load-balancing-logs"
latest_feature_date: "2017-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/agent/logging/installation"
  - "https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging"
keywords:
  - "http"
  - "request"
  - "size"
  - "alignment"
  - "in"
  - "load"
  - "balancing"
  - "logs"
---

# HTTP request size alignment in load balancing logs

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

HTTP(S) load balancing logging aligns httpRequest.requestSize with Stackdriver Monitoring API metrics.

## Extended Definition

HTTP(S) load balancing logging aligns httpRequest.requestSize with Stackdriver Monitoring API metrics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging)

## Supporting Pages

### "Installing the Cloud Logging agent on individual VMs \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/logging/docs/agent/logging/installation](https://docs.cloud.google.com/logging/docs/agent/logging/installation)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Alternatively, you can browse to the following URL to download and run the agent's installer: https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe Caution: You must download the installer to a non-system directory, such as C:\Users\[USERNAME] .
- Configure an HTTP proxy If you use an HTTP proxy for proxying requests to the Logging and Monitoring APIs, do the following: Linux Edit the following configuration file (create the file if it doesn't already exist): /etc/default/google-fluentd Add the following to the file: export http proxy = "http:// proxy-ip : proxy-port " export https proxy = "http:// proxy-ip : proxy-port " export no proxy = 169.254 .
- Download the agent installation script: curl -sSO https://dl.google.com/cloudagents/add-logging-agent-repo.sh When running the add-logging-agent-repo.sh script, you can also set the following flags: --verbose : Turns on verbose logging during the script execution. --also-install : Installs the agent after adding the agent package repository. --version : Sets the agent version for the script to install.
- Run the following PowerShell commands: (New-Object Net.WebClient).DownloadFile("https://dl.google.com/cloudagents/windows/StackdriverLogging-v1-22.exe", "${env:UserProfile}\StackdriverLogging-v1-22.exe") & "${env:UserProfile}\StackdriverLogging-v1-22.exe" Installing a specific version of the agent To install a specific version of the agent, complete the following steps.

### Write request logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced](https://docs.cloud.google.com/logging/docs/samples/logging-write-log-entry-advanced)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . / const projectId = 'YOUR PROJECT ID'; // Your Google Cloud Platform project ID const logName = 'my-log'; // The name of the log to write to const requestMethod = 'GET'; // GET, POST, PUT, etc. const requestUrl = 'http://www.google.com'; const status = 200; const userAgent = my-user-agent/1.0.0; const latencySeconds = 3; const responseSize = 256; // response size in bytes. / // Imports the Google Cloud client library const { Logging } = require ( ' @google-cloud/logging ' ); // Creates a client const logging = new Logging ({ projectId }); // Selects the log to write to const log = logging . log ( logName ); // The data to write to the log const text = 'Hello, world!' ; // The metadata associated with the entry const metadata = { resource : { type : 'global' }, httpRequest : { requestMethod , requestUrl , status , userAgent , latency : { seconds : latencySeconds , }, responseSize , }, }; // Prepares a log entry const entry = log . entry ( metadata , text ); // Writes the log entry async function writeLog () { await log . write ( entry ); console . log ( Logged: ${ text } ); } writeLog (); What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- GET ) // Supported method GET,POST,PUT,HEAD . setStatus ( 200 ) . build (); createLogEntryRequest ( logName , payLoad , httpRequest ); } public static void createLogEntryRequest ( String logName , String payLoad , HttpRequest httpRequest ) throws Exception { // Instantiates a logging client try ( Logging logging = LoggingOptions . getDefaultInstance (). getService ()) { // create an instance of LogEntry with HTTP request LogEntry logEntry = LogEntry . newBuilder ( Payload .
- ERROR ) . setLogName ( logName ) . setHttpRequest ( httpRequest ) . setResource ( MonitoredResource . newBuilder ( "global" ). build ()) . build (); // Writes the log entry asynchronously logging . write ( Collections . singleton ( logEntry )); System . out . printf ( "Logged: %s" , payLoad ); } } } Node.js To learn how to install and use the client library for Logging, see Logging client libraries .
- String logName = "log-name" ; // i.e "my-log" String payLoad = "payload" ; // i.e "Hello world!" HttpRequest httpRequest = HttpRequest . newBuilder () . setRequestUrl ( "www.example.com" ) . setRequestMethod ( HttpRequest .

### "Interface Logging (3.29.0) \_|\_ Java client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging](https://docs.cloud.google.com/java/docs/reference/google-cloud-logging/latest/com.google.cloud.logging.Logging)
- Source ID: `site-java-reference`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- String logName = "my log name" ; ApiFuture<Boolean> future = logging . deleteLogAsync ( logName ); // ... boolean deleted = future . get (); if ( deleted ) { // the log was deleted } else { // the log was not found } Parameter Name Description log String Returns Type Description ApiFuture < Boolean > deleteLogAsync(String log, LogDestinationName destination) public default ApiFuture<Boolean> deleteLogAsync ( String log , LogDestinationName destination ) Sends a request for deleting a log and all its log entries for given log destination (see 'logName' parameter in https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry ).
- Example of creating a sink to export logs to a BigQuery dataset (in the LoggingOptions#getProjectId() project). { @code String sinkName = "my sink name"; String datasetName = "my dataset"; SinkInfo sinkInfo = SinkInfo.of(sinkName, DatasetDestination.of(datasetName)); Sink sink = logging.create(sinkInfo); } Parameter Name Description sink SinkInfo Returns Type Description Sink the created sink createAsync(Exclusion exclusion) public abstract ApiFuture<Exclusion> createAsync ( Exclusion exclusion ) Sends a request to create the exclusion.
- Page<Log> logNames = logging . listLogs ( ListOption . pageSize ( 100 )); Iterator<Log> logIterator = logNames . iterateAll (). iterator (); while ( logIterator . hasNext ()) { String logName = logIterator . next (); // do something with the log name } Parameter Name Description options ListOption [] Returns Type Description Page < String > listLogsAsync(Logging.ListOption[] options) public default ApiFuture<AsyncPage<String> > listLogsAsync ( Logging .
- ApiFuture<AsyncPage<Log> > future = logging . listLogsAsync ( ListOption . pageSize ( 100 )); // ...

