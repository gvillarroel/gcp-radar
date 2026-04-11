---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:04:48.262Z"
product_name: "API Keys API"
product_slug: "api-keys-api"
feature_name: "API Keys API"
feature_slug: "api-keys-api"
latest_feature_date: "2022-08-22"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/api-keys/docs/add-restrictions-api-keys"
  - "https://docs.cloud.google.com/api-keys/docs/get-started-api-keys"
  - "https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys"
keywords:
  - "Create an API key"
  - "apikeys.googleapis.com"
  - "API Key Management API"
  - "API key restrictions"
  - "Restrict API key"
  - "Manage API keys"
  - "Delete API key"
  - "API key quotas"
---

# API Keys API

Product: API Keys API
Coverage: HIGH

## Step 02 Summary

The API Keys API is now available in general availability; The API Keys API was available in preview.

## Extended Definition

API Keys API provides Google Cloud v2 REST operations to create, read/list, update, and delete (including undelete) API keys for a project under the `apikeys.googleapis.com` service. It also supports applying and modifying key restrictions, such as Android and iOS application restrictions, browser referrer restrictions, server IP/CIDR allowlists, and API target/method allowlists. These APIs return key metadata and operation/status information used to track key lifecycle actions.

## Evidence Summary

The cited API Keys documentation pages collectively show how to call the v2 API to create, list, update, delete/undelete keys and configure multiple restriction types, confirming the core feature capabilities.

## Source Links

