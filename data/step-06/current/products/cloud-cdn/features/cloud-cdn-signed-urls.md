---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:27:19.916Z"
product_name: "Cloud CDN"
product_slug: "cloud-cdn"
feature_name: "Cloud CDN Signed URLs"
feature_slug: "cloud-cdn-signed-urls"
latest_feature_date: "2018-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/cdn/docs/using-signed-urls"
  - "https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring"
  - "https://docs.cloud.google.com/cdn/docs/release-notes"
keywords:
  - "cdn"
  - "signed"
  - "urls"
  - "is"
  - "generally"
  - "available"
  - "for"
  - "authorization"
---

# Cloud CDN Signed URLs

Product: Cloud CDN
Coverage: LOW

## Step 02 Summary

Cloud CDN Signed URLs support is generally available for authorization of cached responses; Cloud CDN Signed URLs support is available in beta for authorized access to cached content.

## Extended Definition

Cloud CDN Signed URLs support is generally available for authorization of cached responses; Cloud CDN Signed URLs support is available in beta for authorized access to cached content.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
- [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)

## Supporting Pages

### Use signed URLs \_|\_ Cloud CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/using-signed-urls](https://docs.cloud.google.com/cdn/docs/using-signed-urls)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- ComputeHash ( buffer ); } } Java / Samples to create a signed URL for a Cloud CDN endpoint / public class SignedUrls { / Creates a signed URL for a Cloud CDN endpoint with the given key URL must start with http:// or https://, and must contain a forward slash (/) after the hostname. @param url the Cloud CDN endpoint to sign @param key url signing key uploaded to the backend service/bucket, as a 16-byte array @param keyName the name of the signing key added to the back end bucket or service @param expirationTime the date that the signed URL expires @return a properly formatted signed URL @throws InvalidKeyException when there is an error generating the signature for the input key @throws NoSuchAlgorithmException when HmacSHA1 algorithm is not available in the environment / public static String signUrl ( String url , byte [] key , String keyName , Date expirationTime ) throws InvalidKeyException , NoSuchAlgorithmException { final long unixTime = expirationTime . getTime () / 1000 ; String urlToSign = url + ( url . contains ( "?" ) ? "&" : "?" ) + "Expires=" + unixTime + "&KeyName=" + keyName ; String encoded = SignedUrls . getSignature ( key , urlToSign ); return urlToSign + "&Signature=" + encoded ; } public static String getSignature ( byte [] privateKey , String input ) throws InvalidKeyException , NoSuchAlgorithmException { final String algorithm = "HmacSHA1" ; final int offset = 0 ; Key key = new SecretKeySpec ( privateKey , offset , privateKey . length , algorithm ); Mac mac = Mac . getInstance ( algorithm ); mac . init ( key ); return Base64 . getUrlEncoder (). encodeToString ( mac . doFinal ( input . getBytes ())); } Python import argparse import base64 from datetime import datetime , timezone import hashlib import hmac from urllib.parse import parse qs , urlsplit def sign url ( url : str , key name : str , base64 key : str , expiration time : datetime , ) - > str : """Gets the Signed URL string for the specified URL and configuration.
- Sprintf ( "&Signature=%s" , sig ) return url } Ruby def signed url url :, key name :, key :, expiration : url = "URL of the endpoint served by Cloud CDN" key name = "Name of the signing key added to the Google Cloud Storage bucket or service" key = "Signing key as urlsafe base64 encoded string" expiration = Ruby Time object with expiration time require "base64" require "openssl" require "time" Decode the URL safe base64 encode key decoded key = Base64 . urlsafe decode64 key Get UTC time in seconds expiration utc = expiration . utc . to i Determine which separator makes sense given a URL separator = "?" separator = "&" if url . include? "?" Concatenate url with expected query parameters Expires and KeyName url = " #{ url }#{ separator } Expires= #{ expiration utc } & KeyName= #{ key name } " Sign the url using the key and url safe base64 encode the signature signature = OpenSSL :: HMAC . digest "SHA1" , decoded key , url encoded signature = Base64 . urlsafe encode64 signature Concatenate the URL and encoded signature signed url = " #{ url } & Signature= #{ encoded signature } " end .NET /// < summary > /// Creates signed URL for Google Cloud SDN /// More details about order of operations is here : /// < see cref = "https://cloud.google.com/cdn/docs/using-signed-urls#programmatically creating signed urls" / > /// < / summary > /// < param name = "url" > The Url to sign .
- Go import ( "crypto/hmac" "crypto/sha1" "encoding/base64" "fmt" "io" "io/ioutil" "os" "strings" "time" ) // SignURLWithPrefix creates a signed URL prefix for an endpoint on Cloud CDN. // Prefixes allow access to any URL with the same prefix, and can be useful for // granting access broader content without signing multiple URLs. // // - urlPrefix must start with "https://" and should not include query parameters. // - key should be in raw form (not base64url-encoded) which is 16-bytes long. // - keyName must match a key added to the backend service or bucket. func signURLWithPrefix ( urlPrefix , keyName string , key [] byte , expiration time .
- Before you begin Before you use signed URLs, do the following: Ensure that Cloud CDN is enabled; for instructions, see Using Cloud CDN .

### "Logs and metrics for backend services \_|\_ Cloud CDN \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring](https://docs.cloud.google.com/cdn/docs/cdn-logging-monitoring)
- Source ID: `site-docs-root-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- This information is only available for global external Application Load Balancers that have enabled authorization policies .
- This information is only available for global external Application Load Balancers using custom error responses . string Optional The cachePolicySource field holds the source of the caching policy that governs the caching behavior for a specific request: CACHE POLICY SOURCE ROUTE : A cache policy can be applied at different levels of the URL map, and that allows for more granular control over caching.
- UNKNOWN is returned if the backend wasn't assigned, or NO BACKEND SELECTED if an error or interruption occurred before a backend was selected, a URL redirect occurred, or a classic Application Load Balancer with serverless backends returned a 200 OK response. backend scope type The type of the scope of the backend group.
- This information is only available for global external Application Load Balancers using custom error responses . string Required The errorBackendStatusDetails field holds the statusDetails of the final response served to the client.

### Cloud CDN release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cdn/docs/release-notes](https://docs.cloud.google.com/cdn/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- September 14, 2023 Feature The Cloud CDN private origin authentication capability for Amazon Simple Storage Service (Amazon S3) and compatible object stores is now Generally Available .
- September 20, 2022 Feature Cloud CDN support for dynamic compression is now Generally Available .
- June 26, 2018 Feature Cloud CDN Signed URLs support is available in General Availability .
- May 01, 2018 Feature Cloud CDN Signed URLs support is available in Beta .

