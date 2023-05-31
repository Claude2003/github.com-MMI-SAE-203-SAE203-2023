/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Artistes = "Artistes",
	Oeuvres = "Oeuvres",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArtistesRecord = {
	Photo?: string
	Nom_de_l_artiste?: string
	Prenom?: string
	Annee_de_naissance?: number
	Annee_de_deces?: number
}

export type OeuvresRecord = {
	photo?: string
	nom_de_l_oeuvre?: string
	Description?: string
	Date_de_creation?: number
	peint?: RecordIdString
}

// Response types include system fields and match responses from the PocketBase API
export type ArtistesResponse = Required<ArtistesRecord> & BaseSystemFields
export type OeuvresResponse<Texpand = unknown> = Required<OeuvresRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Artistes: ArtistesRecord
	Oeuvres: OeuvresRecord
}

export type CollectionResponses = {
	Artistes: ArtistesResponse
	Oeuvres: OeuvresResponse
}