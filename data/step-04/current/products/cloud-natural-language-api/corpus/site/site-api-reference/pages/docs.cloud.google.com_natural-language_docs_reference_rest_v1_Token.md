---
title: "Token \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Token
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/natural-language/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/natural-language/docs/reference/rest/v1/Token
  title: "Token \_|\_ Cloud Natural Language API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Natural Language API
Reference
Send feedback
Token
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
PartOfSpeech
JSON representation
Tag
Aspect
Case
Form
Gender
Mood
Number
Person
Proper
Reciprocity
Tense
Voice
DependencyEdge
JSON representation
Label
Represents the smallest syntactic building block of the text.
JSON representation
{
"text" : {
object ( TextSpan )
} ,
"partOfSpeech" : {
object ( PartOfSpeech )
} ,
"dependencyEdge" : {
object ( DependencyEdge )
} ,
"lemma" : string
}
Fields
text
object ( TextSpan )
The token text.
part Of Speech
object ( PartOfSpeech )
Parts of speech tag for this token.
dependency Edge
object ( DependencyEdge )
Dependency tree parse for this token.
lemma
string
Lemma of the token.
PartOfSpeech
Represents part of speech information for a token. Parts of speech are as defined in http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
JSON representation
{
"tag" : enum ( Tag ) ,
"aspect" : enum ( Aspect ) ,
"case" : enum ( Case ) ,
"form" : enum ( Form ) ,
"gender" : enum ( Gender ) ,
"mood" : enum ( Mood ) ,
"number" : enum ( Number ) ,
"person" : enum ( Person ) ,
"proper" : enum ( Proper ) ,
"reciprocity" : enum ( Reciprocity ) ,
"tense" : enum ( Tense ) ,
"voice" : enum ( Voice )
}
Fields
tag
enum ( Tag )
The part of speech tag.
aspect
enum ( Aspect )
The grammatical aspect.
case
enum ( Case )
The grammatical case.
form
enum ( Form )
The grammatical form.
gender
enum ( Gender )
The grammatical gender.
mood
enum ( Mood )
The grammatical mood.
number
enum ( Number )
The grammatical number.
person
enum ( Person )
The grammatical person.
proper
enum ( Proper )
The grammatical properness.
reciprocity
enum ( Reciprocity )
The grammatical reciprocity.
tense
enum ( Tense )
The grammatical tense.
voice
enum ( Voice )
The grammatical voice.
Tag
The part of speech tags enum.
Enums
UNKNOWN
Unknown
ADJ
Adjective
ADP
Adposition (preposition and postposition)
ADV
Adverb
CONJ
Conjunction
DET
Determiner
NOUN
Noun (common and proper)
NUM
Cardinal number
PRON
Pronoun
PRT
Particle or other function word
PUNCT
Punctuation
VERB
Verb (all tenses and modes)
X
Other: foreign words, typos, abbreviations
AFFIX
Affix
Aspect
The characteristic of a verb that expresses time flow during an event.
Enums
ASPECT_UNKNOWN
Aspect is not applicable in the analyzed language or is not predicted.
PERFECTIVE
Perfective
IMPERFECTIVE
Imperfective
PROGRESSIVE
Progressive
Case
The grammatical function performed by a noun or pronoun in a phrase, clause, or sentence. In some languages, other parts of speech, such as adjective and determiner, take case inflection in agreement with the noun.
Enums
CASE_UNKNOWN
Case is not applicable in the analyzed language or is not predicted.
ACCUSATIVE
Accusative
ADVERBIAL
Adverbial
COMPLEMENTIVE
Complementive
DATIVE
Dative
GENITIVE
Genitive
INSTRUMENTAL
Instrumental
LOCATIVE
Locative
NOMINATIVE
Nominative
OBLIQUE
Oblique
PARTITIVE
Partitive
PREPOSITIONAL
Prepositional
REFLEXIVE_CASE
Reflexive
RELATIVE_CASE
Relative
VOCATIVE
Vocative
Form
Depending on the language, Form can be categorizing different forms of verbs, adjectives, adverbs, etc. For example, categorizing inflected endings of verbs and adjectives or distinguishing between short and long forms of adjectives and participles
Enums
FORM_UNKNOWN
Form is not applicable in the analyzed language or is not predicted.
ADNOMIAL
Adnomial
AUXILIARY
Auxiliary
COMPLEMENTIZER
Complementizer
FINAL_ENDING
Final ending
GERUND
Gerund
REALIS
Realis
IRREALIS
Irrealis
SHORT
Short form
LONG
Long form
ORDER
Order form
SPECIFIC
Specific form
Gender
Gender classes of nouns reflected in the behaviour of associated words.
Enums
GENDER_UNKNOWN
Gender is not applicable in the analyzed language or is not predicted.
FEMININE
Feminine
MASCULINE
Masculine
NEUTER
Neuter
Mood
The grammatical feature of verbs, used for showing modality and attitude.
Enums
MOOD_UNKNOWN
Mood is not applicable in the analyzed language or is not predicted.
CONDITIONAL_MOOD
Conditional
IMPERATIVE
Imperative
INDICATIVE
Indicative
INTERROGATIVE
Interrogative
JUSSIVE
Jussive
SUBJUNCTIVE
Subjunctive
Number
Count distinctions.
Enums
NUMBER_UNKNOWN
Number is not applicable in the analyzed language or is not predicted.
SINGULAR
Singular
PLURAL
Plural
DUAL
Dual
Person
The distinction between the speaker, second person, third person, etc.
Enums
PERSON_UNKNOWN
Person is not applicable in the analyzed language or is not predicted.
FIRST
First
SECOND
Second
THIRD
Third
REFLEXIVE_PERSON
Reflexive
Proper
This category shows if the token is part of a proper name.
Enums
PROPER_UNKNOWN
Proper is not applicable in the analyzed language or is not predicted.
PROPER
Proper
NOT_PROPER
Not proper
Reciprocity
Reciprocal features of a pronoun.
Enums
RECIPROCITY_UNKNOWN
Reciprocity is not applicable in the analyzed language or is not predicted.
RECIPROCAL
Reciprocal
NON_RECIPROCAL
Non-reciprocal
Tense
Time reference.
Enums
TENSE_UNKNOWN
Tense is not applicable in the analyzed language or is not predicted.
CONDITIONAL_TENSE
Conditional
FUTURE
Future
PAST
Past
PRESENT
Present
IMPERFECT
Imperfect
PLUPERFECT
Pluperfect
Voice
The relationship between the action that a verb expresses and the participants identified by its arguments.
Enums
VOICE_UNKNOWN
Voice is not applicable in the analyzed language or is not predicted.
ACTIVE
Active
CAUSATIVE
Causative
PASSIVE
Passive
DependencyEdge
Represents dependency parse tree information for a token. (For more information on dependency labels, see http://www.aclweb.org/anthology/P13-2017
JSON representation
{
"headTokenIndex" : integer ,
"label" : enum ( Label )
}
Fields
head Token Index
integer
Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the headTokenIndex is its own index.
label
enum ( Label )
The parse label for the token.
Label
The parse label enum for the token.
Enums
UNKNOWN
Unknown
ABBREV
Abbreviation modifier
ACOMP
Adjectival complement
ADVCL
Adverbial clause modifier
ADVMOD
Adverbial modifier
AMOD
Adjectival modifier of an NP
APPOS
Appositional modifier of an NP
ATTR
Attribute dependent of a copular verb
AUX
Auxiliary (non-main) verb
AUXPASS
Passive auxiliary
CC
Coordinating conjunction
CCOMP
Clausal complement of a verb or adjective
CONJ
Conjunct
CSUBJ
Clausal subject
CSUBJPASS
Clausal passive subject
DEP
Dependency (unable to determine)
DET
Determiner
DISCOURSE
Discourse
DOBJ
Direct object
EXPL
Expletive
GOESWITH
Goes with (part of a word in a text not well edited)
IOBJ
Indirect object
MARK
Marker (word introducing a subordinate clause)
MWE
Multi-word expression
MWV
Multi-word verbal expression
NEG
Negation modifier
NN
Noun compound modifier
NPADVMOD
Noun phrase used as an adverbial modifier
NSUBJ
Nominal subject
NSUBJPASS
Passive nominal subject
NUM
Numeric modifier of a noun
NUMBER
Element of compound number
P
Punctuation mark
PARATAXIS
Parataxis relation
PARTMOD
Participial modifier
PCOMP
The complement of a preposition is a clause
POBJ
Object of a preposition
POSS
Possession modifier
POSTNEG
Postverbal negative particle
PRECOMP
Predicate complement
PRECONJ
Preconjunt
PREDET
Predeterminer
PREF
Prefix
PREP
Prepositional modifier
PRONL
The relationship between a verb and verbal morpheme
PRT
Particle
PS
Associative or possessive marker
QUANTMOD
Quantifier phrase modifier
RCMOD
Relative clause modifier
RCMODREL
Complementizer in relative clause
RDROP
Ellipsis without a preceding predicate
REF
Referent
REMNANT
Remnant
REPARANDUM
Reparandum
ROOT
Root
SNUM
Suffix specifying a unit of number
SUFF
Suffix
TMOD
Temporal modifier
TOPIC
Topic marker
VMOD
Clause headed by an infinite form of the verb that modifies a noun
VOCATIVE
Vocative
XCOMP
Open clausal complement
SUFFIX
Name suffix
TITLE
Name title
ADVPHMOD
Adverbial phrase modifier
AUXCAUS
Causative auxiliary
AUXVV
Helper auxiliary
DTMOD
Rentaishi (Prenominal modifier)
FOREIGN
Foreign words
KW
Keyword
LIST
List for chains of comparable items
NOMC
Nominalized clause
NOMCSUBJ
Nominalized clausal subject
NOMCSUBJPASS
Nominalized clausal passive
NUMC
Compound of numeric modifier
COP
Copula
DISLOCATED
Dislocated relation (for fronted/topicalized elements)
ASP
Aspect marker
GMOD
Genitive modifier
GOBJ
Genitive object
INFMOD
Infinitival modifier
MES
Measure
NCOMP
Nominal complement of a noun
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
