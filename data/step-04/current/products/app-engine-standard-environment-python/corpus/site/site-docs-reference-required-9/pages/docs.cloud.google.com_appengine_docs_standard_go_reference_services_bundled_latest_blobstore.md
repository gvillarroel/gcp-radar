---
title: "Package google.golang.org/appengine/v2/blobstore (v2.0.6) \_|\_ App Engine\
  \ standard environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/blobstore
  title: "Package google.golang.org/appengine/v2/blobstore (v2.0.6) \_|\_ App Engine\
    \ standard environment \_|\_ Google Cloud Documentation"
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
Package google.golang.org/appengine/v2/blobstore (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package blobstore provides a client for App Engine's persistent blob
storage service.
Functions
func BlobKeyForFile
func BlobKeyForFile ( c context . Context , filename string ) ( appengine . BlobKey , error )
BlobKeyForFile returns a BlobKey for a Google Storage file.
The filename should be of the form "/gs/bucket_name/object_name".
func Delete
func Delete ( c context . Context , blobKey appengine . BlobKey ) error
Delete deletes a blob.
func DeleteMulti
func DeleteMulti ( c context . Context , blobKey [] appengine . BlobKey ) error
DeleteMulti deletes multiple blobs.
func ParseUpload
func ParseUpload ( req * http . Request ) ( blobs map [ string ][] * BlobInfo , other url . Values , err error )
ParseUpload parses the synthetic POST request that your app gets from
App Engine after a user's successful upload of blobs. Given the request,
ParseUpload returns a map of the blobs received (keyed by HTML form
element name) and other non-blob POST parameters.
func Send
func Send ( response http . ResponseWriter , blobKey appengine . BlobKey )
Send sets the headers on response to instruct App Engine to send a blob as
the response body. This is more efficient than reading and writing it out
manually and isn't subject to normal response size limits.
func UploadURL
func UploadURL ( c context . Context , successPath string , opts * UploadURLOptions ) ( * url . URL , error )
UploadURL creates an upload URL for the form that the user will
fill out, passing the application path to load when the POST of the
form is completed. These URLs expire and should not be reused. The
opts parameter may be nil.
BlobInfo
type BlobInfo struct {
BlobKey appengine . BlobKey
ContentType string `datastore:"content_type"`
CreationTime time . Time `datastore:"creation"`
Filename string `datastore:"filename"`
Size int64 `datastore:"size"`
MD5 string `datastore:"md5_hash"`
// ObjectName is the Google Cloud Storage name for this blob.
ObjectName string `datastore:"gs_object_name"`
}
BlobInfo is the blob metadata that is stored in the datastore.
Filename may be empty.
func Stat
func Stat ( c context . Context , blobKey appengine . BlobKey ) ( * BlobInfo , error )
Stat returns the BlobInfo for a provided blobKey. If no blob was found for
that key, Stat returns datastore.ErrNoSuchEntity.
Reader
type Reader interface {
io . Reader
io . ReaderAt
io . Seeker
}
Reader is a blob reader.
func NewReader
func NewReader ( c context . Context , blobKey appengine . BlobKey ) Reader
NewReader returns a reader for a blob. It always succeeds; if the blob does
not exist then an error will be reported upon first read.
UploadURLOptions
type UploadURLOptions struct {
MaxUploadBytes int64 // optional
MaxUploadBytesPerBlob int64 // optional
// StorageBucket specifies the Google Cloud Storage bucket in which
// to store the blob.
// This is required if you use Cloud Storage instead of Blobstore.
// Your application must have permission to write to the bucket.
// You may optionally specify a bucket name and path in the format
// "bucket_name/path", in which case the included path will be the
// prefix of the uploaded object's name.
StorageBucket string
}
UploadURLOptions are the options to create an upload URL.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
