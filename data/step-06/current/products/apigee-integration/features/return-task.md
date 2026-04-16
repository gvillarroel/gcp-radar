---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:03:12.349Z"
product_name: "Apigee Integration"
product_slug: "apigee-integration"
feature_name: "Return task"
feature_slug: "return-task"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task"
  - "https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task"
keywords:
  - "customize"
  - "response"
  - "messages"
  - "return"
  - "http"
  - "error"
  - "introduces"
  - "task"
---

# Return task

Product: Apigee Integration
Coverage: MEDIUM

## Step 02 Summary

Introduces a Return task to customize HTTP error-response messages during integration execution failures.

## Extended Definition

Introduces a Return task to customize HTTP error-response messages during integration execution failures.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- [https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task](https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task](https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task)

## Supporting Pages

### Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- Source ID: `site-docs-root-required-2`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns: The response text or any set of values that can be turned into a Response object using make response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make response>. """ try : request json = request . get json ( silent = True ) event = Event ( request json ) run ( event ) except : event . set error () return event . get response () requirements.txt Function dependencies, for example: package>=version For more information about response format, see ValueType .
- Returns: Parameter value. """ value = param [ 'value' ] if len ( value ) != 1 : raise RuntimeError ( 'param does not have size of 1' ) for value name in VALUE NAME : if value name in value : if value name == 'protoValue' and value [ value name ][ '@type' ] == VALUE TYPE URL : return value [ value name ][ 'value' ] return value [ value name ] for array value name in ARRAY VALUE NAME : if array value name in value : return value [ array value name ][ ARRAY VALUE NAME [ array value name ]] raise RuntimeError ( 'Cannot get value from param ' + str ( param )) def set error ( self ): """Set the cloud function error to event parameters in order for user to see on IP.""" self . set ( CLOUD FUNCTION EXCEPTION KEY , traceback . format exc ()) def log ( self , message ): self . log . append ( str ( message )) def get response ( self ): """Get the response that can be returned to IP.
- For example, if you have an integration variable named EmployeeName that you want to use in your Cloud Function source file, define the following task parameters: Key : EmployeeKey Value : EmployeeName The following sample script shows the usage of set and get functions to access the defined integration variables. def run ( event ): Read the integration variable EmployeeName using the reference variable EmployeeKey value = event . get ( ' EmployeeKey ' ); Change the integration variable EmployeeName value using the reference variable EmployeeKey event . set ( ' EmployeeKey ' , ' XYZ ' ); The new value of the integration variable is retained throughout the Cloud Function task. return Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- Returns: The response text or any set of values that can be turned into a Response object using make response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make response>. """ if self . log : self . set ( CLOUD FUNCTION LOGGING KEY , self . log ) res = { 'eventParameters' : self . event params , } return jsonify ( res ) def execute function ( request ): """Entry point of the cloud function.

### "Call REST Endpoint task \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task](https://docs.cloud.google.com/application-integration/docs/call-rest-endpoint-task)
- Source ID: `site-docs-reference-required-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For other HTTP response codes, return error code and error message in the response.
- To learn how to handle retry strategies for 4xx or 5xx errors, see the How to retry Rest Caller Task based on Response Status blog.
- Response status (<Task name>) String HTTP response code and the corresponding code text from the REST APIs response.
- Task should fail on HTTP error Boolean Exception handling strategy when the REST API call fails.

### "Call REST Endpoint task \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task](https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task)
- Source ID: `site-docs-root-required-2`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For other HTTP response codes, return error code and error message in the response.
- To learn how to handle retry strategies for 4xx or 5xx errors, see the How to retry Rest Caller Task based on Response Status blog.
- Response status (<Task name>) String HTTP response code and the corresponding code text from the REST APIs response.
- Task should fail on HTTP error Boolean Exception handling strategy when the REST API call fails.

