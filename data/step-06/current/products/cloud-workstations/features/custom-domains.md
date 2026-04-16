---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.975Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Custom domains"
feature_slug: "custom-domains"
latest_feature_date: "2023-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient"
keywords:
  - "custom"
  - "domains"
  - "workstations"
  - "supports"
  - "accessing"
  - "through"
  - "trusted"
  - "domain"
---

# Custom domains

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports accessing workstations through a trusted custom domain instead of the default cloudworkstations.dev domain; Cloud Workstations supports accessing workstations through a trusted custom domain instead of the default cloudworkstations.dev domain.

## Extended Definition

Cloud Workstations supports accessing workstations through a trusted custom domain instead of the default cloudworkstations.dev domain; Cloud Workstations supports accessing workstations through a trusted custom domain instead of the default cloudworkstations.dev domain.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations](https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)

## Supporting Pages

### "Access HTTP servers running on a workstation \_|\_ Cloud Workstations \_\

- URL: [https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations](https://docs.cloud.google.com/workstations/docs/access-http-servers-running-on-workstations)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more about setting up custom domains in Cloud Workstations, see Set up custom domains for Cloud Workstations .
- URLs for custom domains use a different format.
- For example, the following URL connects to port 9900 : https://9900-myworkstation.cluster-12345abcde.cloudworkstations.dev In this example, note the following: 9900 : represents the port number. myworkstation : represents the workstation ID. cluster-12345abcde : represents the cluster identifier. cloudworkstations.dev : represents the default domain name for a workstation.
- Cross-Origin Resource Sharing (CORS) preflight requests don't include cookies or custom headers, and so are considered unauthenticated and blocked by the workstations service.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- If you use Private Google Access and you use private.googleapis.com or restricted.googleapis.com for Container Registry and Artifact Registry, make sure that you set up DNS records for domains .gcr.io and .pkg.dev .
- Home Documentation Application development Cloud Workstations Guides Send feedback Customize your development environment Stay organized with collections Save and categorize content based on your preferences.

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description WorkstationsTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- Members can be user accounts, service accounts, Google groups, and domains (such as G Suite).
- Members can be user accounts, service accounts, Google groups, and domains (such as G Suite).
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .

### "Class WorkstationsClient (0.8.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description WorkstationsTransport The transport used by the client instance. universe domain Return the universe domain used by the client instance.
- Members can be user accounts, service accounts, Google groups, and domains (such as G Suite).
- Members can be user accounts, service accounts, Google groups, and domains (such as G Suite).
- JSON Example :: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": ["user:eve@example.com"], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01t00:00:00.000z')",="" }="" }="" ]="" }="" yaml="" example ="" ::="" bindings:="" -="" members:="" -="" user:mike@example.com="" -="" group:admins@example.com="" -="" domain:google.com="" -="" serviceaccount:my-project-id@appspot.gserviceaccount.com="" role:="" roles/resourcemanager.organizationadmin="" -="" members:="" -="" user:eve@example.com="" role:="" roles/resourcemanager.organizationviewer="" condition:="" title:="" expirable="" access="" description:="" does="" not="" grant="" access="" after="" sep="" 2020="" expression:="" request.time="">< timestamp('2020-10-01t00:00:00.000z')="" for="" a="" description="" of="" iam="" and="" its="" features,="" see="" the=""> IAM developer's guide . get mtls endpoint and cert source get mtls endpoint and cert source ( client options : typing .

