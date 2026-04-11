---
title: "Create a rule set \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-fetch-acl
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/samples/contentwarehouse-create-rule-set
  title: "Create a rule set \_|\_ Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Samples
Create a rule set
Stay organized with collections
Save and categorize content based on your preferences.
Create a rule set
Explore further
For detailed documentation that includes this code sample, see the following:
Set up policies
Code sample
Java
For more information, see the
Document AI Warehouse Java API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.contentwarehouse.v1. Action ;
import com.google.cloud.contentwarehouse.v1. ActionOrBuilder ;
import com.google.cloud.contentwarehouse.v1. CreateRuleSetRequest ;
import com.google.cloud.contentwarehouse.v1. CreateRuleSetRequestOrBuilder ;
import com.google.cloud.contentwarehouse.v1. DeleteDocumentAction ;
import com.google.cloud.contentwarehouse.v1. DeleteDocumentActionOrBuilder ;
import com.google.cloud.contentwarehouse.v1. ListRuleSetsRequest ;
import com.google.cloud.contentwarehouse.v1. ListRuleSetsRequestOrBuilder ;
import com.google.cloud.contentwarehouse.v1. LocationName ;
import com.google.cloud.contentwarehouse.v1. Rule ;
import com.google.cloud.contentwarehouse.v1. Rule . TriggerType ;
import com.google.cloud.contentwarehouse.v1. RuleOrBuilder ;
import com.google.cloud.contentwarehouse.v1. RuleSet ;
import com.google.cloud.contentwarehouse.v1. RuleSetOrBuilder ;
import com.google.cloud.contentwarehouse.v1. RuleSetServiceClient ;
import com.google.cloud.contentwarehouse.v1. RuleSetServiceClient . ListRuleSetsPagedResponse ;
import com.google.cloud.contentwarehouse.v1. RuleSetServiceSettings ;
import com.google.cloud.resourcemanager.v3. Project ;
import com.google.cloud.resourcemanager.v3. ProjectName ;
import com.google.cloud.resourcemanager.v3. ProjectsClient ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
import java.util.concurrent.TimeoutException ;
public class CreateRuleSet {
public static void createRuleSet () throws IOException ,
InterruptedException , ExecutionException , TimeoutException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String location = "your-region" ; // Format is "us" or "eu".
createRuleSet ( projectId , location );
}
public static void createRuleSet ( String projectId , String location )
throws IOException , InterruptedException , ExecutionException , TimeoutException {
String projectNumber = getProjectNumber ( projectId );
String endpoint = "contentwarehouse.googleapis.com:443" ;
if ( ! "us" . equals ( location )) {
endpoint = String . format ( "%s-%s" , location , endpoint );
}
RuleSetServiceSettings ruleSetServiceSettings =
RuleSetServiceSettings . newBuilder (). setEndpoint ( endpoint ). build ();
// Create a Rule Set Service Client
try ( RuleSetServiceClient ruleSetServiceClient =
RuleSetServiceClient . create ( ruleSetServiceSettings )) {
/* The full resource name of the location, e.g.:
projects/{project_number}/locations/{location} */
String parent = LocationName . format ( projectNumber , location );
// Create a Delete Document Action to be added to the Rule Set
DeleteDocumentActionOrBuilder deleteDocumentAction =
DeleteDocumentAction . newBuilder (). setEnableHardDelete ( true ). build ();
// Add Delete Document Action to Action Object
ActionOrBuilder action = Action . newBuilder ()
. setDeleteDocumentAction (( DeleteDocumentAction ) deleteDocumentAction ). build ();
// Create rule to add to rule set
RuleOrBuilder rule = Rule . newBuilder ()
. setTriggerType ( TriggerType . ON_CREATE )
. setCondition ( "documentType == 'W9' && STATE =='CA' " )
. addActions ( 0 , ( Action ) action ). build ();
// Create rule set and add rule to it
RuleSetOrBuilder ruleSetOrBuilder = RuleSet . newBuilder ()
. setDescription ( "W9: Basic validation check rules." )
. setSource ( "My Organization" )
. addRules (( Rule ) rule ). build ();
// Create and prepare rule set request to client
CreateRuleSetRequestOrBuilder createRuleSetRequest =
CreateRuleSetRequest . newBuilder ()
. setParent ( parent )
. setRuleSet (( RuleSet ) ruleSetOrBuilder ). build ();
RuleSet response = ruleSetServiceClient . createRuleSet (
( CreateRuleSetRequest ) createRuleSetRequest );
System . out . println ( "Rule set created: " + response . toString ());
ListRuleSetsRequestOrBuilder listRuleSetsRequest =
ListRuleSetsRequest . newBuilder ()
. setParent ( parent ). build ();
ListRuleSetsPagedResponse listRuleSetsPagedResponse =
ruleSetServiceClient . listRuleSets (( ListRuleSetsRequest ) listRuleSetsRequest );
listRuleSetsPagedResponse . iterateAll (). forEach (
( ruleSet - > System . out . print ( ruleSet ))
);
}
}
private static String getProjectNumber ( String projectId ) throws IOException {
try ( ProjectsClient projectsClient = ProjectsClient . create ()) {
ProjectName projectName = ProjectName . of ( projectId );
Project project = projectsClient . getProject ( projectName );
String projectNumber = project . getName (); // Format returned is projects/xxxxxx
return projectNumber . substring ( projectNumber . lastIndexOf ( "/" ) + 1 );
}
}
}
Python
For more information, see the
Document AI Warehouse Python API
reference documentation .
To authenticate to Document AI Warehouse, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import contentwarehouse
# TODO(developer): Uncomment these variables before running the sample.
# project_number = "YOUR_PROJECT_NUMBER"
# location = "us" # Format is 'us' or 'eu'
def create_rule_set ( project_number : str , location : str ) - > None :
# Create a client
client = contentwarehouse . RuleSetServiceClient ()
# The full resource name of the location, e.g.:
# projects/{project_number}/locations/{location}
parent = client . common_location_path ( project = project_number , location = location )
actions = contentwarehouse . Action (
delete_document_action = contentwarehouse . DeleteDocumentAction (
enable_hard_delete = True
)
)
rules = contentwarehouse . Rule (
trigger_type = "ON_CREATE" ,
condition = "documentType == 'W9' && STATE =='CA'" ,
actions = [ actions ],
)
rule_set = contentwarehouse . RuleSet (
description = "W9: Basic validation check rules." ,
source = "My Organization" ,
rules = [ rules ],
)
# Initialize request argument(s)
request = contentwarehouse . CreateRuleSetRequest ( parent = parent , rule_set = rule_set )
# Make the request
response = client . create_rule_set ( request = request )
# Handle the response
print ( f "Rule Set Created: { response } " )
# Initialize request argument(s)
request = contentwarehouse . ListRuleSetsRequest (
parent = parent ,
)
# Make the request
page_result = client . list_rule_sets ( request = request )
# Handle the response
for response in page_result :
print ( f "Rule Sets: { response } " )
What's next
To search and filter code samples for other Google Cloud products, see the
Google Cloud sample browser .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
