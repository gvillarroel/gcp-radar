---
title: "Authenticating to the Cloud Vision API \_|\_ Vision API Product Search \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/auth
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/auth
  title: "Authenticating to the Cloud Vision API \_|\_ Vision API Product Search \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The Product Search feature is in maintenance mode. For better scalability and the same functionality as Product Search, use the Vision Warehouse .
Home
Documentation
Industry solutions
Vision API Product Search
Send feedback
Authenticating to the Cloud Vision API
Stay organized with collections
Save and categorize content based on your preferences.
Using a service account
Using a service account to authenticate is the preferred method. To use a
service account to authenticate to the Vision API:
Follow the instructions to
create a service account .
Select JSON as your key type.
Once complete, your service account key is downloaded to your browser's
default location.
Next, decide whether you'll provide your service account authentication as a
bearer token or using application default credentials .
Bearer tokens
If you're calling the Vision API directly, such as by making an HTTP request
with cURL, you'll pass your authentication as a bearer token in an
Authorization header. To obtain a bearer token using your service account:
Install the gcloud CLI .
Authenticate to your service account, replacing KEY_FILE below with the
path to your service account key file:
gcloud auth activate-service-account --key-file KEY_FILE
Obtain an authorization token using your service account:
gcloud auth print-access-token
The command returns an access token value.
When calling the API, obtain an authorization token using your service
account in an Authorization header:
curl - s - H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
- H "Content-Type: application/json" \
"https://vision.googleapis.com/v1/images:annotate" - d @request . json
Application default credentials
If you're using a client library to call the Vision API, use
Application Default Credentials (ADC).
Services using ADC look for credentials within a GOOGLE_APPLICATION_CREDENTIALS
environment variable. Unless you specifically wish to have ADC use other
credentials (for example, user credentials), we recommend you set this
environment variable to point to your service account key file.
export GOOGLE_APPLICATION_CREDENTIALS= PATH_TO_KEY_FILE
Replace PATH_TO_KEY_FILE with the path to your JSON service account file.
GOOGLE_APPLICATION_CREDENTIALS should be written out as-is (it's not a
placeholder in the example above).
Using an API key
You can use a Google Cloud console API key to authenticate to the Vision API.
To do so:
Follow the instructions to
create an API key for your Google Cloud console project .
When making any Vision API request, pass your key as the value of a key
parameter. For example:
POST https://vision.googleapis.com/v1/images:annotate?key=YOUR_API_KEY
Make sure to read
Best practices for securely using API keys
to prevent unauthorized use of your API key.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
