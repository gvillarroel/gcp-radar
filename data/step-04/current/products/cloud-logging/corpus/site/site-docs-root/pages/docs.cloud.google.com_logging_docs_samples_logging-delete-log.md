---
title: "Delete a log \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/samples/logging-delete-log
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/samples/logging-delete-log
  title: "Delete a log \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Samples
Delete a log
Stay organized with collections
Save and categorize content based on your preferences.
Deletes all the log entries in a log for the global `_Default` log bucket.
Code sample
C#
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
private void DeleteLog ( string logId )
{
var client = LoggingServiceV2Client . Create ();
LogName logName = new LogName ( s_projectId , logId );
client . DeleteLog ( logName , _retryAWhile );
Console . WriteLine ( $"Deleted {logId}." );
}
Go
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"log"
"cloud.google.com/go/logging/logadmin"
)
func deleteLog ( projectID string ) error {
ctx := context . Background ()
adminClient , err := logadmin . NewClient ( ctx , projectID )
if err != nil {
log . Fatalf ( "Failed to create logadmin client: %v" , err )
}
defer adminClient . Close ()
const name = "log-example"
if err := adminClient . DeleteLog ( ctx , name ); err != nil {
return err
}
return nil
}
Java
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
boolean deleted = logging . deleteLog ( logName );
if ( deleted ) {
// the log was deleted
} else {
// the log was not found
}
Node.js
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud client library
const { Logging } = require ( ' @google-cloud/logging ' );
// Creates a client
const logging = new Logging ();
/**
* TODO(developer): Uncomment the following line to run the code.
*/
// const logName = 'Name of the log to delete, e.g. my-log';
const log = logging . log ( logName );
async function deleteLog () {
// Deletes a logger and all its entries.
// Note that a deletion can take several minutes to take effect.
// See https://googleapis.dev/nodejs/logging/latest/Log.html#delete
await log . delete ();
console . log ( `Deleted log: ${ logName } ` );
}
deleteLog ();
PHP
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Logging\LoggingClient;
/** Delete a logger and all its entries.
*
* @param string $projectId The Google project ID.
* @param string $loggerName The name of the logger.
*/
function delete_logger($projectId, $loggerName)
{
$logging = new LoggingClient(['projectId' => $projectId]);
$logger = $logging->logger($loggerName);
$logger->delete();
printf("Deleted a logger '%s'." . PHP_EOL, $loggerName);
}
Python
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
def delete_logger ( logger_name ):
"""Deletes a logger and all its entries.
Note that a deletion can take several minutes to take effect.
"""
logging_client = logging . Client ()
logger = logging_client . logger ( logger_name )
logger . delete ()
print ( "Deleted all logging entries for {} " . format ( logger . name ))
Ruby
To learn how to install and use the client library for Logging, see
Logging client libraries .
To authenticate to Logging, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/logging"
logging = Google :: Cloud :: Logging . new
# log_name = "The name of the log"
logging . delete_log log_name
puts "Deleted log: #{ log_name } "
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
