from feed_service.db.feed_models.models import Notification
from feed_service.service_apis_handler import question_get_handler
from feed_service.utils.exceptions import InternalServerError


def create_notification(entity_owner, byuser_id, entity_id, entitytype):
    try:
        notification_object = Notification.objects.create(entitytype=entitytype,
                                                          byuser_id=byuser_id,
                                                          entity_id=entity_id,
                                                          entity_owner=entity_owner)
        if notification_object:
            return True
    except:
        raise InternalServerError()
