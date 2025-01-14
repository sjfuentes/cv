resource "aws_cloudfront_distribution" "clodufront" {
  origin {
    domain_name = data.aws_s3_bucket.selected.website_endpoint
    origin_id = local.s3_origin_id
  }
  default_cache_behavior {
    target_origin_id = local.s3_origin_id
    allowed_methods = [ "GET", "HEAD" ]
    cached_methods = [ "GET", "HEAD" ]
    forwarded_values {
      query_string = true
      cookies {
        forward = "all"
      }
    }
    viewer_protocol_policy = "redirect-to-https"
  }
  enabled = true
  default_root_object = "index.html"
  aliases = [ var.domain_name ]
  
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    cloudfront_default_certificate = aws_acm_certificate.certificate.0.arn
  }
}
