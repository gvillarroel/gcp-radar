---
title: "Inspecting structured text for sensitive data \_|\_ Sensitive Data Protection\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-structured-text
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-structured-text
  title: "Inspecting structured text for sensitive data \_|\_ Sensitive Data Protection\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Inspecting structured text for sensitive data
Stay organized with collections
Save and categorize content based on your preferences.
Sensitive Data Protection can detect and classify sensitive data within structured
content such as CSV. By inspecting or de-identifying as a table, the
structure and columns provide Sensitive Data Protection with additional clues that
may enable it to provide better results for some use cases.
Inspecting a table
The code samples below demonstrate how to check a table of data for sensitive
content.
Tables
support a variety of
types .
Important:
The code on this page requires that you first set up a Sensitive Data Protection client. For more
information about installing and creating a Sensitive Data Protection client, see
Sensitive Data Protection client libraries . (Sending JSON
to Sensitive Data Protection REST endpoints does not require a client
library.)
C#
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using System ;
using System.Collections.Generic ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dlp.V2 ;
public class InspectTable
{
public static InspectContentResponse InspectTableData (
string projectId ,
Table tableToInspect = null ,
IEnumerable<InfoType> infoTypes = null )
{
// Instantiate a client.
var dlp = DlpServiceClient . Create ();
// Construct the table if null.
if ( tableToInspect == null )
{
var row1 = new Value []
{
new Value { StringValue = "John Doe" },
new Value { StringValue = "(206) 555-0123" }
};
var row2 = new Value []
{
new Value { StringValue = "Mark Twain" },
new Value { StringValue = "(450) 555-0123" }
};
tableToInspect = new Table
{
Headers =
{
new FieldId { Name = "Name" }, new FieldId { Name = "Phone" }
},
Rows =
{
new Table . Types . Row { Values = { row1 } },
new Table . Types . Row { Values = { row2 } }
}
};
}
// Set content item.
var contentItem = new ContentItem { Table = tableToInspect };
// Construct inspect config.
var inspectConfig = new InspectConfig
{
InfoTypes =
{
infoTypes ?? new InfoType [] { new InfoType { Name = "PHONE_NUMBER" } }
},
IncludeQuote = true ,
};
// Construct a request.
var request = new InspectContentRequest
{
ParentAsLocationName = new LocationName ( projectId , "global" ),
InspectConfig = inspectConfig ,
Item = contentItem ,
};
// Call the API.
var response = dlp . InspectContent ( request );
// Inspect the results.
var resultFindings = response . Result . Findings ;
Console . WriteLine ( $"Findings: {resultFindings.Count}" );
foreach ( var f in resultFindings )
{
Console . WriteLine ( "Quote: " + f . Quote );
Console . WriteLine ( "Info type: " + f . InfoType . Name );
Console . WriteLine ( "Likelihood: " + f . Likelihood );
}
return response ;
}
}
Go
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
dlp "cloud.google.com/go/dlp/apiv2"
"cloud.google.com/go/dlp/apiv2/dlppb"
)
// inspectTable inspects a table for sensitive content
func inspectTable ( w io . Writer , projectID string ) error {
// projectID := "your-project-id"
ctx := context . Background ()
// Initialize a client once and reuse it to send multiple requests. Clients
// are safe to use across goroutines. When the client is no longer needed,
// call the Close method to cleanup its resources.
client , err := dlp . NewClient ( ctx )
if err != nil {
return err
}
// Closing the client safely cleans up background resources.
defer client . Close ()
// create a default table
tableToInspect := & dlppb . Table {
Headers : [] * dlppb . FieldId {
{ Name : "name" },
{ Name : "phone" },
},
Rows : [] * dlppb . Table_Row {
{
Values : [] * dlppb . Value {
{
Type : & dlppb . Value_StringValue {
StringValue : "John Doe" ,
},
},
{
Type : & dlppb . Value_StringValue {
StringValue : "(206) 555-0123" ,
},
},
},
},
},
}
// Specify the table to be inspected.
contentItem := & dlppb . ContentItem {
DataItem : & dlppb . ContentItem_Table {
Table : tableToInspect ,
},
}
// Specify the type of info the inspection will look for.
// See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types
infoTypes := [] * dlppb . InfoType {
{ Name : "PHONE_NUMBER" },
}
// Construct the Inspect request to be sent by the client.
req := & dlppb . InspectContentRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/global" , projectID ),
Item : contentItem ,
InspectConfig : & dlppb . InspectConfig {
InfoTypes : infoTypes ,
IncludeQuote : true ,
},
}
// Send the request.
resp , err := client . InspectContent ( ctx , req )
if err != nil {
return err
}
// Print the results.
fmt . Fprintf ( w , "Findings: %v\n" , len ( resp . Result . Findings ))
for _ , v := range resp . GetResult (). Findings {
fmt . Fprintf ( w , "Quote: %v\n" , v . GetQuote ())
fmt . Fprintf ( w , "Infotype Name: %v\n" , v . GetInfoType (). GetName ())
fmt . Fprintf ( w , "Likelihood: %v\n" , v . GetLikelihood ())
}
return nil
}
Java
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dlp.v2. DlpServiceClient ;
import com.google.privacy.dlp.v2. ContentItem ;
import com.google.privacy.dlp.v2. FieldId ;
import com.google.privacy.dlp.v2. Finding ;
import com.google.privacy.dlp.v2. InfoType ;
import com.google.privacy.dlp.v2. InspectConfig ;
import com.google.privacy.dlp.v2. InspectContentRequest ;
import com.google.privacy.dlp.v2. InspectContentResponse ;
import com.google.privacy.dlp.v2. LocationName ;
import com.google.privacy.dlp.v2. Table ;
import com.google.privacy.dlp.v2. Table . Row ;
import com.google.privacy.dlp.v2. Value ;
public class InspectTable {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
Table tableToInspect =
Table . newBuilder ()
. addHeaders ( FieldId . newBuilder (). setName ( "name" ). build ())
. addHeaders ( FieldId . newBuilder (). setName ( "phone" ). build ())
. addRows (
Row . newBuilder ()
. addValues ( Value . newBuilder (). setStringValue ( "John Doe" ). build ())
. addValues ( Value . newBuilder (). setStringValue ( "(206) 555-0123" ). build ()))
. build ();
inspectTable ( projectId , tableToInspect );
}
// Inspects the provided text.
public static void inspectTable ( String projectId , Table tableToInspect ) {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DlpServiceClient dlp = DlpServiceClient . create ()) {
// Specify the table to be inspected.
ContentItem item = ContentItem . newBuilder (). setTable ( tableToInspect ). build ();
// Specify the type of info the inspection will look for.
// See https://cloud.google.com/dlp/docs/infotypes-reference for complete list of info types
InfoType infoType = InfoType . newBuilder (). setName ( "PHONE_NUMBER" ). build ();
// Construct the configuration for the Inspect request.
InspectConfig config =
InspectConfig . newBuilder (). addInfoTypes ( infoType ). setIncludeQuote ( true ). build ();
// Construct the Inspect request to be sent by the client.
InspectContentRequest request =
InspectContentRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , "global" ). toString ())
. setItem ( item )
. setInspectConfig ( config )
. build ();
// Use the client to send the API request.
InspectContentResponse response = dlp . inspectContent ( request );
// Parse the response and process results
System . out . println ( "Findings: " + response . getResult (). getFindingsCount ());
for ( Finding f : response . getResult (). getFindingsList ()) {
System . out . println ( "\tQuote: " + f . getQuote ());
System . out . println ( "\tInfo type: " + f . getInfoType (). getName ());
System . out . println ( "\tLikelihood: " + f . getLikelihood ());
}
} catch ( Exception e ) {
System . out . println ( "Error during inspectString: \n" + e . toString ());
}
}
}
Node.js
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Imports the Google Cloud Data Loss Prevention library
const DLP = require ( ' @google-cloud/dlp ' );
// Instantiates a client
const dlp = new DLP . DlpServiceClient ();
// The project ID to run the API call under
// const projectId = 'my-project';
// The infoTypes of information to match
const infoTypes = [{ name : 'PHONE_NUMBER' }];
// Table data
const tableData = {
headers : [{ name : 'name' }, { name : 'phone' }],
rows : [
{
values : [{ stringValue : 'John Doe' }, { stringValue : '(206) 555-0123' }],
},
],
};
async function inspectTable () {
// Specify the table to be inspected.
const item = {
table : tableData ,
};
// Construct the configuration for the Inspect request.
const inspectConfig = {
infoTypes : infoTypes ,
includeQuote : true ,
};
// Construct the Inspect request to be sent by the client.
const request = {
parent : `projects/ ${ projectId } /locations/global` ,
inspectConfig : inspectConfig ,
item : item ,
};
// Use the client to send the API request.
const [ response ] = await dlp . inspectContent ( request );
// Print findings.
const findings = response . result . findings ;
if ( findings . length > 0 ) {
console . log ( `Findings: ${ findings . length } \n` );
findings . forEach ( finding = > {
console . log ( `InfoType: ${ finding . infoType . name } ` );
console . log ( `\tQuote: ${ finding . quote } ` );
console . log ( `\tLikelihood: ${ finding . likelihood } \n` );
});
} else {
console . log ( 'No findings.' );
}
}
inspectTable ();
PHP
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Dlp\V2\Client\DlpServiceClient;
use Google\Cloud\Dlp\V2\ContentItem;
use Google\Cloud\Dlp\V2\FieldId;
use Google\Cloud\Dlp\V2\InfoType;
use Google\Cloud\Dlp\V2\InspectConfig;
use Google\Cloud\Dlp\V2\InspectContentRequest;
use Google\Cloud\Dlp\V2\Likelihood;
use Google\Cloud\Dlp\V2\Table;
use Google\Cloud\Dlp\V2\Table\Row;
use Google\Cloud\Dlp\V2\Value;
/**
* Inspect a table for sensitive content.
*
* @param string $projectId The Google Cloud project id to use as a parent resource.
*/
function inspect_table(string $projectId): void
{
// Instantiate a client.
$dlp = new DlpServiceClient();
$parent = "projects/$projectId/locations/global";
// Specify the table to be inspected.
$tableToDeIdentify = (new Table())
->setHeaders([
(new FieldId())
->setName('NAME'),
(new FieldId())
->setName('PHONE'),
])
->setRows([
(new Row())->setValues([
(new Value())
->setStringValue('John Doe'),
(new Value())
->setStringValue('(206) 555-0123')
])
]);
$item = (new ContentItem())
->setTable($tableToDeIdentify);
// Construct the configuration for the Inspect request.
$phoneNumber = (new InfoType())
->setName('PHONE_NUMBER');
$inspectConfig = (new InspectConfig())
->setInfoTypes([$phoneNumber])
->setIncludeQuote(true);
// Run request.
$inspectContentRequest = (new InspectContentRequest())
->setParent($parent)
->setInspectConfig($inspectConfig)
->setItem($item);
$response = $dlp->inspectContent($inspectContentRequest);
// Print the results.
$findings = $response->getResult()->getFindings();
if (count($findings) == 0) {
printf('No findings.' . PHP_EOL);
} else {
printf('Findings:' . PHP_EOL);
foreach ($findings as $finding) {
printf(' Quote: %s' . PHP_EOL, $finding->getQuote());
printf(' Info type: %s' . PHP_EOL, $finding->getInfoType()->getName());
printf(' Likelihood: %s' . PHP_EOL, Likelihood::name($finding->getLikelihood()));
}
}
}
Python
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from typing import List , Optional
import google.cloud.dlp
def inspect_table (
project : str ,
data : str ,
info_types : List [ str ],
custom_dictionaries : List [ str ] = None ,
custom_regexes : List [ str ] = None ,
min_likelihood : Optional [ str ] = None ,
max_findings : Optional [ int ] = None ,
include_quote : bool = True ,
) - > None :
"""Uses the Data Loss Prevention API to analyze strings for protected data.
Args:
project: The Google Cloud project id to use as a parent resource.
data: Json string representing table data.
info_types: A list of strings representing info types to look for.
A full list of info type categories can be fetched from the API.
min_likelihood: A string representing the minimum likelihood threshold
that constitutes a match. One of: 'LIKELIHOOD_UNSPECIFIED',
'VERY_UNLIKELY', 'UNLIKELY', 'POSSIBLE', 'LIKELY', 'VERY_LIKELY'.
max_findings: The maximum number of findings to report; 0 = no maximum.
include_quote: Boolean for whether to display a quote of the detected
information in the results.
Returns:
None; the response from the API is printed to the terminal.
Example:
data = {
"header":[
"email",
"phone number"
],
"rows":[
[
"robertfrost@xyz.com",
"4232342345"
],
[
"johndoe@pqr.com",
"4253458383"
]
]
}
>> $ python inspect_content.py table \
'{"header": ["email", "phone number"],
"rows": [["robertfrost@xyz.com", "4232342345"],
["johndoe@pqr.com", "4253458383"]]}'
>> Quote: robertfrost@xyz.com
Info type: EMAIL_ADDRESS
Likelihood: 4
Quote: johndoe@pqr.com
Info type: EMAIL_ADDRESS
Likelihood: 4
"""
# Instantiate a client.
dlp = google . cloud . dlp_v2 . DlpServiceClient ()
# Prepare info_types by converting the list of strings into a list of
# dictionaries (protos are also accepted).
info_types = [{ "name" : info_type } for info_type in info_types ]
# Prepare custom_info_types by parsing the dictionary word lists and
# regex patterns.
if custom_dictionaries is None :
custom_dictionaries = []
dictionaries = [
{
"info_type" : { "name" : f "CUSTOM_DICTIONARY_ { i } " },
"dictionary" : { "word_list" : { "words" : custom_dict . split ( "," )}},
}
for i , custom_dict in enumerate ( custom_dictionaries )
]
if custom_regexes is None :
custom_regexes = []
regexes = [
{
"info_type" : { "name" : f "CUSTOM_REGEX_ { i } " },
"regex" : { "pattern" : custom_regex },
}
for i , custom_regex in enumerate ( custom_regexes )
]
custom_info_types = dictionaries + regexes
# Construct the configuration dictionary. Keys which are None may
# optionally be omitted entirely.
inspect_config = {
"info_types" : info_types ,
"custom_info_types" : custom_info_types ,
"min_likelihood" : min_likelihood ,
"include_quote" : include_quote ,
"limits" : { "max_findings_per_request" : max_findings },
}
# Construct the `table`. For more details on the table schema, please see
# https://cloud.google.com/dlp/docs/reference/rest/v2/ContentItem#Table
headers = [{ "name" : val } for val in data [ "header" ]]
rows = []
for row in data [ "rows" ]:
rows . append ({ "values" : [{ "string_value" : cell_val } for cell_val in row ]})
table = {}
table [ "headers" ] = headers
table [ "rows" ] = rows
item = { "table" : table }
# Convert the project id into a full resource id.
parent = f "projects/ { project } "
# Call the API.
response = dlp . inspect_content (
request = { "parent" : parent , "inspect_config" : inspect_config , "item" : item }
)
# Print out the results.
if response . result . findings :
for finding in response . result . findings :
try :
if finding . quote :
print ( f "Quote: { finding . quote } " )
except AttributeError :
pass
print ( f "Info type: { finding . info_type . name } " )
print ( f "Likelihood: { finding . likelihood } " )
else :
print ( "No findings." )
REST
See the JSON quickstart for more information about
using the DLP API with JSON.
JSON Input:
POST https : // dlp . googleapis . com / v2 / projects /[ PROJECT_ID ]/ content : inspect ? key = { YOUR_API_KEY }
{
"item" :{
"table" :{
"headers" : [ {"name":"name"}, {"name":"phone"} ] ,
"rows" : [ {
"values":[
{"string_value": "John Doe"},
{"string_value": "(206) 555-0123"}
] }
] ,
}
} ,
"inspectConfig" :{
"infoTypes" : [
{
"name":"PHONE_NUMBER"
}
] ,
"includeQuote" : true
}
}
JSON Output:
{
"result": {
"findings": [
{
"quote": "(206) 555-0123",
"infoType": {
"name": "PHONE_NUMBER"
},
"likelihood": "VERY_LIKELY",
"location": {
"byteRange": {
"end": "14"
},
"codepointRange": {
"end": "14"
},
"contentLocations": [
{
"recordLocation": {
"fieldId": {
"name": "phone"
},
"tableLocation": {
}
}
}
]
},
"createTime": "2019-03-08T23:55:10.980Z"
}
]
}
}
Text versus structured text
Structuring text can help provide context. The same request as the one in the
previous example, if inspected as a string—that is, as just "John Doe,
(206) 555-0123"—would provide less accurate findings. That's because
Sensitive Data Protection has fewer contextual clues about what the purpose of the
number might be. When possible, consider parsing your strings into a table
object for the most accurate scan results.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
