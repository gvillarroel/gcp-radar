---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.819Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Google account authentication"
feature_slug: "google-account-authentication"
latest_feature_date: "2014-09-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/guides/app_engine_intro"
  - "https://developers.google.com/earth-engine/guides/auth"
keywords:
  - "account"
  - "authentication"
  - "supports"
  - "with"
  - "in"
  - "the"
  - "python"
  - "api"
---

# Google account authentication

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Supports authentication with a Google account in the Python API.

## Extended Definition

Supports authentication with a Google account in the Python API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)

## Supporting Pages

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- Before you begin Follow these instructions to: Apply for Earth Engine Create a Google Cloud project Enable the Earth Engine API on the project Create a service account Give the service account project level permission to perform Earth Engine computations Note : To complete this tutorial, you will need a service account that is registered for Earth Engine access.
- Home Products Google Earth Engine Reference Send feedback Image computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.

### "App Engine & Earth Engine Overview \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/app_engine_intro](https://developers.google.com/earth-engine/guides/app_engine_intro)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To set up authentication with a service account, follow these instructions to create the service account and private key file.
- If the test succeeds, update config.py (or an equivalent file in your source code) with your service account email address. (The path to the key file should not change since it's in your project directory).
- Earth Engine and App Engine can be combined to build scalable geospatial applications, using either a service account for public access or client-side authentication requiring user registration.
- Typically, your App Engine code includes the Earth Engine Python client library and makes requests to the Earth Engine backend using a service account .

### "Authentication and Initialization \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/auth](https://developers.google.com/earth-engine/guides/auth)
- Source ID: `site-docs-root-2`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you are authenticating Python code that will run unattended, you may want to authenticate with a service account rather than a user account.
- It then initializes the Python client library with methods that the backend server supports.
- This delegates authentication to the gcloud tool and is the same as running gcloud auth application-default login with the default Earth Engine scopes (earthengine, cloud-platform, and drive) or the scopes in the scopes argument. gcloud mode works in both local and remote cases.
- If you are using the JavaScript API (outside of the Code Editor), use one of the authentication helpers in ee.data (for example, ee.data.authenticateViaPopup() ) followed by ee.initialize() as shown in this example .

