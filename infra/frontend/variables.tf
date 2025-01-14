variable "prefix" {
  type    = string
  default = "sjfuentes"
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

variable "domain_name" {
  type        = string
  description = "Domain name to look for route 53 zone"
}

variable "oac-name" {
  description = "This is the name of the cloudfront origin Access control with s3 bucket origin domain"
  type        = string
  default     = "s3-bucket-oac"
}

variable "origin_access_control_origin_type" {
  description = "The origin type must be the same as the origin domain"
  type        = string
  default     = "s3"
}

variable "signing_behavior" {
  description = "Specifies which requests CloudFront signs."
  type        = string
  default     = "always"
}

variable "signing_protocol" {
  description = "Determines how CloudFront signs (authenticates) requests."
  type        = string
  default     = "sigv4" # The only valid value
}