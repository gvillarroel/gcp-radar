---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.609Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Rounding mode for NUMERIC and BIGNUMERIC columns"
feature_slug: "rounding-mode-for-numeric-and-bignumeric-columns"
latest_feature_date: "2023-04-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function"
  - "https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers"
keywords:
  - "rounding"
  - "mode"
  - "numeric"
  - "bignumeric"
  - "columns"
  - "bigquery"
  - "supports"
  - "configurable"
---

# Rounding mode for NUMERIC and BIGNUMERIC columns

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports configurable rounding modes for parameterized NUMERIC and BIGNUMERIC columns and in the ROUND function.

## Extended Definition

BigQuery supports configurable rounding modes for parameterized NUMERIC and BIGNUMERIC columns and in the ROUND function.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)

## Supporting Pages

### "Deploy and apply a remote function using BigQuery DataFrames \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-remote-function)
- Source ID: `site-docs-reference-required-15`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The BigQuery remote function created to support the BigQuery DataFrames remote function can be located via a property bigframes remote function set in the remote function object. print ( f "Created BQ remote function: { get bucket . bigframes remote function } " ) The cloud function can be located via another property bigframes cloud function set in the remote function object. print ( f "Created cloud function: { get bucket . bigframes cloud function } " ) Warning: The deployed cloud function may be visible to other users with sufficient privilege in the project, so the user should be careful about having any sensitive data in the code that will be deployed as a remote function.
- One can find more details about the usage and the requirements via help command. help ( bpd . remote function ) Read a table and inspect the column of interest. df = bpd . read gbq ( "bigquery-public-data.ml datasets.penguins" ) df [ "body mass g" ] . head ( 10 ) Define a custom function, and specify the intent to turn it into a remote function.
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Set BigQuery DataFrames options bpd . options . bigquery . project = your gcp project id bpd . options . bigquery . location = "US" BigQuery DataFrames gives you the ability to turn your custom scalar functions into a BigQuery remote function.
- For that, there is a google cloud function deployed by serializing the user code, and a BigQuery remote function created to call the cloud function via the latter's http endpoint on the data in the DataFrame.

### Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- To see a list of previous driver versions, expand the following section: Previous Simba ODBC driver versions 3.1.6.1026 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.5.1022 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.4.1020 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.2.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.2.1004 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.7.1016 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.5.1011 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.4.1008 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.3.1006 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.2.1005 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.0.1001 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.5.2.1004 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.5.0.1001 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.6.1015 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.5.1014 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.3.1012 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.1.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.0.1002 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.5.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.3.1005 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.2.1003 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS Install and configure the Simba JDBC driver for BigQuery Note: As an alternative to the Simba JDBC driver, a Google-developed JDBC driver for BigQuery is available in Preview .
- To see a list of previous driver versions, expand the following section: Previous Simba JDBC driver versions 1.6.5.1001 1.6.3.1004 1.6.2.1003 1.6.1.1002 1.5.4.1008 1.5.0.1001 1.3.3.1004 1.3.2.1003 1.3.0.1001 1.2.25.1029 1.2.23.1027 1.2.22.1026 1.2.21.1025 1.2.19.1023 1.2.18.1022 1.2.16.1020 1.2.14.1017 1.2.1.1001 (JDBC 4.2-compatible) 1.2.1.1001 (JDBC 4.1-compatible) Support Support for the Simba ODBC and JDBC drivers for BigQuery is available through standard Cloud Customer Care channels.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the High-Throughput API: resourcemanager.projects.get resourcemanager.projects.list bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update You might also be able to get these permissions with custom roles or other predefined roles .
- Install and configure the Simba ODBC driver for BigQuery Download the 3.1.6.3037 version of the driver for your operating system: Windows 32-bit ( .msi file) Windows 64-bit ( .msi file) Linux 32-bit and 64-bit ( .tar.gz file) macOS ( .dmg file) Follow the instructions in the insightsoftware installation and configuration guide .

### "Remote functions and Translation API tutorial \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial](https://docs.cloud.google.com/bigquery/docs/remote-functions-translation-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Args: request: HTTP request from BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#input format Returns: HTTP response to BigQuery https://cloud.google.com/bigquery/docs/reference/standard-sql/remote-functions#output format """ try : Parse request data as JSON request json = request . get json () Get the project of the query caller = request json [ "caller" ] project = extract project from caller ( caller ) if project is None : return flask . make response ( flask . jsonify ( { "errorMessage" : ( 'project can \' t be extracted from "caller":' f " { caller } ." ) } ), 400 , ) Get the target language code, default is Spanish ("es") context = request json . get ( "userDefinedContext" , {}) target = context . get ( "target language" , "es" ) calls = request json [ "calls" ] translated = translate text ([ call [ 0 ] for call in calls ], project , target ) return flask . jsonify ({ "replies" : translated }) except Exception as err : return flask . make response ( flask . jsonify ({ "errorMessage" : f "Unexpected error { type ( err ) } : { err } " }), 400 , ) def extract project from caller ( job : str ) - > str : """Extract project id from full resource name of a BigQuery job.
- Enable the APIs Required roles for your account To get the permissions that you need to perform the tasks in this tutorial, ask your administrator to grant you the following IAM roles on your project: BigQuery Data Owner ( roles/bigquery.dataOwner ) BigQuery Connection Admin ( roles/bigquery.connectionAdmin ) Cloud Functions Developer ( roles/cloudfunctions.developer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Args: job: full resource name of a BigQuery job, like "//bigquery.googleapi.com/projects/<project>/jobs/<job id>" Returns: project id which is contained in the full resource name of the job. """ path = job . split ( "/" ) return path [ 4 ] if len ( path ) > 4 else None def translate text ( calls : list [ str ], project : str , target language code : str ) - > list [ str ]: """Translates the input text to specified language using Translation API.
- SELECT text , remote function test . translate text ( text ) AS translated text FROM ( SELECT text FROM bigquery-public-data.hacker news.full LIMIT 3 ); The results are similar to the following: +---------------------------------------------------------------------------+ text translated text +---------------------------------------------------------------------------+ These benchmarks look good.

