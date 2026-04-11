---
title: "Attestor \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest/Shared.Types/Attestor
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/reference/rest/Shared.Types/Attestor
  title: "Attestor \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Reference
Send feedback
Attestor
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
UserOwnedDrydockNote
JSON representation
AttestorPublicKey
JSON representation
PkixPublicKey
JSON representation
An attestor that attests to container image artifacts. An existing attestor cannot be modified except where indicated.
JSON representation
{
"name" : string ,
"description" : string ,
"updateTime" : string ,
"etag" : string ,
// Union field attestor_type can be only one of the following:
"userOwnedDrydockNote" : {
object ( UserOwnedDrydockNote )
}
// End of list of possible types for union field attestor_type .
}
Fields
name
string
Required. The resource name, in the format: projects/*/attestors/* . This field may not be updated.
description
string
Optional. A descriptive comment. This field may be updated. The field may be displayed in chooser dialogs.
updateTime
string ( Timestamp format)
Output only. Time when the attestor was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
etag
string
Optional. A checksum, returned by the server, that can be sent on update requests to ensure the attestor has an up-to-date value before attempting to update it. See https://google.aip.dev/154 .
Union field attestor_type . Required. Identifies an attestor that attests to a container image artifact. This determines how an attestation will be stored, and how it will be used during policy enforcement. Updates may not change the attestor type, but individual attestor fields may be updated. attestor_type can be only one of the following:
userOwnedDrydockNote
object ( UserOwnedDrydockNote )
A Drydock ATTESTATION_AUTHORITY Note, created by the user.
UserOwnedDrydockNote
An user owned drydock note references a Drydock ATTESTATION_AUTHORITY Note created by the user.
JSON representation
{
"noteReference" : string ,
"publicKeys" : [
{
object ( AttestorPublicKey )
}
] ,
"delegationServiceAccountEmail" : string
}
Fields
noteReference
string
Required. The Drydock resource name of a ATTESTATION_AUTHORITY Note, created by the user, in the format: projects/*/notes/* (or the legacy providers/*/notes/* ). This field may not be updated.
An attestation by this attestor is stored as a Drydock ATTESTATION_AUTHORITY Occurrence that names a container image and that links to this Note. Drydock is an external dependency.
publicKeys[]
object ( AttestorPublicKey )
Optional. Public keys that verify attestations signed by this attestor. This field may be updated.
If this field is non-empty, one of the specified public keys must verify that an attestation was signed by this attestor for the image specified in the admission request.
If this field is empty, this attestor always returns that no valid attestations exist.
delegationServiceAccountEmail
string
Output only. This field will contain the service account email address that this Attestor will use as the principal when querying Container Analysis. Attestor administrators must grant this service account the IAM role needed to read attestations from the [noteReference][Note] in Container Analysis ( containeranalysis.notes.occurrences.viewer ).
This email address is fixed for the lifetime of the Attestor, but callers should not make any other assumptions about the service account email; future versions may use an email based on a different naming pattern.
AttestorPublicKey
An attestor public key that will be used to verify attestations signed by this attestor.
JSON representation
{
"comment" : string ,
"id" : string ,
// Union field public_key can be only one of the following:
"asciiArmoredPgpPublicKey" : string ,
"pkixPublicKey" : {
object ( PkixPublicKey )
}
// End of list of possible types for union field public_key .
}
Fields
comment
string
Optional. A descriptive comment. This field may be updated.
id
string
The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on publicKey cases below for details.
Union field public_key . Required. A public key reference or serialized instance. This field may be updated. public_key can be only one of the following:
asciiArmoredPgpPublicKey
string
ASCII-armored representation of a PGP public key, as the entire output by the command gpg --export --armor foo@example.com (either LF or CRLF line endings). When using this field, id should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If id is provided by the caller, it will be overwritten by the API-calculated ID.
pkixPublicKey
object ( PkixPublicKey )
A raw PKIX SubjectPublicKeyInfo format public key.
NOTE: id may be explicitly provided by the caller when using this type of public key, but it MUST be a valid RFC3986 URI. If id is left blank, a default one will be computed based on the digest of the DER encoding of the public key.
PkixPublicKey
A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
JSON representation
{
"publicKeyPem" : string ,
"signatureAlgorithm" : enum ( SignatureAlgorithm )
}
Fields
publicKeyPem
string
A PEM-encoded public key, as described in https://tools.ietf.org/html/rfc7468#section-13
signatureAlgorithm
enum ( SignatureAlgorithm )
The signature algorithm used to verify a message against a signature using this key. These signature algorithm must match the structure and any object identifiers encoded in publicKeyPem (i.e. this algorithm must match that of the public key).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
