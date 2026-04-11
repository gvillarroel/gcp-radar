---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:22:34.604Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Additional client libraries"
feature_slug: "additional-client-libraries"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/reference/api-overview"
keywords:
  - "additional"
  - "client"
  - "libraries"
  - "translation"
  - "api"
  - "advanced"
  - "provides"
  - "for"
---

# Additional client libraries

Product: Cloud Translation
Coverage: LOW

## Step 02 Summary

Translation API - Advanced provides client libraries for PHP, Go, C#, and Ruby.

## Extended Definition

Translation API - Advanced provides client libraries for PHP, Go, C#, and Ruby.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/reference/api-overview](https://docs.cloud.google.com/translate/docs/reference/api-overview)

## Supporting Pages

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.BatchTranslateMetadata", "state": "RUNNING" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.BatchTranslateMetadata", "state": "RUNNING" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "glossaryEntries": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " }, ... ] } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### API usage overview \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/reference/api-overview](https://docs.cloud.google.com/translate/docs/reference/api-overview)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Client libraries, REST, and gRPC You can access the API through client libraries, REST, or gRPC (Cloud Translation - Advanced only).
- Client libraries Google provides client libraries for many popular languages to access the APIs.
- Type, method, and field names Depending on whether you are using client libraries, REST, or gRPC, the type, method, and field names for the API vary: REST is arranged by resource hierarchies and their methods.
- Cloud Translation - Basic client libraries Cloud Translation - Advanced client libraries Pros Cons Maintained by Google.

