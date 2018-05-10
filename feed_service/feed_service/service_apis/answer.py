from flask import request, jsonify
from flask_restful import Resource

from feed_service.service_apis_handler import answer_post_handler, \
    answer_get_handler
from feed_service.service_apis_handler.answer_get_handler import get_answer_for_question
from feed_service.service_apis_handler.create_notification import \
    create_notification
from feed_service.services import user_service
from feed_service.utils import answer_utils


class Answer(Resource):
    def post(self):
        # import pdb;
        # pdb.set_trace()
        auth_token = request.cookies.get('auth_key')
        print auth_token
        is_valid, user_object = user_service.validate_and_get_user(auth_token)
        print user_object

        username = user_object['username']
        # print username

        if not is_valid:
            return {"success": False, "message": "Invalid User !!"}, 401

        request_data = request.get_json()
        answer_object = answer_post_handler.create_answer(request_data, username)
        response_dict = answer_utils.get_answer_dict(answer_object)
        answer_notification=create_notification(answer_object.question.user_id, answer_object.user_id, answer_object.id, "answer")
        if answer_notification:
            return jsonify({"answer": response_dict})
        else:
            return jsonify("answer not found")
    def get(self, questionId=None):
        if questionId:
            answer_object = answer_get_handler.get_answer_for_question(questionId)

            if answer_object:
                return jsonify({"Answer": get_answer_for_question(questionId)})

            else:
                return {"success": False}
        # request_data = request.args
        #
        # if "questionId" in request_data:
        #     answer_object = answer_get_handler.get_answer_for_question(request_data["questionId"])
        else:
            answer_object = answer_get_handler.get_all_answer()

        answer_objects = [answer_utils.get_answer_dict(x) for x in answer_object]
        return jsonify({"answers": answer_objects})
