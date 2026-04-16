---
title: "Creating a custom regex detector \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex
knowledge_key: corpus
source_id: site-iam-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/audit-logging
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/creating-custom-infotypes-regex
  title: "Creating a custom regex detector \_|\_ Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
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
Creating a custom regex detector
Stay organized with collections
Save and categorize content based on your preferences.
A regular expression (regex) custom infoType detector allows you to create your
own detectors that enable Sensitive Data Protection to detect matches based
on a regex pattern. For example, suppose that you had medical record numbers in
the form ###-#-##### . You could define a regex pattern such as the following:
[0-9]{3}-[0-9]{1}-[0-9]{5}
Sensitive Data Protection would then match items like the following:
012 - 4 - 56789
Anatomy of a regex custom infoType detector
As summarized in
API Overview , to create a
custom regex infoType detector, you define a
CustomInfoType
object that contains the following:
The name you want to give the custom infoType detector, within in an
InfoType
object.
An optional
Likelihood
value. If you omit this field, regex matches will return a default likelihood of
VERY_LIKELY . If you notice a regex custom infoType detector returning too
many false positives, try reducing the base likelihood and using detection
rules to boost the likelihood using contextual information. To learn more,
see Customizing finding likelihood .
Optional
DetectionRule s,
or hotword rules. These rules adjust the likelihood of findings within a
given proximity of specified hotwords. Learn more about hotword rules in
Customizing finding likelihood .
An optional
SensitivityScore
value. If you omit this field, matches to the regular expression will return a
default sensitivity level of HIGH .
Sensitivity scores are used in data profiles . When
profiling your data, Sensitive Data Protection uses the sensitivity scores of the infoTypes to
calculate the sensitivity level .
A
Regex
object consisting of a single pattern defining the regular expression.
As a JSON object, a regex custom infoType detector that includes all optional
components looks like this:
{
"customInfoTypes" : [
{
"infoType" : {
"name" : " CUSTOM_INFOTYPE_NAME "
},
"likelihood" : " LIKELIHOOD_LEVEL " ,
"detectionRules" : [
{
"hotwordRule" : {
HOTWORD_RULE
}
},
"sensitivityScore" : {
"score" : " SENSITIVITY_SCORE "
},
],
"regex" : {
"pattern" : " REGULAR_EXPRESSION_PATTERN "
}
}
],
...
}
Note: You can also create a custom regex detector by
referencing an existing
StoredInfoType in the
storedType
field of the CustomInfoType object, instead of defining the
regex
field. However, this approach requires you to first create a
StoredInfoType of type Regex . In most cases, it's simpler to
define the Regex object directly in the regex field of the
CustomInfoType object.
Regex example: Match medical record numbers
The following JSON snippet and code in several languages below show
a regular expression custom infoType detector that instructs
Sensitive Data Protection to match a medical record number
(MRN) in the input text "Patient's MRN 444-5-22222," and assign each match a
likelihood of POSSIBLE .
C#
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using System ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dlp.V2 ;
public class InspectDataWithCustomRegex
{
public static InspectContentResponse InspectDataCustomRegex (
string projectId ,
string text ,
string customRegex ,
InfoType infoType = null )
{
// Instantiate a client.
var dlp = DlpServiceClient . Create ();
// Construct content item by setting the text.
var contentItem = new ContentItem { Value = text };
// Construct the custom regex detector.
var customInfoType = new CustomInfoType
{
InfoType = infoType ?? new InfoType { Name = "C_MRN" },
Regex = new CustomInfoType . Types . Regex { Pattern = customRegex }
};
// Construct Inspect Config.
var inspectConfig = new InspectConfig
{
CustomInfoTypes = { customInfoType },
IncludeQuote = true ,
MinLikelihood = Likelihood . Possible
};
// Construct the request.
var request = new InspectContentRequest
{
ParentAsLocationName = new LocationName ( projectId , "global" ),
Item = contentItem ,
InspectConfig = inspectConfig ,
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
// inspectWithCustomRegex inspect a data with custom regex pattern
func inspectWithCustomRegex ( w io . Writer , projectID , textToInspect , customRegexPattern , infoTypeName string ) error {
//projectID := "my-project-id"
//textToInspect := "Patients MRN 444-5-22222"
//customRegexPattern := "[1-9]{3}-[1-9]{1}-[1-9]{5}"
//infoTypeName := "C_MRN"
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
// Specify the type and content to be inspected.
contentItem := & dlppb . ContentItem {
DataItem : & dlppb . ContentItem_ByteItem {
ByteItem : & dlppb . ByteContentItem {
Type : dlppb . ByteContentItem_TEXT_UTF8 ,
Data : [] byte ( textToInspect ),
},
},
}
// Construct the custom regex detectors
customInfoType := & dlppb . CustomInfoType {
InfoType : & dlppb . InfoType {
Name : infoTypeName ,
},
// Specify the regex pattern the inspection will look for.
Type : & dlppb . CustomInfoType_Regex_ {
Regex : & dlppb . CustomInfoType_Regex {
Pattern : customRegexPattern ,
},
},
Likelihood : dlppb . Likelihood_POSSIBLE ,
}
// Construct the Inspect request to be sent by the client.
req := & dlppb . InspectContentRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/global" , projectID ),
Item : contentItem ,
// Construct the configuration for the Inspect request.
InspectConfig : & dlppb . InspectConfig {
CustomInfoTypes : [] * dlppb . CustomInfoType {
customInfoType ,
},
IncludeQuote : true ,
},
}
// Send the request.
resp , err := client . InspectContent ( ctx , req )
if err != nil {
return err
}
// Parse the response and process results
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
import com.google.privacy.dlp.v2. ByteContentItem ;
import com.google.privacy.dlp.v2. ByteContentItem . BytesType ;
import com.google.privacy.dlp.v2. ContentItem ;
import com.google.privacy.dlp.v2. CustomInfoType ;
import com.google.privacy.dlp.v2. CustomInfoType . Regex ;
import com.google.privacy.dlp.v2. Finding ;
import com.google.privacy.dlp.v2. InfoType ;
import com.google.privacy.dlp.v2. InspectConfig ;
import com.google.privacy.dlp.v2. InspectContentRequest ;
import com.google.privacy.dlp.v2. InspectContentResponse ;
import com.google.privacy.dlp.v2. Likelihood ;
import com.google.privacy.dlp.v2. LocationName ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
public class InspectWithCustomRegex {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String textToInspect = "Patients MRN 444-5-22222" ;
String customRegexPattern = "[1-9]{3}-[1-9]{1}-[1-9]{5}" ;
inspectWithCustomRegex ( projectId , textToInspect , customRegexPattern );
}
// Inspects a BigQuery Table
public static void inspectWithCustomRegex (
String projectId , String textToInspect , String customRegexPattern ) throws IOException {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DlpServiceClient dlp = DlpServiceClient . create ()) {
// Specify the type and content to be inspected.
ByteContentItem byteItem =
ByteContentItem . newBuilder ()
. setType ( BytesType . TEXT_UTF8 )
. setData ( ByteString . copyFromUtf8 ( textToInspect ))
. build ();
ContentItem item = ContentItem . newBuilder (). setByteItem ( byteItem ). build ();
// Specify the regex pattern the inspection will look for.
Regex regex = Regex . newBuilder (). setPattern ( customRegexPattern ). build ();
// Construct the custom regex detector.
InfoType infoType = InfoType . newBuilder (). setName ( "C_MRN" ). build ();
CustomInfoType customInfoType =
CustomInfoType . newBuilder (). setInfoType ( infoType ). setRegex ( regex ). build ();
// Construct the configuration for the Inspect request.
InspectConfig config =
InspectConfig . newBuilder ()
. addCustomInfoTypes ( customInfoType )
. setIncludeQuote ( true )
. setMinLikelihood ( Likelihood . POSSIBLE )
. build ();
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
// The string to inspect
// const string = 'Patients MRN 444-5-22222';
// The regex pattern to match for
// const customRegex = '[1-9]{3}-[1-9]{1}-[1-9]{5}';
async function inspectWithCustomRegex () {
// Construct item to inspect
const item = {
byteItem : {
type : DLP . protos . google . privacy . dlp . v2 . ByteContentItem . BytesType
. TEXT_UTF8 ,
data : Buffer . from ( string , 'utf-8' ),
},
};
// Construct the custom regex detector.
const customInfoTypes = [
{
infoType : {
name : 'C_MRN' ,
},
likelihood : DLP . protos . google . privacy . dlp . v2 . Likelihood . POSSIBLE ,
regex : {
pattern : customRegex ,
},
},
];
// Construct request
const request = {
parent : `projects/ ${ projectId } /locations/global` ,
inspectConfig : {
customInfoTypes : customInfoTypes ,
includeQuote : true ,
},
item : item ,
};
// Run request
const [ response ] = await dlp . inspectContent ( request );
const findings = response . result . findings ;
if ( findings . length > 0 ) {
console . log ( 'Findings: \n' );
findings . forEach ( finding = > {
console . log ( `InfoType: ${ finding . infoType . name } ` );
console . log ( `\tQuote: ${ finding . quote } ` );
console . log ( `\tLikelihood: ${ finding . likelihood } \n` );
});
} else {
console . log ( 'No findings.' );
}
}
inspectWithCustomRegex ();
PHP
To learn how to install and use the client library for Sensitive Data Protection, see
Sensitive Data Protection client libraries .
To authenticate to Sensitive Data Protection, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Dlp\V2\Client\DlpServiceClient;
use Google\Cloud\Dlp\V2\ContentItem;
use Google\Cloud\Dlp\V2\CustomInfoType;
use Google\Cloud\Dlp\V2\CustomInfoType\Regex;
use Google\Cloud\Dlp\V2\InfoType;
use Google\Cloud\Dlp\V2\InspectConfig;
use Google\Cloud\Dlp\V2\InspectContentRequest;
use Google\Cloud\Dlp\V2\Likelihood;
/**
* Inspect data with a custom regex
* Regex example: Matching medical record numbers. The following sample uses a regular expression custom infoType detector that instructs Cloud DLP to match a medical record number (MRN) in the input text "Patient's MRN 444-5-22222," and then assigns each match a likelihood of POSSIBLE.
*
* @param string $projectId The Google Cloud project id to use as a parent resource.
* @param string $textToInspect The string to inspect.
*/
function inspect_custom_regex(
// TODO(developer): Replace sample parameters before running the code.
string $projectId,
string $textToInspect = 'Patients MRN 444-5-22222'
): void {
// Instantiate a client.
$dlp = new DlpServiceClient();
$parent = "projects/$projectId/locations/global";
// Specify what content you want the service to Inspect.
$item = (new ContentItem())
->setValue($textToInspect);
// Specify the regex pattern the inspection will look for.
$customRegexPattern = '[1-9]{3}-[1-9]{1}-[1-9]{5}';
// Construct the custom regex detector.
$cMrnDetector = (new InfoType())
->setName('C_MRN');
$customInfoType = (new CustomInfoType())
->setInfoType($cMrnDetector)
->setRegex((new Regex())
->setPattern($customRegexPattern))
->setLikelihood(Likelihood::POSSIBLE);
// Construct the configuration for the Inspect request.
$inspectConfig = (new InspectConfig())
->setCustomInfoTypes([$customInfoType])
->setIncludeQuote(true);
// Run request
$inspectContentRequest = (new InspectContentRequest())
->setParent($parent)
->setInspectConfig($inspectConfig)
->setItem($item);
$response = $dlp->inspectContent($inspectContentRequest);
// Print the results
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
import google.cloud.dlp
def inspect_data_with_custom_regex_detector (
project : str ,
content_string : str ,
) - > None :
"""Uses the Data Loss Prevention API to analyze string with medical record
number custom regex detector
Args:
project: The Google Cloud project id to use as a parent resource.
content_string: The string to inspect.
Returns:
None; the response from the API is printed to the terminal.
"""
# Instantiate a client.
dlp = google . cloud . dlp_v2 . DlpServiceClient ()
# Construct a custom regex detector info type called "C_MRN",
# with ###-#-##### pattern, where each # represents a digit from 1 to 9.
# The detector has a detection likelihood of POSSIBLE.
custom_info_types = [
{
"info_type" : { "name" : "C_MRN" },
"regex" : { "pattern" : "[1-9] {3} -[1-9] {1} -[1-9] {5} " },
"likelihood" : google . cloud . dlp_v2 . Likelihood . POSSIBLE ,
}
]
# Construct the configuration dictionary with the custom regex info type.
inspect_config = {
"custom_info_types" : custom_info_types ,
"include_quote" : True ,
}
# Construct the `item`.
item = { "value" : content_string }
# Convert the project id into a full resource id.
parent = f "projects/ { project } "
# Call the API.
response = dlp . inspect_content (
request = { "parent" : parent , "inspect_config" : inspect_config , "item" : item }
)
# Print out the results.
if response . result . findings :
for finding in response . result . findings :
print ( f "Quote: { finding . quote } " )
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
"value" : "Patients MRN 444-5-22222"
} ,
"inspectConfig" :{
"customInfoTypes" : [
{
"infoType":{
"name":"C_MRN"
},
"regex":{
"pattern":"[1-9 ] { 3 } -[ 1-9 ] { 1 } -[ 1-9 ] { 5 } "
},
" likelihood ":" POSSIBLE "
}
]
}
}
JSON Output:
{
"result":{
"findings":[
{
"infoType":{
"name":"C_MRN"
},
"likelihood":"POSSIBLE",
"location":{
"byteRange":{
"start":"13",
"end":"24"
},
"codepointRange":{
"start":"13",
"end":"24"
}
},
"createTime":"2018-11-30T01:29:37.799Z"
}
]
}
}
The output shows that, using the custom infoType detector we gave the name
C_MRN and its custom regex, Sensitive Data Protection has correctly
identified the medical record number and assigned it a certainty of POSSIBLE ,
as we specified.
Customizing match likelihood
builds on this example to include context words.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
