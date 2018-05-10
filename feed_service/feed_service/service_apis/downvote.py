from flask import request, jsonify
from flask_restful import Resource

from feed_service.service_apis_handler import downvote_post_handler
from feed_service.service_apis_handler.create_notification import \
    create_notification
from feed_service.utils import downvote_utils


class Downvote(Resource):
    def post(self):
        request_data = request.get_json()
        downvote_object = downvote_post_handler.create_downvote(request_data)
        response_dict = downvote_utils.get_downvote_dict(downvote_object)
        notification_object = create_notification(
            downvote_object.answer.user_id, downvote_object.user_id,
            downvote_object.id, "downvote")
        return jsonify({"Downvote": response_dict})
