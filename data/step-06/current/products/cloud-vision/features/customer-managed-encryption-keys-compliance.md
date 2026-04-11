---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.716Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Customer-managed encryption keys compliance"
feature_slug: "customer-managed-encryption-keys-compliance"
latest_feature_date: "2020-04-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/vision/docs/apis"
  - "https://docs.cloud.google.com/vision/docs/libraries"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "compliance"
  - "vision"
  - "api"
  - "is"
---

# Customer-managed encryption keys compliance

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Cloud Vision API is compliant with customer-managed encryption keys for supported capabilities.

## Extended Definition

Cloud Vision API is compliant with customer-managed encryption keys for supported capabilities.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/vision/docs/apis](https://docs.cloud.google.com/vision/docs/apis)
- [https://docs.cloud.google.com/vision/docs/libraries](https://docs.cloud.google.com/vision/docs/libraries)

## Supporting Pages

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 11, 2020 Feature CMEK compliance Vision API is now compliant with customer-managed encryption keys (CMEK).
- February 19, 2020 Change Cloud Vision API will not return gendered labels such as 'man' and 'woman' after February 19, 2020 Detecting labels in an image containing humans will result in non-gendered label such as 'person' being returned.
- August 16, 2019 Change Spring framework integration If you write your applications in Java with the Spring Framework , we now provide a guide to help you add Spring Cloud Vision API to your application .
- Home Documentation AI and ML Cloud Vision API Resources Send feedback Vision release notes Stay organized with collections Save and categorize content based on your preferences.

### API Reference \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/apis](https://docs.cloud.google.com/vision/docs/apis)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Cloud Vision API Reference Send feedback API Reference Stay organized with collections Save and categorize content based on your preferences.
- Cloud Vision Client Libraries Get started with the Vision API in your language of choice.
- REST API Reference Cloud Vision REST API Reference.
- RPC API Reference Cloud Vision gRPC API Reference.

### Vision client libraries \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/libraries](https://docs.cloud.google.com/vision/docs/libraries)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Image () image . source . image uri = file uri Performs label detection on the image file response = client . label detection ( image = image ) labels = response . label annotations print ( "Labels:" ) for label in labels : print ( label . description ) return labels Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Additional client libraries In addition to the libraries shown above, Spring Cloud Google Cloud is available for Java applications.
- BatchAnnotateImages ( batch request ); if ( ! batch ) throw std :: move ( batch ). status (); // Find the longest annotation and print it auto result = std :: string {}; for ( auto const & response : batch - > responses ()) { for ( auto const & annotation : response . text annotations ()) { if ( result . size () < annotation . description (). size ()) { result = annotation . description (); } } } std :: cout << "The image contains this text: " << result << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Go // Sample vision-quickstart uses the Google Cloud Vision API to label an image. package main import ( "context" "fmt" "log" "os" vision "cloud.google.com/go/vision/apiv1" ) func main () { ctx := context .
- Try Cloud Vision API free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud Vision API Reference Send feedback Vision client libraries Stay organized with collections Save and categorize content based on your preferences.

