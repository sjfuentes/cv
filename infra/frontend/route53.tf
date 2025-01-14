resource "aws_route53_record" "sjfuentes" {
  zone_id = data.aws_route53_zone.selected_zone.zone_id
  name    = "sjfuentes.com"
  type    = "A"
  ttl     = 300
  records = [aws_eip.lb.public_ip]
  alias {
    name = aws_cloudfront_distribution.clodufront.domain_name
    zone_id = data.aws_route53_zone.selected_zone.zone_id
    evaluate_target_health = true
  }
}