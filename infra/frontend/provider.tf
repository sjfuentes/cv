terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.40.0"
    }
  }
  backend "s3" {
    bucket         = "882567899411-sjfuentes-tfstate"
    key            = "frontend.tfstate"
    region         = "us-west-2"
    dynamodb_table = "sjfuentes-tfstate-locks"
    encrypt        = true
  }
}


provider "aws" {
  region = var.region
  default_tags {
    tags = {
      Project = "Website CV"
      Owner   = "Santiago Fuentes"
    }
  }
}

provider "aws" {
  alias  = "east"
  region = "us-east-1"
  default_tags {
    tags = {
      Project = "Website CV"
      Owner   = "Santiago Fuentes"
    }
  }
}
