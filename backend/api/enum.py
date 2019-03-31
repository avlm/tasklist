class StatusEnum:
    TODO = 0
    DONE = 1
    REMOVED = 2

STATUS_CHOICES = (
    (StatusEnum.TODO, 'To do'),
    (StatusEnum.DONE, 'Done'),
    (StatusEnum.REMOVED, 'Removed'),
)
