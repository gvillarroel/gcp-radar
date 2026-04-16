---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:14:00.717Z"
product_name: "Dataproc Metastore"
product_slug: "dataproc-metastore"
feature_name: "Autoscaling"
feature_slug: "autoscaling"
latest_feature_date: "2024-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/create-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/manage-service"
  - "https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts"
  - "https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient"
keywords:
  - "autoscaling"
  - "automatically"
  - "increases"
  - "or"
  - "decreases"
  - "the"
  - "scaling"
  - "factor"
---

# Autoscaling

Product: Dataproc Metastore
Coverage: MEDIUM

## Step 02 Summary

Autoscaling automatically increases or decreases the scaling factor needed to run workloads.

## Extended Definition

Autoscaling automatically increases or decreases the scaling factor needed to run workloads.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service)
- [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)

## Supporting Pages

### Create a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/create-service](https://docs.cloud.google.com/dataproc-metastore/docs/create-service)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- After this is set, your service automatically increases or decreases the scaling factor required to run your workloads.
- You can check the active account by executing gcloud auth list . curl -X POST -s -i -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -d '{"scaling config":{"autoscaling config":{"autoscaling enabled": true,"limit config":{"max scaling factor": MAX SCALING FACTOR ,"min scaling factor": MIN SCALING FACTOR }}}}' \ -H "Content-Type:application/json" \ https://metastore.googleapis.com/v1/projects/ PROJECT ID /locations/us-central1/services?service id= SERVICE ID Replace the following: MIN INSTANCES Optional: The minimum number of instances to use in your autoscaling configuration.
- The scaling factor is set to the last autoscaling factor that was configured on the service.
- The minimum and maximum autoscaling factors are optional.

### Update a Dataproc Metastore service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/manage-service](https://docs.cloud.google.com/dataproc-metastore/docs/manage-service)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can enable or disable autoscaling and update the minimum or maximum scaling factors.
- If this flag is set, then -clear-hive-metastore-configs is automatically set as well. [KEY, ...] : Optional: The Hive metastore configs you want to remove. [KEY=VALUE, ...] : Optional: The labels or Hive metastore key-value pair configs you want to update. [KEY, ...] : Optional: The labels or Hive metastore key-value pair configs you want to remove.
- When the update succeeds, Dataproc Metastore automatically enters an active state.
- Return to the Dataproc Metastore page, and verify that your service was successfully updated. gcloud CLI To update a service, run the following gcloud metastore services update command: gcloud metastore services update SERVICE \ --location= LOCATION \ --port= PORT \ --tier= TIER \ --kerberos principal= KERBEROS PRINCIPAL \ --keytab= KEYTAB \ --krb5-config= KRB5 CONFIG \ --update-hive-metastore-configs-from-file= [KEY=VALUE, ...] \ --clear-hive-metastore-configs \ --remove-hive-metastore-configs= [KEY, ...] \ --update-labels= [KEY=VALUE, ...] \ --clear-labels \ --remove-labels= [KEY, ...] Replace the following: SERVICE : The name of your Dataproc Metastore service.

### Dataproc Metastore core concepts \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts](https://docs.cloud.google.com/dataproc-metastore/docs/core-concepts)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After you create a Dataproc Metastore 2, you can scale the service up or down by modifying the scaling factor.
- Dataproc Metastore 2 Dataproc Metastore 2 uses a scaling factor to determine how many resources your service uses at a given time.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- What's next Create a service Update and delete a service Import metadata into a service Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Class DataprocMetastoreAsyncClient (1.22.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient](https://docs.cloud.google.com/python/docs/reference/metastore/latest/google.cloud.metastore_v1.services.dataproc_metastore.DataprocMetastoreAsyncClient)
- Source ID: `site-python-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If set to None, a transport is chosen automatically. client options Optional[Union[google.api core.client options.ClientOptions, dict]] Custom options for the client.
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . subnetwork path subnetwork path ( project : str , region : str , subnetwork : str ) - > str Returns a fully-qualified subnetwork string. test iam permissions test iam permissions ( request : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get location get location ( request : typing .
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create backup create backup ( request : typing .

