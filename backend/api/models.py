from django.db import models
from django.utils import timezone
from .enum import StatusEnum
from .enum import STATUS_CHOICES


class Task(models.Model):
    title = models.CharField(max_length=200)
    status = models.IntegerField(choices=STATUS_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)
    removed_at = models.DateTimeField(editable=False, null=True, blank=True)
    finished_at = models.DateTimeField(editable=False, null=True, blank=True)

    def save(self, *args, **kwargs):
        """ On save, verify options and set removed/finished """
        # import ipdb; ipdb.set_trace()
        if self.status == StatusEnum.REMOVED:
            self.removed_at = timezone.now()

        if self.status == StatusEnum.DONE:
            self.finished_at = timezone.now()
        else:
            self.finished_at = None

        return super(Task, self).save(*args, **kwargs)
