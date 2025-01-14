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
  type = string
  description = "Domain name to look for route 53 zone"
}
