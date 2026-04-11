---
title: "Package com.google.cloud.vision.v1 (3.86.0) \_|\_ Java client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1
  title: "Package com.google.cloud.vision.v1 (3.86.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Package com.google.cloud.vision.v1 (3.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.86.0 (latest)
3.85.0
3.83.0
3.81.0
3.80.0
3.78.0
3.76.0
3.74.0
3.73.0
3.72.0
3.71.0
3.70.0
3.68.0
3.66.0
3.65.0
3.62.0
3.61.0
3.60.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.3
2.1.4
2.0.29
GitHub Repository
RPC Documentation
REST Documentation
Client Classes
Client classes are the main entry point to using a package.
They contain several variations of Java methods for each of the API's methods.
Client
Description
com. google. cloud. vision. v1. Image Annotator Client
Service Description: Service that performs Google Cloud Vision API detection tasks over client
images, such as face, landmark, logo, label, and text detection. The ImageAnnotator service
returns detected entities from the images.
com. google. cloud. vision. v1. Product Search Client
Service Description: Manages Products and ProductSets of reference images for use in product
search. It uses the following resource model:
- The API has a collection of ProductSet resources, named
Settings Classes
Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.
Settings
Description
com. google. cloud. vision. v1. Image Annotator Settings
Settings class to configure an instance of ImageAnnotatorClient .
The default instance has everything set to sensible defaults:
com. google. cloud. vision. v1. Product Search Settings
Settings class to configure an instance of ProductSearchClient .
The default instance has everything set to sensible defaults:
Classes
Class
Description
com. google. cloud. vision. v1. Add Product To Product Set Request
Request message for the AddProductToProductSet method.
com. google. cloud. vision. v1. Add Product To Product Set Request. Builder
Request message for the AddProductToProductSet method.
com. google. cloud. vision. v1. Annotate File Request
A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
com. google. cloud. vision. v1. Annotate File Request. Builder
A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
com. google. cloud. vision. v1. Annotate File Response
Response to a single file annotation request. A file may contain one or more
images, which individually have their own responses.
com. google. cloud. vision. v1. Annotate File Response. Builder
Response to a single file annotation request. A file may contain one or more
images, which individually have their own responses.
com. google. cloud. vision. v1. Annotate Image Request
Request for performing Google Cloud Vision API tasks over a user-provided
image, with user-requested features, and with context information.
com. google. cloud. vision. v1. Annotate Image Request. Builder
Request for performing Google Cloud Vision API tasks over a user-provided
image, with user-requested features, and with context information.
com. google. cloud. vision. v1. Annotate Image Response
Response to an image annotation request.
com. google. cloud. vision. v1. Annotate Image Response. Builder
Response to an image annotation request.
com. google. cloud. vision. v1. Async Annotate File Request
An offline file annotation request.
com. google. cloud. vision. v1. Async Annotate File Request. Builder
An offline file annotation request.
com. google. cloud. vision. v1. Async Annotate File Response
The response for a single offline file annotation request.
com. google. cloud. vision. v1. Async Annotate File Response. Builder
The response for a single offline file annotation request.
com. google. cloud. vision. v1. Async Batch Annotate Files Request
Multiple async file annotation requests are batched into a single service
call.
com. google. cloud. vision. v1. Async Batch Annotate Files Request. Builder
Multiple async file annotation requests are batched into a single service
call.
com. google. cloud. vision. v1. Async Batch Annotate Files Response
Response to an async batch file annotation request.
com. google. cloud. vision. v1. Async Batch Annotate Files Response. Builder
Response to an async batch file annotation request.
com. google. cloud. vision. v1. Async Batch Annotate Images Request
Request for async image annotation for a list of images.
com. google. cloud. vision. v1. Async Batch Annotate Images Request. Builder
Request for async image annotation for a list of images.
com. google. cloud. vision. v1. Async Batch Annotate Images Response
Response to an async batch image annotation request.
com. google. cloud. vision. v1. Async Batch Annotate Images Response. Builder
Response to an async batch image annotation request.
com. google. cloud. vision. v1. Batch Annotate Files Request
A list of requests to annotate files using the BatchAnnotateFiles API.
com. google. cloud. vision. v1. Batch Annotate Files Request. Builder
A list of requests to annotate files using the BatchAnnotateFiles API.
com. google. cloud. vision. v1. Batch Annotate Files Response
A list of file annotation responses.
com. google. cloud. vision. v1. Batch Annotate Files Response. Builder
A list of file annotation responses.
com. google. cloud. vision. v1. Batch Annotate Images Request
Multiple image annotation requests are batched into a single service call.
com. google. cloud. vision. v1. Batch Annotate Images Request. Builder
Multiple image annotation requests are batched into a single service call.
com. google. cloud. vision. v1. Batch Annotate Images Response
Response to a batch image annotation request.
com. google. cloud. vision. v1. Batch Annotate Images Response. Builder
Response to a batch image annotation request.
com. google. cloud. vision. v1. Batch Operation Metadata
Metadata for the batch operations such as the current state.
This is included in the metadata field of the Operation returned by the
com. google. cloud. vision. v1. Batch Operation Metadata. Builder
Metadata for the batch operations such as the current state.
This is included in the metadata field of the Operation returned by the
com. google. cloud. vision. v1. Block
Logical element on the page.
com. google. cloud. vision. v1. Block. Builder
Logical element on the page.
com. google. cloud. vision. v1. Bounding Poly
A bounding polygon for the detected image annotation.
com. google. cloud. vision. v1. Bounding Poly. Builder
A bounding polygon for the detected image annotation.
com. google. cloud. vision. v1. Color Info
Color information consists of RGB channels, score, and the fraction of
the image that the color occupies in the image.
com. google. cloud. vision. v1. Color Info. Builder
Color information consists of RGB channels, score, and the fraction of
the image that the color occupies in the image.
com. google. cloud. vision. v1. Create Product Request
Request message for the CreateProduct method.
com. google. cloud. vision. v1. Create Product Request. Builder
Request message for the CreateProduct method.
com. google. cloud. vision. v1. Create Product Set Request
Request message for the CreateProductSet method.
com. google. cloud. vision. v1. Create Product Set Request. Builder
Request message for the CreateProductSet method.
com. google. cloud. vision. v1. Create Reference Image Request
Request message for the CreateReferenceImage method.
com. google. cloud. vision. v1. Create Reference Image Request. Builder
Request message for the CreateReferenceImage method.
com. google. cloud. vision. v1. Crop Hint
Single crop hint that is used to generate a new crop when serving an image.
com. google. cloud. vision. v1. Crop Hint. Builder
Single crop hint that is used to generate a new crop when serving an image.
com. google. cloud. vision. v1. Crop Hints Annotation
Set of crop hints that are used to generate new crops when serving images.
com. google. cloud. vision. v1. Crop Hints Annotation. Builder
Set of crop hints that are used to generate new crops when serving images.
com. google. cloud. vision. v1. Crop Hints Params
Parameters for crop hints annotation request.
com. google. cloud. vision. v1. Crop Hints Params. Builder
Parameters for crop hints annotation request.
com. google. cloud. vision. v1. Delete Product Request
Request message for the DeleteProduct method.
com. google. cloud. vision. v1. Delete Product Request. Builder
Request message for the DeleteProduct method.
com. google. cloud. vision. v1. Delete Product Set Request
Request message for the DeleteProductSet method.
com. google. cloud. vision. v1. Delete Product Set Request. Builder
Request message for the DeleteProductSet method.
com. google. cloud. vision. v1. Delete Reference Image Request
Request message for the DeleteReferenceImage method.
com. google. cloud. vision. v1. Delete Reference Image Request. Builder
Request message for the DeleteReferenceImage method.
com. google. cloud. vision. v1. Dominant Colors Annotation
Set of dominant colors and their corresponding scores.
com. google. cloud. vision. v1. Dominant Colors Annotation. Builder
Set of dominant colors and their corresponding scores.
com. google. cloud. vision. v1. Entity Annotation
Set of detected entity features.
com. google. cloud. vision. v1. Entity Annotation. Builder
Set of detected entity features.
com. google. cloud. vision. v1. Face Annotation
A face annotation object contains the results of face detection.
com. google. cloud. vision. v1. Face Annotation. Builder
A face annotation object contains the results of face detection.
com. google. cloud. vision. v1. Face Annotation. Landmark
A face-specific landmark (for example, a face feature).
com. google. cloud. vision. v1. Face Annotation. Landmark. Builder
A face-specific landmark (for example, a face feature).
com. google. cloud. vision. v1. Feature
The type of Google Cloud Vision API detection to perform, and the maximum
number of results to return for that type. Multiple Feature objects can
be specified in the features list.
com. google. cloud. vision. v1. Feature. Builder
The type of Google Cloud Vision API detection to perform, and the maximum
number of results to return for that type. Multiple Feature objects can
be specified in the features list.
com. google. cloud. vision. v1. Gcs Destination
The Google Cloud Storage location where the output will be written to.
com. google. cloud. vision. v1. Gcs Destination. Builder
The Google Cloud Storage location where the output will be written to.
com. google. cloud. vision. v1. Gcs Source
The Google Cloud Storage location where the input will be read from.
com. google. cloud. vision. v1. Gcs Source. Builder
The Google Cloud Storage location where the input will be read from.
com. google. cloud. vision. v1. Geometry Proto
com. google. cloud. vision. v1. Get Product Request
Request message for the GetProduct method.
com. google. cloud. vision. v1. Get Product Request. Builder
Request message for the GetProduct method.
com. google. cloud. vision. v1. Get Product Set Request
Request message for the GetProductSet method.
com. google. cloud. vision. v1. Get Product Set Request. Builder
Request message for the GetProductSet method.
com. google. cloud. vision. v1. Get Reference Image Request
Request message for the GetReferenceImage method.
com. google. cloud. vision. v1. Get Reference Image Request. Builder
Request message for the GetReferenceImage method.
com. google. cloud. vision. v1. Image
Client image to perform Google Cloud Vision API tasks over.
com. google. cloud. vision. v1. Image. Builder
Client image to perform Google Cloud Vision API tasks over.
com. google. cloud. vision. v1. Image Annotation Context
If an image was produced from a file (e.g. a PDF), this message gives
information about the source of that image.
com. google. cloud. vision. v1. Image Annotation Context. Builder
If an image was produced from a file (e.g. a PDF), this message gives
information about the source of that image.
com. google. cloud. vision. v1. Image Annotator Grpc
Service that performs Google Cloud Vision API detection tasks over client
images, such as face, landmark, logo, label, and text detection. The
ImageAnnotator service returns detected entities from the images.
com. google. cloud. vision. v1. Image Annotator Grpc. Image Annotator Impl Base
Base class for the server implementation of the service ImageAnnotator.
Service that performs Google Cloud Vision API detection tasks over client
com. google. cloud. vision. v1. Image Annotator Proto
com. google. cloud. vision. v1. Image Annotator Settings. Builder
Builder for ImageAnnotatorSettings.
com. google. cloud. vision. v1. Image Context
Image context and/or feature-specific parameters.
com. google. cloud. vision. v1. Image Context. Builder
Image context and/or feature-specific parameters.
com. google. cloud. vision. v1. Image Name
com. google. cloud. vision. v1. Image Name. Builder
Builder for ImageName.
com. google. cloud. vision. v1. Image Properties
Stores image properties, such as dominant colors.
com. google. cloud. vision. v1. Image Properties. Builder
Stores image properties, such as dominant colors.
com. google. cloud. vision. v1. Image Source
External image source (Google Cloud Storage or web URL image location).
com. google. cloud. vision. v1. Image Source. Builder
External image source (Google Cloud Storage or web URL image location).
com. google. cloud. vision. v1. Import Product Sets Gcs Source
The Google Cloud Storage location for a csv file which preserves a list of
ImportProductSetRequests in each line.
com. google. cloud. vision. v1. Import Product Sets Gcs Source. Builder
The Google Cloud Storage location for a csv file which preserves a list of
ImportProductSetRequests in each line.
com. google. cloud. vision. v1. Import Product Sets Input Config
The input content for the ImportProductSets method.
com. google. cloud. vision. v1. Import Product Sets Input Config. Builder
The input content for the ImportProductSets method.
com. google. cloud. vision. v1. Import Product Sets Request
Request message for the ImportProductSets method.
com. google. cloud. vision. v1. Import Product Sets Request. Builder
Request message for the ImportProductSets method.
com. google. cloud. vision. v1. Import Product Sets Response
Response message for the ImportProductSets method.
This message is returned by the
com. google. cloud. vision. v1. Import Product Sets Response. Builder
Response message for the ImportProductSets method.
This message is returned by the
com. google. cloud. vision. v1. Input Config
The desired input location and metadata.
com. google. cloud. vision. v1. Input Config. Builder
The desired input location and metadata.
com. google. cloud. vision. v1. Lat Long Rect
Rectangle determined by min and max LatLng pairs.
com. google. cloud. vision. v1. Lat Long Rect. Builder
Rectangle determined by min and max LatLng pairs.
com. google. cloud. vision. v1. List Product Sets Request
Request message for the ListProductSets method.
com. google. cloud. vision. v1. List Product Sets Request. Builder
Request message for the ListProductSets method.
com. google. cloud. vision. v1. List Product Sets Response
Response message for the ListProductSets method.
com. google. cloud. vision. v1. List Product Sets Response. Builder
Response message for the ListProductSets method.
com. google. cloud. vision. v1. List Products In Product Set Request
Request message for the ListProductsInProductSet method.
com. google. cloud. vision. v1. List Products In Product Set Request. Builder
Request message for the ListProductsInProductSet method.
com. google. cloud. vision. v1. List Products In Product Set Response
Response message for the ListProductsInProductSet method.
com. google. cloud. vision. v1. List Products In Product Set Response. Builder
Response message for the ListProductsInProductSet method.
com. google. cloud. vision. v1. List Products Request
Request message for the ListProducts method.
com. google. cloud. vision. v1. List Products Request. Builder
Request message for the ListProducts method.
com. google. cloud. vision. v1. List Products Response
Response message for the ListProducts method.
com. google. cloud. vision. v1. List Products Response. Builder
Response message for the ListProducts method.
com. google. cloud. vision. v1. List Reference Images Request
Request message for the ListReferenceImages method.
com. google. cloud. vision. v1. List Reference Images Request. Builder
Request message for the ListReferenceImages method.
com. google. cloud. vision. v1. List Reference Images Response
Response message for the ListReferenceImages method.
com. google. cloud. vision. v1. List Reference Images Response. Builder
Response message for the ListReferenceImages method.
com. google. cloud. vision. v1. Localized Object Annotation
Set of detected objects with bounding boxes.
com. google. cloud. vision. v1. Localized Object Annotation. Builder
Set of detected objects with bounding boxes.
com. google. cloud. vision. v1. Location Info
Detected entity location information.
com. google. cloud. vision. v1. Location Info. Builder
Detected entity location information.
com. google. cloud. vision. v1. Location Name
com. google. cloud. vision. v1. Location Name. Builder
Builder for projects/{project}/locations/{location}.
com. google. cloud. vision. v1. Normalized Vertex
A vertex represents a 2D point in the image.
NOTE: the normalized vertex coordinates are relative to the original image
and range from 0 to 1.
com. google. cloud. vision. v1. Normalized Vertex. Builder
A vertex represents a 2D point in the image.
NOTE: the normalized vertex coordinates are relative to the original image
and range from 0 to 1.
com. google. cloud. vision. v1. Operation Metadata
Contains metadata for the BatchAnnotateImages operation.
com. google. cloud. vision. v1. Operation Metadata. Builder
Contains metadata for the BatchAnnotateImages operation.
com. google. cloud. vision. v1. Output Config
The desired output location and metadata.
com. google. cloud. vision. v1. Output Config. Builder
The desired output location and metadata.
com. google. cloud. vision. v1. Page
Detected page from OCR.
com. google. cloud. vision. v1. Page. Builder
Detected page from OCR.
com. google. cloud. vision. v1. Paragraph
Structural unit of text representing a number of words in certain order.
com. google. cloud. vision. v1. Paragraph. Builder
Structural unit of text representing a number of words in certain order.
com. google. cloud. vision. v1. Position
A 3D position in the image, used primarily for Face detection landmarks.
A valid Position must have both x and y coordinates.
The position coordinates are in the same scale as the original image.
com. google. cloud. vision. v1. Position. Builder
A 3D position in the image, used primarily for Face detection landmarks.
A valid Position must have both x and y coordinates.
The position coordinates are in the same scale as the original image.
com. google. cloud. vision. v1. Product
A Product contains ReferenceImages.
com. google. cloud. vision. v1. Product. Builder
A Product contains ReferenceImages.
com. google. cloud. vision. v1. Product. Key Value
A product label represented as a key-value pair.
com. google. cloud. vision. v1. Product. Key Value. Builder
A product label represented as a key-value pair.
com. google. cloud. vision. v1. Product Name
com. google. cloud. vision. v1. Product Name. Builder
Builder for projects/{project}/locations/{location}/products/{product}.
com. google. cloud. vision. v1. Product Search Client. List Product Sets Fixed Size Collection
com. google. cloud. vision. v1. Product Search Client. List Product Sets Page
com. google. cloud. vision. v1. Product Search Client. List Product Sets Paged Response
com. google. cloud. vision. v1. Product Search Client. List Products Fixed Size Collection
com. google. cloud. vision. v1. Product Search Client. List Products In Product Set Fixed Size Collection
com. google. cloud. vision. v1. Product Search Client. List Products In Product Set Page
com. google. cloud. vision. v1. Product Search Client. List Products In Product Set Paged Response
com. google. cloud. vision. v1. Product Search Client. List Products Page
com. google. cloud. vision. v1. Product Search Client. List Products Paged Response
com. google. cloud. vision. v1. Product Search Client. List Reference Images Fixed Size Collection
com. google. cloud. vision. v1. Product Search Client. List Reference Images Page
com. google. cloud. vision. v1. Product Search Client. List Reference Images Paged Response
com. google. cloud. vision. v1. Product Search Grpc
Manages Products and ProductSets of reference images for use in product
search. It uses the following resource model:
- The API has a collection of ProductSet
com. google. cloud. vision. v1. Product Search Grpc. Product Search Impl Base
Base class for the server implementation of the service ProductSearch.
Manages Products and ProductSets of reference images for use in product
com. google. cloud. vision. v1. Product Search Params
Parameters for a product search request.
com. google. cloud. vision. v1. Product Search Params. Builder
Parameters for a product search request.
com. google. cloud. vision. v1. Product Search Proto
com. google. cloud. vision. v1. Product Search Results
Results for a product search request.
com. google. cloud. vision. v1. Product Search Results. Builder
Results for a product search request.
com. google. cloud. vision. v1. Product Search Results. Grouped Result
Information about the products similar to a single product in a query
image.
com. google. cloud. vision. v1. Product Search Results. Grouped Result. Builder
Information about the products similar to a single product in a query
image.
com. google. cloud. vision. v1. Product Search Results. Object Annotation
Prediction for what the object in the bounding box is.
com. google. cloud. vision. v1. Product Search Results. Object Annotation. Builder
Prediction for what the object in the bounding box is.
com. google. cloud. vision. v1. Product Search Results. Result
Information about a product.
com. google. cloud. vision. v1. Product Search Results. Result. Builder
Information about a product.
com. google. cloud. vision. v1. Product Search Service Proto
com. google. cloud. vision. v1. Product Search Settings. Builder
Builder for ProductSearchSettings.
com. google. cloud. vision. v1. Product Set
A ProductSet contains Products. A ProductSet can contain a maximum of 1
million reference images. If the limit is exceeded, periodic indexing will
fail.
com. google. cloud. vision. v1. Product Set. Builder
A ProductSet contains Products. A ProductSet can contain a maximum of 1
million reference images. If the limit is exceeded, periodic indexing will
fail.
com. google. cloud. vision. v1. Product Set Name
com. google. cloud. vision. v1. Product Set Name. Builder
Builder for projects/{project}/locations/{location}/productSets/{product_set}.
com. google. cloud. vision. v1. Product Set Purge Config
Config to control which ProductSet contains the Products to be deleted.
com. google. cloud. vision. v1. Product Set Purge Config. Builder
Config to control which ProductSet contains the Products to be deleted.
com. google. cloud. vision. v1. Property
A Property consists of a user-supplied name/value pair.
com. google. cloud. vision. v1. Property. Builder
A Property consists of a user-supplied name/value pair.
com. google. cloud. vision. v1. Purge Products Request
Request message for the PurgeProducts method.
com. google. cloud. vision. v1. Purge Products Request. Builder
Request message for the PurgeProducts method.
com. google. cloud. vision. v1. Reference Image
A ReferenceImage represents a product image and its associated metadata,
such as bounding boxes.
com. google. cloud. vision. v1. Reference Image. Builder
A ReferenceImage represents a product image and its associated metadata,
such as bounding boxes.
com. google. cloud. vision. v1. Reference Image Name
com. google. cloud. vision. v1. Reference Image Name. Builder
Builder for
projects/{project}/locations/{location}/products/{product}/referenceImages/{reference_image}.
com. google. cloud. vision. v1. Remove Product From Product Set Request
Request message for the RemoveProductFromProductSet method.
com. google. cloud. vision. v1. Remove Product From Product Set Request. Builder
Request message for the RemoveProductFromProductSet method.
com. google. cloud. vision. v1. Safe Search Annotation
Set of features pertaining to the image, computed by computer vision
methods over safe-search verticals (for example, adult, spoof, medical,
violence).
com. google. cloud. vision. v1. Safe Search Annotation. Builder
Set of features pertaining to the image, computed by computer vision
methods over safe-search verticals (for example, adult, spoof, medical,
violence).
com. google. cloud. vision. v1. Symbol
A single symbol representation.
com. google. cloud. vision. v1. Symbol. Builder
A single symbol representation.
com. google. cloud. vision. v1. Text Annotation
TextAnnotation contains a structured representation of OCR extracted text.
The hierarchy of an OCR extracted text structure is like this:
TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
com. google. cloud. vision. v1. Text Annotation. Builder
TextAnnotation contains a structured representation of OCR extracted text.
The hierarchy of an OCR extracted text structure is like this:
TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol
com. google. cloud. vision. v1. Text Annotation. Detected Break
Detected start or end of a structural component.
com. google. cloud. vision. v1. Text Annotation. Detected Break. Builder
Detected start or end of a structural component.
com. google. cloud. vision. v1. Text Annotation. Detected Language
Detected language for a structural component.
com. google. cloud. vision. v1. Text Annotation. Detected Language. Builder
Detected language for a structural component.
com. google. cloud. vision. v1. Text Annotation. Text Property
Additional information detected on the structural component.
com. google. cloud. vision. v1. Text Annotation. Text Property. Builder
Additional information detected on the structural component.
com. google. cloud. vision. v1. Text Annotation Proto
com. google. cloud. vision. v1. Text Detection Params
Parameters for text detections. This is used to control TEXT_DETECTION and
DOCUMENT_TEXT_DETECTION features.
com. google. cloud. vision. v1. Text Detection Params. Builder
Parameters for text detections. This is used to control TEXT_DETECTION and
DOCUMENT_TEXT_DETECTION features.
com. google. cloud. vision. v1. Update Product Request
Request message for the UpdateProduct method.
com. google. cloud. vision. v1. Update Product Request. Builder
Request message for the UpdateProduct method.
com. google. cloud. vision. v1. Update Product Set Request
Request message for the UpdateProductSet method.
com. google. cloud. vision. v1. Update Product Set Request. Builder
Request message for the UpdateProductSet method.
com. google. cloud. vision. v1. Vertex
A vertex represents a 2D point in the image.
NOTE: the vertex coordinates are in the same scale as the original image.
com. google. cloud. vision. v1. Vertex. Builder
A vertex represents a 2D point in the image.
NOTE: the vertex coordinates are in the same scale as the original image.
com. google. cloud. vision. v1. Web Detection
Relevant information for the image from the Internet.
com. google. cloud. vision. v1. Web Detection. Builder
Relevant information for the image from the Internet.
com. google. cloud. vision. v1. Web Detection. Web Entity
Entity deduced from similar images on the Internet.
com. google. cloud. vision. v1. Web Detection. Web Entity. Builder
Entity deduced from similar images on the Internet.
com. google. cloud. vision. v1. Web Detection. Web Image
Metadata for online images.
com. google. cloud. vision. v1. Web Detection. Web Image. Builder
Metadata for online images.
com. google. cloud. vision. v1. Web Detection. Web Label
Label to provide extra metadata for the web detection.
com. google. cloud. vision. v1. Web Detection. Web Label. Builder
Label to provide extra metadata for the web detection.
com. google. cloud. vision. v1. Web Detection. Web Page
Metadata for web pages.
com. google. cloud. vision. v1. Web Detection. Web Page. Builder
Metadata for web pages.
com. google. cloud. vision. v1. Web Detection Params
Parameters for web detection request.
com. google. cloud. vision. v1. Web Detection Params. Builder
Parameters for web detection request.
com. google. cloud. vision. v1. Web Detection Proto
com. google. cloud. vision. v1. Word
A word representation.
com. google. cloud. vision. v1. Word. Builder
A word representation.
Interfaces
Interface
Description
com. google. cloud. vision. v1. Add Product To Product Set Request Or Builder
com. google. cloud. vision. v1. Annotate File Request Or Builder
com. google. cloud. vision. v1. Annotate File Response Or Builder
com. google. cloud. vision. v1. Annotate Image Request Or Builder
com. google. cloud. vision. v1. Annotate Image Response Or Builder
com. google. cloud. vision. v1. Async Annotate File Request Or Builder
com. google. cloud. vision. v1. Async Annotate File Response Or Builder
com. google. cloud. vision. v1. Async Batch Annotate Files Request Or Builder
com. google. cloud. vision. v1. Async Batch Annotate Files Response Or Builder
com. google. cloud. vision. v1. Async Batch Annotate Images Request Or Builder
com. google. cloud. vision. v1. Async Batch Annotate Images Response Or Builder
com. google. cloud. vision. v1. Batch Annotate Files Request Or Builder
com. google. cloud. vision. v1. Batch Annotate Files Response Or Builder
com. google. cloud. vision. v1. Batch Annotate Images Request Or Builder
com. google. cloud. vision. v1. Batch Annotate Images Response Or Builder
com. google. cloud. vision. v1. Batch Operation Metadata Or Builder
com. google. cloud. vision. v1. Block Or Builder
com. google. cloud. vision. v1. Bounding Poly Or Builder
com. google. cloud. vision. v1. Color Info Or Builder
com. google. cloud. vision. v1. Create Product Request Or Builder
com. google. cloud. vision. v1. Create Product Set Request Or Builder
com. google. cloud. vision. v1. Create Reference Image Request Or Builder
com. google. cloud. vision. v1. Crop Hint Or Builder
com. google. cloud. vision. v1. Crop Hints Annotation Or Builder
com. google. cloud. vision. v1. Crop Hints Params Or Builder
com. google. cloud. vision. v1. Delete Product Request Or Builder
com. google. cloud. vision. v1. Delete Product Set Request Or Builder
com. google. cloud. vision. v1. Delete Reference Image Request Or Builder
com. google. cloud. vision. v1. Dominant Colors Annotation Or Builder
com. google. cloud. vision. v1. Entity Annotation Or Builder
com. google. cloud. vision. v1. Face Annotation. Landmark Or Builder
com. google. cloud. vision. v1. Face Annotation Or Builder
com. google. cloud. vision. v1. Feature Or Builder
com. google. cloud. vision. v1. Gcs Destination Or Builder
com. google. cloud. vision. v1. Gcs Source Or Builder
com. google. cloud. vision. v1. Get Product Request Or Builder
com. google. cloud. vision. v1. Get Product Set Request Or Builder
com. google. cloud. vision. v1. Get Reference Image Request Or Builder
com. google. cloud. vision. v1. Image Annotation Context Or Builder
com. google. cloud. vision. v1. Image Annotator Grpc. Async Service
Service that performs Google Cloud Vision API detection tasks over client
images, such as face, landmark, logo, label, and text detection. The
ImageAnnotator service returns detected entities from the images.
com. google. cloud. vision. v1. Image Context Or Builder
com. google. cloud. vision. v1. Image Or Builder
com. google. cloud. vision. v1. Image Properties Or Builder
com. google. cloud. vision. v1. Image Source Or Builder
com. google. cloud. vision. v1. Import Product Sets Gcs Source Or Builder
com. google. cloud. vision. v1. Import Product Sets Input Config Or Builder
com. google. cloud. vision. v1. Import Product Sets Request Or Builder
com. google. cloud. vision. v1. Import Product Sets Response Or Builder
com. google. cloud. vision. v1. Input Config Or Builder
com. google. cloud. vision. v1. Lat Long Rect Or Builder
com. google. cloud. vision. v1. List Product Sets Request Or Builder
com. google. cloud. vision. v1. List Product Sets Response Or Builder
com. google. cloud. vision. v1. List Products In Product Set Request Or Builder
com. google. cloud. vision. v1. List Products In Product Set Response Or Builder
com. google. cloud. vision. v1. List Products Request Or Builder
com. google. cloud. vision. v1. List Products Response Or Builder
com. google. cloud. vision. v1. List Reference Images Request Or Builder
com. google. cloud. vision. v1. List Reference Images Response Or Builder
com. google. cloud. vision. v1. Localized Object Annotation Or Builder
com. google. cloud. vision. v1. Location Info Or Builder
com. google. cloud. vision. v1. Normalized Vertex Or Builder
com. google. cloud. vision. v1. Operation Metadata Or Builder
com. google. cloud. vision. v1. Output Config Or Builder
com. google. cloud. vision. v1. Page Or Builder
com. google. cloud. vision. v1. Paragraph Or Builder
com. google. cloud. vision. v1. Position Or Builder
com. google. cloud. vision. v1. Product. Key Value Or Builder
com. google. cloud. vision. v1. Product Or Builder
com. google. cloud. vision. v1. Product Search Grpc. Async Service
Manages Products and ProductSets of reference images for use in product
search. It uses the following resource model:
- The API has a collection of ProductSet
com. google. cloud. vision. v1. Product Search Params Or Builder
com. google. cloud. vision. v1. Product Search Results. Grouped Result Or Builder
com. google. cloud. vision. v1. Product Search Results. Object Annotation Or Builder
com. google. cloud. vision. v1. Product Search Results. Result Or Builder
com. google. cloud. vision. v1. Product Search Results Or Builder
com. google. cloud. vision. v1. Product Set Or Builder
com. google. cloud. vision. v1. Product Set Purge Config Or Builder
com. google. cloud. vision. v1. Property Or Builder
com. google. cloud. vision. v1. Purge Products Request Or Builder
com. google. cloud. vision. v1. Reference Image Or Builder
com. google. cloud. vision. v1. Remove Product From Product Set Request Or Builder
com. google. cloud. vision. v1. Safe Search Annotation Or Builder
com. google. cloud. vision. v1. Symbol Or Builder
com. google. cloud. vision. v1. Text Annotation. Detected Break Or Builder
com. google. cloud. vision. v1. Text Annotation. Detected Language Or Builder
com. google. cloud. vision. v1. Text Annotation. Text Property Or Builder
com. google. cloud. vision. v1. Text Annotation Or Builder
com. google. cloud. vision. v1. Text Detection Params Or Builder
com. google. cloud. vision. v1. Update Product Request Or Builder
com. google. cloud. vision. v1. Update Product Set Request Or Builder
com. google. cloud. vision. v1. Vertex Or Builder
com. google. cloud. vision. v1. Web Detection. Web Entity Or Builder
com. google. cloud. vision. v1. Web Detection. Web Image Or Builder
com. google. cloud. vision. v1. Web Detection. Web Label Or Builder
com. google. cloud. vision. v1. Web Detection. Web Page Or Builder
com. google. cloud. vision. v1. Web Detection Or Builder
com. google. cloud. vision. v1. Web Detection Params Or Builder
com. google. cloud. vision. v1. Word Or Builder
Enums
Enum
Description
com. google. cloud. vision. v1. Batch Operation Metadata. State
Enumerates the possible states that the batch request can be in.
com. google. cloud. vision. v1. Block. Block Type
Type of a block (text, image etc) as identified by OCR.
com. google. cloud. vision. v1. Face Annotation. Landmark. Type
Face landmark (feature) type.
Left and right are defined from the vantage of the viewer of the image
without considering mirror projections typical of photos. So, LEFT_EYE ,
com. google. cloud. vision. v1. Feature. Type
Type of Google Cloud Vision API feature to be extracted.
com. google. cloud. vision. v1. Import Product Sets Input Config. Source Case
com. google. cloud. vision. v1. Likelihood
A bucketized representation of likelihood, which is intended to give clients
highly stable results across model upgrades.
com. google. cloud. vision. v1. Operation Metadata. State
Batch operation states.
com. google. cloud. vision. v1. Purge Products Request. Target Case
com. google. cloud. vision. v1. Text Annotation. Detected Break. Break Type
Enum to denote the type of break found. New line, space etc.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
