---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.491Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Return task"
feature_slug: "return-task"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/configure-return-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task"
  - "https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task"
keywords:
  - "customizing"
  - "mappings"
  - "http"
  - "message"
  - "return"
  - "error"
  - "allows"
  - "task"
---

# Return task

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

The Return task allows customizing error message mappings for HTTP response codes returned during integration execution failures.

## Extended Definition

The Return task allows customizing error message mappings for HTTP response codes returned during integration execution failures.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/configure-return-task](https://docs.cloud.google.com/application-integration/docs/configure-return-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- [https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task](https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task)

## Supporting Pages

### Return task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-return-task](https://docs.cloud.google.com/application-integration/docs/configure-return-task)
- Source ID: `site-docs-reference-2`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- You can modify or customize error messages for the following HTTP response codes: HTTP code Canonical code 400 INVALID ARGUMENT 400 OUT OF RANGE 401 UNAUTHENTICATED 403 PERMISSION DENIED 404 NOT FOUND 409 ALREADY EXISTS 429 RESOURCE EXHAUSTED 499 CANCELLED Configure the Return task To configure the Return task: In the Google Cloud console, go to the Application Integration page.
- Return task The Return task lets you customize the error messages corresponding to the HTTP response codes that are returned during an integration execution failure.
- Customized return message String The custom error message for the specified HTTP code.
- Property Data type Description HTTP code Integer The 4XX HTTP code for which you want to customize the error message.

### Cloud Function task \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task](https://docs.cloud.google.com/application-integration/docs/configure-cloud-function-task)
- Source ID: `site-docs-root-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns: Parameter value. """ value = param [ 'value' ] if len ( value ) != 1 : raise RuntimeError ( 'param does not have size of 1' ) for value name in VALUE NAME : if value name in value : if value name == 'protoValue' and value [ value name ][ '@type' ] == VALUE TYPE URL : return value [ value name ][ 'value' ] return value [ value name ] for array value name in ARRAY VALUE NAME : if array value name in value : return value [ array value name ][ ARRAY VALUE NAME [ array value name ]] raise RuntimeError ( 'Cannot get value from param ' + str ( param )) def set error ( self ): """Set the cloud function error to event parameters in order for user to see on IP.""" self . set ( CLOUD FUNCTION EXCEPTION KEY , traceback . format exc ()) def log ( self , message ): self . log . append ( str ( message )) def get response ( self ): """Get the response that can be returned to IP.
- For example, if you have an integration variable named EmployeeName that you want to use in your Cloud Function source file, define the following task parameters: Key : EmployeeKey Value : EmployeeName The following sample script shows the usage of set and get functions to access the defined integration variables. def run ( event ): Read the integration variable EmployeeName using the reference variable EmployeeKey value = event . get ( ' EmployeeKey ' ); Change the integration variable EmployeeName value using the reference variable EmployeeKey event . set ( ' EmployeeKey ' , ' XYZ ' ); The new value of the integration variable is retained throughout the Cloud Function task. return Error handling strategy An error handling strategy for a task specifies the action to take if the task fails due to a temporary error .
- Returns: The response text or any set of values that can be turned into a Response object using make response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make response>. """ try : request json = request . get json ( silent = True ) event = Event ( request json ) run ( event ) except : event . set error () return event . get response () requirements.txt Function dependencies, for example: package>=version For more information about response format, see ValueType .
- Ensure that the response follows the supported JSON format as described in the sample: use Psr\Http\Message\ServerRequestInterface; function execute function(ServerRequestInterface $request) { return '{"eventParameters":{"parameters":[{"key":"input","value":{"stringValue":"2"}}]}}'; } For more information about response format, see ValueType .

### "Call REST Endpoint task \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task](https://docs.cloud.google.com/application-integration/docs/configure-call-rest-endpoint-task)
- Source ID: `site-docs-root-2`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For other HTTP response codes, return error code and error message in the response.
- Task should fail on HTTP error Boolean Exception handling strategy when the REST API call fails.
- But returns the error code and the error message in the response.
- Note: For errors that are not related to REST API call, such as incorrect URL, the task always fail irrespective of what this option is set to.

