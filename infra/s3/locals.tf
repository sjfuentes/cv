locals {
    website_bucket_name = "${var.account_id}-${var.prefix}-${var.environment}-website"
    webiste_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
        {
            "Sid": "PublicReadGetObject",
            "Principal": "*",
            "Effect": "Allow",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${var.account_id}-${var.prefix}-${var.environment}-website/*"
        }
    ]
  })
}