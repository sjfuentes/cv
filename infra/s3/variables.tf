variable "prefix" {
  type    = string
  default = "sjfuentes"
}

variable "repo_name" {
  type    = string
  default = "interview-prep"
}

variable "region" {
  type    = string
  default = "us-west-2"
}

variable "account_id" {
  type    = string
  default = "882567899411"
}

variable "environment" {
  type = string
}

variable "webiste_bucket_versioning" {
  type = string
  default = "Enabled"
  description = "Versioning state of the bucket. Valid value: Enabled, Suspended or Disabled."
  validation {
    condition = contains(["Enabled", "Suspended", "Disabled"],var.webiste_bucket_versioning)
    error_message = "The value must be one of Enabled, Suspended or Disabled"
  }
}

variable "block_public_acls" {
  type = bool
  default = true
  description = "Whether Amazon S3 should block public ACLs for this bucket"
}

variable "block_public_policy" {
  type = bool
  default = true
  description = "Whether Amazon S3 should block public bucket policies for this bucket" 
}

variable "ignore_public_acls" {
  type = bool
  default = true
  description = "Whether Amazon S3 should ignore public ACLs for this bucket"
}

variable "restrict_public_buckets" {
  type = bool
  default = true
  description = "Whether Amazon S3 should restrict public bucket policies for this bucket"
}

variable "index_document" {
  type = string
  default = "index.html"
  description = "The name of the main page for the traffic to be received"
}

variable "error_document" {
  type = string
  default = "error.html"
  description = "Document to show when a 4XX error occurs"
}
