---
title: "Demonstrate batch query translation \_|\_ BigQuery \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart
  title: "Demonstrate batch query translation \_|\_ BigQuery \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
BigQuery
Samples
Demonstrate batch query translation
Stay organized with collections
Save and categorize content based on your preferences.
Uses the BigQuery Migration service to translate queries stored in Cloud Storage
Code sample
Go
Before trying this sample, follow the Go setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Go API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
// The bigquery_migration_quickstart application demonstrates basic usage of the
// BigQuery migration API by executing a workflow that performs a batch SQL
// translation task.
package main
import (
"context"
"flag"
"fmt"
"log"
"time"
migration "cloud.google.com/go/bigquery/migration/apiv2"
"cloud.google.com/go/bigquery/migration/apiv2/migrationpb"
)
func main () {
// Define command line flags for controlling the behavior of this quickstart.
projectID := flag . String ( "project_id" , "" , "Cloud Project ID." )
location := flag . String ( "location" , "us" , "BigQuery Migration location used for interactions." )
outputPath := flag . String ( "output" , "" , "Cloud Storage path for translated resources." )
// Parse flags and do some minimal validation.
flag . Parse ()
if * projectID == "" {
log . Fatal ( "empty --project_id specified, please provide a valid project ID" )
}
if * location == "" {
log . Fatal ( "empty --location specified, please provide a valid location" )
}
if * outputPath == "" {
log . Fatalf ( "empty --output specified, please provide a valid cloud storage path" )
}
ctx := context . Background ()
migClient , err := migration . NewClient ( ctx )
if err != nil {
log . Fatalf ( "migration.NewClient: %v" , err )
}
defer migClient . Close ()
workflow , err := executeTranslationWorkflow ( ctx , migClient , * projectID , * location , * outputPath )
if err != nil {
log . Fatalf ( "workflow execution failed: %v\n" , err )
}
reportWorkflowStatus ( workflow )
}
// executeTranslationWorkflow constructs a migration workflow that performs batch SQL translation.
func executeTranslationWorkflow ( ctx context . Context , client * migration . Client , projectID , location , outPath string ) ( * migrationpb . MigrationWorkflow , error ) {
// Construct the workflow creation request. In this workflow, we have only a single translation task present.
req := & migrationpb . CreateMigrationWorkflowRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , location ),
MigrationWorkflow : & migrationpb . MigrationWorkflow {
DisplayName : "example SQL conversion" ,
Tasks : map [ string ] * migrationpb . MigrationTask {
"example_conversion" : {
Type : "Translation_Teradata2BQ" ,
TaskDetails : & migrationpb . MigrationTask_TranslationConfigDetails {
TranslationConfigDetails : & migrationpb . TranslationConfigDetails {
SourceLocation : & migrationpb . TranslationConfigDetails_GcsSourcePath {
GcsSourcePath : "gs://cloud-samples-data/bigquery/migration/translation/input/" ,
},
TargetLocation : & migrationpb . TranslationConfigDetails_GcsTargetPath {
GcsTargetPath : outPath ,
},
SourceDialect : & migrationpb . Dialect {
DialectValue : & migrationpb . Dialect_TeradataDialect {
TeradataDialect : & migrationpb . TeradataDialect {
Mode : migrationpb . TeradataDialect_SQL ,
},
},
},
TargetDialect : & migrationpb . Dialect {
DialectValue : & migrationpb . Dialect_BigqueryDialect {},
},
},
},
},
},
},
}
// Create the workflow using the request.
workflow , err := client . CreateMigrationWorkflow ( ctx , req )
if err != nil {
return nil , fmt . Errorf ( "CreateMigrationWorkflow: %w" , err )
}
fmt . Printf ( "workflow created: %s" , workflow . GetName ())
// This is an asyncronous process, so we now poll the workflow
// until completion or a suitable timeout has elapsed.
timeoutCtx , cancel := context . WithTimeout ( ctx , 5 * time . Minute )
defer cancel ()
for {
select {
case < - timeoutCtx . Done ():
return nil , fmt . Errorf ( "task %s didn't complete due to context expiring" , workflow . GetName ())
default :
polledWorkflow , err := client . GetMigrationWorkflow ( timeoutCtx , & migrationpb . GetMigrationWorkflowRequest {
Name : workflow . GetName (),
})
if err != nil {
return nil , fmt . Errorf ( "polling ended in error: %w" , err )
}
if polledWorkflow . GetState () == migrationpb . MigrationWorkflow_COMPLETED {
// polledWorkflow contains the most recent metadata about the workflow, so we return that.
return polledWorkflow , nil
}
// workflow still isn't complete, so sleep briefly before polling again.
time . Sleep ( 5 * time . Second )
}
}
}
// reportWorkflowStatus prints information about the workflow execution in a more human readable format.
func reportWorkflowStatus ( workflow * migrationpb . MigrationWorkflow ) {
fmt . Printf ( "Migration workflow %s ended in state %s.\n" , workflow . GetName (), workflow . GetState (). String ())
for k , task := range workflow . GetTasks () {
fmt . Printf ( " - Task %s had id %s" , k , task . GetId ())
if task . GetProcessingError () != nil {
fmt . Printf ( " with processing error: %s" , task . GetProcessingError (). GetReason ())
}
fmt . Println ()
}
}
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
