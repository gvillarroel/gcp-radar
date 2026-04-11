---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.441Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Python user-defined functions in BigQuery"
feature_slug: "python-user-defined-functions-in-bigquery"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "UDF dependencies"
  - "Python-defined UDF"
  - "Python user-defined function"
  - "external libraries"
  - "Python UDF"
  - "Python UDFs"
  - "Python APIs"
  - "CREATE FUNCTION"
---

# Python user-defined functions in BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery now supports creating and using Python UDFs with support for external libraries and APIs.

## Extended Definition

Python user-defined functions (Python UDFs) in BigQuery are custom query functions defined with `CREATE FUNCTION` in BigQuery SQL and used to run custom Python logic as part of data processing. The DDL for Python UDFs includes Python-specific options, including a `runtime version` and a `packages` array for installing Python packages, which supports dependency management for function execution. Example BigQuery tutorials also show Python UDF use cases (for example, chunking PDF objects and transforming images), and the docs note that using Python UDFs incurs costs.

## Evidence Summary

The cited pages together show that BigQuery supports Python UDF creation via SQL DDL, define Python-specific function options (runtime and package dependencies), and provide usage examples with billing implications.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-root-2`
- Final score: 60
- Re-rank relevance: STRONG
- Re-rank rationale: The tutorial explicitly uses Python UDFs to transform images and chunk PDFs and discusses their associated costs.

Evidence snippets:
- For more information about, see the following pricing pages: BigQuery pricing BigQuery Python UDFs pricing Cloud Storage pricing Vertex AI pricing Before you begin In the Google Cloud console, on the project selector page, select or create a Google Cloud project.
- BigQuery Python UDFs : you incur costs for using Python UDFs.
- For more information, see Set up ADC for a local development environment . df grayscale = df products mm [[ "product id" , "product name" , "image" ]] df grayscale [ "gray image uri" ] = f "gs:// { BUCKET } /cymbal-pets-images/grayscale/" + df grayscale [ "image" ] . struct . field ( "uri" ) . str . extract ( r "([^/]+)$" ) df grayscale [ "gray image" ] = bbq . obj . make ref ( df grayscale [ "gray image uri" ], "us.cymbal conn" ) df grayscale [ "image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "image" ], "r" ) ) df grayscale [ "gray image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "gray image" ], "rw" ) ) df grayscale [[ "image url" , "gray image url" ]] . apply ( to grayscale , axis = 1 ) The results look similar to the following: +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ f0 +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images/grayscale/ocean-bites-salmon-&-tuna-cat-food.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ ... +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Create a Python UDF to chunk PDF data Create a Python UDF to chunk the PDF objects that contain the Cymbal pets product manuals into multiple parts.
- Return the description only. " df agg [ "prompt" ] = bbq . struct ( df prompt [[ "prompt0" , "image" , "description" , "category" , "subcategory" ]] ) df agg = df agg . reset index () df agg = bbq . ai . generate table ( gemini model , df agg , output schema = { "brand description" : "STRING" } ) df agg [[ "brand" , "brand description" , "cnt" ]] The results look similar to the following: +--------------+-------------------------------------+-----+ brand brand.description cnt +--------------+-------------------------------------+-----+ AquaClear AquaClear is a brand of aquarium 33 and pond care products that offer a wide range of solutions for... +--------------+-------------------------------------+-----+ Ocean Ocean Bites is a brand of cat food 28 Bites that offers a variety of recipes and formulas to meet the specific.. +--------------+-------------------------------------+-----+ ... ... ... +--------------+-------------------------------------+-----+ Create a Python UDF to transform product images Create a Python UDF to convert product images to grayscale.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- CREATE FUNCTION mydataset . remoteMultiplyInputs ( x FLOAT64 , y FLOAT64 ) RETURNS FLOAT64 REMOTE WITH CONNECTION us . myconnection OPTIONS ( endpoint = "https://us-central1-myproject.cloudfunctions.net/multiply" ); Create a Python UDF The following example creates a Python UDF named multiplyInputs .
- Applies only to remote functions and Python UDFs. runtime version STRING The name of the runtime version to run provided Python code.
- Applies only to Python UDFs. packages ARRAY<STRING> An array of Python packages to install in the function definition.
- Applies only to JavaScript and Python UDFs.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- To correct the error, include the project ID in the table reference: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project1 . mydataset . mytable ) ); You can also reference an entity in a different project or dataset from the one where you create the function: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM project2 . another dataset . another table ) ); Use system variables with SQL UDFs The @@session id and @@location system variables are supported with SQL UDFs.
- SQL UDFs The following example creates a temporary SQL UDF named AddFourAndDivide and calls the UDF from within a SELECT statement: CREATE TEMP FUNCTION AddFourAndDivide ( x INT64 , y INT64 ) RETURNS FLOAT64 AS ( ( x + 4 ) / y ); SELECT val , AddFourAndDivide ( val , 2 ) FROM UNNEST ( [ 2 , 3 , 5 , 8 ] ) AS val ; This example produces the following output: +-----+-----+ val f0 +-----+-----+ 2 3.0 3 3.5 5 4.5 8 6.0 +-----+-----+ The next example creates the same function as a persistent UDF: CREATE FUNCTION mydataset .
- For example, avoid the following pattern: -- Avoid this pattern CREATE FUNCTION temp . mutable () RETURNS INT64 LANGUAGE js AS r " "" var i = 0; // Mutable state function dontDoThis() { return ++i; } return dontDoThis() "" " ; Use memory efficiently The JavaScript processing environment has limited memory available per query.
- For example, consider the following statement: CREATE FUNCTION project1 . mydataset . myfunction () AS ( ( SELECT COUNT ( ) FROM mydataset . mytable ) ); If you run this statement from project1 and mydataset.mytable exists in project1 , then the statement succeeds.

