from flask import request, jsonify
from flask_restful import Resource

from feed_service.service_apis_handler import downvote_post_handler, \
    notification_get_handler
from feed_service.utils import notification_util


class Notification(Resource):
    def get(self):
        request_data = request.get_json()
        notification_object=notification_get_handler.get_notification(request_data)
        if notification_object:
            response_dicts = [notification_util.get_notification_dict_response(x) for x in
                              notification_object]
            print response_dicts
            return jsonify({"notification": response_dicts})
        else:
            return {"success": False}

