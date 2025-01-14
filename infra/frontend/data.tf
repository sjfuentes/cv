data "aws_route53_zone" "selected_zone" {
    name = var.domain_name
    private_zone = false
}

data "aws_s3_bucket" "selected" {
  bucket = "${var.account_id}-${var.prefix}-${var.environment}-website"
}
