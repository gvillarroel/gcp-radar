---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:38:24.527Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Copy log entries"
feature_slug: "copy-log-entries"
latest_feature_date: "2024-02-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/samples/logging-list-log-entries"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "copy"
  - "log"
  - "entries"
  - "logging"
  - "supports"
  - "copying"
---

# Copy log entries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports copying log entries.

## Extended Definition

Cloud Logging supports copying log entries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/logging/docs/samples/logging-list-log-entries](https://docs.cloud.google.com/logging/docs/samples/logging-list-log-entries)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### List log entries \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/samples/logging-list-log-entries](https://docs.cloud.google.com/logging/docs/samples/logging-list-log-entries)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . use Google\Cloud\Logging\LoggingClient; / Print the timestamp and entry for the project and logger. @param string $projectId The Google project ID. @param string $loggerName The name of the logger. / function list entries($projectId, $loggerName) { $logging = new LoggingClient(['projectId' => $projectId]); $loggerFullName = sprintf('projects/%s/logs/%s', $projectId, $loggerName); $oneDayAgo = date(\DateTime::RFC3339, strtotime('-24 hours')); $filter = sprintf( 'logName = "%s" AND timestamp >= "%s"', $loggerFullName, $oneDayAgo ); $options = [ 'filter' => $filter, ]; $entries = $logging->entries($options); // Print the entries foreach ($entries as $entry) { / @var $entry \Google\Cloud\Logging\Entry / $entryInfo = $entry->info(); if (isset($entryInfo['textPayload'])) { $entryText = $entryInfo['textPayload']; } else { $entryPayload = []; foreach ($entryInfo['jsonPayload'] as $key => $value) { $entryPayload[] = "$key: $value"; } $entryText = '{' . implode(', ', $entryPayload) . '}'; } printf('%s : %s' .
- For more information, see Set up authentication for a local development environment . // Imports the Google Cloud client library const { Logging } = require ( ' @google-cloud/logging ' ); // Creates a client const logging = new Logging (); / TODO(developer): Uncomment the following line to run the code. / // const logName = 'Name of the log from which to list entries, e.g. my-log'; const log = logging . log ( logName ); async function printEntryMetadata () { // List the most recent entries for a given log // See https://googleapis.dev/nodejs/logging/latest/Logging.html#getEntries const [ entries ] = await log . getEntries (); console . log ( 'Logs:' ); entries . forEach ( entry = > { const metadata = entry . metadata ; console . log ( ${ metadata . timestamp } : , metadata [ metadata . payload ]); }); } printEntryMetadata (); PHP To learn how to install and use the client library for Logging, see Logging client libraries .
- MINUTE , - 1 ); DateFormat rfc3339 = new SimpleDateFormat ( "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" ); String logFilter = "logName=projects/" + logging . getOptions (). getProjectId () + "/logs/" + logName + " AND timestamp>=\"" + rfc3339 . format ( calendar . getTime ()) + "\"" ; // List all log entries Page<LogEntry> entries = logging . listLogEntries ( EntryListOption . filter ( logFilter )); while ( entries != null ) { for ( LogEntry logEntry : entries . iterateAll ()) { System . out . println ( logEntry ); } entries = entries . getNextPage (); } } } } Node.js To learn how to install and use the client library for Logging, see Logging client libraries .
- For more information, see Set up authentication for a local development environment . require "google/cloud/logging" log name = "my log name" logging = Google :: Cloud :: Logging . new entries = logging . entries filter : "logName: #{ log name } " , max : 1000 , order : "timestamp desc" entries . each do entry puts "[ #{ entry . timestamp } ] #{ entry . log name } #{ entry . payload . inspect } " end What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- In the following expression, paste the copied ID into the PROJECT ID field, and then copy the expression into the query editor: resource.type = "gce instance" logName =( "projects/ PROJECT ID /logs/apache access" OR "projects/ PROJECT ID /logs/apache error" ) When the previous query is run, only apache access and apache error log entries are shown.
- The email notification you receive looks similar to the following: To view the new log entries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Copy the following query and paste it into the log filter field: severity > = DEFAULT /help httpRequest.status = 404 The previous log filter searches for log entries with a severity level of at least DEFAULT , that contain the text /help , and that contain an httpRequest status of 404 .
- You must restart the agent for the configuration to take effect . set - e Check if the file exists if [ ! - f / etc / google - cloud - ops - agent / config . yaml ]; then Create the file if it doesn ' t exist . sudo mkdir - p / etc / google - cloud - ops - agent sudo touch / etc / google - cloud - ops - agent / config . yaml fi Create a back up of the existing file so existing configurations are not lost . sudo cp / etc / google - cloud - ops - agent / config . yaml / etc / google - cloud - ops - agent / config . yaml . bak Configure the Ops Agent . sudo tee / etc / google - cloud - ops - agent / config . yaml > / dev / null << EOF metrics : receivers : apache : type : apache service : pipelines : apache : receivers : - apache logging : receivers : apache access : type : apache access apache error : type : apache error service : pipelines : apache : receivers : - apache access - apache error EOF The previous command creates the configuration to collect and ingest logs and metrics from the Apache web server.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- Query returns an error If you issue a query over a resource without specifying a bucket, then Cloud Logging uses the history of the sinks in the Google Cloud project to determine where entries might have been written for that resource.
- To view and download log entries stored in a log view on a log bucket: Logs View Accessor ( roles/logging.viewAccessor ) on the project, folder, or organization that contains the log bucket.
- To view all log entries in the Required and Default buckets: Private Logs Viewer ( roles/logging.privateLogViewer ) on your project, folder, or organization.

