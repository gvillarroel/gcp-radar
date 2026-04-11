---
title: "Package google.golang.org/appengine/v2/image (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/image
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/image
  title: "Package google.golang.org/appengine/v2/image (v2.0.6) \_|\_ App Engine standard\
    \ environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Reference
Send feedback
Package google.golang.org/appengine/v2/image (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package image provides image services.
Functions
func DeleteServingURL
func DeleteServingURL ( c context . Context , key appengine . BlobKey ) error
DeleteServingURL deletes the serving URL for an image.
func ServingURL
func ServingURL ( c context . Context , key appengine . BlobKey , opts * ServingURLOptions ) ( * url . URL , error )
ServingURL returns a URL that will serve an image from Blobstore.
ServingURLOptions
type ServingURLOptions struct {
Secure bool // whether the URL should use HTTPS
// Size must be between zero and 1600.
// If Size is non-zero, a resized version of the image is served,
// and Size is the served image's longest dimension. The aspect ratio is preserved.
// If Crop is true the image is cropped from the center instead of being resized.
Size int
Crop bool
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
