---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.272Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Customer-managed encryption keys compliance"
feature_slug: "customer-managed-encryption-keys-compliance"
latest_feature_date: "2020-04-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/docs/detect-labels-image-api"
  - "https://docs.cloud.google.com/vision/docs/libraries"
  - "https://docs.cloud.google.com/vision/docs/reference/libraries"
  - "https://docs.cloud.google.com/vision/docs/setup"
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
Coverage: MEDIUM

## Step 02 Summary

Cloud Vision API is compliant with customer-managed encryption keys for supported capabilities.

## Extended Definition

Cloud Vision API is compliant with customer-managed encryption keys for supported capabilities.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/docs/detect-labels-image-api](https://docs.cloud.google.com/vision/docs/detect-labels-image-api)
- [https://docs.cloud.google.com/vision/docs/libraries](https://docs.cloud.google.com/vision/docs/libraries)
- [https://docs.cloud.google.com/vision/docs/reference/libraries](https://docs.cloud.google.com/vision/docs/reference/libraries)
- [https://docs.cloud.google.com/vision/docs/setup](https://docs.cloud.google.com/vision/docs/setup)

## Supporting Pages

### "Quickstart: Detect labels in an image by using the Cloud Vision API \_|\_\

- URL: [https://docs.cloud.google.com/vision/docs/detect-labels-image-api](https://docs.cloud.google.com/vision/docs/detect-labels-image-api)
- Source ID: `site-docs-root`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Try this method section, complete the interactive API Explorer template by replacing cloud-samples-data/vision in the image.source.imageUri field with the name of the Cloud Storage bucket where you uploaded the demo-img.jpg file.
- Home Documentation AI and ML Cloud Vision API Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- You can store up to 5 GB of data in Cloud Storage for no charge and make up to 1000 feature requests per month to the Vision API for no charge.
- Detect labels in an image by using the Cloud Vision API This quickstart shows you how to: Create a Cloud Storage bucket.

### Vision client libraries \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/libraries](https://docs.cloud.google.com/vision/docs/libraries)
- Source ID: `site-api-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Image () image . source . image uri = file uri Performs label detection on the image file response = client . label detection ( image = image ) labels = response . label annotations print ( "Labels:" ) for label in labels : print ( label . description ) return labels Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Additional client libraries In addition to the libraries shown above, Spring Cloud Google Cloud is available for Java applications.
- BatchAnnotateImages ( batch request ); if ( ! batch ) throw std :: move ( batch ). status (); // Find the longest annotation and print it auto result = std :: string {}; for ( auto const & response : batch - > responses ()) { for ( auto const & annotation : response . text annotations ()) { if ( result . size () < annotation . description (). size ()) { result = annotation . description (); } } } std :: cout << "The image contains this text: " << result << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Go // Sample vision-quickstart uses the Google Cloud Vision API to label an image. package main import ( "context" "fmt" "log" "os" vision "cloud.google.com/go/vision/apiv1" ) func main () { ctx := context .
- Try Cloud Vision API free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud Vision API Reference Send feedback Vision client libraries Stay organized with collections Save and categorize content based on your preferences.

### Vision client libraries \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/reference/libraries](https://docs.cloud.google.com/vision/docs/reference/libraries)
- Source ID: `site-docs-reference`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- Image () image . source . image uri = file uri Performs label detection on the image file response = client . label detection ( image = image ) labels = response . label annotations print ( "Labels:" ) for label in labels : print ( label . description ) return labels Additional resources C++ The following list contains links to more resources related to the client library for C++: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code C# The following list contains links to more resources related to the client library for C#: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Go The following list contains links to more resources related to the client library for Go: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Java The following list contains links to more resources related to the client library for Java: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Node.js The following list contains links to more resources related to the client library for Node.js: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code PHP The following list contains links to more resources related to the client library for PHP: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Python The following list contains links to more resources related to the client library for Python: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Ruby The following list contains links to more resources related to the client library for Ruby: API reference Client libraries best practices Issue tracker google-cloud-vision on Stack Overflow Source code Additional client libraries In addition to the libraries shown above, Spring Cloud Google Cloud is available for Java applications.
- BatchAnnotateImages ( batch request ); if ( ! batch ) throw std :: move ( batch ). status (); // Find the longest annotation and print it auto result = std :: string {}; for ( auto const & response : batch - > responses ()) { for ( auto const & annotation : response . text annotations ()) { if ( result . size () < annotation . description (). size ()) { result = annotation . description (); } } } std :: cout << "The image contains this text: " << result << " \n " ; return 0 ; } catch ( google :: cloud :: Status const & status ) { std :: cerr << "google::cloud::Status thrown: " << status << " \n " ; return 1 ; } Go // Sample vision-quickstart uses the Google Cloud Vision API to label an image. package main import ( "context" "fmt" "log" "os" vision "cloud.google.com/go/vision/apiv1" ) func main () { ctx := context .
- Try Cloud Vision API free Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Cloud Vision API Reference Send feedback Vision client libraries Stay organized with collections Save and categorize content based on your preferences.

### "Cloud Vision setup and cleanup \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/setup](https://docs.cloud.google.com/vision/docs/setup)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Install the Vision API client library You have three options for calling the Vision API: Google supported client libraries (recommended) REST gRPC The client libraries are available for several popular languages.
- Home Documentation AI and ML Cloud Vision API Guides Send feedback Cloud Vision setup and cleanup Stay organized with collections Save and categorize content based on your preferences.
- Enable the API Install and initialize the Google Cloud CLI If you plan to use the Vision API, you need to install and initialize the Google Cloud CLI .
- Authentication with user accounts User accounts are the best authentication option when learning the Vision API and for local development.

