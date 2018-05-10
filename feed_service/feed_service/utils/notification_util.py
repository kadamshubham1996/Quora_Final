from feed_service.db.feed_models.models import Notification
from feed_service.db.feed_models.models import Answer

def get_notification_dict_response(notification_object):
    answer_object = Answer.objects.get(id=notification_object.entity_id)
    dict = {
        'answer': 'is answerd your question answer is',
        'upvote':'is upvoted your answer',
        'downvote':'is downvote your answer'
    }
    if notification_object.entitytype == "answer":
        response_dict ={ 'string': notification_object.byuser_id + dict['answer'] + answer_object.answer_string}
    elif notification_object.entitytype == "upvote":
        response_dict ={'string': notification_object.byuser_id + dict['upvote'] + answer_object.answer_string}
    elif notification_object.entitytype == "downvote":
        response_dict ={ 'string': notification_object.byuser_id + dict['downvote'] +answer_object.answer_string}

    return response_dict