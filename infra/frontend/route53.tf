resource "aws_route53_record" "sjfuentes" {
  zone_id = data.aws_route53_zone.selected_zone.zone_id
  name    = "sjfuentes.com"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.clodufront.domain_name
    zone_id                = aws_cloudfront_distribution.clodufront.hosted_zone_id
    evaluate_target_health = true
  }
}