---
title: "Authorize a BigQuery Dataset \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset
knowledge_key: corpus
source_id: site-docs-reference-required-15
source_type: site
entrypoint: https://docs.cloud.google.com/bigquery/docs/samples/bigquerydatatransfer-copy-dataset
source_metadata:
  url: https://docs.cloud.google.com/bigquery/docs/samples/bigquery-authorized-dataset
  title: "Authorize a BigQuery Dataset \_|\_ Google Cloud Documentation"
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
Authorize a BigQuery Dataset
Stay organized with collections
Save and categorize content based on your preferences.
Authorize a BigQuery Dataset
Code sample
Java
Before trying this sample, follow the Java setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Java API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.bigquery. Acl ;
import com.google.cloud.bigquery. BigQuery ;
import com.google.cloud.bigquery. BigQueryException ;
import com.google.cloud.bigquery. BigQueryOptions ;
import com.google.cloud.bigquery. Dataset ;
import com.google.cloud.bigquery. DatasetId ;
import com.google.common.collect.ImmutableList ;
import java.util.ArrayList ;
import java.util.List ;
public class AuthorizeDataset {
public static void main ( String [] args ) {
// TODO(developer): Replace these variables before running the sample.
String projectId = "PROJECT_ID" ;
String sourceDatasetName = "BIGQUERY_SOURCE_DATASET_NAME" ;
String userDatasetName = "BIGQUERY_USER_DATASET_NAME" ;
authorizeDataset (
DatasetId . of ( projectId , sourceDatasetName ), DatasetId . of ( projectId , userDatasetName ));
}
// This method will update sourceDataset's ACL with userDataset's ACL
public static void authorizeDataset ( DatasetId sourceDatasetId , DatasetId userDatasetId ) {
try {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
BigQuery bigquery = BigQueryOptions . getDefaultInstance (). getService ();
// Get both source and user dataset's references
Dataset sourceDataset = bigquery . getDataset ( sourceDatasetId );
Dataset userDataset = bigquery . getDataset ( userDatasetId );
// Get the source dataset's ACL
List<Acl> sourceDatasetAcl = new ArrayList <> ( sourceDataset . getAcl ());
// Add the user dataset's DatasetAccessEntry object to the existing sourceDatasetAcl
List<String> targetTypes = ImmutableList . of ( "VIEWS" );
Acl . DatasetAclEntity userDatasetAclEntity =
new Acl . DatasetAclEntity ( userDatasetId , targetTypes );
sourceDatasetAcl . add ( Acl . of ( userDatasetAclEntity ));
// update the source dataset with user dataset's ACL
Dataset updatedSourceDataset =
sourceDataset . toBuilder (). setAcl ( sourceDatasetAcl ). build (). update ();
System . out . printf (
"Dataset %s updated with the added authorization\n" , updatedSourceDataset . getDatasetId ());
} catch ( BigQueryException e ) {
System . out . println ( "Dataset Authorization failed due to error: \n" + e );
}
}
}
Ruby
Before trying this sample, follow the Ruby setup instructions in the
BigQuery quickstart using
client libraries .
For more information, see the
BigQuery Ruby API
reference documentation .
To authenticate to BigQuery, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
require "google/cloud/bigquery"
##
# This is a snippet for showcasing how to authorize a dataset.
#
# Note: Only views target types are supported for now.
#
# @param source_project_id [String] The ID of the source Google Cloud project.
# @param source_database_id [String] The ID of the source database.
# @param user_project_id [String] The ID of the user Google Cloud project.
# @param user_database_id [String] The ID of the user database.
# @param target_types [Array<String>] List of target types for authorization.
#
def authorized_dataset source_project_id :, source_database_id :, user_project_id :, user_database_id :, target_types :
# Initialize client and get source dataset's references
source_bigquery = Google :: Cloud :: Bigquery . new project_id : source_project_id
source_dataset = source_bigquery . dataset source_database_id
# Initialize client and get user dataset's references
user_bigquery = Google :: Cloud :: Bigquery . new project_id : user_project_id
user_dataset = user_bigquery . dataset user_database_id
# Add the user dataset's DatasetAccessEntry object to the existing source dataset rules
source_dataset . access do | access |
access . add_reader_dataset user_dataset . build_access_entry ( target_types : target_types )
end
puts "Dataset #{ user_dataset . dataset_id } added as authorized dataset in dataset #{ source_dataset . dataset_id } "
end
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
