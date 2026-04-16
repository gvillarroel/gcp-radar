---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:49.611Z"
product_name: "Cloud Translation"
product_slug: "cloud-translation"
feature_name: "Additional client libraries"
feature_slug: "additional-client-libraries"
latest_feature_date: "2019-11-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/translate/docs/advanced/batch-translation"
  - "https://docs.cloud.google.com/translate/docs/advanced/glossary"
  - "https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance"
  - "https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3"
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
Coverage: MEDIUM

## Step 02 Summary

Translation API - Advanced provides client libraries for PHP, Go, C#, and Ruby.

## Extended Definition

Translation API - Advanced provides client libraries for PHP, Go, C#, and Ruby.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)

## Supporting Pages

### Batch requests (Advanced) \_|\_ Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/batch-translation](https://docs.cloud.google.com/translate/docs/advanced/batch-translation)
- Source ID: `site-iam-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TranslationServiceClient () Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } location = "us-central1" input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " model path = "projects/ {} /locations/ {} /models/ {} " . format ( project id , location , model id # The location of AutoML model. ) Supported language codes: https://cloud.google.com/translate/docs/languages models = { "ja" : model path } # takes a target lang as key. operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , "models" : models , } ) print ( "Waiting for operation to complete..." ) response = operation . result () Display the translation for each input text provided. print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- TranslationServiceClient () location = "us-central1" Supported file types: https://cloud.google.com/translate/docs/supported-formats gcs source = { "input uri" : input uri } input configs element = { "gcs source" : gcs source , "mime type" : "text/plain" , # Can be "text/plain" or "text/html". } gcs destination = { "output uri prefix" : output uri } output config = { "gcs destination" : gcs destination } parent = f "projects/ { project id } /locations/ { location } " Supported language codes: https://cloud.google.com/translate/docs/languages operation = client . batch translate text ( request = { "parent" : parent , "source language code" : "en" , "target language codes" : [ "ja" ], # Up to 10 language codes here. "input configs" : [ input configs element ], "output config" : output config , } ) print ( "Waiting for operation to complete..." ) response = operation . result ( timeout ) print ( f "Total Characters: { response . total characters } " ) print ( f "Translated Characters: { response . translated characters } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.BatchTranslateMetadata", "state": "RUNNING" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/us-central1:batchTranslateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ project-number /locations/us-central1/operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.BatchTranslateMetadata", "state": "RUNNING" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .

### "Creating and using glossaries (Advanced) \_|\_ Cloud Translation \_|\_ Google\

- URL: [https://docs.cloud.google.com/translate/docs/advanced/glossary](https://docs.cloud.google.com/translate/docs/advanced/glossary)
- Source ID: `site-iam-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID ?update mask=input config&update mask=display name" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.translation.v3.UpdateGlossaryMetadata", "glossary": { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID ", "languageCodesSet": { "languageCodes": [" LANGUAGE CODE ", ...] }, "inputConfig": { "gcsSource": { "inputUri": "gs:// GLOSSARY FILE PATH " } }, "entryCount": NUMBER OF ENTRIES , "submitTime": "2022-04-22T23:16:30.628806944Z", "endTime": "2022-04-22T23:41:15.115797Z", "displayName": " GLOSSARY ID " }, "state": "RUNNING", "submitTime": "2022-04-22T23:50:24.337964527Z" } } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://translation.googleapis.com/v3/projects/ PROJECT NUMBER OR ID /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries" Select-Object -Expand Content You should receive a JSON response similar to the following: { "glossaryEntries": [ { "name": "projects/ PROJECT NUMBER /locations/ LOCATION /glossaries/ GLOSSARY ID /glossaryEntries/ GLOSSARY ENTRY ID ", "termsSet": { "terms": [ { "languageCode": " LANGUAGE CODE ", "text": " TERM " }, ... ] }, "description": " DESCRIPTION " }, ... ] } Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance](https://docs.cloud.google.com/translate/docs/advanced/translate-text-advance)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/language/translate/v2" Select-Object -Expand Content You should receive a JSON response similar to the following: { "data": { "translations": [{ "translatedText": "La Gran Pirámide de Giza (también conocida como la Pirámide de Khufu o la Pirámide de Keops) es la más antigua y más grande de las tres pirámides en el complejo de la pirámide de Giza." }] } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

### Translate text with Cloud Translation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3](https://docs.cloud.google.com/translate/docs/advanced/translating-text-v3)
- Source ID: `site-docs-root`
- Final score: 229
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/v3/projects/ PROJECT ID /locations/ LOCATION :translateText" Select-Object -Expand Content You should receive a JSON response similar to the following: { "translation": { "translatedText": "Доктор Ватсон, пожалуйста, откажитесь от своего мусора. Вы поделились нежелательной электронной почтой со мной. Давайте поговорим о спаме и важности рейтинга в конфиденциальном режиме.", "model": "projects/ PROJECT NUMBER /locations/ LOCATION /models/1395675701985363739" } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT NUMBER OR ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://translation.googleapis.com/language/translate/v2" Select-Object -Expand Content You should receive a JSON response similar to the following: { "data": { "translations": [{ "translatedText": "La Gran Pirámide de Giza (también conocida como la Pirámide de Khufu o la Pirámide de Keops) es la más antigua y más grande de las tres pirámides en el complejo de la pirámide de Giza." }] } } Go Before trying this sample, follow the Go setup instructions in the Cloud Translation quickstart using client libraries .
- TranslationServiceClient () location = "us-central1" parent = f "projects/ { project id } /locations/ { location } " model path = f " { parent } /models/ { model id } " Supported language codes: https://cloud.google.com/translate/docs/languages response = client . translate text ( request = { "contents" : [ text ], "target language code" : "ja" , "model" : model path , "source language code" : "en" , "parent" : parent , "mime type" : "text/plain" , # mime types: text/plain, text/html } ) Display the translation for each input text provided for translation in response . translations : print ( f "Translated text: { translation . translated text } " ) return response Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.
- Find more information about translate function here: https://cloud.google.com/python/docs/reference/translate/latest/google.cloud.translate v2.client.Client#google cloud translate v2 client Client translate results = translate client . translate ( values = text , target language = target language , source language = source language ) for result in results : if "detectedSourceLanguage" in result : print ( f "Detected source language: { result [ 'detectedSourceLanguage' ] } " ) print ( f "Input text: { result [ 'input' ] } " ) print ( f "Translated text: { result [ 'translatedText' ] } " ) print () return results Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Cloud Translation reference documentation for .NET.

