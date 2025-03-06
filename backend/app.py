from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client
import os

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize Supabase client
supabase_url = 'https://jmbcwaryfxljzlfapvyg.supabase.co'
supabase_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptYmN3YXJ5ZnhsanpsZmFwdnlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwOTQzMDQsImV4cCI6MjA1NjY3MDMwNH0.V49CmqKrXuaXx_fBqryLSvTDUQIrwyWj_L8jnSl-AkU'
supabase = create_client(supabase_url, supabase_key)

@app.route('/api/comments', methods=['GET', 'OPTIONS'])
def get_comments():
    if request.method == 'OPTIONS':
        return '', 200
    try:
        response = supabase.table('comments').select('*').order('created_at', desc=True).execute()
        return jsonify(response.data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/comments', methods=['POST', 'OPTIONS'])
def add_comment():
    if request.method == 'OPTIONS':
        return '', 200
    try:
        data = request.json
        response = supabase.table('comments').insert({
            'name': data['name'],
            'message': data['message'],
            'created_at': 'now()'
        }).execute()
        return jsonify(response.data[0])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/comments/<int:comment_id>', methods=['PUT', 'OPTIONS'])
def update_comment(comment_id):
    if request.method == 'OPTIONS':
        return '', 200
    try:
        data = request.json
        response = supabase.table('comments').update({
            'name': data['name'],
            'message': data['message']
        }).eq('id', comment_id).execute()
        return jsonify(response.data[0])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/comments/<int:comment_id>', methods=['DELETE', 'OPTIONS'])
def delete_comment(comment_id):
    if request.method == 'OPTIONS':
        return '', 200
    try:
        # Execute the delete operation and check if it was successful
        result = supabase.table('comments').delete().eq('id', comment_id).execute()
        
        # Check if any rows were affected
        if result.data:
            return '', 204
        else:
            return jsonify({'error': 'Comment not found'}), 404
            
    except Exception as e:
        print(f"Delete error: {str(e)}")  # For debugging
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)