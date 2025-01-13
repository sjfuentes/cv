resource "aws_s3_bucket" "website-bucket" {
  bucket = local.website_bucket_name


  tags = {
    Name        = local.website_bucket_name
    Environment = var.environment
  }
}

resource "aws_s3_bucket_versioning" "webiste-versionning" {
  bucket = aws_s3_bucket.website-bucket.id
  versioning_configuration {
    status = var.webiste_bucket_versioning
  }
}

resource "aws_s3_bucket_public_access_block" "s3_access" {
  bucket = aws_s3_bucket.website-bucket.id

  block_public_acls       = var.block_public_acls
  block_public_policy     = var.block_public_policy
  ignore_public_acls      = var.ignore_public_acls
  restrict_public_buckets = var.restrict_public_buckets
}

resource "aws_s3_bucket_policy" "allow_website_access" {
  bucket = aws_s3_bucket.website-bucket.id
  policy = data.aws_iam_policy_document.allow_website_access.json
}

data "aws_iam_policy_document" "allow_website_access" {
  source_policy_documents = [local.webiste_policy]
}

resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website-bucket.id

  index_document {
    suffix = var.index_document
  }

  error_document {
    key = var.error_document
  }
}
