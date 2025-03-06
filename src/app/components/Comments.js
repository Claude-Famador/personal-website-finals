"use client";

import { useState, useEffect } from 'react';
import styles from './Comments.module.css';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const API_URL = 'https://claudefamador.pythonanywhere.com//api';

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await fetch(`${API_URL}/comments`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
      // Optionally show error to user
      alert('Failed to load comments. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setComments([...comments, data]);
      setNewComment({ name: '', message: '' });
    } catch (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (comment) => {
    setEditingId(comment.id);
    setNewComment({ name: comment.name, message: comment.message });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/comments/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const updatedComment = await response.json();
      setComments(comments.map(comment => 
        comment.id === editingId ? updatedComment : comment
      ));
      setNewComment({ name: '', message: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error updating comment:', error);
      alert('Failed to update comment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;

    try {
        const response = await fetch(`${API_URL}/comments/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // Remove the comment from the state
            setComments(comments.filter(comment => comment.id !== id));
        } else {
            throw new Error('Failed to delete comment');
        }
    } catch (error) {
        console.error('Error deleting comment:', error);
        alert('Failed to delete comment. Please try again.');
    }
  };

  return (
    <section className={styles.comments} id="comments">
      <h2>Comments</h2>
      
      <form onSubmit={editingId ? handleUpdate : handleSubmit} className={styles.commentForm}>
        <input
          type="text"
          placeholder="Your Name"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          value={newComment.message}
          onChange={(e) => setNewComment({ ...newComment, message: e.target.value })}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : editingId ? 'Update Comment' : 'Post Comment'}
        </button>
        {editingId && (
          <button 
            type="button" 
            onClick={() => {
              setEditingId(null);
              setNewComment({ name: '', message: '' });
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentItem}>
            <h4>{comment.name}</h4>
            <p>{comment.message}</p>
            <span className={styles.date}>
              {new Date(comment.created_at).toLocaleDateString()}
            </span>
            <div className={styles.commentActions}>
              <button onClick={() => handleEdit(comment)}>Edit</button>
              <button onClick={() => handleDelete(comment.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}