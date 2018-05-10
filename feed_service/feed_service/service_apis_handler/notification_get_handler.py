from flask import request

from feed_service.db.feed_models.models import Notification
from feed_service.services import user_service


def get_notification(request_data):
    auth_token = request.cookies.get('auth_key')
    is_valid, user_object = user_service.validate_and_get_user(auth_token)

    print user_object
    notification_object=Notification.objects.filter(entity_owner=user_object['username'],is_read=False)
    if notification_object:
        return notification_object
    else:
        return "no object found"