---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.281Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Qatar (me-central1)"
feature_slug: "qatar-me-central1"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/ml-tutorial"
keywords:
  - "central1"
  - "qatar"
  - "instances"
  - "creating"
  - "regional"
  - "supports"
---

# Qatar (me-central1)

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports creating regional instances in the Doha, Qatar (me-central1) region.

## Extended Definition

Spanner supports creating regional instances in the Doha, Qatar (me-central1) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- For example, if your Spanner database is in the multi-region instance configuration nam3 , with instance partitions located in europe-west1 and europe-west2 , then you must create Cloud KMS keys in the following regions: us-east4 (part of nam3 ) us-east1 (part of nam3 ) us-central1 (part of nam3 ) europe-west1 (location of instance partition) europe-west2 (location of instance partition) For more information, see Secure a database with CMEK .
- If you're using multiple regional keys to protect a Spanner database, only those replicas that are protected by a key residing in the unavailable regional Cloud KMS are affected by the unavailability.
- Multiple regional keys support: you can create multiple regional (single-region) Cloud KMS keys to protect a database in a Spanner custom, dual-region, or multi-region instance configuration .
- By default, a backup uses the same encryption configuration as its database, but you can override this behavior by specifying a different encryption configuration when creating the backup.

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- If you are creating and deleting instances for testing purposes, you can delete the new instance within 24 hours to avoid manually deleting its backups.
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- For regional instances , the backup is stored in each of the three read-write zones.
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.

### Generate ML predictions using SQL \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/ml-tutorial](https://docs.cloud.google.com/spanner/docs/ml-tutorial)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- PREDICT ( MODEL GeminiPro , ( SELECT "Is 7 a prime number?" AS prompt ), STRUCT ( 256 AS maxOutputTokens , 0.2 AS temperature , 40 as topK , 0.95 AS topP ) ); Expected output The expected out is as follows: + --------------------+ content + --------------------+ "Yes" + --------------------+ PostgreSQL Run the model select spanner . ml predict row ( '{ "endpoint": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-pro", "default batch size": 1 }' :: jsonb , '{ "instances":[{"prompt": "Is 7 a prime number?"}], "parameters":{"maxOutputTokens":256, "topK": 40, "topP":0.96, "temperature":0.2} }' ); Expected output The expected out is the following: +--------------------+ content +--------------------+ "Yes" +--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- SELECT spanner . ml predict row ( 'projects/ PROJECT ID /locations/ REGION ID /endpoints/ ENDPOINT ID ' :: text , '{ "instances": [ INSTANCES ], "parameters": { PARAMETERS } }' :: jsonb ); `` Replace the following : PROJECT ID : the ID of the Google Cloud project that the model is located in REGION ID : the ID of the Google Cloud region the model is located in—for example, us-central1 ENDPOINT ID : the ID of the model endpoint INSTANCES : the inputs to the prediction call, in JSON format PARAMETERS : optional parameters to the prediction call, in JSON format This query produces a JSON response.
- SELECT spanner . ml predict row ( 'projects/ PROJECT ID /locations/ REGION ID /publishers/google/models/ MODEL ID ' :: text , '{ "instances": [ INSTANCES ], "parameters": { PARAMETERS } }' :: jsonb ); Replace the following: PROJECT ID : the ID of your Google Cloud project REGION ID : the ID of the Google Cloud region that the model is located in—for example, us-central1 MODEL ID : the ID of the ML model you want to use—for example, gemini-pro For more information about models, see Model API reference for Generative AI .
- The following is an example schema from Classification and regression Overview CREATE MODEL MyClassificationModel INPUT ( length FLOAT64 , material STRING ( MAX ), tag array ARRAY<STRING ( MAX ) > ) OUTPUT ( scores ARRAY<FLOAT64> , classes ARRAY<STRING ( MAX ) > ) REMOTE OPTIONS ( endpoint = '//aiplatform.googleapis.com/projects/ PROJECT /locations/ LOCATION /endpoints/ ENDPOINT ID ' ) Replace the following: PROJECT ID : the ID of your Google Cloud project LOCATION : the ID of the Google Cloud region that the model is located in—for example, us-central1 ENDPOINT ID : the ID of the ML model you want to use—for example, gemini-pro For more information about models, see Model API reference for Generative AI .