- [https://docs.cloud.google.com/api-keys/docs/add-restrictions-api-keys](https://docs.cloud.google.com/api-keys/docs/add-restrictions-api-keys)
- [https://docs.cloud.google.com/api-keys/docs/get-started-api-keys](https://docs.cloud.google.com/api-keys/docs/get-started-api-keys)
- [https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys](https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys)

## Supporting Pages

### "Adding restrictions to API keys \_|\_ API Keys API Documentation \_|\_ Google\

- URL: [https://docs.cloud.google.com/api-keys/docs/add-restrictions-api-keys](https://docs.cloud.google.com/api-keys/docs/add-restrictions-api-keys)
- Source ID: `site-docs-root`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- For example, assume that you ran the keytool utility and it created the following fingerprint: Certificate fingerprint: SHA1: DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 The following example shows how to create an API key with the fingerprint and and package name to the androidKeyRestrictions : gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys \ --request POST \ --data '{ "displayName" : "API key with Android restrictions", "restrictions" : { "androidKeyRestrictions": { "allowedApplications": [ { "sha1Fingerprint": "DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09", "packageName": "com.example.my.app" } ] } } }' Adding iOS restrictions You can restrict usage of an API key to only your iOS apps by providing the bundle ID of each app when you create or update a key.
- You can specify the IP addresses in any of the following formats: IPv4 ( 198.51.100.1 ) IPv6 ( 2001:db8::1 ) A subnet using CIDR notation ( 198.51.100.0/24 , 2001:db8::/64 ) The following example shows how to create an API key with a list of allowedIps : gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys \ --request POST \ --data '{ "displayName" : "API key with server restrictions with IPv4, IPv6 and CIDR", "restrictions" : { "serverKeyRestrictions": { "allowedIps": ["198.51.100.1","198.51.100.0/24","2001:db8::1","2001:db8::/64"] } } }' Adding Android restrictions You can restrict usage of an API key to only your Android apps.
- The following example shows how to restrict the previous key to only allowed methods of translate.googleapis.com : gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys/ KEY ID ?updateMask=restrictions \ --request PATCH \ --data '{ "restrictions": { "api targets": [ { "service": "translate.googleapis.com" "methods": [ "Get ", "DetectLanguage" ] }, { "service" : "datastore.googleapis.com" } ] }, "etag": " ETAG " }' What's next Viewing Cloud Audit Logs Troubleshooting Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example shows how to create a new API key that only allows HTTP requests from a list of specific URLs. gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys \ --request POST \ --data '{ "displayName" : "API key with browser restrictions", "restrictions" : { "browserKeyRestrictions": { "allowedReferrers": ["www.example.com", "www.example-2.com"] } } }' The following table shows some example scenarios and browser restrictions: Scenario Restrictions Allow any URL in your site You must set two URLs in the allowedReferers list.

### "Getting started with API Keys API \_|\_ API Keys API Documentation \_|\_\

- URL: [https://docs.cloud.google.com/api-keys/docs/get-started-api-keys](https://docs.cloud.google.com/api-keys/docs/get-started-api-keys)
- Source ID: `site-docs-root`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Define a convenient shell alias for calling the API: alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"' Make a request to get a list of API keys in your project: gcurl https://apikeys.googleapis.com/v2/projects/ YOUR PROJECT NUMBER /locations/global/keys On success, you get a response similar to the following: { "keys" : [ { "name" : "projects/12345678/locations/global/keys/2885bf87-5b84-47fa-92af-08c3e9337349" , "displayName" : "API key 2" , "createTime" : "2019-05-29T22:07:22.036Z" , "uid" : "2885bf87-5b84-47fa-92af-08c3e9337349" , "updateTime" : "2019-05-29T22:07:22.058623Z" , "restrictions" : { "androidKeyRestrictions" : {} }, "etag" : "zHib8eXEMCxe4ayQEbIaZg==" }, { "name" : "projects/12345678/locations/global/keys/a4db08b7-5729-4ba9-8c08-f2df493465a1" , "displayName" : "API key 1" , "createTime" : "2019-05-29T22:06:58.844Z" , "uid" : "a4db08b7-5729-4ba9-8c08-f2df493465a1" , "updateTime" : "2019-05-29T22:06:58.855103Z" , "restrictions" : { "androidKeyRestrictions" : {} }, "etag" : "0L5KcPMGoNi53K5+FqPxiw==" } ] } What's next Creating and managing API keys Getting information about API keys Adding restrictions to API keys Troubleshooting Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Learn how to grant roles . gcloud services enable apikeys.googleapis.com Grant roles to your user account.
- Learn how to grant roles . gcloud services enable apikeys.googleapis.com Grant roles to your user account.

### "Creating and managing API keys \_|\_ API Keys API Documentation \_|\_ Google\

- URL: [https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys](https://docs.cloud.google.com/api-keys/docs/create-manage-api-keys)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: N/A

Evidence snippets:
- The following example issues a CreateKey call to create an API key with no restrictions: gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys -X POST -d '{"displayName" : "Example API key"}' On success, the method returns a long-running operation in the response.
- The following example illustrates how to call DeleteKey : gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys/ KEY ID ?etag=" ETAG " -X DELETE When the response from operations.get contains "done": true , the response is similar to the following: { "name" : "operations/akmf.cdabc4df-cbff-4420-8c7e-65dc832c945d" , "done" : true , "response" : { "@type" : "type.googleapis.com/google.api.apikeys.v2.Key" "name" : "projects/ PROJECT NUMBER /locations/global/keys/aecd7943-98ff-4ce2-a876-ec1b37c671ca" , "displayName" : "Example API key" , "keyString" : "----REDACTED----" , "createTime" : "2021-03-23T17:39:46.721099Z" , "uid" : "aecd7943-98ff-4ce2-a876-ec1b37c671ca" , "updateTime" : "2021-03-23T17:39:47.046746Z" , "deleteTime" : "2021-03-24T22:35:37.290544Z" , "etag" : "k0bsYGkIvSxDVwNxyw49NQ==" } } An API key that is marked as DELETED can't be used, but it isn't completely removed from our system either.
- For example, consider the following call to CreateKey : gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys?keyId=my-test-key1 -X POST -d '{"displayName" : "Example API key"}' For this example, the Key.name field has the following value: "name": "projects/ PROJECT NUMBER /locations/global/keys/ my-test-key1 " Updating the display name To change the displayName of an API key or to add a displayName to an API key that was created without one, call the UpdateKey method.
- The following example illustrates how to call UndeleteKey : gcurl https://apikeys.googleapis.com/v2/projects/ PROJECT NUMBER /locations/global/keys/ KEY ID /:undelete -X POST What's next Getting information about API keys Adding restrictions to API keys Viewing Cloud Audit Logs Troubleshooting Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

