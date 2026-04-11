---
title: "Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/application-integration/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task
  title: "Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Integration
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Function task
The Cloud Function task lets you configure and run Cloud Run functions from your integration. Cloud Run functions represent the next evolution of Cloud Functions, offering an event-driven programming model with enhanced control and scalability, leveraging the Cloud Run serverless platform. Cloud Run functions provide a single serverless solution for all workload types.
The Cloud Function task supports the following versions of Cloud Run functions:
Cloud Functions (1st gen)
Cloud Run functions created using the Cloud Functions v2 API
For detailed information about the differences between Cloud Run functions versions, see the Cloud Functions comparison guide.
Note: This document uses the terms Cloud Run functions (1st gen), Cloud Functions (1st gen) and, Cloud Functions interchangeably.
Before you begin
Ensure that you perform the following tasks in your Google Cloud project before configuring the Cloud Function task.
To connect to Cloud Function, ensure that you have either created
an OAuth 2.0 profile or attached a user-managed service account to your integration:
If your integration has a service account attached, assign the Cloud Function Invoker IAM role to that service account.
For information about granting roles to a service account, see Manage access to service accounts .
The Cloud Function task only supports authentication profiles of type Google OIDC ID Token .
Create an authentication profile of type Google OIDC ID Token using the service account with the Cloud Functions Invoker IAM role assigned.
If your Cloud Function task does not require authentication,
the Authentication profile field in the task configuration pane can be left empty.
If your integration has both OIDC ID profile and a user-managed service account configured, then by default the OIDC ID profile is used for authentication. If neither OIDC ID profile nor user-managed service account is configured, then the default service account ( service- PROJECT_NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) is used to call the Cloud Function task.
Ensure that VPC Service Controls is not set up for Application Integration in your Google Cloud project.
Warning: Cloud Function does not function, or stops functioning, if VPC Service Controls is set up for Application Integration in your Google Cloud project.
Configure the Cloud Function task
To configure the Cloud Function task in your integration,
perform the following steps:
In the navigation menu, click Integrations .
This opens the list of available integrations in the
Application Integration UI.
Select an existing integration or click Create integration .
If you are creating a new integration, enter a name and description in
the create dialog, and click Create .
From the Tasks drop-down, click Cloud Function to place it in the
integration editor.
Click the Cloud Function element on the designer to
open the configuration pane, then click
Configure Cloud Function .
If you are prompted to grant permissions to the service account, click
Grant .
Application Integration automatically grants the required permissions to the
service account.
In the Cloud Function configuration pane, select one of the following options:
Link existing function: Select this option to associate an existing function with your integration. You can link Cloud Functions (1st gen) and Cloud Functions created with the Cloud Functions v2 API from your integration.
In the Cloud Function Trigger URL field, enter the trigger URL of the existing function.
The URL should follow one of the following formats:
# For Cloud Functions (1st gen)
https:// REGION_NAME - PROJECT_ID .cloudfunctions.net/ FUNCTION_NAME
# For Cloud Run functions created using the Cloud Functions v2 API
https:// FUNCTION_NAME - PROJECT_ID . REGION_NAME .run.app
Important: Ensure that the source files for the existing Cloud Function adhere to the format specified in the Cloud Function template .
Create new function: Select this option to create a new function for the integration.
In the Function Name field, enter a unique name for the new Cloud Run functions.
From the Region drop-down, select the region where the Cloud Run functions is deployed.
From the Function Version dropdown, select the desired Cloud Run functions version:
Cloud Functions (1st Gen): This is the legacy version of Cloud Run functions, formerly known as Cloud Functions (1st gen), which uses the .cloudfunctions.net endpoint format.
Cloud Functions (Latest Gen): This is the latest version of Cloud Run functions, created using Cloud Functions v2 API. Built on Cloud Run and Eventarc, it supports extended request timeouts (up to 60 minutes), offers increased concurrency, and uses both .cloudfunctions.net and .run.app endpoint formats.
For more information about the differences between the two versions, see Compare Cloud Functions .
Click Save .
Configuring a Cloud Function task in Application Integration creates a basic HTTP-
triggered Cloud Run functions in your Google Cloud project.
Cloud function template
The following samples show how to use the Cloud Function task in your integration for different languages.
Python
When configuring the Cloud Function using an existing Cloud Run functions, make sure that the function's main.py , task.py , and requirements.txt source files are in the following format:
task.py
# Sample Code:
# print(event.get('task_string_key'))
# event.set('task_int_array_key', [456, 789]);
# event.log('some logging')
def run ( event ):
"""Actual cloud function custom logic.
Args:
event : event object in main.py that contains all parameters.
"""
return
main.py
"""Un-editable platform wrapper which invokes user code."""
import traceback
from flask import json
from flask import jsonify
from task import run
VALUE_NAME = [
'stringValue' , 'intValue' , 'doubleValue' , 'booleanValue' , 'protoValue'
]
ARRAY_VALUE_NAME = {
'stringArray' : 'stringValues' ,
'intArray' : 'intValues' ,
'doubleArray' : 'doubleValues' ,
'booleanArray' : 'booleanValues' ,
'protoArray' : 'protoValues'
}
VALUE_TYPE_URL = 'type.googleapis.com/google.protobuf.Value'
CLOUD_FUNCTION_EXCEPTION_KEY = 'CloudFunctionException'
CLOUD_FUNCTION_LOGGING_KEY = 'CloudFunctionLogging'
class _Event ( object ):
"""Event object."""
def __init__ ( self , json_payload ):
self . _event_params = json_payload . get ( 'eventParameters' , dict ())
self . _task_params = json_payload . get ( 'taskParameters' , dict ())
self . _log = []
print ( 'Event param is ' + str ( self . _event_params ))
print ( 'Task param is ' + str ( self . _task_params ))
def set ( self , key , value ):
"""Set the event parameters key-value.
Args:
key: parameter key.
value: parameter value.
"""
new_param = self . _create_param ( key , value )
param = self . _get_param_by_key ( key )
if param is None :
if 'parameters' not in self . _event_params :
self . _event_params [ 'parameters' ] = []
self . _event_params [ 'parameters' ] . append ( new_param )
else :
param [ 'value' ] = new_param [ 'value' ]
def _create_param ( self , key , value ):
"""Create a new parameter with given key value pair.
Args:
key: parameter key.
value: parameter value.
Returns:
parameter.
"""
new_param = {}
new_param [ 'key' ] = key
if isinstance ( value , str ):
new_param [ 'value' ] = { 'stringValue' : value }
elif isinstance ( value , int ):
new_param [ 'value' ] = { 'intValue' : value }
elif isinstance ( value , float ):
new_param [ 'value' ] = { 'doubleValue' : value }
elif isinstance ( value , bool ):
new_param [ 'value' ] = { 'booleanValue' : value }
elif isinstance ( value , dict ):
if 'type@' in value :
new_param [ 'value' ] = { 'protoValue' : value }
else :
new_param [ 'value' ] = {
'protoValue' : {
'@type' : 'type.googleapis.com/google.protobuf.Value' ,
'value' : value
}
}
elif isinstance ( value , list ):
if not value :
raise RuntimeError ( 'Cannot create a param with empty list' )
if any ( not isinstance ( val , type ( value [ 0 ])) for val in value ):
print ( 'Not all elements in the list have the same type' )
new_param [ 'value' ] = {
'protoValue' : {
'@type' : 'type.googleapis.com/google.protobuf.Value' ,
'value' : value
}
}
elif isinstance ( value [ 0 ], str ):
new_param [ 'value' ] = { 'stringArray' : { 'stringValues' : value }}
elif isinstance ( value [ 0 ], int ):
new_param [ 'value' ] = { 'intArray' : { 'intValues' : value }}
elif isinstance ( value [ 0 ], float ):
new_param [ 'value' ] = { 'doubleArray' : { 'doubleValues' : value }}
elif isinstance ( value [ 0 ], bool ):
new_param [ 'value' ] = { 'booleanArray' : { 'booleanValues' : value }}
elif isinstance ( value [ 0 ], dict ):
if all ( '@type' in val and val [ '@type' ] == value [ 0 ][ '@type' ]
for val in value ):
new_param [ 'value' ] = { 'protoArray' : { 'protoValues' : value }}
else :
new_param [ 'value' ] = {
'protoValue' : {
'@type' : 'type.googleapis.com/google.protobuf.Value' ,
'value' : value
}
}
else :
raise RuntimeError ( 'The type ' + type ( value [ 0 ]) +
' in the list is not supported' )
else :
raise RuntimeError ( 'Value ' + str ( value ) + ' has the type ' +
type ( value ) + ' that is not supported' )
return new_param
def get ( self , key ):
"""Get the event parameter value for specified key.
Args:
key: parameter key.
Returns:
Parameter value.
"""
param = self . _get_param_by_key ( key )
if param is None :
raise RuntimeError ( 'Can not find param with key ' + key )
return self . _get_param_value ( param )
def _get_param_by_key ( self , key ):
"""Get the parameter for specified key.
Args:
key: parameter key.
Returns:
Parameter.
"""
param = self . _get_param_by_key_from_params ( key , self . _task_params )
if param is None :
return self . _get_param_by_key_from_params ( key , self . _event_params )
value = self . _get_param_value ( param )
if isinstance ( value , str ) and len ( value ) > 2 and value . startswith (
'$' ) and value . endswith ( '$' ):
return self . _get_param_by_key_from_params ( value [ 1 : - 1 ], self . _event_params )
return param
def _get_param_by_key_from_params ( self , key , params ):
"""Get the parameter for specified key from event parameters.
Args:
key: parameter key.
params: event parameters.
Returns:
Parameter.
"""
if not isinstance ( params , dict ) or 'parameters' not in params :
return None
for param in params [ 'parameters' ]:
if param [ 'key' ] == key :
return param
return None
def _get_param_value ( self , param ):
"""Get the parameter value for specified parameter.
Args:
param: parameter.
Returns:
Parameter value.
"""
value = param [ 'value' ]
if len ( value ) != 1 :
raise RuntimeError ( 'param does not have size of 1' )
for value_name in VALUE_NAME :
if value_name in value :
if value_name == 'protoValue' and value [ value_name ][
'@type' ] == VALUE_TYPE_URL :
return value [ value_name ][ 'value' ]
return value [ value_name ]
for array_value_name in ARRAY_VALUE_NAME :
if array_value_name in value :
return value [ array_value_name ][ ARRAY_VALUE_NAME [ array_value_name ]]
raise RuntimeError ( 'Cannot get value from param ' + str ( param ))
def set_error ( self ):
"""Set the cloud function error to event parameters in order for user to see on IP."""
self . set ( CLOUD_FUNCTION_EXCEPTION_KEY , traceback . format_exc ())
def log ( self , message ):
self . _log . append ( str ( message ))
def get_response ( self ):
"""Get the response that can be returned to IP.
Returns:
The response text or any set of values that can be turned into a
Response object using
`make_response
<http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
"""
if self . _log :
self . set ( CLOUD_FUNCTION_LOGGING_KEY , self . _log )
res = {
'eventParameters' : self . _event_params ,
}
return jsonify ( res )
def execute_function ( request ):
"""Entry point of the cloud function.
Args:
request (flask.Request): HTTP request object.
Returns:
The response text or any set of values that can be turned into a
Response object using
`make_response
<http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
"""
try :
request_json = request . get_json ( silent = True )
event = _Event ( request_json )
run ( event )
except :
event . set_error ()
return event . get_response ()
requirements.txt
# Function dependencies, for example:
# package>=version
For more information about response format, see ValueType .
Java
The following sample shows how to use the Cloud Function task in your integration. Ensure that the response follows the supported JSON format as described in the sample:
private static final Gson gson = new Gson ();
@Override
public void service ( HttpRequest request , HttpResponse response ) throws Exception {
JsonObject body = gson . fromJson ( request . getReader (), JsonObject . class );
JsonArray resParams = new JsonArray ();
for ( JsonElement param : body . getAsJsonObject ( "eventParameters" ). getAsJsonArray ( "parameters" )) {
if ( param . getAsJsonObject (). get ( "key" ). getAsString (). equals ( "input" )) {
JsonObject newParam = new JsonObject ();
newParam . addProperty ( "key" , "input" );
JsonObject value = new JsonObject ();
value . addProperty ( "stringValue" , "2" );
newParam . add ( "value" , value );
resParams . add ( newParam );
} else {
resParams . add ( param );
}
}
JsonObject parameters = new JsonObject ();
parameters . add ( "parameters" , resParams );
JsonObject res = new JsonObject ();
res . add ( "eventParameters" , parameters );
System . out . println ( res );
BufferedWriter writer = response . getWriter ();
writer . write ( res . toString ());
}
For more information about response format, see ValueType .
Javascript
The following sample shows how to use the Cloud Function task in your integration. Ensure that the response follows the supported JSON format as described in the sample:
const functions = require ( '@google-cloud/functions-framework' );
functions . http ( 'execute_function' , ( req , res ) => {
console . log ( JSON . stringify ( req . body ));
let response = { "eventParameters" : { "parameters" : [{ "key" : "input" , "value" : { "stringValue" : "2" }}]}};
res . send ( JSON . stringify ( response ));
});
For more information about response format, see ValueType .
PHP
The following sample shows how to use the Cloud Function task in your integration. Ensure that the response follows the supported JSON format as described in the sample:
use Psr\Http\Message\ServerRequestInterface;
function execute_function(ServerRequestInterface $request)
{
return '{"eventParameters":{"parameters":[{"key":"input","value":{"stringValue":"2"}}]}}';
}
For more information about response format, see ValueType .
Edit a Cloud Function task
Application Integration directs you to the appropriate Google Cloud console page to edit the Cloud Run functions based on the version type.
Cloud Functions (1st gen)
To edit a Cloud Function task that is configured using the Cloud Functions (1st gen) version, perform the following steps:
In the task configuration pane, click Open Cloud Function .
You are directed to the Cloud Functions (1st gen) > Function details page in your Google Cloud console.
Click Edit .
On the Edit function page, the Configuration step lets you edit the default configuration settings of the Cloud Function.
See Configuring Cloud Functions for more information.
Click Next to proceed to the Code step and edit the Cloud Function's source code.
By default, the Cloud Function contains the following source files:
main.py : This file contains the initialization code to run the Cloud Function from your integration.
Caution: Do not edit or modify the main.py file.
task.py : This file contains the executable code of the Cloud Function.
Write your script inside the run(event) function. This function is called when the Cloud Function task executes.
The event object from the main.py file contains all the task parameters.
See Access integration variables for information about how to use the variables defined at the integration level in your script.
Click Deploy .
Cloud Run functions
To edit a Cloud Function task that is configured using the Cloud Functions (Latest Gen) version, perform the following steps:
In the task configuration pane, click Open Cloud Function .
You are redirected to the Cloud Run functions > Service details page in your Google Cloud console.
On the Source tab, click Edit source to edit the source code files of the Cloud Run functions.
By default, the Cloud Run functions contain the following source files:
main.py : This file contains the initialization code to run the Cloud Functions from your integration.
Caution: Do not edit or modify the main.py file.
task.py : This file contains the executable code of the Cloud Functions.
Write your script inside the run(event) function. This function is called when the Cloud Run functions task executes.
The event object from the main.py file contains all the task parameters.
See Access integration variables for information about how to use the variables defined at the integration level in your script.
Click Save and redeploy .
Access integration variables
To access an integration variable in your Cloud Function, pass the variable as
task parameter to the Cloud Function task. The task parameter is a key-value pair where Key is the name of the reference variable used in your Cloud Function source file and the Value is the corresponding integration variable name that the reference variable points to.
You can add one or more task parameters in the Task parameters section of the task configuration pane.
The following methods are used to access integration variables from your Cloud Function:
set : Writes the value to a variable.
get : Reads the value of a variable.
For example, if you have an integration variable named EmployeeName that you want to use in your Cloud Function source file, define the following task parameters:
Key : EmployeeKey
Value : EmployeeName
The following sample script shows the usage of set and get functions to access the defined integration variables.
def run ( event ):
# Read the integration variable EmployeeName using the reference variable EmployeeKey
value = event . get ( ' EmployeeKey ' );
# Change the integration variable EmployeeName value using the reference variable EmployeeKey
event . set ( ' EmployeeKey ' , ' XYZ ' );
# The new value of the integration variable is retained throughout the Cloud Function task.
return
Error handling strategy
An error handling strategy for a task specifies the action to take if the task fails due to a temporary error . For information about how to use an error handling strategy, and to know about the different types of error handling strategies, see Error handling strategies .
SLA exclusions
The Cloud Function task has a dependency on
the Google Cloud Functions product.
Because this dependency is external to Application Integration, all executions of
active integrations that fail because of the failure in
the Cloud Function task are excluded from
the Application Integration
Service Level Agreement (SLA) terms and conditions.
Quotas and limits
For information about quotas and limits for both Cloud Run functions and Cloud Functions (1st gen), see Configuration Comparison .
What's next
Learn about all tasks and triggers .
Learn how to test and publish an integration .
Learn about error handling .
Learn about integration execution logs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
