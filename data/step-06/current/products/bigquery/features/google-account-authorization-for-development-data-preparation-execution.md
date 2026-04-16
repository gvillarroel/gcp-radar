---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.324Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Google Account authorization for development data preparation execution"
feature_slug: "google-account-authorization-for-development-data-preparation-execution"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/authentication"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial"
keywords:
  - "account"
  - "authorization"
  - "development"
  - "preparation"
  - "execution"
  - "user"
  - "credentials"
  - "can"
---

# Google Account authorization for development data preparation execution

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Google Account user credentials can authorize running a data preparation in development.

## Extended Definition

Google Account user credentials can authorize running a data preparation in development.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Example: domain:example.com allAuthenticatedUsers A special identifier that represents all service accounts and all users on the internet who have authenticated with a Google Account.
- Required permissions The user or service account that creates a data policy must have the bigquery.dataPolicies.create permission.
- Required permissions The user or service account that updates a data policy must have the bigquery.dataPolicies.update permission.
- Required permissions The user or service account that creates a data policy must have the bigquery.dataPolicies.delete permission.

### Authenticate to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- Source ID: `site-docs-reference-required-15`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- Service account impersonation In most cases, you can use your user credentials to authenticate from a local development environment.
- If you're using a local shell, then create local authentication credentials for your user account: gcloud auth application-default login You don't need to do this if you're using Cloud Shell.
- Google Cloud CLI When you use the gcloud CLI to access BigQuery, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.

### "Analyze multimodal data with SQL and BigQuery DataFrames \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial](https://docs.cloud.google.com/bigquery/docs/multimodal-data-sql-tutorial)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up ADC for a local development environment . df manuals agg The results look similar to the following: +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ manual.uri manual.version manual.authorizer manual.details chunks.uri chunks.version chunks.authorizer chunks.details +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ gs://cloud-samples-data/bigquery/ 1742492785900455 myproject.region.myconnection {"gcs metadata":{"content type":"application/pef", gs://cloud-samples-data/bigquery/ 1745875761227129 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"c9032b037693d15a33210d638c763d0e", tutorials/cymbal-pets/documents/ "md5 hash":"5a1116cce4978ec1b094d8e8b49a1d7c", crittercuisine 5000 user manual.pdf "size":566105,"updated":1742492785941000}} crittercuisine 5000 user manual page1.pdf "size":504583,"updated":1745875761266000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ crittercuisine 5000 user manual page1.pdf 1745875760613874 myproject.region.myconnection {"gcs metadata":{"content type":"application/pdf", tutorials/cymbal-pets/documents/ "md5 hash":"94d03ec65d28b173bc87eac7e587b325", crittercuisine 5000 user manual page2.pdf "size":94622,"updated":1745875760649000}} +-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ ... ... ... ... +-------------------------------------+--------------------------------+-----------------------------------+------------------------------------------------------+-------------------------------------------+---------------------------------+------------------------------------+-------------------------------------------------------+ Run the following to generate a single response from a Gemini model based on the analysis of an array of ObjectRef values: SQL WITH manuals AS ( SELECT OBJ .
- For more information, see Set up ADC for a local development environment . result = bbq . ai . generate table ( gemini model , df manuals agg [ "prompt" ], output schema = { "page1 summary" : "STRING" , "page2 summary" : "STRING" , "page3 summary" : "STRING" , }, )[[ "page1 summary" , "page2 summary" , "page3 summary" ]] result The results look similar to the following: +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ page1 summary page2 summary page3 summary +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ This manual provides an overview of the This section explains how to program This page covers connecting the feeder to Wi-Fi CritterCuisine Pro 5000 automatic pet feeder, the feeder's clock, set feeding using the CritterCuisine Connect app, remote including its features, safety precautions, schedules, copy and delete meal settings, feeding, managing feeding schedules, viewing assembly instructions, and initial setup. manually feed your pet, record feeding logs, receiving low food alerts, a voice message, and understand updating firmware, creating multiple pet profiles, the low food level indicator. sharing access with other users, and cleaning and maintaining the feeder. +-----------------------------------------------+-------------------------------------------+----------------------------------------------------+ Clean up Caution : Deleting a project has the following effects: Everything in the project is deleted.
- For more information, see Set up ADC for a local development environment . df grayscale = df products mm [[ "product id" , "product name" , "image" ]] df grayscale [ "gray image uri" ] = f "gs:// { BUCKET } /cymbal-pets-images/grayscale/" + df grayscale [ "image" ] . struct . field ( "uri" ) . str . extract ( r "([^/]+)$" ) df grayscale [ "gray image" ] = bbq . obj . make ref ( df grayscale [ "gray image uri" ], "us.cymbal conn" ) df grayscale [ "image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "image" ], "r" ) ) df grayscale [ "gray image url" ] = bbq . to json string ( bbq . obj . get access url ( df grayscale [ "gray image" ], "rw" ) ) df grayscale [[ "image url" , "gray image url" ]] . apply ( to grayscale , axis = 1 ) The results look similar to the following: +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ f0 +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images/grayscale/ocean-bites-salmon-&-tuna-cat-food.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ {"access urls":{"expiry time":"2025-04-26T03:00:48Z", "read url":"https://storage.googleapis.com/mybucket/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png?additional read URL information", "write url":"https://storage.googleapis.com/myproject/cymbal-pets-images%2Fgrayscale%2Focean-bites-salmon-%26-tuna-cat-food.png?additional write URL information"}, "objectref":{"authorizer":"myproject.region.myconnection","uri":"gs://myproject/cymbal-pets-images%2Fgrayscale%2Ffluffy-buns-guinea-pig-tunnel.png"}} +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ ... +-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+ Create a Python UDF to chunk PDF data Create a Python UDF to chunk the PDF objects that contain the Cymbal pets product manuals into multiple parts.
- For more information, see Set up ADC for a local development environment . df products mm [[ "product name" , "image" ]] The results look similar to the following: +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ product name image.uri image.version image.authorizer image.details +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium Background gs://cloud-samples-data/bigquery/ 1234567891011 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", tutorials/cymbal-pets/images/ "md5 hash":"494f63b9b137975ff3e7a11b060edb1d", aquaclear-aquarium-background.png "size":1282805,"updated":1742492680017000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ AquaClear Aquarium gs://cloud-samples-data/bigquery/ 2345678910112 myproject.region.myconnection {"gcs metadata":{"content type":"image/png", Gravel Vacuum tutorials/cymbal-pets/images/ "md5 hash":"b7bfc2e2641a77a402a1937bcf0003fd", aquaclear-aquarium-gravel-vacuum.png "size":820254,"updated":1742492682411000}} +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ ... ... ... ... +--------------------------------+--------------------------------------+-----------------------------------------------+------------------------------------------------+ Generate product information by using a Gemini model Use a Gemini model to generate the following data for the pet store products: Add an image description column to the products mm table.

