---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.159Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ImportCustomer method"
feature_slug: "importcustomer-method"
latest_feature_date: "2021-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/release-notes"
  - "https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification"
  - "https://docs.cloud.google.com/channel/docs/access-api"
keywords:
  - "importcustomer"
  - "v1alpha1"
  - "as"
  - "method"
  - "adds"
  - "api"
  - "the"
  - "in"
---

# ImportCustomer method

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds the ImportCustomer API method in v1alpha1 as the first step of a transfer, replacing CreateCustomer and allowing customer data import by domain or Cloud Identity ID.

## Extended Definition

Adds the ImportCustomer API method in v1alpha1 as the first step of a transfer, replacing CreateCustomer and allowing customer data import by domain or Cloud Identity ID.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- [https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification](https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification)
- [https://docs.cloud.google.com/channel/docs/access-api](https://docs.cloud.google.com/channel/docs/access-api)

## Supporting Pages

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- March 08, 2021 v1alpha1 Feature ( v1alpha1 only ) This release includes the new ImportCustomer method.
- September 30, 2022 v1 Feature This release adds the ability to generate reports for Google Cloud billing and Google Voice expense data to the Channel Services API.
- June 21, 2021 v1alpha1 Change Added a new feature for the ImportCustomer API to specify which customer will receive imported Cloud Identity information.
- August 02, 2021 v1alpha1 Feature This release includes the new ListProvisionableCloudIdentityTypes method.

### "Codelab: Automating domain verification for Google Workspace \_|\_ Channel\

- URL: [https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification](https://docs.cloud.google.com/channel/docs/codelabs/workspace/domain-verification)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Site () . setType ( "INET DOMAIN" ) . setIdentifier ( CUSTOMER DOMAIN )); SiteVerificationWebResourceGettokenResponse response = verificationService . webResource (). getToken ( request ). execute (); String token = response . getToken (); System . out . println ( "Site Verification token: " + token ); Node.js Using the following import: const { google } = require ( 'googleapis' ); Create the API client and fetch the token: // Set up credentials with user impersonation const authJWT = new JWT ({ keyFile : jsonKeyFile , scopes : [ 'https://www.googleapis.com/auth/siteverification' ], subject : resellerAdminUser , }); // Create the API service const verificationService = google . siteVerification ({ version : 'v1' , auth : authJWT }); // Fetch the token const { data } = await verificationService . webResource . getToken ({ requestBody : { site : { type : 'INET DOMAIN' , identifier : customerDomain , }, verificationMethod : 'DNS TXT' , } }); const token = data . token ; console . log ( Site Verification token: ${ token } ); PHP Create the API client and fetch the token: // Set up credentials with user impersonation $client = new Google Client(); $client->setAuthConfig($JSON KEY FILE); $client->setSubject($RESELLER ADMIN USER); $client->setScopes('https://www.googleapis.com/auth/siteverification'); // Create the API service $verificationService = new Google Service SiteVerification($client); // Fetch the token $request = new Google Service SiteVerification SiteVerificationWebResourceGettokenRequest([ 'verificationMethod' => 'DNS TXT', 'site' => [ 'type' => 'INET DOMAIN', 'identifier' => $CUSTOMER DOMAIN ] ]); $response = $verificationService->webResource->getToken($request); $token = $response->token; print 'Site Verification token: ' . $token .
- Site () . setIdentifier ( CUSTOMER DOMAIN ) . setType ( "INET DOMAIN" )) . setOwners ( Arrays . asList ( "admin@" + CUSTOMER DOMAIN )); resource = verificationService . webResource (). insert ( "DNS TXT" , resource ). execute (); System . out . println ( "=== Domain has been verified" ); Node.js // Set the customer's admin user as an owner to make sure the domain // verification status is instantly propagated to the Workspace account await verificationService . webResource . insert ({ verificationMethod : 'DNS TXT' , requestBody : { site : { type : 'INET DOMAIN' , identifier : customerDomain , }, owners : [ admin@ ${ customerDomain } ], } }); console . log ( '=== Domain has been verified' ); PHP // Set the customer's admin user as an owner to make sure the domain // verification status is instantly propagated to the Workspace account $resource = new Google Service SiteVerification SiteVerificationWebResourceResource([ 'site' => [ 'type' => 'INET DOMAIN', 'identifier' => $CUSTOMER DOMAIN, ], 'owners' => ['admin@' . $CUSTOMER DOMAIN] ]); $resource = $verificationService->webResource->insert('DNS TXT', $resource); print '=== Domain has been verified' .
- Credentials . from service account file ( JSON KEY FILE , scopes = [ "https://www.googleapis.com/auth/siteverification" ]) credentials delegated = credentials . with subject ( RESELLER ADMIN USER ) Create the API service verification service = build ( serviceName = "siteVerification" , version = "v1" , credentials = credentials delegated ) Fetch the token response = verification service . webResource () . getToken ( body = { "site" : { "type" : "INET DOMAIN" , "identifier" : CUSTOMER DOMAIN }, "verificationMethod" : "DNS TXT" }) . execute () token = response [ "token" ] print ( "Site Verification token: " + token ) Note: The generated token is tied to the API caller (your reseller account's super admin).
- PHP EOL; Python Set the customer's admin user as an owner to make sure the domain verification status is instantly propagated to the Workspace account resource = verification service . webResource (). insert ( verificationMethod = "DNS TXT" , body = { "site" : { "type" : "INET DOMAIN" , "identifier" : CUSTOMER DOMAIN }, "owners" : [ "admin@" + CUSTOMER DOMAIN ] }). execute () print ( "=== Domain has been verified" ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Getting access to the Cloud Channel API \_|\_ Channel Services \_|\_ Google\

- URL: [https://docs.cloud.google.com/channel/docs/access-api](https://docs.cloud.google.com/channel/docs/access-api)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Get a Partner Sales Console As part of the onboarding process, you will be set up with a Partner Sales Console on your own reseller domain . (Google Workspace and Google Chrome) Get a Test Partner Sales Console This step is optional, but we recommend it if you want to use the API for provisioning.
- Home Technology areas Channel Services Guides Send feedback Getting access to the Cloud Channel API Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The Cloud Channel API is intended for developers and service integrators who want to write applications that manage resold customers, and place or manage orders for Google products on their behalf.

