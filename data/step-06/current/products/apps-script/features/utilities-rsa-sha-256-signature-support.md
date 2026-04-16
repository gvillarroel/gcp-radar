---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:53:34.590Z"
product_name: "Apps Script"
product_slug: "apps-script"
feature_name: "Utilities RSA SHA-256 signature support"
feature_slug: "utilities-rsa-sha-256-signature-support"
latest_feature_date: "2015-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/apps-script/releases"
  - "https://developers.google.com/apps-script/guides/v8-runtime"
  - "https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions"
keywords:
  - "utilities"
  - "rsa"
  - "sha"
  - "256"
  - "signature"
  - "can"
  - "sign"
  - "strings"
---

# Utilities RSA SHA-256 signature support

Product: Apps Script
Coverage: MEDIUM

## Step 02 Summary

Utilities can sign strings with RSA SHA-256 using computeRsaSha256Signature variants.

## Extended Definition

Utilities can sign strings with RSA SHA-256 using computeRsaSha256Signature variants.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- [https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions](https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions)

## Supporting Pages

### Google Apps Script release notes \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/releases](https://developers.google.com/apps-script/releases)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- August 04, 2015 Feature Added the following methods to the Spreadsheet service to let scripts control "warning-based" protection for spreadsheet ranges (which means that every user can edit data in the area, except editing prompts the user to confirm the edit): Protection.isWarningOnly() Protection.setWarningOnly(warningOnly) June 30, 2015 Feature Added two variations of the method computeRsaSha256Signature to the Utilities global object to let scripts sign a string using the RSA SHA-256 algorithm.
- Feature The Forms service now has the following method: Form.deleteResponse(responseId) The Utilities service now has the following methods: Utilities.computeDigest(algorithm, value) , where value is a Byte array Utilities.computeHmacSha256Signature(value, key) , where value and key are Byte arrays Utilities.computeHmacSignature(algorithm, value, key) , where value and key are Byte arrays Change The quota limits for UrlFetch GET response size and POST size have been increased to 50MB / call.
- August 20, 2018 Feature The Utilities service has been extended with the following methods and classes: Utilities.computeRsaSha1Signature(value, key) Utilities.computeRsaSha1Signature(value, key, charset) Utilities.computeRsaSignature(algorithm, value, key) Utilities.computeRsaSignature(algorithm, value, key, charset) RsaAlgorithm June 19, 2018 Deprecated The quota on total data received by UrlFetch per day per user has been removed.
- March 13, 2012 Fixed Fixed an issue where functions in the Utilities Service were not handling UTF-8 strings correctly.

### V8 runtime overview \_|\_ Apps Script \_|\_ Google for Developers

- URL: [https://developers.google.com/apps-script/guides/v8-runtime](https://developers.google.com/apps-script/guides/v8-runtime)
- Source ID: `site-docs-root-3`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Crypto : Use Utilities for cryptographic functions like computeDigest , computeHmacSha256Signature , and computeRsaSha256Signature .
- This can simplify the code in the function body as it removes the need to explicitly assign default values to missing parameters. // Rhino runtime function hello ( greeting, name ) { greeting = greeting "hello" ; name = name "world" ; console . log ( greeting + " " + name + "!" ); } hello (); // Outputs "hello world!" // V8 runtime const hello = function ( greeting = "hello" , name = "world" ) { console . log ( greeting + " " + name + "!" ); } hello (); // Outputs "hello world!" Multi-line strings Define multi-line strings using the same syntax as template literals .
- Fetch : Use UrlFetchApp.fetch(url, params) to make HTTP(S) requests. atob : Use Utilities.base64Decode to decode Base64-encoded strings. btoa : Use Utilities.base64Encode to encode strings in Base64.
- Classes in V8 are primarily syntactical sugar over the JavaScript prototype-based inheritance. // V8 runtime class Rectangle { constructor ( width , height ) { // class constructor this . width = width ; this . height = height ; } logToConsole () { // class method console . log ( Rectangle ( width =$ { this . width }, height =$ { this . height }) ); } } const r = new Rectangle ( 10 , 20 ); r . logToConsole (); // Outputs Rectangle ( width = 10 , height = 20 ) Destructuring assignments Destructuring assignment expressions are a quick way to unpack values from arrays and objects into distinct variables. // Rhino runtime var data = { a : 12 , b : false , c : 'blue' }; var a = data . a ; var c = data . c ; console . log ( a , c ); // Outputs 12 "blue" var a = [ 1 , 2 , 3 ]; var x = a [ 0 ]; var y = a [ 1 ]; var z = a [ 2 ]; console . log ( x , y , z ); // Outputs 1 2 3 // V8 runtime const data = { a : 12 , b : false , c : 'blue' }; const { a , c } = data ; console . log ( a , c ); // Outputs 12 "blue" const array = [ 1 , 2 , 3 ]; const [ x , y , z ] = array ; console . log ( x , y , z ); // Outputs 1 2 3 Template literals Template literals are string literals that allow embedded expressions.

### "Assign permissions for Google Cloud projects \_|\_ Apps Script \_|\_ Google\

- URL: [https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions](https://developers.google.com/apps-script/guides/admin/assign-cloud-permissions)
- Source ID: `site-docs-root`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign delete permission for all Cloud projects in an organization To give someone delete permission for all Cloud projects in an organization as a super administrator, follow these steps: Open the Google Cloud console at console.cloud.google.com .
- Assign view permission for all Cloud projects in an organization To give someone view permission for all Cloud projects in your organization as a super administrator, follow these steps: Open the Cloud console at console.cloud.google.com .
- Assign edit permission for all Cloud projects in an organization To give someone edit permission for all Cloud projects in an organization as a super administrator, follow these steps: Open the Cloud console at console.cloud.google.com .
- Home Google Workspace Apps Script Guides Send feedback Assign permissions for Google Cloud projects Stay organized with collections Save and categorize content based on your preferences.

