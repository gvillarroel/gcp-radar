---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:23:22.653Z"
product_name: "Dataproc"
product_slug: "dataproc"
feature_name: "Startup service-binding timeout configuration"
feature_slug: "startup-service-binding-timeout-configuration"
latest_feature_date: "2020-02-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1"
  - "https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient"
keywords:
  - "startup"
  - "binding"
  - "timeout"
  - "configuration"
  - "dataproc"
  - "lets"
  - "users"
  - "configure"
---

# Startup service-binding timeout configuration

Product: Dataproc
Coverage: MEDIUM

## Step 02 Summary

Dataproc lets users configure how long startup scripts wait for key services to bind to ports before considering startup successful.

## Extended Definition

Dataproc lets users configure how long startup scripts wait for key services to bind to ports before considering startup successful.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)

## Supporting Pages

### "Configure Kerberos for Dataproc Metastore Thrift endpoints \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos](https://docs.cloud.google.com/dataproc-metastore/docs/configure-kerberos)
- Source ID: `site-docs-root-2`
- Final score: 104
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the project ID and number of the project that contains the Cloud Storage bucket. gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:service- PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \ --role roles/storage.objectViewer Create a Dataproc Metastore service with Kerberos Create a new Dataproc Metastore service that's configured with your Kerberos files.
- In the SSH session, open the /etc/hive/conf/hive-site.xml file. sudo vim /etc/hive/conf/hive-site.xml Modify /etc/hive/conf/hive-site.xml on the Managed Service for Apache Spark cluster. < property > < name>hive . metastore . uris < / name > < ! -- Update this value . -- > < value> ENDPOINT URI < / value > < / property > < ! -- Add this property entry . -- > < property > < name>hive . metastore . warehouse . dir < / name > < value> WAREHOUSE DIR < / value > < / property > Restart HiveServer2: sudo systemctl restart hive-server2.service Configure Managed Service for Apache Spark before submitting jobs To run your Managed Service for Apache Spark jobs , you must add the hive user to the allowed.system.users property in the Hadoop container-executor.cfg file.
- In the SSH session, open the Hadoop container-executor.cfg file. sudo vim /etc/hadoop/conf/container-executor.cfg Add the following line on every Managed Service for Apache Spark node. allowed.system.users=hive Get a Kerberos ticket Get the Kerberos ticket, before connecting to the Dataproc Metastore instance. sudo klist -kte /etc/security/keytab/metastore.service.keytab sudo kinit -kt /etc/security/keytab/metastore.service.keytab PRINCIPAL NAME sudo klist # gets the ticket information. sudo hive Replace the following: PRINCIPAL NAME : the name of your principal.
- This account is Google-managed and listed on the IAM permissions UI page by selecting Include Google-provided role grants . gcloud projects add-iam-policy-binding PROJECT ID \ --member serviceAccount:service- PROJECT NUMBER @gcp-sa-metastore.iam.gserviceaccount.com \ --role roles/secretmanager.secretAccessor Provide the Dataproc Metastore service account with permission to access the krb5.conf file.

### "Package com.google.cloud.dataproc.v1 (4.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1)
- Source ID: `site-java-reference`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- Node Initialization Action Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.
- Builder Specifies an executable to run on a fully configured node and a timeout period for executable completion. com. google. cloud. dataproc. v1.
- Startup Config Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.
- Builder Configuration to handle the startup of instances during cluster create and update process. com. google. cloud. dataproc. v1.

### "Class AutoscalingPolicyServiceAsyncClient (5.26.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataproc/latest/google.cloud.dataproc_v1.services.autoscaling_policy_service.AutoscalingPolicyServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A role is a named list of permissions (defined by IAM or configured by users).
- A role is a named list of permissions (defined by IAM or configured by users).
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . test iam permissions test iam permissions ( request : typing .

