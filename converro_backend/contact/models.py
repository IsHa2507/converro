from django.db import models

# Create your models here.

class Contact(models.Model):
    subject = [
        ('general', 'General Inquiry'),
        ('sales', 'Sales Inquiry'),
        ('customer', 'Customer Support')
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    subjects = models.CharField(max_length=20, choices=subject, blank=True, null=True)
    message = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.first_name}"